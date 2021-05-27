self["webpackHotUpdate_N_E"]("pages/projects",{

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
        width: "100%",
        position: "relative"
      }, theme.breakpoints.down("sm"), {
        height: "calc(100vh - 136px)"
      }),
      top_image: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsInNzckZhZGVPdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidG9wX3dyYXBwZXIiLCJ0b3BfaW1hZ2UiLCJ0b3BfY29udGVudCIsInRpdGxlX2VuZyIsImRvd24iLCJkaXZpZGVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbiIsImJyZWFrcG9pbnRzIiwiY2xpcCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImJhY2tncm91bmRQb3NpdGlvbiIsIldlYmtpdEJhY2tncm91bmRTaXplIiwicGFkZGluZyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsR0FBVCxPQUNmO0FBQUE7O0FBQUEsTUFEOEJDLEtBQzlCLFFBRDhCQSxLQUM5QjtB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RSxRQVpWO0FBYVZDLDRCQUFvQixFQUFFO0FBYlosT0FUa0I7QUF3QjdCbkIsaUJBQVcsRUFBRTtBQUNaTyxhQUFLLEVBQUUsTUFESztBQUVaRCxjQUFNLEVBQUUsTUFGSTtBQUdaYyxlQUFPLEVBQUU7QUFIRyxPQXhCZ0I7QUE2QjdCM0MsV0FBSyxFQUFFO0FBQ040QyxhQUFLLEVBQUUsT0FERDtBQUVOQyxvQkFBWSxFQUFFLEVBRlI7QUFHTkMsa0JBQVUsRUFBRSxrQkFITjtBQUlOQyxrQkFBVSxFQUFFO0FBSk4sT0E3QnNCO0FBbUM3QnZCLGVBQVMsRUFBRTtBQUNWb0IsYUFBSyxFQUFFLE9BREc7QUFFVkMsb0JBQVksRUFBRSxFQUZKO0FBR1ZDLGtCQUFVLEVBQUUsd0JBSEY7QUFJVkMsa0JBQVUsRUFBRTtBQUpGLE9BbkNrQjtBQXlDN0I5QyxVQUFJLEVBQUU7QUFDTDJDLGFBQUssRUFBRSxPQURGO0FBRUxFLGtCQUFVLEVBQUU7QUFGUCxPQXpDdUI7QUE2QzdCckIsVUFBSSxFQUFFO0FBQ0xLLGFBQUssRUFBRSxNQURKO0FBRUhjLGFBQUssRUFBRSxPQUZKO0FBR0hELGVBQU8sRUFBRSxFQUhOO0FBSUgsaUJBQVM7QUFDUmIsZUFBSyxFQUFFLEVBREM7QUFFUkQsZ0JBQU0sRUFBRTtBQUZBO0FBSk4sU0FRRkQsS0FBSyxDQUFDSSxXQUFOLENBQWtCUCxJQUFsQixDQUF1QixJQUF2QixDQVJFLEVBUTZCO0FBQy9CLGlCQUFTO0FBQ1JLLGVBQUssRUFBRSxFQURDO0FBRVJELGdCQUFNLEVBQUU7QUFGQTtBQURzQixPQVI3QixDQTdDeUI7QUE0RDdCSCxhQUFPLEVBQUU7QUFDUnNCLGVBQU8sRUFBRTtBQUREO0FBNURvQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFnRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuYTIxMGI4Y2Y0YmI4ZmU1ZGQzZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTIgV2VkIDE3OjEzOjU5XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGlwIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJyZWFjdC1yZXZlYWwvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbkJhc2UsIERpdmlkZXIsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBTZW1hbnRpY1R5cG8gZnJvbSBcIi4vU2VtYW50aWNUeXBvXCI7XHJcblxyXG4vKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IOygnOuqqVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzYzog64K07JqpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeTog7Lm07YWM6rOg66asXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb25seUVuZzog7JiB66y4IOyghOyaqSDtj7Dtirgg7IKs7JqpIOyXrOu2gFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2U6IOydtOuvuOyngCBVUkxcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wKHsgdGl0bGUsIGRlc2MsIGNhdGVnb3J5LCBvbmx5RW5nLCBpbWFnZSB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcyhpbWFnZSk7XHJcblxyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0Y29uZmlnKHsgc3NyRmFkZU91dDogdHJ1ZSB9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+XHJcblx0e1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChlKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHQvLyDtlZjri6gg7Iqk7YGs66Gk7J28IOqyveyasFxyXG5cdFx0XHRpZiAoZS5kZWx0YVkgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBpZD1cInRvcFwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3Bfd3JhcHBlcn0+XHJcblx0XHRcdDxCb3g+XHJcblx0XHRcdFx0PEJveCBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2ltYWdlfSAvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnblNlbGY9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2NvbnRlbnR9PlxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoM1wiIGRvd249XCJoNVwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPntjYXRlZ29yeSAmJiBgWyR7Y2F0ZWdvcnl9XWB9PC9GbGlwPlxyXG5cdFx0XHRcdDwvU2VtYW50aWNUeXBvPlxyXG5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDFcIiBkb3duPVwiaDNcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17b25seUVuZyA/IGNsYXNzZXMudGl0bGVfZW5nIDogY2xhc3Nlcy50aXRsZX0+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e3RpdGxlfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImg2XCIgZG93bj1cImg0XCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e2Rlc2N9PC9GbGlwPlxyXG5cdFx0XHRcdDwvU2VtYW50aWNUeXBvPlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCdXR0b25CYXNlIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dufSBvbkNsaWNrPXsoKSA9PiByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pfT5cclxuXHRcdFx0XHQ8S2V5Ym9hcmRBcnJvd0Rvd24gLz5cclxuXHRcdFx0PC9CdXR0b25CYXNlPlxyXG5cclxuXHRcdFx0PERpdmlkZXIgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2U6IOuwsOqyvSDsnbTrr7jsp4AgVVJMXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoaW1hZ2UpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHR0b3Bfd3JhcHBlcjoge1xyXG5cdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDY0cHgpXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0cG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDEzNnB4KVwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0b3BfaW1hZ2U6IHtcclxuXHRcdFx0cG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuXHRcdFx0Y2xpcDogXCJyZWN0KDAsIGF1dG8sIGF1dG8sIDApXCIsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuXHRcdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIlxyXG5cdFx0fSxcclxuXHRcdHRvcF9jb250ZW50OiB7XHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0cGFkZGluZzogNTBcclxuXHRcdH0sXHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDYwLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdHRpdGxlX2VuZzoge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IDYwLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIkJsYWNrc3dvcmQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHRkZXNjOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCJcclxuXHRcdH0sXHJcblx0XHRkb3duOiB7XHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0cGFkZGluZzogMjAsXHJcblx0XHRcdFwiJiBzdmdcIjoge1xyXG5cdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRoZWlnaHQ6IDUwXHJcblx0XHRcdH0sXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGl2aWRlcjoge1xyXG5cdFx0XHRvcGFjaXR5OiAwXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9