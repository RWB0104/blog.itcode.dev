self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./common/states.js":
/*!**************************!*\
  !*** ./common/states.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkAtom": function() { return /* binding */ darkAtom; },
/* harmony export */   "menuAtom": function() { return /* binding */ menuAtom; },
/* harmony export */   "fontAtom": function() { return /* binding */ fontAtom; }
/* harmony export */ });
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/**
 * 상태 관리 JavaScript
 *
 * @author RWB
 * @since 2021.05.08 Sat 14:30:43
 */
// 라이브러리 모듈

 // 테마 상태

var darkAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
  key: "darkState",
  "default": react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("theme") ? react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("theme") === "true" : true
}); // 메뉴 상태

var menuAtom = new recoil__WEBPACK_IMPORTED_MODULE_1__.atom({
  key: "menuState",
  "default": false
}); // 게시글 폰트 상태

var fontAtom = new recoil__WEBPACK_IMPORTED_MODULE_1__.atom({
  key: "fontState",
  "default": react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("theme")
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL3N0YXRlcy5qcyJdLCJuYW1lcyI6WyJkYXJrQXRvbSIsImF0b20iLCJrZXkiLCJjb29raWUiLCJtZW51QXRvbSIsImZvbnRBdG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ08sSUFBTUEsUUFBUSxHQUFHQyw0Q0FBSSxDQUFDO0FBQzVCQyxLQUFHLEVBQUUsV0FEdUI7QUFFNUIsYUFBU0MsdURBQUEsQ0FBWSxPQUFaLElBQXVCQSx1REFBQSxDQUFZLE9BQVosTUFBeUIsTUFBaEQsR0FBeUQ7QUFGdEMsQ0FBRCxDQUFyQixDLENBS1A7O0FBQ08sSUFBTUMsUUFBUSxHQUFHLElBQUlILHdDQUFKLENBQVM7QUFDaENDLEtBQUcsRUFBRSxXQUQyQjtBQUVoQyxhQUFTO0FBRnVCLENBQVQsQ0FBakIsQyxDQUtQOztBQUNPLElBQU1HLFFBQVEsR0FBRyxJQUFJSix3Q0FBSixDQUFTO0FBQ2hDQyxLQUFHLEVBQUUsV0FEMkI7QUFFaEMsYUFBU0MsdURBQUEsQ0FBWSxPQUFaO0FBRnVCLENBQVQsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMmQ0M2NlZDk4NDQzZWZhZTM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyDge2DnCDqtIDrpqwgSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4wOCBTYXQgMTQ6MzA6NDNcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCBjb29raWUgZnJvbSBcInJlYWN0LWNvb2tpZXNcIjtcclxuaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbi8vIO2FjOuniCDsg4Htg5xcclxuZXhwb3J0IGNvbnN0IGRhcmtBdG9tID0gYXRvbSh7XHJcblx0a2V5OiBcImRhcmtTdGF0ZVwiLFxyXG5cdGRlZmF1bHQ6IGNvb2tpZS5sb2FkKFwidGhlbWVcIikgPyBjb29raWUubG9hZChcInRoZW1lXCIpID09PSBcInRydWVcIiA6IHRydWVcclxufSk7XHJcblxyXG4vLyDrqZTribQg7IOB7YOcXHJcbmV4cG9ydCBjb25zdCBtZW51QXRvbSA9IG5ldyBhdG9tKHtcclxuXHRrZXk6IFwibWVudVN0YXRlXCIsXHJcblx0ZGVmYXVsdDogZmFsc2VcclxufSk7XHJcblxyXG4vLyDqsozsi5zquIAg7Y+w7Yq4IOyDge2DnFxyXG5leHBvcnQgY29uc3QgZm9udEF0b20gPSBuZXcgYXRvbSh7XHJcblx0a2V5OiBcImZvbnRTdGF0ZVwiLFxyXG5cdGRlZmF1bHQ6IGNvb2tpZS5sb2FkKFwidGhlbWVcIilcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==