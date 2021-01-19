<!--------------------------------TEMPLATE----------------------------------->
<template>
    <div>
        <div>Your last viewed recipe:</div>
        <h5> {{ mealName }} </h5>
        <img v-bind:src="mealImg" v-bind:alt="mealName" id="mealimg">
        <div id="badges"><b-badge id="spacing" pill> {{ mealCategory }} </b-badge>
        <b-badge pill>  {{ mealArea }} </b-badge></div>
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
#mealimg {
    width: 240px;
}
#badges {
    font-size: 17px;
}
#spacing {
    margin-right: 5px;
}
</style>