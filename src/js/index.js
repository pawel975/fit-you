import { DOMelements } from "./base";
import "../scss/base.scss"
import { updateFoodPage } from "./food";
import { updateHomePage } from "./home";
import { updateMeasuresPage } from "./measures";
import { getState, initState } from "./state";


const {navLogo, navHome, navFood, navMotivation, navMeasures, mainHome, mainFood, mainMotivation, mainMeasures, addFoodDiaryTableContainer, emptyUserParamsInfo, homeChooseDayField, homeDailySummaryContainer, addFoodBtn, goToMeasures} = DOMelements 

const updateAllPages = () => {

    updateHomePage();
    updateFoodPage();
    updateMeasuresPage();
}

export const updateView = () => {
    
    // If user params aren't ready display empty state infos in home and food pages 
    if (!getState("areUserParamsReady")) {
        // hide food page content
        addFoodBtn.style.display = "none"
        addFoodDiaryTableContainer.style.display = "none";
        // hide home page content
        homeDailySummaryContainer.style.display = "none";
        homeChooseDayField.style.display = "none";
        // show empty state info
        emptyUserParamsInfo.forEach(field => field.style.display = "flex");
    } else {
        // show food page content
        addFoodBtn.style.display = "initial";
        addFoodDiaryTableContainer.style.display = "initial";
        // show home page content
        homeDailySummaryContainer.style.display = "flex";
        homeChooseDayField.style.display = "flex";
        // hide empty state info
        emptyUserParamsInfo.forEach(field => field.style.display = "none");
    }
}

window.addEventListener("DOMContentLoaded", ()=> {

    if (getState() === null) {
        initState();
    }

    // Init default view
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "none";
    
    // Render all pages scripts
    updateAllPages();

    // Update view based on state settings
    updateView();
})

navLogo.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "none";
})

navHome.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "none";
})

navFood.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "flex";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "none";
})

navMotivation.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "initial";
    mainMeasures.style.display = "none";
})

navMeasures.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "initial";
})

goToMeasures.forEach(button => button.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "initial";
    })
)
