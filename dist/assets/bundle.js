/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/script */ \"./src/scripts/script.js\");\n/* harmony import */ var _scripts_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/calendar */ \"./src/scripts/calendar.js\");\n\n //modal function\n\nvar modal = document.getElementById(\"myModal\");\nvar btn = document.getElementById(\"amenities-btn\");\nvar close = document.getElementsByClassName(\"close\")[0];\nbtn.addEventListener('click', function () {\n  modal.style.display = \"block\";\n});\nclose.addEventListener('click', function () {\n  modal.style.display = \"none\";\n});\nwindow.addEventListener('click', function (event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n}); //call navbar function\n\nvar nav = document.getElementById(\"navBar\");\nnav.addEventListener('click', function () {\n  (0,_scripts_script__WEBPACK_IMPORTED_MODULE_0__.toggle)();\n}); //show enquiry button on scroll\n\nwindow.addEventListener('scroll', function () {\n  (0,_scripts_script__WEBPACK_IMPORTED_MODULE_0__.showEnquiryBtn)();\n}); // window.onscroll = showEnquiryBtn();\n//show more text function\n\nvar moreText = document.getElementById(\"moreBtn\");\nmoreText.addEventListener('click', function () {\n  (0,_scripts_script__WEBPACK_IMPORTED_MODULE_0__.displayText)();\n}); //create calendar\n\nvar calendar = new _scripts_calendar__WEBPACK_IMPORTED_MODULE_1__.default();\ncalendar.renderCalendar();\ncalendar.prevMonth.addEventListener('click', function () {\n  calendar.date.setMonth(calendar.date.getMonth() - 1);\n  calendar.renderCalendar();\n});\ncalendar.nextMonth.addEventListener('click', function () {\n  // console.log(calendar.date);\n  calendar.date.setMonth(calendar.date.getMonth() + 1); // console.log(calendar.date);\n\n  calendar.renderCalendar();\n});\ncalendar.prevYear.addEventListener('click', function () {\n  calendar.date.setFullYear(calendar.date.getFullYear() - 1);\n  calendar.renderCalendar();\n});\ncalendar.nextYear.addEventListener('click', function () {\n  calendar.date.setFullYear(calendar.date.getFullYear() + 1);\n  calendar.renderCalendar();\n}); //listen for selected days\n//add conditional statement to check if id is before today\n\ncalendar.monthDays.addEventListener('click', function (e) {\n  if (e.target.classList.contains('day')) {\n    var dateId = parseInt(e.target.id);\n    var today = document.querySelector(\".today\");\n\n    if (calendar.date.getMonth() != new Date().getMonth() || calendar.date.getFullYear() != new Date().getFullYear() || dateId >= parseInt(today.id) && calendar.date.getMonth() === new Date().getMonth() && calendar.date.getFullYear() === new Date().getFullYear()) {\n      calendar.selectDays(dateId);\n    }\n  }\n});\n\n//# sourceURL=webpack://holiday_site/./src/index.js?");

/***/ }),

