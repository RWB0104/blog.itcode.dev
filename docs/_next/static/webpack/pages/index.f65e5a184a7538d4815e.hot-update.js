webpackHotUpdate_N_E("pages/index",{

/***/ "./components/section/index/ShowBox.js":
/*!*********************************************!*\
  !*** ./components/section/index/ShowBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/env */ "./common/env.js");
/* harmony import */ var _global_SemanticTypo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/SemanticTypo */ "./components/global/SemanticTypo.js");

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
  var piece = Object(_common_common__WEBPACK_IMPORTED_MODULE_4__["getRandomItem"])(_common_env__WEBPACK_IMPORTED_MODULE_5__["PIECE"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_reveal__WEBPACK_IMPORTED_MODULE_3__["Fade"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      component: "article",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      className: classes.box_easter,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        position: "absolute",
        className: classes.box_image_wrapper,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        zIndex: 10,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_6__["default"], {
          up: "h3",
          down: "h5",
          align: "center",
          className: classes.typo_title,
          children: piece.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

function getStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return {
      box_easter: {
        padding: theme.spacing(3),
        textAlign: "center",
        height: "100vh",
        width: "100%"
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
        backgroundAttachment: react_device_detect__WEBPACK_IMPORTED_MODULE_2__["isIOS"] ? "scroll" : "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        OBackgroundSize: "cover",
        MozBackgroundSize: "cover"
      },
      typo_title: {
        color: "white",
        fontStyle: "italic",
        fontWeight: "bold"
      },
      typo_desc: {
        color: "white",
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJib3hfaW1hZ2Vfd3JhcHBlciIsImJveF9pbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlcyIsInR5cG9fdGl0bGUiLCJ0aXRsZSIsInR5cG9fZGVzYyIsImF1dGhvciIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGlwIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiaXNJT1MiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJPQmFja2dyb3VuZFNpemUiLCJNb3pCYWNrZ3JvdW5kU2l6ZSIsImNvbG9yIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsT0FBVCxHQUNmO0FBQ0MsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxvRUFBYSxDQUFDQyxpREFBRCxDQUEzQjtBQUVBLHNCQUNDLHFFQUFDLGlEQUFEO0FBQUEsMkJBQ0MscUVBQUMscURBQUQ7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixjQUFRLEVBQUMsVUFBbEM7QUFB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RSxPQURHO0FBRVZDLGlCQUFTLEVBQUU7QUFGRDtBQWxDa0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBdUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY2NWU1YTE4NGE3NTM4ZDQ4MTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Ie867CV7IqkIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjE1IFNhdCAwMToxNjoyNlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IFBJRUNFIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIOyHvOuwleyKpCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Qm94KClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgcGllY2UgPSBnZXRSYW5kb21JdGVtKFBJRUNFKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGYWRlPlxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cImFydGljbGVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94X2Vhc3Rlcn0+XHJcblx0XHRcdFx0PEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveF9pbWFnZV93cmFwcGVyfT5cclxuXHRcdFx0XHRcdDxCb3ggcG9zaXRpb249XCJmaXhlZFwiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfaW1hZ2V9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BpZWNlLmltYWdlc30pYCB9fSAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25TZWxmPVwiY2VudGVyXCIgekluZGV4PXsxMH0+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDNcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX3RpdGxlfT57cGllY2UudGl0bGV9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX2Rlc2N9PntwaWVjZS5hdXRob3J9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GYWRlPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRib3hfZWFzdGVyOiB7XHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMHZoXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGJveF9pbWFnZV93cmFwcGVyOiB7XHJcblx0XHRcdGNsaXA6IFwicmVjdCgwLCBhdXRvLCBhdXRvLCAwKVwiLFxyXG5cdFx0XHR0b3A6IDAsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdGJveF9pbWFnZToge1xyXG5cdFx0XHR0b3A6IDAsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBpc0lPUyA/IFwic2Nyb2xsXCIgOiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0T0JhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdE1vekJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHRcdH0sXHJcblx0XHR0eXBvX3RpdGxlOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0eXBvX2Rlc2M6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9