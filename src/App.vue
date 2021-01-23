<!------------------------------TEMPLATE-------------------------------------->
<template>
  <!--TODO: Add Skeletons to each text-area and image that might get reloaded
https://bootstrap-vue.org/docs/components/skeleton----->

  <div id="app">
    <!--------HEADER-------->
    <Top />
    <b-row class="no-gutters">
      <b-col sm="1"></b-col>
      <!------ROUTER-VIEW--------->
      <b-col sm="7">
        <router-view id="showcase" />
      </b-col>
      <!-------SHOPPINGLIST-------->
      <b-col sm="3">
        <Shoppinglist id="shlist" />
        <Lastviewed id="lastviewed"/>
      </b-col>
      <b-col sm="1"></b-col>
    </b-row>
    <Footer />
  </div>
</template>

<!--------------------------------SCRIPT----------------------------------->
<script>
import Top from "./components/top.vue";
import Shoppinglist from "./components/shoppinglist.vue";
import Footer from "./components/footer.vue";
import Lastviewed from "./components/lastviewedrec.vue";

export default {
  name: "App",
  components: {
    Top,
    Shoppinglist,
    Lastviewed,
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
#lastviewed {
  background-color: #f3d9a4;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
  padding: 20px;
}
</style>
