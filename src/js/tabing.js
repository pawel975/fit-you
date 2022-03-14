
const keyUp = "ArrowUp";  
const keyLeft = "ArrowLeft";  
const keyDown = "ArrowDown";  
const keyRight = "ArrowRight";

export const makeAreaTabable = (tabList) => {

    let tab = 0;
    let tabListLength;

    tabList.setAttribute("role", "tablist")
    tabList = [...tabList.children];
    tabListLength = tabList.length;

    tabList.forEach(button => {
        
        button.setAttribute("role", "tab")

        button.addEventListener("keydown", (e) => {

            if (e.code !== keyUp && e.code !== keyDown && e.code !== keyLeft && e.code !== keyRight) return

            e.preventDefault()

            switch(e.code) {
                
                case keyUp:
                case keyLeft:

                    tabList[tab].setAttribute("tabindex", "-1");

                    if (tab === 0) {
                        tab = tabListLength - 1;
                    } else {
                        tab--;
                    }

                    tabList[tab].setAttribute("tabindex", "0");
                    tabList[tab].focus();

                    break;

                case keyDown:
                case keyRight:

                    tabList[tab].setAttribute("tabindex", "-1");

                    if (tab === tabListLength - 1) {
                        tab = 0;
                    } else {
                        tab++
                    }

                    tabList[tab].setAttribute("tabindex", "0");
                    tabList[tab].focus();

                    break;

                default:
                    break;
            }   
        })

    })
}