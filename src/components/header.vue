<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img src="../assets/logoimg.png" alt="logo" id="headerlogo" />
      </b-navbar-brand>
      <b-navbar-brand href="#">
        <img src="../assets/logosimple.png" alt="recipefinder" id="logofont" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">shopping list</b-nav-item>
          <b-nav-item href="#">last recipe</b-nav-item>
          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item
              href="#"
              v-for="(category, index) in categories"
              :key="index"
            >
              {{ category }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Countries" right>
            <b-dropdown-item href="#"> {{}} </b-dropdown-item>
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
  data: function () {
    return {
      categories: [],
    };
  },
  beforeMount() {
    this.loadCats();
  },
  methods: {
    async loadCats() {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
      let catArray;
      try {
        this.response = await this.axios.get(apiUrl).then(
          (response) => catArray.push(response.data.categories.strCategory) //todo: eigentlich will ich das resultat als array speichern den ich dann oben ausgeben kann aber es klappt noch nicht
        );
        console.log(this.catArray);
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

#navbar {
  background-color: #223d57;
}

#logofont {
  height: 80px;
}
</style>