<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <b-navbar id="navbarAll" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <router-link to="Home"
          ><img src="../assets/logoimg.png" alt="logo" id="headerlogo"
        /></router-link>
      </b-navbar-brand>
      <b-navbar-brand href="#">
        <router-link to="Home">
          <img src="../assets/logosimple.png" alt="recipefinder" id="logofont"
        /></router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="Recipe" class="nav-link"
              >last viewed recipe</router-link
            ></b-nav-item
          >

          <b-bav-item>
            <router-link to="search" class="nav-link">Search</router-link
            >Search</b-bav-item
          >

          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item
              href="#"
              v-for="(category, index) in categoryArray"
              :key="index"
            >
              {{ category }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Countries" right>
            <b-dropdown-item
              href="#"
              v-for="(area, index) in countryArray"
              :key="index"
            >
              {{ area }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search
            </b-button>
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
  name: "header",
  data: function() {
    return {
      catArray: [],
      categoryArray: [],
      areaArray: [],
      countryArray: [],
    };
  },
  beforeMount() {
    this.loadCats();
    this.loadAreas();
  },
  methods: {
    async loadCats() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
      let catArray;
      let i;
      try {
        this.response = await this.axios
          .get(apiUrl)
          .then((response) => (catArray = response.data.meals));
        for (i = 0; i < catArray.length; i++) {
          this.categoryArray.push(catArray[i].strCategory);
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
        this.response = await this.axios
          .get(apiUrl)
          .then((response) => (areaArray = response.data.meals));
        for (i = 0; i < areaArray.length; i++) {
          this.countryArray.push(areaArray[i].strArea);
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
</style>
