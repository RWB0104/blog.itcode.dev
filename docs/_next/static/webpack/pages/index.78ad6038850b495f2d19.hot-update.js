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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        position: "absolute",
        className: classes.box_image_wrapper,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
          position: "fixed",
          display: "block",
          className: classes.box_image,
          style: {
            backgroundImage: "url(".concat(piece.images, ")")
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        zIndex: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_4__.default, {
          up: "h3",
          down: "h5",
          align: "center",
          className: classes.typo_title,
          children: piece.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_4__.default, {
          up: "h4",
          down: "body1",
          align: "center",
          className: classes.typo_desc,
          children: piece.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
        backgroundPosition: "center center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJib3hfaW1hZ2Vfd3JhcHBlciIsImJveF9pbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlcyIsInR5cG9fdGl0bGUiLCJ0aXRsZSIsInR5cG9fZGVzYyIsImF1dGhvciIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjbGlwIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJPQmFja2dyb3VuZFNpemUiLCJNb3pCYWNrZ3JvdW5kU2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE9BQVQsR0FDZjtBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsNkRBQWEsQ0FBQ0MsOENBQUQsQ0FBM0I7QUFFQSxzQkFDQyw4REFBQyw4Q0FBRDtBQUFBLDJCQUNDLDhEQUFDLGtEQUFEO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsY0FBUSxFQUFDLFVBQWxD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N0J6QixlQUFTLEVBQUU7QUFDVnNCLGFBQUssRUFBRSxPQURHO0FBRVZDLGtCQUFVLEVBQUUsa0JBRkY7QUFHVkMsaUJBQVMsRUFBRTtBQUhEO0FBcENrQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUEwQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzhhZDYwMzg4NTBiNDk1ZjJkMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsh7zrsJXsiqQg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTUgU2F0IDAxOjE2OjI2XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IFBJRUNFIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIOyHvOuwleyKpCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Qm94KClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgcGllY2UgPSBnZXRSYW5kb21JdGVtKFBJRUNFKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGYWRlPlxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cImFydGljbGVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94X2Vhc3Rlcn0+XHJcblx0XHRcdFx0PEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveF9pbWFnZV93cmFwcGVyfT5cclxuXHRcdFx0XHRcdDxCb3ggcG9zaXRpb249XCJmaXhlZFwiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfaW1hZ2V9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BpZWNlLmltYWdlc30pYCB9fSAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25TZWxmPVwiY2VudGVyXCIgekluZGV4PXsxMH0+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDNcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX3RpdGxlfT57cGllY2UudGl0bGV9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX2Rlc2N9PntwaWVjZS5hdXRob3J9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GYWRlPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRib3hfZWFzdGVyOiB7XHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjQwdm1heFwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdG1heEhlaWdodDogMTAwMCxcclxuXHRcdFx0bWluSGVpZ2h0OiA1MDBcclxuXHRcdH0sXHJcblx0XHRib3hfaW1hZ2Vfd3JhcHBlcjoge1xyXG5cdFx0XHRjbGlwOiBcInJlY3QoMCwgYXV0bywgYXV0bywgMClcIixcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRib3hfaW1hZ2U6IHtcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuXHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGNlbnRlclwiLFxyXG5cdFx0XHRXZWJraXRCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRPQmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0TW96QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG5cdFx0fSxcclxuXHRcdHR5cG9fdGl0bGU6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdHR5cG9fZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U3R5bGU6IFwiaXRhbGljXCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=