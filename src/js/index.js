import "../scss/base.scss";
import { DOMelements } from "./base";
import { getCurrentDate } from "./date";
import { clearStateProp, getState, state, updateState, initState } from './state';

window.addEventListener("load", () => {

    if (state === null) {
        console.log(state)
        initState();
    }

    const {homeChooseDay, homeRemainKcal, homeGoalKcal, homeKcal, homeFat, homeProteins, homeCarbohydrates} = DOMelements;

})

