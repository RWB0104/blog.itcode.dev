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


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\index\\ShowBox.js",
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
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(theme.breakpoints.down("sm"));
  var piece = (0,_common_common__WEBPACK_IMPORTED_MODULE_2__.getRandomItem)(_common_env__WEBPACK_IMPORTED_MODULE_3__.PIECE);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_1__.Fade, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      component: "article",
      className: classes.box_easter,
      style: {
        backgroundImage: "url(".concat(piece.images, ")")
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_4__.default, {
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
      lineNumber: 34,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(ShowBox, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];
});

_c = ShowBox;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwicGllY2UiLCJnZXRSYW5kb21JdGVtIiwiUElFQ0UiLCJib3hfZWFzdGVyIiwiYmFja2dyb3VuZEltYWdlIiwiaW1hZ2VzIiwidHlwb190aXRsZSIsInRpdGxlIiwidHlwb19kZXNjIiwiYXV0aG9yIiwibWFrZVN0eWxlcyIsInBhZGRpbmciLCJzcGFjaW5nIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxPQUFULEdBQ2Y7QUFBQTs7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDJEQUFRLEVBQXRCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQyxnRUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFhLENBQUNDLDhDQUFELENBQTNCO0FBRUEsc0JBQ0MsOERBQUMsOENBQUQ7QUFBQSwyQkFDQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLGVBQVMsRUFBRVYsT0FBTyxDQUFDVyxVQUE1QztBQUF3RCxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsZ0JBQVNKLEtBQUssQ0FBQ0ssTUFBZjtBQUFqQixPQUEvRDtBQUFBLDhCQUNDLDhEQUFDLHlEQUFEO0FBQWMsVUFBRSxFQUFDLElBQWpCO0FBQXNCLFlBQUksRUFBQyxJQUEzQjtBQUFnQyxhQUFLLEVBQUMsUUFBdEM7QUFBK0MsaUJBQVMsRUFBRWIsT0FBTyxDQUFDYyxVQUFsRTtBQUFBLGtCQUErRU4sS0FBSyxDQUFDTztBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQyw4REFBQyx5REFBRDtBQUFjLFVBQUUsRUFBQyxJQUFqQjtBQUFzQixZQUFJLEVBQUMsT0FBM0I7QUFBbUMsYUFBSyxFQUFDLFFBQXpDO0FBQWtELGlCQUFTLEVBQUVmLE9BQU8sQ0FBQ2dCLFNBQXJFO0FBQUEsa0JBQWlGUixLQUFLLENBQUNTO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFRQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBeEJ3QmxCLE87VUFJVEksdUQsRUFFR0UsNEQ7OztLQU5NTixPOztBQXlCeEIsU0FBU0UsU0FBVCxHQUNBO0FBQ0MsU0FBT2lCLDZEQUFVLENBQUMsVUFBQ2hCLEtBQUQ7QUFBQSxXQUFZO0FBQzdCUyxnQkFBVSxFQUFFO0FBQ1hRLGVBQU8sRUFBRWpCLEtBQUssQ0FBQ2tCLE9BQU4sQ0FBYyxDQUFkLENBREU7QUFFWEMsNEJBQW9CLEVBQUUsT0FGWDtBQUdYQyx1QkFBZSxFQUFFLG9CQUhOO0FBSVhDLDJCQUFtQixFQUFFLFVBSlY7QUFLWEMsc0JBQWMsRUFBRSxPQUxMO0FBTVhDLDBCQUFrQixFQUFFLFFBTlQ7QUFPWEMsaUJBQVMsRUFBRSxRQVBBO0FBUVhDLGNBQU0sRUFBRSxNQVJHO0FBU1hDLGlCQUFTLEVBQUUsSUFUQTtBQVVYQyxpQkFBUyxFQUFFLEdBVkE7QUFXWEMsZUFBTyxFQUFFLE1BWEU7QUFZWEMscUJBQWEsRUFBRSxRQVpKO0FBYVhDLHNCQUFjLEVBQUU7QUFiTCxPQURpQjtBQWdCN0JsQixnQkFBVSxFQUFFO0FBQ1htQixhQUFLLEVBQUUsT0FESTtBQUVYQyxrQkFBVSxFQUFFLGtCQUZEO0FBR1hDLGlCQUFTLEVBQUUsUUFIQTtBQUlYQyxrQkFBVSxFQUFFO0FBSkQsT0FoQmlCO0FBc0I3QnBCLGVBQVMsRUFBRTtBQUNWaUIsYUFBSyxFQUFFLE9BREc7QUFFVkMsa0JBQVUsRUFBRSxrQkFGRjtBQUdWQyxpQkFBUyxFQUFFO0FBSEQ7QUF0QmtCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQTRCQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NTRjYzRkZTRlM2Q4YjJjYWExNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyHvOuwleyKpCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xNSBTYXQgMDE6MTY6MjZcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IEJveCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IFBJRUNFIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIOyHvOuwleyKpCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Qm94KClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuXHRjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuXHJcblx0Y29uc3QgcGllY2UgPSBnZXRSYW5kb21JdGVtKFBJRUNFKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGYWRlPlxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cImFydGljbGVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94X2Vhc3Rlcn0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cGllY2UuaW1hZ2VzfSlgIH19PlxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoM1wiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnR5cG9fdGl0bGV9PntwaWVjZS50aXRsZX08L1NlbWFudGljVHlwbz5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX2Rlc2N9PntwaWVjZS5hdXRob3J9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GYWRlPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRib3hfZWFzdGVyOiB7XHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuXHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjQwdndcIixcclxuXHRcdFx0bWF4SGVpZ2h0OiAxMDAwLFxyXG5cdFx0XHRtaW5IZWlnaHQ6IDUwMCxcclxuXHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXHJcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb190aXRsZToge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb19kZXNjOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==