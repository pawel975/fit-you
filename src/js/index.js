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

    const {homeChooseDay, homeRemainKcal, homeGoalKcal, homeKcal, homeFat, homeProteins, homeCarbo, tableTotalKcal, tableTotalCarbo, tableTotalProteins, tableTotalFat} = DOMelements;

    const updateSummary = (date) => {

        let data = getState("userHistory");
        console.log(data);
        data.forEach(day => {
            if (day.date === date) {
                let summary = day.summary;
                summary.kcal = document.querySelector("#kcal-total").textContent;
                summary.carbo = document.querySelector("#carbo-total").textContent;
                summary.proteins = document.querySelector("#proteins-total").textContent;
                summary.fat = document.querySelector("#fat-total").textContent;
            }
        })
        console.log(data);
        // console.log(homeRemainKcal);

        console.log(getState("userHistory").filter(day => day.date === newData.date))
        const arr = ["A","B"];
        console.log(indexOf("A"))

        homeGoalKcal.textContent = getState("userParams").goalKcal
        homeKcal.textContent = data.kcal;
        homeCarbo.textContent = data.carbo;
        homeProteins.textContent = data.proteins;
        homeFat.textContent = data.fat;
        homeRemainKcal = homeGoalKcal - homeKcal;
    }

    updateSummary(currentDate);
})

