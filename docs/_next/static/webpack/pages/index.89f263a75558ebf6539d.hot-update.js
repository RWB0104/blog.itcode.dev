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
  isIOS;
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
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJib3hfaW1hZ2Vfd3JhcHBlciIsImJveF9pbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlcyIsInR5cG9fdGl0bGUiLCJ0aXRsZSIsInR5cG9fZGVzYyIsImF1dGhvciIsImlzSU9TIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJ3aWR0aCIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImNsaXAiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJPQmFja2dyb3VuZFNpemUiLCJNb3pCYWNrZ3JvdW5kU2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE9BQVQsR0FDZjtBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsNkRBQWEsQ0FBQ0MsOENBQUQsQ0FBM0I7QUFFQSxzQkFDQyw4REFBQyw4Q0FBRDtBQUFBLDJCQUNDLDhEQUFDLGtEQUFEO0FBQUssZUFB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STtBQUVYQyxrQkFBVSxFQUFFLGtCQUZEO0FBR1hDLGlCQUFTLEVBQUUsUUFIQTtBQUlYQyxrQkFBVSxFQUFFO0FBSkQsT0EvQmlCO0FBcUM3QjNCLGVBQVMsRUFBRTtBQUNWd0IsYUFBSyxFQUFFLE9BREc7QUFFVkMsa0JBQVUsRUFBRSxrQkFGRjtBQUdWQyxpQkFBUyxFQUFFO0FBSEQ7QUFyQ2tCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQTJDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44OWYyNjNhNzU1NThlYmY2NTM5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyHvOuwleyKpCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xNSBTYXQgMDE6MTY6MjZcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IEJveCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBQSUVDRSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCBTZW1hbnRpY1R5cG8gZnJvbSBcIi4uLy4uL2dsb2JhbC9TZW1hbnRpY1R5cG9cIjtcclxuXHJcbi8qKlxyXG4gKiDsh7zrsJXsiqQgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd0JveCgpXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHBpZWNlID0gZ2V0UmFuZG9tSXRlbShQSUVDRSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RmFkZT5cclxuXHRcdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveF9lYXN0ZXJ9PlxyXG5cdFx0XHRcdDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfaW1hZ2Vfd3JhcHBlcn0+XHJcblx0XHRcdFx0XHQ8Qm94IHBvc2l0aW9uPVwiZml4ZWRcIiBkaXNwbGF5PVwiYmxvY2tcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94X2ltYWdlfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaWVjZS5pbWFnZXN9KWAgfX0gLz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduU2VsZj1cImNlbnRlclwiIHpJbmRleD17MTB9PlxyXG5cdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImgzXCIgZG93bj1cImg1XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudHlwb190aXRsZX0+e3BpZWNlLnRpdGxlfTwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImg0XCIgZG93bj1cImJvZHkxXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudHlwb19kZXNjfT57cGllY2UuYXV0aG9yfTwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvRmFkZT5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoaXNJT1MpXHJcbntcclxuXHRpc0lPUztcclxuXHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0Ym94X2Vhc3Rlcjoge1xyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdGhlaWdodDogXCI0MHZtYXhcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDEwMDAsXHJcblx0XHRcdG1pbkhlaWdodDogNTAwXHJcblx0XHR9LFxyXG5cdFx0Ym94X2ltYWdlX3dyYXBwZXI6IHtcclxuXHRcdFx0Y2xpcDogXCJyZWN0KDAsIGF1dG8sIGF1dG8sIDApXCIsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0Ym94X2ltYWdlOiB7XHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjUpXCIsXHJcblx0XHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZEF0dGFjaG1lbnQ6IFwiZml4ZWRcIixcclxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciB0b3BcIixcclxuXHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0T0JhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdE1vekJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHRcdH0sXHJcblx0XHR0eXBvX3RpdGxlOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0eXBvX2Rlc2M6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9