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
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_4__);

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
  console.dir(react_cookies__WEBPACK_IMPORTED_MODULE_4___default.a);
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
              lineNumber: 32,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
            mdUp: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJjb25zb2xlIiwiZGlyIiwiY29va2llIiwicm9vdCIsImJhciIsImNvbnRhaW5lciIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZsZXhHcm93IiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJ0eXBlIiwiekluZGV4IiwiZHJhd2VyIiwiYmFja2Ryb3BGaWx0ZXIiLCJXZWJraXRCYWNrZHJvcEZpbHRlciIsIm1pbkhlaWdodCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsTUFBVCxHQUNmO0FBQ0MsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxvREFBWjtBQUVBLHNCQUNDLHFFQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDQyxxRUFBQyx3REFBRDtBQUFRLGNBQVEsRUFBQyxPQUFqQjtBQUF5QixlQUFTLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBNUM7QUFBQSw2QkFDQyxxRUFBQyx5REFBRDtBQUFTLGlCQUFTLEVBQUVMLE9BQU8sQ0FBQ00sR0FBNUI7QUFBQSwrQkFDQyxxRUFBQywyREFBRDtBQUFXLGtCQUFRLEVBQUMsSUFBcEI7QUFBeUIsbUJBQVMsRUFBRU4sT0FBTyxDQUFDTyxTQUE1QztBQUFBLGtDQUNDLHFFQUFDLHdEQUFEO0FBQVEsa0JBQU0sTUFBZDtBQUFBLG1DQUNDLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBS0MscUVBQUMsd0RBQUQ7QUFBUSxnQkFBSSxNQUFaO0FBQUEsbUNBQ0MscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpQkE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQTdCd0JSLE07O0FBOEJ4QixTQUFTRSxTQUFULEdBQ0E7QUFDQyxTQUFPTyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCSixVQUFJLEVBQUU7QUFDTEssZ0JBQVEsRUFBRSxDQURMO0FBRUxDLGtCQUFVLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxJQUFkLEtBQXVCLE1BQXZCLEdBQWdDLGtEQUFoQyxHQUFxRixpREFGNUY7QUFHTEMsY0FBTSxFQUFFTCxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUh6QjtBQUlMQyxzQkFBYyxFQUFFLDBCQUpYO0FBS0xDLDRCQUFvQixFQUFFO0FBTGpCLE9BRHVCO0FBUTdCWCxTQUFHLEVBQUU7QUFDSlksaUJBQVMsRUFBRTtBQURQLE9BUndCO0FBVzdCWCxlQUFTLEVBQUU7QUFDVlksZUFBTyxFQUFFO0FBREM7QUFYa0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBZUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNzdmY2YwNDQ3Y2RiNDdjNDJlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIO2XpOuNlCDsu7Ttj6zrhIztirgg7YG0656Y7IqkXHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA0LjI2IE1vbiAyMjoxOTo0N1xyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgQXBwQmFyLCBCb3gsIENvbnRhaW5lciwgSGlkZGVuLCBtYWtlU3R5bGVzLCBUb29sYmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBEZXNrdG9wSGVhZGVyIGZyb20gXCIuL0Rlc2t0b3BIZWFkZXJcIjtcclxuaW1wb3J0IE1vYmlsZUhlYWRlciBmcm9tIFwiLi9Nb2JpbGVIZWFkZXJcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiXHJcbi8qKlxyXG4gKiDtl6TrjZQgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc29sZS5kaXIoY29va2llKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJoZWFkZXJcIj5cclxuXHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYXJ9PlxyXG5cdFx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHRcdDxIaWRkZW4gc21Eb3duPlxyXG5cdFx0XHRcdFx0XHRcdDxEZXNrdG9wSGVhZGVyIC8+XHJcblx0XHRcdFx0XHRcdDwvSGlkZGVuPlxyXG5cclxuXHRcdFx0XHRcdFx0PEhpZGRlbiBtZFVwPlxyXG5cdFx0XHRcdFx0XHRcdDxNb2JpbGVIZWFkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9IaWRkZW4+XHJcblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L1Rvb2xiYXI+XHJcblx0XHRcdDwvQXBwQmFyPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0ZmxleEdyb3c6IDEsXHJcblx0XHRcdGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcImxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMENDLCAjNDM0MzQzQ0MpO1wiIDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYzQ2NmJDQywgIzNmNWVmYkNDKVwiLFxyXG5cdFx0XHR6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG5cdFx0XHRiYWNrZHJvcEZpbHRlcjogXCJibHVyKDVweCkgc2F0dXJhdGUoMTgwJSlcIixcclxuXHRcdFx0V2Via2l0QmFja2Ryb3BGaWx0ZXI6IFwiYmx1cig1cHgpIHNhdHVyYXRlKDE4MCUpXCJcclxuXHRcdH0sXHJcblx0XHRiYXI6IHtcclxuXHRcdFx0bWluSGVpZ2h0OiA2NFxyXG5cdFx0fSxcclxuXHRcdGNvbnRhaW5lcjoge1xyXG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==