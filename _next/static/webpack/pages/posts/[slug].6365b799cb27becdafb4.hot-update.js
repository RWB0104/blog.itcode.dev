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
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _components_global_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/global/Title */ "./components/global/Title.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\pages\\posts\\[slug].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var post = _ref.post;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var classes = getStyles();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var img = document.getElementsByTagName("img");

    var _iterator = _createForOfIteratorHelper(img),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        element.addEventListener("contextmenu", function (e) {
          return e.preventDefault();
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }); // 유효하지 않은 경로일 경우

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_5___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }, this);
  } // 유효한 경로일 경우
  else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Title__WEBPACK_IMPORTED_MODULE_6__.default, {
          title: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_7__.default, {
          title: post.title,
          desc: (0,_common_common__WEBPACK_IMPORTED_MODULE_8__.getFormattedDate)(new Date(post.date)),
          category: post.category,
          image: post.coverImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
          maxWidth: "md",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: classes.markdown,
            dangerouslySetInnerHTML: {
              __html: post.content
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
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

_s(Post, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Post;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.makeStyles)(function (theme) {
    var colorRed = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.red).reduce(function (acc, element) {
      acc["& .red-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorPink = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.pink).reduce(function (acc, element) {
      acc["& .pink-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorPurple = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.purple).reduce(function (acc, element) {
      acc["& .purple-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorDeepPurple = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.deepPurple).reduce(function (acc, element) {
      acc["& .deepPurple-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorIndigo = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.indigo).reduce(function (acc, element) {
      acc["& .indigo-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorBlue = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.blue).reduce(function (acc, element) {
      acc["& .blue-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorLightBlue = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.lightBlue).reduce(function (acc, element) {
      acc["& .lightBlue-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorCyan = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.cyan).reduce(function (acc, element) {
      acc["& .cyan-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorTeal = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.teal).reduce(function (acc, element) {
      acc["& .teal-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorGreen = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.green).reduce(function (acc, element) {
      acc["& .green-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorLightGreen = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.lightGreen).reduce(function (acc, element) {
      acc["& .lightGreen-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorLime = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.lime).reduce(function (acc, element) {
      acc["& .lime-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorYellow = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.yellow).reduce(function (acc, element) {
      acc["& .yellow-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorAmber = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.amber).reduce(function (acc, element) {
      acc["& .amber-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorOrange = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.orange).reduce(function (acc, element) {
      acc["& .orange-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorDeepOrange = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.deepOrange).reduce(function (acc, element) {
      acc["& .deepOrange-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorBrown = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.brown).reduce(function (acc, element) {
      acc["& .brown-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorGrey = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.grey).reduce(function (acc, element) {
      acc["& .grey-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorBlueGrey = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.blueGrey).reduce(function (acc, element) {
      acc["& .blueGrey-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var refColor = theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)";
    return {
      markdown: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        fontSize: "1.5em",
        lineHeight: 1.8,
        "& .center": {
          textAlign: "center"
        },
        "& .small": {
          fontSize: "1.25em"
        },
        "& .large": {
          fontSize: "1.75em"
        },
        "& .bold": {
          fontWeight: "bold"
        },
        "& .primary": {
          color: theme.palette.primary[theme.palette.type]
        },
        "& .secondary": {
          color: theme.palette.secondary[theme.palette.type]
        },
        "& .error": {
          color: theme.palette.error[theme.palette.type]
        },
        "& .warning": {
          color: theme.palette.warning[theme.palette.type]
        },
        "& .info": {
          color: theme.palette.warning[theme.palette.type]
        },
        "& .success": {
          color: theme.palette.warning[theme.palette.type]
        }
      }, colorRed), colorPink), colorPurple), colorDeepPurple), colorIndigo), colorBlue), colorLightBlue), colorCyan), colorTeal), colorGreen), colorLightGreen), colorLime), colorYellow), colorAmber), colorOrange), colorDeepOrange), colorBrown), colorGrey), colorBlueGrey), {}, {
        "& .MuiDivider-root": {
          border: "none",
          height: 1,
          margin: 0,
          flexShrink: 0,
          backgroundColor: refColor
        },
        "& .remark-highlight": {
          "& *": {
            userSelect: "text",
            msUserSelect: "text",
            MozUserSelect: "text",
            WebkitUserSelect: "text"
          }
        },
        "& h1, & h2, & h3, & h4, & h5, & h6": {
          marginTop: theme.spacing(10)
        },
        "& h1, & h2, & h3": {
          borderBottom: "1px solid ".concat(refColor)
        },
        "& a": {
          color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__.lightBlue[400]
        },
        "& blockquote": {
          borderLeft: "4px solid ".concat(refColor),
          padding: "0 15px",
          color: "#777777",
          "& > :first-child": {
            marginTop: 0
          },
          "& > :last-child": {
            marginBottom: 0
          }
        },
        "& table": {
          padding: 0,
          borderCollapse: "collapse",
          "& tr": {
            borderTop: "1px solid ".concat(theme.palette.type === "dark" ? "#333333" : "#CCCCCC"),
            backgroundColor: "transparent",
            margin: 0,
            padding: 0
          },
          "& tr:nth-child(2n)": {
            backgroundColor: theme.palette.type === "dark" ? "#041733" : "whitesmoke"
          },
          "& tr th": {
            fontWeight: "bold",
            border: "1px solid ".concat(theme.palette.type === "dark" ? "#333333" : "#CCCCCC"),
            margin: 0,
            padding: "6px 13px"
          },
          "& tr td": {
            border: "1px solid ".concat(theme.palette.type === "dark" ? "#333333" : "#CCCCCC"),
            margin: 0,
            padding: "6px 13px"
          },
          "& tr th :first-child, & tr td :first-child": {
            marginTop: 0
          },
          "& tr th :last-child, & tr td :last-child": {
            marginBottom: 0
          }
        },
        "& code:not([class*='language-'])": {
          backgroundColor: "#020213",
          color: "white",
          padding: 5,
          borderRadius: 5,
          fontFamily: "Hack, Spoqa Han Sans, monospace",
          userSelect: "text",
          msUserSelect: "text",
          MozUserSelect: "text",
          WebkitUserSelect: "text"
        },
        "& code[class*='language-'], pre[class*='language-']": {
          color: "#ccc",
          background: "none",
          fontFamily: "Hack, Spoqa Han Sans, monospace",
          fontSize: 16,
          textAlign: "left",
          whiteSpace: "pre",
          wordSpacing: "normal",
          wordBreak: "normal",
          wordWrap: "normal",
          lineHeight: 1.5,
          tabSize: 4,
          MozTabSize: 4,
          hyphens: "none",
          msHyphens: "none",
          MozHyphens: "none",
          WebkitHyphens: "none"
        },
        "& pre[class*='language-']": {
          padding: "1em",
          margin: ".5em 0",
          overflow: "auto"
        },
        "& :not(pre) > code[class*='language-'], pre[class*='language-']": {
          background: "#020213",
          borderRadius: 10
        },
        "& :not(pre) > code[class*='language-']": {
          padding: ".1em",
          borderRadius: ".3em",
          whiteSpace: "normal"
        },
        "& .token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata": {
          color: "#00c800"
        },
        "& .token.punctuation": {
          color: "#ccc"
        },
        "& .token.tag, .token.attr-name, .token.namespace, .token.deleted": {
          color: "#e2777a"
        },
        "& .token.function-name": {
          color: "#6196cc"
        },
        "& .token.boolean, .token.number, .token.function": {
          color: "#f08d49"
        },
        "& .token.property, .token.class-name, .token.constant, .token.symbol": {
          color: "#f8c555"
        },
        "& .token.selector, .token.important, .token.atrule, .token.keyword, .token.builtin": {
          color: "#cc99cd"
        },
        "& .token.string, .token.char, .token.attr-value, .token.regex, .token.variable": {
          color: "#7ec699"
        },
        "& .token.operator, .token.entity, .token.url": {
          color: "#67cdcc"
        },
        "& .token.important, .token.bold": {
          fontWeight: "bold"
        },
        "& .token.italic": {
          fontStyle: "italic"
        },
        "& .token.entity": {
          cursor: "help"
        },
        "& .token.inserted": {
          color: "green"
        }
      })
    };
  })();
}
/**
 * 사용자 Props 반환 함수
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInVzZUVmZmVjdCIsImltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJnZXRGb3JtYXR0ZWREYXRlIiwiRGF0ZSIsImRhdGUiLCJjYXRlZ29yeSIsImNvdmVySW1hZ2UiLCJtYXJrZG93biIsIl9faHRtbCIsImNvbnRlbnQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvclJlZCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWQiLCJyZWR1Y2UiLCJhY2MiLCJjb2xvciIsImNvbG9yUGluayIsInBpbmsiLCJjb2xvclB1cnBsZSIsInB1cnBsZSIsImNvbG9yRGVlcFB1cnBsZSIsImRlZXBQdXJwbGUiLCJjb2xvckluZGlnbyIsImluZGlnbyIsImNvbG9yQmx1ZSIsImJsdWUiLCJjb2xvckxpZ2h0Qmx1ZSIsImxpZ2h0Qmx1ZSIsImNvbG9yQ3lhbiIsImN5YW4iLCJjb2xvclRlYWwiLCJ0ZWFsIiwiY29sb3JHcmVlbiIsImdyZWVuIiwiY29sb3JMaWdodEdyZWVuIiwibGlnaHRHcmVlbiIsImNvbG9yTGltZSIsImxpbWUiLCJjb2xvclllbGxvdyIsInllbGxvdyIsImNvbG9yQW1iZXIiLCJhbWJlciIsImNvbG9yT3JhbmdlIiwib3JhbmdlIiwiY29sb3JEZWVwT3JhbmdlIiwiZGVlcE9yYW5nZSIsImNvbG9yQnJvd24iLCJicm93biIsImNvbG9yR3JleSIsImdyZXkiLCJjb2xvckJsdWVHcmV5IiwiYmx1ZUdyZXkiLCJyZWZDb2xvciIsInBhbGV0dGUiLCJ0eXBlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJlcnJvciIsIndhcm5pbmciLCJib3JkZXIiLCJoZWlnaHQiLCJtYXJnaW4iLCJmbGV4U2hyaW5rIiwiYmFja2dyb3VuZENvbG9yIiwidXNlclNlbGVjdCIsIm1zVXNlclNlbGVjdCIsIk1velVzZXJTZWxlY3QiLCJXZWJraXRVc2VyU2VsZWN0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyQ29sbGFwc2UiLCJib3JkZXJUb3AiLCJib3JkZXJSYWRpdXMiLCJmb250RmFtaWx5IiwiYmFja2dyb3VuZCIsIndoaXRlU3BhY2UiLCJ3b3JkU3BhY2luZyIsIndvcmRCcmVhayIsIndvcmRXcmFwIiwidGFiU2l6ZSIsIk1velRhYlNpemUiLCJoeXBoZW5zIiwibXNIeXBoZW5zIiwiTW96SHlwaGVucyIsIldlYmtpdEh5cGhlbnMiLCJvdmVyZmxvdyIsImZvbnRTdHlsZSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNBLElBQVQsT0FDZjtBQUFBOztBQUFBLE1BRCtCQyxJQUMvQixRQUQrQkEsSUFDL0I7QUFDQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUFDLGtEQUFTLENBQUMsWUFDVjtBQUNDLFFBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixLQUE5QixDQUFaOztBQURELCtDQUd1QkYsR0FIdkI7QUFBQTs7QUFBQTtB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RDtBQUVsRUYsc0JBQVksRUFBRTtBQUZvRCxTQXZKNUQ7QUEySlAsa0RBQTBDO0FBQ3pDSixpQkFBTyxFQUFFLE1BRGdDO0FBRXpDSSxzQkFBWSxFQUFFLE1BRjJCO0FBR3pDRyxvQkFBVSxFQUFFO0FBSDZCLFNBM0puQztBQWdLUCwrRkFBdUY7QUFDdEZwRSxlQUFLLEVBQUU7QUFEK0UsU0FoS2hGO0FBbUtQLGdDQUF3QjtBQUN2QkEsZUFBSyxFQUFFO0FBRGdCLFNBbktqQjtBQXNLUCw0RUFBb0U7QUFDbkVBLGVBQUssRUFBRTtBQUQ0RCxTQXRLN0Q7QUF5S1Asa0NBQTBCO0FBQ3pCQSxlQUFLLEVBQUU7QUFEa0IsU0F6S25CO0FBNEtQLDREQUFvRDtBQUNuREEsZUFBSyxFQUFFO0FBRDRDLFNBNUs3QztBQStLUCxnRkFBd0U7QUFDdkVBLGVBQUssRUFBRTtBQURnRSxTQS9LakU7QUFrTFAsOEZBQXNGO0FBQ3JGQSxlQUFLLEVBQUU7QUFEOEUsU0FsTC9FO0FBcUxQLDBGQUFrRjtBQUNqRkEsZUFBSyxFQUFFO0FBRDBFLFNBckwzRTtBQXdMUCx3REFBZ0Q7QUFDL0NBLGVBQUssRUFBRTtBQUR3QyxTQXhMekM7QUEyTFAsMkNBQW1DO0FBQ2xDMkMsb0JBQVUsRUFBRTtBQURzQixTQTNMNUI7QUE4TFAsMkJBQW9CO0FBQ25Cb0MsbUJBQVMsRUFBRTtBQURRLFNBOUxiO0FBaU1QLDJCQUFtQjtBQUNsQkMsZ0JBQU0sRUFBRTtBQURVLFNBak1aO0FBb01QLDZCQUFxQjtBQUNwQmhGLGVBQUssRUFBRTtBQURhO0FBcE1kO0FBREYsS0FBUDtBQTBNQSxHQXpYZ0IsQ0FBVixFQUFQO0FBMFhBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uNjM2NWI3OTljYjI3YmVjZGFmYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDqsozsi5zquIAg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTkgV2VkIDIwOjA0OjEzXHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEVycm9yUGFnZSBmcm9tIFwibmV4dC9lcnJvclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgYW1iZXIsIGJsdWUsIGJsdWVHcmV5LCBicm93biwgY3lhbiwgZGVlcE9yYW5nZSwgZGVlcFB1cnBsZSwgZ3JlZW4sIGdyZXksIGluZGlnbywgbGlnaHRCbHVlLCBsaWdodEdyZWVuLCBsaW1lLCBvcmFuZ2UsIHBpbmssIHB1cnBsZSwgcmVkLCB0ZWFsLCB5ZWxsb3cgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVGl0bGVcIjtcclxuaW1wb3J0IFRvcCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nbG9iYWwvVG9wXCI7XHJcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldFR5cGVQb3N0cywgbWFya2Rvd25Ub0h0bWwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FwaVwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuXHJcbi8qKlxyXG4gKiDqsozsi5zquIAgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHBvc3Q6IOqyjOyLnOq4gFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KVxyXG57XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+XHJcblx0e1xyXG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIik7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGltZylcclxuXHRcdHtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyDsnKDtmqjtlZjsp4Ag7JWK7J2AIOqyveuhnOydvCDqsr3smrBcclxuXHRpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKVxyXG5cdHtcclxuXHRcdHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcblx0fVxyXG5cclxuXHQvLyDsnKDtmqjtlZwg6rK966Gc7J28IOqyveyasFxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHRcdDxUaXRsZSB0aXRsZT17cG9zdC50aXRsZX0gLz5cclxuXHJcblx0XHRcdFx0PFRvcCB0aXRsZT17cG9zdC50aXRsZX0gZGVzYz17Z2V0Rm9ybWF0dGVkRGF0ZShuZXcgRGF0ZShwb3N0LmRhdGUpKX0gY2F0ZWdvcnk9e3Bvc3QuY2F0ZWdvcnl9IGltYWdlPXtwb3N0LmNvdmVySW1hZ2V9IC8+XHJcblxyXG5cdFx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFya2Rvd259IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19PjwvZGl2PlxyXG5cdFx0XHRcdDwvQ29udGFpbmVyPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG5cdHtcclxuXHRcdGNvbnN0IGNvbG9yUmVkID0gT2JqZWN0LmVudHJpZXMocmVkKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5yZWQtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yUGluayA9IE9iamVjdC5lbnRyaWVzKHBpbmspLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLnBpbmstJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yUHVycGxlID0gT2JqZWN0LmVudHJpZXMocHVycGxlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5wdXJwbGUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yRGVlcFB1cnBsZSA9IE9iamVjdC5lbnRyaWVzKGRlZXBQdXJwbGUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmRlZXBQdXJwbGUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9ySW5kaWdvID0gT2JqZWN0LmVudHJpZXMoaW5kaWdvKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5pbmRpZ28tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQmx1ZSA9IE9iamVjdC5lbnRyaWVzKGJsdWUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmJsdWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGlnaHRCbHVlID0gT2JqZWN0LmVudHJpZXMobGlnaHRCbHVlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5saWdodEJsdWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQ3lhbiA9IE9iamVjdC5lbnRyaWVzKGN5YW4pLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmN5YW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yVGVhbCA9IE9iamVjdC5lbnRyaWVzKHRlYWwpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLnRlYWwtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yR3JlZW4gPSBPYmplY3QuZW50cmllcyhncmVlbikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuZ3JlZW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGlnaHRHcmVlbiA9IE9iamVjdC5lbnRyaWVzKGxpZ2h0R3JlZW4pLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmxpZ2h0R3JlZW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGltZSA9IE9iamVjdC5lbnRyaWVzKGxpbWUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmxpbWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yWWVsbG93ID0gT2JqZWN0LmVudHJpZXMoeWVsbG93KS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC55ZWxsb3ctJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQW1iZXIgPSBPYmplY3QuZW50cmllcyhhbWJlcikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYW1iZXItJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yT3JhbmdlID0gT2JqZWN0LmVudHJpZXMob3JhbmdlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5vcmFuZ2UtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yRGVlcE9yYW5nZSA9IE9iamVjdC5lbnRyaWVzKGRlZXBPcmFuZ2UpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmRlZXBPcmFuZ2UtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQnJvd24gPSBPYmplY3QuZW50cmllcyhicm93bikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYnJvd24tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yR3JleSA9IE9iamVjdC5lbnRyaWVzKGdyZXkpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmdyZXktJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQmx1ZUdyZXkgPSBPYmplY3QuZW50cmllcyhibHVlR3JleSkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYmx1ZUdyZXktJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IHJlZkNvbG9yID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKVwiIDogXCJyZ2JhKDAsIDAsIDAsIDAuMTIpXCI7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWFya2Rvd246IHtcclxuXHRcdFx0XHRmb250U2l6ZTogXCIxLjVlbVwiLFxyXG5cdFx0XHRcdGxpbmVIZWlnaHQ6IDEuOCxcclxuXHRcdFx0XHRcIiYgLmNlbnRlclwiOiB7XHJcblx0XHRcdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuc21hbGxcIjoge1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6IFwiMS4yNWVtXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAubGFyZ2VcIjoge1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6IFwiMS43NWVtXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuYm9sZFwiOiB7XHJcblx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC5wcmltYXJ5XCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnlbdGhlbWUucGFsZXR0ZS50eXBlXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC5zZWNvbmRhcnlcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5W3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuZXJyb3JcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3JbdGhlbWUucGFsZXR0ZS50eXBlXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC53YXJuaW5nXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLndhcm5pbmdbdGhlbWUucGFsZXR0ZS50eXBlXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC5pbmZvXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLndhcm5pbmdbdGhlbWUucGFsZXR0ZS50eXBlXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC5zdWNjZXNzXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLndhcm5pbmdbdGhlbWUucGFsZXR0ZS50eXBlXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Li4uY29sb3JSZWQsXHJcblx0XHRcdFx0Li4uY29sb3JQaW5rLFxyXG5cdFx0XHRcdC4uLmNvbG9yUHVycGxlLFxyXG5cdFx0XHRcdC4uLmNvbG9yRGVlcFB1cnBsZSxcclxuXHRcdFx0XHQuLi5jb2xvckluZGlnbyxcclxuXHRcdFx0XHQuLi5jb2xvckJsdWUsXHJcblx0XHRcdFx0Li4uY29sb3JMaWdodEJsdWUsXHJcblx0XHRcdFx0Li4uY29sb3JDeWFuLFxyXG5cdFx0XHRcdC4uLmNvbG9yVGVhbCxcclxuXHRcdFx0XHQuLi5jb2xvckdyZWVuLFxyXG5cdFx0XHRcdC4uLmNvbG9yTGlnaHRHcmVlbixcclxuXHRcdFx0XHQuLi5jb2xvckxpbWUsXHJcblx0XHRcdFx0Li4uY29sb3JZZWxsb3csXHJcblx0XHRcdFx0Li4uY29sb3JBbWJlcixcclxuXHRcdFx0XHQuLi5jb2xvck9yYW5nZSxcclxuXHRcdFx0XHQuLi5jb2xvckRlZXBPcmFuZ2UsXHJcblx0XHRcdFx0Li4uY29sb3JCcm93bixcclxuXHRcdFx0XHQuLi5jb2xvckdyZXksXHJcblx0XHRcdFx0Li4uY29sb3JCbHVlR3JleSxcclxuXHRcdFx0XHRcIiYgLk11aURpdmlkZXItcm9vdFwiOiB7XHJcblx0XHRcdFx0XHRib3JkZXI6IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxLFxyXG5cdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0ZmxleFNocmluazogMCxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogcmVmQ29sb3JcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAucmVtYXJrLWhpZ2hsaWdodFwiOiB7XHJcblx0XHRcdFx0XHRcIiYgKlwiOiB7XHJcblx0XHRcdFx0XHRcdHVzZXJTZWxlY3Q6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0XHRtc1VzZXJTZWxlY3Q6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0XHRNb3pVc2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0V2Via2l0VXNlclNlbGVjdDogXCJ0ZXh0XCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiBoMSwgJiBoMiwgJiBoMywgJiBoNCwgJiBoNSwgJiBoNlwiOiB7XHJcblx0XHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgaDEsICYgaDIsICYgaDNcIjoge1xyXG5cdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7cmVmQ29sb3J9YFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIGFcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IGxpZ2h0Qmx1ZVs0MDBdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgYmxvY2txdW90ZVwiOiB7XHJcblx0XHRcdFx0XHRib3JkZXJMZWZ0OiBgNHB4IHNvbGlkICR7cmVmQ29sb3J9YCxcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMCAxNXB4XCIsXHJcblx0XHRcdFx0XHRjb2xvcjogXCIjNzc3Nzc3XCIsXHJcblx0XHRcdFx0XHRcIiYgPiA6Zmlyc3QtY2hpbGRcIjoge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIiYgPiA6bGFzdC1jaGlsZFwiOiB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIHRhYmxlXCI6IHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDAsXHJcblx0XHRcdFx0XHRib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLFxyXG5cdFx0XHRcdFx0XCImIHRyXCI6IHtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMzMzMzM1wiIDogXCIjQ0NDQ0NDXCJ9YCxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0cjpudGgtY2hpbGQoMm4pXCI6IHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMDQxNzMzXCIgOiBcIndoaXRlc21va2VcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0ciB0aFwiOiB7XHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG5cdFx0XHRcdFx0XHRib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzMzMzMzXCIgOiBcIiNDQ0NDQ0NcIn1gLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNnB4IDEzcHhcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0ciB0ZFwiOiB7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMzMzMzNcIiA6IFwiI0NDQ0NDQ1wifWAsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCI2cHggMTNweFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XCImIHRyIHRoIDpmaXJzdC1jaGlsZCwgJiB0ciB0ZCA6Zmlyc3QtY2hpbGRcIjoge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIiYgdHIgdGggOmxhc3QtY2hpbGQsICYgdHIgdGQgOmxhc3QtY2hpbGRcIjoge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiBjb2RlOm5vdChbY2xhc3MqPSdsYW5ndWFnZS0nXSlcIjoge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcIiMwMjAyMTNcIixcclxuXHRcdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiA1LFxyXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiA1LFxyXG5cdFx0XHRcdFx0Zm9udEZhbWlseTogXCJIYWNrLCBTcG9xYSBIYW4gU2FucywgbW9ub3NwYWNlXCIsXHJcblx0XHRcdFx0XHR1c2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdG1zVXNlclNlbGVjdDogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRNb3pVc2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdFdlYmtpdFVzZXJTZWxlY3Q6IFwidGV4dFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLCBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXVwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjY2NjXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6IFwiSGFjaywgU3BvcWEgSGFuIFNhbnMsIG1vbm9zcGFjZVwiLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDE2LFxyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIixcclxuXHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwicHJlXCIsXHJcblx0XHRcdFx0XHR3b3JkU3BhY2luZzogXCJub3JtYWxcIixcclxuXHRcdFx0XHRcdHdvcmRCcmVhazogXCJub3JtYWxcIixcclxuXHRcdFx0XHRcdHdvcmRXcmFwOiBcIm5vcm1hbFwiLFxyXG5cdFx0XHRcdFx0bGluZUhlaWdodDogMS41LFxyXG5cdFx0XHRcdFx0dGFiU2l6ZTogNCxcclxuXHRcdFx0XHRcdE1velRhYlNpemU6IDQsXHJcblx0XHRcdFx0XHRoeXBoZW5zOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdG1zSHlwaGVuczogXCJub25lXCIsXHJcblx0XHRcdFx0XHRNb3pIeXBoZW5zOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFdlYmtpdEh5cGhlbnM6IFwibm9uZVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogXCIxZW1cIixcclxuXHRcdFx0XHRcdG1hcmdpbjogXCIuNWVtIDBcIixcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBcImF1dG9cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSwgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjMDIwMjEzXCIsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDEwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddXCI6IHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiLjFlbVwiLFxyXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIi4zZW1cIixcclxuXHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uY29tbWVudCwgLnRva2VuLmJsb2NrLWNvbW1lbnQsIC50b2tlbi5wcm9sb2csIC50b2tlbi5kb2N0eXBlLCAudG9rZW4uY2RhdGFcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzAwYzgwMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLnB1bmN0dWF0aW9uXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNjY2NcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi50YWcsIC50b2tlbi5hdHRyLW5hbWUsIC50b2tlbi5uYW1lc3BhY2UsIC50b2tlbi5kZWxldGVkXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNlMjc3N2FcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5mdW5jdGlvbi1uYW1lXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiM2MTk2Y2NcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5ib29sZWFuLCAudG9rZW4ubnVtYmVyLCAudG9rZW4uZnVuY3Rpb25cIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiI2YwOGQ0OVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLnByb3BlcnR5LCAudG9rZW4uY2xhc3MtbmFtZSwgLnRva2VuLmNvbnN0YW50LCAudG9rZW4uc3ltYm9sXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNmOGM1NTVcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5zZWxlY3RvciwgLnRva2VuLmltcG9ydGFudCwgLnRva2VuLmF0cnVsZSwgLnRva2VuLmtleXdvcmQsIC50b2tlbi5idWlsdGluXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNjYzk5Y2RcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5zdHJpbmcsIC50b2tlbi5jaGFyLCAudG9rZW4uYXR0ci12YWx1ZSwgLnRva2VuLnJlZ2V4LCAudG9rZW4udmFyaWFibGVcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzdlYzY5OVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLm9wZXJhdG9yLCAudG9rZW4uZW50aXR5LCAudG9rZW4udXJsXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiM2N2NkY2NcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5pbXBvcnRhbnQsIC50b2tlbi5ib2xkXCI6IHtcclxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLml0YWxpY1wiOiAge1xyXG5cdFx0XHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLmVudGl0eVwiOiB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IFwiaGVscFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLmluc2VydGVkXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcImdyZWVuXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSkoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyCrOyaqeyekCBQcm9wcyDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IOyCrOyaqeyekCBQcm9wc1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pXHJcbntcclxuXHRjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhcInBvc3RzXCIsIHBhcmFtcy5zbHVnLCBbXHJcblx0XHRcInRpdGxlXCIsXHJcblx0XHRcImRhdGVcIixcclxuXHRcdFwic2x1Z1wiLFxyXG5cdFx0XCJhdXRob3JcIixcclxuXHRcdFwiY29udGVudFwiLFxyXG5cdFx0XCJvZ0ltYWdlXCIsXHJcblx0XHRcImNvdmVySW1hZ2VcIixcclxuXHRcdFwiY2F0ZWdvcnlcIlxyXG5cdF0pO1xyXG5cclxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8IFwiXCIpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cG9zdDoge1xyXG5cdFx0XHRcdC4uLnBvc3QsXHJcblx0XHRcdFx0Y29udGVudFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKClcclxue1xyXG5cdGNvbnN0IHBvc3RzID0gZ2V0VHlwZVBvc3RzKFwicG9zdHNcIiwgW1wic2x1Z1wiXSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBhcmFtczoge1xyXG5cdFx0XHRcdFx0c2x1ZzogcG9zdC5zbHVnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fSksXHJcblx0XHRmYWxsYmFjazogZmFsc2VcclxuXHR9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==