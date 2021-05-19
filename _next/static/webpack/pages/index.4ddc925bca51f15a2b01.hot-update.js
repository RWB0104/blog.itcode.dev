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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
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
 * @param {String} image: 이미지 URL
 *
 * @returns {JSX} JSX 객체
 */

function Top(_ref) {
  _s();

  var title = _ref.title,
      desc = _ref.desc,
      category = _ref.category,
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
    className: classes.top_wrapper,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: "flex",
      className: classes.top_content,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: isMobile ? "h5" : "h3",
        align: "center",
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: isMobile ? "h2" : "h1",
        align: "center",
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
        variant: isMobile ? "h6" : "h4",
        align: "center",
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ButtonBase, {
      className: classes.down,
      onClick: function onClick() {
        return ref.current.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__.KeyboardArrowDown, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
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

_s(Top, "9hIxqx1VAdt0ll5qas2U6714xKs=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];
});

_c = Top;

function getStyles(image) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
    return {
      top_wrapper: (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        flexDirection: "column",
        height: "calc(100vh - 64px)",
        backgroundImage: "url(".concat(image, ")"),
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center"
      }, theme.breakpoints.down("sm"), {
        height: "calc(100vh - 112px)"
      }),
      top_content: {
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: 50,
        justifyContent: "center",
        alignSelf: "center",
        "& h1, & h2": {
          color: "white",
          marginBottom: 60,
          fontFamily: "Blacksword, sans-serif",
          fontWeight: "bold"
        },
        "& h3, & h4, & h5, & h6": {
          color: "white",
          fontWeight: "bold"
        }
      },
      down: (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        width: "100%",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5IiwiaW1hZ2UiLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsInNzckZhZGVPdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidG9wX3dyYXBwZXIiLCJ0b3BfY29udGVudCIsImRpdmlkZXIiLCJtYWtlU3R5bGVzIiwiZmxleERpcmVjdGlvbiIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwid2lkdGgiLCJwYWRkaW5nIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnblNlbGYiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxHQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQUQ4QkMsS0FDOUIsUUFEOEJBLEtBQzlCO0FBQUEsTUFEcUNDLElBQ3JD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QUZBO0FBSE4sU0FPRnpCLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FQRSxFQU82QjtBQUMvQixpQkFBUztBQUNSMkIsZUFBSyxFQUFFLEVBREM7QUFFUlAsZ0JBQU0sRUFBRTtBQUZBO0FBRHNCLE9BUDdCLENBaEN5QjtBQThDN0JILGFBQU8sRUFBRTtBQUNSa0IsZUFBTyxFQUFFO0FBREQ7QUE5Q29CLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQWtEQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZGRjOTI1YmNhNTFmMTVhMmIwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRvcCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xMiBXZWQgMTc6MTM6NTlcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsaXAgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcInJlYWN0LXJldmVhbC9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uQmFzZSwgRGl2aWRlciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG4vKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IOygnOuqqVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzYzog64K07JqpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeTog7Lm07YWM6rOg66asXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3AoeyB0aXRsZSwgZGVzYywgY2F0ZWdvcnksIGltYWdlIH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKGltYWdlKTtcclxuXHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdGNvbmZpZyh7IHNzckZhZGVPdXQ6IHRydWUgfSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PlxyXG5cdHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCAoZSkgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYgKGUuZGVsdGFZID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRyZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggaWQ9XCJ0b3BcIiBkaXNwbGF5PVwiZmxleFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3Bfd3JhcHBlcn0+XHJcblx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2NvbnRlbnR9PlxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2lzTW9iaWxlID8gXCJoNVwiIDogXCJoM1wifSBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPntjYXRlZ29yeSAmJiBgWyR7Y2F0ZWdvcnl9XWB9PC9GbGlwPlxyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD17aXNNb2JpbGUgPyBcImgyXCIgOiBcImgxXCJ9IGFsaWduPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8RmxpcCBsZWZ0IGNhc2NhZGU+e3RpdGxlfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2lzTW9iaWxlID8gXCJoNlwiIDogXCJoNFwifSBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPntkZXNjfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0PEJ1dHRvbkJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmRvd259IG9uQ2xpY2s9eygpID0+IHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSl9PlxyXG5cdFx0XHRcdDxLZXlib2FyZEFycm93RG93biAvPlxyXG5cdFx0XHQ8L0J1dHRvbkJhc2U+XHJcblxyXG5cdFx0XHQ8RGl2aWRlciByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9IC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbWFnZTog67Cw6rK9IOydtOuvuOyngCBVUkxcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcyhpbWFnZSlcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHRvcF93cmFwcGVyOiB7XHJcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdGhlaWdodDogXCJjYWxjKDEwMHZoIC0gNjRweClcIixcclxuXHRcdFx0YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcclxuXHRcdFx0YmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMTJweClcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dG9wX2NvbnRlbnQ6IHtcclxuXHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRwYWRkaW5nOiA1MCxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcblx0XHRcdGFsaWduU2VsZjogXCJjZW50ZXJcIixcclxuXHRcdFx0XCImIGgxLCAmIGgyXCI6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdG1hcmdpbkJvdHRvbTogNjAsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCImIGgzLCAmIGg0LCAmIGg1LCAmIGg2XCI6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkb3duOiB7XHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0cGFkZGluZzogMjAsXHJcblx0XHRcdFwiJiBzdmdcIjoge1xyXG5cdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRoZWlnaHQ6IDUwXHJcblx0XHRcdH0sXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGl2aWRlcjoge1xyXG5cdFx0XHRvcGFjaXR5OiAwXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9