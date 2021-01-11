<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <h2>Suggested Recipe: {{ mealName }}</h2>

    <div>
      <img v-bind:src="mealImg" v-bind:alt="mealName" />
      <button v-on:click="loadrecipe">load new random recipe</button>
      <p>Check out this awesome {{ mealName }}</p>
      <!--  <div class="attributes" v-on:click="srcbycat">{{ mealCategory }}</div>
      <div class="attributes" v-on:click="srcbyarea">{{ mealArea }}</div> -->
      <h5>Ingredients</h5>

      <h5>Instructions</h5>
      <p>{{ mealInstructions }}</p>
    </div>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
import {randomrecipe} from "../helpers/randrecipe.js"
export default {
  name: "carousel",
  data: function () {
    return {
      // eslint-disable-next-line no-unused-labels
      mealInfo: "",
      mealName: "",
      mealImg: "",
      mealInstructions: "",
      mealCategory: "",
      mealArea: "",
    };
  },
  beforeMount() {
    randomrecipe();
    //state = landingPage
  },
  methods: {
     loadrecipe() {
     randomrecipe ();
    /*   async srcbycat() {
      //search meal by clicking on category tag
      // eslint-disable-next-line no-unused-vars
      let response;
      let apiUrl =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

      try {
        response = await this.axios
          .get(apiUrl)
          .then((response) => (this.category = response.data.meals));
        this.mealName = this.category[0].strMeal; //OTHER OPTION which is probably better: for loop in vue (bla in blas)
        this.mealImg = this.category[0].strMealThumb;
        //state = categoryView
      } catch (e) {
        console.error(e);
      }
    },
  },
      async srcbyarea() {
      //search meal by clicking on category tag
      // eslint-disable-next-line no-unused-vars
      let response;
      let apiUrl =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

      try {
        response = await this.axios
          .get(apiUrl)
          .then((response) => (this.category = response.data.meals));
        this.mealName = this.category[0].strMeal; //OTHER OPTION which is probably better: for loop in vue (bla in blas)
        this.mealImg = this.category[0].strMealThumb;
        //state = categoryView
      } catch (e) {
        console.error(e);
      }
    },
  
  */

    //computed: {
    //  ingredCounter: function() {
    //  let i = 1;
    //     return this.mealIngredients.push("'this.mealInfo[0].strIngredients' + [i])").then (i++); //side effects = original array is mutated which is bad practice
    //  }
    //
  },
  }
}
</script>
<!--------------------------------STYLE----------------------------------->
<style scoped>
img {
  width: 40%;
  max-width: 500px;
}
.attributes {
  background-color: gray;
  color: white;
  display: inline;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px;
}
</style>