module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LeaderboardList.tsx":
/*!****************************************!*\
  !*** ./components/LeaderboardList.tsx ***!
  \****************************************/
/*! exports provided: LeaderboardList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardList", function() { return LeaderboardList; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Jose\\Desktop\\web3-tutorial\\components\\LeaderboardList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function LeaderboardList() {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Table"], {
    variant: "simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Thead"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Tr"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Th"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "# of Votes"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Th"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Name"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Th"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Data Feed"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Th"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Action"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Tbody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Tr"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Stat"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatNumber"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "670"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatHelpText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatArrow"], {
    type: "increase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }), "23.36%"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "NET"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "No Existing Feed"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], {
    variant: "outline",
    spacing: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    isLoading: true,
    colorScheme: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Vote")))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Tr"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Stat"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatNumber"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "85"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatHelpText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatArrow"], {
    type: "increase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), "13.29%"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "GME"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "https://etherscan.io/address/0xDC530D9457755926550b59e8ECcdaE7624181557",
    isExternal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Existing Feed ", __jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["ExternalLinkIcon"], {
    mx: "2px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 35
    }
  }))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], {
    variant: "outline",
    spacing: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    colorScheme: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "Vote")))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Tr"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Stat"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatNumber"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, "15"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatHelpText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["StatArrow"], {
    type: "increase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }), "7.24%"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "JPY"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    href: "https://etherscan.io/address/0xDC530D9457755926550b59e8ECcdaE7624181557",
    isExternal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Existing Feed ", __jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["ExternalLinkIcon"], {
    mx: "2px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 35
    }
  }))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Td"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], {
    variant: "outline",
    spacing: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    colorScheme: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "Vote"))))));
}

/***/ }),

/***/ "./components/ProposalInput.tsx":
/*!**************************************!*\
  !*** ./components/ProposalInput.tsx ***!
  \**************************************/
/*! exports provided: ProposalInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalInput", function() { return ProposalInput; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Jose\\Desktop\\web3-tutorial\\components\\ProposalInput.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ProposalInput() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    id: "synth",
    isRequired: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Synth Name"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Please use ticker symbol (Ex. TSLA instead of Tesla)")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["FormControl"], {
    id: "feed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["FormLabel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Data Feed"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Input"], {
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Please use contract address (Ex. 0xDC530D9457755926550b59e8ECcdaE7624181557)")), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    mt: 4,
    colorScheme: "teal",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Submit"));
}

/***/ }),

/***/ "./components/Spinner.tsx":
/*!********************************!*\
  !*** ./components/Spinner.tsx ***!
  \********************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Jose\\Desktop\\web3-tutorial\\components\\Spinner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->

function Spinner(_ref) {
  let {
    color
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color"]);

  return __jsx("svg", _extends({
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("g", {
    transform: "translate(1 1)",
    strokeWidth: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./connectors.ts":
/*!***********************!*\
  !*** ./connectors.ts ***!
  \***********************/
/*! exports provided: injected, network, walletconnect, walletlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injected", function() { return injected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "network", function() { return network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletconnect", function() { return walletconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletlink", function() { return walletlink; });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/network-connector */ "@web3-react/network-connector");
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletlink-connector */ "@web3-react/walletlink-connector");
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__);




const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213"
};
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__["InjectedConnector"]({
  supportedChainIds: [1, 3, 4, 5, 42]
});
const network = new _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__["NetworkConnector"]({
  urls: {
    1: RPC_URLS[1],
    4: RPC_URLS[4]
  },
  defaultChainId: 1
});
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__["WalletConnectConnector"]({
  rpc: {
    1: RPC_URLS[1]
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});
const walletlink = new _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__["WalletLinkConnector"]({
  url: RPC_URLS[1],
  appName: 'web3-react example'
});

/***/ }),

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/*! exports provided: useEagerConnect, useInactiveListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEagerConnect", function() { return useEagerConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInactiveListener", function() { return useInactiveListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ "./connectors.ts");



function useEagerConnect() {
  const {
    activate,
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    0: tried,
    1: setTried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _connectors__WEBPACK_IMPORTED_MODULE_2__["injected"].isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}
function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleChainChanged = chainId => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleAccountsChanged = accounts => {
        console.log("Handling 'accountsChanged' event with payload", accounts);

        if (accounts.length > 0) {
          activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
        }
      };

      const handleNetworkChanged = networkId => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ "@ethersproject/units");
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme */ "./theme.ts");
/* harmony import */ var _components_LeaderboardList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LeaderboardList */ "./components/LeaderboardList.tsx");
/* harmony import */ var _components_ProposalInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ProposalInput */ "./components/ProposalInput.tsx");
var _jsxFileName = "C:\\Users\\Jose\\Desktop\\web3-tutorial\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var ConnectorNames;

