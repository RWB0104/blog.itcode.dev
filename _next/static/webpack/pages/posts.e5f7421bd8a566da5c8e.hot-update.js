self["webpackHotUpdate_N_E"]("pages/posts",{

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
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)(theme.breakpoints.down("sm"));
  var classes = getStyles(image, isMobile);
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
      className: classes.top_image
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
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
          lineNumber: 57,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 61,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
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
          lineNumber: 65,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 70,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Divider, {
      ref: ref,
      className: classes.divider
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @param {String} image: 배경 이미지 URL
 * @param {boolean} isMobile: 모바일 여부
 *
 * @returns {JSON} 스타일 객체
 */

_s(Top, "9hIxqx1VAdt0ll5qas2U6714xKs=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery];
});

_c = Top;

function getStyles(image, isMobile) {
  var top_image = isMobile ? {
    position: "absolute",
    clip: "rect(0, auto, auto, 0)",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(".concat(image, ")"),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    WebkitBackgroundSize: "cover"
  } : {
    position: "absolute",
    clip: "rect(0, auto, auto, 0)",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url(".concat(image, ")"),
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    WebkitBackgroundSize: "cover"
  };
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
    return {
      top_wrapper: (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        height: "calc(100vh - 64px)",
        width: "100%",
        position: "relative"
      }, theme.breakpoints.down("sm"), {
        height: "calc(100vh - 112px)"
      }),
      top_image: top_image,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwidGhlbWUiLCJ1c2VUaGVtZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJyZWYiLCJ1c2VSZWYiLCJjb25maWciLCJzc3JGYWRlT3V0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGVsdGFZIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRvcF93cmFwcGVyIiwidG9wX2ltYWdlIiwidG9wX2NvbnRlbnQiLCJ0aXRsZV9lbmciLCJkaXZpZGVyIiwicG9zaXRpb24iLCJjbGlwIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJXZWJraXRCYWNrZ3JvdW5kU2l6ZSIsIm1ha2VTdHlsZXMiLCJwYWRkaW5nIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxHQUFULE9BQ2Y7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Q0w4QyxhQUFLLEVBQUUsT0FERjtBQUVMRSxrQkFBVSxFQUFFO0FBRlAsT0EzQnVCO0FBK0I3QnZDLFVBQUksRUFBRTtBQUNMMEIsYUFBSyxFQUFFLE1BREo7QUFFSFcsYUFBSyxFQUFFLE9BRko7QUFHSEQsZUFBTyxFQUFFLEVBSE47QUFJSCxpQkFBUztBQUNSVixlQUFLLEVBQUUsRUFEQztBQUVSQyxnQkFBTSxFQUFFO0FBRkE7QUFKTixTQVFGaEMsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQVJFLEVBUTZCO0FBQy9CLGlCQUFTO0FBQ1IwQixlQUFLLEVBQUUsRUFEQztBQUVSQyxnQkFBTSxFQUFFO0FBRkE7QUFEc0IsT0FSN0IsQ0EvQnlCO0FBOEM3Qk4sYUFBTyxFQUFFO0FBQ1JvQixlQUFPLEVBQUU7QUFERDtBQTlDb0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBa0RBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLmU1Zjc0MjFiZDhhNTY2ZGE1YzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjEyIFdlZCAxNzoxMzo1OVxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxpcCB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwicmVhY3QtcmV2ZWFsL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b25CYXNlLCBEaXZpZGVyLCBtYWtlU3R5bGVzLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFycm93RG93biB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi9TZW1hbnRpY1R5cG9cIjtcclxuXHJcbi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZTog7KCc66qpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjOiDrgrTsmqlcclxuICogQHBhcmFtIHtTdHJpbmd9IGNhdGVnb3J5OiDsubTthYzqs6DrpqxcclxuICogQHBhcmFtIHtib29sZWFufSBvbmx5RW5nOiDsmIHrrLgg7KCE7JqpIO2PsO2KuCDsgqzsmqkg7Jes67aAXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3AoeyB0aXRsZSwgZGVzYywgY2F0ZWdvcnksIG9ubHlFbmcsIGltYWdlIH0pXHJcbntcclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoaW1hZ2UsIGlzTW9iaWxlKTtcclxuXHJcblx0Y29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25maWcoeyBzc3JGYWRlT3V0OiB0cnVlIH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT5cclxuXHR7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGUpID0+XHJcblx0XHR7XHJcblx0XHRcdC8vIO2VmOuLqCDsiqTtgazroaTsnbwg6rK97JqwXHJcblx0XHRcdGlmIChlLmRlbHRhWSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0cmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGlkPVwidG9wXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF93cmFwcGVyfT5cclxuXHRcdFx0PEJveCBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2ltYWdlfSAvPlxyXG5cclxuXHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduU2VsZj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BfY29udGVudH0+XHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImgzXCIgZG93bj1cImg1XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e2NhdGVnb3J5ICYmIGBbJHtjYXRlZ29yeX1dYH08L0ZsaXA+XHJcblx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoMVwiIGRvd249XCJoM1wiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtvbmx5RW5nID8gY2xhc3Nlcy50aXRsZV9lbmcgOiBjbGFzc2VzLnRpdGxlfT5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57dGl0bGV9PC9GbGlwPlxyXG5cdFx0XHRcdDwvU2VtYW50aWNUeXBvPlxyXG5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDZcIiBkb3duPVwiaDRcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57ZGVzY308L0ZsaXA+XHJcblx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0PEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmRvd259IG9uQ2xpY2s9eygpID0+IHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSl9PlxyXG5cdFx0XHRcdDxLZXlib2FyZEFycm93RG93biAvPlxyXG5cdFx0XHQ8L0J1dHRvbkJhc2U+XHJcblxyXG5cdFx0XHQ8RGl2aWRlciByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog67Cw6rK9IOydtOuvuOyngCBVUkxcclxuICogQHBhcmFtIHtib29sZWFufSBpc01vYmlsZTog66qo67CU7J28IOyXrOu2gFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKGltYWdlLCBpc01vYmlsZSlcclxue1xyXG5cdGNvbnN0IHRvcF9pbWFnZSA9IGlzTW9iaWxlID8ge1xyXG5cdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdGNsaXA6IFwicmVjdCgwLCBhdXRvLCBhdXRvLCAwKVwiLFxyXG5cdFx0dG9wOiAwLFxyXG5cdFx0bGVmdDogMCxcclxuXHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcclxuXHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxyXG5cdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG5cdH0gOiB7XHJcblx0XHRwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG5cdFx0Y2xpcDogXCJyZWN0KDAsIGF1dG8sIGF1dG8sIDApXCIsXHJcblx0XHR0b3A6IDAsXHJcblx0XHRsZWZ0OiAwLFxyXG5cdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG5cdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcblx0XHRXZWJraXRCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dG9wX3dyYXBwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSA2NHB4KVwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMTJweClcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dG9wX2ltYWdlOiB0b3BfaW1hZ2UsXHJcblx0XHR0b3BfY29udGVudDoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDUwXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0aXRsZV9lbmc6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0ZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiXHJcblx0XHR9LFxyXG5cdFx0ZG93bjoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDIwLFxyXG5cdFx0XHRcIiYgc3ZnXCI6IHtcclxuXHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0aGVpZ2h0OiA1MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG5cdFx0XHRcdFwiJiBzdmdcIjoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRpdmlkZXI6IHtcclxuXHRcdFx0b3BhY2l0eTogMFxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==