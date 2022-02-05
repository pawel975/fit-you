import settings from './settings';
import "../scss/base.scss";

// const btn = document.querySelectorAll(".add-food");

// btn.forEach(item => {
//     item.addEventListener("click", function(){
//         document.querySelector(".modal-wrapper").style.display = "initial";
//     })
// })

// const apiKey = process.env.API_KEY;


// const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=cheddar%20cheese&dataType=Branded&pageSize=20&pageNumber=1&sortBy=publishedDate&sortOrder=desc&api_key=${apiKey}`

// fetch(baseURL).then(response => response.json()).then(data => {
//     // Object.assign(state, data.foods);
//     const {foods} = data;
//     console.log(foods);
// });
            
const userParamsForm = document.querySelector('#main-settings');

console.log("AAAA");
// randomFunction();
let state;
// console.log(state);
