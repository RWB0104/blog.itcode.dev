self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _DesktopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopHeader */ "./components/header/DesktopHeader.js");
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileHeader */ "./components/header/MobileHeader.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\header\\Header.js";

/**
 * 헤더 컴포넌트 클래스
 *
 * @author RWB
 * @since 2021.04.26 Mon 22:19:47
 */
// 라이브러리 모듈
 // 사용자 모듈



/**
 * 헤더 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function Header() {
  var classes = getStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
    component: "header",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.AppBar, {
      position: "fixed",
      className: classes.root,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Toolbar, {
        className: classes.bar,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
          maxWidth: "lg",
          className: classes.container,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Hidden, {
            smDown: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DesktopHeader__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Hidden, {
            mdUp: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MobileHeader__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this)
  }, void 0, false, {
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

_c = Header;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {
    return {
      root: {
        flexGrow: 1,
        background: theme.palette.type === "dark" ? "linear-gradient(to right, #000000CC, #434343CC);" : "linear-gradient(to right, #fc466bCC, #3f5efbCC)",
        zIndex: theme.zIndex.drawer + 1,
        backdropFilter: "blur(5px) saturate(180%)",
        WebkitBackdropFilter: "blur(10px) saturate(180%)"
      },
      bar: {
        minHeight: 64
      },
      container: {
        display: "flex"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJyb290IiwiYmFyIiwiY29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsInR5cGUiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJiYWNrZHJvcEZpbHRlciIsIldlYmtpdEJhY2tkcm9wRmlsdGVyIiwibWluSGVpZ2h0IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsTUFBVCxHQUNmO0FBQ0MsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0MsOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDJCQUNDLDhEQUFDLHFEQUFEO0FBQVEsY0FBUSxFQUFDLE9BQWpCO0FBQXlCLGVBQVMsRUFBRUQsT0FBTyxDQUFDRSxJQUE1QztBQUFBLDZCQUNDLDhEQUFDLHNEQUFEO0FBQVMsaUJBQVMsRUFBRUYsT0FBTyxDQUFDRyxHQUE1QjtBQUFBLCtCQUNDLDhEQUFDLHdEQUFEO0FBQVcsa0JBQVEsRUFBQyxJQUFwQjtBQUF5QixtQkFBUyxFQUFFSCxPQUFPLENBQUNJLFNBQTVDO0FBQUEsa0NBQ0MsOERBQUMscURBQUQ7QUFBUSxrQkFBTSxNQUFkO0FBQUEsbUNBQ0MsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFLQyw4REFBQyxxREFBRDtBQUFRLGdCQUFJLE1BQVo7QUFBQSxtQ0FDQyw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBM0J3QkwsTTs7QUE0QnhCLFNBQVNFLFNBQVQsR0FDQTtBQUNDLFNBQU9JLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JKLFVBQUksRUFBRTtBQUNMSyxnQkFBUSxFQUFFLENBREw7QUFFTEMsa0JBQVUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0Msa0RBQWhDLEdBQXFGLGlEQUY1RjtBQUdMQyxjQUFNLEVBQUVMLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBSHpCO0FBSUxDLHNCQUFjLEVBQUUsMEJBSlg7QUFLTEMsNEJBQW9CLEVBQUU7QUFMakIsT0FEdUI7QUFRN0JYLFNBQUcsRUFBRTtBQUNKWSxpQkFBUyxFQUFFO0FBRFAsT0FSd0I7QUFXN0JYLGVBQVMsRUFBRTtBQUNWWSxlQUFPLEVBQUU7QUFEQztBQVhrQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFlQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNkNjM0ZmZlNzdlMmM2ZmE1MmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Zek642UIOy7tO2PrOuEjO2KuCDtgbTrnpjsiqRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDQuMjYgTW9uIDIyOjE5OjQ3XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyBBcHBCYXIsIEJveCwgQ29udGFpbmVyLCBIaWRkZW4sIG1ha2VTdHlsZXMsIFRvb2xiYXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IERlc2t0b3BIZWFkZXIgZnJvbSBcIi4vRGVza3RvcEhlYWRlclwiO1xyXG5pbXBvcnQgTW9iaWxlSGVhZGVyIGZyb20gXCIuL01vYmlsZUhlYWRlclwiO1xyXG5cclxuLyoqXHJcbiAqIO2XpOuNlCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJoZWFkZXJcIj5cclxuXHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYXJ9PlxyXG5cdFx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHRcdDxIaWRkZW4gc21Eb3duPlxyXG5cdFx0XHRcdFx0XHRcdDxEZXNrdG9wSGVhZGVyIC8+XHJcblx0XHRcdFx0XHRcdDwvSGlkZGVuPlxyXG5cclxuXHRcdFx0XHRcdFx0PEhpZGRlbiBtZFVwPlxyXG5cdFx0XHRcdFx0XHRcdDxNb2JpbGVIZWFkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9IaWRkZW4+XHJcblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L1Rvb2xiYXI+XHJcblx0XHRcdDwvQXBwQmFyPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRcdGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMENDLCAjNDM0MzQzQ0MpO1wiIDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzQ2NmJDQywgIzNmNWVmYkNDKVwiLFxyXG5cdFx0XHR6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG5cdFx0XHRiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweCkgc2F0dXJhdGUoMTgwJSlcIixcclxuXHRcdFx0V2Via2l0QmFja2Ryb3BGaWx0ZXI6IFwiYmx1cigxMHB4KSBzYXR1cmF0ZSgxODAlKVwiXHJcblx0XHR9LFxyXG5cdFx0YmFyOiB7XHJcblx0XHRcdG1pbkhlaWdodDogNjRcclxuXHRcdH0sXHJcblx0XHRjb250YWluZXI6IHtcclxuXHRcdFx0ZGlzcGxheTogXCJmbGV4XCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=