import { DOMelements } from "./base";

window.addEventListener("load", () => {

    const {sideMenu, sideMenuClose, sideMenuOpen, sideMenuContent, sideMenuBg} = DOMelements;

    sideMenuOpen.addEventListener("click", () => {
        sideMenu.style.left = "0%";
        sideMenuContent.style.left = "0%";
    })

    sideMenuClose.addEventListener("click", () => {
        sideMenu.style.left = "-100%";
        sideMenuContent.style.left = "-70%";
    })
    
    sideMenuBg.addEventListener("click", () => {
        sideMenu.style.left = "-100%";
        sideMenuContent.style.left = "-70%";
    })

})
