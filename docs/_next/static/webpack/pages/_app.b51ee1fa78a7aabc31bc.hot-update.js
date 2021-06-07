self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/global/Layout.js":
/*!*************************************!*\
  !*** ./components/global/Layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/Header */ "./components/header/Header.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _footer_BottomMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/BottomMenu */ "./components/footer/BottomMenu.js");
/* harmony import */ var _ThemeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeSwitch */ "./components/global/ThemeSwitch.js");
/* harmony import */ var _common_states__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/states */ "./common/states.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\global\\Layout.js",
    _s = $RefreshSig$();

/**
 * 레이아웃 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.08 Sat 14:42:08
 */
// 라이브러리 모듈



 // 사용자 모듈






/**
 * 레이아웃 JSX 반환 함수
 *
 * @param {JSX} children: 하위 JSX
 *
 * @returns {JSX} JSX 객체
 */

function Layout(_ref) {
  _s();

  var children = _ref.children;
  var darkState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_common_states__WEBPACK_IMPORTED_MODULE_7__.darkAtom);
  var theme = getThemes(darkState);
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)(theme.breakpoints.down("sm"));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.addEventListener("contextmenu", function (e) {
      return e.preventDefault();
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MuiThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.CssBaseline, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeSwitch__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_BottomMenu__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, this);
}
/**
 * 테마 반환 함수
 *
 * @param {boolean} isDark: 다크 테마 적용 여부
 *
 * @returns {MuiTheme} MuiTheme 객체
 */

_s(Layout, "fZt1pAPEcPeveL02qaRHQQEv2Ds=", false, function () {
  return [recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue, _material_ui_core__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery];
});

_c = Layout;

