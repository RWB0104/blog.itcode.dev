self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/section/contents/Tags.js":
/*!*********************************************!*\
  !*** ./components/section/contents/Tags.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Tags; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\contents\\Tags.js";

/**
 * 태그 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.24 Mon 11:40:20
 */

function Tags(_ref) {
  var _this = this;

  var list = _ref.list;
  return list.map(function (element, index) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      component: "sub",
      color: "primary",
      children: element
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 38
    }, _this);
  });
}
_c = Tags;

var _c;

$RefreshReg$(_c, "Tags");

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


/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _components_section_contents_CotentsBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/section/contents/CotentsBody */ "./components/section/contents/CotentsBody.js");
/* harmony import */ var _components_section_contents_SideMover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/section/contents/SideMover */ "./components/section/contents/SideMover.js");
/* harmony import */ var _components_section_contents_Utterances__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/section/contents/Utterances */ "./components/section/contents/Utterances.js");
/* harmony import */ var _components_section_contents_NoUtterances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/section/contents/NoUtterances */ "./components/section/contents/NoUtterances.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* harmony import */ var _components_section_posts_RelatedList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/section/posts/RelatedList */ "./components/section/posts/RelatedList.js");
/* harmony import */ var _components_global_Meta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/global/Meta */ "./components/global/Meta.js");
/* harmony import */ var _components_section_contents_Tags__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/section/contents/Tags */ "./components/section/contents/Tags.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\pages\\posts\\[slug].js",
    _s = $RefreshSig$();

/**
 * 게시글 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.19 Wed 20:04:13
 */
// 라이브러리 모듈



 // 사용자 모듈











/**
 * 게시글 JSX 반환 함수
 *
 * @param {Object} post: 게시글
 *
 * @returns {JSX} JSX 객체
 */

var __N_SSG = true;
function Post(_ref) {
  _s();

  var page = _ref.page,
      post = _ref.post,
      group = _ref.group;
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // 유효하지 않은 경로일 경우

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 10
    }, this);
  } // 유효한 경로일 경우
  else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Meta__WEBPACK_IMPORTED_MODULE_11__.default, {
          title: post.title,
          description: post.excerpt,
          url: "/posts/".concat(post.slug),
          image: post.coverImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_3__.default, {
          title: post.title,
          desc: (0,_common_common__WEBPACK_IMPORTED_MODULE_8__.getFormattedDate)(new Date(post.date)),
          category: post.category,
          image: post.coverImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Container, {
          maxWidth: "md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_contents_CotentsBody__WEBPACK_IMPORTED_MODULE_4__.default, {
            content: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 6
          }, this), group.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_posts_RelatedList__WEBPACK_IMPORTED_MODULE_10__.default, {
            list: group
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 27
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_contents_Tags__WEBPACK_IMPORTED_MODULE_12__.default, {
            list: post.tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_contents_SideMover__WEBPACK_IMPORTED_MODULE_5__.default, {
            page: page
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {
            display: "flex",
            alignItems: "center",
            className: classes.divider,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {
              flexGrow: 1,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Divider, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Avatar, {
                alt: "RWB",
                className: classes.avatar,
                src: "/assets/images/profile.jpg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Box, {
              flexGrow: 1,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Divider, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Grid, {
            container: true,
            justify: "flex-end",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Grid, {
              item: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.Button, {
                variant: "outlined",
                className: classes.list_button,
                fullWidth: true,
                startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__.Menu, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 88
                }, this),
                onClick: function onClick() {
                  return router.push(_common_env__WEBPACK_IMPORTED_MODULE_9__.MENU_LIST[1].url);
                },
                children: "\uBAA9\uB85D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 6
          }, this), post.comment ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_contents_Utterances__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 22
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section_contents_NoUtterances__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 39
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 5
        }, this)]
      }, void 0, true);
    }
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Post;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.makeStyles)(function (theme) {
    return {
      divider: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      },
      avatar: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3)
      },
      list_button: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2)
      }
    };
  })();
}
/**
 * 사용자 Props 반환 함수
 *
 * @param {Object} params: 컨텐츠
 *
 * @returns {Object} 사용자 Props
 */


