self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./common/common.js":
/*!**************************!*\
  !*** ./common/common.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomItem": function() { return /* binding */ getRandomItem; },
/* harmony export */   "getFormattedDate": function() { return /* binding */ getFormattedDate; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/**
 * 공통 JavaScript
 *
 * @author RWB
 * @since 2021.05.01 Sat 20:10:41
 */

/**
 * 입력한 배열의 랜덤 아이템 반환 함수
 *
 * @param {Array} arr: 배열
 *
 * @return {Object} 임의의 배열 아이템
 */
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
/**
 * yyyy-MM-dd a HH:mm:ss 날짜 문자열 반환 함수
 *
 * @param {Date} date: 날짜 객체
 *
 * @returns {String} 날짜 문자열
 */

function getFormattedDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1 < 10 ? "0".concat(date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0".concat(date.getDate()) : date.getDate();
  var hour = date.getHours() < 10 ? "0".concat(date.getHours()) : date.getHours();
  var minute = date.getMinutes() < 10 ? "0".concat(date.getMinutes()) : date.getMinutes();
  var second = date.getSeconds() < 10 ? "0".concat(date.getSeconds()) : date.getSeconds();
  var weekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var week = weekList[date.getDay()];
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(week, " ").concat(hour, ":").concat(minute, ":").concat(second);
}

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./components/footer/Footer.js":
/*!*************************************!*\
  !*** ./components/footer/Footer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* harmony import */ var _global_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/Icons */ "./components/global/Icons.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\footer\\Footer.js",
    _s = $RefreshSig$();

/**
 * 푸터 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.09 Sun 01:59:12
 */





function Footer() {
  _s();

  var classes = getStyles();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.down("sm"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
    component: "footer",
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      display: "flex",
      alignItems: "center",
      className: classes.divider,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        flexGrow: 1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/assets/images/logo.png",
          width: "84",
          className: classes.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        flexGrow: 1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
      maxWidth: "md",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 5,
        className: classes.content,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "body1",
              className: classes.title,
              children: "Developed by RWB at 2021."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          md: 4,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variant: "h4",
            align: "center",
            className: classes.title,
            children: _common_env__WEBPACK_IMPORTED_MODULE_2__.TITLE
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "subtitle2",
              align: isMobile ? "center" : "left",
              children: ["\uD83D\uDD17 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                href: "https://rwb0104.github.io/",
                className: classes.link,
                children: "https://rwb0104.github.io/"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "subtitle1",
              align: isMobile ? "center" : "left",
              className: classes.desc,
              children: _common_env__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTION
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          md: 4,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variant: "h4",
            align: "center",
            className: classes.title,
            children: "Contact Me."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                className: classes.stack_icon,
                style: {
                  backgroundColor: "#EA4335",
                  color: "white"
                },
                onClick: function onClick() {
                  return window.location = "mailto:psj2716@gmail.com";
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                  fontSize: "large",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_Icons__WEBPACK_IMPORTED_MODULE_3__.Gmail, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                className: classes.stack_typo,
                align: "center",
                children: "Mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                className: classes.stack_icon,
                style: {
                  backgroundColor: "#181717",
                  color: "white"
                },
                onClick: function onClick() {
                  return window.open("https://github.com/RWB0104", "_blank");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.GitHub, {
                  fontSize: "large"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                className: classes.stack_typo,
                align: "center",
                children: "Github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          md: 4,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
            variant: "h4",
            align: "center",
            className: classes.title,
            children: "Associated"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                className: classes.stack_icon,
                style: {
                  backgroundColor: "#181717",
                  color: "#61DAFB"
                },
                onClick: function onClick() {
                  return window.open("https://ko.reactjs.org/", "_blank");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                  fontSize: "large",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_Icons__WEBPACK_IMPORTED_MODULE_3__.React, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                className: classes.stack_typo,
                align: "center",
                children: "with Develop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                className: classes.stack_icon,
                style: {
                  backgroundColor: "#0081CB",
                  color: "white"
                },
                onClick: function onClick() {
                  return window.open("https://material-ui.com/", "_blank");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, {
                  fontSize: "large",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_Icons__WEBPACK_IMPORTED_MODULE_3__.MaterialUI, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                className: classes.stack_typo,
                align: "center",
                children: "with Design"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                className: classes.stack_icon,
                style: {
                  backgroundColor: "#181717",
                  color: "white"
                },
                onClick: function onClick() {
                  return window.open("https://pages.github.com/", "_blank");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.GitHub, {
                  fontSize: "large"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                className: classes.stack_typo,
                align: "center",
                children: "with Publish"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "body1",
              children: ["Build at ", (0,_common_common__WEBPACK_IMPORTED_MODULE_1__.getFormattedDate)(new Date())]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(Footer, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];
});

_c = Footer;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      root: {
        marginTop: theme.spacing(20),
        paddingBottom: theme.spacing(10)
      },
      content: {
        marginTop: theme.spacing(10),
        "& > div": {
          marginBottom: theme.spacing(5)
        }
      },
      logo: {
        animation: "rotate 5s linear infinite",
        transformOrigin: "50% 50%"
      },
      title: {
        marginBottom: theme.spacing(3),
        color: theme.palette.type === "dark" ? "#CCCCCC" : "#555555",
        fontFamily: "Hack, sans-serif",
        fontSize: "1.75rem",
        fontWeight: "bold"
      },
      desc: {
        color: theme.palette.type === "dark" ? "#CCCCCC" : "#555555",
        fontSize: "1rem"
      },
      link: {
        fontSize: "1rem"
      },
      stack_icon: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        border: "3px solid white"
      },
      stack_typo: {
        margin: theme.spacing(1),
        color: theme.palette.type === "dark" ? "#CCCCCC" : "#555555",
        fontSize: "1rem"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "Footer");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbUl0ZW0iLCJhcnIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJnZXRGb3JtYXR0ZWREYXRlIiwiZGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJ3ZWVrTGlzdCIsIndlZWsiLCJnZXREYXkiLCJGb290ZXIiLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInJvb3QiLCJkaXZpZGVyIiwibG9nbyIsImNvbnRlbnQiLCJ0aXRsZSIsIlRJVExFIiwibGluayIsImRlc2MiLCJERVNDUklQVElPTiIsInN0YWNrX2ljb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIndpbmRvdyIsImxvY2F0aW9uIiwic3RhY2tfdHlwbyIsIm9wZW4iLCJEYXRlIiwibWFrZVN0eWxlcyIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwicGFsZXR0ZSIsInR5cGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxT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SyxDQUFDeUIsT0FBTixDQUFjLENBQWQsQ0FGRjtBQUdYWSxjQUFNLEVBQUU7QUFIRyxPQTdCaUI7QUFrQzdCakIsZ0JBQVUsRUFBRTtBQUNYa0IsY0FBTSxFQUFFdEMsS0FBSyxDQUFDeUIsT0FBTixDQUFjLENBQWQsQ0FERztBQUVYUixhQUFLLEVBQUVqQixLQUFLLENBQUM4QixPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0MsU0FBaEMsR0FBNEMsU0FGeEM7QUFHWEUsZ0JBQVEsRUFBRTtBQUhDO0FBbENpQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUF3Q0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xM2ZiNDdjMzhiMGJiNjFiOTNlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOqzte2GtSBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjAxIFNhdCAyMDoxMDo0MVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiDsnoXroKXtlZwg67Cw7Je07J2YIOuenOuNpCDslYTsnbTthZwg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnI6IOuwsOyXtFxyXG4gKlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IOyehOydmOydmCDrsLDsl7Qg7JWE7J207YWcXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSXRlbShhcnIpXHJcbntcclxuXHRyZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHl5eXktTU0tZGQgYSBISDptbTpzcyDrgqDsp5wg66y47J6Q7Je0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtEYXRlfSBkYXRlOiDrgqDsp5wg6rCd7LK0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IOuCoOynnCDrrLjsnpDsl7RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKGRhdGUpXHJcbntcclxuXHRjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwID8gYDAke2RhdGUuZ2V0TW9udGgoKSArIDF9YCA6IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0Y29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkgPCAxMCA/IGAwJHtkYXRlLmdldERhdGUoKX1gIDogZGF0ZS5nZXREYXRlKCk7XHJcblxyXG5cdGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/IGAwJHtkYXRlLmdldEhvdXJzKCl9YCA6IGRhdGUuZ2V0SG91cnMoKTtcclxuXHRjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gYDAke2RhdGUuZ2V0TWludXRlcygpfWAgOiBkYXRlLmdldE1pbnV0ZXMoKTtcclxuXHRjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKSA8IDEwID8gYDAke2RhdGUuZ2V0U2Vjb25kcygpfWAgOiBkYXRlLmdldFNlY29uZHMoKTtcclxuXHJcblx0Y29uc3Qgd2Vla0xpc3QgPSBbIFwiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIgXTtcclxuXHRjb25zdCB3ZWVrID0gd2Vla0xpc3RbZGF0ZS5nZXREYXkoKV07XHJcblxyXG5cdHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHt3ZWVrfSAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH1gO1xyXG59IiwiLyoqXHJcbiAqIO2RuO2EsCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4wOSBTdW4gMDE6NTk6MTJcclxuICovXHJcblxyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCwgSWNvbkJ1dHRvbiwgTGluaywgbWFrZVN0eWxlcywgU3ZnSWNvbiwgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgR2l0SHViIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IHsgREVTQ1JJUFRJT04sIFRJVExFIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IHsgR21haWwsIE1hdGVyaWFsVUksIFJlYWN0IH0gZnJvbSBcIi4uL2dsb2JhbC9JY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJmb290ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9PlxyXG5cdFx0XHRcdDxCb3ggZmxleEdyb3c9ezF9PlxyXG5cdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveD5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiB3aWR0aD1cIjg0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggZmxleEdyb3c9ezF9PlxyXG5cdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuXHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkRldmVsb3BlZCBieSBSV0IgYXQgMjAyMS48L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57VElUTEV9PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBhbGlnbj17aXNNb2JpbGUgPyBcImNlbnRlclwiIDogXCJsZWZ0XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx08J+UlyA8TGluayBocmVmPVwiaHR0cHM6Ly9yd2IwMTA0LmdpdGh1Yi5pby9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+aHR0cHM6Ly9yd2IwMTA0LmdpdGh1Yi5pby88L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgYWxpZ249e2lzTW9iaWxlID8gXCJjZW50ZXJcIiA6IFwibGVmdFwifSBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+e0RFU0NSSVBUSU9OfTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSBtZD17NH0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkNvbnRhY3QgTWUuPC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfaWNvbn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNFQTQzMzVcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24gPSBcIm1haWx0bzpwc2oyNzE2QGdtYWlsLmNvbVwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFN2Z0ljb24gZm9udFNpemU9XCJsYXJnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbWFpbCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1N2Z0ljb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+TWFpbDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfaWNvbn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxODE3MTdcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9SV0IwMTA0XCIsIFwiX2JsYW5rXCIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdpdEh1YiBmb250U2l6ZT1cImxhcmdlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfdHlwb30gYWxpZ249XCJjZW50ZXJcIj5HaXRodWI8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Bc3NvY2lhdGVkPC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfaWNvbn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxODE3MTdcIiwgY29sb3I6IFwiIzYxREFGQlwiIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9rby5yZWFjdGpzLm9yZy9cIiwgXCJfYmxhbmtcIil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3ZnSWNvbiBmb250U2l6ZT1cImxhcmdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3ZnSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfdHlwb30gYWxpZ249XCJjZW50ZXJcIj53aXRoIERldmVsb3A8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX2ljb259IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDA4MUNCXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIiwgXCJfYmxhbmtcIil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3ZnSWNvbiBmb250U2l6ZT1cImxhcmdlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1hdGVyaWFsVUkgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9TdmdJY29uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja190eXBvfSBhbGlnbj1cImNlbnRlclwiPndpdGggRGVzaWduPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja19pY29ufSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MTcxN1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9wYWdlcy5naXRodWIuY29tL1wiLCBcIl9ibGFua1wiKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHaXRIdWIgZm9udFNpemU9XCJsYXJnZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+d2l0aCBQdWJsaXNoPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkJ1aWxkIGF0IHtnZXRGb3JtYXR0ZWREYXRlKG5ldyBEYXRlKCkpfTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyMCksXHJcblx0XHRcdHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMTApXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG5cdFx0XHRcIiYgPiBkaXZcIjoge1xyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bG9nbzoge1xyXG5cdFx0XHRhbmltYXRpb246IFwicm90YXRlIDVzIGxpbmVhciBpbmZpbml0ZVwiLFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiI0NDQ0NDQ1wiIDogXCIjNTU1NTU1XCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiSGFjaywgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U2l6ZTogXCIxLjc1cmVtXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0ZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiI0NDQ0NDQ1wiIDogXCIjNTU1NTU1XCIsXHJcblx0XHRcdGZvbnRTaXplOiBcIjFyZW1cIlxyXG5cdFx0fSxcclxuXHRcdGxpbms6IHtcclxuXHRcdFx0Zm9udFNpemU6IFwiMXJlbVwiXHJcblx0XHR9LFxyXG5cdFx0c3RhY2tfaWNvbjoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0Ym9yZGVyOiBcIjNweCBzb2xpZCB3aGl0ZVwiXHJcblx0XHR9LFxyXG5cdFx0c3RhY2tfdHlwbzoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjQ0NDQ0NDXCIgOiBcIiM1NTU1NTVcIixcclxuXHRcdFx0Zm9udFNpemU6IFwiMXJlbVwiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9