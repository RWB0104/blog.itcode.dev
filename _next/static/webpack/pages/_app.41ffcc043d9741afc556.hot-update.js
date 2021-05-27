self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header/MobileHeader.js":
/*!*******************************************!*\
  !*** ./components/header/MobileHeader.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MobileHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\header\\MobileHeader.js";

/**
 * 모바일 헤더 JavaScript
 *
 * @author RWB
 * @since 2021.04.28 Wed 01:57:59
 */
// 라이브러리 모듈

 // 사용자 모듈


/**
 * 모바일 헤더 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function MobileHeader() {
  var classes = getStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
      className: classes.title_wrap,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
        variant: "h5",
        className: classes.title,
        children: _common_env__WEBPACK_IMPORTED_MODULE_2__.TITLE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Avatar, {
      variant: "square",
      alt: _common_env__WEBPACK_IMPORTED_MODULE_2__.TITLE,
      src: _common_env__WEBPACK_IMPORTED_MODULE_2__.LOGO,
      className: classes.logo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_c = MobileHeader;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {
    return {
      title_wrap: {
        display: "flex",
        flexGrow: 1
      },
      title: {
        flexGrow: 1,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
      },
      logo: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginRight: theme.spacing(-1),
        animation: "rotate 5s linear infinite",
        transformOrigin: "50% 50%"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "MobileHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvTW9iaWxlSGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1vYmlsZUhlYWRlciIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aXRsZV93cmFwIiwidGl0bGUiLCJUSVRMRSIsIkxPR08iLCJsb2dvIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsImFuaW1hdGlvbiIsInRyYW5zZm9ybU9yaWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFlBQVQsR0FDZjtBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNDLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0MsOERBQUMsa0RBQUQ7QUFBSyxlQUFTLEVBQUVELE9BQU8sQ0FBQ0UsVUFBeEI7QUFBQSw2QkFDQyw4REFBQyx5REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixpQkFBUyxFQUFFRixPQUFPLENBQUNHLEtBQTVDO0FBQUEsa0JBQW9EQyw4Q0FBS0E7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLHFEQUFEO0FBQVEsYUFBTyxFQUFDLFFBQWhCO0FBQXlCLFNBQUcsRUFBRUEsOENBQTlCO0FBQXFDLFNBQUcsRUFBRUMsNkNBQTFDO0FBQWdELGVBQVMsRUFBRUwsT0FBTyxDQUFDTTtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFTQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBbkJ3QlAsWTs7QUFvQnhCLFNBQVNFLFNBQVQsR0FDQTtBQUNDLFNBQU9NLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JOLGdCQUFVLEVBQUU7QUFDWE8sZUFBTyxFQUFFLE1BREU7QUFFWEMsZ0JBQVEsRUFBRTtBQUZDLE9BRGlCO0FBSzdCUCxXQUFLLEVBQUU7QUFDTk8sZ0JBQVEsRUFBRSxDQURKO0FBRU5DLGtCQUFVLEVBQUUsTUFGTjtBQUdOQyxpQkFBUyxFQUFFLFFBSEw7QUFJTkMsc0JBQWMsRUFBRSxRQUpWO0FBS05DLGtCQUFVLEVBQUUsUUFMTjtBQU1OQyxpQkFBUyxFQUFFO0FBTkwsT0FMc0I7QUFhN0JULFVBQUksRUFBRTtBQUNMTyxzQkFBYyxFQUFFLFFBRFg7QUFFTEMsa0JBQVUsRUFBRSxRQUZQO0FBR0xDLGlCQUFTLEVBQUUsUUFITjtBQUlMQyxtQkFBVyxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFDLENBQWYsQ0FKUjtBQUtMQyxpQkFBUyxFQUFFLDJCQUxOO0FBTUxDLHVCQUFlLEVBQUU7QUFOWjtBQWJ1QixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFzQkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MWZmY2MwNDNkOTc0MWFmYzU1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOuqqOuwlOydvCDtl6TrjZQgSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNC4yOCBXZWQgMDE6NTc6NTlcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCb3gsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IHsgTE9HTywgVElUTEUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudlwiO1xyXG5cclxuLyoqXHJcbiAqIOuqqOuwlOydvCDtl6TrjZQgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlSGVhZGVyKClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PEJveCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGVfd3JhcH0+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57VElUTEV9PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxBdmF0YXIgdmFyaWFudD1cInNxdWFyZVwiIGFsdD17VElUTEV9IHNyYz17TE9HT30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHR0aXRsZV93cmFwOiB7XHJcblx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxyXG5cdFx0XHRmbGV4R3JvdzogMVxyXG5cdFx0fSxcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiXHJcblx0XHR9LFxyXG5cdFx0bG9nbzoge1xyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuXHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuXHRcdFx0YWxpZ25TZWxmOiBcImNlbnRlclwiLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygtMSksXHJcblx0XHRcdGFuaW1hdGlvbjogXCJyb3RhdGUgNXMgbGluZWFyIGluZmluaXRlXCIsXHJcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=