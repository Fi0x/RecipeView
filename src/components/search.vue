<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <!-- todo dummy searchbar for development. 
Should be exported to header.vue later.-->
    <!--todo error catch user inputs-->
    <div id="search">
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Search"
        v-model="userInput"
      ></b-form-input>
      <b-button
        size="sm"
        class="my-2 my-sm-0"
        type="submit"
        v-on:click="recipesearch"
        >Search
      </b-button>
    </div>
    <div id="searchresults">
      You searched for PLACEHOLDER {{}} These are your results:
      <ul>
        <li v-for="(result, idx) in mealInfo" :key="idx">
          <img v-bind:src="result.strMealThumb" v-bind:alt="result.strMeal" v-on:click="recipeClicked(result.idMeal)"/>
          <h5 v-on:click="recipeClicked(result.idMeal)">{{ result.strMeal }}</h5>
          <div id="tags">{{ result.strCategory }} {{ result.strArea }}</div><!--On click start search for category-->
        </li>
      </ul>
    </div>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "search",
  data: function () {
    return {
      userInput: "",
      mealInfo: "",
    };
  },

  methods: {
    recipeClicked(recipeID){
      this.$root.$emit('displayRecipe', recipeID)
    },
    async recipesearch() {
      //load function asynchronically
      let response;
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.userInput;
      try {
        response = await this.axios
          .get(apiUrl) //promise should await this response
          .then((response) => (this.mealInfo = response.data.meals));
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<!--------------------------------STYLE----------------------------------->
<style scoped>
#searchresults {
  text-align: left;
}

img {
  max-width: 100px;
}
</style>