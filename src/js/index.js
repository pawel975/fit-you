import { DOMelements } from "./base";
import "../scss/base.scss"
import { updateFoodPage } from "./food";
import { renderDayData, updateHomePage } from "./home";
import { updateMeasuresPage } from "./measures";
import { getState, initState } from "./state";


const {navLogo, navHome, navFood, navMotivation, navMeasures, mainHome, mainFood, mainMotivation, mainMeasures, addFoodDiaryTableContainer, emptyUserParamsInfo, homeChooseDayField, homeDailySummaryContainer, addFoodBtn, goToMeasures, homeSingleDaysArray} = DOMelements 

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

const displayHomePage = () => {
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "none";
}

const displayFoodPage = () => {
    mainHome.style.display = "none";
    mainFood.style.display = "flex";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "none";
}

const displayMotivationPage = () => {
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "initial";
    mainMeasures.style.display = "none";
}

const displayMeasuresPage = () => {
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainMeasures.style.display = "initial";
}

window.addEventListener("DOMContentLoaded", ()=> {

    if (getState() === null) {
        initState();
    }

    // Init default view
    displayHomePage();
    
    // Render all pages scripts
    updateAllPages();

    // Update view based on state settings
    updateView();
})

navLogo.addEventListener("click", () => {
    updateView();
    updateAllPages();
    displayHomePage();
})

navLogo.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        updateView();
        updateAllPages();
        displayHomePage()
    }
})

navHome.addEventListener("click", () => {
    updateView();
    updateAllPages();
    displayHomePage();
})

navHome.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        updateView();
        updateAllPages();
        displayHomePage()
    }
})

navFood.addEventListener("click", () => {
    updateView();
    updateAllPages();
    displayFoodPage();
})

navFood.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        updateView();
        updateAllPages();
        displayFoodPage()
    }
})

navMotivation.addEventListener("click", () => {
    updateView();
    updateAllPages();
    displayMotivationPage();
})

navMotivation.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        updateView();
        updateAllPages();
        displayMotivationPage();
    }
})

navMeasures.addEventListener("click", () => {
    updateView();
    updateAllPages();
    displayMeasuresPage();
})

navMeasures.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        updateView();
        updateAllPages();
        displayMeasuresPage();
    }
})

goToMeasures.forEach(button => button.addEventListener("click", () => {
    updateView();
    updateAllPages();
    displayMeasuresPage();
    })
)

goToMeasures.forEach(button => button.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            updateView();
            updateAllPages();
            displayMeasuresPage();
        }
    })
)

homeSingleDaysArray.forEach(day => {
    day.addEventListener("keydown", (e) => {
        console.log(e.target)
        if (e.code === "Enter") {
            renderDayData(e)
            // day.parentNode.childNodes[1].setAttribute("checked", true);
        }
    })
})

