import axios from "axios";

export class MealService{
    static serverUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

    static getMealsData(category){
        let url = `${this.serverUrl}${category}`;
        return axios.get(url);
    }

}