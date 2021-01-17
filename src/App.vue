<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div id="app">
    <!--------HEADER-------->
    <Header id="head" />
    <b-row class="no-gutters">
      <b-col sm="1"></b-col>
      <!------ROUTER-VIEW--------->
      <b-col sm="7">
        <router-view id="showcase" />
      </b-col>
      <!-------SHOPPINGLIST-------->
      <b-col sm="3">
        <Shoppinglist id="shlist" />
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>

    <Footer id="footer" />
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
import Header from "./components/header.vue";
import Shoppinglist from "./components/shoppinglist.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Shoppinglist,
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

#showcase {
  background-color: #f3d9a4;

  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
  padding: 20px;
}

#shlist {
  background-color: #f3d9a4;

  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  padding: 20px;
}
</style>
