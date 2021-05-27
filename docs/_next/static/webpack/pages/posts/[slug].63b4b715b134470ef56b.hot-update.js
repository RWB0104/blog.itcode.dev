self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
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
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery)(theme.breakpoints.down("sm"));
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
    id: "top",
    display: "flex",
    flexDirection: "column",
    className: classes.top_wrapper,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignSelf: "center",
      className: classes.top_content,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: isMobile ? "h5" : "h3",
        align: "center",
        className: classes.desc,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: category && "[".concat(category, "]")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: isMobile ? "h3" : "h1",
        align: "center",
        className: onlyEng ? classes.title_eng : classes.title,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: isMobile ? "h6" : "h4",
        align: "center",
        className: classes.desc,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Flip, {
          left: true,
          cascade: true,
          children: desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ButtonBase, {
      className: classes.down,
      onClick: function onClick() {
        return ref.current.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__.KeyboardArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      ref: ref,
      className: classes.divider
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
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

_s(Top, "9hIxqx1VAdt0ll5qas2U6714xKs=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];
});

_c = Top;

function getStyles(image) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJyZWYiLCJ1c2VSZWYiLCJjb25maWciLCJzc3JGYWRlT3V0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGVsdGFZIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRvcF93cmFwcGVyIiwidG9wX2NvbnRlbnQiLCJ0aXRsZV9lbmciLCJkaXZpZGVyIiwibWFrZVN0eWxlcyIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiV2Via2l0QmFja2dyb3VuZFNpemUiLCJ3aWR0aCIsInBhZGRpbmciLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLEdBQVQsT0FDZjtBQUFBOztBQUFBLE1BRDhCQyxLQUM5QixRQUQ4QkEsS0FDOUI7QUFBQSxNQURxQ0Ms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QUFVLEVBQUUsa0JBSE47QUFJTkMsa0JBQVUsRUFBRTtBQUpOLE9BbkJzQjtBQXlCN0JoQixlQUFTLEVBQUU7QUFDVmEsYUFBSyxFQUFFLE9BREc7QUFFVkMsb0JBQVksRUFBRSxFQUZKO0FBR1ZDLGtCQUFVLEVBQUUsd0JBSEY7QUFJVkMsa0JBQVUsRUFBRTtBQUpGLE9BekJrQjtBQStCN0I1QyxVQUFJLEVBQUU7QUFDTHlDLGFBQUssRUFBRSxPQURGO0FBRUxFLGtCQUFVLEVBQUU7QUFGUCxPQS9CdUI7QUFtQzdCaEMsVUFBSSxFQUFFO0FBQ0w0QixhQUFLLEVBQUUsTUFESjtBQUVIRSxhQUFLLEVBQUUsT0FGSjtBQUdIRCxlQUFPLEVBQUUsRUFITjtBQUlILGlCQUFTO0FBQ1JELGVBQUssRUFBRSxFQURDO0FBRVJSLGdCQUFNLEVBQUU7QUFGQTtBQUpOLFNBUUZ6QixLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBUkUsRUFRNkI7QUFDL0IsaUJBQVM7QUFDUjRCLGVBQUssRUFBRSxFQURDO0FBRVJSLGdCQUFNLEVBQUU7QUFGQTtBQURzQixPQVI3QixDQW5DeUI7QUFrRDdCRixhQUFPLEVBQUU7QUFDUmdCLGVBQU8sRUFBRTtBQUREO0FBbERvQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFzREEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjYzYjRiNzE1YjEzNDQ3MGVmNTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjEyIFdlZCAxNzoxMzo1OVxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmxpcCB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwicmVhY3QtcmV2ZWFsL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b25CYXNlLCBEaXZpZGVyLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZEFycm93RG93biB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZTog7KCc66qpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjOiDrgrTsmqlcclxuICogQHBhcmFtIHtTdHJpbmd9IGNhdGVnb3J5OiDsubTthYzqs6DrpqxcclxuICogQHBhcmFtIHtib29sZWFufSBvbmx5RW5nOiDsmIHrrLgg7KCE7JqpIO2PsO2KuCDsgqzsmqkg7Jes67aAXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3AoeyB0aXRsZSwgZGVzYywgY2F0ZWdvcnksIG9ubHlFbmcsIGltYWdlIH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKGltYWdlKTtcclxuXHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbmZpZyh7IHNzckZhZGVPdXQ6IHRydWUgfSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PlxyXG5cdHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZSkgPT5cclxuXHRcdHtcclxuXHRcdFx0Ly8g7ZWY64uoIOyKpO2BrOuhpOydvCDqsr3smrBcclxuXHRcdFx0aWYgKGUuZGVsdGFZID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRyZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggaWQ9XCJ0b3BcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX3dyYXBwZXJ9PlxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25TZWxmPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF9jb250ZW50fT5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDVcIiA6IFwiaDNcIn0gYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e2NhdGVnb3J5ICYmIGBbJHtjYXRlZ29yeX1dYH08L0ZsaXA+XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDNcIiA6IFwiaDFcIn0gYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e29ubHlFbmcgPyBjbGFzc2VzLnRpdGxlX2VuZyA6IGNsYXNzZXMudGl0bGV9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPnt0aXRsZX08L0ZsaXA+XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDZcIiA6IFwiaDRcIn0gYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY30+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e2Rlc2N9PC9GbGlwPlxyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuZG93bn0gb25DbGljaz17KCkgPT4gcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX0+XHJcblx0XHRcdFx0PEtleWJvYXJkQXJyb3dEb3duIC8+XHJcblx0XHRcdDwvQnV0dG9uQmFzZT5cclxuXHJcblx0XHRcdDxEaXZpZGVyIHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGltYWdlOiDrsLDqsr0g7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKGltYWdlKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dG9wX3dyYXBwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSA2NHB4KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcblx0XHRcdGJhY2tncm91bmRBdHRhY2htZW50OiBcImZpeGVkXCIsXHJcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuXHRcdFx0V2Via2l0QmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDExMnB4KVwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR0b3BfY29udGVudDoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDUwXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHR0aXRsZV9lbmc6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0bWFyZ2luQm90dG9tOiA2MCxcclxuXHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0ZGVzYzoge1xyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIuuRmOq4sOuniOyalCwgc2Fucy1zZXJpZlwiXHJcblx0XHR9LFxyXG5cdFx0ZG93bjoge1xyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdHBhZGRpbmc6IDIwLFxyXG5cdFx0XHRcIiYgc3ZnXCI6IHtcclxuXHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0aGVpZ2h0OiA1MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG5cdFx0XHRcdFwiJiBzdmdcIjoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDMwLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRpdmlkZXI6IHtcclxuXHRcdFx0b3BhY2l0eTogMFxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==