self["webpackHotUpdate_N_E"]("pages/_app",{

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
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* harmony import */ var _global_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/Icons */ "./components/global/Icons.js");
/* harmony import */ var _global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\footer\\Footer.js",
    _s = $RefreshSig$();

/**
 * 푸터 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.09 Sun 01:59:12
 */





/**
 * 푸터 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function Footer() {
  _s();

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.down("sm"));
  var classes = getStyles(isMobile);
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
          lineNumber: 30,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/assets/images/logo.png",
          width: "84",
          className: classes.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        flexGrow: 1,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
      maxWidth: "md",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        spacing: 4,
        className: classes.content,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
              up: "h4",
              down: "h5",
              className: classes.title,
              children: "Developed by RWB at 2021."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          md: 4,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
            up: "h4",
            down: "h5",
            align: "center",
            className: classes.title,
            children: _common_env__WEBPACK_IMPORTED_MODULE_1__.TITLE
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
              up: "subtitle2",
              down: "caption1",
              align: isMobile ? "center" : "left",
              children: ["\uD83D\uDD17 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                href: "https://rwb0104.github.io/",
                className: classes.link,
                children: "https://rwb0104.github.io/"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
              up: "subtitle2",
              down: "caption1",
              align: isMobile ? "center" : "left",
              className: classes.desc,
              children: _common_env__WEBPACK_IMPORTED_MODULE_1__.DESCRIPTION
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          md: 4,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
            up: "h4",
            down: "h5",
            align: "center",
            className: classes.title,
            children: "Contact Me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
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
                  fontSize: isMobile ? "small" : "large",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_Icons__WEBPACK_IMPORTED_MODULE_2__.Gmail, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
                up: "subtitle2",
                down: "caption1",
                className: classes.stack_typo,
                align: "center",
                children: "Mail"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
                  fontSize: isMobile ? "small" : "large"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
                up: "subtitle2",
                down: "caption1",
                className: classes.stack_typo,
                align: "center",
                children: "Github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          md: 4,
          xs: 12,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
            up: "h4",
            down: "h5",
            align: "center",
            className: classes.title,
            children: "Associated"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
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
                  fontSize: isMobile ? "small" : "large",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_Icons__WEBPACK_IMPORTED_MODULE_2__.React, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
                up: "subtitle2",
                down: "caption1",
                className: classes.stack_typo,
                align: "center",
                children: "with Develop"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                  fontSize: isMobile ? "small" : "large",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_Icons__WEBPACK_IMPORTED_MODULE_2__.MaterialUI, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
                up: "subtitle2",
                down: "caption1",
                className: classes.stack_typo,
                align: "center",
                children: "with Design"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
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
                  fontSize: isMobile ? "small" : "large"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
                up: "subtitle2",
                down: "caption1",
                className: classes.stack_typo,
                align: "center",
                children: "with Publish"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @param {boolean} isMobile: 모바일 여부
 *
 * @returns {JSON} 스타일 객체
 */

_s(Footer, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];
});

_c = Footer;

