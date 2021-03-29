webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/frame-connector */ "./node_modules/@web3-react/frame-connector/dist/frame-connector.esm.js");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/providers */ "./node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/units */ "./node_modules/@ethersproject/units/lib.esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme */ "./theme.ts");
/* harmony import */ var _components_LeaderboardList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/LeaderboardList */ "./components/LeaderboardList.tsx");
/* harmony import */ var _components_ProposalInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ProposalInput */ "./components/ProposalInput.tsx");



var _connectorsByName,
    _jsxFileName = "C:\\Users\\Jose\\Desktop\\web3-tutorial\\pages\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$(),
    _s6 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var ConnectorNames;

(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Injected";
  ConnectorNames["Network"] = "Network";
  ConnectorNames["WalletConnect"] = "WalletConnect";
  ConnectorNames["WalletLink"] = "WalletLink";
})(ConnectorNames || (ConnectorNames = {}));

var connectorsByName = (_connectorsByName = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Injected, _connectors__WEBPACK_IMPORTED_MODULE_11__["injected"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Network, _connectors__WEBPACK_IMPORTED_MODULE_11__["network"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletConnect, _connectors__WEBPACK_IMPORTED_MODULE_11__["walletconnect"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletLink, _connectors__WEBPACK_IMPORTED_MODULE_11__["walletlink"]), _connectorsByName);

function getErrorMessage(error) {
  if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__["NoEthereumProviderError"]) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_3__["UnsupportedChainIdError"]) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_5__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_6__["UserRejectedRequestError"]) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

function getLibrary(provider) {
  var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["ChakraProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["Web3ReactProvider"], {
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
  _s();

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      chainId = _useWeb3React.chainId;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
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

_s(ChainId, "reA9FJLirN6bQm5X4sUUozGx1bA=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c = ChainId;

function BlockNumber() {
  _s2();

  var _useWeb3React2 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      chainId = _useWeb3React2.chainId,
      library = _useWeb3React2.library;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      blockNumber = _React$useState2[0],
      setBlockNumber = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!!library) {
      var stale = false;
      library.getBlockNumber().then(function (blockNumber) {
        if (!stale) {
          setBlockNumber(blockNumber);
        }
      })["catch"](function () {
        if (!stale) {
          setBlockNumber(null);
        }
      });

      var updateBlockNumber = function updateBlockNumber(blockNumber) {
        setBlockNumber(blockNumber);
      };

      library.on('block', updateBlockNumber);
      return function () {
        stale = true;
        library.removeListener('block', updateBlockNumber);
        setBlockNumber(undefined);
      };
    }
  }, [library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
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

_s2(BlockNumber, "0DoBuqyGtF4sYtNebgbnhkk9wTw=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c2 = BlockNumber;

function Account() {
  _s3();

  var _useWeb3React3 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      account = _useWeb3React3.account;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
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
  }, account === null ? '-' : account ? "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4)) : ''));
}

_s3(Account, "Yw4fkvk9SNw3FxQ8wmZp/p1e7+E=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c3 = Account;

function Balance() {
  _s4();

  var _useWeb3React4 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      account = _useWeb3React4.account,
      library = _useWeb3React4.library,
      chainId = _useWeb3React4.chainId;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      balance = _React$useState4[0],
      setBalance = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!!account && !!library) {
      var stale = false;
      library.getBalance(account).then(function (balance) {
        if (!stale) {
          setBalance(balance);
        }
      })["catch"](function () {
        if (!stale) {
          setBalance(null);
        }
      });
      return function () {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
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
  }, balance === null ? 'Error' : balance ? "\u039E".concat(Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_8__["formatEther"])(balance)) : ''));
}

_s4(Balance, "M1WVM1XYBvl8/UPoZ+Zp2BzPIno=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c4 = Balance;

function Header() {
  _s5();

  var _useWeb3React5 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])(),
      active = _useWeb3React5.active,
      error = _useWeb3React5.error;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
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

_s5(Header, "5Wc8Z9LF2TZggKnK8RHaXo3D1Z0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"]];
});

_c5 = Header;

