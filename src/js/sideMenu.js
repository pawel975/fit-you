import { DOMelements } from "./base";

window.addEventListener("load", () => {

    const {sideMenu, sideMenuClose, sideMenuOpen, sideMenuContent} = DOMelements;

    console.log(sideMenu)
    console.log(sideMenuOpen)
    console.log(sideMenuClose)
    console.log(sideMenuContent)

    sideMenuClose.addEventListener("click", () => {
        sideMenu.style.display = "none";
        console.log(sideMenuClose)
    })
    
    sideMenuOpen.addEventListener("click", () => {
        sideMenu.style.display = "initial";
        sideMenuContent.style.left = "0%";
        console.log(sideMenuOpen)
    })

})
