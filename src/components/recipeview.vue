<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>recipe title</h2>
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
import { recipeByIdHelper } from "../helpers/recipeById.js";
export default {
  name: "RecipeView",
  beforeMount() {
    recipeByIdHelper();
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
