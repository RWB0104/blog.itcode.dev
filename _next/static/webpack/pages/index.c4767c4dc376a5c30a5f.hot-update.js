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
          lineNumber: 53,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
          lineNumber: 57,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
          lineNumber: 61,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
        lineNumber: 66,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Divider, {
      ref: ref,
      className: classes.divider
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
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

_s(Top, "9hIxqx1VAdt0ll5qas2U6714xKs=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_5__.useMediaQuery];
});

_c = Top;

function getStyles(image, onlyEng) {
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
          fontFamily: onlyEng ? "Blacksword, sans-serif" : "inital",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJyZWYiLCJ1c2VSZWYiLCJjb25maWciLCJzc3JGYWRlT3V0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGVsdGFZIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInRvcF93cmFwcGVyIiwidG9wX2NvbnRlbnQiLCJkaXZpZGVyIiwibWFrZVN0eWxlcyIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImJhY2tncm91bmRQb3NpdGlvbiIsIndpZHRoIiwicGFkZGluZyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25TZWxmIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxHQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQUQ4QkMsS0FDOUIsUUFEOEJBLEtBQzlCO0FB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QUssRUFBRSxNQURKO0FBRUhDLGVBQU8sRUFBRSxFQUZOO0FBR0gsaUJBQVM7QUFDUkQsZUFBSyxFQUFFLEVBREM7QUFFUlAsZ0JBQU0sRUFBRTtBQUZBO0FBSE4sU0FPRnpCLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FQRSxFQU82QjtBQUMvQixpQkFBUztBQUNSMkIsZUFBSyxFQUFFLEVBREM7QUFFUlAsZ0JBQU0sRUFBRTtBQUZBO0FBRHNCLE9BUDdCLENBaEN5QjtBQThDN0JILGFBQU8sRUFBRTtBQUNSa0IsZUFBTyxFQUFFO0FBREQ7QUE5Q29CLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQWtEQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDc2N2M0ZGMzNzZhNWMzMGE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRvcCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xMiBXZWQgMTc6MTM6NTlcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZsaXAgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcInJlYWN0LXJldmVhbC9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uQmFzZSwgRGl2aWRlciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG4vKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IOygnOuqqVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzYzog64K07JqpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeTog7Lm07YWM6rOg66asXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb25seUVuZzog7JiB66y4IOyghOyaqSDtj7Dtirgg7IKs7JqpIOyXrOu2gFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2U6IOydtOuvuOyngCBVUkxcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wKHsgdGl0bGUsIGRlc2MsIGNhdGVnb3J5LCBvbmx5RW5nLCBpbWFnZSB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcyhpbWFnZSk7XHJcblxyXG5cdGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHRjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuXHJcblx0Y29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHRjb25maWcoeyBzc3JGYWRlT3V0OiB0cnVlIH0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT5cclxuXHR7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgKGUpID0+XHJcblx0XHR7XHJcblx0XHRcdGlmIChlLmRlbHRhWSA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0cmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGlkPVwidG9wXCIgZGlzcGxheT1cImZsZXhcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX3dyYXBwZXJ9PlxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF9jb250ZW50fT5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDVcIiA6IFwiaDNcIn0gYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57Y2F0ZWdvcnkgJiYgYFske2NhdGVnb3J5fV1gfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9e2lzTW9iaWxlID8gXCJoMlwiIDogXCJoMVwifSBhbGlnbj1cImNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPnt0aXRsZX08L0ZsaXA+XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDZcIiA6IFwiaDRcIn0gYWxpZ249XCJjZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57ZGVzY308L0ZsaXA+XHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCdXR0b25CYXNlIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3dufSBvbkNsaWNrPXsoKSA9PiByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pfT5cclxuXHRcdFx0XHQ8S2V5Ym9hcmRBcnJvd0Rvd24gLz5cclxuXHRcdFx0PC9CdXR0b25CYXNlPlxyXG5cclxuXHRcdFx0PERpdmlkZXIgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2U6IOuwsOqyvSDsnbTrr7jsp4AgVVJMXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoaW1hZ2UsIG9ubHlFbmcpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHR0b3Bfd3JhcHBlcjoge1xyXG5cdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDY0cHgpXCIsXHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLCAwLCAwLjYpXCIsXHJcblx0XHRcdGJhY2tncm91bmRCbGVuZE1vZGU6IFwibXVsdGlwbHlcIixcclxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZEF0dGFjaG1lbnQ6IFwiZml4ZWRcIixcclxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG5cdFx0XHRcdGhlaWdodDogXCJjYWxjKDEwMHZoIC0gMTEycHgpXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRvcF9jb250ZW50OiB7XHJcblx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcclxuXHRcdFx0cGFkZGluZzogNTAsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG5cdFx0XHRhbGlnblNlbGY6IFwiY2VudGVyXCIsXHJcblx0XHRcdFwiJiBoMSwgJiBoMlwiOiB7XHJcblx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0XHRtYXJnaW5Cb3R0b206IDYwLFxyXG5cdFx0XHRcdGZvbnRGYW1pbHk6IG9ubHlFbmcgPyBcIkJsYWNrc3dvcmQsIHNhbnMtc2VyaWZcIiA6IFwiaW5pdGFsXCIsXHJcblx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCImIGgzLCAmIGg0LCAmIGg1LCAmIGg2XCI6IHtcclxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkb3duOiB7XHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0cGFkZGluZzogMjAsXHJcblx0XHRcdFwiJiBzdmdcIjoge1xyXG5cdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRoZWlnaHQ6IDUwXHJcblx0XHRcdH0sXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogMzAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDMwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGl2aWRlcjoge1xyXG5cdFx0XHRvcGFjaXR5OiAwXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9