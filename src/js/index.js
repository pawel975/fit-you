import { DOMelements } from "./base";
import "../scss/base.scss"
import { updateFoodPage } from "./food";
import { updateMeasuresPage } from "./measures";
import { updateHomePage } from "./home";
import { getState, initState } from "./state";
import { makeAreaTabable } from "./tabing";

const {navLogo, navHome, navFood, navMotivation, navMeasures, navTabAreas, mainHome, mainFood, mainMotivation, mainMeasures, addFoodDiaryTableContainer, emptyUserParamsInfo, homeChooseDayField, homeDailySummaryContainer, addFoodBtn, goToMeasures, mobileNavElements, desktopNavElements, sideMenu} = DOMelements 

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

const changeTabPanelSelection = (e, choosedTab) => {

    // If event is passed in then reselect item in nav (prevents Logo from being selected)
    if (e.target) {
        const navBar = e.target.parentNode;
        [...navBar.children].forEach(tab => {
            tab.setAttribute("aria-selected", false);
        })
        choosedTab.setAttribute("aria-selected", true);
    }
}

// changes tabing area to being tabable or not
const manageNavTabing = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 800) {
        desktopNavElements.style.visibility = "hidden";
        mobileNavElements.style.visibility = "visible";
        sideMenu.style.visibility = "visible";
    } else {
        desktopNavElements.style.visibility = "visible";
        mobileNavElements.style.visibility = "hidden";
        sideMenu.style.visibility = "hidden";
    }
}

window.addEventListener("DOMContentLoaded", () => {

    if (getState() === null) {
        initState();
    }

    // Init default view
    displayHomePage();
    
    // Render all pages scripts
    updateAllPages();

    // Update view based on state settings
    updateView();

    // Make roving tabing feature in control areas
    navTabAreas.forEach(area => {
        if (area.style.display !== "none") {
            makeAreaTabable(area);
        }
    })
    makeAreaTabable(homeChooseDayField);

    // Enable tabing for visible nav and disables for other one
    manageNavTabing();
    window.addEventListener("resize", manageNavTabing)
    
})

navLogo.forEach(logo => {
    
    logo.addEventListener("click", () => {
        updateView();
        updateAllPages();
        displayHomePage();
        changeTabPanelSelection(navHome);
    })

    logo.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            updateView();
            updateAllPages();
            displayHomePage()
            changeTabPanelSelection(navHome);
        }
    })
})

navHome.forEach(home => {
    home.addEventListener("click", (e) => {
        updateView();
        updateAllPages();
        displayHomePage();
        changeTabPanelSelection(e, e.target);
    })
})

navFood.forEach(food => {
    food.addEventListener("click", (e) => {
        updateView();
        updateAllPages();
        displayFoodPage();
        changeTabPanelSelection(e, e.target);
    })
})

navMotivation.forEach(motivation => {
    motivation.addEventListener("click", (e) => {
        updateView();
        updateAllPages();
        displayMotivationPage();
        changeTabPanelSelection(e, e.target);
    })
})

navMeasures.forEach(measures => {
    measures.addEventListener("click", (e) => {
        updateView();
        updateAllPages();
        displayMeasuresPage();
        changeTabPanelSelection(e, e.target);
    })
})

goToMeasures.forEach(button => button.addEventListener("click", () => {
        updateView();
        updateAllPages();
        displayMeasuresPage();
    })
)



