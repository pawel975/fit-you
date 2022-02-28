import { DOMelements } from "./base";
import "../scss/base.scss"

const {navLogo, navHome, navFood, navMotivation, navSettings, mainHome, mainFood, mainMotivation, mainSettings} = DOMelements 

// Init default view
mainHome.style.display = "initial";
mainFood.style.display = "none";
mainMotivation.style.display = "none";
mainSettings.style.display = "none";



navLogo.addEventListener("click", (e) => {
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
    console.log(e.target)
})

navHome.addEventListener("click", (e) => {
    mainHome.style.display = "initial";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
    console.log(e.target)
})

navFood.addEventListener("click", (e) => {
    mainHome.style.display = "none";
    mainFood.style.display = "flex";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "none";
    console.log(e.target)

})

navMotivation.addEventListener("click", (e) => {
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "initial";
    mainSettings.style.display = "none";
    console.log(e.target)
})

navSettings.addEventListener("click", (e) => {
    mainHome.style.display = "none";
    mainFood.style.display = "none";
    mainMotivation.style.display = "none";
    mainSettings.style.display = "initial";
    console.log(e.target)
})
