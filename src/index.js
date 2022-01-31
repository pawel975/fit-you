const form = document.querySelector("form");

const apiKey = process.env.API_KEY;

let state;

// const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=cheddar%20cheese&dataType=Branded&pageSize=20&pageNumber=1&sortBy=publishedDate&sortOrder=desc&api_key=${apiKey}`

// fetch(baseURL).then(response => response.json()).then(data => {
//     // Object.assign(state, data.foods);
//     const {foods} = data;
//     console.log(foods);
// });

// console.log(state);