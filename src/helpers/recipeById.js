import axios from "axios";
export var mealInfoById; 
export function recipeByIdHelper() {
    let mealId = "52772";
    let idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId;


    axios.get(idUrl)
        .then(function (response) {
            let mealInfoById;
            let mealName;

            console.log(response);
            mealInfoById = response.data.meals[0];
            console.log(mealInfoById);
            mealName = mealInfoById.strMeal;
            console.log(mealName);
        });

}