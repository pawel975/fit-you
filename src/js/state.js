
export const state = {
    userParams: {},
    userHistory: []
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

export const clearStateProp = (stateProp) => {
   state[stateProp] = undefined;
   window.localStorage.setItem("state", JSON.stringify(state));
}
