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
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.MuiThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.CssBaseline, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-X2THE3XLX1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeSwitch__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, this), isMobile && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer_BottomMenu__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZGFya1N0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJkYXJrQXRvbSIsInRoZW1lIiwiZ2V0VGhlbWVzIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNEYXJrIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwidHlwZSIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYmx1ZSIsInNlY29uZGFyeSIsImluZGlnbyIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwib3ZlcnJpZGVzIiwiTXVpQ3NzQmFzZWxpbmUiLCJodG1sIiwiV2Via2l0Rm9udFNtb290aGluZyIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENsaXAiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxNQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQURpQ0MsUUFDakMsUUFEaUNBLFFBQ2pDO0FBQ0MsTUFBTUMsU0FBUyxHQUFHQyxzREFBYyxDQUFDQyxvREFBRCxDQUFoQztBQUVBLE1BQU1DLEtBQUssR0FBR0MsU0FBUyxDQUFDSixTQUFELENBQXZCO0FBQ0EsTUFBTUssUUFBUSxHQUFHQyxnRUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFFQUMsa0RBQVMsQ0FBQyxZQUNWO0FBQ0NDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsRUFBeUMsVUFBQ0MsQ0FBRDtBQUFBLGFBQU9BLENBQUMsQ0FBQ0MsY0FBRixFQUFQO0FBQUEsS0FBekM7QUFHQSxHQUxRLENBQVQ7QUFPQSxzQkFDQyw4REFBQywrREFBRDtBQUFrQixTQUFLLEVBQUVWLEtBQXpCO0FBQUEsNEJBQ0MsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0MsOERBQUMsa0RBQUQ7QUFBQSw2QkFDQztBQUFRLGFBQUssTUFBYjtBQUFjLFdBQUcsRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBT0MsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBELEVBU0VKLFFBVEYsZUFXQyw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEQsZUFhQyw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkQsRUFlRU0sUUFBUSxpQkFBSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0F6Q3dCUCxNO1VBRUxHLGtELEVBR0RLLDREOzs7S0FMTVIsTTs7QUEwQ3hCLFNBQVNNLFNBQVQsQ0FBbUJVLE1BQW5CLEVBQ0E7QUFDQyxTQUFPQyxpRUFBYyxDQUFDO0FBQ3JCQyxXQUFPLEVBQUU7QUFDUkMsVUFBSSxFQUFFSCxNQUFNLEdBQUcsTUFBSCxHQUFZLE9BRGhCO0FBRVJJLGdCQUFVLEVBQUU7QUFDWCxtQkFBU0osTUFBTSxHQUFHLFNBQUgsR0FBZTtBQURuQixPQUZKO0FBS1JLLGFBQU8sRUFBRUMsMkRBTEQ7QUFNUkMsZUFBUyxFQUFFQyw2REFBTUE7QUFOVCxLQURZO0FBU3JCQyxjQUFVLEVBQUU7QUFDWEMsZ0JBQVUsRUFBRTtBQURELEtBVFM7QUFZckJDLGFBQVMsRUFBRTtBQUNWQyxvQkFBYyxFQUFFO0FBQ2YsbUJBQVc7QUFDVkMsY0FBSSxFQUFFO0FBQ0xDLCtCQUFtQixFQUFFO0FBRGhCLFdBREk7QUFJViw4REFBb0Q7QUFDbkRDLGlCQUFLLEVBQUUsQ0FENEM7QUFFbkRDLHdCQUFZLEVBQUUsQ0FGcUM7QUFHbkRDLDBCQUFjLEVBQUUsYUFIbUM7QUFJbkRDLGtCQUFNLEVBQUU7QUFKMkMsV0FKMUM7QUFVVix3Q0FBOEI7QUFDN0JDLHFCQUFTLEVBQUUsa0JBRGtCO0FBRTdCQyxpQkFBSyxFQUFFcEIsTUFBTSxHQUFHLFNBQUgsR0FBZTtBQUZDO0FBVnBCO0FBREk7QUFETjtBQVpVLEdBQUQsQ0FBckI7QUFnQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NjRmYzZlZDY5NzJmNWE5MzgzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOugiOydtOyVhOybgyDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4wOCBTYXQgMTQ6NDI6MDhcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IGJsdWUsIGluZGlnbyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIENzc0Jhc2VsaW5lLCBNdWlUaGVtZVByb3ZpZGVyLCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IEJvdHRvbU1lbnUgZnJvbSBcIi4uL2Zvb3Rlci9Cb3R0b21NZW51XCI7XHJcbmltcG9ydCBUaGVtZVN3aXRjaCBmcm9tIFwiLi9UaGVtZVN3aXRjaFwiO1xyXG5pbXBvcnQgeyBkYXJrQXRvbSB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RhdGVzXCI7XHJcblxyXG4vKipcclxuICog66CI7J207JWE7JuDIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNYfSBjaGlsZHJlbjog7ZWY7JyEIEpTWFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KVxyXG57XHJcblx0Y29uc3QgZGFya1N0YXRlID0gdXNlUmVjb2lsVmFsdWUoZGFya0F0b20pO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IGdldFRoZW1lcyhkYXJrU3RhdGUpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT5cclxuXHR7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG5cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcblx0XHRcdDxDc3NCYXNlbGluZSAvPlxyXG5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctWDJUSEUzWExYMVwiPjwvc2NyaXB0PlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblxyXG5cdFx0XHQ8VGhlbWVTd2l0Y2ggLz5cclxuXHJcblx0XHRcdHtpc01vYmlsZSAmJiA8Qm90dG9tTWVudSAvPn1cclxuXHRcdDwvTXVpVGhlbWVQcm92aWRlcj5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7YWM66eIIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtib29sZWFufSBpc0Rhcms6IOuLpO2BrCDthYzrp4gg7KCB7JqpIOyXrOu2gFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7TXVpVGhlbWV9IE11aVRoZW1lIOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0VGhlbWVzKGlzRGFyaylcclxue1xyXG5cdHJldHVybiBjcmVhdGVNdWlUaGVtZSh7XHJcblx0XHRwYWxldHRlOiB7XHJcblx0XHRcdHR5cGU6IGlzRGFyayA/IFwiZGFya1wiIDogXCJsaWdodFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogaXNEYXJrID8gXCIjMDIwZDFkXCIgOiBcIiNGRkZGRkZcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcmltYXJ5OiBibHVlLFxyXG5cdFx0XHRzZWNvbmRhcnk6IGluZGlnb1xyXG5cdFx0fSxcclxuXHRcdHR5cG9ncmFwaHk6IHtcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrgpjriJTsiqTtgJjslrTrnbzsmrTrk5wsIHNhbnMtc2VyaWZcIlxyXG5cdFx0fSxcclxuXHRcdG92ZXJyaWRlczoge1xyXG5cdFx0XHRNdWlDc3NCYXNlbGluZToge1xyXG5cdFx0XHRcdFwiQGdsb2JhbFwiOiB7XHJcblx0XHRcdFx0XHRodG1sOiB7XHJcblx0XHRcdFx0XHRcdFdlYmtpdEZvbnRTbW9vdGhpbmc6IFwiYXV0b1wiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XCIqOjotd2Via2l0LXNjcm9sbGJhciwgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogNixcclxuXHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiA2LFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ2xpcDogXCJwYWRkaW5nLWJveFwiLFxyXG5cdFx0XHRcdFx0XHRib3JkZXI6IFwiMXB4IHNvbGlkIHRyYW5zcGFyZW50XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuXHRcdFx0XHRcdFx0Ym94U2hhZG93OiBcImluc2V0IDAgMCAwIDEwcHhcIixcclxuXHRcdFx0XHRcdFx0Y29sb3I6IGlzRGFyayA/IFwiIzQwNDA0MFwiIDogXCIjQzBDMEMwXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=