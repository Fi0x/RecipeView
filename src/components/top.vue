<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <b-navbar id="navbarAll" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <router-link :to="`/home`"
        ><img src="../assets/logoimg.png" alt="logo" id="headerlogo"
        /></router-link>
      </b-navbar-brand>
      <b-navbar-brand href="#">
        <router-link :to="`/home`">
          <img src="../assets/logosimple.png" alt="recipefinder" id="logofont"
          /></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link :to="`/recipe/${this.lastRecipe}`" class="nav-link">last viewed recipe
            </router-link>
          </b-nav-item>

          <b-nav-item-dropdown text="Categories" right class="drpdown">
            <b-dropdown-item class="dropdownitem"
                href="#"
                v-for="(category, index) in categoryArray"
                :key="index">
              <router-link :to="`/filter/c=${category}`" class="link">
                {{ category }}
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Countries" right class="drpdown">
            <b-dropdown-item  class="dropdownitem"
                href="#"
                v-for="(area, index) in countryArray"
                :key="index">
              <router-link :to="`/filter/a=${area}`" class="link">
                {{ area }}
              </router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="What do you want to eat?"
                v-model="userInput"
                id="searchbar"
            ></b-form-input>
            <router-link :to="`/${this.searchLink}${this.userInput}`">
              <div id="btn-container">
                <b-button size="sm" class="my-2 my-sm-0" type="submit" id="searchbtn">Search</b-button>
              </div>
            </router-link>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<!--------------------------------SCRIPT----------------------------------->
<script>
"use strict";
export default {
  name: "top",
  data: function () {
    return {
      lastRecipe: "",
      userInput: "",
      searchLink: "search/s=",
      catArray: [],
      categoryArray: [],
      areaArray: [],
      countryArray: [],
    };
  },
  created: function () {
    this.$root.$on("lastRecipeUpdate", this.storeID)
  },
  beforeMount() {
    this.loadCats();
    this.loadAreas();
    this.lastRecipe = this.$cookies.get("lastrecipeid");
  },
  methods: {
    storeID(id) {
      this.lastRecipe = id;
    },
    async loadCats() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      let catArray;
      let i;
      try {
        await this.axios.get(apiUrl).then((response) => (catArray = response.data["meals"]));
        for (i = 0; i < catArray.length; i++) {
          this.categoryArray.push(catArray[i]["strCategory"]);
        }
      } catch (e) {
        console.error(e);
      }
    },
    async loadAreas() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
      let areaArray;
      let i;
      try {
        await this.axios.get(apiUrl).then((response) => (areaArray = response.data["meals"]));
        for (i = 0; i < areaArray.length; i++) {
          this.countryArray.push(areaArray[i]["strArea"]);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<!--------------------------------STYLE----------------------------------->
<style scoped>
#headerlogo {
  width: 150px;
}
#navbarAll {
  background-color: #223d57;
}
#logofont {
  height: 80px;
}
#searchbar {
  width: 250px;
  margin: 10px;
}
#searchbtn {
  background-color: #D4AD39;
  color: #223d57;
  border-color:  #D4AD39;
  border-width: 3px;
}
#searchbtn:hover {
  background-color: #f3d9a4;
  border-color: #D4AD39;
}
.drpdown {
  margin-top: 0.5rem;
}
.dropdownitem {
  color: #223d57;
}
.link {
  text-decoration: none;
  color: #223d57;
}
</style>