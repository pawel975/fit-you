import { getDayData } from "./home";
import { DOMelements } from "./base";
import { createDiaryTable} from "./diaryTable";
import FoodOption from "./foodOption";
import {getState, updateState} from "./state";

const {addFoodBtn, addFoodDiaryTableContainer, addFoodServingCount, addFoodMatchesArea, addFoodModal, addFoodSearch, addFoodFinish, addFoodModalClose, addFoodModalBackground, addFoodMatchTable} = DOMelements;

let fetchedMatches = [];
let matchedFood = [];
// Food chosen in search area
let choosedFood;

export const updateFoodPage = () => {

    // initalize table on load
    renderTable(getState("activeDate"));
}

const fetchFoodData = () => {
    let searchedFood = addFoodSearch.value.replace(/\s+/g, '%20');
        
    const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchedFood}&dataType=&pageSize=30&pageNumber=1&sortBy=dataType.keyword&sortOrder=desc&api_key=${process.env.API_KEY}`
    
    fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        const {foods} = data;
        fetchedMatches = foods;
        // filter to get rid of matches without serving size info
        fetchedMatches = fetchedMatches.filter(match => match.servingSize !== undefined)
    })
    .catch(error => console.error(error));
}

const createFoodOption = (fetchedMatches, matchedFood) => {
    fetchedMatches.forEach(match => {
        const {fdcId, description, brandName, servingSize, foodNutrients} = match

        const fat = foodNutrients.filter(nutrient => nutrient.nutrientId === 1004)[0].value
        const proteins = foodNutrients.filter(nutrient => nutrient.nutrientId === 1003)[0].value
        const carbs = foodNutrients.filter(nutrient => nutrient.nutrientId === 1005)[0].value
        const calories = foodNutrients.filter(nutrient => nutrient.nutrientId === 1008)[0].value

        // Push data fetched from API to array in form of FoodOption instances
        matchedFood.push(new FoodOption(fdcId, description, brandName, servingSize, calories, fat, proteins, carbs, Number(addFoodServingCount.value)))
    })
}

// Create food record in particular day
const createFoodStateRecord = (date, food, servingCount) => {
    let userDiary = getState("userHistory");
    let tmpData = getDayData(date);
    food.servingCount = servingCount;
    tmpData.eatenFood.push(food);
    userDiary.forEach(day => {
        if (day.date === date) day.eatenFood = tmpData.eatenFood;
    })
    updateState("userHistory", userDiary);
}

const renderTable = (date) => {
    // Remove existing table
    addFoodDiaryTableContainer.textContent = ""

    // Fill table with records of particular date
    let foodRecords = getDayData(date).eatenFood;
    addFoodDiaryTableContainer.appendChild(createDiaryTable(foodRecords));
}

const renderMatchDetailsTable = (choosedFood) => {
    addFoodMatchTable.insertBefore(choosedFood.createMatchDetailsTable(),addFoodMatchTable.childNodes[2]);
    addFoodMatchTable.removeChild(addFoodMatchTable.childNodes[1])
}

const renderMatches = () => {
    // Clear matches food area 
    addFoodMatchesArea.textContent = "";
    matchedFood = [];

    fetchFoodData();

    // Creates new record on food matches area
    createFoodOption(fetchedMatches, matchedFood);
    matchedFood.forEach(food => addFoodMatchesArea.appendChild(food.createMatch()))

    // Set food meant to be saved to diary (state)
    addFoodMatchesArea.childNodes.forEach(option => {
        option.setAttribute("aria-pressed", "false");
        option.addEventListener("click", () => {
            choosedFood = matchedFood.filter(match => match.id === Number(option.id))[0];
            addFoodMatchesArea.childNodes.forEach(option => {
                option.setAttribute("aria-pressed", "false");
            });
            option.setAttribute("aria-pressed", "true");
            renderMatchDetailsTable(choosedFood);
        })
    })
}


window.addEventListener("load", ()=> {
    
    updateFoodPage();
    
    // Handle modal open
    addFoodBtn.addEventListener("click", () => {
        choosedFood = undefined; 
        addFoodModal.style.display = "initial";
    })
    
    // Handle modal search and fetch data
    addFoodSearch.addEventListener("input", (e) => {
        e.preventDefault();
        matchedFood = [];
        // If search field is empty, disable finish adding button
        if ((addFoodSearch.value).length === 0) {
            addFoodFinish.disabled = true;
        } else {
            addFoodFinish.disabled = false;
        }
    
        renderMatches();
    }) 
    
    addFoodServingCount.addEventListener("input", (e) => {
        e.preventDefault();
    
        // If servings field is empty or less than 1, disable finish adding button
        if ((addFoodServingCount.value).length === 0 || addFoodServingCount.value < 1) {
            addFoodFinish.disabled = true;
        } else {
            addFoodFinish.disabled = false;
        }
        matchedFood.forEach(food => {
            food.servingCount = addFoodServingCount.value;
        }) 
        renderMatchDetailsTable(choosedFood);
    })
    
    // Handle add food finish
    addFoodFinish.addEventListener("click", (e) => {
        e.preventDefault();
        const activeDate = getState("activeDate");
        if (choosedFood) {
            createFoodStateRecord(activeDate, choosedFood, addFoodServingCount.value);
            renderTable(activeDate);
            addFoodModal.style.display = "none";
        }
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

