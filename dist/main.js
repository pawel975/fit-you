/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var form = document.querySelector(\"form\");\nvar btn = document.querySelectorAll(\".add-food\");\nbtn.forEach(function (item) {\n  item.addEventListener(\"click\", function () {\n    document.querySelector(\".modal-wrapper\").style.display = \"initial\";\n  });\n});\nvar apiKey = \"MJrVBo73FerrxCNhXdvXdPtp9NWkzUgUTy5IdSNZ\";\nvar state;\nvar baseURL = \"https://api.nal.usda.gov/fdc/v1/foods/search?query=cheddar%20cheese&dataType=Branded&pageSize=20&pageNumber=1&sortBy=publishedDate&sortOrder=desc&api_key=\".concat(apiKey);\nfetch(baseURL).then(function (response) {\n  return response.json();\n}).then(function (data) {\n  // Object.assign(state, data.foods);\n  var foods = data.foods;\n  console.log(foods);\n});\nconsole.log(state);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;