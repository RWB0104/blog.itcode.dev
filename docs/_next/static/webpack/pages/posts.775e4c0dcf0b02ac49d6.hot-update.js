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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_6__.default, {
          title: _common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].title,
          image: "/assets/images/main/".concat(url),
          onlyEng: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
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
                lineNumber: 62,
                columnNumber: 11
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
                  columnNumber: 12
                }, this), categories.map(function (element, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                    value: element,
                    children: element
                  }, index + 1, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 48
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 9
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
                  columnNumber: 33
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_posts_PostList__WEBPACK_IMPORTED_MODULE_7__.default, {
              data: posts
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 8
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
          container: true,
          spacing: 5,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.Grid, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_contents_NoContents__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 8
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsImltYWdlcyIsInVybCIsImdldFJhbmRvbUl0ZW0iLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdGVnb3J5IiwicXVlcnkiLCJjYXRlZ29yaWVzIiwiU2V0IiwibWFwIiwiZWxlbWVudCIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwibGVuZ3RoIiwiZSIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJpbmRleCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJvcHRpb24iLCJ0aXRsZSIsInB1c2giLCJzbHVnIiwicGFyYW0iLCJwYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0EsS0FBVCxPQUNmO0FBQUE7O0FBQUE7O0FBQUEsTUFEZ0NDLEtBQ2hDLFFBRGdDQSxLQUNoQztBQUFBLE1BRHVDQyxNQUN2QyxRQUR1Q0EsTUFDdkM7QUFDQyxNQUFNQyxHQUFHLEdBQUdDLDZEQUFhLENBQUNGLE1BQUQsQ0FBekI7QUFFQSxNQUFNRyxLQUFLLEdBQUdDLDREQUFRLEVBQXRCO0FBQ0EsTUFBTUMsUUFBUSxHQUFH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QTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbURBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQXpFd0JELEs7VUFJVE0sd0QsRUFDR0UsNkQsRUFJRk0sa0Q7OztLQVRRZCxLOztBQTBFeEIsU0FBUzJCLGdCQUFULENBQTBCRCxDQUExQixFQUE2QmIsTUFBN0IsRUFDQTtBQUNDQSxRQUFNLENBQUNzQixJQUFQLENBQVk7QUFDWG5CLFNBQUssRUFBRTtBQUNOc0IsVUFBSSxFQUFFLENBREE7QUFFTnZCLGNBQVEsRUFBRVcsQ0FBQyxDQUFDYSxNQUFGLENBQVNDO0FBRmI7QUFESSxHQUFaLEVBS0dDLFNBTEgsRUFLYztBQUNiQyxVQUFNLEVBQUU7QUFESyxHQUxkO0FBUUE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTOUIsU0FBVCxHQUNBO0FBQ0MsU0FBTytCLDhEQUFVLENBQUMsVUFBQ3RDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCbUIsYUFBTyxFQUFFO0FBQ1JvQixpQkFBUyxFQUFFdkMsS0FBSyxDQUFDd0MsT0FBTixDQUFjLEVBQWQ7QUFESDtBQURvQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFLQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuNzc1ZTRjMGRjZjBiMDJhYzQ5ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDqsozsi5zquIAg7Y6Y7J207KeAIEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDQuMjcgVGh1IDIyOjM3OjA2XHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRm9ybUNvbnRyb2wsIEdyaWQsIElucHV0TGFiZWwsIG1ha2VTdHlsZXMsIFNlbGVjdCwgVGV4dEZpZWxkLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgVG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9Ub3BcIjtcclxuaW1wb3J0IFBvc3RMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHMvUG9zdExpc3RcIjtcclxuaW1wb3J0IHsgZ2V0TWFpbkltYWdlcywgZ2V0Q29udGVudHMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FwaVwiO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21JdGVtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IHsgREVTQ1JJUFRJT04sIE1FTlVfTElTVCB9IGZyb20gXCIuLi8uLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9NZXRhXCI7XHJcbmltcG9ydCBOb0NvbnRlbnRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vY29udGVudHMvTm9Db250ZW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIOqyjOyLnOq4gCDtjpjsnbTsp4AgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtKU09OW119IHBvc3RzOiDqsozsi5zquIAg66as7Iqk7Yq4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMsIGltYWdlcyB9KVxyXG57XHJcblx0Y29uc3QgdXJsID0gZ2V0UmFuZG9tSXRlbShpbWFnZXMpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8IFwiQWxsXCI7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3JpZXMgPSBbIC4uLm5ldyBTZXQocG9zdHMubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5jYXRlZ29yeSkpIF07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxNZXRhIHRpdGxlPXtNRU5VX0xJU1RbMV0udGl0bGV9IGRlc2NyaXB0aW9uPXtERVNDUklQVElPTn0gdXJsPXtNRU5VX0xJU1RbMV0udXJsLnBhdGhuYW1lfSAvPlxyXG5cclxuXHRcdFx0PEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0PEZhZGU+XHJcblx0XHRcdFx0XHQ8VG9wIHRpdGxlPXtNRU5VX0xJU1RbMV0udGl0bGV9IGltYWdlPXtgL2Fzc2V0cy9pbWFnZXMvbWFpbi8ke3VybH1gfSBvbmx5RW5nIC8+XHJcblxyXG5cdFx0XHRcdDwvRmFkZT5cclxuXHJcblx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwb3N0cy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9e2lzTW9iaWxlID8gMTIgOiA0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGZ1bGxXaWR0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBpZD1cIm5hbWVcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBuYXRpdmUgbGFiZWw9XCJDYXRlZ29yeVwiIHZhbHVlPXtjYXRlZ29yeX0gb25DaGFuZ2U9e2UgPT4gb25TZWxlY3RDYXRlZ29yeShlLCByb3V0ZXIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yaWVzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtlbGVtZW50fT57ZWxlbWVudH08L29wdGlvbj4pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEF1dG9jb21wbGV0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9e3Bvc3RzLnNvcnQoKGEsIGIpID0+IC1iLmNhdGVnb3J5LmxvY2FsZUNvbXBhcmUoYS5jYXRlZ29yeSkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwQnk9e29wdGlvbiA9PiBvcHRpb24uY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9e29wdGlvbiA9PiBvcHRpb24udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlLCBvcHRpb24pID0+IHJvdXRlci5wdXNoKGAvcG9zdHMvJHtvcHRpb24uc2x1Z31gKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17cGFyYW0gPT4gPFRleHRGaWVsZCB7Li4ucGFyYW19IGxhYmVsPVwi6rKM7Iuc6riAIOqygOyDiVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFBvc3RMaXN0IGRhdGE9e3Bvc3RzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxOb0NvbnRlbnRzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Lm07YWM6rOg66asIOyEoO2DnSDsnbTrsqTtirgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnR9IGU6IOydtOuypO2KuCDqsJ3ssrRcclxuICogQHBhcmFtIHtPYmplY3R9IHJvdXRlcjog65287Jqw7YSwIOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gb25TZWxlY3RDYXRlZ29yeShlLCByb3V0ZXIpXHJcbntcclxuXHRyb3V0ZXIucHVzaCh7XHJcblx0XHRxdWVyeToge1xyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHRjYXRlZ29yeTogZS50YXJnZXQudmFsdWVcclxuXHRcdH1cclxuXHR9LCB1bmRlZmluZWQsIHtcclxuXHRcdHNjcm9sbDogZmFsc2VcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHNlY3Rpb246IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59XHJcblxyXG4vKipcclxuICog7IKs7Jqp7J6QIFByb3BzIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge09iamVjdH0g7IKs7Jqp7J6QIFByb3BzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRDb250ZW50cyhcInBvc3RzXCIpO1xyXG5cclxuXHRjb25zdCBpbWFnZXMgPSBnZXRNYWluSW1hZ2VzKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBwb3N0cywgaW1hZ2VzIH1cclxuXHR9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==