import { DOMelements } from "./base";

window.addEventListener("load", () => {

    const {addFoodBtn, addFoodMatches, addFoodModal, addFoodSearch, addFoodFinish} = DOMelements;

    // Handle modal open & close
    addFoodBtn.forEach(button => {
        button.addEventListener("click", () => {
            addFoodModal.style.display = "initial";
        })
    })
    addFoodFinish.addEventListener("click", () => {
        addFoodModal.style.display = "none";
    })

    // Handle modal search
    addFoodSearch.addEventListener("input", (e) => {
        e.preventDefault();
        // If search field is empty, disable finish adding button
        if (addFoodSearch.value !== "") {
            addFoodFinish.disabled = false;
        }
    }) 

    
    
    // const apiKey = process.env.API_KEY;
    
    // const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=cheddar%20cheese&dataType=Branded&pageSize=20&pageNumber=1&sortBy=publishedDate&sortOrder=desc&api_key=${apiKey}`
    
    // fetch(baseURL).then(response => response.json()).then(data => {
    //     // Object.assign(state, data.foods);
    //     const {foods} = data;
    //     console.log(foods);
    // });
})