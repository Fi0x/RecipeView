<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <div>
      <h2>{{ mealName }}</h2>
      <!--Both Chevrons are Scaling Vector Graphics from https://kruxor.com/view/code/1pheD/chevron-left/-->
      <svg
          width="3em"
          height="3em"
          viewBox="0 0 16 16"
          class="chevron"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          v-on:click="previousRecipe"
      >
        <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <img v-bind:src="mealImg" v-bind:alt="mealName" id="carouselimg" />
      <!--Both Chevrons are Scaling Vector Graphics from https://kruxor.com/view/code/1pheD/chevron-right/-->
      <svg
          width="3em"
          height="3em"
          viewBox="0 0 16 16"
          class="chevron"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          v-on:click="nextRecipe"
      >
        <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
     

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
      index: 0,
      mealIDs: [],
      mealName: "",
      mealImg: "",
      mealInstructions: "",
      mealCategory: "",
      mealArea: "",
    };
  },
  beforeMount() {
    this.randomrecipe();
    //state = landingPage
  },
  methods: {
    async previousRecipe() {
      this.index--;
      if (this.index < 0) this.index = this.mealIDs.length - 1;
      await this.recipeByID(this.mealIDs[this.index]);
    },
    async nextRecipe() {
      this.index++;
      if (this.index < this.mealIDs.length)
        await this.recipeByID(this.mealIDs[this.index]);
      else await this.randomrecipe();
    },
    async recipeByID(id) {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
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
        console.error(e); //throws error if promise can't be fulfilled
      }
    },
    async randomrecipe() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
      let mealInfo;

      try {
        await this.axios.get(apiUrl) //promise should await this response
            .then((response) => (mealInfo = response.data.meals[0]));
        if (this.mealIDs.includes(mealInfo.idMeal)) await this.randomrecipe();
        else {
          this.mealIDs.push(mealInfo.idMeal);
          this.mealName = mealInfo.strMeal;
          this.mealImg = mealInfo.strMealThumb;
          this.mealInstructions = mealInfo.strInstructions;
          this.mealCategory = mealInfo.strCategory;
          this.mealArea = mealInfo.strArea;
        }
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

.chevron:hover {
  background-color: #d4ad39;
}
</style>