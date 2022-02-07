import { DOMelements } from "./base";
import FoodOption from "./foodOption";
import { state } from "./state";

window.addEventListener("load", () => {

    const {addFoodBtn, addFoodMatches, addFoodModal, addFoodSearch, addFoodFinish, addFoodModalClose, addFoodModalBackground} = DOMelements;

    let fetchTimeout;
    let fetchedMatches;
    let matchedFood;
    
            
    const fetchFoodData = () => {
        let searchedFood = addFoodSearch.value.replace(/\s+/g, '%20');

        const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchedFood}&dataType=Branded&pageSize=30&pageNumber=1&sortBy=dataType.keyword&sortOrder=desc&api_key=${process.env.API_KEY}`

        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                const {foods} = data;
                fetchedMatches = foods;
                console.log(fetchedMatches)
            })
            .catch(error => console.log(error));
    }

    // const displayFoodMatches = (matches) => {
    //     matches.forEach(match => {
    //         const id = match.fdcId;
    //         const name = match.lowercaseDescription;
    //         const brand = match.brandName;
    //         const serving = match.servingSize;
    //         const calories = match.servingSize;
    //     })
    // }

    // Handle modal open
    addFoodBtn.forEach(button => {
        button.addEventListener("click", () => {
            addFoodModal.style.display = "initial";
            fetchedMatches.forEach(match => {
                // const {fdcId, lowercaseDescription, brandName, servingSize} = match
                // matchedFood(new FoodOption(fdcId, lowercaseDescription, brandName, servingSize))
            })
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

        // Creates delay on request to prevent fetching on every typed letter
        clearTimeout(fetchTimeout);
        fetchTimeout = setTimeout(fetchFoodData, 700);
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