(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Injected";
  ConnectorNames["Network"] = "Network";
  ConnectorNames["WalletConnect"] = "WalletConnect";
  ConnectorNames["WalletLink"] = "WalletLink";
})(ConnectorNames || (ConnectorNames = {}));

const connectorsByName = {
  [ConnectorNames.Injected]: _connectors__WEBPACK_IMPORTED_MODULE_9__["injected"],
  [ConnectorNames.Network]: _connectors__WEBPACK_IMPORTED_MODULE_9__["network"],
  [ConnectorNames.WalletConnect]: _connectors__WEBPACK_IMPORTED_MODULE_9__["walletconnect"],
  [ConnectorNames.WalletLink]: _connectors__WEBPACK_IMPORTED_MODULE_9__["walletlink"]
};

function getErrorMessage(error) {
  if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["NoEthereumProviderError"]) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_1__["UnsupportedChainIdError"]) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"]) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

function getLibrary(provider) {
  const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["ChakraProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["Web3ReactProvider"], {
    getLibrary: getLibrary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
});

function ChainId() {
  const {
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, chainId !== null && chainId !== void 0 ? chainId : ''));
}

function BlockNumber() {
  const {
    chainId,
    library
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const [blockNumber, setBlockNumber] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!!library) {
      let stale = false;
      library.getBlockNumber().then(blockNumber => {
        if (!stale) {
          setBlockNumber(blockNumber);
        }
      }).catch(() => {
        if (!stale) {
          setBlockNumber(null);
        }
      });

      const updateBlockNumber = blockNumber => {
        setBlockNumber(blockNumber);
      };

      library.on('block', updateBlockNumber);
      return () => {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "Block Number"), __jsx("span", {
    role: "img",
    "aria-label": "numbers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "\uD83D\uDD22"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, blockNumber === null ? 'Error' : blockNumber !== null && blockNumber !== void 0 ? blockNumber : ''));
}

function Account() {
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, account === null ? '-' : account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''));
}

function Balance() {
  const {
    account,
    library,
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const [balance, setBalance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!!account && !!library) {
      let stale = false;
      library.getBalance(account).then(balance => {
        if (!stale) {
          setBalance(balance);
        }
      }).catch(() => {
        if (!stale) {
          setBalance(null);
        }
      });
      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }
  }, balance === null ? 'Error' : balance ? `Ξ${Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__["formatEther"])(balance)}` : ''));
}

function Header() {
  const {
    active,
    error
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    style: {
      margin: '1rem',
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, active ? '🟢' : error ? '🔴' : '🟠'), __jsx("h3", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr min-content 1fr',
      maxWidth: '20rem',
      lineHeight: '2rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, __jsx(ChainId, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }), __jsx(BlockNumber, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }), __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  })));
}

function App() {
  const context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context; // handle logic to recognize the connector currently being activated

  const [activatingConnector, setActivatingConnector] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  const triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useInactiveListener"])(!triedEager || !!activatingConnector);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    maxW: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, __jsx(_components_LeaderboardList__WEBPACK_IMPORTED_MODULE_12__["LeaderboardList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }), __jsx(_components_ProposalInput__WEBPACK_IMPORTED_MODULE_13__["ProposalInput"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  })), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }
  }), __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '20rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }
  }, Object.keys(connectorsByName).map(name => {
    const currentConnector = connectorsByName[name];
    const activating = currentConnector === activatingConnector;
    const connected = currentConnector === connector;
    const disabled = !triedEager || !!activatingConnector || connected || !!error;
    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
        cursor: disabled ? 'unset' : 'pointer',
        position: 'relative'
      },
      disabled: disabled,
      key: name,
      onClick: () => {
        setActivatingConnector(currentConnector);
        activate(connectorsByName[name]);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        margin: '0 0 0 1rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 15
      }
    }, activating && __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
      color: 'black',
      style: {
        height: '25%',
        marginLeft: '-1rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 19
      }
    }, "\u2705")), name);
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 7
    }
  }, (active || error) && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: {
      height: '3rem',
      marginTop: '2rem',
      borderRadius: '1rem',
      borderColor: 'red',
      cursor: 'pointer'
    },
    onClick: () => {
      deactivate();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }, "Deactivate"), !!error && __jsx("h4", {
    style: {
      marginTop: '1rem',
      marginBottom: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: 'fit-content',
      maxWidth: '20rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 7
    }
  }, !!(library && account) && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "primary",
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: () => {
      library.getSigner(account).signMessage('👋').then(signature => {
        window.alert(`Success!\n\n${signature}`);
      }).catch(error => {
        window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''));
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 11
    }
  }, "Sign Message"), !!(connector === connectorsByName[ConnectorNames.Network] && chainId) && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: () => {
      ;
      connector.changeChainId(chainId === 1 ? 4 : 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, "Switch Networks")));
}

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
 // 2. Add your color mode config

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
}; // 3. extend the theme

