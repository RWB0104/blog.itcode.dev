self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/section/contents/SideMover.js":
/*!**************************************************!*\
  !*** ./components/section/contents/SideMover.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SideMover; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\contents\\SideMover.js",
    _s = $RefreshSig$();

/**
 * 사이드 컨텐츠 이동 컨트롤러 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.22 Sat 18:23:13
 */
// 라이브러리 모듈



/**
 * 사이드 컨텐츠 이동 컨트롤러 JSX 반환 함수
 *
 * @param {Object} page: 페이지 객체
 *
 * @returns {JSX} JSX 객체
 */

function SideMover(_ref) {
  _s();

  var page = _ref.page;
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("sm"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    spacing: 4,
    justify: "space-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      item: true,
      xs: isMobile ? 6 : 4,
      children: page.prev !== -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "outlined",
        color: "primary",
        className: classes.button,
        fullWidth: true,
        startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowBack, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 117
        }, this),
        onClick: function onClick() {
          return router.push("/".concat(page.type, "/").concat(page.prev.slug));
        },
        children: page.prev.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 26
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      item: true,
      xs: isMobile ? 6 : 4,
      children: page.next !== -1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "outlined",
        color: "primary",
        className: classes.button,
        fullWidth: true,
        endIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowForward, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 115
        }, this),
        onClick: function onClick() {
          return router.push("/".concat(page.type, "/").concat(page.next.slug));
        },
        children: page.next.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 26
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(SideMover, "uSFaqFEdV3H/urIJZGrfaXN3F4w=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery];
});

_c = SideMover;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function () {
    return {
      button: {
        height: "100%"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "SideMover");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL1NpZGVNb3Zlci5qcyJdLCJuYW1lcyI6WyJTaWRlTW92ZXIiLCJwYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJwcmV2IiwiYnV0dG9uIiwicHVzaCIsInR5cGUiLCJzbHVnIiwidGl0bGUiLCJuZXh0IiwibWFrZVN0eWxlcyIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsU0FBVCxPQUNmO0FBQUE7O0FBQUEsTUFEb0NDLElBQ3BDLFFBRG9DQSxJQUNwQztBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDJEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxnRUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFFQSxzQkFDQyw4REFBQyxtREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsV0FBTyxFQUFDLGVBQXBDO0FBQUEsNEJBQ0MsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUVILFFBQVEsR0FBRyxDQUFILEdBQU8sQ0FBOUI7QUFBQSxnQkFDRVAsSUFBSSxDQUFDVyxJQUFMLEtBQWMsQ0FBQyxDQUFmLGlCQUFvQiw4REFBQyxxREFBRDtBQUFRLGVBQU8sRUFBQyxVQUFoQjtBQUEyQixhQUFLLEVBQUMsU0FBakM7QUFBMkMsaUJBQVMsRUFBRVYsT0FBTyxDQUFDVyxNQUE5RDtBQUFzRSxpQkFBUyxNQUEvRTtBQUFnRixpQkFBUyxlQUFFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTNGO0FBQTBHLGVBQU8sRUFBRTtBQUFBLGlCQUFNVCxNQUFNLENBQUNVLElBQVAsWUFBZ0JiLElBQUksQ0FBQ2MsSUFBckIsY0FBNkJkLElBQUksQ0FBQ1csSUFBTCxDQUFVSSxJQUF2QyxFQUFOO0FBQUEsU0FBbkg7QUFBQSxrQkFBMEtmLElBQUksQ0FBQ1csSUFBTCxDQUFVSztBQUFwTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFVCxRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQTlCO0FBQUEsZ0JBQ0VQLElBQUksQ0FBQ2lCLElBQUwsS0FBYyxDQUFDLENBQWYsaUJBQW9CLDhEQUFDLHFEQUFEO0FBQVEsZUFBTyxFQUFDLFVBQWhCO0FBQTJCLGFBQUssRUFBQyxTQUFqQztBQUEyQyxpQkFBUyxFQUFFaEIsT0FBTyxDQUFDVyxNQUE5RDtBQUFzRSxpQkFBUyxNQUEvRTtBQUFnRixlQUFPLGVBQUUsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBekY7QUFBMkcsZUFBTyxFQUFFO0FBQUEsaUJBQU1ULE1BQU0sQ0FBQ1UsSUFBUCxZQUFnQmIsSUFBSSxDQUFDYyxJQUFyQixjQUE2QmQsSUFBSSxDQUFDaUIsSUFBTCxDQUFVRixJQUF2QyxFQUFOO0FBQUEsU0FBcEg7QUFBQSxrQkFBMktmLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUQ7QUFBckw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFXQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBMUJ3QmpCLFM7VUFJUkssa0QsRUFFREUsdUQsRUFDR0UsNEQ7OztLQVBNVCxTOztBQTJCeEIsU0FBU0csU0FBVCxHQUNBO0FBQ0MsU0FBT2dCLDZEQUFVLENBQUM7QUFBQSxXQUFPO0FBQ3hCTixZQUFNLEVBQUU7QUFDUE8sY0FBTSxFQUFFO0FBREQ7QUFEZ0IsS0FBUDtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBS0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLmE2NDJlODEyYTIyMWE5OGNmN2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7IKs7J2065OcIOy7qO2FkOy4oCDsnbTrj5kg7Luo7Yq466Gk65+sIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjIyIFNhdCAxODoyMzoxM1xyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgbWFrZVN0eWxlcywgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQXJyb3dCYWNrLCBBcnJvd0ZvcndhcmQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG4vKipcclxuICog7IKs7J2065OcIOy7qO2FkOy4oCDsnbTrj5kg7Luo7Yq466Gk65+sIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWdlOiDtjpjsnbTsp4Ag6rCd7LK0XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVNb3Zlcih7IHBhZ2UgfSlcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHRjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXtpc01vYmlsZSA/IDYgOiA0fT5cclxuXHRcdFx0XHR7cGFnZS5wcmV2ICE9PSAtMSAmJiA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGZ1bGxXaWR0aCBzdGFydEljb249ezxBcnJvd0JhY2sgLz59IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtwYWdlLnR5cGV9LyR7cGFnZS5wcmV2LnNsdWd9YCl9PntwYWdlLnByZXYudGl0bGV9PC9CdXR0b24+fVxyXG5cdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHQ8R3JpZCBpdGVtIHhzPXtpc01vYmlsZSA/IDYgOiA0fT5cclxuXHRcdFx0XHR7cGFnZS5uZXh0ICE9PSAtMSAmJiA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IGZ1bGxXaWR0aCBlbmRJY29uPXs8QXJyb3dGb3J3YXJkIC8+fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgLyR7cGFnZS50eXBlfS8ke3BhZ2UubmV4dC5zbHVnfWApfT57cGFnZS5uZXh0LnRpdGxlfTwvQnV0dG9uPn1cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9HcmlkPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG5cdFx0YnV0dG9uOiB7XHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=