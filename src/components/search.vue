<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <!--dummy searchbar for development. 
Should be exported to header.vue later.-->
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
      </b-button
      >
    </div>
    <div id="searchresults">
      You searched for PLACEHOLDER {{}} These are your results:
      <ul>
        <li v-for="result in mealInfo" :key="result.i">
          <img v-bind:src="mealImg" v-bind:alt="mealName"/>
          <h5>{{ mealName }}</h5>
          <div id="tags">{{ mealCategory }} {{ mealArea }}</div>
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
      mealName: "",
      mealImg: "",
      mealCategory: "",
      mealArea: "",
    };
  },

  methods: {
    async recipesearch() {
      //load function asynchronically
      let response;
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.userInput;
      try {
        response = await this.axios
            .get(apiUrl) //promise should await this response
            .then((response) => (this.mealInfo = response.data.meals));
        console.log(response);
        let i = 0; // placeholder since for-loop doesn't work properly at the current moment BUG BUG BUG
        this.mealName = this.mealInfo[i].strMeal;
        this.mealImg = this.mealInfo[i].strMealThumb;
        this.mealCategory = this.mealInfo[i].strCategory;
        this.mealArea = this.mealInfo[i].strArea;
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