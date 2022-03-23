import { DOMelements } from "./base";

window.addEventListener("load", () => {

    const {sideMenu, sideMenuClose, sideMenuOpen, sideMenuContent, sideMenuBg, mobileMenuOptions} = DOMelements;

    // Opens side menu
    const handleSideMenuOpen = () => {
        sideMenu.style.left = "0%";
        sideMenuContent.style.left = "0%";
        document.body.classList.add("disable-scroll");
    }

    const handleSideMenuClose = () => {
        sideMenu.style.left = "-100%";
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

    mobileMenuOptions.forEach(option => {
        option.addEventListener("click", () => {
            handleSideMenuClose();
        })
    })

})