function App() {
  _s6();

  var _this = this;

  var context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])();
  var connector = context.connector,
      library = context.library,
      chainId = context.chainId,
      account = context.account,
      activate = context.activate,
      deactivate = context.deactivate,
      active = context.active,
      error = context.error; // handle logic to recognize the connector currently being activated

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      activatingConnector = _React$useState6[0],
      setActivatingConnector = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  var triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useInactiveListener"])(!triedEager || !!activatingConnector);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    maxW: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }, __jsx(_components_LeaderboardList__WEBPACK_IMPORTED_MODULE_14__["LeaderboardList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
    maxW: "xl",
    borderWidth: "1px",
    borderRadius: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, __jsx(_components_ProposalInput__WEBPACK_IMPORTED_MODULE_15__["ProposalInput"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }), __jsx(Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }
  }), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
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
      lineNumber: 247,
      columnNumber: 7
    }
  }, Object.keys(connectorsByName).map(function (name) {
    var currentConnector = connectorsByName[name];
    var activating = currentConnector === activatingConnector;
    var connected = currentConnector === connector;
    var disabled = !triedEager || !!activatingConnector || connected || !!error;
    return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
        cursor: disabled ? 'unset' : 'pointer',
        position: 'relative'
      },
      disabled: disabled,
      key: name,
      onClick: function onClick() {
        setActivatingConnector(currentConnector);
        activate(connectorsByName[name]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 15
      }
    }, activating && __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
      color: 'black',
      style: {
        height: '25%',
        marginLeft: '-1rem'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 32
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
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
      lineNumber: 302,
      columnNumber: 7
    }
  }, (active || error) && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    style: {
      height: '3rem',
      marginTop: '2rem',
      borderRadius: '1rem',
      borderColor: 'red',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      deactivate();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
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
      lineNumber: 320,
      columnNumber: 21
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
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
      lineNumber: 325,
      columnNumber: 7
    }
  }, !!(library && account) && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    color: "primary",
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      library.getSigner(account).signMessage('👋').then(function (signature) {
        window.alert("Success!\n\n".concat(signature));
      })["catch"](function (error) {
        window.alert('Failure!' + (error && error.message ? "\n\n".concat(error.message) : ''));
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, "Sign Message"), !!(connector === connectorsByName[ConnectorNames.Network] && chainId) && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    style: {
      height: '3rem',
      borderRadius: '1rem',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      ;
      connector.changeChainId(chainId === 1 ? 4 : 1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, "Switch Networks")));
}

_s6(App, "oVtBozX5lH0j7w1/NhHB2/98yx0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"], _hooks__WEBPACK_IMPORTED_MODULE_10__["useEagerConnect"], _hooks__WEBPACK_IMPORTED_MODULE_10__["useInactiveListener"]];
});

