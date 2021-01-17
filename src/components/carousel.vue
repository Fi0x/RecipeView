<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div id="car">
    <div>
      <router-link :to="`/${this.mealIDs[this.index]}`" class="router-links">
      <h2>{{ mealName }}</h2>
      </router-link>
      <!--Both Chevrons are Scaling Vector Graphics from https://kruxor.com/view/code/1pheD/chevron-left/-->
      <div>
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
        <router-link :to="`/${this.mealIDs[this.index]}`">
          <img
            v-bind:src="mealImg"
            v-bind:alt="mealName"
            id="carouselimg"
          />
        </router-link>
        
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
      </div>
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
      currentID: "",
      mealName: "",
      mealImg: "",
      mealInstructions: "",
      mealCategory: "",
      mealArea: "",
    };
  },
  beforeMount() {
    this.firstRecipe();
  },
  methods: {
    async previousRecipe() {
      this.index--;
      if (this.index < 0) {
        this.index = 0;
        await this.randomrecipe();
        this.mealIDs.unshift(this.currentID);
      } else await this.recipeByID(this.mealIDs[this.index]);
    },
    async nextRecipe() {
      this.index++;
      if (this.index >= this.mealIDs.length) {
        await this.randomrecipe();
        this.mealIDs.push(this.currentID);
      } else await this.recipeByID(this.mealIDs[this.index]);
    },
    async recipeByID(id) {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
      let mealInfo;

      try {
        await this.axios.get(apiUrl) //promise should await this response
            .then((response) => (mealInfo = response.data["meals"][0]));
        this.storeData(mealInfo);
      } catch (e) {
        console.error(e); //throws error if promise can't be fulfilled
      }
    },
    async randomrecipe() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
      let mealInfo;

      try {
        await this.axios
            .get(apiUrl) //promise should await this response
            .then((response) => (mealInfo = response.data["meals"][0]));
        if (this.mealIDs.includes(mealInfo["idMeal"])) await this.randomrecipe();
        else {
          this.storeData(mealInfo);
        }
      } catch (e) {
        console.error(e); //throws error if promise can't be fulfilled
      }
    },
    async firstRecipe() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
      let mealInfo;

      try {
        await this.axios.get(apiUrl) //promise should await this response
            .then((response) => (mealInfo = response.data["meals"][0]));
        this.mealIDs.push(mealInfo["idMeal"]);
        this.storeData(mealInfo);

      } catch (e) {
        console.error(e); //throws error if promise can't be fulfilled
      }
    },
    storeData(data) {
      this.currentID = data["idMeal"];
      this.mealName = data["strMeal"];
      this.mealImg = data["strMealThumb"];
      this.mealInstructions = data["strInstructions"];
      this.mealCategory = data["strCategory"];
      this.mealArea = data["strArea"];
    }
  },
};
</script>
<!--------------------------------STYLE----------------------------------->
<style scoped>
img {
  width: 65%;
  max-width: 500px;
}

.router-links {
text-decoration: none;
color: #2c3e50;
}

.chevron {
  max-width: 50px;
}

.chevron:hover {
  background-color: #d4ad39;
}
</style>
