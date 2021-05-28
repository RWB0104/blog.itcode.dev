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
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/globals */ "./node_modules/react-reveal/globals.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _SemanticTypo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SemanticTypo */ "./components/global/SemanticTypo.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\global\\Top.js",
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
    ssrFadeOut: true,
    display: "unset"
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
    id: "top",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    className: classes.top_wrapper,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
      position: "absolute",
      className: classes.top_image_wrapper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
        className: classes.top_image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Box, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ButtonBase, {
      className: classes.down,
      onClick: function onClick() {
        return ref.current.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.KeyboardArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Divider, {
      ref: ref,
      className: classes.divider
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
    return {
      top_wrapper: (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
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
        backgroundImage: "url(".concat(image, ")"),
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundAttachment: react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isIOS ? "scroll" : "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        OBackgroundSize: "cover",
        MozBackgroundSize: "cover"
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
        fontWeight: "bold",
        "& span": {
          display: react_device_detect__WEBPACK_IMPORTED_MODULE_6__.isIOS ? "compact" : "inline-block"
        }
      },
      desc: {
        color: "white",
        fontFamily: "둘기마요, sans-serif"
      },
      down: (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsInNzckZhZGVPdXQiLCJkaXNwbGF5IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGVsdGFZIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRvcF93cmFwcGVyIiwidG9wX2ltYWdlX3dyYXBwZXIiLCJ0b3BfaW1hZ2UiLCJ0b3BfY29udGVudCIsInRpdGxlX2VuZyIsImRvd24iLCJkaXZpZGVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJicmVha3BvaW50cyIsImNsaXAiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImlzSU9TIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIldlYmtpdEJhY2tncm91bmRTaXplIiwiT0JhY2tncm91bmRTaXplIiwiTW96QmFja2dyb3VuZFNpemUiLCJwYWRkaW5nIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNB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O0FBeUQ3QnpCLFVBQUksRUFBRTtBQUNMSyxhQUFLLEVBQUUsTUFESjtBQUVIa0IsYUFBSyxFQUFFLE9BRko7QUFHSEQsZUFBTyxFQUFFLEVBSE47QUFJSCxpQkFBUztBQUNSakIsZUFBSyxFQUFFLEVBREM7QUFFUkQsZ0JBQU0sRUFBRTtBQUZBO0FBSk4sU0FRRkQsS0FBSyxDQUFDRyxXQUFOLENBQWtCTixJQUFsQixDQUF1QixJQUF2QixDQVJFLEVBUTZCO0FBQy9CLGlCQUFTO0FBQ1JLLGVBQUssRUFBRSxFQURDO0FBRVJELGdCQUFNLEVBQUU7QUFGQTtBQURzQixPQVI3QixDQXpEeUI7QUF3RTdCSCxhQUFPLEVBQUU7QUFDUjBCLGVBQU8sRUFBRTtBQUREO0FBeEVvQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUE0RUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTNjMDUyODkwN2ExNDlkMzA5NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTIgV2VkIDE3OjEzOjU5XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGlwIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJyZWFjdC1yZXZlYWwvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbkJhc2UsIERpdmlkZXIsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBTZW1hbnRpY1R5cG8gZnJvbSBcIi4vU2VtYW50aWNUeXBvXCI7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZTog7KCc66qpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjOiDrgrTsmqlcclxuICogQHBhcmFtIHtTdHJpbmd9IGNhdGVnb3J5OiDsubTthYzqs6DrpqxcclxuICogQHBhcmFtIHtib29sZWFufSBvbmx5RW5nOiDsmIHrrLgg7KCE7JqpIO2PsO2KuCDsgqzsmqkg7Jes67aAXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3AoeyB0aXRsZSwgZGVzYywgY2F0ZWdvcnksIG9ubHlFbmcsIGltYWdlIH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKGltYWdlKTtcclxuXHJcblx0Y29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25maWcoeyBzc3JGYWRlT3V0OiB0cnVlLCBkaXNwbGF5OiBcInVuc2V0XCIgfSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PlxyXG5cdHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZSkgPT5cclxuXHRcdHtcclxuXHRcdFx0Ly8g7ZWY64uoIOyKpO2BrOuhpOydvCDqsr3smrBcclxuXHRcdFx0aWYgKGUuZGVsdGFZID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRyZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggaWQ9XCJ0b3BcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF93cmFwcGVyfT5cclxuXHRcdFx0PEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF9pbWFnZV93cmFwcGVyfT5cclxuXHRcdFx0XHQ8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BfaW1hZ2V9IC8+XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0PEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduU2VsZj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BfY29udGVudH0+XHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImgzXCIgZG93bj1cImg1XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e2NhdGVnb3J5ICYmIGBbJHtjYXRlZ29yeX1dYH08L0ZsaXA+XHJcblx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoMVwiIGRvd249XCJoM1wiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtvbmx5RW5nID8gY2xhc3Nlcy50aXRsZV9lbmcgOiBjbGFzc2VzLnRpdGxlfT5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57dGl0bGV9PC9GbGlwPlxyXG5cdFx0XHRcdDwvU2VtYW50aWNUeXBvPlxyXG5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDRcIiBkb3duPVwiaDZcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57ZGVzY308L0ZsaXA+XHJcblx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0PEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmRvd259IG9uQ2xpY2s9eygpID0+IHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSl9PlxyXG5cdFx0XHRcdDxLZXlib2FyZEFycm93RG93biAvPlxyXG5cdFx0XHQ8L0J1dHRvbkJhc2U+XHJcblxyXG5cdFx0XHQ8RGl2aWRlciByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog67Cw6rK9IOydtOuvuOyngCBVUkxcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcyhpbWFnZSlcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHRvcF93cmFwcGVyOiB7XHJcblx0XHRcdGhlaWdodDogXCJjYWxjKDEwMHZoIC0gNjRweClcIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG5cdFx0XHRcdGhlaWdodDogXCJjYWxjKDEwMHZoIC0gMTM2cHgpXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRvcF9pbWFnZV93cmFwcGVyOiB7XHJcblx0XHRcdGNsaXA6IFwicmVjdCgwLCBhdXRvLCBhdXRvLCAwKVwiLFxyXG5cdFx0XHR0b3A6IDAsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIlxyXG5cdFx0fSxcclxuXHRcdHRvcF9pbWFnZToge1xyXG5cdFx0XHRwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG5cdFx0XHRkaXNwbGF5OiBcImJsb2NrXCIsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBpc0lPUyA/IFwic2Nyb2xsXCIgOiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuXHRcdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0T0JhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdE1vekJhY2tncm91bmRTaXplOiBcImNvdmVyXCJcclxuXHRcdH0sXHJcblx0XHR0b3BfY29udGVudDoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDUwXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0aXRsZV9lbmc6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG5cdFx0XHRcIiYgc3BhblwiOiB7XHJcblx0XHRcdFx0ZGlzcGxheTogaXNJT1MgPyBcImNvbXBhY3RcIiA6IFwiaW5saW5lLWJsb2NrXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRlc2M6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIlxyXG5cdFx0fSxcclxuXHRcdGRvd246IHtcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRwYWRkaW5nOiAyMCxcclxuXHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdGhlaWdodDogNTBcclxuXHRcdFx0fSxcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRcIiYgc3ZnXCI6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzMCxcclxuXHRcdFx0XHRcdGhlaWdodDogMzBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkaXZpZGVyOiB7XHJcblx0XHRcdG9wYWNpdHk6IDBcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=