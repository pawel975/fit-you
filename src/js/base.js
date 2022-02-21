// Containes all DOM elements and classes into variables

export const DOMelements = {
    // settings.html 
    userParamsForm: document.querySelector("#user-params"),
    userGender: document.querySelector("#user-params #gender"),
    userAge: document.querySelector("#user-params #age"),
    userHeight: document.querySelector("#user-params #height"),
    userWeight: document.querySelector("#user-params #weight"),
    userGoal: document.querySelector("#user-params #goal"),
    summaryContainer: document.querySelector("#params-summary-container"),
    // food.html - modal
    addFoodBtn: document.querySelectorAll(".add-food"),
    addFoodDiaryTableContainer: document.querySelector("#diary-table"),
    addFoodTableKcalTotal: document.querySelector("#table-summary #kcal-total"),
    addFoodTableProteinTotal: document.querySelector("#table-summary #protein-total"),
    addFoodTableCarboTotal: document.querySelector("#table-summary #carbohydrates-total"),
    addFoodTableFatTotal: document.querySelector("#table-summary #fat-total"),
    addFoodModal: document.querySelector("#search-food-modal"),
    addFoodSearch: document.querySelector("#search-food"),
    addFoodMatchesArea: document.querySelector("#food-options"),
    addFoodServingCount: document.querySelector("#serving-count"),
    addFoodFinish: document.querySelector("#finish-adding"),
    addFoodModalClose: document.querySelector("#modal-close-container"),
    addFoodModalBackground: document.querySelector(".modal-background"),
    addFoodMatchesOptions: document.querySelector("#food-options"),
    addFoodMatchTable: document.querySelector("#food-details"),
    // index.html
    homeProgressBarValue: document.querySelector("#bar-progress"),
    homeChooseDay: document.querySelector("#choose-day"),
    homeRemainKcal: document.querySelector("#daily-summary #remain-kcal span"),
    homeGoalKcal: document.querySelector("#daily-summary #goal-kcal span"),
    homeKcal: document.querySelector("#daily-summary #kcal span"),
    homeFat: document.querySelector("#daily-summary #fat span"),
    homeProteins: document.querySelector("#daily-summary #proteins span"),
    homeCarbo: document.querySelector("#daily-summary #carbohydrates span"),
}