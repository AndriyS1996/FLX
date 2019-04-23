/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/buttonOnclick.js":
/*!*********************************!*\
  !*** ./src/js/buttonOnclick.js ***!
  \*********************************/
/*! exports provided: histori, setClickRock, setClickPaper, setClickScissors, setClickReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"histori\", function() { return histori; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickRock\", function() { return setClickRock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickPaper\", function() { return setClickPaper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickScissors\", function() { return setClickScissors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setClickReset\", function() { return setClickReset; });\n/* harmony import */ var _finalResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finalResult */ \"./src/js/finalResult.js\");\n\nlet rock = document.getElementsByClassName('rock')[0];\nlet paper = document.getElementsByClassName('paper')[0];\nlet scissors = document.getElementsByClassName('scissors')[0];\nlet histori = document.getElementsByClassName('history-text')[0];\nlet yourImg = document.getElementsByClassName('image-1')[0];\nlet machineImg = document.getElementsByClassName('image-2')[0];\nlet choices = ['Rock', 'Paper', 'Scissors'];\nlet round = 0;\nlet yourPoints = 0;\nlet machinePoints = 0;\nlet yourChoice = '';\nlet machineChoice = '';\nlet roundResult = '';\nlet reset = document.getElementsByClassName('reset')[0];\nfunction setClickRock() {\n  rock.onclick = function () {\n    machineChoice = choices[Math.floor(Math.random() * 3)];\n    yourChoice = 'Rock';\n    yourImg.innerHTML = `<h4>Your move</h4>\n                            <img src=\"img/${yourChoice}.jpg\" alt=\"foto\">`;\n    machineImg.innerHTML = `<h4>Machine move</h4>\n                                <img src=\"img/${machineChoice}.jpg\" alt=\"foto\">`;\n    round++;\n\n    switch (machineChoice) {\n      case 'Rock':\n        roundResult = 'Draw';\n        break;\n\n      case 'Scissors':\n        roundResult = 'You`ve WON';\n        yourPoints++;\n        break;\n\n      case 'Paper':\n        roundResult = 'You`ve LOST';\n        machinePoints++;\n    }\n\n    histori.innerHTML += `<p>Round ${round}, ${yourChoice} vs ${machineChoice}, ${roundResult}</p>`;\n\n    if (round === 3) {\n      Object(_finalResult__WEBPACK_IMPORTED_MODULE_0__[\"finalResultPrint\"])(yourPoints, machinePoints);\n      round = 0;\n      yourPoints = 0;\n      machinePoints = 0;\n    }\n  };\n}\nfunction setClickPaper() {\n  paper.onclick = function () {\n    machineChoice = choices[Math.floor(Math.random() * 3)];\n    yourChoice = 'Paper';\n    yourImg.innerHTML = `<h4>Your move</h4>\n                            <img src=\"img/${yourChoice}.jpg\" alt=\"foto\">`;\n    machineImg.innerHTML = `<h4>Machine move</h4>\n                                <img src=\"img/${machineChoice}.jpg\" alt=\"foto\">`;\n    round++;\n\n    switch (machineChoice) {\n      case 'Rock':\n        roundResult = 'You`ve WON';\n        yourPoints++;\n        break;\n\n      case 'Scissors':\n        roundResult = 'You`ve LOST';\n        machinePoints++;\n        break;\n\n      case 'Paper':\n        roundResult = 'Draw';\n    }\n\n    histori.innerHTML += `<p>Round ${round}, ${yourChoice} vs ${machineChoice}, ${roundResult}</p>`;\n\n    if (round === 3) {\n      Object(_finalResult__WEBPACK_IMPORTED_MODULE_0__[\"finalResultPrint\"])(yourPoints, machinePoints);\n      round = 0;\n      yourPoints = 0;\n      machinePoints = 0;\n    }\n  };\n}\nfunction setClickScissors() {\n  scissors.onclick = function () {\n    machineChoice = choices[Math.floor(Math.random() * 3)];\n    yourChoice = 'Scissors';\n    yourImg.innerHTML = `<h4>Your move</h4>\n                            <img src=\"img/${yourChoice}.jpg\" alt=\"foto\">`;\n    machineImg.innerHTML = `<h4>Machine move</h4>\n                                <img src=\"img/${machineChoice}.jpg\" alt=\"foto\">`;\n    round++;\n\n    switch (machineChoice) {\n      case 'Rock':\n        roundResult = 'You`ve LOST';\n        machinePoints++;\n        break;\n\n      case 'Scissors':\n        roundResult = 'Draw';\n        break;\n\n      case 'Paper':\n        roundResult = 'You`ve WON';\n        yourPoints++;\n    }\n\n    histori.innerHTML += `<p>Round ${round}, ${yourChoice} vs ${machineChoice}, ${roundResult}</p>`;\n\n    if (round === 3) {\n      Object(_finalResult__WEBPACK_IMPORTED_MODULE_0__[\"finalResultPrint\"])(yourPoints, machinePoints);\n      round = 0;\n      yourPoints = 0;\n      machinePoints = 0;\n    }\n  };\n}\nfunction setClickReset() {\n  reset.onclick = () => {\n    round = 0;\n    yourPoints = 0;\n    machinePoints = 0;\n    histori.innerHTML = '';\n    yourImg.innerHTML = '';\n    machineImg.innerHTML = '';\n  };\n}\n\n//# sourceURL=webpack:///./src/js/buttonOnclick.js?");

/***/ }),

/***/ "./src/js/finalResult.js":
/*!*******************************!*\
  !*** ./src/js/finalResult.js ***!
  \*******************************/
/*! exports provided: finalResultPrint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finalResultPrint\", function() { return finalResultPrint; });\n/* harmony import */ var _buttonOnclick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonOnclick */ \"./src/js/buttonOnclick.js\");\n\nfunction finalResultPrint(yourPoints, machinePoints) {\n  if (yourPoints > machinePoints) {\n    _buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"histori\"].innerHTML += `<h4>Final result: You have won</h4>`;\n  }\n\n  if (yourPoints < machinePoints) {\n    _buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"histori\"].innerHTML += `<h4>Final result: You have lost</h4>`;\n  }\n\n  if (yourPoints === machinePoints) {\n    _buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"histori\"].innerHTML += `<h4>Final result: Draw</h4>`;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/finalResult.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttonOnclick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonOnclick */ \"./src/js/buttonOnclick.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"setClickPaper\"])();\nObject(_buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"setClickRock\"])();\nObject(_buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"setClickScissors\"])();\nObject(_buttonOnclick__WEBPACK_IMPORTED_MODULE_0__[\"setClickReset\"])();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });