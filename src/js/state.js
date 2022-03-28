
// Initialize state object if it doesn't exist
export const initState = (localStorage = window.localStorage) => {
    let initState = {
        userHistory: [],
        userParams: {},
        activeDate: "",
        areUserParamsReady: false,
        darkModeOn: false,
    }

    localStorage.setItem("state", JSON.stringify(initState));
}

export const updateState = (stateProp, value, localStorage = window.localStorage) => {
    let state = JSON.parse(localStorage.getItem("state"));
    state[stateProp] = value;
    localStorage.setItem("state", JSON.stringify(state));
}

export const getState = (stateProp, localStorage = window.localStorage) => {
    let receivedData = JSON.parse(localStorage.getItem("state"));
    if (stateProp === undefined) return receivedData
    let data = receivedData[stateProp]
    return data;
}
