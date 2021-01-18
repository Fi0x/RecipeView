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
      <!--FIXME: filter key object so only the search query gets displayed here-->
      You searched for <b>{{ key }}</b
    >. These are your results:
      <div class="card-wrapper"
           v-for="(result, idx) in mealInfo" :key="idx">
        <router-link :to="`/recipe-${result.idMeal}`" class="router-links">
          <b-card
              v-bind:img-src="result.strMealThumb"
              v-bind:img-alt="result.strMeal"
              img-left
              class="mb-3"
          >
            <b-card-text>
              <h5>{{ result.strMeal }}</h5>
              <!--TODO: when searching for categories, the returning json file doesn't contain any category-/area-tags-->
              <div id="tags">{{ result.strCategory }} {{ result.strArea }}
              </div>
            </b-card-text>
          </b-card>


        </router-link>
      </div>
      <!--TODO: show first ?20? words of instructions next to each meal as a teaser-->

      <!--On click start search for category-->

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
  watch: {
    key: function () {
      this.recipeSearchKey();
    },
    type: function () {
      this.recipeSearchKey();
    }
  },
  beforeMount() {
    this.recipeSearchKey();
  },

  methods: {
    async recipeSearchKey() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/" + this.type + ".php?" + this.key;
      try {
        await this.axios.get(apiUrl).then((response) => (this.mealInfo = response.data.meals));
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

#tags {
  color: black;
}

img {
  max-width: 100px;
}

.router-links{
  text-decoration: none;
  color: #2c3e50;
}

.mb-3 {
  background-color:   #f3d9a4;
  border-style: none;
}

.mb-3:hover{
  background-color: #f3e0bb;
}
</style>