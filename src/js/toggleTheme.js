import { DOMelements } from "./base";

const { toggleThemeSwitch } = DOMelements;

window.addEventListener("load", () => {

    // Add dark theme class to the html tag
    toggleThemeSwitch.addEventListener("change", () => {
        document.childNodes[1].classList.toggle("dark-theme");
    })

})


