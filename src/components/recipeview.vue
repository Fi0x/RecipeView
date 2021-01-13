<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>{{ mealName }}</h2>
    <!--DOESN'T WORK ATM FOR SOME REASON-->
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="4">
        <img v-bind:src="mealImg" v-bind:alt="mealName" id="mealimage" />
      </b-col>
      <b-col sm="6">
        <h5>Ingredients</h5>
        <table>
          <tr>
            <td>measurement</td>
            <td>ingredientName</td>
          </tr>
        </table>
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <div>
      <h5>Instructions</h5>
      <div> 
{{mealInstructions}}
      </div>
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
      mealInfo: "",
      mealName: "",
      mealImg: "",
      mealInstructions: "",
      mealCategory: "",
      mealArea: "",
    };
  },
  beforeMount() {
    this.recipeById();
  },
  methods: {
    async recipeById() {
      let apiUrl =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
      // mealId needs to be interchangeable later and should work with vue-router
      let mealInfo;

      try {
        this.response = await this.axios
          .get(apiUrl) //promise should await this response
          .then((response) => (mealInfo = response.data.meals[0]));
        this.mealName = mealInfo.strMeal;
        this.mealImg = mealInfo.strMealThumb;
        this.mealInstructions = mealInfo.strInstructions;
        this.mealCategory = mealInfo.strCategory;
        this.mealArea = mealInfo.strArea;
      } catch (e) {
        console.error(e);   //throws error if promise can't be fulfilled
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
</style>
