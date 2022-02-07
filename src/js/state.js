
export const state = {
    userParams: {},
    
}

export const updateState = (stateProperty, value) => {
    state[stateProperty] = value;
    window.localStorage.setItem("state", JSON.stringify(state));
}

export const getState = (stateProperty) => {
    let receivedData = JSON.parse(localStorage.getItem("state"));
    let data = receivedData[stateProperty]
    return data;
}
