self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section/contents/NoContents.js":
/*!***************************************************!*\
  !*** ./components/section/contents/NoContents.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NoContents; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\contents\\NoContents.js";

/**
 * 컨텐츠 없음 표시 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.25 Tue 20:53:17
 */


/**
 * 컨텐츠 없음 표시 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function NoContents() {
  var classes = getStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    container: true,
    className: classes.grid,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerNotesOff, {
        className: classes.grid_icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Grid, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        className: classes.grid_typo,
        children: "\uCEE8\uD150\uCE20\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_c = NoContents;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(function (theme) {
    return {
      grid: {
        textAlign: "center"
      },
      grid_icon: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__.grey[500],
        width: 64,
        height: 64,
        marginTop: theme.spacing(10)
      },
      grid_typo: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_2__.grey[500],
        fontSize: "1.5em",
        marginTop: theme.spacing(2)
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "NoContents");

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


/***/ }),

/***/ "./components/section/index/PreviewList.js":
/*!*************************************************!*\
  !*** ./components/section/index/PreviewList.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PreviewList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _posts_PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/PostItem */ "./components/section/posts/PostItem.js");
/* harmony import */ var _contents_NoContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contents/NoContents */ "./components/section/contents/NoContents.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\index\\PreviewList.js";

/**
 * 프리뷰 리스트 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.07 Fri 01:16:26
 */
// 라이브러리 모듈

 // 사용자 모듈



/**
 * 미리보기 컴포넌트 반환 함수
 *
 * @param {data} data: 게시글 리스트
 *
 * @returns {JSX} JSX 객체
 */

