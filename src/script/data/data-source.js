import _foods from "./foods.js";

class DataSource {
  static searchFood(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php?s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.categories) {
          return Promise.resolve(responseJson.categories);
        } else {
          return Promise.reject(`${keyword} tidak ditemukan!`);
        }
      });
  }
}

export default DataSource;
