// Containes all DOM elements and classes into variables

export const DOMelements = {

    // global
    navTabAreas: document.querySelectorAll(".nav-tab-area"),
    mobileMenuOptions: document.querySelector(".mobile-menu"),
    mobileNavElements: document.querySelector(".nav-mobile"),
    desktopNavElements: document.querySelector(".nav-desktop"),
    loader: document.querySelector(".loader"),
    emptyUserParamsInfo: document.querySelectorAll(".empty-user-params-info"),
    goToMeasures: document.querySelectorAll(".go-to-measures"),
    toggleThemeSwitches: document.querySelectorAll('.toggle-theme-switch'),
    sideMenu: document.querySelector(".side-menu"),
    sideMenuBg: document.querySelector(".side-menu-bg"),
    sideMenuContent: document.querySelector(".side-menu-content"),
    sideMenuOpen: document.querySelector(".side-menu-open"),
    sideMenuClose: document.querySelector('.side-menu-close'),

    // index
    navLogo: document.querySelectorAll(".fit-you-logo"),
    navHome: document.querySelectorAll(".nav-home"),
    navFood: document.querySelectorAll(".nav-food"),
    navMotivation: document.querySelectorAll(".nav-motivation"),
    navMeasures: document.querySelectorAll(".nav-measures"),
    mainHome: document.querySelector("#main-home"),
    mainFood: document.querySelector("#main-food"),
    mainMotivation: document.querySelector("#main-motivation"),
    mainMeasures: document.querySelector("#main-measures"),

    // home
    homeChooseDayField: document.querySelector("#choose-day"),
    homeDailySummaryContainer: document.querySelector("#summary-container"),
    homeSingleDaysArray: document.querySelectorAll(".single-day-date"),
    homeProgressBarValue: document.querySelector("#bar-progress"),
    homeProgressCrossedLimit: document.querySelector("#bar-progress-crossed-limit"),
    homeRemainKcal: document.querySelector("#daily-summary div #remain-kcal"),
    homeGoalKcal: document.querySelector("#daily-summary div #goal-kcal"),
    homeCarbo: document.querySelector("#daily-summary #carbohydrates span"),
    homeProteins: document.querySelector("#daily-summary #proteins span"),
    homeFat: document.querySelector("#daily-summary #fat span"),
    chartCtxContainer: document.querySelector("#history-chart"),

    // food
    addFoodBtn: document.querySelector("#add-food"),
    addFoodDiaryTableContainer: document.querySelector("#diary-table"),
    addFoodTableKcalTotal: document.querySelector("#table-summary #kcal-total"),
    addFoodTableProteinTotal: document.querySelector("#table-summary #protein-total"),
    addFoodTableCarboTotal: document.querySelector("#table-summary #carbohydrates-total"),
    addFoodTableFatTotal: document.querySelector("#table-summary #fat-total"),

    // food - modal
    addFoodModal: document.querySelector("#search-food-modal"),
    addFoodSearch: document.querySelector("#search-food"),
    addFoodMatchedFood: document.querySelector("#matched-food"),
    addFoodMatchTable: document.querySelector("#food-details"),
    addFoodMatchesArea: document.querySelector("#food-options"),
    addFoodEmptySearchStateInfo: document.querySelector(".empty-search-food-state-info"),
    addFoodServingCount: document.querySelector("#serving-count"),
    addFoodFinish: document.querySelector("#finish-adding"),
    addFoodModalClose: document.querySelector("#modal-close-container button"),
    addFoodModalBackground: document.querySelector(".modal-background"),

    // motivation
    motivationQuoteText: document.querySelector("#quote"), 
    motivationQuoteAuthor: document.querySelector("#author"),
    motivationQuoteRefresh: document.querySelector("#refresh"), 

    // measures
    userParamsForm: document.querySelector("#user-params"),
    userGender: document.querySelector("#user-params #gender"),
    userAge: document.querySelector("#user-params #age"),
    userHeight: document.querySelector("#user-params #height"),
    userWeight: document.querySelector("#user-params #weight"),
    userGoal: document.querySelector("#user-params #goal"),
    summaryContainer: document.querySelector("#params-summary-container"),
    
}