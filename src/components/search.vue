<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <!--TODO: error catch user inputs
    TODO: make search query work in both searchbars? /do we even need the searchbar 
    over the search results?-->
    <div id="search">
      <b-form-input
        size="sm"
        class="mr-sm-2"
        placeholder="Looking for something else instead?"
        v-model="userInput"
      ></b-form-input>
    </div>
    <div id="searchresults">
      <!--TODO: filter key object so only the search query gets displayed here-->
      You searched for <b>{{ key }}</b
      >. These are your results:
      <ul>
        <li v-for="(result, idx) in mealInfo" :key="idx">
          <router-link :to="`/recipe-${result.idMeal}`" class="router-links">
            <b-card
              v-bind:img-src="result.strMealThumb"
              v-bind:img-alt="result.strMeal"
              v-on:click="recipeClicked(result.idMeal)"
              img-left
              class="mb-3"
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>
            <h5 v-on:click="recipeClicked(result.idMeal)">
              {{ result.strMeal }}
            </h5>

            <div id="tags">{{ result.strCategory }} {{ result.strArea }}</div>
          </router-link>

          <!--TODO: show first ?20? words of instructions next to each meal as a teaser-->

          <!--On click start search for category-->
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
  props: ["type", "key"],
  beforeMount() {
    this.recipeSearchKey();
  },

  methods: {
    recipeClicked(recipeID) {
      this.$root.$emit("displayRecipe", recipeID);
    },
    async recipeSearchKey() {
      let apiUrl =
        "https://www.themealdb.com/api/json/v1/1/" +
        this.type +
        ".php?" +
        this.key;
      try {
        await this.axios
          .get(apiUrl)
          .then((response) => (this.mealInfo = response.data.meals));
      } catch (e) {
        console.error(e);
      }
    },
    async recipeSearchIngredient() {
      //load function asynchronically
      let response;
      let apiUrl =
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=" +
        this.userInput;
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