import "../scss/base.scss";
import { getCurrentDate } from "./date";
import { clearStateProp, getState, updateState } from './state';

window.addEventListener("load", () => {

    let diaryDate;

    if (getState("userHistory") === undefined) {
        const date = getCurrentDate()
        const diaryDay = [{[date]: {}}]
        updateState("userHistory", diaryDay);
        // clearStateProp("userHistory");
    }
    else if (getState("userHistory")){
        
    }
    // const updatedHistory = getState("userHistory");
    // console.log(getState("userHistory"))
    // updateState("userHistory", {...user})

})

