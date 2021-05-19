self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Posts; }
/* harmony export */ });
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _components_global_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/global/Title */ "./components/global/Title.js");
/* harmony import */ var _components_section_posts_PostList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/section/posts/PostList */ "./components/section/posts/PostList.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\pages\\posts\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 게시글 페이지 JavaScript
 *
 * @author RWB
 * @since 2021.04.27 Thu 22:37:06
 */
// 라이브러리 모듈




 // 사용자 모듈






/**
 * 게시글 페이지 JSX 반환 함수
 *
 * @param {JSON[]} posts: 게시글 리스트
 *
 * @returns {JSX} JSX 객체
 */

var __N_SSG = true;
function Posts(_ref) {
  _s();

  var _this = this;

  var posts = _ref.posts,
      images = _ref.images;
  var url = (0,_common_common__WEBPACK_IMPORTED_MODULE_9__.getRandomItem)(images);
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery)(theme.breakpoints.down("sm"));
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var categories = (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(new Set(posts.map(function (element) {
    return element.category;
  })));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Title__WEBPACK_IMPORTED_MODULE_7__.default, {
      title: _common_env__WEBPACK_IMPORTED_MODULE_10__.MENU_LIST[1].title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
      component: "section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_5__.Fade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_6__.default, {
          title: _common_env__WEBPACK_IMPORTED_MODULE_10__.MENU_LIST[1].title,
          desc: "Posts of \"".concat(router.query.category, "\""),
          image: "/assets/images/main/".concat(url),
          onlyEng: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Container, {
          maxWidth: "md",
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
            container: true,
            spacing: 5,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
              item: true,
              xs: isMobile ? 12 : 4,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.FormControl, {
                variant: "outlined",
                fullWidth: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.InputLabel, {
                  id: "name",
                  children: "Category"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Select, {
                  "native": true,
                  label: "Category",
                  value: router.query.category,
                  onChange: function onChange(e) {
                    return onSelectCategory(e, router);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                    value: "All",
                    children: "All"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 11
                  }, this), categories.map(function (element, index) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                      value: element,
                      children: element
                    }, index + 1, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 47
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_12__.Autocomplete, {
                options: posts.sort(function (a, b) {
                  return -b.category.localeCompare(a.category);
                }),
                groupBy: function groupBy(option) {
                  return option.category;
                },
                getOptionLabel: function getOptionLabel(option) {
                  return option.title;
                },
                onChange: function onChange(e, option) {
                  return router.push("/posts/".concat(option.slug));
                },
                renderInput: function renderInput(param) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.TextField, _objectSpread(_objectSpread({}, param), {}, {
                    label: "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9",
                    variant: "outlined"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 32
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_posts_PostList__WEBPACK_IMPORTED_MODULE_8__.default, {
                data: posts
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, this);
}
/**
 * 카테고리 선택 이벤트 함수
 *
 * @param {Event} e: 이벤트 객체
 * @param {Object} router: 라우터 객체
 */

_s(Posts, "wJfmFB7sdP7vULpkd22dVjy9Jo8=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Posts;

function onSelectCategory(e, router) {
  console.dir(e.target.value);
  router.push({
    query: {
      page: 1,
      category: e.target.value
    }
  }, undefined, {
    scroll: false
  });
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */


function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.makeStyles)(function (theme) {
    return {
      section: {
        marginTop: theme.spacing(10)
      }
    };
  })();
}
/**
 * 사용자 Props 반환 함수
 *
 * @returns {Object} 사용자 Props
 */


var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsImltYWdlcyIsInVybCIsImdldFJhbmRvbUl0ZW0iLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdGVnb3JpZXMiLCJTZXQiLCJtYXAiLCJlbGVtZW50IiwiY2F0ZWdvcnkiLCJNRU5VX0xJU1QiLCJ0aXRsZSIsInF1ZXJ5Iiwic2VjdGlvbiIsImUiLCJvblNlbGVjdENhdGVnb3J5IiwiaW5kZXgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwib3B0aW9uIiwicHVzaCIsInNsdWciLCJwYXJhbSIsImNvbnNvbGUiLCJkaXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0EsS0FBVCxPQUNmO0FBQUE7O0FBQUE7O0FBQUEsTUFEZ0NDLEtBQ2hDLFFBRGdDQSxLQUNoQztBQUFBLE1BRHVDQyxNQUN2QyxRQUR1Q0EsTUFDdkM7QUFDQyxNQUFNQyxHQUFHLEdBQUdDLDZEQUFhLENBQUNGLE1BQUQsQ0FBekI7QUFFQSxNQUFNRyxLQUFLLEdBQUdDLDREQUFRLEVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxpRUFBYSxDQUFDSCxLQUFLLENBQUNJ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Q2EsTUFBRixDQUFTQztBQUZiO0FBREksR0FBWixFQUtFRSxTQUxGLEVBS2E7QUFDWkMsVUFBTSxFQUFFO0FBREksR0FMYjtBQVFBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzdCLFNBQVQsR0FDQTtBQUNDLFNBQU84Qiw4REFBVSxDQUFDLFVBQUNyQyxLQUFEO0FBQUEsV0FBWTtBQUM3QmtCLGFBQU8sRUFBRTtBQUNSb0IsaUJBQVMsRUFBRXRDLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBYyxFQUFkO0FBREg7QUFEb0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBS0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLmIzN2RlM2ZlMGM0OGUxM2I2NzgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6rKM7Iuc6riAIO2OmOydtOyngCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA0LjI3IFRodSAyMjozNzowNlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRGl2aWRlciwgRm9ybUNvbnRyb2wsIEdyaWQsIElucHV0TGFiZWwsIG1ha2VTdHlsZXMsIFNlbGVjdCwgVGV4dEZpZWxkLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IFRvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVG9wXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVGl0bGVcIjtcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHMvUG9zdExpc3RcIjtcclxuaW1wb3J0IHsgZ2V0TWFpbkltYWdlcywgZ2V0VHlwZVBvc3RzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IE1FTlVfTElTVCB9IGZyb20gXCIuLi8uLi9jb21tb24vZW52XCI7XHJcblxyXG4vKipcclxuICog6rKM7Iuc6riAIO2OmOydtOyngCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTT05bXX0gcG9zdHM6IOqyjOyLnOq4gCDrpqzsiqTtirhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0cywgaW1hZ2VzIH0pXHJcbntcclxuXHRjb25zdCB1cmwgPSBnZXRSYW5kb21JdGVtKGltYWdlcyk7XHJcblxyXG5cdGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHRjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgY2F0ZWdvcmllcyA9IFsgLi4ubmV3IFNldChwb3N0cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNhdGVnb3J5KSkgXTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PFRpdGxlIHRpdGxlPXtNRU5VX0xJU1RbMV0udGl0bGV9IC8+XHJcblxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuXHRcdFx0XHQ8RmFkZT5cclxuXHRcdFx0XHRcdDxUb3AgdGl0bGU9e01FTlVfTElTVFsxXS50aXRsZX0gZGVzYz17YFBvc3RzIG9mIFwiJHtyb3V0ZXIucXVlcnkuY2F0ZWdvcnl9XCJgfSBpbWFnZT17YC9hc3NldHMvaW1hZ2VzL21haW4vJHt1cmx9YH0gb25seUVuZyAvPlxyXG5cclxuXHRcdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9e2lzTW9iaWxlID8gMTIgOiA0fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGlkPVwibmFtZVwiPkNhdGVnb3J5PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBuYXRpdmUgbGFiZWw9XCJDYXRlZ29yeVwiIHZhbHVlPXtyb3V0ZXIucXVlcnkuY2F0ZWdvcnl9IG9uQ2hhbmdlPXtlID0+IG9uU2VsZWN0Q2F0ZWdvcnkoZSwgcm91dGVyKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtlbGVtZW50fT57ZWxlbWVudH08L29wdGlvbj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e3Bvc3RzLnNvcnQoKGEsIGIpID0+IC1iLmNhdGVnb3J5LmxvY2FsZUNvbXBhcmUoYS5jYXRlZ29yeSkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRncm91cEJ5PXtvcHRpb24gPT4gb3B0aW9uLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbi50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvcHRpb24pID0+IHJvdXRlci5wdXNoKGAvcG9zdHMvJHtvcHRpb24uc2x1Z31gKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9e3BhcmFtID0+IDxUZXh0RmllbGQgey4uLnBhcmFtfSBsYWJlbD1cIuqyjOyLnOq4gCDqsoDsg4lcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8UG9zdExpc3QgZGF0YT17cG9zdHN9IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Lm07YWM6rOg66asIOyEoO2DnSDsnbTrsqTtirgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnR9IGU6IOydtOuypO2KuCDqsJ3ssrRcclxuICogQHBhcmFtIHtPYmplY3R9IHJvdXRlcjog65287Jqw7YSwIOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gb25TZWxlY3RDYXRlZ29yeShlLCByb3V0ZXIpXHJcbntcclxuXHRjb25zb2xlLmRpcihlLnRhcmdldC52YWx1ZSk7XHJcblx0cm91dGVyLnB1c2goe1xyXG5cdFx0cXVlcnk6IHtcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0Y2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR9XHJcblx0fSx1bmRlZmluZWQsIHtcclxuXHRcdHNjcm9sbDogZmFsc2VcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHNlY3Rpb246IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59XHJcblxyXG4vKipcclxuICog7IKs7Jqp7J6QIFByb3BzIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge09iamVjdH0g7IKs7Jqp7J6QIFByb3BzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRUeXBlUG9zdHMoXCJwb3N0c1wiLCBbXHJcblx0XHRcInRpdGxlXCIsXHJcblx0XHRcImRhdGVcIixcclxuXHRcdFwic2x1Z1wiLFxyXG5cdFx0XCJhdXRob3JcIixcclxuXHRcdFwiY292ZXJJbWFnZVwiLFxyXG5cdFx0XCJleGNlcnB0XCIsXHJcblx0XHRcInR5cGVcIixcclxuXHRcdFwiY2F0ZWdvcnlcIixcclxuXHRcdFwidGFnXCJcclxuXHRdKTtcclxuXHJcblx0Y29uc3QgaW1hZ2VzID0gZ2V0TWFpbkltYWdlcygpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgcG9zdHMsIGltYWdlcyB9XHJcblx0fTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=