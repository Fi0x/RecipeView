<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <div id="search">
      <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Looking for something else instead?"
          v-model="userInput" />
    </div>
    <div id="searchResults">
      <div id="searchInfo">Search-results:</div>
      <div v-if="mealInfo != null">
        <div class="card-wrapper"
             v-for="(result, idx) in mealInfo"
             :key="idx">
          <router-link :to="`/recipe/${result['idMeal']}`"
                       class="router-links">
            <b-card
                v-bind:img-src="result['strMealThumb']"
                v-bind:img-alt="result['strMeal']"
                img-left
                class="mb-3">
              <b-card-text>
                <h5>{{ result['strMeal'] }}</h5>
                <div id="badges">
                  <b-badge id="spacing"
                           pill
                           v-if="result['strCategory'] != null">
                    {{ result['strCategory'] }}
                  </b-badge>
                  <b-badge pill
                           v-if="result['strArea']">
                    {{ result['strArea'] }}
                  </b-badge>
                </div>
              </b-card-text>
            </b-card>
          </router-link>
        </div>
      </div>
      <div v-else>We are sorry to inform you that no recipes match your search. Maybe you can try something else!</div>
    </div>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "search",
  data: function ()
  {
    return {
      userInput: "",
      mealInfo: ""
    };
  },
  props: ["type", "searchKey"],
  watch: {
    searchKey: function ()
    {
      this.recipeSearch(this.type + ".php?" + this.searchKey)
    },
    userInput: function ()
    {
      this.recipeSearch("search.php?s=" + this.userInput);
    }
  },
  beforeMount()
  {
    this.recipeSearch(this.type + ".php?" + this.searchKey);
  },
  methods: {
    async recipeSearch(endpoint)
    {
      try
      {
        await this.axios.get("https://www.themealdb.com/api/json/v1/1/" + endpoint).then((response) => (this.mealInfo = response.data["meals"]))
      } catch (e)
      {
        console.error(e);
      }
    }
  }
};
</script>
<!--------------------------------STYLE----------------------------------->
<style scoped>
#searchResults {
  text-align: left;
}
#searchInfo {
  padding-top: 10px;
  padding-bottom: 10px;
}
#tags {
  color: black;
}
img {
  max-width: 100px;
}
.router-links {
  text-decoration: none;
  color: #2c3e50;
}
.mb-3 {
  background-color: #f3e0bb;
  border-color: #f3d9a4;
  border-width: 1px;
}
.mb-3:hover {
  border-left-color: #2c3e50;
  border-style: solid;
  border-left-width: 10px;
}
#badges {
  font-size: 17px;
}
#spacing {
  margin-right: 5px;
}
</style>