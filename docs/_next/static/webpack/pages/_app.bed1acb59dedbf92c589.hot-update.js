webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _DesktopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopHeader */ "./components/header/DesktopHeader.js");
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileHeader */ "./components/header/MobileHeader.js");

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\header\\Header.js";

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    component: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["AppBar"], {
      position: "fixed",
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
        className: classes.bar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
          maxWidth: "lg",
          className: classes.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
            smDown: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DesktopHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
            mdUp: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
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
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return {
      root: {
        flexGrow: 1,
        background: theme.palette.type === "dark" ? "linear-gradient(to right, #000000CC, #434343CC);" : "linear-gradient(to right, #fc466bCC, #3f5efbCC)",
        zIndex: theme.zIndex.drawer + 1,
        backdropFilter: "blur(5px) saturate(180%)",
        WebkitBackdropFilter: "blur(5px) saturate(180%)"
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJyb290IiwiYmFyIiwiY29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsInR5cGUiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJiYWNrZHJvcEZpbHRlciIsIldlYmtpdEJhY2tkcm9wRmlsdGVyIiwibWluSGVpZ2h0IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE1BQVQsR0FDZjtBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNDLHFFQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDQyxxRUFBQyx3REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUF5QixlQUFTLEVBQUVELE9BQU8sQ0FBQ0UsSUFBNUM7QUFBQSw2QkFDQyxxRUFBQyx5REFBRDtBQUFTLGlCQUFTLEVBQUVGLE9BQU8sQ0FBQ0csR0FBNUI7QUFBQSwrQkFDQyxxRUFBQywyREFBRDtBQUFXLGtCQUFRLEVBQUMsSUFBcEI7QUFBeUIsbUJBQVMsRUFBRUgsT0FBTyxDQUFDSSxTQUE1QztBQUFBLGtDQUNDLHFFQUFDLHdEQUFEO0FBQVEsa0JBQU0sTUFBZDtBQUFBLG1DQUNDLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBS0MscUVBQUMsd0RBQUQ7QUFBUSxnQkFBSSxNQUFaO0FBQUEsbUNBQ0MscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpQkE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQTNCd0JMLE07O0FBNEJ4QixTQUFTRSxTQUFULEdBQ0E7QUFDQyxTQUFPSSxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCSixVQUFJLEVBQUU7QUFDTEssZ0JBQVEsRUFBRSxDQURMO0FBRUxDLGtCQUFVLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxJQUFkLEtBQXVCLE1BQXZCLEdBQWdDLGtEQUFoQyxHQUFxRixpREFGNUY7QUFHTEMsY0FBTSxFQUFFTCxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUh6QjtBQUlMQyxzQkFBYyxFQUFFLDBCQUpYO0FBS0xDLDRCQUFvQixFQUFFO0FBTGpCLE9BRHVCO0FBUTdCWCxTQUFHLEVBQUU7QUFDSlksaUJBQVMsRUFBRTtBQURQLE9BUndCO0FBVzdCWCxlQUFTLEVBQUU7QUFDVlksZUFBTyxFQUFFO0FBREM7QUFYa0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBZUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZWQxYWNiNTlkZWRiZjkyYzU4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIO2XpOuNlCDsu7Ttj6zrhIztirgg7YG0656Y7IqkXHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA0LjI2IE1vbiAyMjoxOTo0N1xyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgQXBwQmFyLCBCb3gsIENvbnRhaW5lciwgSGlkZGVuLCBtYWtlU3R5bGVzLCBUb29sYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBEZXNrdG9wSGVhZGVyIGZyb20gXCIuL0Rlc2t0b3BIZWFkZXJcIjtcclxuaW1wb3J0IE1vYmlsZUhlYWRlciBmcm9tIFwiLi9Nb2JpbGVIZWFkZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDtl6TrjZQgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggY29tcG9uZW50PVwiaGVhZGVyXCI+XHJcblx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMuYmFyfT5cclxuXHRcdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8SGlkZGVuIHNtRG93bj5cclxuXHRcdFx0XHRcdFx0XHQ8RGVza3RvcEhlYWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L0hpZGRlbj5cclxuXHJcblx0XHRcdFx0XHRcdDxIaWRkZW4gbWRVcD5cclxuXHRcdFx0XHRcdFx0XHQ8TW9iaWxlSGVhZGVyIC8+XHJcblx0XHRcdFx0XHRcdDwvSGlkZGVuPlxyXG5cdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdFx0PC9Ub29sYmFyPlxyXG5cdFx0XHQ8L0FwcEJhcj5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRyb290OiB7XHJcblx0XHRcdGZsZXhHcm93OiAxLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDBDQywgIzQzNDM0M0NDKTtcIiA6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmM0NjZiQ0MsICMzZjVlZmJDQylcIixcclxuXHRcdFx0ekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuXHRcdFx0YmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpIHNhdHVyYXRlKDE4MCUpXCIsXHJcblx0XHRcdFdlYmtpdEJhY2tkcm9wRmlsdGVyOiBcImJsdXIoNXB4KSBzYXR1cmF0ZSgxODAlKVwiXHJcblx0XHR9LFxyXG5cdFx0YmFyOiB7XHJcblx0XHRcdG1pbkhlaWdodDogNjRcclxuXHRcdH0sXHJcblx0XHRjb250YWluZXI6IHtcclxuXHRcdFx0ZGlzcGxheTogXCJmbGV4XCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=