<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div>
    <!--TODO: error catch user inputs-->
    <div id="search">
      <b-form-input
          size="sm"
          class="mr-sm-2"
          placeholder="Looking for something else instead?"
          v-model="userInput"
      ></b-form-input>
    </div>
    <div id="searchresults">
     <div id="searchinfo">
        You searched for <b>{{ key.slice(2) }}</b
    >. These are your results:
     </div>
     <!--FIXME: If no recipe matches user input, show info -->
      <div class="card-wrapper"
           v-for="(result, idx) in mealInfo" :key="idx">
        <router-link :to="`/recipe/${result.idMeal}`" class="router-links">
          <!-- Source for cards: https://bootstrap-vue.org/docs/components/card -->
          <b-card
              v-bind:img-src="result.strMealThumb"
              v-bind:img-alt="result.strMeal"
              img-left
              class="mb-3">
            <b-card-text>
              <h5>{{ result.strMeal }}</h5>
              <!--TODO: when searching for categories, the returning json file doesn't contain any category-/area-tags-->
              <div id="badges" v-show="'result.strCategory'.length < 0"><b-badge id="spacing" pill> {{ result.strCategory }} </b-badge>
                <b-badge pill>  {{ result.strArea }} </b-badge></div>
            </b-card-text>
          </b-card>
        </router-link>
      </div>
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
    },
    userInput: function (){
      this.recipeSearchKey2();
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
    async recipeSearchKey2() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.userInput;
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
#searchinfo {
  padding-top:10px;
  padding-bottom: 10px;
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
  background-color:   #f3e0bb;
  border-color: #f3d9a4;
  border-width: 1px;
}
.mb-3:hover{
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