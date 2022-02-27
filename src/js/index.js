import { updateHomePage } from "./home";
import {getState, initState, updateState} from './state'
import {getCurrentDate} from "./date"
import { updateSettingsPage } from "./settings";
import { updateFoodPage } from "./food";

window.addEventListener("load", () => {

    // Creates state object if it doesn't exist 
    if (getState() === null) {
        initState();
    } 

    // Checks if there is any actual date in state
    if (getState("activeDate") === "") {
        updateState("activeDate", getCurrentDate());
    }

    updateHomePage();
    updateSettingsPage();
    updateFoodPage();

})

// Change user params
userParamsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateParamsSummary();
})

// Handle modal open
addFoodBtn.forEach(button => {
    button.addEventListener("click", () => {
        choosedFood = undefined; 
        addFoodModal.style.display = "initial";
    })
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
