
export default class FoodOption {
    constructor(id, name, brand, serving, calories, fat, proteins, carbohydrates){
        this.id = id
        this.name = name
        this.brand = brand
        this.serving = serving
        this.calories = calories
        this.fat = fat
        this.proteins = proteins
        this.carbohydrates = carbohydrates
    }

    createMatch(){        
        const singleOption = document.createElement("p");
        singleOption.setAttribute("id", `${this.id}`);

        const foodName = document.createElement("span");
        foodName.setAttribute("id", "name");
        foodName.textContent = `${this.name}, `;
        
        const foodBrand = document.createElement("span");
        foodBrand.setAttribute("id", "brand");
        foodBrand.textContent = `${this.brand === undefined ? "Unknown manufacturer" : String(this.brand).toUpperCase()}, `;
        
        const foodServing = document.createElement("span");
        foodServing.setAttribute("id", "serving");
        foodServing.innertextContentHTML = `${this.serving}g, `;

        const foodCalories = document.createElement("span");
        foodCalories.setAttribute("id", "calories");
        foodCalories.textContent = `${this.calories}kcal`;

        singleOption.appendChild(foodName);
        singleOption.appendChild(foodName);
        singleOption.appendChild(foodBrand);
        singleOption.appendChild(foodServing);
        singleOption.appendChild(foodCalories);
        
        return singleOption;
    }

    createMatchTable(){
        const categories = {
            Serving: this.serving, 
            Calories: this.calories, 
            Fat: this.fat, 
            Carbohydrates: this.carbohydrates,
            Protein: this.proteins
        }

        console.log(Object.keys(categories)[1])

        const table = document.createElement("table");
        table.setAttribute("id", "food-nutrition")

        for (let i = 0; i < Object.keys(categories).length; i++) {
            const row = document.createElement("tr");
            const nameCol = document.createElement("td");
            const dataCol = document.createElement("td");
            nameCol.textContent = Object.keys(categories)[i];
            dataCol.textContent = `${categories[Object.keys(categories)[i]] + (Object.keys(categories)[i] === "calories" ? "kcal" : "g")}`;
            row.appendChild(nameCol);
            row.appendChild(dataCol);
            table.appendChild(row);
        }

        return table;

    } 
}