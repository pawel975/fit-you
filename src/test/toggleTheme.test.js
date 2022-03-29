
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

// expect.extend({
//     allElementsAriaCheckedToBe(receivedArr, attrValue) {
        
//         let passedElements = [];
//         let pass; 

//         receivedArr.forEach(element => {
//             if(JSON.parse(element.getAttribute("aria-checked")) === attrValue){
//                 passedElements.push(element.getAttribute("aria-checked"))
//             }
//         });

//         passedElements.length == receivedArr.length ? pass = true : pass = false;

//         if (pass) {
//             return {
//                 message: () => `All elements should have aria-checked = ${attrValue}`,
//                 pass: true,
//             }
//         } else {
//             return {
//                 message: () => `All elements should have aria-checked = ${attrValue}`,
//                 pass: false,
//             }
//         }
//     },
// })

// toggleDarkMode
test("Changes dark mode boolean value in state", () => {

    initState(localStorage);
    
    const darkModeBefore = getState("darkModeOn", localStorage);
    toggleDarkMode(darkModeBefore, localStorage)
    const darkModeAfter = getState("darkModeOn", localStorage);

    expect(darkModeBefore).toBe(!darkModeAfter);
})