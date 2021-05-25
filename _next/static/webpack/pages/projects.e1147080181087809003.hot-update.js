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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_section_projects_ProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/section/projects/ProjectList */ "./components/section/projects/ProjectList.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* harmony import */ var _components_global_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/global/Meta */ "./components/global/Meta.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
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
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery)(theme.breakpoints.down("sm"));
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
      lineNumber: 42,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Box, {
      component: "section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_3__.Fade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_5__.default, {
          title: _common_env__WEBPACK_IMPORTED_MODULE_7__.MENU_LIST[2].title,
          image: "/assets/images/main/".concat(url),
          onlyEng: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Container, {
          maxWidth: "md",
          children: [projects.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
            container: true,
            spacing: 5,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
              item: true,
              xs: isMobile ? 12 : 4,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {
                variant: "outlined",
                fullWidth: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {
                  id: "name",
                  children: "Category"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {
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
                    lineNumber: 57,
                    columnNumber: 13
                  }, this), categories.map(function (element, index) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                      value: element,
                      children: element
                    }, index + 1, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 49
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
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
                    lineNumber: 69,
                    columnNumber: 34
                  }, _this);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_projects_ProjectList__WEBPACK_IMPORTED_MODULE_4__.default, {
                data: projects
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 9
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
            container: true,
            spacing: 5,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NoContents, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
            container: true,
            spacing: 5,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Divider, {
                className: classes.divider
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {
                variant: "outlined",
                fullWidth: true,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Hidden, {
                  smDown: true,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {
                    id: "name",
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 11
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {
                    labelId: "name",
                    label: "Category",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.MenuItem, {
                      value: "",
                      children: "All"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 12
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 10
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Hidden, {
                  mdUp: true,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {
                    id: "name",
                    children: "Category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 11
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {
                    "native": true,
                    labelId: "name",
                    label: "Category",
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                      value: "",
                      children: "All"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 12
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_section_projects_ProjectList__WEBPACK_IMPORTED_MODULE_4__.default, {
                data: projects
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(Project, "wJfmFB7sdP7vULpkd22dVjy9Jo8=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_10__.useMediaQuery, next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter];
});

_c = Project;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.makeStyles)(function (theme) {
    return {
      divider: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(5)
      },
      category: {
        "& > select": {
          padding: 12
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvamVjdCIsInByb2plY3RzIiwiaW1hZ2VzIiwidXJsIiwiZ2V0UmFuZG9tSXRlbSIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2F0ZWdvcnkiLCJxdWVyeSIsIk1FTlVfTElTVCIsIkRFU0NSSVBUSU9OIiwicGF0aG5hbWUiLCJsZW5ndGgiLCJlIiwib25TZWxlY3RDYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJwb3N0cyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJvcHRpb24iLCJ0aXRsZSIsInB1c2giLCJzbHVnIiwicGFyYW0iLCJkaXZpZGVyIiwid2lkdGgiLCJtYWtlU3R5bGVzIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNBLE9BQVQsT0FDZjtBQUFBOztBQUFBOztBQUFBLE1BRGtDQyxRQUNsQyxRQURrQ0EsUUFDbEM7QUFBQSxNQUQ0Q0MsTUFDNUMsUUFENENBLE1BQzVDO0FBQ0MsTUFBTUMsR0FBRyxHQUFHQyw2REFBYSxDQUFDRixNQUFELENBQXpCO0FBRUEsTUFBTUcsS0FBSyxHQUFHQyw0REFBUSxFQUF0QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsaUVBQWEsQ0FBQ0gsS0FBSyxDQUFDSSxX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QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUErRUE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQWxHd0JELE87VUFJVE0sd0QsRUFDR0UsNkQsRUFJRk0sa0Q7OztLQVRRZCxPOztBQW1HeEIsU0FBU1ksU0FBVCxHQUNBO0FBQ0MsU0FBTzJCLDhEQUFVLENBQUMsVUFBQ2xDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCZ0MsYUFBTyxFQUFFO0FBQ1JHLGlCQUFTLEVBQUVuQyxLQUFLLENBQUNvQyxPQUFOLENBQWMsRUFBZCxDQURIO0FBRVJDLG9CQUFZLEVBQUVyQyxLQUFLLENBQUNvQyxPQUFOLENBQWMsQ0FBZDtBQUZOLE9BRG9CO0FBSzdCMUIsY0FBUSxFQUFFO0FBQ1Qsc0JBQWM7QUFDYjRCLGlCQUFPLEVBQUU7QUFESTtBQURMO0FBTG1CLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQVdBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy5lMTE0NzA4MDE4MTA4NzgwOTAwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIO2UhOuhnOygne2KuCDtjpjsnbTsp4AgSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNC4yNyBUaHUgMjI6Mzc6MDZcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gXCJyZWFjdC1yZXZlYWxcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIERpdmlkZXIsIEZvcm1Db250cm9sLCBHcmlkLCBIaWRkZW4sIElucHV0TGFiZWwsIG1ha2VTdHlsZXMsIE1lbnVJdGVtLCBTZWxlY3QsIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uL3Byb2plY3RzL1Byb2plY3RMaXN0XCI7XHJcbmltcG9ydCB7IGdldE1haW5JbWFnZXMsIGdldENvbnRlbnRzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcclxuaW1wb3J0IFRvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVG9wXCI7XHJcbmltcG9ydCB7IGdldFJhbmRvbUl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBERVNDUklQVElPTiwgTUVOVV9MSVNUIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL01ldGFcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vKipcclxuICog7ZSE66Gc7KCd7Yq4IO2OmOydtOyngCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdHMsIGltYWdlcyB9KVxyXG57XHJcblx0Y29uc3QgdXJsID0gZ2V0UmFuZG9tSXRlbShpbWFnZXMpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8IFwiQWxsXCI7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxNZXRhIHRpdGxlPXtNRU5VX0xJU1RbMl0udGl0bGV9IGRlc2NyaXB0aW9uPXtERVNDUklQVElPTn0gdXJsPXtNRU5VX0xJU1RbMl0udXJsLnBhdGhuYW1lfSAvPlxyXG5cclxuXHRcdFx0PEJveCBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0PEZhZGU+XHJcblx0XHRcdFx0XHQ8VG9wIHRpdGxlPXtNRU5VX0xJU1RbMl0udGl0bGV9IGltYWdlPXtgL2Fzc2V0cy9pbWFnZXMvbWFpbi8ke3VybH1gfSBvbmx5RW5nIC8+XHJcblxyXG5cdFx0XHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0cy5sZW5ndGggPiAwID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXtpc01vYmlsZSA/IDEyIDogNH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGZ1bGxXaWR0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dExhYmVsIGlkPVwibmFtZVwiPkNhdGVnb3J5PC9JbnB1dExhYmVsPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3QgbmF0aXZlIGxhYmVsPVwiQ2F0ZWdvcnlcIiB2YWx1ZT17Y2F0ZWdvcnl9IG9uQ2hhbmdlPXtlID0+IG9uU2VsZWN0Q2F0ZWdvcnkoZSwgcm91dGVyKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3JpZXMubWFwKChlbGVtZW50LCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4ICsgMX0gdmFsdWU9e2VsZW1lbnR9PntlbGVtZW50fTwvb3B0aW9uPil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEF1dG9jb21wbGV0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucz17cG9zdHMuc29ydCgoYSwgYikgPT4gLWIuY2F0ZWdvcnkubG9jYWxlQ29tcGFyZShhLmNhdGVnb3J5KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncm91cEJ5PXtvcHRpb24gPT4gb3B0aW9uLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9e29wdGlvbiA9PiBvcHRpb24udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUsIG9wdGlvbikgPT4gcm91dGVyLnB1c2goYC9wcm9qZWN0cy8ke29wdGlvbi5zbHVnfWApfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVySW5wdXQ9e3BhcmFtID0+IDxUZXh0RmllbGQgey4uLnBhcmFtfSBsYWJlbD1cIu2UhOuhnOygne2KuCDqsoDsg4lcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFByb2plY3RMaXN0IGRhdGE9e3Byb2plY3RzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxOb0NvbnRlbnRzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGZ1bGxXaWR0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEhpZGRlbiBzbURvd24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0TGFiZWwgaWQ9XCJuYW1lXCI+Q2F0ZWdvcnk8L0lucHV0TGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3QgbGFiZWxJZD1cIm5hbWVcIiBsYWJlbD1cIkNhdGVnb3J5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9XCJcIj5BbGw8L01lbnVJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0hpZGRlbj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxIaWRkZW4gbWRVcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXRMYWJlbCBpZD1cIm5hbWVcIj5DYXRlZ29yeTwvSW5wdXRMYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNlbGVjdCBuYXRpdmUgbGFiZWxJZD1cIm5hbWVcIiBsYWJlbD1cIkNhdGVnb3J5XCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9IaWRkZW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3RMaXN0IGRhdGE9e3Byb2plY3RzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdFx0PC9GYWRlPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdGRpdmlkZXI6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpXHJcblx0XHR9LFxyXG5cdFx0Y2F0ZWdvcnk6IHtcclxuXHRcdFx0XCImID4gc2VsZWN0XCI6IHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsgqzsmqnsnpAgUHJvcHMg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSDsgqzsmqnsnpAgUHJvcHNcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpXHJcbntcclxuXHRjb25zdCBwcm9qZWN0cyA9IGdldENvbnRlbnRzKFwicHJvamVjdHNcIik7XHJcblxyXG5cdGNvbnN0IGltYWdlcyA9IGdldE1haW5JbWFnZXMoKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IHByb2plY3RzLCBpbWFnZXMgfVxyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9