const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  config
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@ethersproject/units":
/*!***************************************!*\
  !*** external "@ethersproject/units" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/frame-connector":
/*!**********************************************!*\
  !*** external "@web3-react/frame-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/frame-connector");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "@web3-react/network-connector":
/*!************************************************!*\
  !*** external "@web3-react/network-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/network-connector");

/***/ }),

/***/ "@web3-react/walletconnect-connector":
/*!******************************************************!*\
  !*** external "@web3-react/walletconnect-connector" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ "@web3-react/walletlink-connector":
/*!***************************************************!*\
  !*** external "@web3-react/walletlink-connector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletlink-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MZWFkZXJib2FyZExpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvcG9zYWxJbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25uZWN0b3JzLnRzIiwid2VicGFjazovLy8uL2hvb2tzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi90aGVtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC93YWxsZXRsaW5rLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTGVhZGVyYm9hcmRMaXN0IiwiUHJvcG9zYWxJbnB1dCIsIlNwaW5uZXIiLCJjb2xvciIsInJlc3QiLCJQT0xMSU5HX0lOVEVSVkFMIiwiUlBDX1VSTFMiLCJwcm9jZXNzIiwiUlBDX1VSTF80IiwiaW5qZWN0ZWQiLCJJbmplY3RlZENvbm5lY3RvciIsInN1cHBvcnRlZENoYWluSWRzIiwibmV0d29yayIsIk5ldHdvcmtDb25uZWN0b3IiLCJ1cmxzIiwiZGVmYXVsdENoYWluSWQiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsInJwYyIsImJyaWRnZSIsInFyY29kZSIsInBvbGxpbmdJbnRlcnZhbCIsIndhbGxldGxpbmsiLCJXYWxsZXRMaW5rQ29ubmVjdG9yIiwidXJsIiwiYXBwTmFtZSIsInVzZUVhZ2VyQ29ubmVjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwidXNlV2ViM1JlYWN0IiwidHJpZWQiLCJzZXRUcmllZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaXNBdXRob3JpemVkIiwidGhlbiIsInVuZGVmaW5lZCIsImNhdGNoIiwidXNlSW5hY3RpdmVMaXN0ZW5lciIsInN1cHByZXNzIiwiZXJyb3IiLCJldGhlcmV1bSIsIndpbmRvdyIsIm9uIiwiaGFuZGxlQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJjaGFpbklkIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJoYW5kbGVOZXR3b3JrQ2hhbmdlZCIsIm5ldHdvcmtJZCIsInJlbW92ZUxpc3RlbmVyIiwiQ29ubmVjdG9yTmFtZXMiLCJjb25uZWN0b3JzQnlOYW1lIiwiSW5qZWN0ZWQiLCJOZXR3b3JrIiwiV2FsbGV0Q29ubmVjdCIsIldhbGxldExpbmsiLCJnZXRFcnJvck1lc3NhZ2UiLCJOb0V0aGVyZXVtUHJvdmlkZXJFcnJvciIsIlVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwidGhlbWUiLCJDaGFpbklkIiwiQmxvY2tOdW1iZXIiLCJibG9ja051bWJlciIsInNldEJsb2NrTnVtYmVyIiwiUmVhY3QiLCJzdGFsZSIsImdldEJsb2NrTnVtYmVyIiwidXBkYXRlQmxvY2tOdW1iZXIiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsIkhlYWRlciIsIm1hcmdpbiIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGluZ0Nvbm5lY3RvciIsInNldEFjdGl2YXRpbmdDb25uZWN0b3IiLCJ0cmllZEVhZ2VyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsInNpZ25hdHVyZSIsImFsZXJ0IiwibWVzc2FnZSIsImNoYW5nZUNoYWluSWQiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwiZXh0ZW5kVGhlbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LEtBakJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkosRUFnQ0csQ0FBQyxFQUFFN0IsU0FBUyxLQUFLMUMsZ0JBQWdCLENBQUNELGNBQWMsQ0FBQ0csT0FBaEIsQ0FBOUIsSUFBMERWLE9BQTVELENBQUQsSUFDQyxNQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0wrRCxZQUFNLEVBQUUsTUFESDtBQUVMQyxrQkFBWSxFQUFFLE1BRlQ7QUFHTEUsWUFBTSxFQUFFO0FBSEgsS0FEVDtBQU1FLFdBQU8sRUFBRSxNQUFNO0FBQ2I7QUFBRWhCLGVBQUQsQ0FBbUI4QixhQUFuQixDQUFpQ2hGLE9BQU8sS0FBSyxDQUFaLEdBQWdCLENBQWhCLEdBQW9CLENBQXJEO0FBQ0YsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpDSixDQXRGRixDQURGO0FBd0lELEM7Ozs7Ozs7Ozs7OztBQ2xYRDtBQUFBO0FBQUE7Q0FFQTs7QUFDQSxNQUFNaUYsTUFBTSxHQUFHO0FBQ2JDLGtCQUFnQixFQUFFLE1BREw7QUFFYkMsb0JBQWtCLEVBQUU7QUFGUCxDQUFmLEMsQ0FLQTs7QUFDQSxNQUFNNUQsS0FBSyxHQUFHNkQsb0VBQVcsQ0FBQztBQUFFSDtBQUFGLENBQUQsQ0FBekI7QUFFZTFELG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDWkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB7XHJcbiAgICBUYWJsZSxcclxuICAgIFRoZWFkLFxyXG4gICAgVGJvZHksXHJcbiAgICBUZm9vdCxcclxuICAgIFRyLFxyXG4gICAgVGgsXHJcbiAgICBUZCxcclxuICAgIEJ1dHRvbixcclxuICAgIExpbmssXHJcbiAgICBTdGF0R3JvdXAsXHJcbiAgICBTdGF0LFxyXG4gICAgU3RhdExhYmVsLFxyXG4gICAgQnV0dG9uR3JvdXAsXHJcbiAgICBTdGF0SGVscFRleHQsXHJcbiAgICBTdGF0TnVtYmVyLFxyXG4gICAgVGFibGVDYXB0aW9uLFxyXG4gICAgU3RhdEFycm93XHJcbiAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBFeHRlcm5hbExpbmtJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhZGVyYm9hcmRMaXN0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGUgdmFyaWFudD1cInNpbXBsZVwiPlxyXG4gICAgPFRoZWFkPlxyXG4gICAgICAgIDxUcj5cclxuICAgICAgICA8VGg+IyBvZiBWb3RlczwvVGg+XHJcbiAgICAgICAgPFRoPk5hbWU8L1RoPlxyXG4gICAgICAgIDxUaD5EYXRhIEZlZWQ8L1RoPlxyXG4gICAgICAgIDxUaD5BY3Rpb248L1RoPlxyXG4gICAgICAgIDwvVHI+XHJcbiAgICA8L1RoZWFkPlxyXG4gICAgPFRib2R5PlxyXG4gICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPlxyXG4gICAgICAgICAgICAgICAgPFN0YXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXROdW1iZXI+NjcwPC9TdGF0TnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0QXJyb3cgdHlwZT1cImluY3JlYXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMjMuMzYlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcbiAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD5ORVQ8L1RkPlxyXG4gICAgICAgICAgICA8VGQ+Tm8gRXhpc3RpbmcgRmVlZDwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCB2YXJpYW50PVwib3V0bGluZVwiIHNwYWNpbmc9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc0xvYWRpbmcgY29sb3JTY2hlbWU9XCJibHVlXCI+Vm90ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPC9UZD5cclxuICAgICAgICA8L1RyPlxyXG4gICAgICAgIDxUcj5cclxuICAgICAgICAgICAgPFRkPlxyXG4gICAgICAgICAgICAgICAgPFN0YXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXROdW1iZXI+ODU8L1N0YXROdW1iZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0YXRIZWxwVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRBcnJvdyB0eXBlPVwiaW5jcmVhc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMy4yOSVcclxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRIZWxwVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvU3RhdD5cclxuICAgICAgICAgICAgPC9UZD5cclxuICAgICAgICAgICAgPFRkPkdNRTwvVGQ+XHJcbiAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4REM1MzBEOTQ1Nzc1NTkyNjU1MGI1OWU4RUNjZGFFNzYyNDE4MTU1N1wiIGlzRXh0ZXJuYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhpc3RpbmcgRmVlZCA8RXh0ZXJuYWxMaW5rSWNvbiBteD1cIjJweFwiIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgdmFyaWFudD1cIm91dGxpbmVcIiBzcGFjaW5nPVwiNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCI+Vm90ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPC9UZD5cclxuICAgICAgICA8L1RyPlxyXG4gICAgICAgIDxUcj5cclxuICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAgICA8U3RhdD5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdE51bWJlcj4xNTwvU3RhdE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdEhlbHBUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdEFycm93IHR5cGU9XCJpbmNyZWFzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDcuMjQlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdGF0SGVscFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1N0YXQ+XHJcbiAgICAgICAgPC9UZD5cclxuICAgICAgICA8VGQ+SlBZPC9UZD5cclxuICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2V0aGVyc2Nhbi5pby9hZGRyZXNzLzB4REM1MzBEOTQ1Nzc1NTkyNjU1MGI1OWU4RUNjZGFFNzYyNDE4MTU1N1wiIGlzRXh0ZXJuYWw+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhpc3RpbmcgRmVlZCA8RXh0ZXJuYWxMaW5rSWNvbiBteD1cIjJweFwiIC8+IFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UZD5cclxuICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCB2YXJpYW50PVwib3V0bGluZVwiIHNwYWNpbmc9XCI1XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlZvdGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICA8L1RkPlxyXG4gICAgICAgIDwvVHI+XHJcbiAgICA8L1Rib2R5PlxyXG4gICAgey8qIDxUZm9vdD5cclxuICAgICAgICA8VHI+XHJcbiAgICAgICAgPFRoPlRvIGNvbnZlcnQ8L1RoPlxyXG4gICAgICAgIDxUaD5pbnRvPC9UaD5cclxuICAgICAgICA8VGggaXNOdW1lcmljPm11bHRpcGx5IGJ5PC9UaD5cclxuICAgICAgICA8L1RyPlxyXG4gICAgPC9UZm9vdD4gKi99XHJcbjwvVGFibGU+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZvcm1MYWJlbCxcclxuICAgIEZvcm1FcnJvck1lc3NhZ2UsXHJcbiAgICBCdXR0b24sXHJcbiAgICBJbnB1dCxcclxuICAgIEZvcm1IZWxwZXJUZXh0LFxyXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9wb3NhbElucHV0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgaWQ9XCJzeW50aFwiIGlzUmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlN5bnRoIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+UGxlYXNlIHVzZSB0aWNrZXIgc3ltYm9sIChFeC4gVFNMQSBpbnN0ZWFkIG9mIFRlc2xhKTwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpZD1cImZlZWRcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RGF0YSBGZWVkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlBsZWFzZSB1c2UgY29udHJhY3QgYWRkcmVzcyAoRXguIDB4REM1MzBEOTQ1Nzc1NTkyNjU1MGI1OWU4RUNjZGFFNzYyNDE4MTU1Nyk8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG10PXs0fSBjb2xvclNjaGVtZT1cInRlYWxcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIDwhLS0gQnkgU2FtIEhlcmJlcnQgKEBzaGVyYiksIGZvciBldmVyeW9uZS4gTW9yZSBAIGh0dHA6Ly9nb28uZ2wvN0FKemJMIC0tPlxuZXhwb3J0IGZ1bmN0aW9uIFNwaW5uZXIoeyBjb2xvciwgLi4ucmVzdCB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzggMzhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPXtjb2xvcn0gey4uLnJlc3R9PlxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEgMSlcIiBzdHJva2VXaWR0aD1cIjJcIj5cbiAgICAgICAgICA8Y2lyY2xlIHN0cm9rZU9wYWNpdHk9XCIuNVwiIGN4PVwiMThcIiBjeT1cIjE4XCIgcj1cIjE4XCIgLz5cbiAgICAgICAgICA8cGF0aCBkPVwiTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4XCI+XG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXG4gICAgICAgICAgICAgIGZyb209XCIwIDE4IDE4XCJcbiAgICAgICAgICAgICAgdG89XCIzNjAgMTggMThcIlxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCJpbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IE5ldHdvcmtDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9uZXR3b3JrLWNvbm5lY3RvcidcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcbmltcG9ydCB7IFdhbGxldExpbmtDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRsaW5rLWNvbm5lY3RvcidcblxuY29uc3QgUE9MTElOR19JTlRFUlZBTCA9IDEyMDAwXG5jb25zdCBSUENfVVJMUzogeyBbY2hhaW5JZDogbnVtYmVyXTogc3RyaW5nIH0gPSB7XG4gIDE6IHByb2Nlc3MuZW52LlJQQ19VUkxfMSBhcyBzdHJpbmcsXG4gIDQ6IHByb2Nlc3MuZW52LlJQQ19VUkxfNCBhcyBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFsxLCAzLCA0LCA1LCA0Ml0gfSlcblxuZXhwb3J0IGNvbnN0IG5ldHdvcmsgPSBuZXcgTmV0d29ya0Nvbm5lY3Rvcih7XG4gIHVybHM6IHsgMTogUlBDX1VSTFNbMV0sIDQ6IFJQQ19VUkxTWzRdIH0sXG4gIGRlZmF1bHRDaGFpbklkOiAxXG59KVxuXG5leHBvcnQgY29uc3Qgd2FsbGV0Y29ubmVjdCA9IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcbiAgcnBjOiB7IDE6IFJQQ19VUkxTWzFdIH0sXG4gIGJyaWRnZTogJ2h0dHBzOi8vYnJpZGdlLndhbGxldGNvbm5lY3Qub3JnJyxcbiAgcXJjb2RlOiB0cnVlLFxuICBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUxcbn0pXG5cbmV4cG9ydCBjb25zdCB3YWxsZXRsaW5rID0gbmV3IFdhbGxldExpbmtDb25uZWN0b3Ioe1xuICB1cmw6IFJQQ19VUkxTWzFdLFxuICBhcHBOYW1lOiAnd2ViMy1yZWFjdCBleGFtcGxlJ1xufSlcblxuXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuXG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gJy4vY29ubmVjdG9ycydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVhZ2VyQ29ubmVjdCgpIHtcbiAgY29uc3QgeyBhY3RpdmF0ZSwgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKVxuXG4gIGNvbnN0IFt0cmllZCwgc2V0VHJpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbmplY3RlZC5pc0F1dGhvcml6ZWQoKS50aGVuKChpc0F1dGhvcml6ZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHNldFRyaWVkKHRydWUpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUcmllZCh0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIFtdKSAvLyBpbnRlbnRpb25hbGx5IG9ubHkgcnVubmluZyBvbiBtb3VudCAobWFrZSBzdXJlIGl0J3Mgb25seSBtb3VudGVkIG9uY2UgOikpXG5cbiAgLy8gaWYgdGhlIGNvbm5lY3Rpb24gd29ya2VkLCB3YWl0IHVudGlsIHdlIGdldCBjb25maXJtYXRpb24gb2YgdGhhdCB0byBmbGlwIHRoZSBmbGFnXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0cmllZCAmJiBhY3RpdmUpIHtcbiAgICAgIHNldFRyaWVkKHRydWUpXG4gICAgfVxuICB9LCBbdHJpZWQsIGFjdGl2ZV0pXG5cbiAgcmV0dXJuIHRyaWVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmFjdGl2ZUxpc3RlbmVyKHN1cHByZXNzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yLCBhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KClcblxuICB1c2VFZmZlY3QoKCk6IGFueSA9PiB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93IGFzIGFueVxuICAgIGlmIChldGhlcmV1bSAmJiBldGhlcmV1bS5vbiAmJiAhYWN0aXZlICYmICFlcnJvciAmJiAhc3VwcHJlc3MpIHtcbiAgICAgIGNvbnN0IGhhbmRsZUNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2Nvbm5lY3QnIGV2ZW50XCIpXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxuICAgICAgfVxuICAgICAgY29uc3QgaGFuZGxlQ2hhaW5DaGFuZ2VkID0gKGNoYWluSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdjaGFpbkNoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBjaGFpbklkKVxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhY2NvdW50czogc3RyaW5nW10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnYWNjb3VudHNDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgYWNjb3VudHMpXG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhbmRsZU5ldHdvcmtDaGFuZ2VkID0gKG5ldHdvcmtJZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ25ldHdvcmtDaGFuZ2VkJyBldmVudCB3aXRoIHBheWxvYWRcIiwgbmV0d29ya0lkKVxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcbiAgICAgIH1cblxuICAgICAgZXRoZXJldW0ub24oJ2Nvbm5lY3QnLCBoYW5kbGVDb25uZWN0KVxuICAgICAgZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZClcbiAgICAgIGV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXG4gICAgICBldGhlcmV1bS5vbignbmV0d29ya0NoYW5nZWQnLCBoYW5kbGVOZXR3b3JrQ2hhbmdlZClcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2Nvbm5lY3QnLCBoYW5kbGVDb25uZWN0KVxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBoYW5kbGVDaGFpbkNoYW5nZWQpXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignbmV0d29ya0NoYW5nZWQnLCBoYW5kbGVOZXR3b3JrQ2hhbmdlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjdGl2ZSwgZXJyb3IsIHN1cHByZXNzLCBhY3RpdmF0ZV0pXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXG5pbXBvcnQge1xuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuXG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QsIHVzZUluYWN0aXZlTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcydcbmltcG9ydCB7XG4gIGluamVjdGVkLFxuICBuZXR3b3JrLFxuICB3YWxsZXRjb25uZWN0LFxuICB3YWxsZXRsaW5rLFxufSBmcm9tICcuLi9jb25uZWN0b3JzJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcbmltcG9ydCB7IExlYWRlcmJvYXJkTGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGVhZGVyYm9hcmRMaXN0J1xuaW1wb3J0IHsgUHJvcG9zYWxJbnB1dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvcG9zYWxJbnB1dCdcblxuZW51bSBDb25uZWN0b3JOYW1lcyB7XG4gIEluamVjdGVkID0gJ0luamVjdGVkJyxcbiAgTmV0d29yayA9ICdOZXR3b3JrJyxcbiAgV2FsbGV0Q29ubmVjdCA9ICdXYWxsZXRDb25uZWN0JyxcbiAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcbn1cblxuY29uc3QgY29ubmVjdG9yc0J5TmFtZTogeyBbY29ubmVjdG9yTmFtZSBpbiBDb25uZWN0b3JOYW1lc106IGFueSB9ID0ge1xuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZCxcbiAgW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdOiBuZXR3b3JrLFxuICBbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF06IHdhbGxldGNvbm5lY3QsXG4gIFtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXTogd2FsbGV0bGluayxcbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xuICAgIHJldHVybiAnTm8gRXRoZXJldW0gYnJvd3NlciBleHRlbnNpb24gZGV0ZWN0ZWQsIGluc3RhbGwgTWV0YU1hc2sgb24gZGVza3RvcCBvciB2aXNpdCBmcm9tIGEgZEFwcCBicm93c2VyIG9uIG1vYmlsZS4nXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxuICB9IGVsc2UgaWYgKFxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lXG4gICkge1xuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXG4gIHJldHVybiBsaWJyYXJ5XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApXG59XG5cbmZ1bmN0aW9uIENoYWluSWQoKSB7XG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5DaGFpbiBJZDwvc3Bhbj5cbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hhaW5cIj5cbiAgICAgICAg4puTXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj57Y2hhaW5JZCA/PyAnJ308L3NwYW4+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQmxvY2tOdW1iZXIoKSB7XG4gIGNvbnN0IHsgY2hhaW5JZCwgbGlicmFyeSB9ID0gdXNlV2ViM1JlYWN0KClcblxuICBjb25zdCBbYmxvY2tOdW1iZXIsIHNldEJsb2NrTnVtYmVyXSA9IFJlYWN0LnVzZVN0YXRlPG51bWJlcj4oKVxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XG4gICAgaWYgKCEhbGlicmFyeSkge1xuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcblxuICAgICAgbGlicmFyeVxuICAgICAgICAuZ2V0QmxvY2tOdW1iZXIoKVxuICAgICAgICAudGhlbigoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICAgIGlmICghc3RhbGUpIHtcbiAgICAgICAgICAgIHNldEJsb2NrTnVtYmVyKGJsb2NrTnVtYmVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XG4gICAgICAgICAgICBzZXRCbG9ja051bWJlcihudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgY29uc3QgdXBkYXRlQmxvY2tOdW1iZXIgPSAoYmxvY2tOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcbiAgICAgIH1cbiAgICAgIGxpYnJhcnkub24oJ2Jsb2NrJywgdXBkYXRlQmxvY2tOdW1iZXIpXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHN0YWxlID0gdHJ1ZVxuICAgICAgICBsaWJyYXJ5LnJlbW92ZUxpc3RlbmVyKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxuICAgICAgICBzZXRCbG9ja051bWJlcih1bmRlZmluZWQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuPkJsb2NrIE51bWJlcjwvc3Bhbj5cbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwibnVtYmVyc1wiPlxuICAgICAgICDwn5SiXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj57YmxvY2tOdW1iZXIgPT09IG51bGwgPyAnRXJyb3InIDogYmxvY2tOdW1iZXIgPz8gJyd9PC9zcGFuPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEFjY291bnQoKSB7XG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5BY2NvdW50PC9zcGFuPlxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJyb2JvdFwiPlxuICAgICAgICDwn6SWXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge2FjY291bnQgPT09IG51bGxcbiAgICAgICAgICA/ICctJ1xuICAgICAgICAgIDogYWNjb3VudFxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcbiAgICAgICAgICA6ICcnfVxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEJhbGFuY2UoKSB7XG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcblxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSBSZWFjdC51c2VTdGF0ZSgpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcbiAgICBpZiAoISFhY2NvdW50ICYmICEhbGlicmFyeSkge1xuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcblxuICAgICAgbGlicmFyeVxuICAgICAgICAuZ2V0QmFsYW5jZShhY2NvdW50KVxuICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XG4gICAgICAgICAgICBzZXRCYWxhbmNlKG51bGwpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdGFsZSA9IHRydWVcbiAgICAgICAgc2V0QmFsYW5jZSh1bmRlZmluZWQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZF0pIC8vIGVuc3VyZXMgcmVmcmVzaCBpZiByZWZlcmVudGlhbCBpZGVudGl0eSBvZiBsaWJyYXJ5IGRvZXNuJ3QgY2hhbmdlIGFjcm9zcyBjaGFpbklkc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuPkJhbGFuY2U8L3NwYW4+XG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImdvbGRcIj5cbiAgICAgICAg8J+SsFxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+e2JhbGFuY2UgPT09IG51bGwgPyAnRXJyb3InIDogYmFsYW5jZSA/IGDOniR7Zm9ybWF0RXRoZXIoYmFsYW5jZSl9YCA6ICcnfTwvc3Bhbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JyB9fT57YWN0aXZlID8gJ/Cfn6InIDogZXJyb3IgPyAn8J+UtCcgOiAn8J+foCd9PC9oMT5cbiAgICAgIDxoM1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciBtaW4tY29udGVudCAxZnInLFxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcycmVtJyxcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q2hhaW5JZCAvPlxuICAgICAgICA8QmxvY2tOdW1iZXIgLz5cbiAgICAgICAgPEFjY291bnQgLz5cbiAgICAgICAgPEJhbGFuY2UgLz5cbiAgICAgIDwvaDM+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxuICBjb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcblxuICAvLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxuICBjb25zdCBbYWN0aXZhdGluZ0Nvbm5lY3Rvciwgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KClcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcbiAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IodW5kZWZpbmVkKVxuICAgIH1cbiAgfSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXG5cbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGVhZ2VybHkgY29ubmVjdCB0byB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0cyBhbmQgaGFzIGdyYW50ZWQgYWNjZXNzIGFscmVhZHlcbiAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUVhZ2VyQ29ubmVjdCgpXG5cbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcbiAgdXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBtYXhXPVwieGxcIj5cbiAgICAgICAgPExlYWRlcmJvYXJkTGlzdCAvPlxuICAgICAgICAgIDxQcm9wb3NhbElucHV0IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q29ubmVjdG9yID0gY29ubmVjdG9yc0J5TmFtZVtuYW1lXVxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IgfHwgY29ubmVjdGVkIHx8ICEhZXJyb3JcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICdncmVlbicgOiAndW5zZXQnLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAndW5zZXQnIDogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3RvcihjdXJyZW50Q29ubmVjdG9yKVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlKGNvbm5lY3RvcnNCeU5hbWVbbmFtZV0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDFyZW0nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthY3RpdmF0aW5nICYmIDxTcGlubmVyIGNvbG9yPXsnYmxhY2snfSBzdHlsZT17eyBoZWlnaHQ6ICcyNSUnLCBtYXJnaW5MZWZ0OiAnLTFyZW0nIH19IC8+fVxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICDinIVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICB7KGFjdGl2ZSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEZWFjdGl2YXRlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyEhZXJyb3IgJiYgPGg0IHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcwJyB9fT57Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX08L2g0Pn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ2ZpdC1jb250ZW50JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ISEobGlicmFyeSAmJiBhY2NvdW50KSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGxpYnJhcnlcbiAgICAgICAgICAgICAgICAuZ2V0U2lnbmVyKGFjY291bnQpXG4gICAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcbiAgICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChgU3VjY2VzcyFcXG5cXG4ke3NpZ25hdHVyZX1gKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0ZhaWx1cmUhJyArIChlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gYFxcblxcbiR7ZXJyb3IubWVzc2FnZX1gIDogJycpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZUNoYWluSWQoY2hhaW5JZCA9PT0gMSA/IDQgOiAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTd2l0Y2ggTmV0d29ya3NcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZTogXCJkYXJrXCIsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcclxufVxyXG5cclxuLy8gMy4gZXh0ZW5kIHRoZSB0aGVtZVxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGV0aGVyc3Byb2plY3QvdW5pdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=