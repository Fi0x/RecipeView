<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div id="footer">
    <div>
      <img src="../assets/logosimple.png"
           alt="recipefinder"
           id="logoimg" />
      is a Vue-js-based Single-Page-Application.
    </div>
    <div>© 2021 Felix Pechtl and Sophia Ochs</div>
    <div>powered by
      <a href="https://themealdb.com"
         target="_blank">
        themealdb
      </a>
    </div>
  </div>
</template>
<!--------------------------------STYLE----------------------------------->
<style scoped>
#footer {
  background-color: #223d57;
  color: #FFFFFF80;
  padding-top: 15px;
  padding-bottom: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 150px;
  width: 100%;
  overflow: hidden;
}

#logoimg {
  height: 55px;
}

#footer a {
  color: #D4AD39;
}
</style>