function getThemes(isDark) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.createMuiTheme)({
    palette: {
      type: isDark ? "dark" : "light",
      background: {
        "default": isDark ? "#020d1d" : "#FFFFFF"
      },
      primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.blue,
      secondary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__.indigo
    },
    typography: {
      fontFamily: "나눔스퀘어라운드, sans-serif"
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            WebkitFontSmoothing: "auto"
          },
          "*::-webkit-scrollbar, *::-webkit-scrollbar-thumb": {
            width: 6,
            borderRadius: 6,
            backgroundClip: "padding-box",
            border: "1px solid transparent"
          },
          "*::-webkit-scrollbar-thumb": {
            boxShadow: "inset 0 0 0 10px",
            color: isDark ? "#404040" : "#C0C0C0"
          }
        }
      }
    }
  });
}

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZGFya1N0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJkYXJrQXRvbSIsInRoZW1lIiwiZ2V0VGhlbWVzIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNEYXJrIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImluZGlnbyIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwib3ZlcnJpZGVzIiwiTXVpQ3NzQmFzZWxpbmUiLCJodG1sIiwiV2Via2l0Rm9udFNtb290aGluZyIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENsaXAiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE1BQVQsT0FDZjtBQUFBOztBQUFBLE1BRGlDQyxRQUNqQyxRQURpQ0EsUUFDakM7QUFDQyxNQUFNQyxTQUFTLEdBQUdDLHNEQUFjLENBQUNDLG9EQUFELENBQWhDO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxTQUFTLENBQUNKLFNBQUQsQ0FBdkI7QUFDQSxNQUFNSyxRQUFRLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBQyxrREFBUyxDQUFDLFlBQ1Y7QUFDQ0MsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxLQUF6QztBQUNBLEdBSFEsQ0FBVDtBQUtBLHNCQUNDLDhEQUFDLCtEQUFEO0FBQWtCLFNBQUssRUFBRVYsS0FBekI7QUFBQSw0QkFDQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRCxlQU1DLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORCxFQVFFSixRQVJGLGVBVUMsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZELGVBWUMsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpELEVBY0VNLFFBQVEsaUJBQUksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBdEN3QlAsTTtVQUVMRyxrRCxFQUdESyw0RDs7O0tBTE1SLE07O0FBdUN4QixTQUFTTSxTQUFULENBQW1CVSxNQUFuQixFQUNBO0FBQ0MsU0FBT0MsaUVBQWMsQ0FBQztBQUNyQkMsV0FBTyxFQUFFO0FBQ1JDLFVBQUksRUFBRUgsTUFBTSxHQUFHLE1BQUgsR0FBWSxPQURoQjtBQUVSSSxnQkFBVSxFQUFFO0FBQ1gsbUJBQVNKLE1BQU0sR0FBRyxTQUFILEdBQWU7QUFEbkIsT0FGSjtBQUtSSyxhQUFPLEVBQUVDLDBEQUxEO0FBTVJDLGVBQVMsRUFBRUMsNERBQU1BO0FBTlQsS0FEWTtBQVNyQkMsY0FBVSxFQUFFO0FBQ1hDLGdCQUFVLEVBQUU7QUFERCxLQVRTO0FBWXJCQyxhQUFTLEVBQUU7QUFDVkMsb0JBQWMsRUFBRTtBQUNmLG1CQUFXO0FBQ1ZDLGNBQUksRUFBRTtBQUNMQywrQkFBbUIsRUFBRTtBQURoQixXQURJO0FBSVYsOERBQW9EO0FBQ25EQyxpQkFBSyxFQUFFLENBRDRDO0FBRW5EQyx3QkFBWSxFQUFFLENBRnFDO0FBR25EQywwQkFBYyxFQUFFLGFBSG1DO0FBSW5EQyxrQkFBTSxFQUFFO0FBSjJDLFdBSjFDO0FBVVYsd0NBQThCO0FBQzdCQyxxQkFBUyxFQUFFLGtCQURrQjtBQUU3QkMsaUJBQUssRUFBRXBCLE1BQU0sR0FBRyxTQUFILEdBQWU7QUFGQztBQVZwQjtBQURJO0FBRE47QUFaVSxHQUFELENBQXJCO0FBZ0NBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjUxZWUxZmE3OGE3YWFiYzMxYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDroIjsnbTslYTsm4Mg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMDggU2F0IDE0OjQyOjA4XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYmx1ZSwgaW5kaWdvIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgQ3NzQmFzZWxpbmUsIE11aVRoZW1lUHJvdmlkZXIsIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgQm90dG9tTWVudSBmcm9tIFwiLi4vZm9vdGVyL0JvdHRvbU1lbnVcIjtcclxuaW1wb3J0IFRoZW1lU3dpdGNoIGZyb20gXCIuL1RoZW1lU3dpdGNoXCI7XHJcbmltcG9ydCB7IGRhcmtBdG9tIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdGF0ZXNcIjtcclxuXHJcbi8qKlxyXG4gKiDroIjsnbTslYTsm4MgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtKU1h9IGNoaWxkcmVuOiDtlZjsnIQgSlNYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pXHJcbntcclxuXHRjb25zdCBkYXJrU3RhdGUgPSB1c2VSZWNvaWxWYWx1ZShkYXJrQXRvbSk7XHJcblxyXG5cdGNvbnN0IHRoZW1lID0gZ2V0VGhlbWVzKGRhcmtTdGF0ZSk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PlxyXG5cdHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0PEhlYWQ+XHJcblxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHJcblx0XHRcdDxUaGVtZVN3aXRjaCAvPlxyXG5cclxuXHRcdFx0e2lzTW9iaWxlICYmIDxCb3R0b21NZW51IC8+fVxyXG5cdFx0PC9NdWlUaGVtZVByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDthYzrp4gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGFyazog64uk7YGsIO2FjOuniCDsoIHsmqkg7Jes67aAXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtNdWlUaGVtZX0gTXVpVGhlbWUg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUaGVtZXMoaXNEYXJrKVxyXG57XHJcblx0cmV0dXJuIGNyZWF0ZU11aVRoZW1lKHtcclxuXHRcdHBhbGV0dGU6IHtcclxuXHRcdFx0dHlwZTogaXNEYXJrID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIsXHJcblx0XHRcdGJhY2tncm91bmQ6IHtcclxuXHRcdFx0XHRkZWZhdWx0OiBpc0RhcmsgPyBcIiMwMjBkMWRcIiA6IFwiI0ZGRkZGRlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHByaW1hcnk6IGJsdWUsXHJcblx0XHRcdHNlY29uZGFyeTogaW5kaWdvXHJcblx0XHR9LFxyXG5cdFx0dHlwb2dyYXBoeToge1xyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuCmOuIlOyKpO2AmOyWtOudvOyatOuTnCwgc2Fucy1zZXJpZlwiXHJcblx0XHR9LFxyXG5cdFx0b3ZlcnJpZGVzOiB7XHJcblx0XHRcdE11aUNzc0Jhc2VsaW5lOiB7XHJcblx0XHRcdFx0XCJAZ2xvYmFsXCI6IHtcclxuXHRcdFx0XHRcdGh0bWw6IHtcclxuXHRcdFx0XHRcdFx0V2Via2l0Rm9udFNtb290aGluZzogXCJhdXRvXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIio6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA2LFxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDYsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDAgMTBweFwiLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogaXNEYXJrID8gXCIjNDA0MDQwXCIgOiBcIiNDMEMwQzBcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==