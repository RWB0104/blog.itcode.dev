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
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\header\\MobileHeader.js";

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      className: classes.title_wrap,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: "h5",
        className: classes.title,
        children: _common_env__WEBPACK_IMPORTED_MODULE_3__.TITLE
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
      variant: "square",
      alt: _common_env__WEBPACK_IMPORTED_MODULE_3__.TITLE,
      src: _common_env__WEBPACK_IMPORTED_MODULE_3__.LOGO,
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
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    var _title;

    return {
      title_wrap: {
        display: "flex",
        flexGrow: 1
      },
      title: (_title = {
        flexGrow: 1,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        paddingLeft: 40
      }, (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_title, "fontWeight", "bold"), (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_title, "fontFamily", "Blacksword, sans-serif"), _title),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvTW9iaWxlSGVhZGVyLmpzIl0sIm5hbWVzIjpbIk1vYmlsZUhlYWRlciIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aXRsZV93cmFwIiwidGl0bGUiLCJUSVRMRSIsIkxPR08iLCJsb2dvIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsImZsZXhHcm93IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxZQUFULEdBQ2Y7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUssZUFBUyxFQUFFRCxPQUFPLENBQUNFLFVBQXhCO0FBQUEsNkJBQ0MsOERBQUMseURBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBRUYsT0FBTyxDQUFDRyxLQUE1QztBQUFBLGtCQUFvREMsOENBQUtBO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQyw4REFBQyxxREFBRDtBQUFRLGFBQU8sRUFBQyxRQUFoQjtBQUF5QixTQUFHLEVBQUVBLDhDQUE5QjtBQUFxQyxTQUFHLEVBQUVDLDZDQUExQztBQUFnRCxlQUFTLEVBQUVMLE9BQU8sQ0FBQ007QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBU0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQW5Cd0JQLFk7O0FBb0J4QixTQUFTRSxTQUFULEdBQ0E7QUFDQyxTQUFPTSw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFZO0FBQzdCTixnQkFBVSxFQUFFO0FBQ1hPLGVBQU8sRUFBRSxNQURFO0FBRVhDLGdCQUFRLEVBQUU7QUFGQyxPQURpQjtBQUs3QlAsV0FBSztBQUNKTyxnQkFBUSxFQUFFLENBRE47QUFFSkMsa0JBQVUsRUFBRSxNQUZSO0FBR0pDLGlCQUFTLEVBQUUsUUFIUDtBQUlKQyxzQkFBYyxFQUFFLFFBSlo7QUFLSkMsa0JBQVUsRUFBRSxRQUxSO0FBTUpDLGlCQUFTLEVBQUUsUUFOUDtBQU9KQyxtQkFBVyxFQUFFO0FBUFQsb0pBUVEsTUFSUiw4SUFTUSx3QkFUUixVQUx3QjtBQWdCN0JWLFVBQUksRUFBRTtBQUNMTyxzQkFBYyxFQUFFLFFBRFg7QUFFTEMsa0JBQVUsRUFBRSxRQUZQO0FBR0xDLGlCQUFTLEVBQUUsUUFITjtBQUlMRSxtQkFBVyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFDLENBQWYsQ0FKUjtBQUtMQyxpQkFBUyxFQUFFLDJCQUxOO0FBTUxDLHVCQUFlLEVBQUU7QUFOWjtBQWhCdUIsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBeUJBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmI5NWMxZmJiNjRhMGY4YWNhYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDrqqjrsJTsnbwg7Zek642UIEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDQuMjggV2VkIDAxOjU3OjU5XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQm94LCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCB7IExPR08sIFRJVExFIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuXHJcbi8qKlxyXG4gKiDrqqjrsJTsnbwg7Zek642UIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZUhlYWRlcigpXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlX3dyYXB9PlxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e1RJVExFfTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8QXZhdGFyIHZhcmlhbnQ9XCJzcXVhcmVcIiBhbHQ9e1RJVExFfSBzcmM9e0xPR099IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dGl0bGVfd3JhcDoge1xyXG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0ZmxleEdyb3c6IDFcclxuXHRcdH0sXHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHRmbGV4R3JvdzogMSxcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcblx0XHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuXHRcdFx0cGFkZGluZ0xlZnQ6IDQwLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCJcclxuXHRcdH0sXHJcblx0XHRsb2dvOiB7XHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG5cdFx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcblx0XHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKC0xKSxcclxuXHRcdFx0YW5pbWF0aW9uOiBcInJvdGF0ZSA1cyBsaW5lYXIgaW5maW5pdGVcIixcclxuXHRcdFx0dHJhbnNmb3JtT3JpZ2luOiBcIjUwJSA1MCVcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==