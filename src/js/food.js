import { DOMelements } from "./base";
import FoodOption from "./foodOption";

window.addEventListener("load", () => {

    const {addFoodBtn, addFoodMatchesArea, addFoodMatchesOptions, addFoodModal, addFoodSearch, addFoodFinish, addFoodModalClose, addFoodModalBackground, addFoodMatchTable} = DOMelements;

    let fetchedMatches = [];
    let matchedFood = [];
    let choosedFood;
            
    const fetchFoodData = () => {
        let searchedFood = addFoodSearch.value.replace(/\s+/g, '%20');
            
        const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchedFood}&dataType=Branded&pageSize=30&pageNumber=1&sortBy=dataType.keyword&sortOrder=desc&api_key=${process.env.API_KEY}`
        
        fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            const {foods} = data;
            fetchedMatches = foods;
            console.log(foods)
        })
        .catch(error => console.log(error));
    }
    
    const createFoodOption = (fetchedMatches, matchedFood) => {
        fetchedMatches.forEach(match => {
            const {fdcId, lowercaseDescription, brandName, servingSize, foodNutrients} = match
    
            const fat = foodNutrients.filter(nutrient => nutrient.nutrientId === 1004)[0].value.toFixed(1)
            const proteins = foodNutrients.filter(nutrient => nutrient.nutrientId === 1003)[0].value.toFixed(1)
            const carbs = foodNutrients.filter(nutrient => nutrient.nutrientId === 1005)[0].value.toFixed(1)
            const calories = foodNutrients.filter(nutrient => nutrient.nutrientId === 1008)[0].value

            matchedFood.push(new FoodOption(fdcId, lowercaseDescription, brandName, servingSize, calories, fat, proteins, carbs, addFoodMatchesArea))
        })
    }

    // Handle modal open
    addFoodBtn.forEach(button => {
        button.addEventListener("click", () => {
            addFoodModal.style.display = "initial";
        })
    })

    // Handle modal search and fetch data
    addFoodSearch.addEventListener("input", (e) => {
        e.preventDefault();

        // If search field is empty, disable finish adding button
        if ((addFoodSearch.value).length === 0) {
            addFoodFinish.disabled = true;
        } else {
            addFoodFinish.disabled = false;
        }

        // Clear matches food area 
        addFoodMatchesArea.innerHTML = "";
        matchedFood = [];

        fetchFoodData();

        // Creates new record on food matches area
        createFoodOption(fetchedMatches, matchedFood);
        matchedFood.forEach(food => addFoodMatchesArea.appendChild(food.createMatch()))

        // Set food meant to be saved to diary (state)
        addFoodMatchesOptions.childNodes.forEach(option => {
            option.addEventListener("click", () => {
                choosedFood = matchedFood.filter(match => match.id === Number(option.id))[0];
                addFoodMatchTable.insertBefore(choosedFood.createMatchTable(),addFoodMatchTable.childNodes[2]);
                addFoodMatchTable.removeChild(addFoodMatchTable.childNodes[1]);
            })
        })
    }) 

    // Handle add food finish
    addFoodFinish.addEventListener("click", () => {
        addFoodModal.style.display = "none";
    })

    // Handle modal close (cross button)
    addFoodModalClose.addEventListener("click", () => {
        addFoodModal.style.display = "none";
    })

    // Handle modal close (click outside modal)
    addFoodModalBackground.addEventListener('click', () => {
        addFoodModal.style.display = "none";
    })
})