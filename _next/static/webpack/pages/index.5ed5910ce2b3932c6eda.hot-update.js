self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _components_section_index_ShowBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/section/index/ShowBox */ "./components/section/index/ShowBox.js");
/* harmony import */ var _components_section_index_Preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/section/index/Preview */ "./components/section/index/Preview.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/env */ "./common/env.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common */ "./common/common.js");
/* harmony import */ var _components_global_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/global/Meta */ "./components/global/Meta.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\pages\\index.js";

/**
 * 인덱스 페이지 JavaScript
 *
 * @author RWB
 * @since 2021.04.26 Mon 22:10:38
 */
// 라이브러리 모듈


 // 사용자 모듈







/**
 * 인덱스 JSX 반환 함수
 *
 * @param {String[]} images: 메인 이미지 배열
 * @param {Object} posts: 게시글 리스트
 * @param {Object} projects: 프로젝트 리스트
 *
 * @returns {JSX} JSX 객체
 */

var __N_SSG = true;
function Index(_ref) {
  var images = _ref.images,
      posts = _ref.posts,
      projects = _ref.projects;
  var url = (0,_common_common__WEBPACK_IMPORTED_MODULE_7__.getRandomItem)(images);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Meta__WEBPACK_IMPORTED_MODULE_8__.default, {
      title: _common_env__WEBPACK_IMPORTED_MODULE_6__.MENU_LIST[0].title,
      description: _common_env__WEBPACK_IMPORTED_MODULE_6__.DESCRIPTION,
      url: _common_env__WEBPACK_IMPORTED_MODULE_6__.MENU_LIST[0].url.pathname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      component: "section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_3__.default, {
          title: _common_env__WEBPACK_IMPORTED_MODULE_6__.TITLE,
          desc: _common_env__WEBPACK_IMPORTED_MODULE_6__.DESCRIPTION,
          image: "/assets/images/main/".concat(url),
          onlyEng: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
          maxWidth: "md",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_Preview__WEBPACK_IMPORTED_MODULE_5__.default, {
            menu: _common_env__WEBPACK_IMPORTED_MODULE_6__.MENU_LIST[1],
            data: posts
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_ShowBox__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
          maxWidth: "md",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_Preview__WEBPACK_IMPORTED_MODULE_5__.default, {
            menu: _common_env__WEBPACK_IMPORTED_MODULE_6__.MENU_LIST[2],
            data: projects
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 3
  }, this);
}
/**
 * 사용자 Props 반환 함수
 *
 * @returns {Object} 사용자 Props
 */

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJpbWFnZXMiLCJwb3N0cyIsInByb2plY3RzIiwidXJsIiwiZ2V0UmFuZG9tSXRlbSIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJUSVRMRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDZSxTQUFTQSxLQUFULE9BQ2Y7QUFBQSxNQURnQ0MsTUFDaEMsUUFEZ0NBLE1BQ2hDO0FBQUEsTUFEd0NDLEtBQ3hDLFFBRHdDQSxLQUN4QztBQUFBLE1BRCtDQyxRQUMvQyxRQUQrQ0EsUUFDL0M7QUFDQyxNQUFNQyxHQUFHLEdBQUdDLDZEQUFhLENBQUNKLE1BQUQsQ0FBekI7QUFFQSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDRCQUNDLDhEQUFDLDREQUFEO0FBQU0sV0FBSyxFQUFFSywyREFBYjtBQUFpQyxpQkFBVyxFQUFFQyxvREFBOUM7QUFBMkQsU0FBRyxFQUFFRCxrRUFBeUJFO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUdDLDhEQUFDLGtEQUFEO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDQyw4REFBQyw4Q0FBRDtBQUFBLGdDQUNDLDhEQUFDLDJEQUFEO0FBQUssZUFBSyxFQUFFQyw4Q0FBWjtBQUFtQixjQUFJLEVBQUVGLG9EQUF6QjtBQUFzQyxlQUFLLGdDQUF5QkgsR0FBekIsQ0FBM0M7QUFBMkUsaUJBQU87QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUdDLDhEQUFDLHdEQUFEO0FBQVcsa0JBQVEsRUFBQyxJQUFwQjtBQUFBLGlDQUNDLDhEQUFDLHNFQUFEO0FBQVMsZ0JBQUksRUFBRUUscURBQWY7QUFBNkIsZ0JBQUksRUFBRUo7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQsZUFPQyw4REFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBELGVBU0MsOERBQUMsd0RBQUQ7QUFBVyxrQkFBUSxFQUFDLElBQXBCO0FBQUEsaUNBQ0MsOERBQUMsc0VBQUQ7QUFBUyxnQkFBSSxFQUFFSSxxREFBZjtBQUE2QixnQkFBSSxFQUFFSDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFxQkE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQS9Cd0JILEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWVkNTkxMGNlMmIzOTMyYzZlZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsnbjrjbHsiqQg7Y6Y7J207KeAIEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDQuMjYgTW9uIDIyOjEwOjM4XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBUb3AgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsL1RvcFwiO1xyXG5pbXBvcnQgU2hvd0JveCBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3hcIjtcclxuaW1wb3J0IFByZXZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbi9pbmRleC9QcmV2aWV3XCI7XHJcbmltcG9ydCB7IGdldE1haW5JbWFnZXMsIGdldENvbnRlbnRzIH0gZnJvbSBcIi4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IHsgREVTQ1JJUFRJT04sIE1FTlVfTElTVCwgVElUTEUgfSBmcm9tIFwiLi4vY29tbW9uL2VudlwiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21JdGVtIH0gZnJvbSBcIi4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsL01ldGFcIjtcclxuXHJcbi8qKlxyXG4gKiDsnbjrjbHsiqQgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmdbXX0gaW1hZ2VzOiDrqZTsnbgg7J2066+47KeAIOuwsOyXtFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zdHM6IOqyjOyLnOq4gCDrpqzsiqTtirhcclxuICogQHBhcmFtIHtPYmplY3R9IHByb2plY3RzOiDtlITroZzsoJ3tirgg66as7Iqk7Yq4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgaW1hZ2VzLCBwb3N0cywgcHJvamVjdHMgfSlcclxue1xyXG5cdGNvbnN0IHVybCA9IGdldFJhbmRvbUl0ZW0oaW1hZ2VzKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PE1ldGEgdGl0bGU9e01FTlVfTElTVFswXS50aXRsZX0gZGVzY3JpcHRpb249e0RFU0NSSVBUSU9OfSB1cmw9e01FTlVfTElTVFswXS51cmwucGF0aG5hbWV9IC8+XHJcblxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuXHRcdFx0XHQ8RmFkZT5cclxuXHRcdFx0XHRcdDxUb3AgdGl0bGU9e1RJVExFfSBkZXNjPXtERVNDUklQVElPTn0gaW1hZ2U9e2AvYXNzZXRzL2ltYWdlcy9tYWluLyR7dXJsfWB9IG9ubHlFbmcgLz5cclxuXHJcblx0XHRcdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuXHRcdFx0XHRcdFx0PFByZXZpZXcgbWVudT17TUVOVV9MSVNUWzFdfSBkYXRhPXtwb3N0c30gLz5cclxuXHRcdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cclxuXHRcdFx0XHRcdDxTaG93Qm94IC8+XHJcblxyXG5cdFx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcblx0XHRcdFx0XHRcdDxQcmV2aWV3IG1lbnU9e01FTlVfTElTVFsyXX0gZGF0YT17cHJvamVjdHN9IC8+XHJcblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7IKs7Jqp7J6QIFByb3BzIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge09iamVjdH0g7IKs7Jqp7J6QIFByb3BzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRDb250ZW50cyhcInBvc3RzXCIpO1xyXG5cclxuXHRjb25zdCBwcm9qZWN0cyA9IGdldENvbnRlbnRzKFwicHJvamVjdHNcIik7XHJcblxyXG5cdGNvbnN0IGltYWdlcyA9IGdldE1haW5JbWFnZXMoKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IGltYWdlcywgcG9zdHMsIHByb2plY3RzIH1cclxuXHR9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==