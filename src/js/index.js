import { DOMelements } from "./base";
import "../scss/base.scss"
import { updateFoodPage } from "./food";
import { updateHomePage } from "./home";
import { updateSettingsPage } from "./settings";
import { getState, initState } from "./state";


const {navLogo, navHome, navFood, navMotivation, navSettings, mainHome, mainFood, mainMotivation, mainSettings, addFoodDiaryTableContainer, emptyUserParamsInfo, homeChooseDayField, homeDailySummaryContainer, addFoodBtn, goToMeasures} = DOMelements 

const updateAllPages = () => {
    updateFoodPage();
    updateHomePage();
    updateSettingsPage();
}

export const updateView = () => {

    if (getState() === null) {
        initState();
    }
    
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

// Init default view
mainHome.style.display = "initial";
mainFood.style.display = "none";
mainMotivation.style.display = "none";
mainSettings.style.display = "none";

updateAllPages();
updateView();

navLogo.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
})

navHome.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
})

navFood.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "flex";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
})

navMotivation.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "initial";
    mainSettings.style.display = "none";
})

navSettings.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "initial";
})

goToMeasures.forEach(button => button.addEventListener("click", () => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "initial";
    })
)