function PreviewList(_ref) {
  var data = _ref.data;
  var classes = getStyles();
  var list = [];
  data.sort(function (post1, post2) {
    return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
  });

  for (var i = 0; i < 4; i++) {
    // 게시글이 있을 경우
    if (data[i] !== undefined) {
      list.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        item: true,
        md: 12,
        className: classes.contents_grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_posts_PostItem__WEBPACK_IMPORTED_MODULE_2__.default, {
          item: data[i],
          index: i
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this));
    }
  }

  if (list.length === 0) {
    list.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contents_NoContents__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this));
  }

  return list;
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_c = PreviewList;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function () {
    return {
      contents_grid: {
        width: "100%"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "PreviewList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL05vQ29udGVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbi9pbmRleC9QcmV2aWV3TGlzdC5qcyJdLCJuYW1lcyI6WyJOb0NvbnRlbnRzIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsImdyaWQiLCJncmlkX2ljb24iLCJncmlkX3R5cG8iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImdyZXkiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJmb250U2l6ZSIsIlByZXZpZXdMaXN0IiwiZGF0YSIsImxpc3QiLCJzb3J0IiwicG9zdDEiLCJwb3N0MiIsIkRhdGUiLCJkYXRlIiwiaSIsInVuZGVmaW5lZCIsInB1c2giLCJjb250ZW50c19ncmlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxVQUFULEdBQ2Y7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDQyw4REFBQyxtREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsSUFBbkM7QUFBQSw0QkFDQyw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQUEsNkJBQ0MsOERBQUMsZUFBRDtBQUFpQixpQkFBUyxFQUFFRixPQUFPLENBQUNHO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQyw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQUEsNkJBQ0MsOERBQUMseURBQUQ7QUFBWSxpQkFBUyxFQUFFSCxPQUFPLENBQUNJLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBV0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXJCd0JMLFU7O0FBc0J4QixTQUFTRSxTQUFULEdBQ0E7QUFDQyxTQUFPSSw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCSixVQUFJLEVBQUU7QUFDTEssaUJBQVMsRUFBRTtBQUROLE9BRHVCO0FBSTdCSixlQUFTLEVBQUU7QUFDVkssYUFBSyxFQUFFQywrREFERztBQUVWQyxhQUFLLEVBQUUsRUFGRztBQUdWQyxjQUFNLEVBQUUsRUFIRTtBQUlWQyxpQkFBUyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxFQUFkO0FBSkQsT0FKa0I7QUFVN0JULGVBQVMsRUFBRTtBQUNWSSxhQUFLLEVBQUVDLCtEQURHO0FBRVZLLGdCQUFRLEVBQUUsT0FGQTtBQUdWRixpQkFBUyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBSEQ7QUFWa0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNFLFdBQVQsT0FDZjtBQUFBLE1BRHNDQyxJQUN0QyxRQURzQ0EsSUFDdEM7QUFDQyxNQUFNaEIsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsTUFBTWdCLElBQUksR0FBRyxFQUFiO0FBRUFELE1BQUksQ0FBQ0UsSUFBTCxDQUFVLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQW1CLElBQUlDLElBQUosQ0FBU0YsS0FBSyxDQUFDRyxJQUFmLElBQXVCLElBQUlELElBQUosQ0FBU0QsS0FBSyxDQUFDRSxJQUFmLENBQXZCLEdBQThDLENBQUMsQ0FBL0MsR0FBbUQsQ0FBdEU7QUFBQSxHQUFWOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUNBO0FBQ0M7QUFDQSxRQUFJUCxJQUFJLENBQUNPLENBQUQsQ0FBSixLQUFZQyxTQUFoQixFQUNBO0FBQ0NQLFVBQUksQ0FBQ1EsSUFBTCxlQUNDLDhEQUFDLG1EQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBMkIsaUJBQVMsRUFBRXpCLE9BQU8sQ0FBQzBCLGFBQTlDO0FBQUEsK0JBQ0MsOERBQUMsb0RBQUQ7QUFBVSxjQUFJLEVBQUVWLElBQUksQ0FBQ08sQ0FBRCxDQUFwQjtBQUF5QixlQUFLLEVBQUVBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCxTQUF3QkEsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBS0E7QUFDRDs7QUFFRCxNQUFJTixJQUFJLENBQUNVLE1BQUwsS0FBZ0IsQ0FBcEIsRUFDQTtBQUNDVixRQUFJLENBQUNRLElBQUwsZUFBVSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVY7QUFDQTs7QUFFRCxTQUFPUixJQUFQO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQWpDd0JGLFc7O0FBa0N4QixTQUFTZCxTQUFULEdBQ0E7QUFDQyxTQUFPSSw2REFBVSxDQUFDO0FBQUEsV0FBTztBQUN4QnFCLG1CQUFhLEVBQUU7QUFDZGhCLGFBQUssRUFBRTtBQURPO0FBRFMsS0FBUDtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBS0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzg0YmYxODZiNDIwOGY0ODZlY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsu6jthZDsuKAg7JeG7J2MIO2RnOyLnCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4yNSBUdWUgMjA6NTM6MTdcclxuICovXHJcblxyXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGdyZXkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG4vKipcclxuICog7Luo7YWQ7LigIOyXhuydjCDtkZzsi5wgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm9Db250ZW50cygpXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8R3JpZCBjb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0PFNwZWFrZXJOb3Rlc09mZiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZF9pY29ufSAvPlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRfdHlwb30+7Luo7YWQ7Lig6rCAIOyhtOyerO2VmOyngCDslYrsirXri4jri6QuPC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8L0dyaWQ+XHJcblx0XHQ8L0dyaWQ+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdGdyaWQ6IHtcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiXHJcblx0XHR9LFxyXG5cdFx0Z3JpZF9pY29uOiB7XHJcblx0XHRcdGNvbG9yOiBncmV5WzUwMF0sXHJcblx0XHRcdHdpZHRoOiA2NCxcclxuXHRcdFx0aGVpZ2h0OiA2NCxcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0fSxcclxuXHRcdGdyaWRfdHlwbzoge1xyXG5cdFx0XHRjb2xvcjogZ3JleVs1MDBdLFxyXG5cdFx0XHRmb250U2l6ZTogXCIxLjVlbVwiLFxyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMilcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSIsIi8qKlxyXG4gKiDtlITrpqzrt7Ag66as7Iqk7Yq4IOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjA3IEZyaSAwMToxNjoyNlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBQb3N0SXRlbSBmcm9tIFwiLi4vcG9zdHMvUG9zdEl0ZW1cIjtcclxuaW1wb3J0IE5vQ29udGVudHMgZnJvbSBcIi4uL2NvbnRlbnRzL05vQ29udGVudHNcIjtcclxuXHJcbi8qKlxyXG4gKiDrr7jrpqzrs7TquLAg7Lu07Y+s64SM7Yq4IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtkYXRhfSBkYXRhOiDqsozsi5zquIAg66as7Iqk7Yq4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZpZXdMaXN0KHsgZGF0YSB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBsaXN0ID0gW107XHJcblxyXG5cdGRhdGEuc29ydCgocG9zdDEsIHBvc3QyKSA9PiAobmV3IERhdGUocG9zdDEuZGF0ZSkgPiBuZXcgRGF0ZShwb3N0Mi5kYXRlKSA/IC0xIDogMSkpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKylcclxuXHR7XHJcblx0XHQvLyDqsozsi5zquIDsnbQg7J6I7J2EIOqyveyasFxyXG5cdFx0aWYgKGRhdGFbaV0gIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGlzdC5wdXNoKFxyXG5cdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezEyfSBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50c19ncmlkfT5cclxuXHRcdFx0XHRcdDxQb3N0SXRlbSBpdGVtPXtkYXRhW2ldfSBpbmRleD17aX0gLz5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAobGlzdC5sZW5ndGggPT09IDApXHJcblx0e1xyXG5cdFx0bGlzdC5wdXNoKDxOb0NvbnRlbnRzIC8+KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBsaXN0O1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuXHRcdGNvbnRlbnRzX2dyaWQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9