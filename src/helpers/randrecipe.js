export async function randomrecipe() {
    //load function asynchronically
    let response;
    let apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

    try {
      response = await this.axios  // await was before this. axios; it didn't work without async tho
        .get(apiUrl) //promise should await this response
        .then((response) => (this.mealInfo = response.data.meals));
      console.log(response);
      this.mealName = this.mealInfo[0].strMeal;
      this.mealImg = this.mealInfo[0].strMealThumb;
      this.mealInstructions = this.mealInfo[0].strInstructions;
      this.mealCategory = this.mealInfo[0].strCategory;
      this.mealArea = this.mealInfo[0].strArea;

    } catch (e) {
      console.error(e);
    }
}