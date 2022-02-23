import "../scss/base.scss";
import { DOMelements } from "./base";
import { getactiveDate, getLastWeek } from "./date";
import { getState, state, updateState, initState } from './state';

// Get single date records  
export const getDayData = (date) => {
    let dayData = getState("userHistory").filter(day => day.date === date)[0];
    return dayData
}

window.addEventListener("load", () => {

    // Creates state object if it doesn't exist
    if (state === null) {
        initState();
    }

    let lastWeek = getLastWeek();

    const activeDate = getState("activeDate");

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

    const {homeChooseDayArea, homeSingleDaysArray, homeProgressBarContainer, homeProgressCrossedLimit, homeRemainKcal, homeGoalKcal, homeFat, homeProteins, homeCarbo, homeProgressBarValue} = DOMelements;

    const updateSummary = () => {

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

    const renderDayData = (e) => {
        updateState("activeDate", e.target.getAttribute("data-date"))
        console.log(getState("activeDate"));
        updateSummary();
    }

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

    updateSummary();
    
})

