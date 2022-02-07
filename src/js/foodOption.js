
export default class FoodOption {
    constructor(id, name, brand, serving, calories, fat, proteins, carbs, optionsContainer){
        this.id = id
        this.name = name
        this.brand = brand
        this.serving = serving
        this.calories = calories
        this.fat = fat
        this.proteins = proteins
        this.carbs = carbs
        this.optionsContainer = optionsContainer
    }

    createMatch(){
        const singleOption = document.createElement("p").setAttribute("id", "id");
        const foodName = document.createElement("span").setAttribute("id", "name");
        const foodBrand = document.createElement("span").setAttribute("id", "brand");
        const foodServing = document.createElement("span").setAttribute("id", "serving");
        const foodCalories = document.createElement("span").setAttribute("id", "calories");
        singleOption.appendChild(foodName);
        singleOption.appendChild(foodBrand);
        singleOption.appendChild(foodServing);
        singleOption.appendChild(foodCalories);
        this.optionsContainer.appendChild(singleOption);

    }
}