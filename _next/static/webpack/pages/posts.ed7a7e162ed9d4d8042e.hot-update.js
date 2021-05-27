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
/* harmony import */ var C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
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




var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\pages\\posts\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)(theme.breakpoints.down("sm"));
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var category = router.query.category || "All";

  var categories = (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(new Set(posts.map(function (element) {
    return element.category;
  })));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Meta__WEBPACK_IMPORTED_MODULE_10__.default, {
      title: _common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].title,
      description: _common_env__WEBPACK_IMPORTED_MODULE_9__.DESCRIPTION,
      url: _common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].url.pathname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
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
          lineNumber: 52,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Container, {
          maxWidth: "md",
          className: classes.section,
          children: posts.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
            container: true,
            spacing: 4,
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
                  lineNumber: 60,
                  columnNumber: 12
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
                    lineNumber: 63,
                    columnNumber: 13
                  }, this), categories.map(function (element, index) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                      value: element,
                      children: element
                    }, index + 1, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 49
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 10
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
                    lineNumber: 75,
                    columnNumber: 34
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_posts_PostList__WEBPACK_IMPORTED_MODULE_7__.default, {
                data: posts
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
            container: true,
            spacing: 5,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_contents_NoContents__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsImltYWdlcyIsInVybCIsImdldFJhbmRvbUl0ZW0iLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdGVnb3J5IiwicXVlcnkiLCJjYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiZWxlbWVudCIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwibGVuZ3RoIiwiZSIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJpbmRleCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJvcHRpb24iLCJ0aXRsZSIsInB1c2giLCJzbHVnIiwicGFyYW0iLCJwYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0EsS0FBVCxPQUNmO0FBQUE7O0FBQUE7O0FBQUEsTUFEZ0NDLEtBQ2hDLFFBRGdDQSxLQUNoQztBQUFBLE1BRHVDQyxNQUN2QyxRQUR1Q0EsTUFDdkM7QUFDQyxNQUFNQyxHQUFHLEdBQUdDLDZEQUFhLENBQUNGLE1BQUQsQ0FBekI7QUFFQSxNQUFNRyxLQUFLLEdBQUdDLDREQUFRLEVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFH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QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrREE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBeEV3QkQsSztVQUlUTSx3RCxFQUNHRSw2RCxFQUlGTSxrRDs7O0tBVFFkLEs7O0FBeUV4QixTQUFTMkIsZ0JBQVQsQ0FBMEJELENBQTFCLEVBQTZCYixNQUE3QixFQUNBO0FBQ0NBLFFBQU0sQ0FBQ3NCLElBQVAsQ0FBWTtBQUNYbkIsU0FBSyxFQUFFO0FBQ05zQixVQUFJLEVBQUUsQ0FEQTtBQUVOdkIsY0FBUSxFQUFFVyxDQUFDLENBQUNhLE1BQUYsQ0FBU0M7QUFGYjtBQURJLEdBQVosRUFLR0MsU0FMSCxFQUtjO0FBQ2JDLFVBQU0sRUFBRTtBQURLLEdBTGQ7QUFRQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVM5QixTQUFULEdBQ0E7QUFDQyxTQUFPK0IsOERBQVUsQ0FBQyxVQUFDdEMsS0FBRDtBQUFBLFdBQVk7QUFDN0JtQixhQUFPLEVBQUU7QUFDUm9CLGlCQUFTLEVBQUV2QyxLQUFLLENBQUN3QyxPQUFOLENBQWMsRUFBZDtBQURIO0FBRG9CLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQUtBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy5lZDdhN2UxNjJlZDlkNGQ4MDQyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOqyjOyLnOq4gCDtjpjsnbTsp4AgSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNC4yNyBUaHUgMjI6Mzc6MDZcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgR3JpZCwgSW5wdXRMYWJlbCwgbWFrZVN0eWxlcywgU2VsZWN0LCBUZXh0RmllbGQsIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBUb3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL1RvcFwiO1xyXG5pbXBvcnQgUG9zdExpc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9wb3N0cy9Qb3N0TGlzdFwiO1xyXG5pbXBvcnQgeyBnZXRNYWluSW1hZ2VzLCBnZXRDb250ZW50cyB9IGZyb20gXCIuLi8uLi9jb21tb24vYXBpXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBERVNDUklQVElPTiwgTUVOVV9MSVNUIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL01ldGFcIjtcclxuaW1wb3J0IE5vQ29udGVudHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9Ob0NvbnRlbnRzXCI7XHJcblxyXG4vKipcclxuICog6rKM7Iuc6riAIO2OmOydtOyngCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTT05bXX0gcG9zdHM6IOqyjOyLnOq4gCDrpqzsiqTtirhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0cywgaW1hZ2VzIH0pXHJcbntcclxuXHRjb25zdCB1cmwgPSBnZXRSYW5kb21JdGVtKGltYWdlcyk7XHJcblxyXG5cdGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHRjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnkgfHwgXCJBbGxcIjtcclxuXHJcblx0Y29uc3QgY2F0ZWdvcmllcyA9IFsgLi4ubmV3IFNldChwb3N0cy5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNhdGVnb3J5KSkgXTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PE1ldGEgdGl0bGU9e01FTlVfTElTVFsxXS50aXRsZX0gZGVzY3JpcHRpb249e0RFU0NSSVBUSU9OfSB1cmw9e01FTlVfTElTVFsxXS51cmwucGF0aG5hbWV9IC8+XHJcblxyXG5cdFx0XHQ8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuXHRcdFx0XHQ8RmFkZT5cclxuXHRcdFx0XHRcdDxUb3AgdGl0bGU9e01FTlVfTElTVFsxXS50aXRsZX0gZGVzYz17YFBvc3RzIG9mIFwiJHtjYXRlZ29yeX1cImB9IGltYWdlPXtgL2Fzc2V0cy9pbWFnZXMvbWFpbi8ke3VybH1gfSBvbmx5RW5nIC8+XHJcblxyXG5cdFx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cG9zdHMubGVuZ3RoID4gMCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17aXNNb2JpbGUgPyAxMiA6IDR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBmdWxsV2lkdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBpZD1cIm5hbWVcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0IG5hdGl2ZSBsYWJlbD1cIkNhdGVnb3J5XCIgdmFsdWU9e2NhdGVnb3J5fSBvbkNoYW5nZT17ZSA9PiBvblNlbGVjdENhdGVnb3J5KGUsIHJvdXRlcil9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtlbGVtZW50fT57ZWxlbWVudH08L29wdGlvbj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxBdXRvY29tcGxldGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e3Bvc3RzLnNvcnQoKGEsIGIpID0+IC1iLmNhdGVnb3J5LmxvY2FsZUNvbXBhcmUoYS5jYXRlZ29yeSkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXBCeT17b3B0aW9uID0+IG9wdGlvbi5jYXRlZ29yeX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdldE9wdGlvbkxhYmVsPXtvcHRpb24gPT4gb3B0aW9uLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvcHRpb24pID0+IHJvdXRlci5wdXNoKGAvcG9zdHMvJHtvcHRpb24uc2x1Z31gKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcklucHV0PXtwYXJhbSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbX0gbGFiZWw9XCLqsozsi5zquIAg6rKA7IOJXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQb3N0TGlzdCBkYXRhPXtwb3N0c30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Tm9Db250ZW50cyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Lm07YWM6rOg66asIOyEoO2DnSDsnbTrsqTtirgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnR9IGU6IOydtOuypO2KuCDqsJ3ssrRcclxuICogQHBhcmFtIHtPYmplY3R9IHJvdXRlcjog65287Jqw7YSwIOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gb25TZWxlY3RDYXRlZ29yeShlLCByb3V0ZXIpXHJcbntcclxuXHRyb3V0ZXIucHVzaCh7XHJcblx0XHRxdWVyeToge1xyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRjYXRlZ29yeTogZS50YXJnZXQudmFsdWVcclxuXHRcdH1cclxuXHR9LCB1bmRlZmluZWQsIHtcclxuXHRcdHNjcm9sbDogZmFsc2VcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHNlY3Rpb246IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59XHJcblxyXG4vKipcclxuICog7IKs7Jqp7J6QIFByb3BzIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge09iamVjdH0g7IKs7Jqp7J6QIFByb3BzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRDb250ZW50cyhcInBvc3RzXCIpO1xyXG5cclxuXHRjb25zdCBpbWFnZXMgPSBnZXRNYWluSW1hZ2VzKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBwb3N0cywgaW1hZ2VzIH1cclxuXHR9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==