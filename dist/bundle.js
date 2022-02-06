/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/base.js":
/*!************************!*\
  !*** ./src/js/base.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMelements\": () => (/* binding */ DOMelements)\n/* harmony export */ });\n// Containes all DOM elements and classes into variables\nvar DOMelements = {\n  // settings.html \n  userParamsForm: document.querySelector(\"#user-params\"),\n  userGender: document.querySelector(\"#user-params #gender\"),\n  userAge: document.querySelector(\"#user-params #age\"),\n  userHeight: document.querySelector(\"#user-params #height\"),\n  userWeight: document.querySelector(\"#user-params #weight\"),\n  userGoal: document.querySelector(\"#user-params #goal\"),\n  summaryContainer: document.querySelector(\"#params-summary-container\"),\n  // food.html\n  addFoodBtn: document.querySelectorAll(\".add-food\"),\n  addFoodModal: document.querySelector(\"#search-food-modal\"),\n  addFoodSearch: document.querySelector(\"#search-food\"),\n  addFoodMatches: document.querySelector(\"food-options\")\n};\n\n//# sourceURL=webpack:///./src/js/base.js?");

/***/ }),

/***/ "./src/js/food.js":
/*!************************!*\
  !*** ./src/js/food.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/base.js\");\n\nwindow.addEventListener(\"load\", function () {\n  var addFoodBtn = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.addFoodBtn,\n      addFoodMatches = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.addFoodMatches,\n      addFoodModal = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.addFoodModal,\n      addFoodSearch = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.addFoodSearch;\n  addFoodBtn.forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      addFoodModal.style.display = \"initial\";\n    });\n  }); // const apiKey = process.env.API_KEY;\n  // const baseURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=cheddar%20cheese&dataType=Branded&pageSize=20&pageNumber=1&sortBy=publishedDate&sortOrder=desc&api_key=${apiKey}`\n  // fetch(baseURL).then(response => response.json()).then(data => {\n  //     // Object.assign(state, data.foods);\n  //     const {foods} = data;\n  //     console.log(foods);\n  // });\n});\n\n//# sourceURL=webpack:///./src/js/food.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/base.scss */ \"./src/scss/base.scss\");\n\nwindow.addEventListener(\"load\", function () {});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/base.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/js/state.js\");\n\n\nwindow.addEventListener(\"load\", function () {\n  var userGender = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.userGender,\n      userAge = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.userAge,\n      userHeight = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.userHeight,\n      userWeight = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.userWeight,\n      userGoal = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.userGoal,\n      userParamsForm = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.userParamsForm,\n      summaryContainer = _base__WEBPACK_IMPORTED_MODULE_0__.DOMelements.summaryContainer;\n  var user = {}; // Fetching user params from local storage and fill form with data\n\n  userGender.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\").gender, userAge.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\").age, userHeight.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\").height, userWeight.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\").weight, userGoal.value = (0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\").goal; // Update user params summary\n\n  var updateSummary = function updateSummary(paramsObject) {\n    var gender = paramsObject.gender,\n        age = paramsObject.age,\n        height = paramsObject.height,\n        weight = paramsObject.weight,\n        goal = paramsObject.goal;\n    var dailyBMR;\n\n    if (gender === \"Female\") {\n      dailyBMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age - 161 + 400);\n    } else {\n      dailyBMR = Math.round(9.99 * weight + 6.25 * height - 4.92 * age + 5 + 400);\n    } // Change users calories demand base on goal\n\n\n    switch (goal) {\n      case \"lose weight, 0.5kg weekly\":\n        dailyBMR -= 3500 / 7;\n        break;\n\n      case \"lose weight, 1kg weekly\":\n        dailyBMR -= 7000 / 7;\n        break;\n\n      case \"gain weight, 0.5kg weekly\":\n        dailyBMR += 3500 / 7;\n        break;\n\n      case \"gain weight, 1kg weekly\":\n        dailyBMR += 7000 / 7;\n        break;\n    } // Rendering user's summary field\n\n\n    for (var param in paramsObject) {\n      if (paramsObject[param] === \"\" || paramsObject[param] === undefined) {\n        summaryContainer.innerHTML = \"<div>\\n                <p>Fill all fields to see your daily caloric demand</p>\\n                </div>\";\n        return;\n      } else {\n        summaryContainer.innerHTML = \"<div>\\n                <p>To <span id=\\\"goal\\\">\".concat(goal, \"</span>, your daily calories demand is <span id=\\\"calories\\\">\").concat(dailyBMR, \"</span> kcal</p>\\n                </div>\");\n      }\n    }\n  }; // initialize summary base on users params\n\n\n  updateSummary((0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\")); // Change user params\n\n  userParamsForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    user = {\n      gender: userGender.value,\n      age: userAge.value,\n      height: userHeight.value,\n      weight: userWeight.value,\n      goal: userGoal.value\n    };\n    (0,_state__WEBPACK_IMPORTED_MODULE_1__.updateState)(\"userParams\", user);\n    updateSummary((0,_state__WEBPACK_IMPORTED_MODULE_1__.getState)(\"userParams\"));\n  });\n});\n\n//# sourceURL=webpack:///./src/js/settings.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"state\": () => (/* binding */ state),\n/* harmony export */   \"updateState\": () => (/* binding */ updateState),\n/* harmony export */   \"getState\": () => (/* binding */ getState)\n/* harmony export */ });\nvar state = {\n  userParams: {}\n};\nvar updateState = function updateState(stateProperty, value) {\n  state[stateProperty] = value;\n  window.localStorage.setItem(\"state\", JSON.stringify(state));\n};\nvar getState = function getState(stateProperty) {\n  var receivedData = JSON.parse(localStorage.getItem(\"state\"));\n  var data = receivedData[stateProperty];\n  return data;\n};\n\n//# sourceURL=webpack:///./src/js/state.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/base.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/base.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  font-family: monospace;\\n}\\n\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\nh1 {\\n  line-height: 1;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul[role=list],\\nol[role=list] {\\n  list-style: none;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n\\n  *,\\n*::before,\\n*::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n/* colors */\\n/* font sizes */\\n/* font-families */\\n.flex-row {\\n  display: flex;\\n}\\n\\n.flex-col {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.text-left {\\n  text-align: left;\\n}\\n\\n.text-right {\\n  text-align: right;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.text-contrast {\\n  color: #44ac49;\\n}\\n\\n.text-dark {\\n  color: #29285f;\\n}\\n\\n.text-light {\\n  color: #f8f7f7;\\n}\\n\\n.fs-900 {\\n  font-size: 8rem;\\n}\\n\\n.fs-800 {\\n  font-size: 5.5rem;\\n}\\n\\n.fs-700 {\\n  font-size: 4rem;\\n}\\n\\n.fs-600 {\\n  font-size: 3rem;\\n}\\n\\n.fs-500 {\\n  font-size: 2rem;\\n}\\n\\n.fs-400 {\\n  font-size: 1.5rem;\\n}\\n\\n.fs-300 {\\n  font-size: 1.25rem;\\n}\\n\\n.fs-200 {\\n  font-size: 0.875rem;\\n}\\n\\n.ff-headers {\\n  font-family: \\\"Dongle\\\", sans-serif;\\n}\\n\\n#choose-day {\\n  margin-bottom: 3rem;\\n  position: relative;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n#choose-day .radio-container {\\n  width: 7rem;\\n  height: fit-content;\\n  position: relative;\\n  cursor: pointer;\\n  font-size: 1.5rem;\\n  border-radius: 5rem;\\n}\\n#choose-day .radio-container input {\\n  position: absolute;\\n  opacity: 0;\\n  cursor: pointer;\\n}\\n#choose-day .radio-container input:checked ~ .choosed {\\n  background-color: #29285f;\\n  transition: 0.1s;\\n  color: #f8f7f7;\\n}\\n#choose-day .radio-container .choosed {\\n  text-align: center;\\n  color: #29285f;\\n  line-height: 200%;\\n  position: absolute;\\n  transform: translate(-50%);\\n  left: 50%;\\n  width: 6rem;\\n  height: 3.5rem;\\n  border-radius: 5rem;\\n  border: 2px solid #29285f;\\n}\\n\\n#main-home {\\n  width: clamp(15rem, 80%, 80rem);\\n  min-height: 40rem;\\n  height: fit-content;\\n  display: flex;\\n  flex-direction: column;\\n}\\n#main-home h2 {\\n  margin-top: 3rem;\\n}\\n#main-home #choose-day {\\n  border: none;\\n}\\n#main-home #daily-summary {\\n  width: clamp(1rem, 70%, 35rem);\\n}\\n#main-home #daily-summary #goal-kcal {\\n  border-right: 1px solid grey;\\n}\\n#main-home #daily-summary > *:first-child {\\n  margin-top: 2rem;\\n  color: #aaaaaa;\\n  font-size: 2rem;\\n}\\n#main-home #daily-summary > *:first-child span {\\n  font-size: 5.5rem;\\n  color: #44ac49;\\n}\\n#main-home #daily-summary > *:nth-child(1n+2) {\\n  display: inline-flex;\\n  flex-direction: column;\\n  padding-right: 1rem;\\n  font-size: 1.25rem;\\n  color: #aaaaaa;\\n}\\n#main-home #daily-summary > *:nth-child(1n+2) span {\\n  font-size: 3rem;\\n  color: #29285f;\\n}\\n#main-home #daily-summary > *:last-child {\\n  display: block;\\n}\\n\\n#pbar-container {\\n  width: 100%;\\n  position: relative;\\n  display: block;\\n  background-color: #c8c8c8;\\n  border-radius: 5rem;\\n  overflow: hidden;\\n  height: 1.25rem;\\n  margin-block: 0.875rem;\\n}\\n\\n#bar-progress {\\n  width: 50%;\\n  height: 100%;\\n  background-color: #44ac49;\\n}\\n\\n#main-settings {\\n  width: clamp(15rem, 80%, 80rem);\\n}\\n#main-settings h2 {\\n  margin-top: 3rem;\\n  margin-bottom: 1rem;\\n}\\n#main-settings #section-container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  margin-block: 3rem;\\n  justify-content: space-around;\\n  align-items: stretch;\\n}\\n#main-settings #section-container #user-params-container {\\n  width: 100%;\\n}\\n#main-settings #section-container #user-params-container form {\\n  margin: auto;\\n  width: 50%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  gap: 0.3rem;\\n}\\n#main-settings #section-container #user-params-container form label {\\n  color: #29285f;\\n  font-size: 1.5rem;\\n}\\n#main-settings #section-container #params-summary-container {\\n  width: 100%;\\n}\\n#main-settings #section-container #params-summary-container div {\\n  padding: 3em;\\n  border-radius: 3rem;\\n  display: grid;\\n  place-items: center;\\n  background-color: #29285f;\\n  height: 100%;\\n}\\n#main-settings #section-container #params-summary-container div p {\\n  font-family: \\\"Dongle\\\", sans-serif;\\n  width: 100%;\\n  text-align: center;\\n  font-size: 4rem;\\n  color: #f8f7f7;\\n  line-height: 1.1;\\n  font-weight: 900;\\n}\\n#main-settings #section-container #params-summary-container div span {\\n  font-family: inherit;\\n  color: #44ac49;\\n}\\n\\n#main-food {\\n  width: clamp(15rem, 80%, 80rem);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n#main-food h2 {\\n  margin-top: 3rem;\\n}\\n#main-food form {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#main-food form input[type=submit] {\\n  margin: 0;\\n  margin-left: 1rem;\\n  width: auto;\\n  padding-inline: 2rem;\\n}\\n#main-food .empty-state-info {\\n  margin-top: 3rem;\\n  color: #44ac49;\\n  font-weight: 900;\\n}\\n#main-food .empty-state-info .svg-inline--fa {\\n  padding: 2rem;\\n  margin: auto;\\n  flex-grow: 1;\\n  width: 60%;\\n  height: 100%;\\n}\\n\\n/* ---------- */\\n/* Navigation */\\n/* ---------- */\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-inline: auto;\\n  width: 100vw;\\n  min-height: 100vh;\\n  background-color: #f8f7f7;\\n  color: #29285f;\\n}\\n\\n.nav-desktop {\\n  width: clamp(15rem, 80%, 80rem);\\n  display: flex;\\n  align-items: center;\\n  margin-inline: auto;\\n  border-bottom: 1px solid #aaaaaa;\\n}\\n.nav-desktop ul {\\n  margin: auto;\\n  width: clamp(15.625rem, 60%, 64rem);\\n  height: fit-content;\\n  display: flex;\\n  padding: 0;\\n}\\n.nav-desktop ul li {\\n  width: 100%;\\n  height: fit-content;\\n}\\n.nav-desktop ul li a {\\n  color: #29285f;\\n  font-size: 1.5rem;\\n  font-weight: 700;\\n  text-align: center;\\n  display: block;\\n  text-decoration: none;\\n  padding-block: 1rem;\\n}\\n.nav-desktop ul li a:hover {\\n  background-color: #29285f;\\n  color: #f8f7f7;\\n  transition: 0.3s;\\n}\\n\\n#user-profile {\\n  display: flex;\\n  white-space: nowrap;\\n  color: #29285f;\\n  font-weight: 900;\\n}\\n#user-profile a {\\n  text-decoration: none;\\n  color: #29285f;\\n  margin-right: 0.5rem;\\n}\\n\\n/* ----------------- */\\n/* Global components */\\n/* ----------------- */\\ninput, .dropdown {\\n  color: #29285f;\\n  font-size: 1.25rem;\\n  width: 20rem;\\n  height: 3rem;\\n  border-radius: 50rem;\\n  border: 3px solid #29285f;\\n  text-align: right;\\n  padding-right: 1rem;\\n  background-color: white;\\n}\\n\\ninput[type=submit] {\\n  margin-top: 1rem;\\n  text-align: center;\\n  background-color: #29285f;\\n  border-color: #29285f;\\n  color: #f8f7f7;\\n  font-family: \\\"Dongle\\\", sans-serif;\\n  font-size: 2rem;\\n  cursor: pointer;\\n}\\n\\n.dropdown select:hover {\\n  background-color: #44ac49;\\n  color: #f8f7f7;\\n}\\n\\n.modal-wrapper {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n.modal-wrapper .modal-background {\\n  position: absolute;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  width: 100%;\\n  height: 100%;\\n}\\n.modal-wrapper .modal-section {\\n  position: absolute;\\n  width: clamp(15rem, 30%, 35rem);\\n  min-height: 40rem;\\n  transform: translate(-50%, -50%);\\n  left: 50%;\\n  top: 50%;\\n  border-radius: 1rem;\\n  background-color: white;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 20% 35% 1fr;\\n  padding-inline: 2rem;\\n  padding-bottom: 1rem;\\n  gap: 0.5rem;\\n}\\n.modal-wrapper .modal-section form {\\n  grid-row: 1/2;\\n  grid-column: 1/3;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.modal-wrapper .modal-section #matched-food {\\n  grid-row: 2/3;\\n  grid-column: 1/3;\\n  width: 100%;\\n  overflow-y: scroll;\\n}\\n.modal-wrapper .modal-section #matched-food #food-options {\\n  width: 100%;\\n}\\n.modal-wrapper .modal-section #matched-food #food-options p {\\n  padding-block: 0.25rem;\\n  color: #29285f;\\n  border-bottom: 1px solid #c8c8c8;\\n  cursor: pointer;\\n}\\n.modal-wrapper .modal-section #matched-food #food-options p:hover {\\n  background-color: #29285f;\\n  color: white;\\n  padding-left: 0.5rem;\\n}\\n.modal-wrapper .modal-section #food-details {\\n  grid-row: 3/4;\\n  grid-column: 1/3;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n}\\n.modal-wrapper .modal-section #food-details #food-nutrition {\\n  grid-row: 3/4;\\n  grid-column: 1/2;\\n  width: 100%;\\n}\\n.modal-wrapper .modal-section #food-details #add-food-form {\\n  grid-row: 3/4;\\n  grid-column: 2/3;\\n  width: 100%;\\n  height: 100%;\\n}\\n.modal-wrapper .modal-section #food-details #add-food-form input {\\n  width: clamp(10rem, 70%, 14rem);\\n  margin: 0;\\n}\\n.modal-wrapper .modal-section #food-details #add-food-form p {\\n  font-size: 1.5rem;\\n  margin: 1rem;\\n}\\n.modal-wrapper .modal-section #food-details #add-food-form p span {\\n  margin-right: 0.2rem;\\n}\\n\\n.empty-state-info {\\n  width: clamp(15rem, 80%, 40rem);\\n  height: 100%;\\n  grid-column: 1/3;\\n  grid-row: 2/4;\\n  margin: auto;\\n  display: flex;\\n  flex-direction: column;\\n  color: #44ac49;\\n  font-weight: 900;\\n}\\n.empty-state-info p {\\n  font-size: 2rem;\\n  text-align: center;\\n}\\n.empty-state-info .svg-inline--fa {\\n  padding: 2rem;\\n  margin: auto;\\n  flex-grow: 1;\\n  width: 100%;\\n}\\n\\n::-webkit-scrollbar {\\n  width: 8px;\\n}\\n\\n::-webkit-scrollbar-track {\\n  background: #e6e6e6;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background: #aaa;\\n}\\n\\n::-webkit-scrollbar-thumb:hover {\\n  background-color: #29285f;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/base.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/base.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	__webpack_require__("./src/js/settings.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/food.js");
/******/ 	
/******/ })()
;