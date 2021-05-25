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
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _components_section_posts_PostList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/section/posts/PostList */ "./components/section/posts/PostList.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* harmony import */ var _components_global_Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/global/Meta */ "./components/global/Meta.js");
/* harmony import */ var _components_section_contents_NoContents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/section/contents/NoContents */ "./components/section/contents/NoContents.js");
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
  var url = (0,_common_common__WEBPACK_IMPORTED_MODULE_8__.getRandomItem)(images);

  if (posts.length > 0) {
    var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.useTheme)();
    var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)(theme.breakpoints.down("sm"));
    var classes = getStyles();
    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    var category = router.query.category || "All";

    var categories = (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(new Set(posts.map(function (element) {
      return element.category;
    })));

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Meta__WEBPACK_IMPORTED_MODULE_10__.default, {
        title: _common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].title,
        description: _common_env__WEBPACK_IMPORTED_MODULE_9__.DESCRIPTION,
        url: _common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].url.pathname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Box, {
        component: "section",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_6__.default, {
            title: _common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].title,
            desc: "Posts of \"".concat(category, "\""),
            image: "/assets/images/main/".concat(url),
            onlyEng: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Container, {
            maxWidth: "md",
            className: classes.section,
            children: posts.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
              container: true,
              spacing: 5,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                item: true,
                xs: isMobile ? 12 : 4,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  variant: "outlined",
                  fullWidth: true,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.InputLabel, {
                    id: "name",
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 13
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Select, {
                    "native": true,
                    label: "Category",
                    value: category,
                    onChange: function onChange(e) {
                      return onSelectCategory(e, router);
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                      value: "All",
                      children: "All"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 14
                    }, this), categories.map(function (element, index) {
                      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                        value: element,
                        children: element
                      }, index + 1, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 50
                      }, _this);
                    })]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 13
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_13__.Autocomplete, {
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
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.TextField, _objectSpread(_objectSpread({}, param), {}, {
                      label: "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9",
                      variant: "outlined"
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 35
                    }, _this);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_posts_PostList__WEBPACK_IMPORTED_MODULE_7__.default, {
                  data: posts
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 10
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
              container: true,
              spacing: 5,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_contents_NoContents__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 12
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, this);
  }
}
/**
 * 카테고리 선택 이벤트 함수
 *
 * @param {Event} e: 이벤트 객체
 * @param {Object} router: 라우터 객체
 */

