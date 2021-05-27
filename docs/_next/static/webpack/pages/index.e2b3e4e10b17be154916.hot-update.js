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
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _components_global_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/Meta */ "./components/global/Meta.js");
/* harmony import */ var _components_section_index_ShowBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/section/index/ShowBox */ "./components/section/index/ShowBox.js");
/* harmony import */ var _components_section_index_Preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section/index/Preview */ "./components/section/index/Preview.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/env */ "./common/env.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/common */ "./common/common.js");
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
  var url = (0,_common_common__WEBPACK_IMPORTED_MODULE_8__.getRandomItem)(images);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Meta__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[0].title,
      description: _common_env__WEBPACK_IMPORTED_MODULE_7__.DESCRIPTION,
      url: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[0].url.pathname
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
          style: {
            padding: 10
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_Preview__WEBPACK_IMPORTED_MODULE_6__.default, {
            menu: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[1],
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_ShowBox__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
          maxWidth: "md",
          style: {
            padding: 10
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_index_Preview__WEBPACK_IMPORTED_MODULE_6__.default, {
            menu: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[2],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJpbWFnZXMiLCJwb3N0cyIsInByb2plY3RzIiwidXJsIiwiZ2V0UmFuZG9tSXRlbSIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJUSVRMRSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0EsS0FBVCxPQUNmO0FBQUEsTUFEZ0NDLE1BQ2hDLFFBRGdDQSxNQUNoQztBQUFBLE1BRHdDQyxLQUN4QyxRQUR3Q0EsS0FDeEM7QUFBQSxNQUQrQ0MsUUFDL0MsUUFEK0NBLFFBQy9DO0FBQ0MsTUFBTUMsR0FBRyxHQUFHQyw2REFBYSxDQUFDSixNQUFELENBQXpCO0FBRUEsc0JBQ0MsOERBQUMsdURBQUQ7QUFBQSw0QkFDQyw4REFBQyw0REFBRDtBQUFNLFdBQUssRUFBRUssMkRBQWI7QUFBaUMsaUJBQVcsRUFBRUMsb0RBQTlDO0FBQTJELFNBQUcsRUFBRUQsa0VBQXlCRTtBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsNkJBQ0MsOERBQUMsOENBQUQ7QUFBQSxnQ0FDQyw4REFBQywyREFBRDtBQUFLLGVBQUssRUFBRUMsOENBQVo7QUFBbUIsY0FBSSxFQUFFRixvREFBekI7QUFBc0MsZUFBSyxnQ0FBeUJILEdBQXpCLENBQTNDO0FBQTJFLGlCQUFPO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFHQyw4REFBQyx3REFBRDtBQUFXLGtCQUFRLEVBQUMsSUFBcEI7QUFBeUIsZUFBSyxFQUFFO0FBQUVNLG1CQUFPLEVBQUU7QUFBWCxXQUFoQztBQUFBLGlDQUNDLDhEQUFDLHNFQUFEO0FBQVMsZ0JBQUksRUFBRUoscURBQWY7QUFBNkIsZ0JBQUksRUFBRUo7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQsZUFPQyw4REFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBELGVBU0MsOERBQUMsd0RBQUQ7QUFBVyxrQkFBUSxFQUFDLElBQXBCO0FBQXlCLGVBQUssRUFBRTtBQUFFUSxtQkFBTyxFQUFFO0FBQVgsV0FBaEM7QUFBQSxpQ0FDQyw4REFBQyxzRUFBRDtBQUFTLGdCQUFJLEVBQUVKLHFEQUFmO0FBQTZCLGdCQUFJLEVBQUVIO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXFCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBL0J3QkgsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMmIzZTRlMTBiMTdiZTE1NDkxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyduOuNseyKpCDtjpjsnbTsp4AgSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNC4yNiBNb24gMjI6MTA6MzhcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IFRvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWwvVG9wXCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbC9NZXRhXCI7XHJcbmltcG9ydCBTaG93Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb24vaW5kZXgvU2hvd0JveFwiO1xyXG5pbXBvcnQgUHJldmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1ByZXZpZXdcIjtcclxuaW1wb3J0IHsgZ2V0TWFpbkltYWdlcywgZ2V0Q29udGVudHMgfSBmcm9tIFwiLi4vY29tbW9uL2FwaVwiO1xyXG5pbXBvcnQgeyBERVNDUklQVElPTiwgTUVOVV9MSVNULCBUSVRMRSB9IGZyb20gXCIuLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vY29tbW9uL2NvbW1vblwiO1xyXG5cclxuLyoqXHJcbiAqIOyduOuNseyKpCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ1tdfSBpbWFnZXM6IOuplOyduCDsnbTrr7jsp4Ag67Cw7Je0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3N0czog6rKM7Iuc6riAIOumrOyKpO2KuFxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvamVjdHM6IO2UhOuhnOygne2KuCDrpqzsiqTtirhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBpbWFnZXMsIHBvc3RzLCBwcm9qZWN0cyB9KVxyXG57XHJcblx0Y29uc3QgdXJsID0gZ2V0UmFuZG9tSXRlbShpbWFnZXMpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8TWV0YSB0aXRsZT17TUVOVV9MSVNUWzBdLnRpdGxlfSBkZXNjcmlwdGlvbj17REVTQ1JJUFRJT059IHVybD17TUVOVV9MSVNUWzBdLnVybC5wYXRobmFtZX0gLz5cclxuXHJcblx0XHRcdDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiPlxyXG5cdFx0XHRcdDxGYWRlPlxyXG5cdFx0XHRcdFx0PFRvcCB0aXRsZT17VElUTEV9IGRlc2M9e0RFU0NSSVBUSU9OfSBpbWFnZT17YC9hc3NldHMvaW1hZ2VzL21haW4vJHt1cmx9YH0gb25seUVuZyAvPlxyXG5cclxuXHRcdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG5cdFx0XHRcdFx0XHQ8UHJldmlldyBtZW51PXtNRU5VX0xJU1RbMV19IGRhdGE9e3Bvc3RzfSAvPlxyXG5cdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblxyXG5cdFx0XHRcdFx0PFNob3dCb3ggLz5cclxuXHJcblx0XHRcdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuXHRcdFx0XHRcdFx0PFByZXZpZXcgbWVudT17TUVOVV9MSVNUWzJdfSBkYXRhPXtwcm9qZWN0c30gLz5cclxuXHRcdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsgqzsmqnsnpAgUHJvcHMg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDsgqzsmqnsnpAgUHJvcHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpXHJcbntcclxuXHRjb25zdCBwb3N0cyA9IGdldENvbnRlbnRzKFwicG9zdHNcIik7XHJcblxyXG5cdGNvbnN0IHByb2plY3RzID0gZ2V0Q29udGVudHMoXCJwcm9qZWN0c1wiKTtcclxuXHJcblx0Y29uc3QgaW1hZ2VzID0gZ2V0TWFpbkltYWdlcygpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgaW1hZ2VzLCBwb3N0cywgcHJvamVjdHMgfVxyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9