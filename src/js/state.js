
export let state = JSON.parse(localStorage.getItem("state"));

// Initialize state object if it doesn't exist
export const initState = () => {
    let initState = {
        userHistory: [],
        userParams: {},
        activeDate: "",
    }

    window.localStorage.setItem("state", JSON.stringify(initState));
}

export const updateState = (stateProp, value) => {
    state[stateProp] = value;
    window.localStorage.setItem("state", JSON.stringify(state));
}

export const getState = (stateProp) => {
    let receivedData = JSON.parse(localStorage.getItem("state"));
    let data = receivedData[stateProp]
    return data;
}
