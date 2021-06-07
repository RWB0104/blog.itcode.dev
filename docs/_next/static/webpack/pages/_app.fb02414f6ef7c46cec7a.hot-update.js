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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ "./components/header/Header.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _footer_BottomMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/BottomMenu */ "./components/footer/BottomMenu.js");
/* harmony import */ var _ThemeSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeSwitch */ "./components/global/ThemeSwitch.js");
/* harmony import */ var _common_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/states */ "./common/states.js");
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
  var darkState = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_common_states__WEBPACK_IMPORTED_MODULE_8__.darkAtom);
  var theme = getThemes(darkState);
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)(theme.breakpoints.down("sm"));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.addEventListener("contextmenu", function (e) {
      return e.preventDefault();
    });
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
      alert("asdfaf");
    }

    gtag("js", new Date());
    gtag("config", "G-X2THE3XLX1");
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.MuiThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.CssBaseline, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-X2THE3XLX1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeSwitch__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this), isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_BottomMenu__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
  return [recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue, _material_ui_core__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery];
});

_c = Layout;

function getThemes(isDark) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.createMuiTheme)({
    palette: {
      type: isDark ? "dark" : "light",
      background: {
        "default": isDark ? "#020d1d" : "#FFFFFF"
      },
      primary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.blue,
      secondary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.indigo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZGFya1N0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJkYXJrQXRvbSIsInRoZW1lIiwiZ2V0VGhlbWVzIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiZGF0YUxheWVyIiwiZ3RhZyIsInB1c2giLCJhcmd1bWVudHMiLCJhbGVydCIsIkRhdGUiLCJpc0RhcmsiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJ0eXBlIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJibHVlIiwic2Vjb25kYXJ5IiwiaW5kaWdvIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJvdmVycmlkZXMiLCJNdWlDc3NCYXNlbGluZSIsImh0bWwiLCJXZWJraXRGb250U21vb3RoaW5nIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ2xpcCIsImJvcmRlciIsImJveFNoYWRvdyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE1BQVQsT0FDZjtBQUFBOztBQUFBLE1BRGlDQyxRQUNqQyxRQURpQ0EsUUFDakM7QUFDQyxNQUFNQyxTQUFTLEdBQUdDLHNEQUFjLENBQUNDLG9EQUFELENBQWhDO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxTQUFTLENBQUNKLFNBQUQsQ0FBdkI7QUFDQSxNQUFNSyxRQUFRLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBQyxrREFBUyxDQUFDLFlBQ1Y7QUFDQ0MsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixhQUExQixFQUF5QyxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxLQUF6QztBQUVBQyxVQUFNLENBQUNDLFNBQVAsR0FBbUJELE1BQU0sQ0FBQ0MsU0FBUCxJQUFvQixFQUF2Qzs7QUFFQSxhQUFTQyxJQUFULEdBQ0E7QUFDQ0QsZUFBUyxDQUFDRSxJQUFWLENBQWVDLFNBQWY7QUFDQUMsV0FBSyxDQUFDLFFBQUQsQ0FBTDtBQUNBOztBQUVESCxRQUFJLENBQUMsSUFBRCxFQUFPLElBQUlJLElBQUosRUFBUCxDQUFKO0FBRUFKLFFBQUksQ0FBQyxRQUFELEVBQVcsY0FBWCxDQUFKO0FBQ0EsR0FmUSxDQUFUO0FBaUJBLHNCQUNDLDhEQUFDLCtEQUFEO0FBQWtCLFNBQUssRUFBRWIsS0FBekI7QUFBQSw0QkFDQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQVEsYUFBSyxNQUFiO0FBQWMsV0FBRyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQsZUFPQyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsRUFTRUosUUFURixlQVdDLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRCxlQWFDLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRCxFQWVFTSxRQUFRLGlCQUFJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1CQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQW5Ed0JQLE07VUFFTEcsa0QsRUFHREssNEQ7OztLQUxNUixNOztBQW9EeEIsU0FBU00sU0FBVCxDQUFtQmlCLE1BQW5CLEVBQ0E7QUFDQyxTQUFPQyxpRUFBYyxDQUFDO0FBQ3JCQyxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFSCxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BRGhCO0FBRVJJLGdCQUFVLEVBQUU7QUFDWCxtQkFBU0osTUFBTSxHQUFHLFNBQUgsR0FBZTtBQURuQixPQUZKO0FBS1JLLGFBQU8sRUFBRUMsMkRBTEQ7QUFNUkMsZUFBUyxFQUFFQyw2REFBTUE7QUFOVCxLQURZO0FBU3JCQyxjQUFVLEVBQUU7QUFDWEMsZ0JBQVUsRUFBRTtBQURELEtBVFM7QUFZckJDLGFBQVMsRUFBRTtBQUNWQyxvQkFBYyxFQUFFO0FBQ2YsbUJBQVc7QUFDVkMsY0FBSSxFQUFFO0FBQ0xDLCtCQUFtQixFQUFFO0FBRGhCLFdBREk7QUFJViw4REFBb0Q7QUFDbkRDLGlCQUFLLEVBQUUsQ0FENEM7QUFFbkRDLHdCQUFZLEVBQUUsQ0FGcUM7QUFHbkRDLDBCQUFjLEVBQUUsYUFIbUM7QUFJbkRDLGtCQUFNLEVBQUU7QUFKMkMsV0FKMUM7QUFVVix3Q0FBOEI7QUFDN0JDLHFCQUFTLEVBQUUsa0JBRGtCO0FBRTdCQyxpQkFBSyxFQUFFcEIsTUFBTSxHQUFHLFNBQUgsR0FBZTtBQUZDO0FBVnBCO0FBREk7QUFETjtBQVpVLEdBQUQsQ0FBckI7QUFnQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYjAyNDE0ZjZlZjdjNDZjZWM3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOugiOydtOyVhOybgyDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4wOCBTYXQgMTQ6NDI6MDhcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGJsdWUsIGluZGlnbyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIENzc0Jhc2VsaW5lLCBNdWlUaGVtZVByb3ZpZGVyLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IEJvdHRvbU1lbnUgZnJvbSBcIi4uL2Zvb3Rlci9Cb3R0b21NZW51XCI7XHJcbmltcG9ydCBUaGVtZVN3aXRjaCBmcm9tIFwiLi9UaGVtZVN3aXRjaFwiO1xyXG5pbXBvcnQgeyBkYXJrQXRvbSB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RhdGVzXCI7XHJcblxyXG4vKipcclxuICog66CI7J207JWE7JuDIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNYfSBjaGlsZHJlbjog7ZWY7JyEIEpTWFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KVxyXG57XHJcblx0Y29uc3QgZGFya1N0YXRlID0gdXNlUmVjb2lsVmFsdWUoZGFya0F0b20pO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IGdldFRoZW1lcyhkYXJrU3RhdGUpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT5cclxuXHR7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG5cdFx0d2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ3RhZygpXHJcblx0XHR7XHJcblx0XHRcdGRhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7XHJcblx0XHRcdGFsZXJ0KFwiYXNkZmFmXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGd0YWcoXCJqc1wiLCBuZXcgRGF0ZSgpKTtcclxuXHJcblx0XHRndGFnKFwiY29uZmlnXCIsIFwiRy1YMlRIRTNYTFgxXCIpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuXHRcdFx0PENzc0Jhc2VsaW5lIC8+XHJcblxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1YMlRIRTNYTFgxXCI+PC9zY3JpcHQ+XHJcblx0XHRcdDwvSGVhZD5cclxuXHJcblx0XHRcdDxIZWFkZXIgLz5cclxuXHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHJcblx0XHRcdDxGb290ZXIgLz5cclxuXHJcblx0XHRcdDxUaGVtZVN3aXRjaCAvPlxyXG5cclxuXHRcdFx0e2lzTW9iaWxlICYmIDxCb3R0b21NZW51IC8+fVxyXG5cdFx0PC9NdWlUaGVtZVByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDthYzrp4gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzRGFyazog64uk7YGsIO2FjOuniCDsoIHsmqkg7Jes67aAXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtNdWlUaGVtZX0gTXVpVGhlbWUg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRUaGVtZXMoaXNEYXJrKVxyXG57XHJcblx0cmV0dXJuIGNyZWF0ZU11aVRoZW1lKHtcclxuXHRcdHBhbGV0dGU6IHtcclxuXHRcdFx0dHlwZTogaXNEYXJrID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIsXHJcblx0XHRcdGJhY2tncm91bmQ6IHtcclxuXHRcdFx0XHRkZWZhdWx0OiBpc0RhcmsgPyBcIiMwMjBkMWRcIiA6IFwiI0ZGRkZGRlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHByaW1hcnk6IGJsdWUsXHJcblx0XHRcdHNlY29uZGFyeTogaW5kaWdvXHJcblx0XHR9LFxyXG5cdFx0dHlwb2dyYXBoeToge1xyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuCmOuIlOyKpO2AmOyWtOudvOyatOuTnCwgc2Fucy1zZXJpZlwiXHJcblx0XHR9LFxyXG5cdFx0b3ZlcnJpZGVzOiB7XHJcblx0XHRcdE11aUNzc0Jhc2VsaW5lOiB7XHJcblx0XHRcdFx0XCJAZ2xvYmFsXCI6IHtcclxuXHRcdFx0XHRcdGh0bWw6IHtcclxuXHRcdFx0XHRcdFx0V2Via2l0Rm9udFNtb290aGluZzogXCJhdXRvXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIio6Oi13ZWJraXQtc2Nyb2xsYmFyLCAqOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA2LFxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDYsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXHJcblx0XHRcdFx0XHRcdGJvcmRlcjogXCIxcHggc29saWQgdHJhbnNwYXJlbnRcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG5cdFx0XHRcdFx0XHRib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDAgMTBweFwiLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogaXNEYXJrID8gXCIjNDA0MDQwXCIgOiBcIiNDMEMwQzBcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==