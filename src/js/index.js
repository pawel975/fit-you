import { DOMelements } from "./base";
import "../scss/base.scss"
import { updateFoodPage } from "./food";
import { updateHomePage } from "./home";
import { updateSettingsPage } from "./settings";
import { getState } from "./state";

const {navLogo, navHome, navFood, navMotivation, navSettings, mainHome, mainFood, mainMotivation, mainSettings, addFoodDiaryTableContainer, addFoodEmptyStateInfo} = DOMelements 

const updateAllPages = () => {
    updateFoodPage();
    updateHomePage();
    updateSettingsPage();
}

const updateView = () => {

    // If user params aren't ready display empty state infos in home and food pages 
    if (!getState("areUserParamsReady")) {
        addFoodDiaryTableContainer.style.display = "none";
        addFoodEmptyStateInfo.style.display = "block";
    } else {
        addFoodDiaryTableContainer.style.display = "initial";
        addFoodEmptyStateInfo.style.display = "none";
    }
}

updateView();

// Init default view
mainHome.style.display = "initial";
mainFood.style.display = "none";
mainMotivation.style.display = "none";
mainSettings.style.display = "none";

navLogo.addEventListener("click", (e) => {
    updateView();
    updateAllPages();
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
})

navHome.addEventListener("click", (e) => {
    updateView();
    updateAllPages();
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
})

navFood.addEventListener("click", (e) => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "flex";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
})

navMotivation.addEventListener("click", (e) => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "initial";
    mainSettings.style.display = "none";
})

navSettings.addEventListener("click", (e) => {
    updateView();
    updateAllPages();
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "initial";
})
