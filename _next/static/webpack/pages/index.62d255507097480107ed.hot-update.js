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
/* harmony import */ var _components_global_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/Title */ "./components/global/Title.js");
/* harmony import */ var _components_section_index_ShowBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/section/index/ShowBox */ "./components/section/index/ShowBox.js");
/* harmony import */ var _components_section_index_Preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section/index/Preview */ "./components/section/index/Preview.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/env */ "./common/env.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/common */ "./common/common.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\pages\\index.js";

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
  var url = (0,_common_common__WEBPACK_IMPORTED_MODULE_8__.getRandomItem)(images);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Title__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[0].title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
      component: "section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_3__.default, {
          title: _common_env__WEBPACK_IMPORTED_MODULE_7__.TITLE,
          desc: _common_env__WEBPACK_IMPORTED_MODULE_7__.DESCRIPTION,
          image: "/assets/images/main/".concat(url),
          onlyEng: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
          maxWidth: "md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Divider, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_Preview__WEBPACK_IMPORTED_MODULE_6__.default, {
            menu: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[1],
            data: posts
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_ShowBox__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
          maxWidth: "md",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_Preview__WEBPACK_IMPORTED_MODULE_6__.default, {
            menu: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[2],
            data: projects
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJpbWFnZXMiLCJwb3N0cyIsInByb2plY3RzIiwidXJsIiwiZ2V0UmFuZG9tSXRlbSIsIk1FTlVfTElTVCIsInRpdGxlIiwiVElUTEUiLCJERVNDUklQVElPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDZSxTQUFTQSxLQUFULE9BQ2Y7QUFBQSxNQURnQ0MsTUFDaEMsUUFEZ0NBLE1BQ2hDO0FBQUEsTUFEd0NDLEtBQ3hDLFFBRHdDQSxLQUN4QztBQUFBLE1BRCtDQyxRQUMvQyxRQUQrQ0EsUUFDL0M7QUFDQyxNQUFNQyxHQUFHLEdBQUdDLDZEQUFhLENBQUNKLE1BQUQsQ0FBekI7QUFFQSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDRCQUNDLDhEQUFDLDZEQUFEO0FBQU8sV0FBSyxFQUFFSywyREFBa0JDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUdDLDhEQUFDLGtEQUFEO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDQyw4REFBQyw4Q0FBRDtBQUFBLGdDQUNDLDhEQUFDLDJEQUFEO0FBQUssZUFBSyxFQUFFQyw4Q0FBWjtBQUFtQixjQUFJLEVBQUVDLG9EQUF6QjtBQUFzQyxlQUFLLGdDQUF5QkwsR0FBekIsQ0FBM0M7QUFBMkUsaUJBQU87QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUdDLDhEQUFDLHdEQUFEO0FBQVcsa0JBQVEsRUFBQyxJQUFwQjtBQUFBLGtDQUNDLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFHQyw4REFBQyxzRUFBRDtBQUFTLGdCQUFJLEVBQUVFLHFEQUFmO0FBQTZCLGdCQUFJLEVBQUVKO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhELGVBU0MsOERBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURCxlQVdDLDhEQUFDLHdEQUFEO0FBQVcsa0JBQVEsRUFBQyxJQUFwQjtBQUFBLGlDQUNDLDhEQUFDLHNFQUFEO0FBQVMsZ0JBQUksRUFBRUkscURBQWY7QUFBNkIsZ0JBQUksRUFBRUg7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdUJBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0FqQ3dCSCxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYyZDI1NTUwNzA5NzQ4MDEwN2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7J24642x7IqkIO2OmOydtOyngCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA0LjI2IE1vbiAyMjoxMDozOFxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgVG9wIGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbC9Ub3BcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbC9UaXRsZVwiO1xyXG5pbXBvcnQgU2hvd0JveCBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3hcIjtcclxuaW1wb3J0IFByZXZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbi9pbmRleC9QcmV2aWV3XCI7XHJcbmltcG9ydCB7IGdldE1haW5JbWFnZXMsIGdldFR5cGVQb3N0cyB9IGZyb20gXCIuLi9jb21tb24vYXBpXCI7XHJcbmltcG9ydCB7IERFU0NSSVBUSU9OLCBNRU5VX0xJU1QsIFRJVExFIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi9jb21tb24vY29tbW9uXCI7XHJcblxyXG4vKipcclxuICog7J24642x7IqkIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nW119IGltYWdlczog66mU7J24IOydtOuvuOyngCDrsLDsl7RcclxuICogQHBhcmFtIHtPYmplY3R9IHBvc3RzOiDqsozsi5zquIAg66as7Iqk7Yq4XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9qZWN0czog7ZSE66Gc7KCd7Yq4IOumrOyKpO2KuFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCh7IGltYWdlcywgcG9zdHMsIHByb2plY3RzIH0pXHJcbntcclxuXHRjb25zdCB1cmwgPSBnZXRSYW5kb21JdGVtKGltYWdlcyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxUaXRsZSB0aXRsZT17TUVOVV9MSVNUWzBdLnRpdGxlfSAvPlxyXG5cclxuXHRcdFx0PEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0PEZhZGU+XHJcblx0XHRcdFx0XHQ8VG9wIHRpdGxlPXtUSVRMRX0gZGVzYz17REVTQ1JJUFRJT059IGltYWdlPXtgL2Fzc2V0cy9pbWFnZXMvbWFpbi8ke3VybH1gfSBvbmx5RW5nIC8+XHJcblxyXG5cdFx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcblx0XHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8UHJldmlldyBtZW51PXtNRU5VX0xJU1RbMV19IGRhdGE9e3Bvc3RzfSAvPlxyXG5cdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblxyXG5cdFx0XHRcdFx0PFNob3dCb3ggLz5cclxuXHJcblx0XHRcdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuXHRcdFx0XHRcdFx0PFByZXZpZXcgbWVudT17TUVOVV9MSVNUWzJdfSBkYXRhPXtwcm9qZWN0c30gLz5cclxuXHRcdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsgqzsmqnsnpAgUHJvcHMg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDsgqzsmqnsnpAgUHJvcHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpXHJcbntcclxuXHRjb25zdCBwb3N0cyA9IGdldFR5cGVQb3N0cyhcInBvc3RzXCIsIFtcclxuXHRcdFwidGl0bGVcIixcclxuXHRcdFwiZGF0ZVwiLFxyXG5cdFx0XCJzbHVnXCIsXHJcblx0XHRcImF1dGhvclwiLFxyXG5cdFx0XCJjb3ZlckltYWdlXCIsXHJcblx0XHRcImV4Y2VycHRcIixcclxuXHRcdFwidHlwZVwiLFxyXG5cdFx0XCJjYXRlZ29yeVwiXHJcblx0XSk7XHJcblxyXG5cdGNvbnN0IHByb2plY3RzID0gZ2V0VHlwZVBvc3RzKFwicHJvamVjdHNcIiwgW1xyXG5cdFx0XCJ0aXRsZVwiLFxyXG5cdFx0XCJkYXRlXCIsXHJcblx0XHRcInNsdWdcIixcclxuXHRcdFwiYXV0aG9yXCIsXHJcblx0XHRcImNvdmVySW1hZ2VcIixcclxuXHRcdFwiZXhjZXJwdFwiLFxyXG5cdFx0XCJ0eXBlXCJcclxuXHRdKTtcclxuXHJcblx0Y29uc3QgaW1hZ2VzID0gZ2V0TWFpbkltYWdlcygpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgaW1hZ2VzLCBwb3N0cywgcHJvamVjdHMgfVxyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9