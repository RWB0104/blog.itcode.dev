self["webpackHotUpdate_N_E"]("pages/about",{

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
        backgroundSize: "100vmax 100vmax",
        backgroundAttachment: "fixed",
        backgroundPosition: "100%",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvVG9wLmpzIl0sIm5hbWVzIjpbIlRvcCIsInRpdGxlIiwiZGVzYyIsImNhdGVnb3J5Iiwib25seUVuZyIsImltYWdlIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJlZiIsInVzZVJlZiIsImNvbmZpZyIsInNzckZhZGVPdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkZWx0YVkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwidG9wX3dyYXBwZXIiLCJ0b3BfaW1hZ2Vfd3JhcHBlciIsInRvcF9pbWFnZSIsInRvcF9jb250ZW50IiwidGl0bGVfZW5nIiwiZG93biIsImRpdmlkZXIiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwiY2xpcCIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImJhY2tncm91bmRQb3NpdGlvbiIsIldlYmtpdEJhY2tncm91bmRTaXplIiwicGFkZGluZyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsR0FBVCxPQUNmO0FBQUE7O0FBQUEsTUFEOEJDLEtBQzlCLFFBRDhCQSxLQUM5QjtBQUFBLE1BRHFDQyxJQUNyQyxRQURxQ0EsSUFDckM7QUFBQSxNQUQyQ0MsUUFDM0MsUUFEMkNBLFFBQzNDO0FBQUEsTUFEcURDLE9BQ3JELFFBRHFEQSxPQUNyRDtBQUFBLE1BRDhEQyxLQUM5RCxRQUQ4REEsS0FDOUQ7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsQ0FBQ0YsS0FBRCxDQUF6QjtBQUVBLE1BQU1HLEdBQUcsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUFDLCtEQUFNLENBQUM7QUFBRUMsY0FBVSxFQUFFO0FBQWQsR0FBRCxDQUFOO0FBRUFDLGtEQUFTLENBQUMsWUFDVjtBQUNDQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLGdCQUEvQixDQUFnRCxPQUFoRCxFQUF5RCxVQUFDQyxDQUFELEVBQ3pEO0FBQ0M7QUFDQSxVQUFJQSxDQUFDLENBQUNDLE1BQUYsR0FBVyxDQUFmLEVBQ0E7QUFDQ0QsU0FBQyxDQUFDRSxjQUFGO0FBQ0FWLFdBQUcsQ0FBQ1csT0FBSixDQUFZQyxjQUFaLENBQTJCO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQUEzQjtBQUNBO0FBQ0QsS0FSRDtBQVNBLEdBWFEsQ0FBVDtBQWFBLHNCQUNDLDhEQUFDLGtEQUFEO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBYyxZQUFRLEVBQUMsVUFBdkI7QUFBa0MsV0FBTyxFQUFDLE1BQTFDO0FBQWlELGlCQUFhLEVBQUMsUUFBL0Q7QUFBd0UsYUFBUyxFQUFFZixPQUFPLENBQUNnQixXQUEzRjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUssY0FBUSxFQUFDLFVBQWQ7QUFBeUIsZUFBUyxFQUFFaEIsT0FBTyxDQUFDaUIsaUJBQTVDO0FBQUEsNkJBQ0MsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFFakIsT0FBTyxDQUFDa0I7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLGtEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0IsbUJBQWEsRUFBQyxRQUFsQztBQUEyQyxvQkFBYyxFQUFDLFFBQTFEO0FBQW1FLGVBQVMsRUFBQyxRQUE3RTtBQUFzRixlQUFTLEVBQUVsQixPQUFPLENBQUNtQixXQUF6RztBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQWMsVUFBRSxFQUFDLElBQWpCO0FBQXNCLFlBQUksRUFBQyxJQUEzQjtBQUFnQyxhQUFLLEVBQUMsUUFBdEM7QUFBK0MsaUJBQVMsRUFBRW5CLE9BQU8sQ0FBQ0osSUFBbEU7QUFBQSwrQkFDQyw4REFBQyw4Q0FBRDtBQUFNLGNBQUksTUFBVjtBQUFXLGlCQUFPLE1BQWxCO0FBQUEsb0JBQW9CQyxRQUFRLGVBQVFBLFFBQVI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUtDLDhEQUFDLGtEQUFEO0FBQWMsVUFBRSxFQUFDLElBQWpCO0FBQXNCLFlBQUksRUFBQyxJQUEzQjtBQUFnQyxhQUFLLEVBQUMsUUFBdEM7QUFBK0MsaUJBQVMsRUFBRUMsT0FBTyxHQUFHRSxPQUFPLENBQUNvQixTQUFYLEdBQXVCcEIsT0FBTyxDQUFDTCxLQUFoRztBQUFBLCtCQUNDLDhEQUFDLDhDQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsaUJBQU8sTUFBbEI7QUFBQSxvQkFBb0JBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsZUFTQyw4REFBQyxrREFBRDtBQUFjLFVBQUUsRUFBQyxJQUFqQjtBQUFzQixZQUFJLEVBQUMsSUFBM0I7QUFBZ0MsYUFBSyxFQUFDLFFBQXRDO0FBQStDLGlCQUFTLEVBQUVLLE9BQU8sQ0FBQ0osSUFBbEU7QUFBQSwrQkFDQyw4REFBQyw4Q0FBRDtBQUFNLGNBQUksTUFBVjtBQUFXLGlCQUFPLE1BQWxCO0FBQUEsb0JBQW9CQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBbUJDLDhEQUFDLHlEQUFEO0FBQVksZUFBUyxFQUFFSSxPQUFPLENBQUNxQixJQUEvQjtBQUFxQyxhQUFPLEVBQUU7QUFBQSxlQUFNbkIsR0FBRyxDQUFDVyxPQUFKLENBQVlDLGNBQVosQ0FBMkI7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQTNCLENBQU47QUFBQSxPQUE5QztBQUFBLDZCQUNDLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJELGVBdUJDLDhEQUFDLHNEQUFEO0FBQVMsU0FBRyxFQUFFYixHQUFkO0FBQW1CLGVBQVMsRUFBRUYsT0FBTyxDQUFDc0I7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTJCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXhEd0I1QixHOztLQUFBQSxHOztBQXlEeEIsU0FBU08sU0FBVCxDQUFtQkYsS0FBbkIsRUFDQTtBQUNDLFNBQU93Qiw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCUixpQkFBVyxFQUFFO0FBQ1pTLGNBQU0sRUFBRSxvQkFERTtBQUVWQyxhQUFLLEVBQUU7QUFGRyxTQUdURixLQUFLLENBQUNHLFdBQU4sQ0FBa0JOLElBQWxCLENBQXVCLElBQXZCLENBSFMsRUFHc0I7QUFDL0JJLGNBQU0sRUFBRTtBQUR1QixPQUh0QixDQURrQjtBQVE3QlIsdUJBQWlCLEVBQUU7QUFDbEJXLFlBQUksRUFBRSx3QkFEWTtBQUVsQkMsV0FBRyxFQUFFLENBRmE7QUFHbEJDLFlBQUksRUFBRSxDQUhZO0FBSWxCSixhQUFLLEVBQUUsTUFKVztBQUtsQkQsY0FBTSxFQUFFO0FBTFUsT0FSVTtBQWU3QlAsZUFBUyxFQUFFO0FBQ1ZhLGdCQUFRLEVBQUUsT0FEQTtBQUVWQyxlQUFPLEVBQUUsT0FGQztBQUdWSCxXQUFHLEVBQUUsQ0FISztBQUlWQyxZQUFJLEVBQUUsQ0FKSTtBQUtWSixhQUFLLEVBQUUsTUFMRztBQU1WRCxjQUFNLEVBQUUsTUFORTtBQU9WUSxpQkFBUyxFQUFFLE9BUEQ7QUFRVkMsdUJBQWUsZ0JBQVNuQyxLQUFULE1BUkw7QUFTVm9DLHVCQUFlLEVBQUUsb0JBVFA7QUFVVkMsMkJBQW1CLEVBQUUsVUFWWDtBQVdWQyxzQkFBYyxFQUFFLGlCQVhOO0FBWVZDLDRCQUFvQixFQUFFLE9BWlo7QUFhVkMsMEJBQWtCLEVBQUUsTUFiVjtBQWNWQyw0QkFBb0IsRUFBRTtBQWRaLE9BZmtCO0FBK0I3QnJCLGlCQUFXLEVBQUU7QUFDWk8sYUFBSyxFQUFFLE1BREs7QUFFWkQsY0FBTSxFQUFFLE1BRkk7QUFHWmdCLGVBQU8sRUFBRTtBQUhHLE9BL0JnQjtBQW9DN0I5QyxXQUFLLEVBQUU7QUFDTitDLGFBQUssRUFBRSxPQUREO0FBRU5DLG9CQUFZLEVBQUUsRUFGUjtBQUdOQyxrQkFBVSxFQUFFLGtCQUhOO0FBSU5DLGtCQUFVLEVBQUU7QUFKTixPQXBDc0I7QUEwQzdCekIsZUFBUyxFQUFFO0FBQ1ZzQixhQUFLLEVBQUUsT0FERztBQUVWQyxvQkFBWSxFQUFFLEVBRko7QUFHVkMsa0JBQVUsRUFBRSx3QkFIRjtBQUlWQyxrQkFBVSxFQUFFO0FBSkYsT0ExQ2tCO0FBZ0Q3QmpELFVBQUksRUFBRTtBQUNMOEMsYUFBSyxFQUFFLE9BREY7QUFFTEUsa0JBQVUsRUFBRTtBQUZQLE9BaER1QjtBQW9EN0J2QixVQUFJLEVBQUU7QUFDTEssYUFBSyxFQUFFLE1BREo7QUFFSGdCLGFBQUssRUFBRSxPQUZKO0FBR0hELGVBQU8sRUFBRSxFQUhOO0FBSUgsaUJBQVM7QUFDUmYsZUFBSyxFQUFFLEVBREM7QUFFUkQsZ0JBQU0sRUFBRTtBQUZBO0FBSk4sU0FRRkQsS0FBSyxDQUFDRyxXQUFOLENBQWtCTixJQUFsQixDQUF1QixJQUF2QixDQVJFLEVBUTZCO0FBQy9CLGlCQUFTO0FBQ1JLLGVBQUssRUFBRSxFQURDO0FBRVJELGdCQUFNLEVBQUU7QUFGQTtBQURzQixPQVI3QixDQXBEeUI7QUFtRTdCSCxhQUFPLEVBQUU7QUFDUndCLGVBQU8sRUFBRTtBQUREO0FBbkVvQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUF1RUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMjYwYzZiYTg2NjFlYWI5ZDY4YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUb3Ag7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTIgV2VkIDE3OjEzOjU5XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGbGlwIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJyZWFjdC1yZXZlYWwvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbkJhc2UsIERpdmlkZXIsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCBTZW1hbnRpY1R5cG8gZnJvbSBcIi4vU2VtYW50aWNUeXBvXCI7XHJcblxyXG4vKipcclxuICogVG9wIOy7tO2PrOuEjO2KuCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGl0bGU6IOygnOuqqVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZGVzYzog64K07JqpXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjYXRlZ29yeTog7Lm07YWM6rOg66asXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb25seUVuZzog7JiB66y4IOyghOyaqSDtj7Dtirgg7IKs7JqpIOyXrOu2gFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2U6IOydtOuvuOyngCBVUkxcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wKHsgdGl0bGUsIGRlc2MsIGNhdGVnb3J5LCBvbmx5RW5nLCBpbWFnZSB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcyhpbWFnZSk7XHJcblxyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0Y29uZmlnKHsgc3NyRmFkZU91dDogdHJ1ZSB9KTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+XHJcblx0e1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3BcIikuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChlKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHQvLyDtlZjri6gg7Iqk7YGs66Gk7J28IOqyveyasFxyXG5cdFx0XHRpZiAoZS5kZWx0YVkgPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBpZD1cInRvcFwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX3dyYXBwZXJ9PlxyXG5cdFx0XHQ8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBjbGFzc05hbWU9e2NsYXNzZXMudG9wX2ltYWdlX3dyYXBwZXJ9PlxyXG5cdFx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF9pbWFnZX0gLz5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25TZWxmPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcF9jb250ZW50fT5cclxuXHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDNcIiBkb3duPVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjfT5cclxuXHRcdFx0XHRcdDxGbGlwIGxlZnQgY2FzY2FkZT57Y2F0ZWdvcnkgJiYgYFske2NhdGVnb3J5fV1gfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHJcblx0XHRcdFx0PFNlbWFudGljVHlwbyB1cD1cImgxXCIgZG93bj1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e29ubHlFbmcgPyBjbGFzc2VzLnRpdGxlX2VuZyA6IGNsYXNzZXMudGl0bGV9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPnt0aXRsZX08L0ZsaXA+XHJcblx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblxyXG5cdFx0XHRcdDxTZW1hbnRpY1R5cG8gdXA9XCJoNFwiIGRvd249XCJoNlwiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2N9PlxyXG5cdFx0XHRcdFx0PEZsaXAgbGVmdCBjYXNjYWRlPntkZXNjfTwvRmxpcD5cclxuXHRcdFx0XHQ8L1NlbWFudGljVHlwbz5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuZG93bn0gb25DbGljaz17KCkgPT4gcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KX0+XHJcblx0XHRcdFx0PEtleWJvYXJkQXJyb3dEb3duIC8+XHJcblx0XHRcdDwvQnV0dG9uQmFzZT5cclxuXHJcblx0XHRcdDxEaXZpZGVyIHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGltYWdlOiDrsLDqsr0g7J2066+47KeAIFVSTFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKGltYWdlKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dG9wX3dyYXBwZXI6IHtcclxuXHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSA2NHB4KVwiLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcblx0XHRcdFx0aGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMzZweClcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0dG9wX2ltYWdlX3dyYXBwZXI6IHtcclxuXHRcdFx0Y2xpcDogXCJyZWN0KDAsIGF1dG8sIGF1dG8sIDApXCIsXHJcblx0XHRcdHRvcDogMCxcclxuXHRcdFx0bGVmdDogMCxcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiXHJcblx0XHR9LFxyXG5cdFx0dG9wX2ltYWdlOiB7XHJcblx0XHRcdHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcblx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcclxuXHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRsZWZ0OiAwLFxyXG5cdFx0XHR3aWR0aDogXCIxMDAlXCIsXHJcblx0XHRcdGhlaWdodDogXCIxMDAlXCIsXHJcblx0XHRcdG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcblx0XHRcdGJhY2tncm91bmRTaXplOiBcIjEwMHZtYXggMTAwdm1heFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kQXR0YWNobWVudDogXCJmaXhlZFwiLFxyXG5cdFx0XHRiYWNrZ3JvdW5kUG9zaXRpb246IFwiMTAwJVwiLFxyXG5cdFx0XHRXZWJraXRCYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiXHJcblx0XHR9LFxyXG5cdFx0dG9wX2NvbnRlbnQ6IHtcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxyXG5cdFx0XHRwYWRkaW5nOiA1MFxyXG5cdFx0fSxcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogNjAsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwi65GY6riw66eI7JqULCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0dGl0bGVfZW5nOiB7XHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogNjAsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiQmxhY2tzd29yZCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdGRlc2M6IHtcclxuXHRcdFx0Y29sb3I6IFwid2hpdGVcIixcclxuXHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIHNhbnMtc2VyaWZcIlxyXG5cdFx0fSxcclxuXHRcdGRvd246IHtcclxuXHRcdFx0d2lkdGg6IFwiMTAwJVwiLFxyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRwYWRkaW5nOiAyMCxcclxuXHRcdFx0XCImIHN2Z1wiOiB7XHJcblx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdGhlaWdodDogNTBcclxuXHRcdFx0fSxcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuXHRcdFx0XHRcIiYgc3ZnXCI6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiAzMCxcclxuXHRcdFx0XHRcdGhlaWdodDogMzBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkaXZpZGVyOiB7XHJcblx0XHRcdG9wYWNpdHk6IDBcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=