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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      },
      box_image_wrapper: {},
      box_image: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZXMiLCJ0eXBvX3RpdGxlIiwidGl0bGUiLCJ0eXBvX2Rlc2MiLCJhdXRob3IiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImhlaWdodCIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJib3hfaW1hZ2Vfd3JhcHBlciIsImJveF9pbWFnZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxPQUFULEdBQ2Y7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFhLENBQUNDLDhDQUFELENBQTNCO0FBRUEsc0JBQ0MsOERBQUMsOENBQUQ7QUFBQSwyQkFDQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLGVBQVMsRUFBRUosT0FBTyxDQUFDSyxVQUE1QztBQUF3RCxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsZ0JBQVNKLEtBQUssQ0FBQ0ssTUFBZjtBQUFqQixPQUEvRDtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0MsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDLDhEQUFDLHlEQUFEO0FBQWMsVUFBRSxFQUFDLElBQWpCO0FBQXNCLFlBQUksRUFBQyxJQUEzQjtBQUFnQyxhQUFLLEVBQUMsUUFBdEM7QUFBK0MsaUJBQVMsRUFBRVAsT0FBTyxDQUFDUSxVQUFsRTtBQUFBLGtCQUErRU4sS0FBSyxDQUFDTztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFNQyw4REFBQyx5REFBRDtBQUFjLFVBQUUsRUFBQyxJQUFqQjtBQUFzQixZQUFJLEVBQUMsT0FBM0I7QUFBbUMsYUFBSyxFQUFDLFFBQXpDO0FBQWtELGlCQUFTLEVBQUVULE9BQU8sQ0FBQ1UsU0FBckU7QUFBQSxrQkFBaUZSLEtBQUssQ0FBQ1M7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0F4QndCWixPOztBQXlCeEIsU0FBU0UsU0FBVCxHQUNBO0FBQ0MsU0FBT1csNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUM3QlIsZ0JBQVUsRUFBRTtBQUNYUyxlQUFPLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FERTtBQUVYQyxpQkFBUyxFQUFFLFFBRkE7QUFHWEMsY0FBTSxFQUFFLE1BSEc7QUFJWEMsaUJBQVMsRUFBRSxJQUpBO0FBS1hDLGlCQUFTLEVBQUUsR0FMQTtBQU1YQyxlQUFPLEVBQUUsTUFORTtBQU9YQyxxQkFBYSxFQUFFLFFBUEo7QUFRWEMsc0JBQWMsRUFBRTtBQVJMLE9BRGlCO0FBVzdCQyx1QkFBaUIsRUFBRSxFQVhVO0FBYzdCQyxlQUFTLEVBQUU7QUFDVkMsdUJBQWUsRUFBRSxvQkFEUDtBQUVWQywyQkFBbUIsRUFBRSxVQUZYO0FBR1ZDLHNCQUFjLEVBQUUsT0FITjtBQUlWQyw0QkFBb0IsRUFBRSxPQUpaO0FBS1ZDLDBCQUFrQixFQUFFLGVBTFY7QUFNVkMsNEJBQW9CLEVBQUU7QUFOWixPQWRrQjtBQXNCN0J0QixnQkFBVSxFQUFFO0FBQ1h1QixhQUFLLEVBQUUsT0FESTtBQUVYQyxrQkFBVSxFQUFFLGtCQUZEO0FBR1hDLGlCQUFTLEVBQUUsUUFIQTtBQUlYQyxrQkFBVSxFQUFFO0FBSkQsT0F0QmlCO0FBNEI3QnhCLGVBQVMsRUFBRTtBQUNWcUIsYUFBSyxFQUFFLE9BREc7QUFFVkMsa0JBQVUsRUFBRSxrQkFGRjtBQUdWQyxpQkFBUyxFQUFFO0FBSEQ7QUE1QmtCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQWtDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjE5NTViYmRkYmMzODAwNjFiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyHvOuwleyKpCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xNSBTYXQgMDE6MTY6MjZcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IEJveCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgeyBnZXRSYW5kb21JdGVtIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IHsgUElFQ0UgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudlwiO1xyXG5pbXBvcnQgU2VtYW50aWNUeXBvIGZyb20gXCIuLi8uLi9nbG9iYWwvU2VtYW50aWNUeXBvXCI7XHJcblxyXG4vKipcclxuICog7Ie867CV7IqkIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dCb3goKVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBwaWVjZSA9IGdldFJhbmRvbUl0ZW0oUElFQ0UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZhZGU+XHJcblx0XHRcdDxCb3ggY29tcG9uZW50PVwiYXJ0aWNsZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfZWFzdGVyfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwaWVjZS5pbWFnZXN9KWAgfX0+XHJcblx0XHRcdFx0PEJveD5cclxuXHRcdFx0XHRcdDxCb3ggLz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImgzXCIgZG93bj1cImg1XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudHlwb190aXRsZX0+e3BpZWNlLnRpdGxlfTwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJib2R5MVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9fZGVzY30+e3BpZWNlLmF1dGhvcn08L1NlbWFudGljVHlwbz5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0ZhZGU+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdGJveF9lYXN0ZXI6IHtcclxuXHRcdFx0cGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiNDB2d1wiLFxyXG5cdFx0XHRtYXhIZWlnaHQ6IDEwMDAsXHJcblx0XHRcdG1pbkhlaWdodDogNTAwLFxyXG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcclxuXHRcdH0sXHJcblx0XHRib3hfaW1hZ2Vfd3JhcHBlcjoge1xyXG5cclxuXHRcdH0sXHJcblx0XHRib3hfaW1hZ2U6IHtcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXHJcblx0XHRcdFdlYmtpdEJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHRcdH0sXHJcblx0XHR0eXBvX3RpdGxlOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0eXBvX2Rlc2M6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9