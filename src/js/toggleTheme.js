import { DOMelements } from "./base";
import { getState, updateState } from "./state";

const { toggleThemeSwitch } = DOMelements;

window.addEventListener("load", () => {

    const htmlTag = document.childNodes[1]
    let darkModeOn = getState("darkModeOn")
    
    if (darkModeOn) {
        htmlTag.classList.add("dark-theme");
        toggleThemeSwitch.setAttribute("aria-checked", darkModeOn)
    }
    
    // Add dark theme class to the html tag and update state
    toggleThemeSwitch.forEach(toggle => toggle.addEventListener("click", () => {
        
        darkModeOn = !darkModeOn
        updateState("darkModeOn", darkModeOn);

        toggleThemeSwitch.setAttribute("aria-checked", darkModeOn)
        htmlTag.classList.toggle("dark-theme");
    })
    )

})


