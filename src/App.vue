<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div id="app">
    <Header id="head" />
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="7">
        <Carousel id="car" />
      </b-col>
      <b-col sm="3">
        <Shoppinglist id="shlist" />
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="7">
        <RecipeView id="recipeview" />
        </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <b-row>
      <b-col sm="1"></b-col>
      <b-col><Search /></b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <Footer />
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
import Header from "./components/header.vue";
import Carousel from "./components/carousel.vue";
import Shoppinglist from "./components/shoppinglist.vue";
import RecipeView from "./components/recipeview.vue";
import Search from "./components/search.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Carousel,
    Shoppinglist,
    RecipeView,
    Search,
    Footer,
  },
};
</script>
<!--------------------------------STYLE----------------------------------->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#car {
  background-color: #f3d9a4;

  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
}
#shlist {
  background-color: #f3d9a4;

  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
}
#recipeview {
    background-color: #f3d9a4;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>
