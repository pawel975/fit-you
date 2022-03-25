import { DOMelements } from "./base";
import { trapFocus } from "./trapFocus";

window.addEventListener("load", () => {

    const {sideMenu, sideMenuClose, sideMenuOpen, sideMenuContent, sideMenuBg, mobileMenuOptions} = DOMelements;

    // Opens side menu
    const handleSideMenuOpen = () => {
        sideMenu.style.left = "0%";
        sideMenu.style.display = "initial";
        sideMenu.style.visibility = "visible";
        sideMenuContent.style.left = "0%";
        document.body.classList.add("disable-scroll");
        trapFocus(sideMenu)
    }

    const handleSideMenuClose = () => {
        sideMenu.style.left = "-100%";
        sideMenu.style.display = "none";
        sideMenu.style.visibility = "hidden";
        sideMenuContent.style.left = "-70%";
        document.body.classList.remove("disable-scroll");
    }

    sideMenuOpen.addEventListener("click", () => {
        handleSideMenuOpen()

    })

    sideMenuClose.addEventListener("click", () => {
        handleSideMenuClose();
    })
    
    sideMenuBg.addEventListener("click", () => {
        handleSideMenuClose();
    })

    mobileMenuOptions.addEventListener("click", () => {
        handleSideMenuClose();
    })

})
