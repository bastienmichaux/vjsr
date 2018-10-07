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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar myConstants = (function () {\r\n    'use strict';\r\n    return {\r\n        appRootId: 'app-root',\r\n        appTitle: 'rpg',\r\n        appVersion: '0.0.0'\r\n    };\r\n})();\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (myConstants);\r\n\n\n//# sourceURL=webpack:///./src/constants/constants.ts?");

/***/ }),

/***/ "./src/lib/lib.ts":
/*!************************!*\
  !*** ./src/lib/lib.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar myLib = (function () {\r\n    'use strict';\r\n    var getElement = function (pojo) {\r\n        var rootElem = document.createElement(pojo.element);\r\n        if (pojo.textContent) {\r\n            rootElem.textContent = pojo.textContent;\r\n        }\r\n        if (pojo.children) {\r\n            var children = pojo.children;\r\n            children.forEach(function (child) {\r\n                rootElem.appendChild(getElement(child));\r\n            });\r\n        }\r\n        return rootElem;\r\n    };\r\n    return {\r\n        getElement: getElement\r\n    };\r\n})();\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (myLib);\r\n\n\n//# sourceURL=webpack:///./src/lib/lib.ts?");

/***/ }),

/***/ "./src/main/main.ts":
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/view */ \"./src/services/view.ts\");\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/home */ \"./src/views/home.ts\");\n\r\n\r\n(function (myViewService, myHomeView) {\r\n    'use strict';\r\n    document.title = 'lol';\r\n    var view = myHomeView.template('lol');\r\n    myViewService.setView(view);\r\n})(_services_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _views_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./src/main/main.ts?");

/***/ }),

/***/ "./src/services/view.ts":
/*!******************************!*\
  !*** ./src/services/view.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/lib */ \"./src/lib/lib.ts\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ \"./src/constants/constants.ts\");\n\r\n\r\nvar myViewService = (function (myLib, myConstants) {\r\n    'use strict';\r\n    var setView = function (view) {\r\n        var appRoot = document.getElementById(myConstants.appRootId);\r\n        while (appRoot.firstChild) {\r\n            appRoot.removeChild(appRoot.firstChild);\r\n        }\r\n        appRoot.appendChild(myLib.getElement(view));\r\n    };\r\n    return {\r\n        setView: setView\r\n    };\r\n})(_lib_lib__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _constants_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (myViewService);\r\n\n\n//# sourceURL=webpack:///./src/services/view.ts?");

/***/ }),

/***/ "./src/views/home.ts":
/*!***************************!*\
  !*** ./src/views/home.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar myHomeView = (function () {\r\n    'use strict';\r\n    var template = function (param) {\r\n        return {\r\n            element: 'div',\r\n            children: [\r\n                {\r\n                    element: 'p',\r\n                    textContent: 'Paragraph 1'\r\n                },\r\n                {\r\n                    element: 'p',\r\n                    textContent: param\r\n                }\r\n            ]\r\n        };\r\n    };\r\n    return {\r\n        template: template\r\n    };\r\n})();\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (myHomeView);\r\n\n\n//# sourceURL=webpack:///./src/views/home.ts?");

/***/ })

/******/ });