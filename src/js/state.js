
export let state = JSON.parse(localStorage.getItem("state"));

export const initState = () => {
    let initState = {
        userHistory: [],
        userParams: {}
    }

    window.localStorage.setItem("state", JSON.stringify(initState));
}

export const updateState = (stateProp, value) => {
    if (state === null) return
    state[stateProp] = value;
    window.localStorage.setItem("state", JSON.stringify(state));
}

export const getState = (stateProp) => {
    if (state === null) return
    let receivedData = JSON.parse(localStorage.getItem("state"));
    let data = receivedData[stateProp]
    return data;
}
