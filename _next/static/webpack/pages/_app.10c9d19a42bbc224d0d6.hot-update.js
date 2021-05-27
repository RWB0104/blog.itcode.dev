self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/global/ThemeSwitch.js":
/*!******************************************!*\
  !*** ./components/global/ThemeSwitch.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ThemeSwitch; }
/* harmony export */ });
/* harmony import */ var C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _common_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/states */ "./common/states.js");
/* harmony import */ var _SemanticTypo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\global\\ThemeSwitch.js",
    _s = $RefreshSig$();

/**
 * 테마 스위치 JavaScript
 *
 * @author RWB
 * @since 2021.05.14 Fri 00:18:28
 */
// 라이브러리 모듈




 // 사용자 모듈



/**
 * 테마 스위치 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function ThemeSwitch() {
  _s();

  var classes = getStyles();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)(theme.breakpoints.down("sm"));

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_common_states__WEBPACK_IMPORTED_MODULE_5__.darkAtom),
      _useRecoilState2 = (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useRecoilState, 2),
      darkState = _useRecoilState2[0],
      setDarkState = _useRecoilState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Fade, {
      "in": !darkState,
      timeout: 300,
      unmountOnExit: true,
      children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Fab, {
        className: classes.fab_dark,
        onClick: function onClick() {
          return onClickSwitch(react_cookies__WEBPACK_IMPORTED_MODULE_3__.default, setDarkState, true);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
          className: classes.div,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.NightsStay, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Fab, {
        variant: "extended",
        className: classes.fab_dark,
        onClick: function onClick() {
          return onClickSwitch(react_cookies__WEBPACK_IMPORTED_MODULE_3__.default, setDarkState, true);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
          className: classes.div,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.NightsStay, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
          variant: "button",
          children: "\uB2E4\uD06C \uBAA8\uB4DC \uD65C\uC131\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Fade, {
      "in": darkState,
      timeout: 300,
      unmountOnExit: true,
      children: isMobile ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Fab, {
        className: classes.fab_bright,
        onClick: function onClick() {
          return onClickSwitch(react_cookies__WEBPACK_IMPORTED_MODULE_3__.default, setDarkState, false);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.WbSunny, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Fab, {
        variant: "extended",
        className: classes.fab_bright,
        onClick: function onClick() {
          return onClickSwitch(react_cookies__WEBPACK_IMPORTED_MODULE_3__.default, setDarkState, false);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.WbSunny, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 8
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
          variant: "button",
          children: "\uB77C\uC774\uD2B8 \uBAA8\uB4DC \uD65C\uC131\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
/**
 * 스위치 클릭 이벤트 함수
 *
 * @param {Object} cookie: 쿠키 객체
 * @param {Function} setDarkState: 다크 테마 상태 지정 함수
 * @param {boolean} flag: 다크 테마 사용 여부
 */

_s(ThemeSwitch, "s7TzhkouzvkISyDm6trcy7y/oyw=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery, recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState];
});

_c = ThemeSwitch;

