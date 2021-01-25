<!--------------------------------TEMPLATE----------------------------------->
<template>
  <div v-if="mealName.length > 0">
    <div>Your last viewed recipe:</div>
    <router-link :to="`/recipe/${this.recipeID}`"
                 id="link">
      <h5>{{ mealName }}</h5>
      <img v-bind:src="mealImg"
           v-bind:alt="mealName"
           id="mealImg" />
      <div id="badges">
        <b-badge id="spacing"
                 pill>
          {{ mealCategory }}
        </b-badge>
        <b-badge pill>{{ mealArea }}</b-badge>
      </div>
    </router-link>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "LastViewed",
  data: function ()
  {
    return {
      recipeID: "",
      mealName: "",
      mealImg: "",
      mealCategory: "",
      mealArea: ""
    };
  },
  watch: {
    $route(to, from)
    {
      if (from["name"] === "Recipe")
      {
        this.recipeID = from["params"]["id"];
        this.recipeById();
      }
    }
  },
  beforeMount()
  {
    this.recipeID = this.$cookies.get("lastrecipeid");
    if(this.recipeID !== null) this.recipeById();
  },
  methods: {
    async recipeById()
    {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.recipeID;
      let mealInfo;
      try
      {
        await this.axios.get(apiUrl).then((response) => (mealInfo = response.data["meals"][0]));
        this.mealName = mealInfo["strMeal"];
        this.mealImg = mealInfo["strMealThumb"];
        this.mealCategory = mealInfo["strCategory"];
        this.mealArea = mealInfo["strArea"];
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
#mealImg {
  width: 55%;
  max-width: 500px;
}

#badges {
  font-size: 17px;
}

#spacing {
  margin-right: 5px;
}

#link {
  color: #223d57;
}

#link:hover {
  text-decoration: none;
  color: #6c757d;
}
</style>