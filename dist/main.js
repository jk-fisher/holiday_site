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

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (11:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|  */\\n| \\n> html {\\n|   line-height: 1.15; /* 1 */\\n|   -webkit-text-size-adjust: 100%; /* 2 */\");\n\n//# sourceURL=webpack://holiday_site/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/script'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/calendar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//modal function\r\nconst modal = document.getElementById(\"myModal\");\r\nconst btn = document.getElementById(\"amenities-btn\");\r\nconst close = document.getElementsByClassName(\"close\")[0];\r\n\r\nbtn.addEventListener('click', () => {\r\n  modal.style.display = \"block\";\r\n});\r\n\r\nclose.addEventListener('click', () => {\r\n  modal.style.display = \"none\";\r\n});\r\n\r\nwindow.addEventListener('click', (event) => {\r\n  if(event.target == modal) {\r\n    modal.style.display = \"none\";\r\n  }\r\n});\r\n\r\n//call navbar function\r\nconst burgerBar = document.getElementById(\"navbar\");\r\nburgerBar.addEventListener('click', () => {\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/script'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(burgerBar);\r\n    // console.log('i am updated')\r\n});\r\nconst navItems = document.querySelectorAll('.nav-item');\r\nnavItems.forEach((li) => {\r\n  li.addEventListener('click', () => {\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/script'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(burgerBar);\r\n  })\r\n})\r\n\r\n//show enquiry button on scroll\r\n// window.addEventListener('scroll', () => {\r\n//     showEnquiryBtn();\r\n// })\r\n\r\n//show more text function\r\nconst moreText = document.getElementById(\"moreBtn\");\r\nmoreText.addEventListener('click', () => {\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/script'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n})\r\n\r\n//create calendar\r\nconst calendar = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../scripts/calendar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\ncalendar.renderCalendar();\r\n\r\n\r\ncalendar.prevMonth.addEventListener('click', () =>{\r\n    calendar.date.setMonth(calendar.date.getMonth()-1);\r\n    calendar.renderCalendar();\r\n});\r\ncalendar.nextMonth.addEventListener('click', () => {\r\n    // console.log(calendar.date);\r\n    calendar.date.setMonth(calendar.date.getMonth()+1);\r\n    // console.log(calendar.date);\r\n    calendar.renderCalendar();\r\n});\r\ncalendar.prevYear.addEventListener('click', () =>{\r\n    calendar.date.setFullYear(calendar.date.getFullYear()-1);\r\n    calendar.renderCalendar();\r\n});\r\ncalendar.nextYear.addEventListener('click', () => {\r\n    calendar.date.setFullYear(calendar.date.getFullYear()+1);\r\n    calendar.renderCalendar();\r\n});\r\n\r\n//listen for selected days\r\n//add conditional statement to check if id is before today\r\ncalendar.monthDays.addEventListener('click', e => {\r\n  if(e.target.classList.contains('day')){\r\n      const dateId = parseInt(e.target.id);\r\n      const today = document.querySelector(\".today\");\r\n      if((calendar.date.getMonth() != new Date().getMonth() ||\r\n      calendar.date.getFullYear() != new Date().getFullYear()) \r\n      ||\r\n      (dateId >= parseInt(today.id) && \r\n      calendar.date.getMonth() === new Date().getMonth() && \r\n      calendar.date.getFullYear() === new Date().getFullYear())){\r\n          calendar.selectDays(dateId);\r\n      }\r\n\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://holiday_site/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;