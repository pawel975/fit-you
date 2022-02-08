
export default class FoodOption {
    constructor(id, name, brand, serving, calories, fat, proteins, carbs){
        this.id = id
        this.name = name
        this.brand = brand
        this.serving = serving
        this.calories = calories
        this.fat = fat
        this.proteins = proteins
        this.carbs = carbs
    }

    createMatch(){        

        const singleOption = document.createElement("p");
        singleOption.setAttribute("id", `${this.id}`);

        const foodName = document.createElement("span");
        foodName.setAttribute("id", "name");
        foodName.innerHTML = `${this.name}, `;
        
        const foodBrand = document.createElement("span");
        foodBrand.setAttribute("id", "brand");
        foodBrand.innerHTML = `${this.brand}, `;
        
        const foodServing = document.createElement("span");
        foodServing.setAttribute("id", "serving");
        foodServing.innerHTML = `${this.serving}, `;

        const foodCalories = document.createElement("span");
        foodCalories.setAttribute("id", "calories");
        foodCalories.innerHTML = `${this.calories}`;

        singleOption.appendChild(foodName);
        singleOption.appendChild(foodName);
        singleOption.appendChild(foodBrand);
        singleOption.appendChild(foodServing);
        singleOption.appendChild(foodCalories);
        
        return singleOption;
    }
}