/***/ "./src/scripts/calendar.js":
/*!*********************************!*\
  !*** ./src/scripts/calendar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Calendar\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Calendar = /*#__PURE__*/function () {\n  function Calendar() {\n    _classCallCheck(this, Calendar);\n\n    this.date = new Date();\n    this.month = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    this.prevMonth = document.querySelector('.prev-month');\n    this.nextMonth = document.querySelector('.next-month');\n    this.prevYear = document.querySelector('.prev-year');\n    this.nextYear = document.querySelector('.next-year');\n    this.monthDays = document.querySelector('.days');\n    this.dateEnquiry = document.querySelector('.header');\n    this.selectedDateCounter = 0;\n    this.firstDateSelected = null;\n    this.secondDateSelected = null;\n    this.firstIndexSelected = null;\n    this.secondIndexSelected = null;\n    this.lastDate = null;\n    this.prevLastDate = null;\n    this.firstDayIndex = null;\n    this.lastDayIndex = null;\n    this.nextMonthDays = null;\n  }\n\n  _createClass(Calendar, [{\n    key: \"selectDays\",\n    value: function selectDays(dateId) {\n      this.selectedDateCounter++;\n      var newDateObject = this.createDateObject(dateId);\n\n      if (this.selectedDateCounter === 1 && !this.firstDateSelected) {\n        this.firstDateSelected = newDateObject;\n        this.firstIndexSelected = dateId;\n      } else if (this.selectedDateCounter === 2 && this.firstDateSelected < newDateObject) {\n        this.secondDateSelected = newDateObject;\n        this.secondIndexSelected = dateId;\n        this.renderUIDates();\n      } else {\n        this.firstDateSelected = newDateObject;\n        this.firstIndexSelected = dateId;\n        this.secondDateSelected = null;\n        this.secondIndexSelected = null;\n        this.selectedDateCounter = 1;\n        document.querySelectorAll('.day').forEach(function (item) {\n          item.classList.remove('clicked');\n          item.classList.remove('clicked-range');\n        });\n      }\n\n      this.highlightDays();\n    } // selectMultipleMonths () {\n\n  }, {\n    key: \"highlightDays\",\n    value: function highlightDays() {\n      if (this.selectedDateCounter === 1 && this.firstDateSelected >= this.createDateObject(0)) {\n        var target = document.getElementById(this.findIndexofDay(this.firstDateSelected));\n        target.classList.add('clicked');\n      } else if (this.selectedDateCounter === 2 && this.secondDateSelected > this.createDateObject(0)) {\n        if (this.findIndexofDay(this.firstDateSelected) && this.findIndexofDay(this.firstDateSelected) < 0) {\n          //update second index \n          this.secondIndexSelected = this.findIndexofDay(this.secondDateSelected);\n          var newSecondIndex = this.findIndexofDay(this.secondDateSelected);\n\n          var _target = document.getElementById(this.secondIndexSelected);\n\n          _target.classList.add('clicked'); //select everything from index 0 to this.findIndexOfDay(this.secondDateSelected)\n\n\n          for (var x = 0; x < this.secondIndexSelected; x++) {\n            var a = x.toString();\n            var b = document.getElementById(a);\n            b.classList.add('clicked-range');\n          }\n        } else if (this.findIndexofDay(this.firstDateSelected) && this.secondDateSelected > this.createDateObject(this.findLastIndex())) {\n          //select everything from first date selected to last day showing on calendar\n          var _target2 = document.getElementById(this.findIndexofDay(this.firstDateSelected));\n\n          if (_target2) {\n            _target2.classList.add('clicked');\n\n            for (var _x = this.findIndexofDay(this.firstDateSelected) + 1; _x <= this.findLastIndex(); _x++) {\n              var _a = _x.toString();\n\n              var _b = document.getElementById(_a);\n\n              _b.classList.add('clicked-range');\n            }\n          }\n        } else {\n          // both dates are on this page\n          var firsttarget = document.getElementById(this.findIndexofDay(this.firstDateSelected));\n          firsttarget.classList.add('clicked');\n          var secondtarget = document.getElementById(this.findIndexofDay(this.secondDateSelected));\n          secondtarget.classList.add('clicked');\n\n          for (var _x2 = this.findIndexofDay(this.firstDateSelected) + 1; _x2 < this.findIndexofDay(this.secondDateSelected); _x2++) {\n            var _a2 = _x2.toString();\n\n            var _b2 = document.getElementById(_a2);\n\n            _b2.classList.add('clicked-range');\n          }\n        }\n      }\n    }\n  }, {\n    key: \"createDateObject\",\n    value: function createDateObject(indexOfDay) {\n      var dayOfMonth = indexOfDay + 1 - this.firstDayIndex;\n      var month = this.date.getMonth();\n      var year = this.date.getFullYear();\n\n      if (dayOfMonth > this.lastDate) {\n        month++;\n        dayOfMonth = dayOfMonth - this.lastDate;\n\n        if (month > 11) {\n          year++;\n          month = month - 12;\n        }\n\n        ;\n      } else if (dayOfMonth < 1) {\n        month--;\n        dayOfMonth = this.prevLastDate + dayOfMonth;\n\n        if (month < 0) {\n          year--;\n          month = month + 12;\n        }\n\n        ;\n      }\n\n      ;\n      var dateObject = new Date(year, month, dayOfMonth);\n      return dateObject;\n    }\n  }, {\n    key: \"findIndexofDay\",\n    value: function findIndexofDay(dateObject) {\n      var date = dateObject.getDate();\n      var month = dateObject.getMonth();\n\n      if (month === this.date.getMonth() - 1) {\n        var prevLastDayIndex = this.firstDayIndex - 1;\n        var counterIndex = this.prevLastDate - date;\n        return prevLastDayIndex - counterIndex;\n      } else if (month === this.date.getMonth() + 1) {\n        return date + this.lastDate + (this.firstDayIndex - 1);\n      } else if (month === this.date.getMonth()) {\n        return date + (this.firstDayIndex - 1);\n      }\n\n      ;\n    }\n  }, {\n    key: \"findLastIndex\",\n    value: function findLastIndex() {\n      return this.firstDayIndex - 1 + this.lastDate + this.nextMonthDays;\n    }\n  }, {\n    key: \"calculateNights\",\n    value: function calculateNights() {\n      var timeDifference = this.secondDateSelected.getTime() - this.firstDateSelected.getTime();\n      return Math.round(timeDifference / (1000 * 3600 * 24));\n    }\n  }, {\n    key: \"renderUIDates\",\n    value: function renderUIDates() {\n      var options = {\n        weekday: 'long',\n        year: 'numeric',\n        month: 'long',\n        day: 'numeric'\n      };\n      var discount = this.calculateNights() * 47 * 0.1;\n      var roundedDiscount = discount.toFixed(2);\n      var totalPrice = this.calculateNights() * 47 - roundedDiscount;\n      var roundedTotalPrice = totalPrice.toFixed(2);\n      var priceBreakdown = document.querySelector('.price-breakdown');\n      var discountDisplay = document.querySelector('.price-filler');\n      this.dateEnquiry.innerHTML = \"<span class=\\\"white\\\">\".concat(this.firstDateSelected.toLocaleString('en-GB', options), \" - <br>\").concat(this.secondDateSelected.toLocaleString('en-GB', options), \"</span>\");\n      discountDisplay.classList.add('none');\n      document.querySelector(\"body > div.content-container > section.template.price > div.price-container > div.price-summary > button\").classList.remove('none');\n      priceBreakdown.innerHTML = \"<li class=\\\"flex\\\"><span class=\\\"calculate-nights\\\">\\xA348 x \".concat(this.calculateNights(), \" nights</span><span class=\\\"nights-price\\\">\\xA3\").concat((this.calculateNights() * 47).toFixed(2), \"</span></li>\\n                                    <li class=\\\"flex border\\\"><span><b>Total:</span><span>\\xA3\").concat(roundedTotalPrice, \"</b></span>\"); // priceBreakdown.classList.add('padding')\n\n      if (this.calculateNights() > 6) {\n        var li = document.createElement('li');\n        li.classList.add('flex');\n        li.innerHTML = \"<span>Weekly discount -10%</span><span>-\\xA3\".concat(roundedDiscount, \"</span>\");\n        priceBreakdown.insertBefore(li, priceBreakdown.firstElementChild.nextElementSibling);\n      }\n    }\n  }, {\n    key: \"renderCalendar\",\n    value: function renderCalendar() {\n      this.date.setDate(1);\n      this.lastDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();\n      this.prevLastDate = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();\n      this.firstDayIndex = this.date.getDay();\n      this.lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();\n      this.nextMonthDays = 7 - this.lastDayIndex - 1;\n      document.querySelector('.month').innerHTML = this.month[this.date.getMonth()];\n      document.querySelector('.year').innerHTML = this.date.getFullYear();\n      document.querySelector('.selected-date').innerHTML = new Date().toDateString();\n      var days = \"\";\n      var arrayIndex = 0; //count down to output last month days\n\n      for (var x = this.firstDayIndex; x > 0; x--) {\n        days += \"<div class=\\\"prev-date day\\\" id=\".concat(arrayIndex, \">\").concat(this.prevLastDate - x + 1, \"</div>\");\n        arrayIndex++;\n      }\n\n      ; //this month days\n\n      for (var i = 1; i <= this.lastDate; i++) {\n        if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth() && this.date.getFullYear() === new Date().getFullYear()) {\n          days += \"<div class=\\\"today day\\\" id=\".concat(arrayIndex, \">\").concat(i, \"</div>\");\n        } else {\n          days += \"<div class=\\\"day\\\" id=\".concat(arrayIndex, \">\").concat(i, \"</div>\");\n        }\n\n        arrayIndex++;\n      }\n\n      ; //next month days\n\n      for (var j = 1; j <= this.nextMonthDays; j++) {\n        days += \"<div class=\\\"next-date day\\\" id=\".concat(arrayIndex, \">\").concat(j, \"</div>\");\n        arrayIndex++;\n      }\n\n      ;\n      this.monthDays.innerHTML = days; // Highlighting any selected days\n\n      this.highlightDays(); //hide and show arrow icons\n\n      if (this.date.getFullYear() <= new Date().getFullYear() && this.date.getMonth() <= new Date().getMonth()) {\n        this.prevYear.classList.add('none');\n        this.prevMonth.classList.add('none');\n      } else if (this.date.getFullYear() <= new Date().getFullYear()) {\n        this.prevYear.classList.add('none');\n      }\n\n      ;\n\n      if (this.date.getFullYear() >= new Date().getFullYear() && this.date.getMonth() >= new Date().getMonth() + 1) {\n        this.prevMonth.classList.remove('none');\n      }\n\n      ;\n\n      if (this.date.getFullYear() > new Date().getFullYear()) {\n        this.prevYear.classList.remove('none');\n        this.prevMonth.classList.remove('none');\n      }\n\n      ;\n    }\n  }]);\n\n  return Calendar;\n}();\n\n;\n\n\n//# sourceURL=webpack://holiday_site/./src/scripts/calendar.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggle\": () => /* binding */ toggle,\n/* harmony export */   \"displayText\": () => /* binding */ displayText,\n/* harmony export */   \"showEnquiryBtn\": () => /* binding */ showEnquiryBtn\n/* harmony export */ });\n//responsive navbar function\nvar toggle = function toggle() {\n  var nav = document.getElementById(\"topnav\");\n  nav.className === \"topnav\" ? nav.className += \" responsive\" : nav.className = \"topnav\";\n}; //read more function in property description\n\n\nvar displayText = function displayText() {\n  var dots = document.getElementById(\"dots\");\n  var moreText = document.getElementById(\"more\");\n  var btnText = document.getElementById(\"moreBtn\");\n  var imageCards = document.getElementById(\"imageCards\");\n\n  if (dots.style.display === \"none\") {\n    dots.style.display = \"inline\";\n    btnText.innerHTML = \"Read more <i class='fas fa-angle-down'>\";\n    moreText.style.display = \"none\";\n    imageCards.style.marginBottom = \"0px\";\n  } else {\n    dots.style.display = \"none\";\n    btnText.innerHTML = \"Read less <i class='fas fa-angle-up'></i>\";\n    moreText.style.display = \"inline\";\n    imageCards.style.marginBottom = \"180px\";\n  }\n}; //hide and show get availability button on scroll\n\n\nvar showEnquiryBtn = function showEnquiryBtn() {\n  var enquiryBtn = document.getElementById(\"checkAvailabilityBtn\");\n\n  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n    enquiryBtn.style.display = \"block\";\n  } else {\n    enquiryBtn.style.display = \"none\";\n  }\n}; // window.onscroll = showEnquiryBtn();\n\n\n\n\n//# sourceURL=webpack://holiday_site/./src/scripts/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;