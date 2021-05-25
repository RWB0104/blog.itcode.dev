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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/env */ "./common/env.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\index\\ShowBox.js",
    _s = $RefreshSig$();

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
  _s();

  var classes = getStyles();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.down("sm"));
  var piece = (0,_common_common__WEBPACK_IMPORTED_MODULE_2__.getRandomItem)(_common_env__WEBPACK_IMPORTED_MODULE_3__.PIECE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_1__.Fade, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      component: "article",
      className: classes.box_easter,
      style: {
        backgroundImage: "url(".concat(piece.images, ")")
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: isMobile ? "h5" : "h3",
        align: "center",
        className: classes.typo_title,
        children: piece.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
        variant: isMobile ? "body1" : "h4",
        align: "center",
        className: classes.typo_desc,
        children: piece.author
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(ShowBox, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];
});

_c = ShowBox;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      box_easter: {
        padding: theme.spacing(3),
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        height: "40vw",
        maxHeight: 1000,
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwicGllY2UiLCJnZXRSYW5kb21JdGVtIiwiUElFQ0UiLCJib3hfZWFzdGVyIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VzIiwidHlwb190aXRsZSIsInRpdGxlIiwidHlwb19kZXNjIiwiYXV0aG9yIiwibWFrZVN0eWxlcyIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxPQUFULEdBQ2Y7QUFBQTs7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDJEQUFRLEVBQXRCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxnRUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFhLENBQUNDLDhDQUFELENBQTNCO0FBRUEsc0JBQ0MsOERBQUMsOENBQUQ7QUFBQSwyQkFDQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLGVBQVMsRUFBRVYsT0FBTyxDQUFDVyxVQUE1QztBQUF3RCxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsZ0JBQVNKLEtBQUssQ0FBQ0ssTUFBZjtBQUFqQixPQUEvRDtBQUFBLDhCQUNDLDhEQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFFVCxRQUFRLEdBQUcsSUFBSCxHQUFVLElBQXZDO0FBQTZDLGFBQUssRUFBQyxRQUFuRDtBQUE0RCxpQkFBUyxFQUFFSixPQUFPLENBQUNjLFVBQS9FO0FBQUEsa0JBQTRGTixLQUFLLENBQUNPO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDLDhEQUFDLHlEQUFEO0FBQVksZUFBTyxFQUFFWCxRQUFRLEdBQUcsT0FBSCxHQUFhLElBQTFDO0FBQWdELGFBQUssRUFBQyxRQUF0RDtBQUErRCxpQkFBUyxFQUFFSixPQUFPLENBQUNnQixTQUFsRjtBQUFBLGtCQUE4RlIsS0FBSyxDQUFDUztBQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBUUE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXhCd0JsQixPO1VBSVRJLHVELEVBRUdFLDREOzs7S0FOTU4sTzs7QUF5QnhCLFNBQVNFLFNBQVQsR0FDQTtBQUNDLFNBQU9pQiw2REFBVSxDQUFDLFVBQUNoQixLQUFEO0FBQUEsV0FBWTtBQUM3QlMsZ0JBQVUsRUFBRTtBQUNYUSxlQUFPLEVBQUVqQixLQUFLLENBQUNrQixPQUFOLENBQWMsQ0FBZCxDQURFO0FBRVhDLDRCQUFvQixFQUFFLE9BRlg7QUFHWEMsdUJBQWUsRUFBRSxvQkFITjtBQUlYQywyQkFBbUIsRUFBRSxVQUpWO0FBS1hDLHNCQUFjLEVBQUUsT0FMTDtBQU1YQywwQkFBa0IsRUFBRSxRQU5UO0FBT1hDLGlCQUFTLEVBQUUsUUFQQTtBQVFYQyxjQUFNLEVBQUUsTUFSRztBQVNYQyxpQkFBUyxFQUFFLElBVEE7QUFVWEMsaUJBQVMsRUFBRSxHQVZBO0FBV1hDLGVBQU8sRUFBRSxNQVhFO0FBWVhDLHFCQUFhLEVBQUUsUUFaSjtBQWFYQyxzQkFBYyxFQUFFO0FBYkwsT0FEaUI7QUFnQjdCbEIsZ0JBQVUsRUFBRTtBQUNYbUIsYUFBSyxFQUFFLE9BREk7QUFFWEMsa0JBQVUsRUFBRSxrQkFGRDtBQUdYQyxpQkFBUyxFQUFFLFFBSEE7QUFJWEMsa0JBQVUsRUFBRTtBQUpELE9BaEJpQjtBQXNCN0JwQixlQUFTLEVBQUU7QUFDVmlCLGFBQUssRUFBRSxPQURHO0FBRVZDLGtCQUFVLEVBQUUsa0JBRkY7QUFHVkMsaUJBQVMsRUFBRTtBQUhEO0FBdEJrQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUE0QkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDZkZDUwMjAyN2UwZjkwNDA5ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsh7zrsJXsiqQg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTUgU2F0IDAxOjE2OjI2XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBQSUVDRSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW52XCI7XHJcblxyXG4vKipcclxuICog7Ie867CV7IqkIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dCb3goKVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRjb25zdCBwaWVjZSA9IGdldFJhbmRvbUl0ZW0oUElFQ0UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZhZGU+XHJcblx0XHRcdDxCb3ggY29tcG9uZW50PVwiYXJ0aWNsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfZWFzdGVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaWVjZS5pbWFnZXN9KWAgfX0+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD17aXNNb2JpbGUgPyBcImg1XCIgOiBcImgzXCJ9IGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9fdGl0bGV9PntwaWVjZS50aXRsZX08L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD17aXNNb2JpbGUgPyBcImJvZHkxXCIgOiBcImg0XCJ9IGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9fZGVzY30+e3BpZWNlLmF1dGhvcn08L1R5cG9ncmFwaHk+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GYWRlPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRib3hfZWFzdGVyOiB7XHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuXHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjQwdndcIixcclxuXHRcdFx0bWF4SGVpZ2h0OiAxMDAwLFxyXG5cdFx0XHRtaW5IZWlnaHQ6IDUwMCxcclxuXHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb190aXRsZToge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb19kZXNjOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==