_c6 = App;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ChainId");
$RefreshReg$(_c2, "BlockNumber");
$RefreshReg$(_c3, "Account");
$RefreshReg$(_c4, "Balance");
$RefreshReg$(_c5, "Header");
$RefreshReg$(_c6, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkNvbm5lY3Rvck5hbWVzIiwiY29ubmVjdG9yc0J5TmFtZSIsIkluamVjdGVkIiwiaW5qZWN0ZWQiLCJOZXR3b3JrIiwibmV0d29yayIsIldhbGxldENvbm5lY3QiLCJ3YWxsZXRjb25uZWN0IiwiV2FsbGV0TGluayIsIndhbGxldGxpbmsiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwidGhlbWUiLCJDaGFpbklkIiwidXNlV2ViM1JlYWN0IiwiY2hhaW5JZCIsIkJsb2NrTnVtYmVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImJsb2NrTnVtYmVyIiwic2V0QmxvY2tOdW1iZXIiLCJ1c2VFZmZlY3QiLCJzdGFsZSIsImdldEJsb2NrTnVtYmVyIiwidGhlbiIsInVwZGF0ZUJsb2NrTnVtYmVyIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsInVuZGVmaW5lZCIsIkFjY291bnQiLCJhY2NvdW50Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiQmFsYW5jZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImZvcm1hdEV0aGVyIiwiSGVhZGVyIiwiYWN0aXZlIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWF4V2lkdGgiLCJsaW5lSGVpZ2h0IiwiQXBwIiwiY29udGV4dCIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSIsImN1cnJlbnRDb25uZWN0b3IiLCJhY3RpdmF0aW5nIiwiY29ubmVjdGVkIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImN1cnNvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImFsaWduSXRlbXMiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJzaWduYXR1cmUiLCJ3aW5kb3ciLCJhbGVydCIsIm1lc3NhZ2UiLCJjaGFuZ2VDaGFpbklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtJQUVLQSxjOztXQUFBQSxjO0FBQUFBLGdCO0FBQUFBLGdCO0FBQUFBLGdCO0FBQUFBLGdCO0dBQUFBLGMsS0FBQUEsYzs7QUFPTCxJQUFNQyxnQkFBNEQseUlBQy9ERCxjQUFjLENBQUNFLFFBRGdELEVBQ3JDQyxxREFEcUMsZ0hBRS9ESCxjQUFjLENBQUNJLE9BRmdELEVBRXRDQyxvREFGc0MsZ0hBRy9ETCxjQUFjLENBQUNNLGFBSGdELEVBR2hDQywwREFIZ0MsZ0hBSS9EUCxjQUFjLENBQUNRLFVBSmdELEVBSW5DQyx1REFKbUMscUJBQWxFOztBQU9BLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXVDO0FBQ3JDLE1BQUlBLEtBQUssWUFBWUMsc0ZBQXJCLEVBQThDO0FBQzVD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LENBQ0pxRSxTQURILENBQ2FoRCxPQURiLEVBRUdpRCxXQUZILENBRWUsSUFGZixFQUdHdkQsSUFISCxDQUdRLFVBQUN3RCxTQUFELEVBQW9CO0FBQ3hCQyxjQUFNLENBQUNDLEtBQVAsdUJBQTRCRixTQUE1QjtBQUNELE9BTEgsV0FNUyxVQUFDaEYsS0FBRCxFQUFnQjtBQUNyQmlGLGNBQU0sQ0FBQ0MsS0FBUCxDQUFhLGNBQWNsRixLQUFLLElBQUlBLEtBQUssQ0FBQ21GLE9BQWYsaUJBQWdDbkYsS0FBSyxDQUFDbUYsT0FBdEMsSUFBa0QsRUFBaEUsQ0FBYjtBQUNELE9BUkg7QUFTRCxLQWpCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZKLEVBZ0NHLENBQUMsRUFBRWxDLFNBQVMsS0FBSzNELGdCQUFnQixDQUFDRCxjQUFjLENBQUNJLE9BQWhCLENBQTlCLElBQTBEc0IsT0FBNUQsQ0FBRCxJQUNDLE1BQUMsdURBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTGtELFlBQU0sRUFBRSxNQURIO0FBRUxDLGtCQUFZLEVBQUUsTUFGVDtBQUdMRSxZQUFNLEVBQUU7QUFISCxLQURUO0FBTUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2I7QUFBRW5CLGVBQUQsQ0FBbUJtQyxhQUFuQixDQUFpQ3JFLE9BQU8sS0FBSyxDQUFaLEdBQWdCLENBQWhCLEdBQW9CLENBQXJEO0FBQ0YsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpDSixDQXhGRixDQURGO0FBMElEOztJQTVKUWdDLEc7VUFDU2pDLDZELEVBWUd5Qyx1RCxFQUduQkMsMkQ7OztNQWhCT1QsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjJjNDhlZjBlOWRiMGJhNjlhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xuaW1wb3J0IHtcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEJveCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXG5pbXBvcnQge1xuICBpbmplY3RlZCxcbiAgbmV0d29yayxcbiAgd2FsbGV0Y29ubmVjdCxcbiAgd2FsbGV0bGluayxcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnXG5pbXBvcnQgeyBMZWFkZXJib2FyZExpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL0xlYWRlcmJvYXJkTGlzdCdcbmltcG9ydCB7IFByb3Bvc2FsSW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb3Bvc2FsSW5wdXQnXG5cbmVudW0gQ29ubmVjdG9yTmFtZXMge1xuICBJbmplY3RlZCA9ICdJbmplY3RlZCcsXG4gIE5ldHdvcmsgPSAnTmV0d29yaycsXG4gIFdhbGxldENvbm5lY3QgPSAnV2FsbGV0Q29ubmVjdCcsXG4gIFdhbGxldExpbmsgPSAnV2FsbGV0TGluaycsXG59XG5cbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcbiAgW0Nvbm5lY3Rvck5hbWVzLkluamVjdGVkXTogaW5qZWN0ZWQsXG4gIFtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXTogbmV0d29yayxcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdOiB3YWxsZXRjb25uZWN0LFxuICBbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua106IHdhbGxldGxpbmssXG59XG5cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IpIHtcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcbiAgICByZXR1cm4gXCJZb3UncmUgY29ubmVjdGVkIHRvIGFuIHVuc3VwcG9ydGVkIG5ldHdvcmsuXCJcbiAgfSBlbHNlIGlmIChcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IHx8XG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxuICApIHtcbiAgICByZXR1cm4gJ1BsZWFzZSBhdXRob3JpemUgdGhpcyB3ZWJzaXRlIHRvIGFjY2VzcyB5b3VyIEV0aGVyZXVtIGFjY291bnQuJ1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLiBDaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLidcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxuICByZXR1cm4gbGlicmFyeVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvV2ViM1JlYWN0UHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBDaGFpbklkKCkge1xuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4+Q2hhaW4gSWQ8L3NwYW4+XG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoYWluXCI+XG4gICAgICAgIOKbk1xuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+e2NoYWluSWQgPz8gJyd9PC9zcGFuPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEJsb2NrTnVtYmVyKCkge1xuICBjb25zdCB7IGNoYWluSWQsIGxpYnJhcnkgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgY29uc3QgW2Jsb2NrTnVtYmVyLCBzZXRCbG9ja051bWJlcl0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KClcbiAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xuICAgIGlmICghIWxpYnJhcnkpIHtcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXG5cbiAgICAgIGxpYnJhcnlcbiAgICAgICAgLmdldEJsb2NrTnVtYmVyKClcbiAgICAgICAgLnRoZW4oKGJsb2NrTnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XG4gICAgICAgICAgICBzZXRCbG9ja051bWJlcihibG9ja051bWJlcilcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgc2V0QmxvY2tOdW1iZXIobnVsbClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgIGNvbnN0IHVwZGF0ZUJsb2NrTnVtYmVyID0gKGJsb2NrTnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0QmxvY2tOdW1iZXIoYmxvY2tOdW1iZXIpXG4gICAgICB9XG4gICAgICBsaWJyYXJ5Lm9uKCdibG9jaycsIHVwZGF0ZUJsb2NrTnVtYmVyKVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzdGFsZSA9IHRydWVcbiAgICAgICAgbGlicmFyeS5yZW1vdmVMaXN0ZW5lcignYmxvY2snLCB1cGRhdGVCbG9ja051bWJlcilcbiAgICAgICAgc2V0QmxvY2tOdW1iZXIodW5kZWZpbmVkKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2xpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5CbG9jayBOdW1iZXI8L3NwYW4+XG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cIm51bWJlcnNcIj5cbiAgICAgICAg8J+UolxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+e2Jsb2NrTnVtYmVyID09PSBudWxsID8gJ0Vycm9yJyA6IGJsb2NrTnVtYmVyID8/ICcnfTwvc3Bhbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBBY2NvdW50KCkge1xuICBjb25zdCB7IGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4+QWNjb3VudDwvc3Bhbj5cbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9ib3RcIj5cbiAgICAgICAg8J+kllxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIHthY2NvdW50ID09PSBudWxsXG4gICAgICAgICAgPyAnLSdcbiAgICAgICAgICA6IGFjY291bnRcbiAgICAgICAgICA/IGAke2FjY291bnQuc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1gXG4gICAgICAgICAgOiAnJ31cbiAgICAgIDwvc3Bhbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5mdW5jdGlvbiBCYWxhbmNlKCkge1xuICBjb25zdCB7IGFjY291bnQsIGxpYnJhcnksIGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gUmVhY3QudXNlU3RhdGUoKVxuICBSZWFjdC51c2VFZmZlY3QoKCk6IGFueSA9PiB7XG4gICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXG5cbiAgICAgIGxpYnJhcnlcbiAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcbiAgICAgICAgLnRoZW4oKGJhbGFuY2U6IGFueSkgPT4ge1xuICAgICAgICAgIGlmICghc3RhbGUpIHtcbiAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc3RhbGUgPSB0cnVlXG4gICAgICAgIHNldEJhbGFuY2UodW5kZWZpbmVkKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2FjY291bnQsIGxpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj5CYWxhbmNlPC9zcGFuPlxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJnb2xkXCI+XG4gICAgICAgIPCfkrBcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuPntiYWxhbmNlID09PSBudWxsID8gJ0Vycm9yJyA6IGJhbGFuY2UgPyBgzp4ke2Zvcm1hdEV0aGVyKGJhbGFuY2UpfWAgOiAnJ308L3NwYW4+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nLCB0ZXh0QWxpZ246ICdyaWdodCcgfX0+e2FjdGl2ZSA/ICfwn5+iJyA6IGVycm9yID8gJ/CflLQnIDogJ/Cfn6AnfTwvaDE+XG4gICAgICA8aDNcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgbWluLWNvbnRlbnQgMWZyJyxcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMnJlbScsXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENoYWluSWQgLz5cbiAgICAgICAgPEJsb2NrTnVtYmVyIC8+XG4gICAgICAgIDxBY2NvdW50IC8+XG4gICAgICAgIDxCYWxhbmNlIC8+XG4gICAgICA8L2gzPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcbiAgY29uc3QgeyBjb25uZWN0b3IsIGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBhY3RpdmUsIGVycm9yIH0gPSBjb250ZXh0XG5cbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIHJlY29nbml6ZSB0aGUgY29ubmVjdG9yIGN1cnJlbnRseSBiZWluZyBhY3RpdmF0ZWRcbiAgY29uc3QgW2FjdGl2YXRpbmdDb25uZWN0b3IsIHNldEFjdGl2YXRpbmdDb25uZWN0b3JdID0gUmVhY3QudXNlU3RhdGU8YW55PigpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2YXRpbmdDb25uZWN0b3IgJiYgYWN0aXZhdGluZ0Nvbm5lY3RvciA9PT0gY29ubmVjdG9yKSB7XG4gICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKHVuZGVmaW5lZClcbiAgICB9XG4gIH0sIFthY3RpdmF0aW5nQ29ubmVjdG9yLCBjb25uZWN0b3JdKVxuXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XG4gIGNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxuXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXG4gIHVzZUluYWN0aXZlTGlzdGVuZXIoIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgbWF4Vz1cInhsXCI+XG4gICAgICAgIDxMZWFkZXJib2FyZExpc3QgLz5cbiAgICAgICAgPEJveCBtYXhXPVwieGxcIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cImxnXCI+XG4gICAgICAgICAgPFByb3Bvc2FsSW5wdXQgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q29ubmVjdG9yID0gY29ubmVjdG9yc0J5TmFtZVtuYW1lXVxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IgfHwgY29ubmVjdGVkIHx8ICEhZXJyb3JcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICdncmVlbicgOiAndW5zZXQnLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAndW5zZXQnIDogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAga2V5PXtuYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3RvcihjdXJyZW50Q29ubmVjdG9yKVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlKGNvbm5lY3RvcnNCeU5hbWVbbmFtZV0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMCAwIDFyZW0nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthY3RpdmF0aW5nICYmIDxTcGlubmVyIGNvbG9yPXsnYmxhY2snfSBzdHlsZT17eyBoZWlnaHQ6ICcyNSUnLCBtYXJnaW5MZWZ0OiAnLTFyZW0nIH19IC8+fVxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICDinIVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICB7KGFjdGl2ZSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBEZWFjdGl2YXRlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyEhZXJyb3IgJiYgPGg0IHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcwJyB9fT57Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX08L2g0Pn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ2ZpdC1jb250ZW50JyxcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7ISEobGlicmFyeSAmJiBhY2NvdW50KSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGxpYnJhcnlcbiAgICAgICAgICAgICAgICAuZ2V0U2lnbmVyKGFjY291bnQpXG4gICAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcbiAgICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChgU3VjY2VzcyFcXG5cXG4ke3NpZ25hdHVyZX1gKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0ZhaWx1cmUhJyArIChlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gYFxcblxcbiR7ZXJyb3IubWVzc2FnZX1gIDogJycpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZUNoYWluSWQoY2hhaW5JZCA9PT0gMSA/IDQgOiAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTd2l0Y2ggTmV0d29ya3NcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9