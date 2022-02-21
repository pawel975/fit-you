import "../scss/base.scss";
import { DOMelements } from "./base";
import { getCurrentDate } from "./date";
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

    const currentDate = getCurrentDate();

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

    // Create userDiary new day record
    if (!getDayData(currentDate)) {
        createDayData(currentDate);
        updateState("userHistory", userDiary);
    }

    const {homeChooseDay, homeRemainKcal, homeGoalKcal, homeKcal, homeFat, homeProteins, homeCarbo, homeProgressBarValue} = DOMelements;

    const updateSummary = () => {

        homeGoalKcal.textContent = getState("userParams").goalKcal;
        homeKcal.textContent = getDayData(getState("activeDate")).summary.kcal;
        homeCarbo.textContent = getDayData(getState("activeDate")).summary.carbo;
        homeProteins.textContent = getDayData(getState("activeDate")).summary.proteins;
        homeFat.textContent = getDayData(getState("activeDate")).summary.fat;
        homeRemainKcal.textContent = homeGoalKcal.textContent - homeKcal.textContent;
        homeProgressBarValue.style.width = `${((homeKcal.textContent/homeGoalKcal.textContent)) * 100}%`
    }

    updateSummary();
})

