self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

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



var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\pages\\posts\\[slug].js",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwYWdlIiwicG9zdCIsImdyb3VwIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJleGNlcnB0IiwiY292ZXJJbWFnZSIsImdldEZvcm1hdHRlZERhdGUiLCJEYXRlIiwiZGF0ZSIsImNhdGVnb3J5IiwibGVuZ3RoIiwidGFnIiwiZGl2aWRlciIsImF2YXRhciIsImxpc3RfYnV0dG9uIiwicHVzaCIsIk1FTlVfTElTVCIsImNvbW1lbnQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBU0EsSUFBVCxPQUNmO0FBQUE7O0FBQUEsTUFEK0JDLElBQy9CLFFBRCtCQSxJQUMvQjtBQUFBLE1BRHFDQyxJQUNyQyxRQURxQ0EsSUFDckM7QUFBQSxNQUQyQ0MsS0FDM0MsUUFEMkNBLEtBQzNDO0FBQ0MsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QixDQUhELENBS0M7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFVBQVIsSUFBc0IsRUFBQ04sSUFBRCxhQUFDQSxJQUFELGVBQUNBLElBQUksQ0FB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QTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJELEVBNkJFckIsSUFBSSxDQUFDc0IsT0FBTCxnQkFBZSw4REFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFmLGdCQUFnQyw4REFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTdCbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxEO0FBQUEsc0JBREQ7QUF1Q0E7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBN0R3QnhCLEk7VUFJUk8sa0Q7OztLQUpRUCxJOztBQThEeEIsU0FBU0ssU0FBVCxHQUNBO0FBQ0MsU0FBT29CLDhEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JQLGFBQU8sRUFBRTtBQUNSUSxpQkFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREg7QUFFUkMsb0JBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZOLE9BRG9CO0FBSzdCUixZQUFNLEVBQUU7QUFDUFUsbUJBQVcsRUFBRUosS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQUROO0FBRVBHLGtCQUFVLEVBQUVMLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFGTCxPQUxxQjtBQVM3QlAsaUJBQVcsRUFBRTtBQUNaVyxvQkFBWSxFQUFFTixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREY7QUFFWkssbUJBQVcsRUFBRVAsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZEO0FBVGdCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQWNBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjkwMzk1NzBkNDhiNzliNjk2NzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6rKM7Iuc6riAIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjE5IFdlZCAyMDowNDoxM1xyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCb3gsIEJ1dHRvbiwgQ29udGFpbmVyLCBEaXZpZGVyLCBHcmlkLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBUb3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL1RvcFwiO1xyXG5pbXBvcnQgQ29udGVudHNCb2R5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vY29udGVudHMvQ290ZW50c0JvZHlcIjtcclxuaW1wb3J0IFNpZGVNb3ZlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL1NpZGVNb3ZlclwiO1xyXG5pbXBvcnQgVXR0ZXJhbmNlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL1V0dGVyYW5jZXNcIjtcclxuaW1wb3J0IE5vVXR0ZXJhbmNlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL05vVXR0ZXJhbmNlc1wiO1xyXG5pbXBvcnQgeyBnZXRDb250ZW50QnlTbHVnLCBnZXRDb250ZW50cywgbWFya2Rvd25Ub0h0bWwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FwaVwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IHsgTUVOVV9MSVNUIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IFJlbGF0ZWRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHMvUmVsYXRlZExpc3RcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL01ldGFcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9UYWdzXCI7XHJcblxyXG4vKipcclxuICog6rKM7Iuc6riAIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3N0OiDqsozsi5zquIBcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBhZ2UsIHBvc3QsIGdyb3VwIH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHQvLyDsnKDtmqjtlZjsp4Ag7JWK7J2AIOqyveuhnOydvCDqsr3smrBcclxuXHRpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKVxyXG5cdHtcclxuXHRcdHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcblx0fVxyXG5cclxuXHQvLyDsnKDtmqjtlZwg6rK966Gc7J28IOqyveyasFxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxNZXRhIHRpdGxlPXtwb3N0LnRpdGxlfSBkZXNjcmlwdGlvbj17cG9zdC5leGNlcnB0fSB1cmw9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0gaW1hZ2U9e3Bvc3QuY292ZXJJbWFnZX0gLz5cclxuXHJcblx0XHRcdFx0PFRvcCB0aXRsZT17cG9zdC50aXRsZX0gZGVzYz17Z2V0Rm9ybWF0dGVkRGF0ZShuZXcgRGF0ZShwb3N0LmRhdGUpKX0gY2F0ZWdvcnk9e3Bvc3QuY2F0ZWdvcnl9IGltYWdlPXtwb3N0LmNvdmVySW1hZ2V9IC8+XHJcblxyXG5cdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG5cdFx0XHRcdFx0PENvbnRlbnRzQm9keSBjb250ZW50PXtwb3N0fSAvPlxyXG5cclxuXHRcdFx0XHRcdHtncm91cC5sZW5ndGggPiAwICYmIDxSZWxhdGVkTGlzdCBsaXN0PXtncm91cH0gLz59XHJcblxyXG5cdFx0XHRcdFx0PFRhZ3MgbGlzdD17cG9zdC50YWd9IC8+XHJcblxyXG5cdFx0XHRcdFx0PFNpZGVNb3ZlciBwYWdlPXtwYWdlfSAvPlxyXG5cclxuXHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8Qm94IGZsZXhHcm93PXsxfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJSV0JcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9wcm9maWxlLmpwZ1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBmbGV4R3Jvdz17MX0+XHJcblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdF9idXR0b259IGZ1bGxXaWR0aCBzdGFydEljb249ezxNZW51IC8+fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChNRU5VX0xJU1RbMV0udXJsKX0+66qp66GdPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHR7cG9zdC5jb21tZW50ID8gPFV0dGVyYW5jZXMgLz4gOiA8Tm9VdHRlcmFuY2VzIC8+fVxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0ZGl2aWRlcjoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKVxyXG5cdFx0fSxcclxuXHRcdGF2YXRhcjoge1xyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKVxyXG5cdFx0fSxcclxuXHRcdGxpc3RfYnV0dG9uOiB7XHJcblx0XHRcdHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMilcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyCrOyaqeyekCBQcm9wcyDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXM6IOy7qO2FkOy4oFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDsgqzsmqnsnpAgUHJvcHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRDb250ZW50cyhcInBvc3RzXCIpO1xyXG5cdGNvbnN0IHBvc3QgPSBnZXRDb250ZW50QnlTbHVnKFwicG9zdHNcIiwgcGFyYW1zLnNsdWcpO1xyXG5cclxuXHRjb25zdCBpbmRleCA9IHBvc3RzLnNvcnQoKS5maW5kSW5kZXgoZWxlbWVudCA9PiBlbGVtZW50LnNsdWcgPT09IHBvc3Quc2x1Zyk7XHJcblxyXG5cdGNvbnN0IGdyb3VwID0gcG9zdC5ncm91cCA/IHBvc3RzLmZpbHRlcihlbGVtZW50ID0+IChlbGVtZW50Lmdyb3VwID09PSBwb3N0Lmdyb3VwICYmIGVsZW1lbnQuc2x1ZyAhPT0gcG9zdC5zbHVnKSkgOiBbXTtcclxuXHJcblx0Y29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBhZ2U6IHtcclxuXHRcdFx0XHR0eXBlOiBcInBvc3RzXCIsXHJcblx0XHRcdFx0cHJldjogaW5kZXggLSAxID4gMCA/IHBvc3RzW2luZGV4IC0gMV0gOiAtMSxcclxuXHRcdFx0XHRuZXh0OiBpbmRleCArIDEgPiBwb3N0cy5sZW5ndGggLSAxID8gLTEgOiBwb3N0c1tpbmRleCArIDFdXHJcblx0XHRcdH0sXHJcblx0XHRcdGdyb3VwOiBncm91cCxcclxuXHRcdFx0cG9zdDoge1xyXG5cdFx0XHRcdC4uLnBvc3QsXHJcblx0XHRcdFx0Y29udGVudFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOuPmeyggSDqsr3roZwg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDrj5nsoIEg6rK966GcIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKClcclxue1xyXG5cdGNvbnN0IHBvc3RzID0gZ2V0Q29udGVudHMoXCJwb3N0c1wiKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+XHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRzbHVnOiBwb3N0LnNsdWdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9KSxcclxuXHRcdGZhbGxiYWNrOiBmYWxzZVxyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9