var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL1RhZ3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJUYWdzIiwibGlzdCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIlBvc3QiLCJwYWdlIiwicG9zdCIsImdyb3VwIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJleGNlcnB0IiwiY292ZXJJbWFnZSIsImdldEZvcm1hdHRlZERhdGUiLCJEYXRlIiwiZGF0ZSIsImNhdGVnb3J5IiwibGVuZ3RoIiwidGFnIiwiZGl2aWRlciIsImF2YXRhciIsImxpc3RfYnV0dG9uIiwicHVzaCIsIk1FTlVfTElTVCIsImNvbW1lbnQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQUQrQkMsSUFDL0IsUUFEK0JBLElBQy9CO0FBQ0MsU0FBT0EsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsd0JBQW9CLDhEQUFDLHlEQUFEO0FBQVksZUFBUyxFQUFDLEtBQXRCO0FBQXdDLFdBQUssRUFBQyxTQUE5QztBQUFBLGdCQUF5REQ7QUFBekQsT0FBaUNDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEI7QUFBQSxHQUFULENBQVA7QUFDQTtLQUh1QkosSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU4sQ0FBYyxDQUFkO0FBRk4sT0FEb0I7QUFLN0JSLFlBQU0sRUFBRTtBQUNQVSxtQkFBVyxFQUFFSixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFUEcsa0JBQVUsRUFBRUwsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZMLE9BTHFCO0FBUzdCUCxpQkFBVyxFQUFFO0FBQ1pXLG9CQUFZLEVBQUVOLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FERjtBQUVaSyxtQkFBVyxFQUFFUCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRkQ7QUFUZ0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBY0E7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uMmM4OGFhMjI0ZjgwNjJlYmUzNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDtg5zqt7gg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMjQgTW9uIDExOjQwOjIwXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFncyh7IGxpc3QgfSlcclxue1xyXG5cdHJldHVybiBsaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInN1YlwiIGtleT17aW5kZXh9IGNvbG9yPVwicHJpbWFyeVwiPntlbGVtZW50fTwvVHlwb2dyYXBoeT4pO1xyXG59IiwiLyoqXHJcbiAqIOqyjOyLnOq4gCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xOSBXZWQgMjA6MDQ6MTNcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQm94LCBCdXR0b24sIENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgVG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9Ub3BcIjtcclxuaW1wb3J0IENvbnRlbnRzQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL0NvdGVudHNCb2R5XCI7XHJcbmltcG9ydCBTaWRlTW92ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9TaWRlTW92ZXJcIjtcclxuaW1wb3J0IFV0dGVyYW5jZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9VdHRlcmFuY2VzXCI7XHJcbmltcG9ydCBOb1V0dGVyYW5jZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9Ob1V0dGVyYW5jZXNcIjtcclxuaW1wb3J0IHsgZ2V0Q29udGVudEJ5U2x1ZywgZ2V0Q29udGVudHMsIG1hcmtkb3duVG9IdG1sIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkRGF0ZSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IE1FTlVfTElTVCB9IGZyb20gXCIuLi8uLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCBSZWxhdGVkTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0XCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9NZXRhXCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vY29udGVudHMvVGFnc1wiO1xyXG5cclxuLyoqXHJcbiAqIOqyjOyLnOq4gCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zdDog6rKM7Iuc6riAXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwYWdlLCBwb3N0LCBncm91cCB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Ly8g7Jyg7Zqo7ZWY7KeAIOyViuydgCDqsr3roZzsnbwg6rK97JqwXHJcblx0aWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1ZylcclxuXHR7XHJcblx0XHRyZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG5cdH1cclxuXHJcblx0Ly8g7Jyg7Zqo7ZWcIOqyveuhnOydvCDqsr3smrBcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8TWV0YSB0aXRsZT17cG9zdC50aXRsZX0gZGVzY3JpcHRpb249e3Bvc3QuZXhjZXJwdH0gdXJsPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IGltYWdlPXtwb3N0LmNvdmVySW1hZ2V9IC8+XHJcblxyXG5cdFx0XHRcdDxUb3AgdGl0bGU9e3Bvc3QudGl0bGV9IGRlc2M9e2dldEZvcm1hdHRlZERhdGUobmV3IERhdGUocG9zdC5kYXRlKSl9IGNhdGVnb3J5PXtwb3N0LmNhdGVnb3J5fSBpbWFnZT17cG9zdC5jb3ZlckltYWdlfSAvPlxyXG5cclxuXHRcdFx0XHQ8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuXHRcdFx0XHRcdDxDb250ZW50c0JvZHkgY29udGVudD17cG9zdH0gLz5cclxuXHJcblx0XHRcdFx0XHR7Z3JvdXAubGVuZ3RoID4gMCAmJiA8UmVsYXRlZExpc3QgbGlzdD17Z3JvdXB9IC8+fVxyXG5cclxuXHRcdFx0XHRcdDxUYWdzIGxpc3Q9e3Bvc3QudGFnfSAvPlxyXG5cclxuXHRcdFx0XHRcdDxTaWRlTW92ZXIgcGFnZT17cGFnZX0gLz5cclxuXHJcblx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfT5cclxuXHRcdFx0XHRcdFx0PEJveCBmbGV4R3Jvdz17MX0+XHJcblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdDxBdmF0YXIgYWx0PVwiUldCXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0gc3JjPVwiL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5qcGdcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdDxCb3ggZmxleEdyb3c9ezF9PlxyXG5cdFx0XHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBpdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RfYnV0dG9ufSBmdWxsV2lkdGggc3RhcnRJY29uPXs8TWVudSAvPn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goTUVOVV9MSVNUWzFdLnVybCl9PuuqqeuhnTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0e3Bvc3QuY29tbWVudCA/IDxVdHRlcmFuY2VzIC8+IDogPE5vVXR0ZXJhbmNlcyAvPn1cclxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdFx0PC8+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdGRpdmlkZXI6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMylcclxuXHRcdH0sXHJcblx0XHRhdmF0YXI6IHtcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMylcclxuXHRcdH0sXHJcblx0XHRsaXN0X2J1dHRvbjoge1xyXG5cdFx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsgqzsmqnsnpAgUHJvcHMg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zOiDsu6jthZDsuKBcclxuICpcclxuICogQHJldHVybnMge09iamVjdH0g7IKs7Jqp7J6QIFByb3BzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSlcclxue1xyXG5cdGNvbnN0IHBvc3RzID0gZ2V0Q29udGVudHMoXCJwb3N0c1wiKTtcclxuXHRjb25zdCBwb3N0ID0gZ2V0Q29udGVudEJ5U2x1ZyhcInBvc3RzXCIsIHBhcmFtcy5zbHVnKTtcclxuXHJcblx0Y29uc3QgaW5kZXggPSBwb3N0cy5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnNsdWcgPT09IHBvc3Quc2x1Zyk7XHJcblxyXG5cdGNvbnN0IGdyb3VwID0gcG9zdC5ncm91cCA/IHBvc3RzLmZpbHRlcihlbGVtZW50ID0+IChlbGVtZW50Lmdyb3VwID09PSBwb3N0Lmdyb3VwICYmIGVsZW1lbnQuc2x1ZyAhPT0gcG9zdC5zbHVnKSkgOiBbXTtcclxuXHJcblx0Y29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBhZ2U6IHtcclxuXHRcdFx0XHR0eXBlOiBcInBvc3RzXCIsXHJcblx0XHRcdFx0cHJldjogaW5kZXggLSAxID4gMCA/IHBvc3RzW2luZGV4IC0gMV0gOiAtMSxcclxuXHRcdFx0XHRuZXh0OiBpbmRleCArIDEgPiBwb3N0cy5sZW5ndGggLSAxID8gLTEgOiBwb3N0c1tpbmRleCArIDFdXHJcblx0XHRcdH0sXHJcblx0XHRcdGdyb3VwOiBncm91cCxcclxuXHRcdFx0cG9zdDoge1xyXG5cdFx0XHRcdC4uLnBvc3QsXHJcblx0XHRcdFx0Y29udGVudFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOuPmeyggSDqsr3roZwg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDrj5nsoIEg6rK966GcIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKClcclxue1xyXG5cdGNvbnN0IHBvc3RzID0gZ2V0Q29udGVudHMoXCJwb3N0c1wiKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+XHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRzbHVnOiBwb3N0LnNsdWdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9KSxcclxuXHRcdGZhbGxiYWNrOiBmYWxzZVxyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9