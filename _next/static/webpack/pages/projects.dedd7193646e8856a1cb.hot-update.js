self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects/index.js":
/*!*********************************!*\
  !*** ./pages/projects/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Project; }
/* harmony export */ });
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_section_projects_ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/section/projects/ProjectList */ "./components/section/projects/ProjectList.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* harmony import */ var _components_global_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/global/Meta */ "./components/global/Meta.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_section_contents_NoContents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/section/contents/NoContents */ "./components/section/contents/NoContents.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\pages\\projects\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 프로젝트 페이지 JavaScript
 *
 * @author RWB
 * @since 2021.04.27 Thu 22:37:06
 */
// 라이브러리 모듈


 // 사용자 모듈








/**
 * 프로젝트 페이지 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

var __N_SSG = true;
function Project(_ref) {
  _s();

  var _this = this;

  var projects = _ref.projects,
      images = _ref.images;
  var url = (0,_common_common__WEBPACK_IMPORTED_MODULE_6__.getRandomItem)(images);
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery)(theme.breakpoints.down("sm"));
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var category = router.query.category || "All";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Meta__WEBPACK_IMPORTED_MODULE_8__.default, {
      title: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[2].title,
      description: _common_env__WEBPACK_IMPORTED_MODULE_7__.DESCRIPTION,
      url: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[2].url.pathname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Box, {
      component: "section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Fade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_5__.default, {
          title: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[2].title,
          image: "/assets/images/main/".concat(url),
          onlyEng: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Container, {
          maxWidth: "md",
          className: classes.section,
          children: projects.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
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
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Select, {
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
                    lineNumber: 58,
                    columnNumber: 13
                  }, this), categories.map(function (element, index) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                      value: element,
                      children: element
                    }, index + 1, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 49
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Autocomplete, {
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
                  return router.push("/projects/".concat(option.slug));
                },
                renderInput: function renderInput(param) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextField, _objectSpread(_objectSpread({}, param), {}, {
                    label: "\uD504\uB85C\uC81D\uD2B8 \uAC80\uC0C9",
                    variant: "outlined"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 34
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_projects_ProjectList__WEBPACK_IMPORTED_MODULE_4__.default, {
                data: projects
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 9
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
            container: true,
            spacing: 5,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_contents_NoContents__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(Project, "wJfmFB7sdP7vULpkd22dVjy9Jo8=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_11__.useMediaQuery, next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c = Project;

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

$RefreshReg$(_c, "Project");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdCIsInByb2plY3RzIiwiaW1hZ2VzIiwidXJsIiwiZ2V0UmFuZG9tSXRlbSIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJxdWVyeSIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwibGVuZ3RoIiwiZSIsIm9uU2VsZWN0Q2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwicG9zdHMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwib3B0aW9uIiwidGl0bGUiLCJwdXNoIiwic2x1ZyIsInBhcmFtIiwibWFrZVN0eWxlcyIsIm1hcmdpblRvcCIsInNwYWNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNBLE9BQVQsT0FDZjtBQUFBOztBQUFBOztBQUFBLE1BRGtDQyxRQUNsQyxRQURrQ0EsUUFDbEM7QUFBQSxNQUQ0Q0MsTUFDNUMsUUFENENBLE1BQzVDO0FBQ0MsTUFBTUMsR0FBRyxHQUFHQyw2REFBYSxDQUFDRixNQUFELENBQXpCO0FBRUEsTUFBTUcsS0FBSyxHQUFHQyw0REFBUSxFQUF0QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsaUVBQWEsQ0FBQ0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2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LEVBQUU7QUFDUm1CLGlCQUFTLEVBQUVsQyxLQUFLLENBQUNtQyxPQUFOLENBQWMsRUFBZDtBQURIO0FBRG9CLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQUtBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5kZWRkNzE5MzY0NmU4ODU2YTFjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIO2UhOuhnOygne2KuCDtjpjsnbTsp4AgSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNC4yNyBUaHUgMjI6Mzc6MDZcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIERpdmlkZXIsIEZvcm1Db250cm9sLCBHcmlkLCBIaWRkZW4sIElucHV0TGFiZWwsIG1ha2VTdHlsZXMsIE1lbnVJdGVtLCBTZWxlY3QsIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL3Byb2plY3RzL1Byb2plY3RMaXN0XCI7XHJcbmltcG9ydCB7IGdldE1haW5JbWFnZXMsIGdldENvbnRlbnRzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IFRvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVG9wXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBERVNDUklQVElPTiwgTUVOVV9MSVNUIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL01ldGFcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOb0NvbnRlbnRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24vY29udGVudHMvTm9Db250ZW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIO2UhOuhnOygne2KuCDtjpjsnbTsp4AgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7IHByb2plY3RzLCBpbWFnZXMgfSlcclxue1xyXG5cdGNvbnN0IHVybCA9IGdldFJhbmRvbUl0ZW0oaW1hZ2VzKTtcclxuXHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeSB8fCBcIkFsbFwiO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8TWV0YSB0aXRsZT17TUVOVV9MSVNUWzJdLnRpdGxlfSBkZXNjcmlwdGlvbj17REVTQ1JJUFRJT059IHVybD17TUVOVV9MSVNUWzJdLnVybC5wYXRobmFtZX0gLz5cclxuXHJcblx0XHRcdDxCb3ggY29tcG9uZW50PVwic2VjdGlvblwiPlxyXG5cdFx0XHRcdDxGYWRlPlxyXG5cdFx0XHRcdFx0PFRvcCB0aXRsZT17TUVOVV9MSVNUWzJdLnRpdGxlfSBpbWFnZT17YC9hc3NldHMvaW1hZ2VzL21haW4vJHt1cmx9YH0gb25seUVuZyAvPlxyXG5cclxuXHRcdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHByb2plY3RzLmxlbmd0aCA+IDAgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17NX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9e2lzTW9iaWxlID8gMTIgOiA0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaWQ9XCJuYW1lXCI+Q2F0ZWdvcnk8L0lucHV0TGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBuYXRpdmUgbGFiZWw9XCJDYXRlZ29yeVwiIHZhbHVlPXtjYXRlZ29yeX0gb25DaGFuZ2U9e2UgPT4gb25TZWxlY3RDYXRlZ29yeShlLCByb3V0ZXIpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcmllcy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiA8b3B0aW9uIGtleT17aW5kZXggKyAxfSB2YWx1ZT17ZWxlbWVudH0+e2VsZW1lbnR9PC9vcHRpb24+KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QXV0b2NvbXBsZXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXtwb3N0cy5zb3J0KChhLCBiKSA9PiAtYi5jYXRlZ29yeS5sb2NhbGVDb21wYXJlKGEuY2F0ZWdvcnkpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwQnk9e29wdGlvbiA9PiBvcHRpb24uY2F0ZWdvcnl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnZXRPcHRpb25MYWJlbD17b3B0aW9uID0+IG9wdGlvbi50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSwgb3B0aW9uKSA9PiByb3V0ZXIucHVzaChgL3Byb2plY3RzLyR7b3B0aW9uLnNsdWd9YCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJJbnB1dD17cGFyYW0gPT4gPFRleHRGaWVsZCB7Li4ucGFyYW19IGxhYmVsPVwi7ZSE66Gc7KCd7Yq4IOqygOyDiVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdExpc3QgZGF0YT17cHJvamVjdHN9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PE5vQ29udGVudHMgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdFx0PC9GYWRlPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHNlY3Rpb246IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59XHJcblxyXG4vKipcclxuICog7IKs7Jqp7J6QIFByb3BzIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge09iamVjdH0g7IKs7Jqp7J6QIFByb3BzXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKVxyXG57XHJcblx0Y29uc3QgcHJvamVjdHMgPSBnZXRDb250ZW50cyhcInByb2plY3RzXCIpO1xyXG5cclxuXHRjb25zdCBpbWFnZXMgPSBnZXRNYWluSW1hZ2VzKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyBwcm9qZWN0cywgaW1hZ2VzIH1cclxuXHR9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==