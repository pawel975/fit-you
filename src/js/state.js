
export const state = {
    userParams: {},
}

export const updateState = (property, value) => {
    state[property] = value;
    window.localStorage.setItem("state", JSON.stringify(state));
}

export const getState = () => {
    let data = JSON.parse(localStorage.getItem("state"));
    console.log(data)
    return data;
}
