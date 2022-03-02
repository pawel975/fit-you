// Containes all DOM elements and classes into variables

export const DOMelements = {
    // global
    emptyUserParamsInfo: document.querySelectorAll(".empty-user-params-info"),
    goToMeasures: document.querySelector("#go-to-measures"),
    // index
    navLogo: document.querySelector("#fit-you-logo"),
    navHome: document.querySelector("#nav-home"),
    navFood: document.querySelector("#nav-food"),
    navMotivation: document.querySelector("#nav-motivation"),
    navSettings: document.querySelector("#nav-user-profile"),
    mainHome: document.querySelector("#main-home"),
    mainFood: document.querySelector("#main-food"),
    mainMotivation: document.querySelector("#main-motivation"),
    mainSettings: document.querySelector("#main-settings"),
    // settings
    userParamsForm: document.querySelector("#user-params"),
    userGender: document.querySelector("#user-params #gender"),
    userAge: document.querySelector("#user-params #age"),
    userHeight: document.querySelector("#user-params #height"),
    userWeight: document.querySelector("#user-params #weight"),
    userGoal: document.querySelector("#user-params #goal"),
    summaryContainer: document.querySelector("#params-summary-container"),
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
    addFoodServingCount: document.querySelector("#serving-count"),
    addFoodFinish: document.querySelector("#finish-adding"),
    addFoodModalClose: document.querySelector("#modal-close-container"),
    addFoodModalBackground: document.querySelector(".modal-background"),
    // home
    homeChooseDayField: document.querySelector("#choose-day"),
    homeDailySummaryContainer: document.querySelector("#summary-container"),
    homeSingleDaysArray: document.querySelectorAll(".radio-container span"),
    homeProgressBarValue: document.querySelector("#bar-progress"),
    homeProgressCrossedLimit: document.querySelector("#bar-progress-crossed-limit"),
    homeRemainKcal: document.querySelector("#daily-summary div #remain-kcal"),
    homeGoalKcal: document.querySelector("#daily-summary div #goal-kcal"),
    homeCarbo: document.querySelector("#daily-summary #carbohydrates span"),
    homeProteins: document.querySelector("#daily-summary #proteins span"),
    homeFat: document.querySelector("#daily-summary #fat span"),
    chartCtxContainer: document.querySelector("#history-chart"),
}