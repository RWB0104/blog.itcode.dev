self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section/index/ShowBox.js":
/*!*********************************************!*\
  !*** ./components/section/index/ShowBox.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShowBox; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/env */ "./common/env.js");
/* harmony import */ var _global_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\index\\ShowBox.js";

/**
 * 쇼박스 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.15 Sat 01:16:26
 */
// 라이브러리 모듈


 // 사용자 모듈




/**
 * 쇼박스 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function ShowBox() {
  var classes = getStyles();
  var piece = (0,_common_common__WEBPACK_IMPORTED_MODULE_3__.getRandomItem)(_common_env__WEBPACK_IMPORTED_MODULE_4__.PIECE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
      component: "article",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      className: classes.box_easter,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
        position: "absolute",
        className: classes.box_image_wrapper,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
          position: "fixed",
          display: "block",
          className: classes.box_image,
          style: {
            backgroundImage: "url(".concat(piece.images, ")")
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        zIndex: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__.default, {
          up: "h3",
          down: "h5",
          align: "center",
          className: classes.typo_title,
          children: piece.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__.default, {
          up: "h4",
          down: "body1",
          align: "center",
          className: classes.typo_desc,
          children: piece.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this)
  }, void 0, false, {
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

_c = ShowBox;

function getStyles(isIOS) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
    return {
      box_easter: {
        padding: theme.spacing(3),
        textAlign: "center",
        height: "40vmax",
        width: "100%",
        maxHeight: 1000,
        minHeight: 500
      },
      box_image_wrapper: {
        clip: "rect(0, auto, auto, 0)",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
      box_image: {
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundAttachment: isIOS ? "scroll" : "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        OBackgroundSize: "cover",
        MozBackgroundSize: "cover"
      },
      typo_title: {
        color: "white",
        fontFamily: "둘기마요, sans-serif",
        fontStyle: "italic",
        fontWeight: "bold"
      },
      typo_desc: {
        color: "white",
        fontFamily: "둘기마요, sans-serif",
        fontStyle: "italic"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "ShowBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJib3hfaW1hZ2Vfd3JhcHBlciIsImJveF9pbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlcyIsInR5cG9fdGl0bGUiLCJ0aXRsZSIsInR5cG9fZGVzYyIsImF1dGhvciIsImlzSU9TIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImNsaXAiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJPQmFja2dyb3VuZFNpemUiLCJNb3pCYWNrZ3JvdW5kU2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE9BQVQsR0FDZjtBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsNkRBQWEsQ0FBQ0MsOENBQUQsQ0FBM0I7QUFFQSxzQkFDQyw4REFBQyw4Q0FBRDtBQUFBLDJCQUNDLDhEQUFDLGtEQUFEO0FBQUssZUFB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YUFBSyxFQUFFLE9BREk7QUFFWEMsa0JBQVUsRUFBRSxrQkFGRDtBQUdYQyxpQkFBUyxFQUFFLFFBSEE7QUFJWEMsa0JBQVUsRUFBRTtBQUpELE9BL0JpQjtBQXFDN0IzQixlQUFTLEVBQUU7QUFDVndCLGFBQUssRUFBRSxPQURHO0FBRVZDLGtCQUFVLEVBQUUsa0JBRkY7QUFHVkMsaUJBQVMsRUFBRTtBQUhEO0FBckNrQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUEyQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjBlNDBiYWVjYWIwOTU0Y2U5NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsh7zrsJXsiqQg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTUgU2F0IDAxOjE2OjI2XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgeyBnZXRSYW5kb21JdGVtIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IHsgUElFQ0UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudlwiO1xyXG5pbXBvcnQgU2VtYW50aWNUeXBvIGZyb20gXCIuLi8uLi9nbG9iYWwvU2VtYW50aWNUeXBvXCI7XHJcblxyXG4vKipcclxuICog7Ie867CV7IqkIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dCb3goKVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBwaWVjZSA9IGdldFJhbmRvbUl0ZW0oUElFQ0UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZhZGU+XHJcblx0XHRcdDxCb3ggY29tcG9uZW50PVwiYXJ0aWNsZVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfZWFzdGVyfT5cclxuXHRcdFx0XHQ8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94X2ltYWdlX3dyYXBwZXJ9PlxyXG5cdFx0XHRcdFx0PEJveCBwb3NpdGlvbj1cImZpeGVkXCIgZGlzcGxheT1cImJsb2NrXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveF9pbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cGllY2UuaW1hZ2VzfSlgIH19IC8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnblNlbGY9XCJjZW50ZXJcIiB6SW5kZXg9ezEwfT5cclxuXHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoM1wiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9fdGl0bGV9PntwaWVjZS50aXRsZX08L1NlbWFudGljVHlwbz5cclxuXHRcdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJib2R5MVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9fZGVzY30+e3BpZWNlLmF1dGhvcn08L1NlbWFudGljVHlwbz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0ZhZGU+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKGlzSU9TKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0Ym94X2Vhc3Rlcjoge1xyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdGhlaWdodDogXCI0MHZtYXhcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDEwMDAsXHJcblx0XHRcdG1pbkhlaWdodDogNTAwXHJcblx0XHR9LFxyXG5cdFx0Ym94X2ltYWdlX3dyYXBwZXI6IHtcclxuXHRcdFx0Y2xpcDogXCJyZWN0KDAsIGF1dG8sIGF1dG8sIDApXCIsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0Ym94X2ltYWdlOiB7XHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXHJcblx0XHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZEF0dGFjaG1lbnQ6IGlzSU9TID8gXCJzY3JvbGxcIiA6IFwiZml4ZWRcIixcclxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG5cdFx0XHRXZWJraXRCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRPQmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0TW96QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG5cdFx0fSxcclxuXHRcdHR5cG9fdGl0bGU6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdHR5cG9fZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U3R5bGU6IFwiaXRhbGljXCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=