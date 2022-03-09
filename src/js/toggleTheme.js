import { DOMelements } from "./base";

const { toggleThemeBtn } = DOMelements;

window.addEventListener("load", () => {

    toggleThemeBtn.addEventListener("click", () => {
        document.childNodes[1].classList.toggle("dark-theme");
    })

})