_s(Posts, "wJfmFB7sdP7vULpkd22dVjy9Jo8=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Posts;

function onSelectCategory(e, router) {
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
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.makeStyles)(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsImltYWdlcyIsInVybCIsImdldFJhbmRvbUl0ZW0iLCJsZW5ndGgiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdGVnb3J5IiwicXVlcnkiLCJjYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiZWxlbWVudCIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwiZSIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJpbmRleCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJvcHRpb24iLCJ0aXRsZSIsInB1c2giLCJzbHVnIiwicGFyYW0iLCJwYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0EsS0FBVCxPQUNmO0FBQUE7O0FBQUE7O0FBQUEsTUFEZ0NDLEtBQ2hDLFFBRGdDQSxLQUNoQztBQUFBLE1BRHVDQyxNQUN2QyxRQUR1Q0EsTUFDdkM7QUFDQyxNQUFNQyxHQUFHLEdBQUdDLDZEQUFhLENBQUNGLE1BQUQsQ0FBekI7O0FBRUEsTUFBSUQsS0FBSyxDQUFDSSxNQUFOLEdBQWUsQ0FBbkIsRUFDQTtBQUNDLFFBQU1D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QUFBO0FBQUE7QUFBQSxrQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFrREE7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0EzRXdCRCxLO1VBTVJPLHdELEVBQ0dFLDZELEVBSUZNLGtEOzs7S0FYT2YsSzs7QUE0RXhCLFNBQVMyQixnQkFBVCxDQUEwQkQsQ0FBMUIsRUFBNkJaLE1BQTdCLEVBQ0E7QUFDQ0EsUUFBTSxDQUFDcUIsSUFBUCxDQUFZO0FBQ1hsQixTQUFLLEVBQUU7QUFDTnFCLFVBQUksRUFBRSxDQURBO0FBRU50QixjQUFRLEVBQUVVLENBQUMsQ0FBQ2EsTUFBRixDQUFTQztBQUZiO0FBREksR0FBWixFQUtHQyxTQUxILEVBS2M7QUFDYkMsVUFBTSxFQUFFO0FBREssR0FMZDtBQVFBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBUzdCLFNBQVQsR0FDQTtBQUNDLFNBQU84Qiw4REFBVSxDQUFDLFVBQUNyQyxLQUFEO0FBQUEsV0FBWTtBQUM3Qm1CLGFBQU8sRUFBRTtBQUNSbUIsaUJBQVMsRUFBRXRDLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBYyxFQUFkO0FBREg7QUFEb0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBS0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLjlmNTkzOWNkMTYyN2NjNGI1MDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6rKM7Iuc6riAIO2OmOydtOyngCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA0LjI3IFRodSAyMjozNzowNlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LXJldmVhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEZvcm1Db250cm9sLCBHcmlkLCBJbnB1dExhYmVsLCBtYWtlU3R5bGVzLCBTZWxlY3QsIFRleHRGaWVsZCwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuXHJcbi8vIOyCrOyaqeyekCDrqqjrk4hcclxuaW1wb3J0IFRvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVG9wXCI7XHJcbmltcG9ydCBQb3N0TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1Bvc3RMaXN0XCI7XHJcbmltcG9ydCB7IGdldE1haW5JbWFnZXMsIGdldENvbnRlbnRzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZG9tSXRlbSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IERFU0NSSVBUSU9OLCBNRU5VX0xJU1QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudlwiO1xyXG5pbXBvcnQgTWV0YSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvTWV0YVwiO1xyXG5pbXBvcnQgTm9Db250ZW50cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL05vQ29udGVudHNcIjtcclxuXHJcbi8qKlxyXG4gKiDqsozsi5zquIAg7Y6Y7J207KeAIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNPTltdfSBwb3N0czog6rKM7Iuc6riAIOumrOyKpO2KuFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0cyh7IHBvc3RzLCBpbWFnZXMgfSlcclxue1xyXG5cdGNvbnN0IHVybCA9IGdldFJhbmRvbUl0ZW0oaW1hZ2VzKTtcclxuXHJcblx0aWYgKHBvc3RzLmxlbmd0aCA+IDApXHJcblx0e1xyXG5cdFx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdFx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdFx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRcdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRcdGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8IFwiQWxsXCI7XHJcblxyXG5cdFx0Y29uc3QgY2F0ZWdvcmllcyA9IFsgLi4ubmV3IFNldChwb3N0cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNhdGVnb3J5KSkgXTtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdFx0PE1ldGEgdGl0bGU9e01FTlVfTElTVFsxXS50aXRsZX0gZGVzY3JpcHRpb249e0RFU0NSSVBUSU9OfSB1cmw9e01FTlVfTElTVFsxXS51cmwucGF0aG5hbWV9IC8+XHJcblxyXG5cdFx0XHRcdDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0PEZhZGU+XHJcblx0XHRcdFx0XHRcdDxUb3AgdGl0bGU9e01FTlVfTElTVFsxXS50aXRsZX0gZGVzYz17YFBvc3RzIG9mIFwiJHtjYXRlZ29yeX1cImB9IGltYWdlPXtgL2Fzc2V0cy9pbWFnZXMvbWFpbi8ke3VybH1gfSBvbmx5RW5nIC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0cG9zdHMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9e2lzTW9iaWxlID8gMTIgOiA0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGlkPVwibmFtZVwiPkNhdGVnb3J5PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBuYXRpdmUgbGFiZWw9XCJDYXRlZ29yeVwiIHZhbHVlPXtjYXRlZ29yeX0gb25DaGFuZ2U9e2UgPT4gb25TZWxlY3RDYXRlZ29yeShlLCByb3V0ZXIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKChlbGVtZW50LCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4ICsgMX0gdmFsdWU9e2VsZW1lbnR9PntlbGVtZW50fTwvb3B0aW9uPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17cG9zdHMuc29ydCgoYSwgYikgPT4gLWIuY2F0ZWdvcnkubG9jYWxlQ29tcGFyZShhLmNhdGVnb3J5KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwQnk9e29wdGlvbiA9PiBvcHRpb24uY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXtvcHRpb24gPT4gb3B0aW9uLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG9wdGlvbikgPT4gcm91dGVyLnB1c2goYC9wb3N0cy8ke29wdGlvbi5zbHVnfWApfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17cGFyYW0gPT4gPFRleHRGaWVsZCB7Li4ucGFyYW19IGxhYmVsPVwi6rKM7Iuc6riAIOqygOyDiVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxQb3N0TGlzdCBkYXRhPXtwb3N0c30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Tm9Db250ZW50cyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOy5tO2FjOqzoOumrCDshKDtg50g7J2067Kk7Yq4IO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0V2ZW50fSBlOiDsnbTrsqTtirgg6rCd7LK0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSByb3V0ZXI6IOudvOyasO2EsCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIG9uU2VsZWN0Q2F0ZWdvcnkoZSwgcm91dGVyKVxyXG57XHJcblx0cm91dGVyLnB1c2goe1xyXG5cdFx0cXVlcnk6IHtcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0Y2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlXHJcblx0XHR9XHJcblx0fSwgdW5kZWZpbmVkLCB7XHJcblx0XHRzY3JvbGw6IGZhbHNlXHJcblx0fSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRzZWN0aW9uOiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMClcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyCrOyaqeyekCBQcm9wcyDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IOyCrOyaqeyekCBQcm9wc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKClcclxue1xyXG5cdGNvbnN0IHBvc3RzID0gZ2V0Q29udGVudHMoXCJwb3N0c1wiKTtcclxuXHJcblx0Y29uc3QgaW1hZ2VzID0gZ2V0TWFpbkltYWdlcygpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgcG9zdHMsIGltYWdlcyB9XHJcblx0fTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=