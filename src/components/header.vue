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
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
#headerlogo {
  width: 150px;
}
/*  currently not able to overwrite bootstrap style */

#navbar {
  background-color: #223d57;
}
#logofont {
  height: 80px;
}
</style>