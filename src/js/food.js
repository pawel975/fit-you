import { DOMelements } from "./base";
import FoodOption from "./foodOption";
import { state } from "./state";

window.addEventListener("load", () => {

    const {addFoodBtn, addFoodMatches, addFoodModal, addFoodSearch, addFoodFinish, addFoodModalClose, addFoodModalBackground} = DOMelements;

    const controller = new AbortController();
    const {signal} = controller;

    let fetchTimeout;
    let fetchedMatches = [];
    let matchedFood = [];
            
    const fetchFoodData = () => {
        
        let searchedFood = addFoodSearch.value.replace(/\s+/g, '%20');
        console.log(searchedFood)

        const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchedFood}&dataType=Branded&pageSize=30&pageNumber=1&sortBy=dataType.keyword&sortOrder=desc&api_key=${process.env.API_KEY}`

        fetch(baseURL, {signal})
            .then(response => response.json())
            .then(data => {
                const {foods} = data;
                fetchedMatches = foods;
                console.log(fetchedMatches)
            })
            .catch(error => console.log(error));
    }

    const createFoodComponent = (fetchedMatches, matchedFood) => {
        fetchedMatches.forEach(match => {
            const {fdcId, lowercaseDescription, brandName, servingSize, foodNutrients} = match
    
            const fat = foodNutrients.filter(nutrient => nutrient.nutrientId === 1004).value
            const proteins = foodNutrients.filter(nutrient => nutrient.nutrientId === 1003).value
            const carbs = foodNutrients.filter(nutrient => nutrient.nutrientId === 1005).value
            const calories = foodNutrients.filter(nutrient => nutrient.nutrientId === 1008).value

            matchedFood.push(new FoodOption(fdcId, lowercaseDescription, brandName, servingSize, calories, fat, proteins, carbs, addFoodMatches))
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
        controller.abort();
        // If search field is empty, disable finish adding button
        if ((addFoodSearch.value).length === 0) {
            addFoodFinish.disabled = true;
        } else {
            addFoodFinish.disabled = false;
        }

        // Clear matches food area 
        addFoodMatches.innerHTML = "";
        matchedFood = [];

        // Creates delay on request to prevent fetching on every typed letter
        clearTimeout(fetchTimeout);
        fetchTimeout = setTimeout(fetchFoodData, 0);

        // Creates new record on food matches area
        createFoodComponent(fetchedMatches, matchedFood);
        matchedFood.forEach(food => addFoodMatches.appendChild(food.createMatch()))
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
    
    console.log(addFoodMatches)
})