self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/section/posts/RelatedList.js":
/*!*************************************************!*\
  !*** ./components/section/posts/RelatedList.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RelatedList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\posts\\RelatedList.js";

/**
 * 연관 리스트 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.24 Mon 01:08:21
 */

function RelatedList(_ref) {
  var _this = this;

  var list = _ref.list;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      component: "h1",
      children: "\uC5F0\uAD00 \uAC8C\uC2DC\uBB3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridList, {
      cols: 3,
      children: list.map(function (element, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTile, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: element.coverImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTileBar, {
            title: element.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: list.map(function (element, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: element.title
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 35
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, this);
}
_c = RelatedList;

var _c;

$RefreshReg$(_c, "RelatedList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImNvdmVySW1hZ2UiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFdBQVQsT0FDZjtBQUFBOztBQUFBLE1BRHNDQyxJQUN0QyxRQURzQ0EsSUFDdEM7QUFDQyxzQkFDQyw4REFBQyxrREFBRDtBQUFBLDRCQUNDLDhEQUFDLHlEQUFEO0FBQVksZUFBUyxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyx1REFBRDtBQUFVLFVBQUksRUFBRSxDQUFoQjtBQUFBLGdCQUNFQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw0QkFDVCw4REFBQywyREFBRDtBQUFBLGtDQUNDO0FBQUssZUFBRyxFQUFFRCxPQUFPLENBQUNFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFHQyw4REFBQyw4REFBRDtBQUFpQixpQkFBSyxFQUFFRixPQUFPLENBQUNHO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEQ7QUFBQSxXQUFtQkYsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQsZUFhQztBQUFBLGdCQUNFSCxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw0QkFBb0I7QUFBQSxvQkFBaUJELE9BQU8sQ0FBQ0c7QUFBekIsV0FBU0YsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFwQjtBQUFBLE9BQVQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7S0FyQnVCSixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS4wNmYwMjkwZmY0OGRjZWMxMGMwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyXsOq0gCDrpqzsiqTtirgg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMjQgTW9uIDAxOjA4OjIxXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQm94LCBHcmlkTGlzdCwgR3JpZExpc3RUaWxlLCBHcmlkTGlzdFRpbGVCYXIsIExpbmssIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF0ZWRMaXN0KHsgbGlzdCB9KVxyXG57XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCI+7Jew6rSAIOqyjOyLnOusvDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdDxHcmlkTGlzdCBjb2xzPXszfT5cclxuXHRcdFx0XHR7bGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17ZWxlbWVudC5jb3ZlckltYWdlfSAvPlxyXG5cclxuXHRcdFx0XHRcdFx0PEdyaWRMaXN0VGlsZUJhciB0aXRsZT17ZWxlbWVudC50aXRsZX0gLz5cclxuXHRcdFx0XHRcdDwvR3JpZExpc3RUaWxlPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L0dyaWRMaXN0PlxyXG5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdHtsaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IDxsaSBrZXk9e2luZGV4fT57ZWxlbWVudC50aXRsZX08L2xpPil9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==