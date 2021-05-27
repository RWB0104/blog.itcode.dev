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
        spacing: 5,
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
        paddingBottom: theme.spacing(10 / flag),
        width: "99vw"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIkZvb3RlciIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwicm9vdCIsImRpdmlkZXIiLCJsb2dvIiwiY29udGVudCIsInRpdGxlIiwiVElUTEUiLCJsaW5rIiwiZGVzYyIsIkRFU0NSSVBUSU9OIiwic3RhY2tfaWNvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2luZG93IiwibG9jYXRpb24iLCJzdGFja190eXBvIiwib3BlbiIsImZsYWciLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsImFuaW1hdGlvbiIsInRyYW5zZm9ybU9yaWdpbiIsInBhbGV0dGUiLCJ0eXBlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJib3JkZXIiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsTUFBVCxHQUNmO0FBQUE7O0FBQ0MsTUFBTUMsS0FBSyxHQUFHQywyREFBUSxFQUF0QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsZ0VBQWEsQ0FBQ0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLENBQUNMLFFBQUQsQ0FBekI7QUFFQSxzQkFDQyw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQXdCLGFBQVMs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RTlCLEtBQUssQ0FBQzJCLE9BQU4sQ0FBYyxJQUFJSCxJQUFsQjtBQURKO0FBRkgsT0FOb0I7QUFZN0JkLFVBQUksRUFBRTtBQUNMcUIsaUJBQVMsRUFBRSwyQkFETjtBQUVMQyx1QkFBZSxFQUFFO0FBRlosT0FadUI7QUFnQjdCcEIsV0FBSyxFQUFFO0FBQ05rQixvQkFBWSxFQUFFOUIsS0FBSyxDQUFDMkIsT0FBTixDQUFjLENBQWQsQ0FEUjtBQUVOUixhQUFLLEVBQUVuQixLQUFLLENBQUNpQyxPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0MsU0FBaEMsR0FBNEMsU0FGN0M7QUFHTkMsa0JBQVUsRUFBRSxrQkFITjtBQUlOQyxrQkFBVSxFQUFFO0FBSk4sT0FoQnNCO0FBc0I3QnJCLFVBQUksRUFBRTtBQUNMSSxhQUFLLEVBQUVuQixLQUFLLENBQUNpQyxPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0MsU0FBaEMsR0FBNEM7QUFEOUMsT0F0QnVCO0FBeUI3QnBCLFVBQUksRUFBRSxFQXpCdUI7QUEyQjdCRyxnQkFBVSxFQUFFO0FBQ1hvQixrQkFBVSxFQUFFckMsS0FBSyxDQUFDMkIsT0FBTixDQUFjLENBQWQsQ0FERDtBQUVYVyxtQkFBVyxFQUFFdEMsS0FBSyxDQUFDMkIsT0FBTixDQUFjLENBQWQsQ0FGRjtBQUdYWSxjQUFNLEVBQUU7QUFIRyxPQTNCaUI7QUFnQzdCakIsZ0JBQVUsRUFBRTtBQUNYa0IsY0FBTSxFQUFFeEMsS0FBSyxDQUFDMkIsT0FBTixDQUFjLENBQWQsQ0FERztBQUVYUixhQUFLLEVBQUVuQixLQUFLLENBQUNpQyxPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0MsU0FBaEMsR0FBNEM7QUFGeEM7QUFoQ2lCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQXFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ0YzRlYzYzOWFjZTg1ZmYwODQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7ZG47YSwIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjA5IFN1biAwMTo1OToxMlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBEaXZpZGVyLCBHcmlkLCBJY29uQnV0dG9uLCBMaW5rLCBtYWtlU3R5bGVzLCBTdmdJY29uLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBHaXRIdWIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IERFU0NSSVBUSU9OLCBUSVRMRSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCB7IEdtYWlsLCBNYXRlcmlhbFVJLCBSZWFjdCB9IGZyb20gXCIuLi9nbG9iYWwvSWNvbnNcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIO2RuO2EsCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKVxyXG57XHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKGlzTW9iaWxlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggY29tcG9uZW50PVwiZm9vdGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfT5cclxuXHRcdFx0XHQ8Qm94IGZsZXhHcm93PXsxfT5cclxuXHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIgd2lkdGg9XCI4NFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGZsZXhHcm93PXsxfT5cclxuXHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcblx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImg0XCIgZG93bj1cImg1XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5EZXZlbG9wZWQgYnkgUldCIGF0IDIwMjEuPC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57VElUTEV9PC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGFsaWduPXtpc01vYmlsZSA/IFwiY2VudGVyXCIgOiBcImxlZnRcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHTwn5SXIDxMaW5rIGhyZWY9XCJodHRwczovL3J3YjAxMDQuZ2l0aHViLmlvL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5odHRwczovL3J3YjAxMDQuZ2l0aHViLmlvLzwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cInN1YnRpdGxlMlwiIGRvd249XCJjYXB0aW9uMVwiIGFsaWduPXtpc01vYmlsZSA/IFwiY2VudGVyXCIgOiBcImxlZnRcIn0gY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PntERVNDUklQVElPTn08L1NlbWFudGljVHlwbz5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWQgaXRlbSBtZD17NH0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImg0XCIgZG93bj1cImg1XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkNvbnRhY3QgTWU8L1NlbWFudGljVHlwbz5cclxuXHJcblx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX2ljb259IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRUE0MzM1XCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uID0gXCJtYWlsdG86cHNqMjcxNkBnbWFpbC5jb21cIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTdmdJY29uIGZvbnRTaXplPXtpc01vYmlsZSA/IFwic21hbGxcIiA6IFwibGFyZ2VcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEdtYWlsIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3ZnSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwic3VidGl0bGUyXCIgZG93bj1cImNhcHRpb24xXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+TWFpbDwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja19pY29ufSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MTcxN1wiLCBjb2xvcjogXCJ3aGl0ZVwiIH19IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL1JXQjAxMDRcIiwgXCJfYmxhbmtcIil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R2l0SHViIGZvbnRTaXplPXtpc01vYmlsZSA/IFwic21hbGxcIiA6IFwibGFyZ2VcIn0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwic3VidGl0bGUyXCIgZG93bj1cImNhcHRpb24xXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+R2l0aHViPC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezR9IHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Bc3NvY2lhdGVkPC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFja19pY29ufSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE4MTcxN1wiLCBjb2xvcjogXCIjNjFEQUZCXCIgfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJodHRwczovL2tvLnJlYWN0anMub3JnL1wiLCBcIl9ibGFua1wiKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxTdmdJY29uIGZvbnRTaXplPXtpc01vYmlsZSA/IFwic21hbGxcIiA6IFwibGFyZ2VcIn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3ZnSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwic3VidGl0bGUyXCIgZG93bj1cImNhcHRpb24xXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+d2l0aCBEZXZlbG9wPC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX2ljb259IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDA4MUNCXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oXCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIiwgXCJfYmxhbmtcIil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3ZnSWNvbiBmb250U2l6ZT17aXNNb2JpbGUgPyBcInNtYWxsXCIgOiBcImxhcmdlXCJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNYXRlcmlhbFVJIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3ZnSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwic3VidGl0bGUyXCIgZG93bj1cImNhcHRpb24xXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+d2l0aCBEZXNpZ248L1NlbWFudGljVHlwbz5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc3RhY2tfaWNvbn0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxODE3MTdcIiwgY29sb3I6IFwid2hpdGVcIiB9fSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vcGFnZXMuZ2l0aHViLmNvbS9cIiwgXCJfYmxhbmtcIil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R2l0SHViIGZvbnRTaXplPXtpc01vYmlsZSA/IFwic21hbGxcIiA6IFwibGFyZ2VcIn0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwic3VidGl0bGUyXCIgZG93bj1cImNhcHRpb24xXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWNrX3R5cG99IGFsaWduPVwiY2VudGVyXCI+d2l0aCBQdWJsaXNoPC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNb2JpbGU6IOuqqOuwlOydvCDsl6zrtoBcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcyhpc01vYmlsZSlcclxue1xyXG5cdGNvbnN0IGZsYWcgPSBpc01vYmlsZSA/IDQgOiAxO1xyXG5cclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyMCAvIGZsYWcpLFxyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwIC8gZmxhZyksXHJcblx0XHRcdHdpZHRoOiBcIjk5dndcIlxyXG5cdFx0fSxcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwIC8gZmxhZyksXHJcblx0XHRcdFwiJiA+IGRpdlwiOiB7XHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUgLyBmbGFnKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bG9nbzoge1xyXG5cdFx0XHRhbmltYXRpb246IFwicm90YXRlIDVzIGxpbmVhciBpbmZpbml0ZVwiLFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46IFwiNTAlIDUwJVwiXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiI0NDQ0NDQ1wiIDogXCIjNTU1NTU1XCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiSGFjaywgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdGRlc2M6IHtcclxuXHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiNDQ0NDQ0NcIiA6IFwiIzU1NTU1NVwiXHJcblx0XHR9LFxyXG5cdFx0bGluazoge1xyXG5cdFx0fSxcclxuXHRcdHN0YWNrX2ljb246IHtcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdGJvcmRlcjogXCIzcHggc29saWQgd2hpdGVcIlxyXG5cdFx0fSxcclxuXHRcdHN0YWNrX3R5cG86IHtcclxuXHRcdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiI0NDQ0NDQ1wiIDogXCIjNTU1NTU1XCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=