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
          desc: post.date,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwYWdlIiwicG9zdCIsImdyb3VwIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJleGNlcnB0IiwiY292ZXJJbWFnZSIsImRhdGUiLCJjYXRlZ29yeSIsImxlbmd0aCIsInRhZyIsImRpdmlkZXIiLCJhdmF0YXIiLCJsaXN0X2J1dHRvbiIsInB1c2giLCJNRU5VX0xJU1QiLCJjb21tZW50IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNBLElBQVQsT0FDZjtBQUFBOztBQUFBLE1BRCtCQyxJQUMvQixRQUQrQkEsSUFDL0I7QUFBQSxNQURxQ0MsSUFDckMsUUFEcUNBLElBQ3JDO0FBQUEsTUFEMkNDLEtBQzNDLFFBRDJDQSxLQUMzQztBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEIsQ0FIRCxDQUtDOztBQUNBLE1BQUksQ0FBQ0QsTUFBTSxDQUFDRSxVQUFSLElBQXNCLEVBQUNOLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVPLElBQVAsQ0FBMUIsRUFDQTtBQUNDLHdC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NEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBZixnQkFBZ0MsOERBQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRDtBQUFBLHNCQUREO0FBdUNBO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQTdEd0J0QixJO1VBSVJPLGtEOzs7S0FKUVAsSTs7QUE4RHhCLFNBQVNLLFNBQVQsR0FDQTtBQUNDLFNBQU9rQiw4REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCUCxhQUFPLEVBQUU7QUFDUlEsaUJBQVMsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURIO0FBRVJDLG9CQUFZLEVBQUVILEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFGTixPQURvQjtBQUs3QlIsWUFBTSxFQUFFO0FBQ1BVLG1CQUFXLEVBQUVKLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FETjtBQUVQRyxrQkFBVSxFQUFFTCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRkwsT0FMcUI7QUFTN0JQLGlCQUFXLEVBQUU7QUFDWlcsb0JBQVksRUFBRU4sS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURGO0FBRVpLLG1CQUFXLEVBQUVQLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFGRDtBQVRnQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFjQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS4xNGM0YjIzZDkzYWZkMTI0MTg0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOqyjOyLnOq4gCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xOSBXZWQgMjA6MDQ6MTNcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQm94LCBCdXR0b24sIENvbnRhaW5lciwgRGl2aWRlciwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgVG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9Ub3BcIjtcclxuaW1wb3J0IENvbnRlbnRzQm9keSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL0NvdGVudHNCb2R5XCI7XHJcbmltcG9ydCBTaWRlTW92ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9TaWRlTW92ZXJcIjtcclxuaW1wb3J0IFV0dGVyYW5jZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9VdHRlcmFuY2VzXCI7XHJcbmltcG9ydCBOb1V0dGVyYW5jZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VjdGlvbi9jb250ZW50cy9Ob1V0dGVyYW5jZXNcIjtcclxuaW1wb3J0IHsgZ2V0Q29udGVudEJ5U2x1ZywgZ2V0Q29udGVudHMsIG1hcmtkb3duVG9IdG1sIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IHsgZ2V0Rm9ybWF0dGVkRGF0ZSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uXCI7XHJcbmltcG9ydCB7IE1FTlVfTElTVCB9IGZyb20gXCIuLi8uLi9jb21tb24vZW52XCI7XHJcbmltcG9ydCBSZWxhdGVkTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0XCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dsb2JhbC9NZXRhXCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vY29udGVudHMvVGFnc1wiO1xyXG5cclxuLyoqXHJcbiAqIOqyjOyLnOq4gCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zdDog6rKM7Iuc6riAXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwYWdlLCBwb3N0LCBncm91cCB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Ly8g7Jyg7Zqo7ZWY7KeAIOyViuydgCDqsr3roZzsnbwg6rK97JqwXHJcblx0aWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1ZylcclxuXHR7XHJcblx0XHRyZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xyXG5cdH1cclxuXHJcblx0Ly8g7Jyg7Zqo7ZWcIOqyveuhnOydvCDqsr3smrBcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PD5cclxuXHRcdFx0XHQ8TWV0YSB0aXRsZT17cG9zdC50aXRsZX0gZGVzY3JpcHRpb249e3Bvc3QuZXhjZXJwdH0gdXJsPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IGltYWdlPXtwb3N0LmNvdmVySW1hZ2V9IC8+XHJcblxyXG5cdFx0XHRcdDxUb3AgdGl0bGU9e3Bvc3QudGl0bGV9IGRlc2M9e3Bvc3QuZGF0ZX0gY2F0ZWdvcnk9e3Bvc3QuY2F0ZWdvcnl9IGltYWdlPXtwb3N0LmNvdmVySW1hZ2V9IC8+XHJcblxyXG5cdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG5cdFx0XHRcdFx0PENvbnRlbnRzQm9keSBjb250ZW50PXtwb3N0fSAvPlxyXG5cclxuXHRcdFx0XHRcdHtncm91cC5sZW5ndGggPiAwICYmIDxSZWxhdGVkTGlzdCBsaXN0PXtncm91cH0gLz59XHJcblxyXG5cdFx0XHRcdFx0PFRhZ3MgbGlzdD17cG9zdC50YWd9IC8+XHJcblxyXG5cdFx0XHRcdFx0PFNpZGVNb3ZlciBwYWdlPXtwYWdlfSAvPlxyXG5cclxuXHRcdFx0XHRcdDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9PlxyXG5cdFx0XHRcdFx0XHQ8Qm94IGZsZXhHcm93PXsxfT5cclxuXHRcdFx0XHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0PEF2YXRhciBhbHQ9XCJSV0JcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9wcm9maWxlLmpwZ1wiIC8+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBmbGV4R3Jvdz17MX0+XHJcblx0XHRcdFx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIganVzdGlmeT1cImZsZXgtZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdF9idXR0b259IGZ1bGxXaWR0aCBzdGFydEljb249ezxNZW51IC8+fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChNRU5VX0xJU1RbMV0udXJsKX0+66qp66GdPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHR7cG9zdC5jb21tZW50ID8gPFV0dGVyYW5jZXMgLz4gOiA8Tm9VdHRlcmFuY2VzIC8+fVxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0ZGl2aWRlcjoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKVxyXG5cdFx0fSxcclxuXHRcdGF2YXRhcjoge1xyXG5cdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKVxyXG5cdFx0fSxcclxuXHRcdGxpc3RfYnV0dG9uOiB7XHJcblx0XHRcdHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMilcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyCrOyaqeyekCBQcm9wcyDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXM6IOy7qO2FkOy4oFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDsgqzsmqnsnpAgUHJvcHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRDb250ZW50cyhcInBvc3RzXCIpO1xyXG5cdGNvbnN0IHBvc3QgPSBnZXRDb250ZW50QnlTbHVnKFwicG9zdHNcIiwgcGFyYW1zLnNsdWcpO1xyXG5cclxuXHRjb25zdCBpbmRleCA9IHBvc3RzLmZpbmRJbmRleChlbGVtZW50ID0+IGVsZW1lbnQuc2x1ZyA9PT0gcG9zdC5zbHVnKTtcclxuXHJcblx0Y29uc3QgZ3JvdXAgPSBwb3N0Lmdyb3VwID8gcG9zdHMuZmlsdGVyKGVsZW1lbnQgPT4gKGVsZW1lbnQuZ3JvdXAgPT09IHBvc3QuZ3JvdXAgJiYgZWxlbWVudC5zbHVnICE9PSBwb3N0LnNsdWcpKSA6IFtdO1xyXG5cclxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8IFwiXCIpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cGFnZToge1xyXG5cdFx0XHRcdHR5cGU6IFwicG9zdHNcIixcclxuXHRcdFx0XHRwcmV2OiBpbmRleCAtIDEgPiAwID8gcG9zdHNbaW5kZXggLSAxXSA6IC0xLFxyXG5cdFx0XHRcdG5leHQ6IGluZGV4ICsgMSA+IHBvc3RzLmxlbmd0aCAtIDEgPyAtMSA6IHBvc3RzW2luZGV4ICsgMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z3JvdXA6IGdyb3VwLFxyXG5cdFx0XHRwb3N0OiB7XHJcblx0XHRcdFx0Li4ucG9zdCxcclxuXHRcdFx0XHRjb250ZW50XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG4vKipcclxuICog64+Z7KCBIOqyveuhnCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IOuPmeyggSDqsr3roZwg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKVxyXG57XHJcblx0Y29uc3QgcG9zdHMgPSBnZXRDb250ZW50cyhcInBvc3RzXCIpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IHBvc3RzLm1hcCgocG9zdCkgPT5cclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdHNsdWc6IHBvc3Quc2x1Z1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlXHJcblx0fTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=