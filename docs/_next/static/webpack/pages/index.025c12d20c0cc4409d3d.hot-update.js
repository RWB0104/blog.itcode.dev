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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/env */ "./common/env.js");
/* harmony import */ var _global_SemanticTypo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\index\\ShowBox.js";

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
  var piece = (0,_common_common__WEBPACK_IMPORTED_MODULE_2__.getRandomItem)(_common_env__WEBPACK_IMPORTED_MODULE_3__.PIECE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_1__.Fade, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      component: "article",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      className: classes.box_easter,
      style: {
        backgroundImage: "url(".concat(piece.images, ")")
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_4__.default, {
        up: "h3",
        down: "h5",
        align: "center",
        className: classes.typo_title,
        children: piece.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_4__.default, {
        up: "h4",
        down: "body1",
        align: "center",
        className: classes.typo_desc,
        children: piece.author
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_c = ShowBox;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
    return {
      box_easter: {
        padding: theme.spacing(3),
        textAlign: "center",
        height: "40vw",
        maxHeight: 1000,
        minHeight: 500,
        flexDirection: "column",
        justifyContent: "center"
      },
      box_image_wrapper: {
        position: "absolute",
        clip: "rect(0, auto, auto, 0)",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
      box_image: {
        position: "fixed",
        display: "block",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        WebkitBackgroundSize: "cover"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZXMiLCJ0eXBvX3RpdGxlIiwidGl0bGUiLCJ0eXBvX2Rlc2MiLCJhdXRob3IiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImhlaWdodCIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJveF9pbWFnZV93cmFwcGVyIiwicG9zaXRpb24iLCJjbGlwIiwidG9wIiwibGVmdCIsIndpZHRoIiwiYm94X2ltYWdlIiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxPQUFULEdBQ2Y7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFhLENBQUNDLDhDQUFELENBQTNCO0FBRUEsc0JBQ0MsOERBQUMsOENBQUQ7QUFBQSwyQkFDQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLGNBQVEsRUFBQyxVQUFsQztBQUE2QyxhQUFPLEVBQUMsTUFBckQ7QUFBNEQsbUJBQWEsRUFBQyxRQUExRTtBQUFtRixvQkFBYyxFQUFDLFFBQWxHO0FBQTJHLGVBQVMsRUFBRUosT0FBTyxDQUFDSyxVQUE5SDtBQUEwSSxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsZ0JBQVNKLEtBQUssQ0FBQ0ssTUFBZjtBQUFqQixPQUFqSjtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0MsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDLDhEQUFDLHlEQUFEO0FBQWMsVUFBRSxFQUFDLElBQWpCO0FBQXNCLFlBQUksRUFBQyxJQUEzQjtBQUFnQyxhQUFLLEVBQUMsUUFBdEM7QUFBK0MsaUJBQVMsRUFBRVAsT0FBTyxDQUFDUSxVQUFsRTtBQUFBLGtCQUErRU4sS0FBSyxDQUFDTztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFNQyw4REFBQyx5REFBRDtBQUFjLFVBQUUsRUFBQyxJQUFqQjtBQUFzQixZQUFJLEVBQUMsT0FBM0I7QUFBbUMsYUFBSyxFQUFDLFFBQXpDO0FBQWtELGlCQUFTLEVBQUVULE9BQU8sQ0FBQ1UsU0FBckU7QUFBQSxrQkFBaUZSLEtBQUssQ0FBQ1M7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0F4QndCWixPOztBQXlCeEIsU0FBU0UsU0FBVCxHQUNBO0FBQ0MsU0FBT1csNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUM3QlIsZ0JBQVUsRUFBRTtBQUNYUyxlQUFPLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FERTtBQUVYQyxpQkFBUyxFQUFFLFFBRkE7QUFHWEMsY0FBTSxFQUFFLE1BSEc7QUFJWEMsaUJBQVMsRUFBRSxJQUpBO0FBS1hDLGlCQUFTLEVBQUUsR0FMQTtBQU1YQyxxQkFBYSxFQUFFLFFBTko7QUFPWEMsc0JBQWMsRUFBRTtBQVBMLE9BRGlCO0FBVTdCQyx1QkFBaUIsRUFBRTtBQUNsQkMsZ0JBQVEsRUFBRSxVQURRO0FBRWxCQyxZQUFJLEVBQUUsd0JBRlk7QUFHbEJDLFdBQUcsRUFBRSxDQUhhO0FBSWxCQyxZQUFJLEVBQUUsQ0FKWTtBQUtsQkMsYUFBSyxFQUFFLE1BTFc7QUFNbEJWLGNBQU0sRUFBRTtBQU5VLE9BVlU7QUFrQjdCVyxlQUFTLEVBQUU7QUFDVkwsZ0JBQVEsRUFBRSxPQURBO0FBRVZNLGVBQU8sRUFBRSxPQUZDO0FBR1ZKLFdBQUcsRUFBRSxDQUhLO0FBSVZDLFlBQUksRUFBRSxDQUpJO0FBS1ZDLGFBQUssRUFBRSxNQUxHO0FBTVZWLGNBQU0sRUFBRSxNQU5FO0FBT1ZhLHVCQUFlLEVBQUUsb0JBUFA7QUFRVkMsMkJBQW1CLEVBQUUsVUFSWDtBQVNWQyxzQkFBYyxFQUFFLE9BVE47QUFVVkMsNEJBQW9CLEVBQUUsT0FWWjtBQVdWQywwQkFBa0IsRUFBRSxlQVhWO0FBWVZDLDRCQUFvQixFQUFFO0FBWlosT0FsQmtCO0FBZ0M3QjNCLGdCQUFVLEVBQUU7QUFDWDRCLGFBQUssRUFBRSxPQURJO0FBRVhDLGtCQUFVLEVBQUUsa0JBRkQ7QUFHWEMsaUJBQVMsRUFBRSxRQUhBO0FBSVhDLGtCQUFVLEVBQUU7QUFKRCxPQWhDaUI7QUFzQzdCN0IsZUFBUyxFQUFFO0FBQ1YwQixhQUFLLEVBQUUsT0FERztBQUVWQyxrQkFBVSxFQUFFLGtCQUZGO0FBR1ZDLGlCQUFTLEVBQUU7QUFIRDtBQXRDa0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBNENBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAyNWMxMmQyMGMwY2M0NDA5ZDNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Ie867CV7IqkIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjE1IFNhdCAwMToxNjoyNlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBQSUVDRSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCBTZW1hbnRpY1R5cG8gZnJvbSBcIi4uLy4uL2dsb2JhbC9TZW1hbnRpY1R5cG9cIjtcclxuXHJcbi8qKlxyXG4gKiDsh7zrsJXsiqQgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hvd0JveCgpXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHBpZWNlID0gZ2V0UmFuZG9tSXRlbShQSUVDRSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RmFkZT5cclxuXHRcdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveF9lYXN0ZXJ9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BpZWNlLmltYWdlc30pYCB9fT5cclxuXHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0PEJveCAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDNcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX3RpdGxlfT57cGllY2UudGl0bGV9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImg0XCIgZG93bj1cImJvZHkxXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudHlwb19kZXNjfT57cGllY2UuYXV0aG9yfTwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvRmFkZT5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0Ym94X2Vhc3Rlcjoge1xyXG5cdFx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcblx0XHRcdGhlaWdodDogXCI0MHZ3XCIsXHJcblx0XHRcdG1heEhlaWdodDogMTAwMCxcclxuXHRcdFx0bWluSGVpZ2h0OiA1MDAsXHJcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcblx0XHR9LFxyXG5cdFx0Ym94X2ltYWdlX3dyYXBwZXI6IHtcclxuXHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0Y2xpcDogXCJyZWN0KDAsIGF1dG8sIGF1dG8sIDApXCIsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0Ym94X2ltYWdlOiB7XHJcblx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuXHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxyXG5cdFx0XHRXZWJraXRCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb190aXRsZToge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb19kZXNjOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==