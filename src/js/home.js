import "../scss/base.scss";
import { DOMelements } from "./base";
import { getLastWeek, getCurrentDate} from "./date";
import { renderHistoryChart} from "./historyChart";
import { getState, updateState, initState } from "./state";

const {homeSingleDaysArray, homeProgressCrossedLimit, homeRemainKcal, homeGoalKcal, homeFat, homeProteins, homeCarbo, homeProgressBarValue} = DOMelements;

// Get single date records  
export const getDayData = (date) => {
    let dayData = getState("userHistory").filter(day => day.date === date)[0];
    return dayData
}

export const updateHomePage = () => {

    let lastWeek = getLastWeek();
    let activeDate = getState("activeDate");
    
    homeSingleDaysArray.forEach((day, i) => {
        
        // Fill choose day buttons field with dates
        const date = lastWeek[i];
        day.textContent = date.slice(0,5);
        day.setAttribute("data-date", date);
        
        // Create day in userHistory if doesn't exist
        if (!getDayData(date)) {
            createDayData(date);
        }
        
        // Set choosed day button to selected
        if (activeDate === date) {
            day.setAttribute("aria-selected", true);
        } else {
            day.setAttribute("aria-selected", false);
        }
        
        // events of choosing date from field of days
        day.addEventListener("click", (e) => {
            renderDayData(e.target);
            day.setAttribute("aria-selected", true);
        })
        day.addEventListener("keydown", (e) => {
            if (e.code === "Enter") {
                renderDayData(e.target)
                day.setAttribute("aria-selected", true);
            } 
        })
        
    })

    // Filter user history to only last 7 days
    let lastWeekHistory = getState("userHistory");
    lastWeekHistory = lastWeekHistory.filter(day => lastWeek.indexOf(day.date) > -1)
    updateState("userHistory", lastWeekHistory);
    
    // If active date is out of days range, set it to today
    
    for (let i = 0; i < homeSingleDaysArray.length; i++) {
        const dayOfTheWeek = lastWeek[i];

        if (dayOfTheWeek === activeDate) break

        if (i === 6){
            if (dayOfTheWeek !== activeDate){
                homeSingleDaysArray[lastWeek.length - 1].setAttribute("aria-selected", true);
                updateState("activeDate", dayOfTheWeek)
            }
        }
    }


    updateDaySummary();
    renderHistoryChart();
}

// Create date in user diary
const createDayData = (date) => {

    let userDiary = getState("userHistory");
    userDiary.push({
        date: date,
        eatenFood: [],
        summary: {
            kcal: 0,
            carbo: 0,
            proteins: 0,
            fat: 0,
        }
    });

    updateState("userHistory", userDiary);
    
}

const updateDaySummary = () => {
    
    homeRemainKcal.textContent = getDayData(getState("activeDate")).summary.kcal;
    homeGoalKcal.textContent = getState("userParams").goalKcal;
    homeCarbo.textContent = getDayData(getState("activeDate")).summary.carbo;
    homeProteins.textContent = getDayData(getState("activeDate")).summary.proteins;
    homeFat.textContent = getDayData(getState("activeDate")).summary.fat;
    
    // Set % of progress bar
    let progressBarLvl = (homeRemainKcal.textContent/homeGoalKcal.textContent) * 100
    homeProgressBarValue.style.width = `${progressBarLvl > 100 ? 100 : progressBarLvl}%`
    
    // Set % of goal kcal overplus
    homeProgressCrossedLimit.style.display = "none";
    if (progressBarLvl > 100) {
        let progressBarCrossedLvl = progressBarLvl > 200 ? 200 : progressBarLvl - 100;
        homeProgressCrossedLimit.style.width = `${progressBarCrossedLvl}%`;
        homeProgressCrossedLimit.style.display = `initial`;
    }
}

// render data of day choosed in days field
export const renderDayData = (day) => {

    homeSingleDaysArray.forEach(day => day.setAttribute("aria-selected", false));
    updateState("activeDate", day.getAttribute("data-date"))
    updateDaySummary();

}

window.addEventListener("DOMContentLoaded", () => {

    // Creates state object if it doesn't exist 
    if (getState() === null) {
        initState();
    } 

    // Checks if there is any actual date in state
    if (getState("activeDate") === "") {
        updateState("activeDate", getCurrentDate());
    }
    
    updateHomePage();

})