<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2><b>{{ mealName }}</b></h2>
    <b-row>
      <b-col sm="1" />
      <b-col sm="4">
        <img v-bind:src="mealImg"
             v-bind:alt="mealName"
             id="mealImage" />
        <b-col>
          Like this Recipe? Share it!
          <div>
            <a v-bind:href="twitter"
               target="_blanc">
              <img src="../assets/twitter.png"
                   alt="twitter-icon"
                   class="social-icons" />
            </a>
            <a v-bind:href="facebook"
               target="_blanc">
              <img src="../assets/facebook.png"
                   alt="facebook-icon"
                   class="social-icons" />
            </a>
            <a v-bind:href="email"
               target="_blanc">
              <img src="../assets/email.png"
                   alt="email-icon"
                   class="social-icons" />
            </a>
          </div>
        </b-col>
      </b-col>
      <b-col sm="6">
        <table>
          <thead>
          <tr>
            <th colspan="2">
              <h5>Ingredients</h5>
            </th>
          </tr>
          </thead>
          <tr v-for="(mes, index) in measurements"
              :key="index">
            <td class="measurements">{{ mes }}</td>
            <td class="ingredients">{{ ingredients[index] }}</td>
          </tr>
        </table>
      </b-col>
      <b-col sm="1" />
    </b-row>
    <b-row>
      <b-col sm="1" />
      <b-col>
        <div>
          <h5 class="left-bound">Instructions</h5>
          <ul id="instructions">
            <b-checkbox
                class="listitem"
                v-for="(paragraph, index) in mealInstructions"
                :key="index">
              <li>{{ paragraph }}</li>
            </b-checkbox>
          </ul>
        </div>
      </b-col>
      <b-col sm="1" />
    </b-row>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "RecipeView",
  data: function ()
  {
    return {
      mealName: "",
      mealImg: "",
      mealInstructions: [],
      mealCategory: "",
      mealArea: "",
      measurements: [],
      ingredients: [],
      twitter: "",
      facebook: "",
      email: ""
    };
  },
  props: ['id'],
  watch: {
    id: function ()
    {
      this.recipeById();
    }
  },
  beforeMount()
  {
    this.recipeById();
  },
  methods: {
    async recipeById()
    {
      this.$cookies.set("lastrecipeid", this.id, "3d");
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.id;
      let mealInfo;
      try
      {
        await this.axios.get(apiUrl).then((response) => (mealInfo = response.data["meals"][0]));
        this.mealName = mealInfo["strMeal"];
        this.mealImg = mealInfo["strMealThumb"];
        this.mealInstructions = mealInfo["strInstructions"].split("\r\n").filter((e) => e.trim().length > 0).map((e) => e.trim());
        this.mealCategory = mealInfo["strCategory"];
        this.mealArea = mealInfo["strArea"];
        // Source of Social Icons: see Readme 4
        this.twitter = "http://twitter.com/share?text=Check out this recipe for " + this.mealName + "!&url=https://recipe-view.netlify.app/recipe/" + this.id;
        this.facebook = "http://www.facebook.com/sharer.php?u=https://recipe-view.netlify.app/recipe/" + this.id;
        this.email = "mailto:?subject=Great Recipe&body=Check out this site https://recipe-view.netlify.app/recipe/" + this.id;
        this.ingredients.splice(0);
        this.measurements.splice(0);
        for (let i = 1; i <= 20; i++)
        {
          if (mealInfo["strIngredient" + i] === "") break;
          this.ingredients.push(mealInfo["strIngredient" + i]);
          this.measurements.push(mealInfo["strMeasure" + i]);
        }
      } catch (e)
      {
        console.error(e);
      }
    }
  }
};
</script>
<!--------------------------------STYLE------------------------------------>
<style scoped>
table {
  width: 90%;
}

#mealImage {
  max-width: 100%;
}

#instructions {
  text-align: left;
}

.measurements {
  text-align: right;
  padding-right: 10px;
}

.ingredients {
  text-align: left;
  padding-left: 10px;
}

.left-bound {
  text-align: left;
  padding-left: 35px;
}

.centered {
  text-align: center;
}

.social-icons {
  max-width: 20px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>
