self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/global/Top.js":
/*!**********************************!*\
  !*** ./components/global/Top.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Top; }
/* harmony export */ });
/* harmony import */ var C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/globals */ "./node_modules/react-reveal/globals.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _SemanticTypo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\global\\Top.js",
    _s = $RefreshSig$();

/**
 * Top 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.12 Wed 17:13:59
 */
// 라이브러리 모듈






/**
 * Top 컴포넌트 JSX 반환 함수
 *
 * @param {String} title: 제목
 * @param {String} desc: 내용
 * @param {String} category: 카테고리
 * @param {boolean} onlyEng: 영문 전용 폰트 사용 여부
 * @param {String} image: 이미지 URL
 *
 * @returns {JSX} JSX 객체
 */

function Top(_ref) {
  _s();

  var title = _ref.title,
      desc = _ref.desc,
      category = _ref.category,
      onlyEng = _ref.onlyEng,
      image = _ref.image;
  var classes = getStyles(image);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react_reveal_globals__WEBPACK_IMPORTED_MODULE_4__.default)({
    ssrFadeOut: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    document.getElementById("top").addEventListener("wheel", function (e) {
      // 하단 스크롤일 경우
      if (e.deltaY > 0) {
        e.preventDefault();
        ref.current.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
    id: "top",
    display: "flex",
    flexDirection: "column",
    className: classes.top_wrapper,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignSelf: "center",
      className: classes.top_content,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__.default, {
        up: "h3",
        down: "h5",
        align: "center",
        className: classes.desc,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: category && "[".concat(category, "]")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__.default, {
        up: "h1",
        down: "h3",
        align: "center",
        className: onlyEng ? classes.title_eng : classes.title,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__.default, {
        up: "h6",
        down: "h4",
        align: "center",
        className: classes.desc,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ButtonBase, {
      className: classes.down,
      onClick: function onClick() {
        return ref.current.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__.KeyboardArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Divider, {
      ref: ref,
      className: classes.divider
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @param {String} image: 배경 이미지 URL
 *
 * @returns {JSON} 스타일 객체
 */

_s(Top, "8uVE59eA/r6b92xF80p7sH8rXLk=");

_c = Top;

function getStyles(image) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
    return {
      top_wrapper: (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        height: "calc(100vh - 64px)",
        backgroundImage: "url(".concat(image, ")"),
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover"
      }, theme.breakpoints.down("sm"), {
        height: "calc(100vh - 112px)"
      }),
      top_content: {
        width: "100%",
        height: "100%",
        padding: 50
      },
      title: {
        color: "white",
        marginBottom: 60,
        fontFamily: "둘기마요, sans-serif",
        fontWeight: "bold"
      },
      title_eng: {
        color: "white",
        marginBottom: 60,
        fontFamily: "Blacksword, sans-serif",
        fontWeight: "bold"
      },
      desc: {
        color: "white",
        fontFamily: "둘기마요, sans-serif"
      },
      down: (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        width: "100%",
        color: "white",
        padding: 20,
        "& svg": {
          width: 50,
          height: 50
        }
      }, theme.breakpoints.down("sm"), {
        "& svg": {
          width: 30,
          height: 30
        }
      }),
      divider: {
        opacity: 0
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "Top");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsInNzckZhZGVPdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidG9wX3dyYXBwZXIiLCJ0b3BfY29udGVudCIsInRpdGxlX2VuZyIsImRvd24iLCJkaXZpZGVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJXZWJraXRCYWNrZ3JvdW5kU2l6ZSIsImJyZWFrcG9pbnRzIiwid2lkdGgiLCJwYWRkaW5nIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxHQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQUQ4QkMsS0FDOUIsUUFEOEJBLEtBQzlCO0FBQUEsTUFEcUNDLElBQ3JDLFFBRHFDQSxJQUNyQztBQUFBLE1BRDJDQyxR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SSxFQUFFO0FBQ0xzQyxhQUFLLEVBQUUsT0FERjtBQUVMRSxrQkFBVSxFQUFFO0FBRlAsT0EvQnVCO0FBbUM3QmpCLFVBQUksRUFBRTtBQUNMYSxhQUFLLEVBQUUsTUFESjtBQUVIRSxhQUFLLEVBQUUsT0FGSjtBQUdIRCxlQUFPLEVBQUUsRUFITjtBQUlILGlCQUFTO0FBQ1JELGVBQUssRUFBRSxFQURDO0FBRVJULGdCQUFNLEVBQUU7QUFGQTtBQUpOLFNBUUZELEtBQUssQ0FBQ1MsV0FBTixDQUFrQlosSUFBbEIsQ0FBdUIsSUFBdkIsQ0FSRSxFQVE2QjtBQUMvQixpQkFBUztBQUNSYSxlQUFLLEVBQUUsRUFEQztBQUVSVCxnQkFBTSxFQUFFO0FBRkE7QUFEc0IsT0FSN0IsQ0FuQ3lCO0FBa0Q3QkgsYUFBTyxFQUFFO0FBQ1JrQixlQUFPLEVBQUU7QUFERDtBQWxEb0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBc0RBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkY2I4NWQ3MDk5ODAwYTlmNGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjEyIFdlZCAxNzoxMzo1OVxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxpcCB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwicmVhY3QtcmV2ZWFsL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b25CYXNlLCBEaXZpZGVyLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkQXJyb3dEb3duIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgU2VtYW50aWNUeXBvIGZyb20gXCIuL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIFRvcCDsu7Ttj6zrhIztirggSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlOiDsoJzrqqlcclxuICogQHBhcmFtIHtTdHJpbmd9IGRlc2M6IOuCtOyaqVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2F0ZWdvcnk6IOy5tO2FjOqzoOumrFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9ubHlFbmc6IOyYgeusuCDsoITsmqkg7Y+w7Yq4IOyCrOyaqSDsl6zrtoBcclxuICogQHBhcmFtIHtTdHJpbmd9IGltYWdlOiDsnbTrr7jsp4AgVVJMXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcCh7IHRpdGxlLCBkZXNjLCBjYXRlZ29yeSwgb25seUVuZywgaW1hZ2UgfSlcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoaW1hZ2UpO1xyXG5cclxuXHRjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbmZpZyh7IHNzckZhZGVPdXQ6IHRydWUgfSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PlxyXG5cdHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZSkgPT5cclxuXHRcdHtcclxuXHRcdFx0Ly8g7ZWY64uoIOyKpO2BrOuhpOydvCDqsr3smrBcclxuXHRcdFx0aWYgKGUuZGVsdGFZID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRyZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggaWQ9XCJ0b3BcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX3dyYXBwZXJ9PlxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25TZWxmPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF9jb250ZW50fT5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDNcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57Y2F0ZWdvcnkgJiYgYFske2NhdGVnb3J5fV1gfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImgxXCIgZG93bj1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e29ubHlFbmcgPyBjbGFzc2VzLnRpdGxlX2VuZyA6IGNsYXNzZXMudGl0bGV9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPnt0aXRsZX08L0ZsaXA+XHJcblx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNlwiIGRvd249XCJoNFwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPntkZXNjfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuZG93bn0gb25DbGljaz17KCkgPT4gcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX0+XHJcblx0XHRcdFx0PEtleWJvYXJkQXJyb3dEb3duIC8+XHJcblx0XHRcdDwvQnV0dG9uQmFzZT5cclxuXHJcblx0XHRcdDxEaXZpZGVyIHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGltYWdlOiDrsLDqsr0g7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKGltYWdlKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dG9wX3dyYXBwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSA2NHB4KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuXHRcdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDExMnB4KVwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0b3BfY29udGVudDoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDUwXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0aXRsZV9lbmc6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0ZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiXHJcblx0XHR9LFxyXG5cdFx0ZG93bjoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDIwLFxyXG5cdFx0XHRcIiYgc3ZnXCI6IHtcclxuXHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0aGVpZ2h0OiA1MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG5cdFx0XHRcdFwiJiBzdmdcIjoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRpdmlkZXI6IHtcclxuXHRcdFx0b3BhY2l0eTogMFxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==