function getStyles(isMobile) {
  var flag = isMobile ? 4 : 1;
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      root: {
        marginTop: theme.spacing(20 / flag),
        paddingBottom: theme.spacing(10 / flag)
      },
      content: {
        marginTop: theme.spacing(10 / flag),
        "& > div": {
          marginBottom: theme.spacing(5 / flag)
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
        fontWeight: "bold"
      },
      desc: {
        color: theme.palette.type === "dark" ? "#CCCCCC" : "#555555"
      },
      link: {},
      stack_icon: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        border: "3px solid white"
      },
      stack_typo: {
        margin: theme.spacing(1),
        color: theme.palette.type === "dark" ? "#CCCCCC" : "#555555"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwicm9vdCIsImRpdmlkZXIiLCJsb2dvIiwiY29udGVudCIsInRpdGxlIiwiVElUTEUiLCJsaW5rIiwiZGVzYyIsIkRFU0NSSVBUSU9OIiwic3RhY2tfaWNvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2luZG93IiwibG9jYXRpb24iLCJzdGFja190eXBvIiwib3BlbiIsImZsYWciLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWxldHRlIiwidHlwZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYm9yZGVyIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE1BQVQsR0FDZjtBQUFBOztBQUNDLE1BQU1DLEtBQUssR0FBR0MsMkRBQVEsRUFBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxDQUFDTCxRQUFELENBQXpCO0FBRUEsc0JBQ0MsOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUF3QixhQUFTLEVBQUVJLE9B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SCxJQUFsQjtBQURKO0FBRkgsT0FMb0I7QUFXN0JkLFVBQUksRUFBRTtBQUNMb0IsaUJBQVMsRUFBRSwyQkFETjtBQUVMQyx1QkFBZSxFQUFFO0FBRlosT0FYdUI7QUFlN0JuQixXQUFLLEVBQUU7QUFDTmlCLG9CQUFZLEVBQUU3QixLQUFLLENBQUMyQixPQUFOLENBQWMsQ0FBZCxDQURSO0FBRU5SLGFBQUssRUFBRW5CLEtBQUssQ0FBQ2dDLE9BQU4sQ0FBY0MsSUFBZCxLQUF1QixNQUF2QixHQUFnQyxTQUFoQyxHQUE0QyxTQUY3QztBQUdOQyxrQkFBVSxFQUFFLGtCQUhOO0FBSU5DLGtCQUFVLEVBQUU7QUFKTixPQWZzQjtBQXFCN0JwQixVQUFJLEVBQUU7QUFDTEksYUFBSyxFQUFFbkIsS0FBSyxDQUFDZ0MsT0FBTixDQUFjQyxJQUFkLEtBQXVCLE1BQXZCLEdBQWdDLFNBQWhDLEdBQTRDO0FBRDlDLE9BckJ1QjtBQXdCN0JuQixVQUFJLEVBQUUsRUF4QnVCO0FBMEI3QkcsZ0JBQVUsRUFBRTtBQUNYbUIsa0JBQVUsRUFBRXBDLEtBQUssQ0FBQzJCLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFWFUsbUJBQVcsRUFBRXJDLEtBQUssQ0FBQzJCLE9BQU4sQ0FBYyxDQUFkLENBRkY7QUFHWFcsY0FBTSxFQUFFO0FBSEcsT0ExQmlCO0FBK0I3QmhCLGdCQUFVLEVBQUU7QUFDWGlCLGNBQU0sRUFBRXZDLEtBQUssQ0FBQzJCLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFWFIsYUFBSyxFQUFFbkIsS0FBSyxDQUFDZ0MsT0FBTixDQUFjQyxJQUFkLEtBQXVCLE1BQXZCLEdBQWdDLFNBQWhDLEdBQTRDO0FBRnhDO0FBL0JpQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFvQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYjU4MjliOWFjOGEyZTk2ZjllZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIO2RuO2EsCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4wOSBTdW4gMDE6NTk6MTJcclxuICovXHJcblxyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCwgSWNvbkJ1dHRvbiwgTGluaywgbWFrZVN0eWxlcywgU3ZnSWNvbiwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgR2l0SHViIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBERVNDUklQVElPTiwgVElUTEUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudlwiO1xyXG5pbXBvcnQgeyBHbWFpbCwgTWF0ZXJpYWxVSSwgUmVhY3QgfSBmcm9tIFwiLi4vZ2xvYmFsL0ljb25zXCI7XHJcbmltcG9ydCBTZW1hbnRpY1R5cG8gZnJvbSBcIi4uL2dsb2JhbC9TZW1hbnRpY1R5cG9cIjtcclxuXHJcbi8qKlxyXG4gKiDtkbjthLAgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKClcclxue1xyXG5cdGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHRjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcyhpc01vYmlsZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGNvbXBvbmVudD1cImZvb3RlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0+XHJcblx0XHRcdFx0PEJveCBmbGV4R3Jvdz17MX0+XHJcblx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIHdpZHRoPVwiODRcIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30gLz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBmbGV4R3Jvdz17MX0+XHJcblx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG5cdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+RGV2ZWxvcGVkIGJ5IFJXQiBhdCAyMDIxLjwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e1RJVExFfTwvU2VtYW50aWNUeXBvPlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJzdWJ0aXRsZTJcIiBkb3duPVwiY2FwdGlvbjFcIiBhbGlnbj17aXNNb2JpbGUgPyBcImNlbnRlclwiIDogXCJsZWZ0XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx08J+UlyA8TGluayBocmVmPVwiaHR0cHM6Ly9yd2IwMTA0LmdpdGh1Yi5pby9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+aHR0cHM6Ly9yd2IwMTA0LmdpdGh1Yi5pby88L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJzdWJ0aXRsZTJcIiBkb3duPVwiY2FwdGlvbjFcIiBhbGlnbj17aXNNb2JpbGUgPyBcImNlbnRlclwiIDogXCJsZWZ0XCJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT57REVTQ1JJUFRJT059PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Db250YWN0IE1lPC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja19pY29ufSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VBNDMzNVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9IFwibWFpbHRvOnBzajI3MTZAZ21haWwuY29tXCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3ZnSWNvbiBmb250U2l6ZT17aXNNb2JpbGUgPyBcInNtYWxsXCIgOiBcImxhcmdlXCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHbWFpbCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1N2Z0ljb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja190eXBvfSBhbGlnbj1cImNlbnRlclwiPk1haWw8L1NlbWFudGljVHlwbz5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfaWNvbn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxODE3MTdcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9SV0IwMTA0XCIsIFwiX2JsYW5rXCIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdpdEh1YiBmb250U2l6ZT17aXNNb2JpbGUgPyBcInNtYWxsXCIgOiBcImxhcmdlXCJ9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja190eXBvfSBhbGlnbj1cImNlbnRlclwiPkdpdGh1YjwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs0fSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+QXNzb2NpYXRlZDwvU2VtYW50aWNUeXBvPlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfaWNvbn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxODE3MTdcIiwgY29sb3I6IFwiIzYxREFGQlwiIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9rby5yZWFjdGpzLm9yZy9cIiwgXCJfYmxhbmtcIil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3ZnSWNvbiBmb250U2l6ZT17aXNNb2JpbGUgPyBcInNtYWxsXCIgOiBcImxhcmdlXCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1N2Z0ljb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja190eXBvfSBhbGlnbj1cImNlbnRlclwiPndpdGggRGV2ZWxvcDwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja19pY29ufSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwODFDQlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCIsIFwiX2JsYW5rXCIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFN2Z0ljb24gZm9udFNpemU9e2lzTW9iaWxlID8gXCJzbWFsbFwiIDogXCJsYXJnZVwifT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWF0ZXJpYWxVSSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1N2Z0ljb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja190eXBvfSBhbGlnbj1cImNlbnRlclwiPndpdGggRGVzaWduPC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX2ljb259IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMTgxNzE3XCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJodHRwczovL3BhZ2VzLmdpdGh1Yi5jb20vXCIsIFwiX2JsYW5rXCIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdpdEh1YiBmb250U2l6ZT17aXNNb2JpbGUgPyBcInNtYWxsXCIgOiBcImxhcmdlXCJ9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja190eXBvfSBhbGlnbj1cImNlbnRlclwiPndpdGggUHVibGlzaDwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzTW9iaWxlOiDrqqjrsJTsnbwg7Jes67aAXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoaXNNb2JpbGUpXHJcbntcclxuXHRjb25zdCBmbGFnID0gaXNNb2JpbGUgPyA0IDogMTtcclxuXHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMjAgLyBmbGFnKSxcclxuXHRcdFx0cGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxMCAvIGZsYWcpXHJcblx0XHR9LFxyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTAgLyBmbGFnKSxcclxuXHRcdFx0XCImID4gZGl2XCI6IHtcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSAvIGZsYWcpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRsb2dvOiB7XHJcblx0XHRcdGFuaW1hdGlvbjogXCJyb3RhdGUgNXMgbGluZWFyIGluZmluaXRlXCIsXHJcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCJcclxuXHRcdH0sXHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjQ0NDQ0NDXCIgOiBcIiM1NTU1NTVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCJIYWNrLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0ZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiI0NDQ0NDQ1wiIDogXCIjNTU1NTU1XCJcclxuXHRcdH0sXHJcblx0XHRsaW5rOiB7XHJcblx0XHR9LFxyXG5cdFx0c3RhY2tfaWNvbjoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0Ym9yZGVyOiBcIjNweCBzb2xpZCB3aGl0ZVwiXHJcblx0XHR9LFxyXG5cdFx0c3RhY2tfdHlwbzoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjQ0NDQ0NDXCIgOiBcIiM1NTU1NTVcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==