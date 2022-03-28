
const {getState, initState, updateState} = require("../js/state");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`...`, { url: "https://localhost:8080/" });
const localStorage = dom.window.localStorage

// initState
test("Should initialize state properly", () => {
    
    initState(localStorage)
    const state = getState(undefined, localStorage)
    const expectData = {
        "activeDate": "", 
        "areUserParamsReady": false, 
        "darkModeOn": false, 
        "userHistory": [], 
        "userParams": {}
    }
    expect(state).toStrictEqual(expectData);
})

// getState
test("Should return state property data", () => {

    initState(localStorage);
    
    const areUserParamsReady = getState("areUserParamsReady", localStorage);
    expect(areUserParamsReady).toBe(false);
    const activeDate = getState("activeDate", localStorage)
    expect(activeDate).toBe("");
})

// updateState
test("Should properly update state", () => {

    updateState("darkModeOn", true, localStorage)

    const darkMode = getState("darkModeOn", localStorage);
    expect(darkMode).toBe(true)

})