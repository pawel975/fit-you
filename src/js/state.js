
// Initialize state object if it doesn't exist
export const initState = () => {
    let initState = {
        userHistory: [],
        userParams: {},
        activeDate: "",
        isUserParamsReady: false,
    }

    window.localStorage.setItem("state", JSON.stringify(initState));
}

export const updateState = (stateProp, value) => {
    let state = JSON.parse(localStorage.getItem("state"));
    state[stateProp] = value;
    window.localStorage.setItem("state", JSON.stringify(state));
}

export const getState = (stateProp) => {
    let receivedData = JSON.parse(localStorage.getItem("state"));
    if (stateProp === undefined) return receivedData
    let data = receivedData[stateProp]
    return data;
}
