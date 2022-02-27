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

// Create date in user diary
export const createDayData = (date) => {
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

export const updateDaySummary = () => {
    
    homeRemainKcal.textContent = getDayData(getState("activeDate")).summary.kcal;
    homeGoalKcal.textContent = getState("userParams").goalKcal;
    homeCarbo.textContent = getDayData(getState("activeDate")).summary.carbo;
    homeProteins.textContent = getDayData(getState("activeDate")).summary.proteins;
    homeFat.textContent = getDayData(getState("activeDate")).summary.fat;
    
    // Set % of progress bar
    let progressBarLvl = (homeRemainKcal.textContent/homeGoalKcal.textContent) * 100
    homeProgressBarValue.style.width = `${progressBarLvl > 100 ? 100 : progressBarLvl}%`
    
    // Set % of goal kcal overplus
    if (progressBarLvl > 100) {
        let progressBarCrossedLvl = progressBarLvl > 200 ? 200 : progressBarLvl - 100;
        homeProgressCrossedLimit.style.width = `${progressBarCrossedLvl}%`;
        homeProgressCrossedLimit.style.display = `initial`;
    }
}

export const renderDayData = (e) => {
    updateState("activeDate", e.target.getAttribute("data-date"))
    updateDaySummary();
}

export const updateHomePage = () => {

    let lastWeek = getLastWeek();

    let activeDate = getState("activeDate");

    homeSingleDaysArray.forEach((day, i) => {

        // Fill choose day buttons field with dates
        day.textContent = lastWeek[i].slice(0,5);
        day.setAttribute("data-date", lastWeek[i]);
        const date = day.getAttribute("data-date");

        // Create day in userHistory if doesn't exist
        if (!getDayData(date)) {
            createDayData(date);
        }
        
        // Set choosed day radio button as checked
        if (activeDate === date) {
            day.parentNode.childNodes[1].setAttribute("checked", true);
        }

        day.addEventListener("click", renderDayData);
    
    })
    
    let lastWeekHistory = getState("userHistory");
    let sortedHistory = [];
    lastWeekHistory.forEach(day => {
        let index = lastWeek.indexOf(day.date);
        if (index > -1) sortedHistory[index] = day;
    })
    updateState("userHistory", lastWeekHistory);

    updateDaySummary();
    renderHistoryChart();
}