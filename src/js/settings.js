import { DOMelements } from "./base";
import { getState, updateState } from "./state";

window.addEventListener("load" , () => {

    const {userGender, userAge, userHeight, userWeight, userGoal, userParamsForm,  summaryContainer} = DOMelements
    
    let user = {};
    
    // Fetching user params from local storage and fill form with data
    userGender.value = getState("userParams").gender,
    userAge.value = getState("userParams").age,
    userHeight.value = getState("userParams").height,
    userWeight.value = getState("userParams").weight,
    userGoal.value = getState("userParams").goal
    
    // Update user params summary
    const updateSummary = (paramsObject) => {
        
        const {gender, age, height, weight, goal} = paramsObject;
        let dailyBMR;
    
        if (gender === "Female") {
            dailyBMR = Math.round(((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161 + 400));
        } else {
            dailyBMR = Math.round((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5 + 400);
        }
    
        // Change users calories demand base on goal
        switch(goal){
            case "lose weight, 0.5kg weekly":
                dailyBMR -= (3500/7);
                break;
            case "lose weight, 1kg weekly":
                dailyBMR -= (7000/7);
                break;
            case "gain weight, 0.5kg weekly":
                dailyBMR += (3500/7);
                break;
            case "gain weight, 1kg weekly":
                dailyBMR += (7000/7);
                break;
        }
        
        // Rendering user's summary field
        for (const param in paramsObject) {
            if (paramsObject[param] === "" || paramsObject[param] === undefined) {
                summaryContainer.innerHTML = 
                `<div>
                <p>Fill all fields to see your daily caloric demand</p>
                </div>`;
                return
            } else {
                summaryContainer.innerHTML =
                `<div>
                <p>To <span id="goal">${goal}</span>, your daily calories demand is <span id="calories">${dailyBMR}</span> kcal</p>
                </div>`;
            }
        }
    }
    
    // initialize summary base on users params
    updateSummary(getState("userParams"));
    
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
        
        updateState("userParams", user);
        updateSummary(getState("userParams"));
    })
})



    