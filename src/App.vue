<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div id="app">
    <!--------HEADER-------->
    <Top />
    <b-row class="no-gutters">
      <b-col sm="1" />
      <!------ROUTER-VIEW / SHOWCASE--------->
      <b-col sm="7">
        <router-view class="segment"
                     id="showcase" />
      </b-col>
      <b-col sm="3">
        <!-------SHOPPING-LIST-------->
        <Shoppinglist class="segment"
                      id="shlist" />
        <!-------LAST VIEWED RECIPE-------->
        <Lastviewed class="segment"
                    id="lastviewed" />
      </b-col>
      <b-col sm="1" />
    </b-row>
    <!-------FOOTER-------->
    <Footer />
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
import Top from "./components/top.vue";
import Shoppinglist from "./components/shoppinglist.vue";
import Footer from "./components/footer.vue";
import Lastviewed from "./components/lastviewedrec.vue";

"use strict";
export default {
  name: "App",
  components: {
    Top,
    Shoppinglist,
    Lastviewed,
    Footer
  },
  beforeMount()
  {
    this.cookiePopup()
  },
  methods: {
    cookiePopup()
    {
      if (this.$cookies.get('cookiePolicySeen') == null)
      {
        this.$bvToast.toast(`🍪Our Website uses Cookies to provide the best user experience.🍪`,
            {
              title: 'Our cookie policy',
              autoHideDelay: 10000,
              variant: 'warning',
              toaster: 'b-toaster-bottom-full'
            });
        this.$cookies.set('cookiePolicySeen', true, '20d');
      }
    }
  }
}
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

.segment {
  background-color: #f3d9a4;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
}

#showcase {
  margin-right: 10px;
}

#shlist {
  margin-left: 10px;
}

#lastviewed {
  margin-left: 10px;
}
</style>
