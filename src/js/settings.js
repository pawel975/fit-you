import { DOMelements } from "./base";
import { getState, updateState } from "./state";

const {userGender, userAge, userHeight, userWeight, userGoal, userParamsForm,  summaryContainer} = DOMelements

let user = {};

// Fetching user params from local storage and fill form with data
userGender.value = getState().userParams.gender,
userAge.value = getState().userParams.age,
userHeight.value = getState().userParams.height,
userWeight.value = getState().userParams.weight,
userGoal.value = getState().userParams.goal,
// updateState("userParams", user);

// Change user params
userParamsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    user = {
        gender: userGender.value,
        age: userAge.value,
        height: userHeight.value,
        weight: userWeight.value,
        goal: userGoal.value,
    }
    
    updateSummary(user);
})

// Update user params summary
const updateSummary = (paramsObject) => {
    
    const {gender, age, height, weight, goal} = paramsObject;
    let dailyBMR;
    
    if (gender === "woman") {
        dailyBMR = ((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161) * 1.3;
    } else {
        dailyBMR = ((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5) * 1.3
    }
    
    //  Conditional rendering of users summary field
    for (const param in paramsObject) {
        if (paramsObject[param] === "" || paramsObject[param] === undefined) {
            summaryContainer.innerHTML = 
            `<div>
            <p>Fill all fields to see your daily BMR</p>
            </div>`;
            return
        } else {
            summaryContainer.innerHTML =
            `<div>
            <p>To <span id="goal">${goal}</span>, your daily calories limit is <span id="calories">${dailyBMR}</span> kcal</p>
            </div>`;
        }
    }
}
updateSummary(user);

    