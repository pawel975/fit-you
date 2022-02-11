import "../scss/base.scss";
import { getCurrentDate } from "./date";
import { clearStateProp, getState, updateState } from './state';

window.addEventListener("load", () => {

    // updateState("userHistory", []);

    const currentDate = getCurrentDate();
    let userDiary = getState("userHistory");

    // Create userDiary new day record
    if (!getDayData(date)) {
        createDayData(date);
        updateState("userHistory", date);
    }

    // Get record from user's history in particular day
    const getDayData = (date) => {
        let dayData = getState("userHistory").filter(day => day.date === date)[0];
        return dayData
    }

    const createDayData = (date) => {
        userDiary.push({date: date});
    }

    const modifyDayData = (date, propertyToChange, value) => {
        getDayData(date)[propertyToChange] = value;
    }

})

