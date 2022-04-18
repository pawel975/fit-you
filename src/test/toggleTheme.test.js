
const {exportedForTesting} = require("../js/toggleTheme");
const {getState, initState} = require("../js/state");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`...`, { url: "https://localhost:8080/" });
const localStorage = dom.window.localStorage;

const toggleDarkMode = exportedForTesting.toggleDarkMode; 

test("Changes dark mode boolean value in state", () => {

    initState(localStorage);
    
    const darkModeBefore = getState("darkModeOn", localStorage);
    toggleDarkMode(darkModeBefore, localStorage)
    const darkModeAfter = getState("darkModeOn", localStorage);

    expect(darkModeBefore).toBe(!darkModeAfter);
})