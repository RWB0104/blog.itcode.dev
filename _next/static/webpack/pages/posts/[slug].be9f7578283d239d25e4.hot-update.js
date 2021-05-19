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
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _components_global_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/global/Title */ "./components/global/Title.js");
/* harmony import */ var _components_global_Top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/global/Top */ "./components/global/Top.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/common */ "./common/common.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\pages\\posts\\[slug].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var __N_SSG = true;
function Post(_ref) {
  _s();

  var post = _ref.post,
      morePosts = _ref.morePosts,
      preview = _ref.preview;
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
  });

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        href: "/prism.css",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_global_Top__WEBPACK_IMPORTED_MODULE_6__.default, {
      title: post.title,
      desc: (0,_common_common__WEBPACK_IMPORTED_MODULE_7__.getFormattedDate)(new Date(post.date)),
      category: post.category,
      image: post.coverImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
      maxWidth: "md",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: classes.markdown,
        dangerouslySetInnerHTML: {
          __html: post.content
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, this)]
  }, void 0, true);
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
        "& p": {
          fontFamily: "사랑해아들"
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ1c2VFZmZlY3QiLCJpbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInRpdGxlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsIkRhdGUiLCJkYXRlIiwiY2F0ZWdvcnkiLCJjb3ZlckltYWdlIiwibWFya2Rvd24iLCJfX2h0bWwiLCJjb250ZW50IiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29sb3JSZWQiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkIiwicmVkdWNlIiwiYWNjIiwiY29sb3IiLCJjb2xvclBpbmsiLCJwaW5rIiwiY29sb3JQdXJwbGUiLCJwdXJwbGUiLCJjb2xvckRlZXBQdXJwbGUiLCJkZWVwUHVycGxlIiwiY29sb3JJbmRpZ28iLCJpbmRpZ28iLCJjb2xvckJsdWUiLCJibHVlIiwiY29sb3JMaWdodEJsdWUiLCJsaWdodEJsdWUiLCJjb2xvckN5YW4iLCJjeWFuIiwiY29sb3JUZWFsIiwidGVhbCIsImNvbG9yR3JlZW4iLCJncmVlbiIsImNvbG9yTGlnaHRHcmVlbiIsImxpZ2h0R3JlZW4iLCJjb2xvckxpbWUiLCJsaW1lIiwiY29sb3JZZWxsb3ciLCJ5ZWxsb3ciLCJjb2xvckFtYmVyIiwiYW1iZXIiLCJjb2xvck9yYW5nZSIsIm9yYW5nZSIsImNvbG9yRGVlcE9yYW5nZSIsImRlZXBPcmFuZ2UiLCJjb2xvckJyb3duIiwiYnJvd24iLCJjb2xvckdyZXkiLCJncmV5IiwiY29sb3JCbHVlR3JleSIsImJsdWVHcmV5IiwicmVmQ29sb3IiLCJwYWxldHRlIiwidHlwZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwicHJpbWFyeSIsInNlY29uZGFyeSIsImVycm9yIiwid2FybmluZyIsImJvcmRlciIsImhlaWdodCIsIm1hcmdpbiIsImZsZXhTaHJpbmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1c2VyU2VsZWN0IiwibXNVc2VyU2VsZWN0IiwiTW96VXNlclNlbGVjdCIsIldlYmtpdFVzZXJTZWxlY3QiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJDb2xsYXBzZSIsImJvcmRlclRvcCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJ3aGl0ZVNwYWNlIiwid29yZFNwYWNpbmciLCJ3b3JkQnJlYWsiLCJ3b3JkV3JhcCIsInRhYlNpemUiLCJNb3pUYWJTaXplIiwiaHlwaGVucyIsIm1zSHlwaGVucyIsIk1vekh5cGhlbnMiLCJXZWJraXRIeXBoZW5zIiwib3ZlcmZsb3ciLCJmb250U3R5bGUiLCJjdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQUQrQkMsSUFDL0IsUUFEK0JBLElBQy9CO0FBQUEsTUFEcUNDLFNBQ3JDLFFBRHFDQSxTQUNyQztBQUFBLE1BRGdEQyxPQUNoRCxRQURnREEsT0FDaEQ7QUFDQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUFDLGtEQUFTLENBQUMsWUFDVjtBQUNDLFFBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixLQUE5QixDQUFaOztBQURELCtDQUd1QkYsR0FIdkI7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bHVnXS5iZTlmNzU3ODI4M2QyMzlkMjVlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRGl2aWRlciwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBhbWJlciwgYmx1ZSwgYmx1ZUdyZXksIGJyb3duLCBjeWFuLCBkZWVwT3JhbmdlLCBkZWVwUHVycGxlLCBncmVlbiwgZ3JleSwgaW5kaWdvLCBsaWdodEJsdWUsIGxpZ2h0R3JlZW4sIGxpbWUsIG9yYW5nZSwgcGluaywgcHVycGxlLCByZWQsIHRlYWwsIHllbGxvdyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuXHJcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldFR5cGVQb3N0cywgbWFya2Rvd25Ub0h0bWwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FwaVwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL1RpdGxlXCI7XHJcbmltcG9ydCBUb3AgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2xvYmFsL1RvcFwiO1xyXG5pbXBvcnQgeyBnZXRGb3JtYXR0ZWREYXRlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb25cIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QsIG1vcmVQb3N0cywgcHJldmlldyB9KVxyXG57XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+XHJcblx0e1xyXG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIik7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGltZylcclxuXHRcdHtcclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0Py5zbHVnKVxyXG5cdHtcclxuXHRcdHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFRpdGxlIHRpdGxlPXtwb3N0LnRpdGxlfSAvPlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8bGluayBocmVmPVwiL3ByaXNtLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblxyXG5cdFx0XHQ8VG9wIHRpdGxlPXtwb3N0LnRpdGxlfSBkZXNjPXtnZXRGb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHBvc3QuZGF0ZSkpfSBjYXRlZ29yeT17cG9zdC5jYXRlZ29yeX0gaW1hZ2U9e3Bvc3QuY292ZXJJbWFnZX0gLz5cclxuXHJcblx0XHRcdDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmtkb3dufSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fT48L2Rpdj5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG5cdHtcclxuXHRcdGNvbnN0IGNvbG9yUmVkID0gT2JqZWN0LmVudHJpZXMocmVkKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5yZWQtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yUGluayA9IE9iamVjdC5lbnRyaWVzKHBpbmspLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLnBpbmstJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yUHVycGxlID0gT2JqZWN0LmVudHJpZXMocHVycGxlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5wdXJwbGUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yRGVlcFB1cnBsZSA9IE9iamVjdC5lbnRyaWVzKGRlZXBQdXJwbGUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmRlZXBQdXJwbGUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9ySW5kaWdvID0gT2JqZWN0LmVudHJpZXMoaW5kaWdvKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5pbmRpZ28tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQmx1ZSA9IE9iamVjdC5lbnRyaWVzKGJsdWUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmJsdWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGlnaHRCbHVlID0gT2JqZWN0LmVudHJpZXMobGlnaHRCbHVlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5saWdodEJsdWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQ3lhbiA9IE9iamVjdC5lbnRyaWVzKGN5YW4pLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmN5YW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yVGVhbCA9IE9iamVjdC5lbnRyaWVzKHRlYWwpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLnRlYWwtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yR3JlZW4gPSBPYmplY3QuZW50cmllcyhncmVlbikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuZ3JlZW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGlnaHRHcmVlbiA9IE9iamVjdC5lbnRyaWVzKGxpZ2h0R3JlZW4pLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmxpZ2h0R3JlZW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGltZSA9IE9iamVjdC5lbnRyaWVzKGxpbWUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmxpbWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yWWVsbG93ID0gT2JqZWN0LmVudHJpZXMoeWVsbG93KS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC55ZWxsb3ctJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQW1iZXIgPSBPYmplY3QuZW50cmllcyhhbWJlcikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYW1iZXItJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yT3JhbmdlID0gT2JqZWN0LmVudHJpZXMob3JhbmdlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5vcmFuZ2UtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yRGVlcE9yYW5nZSA9IE9iamVjdC5lbnRyaWVzKGRlZXBPcmFuZ2UpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmRlZXBPcmFuZ2UtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQnJvd24gPSBPYmplY3QuZW50cmllcyhicm93bikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYnJvd24tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yR3JleSA9IE9iamVjdC5lbnRyaWVzKGdyZXkpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmdyZXktJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQmx1ZUdyZXkgPSBPYmplY3QuZW50cmllcyhibHVlR3JleSkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYmx1ZUdyZXktJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHJcblx0XHRjb25zdCByZWZDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMilcIiA6IFwicmdiYSgwLCAwLCAwLCAwLjEyKVwiO1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1hcmtkb3duOiB7XHJcblx0XHRcdFx0Zm9udFNpemU6IFwiMS41ZW1cIixcclxuXHRcdFx0XHRsaW5lSGVpZ2h0OiAxLjgsXHJcblx0XHRcdFx0XCImIHBcIjoge1xyXG5cdFx0XHRcdFx0Zm9udEZhbWlseTogXCLsgqzrnpHtlbTslYTrk6RcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC5jZW50ZXJcIjoge1xyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnNtYWxsXCI6IHtcclxuXHRcdFx0XHRcdGZvbnRTaXplOiBcIjEuMjVlbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLmxhcmdlXCI6IHtcclxuXHRcdFx0XHRcdGZvbnRTaXplOiBcIjEuNzVlbVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLmJvbGRcIjoge1xyXG5cdFx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAucHJpbWFyeVwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5W3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuc2Vjb25kYXJ5XCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeVt0aGVtZS5wYWxldHRlLnR5cGVdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLmVycm9yXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAud2FybmluZ1wiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuaW5mb1wiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuc3VjY2Vzc1wiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC4uLmNvbG9yUmVkLFxyXG5cdFx0XHRcdC4uLmNvbG9yUGluayxcclxuXHRcdFx0XHQuLi5jb2xvclB1cnBsZSxcclxuXHRcdFx0XHQuLi5jb2xvckRlZXBQdXJwbGUsXHJcblx0XHRcdFx0Li4uY29sb3JJbmRpZ28sXHJcblx0XHRcdFx0Li4uY29sb3JCbHVlLFxyXG5cdFx0XHRcdC4uLmNvbG9yTGlnaHRCbHVlLFxyXG5cdFx0XHRcdC4uLmNvbG9yQ3lhbixcclxuXHRcdFx0XHQuLi5jb2xvclRlYWwsXHJcblx0XHRcdFx0Li4uY29sb3JHcmVlbixcclxuXHRcdFx0XHQuLi5jb2xvckxpZ2h0R3JlZW4sXHJcblx0XHRcdFx0Li4uY29sb3JMaW1lLFxyXG5cdFx0XHRcdC4uLmNvbG9yWWVsbG93LFxyXG5cdFx0XHRcdC4uLmNvbG9yQW1iZXIsXHJcblx0XHRcdFx0Li4uY29sb3JPcmFuZ2UsXHJcblx0XHRcdFx0Li4uY29sb3JEZWVwT3JhbmdlLFxyXG5cdFx0XHRcdC4uLmNvbG9yQnJvd24sXHJcblx0XHRcdFx0Li4uY29sb3JHcmV5LFxyXG5cdFx0XHRcdC4uLmNvbG9yQmx1ZUdyZXksXHJcblx0XHRcdFx0XCImIC5NdWlEaXZpZGVyLXJvb3RcIjoge1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdGhlaWdodDogMSxcclxuXHRcdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHJlZkNvbG9yXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnJlbWFyay1oaWdobGlnaHRcIjoge1xyXG5cdFx0XHRcdFx0XCImICpcIjoge1xyXG5cdFx0XHRcdFx0XHR1c2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0bXNVc2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0TW96VXNlclNlbGVjdDogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRcdFdlYmtpdFVzZXJTZWxlY3Q6IFwidGV4dFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgaDEsICYgaDIsICYgaDMsICYgaDQsICYgaDUsICYgaDZcIjoge1xyXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIGgxLCAmIGgyLCAmIGgzXCI6IHtcclxuXHRcdFx0XHRcdGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3JlZkNvbG9yfWBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiBhXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBsaWdodEJsdWVbNDAwXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIGJsb2NrcXVvdGVcIjoge1xyXG5cdFx0XHRcdFx0Ym9yZGVyTGVmdDogYDRweCBzb2xpZCAke3JlZkNvbG9yfWAsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBcIjAgMTVweFwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzc3Nzc3N1wiLFxyXG5cdFx0XHRcdFx0XCImID4gOmZpcnN0LWNoaWxkXCI6IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAwXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XCImID4gOmxhc3QtY2hpbGRcIjoge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiB0YWJsZVwiOiB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLFxyXG5cdFx0XHRcdFx0Ym9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcclxuXHRcdFx0XHRcdFwiJiB0clwiOiB7XHJcblx0XHRcdFx0XHRcdGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMzMzMzNcIiA6IFwiI0NDQ0NDQ1wifWAsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIiYgdHI6bnRoLWNoaWxkKDJuKVwiOiB7XHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzA0MTczM1wiIDogXCJ3aGl0ZXNtb2tlXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIiYgdHIgdGhcIjoge1xyXG5cdFx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIixcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMzMzMzM1wiIDogXCIjQ0NDQ0NDXCJ9YCxcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiBcIjZweCAxM3B4XCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIiYgdHIgdGRcIjoge1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzMzMzMzXCIgOiBcIiNDQ0NDQ0NcIn1gLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNnB4IDEzcHhcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0ciB0aCA6Zmlyc3QtY2hpbGQsICYgdHIgdGQgOmZpcnN0LWNoaWxkXCI6IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAwXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XCImIHRyIHRoIDpsYXN0LWNoaWxkLCAmIHRyIHRkIDpsYXN0LWNoaWxkXCI6IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgY29kZTpub3QoW2NsYXNzKj0nbGFuZ3VhZ2UtJ10pXCI6IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCIjMDIwMjEzXCIsXHJcblx0XHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogNSxcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogNSxcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6IFwiSGFjaywgU3BvcWEgSGFuIFNhbnMsIG1vbm9zcGFjZVwiLFxyXG5cdFx0XHRcdFx0dXNlclNlbGVjdDogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRtc1VzZXJTZWxlY3Q6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0TW96VXNlclNlbGVjdDogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRXZWJraXRVc2VyU2VsZWN0OiBcInRleHRcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSwgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiI2NjY1wiLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogXCJub25lXCIsXHJcblx0XHRcdFx0XHRmb250RmFtaWx5OiBcIkhhY2ssIFNwb3FhIEhhbiBTYW5zLCBtb25vc3BhY2VcIixcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAxNixcclxuXHRcdFx0XHRcdHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcblx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcInByZVwiLFxyXG5cdFx0XHRcdFx0d29yZFNwYWNpbmc6IFwibm9ybWFsXCIsXHJcblx0XHRcdFx0XHR3b3JkQnJlYWs6IFwibm9ybWFsXCIsXHJcblx0XHRcdFx0XHR3b3JkV3JhcDogXCJub3JtYWxcIixcclxuXHRcdFx0XHRcdGxpbmVIZWlnaHQ6IDEuNSxcclxuXHRcdFx0XHRcdHRhYlNpemU6IDQsXHJcblx0XHRcdFx0XHRNb3pUYWJTaXplOiA0LFxyXG5cdFx0XHRcdFx0aHlwaGVuczogXCJub25lXCIsXHJcblx0XHRcdFx0XHRtc0h5cGhlbnM6IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0TW96SHlwaGVuczogXCJub25lXCIsXHJcblx0XHRcdFx0XHRXZWJraXRIeXBoZW5zOiBcIm5vbmVcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddXCI6IHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiMWVtXCIsXHJcblx0XHRcdFx0XHRtYXJnaW46IFwiLjVlbSAwXCIsXHJcblx0XHRcdFx0XHRvdmVyZmxvdzogXCJhdXRvXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiA6bm90KHByZSkgPiBjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10sIHByZVtjbGFzcyo9J2xhbmd1YWdlLSddXCI6IHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6IFwiIzAyMDIxM1wiLFxyXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAxMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXVwiOiB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiBcIi4xZW1cIixcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIuM2VtXCIsXHJcblx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLmNvbW1lbnQsIC50b2tlbi5ibG9jay1jb21tZW50LCAudG9rZW4ucHJvbG9nLCAudG9rZW4uZG9jdHlwZSwgLnRva2VuLmNkYXRhXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiMwMGM4MDBcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5wdW5jdHVhdGlvblwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjY2NjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4udGFnLCAudG9rZW4uYXR0ci1uYW1lLCAudG9rZW4ubmFtZXNwYWNlLCAudG9rZW4uZGVsZXRlZFwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjZTI3NzdhXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uZnVuY3Rpb24tbmFtZVwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjNjE5NmNjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uYm9vbGVhbiwgLnRva2VuLm51bWJlciwgLnRva2VuLmZ1bmN0aW9uXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNmMDhkNDlcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5wcm9wZXJ0eSwgLnRva2VuLmNsYXNzLW5hbWUsIC50b2tlbi5jb25zdGFudCwgLnRva2VuLnN5bWJvbFwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjZjhjNTU1XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uc2VsZWN0b3IsIC50b2tlbi5pbXBvcnRhbnQsIC50b2tlbi5hdHJ1bGUsIC50b2tlbi5rZXl3b3JkLCAudG9rZW4uYnVpbHRpblwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjY2M5OWNkXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uc3RyaW5nLCAudG9rZW4uY2hhciwgLnRva2VuLmF0dHItdmFsdWUsIC50b2tlbi5yZWdleCwgLnRva2VuLnZhcmlhYmxlXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiM3ZWM2OTlcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5vcGVyYXRvciwgLnRva2VuLmVudGl0eSwgLnRva2VuLnVybFwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjNjdjZGNjXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uaW1wb3J0YW50LCAudG9rZW4uYm9sZFwiOiB7XHJcblx0XHRcdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5pdGFsaWNcIjogIHtcclxuXHRcdFx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5lbnRpdHlcIjoge1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBcImhlbHBcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5pbnNlcnRlZFwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCJncmVlblwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH0pKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KVxyXG57XHJcblx0Y29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcoXCJwb3N0c1wiLCBwYXJhbXMuc2x1ZywgW1xyXG5cdFx0XCJ0aXRsZVwiLFxyXG5cdFx0XCJkYXRlXCIsXHJcblx0XHRcInNsdWdcIixcclxuXHRcdFwiYXV0aG9yXCIsXHJcblx0XHRcImNvbnRlbnRcIixcclxuXHRcdFwib2dJbWFnZVwiLFxyXG5cdFx0XCJjb3ZlckltYWdlXCIsXHJcblx0XHRcImNhdGVnb3J5XCJcclxuXHRdKTtcclxuXHJcblx0Y29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHBvc3Q6IHtcclxuXHRcdFx0XHQuLi5wb3N0LFxyXG5cdFx0XHRcdGNvbnRlbnRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpXHJcbntcclxuXHRjb25zdCBwb3N0cyA9IGdldFR5cGVQb3N0cyhcInBvc3RzXCIsIFtcInNsdWdcIl0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cGF0aHM6IHBvc3RzLm1hcCgocG9zdCkgPT5cclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdHNsdWc6IHBvc3Quc2x1Z1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0pLFxyXG5cdFx0ZmFsbGJhY2s6IGZhbHNlXHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9