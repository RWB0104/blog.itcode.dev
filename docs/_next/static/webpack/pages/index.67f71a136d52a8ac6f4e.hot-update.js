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
    position: "relative",
    display: "flex",
    flexDirection: "column",
    className: classes.top_wrapper,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
      position: "absolute",
      className: classes.top_image_wrapper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Box, {
        className: classes.top_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
          lineNumber: 56,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
          lineNumber: 60,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SemanticTypo__WEBPACK_IMPORTED_MODULE_5__.default, {
        up: "h4",
        down: "h6",
        align: "center",
        className: classes.desc,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
        lineNumber: 69,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Divider, {
      ref: ref,
      className: classes.divider
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
        width: "100%"
      }, theme.breakpoints.down("sm"), {
        height: "calc(100vh - 136px)"
      }),
      top_image_wrapper: {
        clip: "rect(0, auto, auto, 0)",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
      top_image: {
        position: "fixed",
        display: "block",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundImage: "url(".concat(image, ")"),
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        WebkitBackgroundSize: "cover"
      },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsInNzckZhZGVPdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidG9wX3dyYXBwZXIiLCJ0b3BfaW1hZ2Vfd3JhcHBlciIsInRvcF9pbWFnZSIsInRvcF9jb250ZW50IiwidGl0bGVfZW5nIiwiZG93biIsImRpdmlkZXIiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwiY2xpcCIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImJhY2tncm91bmRQb3NpdGlvbiIsIldlYmtpdEJhY2tncm91bmRTaXplIiwicGFkZGluZyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsR0FBVCxP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ZUFBSyxFQUFFLEVBREM7QUFFUkQsZ0JBQU0sRUFBRTtBQUZBO0FBRHNCLE9BUjdCLENBcER5QjtBQW1FN0JILGFBQU8sRUFBRTtBQUNSd0IsZUFBTyxFQUFFO0FBREQ7QUFuRW9CLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQXVFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42N2Y3MWExMzZkNTJhOGFjNmY0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRvcCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xMiBXZWQgMTc6MTM6NTlcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsaXAgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcInJlYWN0LXJldmVhbC9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uQmFzZSwgRGl2aWRlciwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFycm93RG93biB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi9TZW1hbnRpY1R5cG9cIjtcclxuXHJcbi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZTog7KCc66qpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjOiDrgrTsmqlcclxuICogQHBhcmFtIHtTdHJpbmd9IGNhdGVnb3J5OiDsubTthYzqs6DrpqxcclxuICogQHBhcmFtIHtib29sZWFufSBvbmx5RW5nOiDsmIHrrLgg7KCE7JqpIO2PsO2KuCDsgqzsmqkg7Jes67aAXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3AoeyB0aXRsZSwgZGVzYywgY2F0ZWdvcnksIG9ubHlFbmcsIGltYWdlIH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKGltYWdlKTtcclxuXHJcblx0Y29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25maWcoeyBzc3JGYWRlT3V0OiB0cnVlIH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT5cclxuXHR7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGUpID0+XHJcblx0XHR7XHJcblx0XHRcdC8vIO2VmOuLqCDsiqTtgazroaTsnbwg6rK97JqwXHJcblx0XHRcdGlmIChlLmRlbHRhWSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0cmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGlkPVwidG9wXCIgcG9zaXRpb249XCJyZWxhdGl2ZVwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3Bfd3JhcHBlcn0+XHJcblx0XHRcdDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BfaW1hZ2Vfd3JhcHBlcn0+XHJcblx0XHRcdFx0PEJveCBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2ltYWdlfSAvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnblNlbGY9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2NvbnRlbnR9PlxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoM1wiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPntjYXRlZ29yeSAmJiBgWyR7Y2F0ZWdvcnl9XWB9PC9GbGlwPlxyXG5cdFx0XHRcdDwvU2VtYW50aWNUeXBvPlxyXG5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDFcIiBkb3duPVwiaDNcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17b25seUVuZyA/IGNsYXNzZXMudGl0bGVfZW5nIDogY2xhc3Nlcy50aXRsZX0+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e3RpdGxlfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImg0XCIgZG93bj1cImg2XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e2Rlc2N9PC9GbGlwPlxyXG5cdFx0XHRcdDwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCdXR0b25CYXNlIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dufSBvbkNsaWNrPXsoKSA9PiByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pfT5cclxuXHRcdFx0XHQ8S2V5Ym9hcmRBcnJvd0Rvd24gLz5cclxuXHRcdFx0PC9CdXR0b25CYXNlPlxyXG5cclxuXHRcdFx0PERpdmlkZXIgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2U6IOuwsOqyvSDsnbTrr7jsp4AgVVJMXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoaW1hZ2UpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHR0b3Bfd3JhcHBlcjoge1xyXG5cdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDY0cHgpXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDEzNnB4KVwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0b3BfaW1hZ2Vfd3JhcHBlcjoge1xyXG5cdFx0XHRjbGlwOiBcInJlY3QoMCwgYXV0bywgYXV0bywgMClcIixcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCJcclxuXHRcdH0sXHJcblx0XHR0b3BfaW1hZ2U6IHtcclxuXHRcdFx0cG9zaXRpb246IFwiZml4ZWRcIixcclxuXHRcdFx0ZGlzcGxheTogXCJibG9ja1wiLFxyXG5cdFx0XHR0b3A6IDAsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0b2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcblx0XHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZEF0dGFjaG1lbnQ6IFwiZml4ZWRcIixcclxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0XHRXZWJraXRCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblx0XHR9LFxyXG5cdFx0dG9wX2NvbnRlbnQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRwYWRkaW5nOiA1MFxyXG5cdFx0fSxcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogNjAsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0dGl0bGVfZW5nOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogNjAsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiQmxhY2tzd29yZCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdGRlc2M6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIlxyXG5cdFx0fSxcclxuXHRcdGRvd246IHtcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRwYWRkaW5nOiAyMCxcclxuXHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdGhlaWdodDogNTBcclxuXHRcdFx0fSxcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRcIiYgc3ZnXCI6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzMCxcclxuXHRcdFx0XHRcdGhlaWdodDogMzBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkaXZpZGVyOiB7XHJcblx0XHRcdG9wYWNpdHk6IDBcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=