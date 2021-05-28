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
  console.dir(isIOS);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1Nob3dCb3guanMiXSwibmFtZXMiOlsiU2hvd0JveCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJwaWVjZSIsImdldFJhbmRvbUl0ZW0iLCJQSUVDRSIsImJveF9lYXN0ZXIiLCJib3hfaW1hZ2Vfd3JhcHBlciIsImJveF9pbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlcyIsInR5cG9fdGl0bGUiLCJ0aXRsZSIsInR5cG9fZGVzYyIsImF1dGhvciIsImlzSU9TIiwiY29uc29sZSIsImRpciIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhZGRpbmciLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJjbGlwIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIldlYmtpdEJhY2tncm91bmRTaXplIiwiT0JhY2tncm91bmRTaXplIiwiTW96QmFja2dyb3VuZFNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxPQUFULEdBQ2Y7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDZEQUFhLENBQUNDLDhDQUFELENBQTNCO0FBRUEsc0JBQ0MsOERBQUMsOENBQUQ7QUFBQSwyQkFDQyw4REFB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QUFpQixFQUFFO0FBYlQsT0FoQmtCO0FBK0I3QjNCLGdCQUFVLEVBQUU7QUFDWDRCLGFBQUssRUFBRSxPQURJO0FBRVhDLGtCQUFVLEVBQUUsa0JBRkQ7QUFHWEMsaUJBQVMsRUFBRSxRQUhBO0FBSVhDLGtCQUFVLEVBQUU7QUFKRCxPQS9CaUI7QUFxQzdCN0IsZUFBUyxFQUFFO0FBQ1YwQixhQUFLLEVBQUUsT0FERztBQUVWQyxrQkFBVSxFQUFFLGtCQUZGO0FBR1ZDLGlCQUFTLEVBQUU7QUFIRDtBQXJDa0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBMkNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmOTU2MTYyZWVlZWFhMTRjNzE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Ie867CV7IqkIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjE1IFNhdCAwMToxNjoyNlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IFBJRUNFIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIOyHvOuwleyKpCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93Qm94KClcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgcGllY2UgPSBnZXRSYW5kb21JdGVtKFBJRUNFKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGYWRlPlxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cImFydGljbGVcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94X2Vhc3Rlcn0+XHJcblx0XHRcdFx0PEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveF9pbWFnZV93cmFwcGVyfT5cclxuXHRcdFx0XHRcdDxCb3ggcG9zaXRpb249XCJmaXhlZFwiIGRpc3BsYXk9XCJibG9ja1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hfaW1hZ2V9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3BpZWNlLmltYWdlc30pYCB9fSAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25TZWxmPVwiY2VudGVyXCIgekluZGV4PXsxMH0+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDNcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX3RpdGxlfT57cGllY2UudGl0bGV9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX2Rlc2N9PntwaWVjZS5hdXRob3J9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9GYWRlPlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcyhpc0lPUylcclxue1xyXG5cdGNvbnNvbGUuZGlyKGlzSU9TKTtcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRib3hfZWFzdGVyOiB7XHJcblx0XHRcdHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjQwdm1heFwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdG1heEhlaWdodDogMTAwMCxcclxuXHRcdFx0bWluSGVpZ2h0OiA1MDBcclxuXHRcdH0sXHJcblx0XHRib3hfaW1hZ2Vfd3JhcHBlcjoge1xyXG5cdFx0XHRjbGlwOiBcInJlY3QoMCwgYXV0bywgYXV0bywgMClcIixcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHRib3hfaW1hZ2U6IHtcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNSlcIixcclxuXHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQXR0YWNobWVudDogaXNJT1MgPyBcInNjcm9sbFwiIDogXCJmaXhlZFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcblx0XHRcdFdlYmtpdEJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdE9CYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRNb3pCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb190aXRsZToge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250U3R5bGU6IFwiaXRhbGljXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0dHlwb19kZXNjOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==