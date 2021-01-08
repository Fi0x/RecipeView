<template>
  <div id="app">
    <Header id="head" />
    <b-row>
      <b-col sm="8">
        <Carousel id="car" />
      </b-col>
      <b-col sm="4">
        <Shoppinglist id="shlist" />
      </b-col>
    </b-row>
    <RecipeView />
  </div>
</template>

<script>
/* contains script */
import Header from "./components/header.vue";
import Carousel from "./components/carousel.vue";
import Shoppinglist from "./components/shoppinglist.vue";
import RecipeView from "./components/recipeview.vue";

export default {
  name: "App",
  components: {
    Header,
    Carousel,
    Shoppinglist,
    RecipeView,
  },
};
</script>

<style>
/* contains css */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#car {
  background-color: #f3d9a4;
  margin-left: 150px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
}
#shlist {
  background-color: #f3d9a4;
  margin-right: 150px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
}
</style>
