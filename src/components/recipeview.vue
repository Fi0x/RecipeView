<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>{{ mealName }}</h2>
    <!--DOESN'T WORK ATM FOR SOME REASON-->
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="4">
        <img v-bind:src="mealImg" v-bind:alt="mealName" id="mealimage"/>
      </b-col>
      <b-col sm="6">
        <h5>Ingredients</h5>
        <table>
          <tr>
            <td>measurements</td>
            <td>ingredientName</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <div>
      <h5>Instructions</h5>
      <ul id="instructions">
        <b-checkbox
          class="listitem"
          v-for="(paragraph, index) in mealInstructions"
          :key="index"
        >
          <li>
            {{ paragraph }}
          </li>
        </b-checkbox>
      </ul>
    </div>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "RecipeView",
  data: function () {
    return {
      mealName: "",
      mealImg: "",
      mealInstructions: [],
      mealCategory: "",
      mealArea: "",
    };
  },
  beforeMount() {
    this.recipeById();
  },

  methods: {
    async recipeById() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"; //Todo: Id has to be interchangeable; need to work with vue router
      let mealInfo;

      try {
        this.response = await this.axios
            .get(apiUrl) //promise should await this response
            .then((response) => (mealInfo = response.data.meals[0]));

        this.mealName = mealInfo.strMeal;
        this.mealImg = mealInfo.strMealThumb;
        this.mealInstructions = mealInfo.strInstructions
          .split("\r\n")
          .filter((e) => e.trim().length > 0)
          .map((e) => e.trim());
        this.mealCategory = mealInfo.strCategory;
        this.mealArea = mealInfo.strArea;
      } catch (e) {
        console.error(e); //throws error if promise can't be fulfilled
      }
    },
  },
};
</script>
<!--------------------------------STYLE------------------------------------>
<style scoped>
table {
  width: 90%;
}

#mealimage {
  max-width: 100%;
}
#instructions {
  text-align: left;
}
</style>
