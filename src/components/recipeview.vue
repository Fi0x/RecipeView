<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2 class="left-bound">{{ mealName }}</h2>
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="4">
        <img v-bind:src="mealImg" v-bind:alt="mealName" id="mealimage" />
      </b-col>
      <b-col sm="6">
        <table>
          <thead>
            <tr>
              <th colspan="2"><h5>Ingredients</h5></th>
            </tr>
          </thead>
          <!--todo fix this header-->
          <tr v-for="(mes, index) in measurements" :key="index">
            <td class="measurements">{{ mes }}</td>
            <td class="ingredients">{{ ingredients[index] }}</td>
          </tr>
        </table>
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <b-row>
      <b-col sm="1"></b-col>
      <b-col>
        <div>
          <h5 class="left-bound">Instructions</h5>
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
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "RecipeView",
  data: function() {
    return {
      mealName: "",
      mealImg: "",
      mealInstructions: [],
      mealCategory: "",
      mealArea: "",
      measurements: [],
      ingredients: [],
    };
  },
  props: ['id'],
  created: function() {
    // eslint-disable-next-line no-undef
    this.$root.$on("displayRecipe", this.storeId);
  },
  beforeMount() {
    this.recipeById(); 
  },

  methods: {
    storeId(id) {
      this.id = id;
      console.log(this.id);
    },
    async recipeById() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.id;
      let mealInfo;

      try {
        await this.axios
          .get(apiUrl)
          .then((response) => (mealInfo = response.data.meals[0]));

        this.mealName = mealInfo.strMeal;
        this.mealImg = mealInfo.strMealThumb;
        this.mealInstructions = mealInfo.strInstructions
          .split("\r\n")
          .filter((e) => e.trim().length > 0)
          .map((e) => e.trim());
        this.mealCategory = mealInfo.strCategory;
        this.mealArea = mealInfo.strArea;

        this.ingredients.splice(0);
        this.measurements.splice(0);
        for (var i = 1; i <= 20; i++) {
          if (mealInfo["strIngredient" + i] === "") break;
          this.ingredients.push(mealInfo["strIngredient" + i]);
          this.measurements.push(mealInfo["strMeasure" + i]);
        }
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

.measurements {
  text-align: right;
  padding-right: 10px;
}

.ingredients {
  text-align: left;
  padding-left: 10px;
}

.left-bound {
  text-align: left;
  padding-left: 35px;
}

.centered {
  text-align: center;
}
</style>
