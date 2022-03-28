import { DOMelements } from "./base";
import { getState, updateState } from "./state";

const { toggleThemeSwitches } = DOMelements;

const toggleDarkMode = (darkModeOn, localStorage = window.localStorage) => {

    const htmlTag = document.childNodes[1]

    darkModeOn = !darkModeOn
            updateState("darkModeOn", darkModeOn, localStorage);
    
            toggleThemeSwitches.forEach(toggle => {
                toggle.setAttribute("aria-checked", darkModeOn)
            })

            htmlTag.classList.toggle("dark-theme");
}

window.addEventListener("load", () => {

    const htmlTag = document.childNodes[1]
    let darkModeOn = getState("darkModeOn")
    
    if (darkModeOn) {
        htmlTag.classList.add("dark-theme");
        toggleThemeSwitches.forEach(toggle => {
            toggle.setAttribute("aria-checked", darkModeOn)
        })
    }

    // Add dark theme class to the html tag and update state
    toggleThemeSwitches.forEach(toggle => {

        toggle.addEventListener("click", () => {
            toggleDarkMode(getState("darkModeOn"))
        })
        
    })

})

export const exportedForTesting = {
    toggleDarkMode,
}


