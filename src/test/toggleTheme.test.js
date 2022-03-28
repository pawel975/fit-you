
const {exportedForTesting} = require("../js/toggleTheme");
const { DOMelements } = require("../js/base");
const {getState, initState} = require("../js/state");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`...`, { url: "https://localhost:8080/" });
const localStorage = dom.window.localStorage;
const document = dom.window.document;

const toggleDarkMode = exportedForTesting.toggleDarkMode; 

const {toggleThemeSwitches} = DOMelements;

// toggleDarkMode

expect.extend({
    allElementsAriaCheckedToBe(receivedArr, attrValue) {
        
        let passedElements = [];
        let pass; 

        receivedArr.forEach(element => {
            if(JSON.parse(element.getAttribute("aria-checked")) === attrValue){
                passedElements.push(element.getAttribute("aria-checked"))
            }
        });

        passedElements.length == receivedArr.length ? pass = true : pass = false;

        if (pass) {
            return {
                message: () => `All elements should have aria-checked = ${attrValue}`,
                pass: true,
            }
        } else {
            return {
                message: () => `All elements should have aria-checked = ${attrValue}`,
                pass: false,
            }
        }
    },
})

test.only("All dark mode switches are synchronised with dark mode", () => {

    initState(localStorage);
    
    const darkMode = getState("darkModeOn", localStorage);
    toggleDarkMode(darkMode, localStorage)

    // const tmp = [];
    // Array.from(toggleThemeSwitches).forEach(toggle => {
    //     tmp.push(toggle.getAttribute("aria-checked"))
    // })

    // console.log(Array.from(toggleThemeSwitches) , "toggleThemeSwitch")
    // console.log(tmp, "tmp")
    // console.log(darkMode)
    console.log(toggleThemeSwitches.length)

    expect(toggleThemeSwitches).allElementsAriaCheckedToBe(darkMode);

})