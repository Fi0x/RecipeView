<!--------------------------------TEMPLATE----------------------------------->
<template>
    <div>
        <h2>Your last viewed recipe</h2>
        <h3> {{ mealName }} </h3>
        <img v-bind:src="mealImg" v-bind:alt="mealName">
        <div> {{ mealCategory }} {{ mealArea }} </div>
    </div>
</template>


<!--------------------------------SCRIPT----------------------------------->
<script>
export default {
    name: "LastViewed",
    data: function () {
    return{
        mealName:"",
        mealImg:"",
        mealCategory:"",
        mealArea:"",
    }
},
beforeMount() {
    this.recipeById();
},
methods: {
         async recipeById() {
             let id = this.$cookies.get("lastrecipeid");
            let apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
             let mealInfo;
        try {
            await this.axios.get(apiUrl).then((response) => (mealInfo = response.data["meals"][0]));
            this.mealName = mealInfo["strMeal"];
            this.mealImg = mealInfo["strMealThumb"];
            this.mealCategory = mealInfo["strCategory"];
            this.mealArea = mealInfo["strArea"];
        } catch (e) {
            console.error(e);
        }
}
}
}
</script>

<!--------------------------------STYLE----------------------------------->
<style scoped>


</style>