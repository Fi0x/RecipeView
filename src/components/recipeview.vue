<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>{{ mealName }}</h2>
    <!--DOESN'T WORK ATM FOR SOME REASON-->
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="4">
        <img src="../assets/logoimg.png" alt="dummy-image" id="mealimage" />
      </b-col>
      <b-col sm="6">
        <h5>Ingredients</h5>
        <table>
          <tr>
            <td>measurement</td>
            <td>ingredientName</td>
          </tr>
        </table>
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <div>
      <h5>Instructions</h5>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "RecipeView",
    data: function () {
    return {
      mealInfo: "",
      mealName: "",
      mealImg: "",
      mealInstructions: "",
      mealCategory: "",
      mealArea: "",
    };
  },
  beforeMount() {
    this.recipeById();
  },
  methods: {
    async recipeById() {
      let apiUrl =
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
      // mealId needs to be interchangeable later and should work with vue-router
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
        console.error(e);   //throws error if promise can't be fulfilled
      }
    },
  },
};
</script>
<!--------------------------------STYLE------------------------------------>
<style scoped>
table {
  width: 90%;
}
#mealimage {
  max-width: 100%;
}
</style>
