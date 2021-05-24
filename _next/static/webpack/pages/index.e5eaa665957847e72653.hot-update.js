self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/global/Meta.js":
/*!***********************************!*\
  !*** ./components/global/Meta.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Meta; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\global\\Meta.js";

/**
 * 메타 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.24 Mon 10:54:37
 */
// 라이브러리 모듈
 // 사용자 모듈


/**
 * 메타 컴포넌트 JSX 반환 함수
 *
 * @param {String} title: 페이지 제목
 * @param {String} description: 페이지 설명
 * @param {String} url: 페이지 URL
 * @param {String} image: 페이지 커버 이미지 URL
 *
 * @returns {JSX} JSX 객체
 */

function Meta(_ref) {
  var title = _ref.title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? _common_env__WEBPACK_IMPORTED_MODULE_2__.DESCRIPTION : _ref$description,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "website" : _ref$type,
      url = _ref.url,
      _ref$image = _ref.image,
      image = _ref$image === void 0 ? _common_env__WEBPACK_IMPORTED_MODULE_2__.PROFILE : _ref$image,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "ko_KR" : _ref$locale;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:site_name",
      content: _common_env__WEBPACK_IMPORTED_MODULE_2__.TITLE
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:url",
      content: "https://rwb0104.github.io/".concat(url)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:locale",
      content: "ko_KR"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "canonical",
      href: "https://rwb0104.github.io/".concat(url)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, this);
}
_c = Meta;

var _c;

$RefreshReg$(_c, "Meta");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvTWV0YS5qcyJdLCJuYW1lcyI6WyJNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRFU0NSSVBUSU9OIiwidHlwZSIsInVybCIsImltYWdlIiwiUFJPRklMRSIsImxvY2FsZSIsIlRJVExFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLElBQVQsT0FDZjtBQUFBLE1BRCtCQyxLQUMvQixRQUQrQkEsS0FDL0I7QUFBQSw4QkFEc0NDLFdBQ3RDO0FBQUEsTUFEc0NBLFdBQ3RDLGlDQURvREMsb0RBQ3BEO0FBQUEsdUJBRGlFQyxJQUNqRTtBQUFBLE1BRGlFQSxJQUNqRSwwQkFEd0UsU0FDeEU7QUFBQSxNQURtRkMsR0FDbkYsUUFEbUZBLEdBQ25GO0FBQUEsd0JBRHdGQyxLQUN4RjtBQUFBLE1BRHdGQSxLQUN4RiwyQkFEZ0dDLGdEQUNoRztBQUFBLHlCQUR5R0MsTUFDekc7QUFBQSxNQUR5R0EsTUFDekcsNEJBRGtILE9BQ2xIO0FBQ0Msc0JBQ0MsOERBQUMsa0RBQUQ7QUFBQSw0QkFDQztBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRU47QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0M7QUFBTSxjQUFRLEVBQUMsY0FBZjtBQUE4QixhQUFPLEVBQUVPLDhDQUFLQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQsZUFJQztBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRVI7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBS0M7QUFBTSxjQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBTyxFQUFFQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFNQztBQUFNLGNBQVEsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFPQztBQUFNLGNBQVEsRUFBQyxRQUFmO0FBQXdCLGFBQU8sc0NBQStCRyxHQUEvQjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEQsZUFRQztBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBTSxjQUFRLEVBQUMsV0FBZjtBQUEyQixhQUFPLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELGVBV0M7QUFBTSxTQUFHLEVBQUMsV0FBVjtBQUFzQixVQUFJLHNDQUErQkQsR0FBL0I7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7S0FqQnVCTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1ZWFhNjY1OTU3ODQ3ZTcyNjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog66mU7YOAIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjI0IE1vbiAxMDo1NDozN1xyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgeyBERVNDUklQVElPTiwgUFJPRklMRSwgVElUTEUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudlwiO1xyXG5cclxuLyoqXHJcbiAqIOuplO2DgCDsu7Ttj6zrhIztirggSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlOiDtjpjsnbTsp4Ag7KCc66qpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbjog7Y6Y7J207KeAIOyEpOuqhVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsOiDtjpjsnbTsp4AgVVJMXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog7Y6Y7J207KeAIOy7pOuyhCDsnbTrr7jsp4AgVVJMXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGEoeyB0aXRsZSwgZGVzY3JpcHRpb24gPSBERVNDUklQVElPTiwgdHlwZSA9IFwid2Vic2l0ZVwiLCB1cmwsIGltYWdlID0gUFJPRklMRSwgbG9jYWxlID0gXCJrb19LUlwiIH0pXHJcbntcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtUSVRMRX0gLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuXHRcdFx0PG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9yd2IwMTA0LmdpdGh1Yi5pby8ke3VybH1gfSAvPlxyXG5cdFx0XHQ8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2V9IC8+XHJcblx0XHRcdDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImtvX0tSXCIgLz5cclxuXHJcblx0XHRcdDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2BodHRwczovL3J3YjAxMDQuZ2l0aHViLmlvLyR7dXJsfWB9PjwvbGluaz5cclxuXHRcdDwvSGVhZD5cclxuXHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==