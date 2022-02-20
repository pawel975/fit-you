
export default class FoodOption {
    constructor(id, name, brand, serving, calories, fat, proteins, carbohydrates, servingCount){
        this.id = id
        this.name = name
        this.brand = brand
        this.serving = serving
        this.calories = calories
        this.fat = fat
        this.proteins = proteins
        this.carbohydrates = carbohydrates
        this.servingCount = servingCount
    }

    createMatch(){        
        const singleOption = document.createElement("p");
        singleOption.setAttribute("id", `${this.id}`);
        singleOption.setAttribute("role", "button");
        singleOption.setAttribute("aria-pressed", "false");

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
        foodCalories.textContent = `${this.calories}kcal/100g`;

        singleOption.appendChild(foodName);
        singleOption.appendChild(foodName);
        singleOption.appendChild(foodBrand);
        singleOption.appendChild(foodServing);
        singleOption.appendChild(foodCalories);
        
        return singleOption;
    }

    createMatchDetailsTable(){
        const categories = {
            Portions: this.servingCount,
            Serving: (this.serving).toFixed(1), 
            Calories: (this.calories * (this.serving/100) * this.servingCount).toFixed(1), 
            Carbohydrates: (this.carbohydrates * (this.serving/100) * this.servingCount).toFixed(1),
            Protein: (this.proteins * (this.serving/100) * this.servingCount).toFixed(1),
            Fat: (this.fat * (this.serving/100) * this.servingCount).toFixed(1) 
        }
        const table = document.createElement("table");
        table.setAttribute("id", "food-nutrition")

        for (let i = 0; i < Object.keys(categories).length; i++) {
            const row = document.createElement("tr");
            const nameCol = document.createElement("td");
            const dataCol = document.createElement("td");
            nameCol.textContent = Object.keys(categories)[i];
            dataCol.textContent = `${categories[Object.keys(categories)[i]] + sufix(Object.keys(categories)[i])}`;
            row.appendChild(nameCol);
            row.appendChild(dataCol);
            table.appendChild(row);
        }
        return table;
    } 
}

const sufix = (nutritionType) => {
    let sufix;
    switch(nutritionType){
        case "Calories":
            sufix = "kcal";
            break
        case "Portions":
            sufix = "";
            break
        default:
            sufix = "g";
    }

    return sufix;
}