function onClickSwitch(cookie, setDarkState, flag) {
  cookie.save("theme", flag, {
    path: "/"
  });
  setDarkState(flag);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */


function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
    var _fab_bright, _fab_dark;

    return {
      fab_bright: (_fab_bright = {
        position: "fixed",
        bottom: 50,
        right: 50,
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.grey[800],
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.grey[200],
        "&:hover": {
          backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.grey[700]
        },
        "& svg": {
          color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.orange[600]
        }
      }, (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_fab_bright, theme.breakpoints.up("md"), {
        "& span": {
          marginLeft: theme.spacing(1)
        }
      }), (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_fab_bright, theme.breakpoints.down("sm"), {
        bottom: 70,
        right: 20
      }), _fab_bright),
      fab_dark: (_fab_dark = {
        position: "fixed",
        bottom: 50,
        right: 50,
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.grey[200],
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.grey[900],
        "&:hover": {
          backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.grey[300]
        },
        "& svg": {
          color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.blue[600]
        }
      }, (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_fab_dark, theme.breakpoints.up("md"), {
        "& span": {
          marginLeft: theme.spacing(1)
        }
      }), (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_fab_dark, theme.breakpoints.down("sm"), {
        bottom: 70,
        right: 20
      }), _fab_dark),
      div: {
        height: 24
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "ThemeSwitch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVGhlbWVTd2l0Y2guanMiXSwibmFtZXMiOlsiVGhlbWVTd2l0Y2giLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInVzZVJlY29pbFN0YXRlIiwiZGFya0F0b20iLCJkYXJrU3RhdGUiLCJzZXREYXJrU3RhdGUiLCJmYWJfZGFyayIsIm9uQ2xpY2tTd2l0Y2giLCJjb29raWUiLCJkaXYiLCJmYWJfYnJpZ2h0IiwiZmxhZyIsInNhdmUiLCJwYXRoIiwibWFrZVN0eWxlcyIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmV5IiwiY29sb3IiLCJvcmFuZ2UiLCJ1cCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiYmx1ZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFdBQVQsR0FDZjtBQUFBOztBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsMkRBQVEsRUFBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5Qjs7QUFKRCx3QkFNcUNDLHNEQUFjLENBQUNDLG9EQUFELENBTm5EO0FBQUE7QUFBQSxNQU1TQyxTQU5UO0FBQUEsTUFNb0JDLFlBTnBCOztBQVFDLHNCQUNDO0FBQUEsNEJBQ0MsOERBQUMsbURBQUQ7QUFBTSxZQUFJLENBQUNELFNB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QUFLLEVBQUU7QUFGd0IsT0FqQnpCLGFBdkJxQjtBQTZDN0JSLFNBQUcsRUFBRTtBQUNKaUIsY0FBTSxFQUFFO0FBREo7QUE3Q3dCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQWlEQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjEwYzlkMTlhNDJiYmMyMjRkMGQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7YWM66eIIOyKpOychOy5mCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjE0IEZyaSAwMDoxODoyOFxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xyXG5pbXBvcnQgeyBCb3gsIEZhYiwgRmFkZSwgSWNvbiwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgYmx1ZSwgZ3JleSwgb3JhbmdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgeyBOaWdodHNTdGF5LCBXYlN1bm55IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IHsgZGFya0F0b20gfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0YXRlc1wiO1xyXG5pbXBvcnQgU2VtYW50aWNUeXBvIGZyb20gXCIuL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIO2FjOuniCDsiqTsnITsuZggSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGhlbWVTd2l0Y2goKVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdGNvbnN0IFsgZGFya1N0YXRlLCBzZXREYXJrU3RhdGUgXSA9IHVzZVJlY29pbFN0YXRlKGRhcmtBdG9tKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxGYWRlIGluPXshZGFya1N0YXRlfSB0aW1lb3V0PXszMDB9IHVubW91bnRPbkV4aXQ+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aXNNb2JpbGUgPyAoXHJcblx0XHRcdFx0XHRcdDxGYWIgY2xhc3NOYW1lPXtjbGFzc2VzLmZhYl9kYXJrfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrU3dpdGNoKGNvb2tpZSwgc2V0RGFya1N0YXRlLCB0cnVlKX0+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBjbGFzc05hbWU9e2NsYXNzZXMuZGl2fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxOaWdodHNTdGF5IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvRmFiPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0PEZhYiB2YXJpYW50PVwiZXh0ZW5kZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZmFiX2Rhcmt9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tTd2l0Y2goY29va2llLCBzZXREYXJrU3RhdGUsIHRydWUpfT5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PE5pZ2h0c1N0YXkgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCI+64uk7YGsIOuqqOuTnCDtmZzshLHtmZQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvRmFiPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdDwvRmFkZT5cclxuXHJcblx0XHRcdDxGYWRlIGluPXtkYXJrU3RhdGV9IHRpbWVvdXQ9ezMwMH0gdW5tb3VudE9uRXhpdD5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpc01vYmlsZSA/IChcclxuXHRcdFx0XHRcdFx0PEZhYiBjbGFzc05hbWU9e2NsYXNzZXMuZmFiX2JyaWdodH0gb25DbGljaz17KCkgPT4gb25DbGlja1N3aXRjaChjb29raWUsIHNldERhcmtTdGF0ZSwgZmFsc2UpfT5cclxuXHRcdFx0XHRcdFx0XHQ8V2JTdW5ueSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0ZhYj5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxGYWIgdmFyaWFudD1cImV4dGVuZGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZhYl9icmlnaHR9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tTd2l0Y2goY29va2llLCBzZXREYXJrU3RhdGUsIGZhbHNlKX0+XHJcblx0XHRcdFx0XHRcdFx0PFdiU3VubnkgLz5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiYnV0dG9uXCI+65287J207Yq4IOuqqOuTnCDtmZzshLHtmZQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdDwvRmFiPlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9GYWRlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpOychOy5mCDtgbTrpq0g7J2067Kk7Yq4IO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29va2llOiDsv6DtgqQg6rCd7LK0XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldERhcmtTdGF0ZTog64uk7YGsIO2FjOuniCDsg4Htg5wg7KeA7KCVIO2VqOyImFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWc6IOuLpO2BrCDthYzrp4gg7IKs7JqpIOyXrOu2gFxyXG4gKi9cclxuZnVuY3Rpb24gb25DbGlja1N3aXRjaChjb29raWUsIHNldERhcmtTdGF0ZSwgZmxhZylcclxue1xyXG5cdGNvb2tpZS5zYXZlKFwidGhlbWVcIiwgZmxhZywgeyBwYXRoOiBcIi9cIiB9KTtcclxuXHRzZXREYXJrU3RhdGUoZmxhZyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRmYWJfYnJpZ2h0OiB7XHJcblx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcblx0XHRcdGJvdHRvbTogNTAsXHJcblx0XHRcdHJpZ2h0OiA1MCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBncmV5WzgwMF0sXHJcblx0XHRcdGNvbG9yOiBncmV5WzIwMF0sXHJcblx0XHRcdFwiJjpob3ZlclwiOiB7XHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBncmV5WzcwMF1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0Y29sb3I6IG9yYW5nZVs2MDBdXHJcblx0XHRcdH0sXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG5cdFx0XHRcdFwiJiBzcGFuXCI6IHtcclxuXHRcdFx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0Ym90dG9tOiA3MCxcclxuXHRcdFx0XHRyaWdodDogMjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGZhYl9kYXJrOiB7XHJcblx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcblx0XHRcdGJvdHRvbTogNTAsXHJcblx0XHRcdHJpZ2h0OiA1MCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBncmV5WzIwMF0sXHJcblx0XHRcdGNvbG9yOiBncmV5WzkwMF0sXHJcblx0XHRcdFwiJjpob3ZlclwiOiB7XHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBncmV5WzMwMF1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0Y29sb3I6IGJsdWVbNjAwXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuXHRcdFx0XHRcIiYgc3BhblwiOiB7XHJcblx0XHRcdFx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG5cdFx0XHRcdGJvdHRvbTogNzAsXHJcblx0XHRcdFx0cmlnaHQ6IDIwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkaXY6IHtcclxuXHRcdFx0aGVpZ2h0OiAyNFxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==