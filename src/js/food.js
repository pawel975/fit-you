import { getDayData } from "./home";
import { DOMelements } from "./base";
import { createDiaryTable} from "./diaryTable";
import FoodOption from "./foodOption";
import {getState, updateState} from "./state";
import "regenerator-runtime/runtime.js";
import { makeAreaTabable } from "./tabing";
import { trapFocus } from "./trapFocus";

const {addFoodBtn, addFoodDiaryTableContainer, addFoodServingCount, addFoodMatchesArea, addFoodMatchedFood, addFoodEmptySearchStateInfo, addFoodModal, addFoodSearch, addFoodFinish, addFoodModalClose, addFoodModalBackground, addFoodMatchTable, loader} = DOMelements;

let fetchedMatches = [];
let matchedFood = [];
// Food chosen in search area
let choosedFood;

export const updateFoodPage = () => {

    // initalize table on load
    renderTable(getState("activeDate"));
    
}

const fetchFoodData = async () => {
    let searchedFood = addFoodSearch.value.replace(/\s+/g, '%20');
        
    const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchedFood}&dataType=&pageSize=50&pageNumber=1&sortBy=&api_key=${process.env.API_KEY}`;
    
    addFoodEmptySearchStateInfo.style.display = "none";
    loader.style.display = "initial";
    
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        const { foods } = data;
        // filter to get rid of matches without serving size info
        fetchedMatches = foods.filter(match => match.servingSize !== undefined);
        loader.style.display = "none"
    } catch (error) {
        return console.error(error);
    }
}

const createFoodOption = (fetchedMatches, matchedFood) => {

    if (fetchedMatches.length === 0) return;

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

// Create food record in particular day to state
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

const renderMatches = async () => {
    // Clear matches food area 
    addFoodMatchesArea.textContent = "";
    matchedFood = [];
    choosedFood = undefined;

    await fetchFoodData();

    updateSearchState();

    // Creates new record on food matches area
    createFoodOption(fetchedMatches, matchedFood);
    matchedFood.forEach(food => addFoodMatchesArea.appendChild(food.createMatch()))

    // Check if there are any matched food
    if (addFoodMatchesArea.childNodes.length){

        // Make first matched food from matches area tabable
        makeAreaTabable(addFoodMatchesArea);
        addFoodMatchesArea.children[0].setAttribute("tabindex", "0");
    
        // Set food meant to be saved to diary (state)
        addFoodMatchesArea.childNodes.forEach(option => {
            option.setAttribute("aria-selected", false);
            option.addEventListener("click", () => {
                choosedFood = matchedFood.filter(match => match.id === Number(option.id))[0];

                if (choosedFood) {
                    addFoodFinish.disabled = false;
                } else {
                    addFoodFinish.disabled = true;
                }

                addFoodMatchesArea.childNodes.forEach(option => {
                    option.setAttribute("aria-selected", false);
                });
                option.setAttribute("aria-selected", true);
                renderMatchDetailsTable(choosedFood);
            })
        })
    }

}

const clearAddFoodModal = () => {
    addFoodSearch.value = "";
    addFoodMatchesArea.textContent = "";
    addFoodServingCount.value = 1;
    fetchedMatches = [];
    choosedFood = [];
    updateSearchState();
}

const updateSearchState = () => {
    if (fetchedMatches.length === 0 || addFoodSearch.value.length === 0) {
        addFoodEmptySearchStateInfo.style.display = "block";
        addFoodMatchedFood.style.display = "none";
        addFoodMatchTable.style.display = "none";
        loader.style.display = "none"
    } else {
        addFoodEmptySearchStateInfo.style.display = "none";
        addFoodMatchedFood.style.display = "initial";
        addFoodMatchTable.style.display = "flex";
    }
}

// diables scroll on body
const disableScroll = () => {
    document.body.classList.add("disable-scroll");
}

// enables scroll on body
const enableScroll = () => {
    document.body.classList.remove("disable-scroll");
}

window.addEventListener("DOMContentLoaded", ()=> {
    
    updateFoodPage();
    
    // Handle modal open
    addFoodBtn.addEventListener("click", () => {
        choosedFood = undefined; 
        addFoodModal.style.display = "initial";
        document.body.classList.add("disable-scroll");
        
        // Traps focus into modal
        trapFocus(addFoodModal, 1);
    })
    
    // Handle modal search and fetch data
    addFoodSearch.addEventListener("input", async (e) => {
        e.preventDefault();
        matchedFood = [];
        // If search field is empty, disable finish adding button
        if ((addFoodSearch.value).length === 0 || !choosedFood) {
            addFoodFinish.disabled = true;
        } else {
            addFoodFinish.disabled = false;
        }
    
        await renderMatches();

        // Traps focus into modal
        trapFocus(addFoodModal, 1);
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
        clearAddFoodModal();

        disableScroll();
    })
    
    // Handle modal close (cross button)
    addFoodModalClose.addEventListener("click", () => {
        addFoodModal.style.display = "none";
        clearAddFoodModal();

        enableScroll();
    })
    
    // Handle modal close (click outside modal)
    addFoodModalBackground.addEventListener('click', () => {
        addFoodModal.style.display = "none";
        clearAddFoodModal();

        enableScroll();
    })

})

