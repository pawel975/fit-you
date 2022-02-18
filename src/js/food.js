import { DOMelements } from "./base";
import { getCurrentDate } from "./date";
import { createDiaryTable} from "./diaryTable";
import FoodOption from "./foodOption";
import {getState, updateState } from "./state";


window.addEventListener("load", () => {
    
    // clear state in development
    // updateState("userHistory", []);
    
    const {addFoodBtn, addFoodDiaryTableContainer, addFoodServingCount, addFoodMatchesArea, addFoodModal, addFoodSearch, addFoodFinish, addFoodModalClose, addFoodModalBackground, addFoodMatchTable} = DOMelements;
    
    // Get record from user's history in particular day
    const currentDate = getCurrentDate();
    let userDiary = getState("userHistory");
    
    let fetchedMatches = [];
    let matchedFood = [];
    // Food chosen in search area
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
            matchedFood.push(new FoodOption(fdcId, description, brandName, servingSize, calories, fat, proteins, carbs, Number (addFoodServingCount.value)))
        })
    }

    // Get single date records
    const getDayData = (date) => {
        let dayData = getState("userHistory").filter(day => day.date === date)[0];
        return dayData
    }

    // Create date in user diary
    const createDayData = (date) => {
        userDiary.push({
            date: date,
            eatenFood: [],
        });
        updateState("userHistory", userDiary);
    }

    // Create food record in particular day
    const createFoodStateRecord = (date, food, servingCount) => {
        food.servingCount = servingCount;
        let tmpData = getDayData(date);
        tmpData.eatenFood.push(food);
        userDiary.forEach(day => {
            if (day.date === date) day.eatenFood = tmpData.eatenFood;
        })
        updateState("userHistory", userDiary);
    }

    const renderTable = (date) => {
        // Remove existing table
        addFoodDiaryTableContainer.textContent = ""

        // Fill table with records
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
                console.log(option)
                addFoodMatchesArea.childNodes.forEach(option => {
                    option.setAttribute("aria-pressed", "false");
                });
                option.setAttribute("aria-pressed", "true");
                renderMatchDetailsTable(choosedFood);
            })
        })
    }

    // const modifyDayData = (date, propertyToChange, value) => {
    //     let modifiedData = getDayData(date);
    //     modifiedData[propertyToChange] = value;
    //     userDiary[date] = modifiedData;
    // }

    // Create userDiary new day record
    if (!getDayData(currentDate)) {
        createDayData(currentDate);
        updateState("userHistory", userDiary);
    }

    // initalize table on load
    renderTable(currentDate);

    // Handle modal open
    addFoodBtn.forEach(button => {
        choosedFood = undefined;
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
        choosedFood.servingCount = addFoodServingCount.value;
        renderMatchDetailsTable(choosedFood);
    })

    // Handle add food finish
    addFoodFinish.addEventListener("click", (e) => {
        e.preventDefault();
        if (choosedFood) {
            createFoodStateRecord(currentDate, choosedFood, addFoodServingCount.value);
            renderTable(currentDate);
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