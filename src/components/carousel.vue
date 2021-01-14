<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <div>
      <h2>{{ mealName }}</h2>
      <img
        src="../assets/chevron-left.svg"
        alt="chevron-left"
        id="chevron-left"
        class="chevron"
      />
      <img v-bind:src="mealImg" v-bind:alt="mealName" />
      <img
        v-on:click="randomrecipe"
        src="../assets/chevron-right.svg"
        alt="chevron-right"
        id="chevron-right"
        class="chevron"
      />
      <p>Check out this awesome {{ mealName }}</p>

      <!--  <div class="attributes" v-on:click="srcbycat">{{ mealCategory }}</div>
      <div class="attributes" v-on:click="srcbyarea">{{ mealArea }}</div> -->
    </div>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "carousel",
  data: function () {
    return {
      mealInfo: "",
      mealName: "",
      mealImg: "",
      mealInstructions: "",
      mealCategory: "",
      mealArea: "",
      chckoutmealName: "",
    };
  },
  beforeMount() {
    this.randomrecipe();
    //state = landingPage
  },
  methods: {
    async randomrecipe() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
      let mealInfo;

      try {
        this.response = await this.axios
          .get(apiUrl) //promise should await this response
          .then((response) => (mealInfo = response.data.meals[0]));
        this.mealName = mealInfo.strMeal;
        this.chckoutmealName = "Check out this awesome " + this.mealName;
        this.mealImg = mealInfo.strMealThumb;
        this.mealInstructions = mealInfo.strInstructions;
        this.mealCategory = mealInfo.strCategory;
        this.mealArea = mealInfo.strArea;
      } catch (e) {
        console.error(e); //throws error if promise can't be fulfilled
      }
    },

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
};
</script>
<!--------------------------------STYLE----------------------------------->
<style scoped>
img {
  width: 50%;
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
.chevron {
  max-width: 50px;
}
</style>