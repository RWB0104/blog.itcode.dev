self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./common/states.js":
/*!**************************!*\
  !*** ./common/states.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkAtom": function() { return /* binding */ darkAtom; },
/* harmony export */   "menuAtom": function() { return /* binding */ menuAtom; },
/* harmony export */   "fontAtom": function() { return /* binding */ fontAtom; }
/* harmony export */ });
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "./node_modules/react-cookies/build/cookie.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* module decorator */ module = __webpack_require__.hmd(module);
/**
 * 상태 관리 JavaScript
 *
 * @author RWB
 * @since 2021.05.08 Sat 14:30:43
 */
// 라이브러리 모듈

 // 테마 상태

var darkAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
  key: "darkState",
  "default": react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("theme") ? react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("theme") === "true" : true
}); // 메뉴 상태

var menuAtom = new recoil__WEBPACK_IMPORTED_MODULE_1__.atom({
  key: "menuState",
  "default": false
}); // 게시글 폰트 상태

var fontAtom = new recoil__WEBPACK_IMPORTED_MODULE_1__.atom({
  key: "fontState",
  "default": react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("cursive") ? react_cookies__WEBPACK_IMPORTED_MODULE_0__.default.load("theme") === "true" : true
});

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

/***/ "./components/section/contents/CotentsBody.js":
/*!****************************************************!*\
  !*** ./components/section/contents/CotentsBody.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContentsBody; }
/* harmony export */ });
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _common_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/states */ "./common/states.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\contents\\CotentsBody.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 컨텐츠 내용 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.21 Fri 21:43:42
 */
// 라이브러리 모듈




/**
 * 컨텐츠 내용 JSX 반환 함수
 *
 * @param {Object} contents: 컨텐츠
 *
 * @returns {JSX} JSX 객체
 */

function ContentsBody(_ref) {
  _s();

  var content = _ref.content;

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_common_states__WEBPACK_IMPORTED_MODULE_4__.fontAtom),
      _useRecoilState2 = (0,D_source_GitHub_Kapoo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useRecoilState, 2),
      fontState = _useRecoilState2[0],
      setFontState = _useRecoilState2[1];

  var classes = getStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: classes.markdown,
    dangerouslySetInnerHTML: {
      __html: content.content
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(ContentsBody, "3mxCLKr2hqCmvQ1e4zAhIR0atqo=", false, function () {
  return [recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState];
});

_c = ContentsBody;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
    var colorRed = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.red).reduce(function (acc, element) {
      acc["& .red-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorPink = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.pink).reduce(function (acc, element) {
      acc["& .pink-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorPurple = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.purple).reduce(function (acc, element) {
      acc["& .purple-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorDeepPurple = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.deepPurple).reduce(function (acc, element) {
      acc["& .deepPurple-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorIndigo = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.indigo).reduce(function (acc, element) {
      acc["& .indigo-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorBlue = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.blue).reduce(function (acc, element) {
      acc["& .blue-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorLightBlue = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.lightBlue).reduce(function (acc, element) {
      acc["& .lightBlue-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorCyan = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.cyan).reduce(function (acc, element) {
      acc["& .cyan-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorTeal = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.teal).reduce(function (acc, element) {
      acc["& .teal-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorGreen = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.green).reduce(function (acc, element) {
      acc["& .green-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorLightGreen = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.lightGreen).reduce(function (acc, element) {
      acc["& .lightGreen-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorLime = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.lime).reduce(function (acc, element) {
      acc["& .lime-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorYellow = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.yellow).reduce(function (acc, element) {
      acc["& .yellow-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorAmber = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.amber).reduce(function (acc, element) {
      acc["& .amber-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorOrange = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.orange).reduce(function (acc, element) {
      acc["& .orange-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorDeepOrange = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.deepOrange).reduce(function (acc, element) {
      acc["& .deepOrange-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorBrown = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.brown).reduce(function (acc, element) {
      acc["& .brown-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorGrey = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.grey).reduce(function (acc, element) {
      acc["& .grey-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var colorBlueGrey = Object.entries(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.blueGrey).reduce(function (acc, element) {
      acc["& .blueGrey-".concat(element[0])] = {
        color: element[1]
      };
      return acc;
    }, {});
    var refColor = theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)";
    return {
      markdown: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        fontSize: "1.25rem",
        fontFamily: "둘기마요, Spoqa Han Sans, sans-serif",
        marginBottom: theme.spacing(20),
        lineHeight: 2,
        "& .center": {
          textAlign: "center"
        },
        "& .small": {
          fontSize: "1rem"
        },
        "& .large": {
          fontSize: "1.5rem"
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
          color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.lightBlue[400]
        },
        "& blockquote": {
          borderLeft: "4px solid ".concat(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.orange[500]),
          backgroundColor: theme.palette.type === "dark" ? "#222" : "#EEE",
          marginTop: theme.spacing(8),
          marginBottom: theme.spacing(8),
          padding: "15px 25px",
          fontStyle: "italic",
          color: theme.palette.type === "dark" ? "#AAA" : "#555",
          "& > :first-child": {
            marginTop: 0
          },
          "& > :last-child": {
            marginBottom: 0
          }
        },
        "& img": {
          maxWidth: "100%",
          display: "block",
          margin: "0 auto"
        },
        "& strong": {
          wordBreak: "break-word"
        },
        "& table": {
          padding: 0,
          margin: "auto",
          marginTop: theme.spacing(7),
          marginBottom: theme.spacing(7),
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
          backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.indigo[700],
          color: "white",
          padding: 5,
          borderRadius: 5,
          fontFamily: "Hack, Spoqa Han Sans, monospace",
          fontSize: "0.75em",
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          userSelect: "text",
          msUserSelect: "text",
          MozUserSelect: "text",
          WebkitUserSelect: "text",
          wordBreak: "break-word"
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
        },
        "& a.head-link": {
          textDecoration: "none",
          marginRight: theme.spacing(1)
        }
      })
    };
  })();
}

var _c;

$RefreshReg$(_c, "ContentsBody");

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

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-cookies/build/cookie.js":
/*!****************************************************!*\
  !*** ./node_modules/react-cookies/build/cookie.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.load = load;
exports.loadAll = loadAll;
exports.select = select;
exports.save = save;
exports.remove = remove;
exports.setRawCookie = setRawCookie;
exports.plugToRequest = plugToRequest;

var _cookie = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_NODE = typeof document === 'undefined' || typeof process !== 'undefined' && process.env && "development" === 'test';
var _rawCookie = {};
var _res = void 0;

function _isResWritable() {
  return _res && !_res.headersSent;
}

function load(name, doNotParse) {
  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
  var cookieVal = cookies && cookies[name];

  if (typeof doNotParse === 'undefined') {
    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
  }

  if (!doNotParse) {
    try {
      cookieVal = JSON.parse(cookieVal);
    } catch (err) {
      // Not serialized object
    }
  }

  return cookieVal;
}

function loadAll(doNotParse) {
  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
  var cookieVal = cookies;

  if (typeof doNotParse === 'undefined') {
    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
  }

  if (!doNotParse) {
    try {
      cookieVal = JSON.parse(cookieVal);
    } catch (err) {
      // Not serialized object
    }
  }

  return cookieVal;
}

function select(regex) {
  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);

  if (!cookies) {
    return {};
  }

  if (!regex) {
    return cookies;
  }

  return Object.keys(cookies).reduce(function (accumulator, name) {
    if (!regex.test(name)) {
      return accumulator;
    }

    var newCookie = {};
    newCookie[name] = cookies[name];
    return (0, _objectAssign2.default)({}, accumulator, newCookie);
  }, {});
}

function save(name, val, opt) {
  _rawCookie[name] = val;

  // Allow you to work with cookies as objects.
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    _rawCookie[name] = JSON.stringify(val);
  }

  // Cookies only work in the browser
  if (!IS_NODE) {
    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
  }

  if (_isResWritable() && _res.cookie) {
    _res.cookie(name, val, opt);
  }
}

function remove(name, opt) {
  delete _rawCookie[name];

  if (typeof opt === 'undefined') {
    opt = {};
  } else if (typeof opt === 'string') {
    // Will be deprecated in future versions
    opt = { path: opt };
  } else {
    // Prevent mutation of opt below
    opt = (0, _objectAssign2.default)({}, opt);
  }

  if (typeof document !== 'undefined') {
    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
    opt.maxAge = 0;
    document.cookie = _cookie2.default.serialize(name, '', opt);
  }

  if (_isResWritable() && _res.clearCookie) {
    _res.clearCookie(name, opt);
  }
}

function setRawCookie(rawCookie) {
  if (rawCookie) {
    _rawCookie = _cookie2.default.parse(rawCookie);
  } else {
    _rawCookie = {};
  }
}

function plugToRequest(req, res) {
  if (req.cookie) {
    _rawCookie = req.cookie;
  } else if (req.cookies) {
    _rawCookie = req.cookies;
  } else if (req.headers && req.headers.cookie) {
    setRawCookie(req.headers.cookie);
  } else {
    _rawCookie = {};
  }

  _res = res;

  return function unplug() {
    _res = null;
    _rawCookie = {};
  };
}

exports.default = {
  setRawCookie: setRawCookie,
  load: load,
  loadAll: loadAll,
  select: select,
  save: save,
  remove: remove,
  plugToRequest: plugToRequest
};

/***/ }),

/***/ "./node_modules/recoil/es/recoil.js":
/*!******************************************!*\
  !*** ./node_modules/recoil/es/recoil.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultValue": function() { return /* binding */ Recoil_index_1; },
/* harmony export */   "RecoilRoot": function() { return /* binding */ Recoil_index_2; },
/* harmony export */   "atom": function() { return /* binding */ Recoil_index_4; },
/* harmony export */   "atomFamily": function() { return /* binding */ Recoil_index_7; },
/* harmony export */   "batchUpdates": function() { return /* binding */ Recoil_index_32; },
/* harmony export */   "constSelector": function() { return /* binding */ Recoil_index_9; },
/* harmony export */   "errorSelector": function() { return /* binding */ Recoil_index_10; },
/* harmony export */   "isRecoilValue": function() { return /* binding */ Recoil_index_31; },
/* harmony export */   "noWait": function() { return /* binding */ Recoil_index_26; },
/* harmony export */   "readOnlySelector": function() { return /* binding */ Recoil_index_11; },
/* harmony export */   "retentionZone": function() { return /* binding */ Recoil_index_6; },
/* harmony export */   "selector": function() { return /* binding */ Recoil_index_5; },
/* harmony export */   "selectorFamily": function() { return /* binding */ Recoil_index_8; },
/* harmony export */   "setBatcher": function() { return /* binding */ Recoil_index_33; },
/* harmony export */   "snapshot_UNSTABLE": function() { return /* binding */ Recoil_index_34; },
/* harmony export */   "useGetRecoilValueInfo_UNSTABLE": function() { return /* binding */ Recoil_index_18; },
/* harmony export */   "useGotoRecoilSnapshot": function() { return /* binding */ Recoil_index_21; },
/* harmony export */   "useRecoilBridgeAcrossReactRoots_UNSTABLE": function() { return /* binding */ Recoil_index_3; },
/* harmony export */   "useRecoilCallback": function() { return /* binding */ Recoil_index_20; },
/* harmony export */   "useRecoilSnapshot": function() { return /* binding */ Recoil_index_22; },
/* harmony export */   "useRecoilState": function() { return /* binding */ Recoil_index_14; },
/* harmony export */   "useRecoilStateLoadable": function() { return /* binding */ Recoil_index_15; },
/* harmony export */   "useRecoilTransactionObserver_UNSTABLE": function() { return /* binding */ Recoil_index_23; },
/* harmony export */   "useRecoilValue": function() { return /* binding */ Recoil_index_12; },
/* harmony export */   "useRecoilValueLoadable": function() { return /* binding */ Recoil_index_13; },
/* harmony export */   "useResetRecoilState": function() { return /* binding */ Recoil_index_17; },
/* harmony export */   "useRetain": function() { return /* binding */ Recoil_index_19; },
/* harmony export */   "useSetRecoilState": function() { return /* binding */ Recoil_index_16; },
/* harmony export */   "useSetUnvalidatedAtomValues_UNSTABLE": function() { return /* binding */ Recoil_index_25; },
/* harmony export */   "useTransactionObservation_UNSTABLE": function() { return /* binding */ Recoil_index_24; },
/* harmony export */   "waitForAll": function() { return /* binding */ Recoil_index_29; },
/* harmony export */   "waitForAllSettled": function() { return /* binding */ Recoil_index_30; },
/* harmony export */   "waitForAny": function() { return /* binding */ Recoil_index_28; },
/* harmony export */   "waitForNone": function() { return /* binding */ Recoil_index_27; }
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function nullthrows(x, message) {
  if (x != null) {
    return x;
  }

  throw new Error(message !== null && message !== void 0 ? message : 'Got unexpected null or undefined');
}

var Recoil_nullthrows = nullthrows;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function recoverableViolation(message, projectName, {
  error
} = {}) {
  if (true) {
    console.error(message, error);
  }

  return null;
}

var recoverableViolation_1 = recoverableViolation;

// @oss-only


var Recoil_recoverableViolation = recoverableViolation_1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function setByAddingToSet(set, v) {
  const next = new Set(set);
  next.add(v);
  return next;
}

function setByDeletingFromSet(set, v) {
  const next = new Set(set);
  next.delete(v);
  return next;
}

function mapBySettingInMap(map, k, v) {
  const next = new Map(map);
  next.set(k, v);
  return next;
}

function mapByUpdatingInMap(map, k, updater) {
  const next = new Map(map);
  next.set(k, updater(next.get(k)));
  return next;
}

function mapByDeletingFromMap(map, k) {
  const next = new Map(map);
  next.delete(k);
  return next;
}

function mapByDeletingMultipleFromMap(map, ks) {
  const next = new Map(map);
  ks.forEach(k => next.delete(k));
  return next;
}

var Recoil_CopyOnWrite = {
  setByAddingToSet,
  setByDeletingFromSet,
  mapBySettingInMap,
  mapByUpdatingInMap,
  mapByDeletingFromMap,
  mapByDeletingMultipleFromMap
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the filter function.
 */

function* filterIterable(iterable, predicate) {
  // Use generator to create iterable/iterator
  let index = 0;

  for (const value of iterable) {
    if (predicate(value, index++)) {
      yield value;
    }
  }
}

var Recoil_filterIterable = filterIterable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const gks = new Map().set('recoil_hamt_2020', true);

function Recoil_gkx(gk) {
  var _gks$get;

  return (_gks$get = gks.get(gk)) !== null && _gks$get !== void 0 ? _gks$get : false;
}

Recoil_gkx.setPass = gk => {
  gks.set(gk, true);
};

Recoil_gkx.setFail = gk => {
  gks.set(gk, false);
};

var Recoil_gkx_1 = Recoil_gkx; // @oss-only

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the mapper function.
 */

function mapIterable(iterable, callback) {
  // Use generator to create iterable/iterator
  return function* () {
    let index = 0;

    for (const value of iterable) {
      yield callback(value, index++);
    }
  }();
}

var Recoil_mapIterable = mapIterable;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function sprintf(format, ...args) {
  let index = 0;
  return format.replace(/%s/g, () => String(args[index++]));
}

var sprintf_1 = sprintf;

function expectationViolation(format, ...args) {
  if (true) {
    const message = sprintf_1.call(null, format, ...args);
    const error = new Error(message);
    error.name = 'Expectation Violation';
    console.error(error);
  }
}

var expectationViolation_1 = expectationViolation;

// @oss-only


var Recoil_expectationViolation = expectationViolation_1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

// eslint-disable-next-line no-unused-vars
class AbstractRecoilValue {
  constructor(newKey) {
    _defineProperty(this, "key", void 0);

    this.key = newKey;
  }

}

class RecoilState extends AbstractRecoilValue {}

class RecoilValueReadOnly extends AbstractRecoilValue {}

function isRecoilValue(x) {
  return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}

var Recoil_RecoilValue = {
  AbstractRecoilValue,
  RecoilState,
  RecoilValueReadOnly,
  isRecoilValue
};

var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;

var Recoil_RecoilValue$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AbstractRecoilValue: Recoil_RecoilValue_1,
  RecoilState: Recoil_RecoilValue_2,
  RecoilValueReadOnly: Recoil_RecoilValue_3,
  isRecoilValue: Recoil_RecoilValue_4
});

class DefaultValue {}

const DEFAULT_VALUE = new DefaultValue();

class RecoilValueNotReady extends Error {
  constructor(key) {
    super(`Tried to set the value of Recoil selector ${key} using an updater function, but it is an async selector in a pending or error state; this is not supported.`);
  }

}

// flowlint-next-line unclear-type:off
const nodes = new Map(); // flowlint-next-line unclear-type:off

const recoilValues = new Map();
/* eslint-disable no-redeclare */

function recoilValuesForKeys(keys) {
  return Recoil_mapIterable(keys, key => Recoil_nullthrows(recoilValues.get(key)));
}

function registerNode(node) {
  if (nodes.has(node.key)) {
    const message = `Duplicate atom key "${node.key}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`; // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
    // prettier-ignore
    // @fb-only: if (__DEV__) {
    // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
    // prettier-ignore
    // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
    // @fb-only: expectationViolation(message, 'recoil');
    // @fb-only: }
    // prettier-ignore
    // @fb-only: } else {
    // @fb-only: recoverableViolation(message, 'recoil');
    // @fb-only: }

    console.warn(message); // @oss-only
  }

  nodes.set(node.key, node);
  const recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
  recoilValues.set(node.key, recoilValue);
  return recoilValue;
}
/* eslint-enable no-redeclare */


class NodeMissingError extends Error {} // flowlint-next-line unclear-type:off


function getNode(key) {
  const node = nodes.get(key);

  if (node == null) {
    throw new NodeMissingError(`Missing definition for RecoilValue: "${key}""`);
  }

  return node;
} // flowlint-next-line unclear-type:off


function getNodeMaybe(key) {
  return nodes.get(key);
}

const configDeletionHandlers = new Map();

function deleteNodeConfigIfPossible(key) {
  var _node$shouldDeleteCon;

  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const node = nodes.get(key);

  if (node === null || node === void 0 ? void 0 : (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) === null || _node$shouldDeleteCon === void 0 ? void 0 : _node$shouldDeleteCon.call(node)) {
    var _getConfigDeletionHan;

    nodes.delete(key);
    (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
    configDeletionHandlers.delete(key);
  }
}

function setConfigDeletionHandler(key, fn) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  if (fn === undefined) {
    configDeletionHandlers.delete(key);
  } else {
    configDeletionHandlers.set(key, fn);
  }
}

function getConfigDeletionHandler(key) {
  return configDeletionHandlers.get(key);
}

var Recoil_Node = {
  nodes,
  recoilValues,
  registerNode,
  getNode,
  getNodeMaybe,
  deleteNodeConfigIfPossible,
  setConfigDeletionHandler,
  getConfigDeletionHandler,
  recoilValuesForKeys,
  NodeMissingError,
  DefaultValue,
  DEFAULT_VALUE,
  RecoilValueNotReady
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

class RetentionZone {}

function retentionZone() {
  return new RetentionZone();
}

var Recoil_RetentionZone = {
  RetentionZone,
  retentionZone
};

const {
  setByAddingToSet: setByAddingToSet$1
} = Recoil_CopyOnWrite;







const {
  getNode: getNode$1,
  getNodeMaybe: getNodeMaybe$1,
  recoilValuesForKeys: recoilValuesForKeys$1
} = Recoil_Node;

const {
  RetentionZone: RetentionZone$1
} = Recoil_RetentionZone; // flowlint-next-line unclear-type:off


const emptySet = Object.freeze(new Set());

class ReadOnlyRecoilValueError extends Error {}

function initializeRetentionForNode(store, nodeKey, retainedBy) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return () => undefined;
  }

  const {
    nodesRetainedByZone
  } = store.getState().retention;

  function addToZone(zone) {
    let set = nodesRetainedByZone.get(zone);

    if (!set) {
      nodesRetainedByZone.set(zone, set = new Set());
    }

    set.add(nodeKey);
  }

  if (retainedBy instanceof RetentionZone$1) {
    addToZone(retainedBy);
  } else if (Array.isArray(retainedBy)) {
    for (const zone of retainedBy) {
      addToZone(zone);
    }
  }

  return () => {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    const nodesRetainedByZone = store.getState().retention.nodesRetainedByZone;

    function deleteFromZone(zone) {
      const set = nodesRetainedByZone.get(zone);

      if (set) {
        set.delete(nodeKey);
      }

      if (set && set.size === 0) {
        nodesRetainedByZone.delete(zone);
      }
    }

    if (retainedBy instanceof RetentionZone$1) {
      deleteFromZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
      for (const zone of retainedBy) {
        deleteFromZone(zone);
      }
    }
  };
}

function initializeNodeIfNewToStore(store, treeState, key, trigger) {
  const storeState = store.getState();

  if (storeState.nodeCleanupFunctions.has(key)) {
    return;
  }

  const config = getNode$1(key);
  const retentionCleanup = initializeRetentionForNode(store, key, config.retainedBy);
  const nodeCleanup = config.init(store, treeState, trigger);
  storeState.nodeCleanupFunctions.set(key, () => {
    nodeCleanup();
    retentionCleanup();
  });
}

function cleanUpNode(store, key) {
  var _state$nodeCleanupFun;

  const state = store.getState();
  (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
  state.nodeCleanupFunctions.delete(key);
} // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.


function getNodeLoadable(store, state, key) {
  initializeNodeIfNewToStore(store, state, key, 'get');
  return getNode$1(key).get(store, state);
} // Peek at the current value loadable for a node without any evaluation or state change


function peekNodeLoadable(store, state, key) {
  return getNode$1(key).peek(store, state);
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.


function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
  var _node$invalidate;

  const node = getNodeMaybe$1(key);
  node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
  return { ...state,
    atomValues: state.atomValues.clone().delete(key),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
    dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
  };
} // Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)


function setNodeValue(store, state, key, newValue) {
  const node = getNode$1(key);

  if (node.set == null) {
    throw new ReadOnlyRecoilValueError(`Attempt to set read-only RecoilValue: ${key}`);
  }

  const set = node.set; // so flow doesn't lose the above refinement.

  initializeNodeIfNewToStore(store, state, key, 'set');
  return set(store, state, newValue);
}

function peekNodeInfo(store, state, key) {
  var _graph$nodeDeps$get, _storeState$nodeToCom, _storeState$nodeToCom2;

  const storeState = store.getState();
  const graph = store.getGraph(state.version);
  const type = storeState.knownAtoms.has(key) ? 'atom' : storeState.knownSelectors.has(key) ? 'selector' : undefined;
  const downstreamNodes = Recoil_filterIterable(getDownstreamNodes(store, state, new Set([key])), nodeKey => nodeKey !== key);
  return {
    loadable: peekNodeLoadable(store, state, key),
    isActive: storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
    isSet: type === 'selector' ? false : state.atomValues.has(key),
    isModified: state.dirtyAtoms.has(key),
    type,
    // Report current dependencies.  If the node hasn't been evaluated, then
    // dependencies may be missing based on the current state.
    deps: recoilValuesForKeys$1((_graph$nodeDeps$get = graph.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []),
    // Reportsall "current" subscribers.  Evaluating other nodes or
    // previous in-progress async evaluations may introduce new subscribers.
    subscribers: {
      nodes: recoilValuesForKeys$1(downstreamNodes),
      components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], ([name]) => ({
        name
      }))
    }
  };
} // Find all of the recursively dependent nodes


function getDownstreamNodes(store, state, keys) {
  const visitedNodes = new Set();
  const visitingNodes = Array.from(keys);
  const graph = store.getGraph(state.version);

  for (let key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
    var _graph$nodeToNodeSubs;

    visitedNodes.add(key);
    const subscribedNodes = (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;

    for (const downstreamNode of subscribedNodes) {
      if (!visitedNodes.has(downstreamNode)) {
        visitingNodes.push(downstreamNode);
      }
    }
  }

  return visitedNodes;
}

var Recoil_FunctionalCore = {
  getNodeLoadable,
  peekNodeLoadable,
  setNodeValue,
  cleanUpNode,
  setUnvalidatedAtomValue_DEPRECATED,
  peekNodeInfo,
  getDownstreamNodes,
  initializeNodeIfNewToStore
};

const {
  getDownstreamNodes: getDownstreamNodes$1,
  getNodeLoadable: getNodeLoadable$1,
  setNodeValue: setNodeValue$1
} = Recoil_FunctionalCore;

const {
  getNodeMaybe: getNodeMaybe$2
} = Recoil_Node;

const {
  DefaultValue: DefaultValue$1,
  RecoilValueNotReady: RecoilValueNotReady$1
} = Recoil_Node;

const {
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  isRecoilValue: isRecoilValue$1
} = Recoil_RecoilValue$1;

function getRecoilValueAsLoadable(store, {
  key
}, treeState = store.getState().currentTree) {
  var _storeState$nextTree, _storeState$previousT;

  // Reading from an older tree can cause bugs because the dependencies that we
  // discover during the read are lost.
  const storeState = store.getState();

  if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to read from a discarded tree');
  }

  const loadable = getNodeLoadable$1(store, treeState, key);
  return loadable;
}

function applyAtomValueWrites(atomValues, writes) {
  const result = atomValues.clone();
  writes.forEach((v, k) => {
    if (v.state === 'hasValue' && v.contents instanceof DefaultValue$1) {
      result.delete(k);
    } else {
      result.set(k, v);
    }
  });
  return result;
}

function valueFromValueOrUpdater(store, state, {
  key
}, valueOrUpdater) {
  if (typeof valueOrUpdater === 'function') {
    // Updater form: pass in the current value. Throw if the current value
    // is unavailable (namely when updating an async selector that's
    // pending or errored):
    const current = getNodeLoadable$1(store, state, key);

    if (current.state === 'loading') {
      throw new RecoilValueNotReady$1(key);
    } else if (current.state === 'hasError') {
      throw current.contents;
    } // T itself may be a function, so our refinement is not sufficient:


    return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
  } else {
    return valueOrUpdater;
  }
}

function applyAction(store, state, action) {
  if (action.type === 'set') {
    const {
      recoilValue,
      valueOrUpdater
    } = action;
    const newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
    const writes = setNodeValue$1(store, state, recoilValue.key, newValue);

    for (const [key, loadable] of writes.entries()) {
      writeLoadableToTreeState(state, key, loadable);
    }
  } else if (action.type === 'setLoadable') {
    const {
      recoilValue: {
        key
      },
      loadable
    } = action;
    writeLoadableToTreeState(state, key, loadable);
  } else if (action.type === 'markModified') {
    const {
      recoilValue: {
        key
      }
    } = action;
    state.dirtyAtoms.add(key);
  } else if (action.type === 'setUnvalidated') {
    var _node$invalidate;

    // Write value directly to state bypassing the Node interface as the node
    // definitions may not have been loaded yet when processing the initial snapshot.
    const {
      recoilValue: {
        key
      },
      unvalidatedValue
    } = action;
    const node = getNodeMaybe$2(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    state.atomValues.delete(key);
    state.nonvalidatedAtoms.set(key, unvalidatedValue);
    state.dirtyAtoms.add(key);
  } else {
    Recoil_recoverableViolation(`Unknown action ${action.type}`);
  }
}

function writeLoadableToTreeState(state, key, loadable) {
  if (loadable.state === 'hasValue' && loadable.contents instanceof DefaultValue$1) {
    state.atomValues.delete(key);
  } else {
    state.atomValues.set(key, loadable);
  }

  state.dirtyAtoms.add(key);
  state.nonvalidatedAtoms.delete(key);
}

function applyActionsToStore(store, actions) {
  store.replaceState(state => {
    const newState = copyTreeState(state);

    for (const action of actions) {
      applyAction(store, newState, action);
    }

    invalidateDownstreams(store, newState);
    return newState;
  });
}

function queueOrPerformStateUpdate(store, action) {
  if (batchStack.length) {
    const actionsByStore = batchStack[batchStack.length - 1];
    let actions = actionsByStore.get(store);

    if (!actions) {
      actionsByStore.set(store, actions = []);
    }

    actions.push(action);
  } else {
    applyActionsToStore(store, [action]);
  }
}

const batchStack = [];

function batchStart() {
  const actionsByStore = new Map();
  batchStack.push(actionsByStore);
  return () => {
    for (const [store, actions] of actionsByStore) {
      applyActionsToStore(store, actions);
    }

    const popped = batchStack.pop();

    if (popped !== actionsByStore) {
      Recoil_recoverableViolation('Incorrect order of batch popping');
    }
  };
}

function copyTreeState(state) {
  return { ...state,
    atomValues: state.atomValues.clone(),
    nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(state.dirtyAtoms)
  };
}

function invalidateDownstreams(store, state) {
  // Inform any nodes that were changed or downstream of changes so that they
  // can clear out any caches as needed due to the update:
  const downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);

  for (const key of downstreams) {
    var _getNodeMaybe, _getNodeMaybe$invalid;

    (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
  }
}

function setRecoilValue(store, recoilValue, valueOrUpdater) {
  queueOrPerformStateUpdate(store, {
    type: 'set',
    recoilValue,
    valueOrUpdater
  });
}

function setRecoilValueLoadable(store, recoilValue, loadable) {
  if (loadable instanceof DefaultValue$1) {
    return setRecoilValue(store, recoilValue, loadable);
  }

  queueOrPerformStateUpdate(store, {
    type: 'setLoadable',
    recoilValue,
    loadable
  });
}

function markRecoilValueModified(store, recoilValue) {
  queueOrPerformStateUpdate(store, {
    type: 'markModified',
    recoilValue
  });
}

function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
  queueOrPerformStateUpdate(store, {
    type: 'setUnvalidated',
    recoilValue,
    unvalidatedValue
  });
}

let subscriptionID = 0;

function subscribeToRecoilValue(store, {
  key
}, callback, componentDebugName = null) {
  const subID = subscriptionID++;
  const storeState = store.getState();

  if (!storeState.nodeToComponentSubscriptions.has(key)) {
    storeState.nodeToComponentSubscriptions.set(key, new Map());
  }

  Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : '<not captured>', callback]);
  return {
    release: () => {
      const storeState = store.getState();
      const subs = storeState.nodeToComponentSubscriptions.get(key);

      if (subs === undefined || !subs.has(subID)) {
        Recoil_recoverableViolation(`Subscription missing at release time for atom ${key}. This is a bug in Recoil.`);
        return;
      }

      subs.delete(subID);

      if (subs.size === 0) {
        storeState.nodeToComponentSubscriptions.delete(key);
      }
    }
  };
}

var Recoil_RecoilValueInterface = {
  RecoilValueReadOnly: RecoilValueReadOnly$1,
  AbstractRecoilValue: AbstractRecoilValue$1,
  RecoilState: RecoilState$1,
  getRecoilValueAsLoadable,
  setRecoilValue,
  setRecoilValueLoadable,
  markRecoilValueModified,
  setUnvalidatedRecoilValue,
  subscribeToRecoilValue,
  isRecoilValue: isRecoilValue$1,
  applyAtomValueWrites,
  // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
  batchStart,
  invalidateDownstreams_FOR_TESTING: invalidateDownstreams
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
const {
  unstable_batchedUpdates
} = (react_dom__WEBPACK_IMPORTED_MODULE_0___default());

var ReactBatchedUpdates = {
  unstable_batchedUpdates
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
// @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');
const {
  unstable_batchedUpdates: unstable_batchedUpdates$1
} = ReactBatchedUpdates; // @oss-only


var Recoil_ReactBatchedUpdates = {
  unstable_batchedUpdates: unstable_batchedUpdates$1
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
const {
  batchStart: batchStart$1
} = Recoil_RecoilValueInterface;

const {
  unstable_batchedUpdates: unstable_batchedUpdates$2
} = Recoil_ReactBatchedUpdates;

let batcher = unstable_batchedUpdates$2; // flowlint-next-line unclear-type:off

/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */
const setBatcher = newBatcher => {
  batcher = newBatcher;
};
/**
 * Returns the current batcher function.
 */


const getBatcher = () => batcher;
/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */


const batchUpdates = callback => {
  batcher(() => {
    let batchEnd = () => undefined;

    try {
      batchEnd = batchStart$1();
      callback();
    } finally {
      batchEnd();
    }
  });
};

var Recoil_Batching = {
  getBatcher,
  setBatcher,
  batchUpdates
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function enqueueExecution(s, f) {
  f();
}

var Recoil_Queue = {
  enqueueExecution
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */

function differenceSets(set, ...setsWithValuesToRemove) {
  const ret = new Set();

  FIRST: for (const value of set) {
    for (const otherSet of setsWithValuesToRemove) {
      if (otherSet.has(value)) {
        continue FIRST;
      }
    }

    ret.add(value);
  }

  return ret;
}

var Recoil_differenceSets = differenceSets;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */

function mapMap(map, callback) {
  const result = new Map();
  map.forEach((value, key) => {
    result.set(key, callback(value, key));
  });
  return result;
}

var Recoil_mapMap = mapMap;

function graph() {
  return {
    nodeDeps: new Map(),
    nodeToNodeSubscriptions: new Map()
  };
}

function cloneGraph(graph) {
  return {
    nodeDeps: Recoil_mapMap(graph.nodeDeps, s => new Set(s)),
    nodeToNodeSubscriptions: Recoil_mapMap(graph.nodeToNodeSubscriptions, s => new Set(s))
  };
} // Note that this overwrites the deps of existing nodes, rather than unioning
// the new deps with the old deps.


function mergeDependencyMapIntoGraph(deps, graph, // If olderGraph is given then we will not overwrite changes made to the given
// graph compared with olderGraph:
olderGraph) {
  const {
    nodeDeps,
    nodeToNodeSubscriptions
  } = graph;
  deps.forEach((upstreams, downstream) => {
    const existingUpstreams = nodeDeps.get(downstream);

    if (existingUpstreams && olderGraph && existingUpstreams !== olderGraph.nodeDeps.get(downstream)) {
      return;
    } // Update nodeDeps:


    nodeDeps.set(downstream, new Set(upstreams)); // Add new deps to nodeToNodeSubscriptions:

    const addedUpstreams = existingUpstreams == null ? upstreams : Recoil_differenceSets(upstreams, existingUpstreams);
    addedUpstreams.forEach(upstream => {
      if (!nodeToNodeSubscriptions.has(upstream)) {
        nodeToNodeSubscriptions.set(upstream, new Set());
      }

      const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
      existing.add(downstream);
    }); // Remove removed deps from nodeToNodeSubscriptions:

    if (existingUpstreams) {
      const removedUpstreams = Recoil_differenceSets(existingUpstreams, upstreams);
      removedUpstreams.forEach(upstream => {
        if (!nodeToNodeSubscriptions.has(upstream)) {
          return;
        }

        const existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
        existing.delete(downstream);

        if (existing.size === 0) {
          nodeToNodeSubscriptions.delete(upstream);
        }
      });
    }
  });
}

function saveDependencyMapToStore(dependencyMap, store, version) {
  var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;

  const storeState = store.getState();

  if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
    Recoil_recoverableViolation('Tried to save dependencies to a discarded tree');
  } // Merge the dependencies discovered into the store's dependency map
  // for the version that was read:


  const graph = store.getGraph(version);
  mergeDependencyMapIntoGraph(dependencyMap, graph); // If this version is not the latest version, also write these dependencies
  // into later versions if they don't already have their own:

  if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
    const currentGraph = store.getGraph(storeState.currentTree.version);
    mergeDependencyMapIntoGraph(dependencyMap, currentGraph, graph);
  }

  if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
    var _storeState$nextTree2;

    const nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;

    if (nextVersion !== undefined) {
      const nextGraph = store.getGraph(nextVersion);
      mergeDependencyMapIntoGraph(dependencyMap, nextGraph, graph);
    }
  }
}

function mergeDepsIntoDependencyMap(from, into) {
  from.forEach((upstreamDeps, downstreamNode) => {
    if (!into.has(downstreamNode)) {
      into.set(downstreamNode, new Set());
    }

    const deps = Recoil_nullthrows(into.get(downstreamNode));
    upstreamDeps.forEach(dep => deps.add(dep));
  });
}

function addToDependencyMap(downstream, upstream, dependencyMap) {
  if (!dependencyMap.has(downstream)) {
    dependencyMap.set(downstream, new Set());
  }

  Recoil_nullthrows(dependencyMap.get(downstream)).add(upstream);
}

var Recoil_Graph = {
  addToDependencyMap,
  cloneGraph,
  graph,
  mergeDepsIntoDependencyMap,
  saveDependencyMapToStore
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var hamt_1 = createCommonjsModule(function (module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/**
    @fileOverview Hash Array Mapped Trie.

    Code based on: https://github.com/exclipy/pdata
*/


var hamt = {}; // export

/* Configuration
 ******************************************************************************/

var SIZE = 5;
var BUCKET_SIZE = Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
/*
 ******************************************************************************/

var nothing = {};

var constant = function constant(x) {
  return function () {
    return x;
  };
};
/**
    Get 32 bit hash of string.

    Based on:
    http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
*/


var hash = hamt.hash = function (str) {
  var type = typeof str === 'undefined' ? 'undefined' : _typeof(str);
  if (type === 'number') return str;
  if (type !== 'string') str += '';
  var hash = 0;

  for (var i = 0, len = str.length; i < len; ++i) {
    var c = str.charCodeAt(i);
    hash = (hash << 5) - hash + c | 0;
  }

  return hash;
};
/* Bit Ops
 ******************************************************************************/

/**
    Hamming weight.

    Taken from: http://jsperf.com/hamming-weight
*/


var popcount = function popcount(x) {
  x -= x >> 1 & 0x55555555;
  x = (x & 0x33333333) + (x >> 2 & 0x33333333);
  x = x + (x >> 4) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
};

var hashFragment = function hashFragment(shift, h) {
  return h >>> shift & MASK;
};

var toBitmap = function toBitmap(x) {
  return 1 << x;
};

var fromBitmap = function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
};
/* Array Ops
 ******************************************************************************/

/**
    Set a value in an array.

    @param mutate Should the input array be mutated?
    @param at Index to change.
    @param v New value
    @param arr Array.
*/


var arrayUpdate = function arrayUpdate(mutate, at, v, arr) {
  var out = arr;

  if (!mutate) {
    var len = arr.length;
    out = new Array(len);

    for (var i = 0; i < len; ++i) {
      out[i] = arr[i];
    }
  }

  out[at] = v;
  return out;
};
/**
    Remove a value from an array.

    @param mutate Should the input array be mutated?
    @param at Index to remove.
    @param arr Array.
*/


var arraySpliceOut = function arraySpliceOut(mutate, at, arr) {
  var newLen = arr.length - 1;
  var i = 0;
  var g = 0;
  var out = arr;

  if (mutate) {
    i = g = at;
  } else {
    out = new Array(newLen);

    while (i < at) {
      out[g++] = arr[i++];
    }
  }

  ++i;

  while (i <= newLen) {
    out[g++] = arr[i++];
  }

  if (mutate) {
    out.length = newLen;
  }

  return out;
};
/**
    Insert a value into an array.

    @param mutate Should the input array be mutated?
    @param at Index to insert at.
    @param v Value to insert,
    @param arr Array.
*/


var arraySpliceIn = function arraySpliceIn(mutate, at, v, arr) {
  var len = arr.length;

  if (mutate) {
    var _i = len;

    while (_i >= at) {
      arr[_i--] = arr[_i];
    }

    arr[at] = v;
    return arr;
  }

  var i = 0,
      g = 0;
  var out = new Array(len + 1);

  while (i < at) {
    out[g++] = arr[i++];
  }

  out[at] = v;

  while (i < len) {
    out[++g] = arr[i++];
  }

  return out;
};
/* Node Structures
 ******************************************************************************/


var LEAF = 1;
var COLLISION = 2;
var INDEX = 3;
var ARRAY = 4;
/**
    Empty node.
*/

var empty = {
  __hamt_isEmpty: true
};

var isEmptyNode = function isEmptyNode(x) {
  return x === empty || x && x.__hamt_isEmpty;
};
/**
    Leaf holding a value.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member key Key.
    @member value Value stored.
*/


var Leaf = function Leaf(edit, hash, key, value) {
  return {
    type: LEAF,
    edit: edit,
    hash: hash,
    key: key,
    value: value,
    _modify: Leaf__modify
  };
};
/**
    Leaf holding multiple values with the same hash but different keys.

    @member edit Edit of the node.
    @member hash Hash of key.
    @member children Array of collision children node.
*/


var Collision = function Collision(edit, hash, children) {
  return {
    type: COLLISION,
    edit: edit,
    hash: hash,
    children: children,
    _modify: Collision__modify
  };
};
/**
    Internal node with a sparse set of children.

    Uses a bitmap and array to pack children.

  @member edit Edit of the node.
    @member mask Bitmap that encode the positions of children in the array.
    @member children Array of child nodes.
*/


var IndexedNode = function IndexedNode(edit, mask, children) {
  return {
    type: INDEX,
    edit: edit,
    mask: mask,
    children: children,
    _modify: IndexedNode__modify
  };
};
/**
    Internal node with many children.

    @member edit Edit of the node.
    @member size Number of children.
    @member children Array of child nodes.
*/


var ArrayNode = function ArrayNode(edit, size, children) {
  return {
    type: ARRAY,
    edit: edit,
    size: size,
    children: children,
    _modify: ArrayNode__modify
  };
};
/**
    Is `node` a leaf node?
*/


var isLeaf = function isLeaf(node) {
  return node === empty || node.type === LEAF || node.type === COLLISION;
};
/* Internal node operations.
 ******************************************************************************/

/**
    Expand an indexed node into an array node.

  @param edit Current edit.
    @param frag Index of added child.
    @param child Added child.
    @param mask Index node mask before child added.
    @param subNodes Index node children before child added.
*/


var expand = function expand(edit, frag, child, bitmap, subNodes) {
  var arr = [];
  var bit = bitmap;
  var count = 0;

  for (var i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++];
    bit >>>= 1;
  }

  arr[frag] = child;
  return ArrayNode(edit, count + 1, arr);
};
/**
    Collapse an array node into a indexed node.

  @param edit Current edit.
    @param count Number of elements in new array.
    @param removed Index of removed element.
    @param elements Array node children before remove.
*/


var pack = function pack(edit, count, removed, elements) {
  var children = new Array(count - 1);
  var g = 0;
  var bitmap = 0;

  for (var i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      var elem = elements[i];

      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }

  return IndexedNode(edit, bitmap, children);
};
/**
    Merge two leaf nodes.

    @param shift Current shift.
    @param h1 Node 1 hash.
    @param n1 Node 1.
    @param h2 Node 2 hash.
    @param n2 Node 2.
*/


var mergeLeaves = function mergeLeaves(edit, shift, h1, n1, h2, n2) {
  if (h1 === h2) return Collision(edit, h1, [n2, n1]);
  var subH1 = hashFragment(shift, h1);
  var subH2 = hashFragment(shift, h2);
  return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
};
/**
    Update an entry in a collision list.

    @param mutate Should mutation be used?
    @param edit Current edit.
    @param keyEq Key compare function.
    @param hash Hash of collision.
    @param list Collision list.
    @param f Update function.
    @param k Key to update.
    @param size Size ref.
*/


var updateCollisionList = function updateCollisionList(mutate, edit, keyEq, h, list, f, k, size) {
  var len = list.length;

  for (var i = 0; i < len; ++i) {
    var child = list[i];

    if (keyEq(k, child.key)) {
      var value = child.value;

      var _newValue = f(value);

      if (_newValue === value) return list;

      if (_newValue === nothing) {
        --size.value;
        return arraySpliceOut(mutate, i, list);
      }

      return arrayUpdate(mutate, i, Leaf(edit, h, k, _newValue), list);
    }
  }

  var newValue = f();
  if (newValue === nothing) return list;
  ++size.value;
  return arrayUpdate(mutate, len, Leaf(edit, h, k, newValue), list);
};

var canEditNode = function canEditNode(edit, node) {
  return edit === node.edit;
};
/* Editing
 ******************************************************************************/


var Leaf__modify = function Leaf__modify(edit, keyEq, shift, f, h, k, size) {
  if (keyEq(k, this.key)) {
    var _v = f(this.value);

    if (_v === this.value) return this;else if (_v === nothing) {
      --size.value;
      return empty;
    }

    if (canEditNode(edit, this)) {
      this.value = _v;
      return this;
    }

    return Leaf(edit, h, k, _v);
  }

  var v = f();
  if (v === nothing) return this;
  ++size.value;
  return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
};

var Collision__modify = function Collision__modify(edit, keyEq, shift, f, h, k, size) {
  if (h === this.hash) {
    var canEdit = canEditNode(edit, this);
    var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f, k, size);
    if (list === this.children) return this;
    return list.length > 1 ? Collision(edit, this.hash, list) : list[0]; // collapse single element collision list
  }

  var v = f();
  if (v === nothing) return this;
  ++size.value;
  return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
};

var IndexedNode__modify = function IndexedNode__modify(edit, keyEq, shift, f, h, k, size) {
  var mask = this.mask;
  var children = this.children;
  var frag = hashFragment(shift, h);
  var bit = toBitmap(frag);
  var indx = fromBitmap(mask, bit);
  var exists = mask & bit;
  var current = exists ? children[indx] : empty;

  var child = current._modify(edit, keyEq, shift + SIZE, f, h, k, size);

  if (current === child) return this;
  var canEdit = canEditNode(edit, this);
  var bitmap = mask;
  var newChildren = void 0;

  if (exists && isEmptyNode(child)) {
    // remove
    bitmap &= ~bit;
    if (!bitmap) return empty;
    if (children.length <= 2 && isLeaf(children[indx ^ 1])) return children[indx ^ 1]; // collapse

    newChildren = arraySpliceOut(canEdit, indx, children);
  } else if (!exists && !isEmptyNode(child)) {
    // add
    if (children.length >= MAX_INDEX_NODE) return expand(edit, frag, child, mask, children);
    bitmap |= bit;
    newChildren = arraySpliceIn(canEdit, indx, child, children);
  } else {
    // modify
    newChildren = arrayUpdate(canEdit, indx, child, children);
  }

  if (canEdit) {
    this.mask = bitmap;
    this.children = newChildren;
    return this;
  }

  return IndexedNode(edit, bitmap, newChildren);
};

var ArrayNode__modify = function ArrayNode__modify(edit, keyEq, shift, f, h, k, size) {
  var count = this.size;
  var children = this.children;
  var frag = hashFragment(shift, h);
  var child = children[frag];

  var newChild = (child || empty)._modify(edit, keyEq, shift + SIZE, f, h, k, size);

  if (child === newChild) return this;
  var canEdit = canEditNode(edit, this);
  var newChildren = void 0;

  if (isEmptyNode(child) && !isEmptyNode(newChild)) {
    // add
    ++count;
    newChildren = arrayUpdate(canEdit, frag, newChild, children);
  } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
    // remove
    --count;
    if (count <= MIN_ARRAY_NODE) return pack(edit, count, frag, children);
    newChildren = arrayUpdate(canEdit, frag, empty, children);
  } else {
    // modify
    newChildren = arrayUpdate(canEdit, frag, newChild, children);
  }

  if (canEdit) {
    this.size = count;
    this.children = newChildren;
    return this;
  }

  return ArrayNode(edit, count, newChildren);
};

empty._modify = function (edit, keyEq, shift, f, h, k, size) {
  var v = f();
  if (v === nothing) return empty;
  ++size.value;
  return Leaf(edit, h, k, v);
};
/*
 ******************************************************************************/


function Map(editable, edit, config, root, size) {
  this._editable = editable;
  this._edit = edit;
  this._config = config;
  this._root = root;
  this._size = size;
}

Map.prototype.setTree = function (newRoot, newSize) {
  if (this._editable) {
    this._root = newRoot;
    this._size = newSize;
    return this;
  }

  return newRoot === this._root ? this : new Map(this._editable, this._edit, this._config, newRoot, newSize);
};
/* Queries
 ******************************************************************************/

/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `alt` if none.
*/


var tryGetHash = hamt.tryGetHash = function (alt, hash, key, map) {
  var node = map._root;
  var shift = 0;
  var keyEq = map._config.keyEq;

  while (true) {
    switch (node.type) {
      case LEAF:
        {
          return keyEq(key, node.key) ? node.value : alt;
        }

      case COLLISION:
        {
          if (hash === node.hash) {
            var children = node.children;

            for (var i = 0, len = children.length; i < len; ++i) {
              var child = children[i];
              if (keyEq(key, child.key)) return child.value;
            }
          }

          return alt;
        }

      case INDEX:
        {
          var frag = hashFragment(shift, hash);
          var bit = toBitmap(frag);

          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift += SIZE;
            break;
          }

          return alt;
        }

      case ARRAY:
        {
          node = node.children[hashFragment(shift, hash)];

          if (node) {
            shift += SIZE;
            break;
          }

          return alt;
        }

      default:
        return alt;
    }
  }
};

Map.prototype.tryGetHash = function (alt, hash, key) {
  return tryGetHash(alt, hash, key, this);
};
/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `tryGetHash`
*/


var tryGet = hamt.tryGet = function (alt, key, map) {
  return tryGetHash(alt, map._config.hash(key), key, map);
};

Map.prototype.tryGet = function (alt, key) {
  return tryGet(alt, key, this);
};
/**
    Lookup the value for `key` in `map` using a custom `hash`.

    Returns the value or `undefined` if none.
*/


var getHash = hamt.getHash = function (hash, key, map) {
  return tryGetHash(undefined, hash, key, map);
};

Map.prototype.getHash = function (hash, key) {
  return getHash(hash, key, this);
};
/**
    Lookup the value for `key` in `map` using internal hash function.

    @see `get`
*/


var get = hamt.get = function (key, map) {
  return tryGetHash(undefined, map._config.hash(key), key, map);
};

Map.prototype.get = function (key, alt) {
  return tryGet(alt, key, this);
};
/**
    Does an entry exist for `key` in `map`? Uses custom `hash`.
*/


var hasHash = hamt.has = function (hash, key, map) {
  return tryGetHash(nothing, hash, key, map) !== nothing;
};

Map.prototype.hasHash = function (hash, key) {
  return hasHash(hash, key, this);
};
/**
    Does an entry exist for `key` in `map`? Uses internal hash function.
*/


var has = hamt.has = function (key, map) {
  return hasHash(map._config.hash(key), key, map);
};

Map.prototype.has = function (key) {
  return has(key, this);
};

var defKeyCompare = function defKeyCompare(x, y) {
  return x === y;
};
/**
    Create an empty map.

    @param config Configuration.
*/


hamt.make = function (config) {
  return new Map(0, 0, {
    keyEq: config && config.keyEq || defKeyCompare,
    hash: config && config.hash || hash
  }, empty, 0);
};
/**
    Empty map.
*/


hamt.empty = hamt.make();
/**
    Does `map` contain any elements?
*/

var isEmpty = hamt.isEmpty = function (map) {
  return map && !!isEmptyNode(map._root);
};

Map.prototype.isEmpty = function () {
  return isEmpty(this);
};
/* Updates
 ******************************************************************************/

/**
    Alter the value stored for `key` in `map` using function `f` using
    custom hash.

    `f` is invoked with the current value for `k` if it exists,
    or no arguments if no such value exists. `modify` will always either
    update or insert a value into the map.

    Returns a map with the modified value. Does not alter `map`.
*/


var modifyHash = hamt.modifyHash = function (f, hash, key, map) {
  var size = {
    value: map._size
  };

  var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f, hash, key, size);

  return map.setTree(newRoot, size.value);
};

Map.prototype.modifyHash = function (hash, key, f) {
  return modifyHash(f, hash, key, this);
};
/**
    Alter the value stored for `key` in `map` using function `f` using
    internal hash function.

    @see `modifyHash`
*/


var modify = hamt.modify = function (f, key, map) {
  return modifyHash(f, map._config.hash(key), key, map);
};

Map.prototype.modify = function (key, f) {
  return modify(f, key, this);
};
/**
    Store `value` for `key` in `map` using custom `hash`.

    Returns a map with the modified value. Does not alter `map`.
*/


var setHash = hamt.setHash = function (hash, key, value, map) {
  return modifyHash(constant(value), hash, key, map);
};

Map.prototype.setHash = function (hash, key, value) {
  return setHash(hash, key, value, this);
};
/**
    Store `value` for `key` in `map` using internal hash function.

    @see `setHash`
*/


var set = hamt.set = function (key, value, map) {
  return setHash(map._config.hash(key), key, value, map);
};

Map.prototype.set = function (key, value) {
  return set(key, value, this);
};
/**
    Remove the entry for `key` in `map`.

    Returns a map with the value removed. Does not alter `map`.
*/


var del = constant(nothing);

var removeHash = hamt.removeHash = function (hash, key, map) {
  return modifyHash(del, hash, key, map);
};

Map.prototype.removeHash = Map.prototype.deleteHash = function (hash, key) {
  return removeHash(hash, key, this);
};
/**
    Remove the entry for `key` in `map` using internal hash function.

    @see `removeHash`
*/


var remove = hamt.remove = function (key, map) {
  return removeHash(map._config.hash(key), key, map);
};

Map.prototype.remove = Map.prototype.delete = function (key) {
  return remove(key, this);
};
/* Mutation
 ******************************************************************************/

/**
    Mark `map` as mutable.
 */


var beginMutation = hamt.beginMutation = function (map) {
  return new Map(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
};

Map.prototype.beginMutation = function () {
  return beginMutation(this);
};
/**
    Mark `map` as immutable.
 */


var endMutation = hamt.endMutation = function (map) {
  map._editable = map._editable && map._editable - 1;
  return map;
};

Map.prototype.endMutation = function () {
  return endMutation(this);
};
/**
    Mutate `map` within the context of `f`.
    @param f
    @param map HAMT
*/


var mutate = hamt.mutate = function (f, map) {
  var transient = beginMutation(map);
  f(transient);
  return endMutation(transient);
};

Map.prototype.mutate = function (f) {
  return mutate(f, this);
};
/* Traversal
 ******************************************************************************/

/**
    Apply a continuation.
*/


var appk = function appk(k) {
  return k && lazyVisitChildren(k[0], k[1], k[2], k[3], k[4]);
};
/**
    Recursively visit all values stored in an array of nodes lazily.
*/


var lazyVisitChildren = function lazyVisitChildren(len, children, i, f, k) {
  while (i < len) {
    var child = children[i++];
    if (child && !isEmptyNode(child)) return lazyVisit(child, f, [len, children, i, f, k]);
  }

  return appk(k);
};
/**
    Recursively visit all values stored in `node` lazily.
*/


var lazyVisit = function lazyVisit(node, f, k) {
  switch (node.type) {
    case LEAF:
      return {
        value: f(node),
        rest: k
      };

    case COLLISION:
    case ARRAY:
    case INDEX:
      var children = node.children;
      return lazyVisitChildren(children.length, children, 0, f, k);

    default:
      return appk(k);
  }
};

var DONE = {
  done: true
};
/**
    Javascript iterator over a map.
*/

function MapIterator(v) {
  this.v = v;
}

MapIterator.prototype.next = function () {
  if (!this.v) return DONE;
  var v0 = this.v;
  this.v = appk(v0.rest);
  return v0;
};

MapIterator.prototype[Symbol.iterator] = function () {
  return this;
};
/**
    Lazily visit each value in map with function `f`.
*/


var visit = function visit(map, f) {
  return new MapIterator(lazyVisit(map._root, f));
};
/**
    Get a Javascsript iterator of `map`.

    Iterates over `[key, value]` arrays.
*/


var buildPairs = function buildPairs(x) {
  return [x.key, x.value];
};

var entries = hamt.entries = function (map) {
  return visit(map, buildPairs);
};

Map.prototype.entries = Map.prototype[Symbol.iterator] = function () {
  return entries(this);
};
/**
    Get array of all keys in `map`.

    Order is not guaranteed.
*/


var buildKeys = function buildKeys(x) {
  return x.key;
};

var keys = hamt.keys = function (map) {
  return visit(map, buildKeys);
};

Map.prototype.keys = function () {
  return keys(this);
};
/**
    Get array of all values in `map`.

    Order is not guaranteed, duplicates are preserved.
*/


var buildValues = function buildValues(x) {
  return x.value;
};

var values = hamt.values = Map.prototype.values = function (map) {
  return visit(map, buildValues);
};

Map.prototype.values = function () {
  return values(this);
};
/* Fold
 ******************************************************************************/

/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function mapping accumulated value, value, and key to new value.
    @param z Starting value.
    @param m HAMT
*/


var fold = hamt.fold = function (f, z, m) {
  var root = m._root;
  if (root.type === LEAF) return f(z, root.value, root.key);
  var toVisit = [root.children];
  var children = void 0;

  while (children = toVisit.pop()) {
    for (var i = 0, len = children.length; i < len;) {
      var child = children[i++];

      if (child && child.type) {
        if (child.type === LEAF) z = f(z, child.value, child.key);else toVisit.push(child.children);
      }
    }
  }

  return z;
};

Map.prototype.fold = function (f, z) {
  return fold(f, z, this);
};
/**
    Visit every entry in the map, aggregating data.

    Order of nodes is not guaranteed.

    @param f Function invoked with value and key
    @param map HAMT
*/


var forEach = hamt.forEach = function (f, map) {
  return fold(function (_, value, key) {
    return f(value, key, map);
  }, null, map);
};

Map.prototype.forEach = function (f) {
  return forEach(f, this);
};
/* Aggregate
 ******************************************************************************/

/**
    Get the number of entries in `map`.
*/


var count = hamt.count = function (map) {
  return map._size;
};

Map.prototype.count = function () {
  return count(this);
};

Object.defineProperty(Map.prototype, 'size', {
  get: Map.prototype.count
});
/* Export
 ******************************************************************************/

if ( module.exports) {
  module.exports = hamt;
} else {
  undefined.hamt = hamt;
}
});

class BuiltInMap {
  constructor(existing) {
    _defineProperty(this, "_map", void 0);

    this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
  }

  keys() {
    return this._map.keys();
  }

  entries() {
    return this._map.entries();
  }

  get(k) {
    return this._map.get(k);
  }

  has(k) {
    return this._map.has(k);
  }

  set(k, v) {
    this._map.set(k, v);

    return this;
  }

  delete(k) {
    this._map.delete(k);

    return this;
  }

  clone() {
    return persistentMap(this);
  }

  toMap() {
    return new Map(this._map);
  }

}

class HashArrayMappedTrieMap {
  // Because hamt.empty is not a function there is no way to introduce type
  // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
  // flowlint-next-line unclear-type:off
  constructor(existing) {
    _defineProperty(this, "_hamt", hamt_1.empty.beginMutation());

    if (existing instanceof HashArrayMappedTrieMap) {
      const h = existing._hamt.endMutation();

      existing._hamt = h.beginMutation();
      this._hamt = h.beginMutation();
    } else if (existing) {
      for (const [k, v] of existing.entries()) {
        this._hamt.set(k, v);
      }
    }
  }

  keys() {
    return this._hamt.keys();
  }

  entries() {
    return this._hamt.entries();
  }

  get(k) {
    return this._hamt.get(k);
  }

  has(k) {
    return this._hamt.has(k);
  }

  set(k, v) {
    this._hamt.set(k, v);

    return this;
  }

  delete(k) {
    this._hamt.delete(k);

    return this;
  }

  clone() {
    return persistentMap(this);
  }

  toMap() {
    return new Map(this._hamt);
  }

}

function persistentMap(existing) {
  if (Recoil_gkx_1('recoil_hamt_2020')) {
    return new HashArrayMappedTrieMap(existing);
  } else {
    return new BuiltInMap(existing);
  }
}

var Recoil_PersistentMap = {
  persistentMap
};

var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;

var Recoil_PersistentMap$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  persistentMap: Recoil_PersistentMap_1
});

const {
  graph: graph$1
} = Recoil_Graph;

const {
  persistentMap: persistentMap$1
} = Recoil_PersistentMap$1; // flowlint-next-line unclear-type:off


let nextTreeStateVersion = 0;

const getNextTreeStateVersion = () => nextTreeStateVersion++;

function makeEmptyTreeState() {
  const version = getNextTreeStateVersion();
  return {
    version,
    stateID: version,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: persistentMap$1(),
    nonvalidatedAtoms: persistentMap$1()
  };
}

function makeEmptyStoreState() {
  const currentTree = makeEmptyTreeState();
  return {
    currentTree,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(currentTree.version, graph$1()),
    versionsUsedByComponent: new Map(),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set()
    },
    nodeCleanupFunctions: new Map()
  };
}

var Recoil_State = {
  makeEmptyTreeState,
  makeEmptyStoreState,
  getNextTreeStateVersion
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function unionSets(...sets) {
  const result = new Set();

  for (const set of sets) {
    for (const value of set) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_unionSets = unionSets;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */

function someSet(set, callback, context) {
  const iterator = set.entries();
  let current = iterator.next();

  while (!current.done) {
    const entry = current.value;

    if (callback.call(context, entry[1], entry[0], set)) {
      return true;
    }

    current = iterator.next();
  }

  return false;
}

var Recoil_someSet = someSet;

const {
  cleanUpNode: cleanUpNode$1
} = Recoil_FunctionalCore;

const {
  deleteNodeConfigIfPossible: deleteNodeConfigIfPossible$1,
  getNode: getNode$2
} = Recoil_Node;

const {
  RetentionZone: RetentionZone$2
} = Recoil_RetentionZone;

const emptySet$1 = new Set();

function releaseRetainablesNowOnCurrentTree(store, retainables) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;

  if (storeState.nextTree) {
    Recoil_recoverableViolation('releaseNodesNowOnCurrentTree should only be called at the end of a batch');
    return; // leak memory rather than erase something that's about to be used.
  }

  const nodes = new Set();

  for (const r of retainables) {
    if (r instanceof RetentionZone$2) {
      for (const n of nodesRetainedByZone(storeState, r)) {
        nodes.add(n);
      }
    } else {
      nodes.add(r);
    }
  }

  const releasableNodes = findReleasableNodes(store, nodes);

  for (const node of releasableNodes) {
    releaseNode(store, treeState, node);
  }
}

function findReleasableNodes(store, searchFromNodes) {
  const storeState = store.getState();
  const treeState = storeState.currentTree;
  const graph = store.getGraph(treeState.version);
  const releasableNodes = new Set(); // mutated to collect answer

  const nonReleasableNodes = new Set();
  findReleasableNodesInner(searchFromNodes);
  return releasableNodes;

  function findReleasableNodesInner(searchFromNodes) {
    const releasableNodesFoundThisIteration = new Set();
    const downstreams = getDownstreamNodesInTopologicalOrder(store, treeState, searchFromNodes, releasableNodes, // don't descend into these
    nonReleasableNodes // don't descend into these
    ); // Find which of the downstream nodes are releasable and which are not:

    for (const node of downstreams) {
      var _storeState$retention;

      // Not releasable if configured to be retained forever:
      if (getNode$2(node).retainedBy === 'recoilRoot') {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if retained directly by a component:


      if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if retained by a zone:


      if (zonesThatCouldRetainNode(node).some(z => storeState.retention.referenceCounts.get(z))) {
        nonReleasableNodes.add(node);
        continue;
      } // Not releasable if it has a non-releasable child (which will already be in
      // nonReleasableNodes because we are going in topological order):


      const nodeChildren = graph.nodeToNodeSubscriptions.get(node);

      if (nodeChildren && Recoil_someSet(nodeChildren, child => nonReleasableNodes.has(child))) {
        nonReleasableNodes.add(node);
        continue;
      }

      releasableNodes.add(node);
      releasableNodesFoundThisIteration.add(node);
    } // If we found any releasable nodes, we need to walk UP from those nodes to
    // find whether their parents can now be released as well:


    const parents = new Set();

    for (const node of releasableNodesFoundThisIteration) {
      for (const parent of (_graph$nodeDeps$get = graph.nodeDeps.get(node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1) {
        var _graph$nodeDeps$get;

        if (!releasableNodes.has(parent)) {
          parents.add(parent);
        }
      }
    }

    if (parents.size) {
      findReleasableNodesInner(parents);
    }
  }
} // Children before parents


function getDownstreamNodesInTopologicalOrder(store, treeState, nodes, // Mutable set is destroyed in place
doNotDescendInto1, doNotDescendInto2) {
  const graph = store.getGraph(treeState.version);
  const answer = [];
  const visited = new Set();

  while (nodes.size > 0) {
    visit(Recoil_nullthrows(nodes.values().next().value));
  }

  return answer;

  function visit(node) {
    if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
      nodes.delete(node);
      return;
    }

    if (visited.has(node)) {
      return;
    }

    const children = graph.nodeToNodeSubscriptions.get(node);

    if (children) {
      for (const child of children) {
        visit(child);
      }
    }

    visited.add(node);
    nodes.delete(node);
    answer.push(node);
  }
}

function releaseNode(store, treeState, node) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  } // Atom effects, in-closure caches, etc.:


  cleanUpNode$1(store, node); // Delete from store state:

  const storeState = store.getState();
  storeState.knownAtoms.delete(node);
  storeState.knownSelectors.delete(node);
  storeState.nodeTransactionSubscriptions.delete(node);
  storeState.retention.referenceCounts.delete(node);
  const zones = zonesThatCouldRetainNode(node);

  for (const zone of zones) {
    var _storeState$retention2;

    (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
  } // Note that we DO NOT delete from nodeToComponentSubscriptions because this
  // already happens when the last component that was retaining the node unmounts,
  // and this could happen either before or after that.
  // Delete from TreeState and dep graph:


  treeState.atomValues.delete(node);
  treeState.dirtyAtoms.delete(node);
  treeState.nonvalidatedAtoms.delete(node);
  const graph = storeState.graphsByVersion.get(treeState.version);

  if (graph) {
    const deps = graph.nodeDeps.get(node);

    if (deps !== undefined) {
      graph.nodeDeps.delete(node);

      for (const dep of deps) {
        var _graph$nodeToNodeSubs;

        (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
      }
    } // No need to delete sub's deps as there should be no subs at this point.
    // But an invariant would require deleting nodes in topological order.


    graph.nodeToNodeSubscriptions.delete(node);
  } // Node config (for family members only as their configs can be recreated, and
  // only if they are not retained within any other Stores):


  deleteNodeConfigIfPossible$1(node);
}

function nodesRetainedByZone(storeState, zone) {
  var _storeState$retention3;

  return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
}

function zonesThatCouldRetainNode(node) {
  const retainedBy = getNode$2(node).retainedBy;

  if (retainedBy === undefined || retainedBy === 'components' || retainedBy === 'recoilRoot') {
    return [];
  } else if (retainedBy instanceof RetentionZone$2) {
    return [retainedBy];
  } else {
    return retainedBy; // it's an array of zones
  }
}

function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
  const state = store.getState();

  if (state.nextTree) {
    state.retention.retainablesToCheckForRelease.add(retainable);
  } else {
    releaseRetainablesNowOnCurrentTree(store, new Set([retainable]));
  }
}

function updateRetainCount(store, retainable, delta) {
  var _map$get;

  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const map = store.getState().retention.referenceCounts;
  const newCount = ((_map$get = map.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;

  if (newCount === 0) {
    map.delete(retainable);
    scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
  } else {
    map.set(retainable, newCount);
  }
}

function releaseScheduledRetainablesNow(store) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  }

  const state = store.getState();
  releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
  state.retention.retainablesToCheckForRelease.clear();
}

function retainedByOptionWithDefault(r) {
  // The default will change from 'recoilRoot' to 'components' in the future.
  return r === undefined ? 'recoilRoot' : r;
}

var Recoil_Retention = {
  updateRetainCount,
  releaseScheduledRetainablesNow,
  retainedByOptionWithDefault
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Combines multiple Iterables into a single Iterable.
 * Traverses the input Iterables in the order provided and maintains the order
 * of their elements.
 *
 * Example:
 * ```
 * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
 * r == ['a', 'b', 'c', 'd', 'e', 'f'];
 * ```
 */

function* concatIterables(iters) {
  for (const iter of iters) {
    for (const val of iter) {
      yield val;
    }
  }
}

var Recoil_concatIterables = concatIterables;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const isSSR = typeof window === 'undefined';
const isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

var Recoil_Environment = {
  isSSR,
  isReactNative
};

const {
  isSSR: isSSR$1
} = Recoil_Environment;









const {
  batchUpdates: batchUpdates$1
} = Recoil_Batching;

const {
  initializeNodeIfNewToStore: initializeNodeIfNewToStore$1,
  peekNodeInfo: peekNodeInfo$1
} = Recoil_FunctionalCore;

const {
  graph: graph$2
} = Recoil_Graph;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$1,
  recoilValues: recoilValues$1,
  recoilValuesForKeys: recoilValuesForKeys$2
} = Recoil_Node;

const {
  AbstractRecoilValue: AbstractRecoilValue$2,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$1,
  setRecoilValue: setRecoilValue$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$1
} = Recoil_RecoilValueInterface;

const {
  getNextTreeStateVersion: getNextTreeStateVersion$1,
  makeEmptyStoreState: makeEmptyStoreState$1
} = Recoil_State; // Opaque at this surface because it's part of the public API from here.


// A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.
class Snapshot {
  constructor(storeState) {
    _defineProperty(this, "_store", void 0);

    _defineProperty(this, "_refCount", 0);

    _defineProperty(this, "getLoadable", recoilValue => {
      this.checkRefCount_INTERNAL();
      return getRecoilValueAsLoadable$1(this._store, recoilValue);
    });

    _defineProperty(this, "getPromise", recoilValue => {
      this.checkRefCount_INTERNAL();
      return this.getLoadable(recoilValue).toPromise();
    });

    _defineProperty(this, "getNodes_UNSTABLE", opt => {
      this.checkRefCount_INTERNAL(); // TODO Deal with modified selectors

      if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
        if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
          return [];
        }

        const state = this._store.getState().currentTree;

        return recoilValuesForKeys$2(state.dirtyAtoms);
      }

      const knownAtoms = this._store.getState().knownAtoms;

      const knownSelectors = this._store.getState().knownSelectors;

      return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([this._store.getState().knownAtoms, this._store.getState().knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), ({
        key
      }) => !knownAtoms.has(key) && !knownSelectors.has(key));
    });

    _defineProperty(this, "getInfo_UNSTABLE", ({
      key
    }) => {
      this.checkRefCount_INTERNAL();
      return peekNodeInfo$1(this._store, this._store.getState().currentTree, key);
    });

    _defineProperty(this, "map", mapper => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this);
      mapper(mutableSnapshot); // if removing batchUpdates from `set` add it here

      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    _defineProperty(this, "asyncMap", async mapper => {
      this.checkRefCount_INTERNAL();
      const mutableSnapshot = new MutableSnapshot(this);
      await mapper(mutableSnapshot);
      return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
    });

    this._store = {
      getState: () => storeState,
      replaceState: replacer => {
        storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
      },
      getGraph: version => {
        const graphs = storeState.graphsByVersion;

        if (graphs.has(version)) {
          return Recoil_nullthrows(graphs.get(version));
        }

        const newGraph = graph$2();
        graphs.set(version, newGraph);
        return newGraph;
      },
      subscribeToTransactions: () => ({
        release: () => {}
      }),
      addTransactionMetadata: () => {
        throw new Error('Cannot subscribe to Snapshots');
      }
    }; // Initialize any nodes that are live in the parent store (primarily so that this
    // snapshot gets counted towards the node's live stores count).

    for (const nodeKey of this._store.getState().nodeCleanupFunctions.keys()) {
      initializeNodeIfNewToStore$1(this._store, storeState.currentTree, nodeKey, 'get');
    }

    this.retain();
    this.autorelease();
  }

  retain() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return () => undefined;
    }

    this._refCount++;
    let released = false;
    return () => {
      if (!released) {
        released = true;
        this.release();
      }
    };
  }

  autorelease() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    if (!isSSR$1) {
      window.setTimeout(() => this.release(), 0);
    }
  }

  release() {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    this._refCount--;

    if (this._refCount === 0) ;
  }

  checkRefCount_INTERNAL() {
    if (Recoil_gkx_1('recoil_memory_managament_2020') && this._refCount <= 0) {
      if (true) {
        Recoil_recoverableViolation('Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, call its retain() method (and then call release() when you are done with it). This is currently a DEV-only warning but will become a real error soon. Please reach out to Dave McCabe for help fixing this. To temporarily suppress this warning add gk_disable=recoil_memory_managament_2020 to the URL.');
      } // What we will ship later:
      // throw new Error(
      // 'Recoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, call its retain() method (and then call release() when you are done with it).',
      // );

    }
  }

  getStore_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store;
  }

  getID() {
    this.checkRefCount_INTERNAL();
    return this.getID_INTERNAL();
  }

  getID_INTERNAL() {
    this.checkRefCount_INTERNAL();
    return this._store.getState().currentTree.stateID;
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

function cloneStoreState(store, treeState, bumpVersion = false) {
  const storeState = store.getState();
  const version = bumpVersion ? getNextTreeStateVersion$1() : treeState.version;
  return {
    currentTree: bumpVersion ? {
      // TODO snapshots shouldn't really have versions because a new version number
      // is always assigned when the snapshot is gone to.
      version,
      stateID: version,
      transactionMetadata: { ...treeState.transactionMetadata
      },
      dirtyAtoms: new Set(treeState.dirtyAtoms),
      atomValues: treeState.atomValues.clone(),
      nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
    } : treeState,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(storeState.knownAtoms),
    // FIXME here's a copy
    knownSelectors: new Set(storeState.knownSelectors),
    // FIXME here's a copy
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(version, store.getGraph(treeState.version)),
    versionsUsedByComponent: new Map(),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set()
    },
    nodeCleanupFunctions: new Map()
  };
} // Factory to build a fresh snapshot


function freshSnapshot(initializeState) {
  const snapshot = new Snapshot(makeEmptyStoreState$1());
  return initializeState != null ? snapshot.map(initializeState) : snapshot;
} // Factory to clone a snapahot state


function cloneSnapshot(store, version = 'current') {
  const storeState = store.getState();
  const treeState = version === 'current' ? storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
  return new Snapshot(cloneStoreState(store, treeState));
}

class MutableSnapshot extends Snapshot {
  constructor(snapshot) {
    super(cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true));

    _defineProperty(this, "set", (recoilState, newValueOrUpdater) => {
      this.checkRefCount_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
      // read the written value after calling `set`. I would like to remove this
      // behavior and only batch in `Snapshot.map`, but this would be a breaking
      // change potentially.

      batchUpdates$1(() => {
        setRecoilValue$1(this.getStore_INTERNAL(), recoilState, newValueOrUpdater);
      });
    });

    _defineProperty(this, "reset", recoilState => {
      this.checkRefCount_INTERNAL(); // See note at `set` about batched updates.

      batchUpdates$1(() => setRecoilValue$1(this.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1));
    });

    _defineProperty(this, "setUnvalidatedAtomValues_DEPRECATED", values => {
      this.checkRefCount_INTERNAL();
      const store = this.getStore_INTERNAL();
      batchUpdates$1(() => {
        for (const [k, v] of values.entries()) {
          setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k), v);
        }
      });
    });
  } // We want to allow the methods to be destructured and used as accessors
  // eslint-disable-next-line fb-www/extra-arrow-initializer


}

var Recoil_Snapshot = {
  Snapshot,
  MutableSnapshot,
  freshSnapshot,
  cloneSnapshot
};

var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;

var Recoil_Snapshot$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Snapshot: Recoil_Snapshot_1,
  MutableSnapshot: Recoil_Snapshot_2,
  freshSnapshot: Recoil_Snapshot_3,
  cloneSnapshot: Recoil_Snapshot_4
});

// @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');


const {
  getNextTreeStateVersion: getNextTreeStateVersion$2,
  makeEmptyStoreState: makeEmptyStoreState$2
} = Recoil_State;





 // @fb-only: const recoverableViolation = require('../util/Recoil_recoverableViolation');




const {
  cleanUpNode: cleanUpNode$2,
  getDownstreamNodes: getDownstreamNodes$2,
  setNodeValue: setNodeValue$2,
  setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED$1
} = Recoil_FunctionalCore;

const {
  graph: graph$3
} = Recoil_Graph;

const {
  cloneGraph: cloneGraph$1
} = Recoil_Graph;

const {
  applyAtomValueWrites: applyAtomValueWrites$1
} = Recoil_RecoilValueInterface;

const {
  releaseScheduledRetainablesNow: releaseScheduledRetainablesNow$1
} = Recoil_Retention;

const {
  freshSnapshot: freshSnapshot$1
} = Recoil_Snapshot$1;



const {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} = (react__WEBPACK_IMPORTED_MODULE_1___default());

function notInAContext() {
  throw new Error('This component must be used inside a <RecoilRoot> component.');
}

const defaultStore = Object.freeze({
  getState: notInAContext,
  replaceState: notInAContext,
  getGraph: notInAContext,
  subscribeToTransactions: notInAContext,
  addTransactionMetadata: notInAContext
});
let stateReplacerIsBeingExecuted = false;

function startNextTreeIfNeeded(storeState) {
  if (stateReplacerIsBeingExecuted) {
    throw new Error('An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.');
  }

  if (storeState.nextTree === null) {
    const version = storeState.currentTree.version;
    const nextVersion = getNextTreeStateVersion$2();
    storeState.nextTree = { ...storeState.currentTree,
      version: nextVersion,
      stateID: nextVersion,
      dirtyAtoms: new Set(),
      transactionMetadata: {}
    };
    storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
  }
}

const AppContext = react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
  current: defaultStore
});

const useStoreRef = () => useContext(AppContext);

const MutableSourceContext = react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null); // TODO T2710559282599660

function useRecoilMutableSource() {
  const mutableSource = useContext(MutableSourceContext);

  if (mutableSource == null) {
    Recoil_expectationViolation('Attempted to use a Recoil hook outside of a <RecoilRoot>. ' + '<RecoilRoot> must be an ancestor of any component that uses ' + 'Recoil hooks.');
  }

  return mutableSource;
}

function sendEndOfBatchNotifications(store) {
  const storeState = store.getState();
  const treeState = storeState.currentTree; // Inform transaction subscribers of the transaction:

  const dirtyAtoms = treeState.dirtyAtoms;

  if (dirtyAtoms.size) {
    // Execute Node-specific subscribers before global subscribers
    for (const [key, subscriptions] of storeState.nodeTransactionSubscriptions) {
      if (dirtyAtoms.has(key)) {
        for (const [_, subscription] of subscriptions) {
          subscription(store);
        }
      }
    }

    for (const [_, subscription] of storeState.transactionSubscriptions) {
      subscription(store);
    } // Components that are subscribed to the dirty atom:


    const dependentNodes = getDownstreamNodes$2(store, treeState, dirtyAtoms);

    for (const key of dependentNodes) {
      const comps = storeState.nodeToComponentSubscriptions.get(key);

      if (comps) {
        for (const [_subID, [_debugName, callback]] of comps) {
          callback(treeState);
        }
      }
    } // Wake all suspended components so the right one(s) can try to re-render.
    // We need to wake up components not just when some asynchronous selector
    // resolved, but also when changing synchronous values because this may cause
    // a selector to change from asynchronous to synchronous, in which case there
    // would be no follow-up asynchronous resolution to wake us up.
    // TODO OPTIMIZATION Only wake up related downstream components


    storeState.suspendedComponentResolvers.forEach(cb => cb());
  } // Special behavior ONLY invoked by useInterface.
  // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.


  storeState.queuedComponentCallbacks_DEPRECATED.forEach(cb => cb(treeState));
  storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */


function Batcher({
  setNotifyBatcherOfChange
}) {
  const storeRef = useStoreRef();
  const [_, setState] = useState([]);
  setNotifyBatcherOfChange(() => setState({}));
  useEffect(() => {
    // enqueueExecution runs this function immediately; it is only used to
    // manipulate the order of useEffects during tests, since React seems to
    // call useEffect in an unpredictable order sometimes.
    Recoil_Queue.enqueueExecution('Batcher', () => {
      const storeState = storeRef.current.getState();
      const {
        nextTree
      } = storeState; // Ignore commits that are not because of Recoil transactions -- namely,
      // because something above RecoilRoot re-rendered:

      if (nextTree === null) {
        return;
      } // nextTree is now committed -- note that copying and reset occurs when
      // a transaction begins, in startNextTreeIfNeeded:


      storeState.previousTree = storeState.currentTree;
      storeState.currentTree = nextTree;
      storeState.nextTree = null;
      sendEndOfBatchNotifications(storeRef.current);
      const discardedVersion = Recoil_nullthrows(storeState.previousTree).version;
      storeState.graphsByVersion.delete(discardedVersion);
      storeState.previousTree = null;

      if (Recoil_gkx_1('recoil_memory_managament_2020')) {
        releaseScheduledRetainablesNow$1(storeRef.current);
      }
    });
  }); // If an asynchronous selector resolves after the Batcher is unmounted,
  // notifyBatcherOfChange will still be called. An error gets thrown whenever
  // setState is called after a component is already unmounted, so this sets
  // notifyBatcherOfChange to be a no-op.

  useEffect(() => {
    return () => {
      setNotifyBatcherOfChange(() => {});
    };
  }, [setNotifyBatcherOfChange]);
  return null;
}

if (true) {
  if (typeof window !== 'undefined' && !window.$recoilDebugStates) {
    window.$recoilDebugStates = [];
  }
} // When removing this deprecated function, remove stateBySettingRecoilValue
// which will no longer be needed.


function initialStoreState_DEPRECATED(store, initializeState) {
  const initial = makeEmptyStoreState$2();
  initializeState({
    // $FlowFixMe[escaped-generic]
    set: (atom, value) => {
      const state = initial.currentTree;
      const writes = setNodeValue$2(store, state, atom.key, value);
      const writtenNodes = new Set(writes.keys());
      const nonvalidatedAtoms = state.nonvalidatedAtoms.clone();

      for (const n of writtenNodes) {
        nonvalidatedAtoms.delete(n);
      }

      initial.currentTree = { ...state,
        dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
        atomValues: applyAtomValueWrites$1(state.atomValues, writes),
        // NB: PLEASE un-export applyAtomValueWrites when deleting this code
        nonvalidatedAtoms
      };
    },
    setUnvalidatedAtomValues: atomValues => {
      // FIXME replace this with a mutative loop
      atomValues.forEach((v, k) => {
        initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k, v);
      });
    }
  });
  return initial;
}

function initialStoreState(initializeState) {
  const snapshot = freshSnapshot$1().map(initializeState);
  return snapshot.getStore_INTERNAL().getState();
}

let nextID = 0;

function RecoilRoot({
  initializeState_DEPRECATED,
  initializeState,
  store_INTERNAL: storeProp,
  // For use with React "context bridging"
  children
}) {
  var _createMutableSource;

  // prettier-ignore
  // @fb-only: useEffect(() => {
  // @fb-only: if (gkx('recoil_usage_logging')) {
  // @fb-only: try {
  // @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
  // @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
  // @fb-only: path: URI.getRequestURI().getPath(),
  // @fb-only: }));
  // @fb-only: } catch {
  // @fb-only: recoverableViolation(
  // @fb-only: 'Error when logging Recoil Usage event',
  // @fb-only: 'recoil',
  // @fb-only: );
  // @fb-only: }
  // @fb-only: }
  // @fb-only: }, []);
  let storeState; // eslint-disable-line prefer-const

  const getGraph = version => {
    const graphs = storeState.current.graphsByVersion;

    if (graphs.has(version)) {
      return Recoil_nullthrows(graphs.get(version));
    }

    const newGraph = graph$3();
    graphs.set(version, newGraph);
    return newGraph;
  };

  const subscribeToTransactions = (callback, key) => {
    if (key == null) {
      // Global transaction subscriptions
      const {
        transactionSubscriptions
      } = storeRef.current.getState();
      const id = nextID++;
      transactionSubscriptions.set(id, callback);
      return {
        release: () => {
          transactionSubscriptions.delete(id);
        }
      };
    } else {
      // Node-specific transaction subscriptions:
      const {
        nodeTransactionSubscriptions
      } = storeRef.current.getState();

      if (!nodeTransactionSubscriptions.has(key)) {
        nodeTransactionSubscriptions.set(key, new Map());
      }

      const id = nextID++;
      Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(id, callback);
      return {
        release: () => {
          const subs = nodeTransactionSubscriptions.get(key);

          if (subs) {
            subs.delete(id);

            if (subs.size === 0) {
              nodeTransactionSubscriptions.delete(key);
            }
          }
        }
      };
    }
  };

  const addTransactionMetadata = metadata => {
    startNextTreeIfNeeded(storeRef.current.getState());

    for (const k of Object.keys(metadata)) {
      Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
    }
  };

  const replaceState = replacer => {
    const storeState = storeRef.current.getState();
    startNextTreeIfNeeded(storeState); // Use replacer to get the next state:

    const nextTree = Recoil_nullthrows(storeState.nextTree);
    let replaced;

    try {
      stateReplacerIsBeingExecuted = true;
      replaced = replacer(nextTree);
    } finally {
      stateReplacerIsBeingExecuted = false;
    }

    if (replaced === nextTree) {
      return;
    }

    if (true) {
      if (typeof window !== 'undefined') {
        window.$recoilDebugStates.push(replaced); // TODO this shouldn't happen here because it's not batched
      }
    } // Save changes to nextTree and schedule a React update:


    storeState.nextTree = replaced;
    Recoil_nullthrows(notifyBatcherOfChange.current)();
  };

  const notifyBatcherOfChange = useRef(null);
  const setNotifyBatcherOfChange = useCallback(x => {
    notifyBatcherOfChange.current = x;
  }, [notifyBatcherOfChange]); // FIXME T2710559282599660

  const createMutableSource = (_createMutableSource = (react__WEBPACK_IMPORTED_MODULE_1___default().createMutableSource)) !== null && _createMutableSource !== void 0 ? _createMutableSource : // flowlint-line unclear-type:off
  (react__WEBPACK_IMPORTED_MODULE_1___default().unstable_createMutableSource); // flowlint-line unclear-type:off

  const store = storeProp !== null && storeProp !== void 0 ? storeProp : {
    getState: () => storeState.current,
    replaceState,
    getGraph,
    subscribeToTransactions,
    addTransactionMetadata
  };
  const storeRef = useRef(store);
  storeState = useRef(initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
  const mutableSource = useMemo(() => createMutableSource ? createMutableSource(storeState, () => storeState.current.currentTree.version) : null, [createMutableSource, storeState]); // Cleanup when the <RecoilRoot> is unmounted

  useEffect(() => () => {
    for (const atomKey of storeRef.current.getState().knownAtoms) {
      cleanUpNode$2(storeRef.current, atomKey);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AppContext.Provider, {
    value: storeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MutableSourceContext.Provider, {
    value: mutableSource
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Batcher, {
    setNotifyBatcherOfChange: setNotifyBatcherOfChange
  }), children));
}

var Recoil_RecoilRoot_react = {
  useStoreRef,
  useRecoilMutableSource,
  RecoilRoot,
  sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */

function filterMap(map, callback) {
  const result = new Map();

  for (const [key, value] of map) {
    if (callback(value, key)) {
      result.set(key, value);
    }
  }

  return result;
}

var Recoil_filterMap = filterMap;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
/**
 * Returns a set containing all of the values from the original set where
 * the given callback returned true.
 */

function filterSet(set, callback) {
  const result = new Set();

  for (const value of set) {
    if (callback(value)) {
      result.add(value);
    }
  }

  return result;
}

var Recoil_filterSet = filterSet;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

var invariant_1 = invariant;

// @oss-only


var Recoil_invariant = invariant_1;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function mergeMaps(...maps) {
  const result = new Map();

  for (let i = 0; i < maps.length; i++) {
    const iterator = maps[i].keys();
    let nextKey;

    while (!(nextKey = iterator.next()).done) {
      // $FlowFixMe[incompatible-call] - map/iterator knows nothing about flow types
      result.set(nextKey.value, maps[i].get(nextKey.value));
    }
  }
  /* $FlowFixMe[incompatible-return] (>=0.66.0 site=www,mobile) This comment
   * suppresses an error found when Flow v0.66 was deployed. To see the error
   * delete this comment and run Flow. */


  return result;
}

var Recoil_mergeMaps = mergeMaps;

var _useMutableSource;

 // FIXME T2710559282599660


const useMutableSource = // flowlint-line unclear-type:off
(_useMutableSource = (react__WEBPACK_IMPORTED_MODULE_1___default().useMutableSource)) !== null && _useMutableSource !== void 0 ? _useMutableSource : (react__WEBPACK_IMPORTED_MODULE_1___default().unstable_useMutableSource); // flowlint-line unclear-type:off

function mutableSourceExists() {
  return useMutableSource && !(typeof window !== 'undefined' && window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE);
}

var Recoil_mutableSource = {
  mutableSourceExists,
  useMutableSource
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function shallowArrayEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

var Recoil_shallowArrayEqual = shallowArrayEqual;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * MIT License
 *
 * Copyright (c) 2014-2019 Georg Tavonius
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

const UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function stackTraceParser(stackString) {
  const lines = stackString.split('\n');
  return lines.reduce((stack, line) => {
    const parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

    if (parseResult) {
      stack.push(parseResult);
    }

    return stack;
  }, []);
}

const chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
  const parts = chromeRe.exec(line);

  if (!parts) {
    return null;
  }

  const isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

  const isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

  const submatch = chromeEvalRe.exec(parts[2]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url

    parts[3] = submatch[2]; // line

    parts[4] = submatch[3]; // column
  }

  return {
    file: !isNative ? parts[2] : null,
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: isNative ? [parts[2]] : [],
    lineNumber: parts[3] ? +parts[3] : null,
    column: parts[4] ? +parts[4] : null
  };
}

const winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
  const parts = winjsRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

const geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
  const parts = geckoRe.exec(line);

  if (!parts) {
    return null;
  }

  const isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  const submatch = geckoEvalRe.exec(parts[3]);

  if (isEval && submatch != null) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = null; // no column when eval
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: parts[2] ? parts[2].split(',') : [],
    lineNumber: parts[4] ? +parts[4] : null,
    column: parts[5] ? +parts[5] : null
  };
}

const javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
  const parts = javaScriptCoreRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[3],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[4],
    column: parts[5] ? +parts[5] : null
  };
}

const nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
  const parts = nodeRe.exec(line);

  if (!parts) {
    return null;
  }

  return {
    file: parts[2],
    methodName: parts[1] || UNKNOWN_FUNCTION,
    arguments: [],
    lineNumber: +parts[3],
    column: parts[4] ? +parts[4] : null
  };
}

var Recoil_stackTraceParser = stackTraceParser;

const {
  useRef: useRef$1
} = (react__WEBPACK_IMPORTED_MODULE_1___default());

function useComponentName() {
  const nameRef = useRef$1();

  if (true) {
    if (Recoil_gkx_1('recoil_infer_component_names')) {
      var _nameRef$current;

      if (nameRef.current === undefined) {
        // There is no blessed way to determine the calling React component from
        // within a hook. This hack uses the fact that hooks must start with 'use'
        // and that hooks are either called by React Components or other hooks. It
        // follows therefore, that to find the calling component, you simply need
        // to look down the stack and find the first function which doesn't start
        // with 'use'. We are only enabling this in dev for now, since once the
        // codebase is minified, the naming assumptions no longer hold true.
        const frames = Recoil_stackTraceParser(new Error().stack);

        for (const {
          methodName
        } of frames) {
          // I observed cases where the frame was of the form 'Object.useXXX'
          // hence why I'm searching for hooks following a word boundary
          if (!methodName.match(/\buse[^\b]+$/)) {
            return nameRef.current = methodName;
          }
        }

        nameRef.current = null;
      }

      return (_nameRef$current = nameRef.current) !== null && _nameRef$current !== void 0 ? _nameRef$current : '<unable to determine component name>';
    }
  } // @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";


  return '<component name not available>'; // @oss-only
}

var Recoil_useComponentName = useComponentName;

const {
  batchUpdates: batchUpdates$2
} = Recoil_Batching;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$2,
  getNode: getNode$3,
  nodes: nodes$1
} = Recoil_Node;

const {
  useRecoilMutableSource: useRecoilMutableSource$1,
  useStoreRef: useStoreRef$1
} = Recoil_RecoilRoot_react;

const {
  isRecoilValue: isRecoilValue$2
} = Recoil_RecoilValue$1;

const {
  AbstractRecoilValue: AbstractRecoilValue$3,
  getRecoilValueAsLoadable: getRecoilValueAsLoadable$2,
  setRecoilValue: setRecoilValue$2,
  setRecoilValueLoadable: setRecoilValueLoadable$1,
  setUnvalidatedRecoilValue: setUnvalidatedRecoilValue$2,
  subscribeToRecoilValue: subscribeToRecoilValue$1
} = Recoil_RecoilValueInterface;

const {
  updateRetainCount: updateRetainCount$1
} = Recoil_Retention;

const {
  RetentionZone: RetentionZone$3
} = Recoil_RetentionZone;

const {
  Snapshot: Snapshot$1,
  cloneSnapshot: cloneSnapshot$1
} = Recoil_Snapshot$1;

const {
  setByAddingToSet: setByAddingToSet$2
} = Recoil_CopyOnWrite;



const {
  isSSR: isSSR$2
} = Recoil_Environment;















const {
  mutableSourceExists: mutableSourceExists$1,
  useMutableSource: useMutableSource$1
} = Recoil_mutableSource;









const {
  useCallback: useCallback$1,
  useEffect: useEffect$1,
  useMemo: useMemo$1,
  useRef: useRef$2,
  useState: useState$1
} = (react__WEBPACK_IMPORTED_MODULE_1___default()); // Components that aren't mounted after suspending for this long will be assumed
// to be discarded and their resources released.


const SUSPENSE_TIMEOUT_MS = 120000;

function handleLoadable(loadable, atom, storeRef) {
  // We can't just throw the promise we are waiting on to Suspense.  If the
  // upstream dependencies change it may produce a state in which the component
  // can render, but it would still be suspended on a Promise that may never resolve.
  if (loadable.state === 'hasValue') {
    return loadable.contents;
  } else if (loadable.state === 'loading') {
    const promise = new Promise(resolve => {
      storeRef.current.getState().suspendedComponentResolvers.add(resolve);
    });
    throw promise;
  } else if (loadable.state === 'hasError') {
    throw loadable.contents;
  } else {
    throw new Error(`Invalid value of loadable atom "${atom.key}"`);
  }
}

function validateRecoilValue(recoilValue, hookName) {
  if (!isRecoilValue$2(recoilValue)) {
    throw new Error(`Invalid argument to ${hookName}: expected an atom or selector but got ${String(recoilValue)}`);
  }
}

/**
 * Various things are broken with useRecoilInterface, particularly concurrent mode
 * and memory management. They will not be fixed.
 * */
function useRecoilInterface_DEPRECATED() {
  const storeRef = useStoreRef$1();
  const [_, forceUpdate] = useState$1([]);
  const recoilValuesUsed = useRef$2(new Set());
  recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

  const previousSubscriptions = useRef$2(new Set());
  const subscriptions = useRef$2(new Map());
  const unsubscribeFrom = useCallback$1(key => {
    const sub = subscriptions.current.get(key);

    if (sub) {
      sub.release();
      subscriptions.current.delete(key);
    }
  }, [subscriptions]);
  const componentName = Recoil_useComponentName();
  useEffect$1(() => {
    const store = storeRef.current;

    function updateState(_state, key) {
      if (!subscriptions.current.has(key)) {
        return;
      }

      forceUpdate([]);
    }

    Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach(key => {
      if (subscriptions.current.has(key)) {
        Recoil_expectationViolation(`Double subscription to RecoilValue "${key}"`);
        return;
      }

      const sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), state => {
        updateState(state, key);
      }, componentName);
      subscriptions.current.set(key, sub);
      /**
       * Since we're subscribing in an effect we need to update to the latest
       * value of the atom since it may have changed since we rendered. We can
       * go ahead and do that now, unless we're in the middle of a batch --
       * in which case we should do it at the end of the batch, due to the
       * following edge case: Suppose an atom is updated in another useEffect
       * of this same component. Then the following sequence of events occur:
       * 1. Atom is updated and subs fired (but we may not be subscribed
       *    yet depending on order of effects, so we miss this) Updated value
       *    is now in nextTree, but not currentTree.
       * 2. This effect happens. We subscribe and update.
       * 3. From the update we re-render and read currentTree, with old value.
       * 4. Batcher's effect sets currentTree to nextTree.
       * In this sequence we miss the update. To avoid that, add the update
       * to queuedComponentCallback if a batch is in progress.
       */
      // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.

      const state = store.getState();

      if (state.nextTree) {
        store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          updateState(store.getState(), key);
        });
      } else {
        updateState(store.getState(), key);
      }
    });
    Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach(key => {
      unsubscribeFrom(key);
    });
    previousSubscriptions.current = recoilValuesUsed.current;
  });
  useEffect$1(() => {
    const subs = subscriptions.current;
    return () => subs.forEach((_, key) => unsubscribeFrom(key));
  }, [unsubscribeFrom]);
  return useMemo$1(() => {
    function useSetRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useSetRecoilState');
      }

      return newValueOrUpdater => {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
      };
    }

    function useResetRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useResetRecoilState');
      }

      return () => setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }

    function useRecoilValueLoadable(recoilValue) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
      }

      if (!recoilValuesUsed.current.has(recoilValue.key)) {
        recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
      } // TODO Restore optimization to memoize lookup


      return getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
    }

    function useRecoilValue(recoilValue) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValue');
      }

      const loadable = useRecoilValueLoadable(recoilValue); // $FlowFixMe[escaped-generic]

      return handleLoadable(loadable, recoilValue, storeRef);
    }

    function useRecoilState(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilState');
      }

      return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
    }

    function useRecoilStateLoadable(recoilState) {
      if (true) {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilStateLoadable');
      }

      return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
    }

    return {
      getRecoilValue: useRecoilValue,
      getRecoilValueLoadable: useRecoilValueLoadable,
      getRecoilState: useRecoilState,
      getRecoilStateLoadable: useRecoilStateLoadable,
      getSetRecoilState: useSetRecoilState,
      getResetRecoilState: useResetRecoilState
    };
  }, [recoilValuesUsed, storeRef]);
}

const recoilComponentGetRecoilValueCount_FOR_TESTING = {
  current: 0
};

function useRecoilValueLoadable_MUTABLESOURCE(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  const storeRef = useStoreRef$1();
  const getLoadable = useCallback$1(() => {
    const store = storeRef.current;
    const treeState = store.getState().currentTree;
    return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
  }, [storeRef, recoilValue]);
  const getLoadableWithTesting = useCallback$1(() => {
    if (true) {
      recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
    }

    return getLoadable();
  }, [getLoadable]);
  const componentName = Recoil_useComponentName();
  const subscribe = useCallback$1((_storeState, callback) => {
    const store = storeRef.current;
    const subscription = subscribeToRecoilValue$1(store, recoilValue, () => {
      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return callback();
      } // Only re-render if the value has changed.
      // This will evaluate the atom/selector now as well as when the
      // component renders, but that may help with prefetching.


      const newLoadable = getLoadable();

      if (!prevLoadableRef.current.is(newLoadable)) {
        callback();
      }
    }, componentName);
    return subscription.release;
  }, [storeRef, recoilValue, componentName, getLoadable]);
  const source = useRecoilMutableSource$1();
  const loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
  const prevLoadableRef = useRef$2(loadable);
  useEffect$1(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}

function useRecoilValueLoadable_LEGACY(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
  }

  const storeRef = useStoreRef$1();
  const [_, forceUpdate] = useState$1([]);
  const componentName = Recoil_useComponentName();
  useEffect$1(() => {
    const store = storeRef.current;
    const storeState = store.getState();
    const subscription = subscribeToRecoilValue$1(store, recoilValue, _state => {
      var _prevLoadableRef$curr;

      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return forceUpdate([]);
      }

      const newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

      if (!((_prevLoadableRef$curr = prevLoadableRef.current) === null || _prevLoadableRef$curr === void 0 ? void 0 : _prevLoadableRef$curr.is(newLoadable))) {
        forceUpdate(newLoadable);
      }
    }, componentName);
    /**
     * Since we're subscribing in an effect we need to update to the latest
     * value of the atom since it may have changed since we rendered. We can
     * go ahead and do that now, unless we're in the middle of a batch --
     * in which case we should do it at the end of the batch, due to the
     * following edge case: Suppose an atom is updated in another useEffect
     * of this same component. Then the following sequence of events occur:
     * 1. Atom is updated and subs fired (but we may not be subscribed
     *    yet depending on order of effects, so we miss this) Updated value
     *    is now in nextTree, but not currentTree.
     * 2. This effect happens. We subscribe and update.
     * 3. From the update we re-render and read currentTree, with old value.
     * 4. Batcher's effect sets currentTree to nextTree.
     * In this sequence we miss the update. To avoid that, add the update
     * to queuedComponentCallback if a batch is in progress.
     */

    if (storeState.nextTree) {
      store.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        prevLoadableRef.current = null;
        forceUpdate([]);
      });
    } else {
      var _prevLoadableRef$curr2;

      if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
        return forceUpdate([]);
      }

      const newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

      if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) === null || _prevLoadableRef$curr2 === void 0 ? void 0 : _prevLoadableRef$curr2.is(newLoadable))) {
        forceUpdate(newLoadable);
      }
    }

    return subscription.release;
  }, [componentName, recoilValue, storeRef]);
  const loadable = getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
  const prevLoadableRef = useRef$2(loadable);
  useEffect$1(() => {
    prevLoadableRef.current = loadable;
  });
  return loadable;
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/


function useRecoilValueLoadable(recoilValue) {
  if (Recoil_gkx_1('recoil_memory_managament_2020')) {
    // eslint-disable-next-line fb-www/react-hooks
    useRetain(recoilValue);
  }

  if (mutableSourceExists$1()) {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_MUTABLESOURCE(recoilValue);
  } else {
    // eslint-disable-next-line fb-www/react-hooks
    return useRecoilValueLoadable_LEGACY(recoilValue);
  }
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */


function useRecoilValue(recoilValue) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilValue, 'useRecoilValue');
  }

  const storeRef = useStoreRef$1();
  const loadable = useRecoilValueLoadable(recoilValue); // $FlowFixMe[escaped-generic]

  return handleLoadable(loadable, recoilValue, storeRef);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/


function useSetRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useSetRecoilState');
  }

  const storeRef = useStoreRef$1();
  return useCallback$1(newValueOrUpdater => {
    setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
  }, [storeRef, recoilState]);
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/


function useResetRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useResetRecoilState');
  }

  const storeRef = useStoreRef$1();
  return useCallback$1(() => {
    setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
  }, [storeRef, recoilState]);
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/


function useRecoilState(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilState');
  }

  return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/


function useRecoilStateLoadable(recoilState) {
  if (true) {
    // $FlowFixMe[escaped-generic]
    validateRecoilValue(recoilState, 'useRecoilStateLoadable');
  }

  return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}

function useTransactionSubscription(callback) {
  const storeRef = useStoreRef$1();
  useEffect$1(() => {
    const sub = storeRef.current.subscribeToTransactions(callback);
    return sub.release;
  }, [callback, storeRef]);
}

function externallyVisibleAtomValuesInState(state) {
  const atomValues = state.atomValues.toMap();
  const persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, (v, k) => {
    const node = getNode$3(k);
    const persistence = node.persistence_UNSTABLE;
    return persistence != null && persistence.type !== 'none' && v.state === 'hasValue';
  }), v => v.contents); // Merge in nonvalidated atoms; we may not have defs for them but they will
  // all have persistence on or they wouldn't be there in the first place.

  return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
}

/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/
function useTransactionObservation_DEPRECATED(callback) {
  useTransactionSubscription(useCallback$1(store => {
    let previousTree = store.getState().previousTree;
    const currentTree = store.getState().currentTree;

    if (!previousTree) {
      Recoil_recoverableViolation('Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil');
      previousTree = store.getState().currentTree; // attempt to trundle on
    }

    const atomValues = externallyVisibleAtomValuesInState(currentTree);
    const previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
    const atomInfo = Recoil_mapMap(nodes$1, node => {
      var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;

      return {
        persistence_UNSTABLE: {
          type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : 'none',
          backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
        }
      };
    }); // Filter on existance in atomValues so that externally-visible rules
    // are also applied to modified atoms (specifically exclude selectors):

    const modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, k => atomValues.has(k) || previousAtomValues.has(k));
    callback({
      atomValues,
      previousAtomValues,
      atomInfo,
      modifiedAtoms,
      transactionMetadata: { ...currentTree.transactionMetadata
      }
    });
  }, [callback]));
}

function useRecoilTransactionObserver(callback) {
  useTransactionSubscription(useCallback$1(store => {
    const snapshot = cloneSnapshot$1(store, 'current');
    const previousSnapshot = cloneSnapshot$1(store, 'previous');
    callback({
      snapshot,
      previousSnapshot
    });
  }, [callback]));
}

function usePrevious(value) {
  const ref = useRef$2();
  useEffect$1(() => {
    ref.current = value;
  });
  return ref.current;
} // Return a snapshot of the current state and subscribe to all state changes


function useRecoilSnapshot() {
  const storeRef = useStoreRef$1();
  const [snapshot, setSnapshot] = useState$1(() => cloneSnapshot$1(storeRef.current));
  const previousSnapshot = usePrevious(snapshot);
  const timeoutID = useRef$2();
  useEffect$1(() => {
    if (timeoutID.current && !isSSR$2) {
      window.clearTimeout(timeoutID.current);
    }

    return snapshot.retain();
  }, [snapshot]);
  useTransactionSubscription(useCallback$1(store => setSnapshot(cloneSnapshot$1(store)), []));

  if (previousSnapshot !== snapshot && !isSSR$2) {
    if (timeoutID.current) {
      previousSnapshot === null || previousSnapshot === void 0 ? void 0 : previousSnapshot.release();
      window.clearTimeout(timeoutID.current);
    }

    snapshot.retain();
    timeoutID.current = window.setTimeout(() => {
      snapshot.release();
      timeoutID.current = null;
    }, SUSPENSE_TIMEOUT_MS);
  }

  return snapshot;
}

function useGotoRecoilSnapshot() {
  const storeRef = useStoreRef$1();
  return useCallback$1(snapshot => {
    var _storeState$nextTree;

    const storeState = storeRef.current.getState();
    const prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
    const next = snapshot.getStore_INTERNAL().getState().currentTree;
    batchUpdates$2(() => {
      const keysToUpdate = new Set();

      for (const keys of [prev.atomValues.keys(), next.atomValues.keys()]) {
        for (const key of keys) {
          var _prev$atomValues$get, _next$atomValues$get;

          if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$3(key).shouldRestoreFromSnapshots) {
            keysToUpdate.add(key);
          }
        }
      }

      keysToUpdate.forEach(key => {
        setRecoilValueLoadable$1(storeRef.current, new AbstractRecoilValue$3(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$2);
      });
      storeRef.current.replaceState(state => {
        return { ...state,
          stateID: snapshot.getID_INTERNAL()
        };
      });
    });
  }, [storeRef]);
}

function useSetUnvalidatedAtomValues() {
  const storeRef = useStoreRef$1();
  return (values, transactionMetadata = {}) => {
    batchUpdates$2(() => {
      storeRef.current.addTransactionMetadata(transactionMetadata);
      values.forEach((value, key) => setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value));
    });
  };
}

class Sentinel {}

const SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
  const storeRef = useStoreRef$1();
  const gotoSnapshot = useGotoRecoilSnapshot();
  return useCallback$1((...args) => {
    function set(recoilState, newValueOrUpdater) {
      setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
    }

    function reset(recoilState) {
      setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    } // Use currentTree for the snapshot to show the currently committed state


    const snapshot = cloneSnapshot$1(storeRef.current);
    let ret = SENTINEL;
    batchUpdates$2(() => {
      const errMsg = 'useRecoilCallback expects a function that returns a function: ' + 'it accepts a function of the type (RecoilInterface) => T = R ' + 'and returns a callback function T => R, where RecoilInterface is an ' + 'object {snapshot, set, ...} and T and R are the argument and return ' + 'types of the callback you want to create.  Please see the docs ' + 'at recoiljs.org for details.';

      if (typeof fn !== 'function') {
        throw new Error(errMsg);
      } // flowlint-next-line unclear-type:off


      const cb = fn({
        set,
        reset,
        snapshot,
        gotoSnapshot
      });

      if (typeof cb !== 'function') {
        throw new Error(errMsg);
      }

      ret = cb(...args);
    });
    !!(ret instanceof Sentinel) ?  true ? Recoil_invariant(false, 'batchUpdates should return immediately') : 0 : void 0;
    return ret;
  }, deps != null ? [...deps, storeRef] : undefined // eslint-disable-line fb-www/react-hooks-deps
  );
} // I don't see a way to avoid the any type here because we want to accept readable
// and writable values with any type parameter, but normally with writable ones
// RecoilState<SomeT> is not a subtype of RecoilState<mixed>.


// flowlint-line unclear-type:off
function useRetain(toRetain) {
  if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
    return;
  } // eslint-disable-next-line fb-www/react-hooks


  return useRetain_ACTUAL(toRetain);
}

function useRetain_ACTUAL(toRetain) {
  const array = Array.isArray(toRetain) ? toRetain : [toRetain];
  const retainables = array.map(a => a instanceof RetentionZone$3 ? a : a.key);
  const storeRef = useStoreRef$1();
  useEffect$1(() => {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
      return;
    }

    const store = storeRef.current;

    if (timeoutID.current && !isSSR$2) {
      // Already performed a temporary retain on render, simply cancel the release
      // of that temporary retain.
      window.clearTimeout(timeoutID.current);
      timeoutID.current = null;
    } else {
      // Log this since it's not clear that there's any scenario where it should happen.
      Recoil_recoverableViolation('Did not retain recoil value on render, or committed after timeout elapsed. This is fine, but odd.');

      for (const r of retainables) {
        updateRetainCount$1(store, r, 1);
      }
    }

    return () => {
      for (const r of retainables) {
        updateRetainCount$1(store, r, -1);
      }
    }; // eslint-disable-next-line fb-www/react-hooks-deps
  }, [storeRef, ...retainables]); // We want to retain if the component suspends. This is terrible but the Suspense
  // API affords us no better option. If we suspend and never commit after some
  // seconds, then release. The 'actual' retain/release in the effect above
  // cancels this.

  const timeoutID = useRef$2();
  const previousRetainables = usePrevious(retainables);

  if (!isSSR$2 && (previousRetainables === undefined || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
    const store = storeRef.current;

    for (const r of retainables) {
      updateRetainCount$1(store, r, 1);
    }

    if (previousRetainables) {
      for (const r of previousRetainables) {
        updateRetainCount$1(store, r, -1);
      }
    }

    if (timeoutID.current) {
      window.clearTimeout(timeoutID.current);
    }

    timeoutID.current = window.setTimeout(() => {
      timeoutID.current = null;

      for (const r of retainables) {
        updateRetainCount$1(store, r, -1);
      }
    }, SUSPENSE_TIMEOUT_MS);
  }
}

var Recoil_Hooks = {
  recoilComponentGetRecoilValueCount_FOR_TESTING,
  useGotoRecoilSnapshot,
  useRecoilCallback,
  useRecoilInterface: useRecoilInterface_DEPRECATED,
  useRecoilSnapshot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilTransactionObserver,
  useRecoilValue,
  useRecoilValueLoadable,
  useRetain,
  useResetRecoilState,
  useSetRecoilState,
  useSetUnvalidatedAtomValues,
  useTransactionObservation_DEPRECATED,
  useTransactionSubscription_DEPRECATED: useTransactionSubscription
};

const {
  peekNodeInfo: peekNodeInfo$2
} = Recoil_FunctionalCore;

const {
  useStoreRef: useStoreRef$2
} = Recoil_RecoilRoot_react;

function useGetRecoilValueInfo() {
  const storeRef = useStoreRef$2();
  return ({
    key
  }) => peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
}

var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;

const {
  RecoilRoot: RecoilRoot$1,
  useStoreRef: useStoreRef$3
} = Recoil_RecoilRoot_react;



const {
  useMemo: useMemo$2
} = (react__WEBPACK_IMPORTED_MODULE_1___default());

function useRecoilBridgeAcrossReactRoots() {
  const store = useStoreRef$3().current;
  return useMemo$2(() => {
    function RecoilBridge({
      children
    }) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(RecoilRoot$1, {
        store_INTERNAL: store
      }, children);
    }

    return RecoilBridge;
  }, [store]);
}

var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

// Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare
function isPromise(p) {
  return !!p && typeof p.then === 'function';
}

var Recoil_isPromise = isPromise;

// TODO Convert Loadable to a Class to allow for runtime type detection.
// Containing static factories of withValue(), withError(), withPromise(), and all()


class Canceled {}

const CANCELED = new Canceled();
const loadableAccessors = {
  /**
   * if loadable has a value (state === 'hasValue'), return that value.
   * Otherwise, throw the (unwrapped) promise or the error.
   */
  getValue() {
    if (this.state === 'loading') {
      throw this.contents.then(({
        __value
      }) => __value);
    }

    if (this.state !== 'hasValue') {
      throw this.contents;
    }

    return this.contents;
  },

  toPromise() {
    return this.state === 'hasValue' ? Promise.resolve(this.contents) : this.state === 'hasError' ? Promise.reject(this.contents) : this.contents.then(({
      __value
    }) => __value);
  },

  valueMaybe() {
    return this.state === 'hasValue' ? this.contents : undefined;
  },

  valueOrThrow() {
    if (this.state !== 'hasValue') {
      const error = new Error(`Loadable expected value, but in "${this.state}" state`); // V8 keeps closures alive until stack is accessed, this prevents a memory leak
      throw error;
    }

    return this.contents;
  },

  errorMaybe() {
    return this.state === 'hasError' ? this.contents : undefined;
  },

  errorOrThrow() {
    if (this.state !== 'hasError') {
      const error = new Error(`Loadable expected error, but in "${this.state}" state`); // V8 keeps closures alive until stack is accessed, this prevents a memory leak
      throw error;
    }

    return this.contents;
  },

  promiseMaybe() {
    return this.state === 'loading' ? this.contents.then(({
      __value
    }) => __value) : undefined;
  },

  promiseOrThrow() {
    if (this.state !== 'loading') {
      const error = new Error(`Loadable expected promise, but in "${this.state}" state`); // V8 keeps closures alive until stack is accessed, this prevents a memory leak
      throw error;
    }

    return this.contents.then(({
      __value
    }) => __value);
  },

  is(other) {
    return other.state === this.state && other.contents === this.contents;
  },

  // TODO Unit tests
  // TODO Convert Loadable to a Class to better support chaining
  //      by returning a Loadable from a map function
  map(map) {
    if (this.state === 'hasError') {
      return this;
    }

    if (this.state === 'hasValue') {
      try {
        const next = map(this.contents); // TODO if next instanceof Loadable, then return next

        return Recoil_isPromise(next) ? loadableWithPromise(next) : loadableWithValue(next);
      } catch (e) {
        return Recoil_isPromise(e) ? // If we "suspended", then try again.
        // errors and subsequent retries will be handled in 'loading' case
        loadableWithPromise(e.next(() => map(this.contents))) : loadableWithError(e);
      }
    }

    if (this.state === 'loading') {
      return loadableWithPromise(this.contents // TODO if map returns a loadable, then return the value or promise or throw the error
      .then(map).catch(e => {
        if (Recoil_isPromise(e)) {
          // we were "suspended," try again
          return e.then(() => map(this.contents));
        }

        throw e;
      }));
    }

    const error = new Error('Invalid Loadable state'); // V8 keeps closures alive until stack is accessed, this prevents a memory leak
    throw error;
  }

};

function loadableWithValue(value) {
  // Build objects this way since Flow doesn't support disjoint unions for class properties
  return Object.freeze({
    state: 'hasValue',
    contents: value,
    ...loadableAccessors
  });
}

function loadableWithError(error) {
  return Object.freeze({
    state: 'hasError',
    contents: error,
    ...loadableAccessors
  });
}

function loadableWithPromise(promise) {
  return Object.freeze({
    state: 'loading',
    contents: promise,
    ...loadableAccessors
  });
}

function loadableLoading() {
  return loadableWithPromise(new Promise(() => {}));
}

function loadableAll(inputs) {
  return inputs.every(i => i.state === 'hasValue') ? loadableWithValue(inputs.map(i => i.contents)) : inputs.some(i => i.state === 'hasError') ? loadableWithError(Recoil_nullthrows(inputs.find(i => i.state === 'hasError'), 'Invalid loadable passed to loadableAll').contents) : loadableWithPromise(Promise.all(inputs.map(i => i.contents)).then(value => ({
    __value: value
  })));
}

var Recoil_Loadable = {
  loadableWithValue,
  loadableWithError,
  loadableWithPromise,
  loadableLoading,
  loadableAll,
  Canceled,
  CANCELED
};

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function isNode(object) {
  var _ownerDocument, _doc$defaultView;

  if (typeof window === 'undefined') {
    return false;
  }

  const doc = object != null ? (_ownerDocument = object.ownerDocument) !== null && _ownerDocument !== void 0 ? _ownerDocument : object : document;
  const defaultView = (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : window;
  return !!(object != null && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

var Recoil_isNode = isNode;

const {
  isReactNative: isReactNative$1,
  isSSR: isSSR$3
} = Recoil_Environment;





function shouldNotBeFrozen(value) {
  // Primitives and functions:
  if (value === null || typeof value !== 'object') {
    return true;
  } // React elements:


  switch (typeof value.$$typeof) {
    case 'symbol':
      return true;

    case 'number':
      return true;
  } // Immutable structures:


  if (value['@@__IMMUTABLE_ITERABLE__@@'] != null || value['@@__IMMUTABLE_KEYED__@@'] != null || value['@@__IMMUTABLE_INDEXED__@@'] != null || value['@@__IMMUTABLE_ORDERED__@@'] != null || value['@@__IMMUTABLE_RECORD__@@'] != null) {
    return true;
  } // DOM nodes:


  if (Recoil_isNode(value)) {
    return true;
  }

  if (Recoil_isPromise(value)) {
    return true;
  }

  if (value instanceof Error) {
    return true;
  }

  if (ArrayBuffer.isView(value)) {
    return true;
  } // Some environments, just as Jest, don't work with the instanceof check


  if (!isSSR$3 && !isReactNative$1 && ( // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
  value === window || value instanceof Window)) {
    return true;
  }

  return false;
} // Recursively freeze a value to enforce it is read-only.
// This may also have minimal performance improvements for enumerating
// objects (based on browser implementations, of course)


function deepFreezeValue(value) {
  if (typeof value !== 'object' || shouldNotBeFrozen(value)) {
    return;
  }

  Object.freeze(value); // Make all properties read-only

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const prop = value[key]; // Prevent infinite recurssion for circular references.

      if (typeof prop === 'object' && prop != null && !Object.isFrozen(prop)) {
        deepFreezeValue(prop);
      }
    }
  }

  Object.seal(value); // This also makes existing properties non-configurable.
}

var Recoil_deepFreezeValue = deepFreezeValue;

const TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
  // A optimization to avoid the more expensive JSON.stringify() for simple strings
  // This may lose protection for u2028 and u2029, though.
  if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
    return `"${x}"`;
  } // Handle primitive types


  switch (typeof x) {
    case 'undefined':
      return '';
    // JSON.stringify(undefined) returns undefined, but we always want to return a string

    case 'boolean':
      return x ? 'true' : 'false';

    case 'number':
    case 'symbol':
      // case 'bigint': // BigInt is not supported in www
      return String(x);

    case 'string':
      // Add surrounding quotes and escape internal quotes
      return JSON.stringify(x);

    case 'function':
      if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
        throw new Error('Attempt to serialize function in a Recoil cache key');
      }

      return `__FUNCTION(${x.name})__`;
  }

  if (x === null) {
    return 'null';
  } // Fallback case for unknown types


  if (typeof x !== 'object') {
    var _JSON$stringify;

    return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '';
  } // Deal with all promises as equivalent for now.


  if (Recoil_isPromise(x)) {
    return '__PROMISE__';
  } // Arrays handle recursive stringification


  if (Array.isArray(x)) {
    return `[${x.map((v, i) => stringify(v, opt, i.toString()))}]`;
  } // If an object defines a toJSON() method, then use that to override the
  // serialization.  This matches the behavior of JSON.stringify().
  // Pass the key for compatibility.
  // Immutable.js collections define this method to allow us to serialize them.


  if (typeof x.toJSON === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(x.toJSON(key), opt, key);
  } // For built-in Maps, sort the keys in a stable order instead of the
  // default insertion order.  Support non-string keys.


  if (x instanceof Map) {
    const obj = {};

    for (const [k, v] of x) {
      // Stringify will escape any nested quotes
      obj[typeof k === 'string' ? k : stringify(k, opt)] = v;
    }

    return stringify(obj, opt, key);
  } // For built-in Sets, sort the keys in a stable order instead of the
  // default insertion order.


  if (x instanceof Set) {
    return stringify(Array.from(x).sort((a, b) => stringify(a, opt).localeCompare(stringify(b, opt))), opt, key);
  } // Anything else that is iterable serialize as an Array.


  if (Symbol !== undefined && x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
    // flowlint-next-line unclear-type: off
    return stringify(Array.from(x), opt, key);
  } // For all other Objects, sort the keys in a stable order.


  return `{${Object.keys(x).filter(key => x[key] !== undefined).sort() // stringify the key to add quotes and escape any nested slashes or quotes.
  .map(key => `${stringify(key, opt)}:${stringify(x[key], opt, key)}`).join(',')}}`;
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples


function stableStringify(x, opt = {
  allowFunctions: false
}) {
  if (true) {
    if (typeof window !== 'undefined') {
      const startTime = window.performance ? window.performance.now() : 0;
      const str = stringify(x, opt);
      const endTime = window.performance ? window.performance.now() : 0;

      if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
        /* eslint-disable fb-www/no-console */
        console.groupCollapsed(`Recoil: Spent ${endTime - startTime}ms computing a cache key`);
        console.warn(x, str);
        console.groupEnd();
        /* eslint-enable fb-www/no-console */
      }

      return str;
    }
  }

  return stringify(x, opt);
}

var Recoil_stableStringify = stableStringify;

class TreeCache {
  constructor(options) {
    var _options$onHit, _options$onSet, _options$mapNodeValue;

    _defineProperty(this, "_numLeafs", void 0);

    _defineProperty(this, "_root", void 0);

    _defineProperty(this, "_onHit", void 0);

    _defineProperty(this, "_onSet", void 0);

    _defineProperty(this, "_mapNodeValue", void 0);

    this._numLeafs = 0;
    this._root = null;
    this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : () => {};
    this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : () => {};
    this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : val => val;
  }

  size() {
    return this._numLeafs;
  } // TODO: nodeCount(): number


  root() {
    return this._root;
  }

  get(getNodeValue, handlers) {
    var _this$getLeafNode;

    return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
  }

  getLeafNode(getNodeValue, handlers) {
    return findLeaf(this.root(), nodeKey => this._mapNodeValue(getNodeValue(nodeKey)), {
      onNodeVisit: node => {
        handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

        if (node.type === 'leaf') {
          this._onHit(node);
        }
      }
    });
  }

  set(route, value, handlers) {
    let leafNode;
    const newRoot = addLeaf(this.root(), route.map(([nodeKey, nodeValue]) => [nodeKey, this._mapNodeValue(nodeValue)]), null, value, null, {
      onNodeVisit: node => {
        handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

        if (node.type === 'leaf') {
          leafNode = node;
        }
      }
    });

    if (!this.root()) {
      this._root = newRoot;
    }

    this._numLeafs++;

    this._onSet(Recoil_nullthrows(leafNode));
  }

  delete(node) {
    if (!this.root()) {
      return false;
    }

    const root = Recoil_nullthrows(this.root());
    const existsInTree = pruneNodeFromTree(root, node, node.parent);

    if (!existsInTree) {
      return false;
    }

    if (node === root || root.type === 'branch' && !root.branches.size) {
      this._root = null;
      this._numLeafs = 0;
      return true;
    }

    this._numLeafs -= countDownstreamLeaves(node);
    return true;
  }

  clear() {
    this._numLeafs = 0;
    this._root = null;
  }

}

const findLeaf = (root, getNodeValue, handlers) => {
  var _handlers$onNodeVisit;

  if (root == null) {
    return undefined;
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, root);

  if (root.type === 'leaf') {
    return root;
  }

  const nodeValue = getNodeValue(root.nodeKey);
  return findLeaf(root.branches.get(nodeValue), getNodeValue, handlers);
};

const addLeaf = (root, route, parent, value, branchKey, handlers) => {
  var _handlers$onNodeVisit2;

  let node;

  if (root == null) {
    if (route.length === 0) {
      node = {
        type: 'leaf',
        value,
        parent,
        branchKey
      };
    } else {
      const [path, ...rest] = route;
      const [nodeKey, nodeValue] = path;
      node = {
        type: 'branch',
        nodeKey,
        parent,
        branches: new Map(),
        branchKey
      };
      node.branches.set(nodeValue, addLeaf(null, rest, node, value, nodeValue, handlers));
    }
  } else {
    node = root;

    if (route.length) {
      const [path, ...rest] = route;
      const [nodeKey, nodeValue] = path;
      !(root.type === 'branch' && root.nodeKey === nodeKey) ?  true ? Recoil_invariant(false, 'Existing cache must have a branch midway through the route with matching node key') : 0 : void 0;
      root.branches.set(nodeValue, addLeaf(root.branches.get(nodeValue), rest, root, value, nodeValue, handlers));
    }
  }

  handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, node);
  return node;
};

const pruneNodeFromTree = (root, node, parent) => {
  if (!parent) {
    return root === node;
  }

  parent.branches.delete(node.branchKey);
  return pruneUpstreamBranches(root, parent, parent.parent);
};

const pruneUpstreamBranches = (root, branchNode, parent) => {
  if (!parent) {
    return root === branchNode;
  }

  if (branchNode.branches.size === 0) {
    parent.branches.delete(branchNode.branchKey);
  }

  return pruneUpstreamBranches(root, parent, parent.parent);
};

const countDownstreamLeaves = node => node.type === 'leaf' ? 1 : Array.from(node.branches.values()).reduce((sum, currNode) => sum + countDownstreamLeaves(currNode), 0);

var Recoil_TreeCache = {
  TreeCache
};

var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;

var Recoil_TreeCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TreeCache: Recoil_TreeCache_1
});

class LRUCache {
  constructor(options) {
    var _options$mapKey;

    _defineProperty(this, "_maxSize", void 0);

    _defineProperty(this, "_size", void 0);

    _defineProperty(this, "_head", void 0);

    _defineProperty(this, "_tail", void 0);

    _defineProperty(this, "_map", void 0);

    _defineProperty(this, "_keyMapper", void 0);

    this._maxSize = options.maxSize;
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = new Map();
    this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : v => v;
  }

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  size() {
    return this._size;
  }

  maxSize() {
    return this._maxSize;
  }

  has(key) {
    return this._map.has(this._keyMapper(key));
  }

  get(key) {
    const mappedKey = this._keyMapper(key);

    const node = this._map.get(mappedKey);

    if (!node) {
      return undefined;
    }

    this.set(key, node.value);
    return node.value;
  }

  set(key, val) {
    const mappedKey = this._keyMapper(key);

    const existingNode = this._map.get(mappedKey);

    if (existingNode) {
      this.delete(key);
    }

    const head = this.head();
    const node = {
      key,
      right: head,
      left: null,
      value: val
    };

    if (head) {
      head.left = node;
    } else {
      this._tail = node;
    }

    this._map.set(mappedKey, node);

    this._head = node;
    this._size++;

    this._maybeDeleteLRU();
  }

  _maybeDeleteLRU() {
    if (this.size() > this.maxSize()) {
      this.deleteLru();
    }
  }

  deleteLru() {
    const tail = this.tail();

    if (tail) {
      this.delete(tail.key);
    }
  }

  delete(key) {
    const mappedKey = this._keyMapper(key);

    if (!this._size || !this._map.has(mappedKey)) {
      return;
    }

    const node = Recoil_nullthrows(this._map.get(mappedKey));
    const right = node.right;
    const left = node.left;

    if (right) {
      right.left = node.left;
    }

    if (left) {
      left.right = node.right;
    }

    if (node === this.head()) {
      this._head = right;
    }

    if (node === this.tail()) {
      this._tail = left;
    }

    this._map.delete(mappedKey);

    this._size--;
  }

  clear() {
    this._size = 0;
    this._head = null;
    this._tail = null;
    this._map = new Map();
  }

}

var Recoil_LRUCache = {
  LRUCache
};

var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;

var Recoil_LRUCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LRUCache: Recoil_LRUCache_1
});

const {
  LRUCache: LRUCache$1
} = Recoil_LRUCache$1;

const {
  TreeCache: TreeCache$1
} = Recoil_TreeCache$1;

function treeCacheLRU(maxSize, mapNodeValue = v => v) {
  const lruCache = new LRUCache$1({
    maxSize
  });
  const cache = new TreeCache$1({
    mapNodeValue,
    onHit: node => {
      lruCache.set(node, true);
    },
    onSet: node => {
      const lruNode = lruCache.tail();
      lruCache.set(node, true);

      if (lruNode && cache.size() > maxSize) {
        cache.delete(lruNode.key);
      }
    }
  });
  return cache;
}

var Recoil_treeCacheLRU = treeCacheLRU;

const {
  TreeCache: TreeCache$2
} = Recoil_TreeCache$1;



const defaultPolicy = {
  equality: 'reference',
  eviction: 'none',
  maxSize: Infinity
};

function treeCacheFromPolicy({
  equality = defaultPolicy.equality,
  eviction = defaultPolicy.eviction,
  maxSize = defaultPolicy.maxSize
} = defaultPolicy) {
  const valueMapper = getValueMapper(equality);
  const treeCache = getTreeCache(eviction, maxSize, valueMapper);
  return treeCache;
}

function getValueMapper(equality) {
  switch (equality) {
    case 'reference':
      return val => val;

    case 'value':
      return val => Recoil_stableStringify(val);
  }

  throw new Error(`Unrecognized equality policy ${equality}`);
}

function getTreeCache(eviction, maxSize, mapNodeValue) {
  switch (eviction) {
    case 'none':
      return new TreeCache$2({
        mapNodeValue
      });

    case 'lru':
      return Recoil_treeCacheLRU(Recoil_nullthrows(maxSize), mapNodeValue);
  }

  throw new Error(`Unrecognized eviction policy ${eviction}`);
}

var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is a stub for some integration into FB internal stuff
 */
function startPerfBlock(_id) {
  return () => null;
}

var Recoil_PerformanceTimings = {
  startPerfBlock
};

const {
  CANCELED: CANCELED$1,
  Canceled: Canceled$1,
  loadableWithError: loadableWithError$1,
  loadableWithPromise: loadableWithPromise$1,
  loadableWithValue: loadableWithValue$1
} = Recoil_Loadable;



const {
  getNodeLoadable: getNodeLoadable$2,
  peekNodeLoadable: peekNodeLoadable$1,
  setNodeValue: setNodeValue$3
} = Recoil_FunctionalCore;

const {
  saveDependencyMapToStore: saveDependencyMapToStore$1
} = Recoil_Graph;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$3,
  RecoilValueNotReady: RecoilValueNotReady$2,
  getConfigDeletionHandler: getConfigDeletionHandler$1,
  registerNode: registerNode$1
} = Recoil_Node;

const {
  isRecoilValue: isRecoilValue$3
} = Recoil_RecoilValue$1;

const {
  AbstractRecoilValue: AbstractRecoilValue$4
} = Recoil_RecoilValue$1;

const {
  setRecoilValueLoadable: setRecoilValueLoadable$2
} = Recoil_RecoilValueInterface;

const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$1
} = Recoil_Retention;











const {
  startPerfBlock: startPerfBlock$1
} = Recoil_PerformanceTimings;



const dependencyStack = []; // for detecting circular dependencies.

const waitingStores = new Map();
/* eslint-disable no-redeclare */

const getNewExecutionId = (() => {
  let executionId = 0;
  return () => executionId++;
})();

function getInitialExecutionInfo() {
  return {
    depValuesDiscoveredSoFarDuringAsyncWork: null,
    latestLoadable: null,
    latestExecutionId: null,
    stateVersion: null
  };
}

function selector(options) {
  const {
    key,
    get,
    cachePolicy_UNSTABLE: cachePolicy
  } = options;
  const set = options.set != null ? options.set : undefined; // flow

  const cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
    equality: 'reference',
    eviction: 'none'
  });
  const retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
  const executionInfoMap = new Map();
  let liveStoresCount = 0;

  function selectorIsLive() {
    return !Recoil_gkx_1('recoil_memory_managament_2020') || liveStoresCount > 0;
  }

  function getExecutionInfo(store) {
    if (!executionInfoMap.has(store)) {
      executionInfoMap.set(store, getInitialExecutionInfo());
    }

    return Recoil_nullthrows(executionInfoMap.get(store));
  }

  function selectorInit(store) {
    liveStoresCount++;
    store.getState().knownSelectors.add(key); // FIXME remove knownSelectors?

    return () => {
      liveStoresCount--;
      store.getState().knownSelectors.delete(key);
      executionInfoMap.delete(store);
    };
  }

  function selectorShouldDeleteConfigOnRelease() {
    return getConfigDeletionHandler$1(key) !== undefined && !selectorIsLive();
  }

  function notifyStoreWhenAsyncSettles(store, loadable, executionId) {
    if (loadable.state === 'loading') {
      let stores = waitingStores.get(executionId);

      if (stores == null) {
        waitingStores.set(executionId, stores = new Set());
      }

      stores.add(store);
    }
  }

  function notifyStoresOfSettledAsync(newLoadable, executionId) {
    const stores = waitingStores.get(executionId);

    if (stores !== undefined) {
      for (const store of stores) {
        setRecoilValueLoadable$2(store, new AbstractRecoilValue$4(key), newLoadable);
      }

      waitingStores.delete(executionId);
    }
  }

  function getCachedNodeLoadable(store, state, key) {
    if (state.atomValues.has(key)) {
      return Recoil_nullthrows(state.atomValues.get(key));
    }

    const loadable = getNodeLoadable$2(store, state, key);
    const isKeyPointingToSelector = store.getState().knownSelectors.has(key);

    if (loadable.state !== 'loading' && isKeyPointingToSelector) {
      state.atomValues.set(key, loadable);
    }

    return loadable;
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * returned from a selector's get() (either explicitly or implicitly by
   * running a function that uses the "async" keyword). If a selector's get()
   * returns a promise, we have two possibilities:
   *
   * 1. The promise will resolve, in which case it will have completely finished
   *    executing without any remaining pending dependencies. No more retries
   *    are needed and we can proceed with updating the cache and notifying
   *    subscribers (if it is the latest execution, otherwise only the cache
   *    will be updated and subscriptions will not be fired). This is the case
   *    handled by the attached then() handler.
   *
   * 2. The promise will throw because it either has an error or it came across
   *    an async dependency that has not yet resolved, in which case we will
   *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
   *    promises. This case is handled by the attached catch() handler.
   *
   * Both branches will eventually resolve to the final result of the selector
   * (or an error if a real error occurred).
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was thrown--AKA a
   * dependency promise. Dependency promises should be passed to
   * wrapPendingDependencyPromise()).
   */


  function wrapPendingPromise(store, promise, state, depValues, executionId) {
    return promise.then(value => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        return CANCELED$1;
      }

      const loadable = loadableWithValue$1(value);
      maybeFreezeValue(value);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setDepsInStore(store, state, new Set(depValues.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      return {
        __value: value,
        __key: key
      };
    }).catch(errorOrPromise => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        return CANCELED$1;
      }

      if (isLatestExecution(store, executionId)) {
        updateExecutionInfoDepValues(depValues, store, executionId);
      }

      if (Recoil_isPromise(errorOrPromise)) {
        return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionId);
      }

      const loadable = loadableWithError$1(errorOrPromise);
      maybeFreezeValue(errorOrPromise);
      setCache(state, depValuesToDepRoute(depValues), loadable);
      setDepsInStore(store, state, new Set(depValues.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      throw errorOrPromise;
    });
  }
  /**
   * This function attaches a then() and a catch() to a promise that was
   * thrown from a selector's get(). If a selector's get() throws a promise,
   * we have two possibilities:
   *
   * 1. The promise will resolve, meaning one of our selector's dependencies is
   *    now available and we should "retry" our get() by running it again. This
   *    is the case handled by the attached then() handler.
   *
   * 2. The promise will throw because something went wrong with the dependency
   *    promise (in other words a real error occurred). This case is handled by
   *    the attached catch() handler. If the dependency promise throws, it is
   *    _always_ a real error and not another dependency promise (any dependency
   *    promises would have been handled upstream).
   *
   * The then() branch will eventually resolve to the final result of the
   * selector (or an error if a real error occurs), and the catch() will always
   * resolve to an error because the dependency promise is a promise that was
   * wrapped upstream, meaning it will only resolve to its real value or to a
   * real error.
   *
   * The execution will run to completion even if it is stale, and its value
   * will be cached. But stale executions will not update global state or update
   * executionInfo as that is the responsibility of the 'latest' execution.
   *
   * Note this function should not be passed a promise that was returned from
   * get(). The intention is that this function is only passed promises that
   * were thrown due to a pending dependency. Promises returned by get() should
   * be passed to wrapPendingPromise() instead.
   */


  function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionId) {
    return promise.then(resolvedDep => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        return CANCELED$1;
      }

      if (resolvedDep instanceof Canceled$1) {
        Recoil_recoverableViolation('Selector was released while it had dependencies');
        return CANCELED$1;
      }

      const {
        __key: resolvedDepKey,
        __value: depValue
      } = resolvedDep !== null && resolvedDep !== void 0 ? resolvedDep : {};
      /**
       * We need to bypass the selector dep cache if the resolved dep was a
       * user-thrown promise because the selector dep cache will contain the
       * stale values of dependencies, causing an infinite evaluation loop.
       */

      let bypassSelectorDepCacheOnReevaluation = true;

      if (resolvedDepKey != null) {
        /**
         * Note for async atoms, this means we are changing the atom's value
         * in the store for the given version. This should be alright because
         * the version of state is now stale and a new version will have
         * already been triggered by the atom being resolved (see this logic
         * in Recoil_atom.js)
         */
        state.atomValues.set(resolvedDepKey, loadableWithValue$1(depValue));
        /**
         * We've added the resolved dependency to the selector dep cache, so
         * there's no need to bypass the cache
         */

        bypassSelectorDepCacheOnReevaluation = false;
      }

      const [loadable, depValues] = evaluateSelectorGetter(store, state, executionId, bypassSelectorDepCacheOnReevaluation);

      if (isLatestExecution(store, executionId)) {
        updateExecutionInfoDepValues(depValues, store, executionId);
      }

      maybeFreezeLoadableContents(loadable);

      if (loadable.state !== 'loading') {
        setCache(state, depValuesToDepRoute(depValues), loadable);
        setDepsInStore(store, state, new Set(depValues.keys()), executionId);
        setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      }

      if (loadable.state === 'hasError') {
        throw loadable.contents;
      }

      if (loadable.state === 'hasValue') {
        return {
          __value: loadable.contents,
          __key: key
        };
      }
      /**
       * Returning promise here without wrapping as the wrapepr logic was
       * already done when we called evaluateSelectorGetter() to get this
       * loadable
       */


      return loadable.contents;
    }).catch(error => {
      if (!selectorIsLive()) {
        // The selector was released since the request began; ignore the response.
        clearExecutionInfo(store, executionId);
        return CANCELED$1;
      }

      const loadable = loadableWithError$1(error);
      maybeFreezeValue(error);
      setCache(state, depValuesToDepRoute(existingDeps), loadableWithError$1(error));
      setDepsInStore(store, state, new Set(existingDeps.keys()), executionId);
      setLoadableInStoreToNotifyDeps(store, loadable, executionId);
      throw error;
    });
  }

  function setLoadableInStoreToNotifyDeps(store, loadable, executionId) {
    if (isLatestExecution(store, executionId)) {
      setExecutionInfo(loadable, store);
      notifyStoresOfSettledAsync(loadable, executionId);
    }
  }

  function setDepsInStore(store, state, deps, executionId) {
    var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;

    if (isLatestExecution(store, executionId) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
      var _store$getState$nextT, _store$getState3, _store$getState3$next;

      saveDependencyMapToStore$1(new Map([[key, deps]]), store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
    }
  }

  function setNewDepInStore(store, state, deps, newDepKey, executionId) {
    deps.add(newDepKey);
    setDepsInStore(store, state, deps, executionId);
  }

  function evaluateSelectorGetter(store, state, executionId, bypassSelectorDepCache = false) {
    const endPerfBlock = startPerfBlock$1(key); // TODO T63965866: use execution ID here

    let result;
    let resultIsError = false;
    let loadable;
    const depValues = new Map();
    /**
     * Starting a fresh set of deps that we'll be using to update state. We're
     * starting a new set versus adding it in existing state deps because
     * the version of state that we update deps for may be a more recent version
     * than the version the selector was called with. This is because the latest
     * execution will update the deps of the current/latest version of state (
     * this is safe to do because the fact that the selector is the latest
     * execution means the deps we discover below are our best guess at the
     * deps for the current/latest state in the store)
     */

    const deps = new Set();
    setDepsInStore(store, state, deps, executionId);

    function getRecoilValue(recoilValue) {
      const {
        key: depKey
      } = recoilValue;
      setNewDepInStore(store, state, deps, depKey, executionId);
      const depLoadable = bypassSelectorDepCache ? getNodeLoadable$2(store, state, depKey) : getCachedNodeLoadable(store, state, depKey);
      depValues.set(depKey, depLoadable);

      if (depLoadable.state === 'hasValue') {
        return depLoadable.contents;
      }

      throw depLoadable.contents;
    }

    try {
      result = get({
        get: getRecoilValue
      });
      result = isRecoilValue$3(result) ? getRecoilValue(result) : result;

      if (Recoil_isPromise(result)) {
        result = wrapPendingPromise(store, // $FlowFixMe[incompatible-call]
        result, state, depValues, executionId).finally(endPerfBlock);
      } else {
        endPerfBlock();
      }
    } catch (errorOrDepPromise) {
      result = errorOrDepPromise;

      if (Recoil_isPromise(result)) {
        result = wrapPendingDependencyPromise(store, // $FlowFixMe[incompatible-call]
        result, state, depValues, executionId).finally(endPerfBlock);
      } else {
        resultIsError = true;
        endPerfBlock();
      }
    }

    if (resultIsError) {
      loadable = loadableWithError$1(result);
    } else if (Recoil_isPromise(result)) {
      // $FlowFixMe[incompatible-call]
      loadable = loadableWithPromise$1(result);
    } else {
      // $FlowFixMe[incompatible-call]
      loadable = loadableWithValue$1(result);
    }

    maybeFreezeLoadableContents(loadable);
    return [loadable, depValues];
  }

  function getValFromCacheAndUpdatedDownstreamDeps(store, state) {
    const depsAfterCacheDone = new Set();
    const executionInfo = getExecutionInfo(store);
    const cachedVal = cache.get(nodeKey => {
      !(typeof nodeKey === 'string') ?  true ? Recoil_invariant(false, 'Cache nodeKey is type string') : 0 : void 0;
      const loadable = getCachedNodeLoadable(store, state, nodeKey);
      return loadable.contents;
    }, {
      onNodeVisit: node => {
        if (node.type === 'branch' && node.nodeKey !== key && typeof node.nodeKey === 'string') {
          depsAfterCacheDone.add(node.nodeKey);
        }
      }
    });
    /**
     * Ensure store contains correct dependencies if we hit the cache so that
     * the store deps and cache are in sync for a given state. This is important
     * because store deps are normally updated when new executions are created,
     * but cache hits don't trigger new executions but they still _may_ signifiy
     * a change in deps in the store if the store deps for this state are empty
     * or stale.
     */

    if (cachedVal) {
      setDepsInStore(store, state, depsAfterCacheDone, executionInfo.latestExecutionId);
    }

    return cachedVal;
  }
  /**
   * FIXME: dep keys should take into account the state of the loadable to
   * prevent the edge case where a loadable with an error and a loadable with
   * an error as a value are treated as the same thing incorrectly. For example
   * these two should be treated differently:
   *
   * selector({key: '', get: () => new Error('hi')});
   * selector({key: '', get () => {throw new Error('hi')}});
   *
   * With current implementation they are treated the same
   */


  function depValuesToDepRoute(depValues) {
    return Array.from(depValues.entries()).map(([key, valLoadable]) => [key, valLoadable.contents]);
  }

  function getValFromRunningNewExecutionAndUpdatedDeps(store, state) {
    const newExecutionId = getNewExecutionId();
    const [loadable, newDepValues] = evaluateSelectorGetter(store, state, newExecutionId);
    setExecutionInfo(loadable, store, newDepValues, newExecutionId, state);
    maybeSetCacheWithLoadable(state, depValuesToDepRoute(newDepValues), loadable);
    notifyStoreWhenAsyncSettles(store, loadable, newExecutionId);
    return loadable;
  }
  /**
   * Given a tree state, this function returns the "selector result", which is
   * defined as a size-2 tuple of [DependencyMap, Loadable<T>].
   *
   * The selector's get() function will only be re-evaluated if _both_ of the
   * following statements are true:
   *
   * 1. The current dep values from the given state produced a cache key that
   *    was not found in the cache.
   * 2. There is no currently running async execution OR there is an
   *    async execution that is running, but after comparing the dep values in
   *    the given state with the dep values that the execution has discovered so
   *    far we find that at least one dep value has changed, in which case we
   *    start a new execution (the previously running execution will continue to
   *    run to completion, but only the new execution will be deemed the
   *    'latest' execution, meaning it will be the only execution that will
   *    update global state when it is finished. Any non-latest executions will
   *    run to completion and update the selector cache but not global state).
   */


  function getSelectorValAndUpdatedDeps(store, state) {
    const cachedVal = getValFromCacheAndUpdatedDownstreamDeps(store, state);

    if (cachedVal != null) {
      setExecutionInfo(cachedVal, store);
      return cachedVal;
    }

    const inProgressExecutionInfo = getExecutionInfoOfInProgressExecution(store, state); // FIXME: this won't work with custom caching b/c it uses separate cache

    if (inProgressExecutionInfo) {
      const executionInfo = inProgressExecutionInfo;
      notifyStoreWhenAsyncSettles(store, Recoil_nullthrows(executionInfo.latestLoadable), Recoil_nullthrows(executionInfo.latestExecutionId)); // FIXME: check after the fact to see if we made the right choice by waiting

      return Recoil_nullthrows(executionInfo.latestLoadable);
    }

    return getValFromRunningNewExecutionAndUpdatedDeps(store, state);
  }
  /**
   * Searches execution info across all stores to see if there is an in-progress
   * execution whose dependency values match the values of the requesting store.
   */


  function getExecutionInfoOfInProgressExecution(store, state) {
    var _Array$from$find;

    const [, executionInfo] = (_Array$from$find = Array.from(executionInfoMap.entries()).find(([, executionInfo]) => {
      return executionInfo.latestLoadable != null && executionInfo.latestExecutionId != null && !haveAsyncDepsChanged(store, state);
    })) !== null && _Array$from$find !== void 0 ? _Array$from$find : [];
    return executionInfo;
  }

  const mapOfCheckedVersions = new Map();

  function haveAsyncDepsChanged(store, state) {
    var _executionInfo$depVal, _mapOfCheckedVersions;

    const executionInfo = getExecutionInfo(store);
    const oldDepValues = (_executionInfo$depVal = executionInfo.depValuesDiscoveredSoFarDuringAsyncWork) !== null && _executionInfo$depVal !== void 0 ? _executionInfo$depVal : new Map();
    const cachedDepValuesCheckedForThisVersion = Array(((_mapOfCheckedVersions = mapOfCheckedVersions.get(state.version)) !== null && _mapOfCheckedVersions !== void 0 ? _mapOfCheckedVersions : new Map()).entries());
    const isCachedVersionSame = mapOfCheckedVersions.has(state.version) && cachedDepValuesCheckedForThisVersion.length === oldDepValues.size && cachedDepValuesCheckedForThisVersion.every(([nodeKey, nodeVal]) => {
      return oldDepValues.get(nodeKey) === nodeVal;
    });

    if (oldDepValues == null || state.version === executionInfo.stateVersion || isCachedVersionSame) {
      return false;
    }

    mapOfCheckedVersions.set(state.version, new Map(oldDepValues));
    return Array.from(oldDepValues).some(([nodeKey, oldVal]) => {
      const loadable = getCachedNodeLoadable(store, state, nodeKey);
      return loadable.contents !== oldVal.contents &&
      /**
       * FIXME: in the condition below we're making the assumption that a
       * dependency that goes from loading to having a value is always because
       * the dependency resolved to that value, so we don't count it as a dep
       * change as the normal retry loop will handle retrying in response to a
       * resolved async dep. This is an incorrect assumption for the edge case
       * where there is an async selector that is loading, and while it is
       * loading one of its dependencies changes, triggering a new execution,
       * and that new execution produces a value synchronously (we don't make
       * that assumption for asynchronous work b/c it's guaranteed that a
       * loadable that goes from 'loading' to 'loading' in a new loadable is
       * a dep change).
       */
      !(oldVal.state === 'loading' && loadable.state !== 'loading');
    });
  }
  /**
   * This function will update the selector's execution info when the selector
   * has either finished running an execution or has started a new execution. If
   * the given loadable is in a 'loading' state, the intention is that a new
   * execution has started. Otherwise, the intention is that an execution has
   * just finished.
   */


  function setExecutionInfo(loadable, store, depValues, newExecutionId, state) {
    const executionInfo = getExecutionInfo(store);

    if (loadable.state === 'loading') {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
      executionInfo.latestExecutionId = newExecutionId;
      executionInfo.latestLoadable = loadable;
      executionInfo.stateVersion = state === null || state === void 0 ? void 0 : state.version;
    } else {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = null;
      executionInfo.latestExecutionId = null;
      executionInfo.latestLoadable = null;
      executionInfo.stateVersion = null;
    }
  }
  /**
   * Conditionally updates the cache with a given loadable.
   *
   * We only cache loadables that are not loading because our cache keys are
   * based on dep values, which are in an unfinished state for loadables that
   * have a 'loading' state (new deps may be discovered while the selector
   * runs its async code). We never want to cache partial dependencies b/c it
   * could lead to errors, such as prematurely returning the result based on a
   * partial list of deps-- we need the full list of deps to ensure that we
   * are returning the correct result from cache.
   */


  function maybeSetCacheWithLoadable(state, depRoute, loadable) {
    if (loadable.state !== 'loading') {
      setCache(state, depRoute, loadable);
    }
  }

  function updateExecutionInfoDepValues(depValues, store, executionId) {
    const executionInfo = getExecutionInfo(store);

    if (isLatestExecution(store, executionId)) {
      executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
    }
  }

  function clearExecutionInfo(store, executionId) {
    if (isLatestExecution(store, executionId)) {
      executionInfoMap.delete(store);
    }
  }

  function isLatestExecution(store, executionId) {
    const executionInfo = getExecutionInfo(store);
    return executionId === executionInfo.latestExecutionId;
  }

  function maybeFreezeLoadableContents(loadable) {
    if (loadable.state !== 'loading') {
      maybeFreezeValue(loadable.contents);
    }
  }

  function maybeFreezeValue(val) {
    if (true) {
      if (Boolean(options.dangerouslyAllowMutability) === false) {
        Recoil_deepFreezeValue(val);
      }
    }
  }

  function setCache(state, cacheRoute, loadable) {
    state.atomValues.set(key, loadable);
    cache.set(cacheRoute, loadable);
  }

  function detectCircularDependencies(fn) {
    if (dependencyStack.includes(key)) {
      const message = `Recoil selector has circular dependencies: ${dependencyStack.slice(dependencyStack.indexOf(key)).join(' \u2192 ')}`;
      return loadableWithError$1(new Error(message));
    }

    dependencyStack.push(key);

    try {
      return fn();
    } finally {
      dependencyStack.pop();
    }
  }

  function selectorPeek(store, state) {
    const cacheVal = cache.get(nodeKey => {
      !(typeof nodeKey === 'string') ?  true ? Recoil_invariant(false, 'Cache nodeKey is type string') : 0 : void 0;
      const peek = peekNodeLoadable$1(store, state, nodeKey);
      return peek === null || peek === void 0 ? void 0 : peek.contents;
    });
    return cacheVal;
  }

  function selectorGet(store, state) {
    return detectCircularDependencies(() => getSelectorValAndUpdatedDeps(store, state));
  }

  function invalidateSelector(state) {
    state.atomValues.delete(key);
  }

  if (set != null) {
    function selectorSet(store, state, newValue) {
      let syncSelectorSetFinished = false;
      const writes = new Map();

      function getRecoilValue({
        key
      }) {
        if (syncSelectorSetFinished) {
          throw new Error('Recoil: Async selector sets are not currently supported.');
        }

        const loadable = getCachedNodeLoadable(store, state, key);

        if (loadable.state === 'hasValue') {
          return loadable.contents;
        } else if (loadable.state === 'loading') {
          throw new RecoilValueNotReady$2(key);
        } else {
          throw loadable.contents;
        }
      }

      function setRecoilState(recoilState, valueOrUpdater) {
        if (syncSelectorSetFinished) {
          throw new Error('Recoil: Async selector sets are not currently supported.');
        }

        const newValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
        // flowlint-next-line unclear-type:off
        valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
        const upstreamWrites = setNodeValue$3(store, state, recoilState.key, newValue);
        upstreamWrites.forEach((v, k) => writes.set(k, v));
      }

      function resetRecoilState(recoilState) {
        setRecoilState(recoilState, DEFAULT_VALUE$3);
      }

      const ret = set({
        set: setRecoilState,
        get: getRecoilValue,
        reset: resetRecoilState
      }, newValue); // set should be a void method, but if the user makes it `async`, then it
      // will return a Promise, which we don't currently support.

      if (ret !== undefined) {
        throw Recoil_isPromise(ret) ? new Error('Recoil: Async selector sets are not currently supported.') : new Error('Recoil: selector set should be a void function.');
      }

      syncSelectorSetFinished = true;
      return writes;
    }

    return registerNode$1({
      key,
      peek: selectorPeek,
      get: selectorGet,
      set: selectorSet,
      init: selectorInit,
      invalidate: invalidateSelector,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  } else {
    return registerNode$1({
      key,
      peek: selectorPeek,
      get: selectorGet,
      init: selectorInit,
      invalidate: invalidateSelector,
      shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
      dangerouslyAllowMutability: options.dangerouslyAllowMutability,
      shouldRestoreFromSnapshots: false,
      retainedBy
    });
  }
}
/* eslint-enable no-redeclare */


var Recoil_selector = selector;

// @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');
const {
  loadableWithError: loadableWithError$2,
  loadableWithPromise: loadableWithPromise$2,
  loadableWithValue: loadableWithValue$2
} = Recoil_Loadable;

const {
  DEFAULT_VALUE: DEFAULT_VALUE$4,
  DefaultValue: DefaultValue$2,
  getConfigDeletionHandler: getConfigDeletionHandler$2,
  registerNode: registerNode$2,
  setConfigDeletionHandler: setConfigDeletionHandler$1
} = Recoil_Node;

const {
  isRecoilValue: isRecoilValue$4
} = Recoil_RecoilValue$1;

const {
  markRecoilValueModified: markRecoilValueModified$1,
  setRecoilValue: setRecoilValue$3,
  setRecoilValueLoadable: setRecoilValueLoadable$3
} = Recoil_RecoilValueInterface;

const {
  retainedByOptionWithDefault: retainedByOptionWithDefault$2
} = Recoil_Retention;













function baseAtom(options) {
  const {
    key,
    persistence_UNSTABLE: persistence
  } = options;
  const retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
  let liveStoresCount = 0;
  let defaultLoadable = Recoil_isPromise(options.default) ? loadableWithPromise$2(options.default.then(value => {
    defaultLoadable = loadableWithValue$2(value); // TODO Temporary disable Flow due to pending selector_NEW refactor

    const promiseInfo = {
      __key: key,
      __value: value
    };
    return promiseInfo;
  }).catch(error => {
    defaultLoadable = loadableWithError$2(error);
    throw error;
  })) : loadableWithValue$2(options.default);
  let cachedAnswerForUnvalidatedValue = undefined; // Cleanup handlers for this atom
  // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>

  const cleanupEffectsByStore = new Map();

  function wrapPendingPromise(store, promise) {
    const wrappedPromise = promise.then(value => {
      var _store$getState$nextT, _state$atomValues$get;

      const state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;

      if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
        setRecoilValue$3(store, node, value);
      }

      return {
        __key: key,
        __value: value
      };
    }).catch(error => {
      var _store$getState$nextT2, _state$atomValues$get2;

      const state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;

      if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
        setRecoilValueLoadable$3(store, node, loadableWithError$2(error));
      }

      throw error;
    });
    return wrappedPromise;
  }

  function initAtom(store, initState, trigger) {
    liveStoresCount++;
    const alreadyKnown = store.getState().knownAtoms.has(key);
    store.getState().knownAtoms.add(key); // Setup async defaults to notify subscribers when they resolve

    if (defaultLoadable.state === 'loading') {
      const notifyDefaultSubscribers = () => {
        var _store$getState$nextT3;

        const state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;

        if (!state.atomValues.has(key)) {
          markRecoilValueModified$1(store, node);
        }
      };

      defaultLoadable.contents.then(notifyDefaultSubscribers).catch(notifyDefaultSubscribers);
    } // Run Atom Effects
    // This state is scoped by Store, since this is in the initAtom() closure


    let initValue = DEFAULT_VALUE$4;
    let pendingSetSelf = null;

    if (options.effects_UNSTABLE != null && !alreadyKnown) {
      let duringInit = true;

      const setSelf = effect => valueOrUpdater => {
        if (duringInit) {
          const currentValue = initValue instanceof DefaultValue$2 || Recoil_isPromise(initValue) ? defaultLoadable.state === 'hasValue' ? defaultLoadable.contents : DEFAULT_VALUE$4 : initValue;
          initValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict T from being a function without losing support for opaque types
          valueOrUpdater(currentValue) // flowlint-line unclear-type:off
          : valueOrUpdater;
        } else {
          if (Recoil_isPromise(valueOrUpdater)) {
            throw new Error('Setting atoms to async values is not implemented.');
          }

          if (typeof valueOrUpdater !== 'function') {
            pendingSetSelf = {
              effect,
              value: valueOrUpdater
            };
          }

          setRecoilValue$3(store, node, typeof valueOrUpdater === 'function' ? currentValue => {
            const newValue = // cast to any because we can't restrict T from being a function without losing support for opaque types
            valueOrUpdater(currentValue); // flowlint-line unclear-type:off

            pendingSetSelf = {
              effect,
              value: newValue
            };
            return newValue;
          } : valueOrUpdater);
        }
      };

      const resetSelf = effect => () => setSelf(effect)(DEFAULT_VALUE$4);

      const onSet = effect => handler => {
        store.subscribeToTransactions(currentStore => {
          var _pendingSetSelf3;

          // eslint-disable-next-line prefer-const
          let {
            currentTree,
            previousTree
          } = currentStore.getState();

          if (!previousTree) {
            Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
            previousTree = currentTree; // attempt to trundle on
          }

          const newLoadable = currentTree.atomValues.get(key);

          if (newLoadable == null || newLoadable.state === 'hasValue') {
            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2;

            const newValue = newLoadable != null ? newLoadable.contents : DEFAULT_VALUE$4;
            const oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
            const oldValue = oldLoadable.state === 'hasValue' ? oldLoadable.contents : DEFAULT_VALUE$4; // TODO This isn't actually valid, use as a placeholder for now.
            // Ignore atom value changes that were set via setSelf() in the same effect.
            // We will still properly call the handler if there was a subsequent
            // set from something other than an atom effect which was batched
            // with the `setSelf()` call.  However, we may incorrectly ignore
            // the handler if the subsequent batched call happens to set the
            // atom to the exact same value as the `setSelf()`.   But, in that
            // case, it was kind of a noop, so the semantics are debatable..

            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
              handler(newValue, oldValue);
            }
          }

          if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
            pendingSetSelf = null;
          }
        }, key);
      };

      for (const effect of (_options$effects_UNST = options.effects_UNSTABLE) !== null && _options$effects_UNST !== void 0 ? _options$effects_UNST : []) {
        var _options$effects_UNST;

        const cleanup = effect({
          node,
          trigger,
          setSelf: setSelf(effect),
          resetSelf: resetSelf(effect),
          onSet: onSet(effect)
        });

        if (cleanup != null) {
          cleanupEffectsByStore.set(store, cleanup);
        }
      }

      duringInit = false;
    } // Mutate initial state in place since we know there are no other subscribers
    // since we are the ones initializing on first use.


    if (!(initValue instanceof DefaultValue$2)) {
      var _store$getState$nextT4;

      const initLoadable = Recoil_isPromise(initValue) ? loadableWithPromise$2(wrapPendingPromise(store, initValue)) : loadableWithValue$2(initValue);
      initState.atomValues.set(key, initLoadable); // If there is a pending transaction, then also mutate the next state tree.
      // This could happen if the atom was first initialized in an action that
      // also updated some other atom's state.

      (_store$getState$nextT4 = store.getState().nextTree) === null || _store$getState$nextT4 === void 0 ? void 0 : _store$getState$nextT4.atomValues.set(key, initLoadable);
    }

    return () => {
      var _cleanupEffectsByStor;

      liveStoresCount--;
      (_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor === void 0 ? void 0 : _cleanupEffectsByStor();
      cleanupEffectsByStore.delete(store);
      store.getState().knownAtoms.delete(key); // FIXME remove knownAtoms?
    };
  }

  function peekAtom(_store, state) {
    var _ref, _state$atomValues$get3, _cachedAnswerForUnval;

    return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : (_cachedAnswerForUnval = cachedAnswerForUnvalidatedValue) === null || _cachedAnswerForUnval === void 0 ? void 0 : _cachedAnswerForUnval[1]) !== null && _ref !== void 0 ? _ref : defaultLoadable;
  }

  function getAtom(_store, state) {
    if (state.atomValues.has(key)) {
      // Atom value is stored in state:
      return Recoil_nullthrows(state.atomValues.get(key));
    } else if (state.nonvalidatedAtoms.has(key)) {
      // Atom value is stored but needs validation before use.
      // We might have already validated it and have a cached validated value:
      if (cachedAnswerForUnvalidatedValue != null) {
        return cachedAnswerForUnvalidatedValue;
      }

      if (persistence == null) {
        Recoil_expectationViolation(`Tried to restore a persisted value for atom ${key} but it has no persistence settings.`);
        return defaultLoadable;
      }

      const nonvalidatedValue = state.nonvalidatedAtoms.get(key);
      const validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$4);
      const validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$2(validatorResult);
      cachedAnswerForUnvalidatedValue = validatedValueLoadable;
      return cachedAnswerForUnvalidatedValue;
    } else {
      return defaultLoadable;
    }
  }

  function invalidateAtom() {
    cachedAnswerForUnvalidatedValue = undefined;
  }

  function setAtom(_store, state, newValue) {
    // Bail out if we're being set to the existing value, or if we're being
    // reset but have no stored value (validated or unvalidated) to reset from:
    if (state.atomValues.has(key)) {
      const existing = Recoil_nullthrows(state.atomValues.get(key));

      if (existing.state === 'hasValue' && newValue === existing.contents) {
        return new Map();
      }
    } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
      return new Map();
    }

    if (true) {
      if (options.dangerouslyAllowMutability !== true) {
        Recoil_deepFreezeValue(newValue);
      }
    }

    cachedAnswerForUnvalidatedValue = undefined; // can be released now if it was previously in use

    return new Map().set(key, loadableWithValue$2(newValue));
  }

  function shouldDeleteConfigOnReleaseAtom() {
    return getConfigDeletionHandler$2(key) !== undefined && liveStoresCount <= 0;
  }

  const node = registerNode$2({
    key,
    peek: peekAtom,
    get: getAtom,
    set: setAtom,
    init: initAtom,
    invalidate: invalidateAtom,
    shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    persistence_UNSTABLE: options.persistence_UNSTABLE ? {
      type: options.persistence_UNSTABLE.type,
      backButton: options.persistence_UNSTABLE.backButton
    } : undefined,
    shouldRestoreFromSnapshots: true,
    retainedBy
  });
  return node;
} // prettier-ignore


function atom(options) {
  const {
    default: optionsDefault,
    // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
    ...restOptions
  } = options;

  if (isRecoilValue$4(optionsDefault) // Continue to use atomWithFallback for promise defaults for scoped atoms
  // for now, since scoped atoms don't support async defaults
  // @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
  ) {
      return atomWithFallback({ ...restOptions,
        default: optionsDefault // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,

      }); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS && !isPromise(optionsDefault)) {
      // @fb-only: return scopedAtom<T>({
      // @fb-only: ...restOptions,
      // @fb-only: default: optionsDefault,
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: });
    } else {
    return baseAtom({ ...restOptions,
      default: optionsDefault
    });
  }
}

function atomWithFallback(options) {
  const base = atom({ ...options,
    default: DEFAULT_VALUE$4,
    persistence_UNSTABLE: options.persistence_UNSTABLE === undefined ? undefined : { ...options.persistence_UNSTABLE,
      validator: storedValue => storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$4)
    },
    // TODO Hack for now.
    // flowlint-next-line unclear-type: off
    effects_UNSTABLE: options.effects_UNSTABLE
  });
  const sel = Recoil_selector({
    key: `${options.key}__withFallback`,
    get: ({
      get
    }) => {
      const baseValue = get(base);
      return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
    },
    set: ({
      set
    }, newValue) => set(base, newValue),
    dangerouslyAllowMutability: options.dangerouslyAllowMutability
  });
  setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
  return sel;
}

var Recoil_atom = atom;

/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

class MapCache {
  constructor(options) {
    var _options$mapKey;

    _defineProperty(this, "_map", void 0);

    _defineProperty(this, "_keyMapper", void 0);

    this._map = new Map();
    this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : v => v;
  }

  size() {
    return this._map.size;
  }

  has(key) {
    return this._map.has(this._keyMapper(key));
  }

  get(key) {
    return this._map.get(this._keyMapper(key));
  }

  set(key, val) {
    this._map.set(this._keyMapper(key), val);
  }

  delete(key) {
    this._map.delete(this._keyMapper(key));
  }

  clear() {
    this._map.clear();
  }

}

var Recoil_MapCache = {
  MapCache
};

var Recoil_MapCache_1 = Recoil_MapCache.MapCache;

var Recoil_MapCache$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MapCache: Recoil_MapCache_1
});

const {
  LRUCache: LRUCache$2
} = Recoil_LRUCache$1;

const {
  MapCache: MapCache$1
} = Recoil_MapCache$1;

const defaultPolicy$1 = {
  equality: 'reference',
  eviction: 'none',
  maxSize: Infinity
};

function cacheFromPolicy({
  equality = defaultPolicy$1.equality,
  eviction = defaultPolicy$1.eviction,
  maxSize = defaultPolicy$1.maxSize
} = defaultPolicy$1) {
  const valueMapper = getValueMapper$1(equality);
  const cache = getCache(eviction, maxSize, valueMapper);
  return cache;
}

function getValueMapper$1(equality) {
  switch (equality) {
    case 'reference':
      return val => val;

    case 'value':
      return val => Recoil_stableStringify(val);
  }

  throw new Error(`Unrecognized equality policy ${equality}`);
}

function getCache(eviction, maxSize, mapKey) {
  switch (eviction) {
    case 'none':
      return new MapCache$1({
        mapKey
      });

    case 'lru':
      return new LRUCache$2({
        mapKey,
        maxSize: Recoil_nullthrows(maxSize)
      });
  }

  throw new Error(`Unrecognized eviction policy ${eviction}`);
}

var Recoil_cacheFromPolicy = cacheFromPolicy;

const {
  setConfigDeletionHandler: setConfigDeletionHandler$2
} = Recoil_Node;



 // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify


// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters
let nextIndex = 0;
/* eslint-disable no-redeclare */

// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.
function selectorFamily(options) {
  var _options$cachePolicyF;

  const selectorCache = Recoil_cacheFromPolicy((_options$cachePolicyF = options.cachePolicyForParams_UNSTABLE) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : {
    equality: 'value',
    eviction: 'none'
  });
  return params => {
    var _stableStringify;

    const cachedSelector = selectorCache.get(params);

    if (cachedSelector != null) {
      return cachedSelector;
    }

    const myKey = `${options.key}__selectorFamily/${(_stableStringify = Recoil_stableStringify(params, {
      // It is possible to use functions in parameters if the user uses
      // a cache with reference equality thanks to the incrementing index.
      allowFunctions: true
    })) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}/${nextIndex++}`; // Append index in case values serialize to the same key string

    const myGet = callbacks => options.get(params)(callbacks);

    const myCachePolicy = options.cachePolicy_UNSTABLE;
    const retainedBy = typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE;
    let newSelector;

    if (options.set != null) {
      const set = options.set;

      const mySet = (callbacks, newValue) => set(params)(callbacks, newValue);

      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        set: mySet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    } else {
      newSelector = Recoil_selector({
        key: myKey,
        get: myGet,
        cachePolicy_UNSTABLE: myCachePolicy,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: retainedBy
      });
    }

    selectorCache.set(params, newSelector);
    setConfigDeletionHandler$2(newSelector.key, () => {
      selectorCache.delete(params);
    });
    return newSelector;
  };
}
/* eslint-enable no-redeclare */


var Recoil_selectorFamily = selectorFamily;

// @fb-only: const {parameterizedScopedAtomLegacy} = require('Recoil_ScopedAtom');


const {
  DEFAULT_VALUE: DEFAULT_VALUE$5,
  DefaultValue: DefaultValue$3,
  setConfigDeletionHandler: setConfigDeletionHandler$3
} = Recoil_Node;
/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/


function atomFamily(options) {
  var _options$cachePolicyF;

  const atomCache = Recoil_cacheFromPolicy((_options$cachePolicyF = options.cachePolicyForParams_UNSTABLE) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : {
    equality: 'value',
    eviction: 'none'
  }); // An atom to represent any legacy atoms that we can upgrade to an atomFamily

  const legacyAtomOptions = {
    key: options.key,
    // Legacy atoms just used the plain key directly
    default: DEFAULT_VALUE$5,
    persistence_UNSTABLE: options.persistence_UNSTABLE
  };
  let legacyAtom; // prettier-ignore
  // @fb-only: if (
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS
  // @fb-only: ) {
  // @fb-only: legacyAtom = parameterizedScopedAtomLegacy<T | DefaultValue, P>({
  // @fb-only: ...legacyAtomOptions,
  // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS:
  // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
  // @fb-only: });
  // @fb-only: } else {

  legacyAtom = Recoil_atom(legacyAtomOptions); // @fb-only: }
  // Selector to calculate the default value based on any persisted legacy atoms
  // that were upgraded to a atomFamily

  const atomFamilyDefault = Recoil_selectorFamily({
    key: `${options.key}__atomFamily/Default`,
    get: param => ({
      get
    }) => {
      const legacyValue = get(typeof legacyAtom === 'function' ? legacyAtom(param) : legacyAtom); // Atom was upgraded from a non-parameterized atom

      if (!(legacyValue instanceof DefaultValue$3)) {
        return legacyValue;
      } // There's no legacy atom value, so use the user-specified default


      return typeof options.default === 'function' ? // The default was parameterized
      // Flow doesn't know that T isn't a function, so we need to case to any
      options.default(param) // flowlint-line unclear-type:off
      : // Default may be a static value, promise, or RecoilValue
      options.default;
    },
    dangerouslyAllowMutability: options.dangerouslyAllowMutability,
    retainedBy_UNSTABLE: options.retainedBy_UNSTABLE
  }); // Simple atomFamily implementation to cache individual atoms based
  // on the parameter value equality.

  return params => {
    var _stableStringify;

    const cachedAtom = atomCache.get(params);

    if (cachedAtom != null) {
      return cachedAtom;
    }

    const {
      cachePolicyForParams_UNSTABLE,
      ...atomOptions
    } = options;
    const newAtom = Recoil_atom({ ...atomOptions,
      key: `${options.key}__${(_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'}`,
      default: atomFamilyDefault(params),
      retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE,
      effects_UNSTABLE: typeof options.effects_UNSTABLE === 'function' ? options.effects_UNSTABLE(params) : options.effects_UNSTABLE // prettier-ignore
      // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
      // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
      // @fb-only: params,
      // @fb-only: ),

    });
    atomCache.set(params, newAtom);
    setConfigDeletionHandler$3(newAtom.key, () => {
      atomCache.delete(params);
    });
    return newAtom;
  };
}

var Recoil_atomFamily = atomFamily;

// flowlint-next-line unclear-type:off


const constantSelector = Recoil_selectorFamily({
  key: '__constant',
  get: constant => () => constant,
  cachePolicyForParams_UNSTABLE: {
    equality: 'reference'
  }
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
  return constantSelector(constant);
}

var Recoil_constSelector = constSelector;

// flowlint-next-line unclear-type:off


const throwingSelector = Recoil_selectorFamily({
  key: '__error',
  get: message => () => {
    throw new Error(message);
  },
  cachePolicyForParams_UNSTABLE: {
    equality: 'reference'
  }
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
  return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function readOnlySelector(atom) {
  // flowlint-next-line unclear-type: off
  return atom;
}

var Recoil_readOnlySelector = readOnlySelector;

const {
  loadableWithError: loadableWithError$3,
  loadableWithPromise: loadableWithPromise$3,
  loadableWithValue: loadableWithValue$3
} = Recoil_Loadable;



 /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll       waitForAllSettled
//  [loading, loading]  [Promise, Promise]  Promise           Promise         Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise         Promise
//  [value, value]      [value, value]      [value, value]    [value, value]  [value, value]
//
//  [error, loading]    [Error, Promise]    [Error, Promise]  Error           Promise
//  [error, error]      [Error, Error]      [Error, Error]    Error           [error, error]
//  [value, error]      [value, Error]      [value, Error]    Error           [value, error]
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.


function concurrentRequests(getRecoilValue, deps) {
  const results = Array(deps.length).fill(undefined);
  const exceptions = Array(deps.length).fill(undefined);

  for (const [i, dep] of deps.entries()) {
    try {
      results[i] = getRecoilValue(dep);
    } catch (e) {
      // exceptions can either be Promises of pending results or real errors
      exceptions[i] = e;
    }
  }

  return [results, exceptions];
}

function isError(exp) {
  return exp != null && !Recoil_isPromise(exp);
}

function unwrapDependencies(dependencies) {
  return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map(key => dependencies[key]);
}

function getValueFromLoadablePromiseResult(result) {
  if (result != null && typeof result === 'object' && result.hasOwnProperty('__value')) {
    return result.__value;
  }

  return result;
}

function wrapResults(dependencies, results) {
  return Array.isArray(dependencies) ? results : // Object.getOwnPropertyNames() has consistent key ordering with ES6
  Object.getOwnPropertyNames(dependencies).reduce((out, key, idx) => ({ ...out,
    [key]: results[idx]
  }), {});
}

function wrapLoadables(dependencies, results, exceptions) {
  const output = exceptions.map((exception, idx) => exception == null ? loadableWithValue$3(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception));
  return wrapResults(dependencies, output);
}

function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
  return asyncResults.map((result, idx) =>
  /**
   * it's important we use === undefined as opposed to == null, because the
   * resolved value of the async promise could be `null`, in which case we
   * don't want to use syncResults[idx], which would be undefined. If async
   * promise resolves to `undefined`, that's ok because `syncResults[idx]`
   * will also be `undefined`. That's a little hacky, but it works.
   */
  result === undefined ? syncResults[idx] : result);
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.


const waitForNone = Recoil_selectorFamily({
  key: '__waitForNone',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // Always return the current status of the results; never block.

    return wrapLoadables(dependencies, results, exceptions);
  }
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

const waitForAny = Recoil_selectorFamily({
  key: '__waitForAny',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If any results are available, value or error, return the current status

    if (exceptions.some(exp => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Otherwise, return a promise that will resolve when the next result is
    // available, whichever one happens to be next.  But, if all pending
    // dependencies end up with errors, then reject the promise.


    return new Promise(resolve => {
      for (const [i, exp] of exceptions.entries()) {
        if (Recoil_isPromise(exp)) {
          exp.then(result => {
            results[i] = getValueFromLoadablePromiseResult(result);
            exceptions[i] = undefined;
            resolve(wrapLoadables(dependencies, results, exceptions));
          }).catch(error => {
            exceptions[i] = error;
            resolve(wrapLoadables(dependencies, results, exceptions));
          });
        }
      }
    });
  }
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

const waitForAll = Recoil_selectorFamily({
  key: '__waitForAll',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => exp == null)) {
      return wrapResults(dependencies, results);
    } // If we have any errors, throw the first error


    const error = exceptions.find(isError);

    if (error != null) {
      throw error;
    } // Otherwise, return a promise that will resolve when all results are available


    return Promise.all(exceptions).then(exceptionResults => wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults).map(getValueFromLoadablePromiseResult)));
  }
});
const waitForAllSettled = Recoil_selectorFamily({
  key: '__waitForAllSettled',
  get: dependencies => ({
    get
  }) => {
    // Issue requests for all dependencies in parallel.
    // Exceptions can either be Promises of pending results or real errors
    const deps = unwrapDependencies(dependencies);
    const [results, exceptions] = concurrentRequests(get, deps); // If all results are available, return the results

    if (exceptions.every(exp => !Recoil_isPromise(exp))) {
      return wrapLoadables(dependencies, results, exceptions);
    } // Wait for all results to settle


    return Promise.all(exceptions.map((exp, i) => Recoil_isPromise(exp) ? exp.then(result => {
      results[i] = getValueFromLoadablePromiseResult(result);
      exceptions[i] = undefined;
    }).catch(error => {
      results[i] = undefined;
      exceptions[i] = error;
    }) : null)) // Then wrap them as loadables
    .then(() => wrapLoadables(dependencies, results, exceptions));
  }
});
const noWait = Recoil_selectorFamily({
  key: '__noWait',
  get: dependency => ({
    get
  }) => {
    try {
      return loadableWithValue$3(get(dependency));
    } catch (exception) {
      return Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception);
    }
  }
});
var Recoil_WaitFor = {
  waitForNone,
  waitForAny,
  waitForAll,
  waitForAllSettled,
  noWait
};

const {
  batchUpdates: batchUpdates$3,
  setBatcher: setBatcher$1
} = Recoil_Batching;

const {
  DefaultValue: DefaultValue$4
} = Recoil_Node;

const {
  RecoilRoot: RecoilRoot$2
} = Recoil_RecoilRoot_react;

const {
  isRecoilValue: isRecoilValue$5
} = Recoil_RecoilValue$1;

const {
  retentionZone: retentionZone$1
} = Recoil_RetentionZone;

const {
  freshSnapshot: freshSnapshot$2
} = Recoil_Snapshot$1;

const {
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilCallback: useRecoilCallback$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useRecoilTransactionObserver: useRecoilTransactionObserver$1,
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useResetRecoilState: useResetRecoilState$1,
  useRetain: useRetain$1,
  useSetRecoilState: useSetRecoilState$1,
  useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues$1,
  useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED$1
} = Recoil_Hooks;



















const {
  noWait: noWait$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  waitForAny: waitForAny$1,
  waitForNone: waitForNone$1
} = Recoil_WaitFor;

var Recoil_index = {
  // Types
  DefaultValue: DefaultValue$4,
  // Components
  RecoilRoot: RecoilRoot$2,
  useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
  // RecoilValues
  atom: Recoil_atom,
  selector: Recoil_selector,
  // Other factories
  retentionZone: retentionZone$1,
  // Convenience RecoilValues
  atomFamily: Recoil_atomFamily,
  selectorFamily: Recoil_selectorFamily,
  constSelector: Recoil_constSelector,
  errorSelector: Recoil_errorSelector,
  readOnlySelector: Recoil_readOnlySelector,
  // Hooks that accept RecoilValues
  useRecoilValue: useRecoilValue$1,
  useRecoilValueLoadable: useRecoilValueLoadable$1,
  useRecoilState: useRecoilState$1,
  useRecoilStateLoadable: useRecoilStateLoadable$1,
  useSetRecoilState: useSetRecoilState$1,
  useResetRecoilState: useResetRecoilState$1,
  useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
  useRetain: useRetain$1,
  // Hooks for asynchronous Recoil
  useRecoilCallback: useRecoilCallback$1,
  // Hooks for Snapshots
  useGotoRecoilSnapshot: useGotoRecoilSnapshot$1,
  useRecoilSnapshot: useRecoilSnapshot$1,
  useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
  useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
  useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
  // Concurrency Helpers
  noWait: noWait$1,
  waitForNone: waitForNone$1,
  waitForAny: waitForAny$1,
  waitForAll: waitForAll$1,
  waitForAllSettled: waitForAllSettled$1,
  // Other functions
  isRecoilValue: isRecoilValue$5,
  // Batching
  batchUpdates: batchUpdates$3,
  setBatcher: setBatcher$1,
  // Snapshot Utils
  snapshot_UNSTABLE: freshSnapshot$2
};
var Recoil_index_1 = Recoil_index.DefaultValue;
var Recoil_index_2 = Recoil_index.RecoilRoot;
var Recoil_index_3 = Recoil_index.useRecoilBridgeAcrossReactRoots_UNSTABLE;
var Recoil_index_4 = Recoil_index.atom;
var Recoil_index_5 = Recoil_index.selector;
var Recoil_index_6 = Recoil_index.retentionZone;
var Recoil_index_7 = Recoil_index.atomFamily;
var Recoil_index_8 = Recoil_index.selectorFamily;
var Recoil_index_9 = Recoil_index.constSelector;
var Recoil_index_10 = Recoil_index.errorSelector;
var Recoil_index_11 = Recoil_index.readOnlySelector;
var Recoil_index_12 = Recoil_index.useRecoilValue;
var Recoil_index_13 = Recoil_index.useRecoilValueLoadable;
var Recoil_index_14 = Recoil_index.useRecoilState;
var Recoil_index_15 = Recoil_index.useRecoilStateLoadable;
var Recoil_index_16 = Recoil_index.useSetRecoilState;
var Recoil_index_17 = Recoil_index.useResetRecoilState;
var Recoil_index_18 = Recoil_index.useGetRecoilValueInfo_UNSTABLE;
var Recoil_index_19 = Recoil_index.useRetain;
var Recoil_index_20 = Recoil_index.useRecoilCallback;
var Recoil_index_21 = Recoil_index.useGotoRecoilSnapshot;
var Recoil_index_22 = Recoil_index.useRecoilSnapshot;
var Recoil_index_23 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
var Recoil_index_24 = Recoil_index.useTransactionObservation_UNSTABLE;
var Recoil_index_25 = Recoil_index.useSetUnvalidatedAtomValues_UNSTABLE;
var Recoil_index_26 = Recoil_index.noWait;
var Recoil_index_27 = Recoil_index.waitForNone;
var Recoil_index_28 = Recoil_index.waitForAny;
var Recoil_index_29 = Recoil_index.waitForAll;
var Recoil_index_30 = Recoil_index.waitForAllSettled;
var Recoil_index_31 = Recoil_index.isRecoilValue;
var Recoil_index_32 = Recoil_index.batchUpdates;
var Recoil_index_33 = Recoil_index.setBatcher;
var Recoil_index_34 = Recoil_index.snapshot_UNSTABLE;

/* harmony default export */ __webpack_exports__["default"] = (Recoil_index);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tbW9uL3N0YXRlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2NvbnRlbnRzL0NvdGVudHNCb2R5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY29va2llcy9idWlsZC9jb29raWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWNvaWwvZXMvcmVjb2lsLmpzIl0sIm5hbWVzIjpbImRhcmtBdG9tIiwiYXRvbSIsImtleSIsImNvb2tpZSIsIm1lbnVBdG9tIiwiZm9udEF0b20iLCJDb250ZW50c0JvZHkiLCJjb250ZW50IiwidXNlUmVjb2lsU3RhdGUiLCJmb250U3RhdGUiLCJzZXRGb250U3RhdGUiLCJjbGFzc2VzIiwiZ2V0U3R5bGVzIiwibWFya2Rvd24iLCJfX2h0bWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb2xvclJlZCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWQiLCJyZWR1Y2UiLCJhY2MiLCJlbGVtZW50IiwiY29sb3IiLCJjb2xvclBpbmsiLCJwaW5rIiwiY29sb3JQdXJwbGUiLCJwdXJwbGUiLCJjb2xvckRlZXBQdXJwbGUiLCJkZWVwUHVycGxlIiwiY29sb3JJbmRpZ28iLCJpbmRpZ28iLCJjb2xvckJsdWUiLCJibHVlIiwiY29sb3JMaWdodEJsdWUiLCJsaWdodEJsdWUiLCJjb2xvckN5YW4iLCJjeWFuIiwiY29sb3JUZWFsIiwidGVhbCIsImNvbG9yR3JlZW4iLCJncmVlbiIsImNvbG9yTGlnaHRHcmVlbiIsImxpZ2h0R3JlZW4iLCJjb2xvckxpbWUiLCJsaW1lIiwiY29sb3JZZWxsb3ciLCJ5ZWxsb3ciLCJjb2xvckFtYmVyIiwiYW1iZXIiLCJjb2xvck9yYW5nZSIsIm9yYW5nZSIsImNvbG9yRGVlcE9yYW5nZSIsImRlZXBPcmFuZ2UiLCJjb2xvckJyb3duIiwiYnJvd24iLCJjb2xvckdyZXkiLCJncmV5IiwiY29sb3JCbHVlR3JleSIsImJsdWVHcmV5IiwicmVmQ29sb3IiLCJwYWxldHRlIiwidHlwZSIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsIm1hcmdpbkJvdHRvbSIsInNwYWNpbmciLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImVycm9yIiwid2FybmluZyIsImJvcmRlciIsImhlaWdodCIsIm1hcmdpbiIsImZsZXhTaHJpbmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ1c2VyU2VsZWN0IiwibXNVc2VyU2VsZWN0IiwiTW96VXNlclNlbGVjdCIsIldlYmtpdFVzZXJTZWxlY3QiLCJtYXJnaW5Ub3AiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwicGFkZGluZyIsImZvbnRTdHlsZSIsIm1heFdpZHRoIiwiZGlzcGxheSIsIndvcmRCcmVhayIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyVG9wIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmQiLCJ3aGl0ZVNwYWNlIiwid29yZFNwYWNpbmciLCJ3b3JkV3JhcCIsInRhYlNpemUiLCJNb3pUYWJTaXplIiwiaHlwaGVucyIsIm1zSHlwaGVucyIsIk1vekh5cGhlbnMiLCJXZWJraXRIeXBoZW5zIiwib3ZlcmZsb3ciLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtDQUdBOztBQUNPLElBQU1BLFFBQVEsR0FBR0MsNENBQUksQ0FBQztBQUM1QkMsS0FBRyxFQUFFLFdBRHVCO0FBRTVCLGFBQVNDLHVEQUFBLENBQVksT0FBWixJQUF1QkEsdURBQUEsQ0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEtBQUs7QUFDTixNQUFNLElBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELElBQUksb0ZBQW9GO0FBQy9JOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHVDQUF1Qzs7O0FBR3ZDO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsSUFBSTtBQUMzRTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FBUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLHdCQUF3Qjs7O0FBR3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixJQUFJO0FBQ3BGOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxLQUFLO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7OztBQUdMLDRDQUE0QztBQUM1QyxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrREFBa0QsWUFBWTtBQUM5RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixJQUFJO0FBQ3pGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsR0FBRyxrREFBUTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQSxDQUFDLHVCQUF1Qjs7O0FBR3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVELHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0Esb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFlBQVksRUFBRTtBQUNoQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGOztBQUV0RjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EOztBQUVBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLDBCQUEwQjs7O0FBRzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGQUE4Rjs7QUFFOUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7QUFVRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdCQUFnQjs7O0FBR2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsOENBQUs7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsMERBQW1CO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSw2QkFBNkIsMERBQW1CLE9BQU87O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sY0FBYztBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyxFQUFFO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRywyQkFBMkI7O0FBRTlCLHNEQUFzRCxrRUFBeUI7QUFDL0UsRUFBRSwyRUFBa0MsQ0FBQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUxBQXFMOztBQUVyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsMERBQW1CO0FBQ3pDO0FBQ0EsR0FBRyxlQUFlLDBEQUFtQjtBQUNyQztBQUNBLEdBQUcsZUFBZSwwREFBbUI7QUFDckM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLHFCQUFxQiwrREFBc0IsaUVBQWlFLHdFQUErQixDQUFDOztBQUU1STtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTs7QUFFaEUsNERBQTREOztBQUU1RDs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQiwyQkFBMkI7O0FBRTNCLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsOENBQUs7O0FBRVQ7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdILDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7QUFVRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEdBQUcsOENBQUssQ0FBQztBQUNWOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx1REFBdUQsU0FBUztBQUNoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsU0FBUyx5Q0FBeUMsb0JBQW9CO0FBQ2pIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJFQUEyRSxJQUFJO0FBQy9FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBLDJEQUEyRDs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztB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ZSxpREFBaUQ7QUFDaEUsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0gsV0FBVyxFQUFFO0FBQ2IsaUJBQWlCLG9CQUFvQixHQUFHLDRCQUE0QixjQUFjO0FBQ2xGLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQThELEtBQXFDLGtIQUFrSCxDQUF1QjtBQUM1TztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsU0FBUztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELFNBQVM7QUFDM0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZRDtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlELDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsS0FBcUMsNkRBQTZELENBQXVCO0FBQ2hLO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsZUFBZSxvQkFBb0IsdUJBQXVCO0FBQzFEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3RkFBd0Y7O0FBRXhGO0FBQ0E7QUFDQSw4SUFBOEk7O0FBRTlJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9FQUFvRSxxRUFBcUU7QUFDekk7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLEtBQXFDLDZEQUE2RCxDQUF1QjtBQUNoSztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0RBQWtEO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVHQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUZBQW1GLElBQUk7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQSxPQUFPLEVBQUUsZUFBZTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixLQUFLO0FBQ0wscUJBQXFCO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxTQUFTO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGtEQUFrRCxTQUFTO0FBQzNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQUs7QUFDWCxNQUFNLEtBQUs7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsWUFBWSxtQkFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1RUFBdUUsR0FBRyxZQUFZLEVBQUU7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxvQkFBb0IsOEJBQThCOzs7QUFHbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUssS0FBSztBQUNWLEtBQUssS0FBSzs7QUFFVjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjs7QUFFaEIsOENBQThDO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTCxpR0FBaUc7O0FBRWpHO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDO0FBQ2pDLGNBQWMsWUFBWSxJQUFJLHdIQUF3SDtBQUN0SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0EsR0FBRyxLQUFLO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnRUFBZ0Usb0RBQW9EOztBQUVwSDtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFlLFlBQVksRUFBQztBQUN1dUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLmFmNjU1ODBkNzIxOTg0YTJhOWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7IOB7YOcIOq0gOumrCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjA4IFNhdCAxNDozMDo0M1xyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwicmVhY3QtY29va2llc1wiO1xyXG5pbXBvcnQgeyBhdG9tIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuLy8g7YWM66eIIOyDge2DnFxyXG5leHBvcnQgY29uc3QgZGFya0F0b20gPSBhdG9tKHtcclxuXHRrZXk6IFwiZGFya1N0YXRlXCIsXHJcblx0ZGVmYXVsdDogY29va2llLmxvYWQoXCJ0aGVtZVwiKSA/IGNvb2tpZS5sb2FkKFwidGhlbWVcIikgPT09IFwidHJ1ZVwiIDogdHJ1ZVxyXG59KTtcclxuXHJcbi8vIOuplOuJtCDsg4Htg5xcclxuZXhwb3J0IGNvbnN0IG1lbnVBdG9tID0gbmV3IGF0b20oe1xyXG5cdGtleTogXCJtZW51U3RhdGVcIixcclxuXHRkZWZhdWx0OiBmYWxzZVxyXG59KTtcclxuXHJcbi8vIOqyjOyLnOq4gCDtj7Dtirgg7IOB7YOcXHJcbmV4cG9ydCBjb25zdCBmb250QXRvbSA9IG5ldyBhdG9tKHtcclxuXHRrZXk6IFwiZm9udFN0YXRlXCIsXHJcblx0ZGVmYXVsdDogY29va2llLmxvYWQoXCJjdXJzaXZlXCIpID8gY29va2llLmxvYWQoXCJ0aGVtZVwiKSA9PT0gXCJ0cnVlXCIgOiB0cnVlXHJcbn0pOyIsIi8qKlxyXG4gKiDsu6jthZDsuKAg64K07JqpIOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjIxIEZyaSAyMTo0Mzo0MlxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBhbWJlciwgYmx1ZSwgYmx1ZUdyZXksIGJyb3duLCBjeWFuLCBkZWVwT3JhbmdlLCBkZWVwUHVycGxlLCBncmVlbiwgZ3JleSwgaW5kaWdvLCBsaWdodEJsdWUsIGxpZ2h0R3JlZW4sIGxpbWUsIG9yYW5nZSwgcGluaywgcHVycGxlLCByZWQsIHRlYWwsIHllbGxvdyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcbmltcG9ydCB7IGZvbnRBdG9tIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdGF0ZXNcIjtcclxuXHJcbi8qKlxyXG4gKiDsu6jthZDsuKAg64K07JqpIEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZW50czog7Luo7YWQ7LigXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRzQm9keSh7IGNvbnRlbnQgfSlcclxue1xyXG5cdGNvbnN0IFsgZm9udFN0YXRlLCBzZXRGb250U3RhdGUgXSA9IHVzZVJlY29pbFN0YXRlKGZvbnRBdG9tKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFya2Rvd259IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29udGVudC5jb250ZW50IH19IC8+O1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PlxyXG5cdHtcclxuXHRcdGNvbnN0IGNvbG9yUmVkID0gT2JqZWN0LmVudHJpZXMocmVkKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5yZWQtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yUGluayA9IE9iamVjdC5lbnRyaWVzKHBpbmspLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLnBpbmstJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yUHVycGxlID0gT2JqZWN0LmVudHJpZXMocHVycGxlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5wdXJwbGUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yRGVlcFB1cnBsZSA9IE9iamVjdC5lbnRyaWVzKGRlZXBQdXJwbGUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmRlZXBQdXJwbGUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9ySW5kaWdvID0gT2JqZWN0LmVudHJpZXMoaW5kaWdvKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5pbmRpZ28tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQmx1ZSA9IE9iamVjdC5lbnRyaWVzKGJsdWUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmJsdWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGlnaHRCbHVlID0gT2JqZWN0LmVudHJpZXMobGlnaHRCbHVlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5saWdodEJsdWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQ3lhbiA9IE9iamVjdC5lbnRyaWVzKGN5YW4pLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmN5YW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yVGVhbCA9IE9iamVjdC5lbnRyaWVzKHRlYWwpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLnRlYWwtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yR3JlZW4gPSBPYmplY3QuZW50cmllcyhncmVlbikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuZ3JlZW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGlnaHRHcmVlbiA9IE9iamVjdC5lbnRyaWVzKGxpZ2h0R3JlZW4pLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmxpZ2h0R3JlZW4tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yTGltZSA9IE9iamVjdC5lbnRyaWVzKGxpbWUpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmxpbWUtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yWWVsbG93ID0gT2JqZWN0LmVudHJpZXMoeWVsbG93KS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC55ZWxsb3ctJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQW1iZXIgPSBPYmplY3QuZW50cmllcyhhbWJlcikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYW1iZXItJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yT3JhbmdlID0gT2JqZWN0LmVudHJpZXMob3JhbmdlKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT5cclxuXHRcdHtcclxuXHRcdFx0YWNjW2AmIC5vcmFuZ2UtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yRGVlcE9yYW5nZSA9IE9iamVjdC5lbnRyaWVzKGRlZXBPcmFuZ2UpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmRlZXBPcmFuZ2UtJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQnJvd24gPSBPYmplY3QuZW50cmllcyhicm93bikucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYnJvd24tJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yR3JleSA9IE9iamVjdC5lbnRyaWVzKGdyZXkpLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRhY2NbYCYgLmdyZXktJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IGNvbG9yQmx1ZUdyZXkgPSBPYmplY3QuZW50cmllcyhibHVlR3JleSkucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+XHJcblx0XHR7XHJcblx0XHRcdGFjY1tgJiAuYmx1ZUdyZXktJHtlbGVtZW50WzBdfWBdID0ge1xyXG5cdFx0XHRcdGNvbG9yOiBlbGVtZW50WzFdXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4gYWNjO1xyXG5cdFx0fSwge30pO1xyXG5cclxuXHRcdGNvbnN0IHJlZkNvbG9yID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKVwiIDogXCJyZ2JhKDAsIDAsIDAsIDAuMTIpXCI7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWFya2Rvd246IHtcclxuXHRcdFx0XHRmb250U2l6ZTogXCIxLjI1cmVtXCIsXHJcblx0XHRcdFx0Zm9udEZhbWlseTogXCLrkZjquLDrp4jsmpQsIFNwb3FhIEhhbiBTYW5zLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIwKSxcclxuXHRcdFx0XHRsaW5lSGVpZ2h0OiAyLFxyXG5cdFx0XHRcdFwiJiAuY2VudGVyXCI6IHtcclxuXHRcdFx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC5zbWFsbFwiOiB7XHJcblx0XHRcdFx0XHRmb250U2l6ZTogXCIxcmVtXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAubGFyZ2VcIjoge1xyXG5cdFx0XHRcdFx0Zm9udFNpemU6IFwiMS41cmVtXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAucHJpbWFyeVwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5W3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuc2Vjb25kYXJ5XCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeVt0aGVtZS5wYWxldHRlLnR5cGVdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLmVycm9yXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAud2FybmluZ1wiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuaW5mb1wiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAuc3VjY2Vzc1wiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nW3RoZW1lLnBhbGV0dGUudHlwZV1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC4uLmNvbG9yUmVkLFxyXG5cdFx0XHRcdC4uLmNvbG9yUGluayxcclxuXHRcdFx0XHQuLi5jb2xvclB1cnBsZSxcclxuXHRcdFx0XHQuLi5jb2xvckRlZXBQdXJwbGUsXHJcblx0XHRcdFx0Li4uY29sb3JJbmRpZ28sXHJcblx0XHRcdFx0Li4uY29sb3JCbHVlLFxyXG5cdFx0XHRcdC4uLmNvbG9yTGlnaHRCbHVlLFxyXG5cdFx0XHRcdC4uLmNvbG9yQ3lhbixcclxuXHRcdFx0XHQuLi5jb2xvclRlYWwsXHJcblx0XHRcdFx0Li4uY29sb3JHcmVlbixcclxuXHRcdFx0XHQuLi5jb2xvckxpZ2h0R3JlZW4sXHJcblx0XHRcdFx0Li4uY29sb3JMaW1lLFxyXG5cdFx0XHRcdC4uLmNvbG9yWWVsbG93LFxyXG5cdFx0XHRcdC4uLmNvbG9yQW1iZXIsXHJcblx0XHRcdFx0Li4uY29sb3JPcmFuZ2UsXHJcblx0XHRcdFx0Li4uY29sb3JEZWVwT3JhbmdlLFxyXG5cdFx0XHRcdC4uLmNvbG9yQnJvd24sXHJcblx0XHRcdFx0Li4uY29sb3JHcmV5LFxyXG5cdFx0XHRcdC4uLmNvbG9yQmx1ZUdyZXksXHJcblx0XHRcdFx0XCImIC5NdWlEaXZpZGVyLXJvb3RcIjoge1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdGhlaWdodDogMSxcclxuXHRcdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHJlZkNvbG9yXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnJlbWFyay1oaWdobGlnaHRcIjoge1xyXG5cdFx0XHRcdFx0XCImICpcIjoge1xyXG5cdFx0XHRcdFx0XHR1c2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0bXNVc2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdFx0TW96VXNlclNlbGVjdDogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRcdFdlYmtpdFVzZXJTZWxlY3Q6IFwidGV4dFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgaDEsICYgaDIsICYgaDMsICYgaDQsICYgaDUsICYgaDZcIjoge1xyXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIGgxLCAmIGgyLCAmIGgzXCI6IHtcclxuXHRcdFx0XHRcdGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3JlZkNvbG9yfWBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiBhXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBsaWdodEJsdWVbNDAwXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIGJsb2NrcXVvdGVcIjoge1xyXG5cdFx0XHRcdFx0Ym9yZGVyTGVmdDogYDRweCBzb2xpZCAke29yYW5nZVs1MDBdfWAsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMyMjJcIiA6IFwiI0VFRVwiLFxyXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogXCIxNXB4IDI1cHhcIixcclxuXHRcdFx0XHRcdGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjQUFBXCIgOiBcIiM1NTVcIixcclxuXHRcdFx0XHRcdFwiJiA+IDpmaXJzdC1jaGlsZFwiOiB7XHJcblx0XHRcdFx0XHRcdG1hcmdpblRvcDogMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiA+IDpsYXN0LWNoaWxkXCI6IHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAwXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgaW1nXCI6IHtcclxuXHRcdFx0XHRcdG1heFdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0XHRcdGRpc3BsYXk6IFwiYmxvY2tcIixcclxuXHRcdFx0XHRcdG1hcmdpbjogXCIwIGF1dG9cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIHN0cm9uZ1wiOiB7XHJcblx0XHRcdFx0XHR3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgdGFibGVcIjoge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMCxcclxuXHRcdFx0XHRcdG1hcmdpbjogXCJhdXRvXCIsXHJcblx0XHRcdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNyksXHJcblx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNyksXHJcblx0XHRcdFx0XHRib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLFxyXG5cdFx0XHRcdFx0XCImIHRyXCI6IHtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMzMzMzM1wiIDogXCIjQ0NDQ0NDXCJ9YCxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0cjpudGgtY2hpbGQoMm4pXCI6IHtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMDQxNzMzXCIgOiBcIndoaXRlc21va2VcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0ciB0aFwiOiB7XHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG5cdFx0XHRcdFx0XHRib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzMzMzMzXCIgOiBcIiNDQ0NDQ0NcIn1gLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IFwiNnB4IDEzcHhcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFwiJiB0ciB0ZFwiOiB7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMzMzMzNcIiA6IFwiI0NDQ0NDQ1wifWAsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogXCI2cHggMTNweFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XCImIHRyIHRoIDpmaXJzdC1jaGlsZCwgJiB0ciB0ZCA6Zmlyc3QtY2hpbGRcIjoge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcIiYgdHIgdGggOmxhc3QtY2hpbGQsICYgdHIgdGQgOmxhc3QtY2hpbGRcIjoge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IDBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiBjb2RlOm5vdChbY2xhc3MqPSdsYW5ndWFnZS0nXSlcIjoge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBpbmRpZ29bNzAwXSxcclxuXHRcdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiA1LFxyXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiA1LFxyXG5cdFx0XHRcdFx0Zm9udEZhbWlseTogXCJIYWNrLCBTcG9xYSBIYW4gU2FucywgbW9ub3NwYWNlXCIsXHJcblx0XHRcdFx0XHRmb250U2l6ZTogXCIwLjc1ZW1cIixcclxuXHRcdFx0XHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0XHRcdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHRcdFx0XHRcdHVzZXJTZWxlY3Q6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0bXNVc2VyU2VsZWN0OiBcInRleHRcIixcclxuXHRcdFx0XHRcdE1velVzZXJTZWxlY3Q6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0V2Via2l0VXNlclNlbGVjdDogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHR3b3JkQnJlYWs6IFwiYnJlYWstd29yZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddLCBwcmVbY2xhc3MqPSdsYW5ndWFnZS0nXVwiOiB7XHJcblx0XHRcdFx0XHRjb2xvcjogXCIjY2NjXCIsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdGZvbnRGYW1pbHk6IFwiSGFjaywgU3BvcWEgSGFuIFNhbnMsIG1vbm9zcGFjZVwiLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDE2LFxyXG5cdFx0XHRcdFx0dGV4dEFsaWduOiBcImxlZnRcIixcclxuXHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwicHJlXCIsXHJcblx0XHRcdFx0XHR3b3JkU3BhY2luZzogXCJub3JtYWxcIixcclxuXHRcdFx0XHRcdHdvcmRCcmVhazogXCJub3JtYWxcIixcclxuXHRcdFx0XHRcdHdvcmRXcmFwOiBcIm5vcm1hbFwiLFxyXG5cdFx0XHRcdFx0bGluZUhlaWdodDogMS41LFxyXG5cdFx0XHRcdFx0dGFiU2l6ZTogNCxcclxuXHRcdFx0XHRcdE1velRhYlNpemU6IDQsXHJcblx0XHRcdFx0XHRoeXBoZW5zOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdG1zSHlwaGVuczogXCJub25lXCIsXHJcblx0XHRcdFx0XHRNb3pIeXBoZW5zOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFdlYmtpdEh5cGhlbnM6IFwibm9uZVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogXCIxZW1cIixcclxuXHRcdFx0XHRcdG1hcmdpbjogXCIuNWVtIDBcIixcclxuXHRcdFx0XHRcdG92ZXJmbG93OiBcImF1dG9cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIDpub3QocHJlKSA+IGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSwgcHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIjoge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogXCIjMDIwMjEzXCIsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IDEwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgOm5vdChwcmUpID4gY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddXCI6IHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFwiLjFlbVwiLFxyXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIi4zZW1cIixcclxuXHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiAudG9rZW4uY29tbWVudCwgLnRva2VuLmJsb2NrLWNvbW1lbnQsIC50b2tlbi5wcm9sb2csIC50b2tlbi5kb2N0eXBlLCAudG9rZW4uY2RhdGFcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzAwYzgwMFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLnB1bmN0dWF0aW9uXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNjY2NcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi50YWcsIC50b2tlbi5hdHRyLW5hbWUsIC50b2tlbi5uYW1lc3BhY2UsIC50b2tlbi5kZWxldGVkXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNlMjc3N2FcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5mdW5jdGlvbi1uYW1lXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiM2MTk2Y2NcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5ib29sZWFuLCAudG9rZW4ubnVtYmVyLCAudG9rZW4uZnVuY3Rpb25cIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiI2YwOGQ0OVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLnByb3BlcnR5LCAudG9rZW4uY2xhc3MtbmFtZSwgLnRva2VuLmNvbnN0YW50LCAudG9rZW4uc3ltYm9sXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNmOGM1NTVcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5zZWxlY3RvciwgLnRva2VuLmltcG9ydGFudCwgLnRva2VuLmF0cnVsZSwgLnRva2VuLmtleXdvcmQsIC50b2tlbi5idWlsdGluXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiNjYzk5Y2RcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5zdHJpbmcsIC50b2tlbi5jaGFyLCAudG9rZW4uYXR0ci12YWx1ZSwgLnRva2VuLnJlZ2V4LCAudG9rZW4udmFyaWFibGVcIjoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzdlYzY5OVwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLm9wZXJhdG9yLCAudG9rZW4uZW50aXR5LCAudG9rZW4udXJsXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcIiM2N2NkY2NcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XCImIC50b2tlbi5pbXBvcnRhbnQsIC50b2tlbi5ib2xkXCI6IHtcclxuXHRcdFx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLml0YWxpY1wiOiAge1xyXG5cdFx0XHRcdFx0Zm9udFN0eWxlOiBcIml0YWxpY1wiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLmVudGl0eVwiOiB7XHJcblx0XHRcdFx0XHRjdXJzb3I6IFwiaGVscFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcIiYgLnRva2VuLmluc2VydGVkXCI6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiBcImdyZWVuXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFwiJiBhLmhlYWQtbGlua1wiOiB7XHJcblx0XHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9KSgpO1xyXG59IiwiLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuZXhwb3J0cy5zZXJpYWxpemUgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG52YXIgcGFpclNwbGl0UmVnRXhwID0gLzsgKi87XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge31cbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdChwYWlyU3BsaXRSZWdFeHApO1xuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgdmFyIGVxX2lkeCA9IHBhaXIuaW5kZXhPZignPScpO1xuXG4gICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgaWYgKGVxX2lkeCA8IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBwYWlyLnN1YnN0cigwLCBlcV9pZHgpLnRyaW0oKVxuICAgIHZhciB2YWwgPSBwYWlyLnN1YnN0cigrK2VxX2lkeCwgcGFpci5sZW5ndGgpLnRyaW0oKTtcblxuICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICBpZiAoJ1wiJyA9PSB2YWxbMF0pIHtcbiAgICAgIHZhbCA9IHZhbC5zbGljZSgxLCAtMSk7XG4gICAgfVxuXG4gICAgLy8gb25seSBhc3NpZ24gb25jZVxuICAgIGlmICh1bmRlZmluZWQgPT0gb2JqW2tleV0pIHtcbiAgICAgIG9ialtrZXldID0gdHJ5RGVjb2RlKHZhbCwgZGVjKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBkYXRhIGludG8gYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFNlcmlhbGl6ZSB0aGUgYSBuYW1lIHZhbHVlIHBhaXIgaW50byBhIGNvb2tpZSBzdHJpbmcgc3VpdGFibGUgZm9yXG4gKiBodHRwIGhlYWRlcnMuIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHNwZWNpZmllZCBjb29raWUgcGFyYW1ldGVycy5cbiAqXG4gKiBzZXJpYWxpemUoJ2ZvbycsICdiYXInLCB7IGh0dHBPbmx5OiB0cnVlIH0pXG4gKiAgID0+IFwiZm9vPWJhcjsgaHR0cE9ubHlcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGVuYyA9IG9wdC5lbmNvZGUgfHwgZW5jb2RlO1xuXG4gIGlmICh0eXBlb2YgZW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGVuY29kZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZSBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbmModmFsKTtcblxuICBpZiAodmFsdWUgJiYgIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHZhbCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICB2YXIgc3RyID0gbmFtZSArICc9JyArIHZhbHVlO1xuXG4gIGlmIChudWxsICE9IG9wdC5tYXhBZ2UpIHtcbiAgICB2YXIgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XG4gICAgaWYgKGlzTmFOKG1heEFnZSkpIHRocm93IG5ldyBFcnJvcignbWF4QWdlIHNob3VsZCBiZSBhIE51bWJlcicpO1xuICAgIHN0ciArPSAnOyBNYXgtQWdlPScgKyBNYXRoLmZsb29yKG1heEFnZSk7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBkb21haW4gaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBEb21haW49JyArIG9wdC5kb21haW47XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBQYXRoPScgKyBvcHQucGF0aDtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMudG9VVENTdHJpbmcgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBleHBpcmVzIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRXhwaXJlcz0nICsgb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gJzsgSHR0cE9ubHknO1xuICB9XG5cbiAgaWYgKG9wdC5zZWN1cmUpIHtcbiAgICBzdHIgKz0gJzsgU2VjdXJlJztcbiAgfVxuXG4gIGlmIChvcHQuc2FtZVNpdGUpIHtcbiAgICB2YXIgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSAnc3RyaW5nJ1xuICAgICAgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcblxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGF4JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPUxheCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaWN0JzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPVN0cmljdCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFRyeSBkZWNvZGluZyBhIHN0cmluZyB1c2luZyBhIGRlY29kaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRlY29kZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLmxvYWRBbGwgPSBsb2FkQWxsO1xuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5yZW1vdmUgPSByZW1vdmU7XG5leHBvcnRzLnNldFJhd0Nvb2tpZSA9IHNldFJhd0Nvb2tpZTtcbmV4cG9ydHMucGx1Z1RvUmVxdWVzdCA9IHBsdWdUb1JlcXVlc3Q7XG5cbnZhciBfY29va2llID0gcmVxdWlyZSgnY29va2llJyk7XG5cbnZhciBfY29va2llMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nvb2tpZSk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSVNfTk9ERSA9IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG52YXIgX3Jhd0Nvb2tpZSA9IHt9O1xudmFyIF9yZXMgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9pc1Jlc1dyaXRhYmxlKCkge1xuICByZXR1cm4gX3JlcyAmJiAhX3Jlcy5oZWFkZXJzU2VudDtcbn1cblxuZnVuY3Rpb24gbG9hZChuYW1lLCBkb05vdFBhcnNlKSB7XG4gIHZhciBjb29raWVzID0gSVNfTk9ERSA/IF9yYXdDb29raWUgOiBfY29va2llMi5kZWZhdWx0LnBhcnNlKGRvY3VtZW50LmNvb2tpZSk7XG4gIHZhciBjb29raWVWYWwgPSBjb29raWVzICYmIGNvb2tpZXNbbmFtZV07XG5cbiAgaWYgKHR5cGVvZiBkb05vdFBhcnNlID09PSAndW5kZWZpbmVkJykge1xuICAgIGRvTm90UGFyc2UgPSAhY29va2llVmFsIHx8IGNvb2tpZVZhbFswXSAhPT0gJ3snICYmIGNvb2tpZVZhbFswXSAhPT0gJ1snO1xuICB9XG5cbiAgaWYgKCFkb05vdFBhcnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvb2tpZVZhbCA9IEpTT04ucGFyc2UoY29va2llVmFsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIE5vdCBzZXJpYWxpemVkIG9iamVjdFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29raWVWYWw7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbGwoZG9Ob3RQYXJzZSkge1xuICB2YXIgY29va2llcyA9IElTX05PREUgPyBfcmF3Q29va2llIDogX2Nvb2tpZTIuZGVmYXVsdC5wYXJzZShkb2N1bWVudC5jb29raWUpO1xuICB2YXIgY29va2llVmFsID0gY29va2llcztcblxuICBpZiAodHlwZW9mIGRvTm90UGFyc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9Ob3RQYXJzZSA9ICFjb29raWVWYWwgfHwgY29va2llVmFsWzBdICE9PSAneycgJiYgY29va2llVmFsWzBdICE9PSAnWyc7XG4gIH1cblxuICBpZiAoIWRvTm90UGFyc2UpIHtcbiAgICB0cnkge1xuICAgICAgY29va2llVmFsID0gSlNPTi5wYXJzZShjb29raWVWYWwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gTm90IHNlcmlhbGl6ZWQgb2JqZWN0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb2tpZVZhbDtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHJlZ2V4KSB7XG4gIHZhciBjb29raWVzID0gSVNfTk9ERSA/IF9yYXdDb29raWUgOiBfY29va2llMi5kZWZhdWx0LnBhcnNlKGRvY3VtZW50LmNvb2tpZSk7XG5cbiAgaWYgKCFjb29raWVzKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKCFyZWdleCkge1xuICAgIHJldHVybiBjb29raWVzO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvb2tpZXMpLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIG5hbWUpIHtcbiAgICBpZiAoIXJlZ2V4LnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q29va2llID0ge307XG4gICAgbmV3Q29va2llW25hbWVdID0gY29va2llc1tuYW1lXTtcbiAgICByZXR1cm4gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBhY2N1bXVsYXRvciwgbmV3Q29va2llKTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBzYXZlKG5hbWUsIHZhbCwgb3B0KSB7XG4gIF9yYXdDb29raWVbbmFtZV0gPSB2YWw7XG5cbiAgLy8gQWxsb3cgeW91IHRvIHdvcmsgd2l0aCBjb29raWVzIGFzIG9iamVjdHMuXG4gIGlmICgodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnKSB7XG4gICAgX3Jhd0Nvb2tpZVtuYW1lXSA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gIH1cblxuICAvLyBDb29raWVzIG9ubHkgd29yayBpbiB0aGUgYnJvd3NlclxuICBpZiAoIUlTX05PREUpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBfY29va2llMi5kZWZhdWx0LnNlcmlhbGl6ZShuYW1lLCBfcmF3Q29va2llW25hbWVdLCBvcHQpO1xuICB9XG5cbiAgaWYgKF9pc1Jlc1dyaXRhYmxlKCkgJiYgX3Jlcy5jb29raWUpIHtcbiAgICBfcmVzLmNvb2tpZShuYW1lLCB2YWwsIG9wdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5hbWUsIG9wdCkge1xuICBkZWxldGUgX3Jhd0Nvb2tpZVtuYW1lXTtcblxuICBpZiAodHlwZW9mIG9wdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHQgPSB7fTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0ID09PSAnc3RyaW5nJykge1xuICAgIC8vIFdpbGwgYmUgZGVwcmVjYXRlZCBpbiBmdXR1cmUgdmVyc2lvbnNcbiAgICBvcHQgPSB7IHBhdGg6IG9wdCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIFByZXZlbnQgbXV0YXRpb24gb2Ygb3B0IGJlbG93XG4gICAgb3B0ID0gKDAsIF9vYmplY3RBc3NpZ24yLmRlZmF1bHQpKHt9LCBvcHQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHQuZXhwaXJlcyA9IG5ldyBEYXRlKDE5NzAsIDEsIDEsIDAsIDAsIDEpO1xuICAgIG9wdC5tYXhBZ2UgPSAwO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IF9jb29raWUyLmRlZmF1bHQuc2VyaWFsaXplKG5hbWUsICcnLCBvcHQpO1xuICB9XG5cbiAgaWYgKF9pc1Jlc1dyaXRhYmxlKCkgJiYgX3Jlcy5jbGVhckNvb2tpZSkge1xuICAgIF9yZXMuY2xlYXJDb29raWUobmFtZSwgb3B0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRSYXdDb29raWUocmF3Q29va2llKSB7XG4gIGlmIChyYXdDb29raWUpIHtcbiAgICBfcmF3Q29va2llID0gX2Nvb2tpZTIuZGVmYXVsdC5wYXJzZShyYXdDb29raWUpO1xuICB9IGVsc2Uge1xuICAgIF9yYXdDb29raWUgPSB7fTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbHVnVG9SZXF1ZXN0KHJlcSwgcmVzKSB7XG4gIGlmIChyZXEuY29va2llKSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHJlcS5jb29raWU7XG4gIH0gZWxzZSBpZiAocmVxLmNvb2tpZXMpIHtcbiAgICBfcmF3Q29va2llID0gcmVxLmNvb2tpZXM7XG4gIH0gZWxzZSBpZiAocmVxLmhlYWRlcnMgJiYgcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgc2V0UmF3Q29va2llKHJlcS5oZWFkZXJzLmNvb2tpZSk7XG4gIH0gZWxzZSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9XG5cbiAgX3JlcyA9IHJlcztcblxuICByZXR1cm4gZnVuY3Rpb24gdW5wbHVnKCkge1xuICAgIF9yZXMgPSBudWxsO1xuICAgIF9yYXdDb29raWUgPSB7fTtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzZXRSYXdDb29raWU6IHNldFJhd0Nvb2tpZSxcbiAgbG9hZDogbG9hZCxcbiAgbG9hZEFsbDogbG9hZEFsbCxcbiAgc2VsZWN0OiBzZWxlY3QsXG4gIHNhdmU6IHNhdmUsXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBwbHVnVG9SZXF1ZXN0OiBwbHVnVG9SZXF1ZXN0XG59OyIsImltcG9ydCByZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG5cbmZ1bmN0aW9uIG51bGx0aHJvd3MoeCwgbWVzc2FnZSkge1xuICBpZiAoeCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgPyBtZXNzYWdlIDogJ0dvdCB1bmV4cGVjdGVkIG51bGwgb3IgdW5kZWZpbmVkJyk7XG59XG5cbnZhciBSZWNvaWxfbnVsbHRocm93cyA9IG51bGx0aHJvd3M7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuXG5mdW5jdGlvbiByZWNvdmVyYWJsZVZpb2xhdGlvbihtZXNzYWdlLCBwcm9qZWN0TmFtZSwge1xuICBlcnJvclxufSA9IHt9KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgcmVjb3ZlcmFibGVWaW9sYXRpb25fMSA9IHJlY292ZXJhYmxlVmlvbGF0aW9uO1xuXG4vLyBAb3NzLW9ubHlcblxuXG52YXIgUmVjb2lsX3JlY292ZXJhYmxlVmlvbGF0aW9uID0gcmVjb3ZlcmFibGVWaW9sYXRpb25fMTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBVdGlsaXRpZXMgZm9yIHdvcmtpbmcgd2l0aCBidWlsdC1pbiBNYXBzIGFuZCBTZXRzIHdpdGhvdXQgbXV0YXRpbmcgdGhlbS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG5cbmZ1bmN0aW9uIHNldEJ5QWRkaW5nVG9TZXQoc2V0LCB2KSB7XG4gIGNvbnN0IG5leHQgPSBuZXcgU2V0KHNldCk7XG4gIG5leHQuYWRkKHYpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZnVuY3Rpb24gc2V0QnlEZWxldGluZ0Zyb21TZXQoc2V0LCB2KSB7XG4gIGNvbnN0IG5leHQgPSBuZXcgU2V0KHNldCk7XG4gIG5leHQuZGVsZXRlKHYpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZnVuY3Rpb24gbWFwQnlTZXR0aW5nSW5NYXAobWFwLCBrLCB2KSB7XG4gIGNvbnN0IG5leHQgPSBuZXcgTWFwKG1hcCk7XG4gIG5leHQuc2V0KGssIHYpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuZnVuY3Rpb24gbWFwQnlVcGRhdGluZ0luTWFwKG1hcCwgaywgdXBkYXRlcikge1xuICBjb25zdCBuZXh0ID0gbmV3IE1hcChtYXApO1xuICBuZXh0LnNldChrLCB1cGRhdGVyKG5leHQuZ2V0KGspKSk7XG4gIHJldHVybiBuZXh0O1xufVxuXG5mdW5jdGlvbiBtYXBCeURlbGV0aW5nRnJvbU1hcChtYXAsIGspIHtcbiAgY29uc3QgbmV4dCA9IG5ldyBNYXAobWFwKTtcbiAgbmV4dC5kZWxldGUoayk7XG4gIHJldHVybiBuZXh0O1xufVxuXG5mdW5jdGlvbiBtYXBCeURlbGV0aW5nTXVsdGlwbGVGcm9tTWFwKG1hcCwga3MpIHtcbiAgY29uc3QgbmV4dCA9IG5ldyBNYXAobWFwKTtcbiAga3MuZm9yRWFjaChrID0+IG5leHQuZGVsZXRlKGspKTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbnZhciBSZWNvaWxfQ29weU9uV3JpdGUgPSB7XG4gIHNldEJ5QWRkaW5nVG9TZXQsXG4gIHNldEJ5RGVsZXRpbmdGcm9tU2V0LFxuICBtYXBCeVNldHRpbmdJbk1hcCxcbiAgbWFwQnlVcGRhdGluZ0luTWFwLFxuICBtYXBCeURlbGV0aW5nRnJvbU1hcCxcbiAgbWFwQnlEZWxldGluZ011bHRpcGxlRnJvbU1hcFxufTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaXRlcmFibGUgd2hvc2Ugb3V0cHV0IGlzIGdlbmVyYXRlZCBieSBwYXNzaW5nIHRoZSBpbnB1dFxuICogaXRlcmFibGUncyB2YWx1ZXMgdGhyb3VnaCB0aGUgZmlsdGVyIGZ1bmN0aW9uLlxuICovXG5cbmZ1bmN0aW9uKiBmaWx0ZXJJdGVyYWJsZShpdGVyYWJsZSwgcHJlZGljYXRlKSB7XG4gIC8vIFVzZSBnZW5lcmF0b3IgdG8gY3JlYXRlIGl0ZXJhYmxlL2l0ZXJhdG9yXG4gIGxldCBpbmRleCA9IDA7XG5cbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBpdGVyYWJsZSkge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4KyspKSB7XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlY29pbF9maWx0ZXJJdGVyYWJsZSA9IGZpbHRlckl0ZXJhYmxlO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuY29uc3QgZ2tzID0gbmV3IE1hcCgpLnNldCgncmVjb2lsX2hhbXRfMjAyMCcsIHRydWUpO1xuXG5mdW5jdGlvbiBSZWNvaWxfZ2t4KGdrKSB7XG4gIHZhciBfZ2tzJGdldDtcblxuICByZXR1cm4gKF9na3MkZ2V0ID0gZ2tzLmdldChnaykpICE9PSBudWxsICYmIF9na3MkZ2V0ICE9PSB2b2lkIDAgPyBfZ2tzJGdldCA6IGZhbHNlO1xufVxuXG5SZWNvaWxfZ2t4LnNldFBhc3MgPSBnayA9PiB7XG4gIGdrcy5zZXQoZ2ssIHRydWUpO1xufTtcblxuUmVjb2lsX2dreC5zZXRGYWlsID0gZ2sgPT4ge1xuICBna3Muc2V0KGdrLCBmYWxzZSk7XG59O1xuXG52YXIgUmVjb2lsX2dreF8xID0gUmVjb2lsX2dreDsgLy8gQG9zcy1vbmx5XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGl0ZXJhYmxlIHdob3NlIG91dHB1dCBpcyBnZW5lcmF0ZWQgYnkgcGFzc2luZyB0aGUgaW5wdXRcbiAqIGl0ZXJhYmxlJ3MgdmFsdWVzIHRocm91Z2ggdGhlIG1hcHBlciBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBtYXBJdGVyYWJsZShpdGVyYWJsZSwgY2FsbGJhY2spIHtcbiAgLy8gVXNlIGdlbmVyYXRvciB0byBjcmVhdGUgaXRlcmFibGUvaXRlcmF0b3JcbiAgcmV0dXJuIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgaXRlcmFibGUpIHtcbiAgICAgIHlpZWxkIGNhbGxiYWNrKHZhbHVlLCBpbmRleCsrKTtcbiAgICB9XG4gIH0oKTtcbn1cblxudmFyIFJlY29pbF9tYXBJdGVyYWJsZSA9IG1hcEl0ZXJhYmxlO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuZnVuY3Rpb24gc3ByaW50Zihmb3JtYXQsIC4uLmFyZ3MpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCAoKSA9PiBTdHJpbmcoYXJnc1tpbmRleCsrXSkpO1xufVxuXG52YXIgc3ByaW50Zl8xID0gc3ByaW50ZjtcblxuZnVuY3Rpb24gZXhwZWN0YXRpb25WaW9sYXRpb24oZm9ybWF0LCAuLi5hcmdzKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gc3ByaW50Zl8xLmNhbGwobnVsbCwgZm9ybWF0LCAuLi5hcmdzKTtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvci5uYW1lID0gJ0V4cGVjdGF0aW9uIFZpb2xhdGlvbic7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cblxudmFyIGV4cGVjdGF0aW9uVmlvbGF0aW9uXzEgPSBleHBlY3RhdGlvblZpb2xhdGlvbjtcblxuLy8gQG9zcy1vbmx5XG5cblxudmFyIFJlY29pbF9leHBlY3RhdGlvblZpb2xhdGlvbiA9IGV4cGVjdGF0aW9uVmlvbGF0aW9uXzE7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jbGFzcyBBYnN0cmFjdFJlY29pbFZhbHVlIHtcbiAgY29uc3RydWN0b3IobmV3S2V5KSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwia2V5XCIsIHZvaWQgMCk7XG5cbiAgICB0aGlzLmtleSA9IG5ld0tleTtcbiAgfVxuXG59XG5cbmNsYXNzIFJlY29pbFN0YXRlIGV4dGVuZHMgQWJzdHJhY3RSZWNvaWxWYWx1ZSB7fVxuXG5jbGFzcyBSZWNvaWxWYWx1ZVJlYWRPbmx5IGV4dGVuZHMgQWJzdHJhY3RSZWNvaWxWYWx1ZSB7fVxuXG5mdW5jdGlvbiBpc1JlY29pbFZhbHVlKHgpIHtcbiAgcmV0dXJuIHggaW5zdGFuY2VvZiBSZWNvaWxTdGF0ZSB8fCB4IGluc3RhbmNlb2YgUmVjb2lsVmFsdWVSZWFkT25seTtcbn1cblxudmFyIFJlY29pbF9SZWNvaWxWYWx1ZSA9IHtcbiAgQWJzdHJhY3RSZWNvaWxWYWx1ZSxcbiAgUmVjb2lsU3RhdGUsXG4gIFJlY29pbFZhbHVlUmVhZE9ubHksXG4gIGlzUmVjb2lsVmFsdWVcbn07XG5cbnZhciBSZWNvaWxfUmVjb2lsVmFsdWVfMSA9IFJlY29pbF9SZWNvaWxWYWx1ZS5BYnN0cmFjdFJlY29pbFZhbHVlO1xudmFyIFJlY29pbF9SZWNvaWxWYWx1ZV8yID0gUmVjb2lsX1JlY29pbFZhbHVlLlJlY29pbFN0YXRlO1xudmFyIFJlY29pbF9SZWNvaWxWYWx1ZV8zID0gUmVjb2lsX1JlY29pbFZhbHVlLlJlY29pbFZhbHVlUmVhZE9ubHk7XG52YXIgUmVjb2lsX1JlY29pbFZhbHVlXzQgPSBSZWNvaWxfUmVjb2lsVmFsdWUuaXNSZWNvaWxWYWx1ZTtcblxudmFyIFJlY29pbF9SZWNvaWxWYWx1ZSQxID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIEFic3RyYWN0UmVjb2lsVmFsdWU6IFJlY29pbF9SZWNvaWxWYWx1ZV8xLFxuICBSZWNvaWxTdGF0ZTogUmVjb2lsX1JlY29pbFZhbHVlXzIsXG4gIFJlY29pbFZhbHVlUmVhZE9ubHk6IFJlY29pbF9SZWNvaWxWYWx1ZV8zLFxuICBpc1JlY29pbFZhbHVlOiBSZWNvaWxfUmVjb2lsVmFsdWVfNFxufSk7XG5cbmNsYXNzIERlZmF1bHRWYWx1ZSB7fVxuXG5jb25zdCBERUZBVUxUX1ZBTFVFID0gbmV3IERlZmF1bHRWYWx1ZSgpO1xuXG5jbGFzcyBSZWNvaWxWYWx1ZU5vdFJlYWR5IGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICBzdXBlcihgVHJpZWQgdG8gc2V0IHRoZSB2YWx1ZSBvZiBSZWNvaWwgc2VsZWN0b3IgJHtrZXl9IHVzaW5nIGFuIHVwZGF0ZXIgZnVuY3Rpb24sIGJ1dCBpdCBpcyBhbiBhc3luYyBzZWxlY3RvciBpbiBhIHBlbmRpbmcgb3IgZXJyb3Igc3RhdGU7IHRoaXMgaXMgbm90IHN1cHBvcnRlZC5gKTtcbiAgfVxuXG59XG5cbi8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG5jb25zdCBub2RlcyA9IG5ldyBNYXAoKTsgLy8gZmxvd2xpbnQtbmV4dC1saW5lIHVuY2xlYXItdHlwZTpvZmZcblxuY29uc3QgcmVjb2lsVmFsdWVzID0gbmV3IE1hcCgpO1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG5cbmZ1bmN0aW9uIHJlY29pbFZhbHVlc0ZvcktleXMoa2V5cykge1xuICByZXR1cm4gUmVjb2lsX21hcEl0ZXJhYmxlKGtleXMsIGtleSA9PiBSZWNvaWxfbnVsbHRocm93cyhyZWNvaWxWYWx1ZXMuZ2V0KGtleSkpKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlKG5vZGUpIHtcbiAgaWYgKG5vZGVzLmhhcyhub2RlLmtleSkpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYER1cGxpY2F0ZSBhdG9tIGtleSBcIiR7bm9kZS5rZXl9XCIuIFRoaXMgaXMgYSBGQVRBTCBFUlJPUiBpblxuICAgICAgcHJvZHVjdGlvbi4gQnV0IGl0IGlzIHNhZmUgdG8gaWdub3JlIHRoaXMgd2FybmluZyBpZiBpdCBvY2N1cnJlZCBiZWNhdXNlIG9mXG4gICAgICBob3QgbW9kdWxlIHJlcGxhY2VtZW50LmA7IC8vIFRPRE8gTmVlZCB0byBmaWd1cmUgb3V0IGlmIHRoZXJlIGlzIGEgc3RhbmRhcmQvb3Blbi1zb3VyY2UgZXF1aXZhbGVudCB0byBzZWUgaWYgaG90IG1vZHVsZSByZXBsYWNlbWVudCBpcyBoYXBwZW5pbmc6XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgLy8gQGZiLW9ubHk6IGlmIChfX0RFVl9fKSB7XG4gICAgLy8gQGZiLW9ubHk6IGNvbnN0IGlzQWNjZXB0aW5nVXBkYXRlID0gcmVxdWlyZSgnX19kZWJ1ZycpLmlzQWNjZXB0aW5nVXBkYXRlO1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIC8vIEBmYi1vbmx5OiBpZiAodHlwZW9mIGlzQWNjZXB0aW5nVXBkYXRlICE9PSAnZnVuY3Rpb24nIHx8ICFpc0FjY2VwdGluZ1VwZGF0ZSgpKSB7XG4gICAgLy8gQGZiLW9ubHk6IGV4cGVjdGF0aW9uVmlvbGF0aW9uKG1lc3NhZ2UsICdyZWNvaWwnKTtcbiAgICAvLyBAZmItb25seTogfVxuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIC8vIEBmYi1vbmx5OiB9IGVsc2Uge1xuICAgIC8vIEBmYi1vbmx5OiByZWNvdmVyYWJsZVZpb2xhdGlvbihtZXNzYWdlLCAncmVjb2lsJyk7XG4gICAgLy8gQGZiLW9ubHk6IH1cblxuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTsgLy8gQG9zcy1vbmx5XG4gIH1cblxuICBub2Rlcy5zZXQobm9kZS5rZXksIG5vZGUpO1xuICBjb25zdCByZWNvaWxWYWx1ZSA9IG5vZGUuc2V0ID09IG51bGwgPyBuZXcgUmVjb2lsX1JlY29pbFZhbHVlJDEuUmVjb2lsVmFsdWVSZWFkT25seShub2RlLmtleSkgOiBuZXcgUmVjb2lsX1JlY29pbFZhbHVlJDEuUmVjb2lsU3RhdGUobm9kZS5rZXkpO1xuICByZWNvaWxWYWx1ZXMuc2V0KG5vZGUua2V5LCByZWNvaWxWYWx1ZSk7XG4gIHJldHVybiByZWNvaWxWYWx1ZTtcbn1cbi8qIGVzbGludC1lbmFibGUgbm8tcmVkZWNsYXJlICovXG5cblxuY2xhc3MgTm9kZU1pc3NpbmdFcnJvciBleHRlbmRzIEVycm9yIHt9IC8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG5cblxuZnVuY3Rpb24gZ2V0Tm9kZShrZXkpIHtcbiAgY29uc3Qgbm9kZSA9IG5vZGVzLmdldChrZXkpO1xuXG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgTm9kZU1pc3NpbmdFcnJvcihgTWlzc2luZyBkZWZpbml0aW9uIGZvciBSZWNvaWxWYWx1ZTogXCIke2tleX1cIlwiYCk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0gLy8gZmxvd2xpbnQtbmV4dC1saW5lIHVuY2xlYXItdHlwZTpvZmZcblxuXG5mdW5jdGlvbiBnZXROb2RlTWF5YmUoa2V5KSB7XG4gIHJldHVybiBub2Rlcy5nZXQoa2V5KTtcbn1cblxuY29uc3QgY29uZmlnRGVsZXRpb25IYW5kbGVycyA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gZGVsZXRlTm9kZUNvbmZpZ0lmUG9zc2libGUoa2V5KSB7XG4gIHZhciBfbm9kZSRzaG91bGREZWxldGVDb247XG5cbiAgaWYgKCFSZWNvaWxfZ2t4XzEoJ3JlY29pbF9tZW1vcnlfbWFuYWdhbWVudF8yMDIwJykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub2RlID0gbm9kZXMuZ2V0KGtleSk7XG5cbiAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9ub2RlJHNob3VsZERlbGV0ZUNvbiA9IG5vZGUuc2hvdWxkRGVsZXRlQ29uZmlnT25SZWxlYXNlKSA9PT0gbnVsbCB8fCBfbm9kZSRzaG91bGREZWxldGVDb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ub2RlJHNob3VsZERlbGV0ZUNvbi5jYWxsKG5vZGUpKSB7XG4gICAgdmFyIF9nZXRDb25maWdEZWxldGlvbkhhbjtcblxuICAgIG5vZGVzLmRlbGV0ZShrZXkpO1xuICAgIChfZ2V0Q29uZmlnRGVsZXRpb25IYW4gPSBnZXRDb25maWdEZWxldGlvbkhhbmRsZXIoa2V5KSkgPT09IG51bGwgfHwgX2dldENvbmZpZ0RlbGV0aW9uSGFuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZ2V0Q29uZmlnRGVsZXRpb25IYW4oKTtcbiAgICBjb25maWdEZWxldGlvbkhhbmRsZXJzLmRlbGV0ZShrZXkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldENvbmZpZ0RlbGV0aW9uSGFuZGxlcihrZXksIGZuKSB7XG4gIGlmICghUmVjb2lsX2dreF8xKCdyZWNvaWxfbWVtb3J5X21hbmFnYW1lbnRfMjAyMCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGZuID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25maWdEZWxldGlvbkhhbmRsZXJzLmRlbGV0ZShrZXkpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZ0RlbGV0aW9uSGFuZGxlcnMuc2V0KGtleSwgZm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpZ0RlbGV0aW9uSGFuZGxlcihrZXkpIHtcbiAgcmV0dXJuIGNvbmZpZ0RlbGV0aW9uSGFuZGxlcnMuZ2V0KGtleSk7XG59XG5cbnZhciBSZWNvaWxfTm9kZSA9IHtcbiAgbm9kZXMsXG4gIHJlY29pbFZhbHVlcyxcbiAgcmVnaXN0ZXJOb2RlLFxuICBnZXROb2RlLFxuICBnZXROb2RlTWF5YmUsXG4gIGRlbGV0ZU5vZGVDb25maWdJZlBvc3NpYmxlLFxuICBzZXRDb25maWdEZWxldGlvbkhhbmRsZXIsXG4gIGdldENvbmZpZ0RlbGV0aW9uSGFuZGxlcixcbiAgcmVjb2lsVmFsdWVzRm9yS2V5cyxcbiAgTm9kZU1pc3NpbmdFcnJvcixcbiAgRGVmYXVsdFZhbHVlLFxuICBERUZBVUxUX1ZBTFVFLFxuICBSZWNvaWxWYWx1ZU5vdFJlYWR5XG59O1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuY2xhc3MgUmV0ZW50aW9uWm9uZSB7fVxuXG5mdW5jdGlvbiByZXRlbnRpb25ab25lKCkge1xuICByZXR1cm4gbmV3IFJldGVudGlvblpvbmUoKTtcbn1cblxudmFyIFJlY29pbF9SZXRlbnRpb25ab25lID0ge1xuICBSZXRlbnRpb25ab25lLFxuICByZXRlbnRpb25ab25lXG59O1xuXG5jb25zdCB7XG4gIHNldEJ5QWRkaW5nVG9TZXQ6IHNldEJ5QWRkaW5nVG9TZXQkMVxufSA9IFJlY29pbF9Db3B5T25Xcml0ZTtcblxuXG5cblxuXG5cblxuY29uc3Qge1xuICBnZXROb2RlOiBnZXROb2RlJDEsXG4gIGdldE5vZGVNYXliZTogZ2V0Tm9kZU1heWJlJDEsXG4gIHJlY29pbFZhbHVlc0ZvcktleXM6IHJlY29pbFZhbHVlc0ZvcktleXMkMVxufSA9IFJlY29pbF9Ob2RlO1xuXG5jb25zdCB7XG4gIFJldGVudGlvblpvbmU6IFJldGVudGlvblpvbmUkMVxufSA9IFJlY29pbF9SZXRlbnRpb25ab25lOyAvLyBmbG93bGludC1uZXh0LWxpbmUgdW5jbGVhci10eXBlOm9mZlxuXG5cbmNvbnN0IGVtcHR5U2V0ID0gT2JqZWN0LmZyZWV6ZShuZXcgU2V0KCkpO1xuXG5jbGFzcyBSZWFkT25seVJlY29pbFZhbHVlRXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUmV0ZW50aW9uRm9yTm9kZShzdG9yZSwgbm9kZUtleSwgcmV0YWluZWRCeSkge1xuICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgIHJldHVybiAoKSA9PiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCB7XG4gICAgbm9kZXNSZXRhaW5lZEJ5Wm9uZVxuICB9ID0gc3RvcmUuZ2V0U3RhdGUoKS5yZXRlbnRpb247XG5cbiAgZnVuY3Rpb24gYWRkVG9ab25lKHpvbmUpIHtcbiAgICBsZXQgc2V0ID0gbm9kZXNSZXRhaW5lZEJ5Wm9uZS5nZXQoem9uZSk7XG5cbiAgICBpZiAoIXNldCkge1xuICAgICAgbm9kZXNSZXRhaW5lZEJ5Wm9uZS5zZXQoem9uZSwgc2V0ID0gbmV3IFNldCgpKTtcbiAgICB9XG5cbiAgICBzZXQuYWRkKG5vZGVLZXkpO1xuICB9XG5cbiAgaWYgKHJldGFpbmVkQnkgaW5zdGFuY2VvZiBSZXRlbnRpb25ab25lJDEpIHtcbiAgICBhZGRUb1pvbmUocmV0YWluZWRCeSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRhaW5lZEJ5KSkge1xuICAgIGZvciAoY29uc3Qgem9uZSBvZiByZXRhaW5lZEJ5KSB7XG4gICAgICBhZGRUb1pvbmUoem9uZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzUmV0YWluZWRCeVpvbmUgPSBzdG9yZS5nZXRTdGF0ZSgpLnJldGVudGlvbi5ub2Rlc1JldGFpbmVkQnlab25lO1xuXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbVpvbmUoem9uZSkge1xuICAgICAgY29uc3Qgc2V0ID0gbm9kZXNSZXRhaW5lZEJ5Wm9uZS5nZXQoem9uZSk7XG5cbiAgICAgIGlmIChzZXQpIHtcbiAgICAgICAgc2V0LmRlbGV0ZShub2RlS2V5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldCAmJiBzZXQuc2l6ZSA9PT0gMCkge1xuICAgICAgICBub2Rlc1JldGFpbmVkQnlab25lLmRlbGV0ZSh6b25lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmV0YWluZWRCeSBpbnN0YW5jZW9mIFJldGVudGlvblpvbmUkMSkge1xuICAgICAgZGVsZXRlRnJvbVpvbmUocmV0YWluZWRCeSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldGFpbmVkQnkpKSB7XG4gICAgICBmb3IgKGNvbnN0IHpvbmUgb2YgcmV0YWluZWRCeSkge1xuICAgICAgICBkZWxldGVGcm9tWm9uZSh6b25lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVOb2RlSWZOZXdUb1N0b3JlKHN0b3JlLCB0cmVlU3RhdGUsIGtleSwgdHJpZ2dlcikge1xuICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICBpZiAoc3RvcmVTdGF0ZS5ub2RlQ2xlYW51cEZ1bmN0aW9ucy5oYXMoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbmZpZyA9IGdldE5vZGUkMShrZXkpO1xuICBjb25zdCByZXRlbnRpb25DbGVhbnVwID0gaW5pdGlhbGl6ZVJldGVudGlvbkZvck5vZGUoc3RvcmUsIGtleSwgY29uZmlnLnJldGFpbmVkQnkpO1xuICBjb25zdCBub2RlQ2xlYW51cCA9IGNvbmZpZy5pbml0KHN0b3JlLCB0cmVlU3RhdGUsIHRyaWdnZXIpO1xuICBzdG9yZVN0YXRlLm5vZGVDbGVhbnVwRnVuY3Rpb25zLnNldChrZXksICgpID0+IHtcbiAgICBub2RlQ2xlYW51cCgpO1xuICAgIHJldGVudGlvbkNsZWFudXAoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXBOb2RlKHN0b3JlLCBrZXkpIHtcbiAgdmFyIF9zdGF0ZSRub2RlQ2xlYW51cEZ1bjtcblxuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIChfc3RhdGUkbm9kZUNsZWFudXBGdW4gPSBzdGF0ZS5ub2RlQ2xlYW51cEZ1bmN0aW9ucy5nZXQoa2V5KSkgPT09IG51bGwgfHwgX3N0YXRlJG5vZGVDbGVhbnVwRnVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkbm9kZUNsZWFudXBGdW4oKTtcbiAgc3RhdGUubm9kZUNsZWFudXBGdW5jdGlvbnMuZGVsZXRlKGtleSk7XG59IC8vIEdldCB0aGUgY3VycmVudCB2YWx1ZSBsb2FkYWJsZSBvZiBhIG5vZGUgYW5kIHVwZGF0ZSB0aGUgc3RhdGUuXG4vLyBVcGRhdGUgZGVwZW5kZW5jaWVzIGFuZCBzdWJzY3JpcHRpb25zIGZvciBzZWxlY3RvcnMuXG4vLyBVcGRhdGUgc2F2ZWQgdmFsdWUgdmFsaWRhdGlvbiBmb3IgYXRvbXMuXG5cblxuZnVuY3Rpb24gZ2V0Tm9kZUxvYWRhYmxlKHN0b3JlLCBzdGF0ZSwga2V5KSB7XG4gIGluaXRpYWxpemVOb2RlSWZOZXdUb1N0b3JlKHN0b3JlLCBzdGF0ZSwga2V5LCAnZ2V0Jyk7XG4gIHJldHVybiBnZXROb2RlJDEoa2V5KS5nZXQoc3RvcmUsIHN0YXRlKTtcbn0gLy8gUGVlayBhdCB0aGUgY3VycmVudCB2YWx1ZSBsb2FkYWJsZSBmb3IgYSBub2RlIHdpdGhvdXQgYW55IGV2YWx1YXRpb24gb3Igc3RhdGUgY2hhbmdlXG5cblxuZnVuY3Rpb24gcGVla05vZGVMb2FkYWJsZShzdG9yZSwgc3RhdGUsIGtleSkge1xuICByZXR1cm4gZ2V0Tm9kZSQxKGtleSkucGVlayhzdG9yZSwgc3RhdGUpO1xufSAvLyBXcml0ZSB2YWx1ZSBkaXJlY3RseSB0byBzdGF0ZSBieXBhc3NpbmcgdGhlIE5vZGUgaW50ZXJmYWNlIGFzIHRoZSBub2RlXG4vLyBkZWZpbml0aW9ucyBtYXkgbm90IGhhdmUgYmVlbiBsb2FkZWQgeWV0IHdoZW4gcHJvY2Vzc2luZyB0aGUgaW5pdGlhbCBzbmFwc2hvdC5cblxuXG5mdW5jdGlvbiBzZXRVbnZhbGlkYXRlZEF0b21WYWx1ZV9ERVBSRUNBVEVEKHN0YXRlLCBrZXksIG5ld1ZhbHVlKSB7XG4gIHZhciBfbm9kZSRpbnZhbGlkYXRlO1xuXG4gIGNvbnN0IG5vZGUgPSBnZXROb2RlTWF5YmUkMShrZXkpO1xuICBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfbm9kZSRpbnZhbGlkYXRlID0gbm9kZS5pbnZhbGlkYXRlKSA9PT0gbnVsbCB8fCBfbm9kZSRpbnZhbGlkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRpbnZhbGlkYXRlLmNhbGwobm9kZSwgc3RhdGUpO1xuICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICBhdG9tVmFsdWVzOiBzdGF0ZS5hdG9tVmFsdWVzLmNsb25lKCkuZGVsZXRlKGtleSksXG4gICAgbm9udmFsaWRhdGVkQXRvbXM6IHN0YXRlLm5vbnZhbGlkYXRlZEF0b21zLmNsb25lKCkuc2V0KGtleSwgbmV3VmFsdWUpLFxuICAgIGRpcnR5QXRvbXM6IHNldEJ5QWRkaW5nVG9TZXQkMShzdGF0ZS5kaXJ0eUF0b21zLCBrZXkpXG4gIH07XG59IC8vIFJldHVybiB0aGUgZGlzY292ZXJlZCBkZXBlbmRlbmNpZXMgYW5kIHZhbHVlcyB0byBiZSB3cml0dGVuIGJ5IHNldHRpbmdcbi8vIGEgbm9kZSB2YWx1ZS4gKE11bHRpcGxlIHZhbHVlcyBtYXkgYmUgd3JpdHRlbiBkdWUgdG8gc2VsZWN0b3JzIGdldHRpbmcgdG9cbi8vIHNldCB1cHN0cmVhbXM7IGRlcHMgbWF5IGJlIGRpc2NvdmVyZWQgYmVjYXVzZSBvZiByZWFkcyBpbiB1cGRhdGVyIGZ1bmN0aW9ucy4pXG5cblxuZnVuY3Rpb24gc2V0Tm9kZVZhbHVlKHN0b3JlLCBzdGF0ZSwga2V5LCBuZXdWYWx1ZSkge1xuICBjb25zdCBub2RlID0gZ2V0Tm9kZSQxKGtleSk7XG5cbiAgaWYgKG5vZGUuc2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgUmVhZE9ubHlSZWNvaWxWYWx1ZUVycm9yKGBBdHRlbXB0IHRvIHNldCByZWFkLW9ubHkgUmVjb2lsVmFsdWU6ICR7a2V5fWApO1xuICB9XG5cbiAgY29uc3Qgc2V0ID0gbm9kZS5zZXQ7IC8vIHNvIGZsb3cgZG9lc24ndCBsb3NlIHRoZSBhYm92ZSByZWZpbmVtZW50LlxuXG4gIGluaXRpYWxpemVOb2RlSWZOZXdUb1N0b3JlKHN0b3JlLCBzdGF0ZSwga2V5LCAnc2V0Jyk7XG4gIHJldHVybiBzZXQoc3RvcmUsIHN0YXRlLCBuZXdWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBlZWtOb2RlSW5mbyhzdG9yZSwgc3RhdGUsIGtleSkge1xuICB2YXIgX2dyYXBoJG5vZGVEZXBzJGdldCwgX3N0b3JlU3RhdGUkbm9kZVRvQ29tLCBfc3RvcmVTdGF0ZSRub2RlVG9Db20yO1xuXG4gIGNvbnN0IHN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCBncmFwaCA9IHN0b3JlLmdldEdyYXBoKHN0YXRlLnZlcnNpb24pO1xuICBjb25zdCB0eXBlID0gc3RvcmVTdGF0ZS5rbm93bkF0b21zLmhhcyhrZXkpID8gJ2F0b20nIDogc3RvcmVTdGF0ZS5rbm93blNlbGVjdG9ycy5oYXMoa2V5KSA/ICdzZWxlY3RvcicgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGRvd25zdHJlYW1Ob2RlcyA9IFJlY29pbF9maWx0ZXJJdGVyYWJsZShnZXREb3duc3RyZWFtTm9kZXMoc3RvcmUsIHN0YXRlLCBuZXcgU2V0KFtrZXldKSksIG5vZGVLZXkgPT4gbm9kZUtleSAhPT0ga2V5KTtcbiAgcmV0dXJuIHtcbiAgICBsb2FkYWJsZTogcGVla05vZGVMb2FkYWJsZShzdG9yZSwgc3RhdGUsIGtleSksXG4gICAgaXNBY3RpdmU6IHN0b3JlU3RhdGUua25vd25BdG9tcy5oYXMoa2V5KSB8fCBzdG9yZVN0YXRlLmtub3duU2VsZWN0b3JzLmhhcyhrZXkpLFxuICAgIGlzU2V0OiB0eXBlID09PSAnc2VsZWN0b3InID8gZmFsc2UgOiBzdGF0ZS5hdG9tVmFsdWVzLmhhcyhrZXkpLFxuICAgIGlzTW9kaWZpZWQ6IHN0YXRlLmRpcnR5QXRvbXMuaGFzKGtleSksXG4gICAgdHlwZSxcbiAgICAvLyBSZXBvcnQgY3VycmVudCBkZXBlbmRlbmNpZXMuICBJZiB0aGUgbm9kZSBoYXNuJ3QgYmVlbiBldmFsdWF0ZWQsIHRoZW5cbiAgICAvLyBkZXBlbmRlbmNpZXMgbWF5IGJlIG1pc3NpbmcgYmFzZWQgb24gdGhlIGN1cnJlbnQgc3RhdGUuXG4gICAgZGVwczogcmVjb2lsVmFsdWVzRm9yS2V5cyQxKChfZ3JhcGgkbm9kZURlcHMkZ2V0ID0gZ3JhcGgubm9kZURlcHMuZ2V0KGtleSkpICE9PSBudWxsICYmIF9ncmFwaCRub2RlRGVwcyRnZXQgIT09IHZvaWQgMCA/IF9ncmFwaCRub2RlRGVwcyRnZXQgOiBbXSksXG4gICAgLy8gUmVwb3J0c2FsbCBcImN1cnJlbnRcIiBzdWJzY3JpYmVycy4gIEV2YWx1YXRpbmcgb3RoZXIgbm9kZXMgb3JcbiAgICAvLyBwcmV2aW91cyBpbi1wcm9ncmVzcyBhc3luYyBldmFsdWF0aW9ucyBtYXkgaW50cm9kdWNlIG5ldyBzdWJzY3JpYmVycy5cbiAgICBzdWJzY3JpYmVyczoge1xuICAgICAgbm9kZXM6IHJlY29pbFZhbHVlc0ZvcktleXMkMShkb3duc3RyZWFtTm9kZXMpLFxuICAgICAgY29tcG9uZW50czogUmVjb2lsX21hcEl0ZXJhYmxlKChfc3RvcmVTdGF0ZSRub2RlVG9Db20gPSAoX3N0b3JlU3RhdGUkbm9kZVRvQ29tMiA9IHN0b3JlU3RhdGUubm9kZVRvQ29tcG9uZW50U3Vic2NyaXB0aW9ucy5nZXQoa2V5KSkgPT09IG51bGwgfHwgX3N0b3JlU3RhdGUkbm9kZVRvQ29tMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0b3JlU3RhdGUkbm9kZVRvQ29tMi52YWx1ZXMoKSkgIT09IG51bGwgJiYgX3N0b3JlU3RhdGUkbm9kZVRvQ29tICE9PSB2b2lkIDAgPyBfc3RvcmVTdGF0ZSRub2RlVG9Db20gOiBbXSwgKFtuYW1lXSkgPT4gKHtcbiAgICAgICAgbmFtZVxuICAgICAgfSkpXG4gICAgfVxuICB9O1xufSAvLyBGaW5kIGFsbCBvZiB0aGUgcmVjdXJzaXZlbHkgZGVwZW5kZW50IG5vZGVzXG5cblxuZnVuY3Rpb24gZ2V0RG93bnN0cmVhbU5vZGVzKHN0b3JlLCBzdGF0ZSwga2V5cykge1xuICBjb25zdCB2aXNpdGVkTm9kZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHZpc2l0aW5nTm9kZXMgPSBBcnJheS5mcm9tKGtleXMpO1xuICBjb25zdCBncmFwaCA9IHN0b3JlLmdldEdyYXBoKHN0YXRlLnZlcnNpb24pO1xuXG4gIGZvciAobGV0IGtleSA9IHZpc2l0aW5nTm9kZXMucG9wKCk7IGtleTsga2V5ID0gdmlzaXRpbmdOb2Rlcy5wb3AoKSkge1xuICAgIHZhciBfZ3JhcGgkbm9kZVRvTm9kZVN1YnM7XG5cbiAgICB2aXNpdGVkTm9kZXMuYWRkKGtleSk7XG4gICAgY29uc3Qgc3Vic2NyaWJlZE5vZGVzID0gKF9ncmFwaCRub2RlVG9Ob2RlU3VicyA9IGdyYXBoLm5vZGVUb05vZGVTdWJzY3JpcHRpb25zLmdldChrZXkpKSAhPT0gbnVsbCAmJiBfZ3JhcGgkbm9kZVRvTm9kZVN1YnMgIT09IHZvaWQgMCA/IF9ncmFwaCRub2RlVG9Ob2RlU3VicyA6IGVtcHR5U2V0O1xuXG4gICAgZm9yIChjb25zdCBkb3duc3RyZWFtTm9kZSBvZiBzdWJzY3JpYmVkTm9kZXMpIHtcbiAgICAgIGlmICghdmlzaXRlZE5vZGVzLmhhcyhkb3duc3RyZWFtTm9kZSkpIHtcbiAgICAgICAgdmlzaXRpbmdOb2Rlcy5wdXNoKGRvd25zdHJlYW1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmlzaXRlZE5vZGVzO1xufVxuXG52YXIgUmVjb2lsX0Z1bmN0aW9uYWxDb3JlID0ge1xuICBnZXROb2RlTG9hZGFibGUsXG4gIHBlZWtOb2RlTG9hZGFibGUsXG4gIHNldE5vZGVWYWx1ZSxcbiAgY2xlYW5VcE5vZGUsXG4gIHNldFVudmFsaWRhdGVkQXRvbVZhbHVlX0RFUFJFQ0FURUQsXG4gIHBlZWtOb2RlSW5mbyxcbiAgZ2V0RG93bnN0cmVhbU5vZGVzLFxuICBpbml0aWFsaXplTm9kZUlmTmV3VG9TdG9yZVxufTtcblxuY29uc3Qge1xuICBnZXREb3duc3RyZWFtTm9kZXM6IGdldERvd25zdHJlYW1Ob2RlcyQxLFxuICBnZXROb2RlTG9hZGFibGU6IGdldE5vZGVMb2FkYWJsZSQxLFxuICBzZXROb2RlVmFsdWU6IHNldE5vZGVWYWx1ZSQxXG59ID0gUmVjb2lsX0Z1bmN0aW9uYWxDb3JlO1xuXG5jb25zdCB7XG4gIGdldE5vZGVNYXliZTogZ2V0Tm9kZU1heWJlJDJcbn0gPSBSZWNvaWxfTm9kZTtcblxuY29uc3Qge1xuICBEZWZhdWx0VmFsdWU6IERlZmF1bHRWYWx1ZSQxLFxuICBSZWNvaWxWYWx1ZU5vdFJlYWR5OiBSZWNvaWxWYWx1ZU5vdFJlYWR5JDFcbn0gPSBSZWNvaWxfTm9kZTtcblxuY29uc3Qge1xuICBBYnN0cmFjdFJlY29pbFZhbHVlOiBBYnN0cmFjdFJlY29pbFZhbHVlJDEsXG4gIFJlY29pbFN0YXRlOiBSZWNvaWxTdGF0ZSQxLFxuICBSZWNvaWxWYWx1ZVJlYWRPbmx5OiBSZWNvaWxWYWx1ZVJlYWRPbmx5JDEsXG4gIGlzUmVjb2lsVmFsdWU6IGlzUmVjb2lsVmFsdWUkMVxufSA9IFJlY29pbF9SZWNvaWxWYWx1ZSQxO1xuXG5mdW5jdGlvbiBnZXRSZWNvaWxWYWx1ZUFzTG9hZGFibGUoc3RvcmUsIHtcbiAga2V5XG59LCB0cmVlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRUcmVlKSB7XG4gIHZhciBfc3RvcmVTdGF0ZSRuZXh0VHJlZSwgX3N0b3JlU3RhdGUkcHJldmlvdXNUO1xuXG4gIC8vIFJlYWRpbmcgZnJvbSBhbiBvbGRlciB0cmVlIGNhbiBjYXVzZSBidWdzIGJlY2F1c2UgdGhlIGRlcGVuZGVuY2llcyB0aGF0IHdlXG4gIC8vIGRpc2NvdmVyIGR1cmluZyB0aGUgcmVhZCBhcmUgbG9zdC5cbiAgY29uc3Qgc3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgaWYgKCEodHJlZVN0YXRlLnZlcnNpb24gPT09IHN0b3JlU3RhdGUuY3VycmVudFRyZWUudmVyc2lvbiB8fCB0cmVlU3RhdGUudmVyc2lvbiA9PT0gKChfc3RvcmVTdGF0ZSRuZXh0VHJlZSA9IHN0b3JlU3RhdGUubmV4dFRyZWUpID09PSBudWxsIHx8IF9zdG9yZVN0YXRlJG5leHRUcmVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RvcmVTdGF0ZSRuZXh0VHJlZS52ZXJzaW9uKSB8fCB0cmVlU3RhdGUudmVyc2lvbiA9PT0gKChfc3RvcmVTdGF0ZSRwcmV2aW91c1QgPSBzdG9yZVN0YXRlLnByZXZpb3VzVHJlZSkgPT09IG51bGwgfHwgX3N0b3JlU3RhdGUkcHJldmlvdXNUID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RvcmVTdGF0ZSRwcmV2aW91c1QudmVyc2lvbikpKSB7XG4gICAgUmVjb2lsX3JlY292ZXJhYmxlVmlvbGF0aW9uKCdUcmllZCB0byByZWFkIGZyb20gYSBkaXNjYXJkZWQgdHJlZScpO1xuICB9XG5cbiAgY29uc3QgbG9hZGFibGUgPSBnZXROb2RlTG9hZGFibGUkMShzdG9yZSwgdHJlZVN0YXRlLCBrZXkpO1xuICByZXR1cm4gbG9hZGFibGU7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QXRvbVZhbHVlV3JpdGVzKGF0b21WYWx1ZXMsIHdyaXRlcykge1xuICBjb25zdCByZXN1bHQgPSBhdG9tVmFsdWVzLmNsb25lKCk7XG4gIHdyaXRlcy5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgaWYgKHYuc3RhdGUgPT09ICdoYXNWYWx1ZScgJiYgdi5jb250ZW50cyBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSQxKSB7XG4gICAgICByZXN1bHQuZGVsZXRlKGspO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGssIHYpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHZhbHVlRnJvbVZhbHVlT3JVcGRhdGVyKHN0b3JlLCBzdGF0ZSwge1xuICBrZXlcbn0sIHZhbHVlT3JVcGRhdGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWVPclVwZGF0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVcGRhdGVyIGZvcm06IHBhc3MgaW4gdGhlIGN1cnJlbnQgdmFsdWUuIFRocm93IGlmIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgLy8gaXMgdW5hdmFpbGFibGUgKG5hbWVseSB3aGVuIHVwZGF0aW5nIGFuIGFzeW5jIHNlbGVjdG9yIHRoYXQnc1xuICAgIC8vIHBlbmRpbmcgb3IgZXJyb3JlZCk6XG4gICAgY29uc3QgY3VycmVudCA9IGdldE5vZGVMb2FkYWJsZSQxKHN0b3JlLCBzdGF0ZSwga2V5KTtcblxuICAgIGlmIChjdXJyZW50LnN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRocm93IG5ldyBSZWNvaWxWYWx1ZU5vdFJlYWR5JDEoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQuc3RhdGUgPT09ICdoYXNFcnJvcicpIHtcbiAgICAgIHRocm93IGN1cnJlbnQuY29udGVudHM7XG4gICAgfSAvLyBUIGl0c2VsZiBtYXkgYmUgYSBmdW5jdGlvbiwgc28gb3VyIHJlZmluZW1lbnQgaXMgbm90IHN1ZmZpY2llbnQ6XG5cblxuICAgIHJldHVybiB2YWx1ZU9yVXBkYXRlcihjdXJyZW50LmNvbnRlbnRzKTsgLy8gZmxvd2xpbnQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlT3JVcGRhdGVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5QWN0aW9uKHN0b3JlLCBzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ3NldCcpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWNvaWxWYWx1ZSxcbiAgICAgIHZhbHVlT3JVcGRhdGVyXG4gICAgfSA9IGFjdGlvbjtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlRnJvbVZhbHVlT3JVcGRhdGVyKHN0b3JlLCBzdGF0ZSwgcmVjb2lsVmFsdWUsIHZhbHVlT3JVcGRhdGVyKTtcbiAgICBjb25zdCB3cml0ZXMgPSBzZXROb2RlVmFsdWUkMShzdG9yZSwgc3RhdGUsIHJlY29pbFZhbHVlLmtleSwgbmV3VmFsdWUpO1xuXG4gICAgZm9yIChjb25zdCBba2V5LCBsb2FkYWJsZV0gb2Ygd3JpdGVzLmVudHJpZXMoKSkge1xuICAgICAgd3JpdGVMb2FkYWJsZVRvVHJlZVN0YXRlKHN0YXRlLCBrZXksIGxvYWRhYmxlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdzZXRMb2FkYWJsZScpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWNvaWxWYWx1ZToge1xuICAgICAgICBrZXlcbiAgICAgIH0sXG4gICAgICBsb2FkYWJsZVxuICAgIH0gPSBhY3Rpb247XG4gICAgd3JpdGVMb2FkYWJsZVRvVHJlZVN0YXRlKHN0YXRlLCBrZXksIGxvYWRhYmxlKTtcbiAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ21hcmtNb2RpZmllZCcpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWNvaWxWYWx1ZToge1xuICAgICAgICBrZXlcbiAgICAgIH1cbiAgICB9ID0gYWN0aW9uO1xuICAgIHN0YXRlLmRpcnR5QXRvbXMuYWRkKGtleSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdzZXRVbnZhbGlkYXRlZCcpIHtcbiAgICB2YXIgX25vZGUkaW52YWxpZGF0ZTtcblxuICAgIC8vIFdyaXRlIHZhbHVlIGRpcmVjdGx5IHRvIHN0YXRlIGJ5cGFzc2luZyB0aGUgTm9kZSBpbnRlcmZhY2UgYXMgdGhlIG5vZGVcbiAgICAvLyBkZWZpbml0aW9ucyBtYXkgbm90IGhhdmUgYmVlbiBsb2FkZWQgeWV0IHdoZW4gcHJvY2Vzc2luZyB0aGUgaW5pdGlhbCBzbmFwc2hvdC5cbiAgICBjb25zdCB7XG4gICAgICByZWNvaWxWYWx1ZToge1xuICAgICAgICBrZXlcbiAgICAgIH0sXG4gICAgICB1bnZhbGlkYXRlZFZhbHVlXG4gICAgfSA9IGFjdGlvbjtcbiAgICBjb25zdCBub2RlID0gZ2V0Tm9kZU1heWJlJDIoa2V5KTtcbiAgICBub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfbm9kZSRpbnZhbGlkYXRlID0gbm9kZS5pbnZhbGlkYXRlKSA9PT0gbnVsbCB8fCBfbm9kZSRpbnZhbGlkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRpbnZhbGlkYXRlLmNhbGwobm9kZSwgc3RhdGUpO1xuICAgIHN0YXRlLmF0b21WYWx1ZXMuZGVsZXRlKGtleSk7XG4gICAgc3RhdGUubm9udmFsaWRhdGVkQXRvbXMuc2V0KGtleSwgdW52YWxpZGF0ZWRWYWx1ZSk7XG4gICAgc3RhdGUuZGlydHlBdG9tcy5hZGQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBSZWNvaWxfcmVjb3ZlcmFibGVWaW9sYXRpb24oYFVua25vd24gYWN0aW9uICR7YWN0aW9uLnR5cGV9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gd3JpdGVMb2FkYWJsZVRvVHJlZVN0YXRlKHN0YXRlLCBrZXksIGxvYWRhYmxlKSB7XG4gIGlmIChsb2FkYWJsZS5zdGF0ZSA9PT0gJ2hhc1ZhbHVlJyAmJiBsb2FkYWJsZS5jb250ZW50cyBpbnN0YW5jZW9mIERlZmF1bHRWYWx1ZSQxKSB7XG4gICAgc3RhdGUuYXRvbVZhbHVlcy5kZWxldGUoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5hdG9tVmFsdWVzLnNldChrZXksIGxvYWRhYmxlKTtcbiAgfVxuXG4gIHN0YXRlLmRpcnR5QXRvbXMuYWRkKGtleSk7XG4gIHN0YXRlLm5vbnZhbGlkYXRlZEF0b21zLmRlbGV0ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBhcHBseUFjdGlvbnNUb1N0b3JlKHN0b3JlLCBhY3Rpb25zKSB7XG4gIHN0b3JlLnJlcGxhY2VTdGF0ZShzdGF0ZSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBjb3B5VHJlZVN0YXRlKHN0YXRlKTtcblxuICAgIGZvciAoY29uc3QgYWN0aW9uIG9mIGFjdGlvbnMpIHtcbiAgICAgIGFwcGx5QWN0aW9uKHN0b3JlLCBuZXdTdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBpbnZhbGlkYXRlRG93bnN0cmVhbXMoc3RvcmUsIG5ld1N0YXRlKTtcbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBxdWV1ZU9yUGVyZm9ybVN0YXRlVXBkYXRlKHN0b3JlLCBhY3Rpb24pIHtcbiAgaWYgKGJhdGNoU3RhY2subGVuZ3RoKSB7XG4gICAgY29uc3QgYWN0aW9uc0J5U3RvcmUgPSBiYXRjaFN0YWNrW2JhdGNoU3RhY2subGVuZ3RoIC0gMV07XG4gICAgbGV0IGFjdGlvbnMgPSBhY3Rpb25zQnlTdG9yZS5nZXQoc3RvcmUpO1xuXG4gICAgaWYgKCFhY3Rpb25zKSB7XG4gICAgICBhY3Rpb25zQnlTdG9yZS5zZXQoc3RvcmUsIGFjdGlvbnMgPSBbXSk7XG4gICAgfVxuXG4gICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgYXBwbHlBY3Rpb25zVG9TdG9yZShzdG9yZSwgW2FjdGlvbl0pO1xuICB9XG59XG5cbmNvbnN0IGJhdGNoU3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gYmF0Y2hTdGFydCgpIHtcbiAgY29uc3QgYWN0aW9uc0J5U3RvcmUgPSBuZXcgTWFwKCk7XG4gIGJhdGNoU3RhY2sucHVzaChhY3Rpb25zQnlTdG9yZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBbc3RvcmUsIGFjdGlvbnNdIG9mIGFjdGlvbnNCeVN0b3JlKSB7XG4gICAgICBhcHBseUFjdGlvbnNUb1N0b3JlKHN0b3JlLCBhY3Rpb25zKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb3BwZWQgPSBiYXRjaFN0YWNrLnBvcCgpO1xuXG4gICAgaWYgKHBvcHBlZCAhPT0gYWN0aW9uc0J5U3RvcmUpIHtcbiAgICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbignSW5jb3JyZWN0IG9yZGVyIG9mIGJhdGNoIHBvcHBpbmcnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlUcmVlU3RhdGUoc3RhdGUpIHtcbiAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgYXRvbVZhbHVlczogc3RhdGUuYXRvbVZhbHVlcy5jbG9uZSgpLFxuICAgIG5vbnZhbGlkYXRlZEF0b21zOiBzdGF0ZS5ub252YWxpZGF0ZWRBdG9tcy5jbG9uZSgpLFxuICAgIGRpcnR5QXRvbXM6IG5ldyBTZXQoc3RhdGUuZGlydHlBdG9tcylcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YWxpZGF0ZURvd25zdHJlYW1zKHN0b3JlLCBzdGF0ZSkge1xuICAvLyBJbmZvcm0gYW55IG5vZGVzIHRoYXQgd2VyZSBjaGFuZ2VkIG9yIGRvd25zdHJlYW0gb2YgY2hhbmdlcyBzbyB0aGF0IHRoZXlcbiAgLy8gY2FuIGNsZWFyIG91dCBhbnkgY2FjaGVzIGFzIG5lZWRlZCBkdWUgdG8gdGhlIHVwZGF0ZTpcbiAgY29uc3QgZG93bnN0cmVhbXMgPSBnZXREb3duc3RyZWFtTm9kZXMkMShzdG9yZSwgc3RhdGUsIHN0YXRlLmRpcnR5QXRvbXMpO1xuXG4gIGZvciAoY29uc3Qga2V5IG9mIGRvd25zdHJlYW1zKSB7XG4gICAgdmFyIF9nZXROb2RlTWF5YmUsIF9nZXROb2RlTWF5YmUkaW52YWxpZDtcblxuICAgIChfZ2V0Tm9kZU1heWJlID0gZ2V0Tm9kZU1heWJlJDIoa2V5KSkgPT09IG51bGwgfHwgX2dldE5vZGVNYXliZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9nZXROb2RlTWF5YmUkaW52YWxpZCA9IF9nZXROb2RlTWF5YmUuaW52YWxpZGF0ZSkgPT09IG51bGwgfHwgX2dldE5vZGVNYXliZSRpbnZhbGlkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZ2V0Tm9kZU1heWJlJGludmFsaWQuY2FsbChfZ2V0Tm9kZU1heWJlLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVjb2lsVmFsdWUoc3RvcmUsIHJlY29pbFZhbHVlLCB2YWx1ZU9yVXBkYXRlcikge1xuICBxdWV1ZU9yUGVyZm9ybVN0YXRlVXBkYXRlKHN0b3JlLCB7XG4gICAgdHlwZTogJ3NldCcsXG4gICAgcmVjb2lsVmFsdWUsXG4gICAgdmFsdWVPclVwZGF0ZXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFJlY29pbFZhbHVlTG9hZGFibGUoc3RvcmUsIHJlY29pbFZhbHVlLCBsb2FkYWJsZSkge1xuICBpZiAobG9hZGFibGUgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUkMSkge1xuICAgIHJldHVybiBzZXRSZWNvaWxWYWx1ZShzdG9yZSwgcmVjb2lsVmFsdWUsIGxvYWRhYmxlKTtcbiAgfVxuXG4gIHF1ZXVlT3JQZXJmb3JtU3RhdGVVcGRhdGUoc3RvcmUsIHtcbiAgICB0eXBlOiAnc2V0TG9hZGFibGUnLFxuICAgIHJlY29pbFZhbHVlLFxuICAgIGxvYWRhYmxlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXJrUmVjb2lsVmFsdWVNb2RpZmllZChzdG9yZSwgcmVjb2lsVmFsdWUpIHtcbiAgcXVldWVPclBlcmZvcm1TdGF0ZVVwZGF0ZShzdG9yZSwge1xuICAgIHR5cGU6ICdtYXJrTW9kaWZpZWQnLFxuICAgIHJlY29pbFZhbHVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRVbnZhbGlkYXRlZFJlY29pbFZhbHVlKHN0b3JlLCByZWNvaWxWYWx1ZSwgdW52YWxpZGF0ZWRWYWx1ZSkge1xuICBxdWV1ZU9yUGVyZm9ybVN0YXRlVXBkYXRlKHN0b3JlLCB7XG4gICAgdHlwZTogJ3NldFVudmFsaWRhdGVkJyxcbiAgICByZWNvaWxWYWx1ZSxcbiAgICB1bnZhbGlkYXRlZFZhbHVlXG4gIH0pO1xufVxuXG5sZXQgc3Vic2NyaXB0aW9uSUQgPSAwO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmVUb1JlY29pbFZhbHVlKHN0b3JlLCB7XG4gIGtleVxufSwgY2FsbGJhY2ssIGNvbXBvbmVudERlYnVnTmFtZSA9IG51bGwpIHtcbiAgY29uc3Qgc3ViSUQgPSBzdWJzY3JpcHRpb25JRCsrO1xuICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICBpZiAoIXN0b3JlU3RhdGUubm9kZVRvQ29tcG9uZW50U3Vic2NyaXB0aW9ucy5oYXMoa2V5KSkge1xuICAgIHN0b3JlU3RhdGUubm9kZVRvQ29tcG9uZW50U3Vic2NyaXB0aW9ucy5zZXQoa2V5LCBuZXcgTWFwKCkpO1xuICB9XG5cbiAgUmVjb2lsX251bGx0aHJvd3Moc3RvcmVTdGF0ZS5ub2RlVG9Db21wb25lbnRTdWJzY3JpcHRpb25zLmdldChrZXkpKS5zZXQoc3ViSUQsIFtjb21wb25lbnREZWJ1Z05hbWUgIT09IG51bGwgJiYgY29tcG9uZW50RGVidWdOYW1lICE9PSB2b2lkIDAgPyBjb21wb25lbnREZWJ1Z05hbWUgOiAnPG5vdCBjYXB0dXJlZD4nLCBjYWxsYmFja10pO1xuICByZXR1cm4ge1xuICAgIHJlbGVhc2U6ICgpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgY29uc3Qgc3VicyA9IHN0b3JlU3RhdGUubm9kZVRvQ29tcG9uZW50U3Vic2NyaXB0aW9ucy5nZXQoa2V5KTtcblxuICAgICAgaWYgKHN1YnMgPT09IHVuZGVmaW5lZCB8fCAhc3Vicy5oYXMoc3ViSUQpKSB7XG4gICAgICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbihgU3Vic2NyaXB0aW9uIG1pc3NpbmcgYXQgcmVsZWFzZSB0aW1lIGZvciBhdG9tICR7a2V5fS4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWNvaWwuYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3Vicy5kZWxldGUoc3ViSUQpO1xuXG4gICAgICBpZiAoc3Vicy5zaXplID09PSAwKSB7XG4gICAgICAgIHN0b3JlU3RhdGUubm9kZVRvQ29tcG9uZW50U3Vic2NyaXB0aW9ucy5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciBSZWNvaWxfUmVjb2lsVmFsdWVJbnRlcmZhY2UgPSB7XG4gIFJlY29pbFZhbHVlUmVhZE9ubHk6IFJlY29pbFZhbHVlUmVhZE9ubHkkMSxcbiAgQWJzdHJhY3RSZWNvaWxWYWx1ZTogQWJzdHJhY3RSZWNvaWxWYWx1ZSQxLFxuICBSZWNvaWxTdGF0ZTogUmVjb2lsU3RhdGUkMSxcbiAgZ2V0UmVjb2lsVmFsdWVBc0xvYWRhYmxlLFxuICBzZXRSZWNvaWxWYWx1ZSxcbiAgc2V0UmVjb2lsVmFsdWVMb2FkYWJsZSxcbiAgbWFya1JlY29pbFZhbHVlTW9kaWZpZWQsXG4gIHNldFVudmFsaWRhdGVkUmVjb2lsVmFsdWUsXG4gIHN1YnNjcmliZVRvUmVjb2lsVmFsdWUsXG4gIGlzUmVjb2lsVmFsdWU6IGlzUmVjb2lsVmFsdWUkMSxcbiAgYXBwbHlBdG9tVmFsdWVXcml0ZXMsXG4gIC8vIFRPRE8gUmVtb3ZlIGV4cG9ydCB3aGVuIGRlcHJlY2F0aW5nIGluaXRpYWxTdG9yZVN0YXRlX0RFUFJFQ0FURUQgaW4gUmVjb2lsUm9vdFxuICBiYXRjaFN0YXJ0LFxuICBpbnZhbGlkYXRlRG93bnN0cmVhbXNfRk9SX1RFU1RJTkc6IGludmFsaWRhdGVEb3duc3RyZWFtc1xufTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICpcbiAqIFRoaXMgaXMgdG8gZXhwb3J0IGVzc3RpZW50aWFsIGZ1bmN0aW9ucyBmcm9tIHJlYWN0LWRvbVxuICogZm9yIG91ciB3ZWIgYnVpbGRcbiAqL1xuY29uc3Qge1xuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlc1xufSA9IHJlYWN0RG9tO1xuXG52YXIgUmVhY3RCYXRjaGVkVXBkYXRlcyA9IHtcbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXNcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqXG4gKiBUaGlzIGlzIHRvIGV4cG9ydCBlc3N0aWVudGlhbCBmdW5jdGlvbnMgZnJvbSByZWFjdC1kb21cbiAqIGZvciBvdXIgd2ViIGJ1aWxkXG4gKi9cbi8vIEBmYi1vbmx5OiBjb25zdCB7dW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXN9ID0gcmVxdWlyZSgnUmVhY3RET01Db21ldCcpO1xuY29uc3Qge1xuICB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczogdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMkMVxufSA9IFJlYWN0QmF0Y2hlZFVwZGF0ZXM7IC8vIEBvc3Mtb25seVxuXG5cbnZhciBSZWNvaWxfUmVhY3RCYXRjaGVkVXBkYXRlcyA9IHtcbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzJDFcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuY29uc3Qge1xuICBiYXRjaFN0YXJ0OiBiYXRjaFN0YXJ0JDFcbn0gPSBSZWNvaWxfUmVjb2lsVmFsdWVJbnRlcmZhY2U7XG5cbmNvbnN0IHtcbiAgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzJDJcbn0gPSBSZWNvaWxfUmVhY3RCYXRjaGVkVXBkYXRlcztcblxubGV0IGJhdGNoZXIgPSB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyQyOyAvLyBmbG93bGludC1uZXh0LWxpbmUgdW5jbGVhci10eXBlOm9mZlxuXG4vKipcbiAqIFNldHMgdGhlIHByb3ZpZGVkIGJhdGNoZXIgZnVuY3Rpb24gYXMgdGhlIGJhdGNoZXIgZnVuY3Rpb24gdXNlZCBieSBSZWNvaWwuXG4gKlxuICogU2V0IHRoZSBiYXRjaGVyIHRvIGEgY3VzdG9tIGJhdGNoZXIgZm9yIHlvdXIgcmVuZGVyZXIsXG4gKiBpZiB5b3UgdXNlIGEgcmVuZGVyZXIgb3RoZXIgdGhhbiBSZWFjdCBET00gb3IgUmVhY3QgTmF0aXZlLlxuICovXG5jb25zdCBzZXRCYXRjaGVyID0gbmV3QmF0Y2hlciA9PiB7XG4gIGJhdGNoZXIgPSBuZXdCYXRjaGVyO1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBiYXRjaGVyIGZ1bmN0aW9uLlxuICovXG5cblxuY29uc3QgZ2V0QmF0Y2hlciA9ICgpID0+IGJhdGNoZXI7XG4vKipcbiAqIENhbGxzIHRoZSBjdXJyZW50IGJhdGNoZXIgZnVuY3Rpb24gYW5kIHBhc3NlcyB0aGVcbiAqIHByb3ZpZGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5cblxuY29uc3QgYmF0Y2hVcGRhdGVzID0gY2FsbGJhY2sgPT4ge1xuICBiYXRjaGVyKCgpID0+IHtcbiAgICBsZXQgYmF0Y2hFbmQgPSAoKSA9PiB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgYmF0Y2hFbmQgPSBiYXRjaFN0YXJ0JDEoKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGJhdGNoRW5kKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBSZWNvaWxfQmF0Y2hpbmcgPSB7XG4gIGdldEJhdGNoZXIsXG4gIHNldEJhdGNoZXIsXG4gIGJhdGNoVXBkYXRlc1xufTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG5cbmZ1bmN0aW9uIGVucXVldWVFeGVjdXRpb24ocywgZikge1xuICBmKCk7XG59XG5cbnZhciBSZWNvaWxfUXVldWUgPSB7XG4gIGVucXVldWVFeGVjdXRpb25cbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgc2V0IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2YWx1ZXMgZnJvbSB0aGUgZmlyc3Qgc2V0IHRoYXQgYXJlIG5vdFxuICogcHJlc2VudCBpbiBhbnkgb2YgdGhlIHN1YnNlcXVlbnQgc2V0cy5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIHdyaXR0ZW4gcHJvY2VkdXJhbGx5IChpLmUuLCB3aXRob3V0IGZpbHRlclNldCkgZm9yIHBlcmZvcm1hbnRcbiAqIHVzZSBpbiB0aWdodCBsb29wcy5cbiAqL1xuXG5mdW5jdGlvbiBkaWZmZXJlbmNlU2V0cyhzZXQsIC4uLnNldHNXaXRoVmFsdWVzVG9SZW1vdmUpIHtcbiAgY29uc3QgcmV0ID0gbmV3IFNldCgpO1xuXG4gIEZJUlNUOiBmb3IgKGNvbnN0IHZhbHVlIG9mIHNldCkge1xuICAgIGZvciAoY29uc3Qgb3RoZXJTZXQgb2Ygc2V0c1dpdGhWYWx1ZXNUb1JlbW92ZSkge1xuICAgICAgaWYgKG90aGVyU2V0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgY29udGludWUgRklSU1Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0LmFkZCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG52YXIgUmVjb2lsX2RpZmZlcmVuY2VTZXRzID0gZGlmZmVyZW5jZVNldHM7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IE1hcCBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFzIHRoZSBvcmlnaW5hbCwgYnV0IHdpdGggdGhlXG4gKiB2YWx1ZXMgcmVwbGFjZWQgd2l0aCB0aGUgb3V0cHV0IG9mIHRoZSBnaXZlbiBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBtYXBNYXAobWFwLCBjYWxsYmFjaykge1xuICBjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XG4gIG1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgcmVzdWx0LnNldChrZXksIGNhbGxiYWNrKHZhbHVlLCBrZXkpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBSZWNvaWxfbWFwTWFwID0gbWFwTWFwO1xuXG5mdW5jdGlvbiBncmFwaCgpIHtcbiAgcmV0dXJuIHtcbiAgICBub2RlRGVwczogbmV3IE1hcCgpLFxuICAgIG5vZGVUb05vZGVTdWJzY3JpcHRpb25zOiBuZXcgTWFwKClcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xvbmVHcmFwaChncmFwaCkge1xuICByZXR1cm4ge1xuICAgIG5vZGVEZXBzOiBSZWNvaWxfbWFwTWFwKGdyYXBoLm5vZGVEZXBzLCBzID0+IG5ldyBTZXQocykpLFxuICAgIG5vZGVUb05vZGVTdWJzY3JpcHRpb25zOiBSZWNvaWxfbWFwTWFwKGdyYXBoLm5vZGVUb05vZGVTdWJzY3JpcHRpb25zLCBzID0+IG5ldyBTZXQocykpXG4gIH07XG59IC8vIE5vdGUgdGhhdCB0aGlzIG92ZXJ3cml0ZXMgdGhlIGRlcHMgb2YgZXhpc3Rpbmcgbm9kZXMsIHJhdGhlciB0aGFuIHVuaW9uaW5nXG4vLyB0aGUgbmV3IGRlcHMgd2l0aCB0aGUgb2xkIGRlcHMuXG5cblxuZnVuY3Rpb24gbWVyZ2VEZXBlbmRlbmN5TWFwSW50b0dyYXBoKGRlcHMsIGdyYXBoLCAvLyBJZiBvbGRlckdyYXBoIGlzIGdpdmVuIHRoZW4gd2Ugd2lsbCBub3Qgb3ZlcndyaXRlIGNoYW5nZXMgbWFkZSB0byB0aGUgZ2l2ZW5cbi8vIGdyYXBoIGNvbXBhcmVkIHdpdGggb2xkZXJHcmFwaDpcbm9sZGVyR3JhcGgpIHtcbiAgY29uc3Qge1xuICAgIG5vZGVEZXBzLFxuICAgIG5vZGVUb05vZGVTdWJzY3JpcHRpb25zXG4gIH0gPSBncmFwaDtcbiAgZGVwcy5mb3JFYWNoKCh1cHN0cmVhbXMsIGRvd25zdHJlYW0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1Vwc3RyZWFtcyA9IG5vZGVEZXBzLmdldChkb3duc3RyZWFtKTtcblxuICAgIGlmIChleGlzdGluZ1Vwc3RyZWFtcyAmJiBvbGRlckdyYXBoICYmIGV4aXN0aW5nVXBzdHJlYW1zICE9PSBvbGRlckdyYXBoLm5vZGVEZXBzLmdldChkb3duc3RyZWFtKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVXBkYXRlIG5vZGVEZXBzOlxuXG5cbiAgICBub2RlRGVwcy5zZXQoZG93bnN0cmVhbSwgbmV3IFNldCh1cHN0cmVhbXMpKTsgLy8gQWRkIG5ldyBkZXBzIHRvIG5vZGVUb05vZGVTdWJzY3JpcHRpb25zOlxuXG4gICAgY29uc3QgYWRkZWRVcHN0cmVhbXMgPSBleGlzdGluZ1Vwc3RyZWFtcyA9PSBudWxsID8gdXBzdHJlYW1zIDogUmVjb2lsX2RpZmZlcmVuY2VTZXRzKHVwc3RyZWFtcywgZXhpc3RpbmdVcHN0cmVhbXMpO1xuICAgIGFkZGVkVXBzdHJlYW1zLmZvckVhY2godXBzdHJlYW0gPT4ge1xuICAgICAgaWYgKCFub2RlVG9Ob2RlU3Vic2NyaXB0aW9ucy5oYXModXBzdHJlYW0pKSB7XG4gICAgICAgIG5vZGVUb05vZGVTdWJzY3JpcHRpb25zLnNldCh1cHN0cmVhbSwgbmV3IFNldCgpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBSZWNvaWxfbnVsbHRocm93cyhub2RlVG9Ob2RlU3Vic2NyaXB0aW9ucy5nZXQodXBzdHJlYW0pKTtcbiAgICAgIGV4aXN0aW5nLmFkZChkb3duc3RyZWFtKTtcbiAgICB9KTsgLy8gUmVtb3ZlIHJlbW92ZWQgZGVwcyBmcm9tIG5vZGVUb05vZGVTdWJzY3JpcHRpb25zOlxuXG4gICAgaWYgKGV4aXN0aW5nVXBzdHJlYW1zKSB7XG4gICAgICBjb25zdCByZW1vdmVkVXBzdHJlYW1zID0gUmVjb2lsX2RpZmZlcmVuY2VTZXRzKGV4aXN0aW5nVXBzdHJlYW1zLCB1cHN0cmVhbXMpO1xuICAgICAgcmVtb3ZlZFVwc3RyZWFtcy5mb3JFYWNoKHVwc3RyZWFtID0+IHtcbiAgICAgICAgaWYgKCFub2RlVG9Ob2RlU3Vic2NyaXB0aW9ucy5oYXModXBzdHJlYW0pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBSZWNvaWxfbnVsbHRocm93cyhub2RlVG9Ob2RlU3Vic2NyaXB0aW9ucy5nZXQodXBzdHJlYW0pKTtcbiAgICAgICAgZXhpc3RpbmcuZGVsZXRlKGRvd25zdHJlYW0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZy5zaXplID09PSAwKSB7XG4gICAgICAgICAgbm9kZVRvTm9kZVN1YnNjcmlwdGlvbnMuZGVsZXRlKHVwc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZURlcGVuZGVuY3lNYXBUb1N0b3JlKGRlcGVuZGVuY3lNYXAsIHN0b3JlLCB2ZXJzaW9uKSB7XG4gIHZhciBfc3RvcmVTdGF0ZSRuZXh0VHJlZSwgX3N0b3JlU3RhdGUkcHJldmlvdXNULCBfc3RvcmVTdGF0ZSRwcmV2aW91c1QyLCBfc3RvcmVTdGF0ZSRwcmV2aW91c1QzO1xuXG4gIGNvbnN0IHN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gIGlmICghKHZlcnNpb24gPT09IHN0b3JlU3RhdGUuY3VycmVudFRyZWUudmVyc2lvbiB8fCB2ZXJzaW9uID09PSAoKF9zdG9yZVN0YXRlJG5leHRUcmVlID0gc3RvcmVTdGF0ZS5uZXh0VHJlZSkgPT09IG51bGwgfHwgX3N0b3JlU3RhdGUkbmV4dFRyZWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdG9yZVN0YXRlJG5leHRUcmVlLnZlcnNpb24pIHx8IHZlcnNpb24gPT09ICgoX3N0b3JlU3RhdGUkcHJldmlvdXNUID0gc3RvcmVTdGF0ZS5wcmV2aW91c1RyZWUpID09PSBudWxsIHx8IF9zdG9yZVN0YXRlJHByZXZpb3VzVCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0b3JlU3RhdGUkcHJldmlvdXNULnZlcnNpb24pKSkge1xuICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbignVHJpZWQgdG8gc2F2ZSBkZXBlbmRlbmNpZXMgdG8gYSBkaXNjYXJkZWQgdHJlZScpO1xuICB9IC8vIE1lcmdlIHRoZSBkZXBlbmRlbmNpZXMgZGlzY292ZXJlZCBpbnRvIHRoZSBzdG9yZSdzIGRlcGVuZGVuY3kgbWFwXG4gIC8vIGZvciB0aGUgdmVyc2lvbiB0aGF0IHdhcyByZWFkOlxuXG5cbiAgY29uc3QgZ3JhcGggPSBzdG9yZS5nZXRHcmFwaCh2ZXJzaW9uKTtcbiAgbWVyZ2VEZXBlbmRlbmN5TWFwSW50b0dyYXBoKGRlcGVuZGVuY3lNYXAsIGdyYXBoKTsgLy8gSWYgdGhpcyB2ZXJzaW9uIGlzIG5vdCB0aGUgbGF0ZXN0IHZlcnNpb24sIGFsc28gd3JpdGUgdGhlc2UgZGVwZW5kZW5jaWVzXG4gIC8vIGludG8gbGF0ZXIgdmVyc2lvbnMgaWYgdGhleSBkb24ndCBhbHJlYWR5IGhhdmUgdGhlaXIgb3duOlxuXG4gIGlmICh2ZXJzaW9uID09PSAoKF9zdG9yZVN0YXRlJHByZXZpb3VzVDIgPSBzdG9yZVN0YXRlLnByZXZpb3VzVHJlZSkgPT09IG51bGwgfHwgX3N0b3JlU3RhdGUkcHJldmlvdXNUMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0b3JlU3RhdGUkcHJldmlvdXNUMi52ZXJzaW9uKSkge1xuICAgIGNvbnN0IGN1cnJlbnRHcmFwaCA9IHN0b3JlLmdldEdyYXBoKHN0b3JlU3RhdGUuY3VycmVudFRyZWUudmVyc2lvbik7XG4gICAgbWVyZ2VEZXBlbmRlbmN5TWFwSW50b0dyYXBoKGRlcGVuZGVuY3lNYXAsIGN1cnJlbnRHcmFwaCwgZ3JhcGgpO1xuICB9XG5cbiAgaWYgKHZlcnNpb24gPT09ICgoX3N0b3JlU3RhdGUkcHJldmlvdXNUMyA9IHN0b3JlU3RhdGUucHJldmlvdXNUcmVlKSA9PT0gbnVsbCB8fCBfc3RvcmVTdGF0ZSRwcmV2aW91c1QzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RvcmVTdGF0ZSRwcmV2aW91c1QzLnZlcnNpb24pIHx8IHZlcnNpb24gPT09IHN0b3JlU3RhdGUuY3VycmVudFRyZWUudmVyc2lvbikge1xuICAgIHZhciBfc3RvcmVTdGF0ZSRuZXh0VHJlZTI7XG5cbiAgICBjb25zdCBuZXh0VmVyc2lvbiA9IChfc3RvcmVTdGF0ZSRuZXh0VHJlZTIgPSBzdG9yZVN0YXRlLm5leHRUcmVlKSA9PT0gbnVsbCB8fCBfc3RvcmVTdGF0ZSRuZXh0VHJlZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdG9yZVN0YXRlJG5leHRUcmVlMi52ZXJzaW9uO1xuXG4gICAgaWYgKG5leHRWZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG5leHRHcmFwaCA9IHN0b3JlLmdldEdyYXBoKG5leHRWZXJzaW9uKTtcbiAgICAgIG1lcmdlRGVwZW5kZW5jeU1hcEludG9HcmFwaChkZXBlbmRlbmN5TWFwLCBuZXh0R3JhcGgsIGdyYXBoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEZXBzSW50b0RlcGVuZGVuY3lNYXAoZnJvbSwgaW50bykge1xuICBmcm9tLmZvckVhY2goKHVwc3RyZWFtRGVwcywgZG93bnN0cmVhbU5vZGUpID0+IHtcbiAgICBpZiAoIWludG8uaGFzKGRvd25zdHJlYW1Ob2RlKSkge1xuICAgICAgaW50by5zZXQoZG93bnN0cmVhbU5vZGUsIG5ldyBTZXQoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVwcyA9IFJlY29pbF9udWxsdGhyb3dzKGludG8uZ2V0KGRvd25zdHJlYW1Ob2RlKSk7XG4gICAgdXBzdHJlYW1EZXBzLmZvckVhY2goZGVwID0+IGRlcHMuYWRkKGRlcCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVG9EZXBlbmRlbmN5TWFwKGRvd25zdHJlYW0sIHVwc3RyZWFtLCBkZXBlbmRlbmN5TWFwKSB7XG4gIGlmICghZGVwZW5kZW5jeU1hcC5oYXMoZG93bnN0cmVhbSkpIHtcbiAgICBkZXBlbmRlbmN5TWFwLnNldChkb3duc3RyZWFtLCBuZXcgU2V0KCkpO1xuICB9XG5cbiAgUmVjb2lsX251bGx0aHJvd3MoZGVwZW5kZW5jeU1hcC5nZXQoZG93bnN0cmVhbSkpLmFkZCh1cHN0cmVhbSk7XG59XG5cbnZhciBSZWNvaWxfR3JhcGggPSB7XG4gIGFkZFRvRGVwZW5kZW5jeU1hcCxcbiAgY2xvbmVHcmFwaCxcbiAgZ3JhcGgsXG4gIG1lcmdlRGVwc0ludG9EZXBlbmRlbmN5TWFwLFxuICBzYXZlRGVwZW5kZW5jeU1hcFRvU3RvcmVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgaGFtdF8xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcbi8qKlxuICAgIEBmaWxlT3ZlcnZpZXcgSGFzaCBBcnJheSBNYXBwZWQgVHJpZS5cblxuICAgIENvZGUgYmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9leGNsaXB5L3BkYXRhXG4qL1xuXG5cbnZhciBoYW10ID0ge307IC8vIGV4cG9ydFxuXG4vKiBDb25maWd1cmF0aW9uXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgU0laRSA9IDU7XG52YXIgQlVDS0VUX1NJWkUgPSBNYXRoLnBvdygyLCBTSVpFKTtcbnZhciBNQVNLID0gQlVDS0VUX1NJWkUgLSAxO1xudmFyIE1BWF9JTkRFWF9OT0RFID0gQlVDS0VUX1NJWkUgLyAyO1xudmFyIE1JTl9BUlJBWV9OT0RFID0gQlVDS0VUX1NJWkUgLyA0O1xuLypcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBub3RoaW5nID0ge307XG5cbnZhciBjb25zdGFudCA9IGZ1bmN0aW9uIGNvbnN0YW50KHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn07XG4vKipcbiAgICBHZXQgMzIgYml0IGhhc2ggb2Ygc3RyaW5nLlxuXG4gICAgQmFzZWQgb246XG4gICAgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83NjE2NDYxL2dlbmVyYXRlLWEtaGFzaC1mcm9tLXN0cmluZy1pbi1qYXZhc2NyaXB0LWpxdWVyeVxuKi9cblxuXG52YXIgaGFzaCA9IGhhbXQuaGFzaCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzdHIpO1xuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHJldHVybiBzdHI7XG4gIGlmICh0eXBlICE9PSAnc3RyaW5nJykgc3RyICs9ICcnO1xuICB2YXIgaGFzaCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGMgfCAwO1xuICB9XG5cbiAgcmV0dXJuIGhhc2g7XG59O1xuLyogQml0IE9wc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gICAgSGFtbWluZyB3ZWlnaHQuXG5cbiAgICBUYWtlbiBmcm9tOiBodHRwOi8vanNwZXJmLmNvbS9oYW1taW5nLXdlaWdodFxuKi9cblxuXG52YXIgcG9wY291bnQgPSBmdW5jdGlvbiBwb3Bjb3VudCh4KSB7XG4gIHggLT0geCA+PiAxICYgMHg1NTU1NTU1NTtcbiAgeCA9ICh4ICYgMHgzMzMzMzMzMykgKyAoeCA+PiAyICYgMHgzMzMzMzMzMyk7XG4gIHggPSB4ICsgKHggPj4gNCkgJiAweDBmMGYwZjBmO1xuICB4ICs9IHggPj4gODtcbiAgeCArPSB4ID4+IDE2O1xuICByZXR1cm4geCAmIDB4N2Y7XG59O1xuXG52YXIgaGFzaEZyYWdtZW50ID0gZnVuY3Rpb24gaGFzaEZyYWdtZW50KHNoaWZ0LCBoKSB7XG4gIHJldHVybiBoID4+PiBzaGlmdCAmIE1BU0s7XG59O1xuXG52YXIgdG9CaXRtYXAgPSBmdW5jdGlvbiB0b0JpdG1hcCh4KSB7XG4gIHJldHVybiAxIDw8IHg7XG59O1xuXG52YXIgZnJvbUJpdG1hcCA9IGZ1bmN0aW9uIGZyb21CaXRtYXAoYml0bWFwLCBiaXQpIHtcbiAgcmV0dXJuIHBvcGNvdW50KGJpdG1hcCAmIGJpdCAtIDEpO1xufTtcbi8qIEFycmF5IE9wc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gICAgU2V0IGEgdmFsdWUgaW4gYW4gYXJyYXkuXG5cbiAgICBAcGFyYW0gbXV0YXRlIFNob3VsZCB0aGUgaW5wdXQgYXJyYXkgYmUgbXV0YXRlZD9cbiAgICBAcGFyYW0gYXQgSW5kZXggdG8gY2hhbmdlLlxuICAgIEBwYXJhbSB2IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBhcnIgQXJyYXkuXG4qL1xuXG5cbnZhciBhcnJheVVwZGF0ZSA9IGZ1bmN0aW9uIGFycmF5VXBkYXRlKG11dGF0ZSwgYXQsIHYsIGFycikge1xuICB2YXIgb3V0ID0gYXJyO1xuXG4gIGlmICghbXV0YXRlKSB7XG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgb3V0ID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBvdXRbaV0gPSBhcnJbaV07XG4gICAgfVxuICB9XG5cbiAgb3V0W2F0XSA9IHY7XG4gIHJldHVybiBvdXQ7XG59O1xuLyoqXG4gICAgUmVtb3ZlIGEgdmFsdWUgZnJvbSBhbiBhcnJheS5cblxuICAgIEBwYXJhbSBtdXRhdGUgU2hvdWxkIHRoZSBpbnB1dCBhcnJheSBiZSBtdXRhdGVkP1xuICAgIEBwYXJhbSBhdCBJbmRleCB0byByZW1vdmUuXG4gICAgQHBhcmFtIGFyciBBcnJheS5cbiovXG5cblxudmFyIGFycmF5U3BsaWNlT3V0ID0gZnVuY3Rpb24gYXJyYXlTcGxpY2VPdXQobXV0YXRlLCBhdCwgYXJyKSB7XG4gIHZhciBuZXdMZW4gPSBhcnIubGVuZ3RoIC0gMTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgZyA9IDA7XG4gIHZhciBvdXQgPSBhcnI7XG5cbiAgaWYgKG11dGF0ZSkge1xuICAgIGkgPSBnID0gYXQ7XG4gIH0gZWxzZSB7XG4gICAgb3V0ID0gbmV3IEFycmF5KG5ld0xlbik7XG5cbiAgICB3aGlsZSAoaSA8IGF0KSB7XG4gICAgICBvdXRbZysrXSA9IGFycltpKytdO1xuICAgIH1cbiAgfVxuXG4gICsraTtcblxuICB3aGlsZSAoaSA8PSBuZXdMZW4pIHtcbiAgICBvdXRbZysrXSA9IGFycltpKytdO1xuICB9XG5cbiAgaWYgKG11dGF0ZSkge1xuICAgIG91dC5sZW5ndGggPSBuZXdMZW47XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcbi8qKlxuICAgIEluc2VydCBhIHZhbHVlIGludG8gYW4gYXJyYXkuXG5cbiAgICBAcGFyYW0gbXV0YXRlIFNob3VsZCB0aGUgaW5wdXQgYXJyYXkgYmUgbXV0YXRlZD9cbiAgICBAcGFyYW0gYXQgSW5kZXggdG8gaW5zZXJ0IGF0LlxuICAgIEBwYXJhbSB2IFZhbHVlIHRvIGluc2VydCxcbiAgICBAcGFyYW0gYXJyIEFycmF5LlxuKi9cblxuXG52YXIgYXJyYXlTcGxpY2VJbiA9IGZ1bmN0aW9uIGFycmF5U3BsaWNlSW4obXV0YXRlLCBhdCwgdiwgYXJyKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGlmIChtdXRhdGUpIHtcbiAgICB2YXIgX2kgPSBsZW47XG5cbiAgICB3aGlsZSAoX2kgPj0gYXQpIHtcbiAgICAgIGFycltfaS0tXSA9IGFycltfaV07XG4gICAgfVxuXG4gICAgYXJyW2F0XSA9IHY7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIHZhciBpID0gMCxcbiAgICAgIGcgPSAwO1xuICB2YXIgb3V0ID0gbmV3IEFycmF5KGxlbiArIDEpO1xuXG4gIHdoaWxlIChpIDwgYXQpIHtcbiAgICBvdXRbZysrXSA9IGFycltpKytdO1xuICB9XG5cbiAgb3V0W2F0XSA9IHY7XG5cbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICBvdXRbKytnXSA9IGFycltpKytdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG4vKiBOb2RlIFN0cnVjdHVyZXNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxudmFyIExFQUYgPSAxO1xudmFyIENPTExJU0lPTiA9IDI7XG52YXIgSU5ERVggPSAzO1xudmFyIEFSUkFZID0gNDtcbi8qKlxuICAgIEVtcHR5IG5vZGUuXG4qL1xuXG52YXIgZW1wdHkgPSB7XG4gIF9faGFtdF9pc0VtcHR5OiB0cnVlXG59O1xuXG52YXIgaXNFbXB0eU5vZGUgPSBmdW5jdGlvbiBpc0VtcHR5Tm9kZSh4KSB7XG4gIHJldHVybiB4ID09PSBlbXB0eSB8fCB4ICYmIHguX19oYW10X2lzRW1wdHk7XG59O1xuLyoqXG4gICAgTGVhZiBob2xkaW5nIGEgdmFsdWUuXG5cbiAgICBAbWVtYmVyIGVkaXQgRWRpdCBvZiB0aGUgbm9kZS5cbiAgICBAbWVtYmVyIGhhc2ggSGFzaCBvZiBrZXkuXG4gICAgQG1lbWJlciBrZXkgS2V5LlxuICAgIEBtZW1iZXIgdmFsdWUgVmFsdWUgc3RvcmVkLlxuKi9cblxuXG52YXIgTGVhZiA9IGZ1bmN0aW9uIExlYWYoZWRpdCwgaGFzaCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExFQUYsXG4gICAgZWRpdDogZWRpdCxcbiAgICBoYXNoOiBoYXNoLFxuICAgIGtleToga2V5LFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBfbW9kaWZ5OiBMZWFmX19tb2RpZnlcbiAgfTtcbn07XG4vKipcbiAgICBMZWFmIGhvbGRpbmcgbXVsdGlwbGUgdmFsdWVzIHdpdGggdGhlIHNhbWUgaGFzaCBidXQgZGlmZmVyZW50IGtleXMuXG5cbiAgICBAbWVtYmVyIGVkaXQgRWRpdCBvZiB0aGUgbm9kZS5cbiAgICBAbWVtYmVyIGhhc2ggSGFzaCBvZiBrZXkuXG4gICAgQG1lbWJlciBjaGlsZHJlbiBBcnJheSBvZiBjb2xsaXNpb24gY2hpbGRyZW4gbm9kZS5cbiovXG5cblxudmFyIENvbGxpc2lvbiA9IGZ1bmN0aW9uIENvbGxpc2lvbihlZGl0LCBoYXNoLCBjaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTExJU0lPTixcbiAgICBlZGl0OiBlZGl0LFxuICAgIGhhc2g6IGhhc2gsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIF9tb2RpZnk6IENvbGxpc2lvbl9fbW9kaWZ5XG4gIH07XG59O1xuLyoqXG4gICAgSW50ZXJuYWwgbm9kZSB3aXRoIGEgc3BhcnNlIHNldCBvZiBjaGlsZHJlbi5cblxuICAgIFVzZXMgYSBiaXRtYXAgYW5kIGFycmF5IHRvIHBhY2sgY2hpbGRyZW4uXG5cbiAgQG1lbWJlciBlZGl0IEVkaXQgb2YgdGhlIG5vZGUuXG4gICAgQG1lbWJlciBtYXNrIEJpdG1hcCB0aGF0IGVuY29kZSB0aGUgcG9zaXRpb25zIG9mIGNoaWxkcmVuIGluIHRoZSBhcnJheS5cbiAgICBAbWVtYmVyIGNoaWxkcmVuIEFycmF5IG9mIGNoaWxkIG5vZGVzLlxuKi9cblxuXG52YXIgSW5kZXhlZE5vZGUgPSBmdW5jdGlvbiBJbmRleGVkTm9kZShlZGl0LCBtYXNrLCBjaGlsZHJlbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElOREVYLFxuICAgIGVkaXQ6IGVkaXQsXG4gICAgbWFzazogbWFzayxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgX21vZGlmeTogSW5kZXhlZE5vZGVfX21vZGlmeVxuICB9O1xufTtcbi8qKlxuICAgIEludGVybmFsIG5vZGUgd2l0aCBtYW55IGNoaWxkcmVuLlxuXG4gICAgQG1lbWJlciBlZGl0IEVkaXQgb2YgdGhlIG5vZGUuXG4gICAgQG1lbWJlciBzaXplIE51bWJlciBvZiBjaGlsZHJlbi5cbiAgICBAbWVtYmVyIGNoaWxkcmVuIEFycmF5IG9mIGNoaWxkIG5vZGVzLlxuKi9cblxuXG52YXIgQXJyYXlOb2RlID0gZnVuY3Rpb24gQXJyYXlOb2RlKGVkaXQsIHNpemUsIGNoaWxkcmVuKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQVJSQVksXG4gICAgZWRpdDogZWRpdCxcbiAgICBzaXplOiBzaXplLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBfbW9kaWZ5OiBBcnJheU5vZGVfX21vZGlmeVxuICB9O1xufTtcbi8qKlxuICAgIElzIGBub2RlYCBhIGxlYWYgbm9kZT9cbiovXG5cblxudmFyIGlzTGVhZiA9IGZ1bmN0aW9uIGlzTGVhZihub2RlKSB7XG4gIHJldHVybiBub2RlID09PSBlbXB0eSB8fCBub2RlLnR5cGUgPT09IExFQUYgfHwgbm9kZS50eXBlID09PSBDT0xMSVNJT047XG59O1xuLyogSW50ZXJuYWwgbm9kZSBvcGVyYXRpb25zLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gICAgRXhwYW5kIGFuIGluZGV4ZWQgbm9kZSBpbnRvIGFuIGFycmF5IG5vZGUuXG5cbiAgQHBhcmFtIGVkaXQgQ3VycmVudCBlZGl0LlxuICAgIEBwYXJhbSBmcmFnIEluZGV4IG9mIGFkZGVkIGNoaWxkLlxuICAgIEBwYXJhbSBjaGlsZCBBZGRlZCBjaGlsZC5cbiAgICBAcGFyYW0gbWFzayBJbmRleCBub2RlIG1hc2sgYmVmb3JlIGNoaWxkIGFkZGVkLlxuICAgIEBwYXJhbSBzdWJOb2RlcyBJbmRleCBub2RlIGNoaWxkcmVuIGJlZm9yZSBjaGlsZCBhZGRlZC5cbiovXG5cblxudmFyIGV4cGFuZCA9IGZ1bmN0aW9uIGV4cGFuZChlZGl0LCBmcmFnLCBjaGlsZCwgYml0bWFwLCBzdWJOb2Rlcykge1xuICB2YXIgYXJyID0gW107XG4gIHZhciBiaXQgPSBiaXRtYXA7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGJpdDsgKytpKSB7XG4gICAgaWYgKGJpdCAmIDEpIGFycltpXSA9IHN1Yk5vZGVzW2NvdW50KytdO1xuICAgIGJpdCA+Pj49IDE7XG4gIH1cblxuICBhcnJbZnJhZ10gPSBjaGlsZDtcbiAgcmV0dXJuIEFycmF5Tm9kZShlZGl0LCBjb3VudCArIDEsIGFycik7XG59O1xuLyoqXG4gICAgQ29sbGFwc2UgYW4gYXJyYXkgbm9kZSBpbnRvIGEgaW5kZXhlZCBub2RlLlxuXG4gIEBwYXJhbSBlZGl0IEN1cnJlbnQgZWRpdC5cbiAgICBAcGFyYW0gY291bnQgTnVtYmVyIG9mIGVsZW1lbnRzIGluIG5ldyBhcnJheS5cbiAgICBAcGFyYW0gcmVtb3ZlZCBJbmRleCBvZiByZW1vdmVkIGVsZW1lbnQuXG4gICAgQHBhcmFtIGVsZW1lbnRzIEFycmF5IG5vZGUgY2hpbGRyZW4gYmVmb3JlIHJlbW92ZS5cbiovXG5cblxudmFyIHBhY2sgPSBmdW5jdGlvbiBwYWNrKGVkaXQsIGNvdW50LCByZW1vdmVkLCBlbGVtZW50cykge1xuICB2YXIgY2hpbGRyZW4gPSBuZXcgQXJyYXkoY291bnQgLSAxKTtcbiAgdmFyIGcgPSAwO1xuICB2YXIgYml0bWFwID0gMDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoaSAhPT0gcmVtb3ZlZCkge1xuICAgICAgdmFyIGVsZW0gPSBlbGVtZW50c1tpXTtcblxuICAgICAgaWYgKGVsZW0gJiYgIWlzRW1wdHlOb2RlKGVsZW0pKSB7XG4gICAgICAgIGNoaWxkcmVuW2crK10gPSBlbGVtO1xuICAgICAgICBiaXRtYXAgfD0gMSA8PCBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBJbmRleGVkTm9kZShlZGl0LCBiaXRtYXAsIGNoaWxkcmVuKTtcbn07XG4vKipcbiAgICBNZXJnZSB0d28gbGVhZiBub2Rlcy5cblxuICAgIEBwYXJhbSBzaGlmdCBDdXJyZW50IHNoaWZ0LlxuICAgIEBwYXJhbSBoMSBOb2RlIDEgaGFzaC5cbiAgICBAcGFyYW0gbjEgTm9kZSAxLlxuICAgIEBwYXJhbSBoMiBOb2RlIDIgaGFzaC5cbiAgICBAcGFyYW0gbjIgTm9kZSAyLlxuKi9cblxuXG52YXIgbWVyZ2VMZWF2ZXMgPSBmdW5jdGlvbiBtZXJnZUxlYXZlcyhlZGl0LCBzaGlmdCwgaDEsIG4xLCBoMiwgbjIpIHtcbiAgaWYgKGgxID09PSBoMikgcmV0dXJuIENvbGxpc2lvbihlZGl0LCBoMSwgW24yLCBuMV0pO1xuICB2YXIgc3ViSDEgPSBoYXNoRnJhZ21lbnQoc2hpZnQsIGgxKTtcbiAgdmFyIHN1YkgyID0gaGFzaEZyYWdtZW50KHNoaWZ0LCBoMik7XG4gIHJldHVybiBJbmRleGVkTm9kZShlZGl0LCB0b0JpdG1hcChzdWJIMSkgfCB0b0JpdG1hcChzdWJIMiksIHN1YkgxID09PSBzdWJIMiA/IFttZXJnZUxlYXZlcyhlZGl0LCBzaGlmdCArIFNJWkUsIGgxLCBuMSwgaDIsIG4yKV0gOiBzdWJIMSA8IHN1YkgyID8gW24xLCBuMl0gOiBbbjIsIG4xXSk7XG59O1xuLyoqXG4gICAgVXBkYXRlIGFuIGVudHJ5IGluIGEgY29sbGlzaW9uIGxpc3QuXG5cbiAgICBAcGFyYW0gbXV0YXRlIFNob3VsZCBtdXRhdGlvbiBiZSB1c2VkP1xuICAgIEBwYXJhbSBlZGl0IEN1cnJlbnQgZWRpdC5cbiAgICBAcGFyYW0ga2V5RXEgS2V5IGNvbXBhcmUgZnVuY3Rpb24uXG4gICAgQHBhcmFtIGhhc2ggSGFzaCBvZiBjb2xsaXNpb24uXG4gICAgQHBhcmFtIGxpc3QgQ29sbGlzaW9uIGxpc3QuXG4gICAgQHBhcmFtIGYgVXBkYXRlIGZ1bmN0aW9uLlxuICAgIEBwYXJhbSBrIEtleSB0byB1cGRhdGUuXG4gICAgQHBhcmFtIHNpemUgU2l6ZSByZWYuXG4qL1xuXG5cbnZhciB1cGRhdGVDb2xsaXNpb25MaXN0ID0gZnVuY3Rpb24gdXBkYXRlQ29sbGlzaW9uTGlzdChtdXRhdGUsIGVkaXQsIGtleUVxLCBoLCBsaXN0LCBmLCBrLCBzaXplKSB7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGNoaWxkID0gbGlzdFtpXTtcblxuICAgIGlmIChrZXlFcShrLCBjaGlsZC5rZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBjaGlsZC52YWx1ZTtcblxuICAgICAgdmFyIF9uZXdWYWx1ZSA9IGYodmFsdWUpO1xuXG4gICAgICBpZiAoX25ld1ZhbHVlID09PSB2YWx1ZSkgcmV0dXJuIGxpc3Q7XG5cbiAgICAgIGlmIChfbmV3VmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgLS1zaXplLnZhbHVlO1xuICAgICAgICByZXR1cm4gYXJyYXlTcGxpY2VPdXQobXV0YXRlLCBpLCBsaXN0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFycmF5VXBkYXRlKG11dGF0ZSwgaSwgTGVhZihlZGl0LCBoLCBrLCBfbmV3VmFsdWUpLCBsaXN0KTtcbiAgICB9XG4gIH1cblxuICB2YXIgbmV3VmFsdWUgPSBmKCk7XG4gIGlmIChuZXdWYWx1ZSA9PT0gbm90aGluZykgcmV0dXJuIGxpc3Q7XG4gICsrc2l6ZS52YWx1ZTtcbiAgcmV0dXJuIGFycmF5VXBkYXRlKG11dGF0ZSwgbGVuLCBMZWFmKGVkaXQsIGgsIGssIG5ld1ZhbHVlKSwgbGlzdCk7XG59O1xuXG52YXIgY2FuRWRpdE5vZGUgPSBmdW5jdGlvbiBjYW5FZGl0Tm9kZShlZGl0LCBub2RlKSB7XG4gIHJldHVybiBlZGl0ID09PSBub2RlLmVkaXQ7XG59O1xuLyogRWRpdGluZ1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG52YXIgTGVhZl9fbW9kaWZ5ID0gZnVuY3Rpb24gTGVhZl9fbW9kaWZ5KGVkaXQsIGtleUVxLCBzaGlmdCwgZiwgaCwgaywgc2l6ZSkge1xuICBpZiAoa2V5RXEoaywgdGhpcy5rZXkpKSB7XG4gICAgdmFyIF92ID0gZih0aGlzLnZhbHVlKTtcblxuICAgIGlmIChfdiA9PT0gdGhpcy52YWx1ZSkgcmV0dXJuIHRoaXM7ZWxzZSBpZiAoX3YgPT09IG5vdGhpbmcpIHtcbiAgICAgIC0tc2l6ZS52YWx1ZTtcbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9XG5cbiAgICBpZiAoY2FuRWRpdE5vZGUoZWRpdCwgdGhpcykpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBfdjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBMZWFmKGVkaXQsIGgsIGssIF92KTtcbiAgfVxuXG4gIHZhciB2ID0gZigpO1xuICBpZiAodiA9PT0gbm90aGluZykgcmV0dXJuIHRoaXM7XG4gICsrc2l6ZS52YWx1ZTtcbiAgcmV0dXJuIG1lcmdlTGVhdmVzKGVkaXQsIHNoaWZ0LCB0aGlzLmhhc2gsIHRoaXMsIGgsIExlYWYoZWRpdCwgaCwgaywgdikpO1xufTtcblxudmFyIENvbGxpc2lvbl9fbW9kaWZ5ID0gZnVuY3Rpb24gQ29sbGlzaW9uX19tb2RpZnkoZWRpdCwga2V5RXEsIHNoaWZ0LCBmLCBoLCBrLCBzaXplKSB7XG4gIGlmIChoID09PSB0aGlzLmhhc2gpIHtcbiAgICB2YXIgY2FuRWRpdCA9IGNhbkVkaXROb2RlKGVkaXQsIHRoaXMpO1xuICAgIHZhciBsaXN0ID0gdXBkYXRlQ29sbGlzaW9uTGlzdChjYW5FZGl0LCBlZGl0LCBrZXlFcSwgdGhpcy5oYXNoLCB0aGlzLmNoaWxkcmVuLCBmLCBrLCBzaXplKTtcbiAgICBpZiAobGlzdCA9PT0gdGhpcy5jaGlsZHJlbikgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMSA/IENvbGxpc2lvbihlZGl0LCB0aGlzLmhhc2gsIGxpc3QpIDogbGlzdFswXTsgLy8gY29sbGFwc2Ugc2luZ2xlIGVsZW1lbnQgY29sbGlzaW9uIGxpc3RcbiAgfVxuXG4gIHZhciB2ID0gZigpO1xuICBpZiAodiA9PT0gbm90aGluZykgcmV0dXJuIHRoaXM7XG4gICsrc2l6ZS52YWx1ZTtcbiAgcmV0dXJuIG1lcmdlTGVhdmVzKGVkaXQsIHNoaWZ0LCB0aGlzLmhhc2gsIHRoaXMsIGgsIExlYWYoZWRpdCwgaCwgaywgdikpO1xufTtcblxudmFyIEluZGV4ZWROb2RlX19tb2RpZnkgPSBmdW5jdGlvbiBJbmRleGVkTm9kZV9fbW9kaWZ5KGVkaXQsIGtleUVxLCBzaGlmdCwgZiwgaCwgaywgc2l6ZSkge1xuICB2YXIgbWFzayA9IHRoaXMubWFzaztcbiAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgdmFyIGZyYWcgPSBoYXNoRnJhZ21lbnQoc2hpZnQsIGgpO1xuICB2YXIgYml0ID0gdG9CaXRtYXAoZnJhZyk7XG4gIHZhciBpbmR4ID0gZnJvbUJpdG1hcChtYXNrLCBiaXQpO1xuICB2YXIgZXhpc3RzID0gbWFzayAmIGJpdDtcbiAgdmFyIGN1cnJlbnQgPSBleGlzdHMgPyBjaGlsZHJlbltpbmR4XSA6IGVtcHR5O1xuXG4gIHZhciBjaGlsZCA9IGN1cnJlbnQuX21vZGlmeShlZGl0LCBrZXlFcSwgc2hpZnQgKyBTSVpFLCBmLCBoLCBrLCBzaXplKTtcblxuICBpZiAoY3VycmVudCA9PT0gY2hpbGQpIHJldHVybiB0aGlzO1xuICB2YXIgY2FuRWRpdCA9IGNhbkVkaXROb2RlKGVkaXQsIHRoaXMpO1xuICB2YXIgYml0bWFwID0gbWFzaztcbiAgdmFyIG5ld0NoaWxkcmVuID0gdm9pZCAwO1xuXG4gIGlmIChleGlzdHMgJiYgaXNFbXB0eU5vZGUoY2hpbGQpKSB7XG4gICAgLy8gcmVtb3ZlXG4gICAgYml0bWFwICY9IH5iaXQ7XG4gICAgaWYgKCFiaXRtYXApIHJldHVybiBlbXB0eTtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoIDw9IDIgJiYgaXNMZWFmKGNoaWxkcmVuW2luZHggXiAxXSkpIHJldHVybiBjaGlsZHJlbltpbmR4IF4gMV07IC8vIGNvbGxhcHNlXG5cbiAgICBuZXdDaGlsZHJlbiA9IGFycmF5U3BsaWNlT3V0KGNhbkVkaXQsIGluZHgsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmICghZXhpc3RzICYmICFpc0VtcHR5Tm9kZShjaGlsZCkpIHtcbiAgICAvLyBhZGRcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID49IE1BWF9JTkRFWF9OT0RFKSByZXR1cm4gZXhwYW5kKGVkaXQsIGZyYWcsIGNoaWxkLCBtYXNrLCBjaGlsZHJlbik7XG4gICAgYml0bWFwIHw9IGJpdDtcbiAgICBuZXdDaGlsZHJlbiA9IGFycmF5U3BsaWNlSW4oY2FuRWRpdCwgaW5keCwgY2hpbGQsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBtb2RpZnlcbiAgICBuZXdDaGlsZHJlbiA9IGFycmF5VXBkYXRlKGNhbkVkaXQsIGluZHgsIGNoaWxkLCBjaGlsZHJlbik7XG4gIH1cblxuICBpZiAoY2FuRWRpdCkge1xuICAgIHRoaXMubWFzayA9IGJpdG1hcDtcbiAgICB0aGlzLmNoaWxkcmVuID0gbmV3Q2hpbGRyZW47XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gSW5kZXhlZE5vZGUoZWRpdCwgYml0bWFwLCBuZXdDaGlsZHJlbik7XG59O1xuXG52YXIgQXJyYXlOb2RlX19tb2RpZnkgPSBmdW5jdGlvbiBBcnJheU5vZGVfX21vZGlmeShlZGl0LCBrZXlFcSwgc2hpZnQsIGYsIGgsIGssIHNpemUpIHtcbiAgdmFyIGNvdW50ID0gdGhpcy5zaXplO1xuICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICB2YXIgZnJhZyA9IGhhc2hGcmFnbWVudChzaGlmdCwgaCk7XG4gIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ZyYWddO1xuXG4gIHZhciBuZXdDaGlsZCA9IChjaGlsZCB8fCBlbXB0eSkuX21vZGlmeShlZGl0LCBrZXlFcSwgc2hpZnQgKyBTSVpFLCBmLCBoLCBrLCBzaXplKTtcblxuICBpZiAoY2hpbGQgPT09IG5ld0NoaWxkKSByZXR1cm4gdGhpcztcbiAgdmFyIGNhbkVkaXQgPSBjYW5FZGl0Tm9kZShlZGl0LCB0aGlzKTtcbiAgdmFyIG5ld0NoaWxkcmVuID0gdm9pZCAwO1xuXG4gIGlmIChpc0VtcHR5Tm9kZShjaGlsZCkgJiYgIWlzRW1wdHlOb2RlKG5ld0NoaWxkKSkge1xuICAgIC8vIGFkZFxuICAgICsrY291bnQ7XG4gICAgbmV3Q2hpbGRyZW4gPSBhcnJheVVwZGF0ZShjYW5FZGl0LCBmcmFnLCBuZXdDaGlsZCwgY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKCFpc0VtcHR5Tm9kZShjaGlsZCkgJiYgaXNFbXB0eU5vZGUobmV3Q2hpbGQpKSB7XG4gICAgLy8gcmVtb3ZlXG4gICAgLS1jb3VudDtcbiAgICBpZiAoY291bnQgPD0gTUlOX0FSUkFZX05PREUpIHJldHVybiBwYWNrKGVkaXQsIGNvdW50LCBmcmFnLCBjaGlsZHJlbik7XG4gICAgbmV3Q2hpbGRyZW4gPSBhcnJheVVwZGF0ZShjYW5FZGl0LCBmcmFnLCBlbXB0eSwgY2hpbGRyZW4pO1xuICB9IGVsc2Uge1xuICAgIC8vIG1vZGlmeVxuICAgIG5ld0NoaWxkcmVuID0gYXJyYXlVcGRhdGUoY2FuRWRpdCwgZnJhZywgbmV3Q2hpbGQsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIGlmIChjYW5FZGl0KSB7XG4gICAgdGhpcy5zaXplID0gY291bnQ7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ld0NoaWxkcmVuO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEFycmF5Tm9kZShlZGl0LCBjb3VudCwgbmV3Q2hpbGRyZW4pO1xufTtcblxuZW1wdHkuX21vZGlmeSA9IGZ1bmN0aW9uIChlZGl0LCBrZXlFcSwgc2hpZnQsIGYsIGgsIGssIHNpemUpIHtcbiAgdmFyIHYgPSBmKCk7XG4gIGlmICh2ID09PSBub3RoaW5nKSByZXR1cm4gZW1wdHk7XG4gICsrc2l6ZS52YWx1ZTtcbiAgcmV0dXJuIExlYWYoZWRpdCwgaCwgaywgdik7XG59O1xuLypcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuZnVuY3Rpb24gTWFwKGVkaXRhYmxlLCBlZGl0LCBjb25maWcsIHJvb3QsIHNpemUpIHtcbiAgdGhpcy5fZWRpdGFibGUgPSBlZGl0YWJsZTtcbiAgdGhpcy5fZWRpdCA9IGVkaXQ7XG4gIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgdGhpcy5fcm9vdCA9IHJvb3Q7XG4gIHRoaXMuX3NpemUgPSBzaXplO1xufVxuXG5NYXAucHJvdG90eXBlLnNldFRyZWUgPSBmdW5jdGlvbiAobmV3Um9vdCwgbmV3U2l6ZSkge1xuICBpZiAodGhpcy5fZWRpdGFibGUpIHtcbiAgICB0aGlzLl9yb290ID0gbmV3Um9vdDtcbiAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiBuZXdSb290ID09PSB0aGlzLl9yb290ID8gdGhpcyA6IG5ldyBNYXAodGhpcy5fZWRpdGFibGUsIHRoaXMuX2VkaXQsIHRoaXMuX2NvbmZpZywgbmV3Um9vdCwgbmV3U2l6ZSk7XG59O1xuLyogUXVlcmllc1xuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gICAgTG9va3VwIHRoZSB2YWx1ZSBmb3IgYGtleWAgaW4gYG1hcGAgdXNpbmcgYSBjdXN0b20gYGhhc2hgLlxuXG4gICAgUmV0dXJucyB0aGUgdmFsdWUgb3IgYGFsdGAgaWYgbm9uZS5cbiovXG5cblxudmFyIHRyeUdldEhhc2ggPSBoYW10LnRyeUdldEhhc2ggPSBmdW5jdGlvbiAoYWx0LCBoYXNoLCBrZXksIG1hcCkge1xuICB2YXIgbm9kZSA9IG1hcC5fcm9vdDtcbiAgdmFyIHNoaWZ0ID0gMDtcbiAgdmFyIGtleUVxID0gbWFwLl9jb25maWcua2V5RXE7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgY2FzZSBMRUFGOlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIGtleUVxKGtleSwgbm9kZS5rZXkpID8gbm9kZS52YWx1ZSA6IGFsdDtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIENPTExJU0lPTjpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChoYXNoID09PSBub2RlLmhhc2gpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgaWYgKGtleUVxKGtleSwgY2hpbGQua2V5KSkgcmV0dXJuIGNoaWxkLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhbHQ7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBJTkRFWDpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBmcmFnID0gaGFzaEZyYWdtZW50KHNoaWZ0LCBoYXNoKTtcbiAgICAgICAgICB2YXIgYml0ID0gdG9CaXRtYXAoZnJhZyk7XG5cbiAgICAgICAgICBpZiAobm9kZS5tYXNrICYgYml0KSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlbltmcm9tQml0bWFwKG5vZGUubWFzaywgYml0KV07XG4gICAgICAgICAgICBzaGlmdCArPSBTSVpFO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFsdDtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEFSUkFZOlxuICAgICAgICB7XG4gICAgICAgICAgbm9kZSA9IG5vZGUuY2hpbGRyZW5baGFzaEZyYWdtZW50KHNoaWZ0LCBoYXNoKV07XG5cbiAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgc2hpZnQgKz0gU0laRTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhbHQ7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFsdDtcbiAgICB9XG4gIH1cbn07XG5cbk1hcC5wcm90b3R5cGUudHJ5R2V0SGFzaCA9IGZ1bmN0aW9uIChhbHQsIGhhc2gsIGtleSkge1xuICByZXR1cm4gdHJ5R2V0SGFzaChhbHQsIGhhc2gsIGtleSwgdGhpcyk7XG59O1xuLyoqXG4gICAgTG9va3VwIHRoZSB2YWx1ZSBmb3IgYGtleWAgaW4gYG1hcGAgdXNpbmcgaW50ZXJuYWwgaGFzaCBmdW5jdGlvbi5cblxuICAgIEBzZWUgYHRyeUdldEhhc2hgXG4qL1xuXG5cbnZhciB0cnlHZXQgPSBoYW10LnRyeUdldCA9IGZ1bmN0aW9uIChhbHQsIGtleSwgbWFwKSB7XG4gIHJldHVybiB0cnlHZXRIYXNoKGFsdCwgbWFwLl9jb25maWcuaGFzaChrZXkpLCBrZXksIG1hcCk7XG59O1xuXG5NYXAucHJvdG90eXBlLnRyeUdldCA9IGZ1bmN0aW9uIChhbHQsIGtleSkge1xuICByZXR1cm4gdHJ5R2V0KGFsdCwga2V5LCB0aGlzKTtcbn07XG4vKipcbiAgICBMb29rdXAgdGhlIHZhbHVlIGZvciBga2V5YCBpbiBgbWFwYCB1c2luZyBhIGN1c3RvbSBgaGFzaGAuXG5cbiAgICBSZXR1cm5zIHRoZSB2YWx1ZSBvciBgdW5kZWZpbmVkYCBpZiBub25lLlxuKi9cblxuXG52YXIgZ2V0SGFzaCA9IGhhbXQuZ2V0SGFzaCA9IGZ1bmN0aW9uIChoYXNoLCBrZXksIG1hcCkge1xuICByZXR1cm4gdHJ5R2V0SGFzaCh1bmRlZmluZWQsIGhhc2gsIGtleSwgbWFwKTtcbn07XG5cbk1hcC5wcm90b3R5cGUuZ2V0SGFzaCA9IGZ1bmN0aW9uIChoYXNoLCBrZXkpIHtcbiAgcmV0dXJuIGdldEhhc2goaGFzaCwga2V5LCB0aGlzKTtcbn07XG4vKipcbiAgICBMb29rdXAgdGhlIHZhbHVlIGZvciBga2V5YCBpbiBgbWFwYCB1c2luZyBpbnRlcm5hbCBoYXNoIGZ1bmN0aW9uLlxuXG4gICAgQHNlZSBgZ2V0YFxuKi9cblxuXG52YXIgZ2V0ID0gaGFtdC5nZXQgPSBmdW5jdGlvbiAoa2V5LCBtYXApIHtcbiAgcmV0dXJuIHRyeUdldEhhc2godW5kZWZpbmVkLCBtYXAuX2NvbmZpZy5oYXNoKGtleSksIGtleSwgbWFwKTtcbn07XG5cbk1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgYWx0KSB7XG4gIHJldHVybiB0cnlHZXQoYWx0LCBrZXksIHRoaXMpO1xufTtcbi8qKlxuICAgIERvZXMgYW4gZW50cnkgZXhpc3QgZm9yIGBrZXlgIGluIGBtYXBgPyBVc2VzIGN1c3RvbSBgaGFzaGAuXG4qL1xuXG5cbnZhciBoYXNIYXNoID0gaGFtdC5oYXMgPSBmdW5jdGlvbiAoaGFzaCwga2V5LCBtYXApIHtcbiAgcmV0dXJuIHRyeUdldEhhc2gobm90aGluZywgaGFzaCwga2V5LCBtYXApICE9PSBub3RoaW5nO1xufTtcblxuTWFwLnByb3RvdHlwZS5oYXNIYXNoID0gZnVuY3Rpb24gKGhhc2gsIGtleSkge1xuICByZXR1cm4gaGFzSGFzaChoYXNoLCBrZXksIHRoaXMpO1xufTtcbi8qKlxuICAgIERvZXMgYW4gZW50cnkgZXhpc3QgZm9yIGBrZXlgIGluIGBtYXBgPyBVc2VzIGludGVybmFsIGhhc2ggZnVuY3Rpb24uXG4qL1xuXG5cbnZhciBoYXMgPSBoYW10LmhhcyA9IGZ1bmN0aW9uIChrZXksIG1hcCkge1xuICByZXR1cm4gaGFzSGFzaChtYXAuX2NvbmZpZy5oYXNoKGtleSksIGtleSwgbWFwKTtcbn07XG5cbk1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gaGFzKGtleSwgdGhpcyk7XG59O1xuXG52YXIgZGVmS2V5Q29tcGFyZSA9IGZ1bmN0aW9uIGRlZktleUNvbXBhcmUoeCwgeSkge1xuICByZXR1cm4geCA9PT0geTtcbn07XG4vKipcbiAgICBDcmVhdGUgYW4gZW1wdHkgbWFwLlxuXG4gICAgQHBhcmFtIGNvbmZpZyBDb25maWd1cmF0aW9uLlxuKi9cblxuXG5oYW10Lm1ha2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgTWFwKDAsIDAsIHtcbiAgICBrZXlFcTogY29uZmlnICYmIGNvbmZpZy5rZXlFcSB8fCBkZWZLZXlDb21wYXJlLFxuICAgIGhhc2g6IGNvbmZpZyAmJiBjb25maWcuaGFzaCB8fCBoYXNoXG4gIH0sIGVtcHR5LCAwKTtcbn07XG4vKipcbiAgICBFbXB0eSBtYXAuXG4qL1xuXG5cbmhhbXQuZW1wdHkgPSBoYW10Lm1ha2UoKTtcbi8qKlxuICAgIERvZXMgYG1hcGAgY29udGFpbiBhbnkgZWxlbWVudHM/XG4qL1xuXG52YXIgaXNFbXB0eSA9IGhhbXQuaXNFbXB0eSA9IGZ1bmN0aW9uIChtYXApIHtcbiAgcmV0dXJuIG1hcCAmJiAhIWlzRW1wdHlOb2RlKG1hcC5fcm9vdCk7XG59O1xuXG5NYXAucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0VtcHR5KHRoaXMpO1xufTtcbi8qIFVwZGF0ZXNcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICAgIEFsdGVyIHRoZSB2YWx1ZSBzdG9yZWQgZm9yIGBrZXlgIGluIGBtYXBgIHVzaW5nIGZ1bmN0aW9uIGBmYCB1c2luZ1xuICAgIGN1c3RvbSBoYXNoLlxuXG4gICAgYGZgIGlzIGludm9rZWQgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBmb3IgYGtgIGlmIGl0IGV4aXN0cyxcbiAgICBvciBubyBhcmd1bWVudHMgaWYgbm8gc3VjaCB2YWx1ZSBleGlzdHMuIGBtb2RpZnlgIHdpbGwgYWx3YXlzIGVpdGhlclxuICAgIHVwZGF0ZSBvciBpbnNlcnQgYSB2YWx1ZSBpbnRvIHRoZSBtYXAuXG5cbiAgICBSZXR1cm5zIGEgbWFwIHdpdGggdGhlIG1vZGlmaWVkIHZhbHVlLiBEb2VzIG5vdCBhbHRlciBgbWFwYC5cbiovXG5cblxudmFyIG1vZGlmeUhhc2ggPSBoYW10Lm1vZGlmeUhhc2ggPSBmdW5jdGlvbiAoZiwgaGFzaCwga2V5LCBtYXApIHtcbiAgdmFyIHNpemUgPSB7XG4gICAgdmFsdWU6IG1hcC5fc2l6ZVxuICB9O1xuXG4gIHZhciBuZXdSb290ID0gbWFwLl9yb290Ll9tb2RpZnkobWFwLl9lZGl0YWJsZSA/IG1hcC5fZWRpdCA6IE5hTiwgbWFwLl9jb25maWcua2V5RXEsIDAsIGYsIGhhc2gsIGtleSwgc2l6ZSk7XG5cbiAgcmV0dXJuIG1hcC5zZXRUcmVlKG5ld1Jvb3QsIHNpemUudmFsdWUpO1xufTtcblxuTWFwLnByb3RvdHlwZS5tb2RpZnlIYXNoID0gZnVuY3Rpb24gKGhhc2gsIGtleSwgZikge1xuICByZXR1cm4gbW9kaWZ5SGFzaChmLCBoYXNoLCBrZXksIHRoaXMpO1xufTtcbi8qKlxuICAgIEFsdGVyIHRoZSB2YWx1ZSBzdG9yZWQgZm9yIGBrZXlgIGluIGBtYXBgIHVzaW5nIGZ1bmN0aW9uIGBmYCB1c2luZ1xuICAgIGludGVybmFsIGhhc2ggZnVuY3Rpb24uXG5cbiAgICBAc2VlIGBtb2RpZnlIYXNoYFxuKi9cblxuXG52YXIgbW9kaWZ5ID0gaGFtdC5tb2RpZnkgPSBmdW5jdGlvbiAoZiwga2V5LCBtYXApIHtcbiAgcmV0dXJuIG1vZGlmeUhhc2goZiwgbWFwLl9jb25maWcuaGFzaChrZXkpLCBrZXksIG1hcCk7XG59O1xuXG5NYXAucHJvdG90eXBlLm1vZGlmeSA9IGZ1bmN0aW9uIChrZXksIGYpIHtcbiAgcmV0dXJuIG1vZGlmeShmLCBrZXksIHRoaXMpO1xufTtcbi8qKlxuICAgIFN0b3JlIGB2YWx1ZWAgZm9yIGBrZXlgIGluIGBtYXBgIHVzaW5nIGN1c3RvbSBgaGFzaGAuXG5cbiAgICBSZXR1cm5zIGEgbWFwIHdpdGggdGhlIG1vZGlmaWVkIHZhbHVlLiBEb2VzIG5vdCBhbHRlciBgbWFwYC5cbiovXG5cblxudmFyIHNldEhhc2ggPSBoYW10LnNldEhhc2ggPSBmdW5jdGlvbiAoaGFzaCwga2V5LCB2YWx1ZSwgbWFwKSB7XG4gIHJldHVybiBtb2RpZnlIYXNoKGNvbnN0YW50KHZhbHVlKSwgaGFzaCwga2V5LCBtYXApO1xufTtcblxuTWFwLnByb3RvdHlwZS5zZXRIYXNoID0gZnVuY3Rpb24gKGhhc2gsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNldEhhc2goaGFzaCwga2V5LCB2YWx1ZSwgdGhpcyk7XG59O1xuLyoqXG4gICAgU3RvcmUgYHZhbHVlYCBmb3IgYGtleWAgaW4gYG1hcGAgdXNpbmcgaW50ZXJuYWwgaGFzaCBmdW5jdGlvbi5cblxuICAgIEBzZWUgYHNldEhhc2hgXG4qL1xuXG5cbnZhciBzZXQgPSBoYW10LnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBtYXApIHtcbiAgcmV0dXJuIHNldEhhc2gobWFwLl9jb25maWcuaGFzaChrZXkpLCBrZXksIHZhbHVlLCBtYXApO1xufTtcblxuTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc2V0KGtleSwgdmFsdWUsIHRoaXMpO1xufTtcbi8qKlxuICAgIFJlbW92ZSB0aGUgZW50cnkgZm9yIGBrZXlgIGluIGBtYXBgLlxuXG4gICAgUmV0dXJucyBhIG1hcCB3aXRoIHRoZSB2YWx1ZSByZW1vdmVkLiBEb2VzIG5vdCBhbHRlciBgbWFwYC5cbiovXG5cblxudmFyIGRlbCA9IGNvbnN0YW50KG5vdGhpbmcpO1xuXG52YXIgcmVtb3ZlSGFzaCA9IGhhbXQucmVtb3ZlSGFzaCA9IGZ1bmN0aW9uIChoYXNoLCBrZXksIG1hcCkge1xuICByZXR1cm4gbW9kaWZ5SGFzaChkZWwsIGhhc2gsIGtleSwgbWFwKTtcbn07XG5cbk1hcC5wcm90b3R5cGUucmVtb3ZlSGFzaCA9IE1hcC5wcm90b3R5cGUuZGVsZXRlSGFzaCA9IGZ1bmN0aW9uIChoYXNoLCBrZXkpIHtcbiAgcmV0dXJuIHJlbW92ZUhhc2goaGFzaCwga2V5LCB0aGlzKTtcbn07XG4vKipcbiAgICBSZW1vdmUgdGhlIGVudHJ5IGZvciBga2V5YCBpbiBgbWFwYCB1c2luZyBpbnRlcm5hbCBoYXNoIGZ1bmN0aW9uLlxuXG4gICAgQHNlZSBgcmVtb3ZlSGFzaGBcbiovXG5cblxudmFyIHJlbW92ZSA9IGhhbXQucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgbWFwKSB7XG4gIHJldHVybiByZW1vdmVIYXNoKG1hcC5fY29uZmlnLmhhc2goa2V5KSwga2V5LCBtYXApO1xufTtcblxuTWFwLnByb3RvdHlwZS5yZW1vdmUgPSBNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHJlbW92ZShrZXksIHRoaXMpO1xufTtcbi8qIE11dGF0aW9uXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKipcbiAgICBNYXJrIGBtYXBgIGFzIG11dGFibGUuXG4gKi9cblxuXG52YXIgYmVnaW5NdXRhdGlvbiA9IGhhbXQuYmVnaW5NdXRhdGlvbiA9IGZ1bmN0aW9uIChtYXApIHtcbiAgcmV0dXJuIG5ldyBNYXAobWFwLl9lZGl0YWJsZSArIDEsIG1hcC5fZWRpdCArIDEsIG1hcC5fY29uZmlnLCBtYXAuX3Jvb3QsIG1hcC5fc2l6ZSk7XG59O1xuXG5NYXAucHJvdG90eXBlLmJlZ2luTXV0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBiZWdpbk11dGF0aW9uKHRoaXMpO1xufTtcbi8qKlxuICAgIE1hcmsgYG1hcGAgYXMgaW1tdXRhYmxlLlxuICovXG5cblxudmFyIGVuZE11dGF0aW9uID0gaGFtdC5lbmRNdXRhdGlvbiA9IGZ1bmN0aW9uIChtYXApIHtcbiAgbWFwLl9lZGl0YWJsZSA9IG1hcC5fZWRpdGFibGUgJiYgbWFwLl9lZGl0YWJsZSAtIDE7XG4gIHJldHVybiBtYXA7XG59O1xuXG5NYXAucHJvdG90eXBlLmVuZE11dGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZW5kTXV0YXRpb24odGhpcyk7XG59O1xuLyoqXG4gICAgTXV0YXRlIGBtYXBgIHdpdGhpbiB0aGUgY29udGV4dCBvZiBgZmAuXG4gICAgQHBhcmFtIGZcbiAgICBAcGFyYW0gbWFwIEhBTVRcbiovXG5cblxudmFyIG11dGF0ZSA9IGhhbXQubXV0YXRlID0gZnVuY3Rpb24gKGYsIG1hcCkge1xuICB2YXIgdHJhbnNpZW50ID0gYmVnaW5NdXRhdGlvbihtYXApO1xuICBmKHRyYW5zaWVudCk7XG4gIHJldHVybiBlbmRNdXRhdGlvbih0cmFuc2llbnQpO1xufTtcblxuTWFwLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoZikge1xuICByZXR1cm4gbXV0YXRlKGYsIHRoaXMpO1xufTtcbi8qIFRyYXZlcnNhbFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gICAgQXBwbHkgYSBjb250aW51YXRpb24uXG4qL1xuXG5cbnZhciBhcHBrID0gZnVuY3Rpb24gYXBwayhrKSB7XG4gIHJldHVybiBrICYmIGxhenlWaXNpdENoaWxkcmVuKGtbMF0sIGtbMV0sIGtbMl0sIGtbM10sIGtbNF0pO1xufTtcbi8qKlxuICAgIFJlY3Vyc2l2ZWx5IHZpc2l0IGFsbCB2YWx1ZXMgc3RvcmVkIGluIGFuIGFycmF5IG9mIG5vZGVzIGxhemlseS5cbiovXG5cblxudmFyIGxhenlWaXNpdENoaWxkcmVuID0gZnVuY3Rpb24gbGF6eVZpc2l0Q2hpbGRyZW4obGVuLCBjaGlsZHJlbiwgaSwgZiwgaykge1xuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2krK107XG4gICAgaWYgKGNoaWxkICYmICFpc0VtcHR5Tm9kZShjaGlsZCkpIHJldHVybiBsYXp5VmlzaXQoY2hpbGQsIGYsIFtsZW4sIGNoaWxkcmVuLCBpLCBmLCBrXSk7XG4gIH1cblxuICByZXR1cm4gYXBwayhrKTtcbn07XG4vKipcbiAgICBSZWN1cnNpdmVseSB2aXNpdCBhbGwgdmFsdWVzIHN0b3JlZCBpbiBgbm9kZWAgbGF6aWx5LlxuKi9cblxuXG52YXIgbGF6eVZpc2l0ID0gZnVuY3Rpb24gbGF6eVZpc2l0KG5vZGUsIGYsIGspIHtcbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlIExFQUY6XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogZihub2RlKSxcbiAgICAgICAgcmVzdDoga1xuICAgICAgfTtcblxuICAgIGNhc2UgQ09MTElTSU9OOlxuICAgIGNhc2UgQVJSQVk6XG4gICAgY2FzZSBJTkRFWDpcbiAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XG4gICAgICByZXR1cm4gbGF6eVZpc2l0Q2hpbGRyZW4oY2hpbGRyZW4ubGVuZ3RoLCBjaGlsZHJlbiwgMCwgZiwgayk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFwcGsoayk7XG4gIH1cbn07XG5cbnZhciBET05FID0ge1xuICBkb25lOiB0cnVlXG59O1xuLyoqXG4gICAgSmF2YXNjcmlwdCBpdGVyYXRvciBvdmVyIGEgbWFwLlxuKi9cblxuZnVuY3Rpb24gTWFwSXRlcmF0b3Iodikge1xuICB0aGlzLnYgPSB2O1xufVxuXG5NYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnYpIHJldHVybiBET05FO1xuICB2YXIgdjAgPSB0aGlzLnY7XG4gIHRoaXMudiA9IGFwcGsodjAucmVzdCk7XG4gIHJldHVybiB2MDtcbn07XG5cbk1hcEl0ZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAgICBMYXppbHkgdmlzaXQgZWFjaCB2YWx1ZSBpbiBtYXAgd2l0aCBmdW5jdGlvbiBgZmAuXG4qL1xuXG5cbnZhciB2aXNpdCA9IGZ1bmN0aW9uIHZpc2l0KG1hcCwgZikge1xuICByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKGxhenlWaXNpdChtYXAuX3Jvb3QsIGYpKTtcbn07XG4vKipcbiAgICBHZXQgYSBKYXZhc2NzcmlwdCBpdGVyYXRvciBvZiBgbWFwYC5cblxuICAgIEl0ZXJhdGVzIG92ZXIgYFtrZXksIHZhbHVlXWAgYXJyYXlzLlxuKi9cblxuXG52YXIgYnVpbGRQYWlycyA9IGZ1bmN0aW9uIGJ1aWxkUGFpcnMoeCkge1xuICByZXR1cm4gW3gua2V5LCB4LnZhbHVlXTtcbn07XG5cbnZhciBlbnRyaWVzID0gaGFtdC5lbnRyaWVzID0gZnVuY3Rpb24gKG1hcCkge1xuICByZXR1cm4gdmlzaXQobWFwLCBidWlsZFBhaXJzKTtcbn07XG5cbk1hcC5wcm90b3R5cGUuZW50cmllcyA9IE1hcC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVudHJpZXModGhpcyk7XG59O1xuLyoqXG4gICAgR2V0IGFycmF5IG9mIGFsbCBrZXlzIGluIGBtYXBgLlxuXG4gICAgT3JkZXIgaXMgbm90IGd1YXJhbnRlZWQuXG4qL1xuXG5cbnZhciBidWlsZEtleXMgPSBmdW5jdGlvbiBidWlsZEtleXMoeCkge1xuICByZXR1cm4geC5rZXk7XG59O1xuXG52YXIga2V5cyA9IGhhbXQua2V5cyA9IGZ1bmN0aW9uIChtYXApIHtcbiAgcmV0dXJuIHZpc2l0KG1hcCwgYnVpbGRLZXlzKTtcbn07XG5cbk1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGtleXModGhpcyk7XG59O1xuLyoqXG4gICAgR2V0IGFycmF5IG9mIGFsbCB2YWx1ZXMgaW4gYG1hcGAuXG5cbiAgICBPcmRlciBpcyBub3QgZ3VhcmFudGVlZCwgZHVwbGljYXRlcyBhcmUgcHJlc2VydmVkLlxuKi9cblxuXG52YXIgYnVpbGRWYWx1ZXMgPSBmdW5jdGlvbiBidWlsZFZhbHVlcyh4KSB7XG4gIHJldHVybiB4LnZhbHVlO1xufTtcblxudmFyIHZhbHVlcyA9IGhhbXQudmFsdWVzID0gTWFwLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAobWFwKSB7XG4gIHJldHVybiB2aXNpdChtYXAsIGJ1aWxkVmFsdWVzKTtcbn07XG5cbk1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdmFsdWVzKHRoaXMpO1xufTtcbi8qIEZvbGRcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuICAgIFZpc2l0IGV2ZXJ5IGVudHJ5IGluIHRoZSBtYXAsIGFnZ3JlZ2F0aW5nIGRhdGEuXG5cbiAgICBPcmRlciBvZiBub2RlcyBpcyBub3QgZ3VhcmFudGVlZC5cblxuICAgIEBwYXJhbSBmIEZ1bmN0aW9uIG1hcHBpbmcgYWNjdW11bGF0ZWQgdmFsdWUsIHZhbHVlLCBhbmQga2V5IHRvIG5ldyB2YWx1ZS5cbiAgICBAcGFyYW0geiBTdGFydGluZyB2YWx1ZS5cbiAgICBAcGFyYW0gbSBIQU1UXG4qL1xuXG5cbnZhciBmb2xkID0gaGFtdC5mb2xkID0gZnVuY3Rpb24gKGYsIHosIG0pIHtcbiAgdmFyIHJvb3QgPSBtLl9yb290O1xuICBpZiAocm9vdC50eXBlID09PSBMRUFGKSByZXR1cm4gZih6LCByb290LnZhbHVlLCByb290LmtleSk7XG4gIHZhciB0b1Zpc2l0ID0gW3Jvb3QuY2hpbGRyZW5dO1xuICB2YXIgY2hpbGRyZW4gPSB2b2lkIDA7XG5cbiAgd2hpbGUgKGNoaWxkcmVuID0gdG9WaXNpdC5wb3AoKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47KSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpKytdO1xuXG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZSkge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gTEVBRikgeiA9IGYoeiwgY2hpbGQudmFsdWUsIGNoaWxkLmtleSk7ZWxzZSB0b1Zpc2l0LnB1c2goY2hpbGQuY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB6O1xufTtcblxuTWFwLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24gKGYsIHopIHtcbiAgcmV0dXJuIGZvbGQoZiwgeiwgdGhpcyk7XG59O1xuLyoqXG4gICAgVmlzaXQgZXZlcnkgZW50cnkgaW4gdGhlIG1hcCwgYWdncmVnYXRpbmcgZGF0YS5cblxuICAgIE9yZGVyIG9mIG5vZGVzIGlzIG5vdCBndWFyYW50ZWVkLlxuXG4gICAgQHBhcmFtIGYgRnVuY3Rpb24gaW52b2tlZCB3aXRoIHZhbHVlIGFuZCBrZXlcbiAgICBAcGFyYW0gbWFwIEhBTVRcbiovXG5cblxudmFyIGZvckVhY2ggPSBoYW10LmZvckVhY2ggPSBmdW5jdGlvbiAoZiwgbWFwKSB7XG4gIHJldHVybiBmb2xkKGZ1bmN0aW9uIChfLCB2YWx1ZSwga2V5KSB7XG4gICAgcmV0dXJuIGYodmFsdWUsIGtleSwgbWFwKTtcbiAgfSwgbnVsbCwgbWFwKTtcbn07XG5cbk1hcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmKSB7XG4gIHJldHVybiBmb3JFYWNoKGYsIHRoaXMpO1xufTtcbi8qIEFnZ3JlZ2F0ZVxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXG4gICAgR2V0IHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiBgbWFwYC5cbiovXG5cblxudmFyIGNvdW50ID0gaGFtdC5jb3VudCA9IGZ1bmN0aW9uIChtYXApIHtcbiAgcmV0dXJuIG1hcC5fc2l6ZTtcbn07XG5cbk1hcC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjb3VudCh0aGlzKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXAucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgZ2V0OiBNYXAucHJvdG90eXBlLmNvdW50XG59KTtcbi8qIEV4cG9ydFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaWYgKCBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGhhbXQ7XG59IGVsc2Uge1xuICB1bmRlZmluZWQuaGFtdCA9IGhhbXQ7XG59XG59KTtcblxuY2xhc3MgQnVpbHRJbk1hcCB7XG4gIGNvbnN0cnVjdG9yKGV4aXN0aW5nKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21hcFwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWFwID0gbmV3IE1hcChleGlzdGluZyA9PT0gbnVsbCB8fCBleGlzdGluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXhpc3RpbmcuZW50cmllcygpKTtcbiAgfVxuXG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5rZXlzKCk7XG4gIH1cblxuICBlbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXAuZW50cmllcygpO1xuICB9XG5cbiAgZ2V0KGspIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmdldChrKTtcbiAgfVxuXG4gIGhhcyhrKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5oYXMoayk7XG4gIH1cblxuICBzZXQoaywgdikge1xuICAgIHRoaXMuX21hcC5zZXQoaywgdik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlbGV0ZShrKSB7XG4gICAgdGhpcy5fbWFwLmRlbGV0ZShrKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIHBlcnNpc3RlbnRNYXAodGhpcyk7XG4gIH1cblxuICB0b01hcCgpIHtcbiAgICByZXR1cm4gbmV3IE1hcCh0aGlzLl9tYXApO1xuICB9XG5cbn1cblxuY2xhc3MgSGFzaEFycmF5TWFwcGVkVHJpZU1hcCB7XG4gIC8vIEJlY2F1c2UgaGFtdC5lbXB0eSBpcyBub3QgYSBmdW5jdGlvbiB0aGVyZSBpcyBubyB3YXkgdG8gaW50cm9kdWNlIHR5cGVcbiAgLy8gcGFyYW1ldGVycyBvbiBpdCwgc28gZW1wdHkgaXMgdHlwZWQgYXMgSEFNVFBsdXNNYXA8c3RyaW5nLCBtaXhlZD4uXG4gIC8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG4gIGNvbnN0cnVjdG9yKGV4aXN0aW5nKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2hhbXRcIiwgaGFtdF8xLmVtcHR5LmJlZ2luTXV0YXRpb24oKSk7XG5cbiAgICBpZiAoZXhpc3RpbmcgaW5zdGFuY2VvZiBIYXNoQXJyYXlNYXBwZWRUcmllTWFwKSB7XG4gICAgICBjb25zdCBoID0gZXhpc3RpbmcuX2hhbXQuZW5kTXV0YXRpb24oKTtcblxuICAgICAgZXhpc3RpbmcuX2hhbXQgPSBoLmJlZ2luTXV0YXRpb24oKTtcbiAgICAgIHRoaXMuX2hhbXQgPSBoLmJlZ2luTXV0YXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBleGlzdGluZy5lbnRyaWVzKCkpIHtcbiAgICAgICAgdGhpcy5faGFtdC5zZXQoaywgdik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5faGFtdC5rZXlzKCk7XG4gIH1cblxuICBlbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9oYW10LmVudHJpZXMoKTtcbiAgfVxuXG4gIGdldChrKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhbXQuZ2V0KGspO1xuICB9XG5cbiAgaGFzKGspIHtcbiAgICByZXR1cm4gdGhpcy5faGFtdC5oYXMoayk7XG4gIH1cblxuICBzZXQoaywgdikge1xuICAgIHRoaXMuX2hhbXQuc2V0KGssIHYpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGUoaykge1xuICAgIHRoaXMuX2hhbXQuZGVsZXRlKGspO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gcGVyc2lzdGVudE1hcCh0aGlzKTtcbiAgfVxuXG4gIHRvTWFwKCkge1xuICAgIHJldHVybiBuZXcgTWFwKHRoaXMuX2hhbXQpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gcGVyc2lzdGVudE1hcChleGlzdGluZykge1xuICBpZiAoUmVjb2lsX2dreF8xKCdyZWNvaWxfaGFtdF8yMDIwJykpIHtcbiAgICByZXR1cm4gbmV3IEhhc2hBcnJheU1hcHBlZFRyaWVNYXAoZXhpc3RpbmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQnVpbHRJbk1hcChleGlzdGluZyk7XG4gIH1cbn1cblxudmFyIFJlY29pbF9QZXJzaXN0ZW50TWFwID0ge1xuICBwZXJzaXN0ZW50TWFwXG59O1xuXG52YXIgUmVjb2lsX1BlcnNpc3RlbnRNYXBfMSA9IFJlY29pbF9QZXJzaXN0ZW50TWFwLnBlcnNpc3RlbnRNYXA7XG5cbnZhciBSZWNvaWxfUGVyc2lzdGVudE1hcCQxID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIHBlcnNpc3RlbnRNYXA6IFJlY29pbF9QZXJzaXN0ZW50TWFwXzFcbn0pO1xuXG5jb25zdCB7XG4gIGdyYXBoOiBncmFwaCQxXG59ID0gUmVjb2lsX0dyYXBoO1xuXG5jb25zdCB7XG4gIHBlcnNpc3RlbnRNYXA6IHBlcnNpc3RlbnRNYXAkMVxufSA9IFJlY29pbF9QZXJzaXN0ZW50TWFwJDE7IC8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG5cblxubGV0IG5leHRUcmVlU3RhdGVWZXJzaW9uID0gMDtcblxuY29uc3QgZ2V0TmV4dFRyZWVTdGF0ZVZlcnNpb24gPSAoKSA9PiBuZXh0VHJlZVN0YXRlVmVyc2lvbisrO1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlUcmVlU3RhdGUoKSB7XG4gIGNvbnN0IHZlcnNpb24gPSBnZXROZXh0VHJlZVN0YXRlVmVyc2lvbigpO1xuICByZXR1cm4ge1xuICAgIHZlcnNpb24sXG4gICAgc3RhdGVJRDogdmVyc2lvbixcbiAgICB0cmFuc2FjdGlvbk1ldGFkYXRhOiB7fSxcbiAgICBkaXJ0eUF0b21zOiBuZXcgU2V0KCksXG4gICAgYXRvbVZhbHVlczogcGVyc2lzdGVudE1hcCQxKCksXG4gICAgbm9udmFsaWRhdGVkQXRvbXM6IHBlcnNpc3RlbnRNYXAkMSgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VFbXB0eVN0b3JlU3RhdGUoKSB7XG4gIGNvbnN0IGN1cnJlbnRUcmVlID0gbWFrZUVtcHR5VHJlZVN0YXRlKCk7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFRyZWUsXG4gICAgbmV4dFRyZWU6IG51bGwsXG4gICAgcHJldmlvdXNUcmVlOiBudWxsLFxuICAgIGtub3duQXRvbXM6IG5ldyBTZXQoKSxcbiAgICBrbm93blNlbGVjdG9yczogbmV3IFNldCgpLFxuICAgIHRyYW5zYWN0aW9uU3Vic2NyaXB0aW9uczogbmV3IE1hcCgpLFxuICAgIG5vZGVUcmFuc2FjdGlvblN1YnNjcmlwdGlvbnM6IG5ldyBNYXAoKSxcbiAgICBub2RlVG9Db21wb25lbnRTdWJzY3JpcHRpb25zOiBuZXcgTWFwKCksXG4gICAgcXVldWVkQ29tcG9uZW50Q2FsbGJhY2tzX0RFUFJFQ0FURUQ6IFtdLFxuICAgIHN1c3BlbmRlZENvbXBvbmVudFJlc29sdmVyczogbmV3IFNldCgpLFxuICAgIGdyYXBoc0J5VmVyc2lvbjogbmV3IE1hcCgpLnNldChjdXJyZW50VHJlZS52ZXJzaW9uLCBncmFwaCQxKCkpLFxuICAgIHZlcnNpb25zVXNlZEJ5Q29tcG9uZW50OiBuZXcgTWFwKCksXG4gICAgcmV0ZW50aW9uOiB7XG4gICAgICByZWZlcmVuY2VDb3VudHM6IG5ldyBNYXAoKSxcbiAgICAgIG5vZGVzUmV0YWluZWRCeVpvbmU6IG5ldyBNYXAoKSxcbiAgICAgIHJldGFpbmFibGVzVG9DaGVja0ZvclJlbGVhc2U6IG5ldyBTZXQoKVxuICAgIH0sXG4gICAgbm9kZUNsZWFudXBGdW5jdGlvbnM6IG5ldyBNYXAoKVxuICB9O1xufVxuXG52YXIgUmVjb2lsX1N0YXRlID0ge1xuICBtYWtlRW1wdHlUcmVlU3RhdGUsXG4gIG1ha2VFbXB0eVN0b3JlU3RhdGUsXG4gIGdldE5leHRUcmVlU3RhdGVWZXJzaW9uXG59O1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuZnVuY3Rpb24gdW5pb25TZXRzKC4uLnNldHMpIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuXG4gIGZvciAoY29uc3Qgc2V0IG9mIHNldHMpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHNldCkge1xuICAgICAgcmVzdWx0LmFkZCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIFJlY29pbF91bmlvblNldHMgPSB1bmlvblNldHM7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuLyoqXG4gKiBUaGUgc29tZVNldCgpIG1ldGhvZCB0ZXN0cyB3aGV0aGVyIHNvbWUgZWxlbWVudHMgaW4gdGhlIGdpdmVuIFNldCBwYXNzIHRoZVxuICogdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gKi9cblxuZnVuY3Rpb24gc29tZVNldChzZXQsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gc2V0LmVudHJpZXMoKTtcbiAgbGV0IGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCk7XG5cbiAgd2hpbGUgKCFjdXJyZW50LmRvbmUpIHtcbiAgICBjb25zdCBlbnRyeSA9IGN1cnJlbnQudmFsdWU7XG5cbiAgICBpZiAoY2FsbGJhY2suY2FsbChjb250ZXh0LCBlbnRyeVsxXSwgZW50cnlbMF0sIHNldCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGN1cnJlbnQgPSBpdGVyYXRvci5uZXh0KCk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBSZWNvaWxfc29tZVNldCA9IHNvbWVTZXQ7XG5cbmNvbnN0IHtcbiAgY2xlYW5VcE5vZGU6IGNsZWFuVXBOb2RlJDFcbn0gPSBSZWNvaWxfRnVuY3Rpb25hbENvcmU7XG5cbmNvbnN0IHtcbiAgZGVsZXRlTm9kZUNvbmZpZ0lmUG9zc2libGU6IGRlbGV0ZU5vZGVDb25maWdJZlBvc3NpYmxlJDEsXG4gIGdldE5vZGU6IGdldE5vZGUkMlxufSA9IFJlY29pbF9Ob2RlO1xuXG5jb25zdCB7XG4gIFJldGVudGlvblpvbmU6IFJldGVudGlvblpvbmUkMlxufSA9IFJlY29pbF9SZXRlbnRpb25ab25lO1xuXG5jb25zdCBlbXB0eVNldCQxID0gbmV3IFNldCgpO1xuXG5mdW5jdGlvbiByZWxlYXNlUmV0YWluYWJsZXNOb3dPbkN1cnJlbnRUcmVlKHN0b3JlLCByZXRhaW5hYmxlcykge1xuICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgdHJlZVN0YXRlID0gc3RvcmVTdGF0ZS5jdXJyZW50VHJlZTtcblxuICBpZiAoc3RvcmVTdGF0ZS5uZXh0VHJlZSkge1xuICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbigncmVsZWFzZU5vZGVzTm93T25DdXJyZW50VHJlZSBzaG91bGQgb25seSBiZSBjYWxsZWQgYXQgdGhlIGVuZCBvZiBhIGJhdGNoJyk7XG4gICAgcmV0dXJuOyAvLyBsZWFrIG1lbW9yeSByYXRoZXIgdGhhbiBlcmFzZSBzb21ldGhpbmcgdGhhdCdzIGFib3V0IHRvIGJlIHVzZWQuXG4gIH1cblxuICBjb25zdCBub2RlcyA9IG5ldyBTZXQoKTtcblxuICBmb3IgKGNvbnN0IHIgb2YgcmV0YWluYWJsZXMpIHtcbiAgICBpZiAociBpbnN0YW5jZW9mIFJldGVudGlvblpvbmUkMikge1xuICAgICAgZm9yIChjb25zdCBuIG9mIG5vZGVzUmV0YWluZWRCeVpvbmUoc3RvcmVTdGF0ZSwgcikpIHtcbiAgICAgICAgbm9kZXMuYWRkKG4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub2Rlcy5hZGQocik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVsZWFzYWJsZU5vZGVzID0gZmluZFJlbGVhc2FibGVOb2RlcyhzdG9yZSwgbm9kZXMpO1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiByZWxlYXNhYmxlTm9kZXMpIHtcbiAgICByZWxlYXNlTm9kZShzdG9yZSwgdHJlZVN0YXRlLCBub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kUmVsZWFzYWJsZU5vZGVzKHN0b3JlLCBzZWFyY2hGcm9tTm9kZXMpIHtcbiAgY29uc3Qgc3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHRyZWVTdGF0ZSA9IHN0b3JlU3RhdGUuY3VycmVudFRyZWU7XG4gIGNvbnN0IGdyYXBoID0gc3RvcmUuZ2V0R3JhcGgodHJlZVN0YXRlLnZlcnNpb24pO1xuICBjb25zdCByZWxlYXNhYmxlTm9kZXMgPSBuZXcgU2V0KCk7IC8vIG11dGF0ZWQgdG8gY29sbGVjdCBhbnN3ZXJcblxuICBjb25zdCBub25SZWxlYXNhYmxlTm9kZXMgPSBuZXcgU2V0KCk7XG4gIGZpbmRSZWxlYXNhYmxlTm9kZXNJbm5lcihzZWFyY2hGcm9tTm9kZXMpO1xuICByZXR1cm4gcmVsZWFzYWJsZU5vZGVzO1xuXG4gIGZ1bmN0aW9uIGZpbmRSZWxlYXNhYmxlTm9kZXNJbm5lcihzZWFyY2hGcm9tTm9kZXMpIHtcbiAgICBjb25zdCByZWxlYXNhYmxlTm9kZXNGb3VuZFRoaXNJdGVyYXRpb24gPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZG93bnN0cmVhbXMgPSBnZXREb3duc3RyZWFtTm9kZXNJblRvcG9sb2dpY2FsT3JkZXIoc3RvcmUsIHRyZWVTdGF0ZSwgc2VhcmNoRnJvbU5vZGVzLCByZWxlYXNhYmxlTm9kZXMsIC8vIGRvbid0IGRlc2NlbmQgaW50byB0aGVzZVxuICAgIG5vblJlbGVhc2FibGVOb2RlcyAvLyBkb24ndCBkZXNjZW5kIGludG8gdGhlc2VcbiAgICApOyAvLyBGaW5kIHdoaWNoIG9mIHRoZSBkb3duc3RyZWFtIG5vZGVzIGFyZSByZWxlYXNhYmxlIGFuZCB3aGljaCBhcmUgbm90OlxuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIGRvd25zdHJlYW1zKSB7XG4gICAgICB2YXIgX3N0b3JlU3RhdGUkcmV0ZW50aW9uO1xuXG4gICAgICAvLyBOb3QgcmVsZWFzYWJsZSBpZiBjb25maWd1cmVkIHRvIGJlIHJldGFpbmVkIGZvcmV2ZXI6XG4gICAgICBpZiAoZ2V0Tm9kZSQyKG5vZGUpLnJldGFpbmVkQnkgPT09ICdyZWNvaWxSb290Jykge1xuICAgICAgICBub25SZWxlYXNhYmxlTm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gTm90IHJlbGVhc2FibGUgaWYgcmV0YWluZWQgZGlyZWN0bHkgYnkgYSBjb21wb25lbnQ6XG5cblxuICAgICAgaWYgKCgoX3N0b3JlU3RhdGUkcmV0ZW50aW9uID0gc3RvcmVTdGF0ZS5yZXRlbnRpb24ucmVmZXJlbmNlQ291bnRzLmdldChub2RlKSkgIT09IG51bGwgJiYgX3N0b3JlU3RhdGUkcmV0ZW50aW9uICE9PSB2b2lkIDAgPyBfc3RvcmVTdGF0ZSRyZXRlbnRpb24gOiAwKSA+IDApIHtcbiAgICAgICAgbm9uUmVsZWFzYWJsZU5vZGVzLmFkZChub2RlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIE5vdCByZWxlYXNhYmxlIGlmIHJldGFpbmVkIGJ5IGEgem9uZTpcblxuXG4gICAgICBpZiAoem9uZXNUaGF0Q291bGRSZXRhaW5Ob2RlKG5vZGUpLnNvbWUoeiA9PiBzdG9yZVN0YXRlLnJldGVudGlvbi5yZWZlcmVuY2VDb3VudHMuZ2V0KHopKSkge1xuICAgICAgICBub25SZWxlYXNhYmxlTm9kZXMuYWRkKG5vZGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gTm90IHJlbGVhc2FibGUgaWYgaXQgaGFzIGEgbm9uLXJlbGVhc2FibGUgY2hpbGQgKHdoaWNoIHdpbGwgYWxyZWFkeSBiZSBpblxuICAgICAgLy8gbm9uUmVsZWFzYWJsZU5vZGVzIGJlY2F1c2Ugd2UgYXJlIGdvaW5nIGluIHRvcG9sb2dpY2FsIG9yZGVyKTpcblxuXG4gICAgICBjb25zdCBub2RlQ2hpbGRyZW4gPSBncmFwaC5ub2RlVG9Ob2RlU3Vic2NyaXB0aW9ucy5nZXQobm9kZSk7XG5cbiAgICAgIGlmIChub2RlQ2hpbGRyZW4gJiYgUmVjb2lsX3NvbWVTZXQobm9kZUNoaWxkcmVuLCBjaGlsZCA9PiBub25SZWxlYXNhYmxlTm9kZXMuaGFzKGNoaWxkKSkpIHtcbiAgICAgICAgbm9uUmVsZWFzYWJsZU5vZGVzLmFkZChub2RlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJlbGVhc2FibGVOb2Rlcy5hZGQobm9kZSk7XG4gICAgICByZWxlYXNhYmxlTm9kZXNGb3VuZFRoaXNJdGVyYXRpb24uYWRkKG5vZGUpO1xuICAgIH0gLy8gSWYgd2UgZm91bmQgYW55IHJlbGVhc2FibGUgbm9kZXMsIHdlIG5lZWQgdG8gd2FsayBVUCBmcm9tIHRob3NlIG5vZGVzIHRvXG4gICAgLy8gZmluZCB3aGV0aGVyIHRoZWlyIHBhcmVudHMgY2FuIG5vdyBiZSByZWxlYXNlZCBhcyB3ZWxsOlxuXG5cbiAgICBjb25zdCBwYXJlbnRzID0gbmV3IFNldCgpO1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHJlbGVhc2FibGVOb2Rlc0ZvdW5kVGhpc0l0ZXJhdGlvbikge1xuICAgICAgZm9yIChjb25zdCBwYXJlbnQgb2YgKF9ncmFwaCRub2RlRGVwcyRnZXQgPSBncmFwaC5ub2RlRGVwcy5nZXQobm9kZSkpICE9PSBudWxsICYmIF9ncmFwaCRub2RlRGVwcyRnZXQgIT09IHZvaWQgMCA/IF9ncmFwaCRub2RlRGVwcyRnZXQgOiBlbXB0eVNldCQxKSB7XG4gICAgICAgIHZhciBfZ3JhcGgkbm9kZURlcHMkZ2V0O1xuXG4gICAgICAgIGlmICghcmVsZWFzYWJsZU5vZGVzLmhhcyhwYXJlbnQpKSB7XG4gICAgICAgICAgcGFyZW50cy5hZGQocGFyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJlbnRzLnNpemUpIHtcbiAgICAgIGZpbmRSZWxlYXNhYmxlTm9kZXNJbm5lcihwYXJlbnRzKTtcbiAgICB9XG4gIH1cbn0gLy8gQ2hpbGRyZW4gYmVmb3JlIHBhcmVudHNcblxuXG5mdW5jdGlvbiBnZXREb3duc3RyZWFtTm9kZXNJblRvcG9sb2dpY2FsT3JkZXIoc3RvcmUsIHRyZWVTdGF0ZSwgbm9kZXMsIC8vIE11dGFibGUgc2V0IGlzIGRlc3Ryb3llZCBpbiBwbGFjZVxuZG9Ob3REZXNjZW5kSW50bzEsIGRvTm90RGVzY2VuZEludG8yKSB7XG4gIGNvbnN0IGdyYXBoID0gc3RvcmUuZ2V0R3JhcGgodHJlZVN0YXRlLnZlcnNpb24pO1xuICBjb25zdCBhbnN3ZXIgPSBbXTtcbiAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcblxuICB3aGlsZSAobm9kZXMuc2l6ZSA+IDApIHtcbiAgICB2aXNpdChSZWNvaWxfbnVsbHRocm93cyhub2Rlcy52YWx1ZXMoKS5uZXh0KCkudmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiBhbnN3ZXI7XG5cbiAgZnVuY3Rpb24gdmlzaXQobm9kZSkge1xuICAgIGlmIChkb05vdERlc2NlbmRJbnRvMS5oYXMobm9kZSkgfHwgZG9Ob3REZXNjZW5kSW50bzIuaGFzKG5vZGUpKSB7XG4gICAgICBub2Rlcy5kZWxldGUobm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZpc2l0ZWQuaGFzKG5vZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBncmFwaC5ub2RlVG9Ob2RlU3Vic2NyaXB0aW9ucy5nZXQobm9kZSk7XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgdmlzaXQoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICAgIG5vZGVzLmRlbGV0ZShub2RlKTtcbiAgICBhbnN3ZXIucHVzaChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlTm9kZShzdG9yZSwgdHJlZVN0YXRlLCBub2RlKSB7XG4gIGlmICghUmVjb2lsX2dreF8xKCdyZWNvaWxfbWVtb3J5X21hbmFnYW1lbnRfMjAyMCcpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIEF0b20gZWZmZWN0cywgaW4tY2xvc3VyZSBjYWNoZXMsIGV0Yy46XG5cblxuICBjbGVhblVwTm9kZSQxKHN0b3JlLCBub2RlKTsgLy8gRGVsZXRlIGZyb20gc3RvcmUgc3RhdGU6XG5cbiAgY29uc3Qgc3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIHN0b3JlU3RhdGUua25vd25BdG9tcy5kZWxldGUobm9kZSk7XG4gIHN0b3JlU3RhdGUua25vd25TZWxlY3RvcnMuZGVsZXRlKG5vZGUpO1xuICBzdG9yZVN0YXRlLm5vZGVUcmFuc2FjdGlvblN1YnNjcmlwdGlvbnMuZGVsZXRlKG5vZGUpO1xuICBzdG9yZVN0YXRlLnJldGVudGlvbi5yZWZlcmVuY2VDb3VudHMuZGVsZXRlKG5vZGUpO1xuICBjb25zdCB6b25lcyA9IHpvbmVzVGhhdENvdWxkUmV0YWluTm9kZShub2RlKTtcblxuICBmb3IgKGNvbnN0IHpvbmUgb2Ygem9uZXMpIHtcbiAgICB2YXIgX3N0b3JlU3RhdGUkcmV0ZW50aW9uMjtcblxuICAgIChfc3RvcmVTdGF0ZSRyZXRlbnRpb24yID0gc3RvcmVTdGF0ZS5yZXRlbnRpb24ubm9kZXNSZXRhaW5lZEJ5Wm9uZS5nZXQoem9uZSkpID09PSBudWxsIHx8IF9zdG9yZVN0YXRlJHJldGVudGlvbjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdG9yZVN0YXRlJHJldGVudGlvbjIuZGVsZXRlKG5vZGUpO1xuICB9IC8vIE5vdGUgdGhhdCB3ZSBETyBOT1QgZGVsZXRlIGZyb20gbm9kZVRvQ29tcG9uZW50U3Vic2NyaXB0aW9ucyBiZWNhdXNlIHRoaXNcbiAgLy8gYWxyZWFkeSBoYXBwZW5zIHdoZW4gdGhlIGxhc3QgY29tcG9uZW50IHRoYXQgd2FzIHJldGFpbmluZyB0aGUgbm9kZSB1bm1vdW50cyxcbiAgLy8gYW5kIHRoaXMgY291bGQgaGFwcGVuIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhhdC5cbiAgLy8gRGVsZXRlIGZyb20gVHJlZVN0YXRlIGFuZCBkZXAgZ3JhcGg6XG5cblxuICB0cmVlU3RhdGUuYXRvbVZhbHVlcy5kZWxldGUobm9kZSk7XG4gIHRyZWVTdGF0ZS5kaXJ0eUF0b21zLmRlbGV0ZShub2RlKTtcbiAgdHJlZVN0YXRlLm5vbnZhbGlkYXRlZEF0b21zLmRlbGV0ZShub2RlKTtcbiAgY29uc3QgZ3JhcGggPSBzdG9yZVN0YXRlLmdyYXBoc0J5VmVyc2lvbi5nZXQodHJlZVN0YXRlLnZlcnNpb24pO1xuXG4gIGlmIChncmFwaCkge1xuICAgIGNvbnN0IGRlcHMgPSBncmFwaC5ub2RlRGVwcy5nZXQobm9kZSk7XG5cbiAgICBpZiAoZGVwcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBncmFwaC5ub2RlRGVwcy5kZWxldGUobm9kZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZGVwIG9mIGRlcHMpIHtcbiAgICAgICAgdmFyIF9ncmFwaCRub2RlVG9Ob2RlU3VicztcblxuICAgICAgICAoX2dyYXBoJG5vZGVUb05vZGVTdWJzID0gZ3JhcGgubm9kZVRvTm9kZVN1YnNjcmlwdGlvbnMuZ2V0KGRlcCkpID09PSBudWxsIHx8IF9ncmFwaCRub2RlVG9Ob2RlU3VicyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2dyYXBoJG5vZGVUb05vZGVTdWJzLmRlbGV0ZShub2RlKTtcbiAgICAgIH1cbiAgICB9IC8vIE5vIG5lZWQgdG8gZGVsZXRlIHN1YidzIGRlcHMgYXMgdGhlcmUgc2hvdWxkIGJlIG5vIHN1YnMgYXQgdGhpcyBwb2ludC5cbiAgICAvLyBCdXQgYW4gaW52YXJpYW50IHdvdWxkIHJlcXVpcmUgZGVsZXRpbmcgbm9kZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG5cblxuICAgIGdyYXBoLm5vZGVUb05vZGVTdWJzY3JpcHRpb25zLmRlbGV0ZShub2RlKTtcbiAgfSAvLyBOb2RlIGNvbmZpZyAoZm9yIGZhbWlseSBtZW1iZXJzIG9ubHkgYXMgdGhlaXIgY29uZmlncyBjYW4gYmUgcmVjcmVhdGVkLCBhbmRcbiAgLy8gb25seSBpZiB0aGV5IGFyZSBub3QgcmV0YWluZWQgd2l0aGluIGFueSBvdGhlciBTdG9yZXMpOlxuXG5cbiAgZGVsZXRlTm9kZUNvbmZpZ0lmUG9zc2libGUkMShub2RlKTtcbn1cblxuZnVuY3Rpb24gbm9kZXNSZXRhaW5lZEJ5Wm9uZShzdG9yZVN0YXRlLCB6b25lKSB7XG4gIHZhciBfc3RvcmVTdGF0ZSRyZXRlbnRpb24zO1xuXG4gIHJldHVybiAoX3N0b3JlU3RhdGUkcmV0ZW50aW9uMyA9IHN0b3JlU3RhdGUucmV0ZW50aW9uLm5vZGVzUmV0YWluZWRCeVpvbmUuZ2V0KHpvbmUpKSAhPT0gbnVsbCAmJiBfc3RvcmVTdGF0ZSRyZXRlbnRpb24zICE9PSB2b2lkIDAgPyBfc3RvcmVTdGF0ZSRyZXRlbnRpb24zIDogZW1wdHlTZXQkMTtcbn1cblxuZnVuY3Rpb24gem9uZXNUaGF0Q291bGRSZXRhaW5Ob2RlKG5vZGUpIHtcbiAgY29uc3QgcmV0YWluZWRCeSA9IGdldE5vZGUkMihub2RlKS5yZXRhaW5lZEJ5O1xuXG4gIGlmIChyZXRhaW5lZEJ5ID09PSB1bmRlZmluZWQgfHwgcmV0YWluZWRCeSA9PT0gJ2NvbXBvbmVudHMnIHx8IHJldGFpbmVkQnkgPT09ICdyZWNvaWxSb290Jykge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIGlmIChyZXRhaW5lZEJ5IGluc3RhbmNlb2YgUmV0ZW50aW9uWm9uZSQyKSB7XG4gICAgcmV0dXJuIFtyZXRhaW5lZEJ5XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmV0YWluZWRCeTsgLy8gaXQncyBhbiBhcnJheSBvZiB6b25lc1xuICB9XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlT3JQZXJmb3JtUG9zc2libGVSZWxlYXNlT2ZSZXRhaW5hYmxlKHN0b3JlLCByZXRhaW5hYmxlKSB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICBpZiAoc3RhdGUubmV4dFRyZWUpIHtcbiAgICBzdGF0ZS5yZXRlbnRpb24ucmV0YWluYWJsZXNUb0NoZWNrRm9yUmVsZWFzZS5hZGQocmV0YWluYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVsZWFzZVJldGFpbmFibGVzTm93T25DdXJyZW50VHJlZShzdG9yZSwgbmV3IFNldChbcmV0YWluYWJsZV0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVSZXRhaW5Db3VudChzdG9yZSwgcmV0YWluYWJsZSwgZGVsdGEpIHtcbiAgdmFyIF9tYXAkZ2V0O1xuXG4gIGlmICghUmVjb2lsX2dreF8xKCdyZWNvaWxfbWVtb3J5X21hbmFnYW1lbnRfMjAyMCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWFwID0gc3RvcmUuZ2V0U3RhdGUoKS5yZXRlbnRpb24ucmVmZXJlbmNlQ291bnRzO1xuICBjb25zdCBuZXdDb3VudCA9ICgoX21hcCRnZXQgPSBtYXAuZ2V0KHJldGFpbmFibGUpKSAhPT0gbnVsbCAmJiBfbWFwJGdldCAhPT0gdm9pZCAwID8gX21hcCRnZXQgOiAwKSArIGRlbHRhO1xuXG4gIGlmIChuZXdDb3VudCA9PT0gMCkge1xuICAgIG1hcC5kZWxldGUocmV0YWluYWJsZSk7XG4gICAgc2NoZWR1bGVPclBlcmZvcm1Qb3NzaWJsZVJlbGVhc2VPZlJldGFpbmFibGUoc3RvcmUsIHJldGFpbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIG1hcC5zZXQocmV0YWluYWJsZSwgbmV3Q291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VTY2hlZHVsZWRSZXRhaW5hYmxlc05vdyhzdG9yZSkge1xuICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgcmVsZWFzZVJldGFpbmFibGVzTm93T25DdXJyZW50VHJlZShzdG9yZSwgc3RhdGUucmV0ZW50aW9uLnJldGFpbmFibGVzVG9DaGVja0ZvclJlbGVhc2UpO1xuICBzdGF0ZS5yZXRlbnRpb24ucmV0YWluYWJsZXNUb0NoZWNrRm9yUmVsZWFzZS5jbGVhcigpO1xufVxuXG5mdW5jdGlvbiByZXRhaW5lZEJ5T3B0aW9uV2l0aERlZmF1bHQocikge1xuICAvLyBUaGUgZGVmYXVsdCB3aWxsIGNoYW5nZSBmcm9tICdyZWNvaWxSb290JyB0byAnY29tcG9uZW50cycgaW4gdGhlIGZ1dHVyZS5cbiAgcmV0dXJuIHIgPT09IHVuZGVmaW5lZCA/ICdyZWNvaWxSb290JyA6IHI7XG59XG5cbnZhciBSZWNvaWxfUmV0ZW50aW9uID0ge1xuICB1cGRhdGVSZXRhaW5Db3VudCxcbiAgcmVsZWFzZVNjaGVkdWxlZFJldGFpbmFibGVzTm93LFxuICByZXRhaW5lZEJ5T3B0aW9uV2l0aERlZmF1bHRcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuLyoqXG4gKiBDb21iaW5lcyBtdWx0aXBsZSBJdGVyYWJsZXMgaW50byBhIHNpbmdsZSBJdGVyYWJsZS5cbiAqIFRyYXZlcnNlcyB0aGUgaW5wdXQgSXRlcmFibGVzIGluIHRoZSBvcmRlciBwcm92aWRlZCBhbmQgbWFpbnRhaW5zIHRoZSBvcmRlclxuICogb2YgdGhlaXIgZWxlbWVudHMuXG4gKlxuICogRXhhbXBsZTpcbiAqIGBgYFxuICogY29uc3QgciA9IEFycmF5LmZyb20oY29uY2F0SXRlcmFibGVzKFsnYScsICdiJ10sIFsnYyddLCBbJ2QnLCAnZScsICdmJ10pKTtcbiAqIHIgPT0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZiddO1xuICogYGBgXG4gKi9cblxuZnVuY3Rpb24qIGNvbmNhdEl0ZXJhYmxlcyhpdGVycykge1xuICBmb3IgKGNvbnN0IGl0ZXIgb2YgaXRlcnMpIHtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBpdGVyKSB7XG4gICAgICB5aWVsZCB2YWw7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWNvaWxfY29uY2F0SXRlcmFibGVzID0gY29uY2F0SXRlcmFibGVzO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuY29uc3QgaXNTU1IgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmNvbnN0IGlzUmVhY3ROYXRpdmUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmYi13d3cvdHlwZW9mLXVuZGVmaW5lZFxuXG52YXIgUmVjb2lsX0Vudmlyb25tZW50ID0ge1xuICBpc1NTUixcbiAgaXNSZWFjdE5hdGl2ZVxufTtcblxuY29uc3Qge1xuICBpc1NTUjogaXNTU1IkMVxufSA9IFJlY29pbF9FbnZpcm9ubWVudDtcblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgYmF0Y2hVcGRhdGVzOiBiYXRjaFVwZGF0ZXMkMVxufSA9IFJlY29pbF9CYXRjaGluZztcblxuY29uc3Qge1xuICBpbml0aWFsaXplTm9kZUlmTmV3VG9TdG9yZTogaW5pdGlhbGl6ZU5vZGVJZk5ld1RvU3RvcmUkMSxcbiAgcGVla05vZGVJbmZvOiBwZWVrTm9kZUluZm8kMVxufSA9IFJlY29pbF9GdW5jdGlvbmFsQ29yZTtcblxuY29uc3Qge1xuICBncmFwaDogZ3JhcGgkMlxufSA9IFJlY29pbF9HcmFwaDtcblxuY29uc3Qge1xuICBERUZBVUxUX1ZBTFVFOiBERUZBVUxUX1ZBTFVFJDEsXG4gIHJlY29pbFZhbHVlczogcmVjb2lsVmFsdWVzJDEsXG4gIHJlY29pbFZhbHVlc0ZvcktleXM6IHJlY29pbFZhbHVlc0ZvcktleXMkMlxufSA9IFJlY29pbF9Ob2RlO1xuXG5jb25zdCB7XG4gIEFic3RyYWN0UmVjb2lsVmFsdWU6IEFic3RyYWN0UmVjb2lsVmFsdWUkMixcbiAgZ2V0UmVjb2lsVmFsdWVBc0xvYWRhYmxlOiBnZXRSZWNvaWxWYWx1ZUFzTG9hZGFibGUkMSxcbiAgc2V0UmVjb2lsVmFsdWU6IHNldFJlY29pbFZhbHVlJDEsXG4gIHNldFVudmFsaWRhdGVkUmVjb2lsVmFsdWU6IHNldFVudmFsaWRhdGVkUmVjb2lsVmFsdWUkMVxufSA9IFJlY29pbF9SZWNvaWxWYWx1ZUludGVyZmFjZTtcblxuY29uc3Qge1xuICBnZXROZXh0VHJlZVN0YXRlVmVyc2lvbjogZ2V0TmV4dFRyZWVTdGF0ZVZlcnNpb24kMSxcbiAgbWFrZUVtcHR5U3RvcmVTdGF0ZTogbWFrZUVtcHR5U3RvcmVTdGF0ZSQxXG59ID0gUmVjb2lsX1N0YXRlOyAvLyBPcGFxdWUgYXQgdGhpcyBzdXJmYWNlIGJlY2F1c2UgaXQncyBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIGZyb20gaGVyZS5cblxuXG4vLyBBIFwiU25hcHNob3RcIiBpcyBcInJlYWQtb25seVwiIGFuZCBjYXB0dXJlcyBhIHNwZWNpZmljIHNldCBvZiB2YWx1ZXMgb2YgYXRvbXMuXG4vLyBIb3dldmVyLCB0aGUgZGF0YS1mbG93LWdyYXBoIGFuZCBzZWxlY3RvciB2YWx1ZXMgbWF5IGV2b2x2ZSBhcyBzZWxlY3RvclxuLy8gZXZhbHVhdGlvbiBmdW5jdGlvbnMgYXJlIGV4ZWN1dGVkIGFuZCBhc3luYyBzZWxlY3RvcnMgcmVzb2x2ZS5cbmNsYXNzIFNuYXBzaG90IHtcbiAgY29uc3RydWN0b3Ioc3RvcmVTdGF0ZSkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9zdG9yZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3JlZkNvdW50XCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0TG9hZGFibGVcIiwgcmVjb2lsVmFsdWUgPT4ge1xuICAgICAgdGhpcy5jaGVja1JlZkNvdW50X0lOVEVSTkFMKCk7XG4gICAgICByZXR1cm4gZ2V0UmVjb2lsVmFsdWVBc0xvYWRhYmxlJDEodGhpcy5fc3RvcmUsIHJlY29pbFZhbHVlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFByb21pc2VcIiwgcmVjb2lsVmFsdWUgPT4ge1xuICAgICAgdGhpcy5jaGVja1JlZkNvdW50X0lOVEVSTkFMKCk7XG4gICAgICByZXR1cm4gdGhpcy5nZXRMb2FkYWJsZShyZWNvaWxWYWx1ZSkudG9Qcm9taXNlKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXROb2Rlc19VTlNUQUJMRVwiLCBvcHQgPT4ge1xuICAgICAgdGhpcy5jaGVja1JlZkNvdW50X0lOVEVSTkFMKCk7IC8vIFRPRE8gRGVhbCB3aXRoIG1vZGlmaWVkIHNlbGVjdG9yc1xuXG4gICAgICBpZiAoKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5pc01vZGlmaWVkKSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5pc0luaXRpYWxpemVkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3N0b3JlLmdldFN0YXRlKCkuY3VycmVudFRyZWU7XG5cbiAgICAgICAgcmV0dXJuIHJlY29pbFZhbHVlc0ZvcktleXMkMihzdGF0ZS5kaXJ0eUF0b21zKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qga25vd25BdG9tcyA9IHRoaXMuX3N0b3JlLmdldFN0YXRlKCkua25vd25BdG9tcztcblxuICAgICAgY29uc3Qga25vd25TZWxlY3RvcnMgPSB0aGlzLl9zdG9yZS5nZXRTdGF0ZSgpLmtub3duU2VsZWN0b3JzO1xuXG4gICAgICByZXR1cm4gKG9wdCA9PT0gbnVsbCB8fCBvcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdC5pc0luaXRpYWxpemVkKSA9PSBudWxsID8gcmVjb2lsVmFsdWVzJDEudmFsdWVzKCkgOiBvcHQuaXNJbml0aWFsaXplZCA9PT0gdHJ1ZSA/IHJlY29pbFZhbHVlc0ZvcktleXMkMihSZWNvaWxfY29uY2F0SXRlcmFibGVzKFt0aGlzLl9zdG9yZS5nZXRTdGF0ZSgpLmtub3duQXRvbXMsIHRoaXMuX3N0b3JlLmdldFN0YXRlKCkua25vd25TZWxlY3RvcnNdKSkgOiBSZWNvaWxfZmlsdGVySXRlcmFibGUocmVjb2lsVmFsdWVzJDEudmFsdWVzKCksICh7XG4gICAgICAgIGtleVxuICAgICAgfSkgPT4gIWtub3duQXRvbXMuaGFzKGtleSkgJiYgIWtub3duU2VsZWN0b3JzLmhhcyhrZXkpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEluZm9fVU5TVEFCTEVcIiwgKHtcbiAgICAgIGtleVxuICAgIH0pID0+IHtcbiAgICAgIHRoaXMuY2hlY2tSZWZDb3VudF9JTlRFUk5BTCgpO1xuICAgICAgcmV0dXJuIHBlZWtOb2RlSW5mbyQxKHRoaXMuX3N0b3JlLCB0aGlzLl9zdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRUcmVlLCBrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibWFwXCIsIG1hcHBlciA9PiB7XG4gICAgICB0aGlzLmNoZWNrUmVmQ291bnRfSU5URVJOQUwoKTtcbiAgICAgIGNvbnN0IG11dGFibGVTbmFwc2hvdCA9IG5ldyBNdXRhYmxlU25hcHNob3QodGhpcyk7XG4gICAgICBtYXBwZXIobXV0YWJsZVNuYXBzaG90KTsgLy8gaWYgcmVtb3ZpbmcgYmF0Y2hVcGRhdGVzIGZyb20gYHNldGAgYWRkIGl0IGhlcmVcblxuICAgICAgcmV0dXJuIGNsb25lU25hcHNob3QobXV0YWJsZVNuYXBzaG90LmdldFN0b3JlX0lOVEVSTkFMKCkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXN5bmNNYXBcIiwgYXN5bmMgbWFwcGVyID0+IHtcbiAgICAgIHRoaXMuY2hlY2tSZWZDb3VudF9JTlRFUk5BTCgpO1xuICAgICAgY29uc3QgbXV0YWJsZVNuYXBzaG90ID0gbmV3IE11dGFibGVTbmFwc2hvdCh0aGlzKTtcbiAgICAgIGF3YWl0IG1hcHBlcihtdXRhYmxlU25hcHNob3QpO1xuICAgICAgcmV0dXJuIGNsb25lU25hcHNob3QobXV0YWJsZVNuYXBzaG90LmdldFN0b3JlX0lOVEVSTkFMKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3RvcmUgPSB7XG4gICAgICBnZXRTdGF0ZTogKCkgPT4gc3RvcmVTdGF0ZSxcbiAgICAgIHJlcGxhY2VTdGF0ZTogcmVwbGFjZXIgPT4ge1xuICAgICAgICBzdG9yZVN0YXRlLmN1cnJlbnRUcmVlID0gcmVwbGFjZXIoc3RvcmVTdGF0ZS5jdXJyZW50VHJlZSk7IC8vIG5vIGJhdGNoaW5nIHNvIG5leHRUcmVlIGlzIG5ldmVyIGFjdGl2ZVxuICAgICAgfSxcbiAgICAgIGdldEdyYXBoOiB2ZXJzaW9uID0+IHtcbiAgICAgICAgY29uc3QgZ3JhcGhzID0gc3RvcmVTdGF0ZS5ncmFwaHNCeVZlcnNpb247XG5cbiAgICAgICAgaWYgKGdyYXBocy5oYXModmVyc2lvbikpIHtcbiAgICAgICAgICByZXR1cm4gUmVjb2lsX251bGx0aHJvd3MoZ3JhcGhzLmdldCh2ZXJzaW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdHcmFwaCA9IGdyYXBoJDIoKTtcbiAgICAgICAgZ3JhcGhzLnNldCh2ZXJzaW9uLCBuZXdHcmFwaCk7XG4gICAgICAgIHJldHVybiBuZXdHcmFwaDtcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpYmVUb1RyYW5zYWN0aW9uczogKCkgPT4gKHtcbiAgICAgICAgcmVsZWFzZTogKCkgPT4ge31cbiAgICAgIH0pLFxuICAgICAgYWRkVHJhbnNhY3Rpb25NZXRhZGF0YTogKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzdWJzY3JpYmUgdG8gU25hcHNob3RzJyk7XG4gICAgICB9XG4gICAgfTsgLy8gSW5pdGlhbGl6ZSBhbnkgbm9kZXMgdGhhdCBhcmUgbGl2ZSBpbiB0aGUgcGFyZW50IHN0b3JlIChwcmltYXJpbHkgc28gdGhhdCB0aGlzXG4gICAgLy8gc25hcHNob3QgZ2V0cyBjb3VudGVkIHRvd2FyZHMgdGhlIG5vZGUncyBsaXZlIHN0b3JlcyBjb3VudCkuXG5cbiAgICBmb3IgKGNvbnN0IG5vZGVLZXkgb2YgdGhpcy5fc3RvcmUuZ2V0U3RhdGUoKS5ub2RlQ2xlYW51cEZ1bmN0aW9ucy5rZXlzKCkpIHtcbiAgICAgIGluaXRpYWxpemVOb2RlSWZOZXdUb1N0b3JlJDEodGhpcy5fc3RvcmUsIHN0b3JlU3RhdGUuY3VycmVudFRyZWUsIG5vZGVLZXksICdnZXQnKTtcbiAgICB9XG5cbiAgICB0aGlzLnJldGFpbigpO1xuICAgIHRoaXMuYXV0b3JlbGVhc2UoKTtcbiAgfVxuXG4gIHJldGFpbigpIHtcbiAgICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgICAgcmV0dXJuICgpID0+IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWZDb3VudCsrO1xuICAgIGxldCByZWxlYXNlZCA9IGZhbHNlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJlbGVhc2VkKSB7XG4gICAgICAgIHJlbGVhc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGF1dG9yZWxlYXNlKCkge1xuICAgIGlmICghUmVjb2lsX2dreF8xKCdyZWNvaWxfbWVtb3J5X21hbmFnYW1lbnRfMjAyMCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFpc1NTUiQxKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbGVhc2UoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgcmVsZWFzZSgpIHtcbiAgICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3JlZkNvdW50LS07XG5cbiAgICBpZiAodGhpcy5fcmVmQ291bnQgPT09IDApIDtcbiAgfVxuXG4gIGNoZWNrUmVmQ291bnRfSU5URVJOQUwoKSB7XG4gICAgaWYgKFJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSAmJiB0aGlzLl9yZWZDb3VudCA8PSAwKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbignUmVjb2lsIFNuYXBzaG90cyBvbmx5IGxhc3QgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgY2FsbGJhY2sgdGhleSBhcmUgcHJvdmlkZWQgdG8uIFRvIGtlZXAgYSBTbmFwc2hvdCBsb25nZXIsIGNhbGwgaXRzIHJldGFpbigpIG1ldGhvZCAoYW5kIHRoZW4gY2FsbCByZWxlYXNlKCkgd2hlbiB5b3UgYXJlIGRvbmUgd2l0aCBpdCkuIFRoaXMgaXMgY3VycmVudGx5IGEgREVWLW9ubHkgd2FybmluZyBidXQgd2lsbCBiZWNvbWUgYSByZWFsIGVycm9yIHNvb24uIFBsZWFzZSByZWFjaCBvdXQgdG8gRGF2ZSBNY0NhYmUgZm9yIGhlbHAgZml4aW5nIHRoaXMuIFRvIHRlbXBvcmFyaWx5IHN1cHByZXNzIHRoaXMgd2FybmluZyBhZGQgZ2tfZGlzYWJsZT1yZWNvaWxfbWVtb3J5X21hbmFnYW1lbnRfMjAyMCB0byB0aGUgVVJMLicpO1xuICAgICAgfSAvLyBXaGF0IHdlIHdpbGwgc2hpcCBsYXRlcjpcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcbiAgICAgIC8vICdSZWNvaWwgU25hcHNob3RzIG9ubHkgbGFzdCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBjYWxsYmFjayB0aGV5IGFyZSBwcm92aWRlZCB0by4gVG8ga2VlcCBhIFNuYXBzaG90IGxvbmdlciwgY2FsbCBpdHMgcmV0YWluKCkgbWV0aG9kIChhbmQgdGhlbiBjYWxsIHJlbGVhc2UoKSB3aGVuIHlvdSBhcmUgZG9uZSB3aXRoIGl0KS4nLFxuICAgICAgLy8gKTtcblxuICAgIH1cbiAgfVxuXG4gIGdldFN0b3JlX0lOVEVSTkFMKCkge1xuICAgIHRoaXMuY2hlY2tSZWZDb3VudF9JTlRFUk5BTCgpO1xuICAgIHJldHVybiB0aGlzLl9zdG9yZTtcbiAgfVxuXG4gIGdldElEKCkge1xuICAgIHRoaXMuY2hlY2tSZWZDb3VudF9JTlRFUk5BTCgpO1xuICAgIHJldHVybiB0aGlzLmdldElEX0lOVEVSTkFMKCk7XG4gIH1cblxuICBnZXRJRF9JTlRFUk5BTCgpIHtcbiAgICB0aGlzLmNoZWNrUmVmQ291bnRfSU5URVJOQUwoKTtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZS5zdGF0ZUlEO1xuICB9IC8vIFdlIHdhbnQgdG8gYWxsb3cgdGhlIG1ldGhvZHMgdG8gYmUgZGVzdHJ1Y3R1cmVkIGFuZCB1c2VkIGFzIGFjY2Vzc29yc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmItd3d3L2V4dHJhLWFycm93LWluaXRpYWxpemVyXG5cblxufVxuXG5mdW5jdGlvbiBjbG9uZVN0b3JlU3RhdGUoc3RvcmUsIHRyZWVTdGF0ZSwgYnVtcFZlcnNpb24gPSBmYWxzZSkge1xuICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgdmVyc2lvbiA9IGJ1bXBWZXJzaW9uID8gZ2V0TmV4dFRyZWVTdGF0ZVZlcnNpb24kMSgpIDogdHJlZVN0YXRlLnZlcnNpb247XG4gIHJldHVybiB7XG4gICAgY3VycmVudFRyZWU6IGJ1bXBWZXJzaW9uID8ge1xuICAgICAgLy8gVE9ETyBzbmFwc2hvdHMgc2hvdWxkbid0IHJlYWxseSBoYXZlIHZlcnNpb25zIGJlY2F1c2UgYSBuZXcgdmVyc2lvbiBudW1iZXJcbiAgICAgIC8vIGlzIGFsd2F5cyBhc3NpZ25lZCB3aGVuIHRoZSBzbmFwc2hvdCBpcyBnb25lIHRvLlxuICAgICAgdmVyc2lvbixcbiAgICAgIHN0YXRlSUQ6IHZlcnNpb24sXG4gICAgICB0cmFuc2FjdGlvbk1ldGFkYXRhOiB7IC4uLnRyZWVTdGF0ZS50cmFuc2FjdGlvbk1ldGFkYXRhXG4gICAgICB9LFxuICAgICAgZGlydHlBdG9tczogbmV3IFNldCh0cmVlU3RhdGUuZGlydHlBdG9tcyksXG4gICAgICBhdG9tVmFsdWVzOiB0cmVlU3RhdGUuYXRvbVZhbHVlcy5jbG9uZSgpLFxuICAgICAgbm9udmFsaWRhdGVkQXRvbXM6IHRyZWVTdGF0ZS5ub252YWxpZGF0ZWRBdG9tcy5jbG9uZSgpXG4gICAgfSA6IHRyZWVTdGF0ZSxcbiAgICBuZXh0VHJlZTogbnVsbCxcbiAgICBwcmV2aW91c1RyZWU6IG51bGwsXG4gICAga25vd25BdG9tczogbmV3IFNldChzdG9yZVN0YXRlLmtub3duQXRvbXMpLFxuICAgIC8vIEZJWE1FIGhlcmUncyBhIGNvcHlcbiAgICBrbm93blNlbGVjdG9yczogbmV3IFNldChzdG9yZVN0YXRlLmtub3duU2VsZWN0b3JzKSxcbiAgICAvLyBGSVhNRSBoZXJlJ3MgYSBjb3B5XG4gICAgdHJhbnNhY3Rpb25TdWJzY3JpcHRpb25zOiBuZXcgTWFwKCksXG4gICAgbm9kZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9uczogbmV3IE1hcCgpLFxuICAgIG5vZGVUb0NvbXBvbmVudFN1YnNjcmlwdGlvbnM6IG5ldyBNYXAoKSxcbiAgICBxdWV1ZWRDb21wb25lbnRDYWxsYmFja3NfREVQUkVDQVRFRDogW10sXG4gICAgc3VzcGVuZGVkQ29tcG9uZW50UmVzb2x2ZXJzOiBuZXcgU2V0KCksXG4gICAgZ3JhcGhzQnlWZXJzaW9uOiBuZXcgTWFwKCkuc2V0KHZlcnNpb24sIHN0b3JlLmdldEdyYXBoKHRyZWVTdGF0ZS52ZXJzaW9uKSksXG4gICAgdmVyc2lvbnNVc2VkQnlDb21wb25lbnQ6IG5ldyBNYXAoKSxcbiAgICByZXRlbnRpb246IHtcbiAgICAgIHJlZmVyZW5jZUNvdW50czogbmV3IE1hcCgpLFxuICAgICAgbm9kZXNSZXRhaW5lZEJ5Wm9uZTogbmV3IE1hcCgpLFxuICAgICAgcmV0YWluYWJsZXNUb0NoZWNrRm9yUmVsZWFzZTogbmV3IFNldCgpXG4gICAgfSxcbiAgICBub2RlQ2xlYW51cEZ1bmN0aW9uczogbmV3IE1hcCgpXG4gIH07XG59IC8vIEZhY3RvcnkgdG8gYnVpbGQgYSBmcmVzaCBzbmFwc2hvdFxuXG5cbmZ1bmN0aW9uIGZyZXNoU25hcHNob3QoaW5pdGlhbGl6ZVN0YXRlKSB7XG4gIGNvbnN0IHNuYXBzaG90ID0gbmV3IFNuYXBzaG90KG1ha2VFbXB0eVN0b3JlU3RhdGUkMSgpKTtcbiAgcmV0dXJuIGluaXRpYWxpemVTdGF0ZSAhPSBudWxsID8gc25hcHNob3QubWFwKGluaXRpYWxpemVTdGF0ZSkgOiBzbmFwc2hvdDtcbn0gLy8gRmFjdG9yeSB0byBjbG9uZSBhIHNuYXBhaG90IHN0YXRlXG5cblxuZnVuY3Rpb24gY2xvbmVTbmFwc2hvdChzdG9yZSwgdmVyc2lvbiA9ICdjdXJyZW50Jykge1xuICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgdHJlZVN0YXRlID0gdmVyc2lvbiA9PT0gJ2N1cnJlbnQnID8gc3RvcmVTdGF0ZS5jdXJyZW50VHJlZSA6IFJlY29pbF9udWxsdGhyb3dzKHN0b3JlU3RhdGUucHJldmlvdXNUcmVlKTtcbiAgcmV0dXJuIG5ldyBTbmFwc2hvdChjbG9uZVN0b3JlU3RhdGUoc3RvcmUsIHRyZWVTdGF0ZSkpO1xufVxuXG5jbGFzcyBNdXRhYmxlU25hcHNob3QgZXh0ZW5kcyBTbmFwc2hvdCB7XG4gIGNvbnN0cnVjdG9yKHNuYXBzaG90KSB7XG4gICAgc3VwZXIoY2xvbmVTdG9yZVN0YXRlKHNuYXBzaG90LmdldFN0b3JlX0lOVEVSTkFMKCksIHNuYXBzaG90LmdldFN0b3JlX0lOVEVSTkFMKCkuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZSwgdHJ1ZSkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic2V0XCIsIChyZWNvaWxTdGF0ZSwgbmV3VmFsdWVPclVwZGF0ZXIpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tSZWZDb3VudF9JTlRFUk5BTCgpOyAvLyBUaGlzIGJhdGNoVXBkYXRlcyBlbnN1cmVzIHRoaXMgYHNldGAgaXMgYXBwbGllZCBpbW1lZGlhdGVseSBhbmQgeW91IGNhblxuICAgICAgLy8gcmVhZCB0aGUgd3JpdHRlbiB2YWx1ZSBhZnRlciBjYWxsaW5nIGBzZXRgLiBJIHdvdWxkIGxpa2UgdG8gcmVtb3ZlIHRoaXNcbiAgICAgIC8vIGJlaGF2aW9yIGFuZCBvbmx5IGJhdGNoIGluIGBTbmFwc2hvdC5tYXBgLCBidXQgdGhpcyB3b3VsZCBiZSBhIGJyZWFraW5nXG4gICAgICAvLyBjaGFuZ2UgcG90ZW50aWFsbHkuXG5cbiAgICAgIGJhdGNoVXBkYXRlcyQxKCgpID0+IHtcbiAgICAgICAgc2V0UmVjb2lsVmFsdWUkMSh0aGlzLmdldFN0b3JlX0lOVEVSTkFMKCksIHJlY29pbFN0YXRlLCBuZXdWYWx1ZU9yVXBkYXRlcik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlc2V0XCIsIHJlY29pbFN0YXRlID0+IHtcbiAgICAgIHRoaXMuY2hlY2tSZWZDb3VudF9JTlRFUk5BTCgpOyAvLyBTZWUgbm90ZSBhdCBgc2V0YCBhYm91dCBiYXRjaGVkIHVwZGF0ZXMuXG5cbiAgICAgIGJhdGNoVXBkYXRlcyQxKCgpID0+IHNldFJlY29pbFZhbHVlJDEodGhpcy5nZXRTdG9yZV9JTlRFUk5BTCgpLCByZWNvaWxTdGF0ZSwgREVGQVVMVF9WQUxVRSQxKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzZXRVbnZhbGlkYXRlZEF0b21WYWx1ZXNfREVQUkVDQVRFRFwiLCB2YWx1ZXMgPT4ge1xuICAgICAgdGhpcy5jaGVja1JlZkNvdW50X0lOVEVSTkFMKCk7XG4gICAgICBjb25zdCBzdG9yZSA9IHRoaXMuZ2V0U3RvcmVfSU5URVJOQUwoKTtcbiAgICAgIGJhdGNoVXBkYXRlcyQxKCgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgdmFsdWVzLmVudHJpZXMoKSkge1xuICAgICAgICAgIHNldFVudmFsaWRhdGVkUmVjb2lsVmFsdWUkMShzdG9yZSwgbmV3IEFic3RyYWN0UmVjb2lsVmFsdWUkMihrKSwgdik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IC8vIFdlIHdhbnQgdG8gYWxsb3cgdGhlIG1ldGhvZHMgdG8gYmUgZGVzdHJ1Y3R1cmVkIGFuZCB1c2VkIGFzIGFjY2Vzc29yc1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmItd3d3L2V4dHJhLWFycm93LWluaXRpYWxpemVyXG5cblxufVxuXG52YXIgUmVjb2lsX1NuYXBzaG90ID0ge1xuICBTbmFwc2hvdCxcbiAgTXV0YWJsZVNuYXBzaG90LFxuICBmcmVzaFNuYXBzaG90LFxuICBjbG9uZVNuYXBzaG90XG59O1xuXG52YXIgUmVjb2lsX1NuYXBzaG90XzEgPSBSZWNvaWxfU25hcHNob3QuU25hcHNob3Q7XG52YXIgUmVjb2lsX1NuYXBzaG90XzIgPSBSZWNvaWxfU25hcHNob3QuTXV0YWJsZVNuYXBzaG90O1xudmFyIFJlY29pbF9TbmFwc2hvdF8zID0gUmVjb2lsX1NuYXBzaG90LmZyZXNoU25hcHNob3Q7XG52YXIgUmVjb2lsX1NuYXBzaG90XzQgPSBSZWNvaWxfU25hcHNob3QuY2xvbmVTbmFwc2hvdDtcblxudmFyIFJlY29pbF9TbmFwc2hvdCQxID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIFNuYXBzaG90OiBSZWNvaWxfU25hcHNob3RfMSxcbiAgTXV0YWJsZVNuYXBzaG90OiBSZWNvaWxfU25hcHNob3RfMixcbiAgZnJlc2hTbmFwc2hvdDogUmVjb2lsX1NuYXBzaG90XzMsXG4gIGNsb25lU25hcHNob3Q6IFJlY29pbF9TbmFwc2hvdF80XG59KTtcblxuLy8gQGZiLW9ubHk6IGNvbnN0IFJlY29pbHVzYWdlbG9nRXZlbnQgPSByZXF1aXJlKCdSZWNvaWx1c2FnZWxvZ0V2ZW50Jyk7XG4vLyBAZmItb25seTogY29uc3QgUmVjb2lsVXNhZ2VMb2dGYWxjb0V2ZW50ID0gcmVxdWlyZSgnUmVjb2lsVXNhZ2VMb2dGYWxjb0V2ZW50Jyk7XG4vLyBAZmItb25seTogY29uc3QgVVJJID0gcmVxdWlyZSgnVVJJJyk7XG5cblxuY29uc3Qge1xuICBnZXROZXh0VHJlZVN0YXRlVmVyc2lvbjogZ2V0TmV4dFRyZWVTdGF0ZVZlcnNpb24kMixcbiAgbWFrZUVtcHR5U3RvcmVTdGF0ZTogbWFrZUVtcHR5U3RvcmVTdGF0ZSQyXG59ID0gUmVjb2lsX1N0YXRlO1xuXG5cblxuXG5cbiAvLyBAZmItb25seTogY29uc3QgcmVjb3ZlcmFibGVWaW9sYXRpb24gPSByZXF1aXJlKCcuLi91dGlsL1JlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbicpO1xuXG5cblxuXG5jb25zdCB7XG4gIGNsZWFuVXBOb2RlOiBjbGVhblVwTm9kZSQyLFxuICBnZXREb3duc3RyZWFtTm9kZXM6IGdldERvd25zdHJlYW1Ob2RlcyQyLFxuICBzZXROb2RlVmFsdWU6IHNldE5vZGVWYWx1ZSQyLFxuICBzZXRVbnZhbGlkYXRlZEF0b21WYWx1ZV9ERVBSRUNBVEVEOiBzZXRVbnZhbGlkYXRlZEF0b21WYWx1ZV9ERVBSRUNBVEVEJDFcbn0gPSBSZWNvaWxfRnVuY3Rpb25hbENvcmU7XG5cbmNvbnN0IHtcbiAgZ3JhcGg6IGdyYXBoJDNcbn0gPSBSZWNvaWxfR3JhcGg7XG5cbmNvbnN0IHtcbiAgY2xvbmVHcmFwaDogY2xvbmVHcmFwaCQxXG59ID0gUmVjb2lsX0dyYXBoO1xuXG5jb25zdCB7XG4gIGFwcGx5QXRvbVZhbHVlV3JpdGVzOiBhcHBseUF0b21WYWx1ZVdyaXRlcyQxXG59ID0gUmVjb2lsX1JlY29pbFZhbHVlSW50ZXJmYWNlO1xuXG5jb25zdCB7XG4gIHJlbGVhc2VTY2hlZHVsZWRSZXRhaW5hYmxlc05vdzogcmVsZWFzZVNjaGVkdWxlZFJldGFpbmFibGVzTm93JDFcbn0gPSBSZWNvaWxfUmV0ZW50aW9uO1xuXG5jb25zdCB7XG4gIGZyZXNoU25hcHNob3Q6IGZyZXNoU25hcHNob3QkMVxufSA9IFJlY29pbF9TbmFwc2hvdCQxO1xuXG5cblxuY29uc3Qge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlXG59ID0gcmVhY3Q7XG5cbmZ1bmN0aW9uIG5vdEluQUNvbnRleHQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignVGhpcyBjb21wb25lbnQgbXVzdCBiZSB1c2VkIGluc2lkZSBhIDxSZWNvaWxSb290PiBjb21wb25lbnQuJyk7XG59XG5cbmNvbnN0IGRlZmF1bHRTdG9yZSA9IE9iamVjdC5mcmVlemUoe1xuICBnZXRTdGF0ZTogbm90SW5BQ29udGV4dCxcbiAgcmVwbGFjZVN0YXRlOiBub3RJbkFDb250ZXh0LFxuICBnZXRHcmFwaDogbm90SW5BQ29udGV4dCxcbiAgc3Vic2NyaWJlVG9UcmFuc2FjdGlvbnM6IG5vdEluQUNvbnRleHQsXG4gIGFkZFRyYW5zYWN0aW9uTWV0YWRhdGE6IG5vdEluQUNvbnRleHRcbn0pO1xubGV0IHN0YXRlUmVwbGFjZXJJc0JlaW5nRXhlY3V0ZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc3RhcnROZXh0VHJlZUlmTmVlZGVkKHN0b3JlU3RhdGUpIHtcbiAgaWYgKHN0YXRlUmVwbGFjZXJJc0JlaW5nRXhlY3V0ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIGF0b20gdXBkYXRlIHdhcyB0cmlnZ2VyZWQgd2l0aGluIHRoZSBleGVjdXRpb24gb2YgYSBzdGF0ZSB1cGRhdGVyIGZ1bmN0aW9uLiBTdGF0ZSB1cGRhdGVyIGZ1bmN0aW9ucyBwcm92aWRlZCB0byBSZWNvaWwgbXVzdCBiZSBwdXJlIGZ1bmN0aW9ucy4nKTtcbiAgfVxuXG4gIGlmIChzdG9yZVN0YXRlLm5leHRUcmVlID09PSBudWxsKSB7XG4gICAgY29uc3QgdmVyc2lvbiA9IHN0b3JlU3RhdGUuY3VycmVudFRyZWUudmVyc2lvbjtcbiAgICBjb25zdCBuZXh0VmVyc2lvbiA9IGdldE5leHRUcmVlU3RhdGVWZXJzaW9uJDIoKTtcbiAgICBzdG9yZVN0YXRlLm5leHRUcmVlID0geyAuLi5zdG9yZVN0YXRlLmN1cnJlbnRUcmVlLFxuICAgICAgdmVyc2lvbjogbmV4dFZlcnNpb24sXG4gICAgICBzdGF0ZUlEOiBuZXh0VmVyc2lvbixcbiAgICAgIGRpcnR5QXRvbXM6IG5ldyBTZXQoKSxcbiAgICAgIHRyYW5zYWN0aW9uTWV0YWRhdGE6IHt9XG4gICAgfTtcbiAgICBzdG9yZVN0YXRlLmdyYXBoc0J5VmVyc2lvbi5zZXQobmV4dFZlcnNpb24sIGNsb25lR3JhcGgkMShSZWNvaWxfbnVsbHRocm93cyhzdG9yZVN0YXRlLmdyYXBoc0J5VmVyc2lvbi5nZXQodmVyc2lvbikpKSk7XG4gIH1cbn1cblxuY29uc3QgQXBwQ29udGV4dCA9IHJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBjdXJyZW50OiBkZWZhdWx0U3RvcmVcbn0pO1xuXG5jb25zdCB1c2VTdG9yZVJlZiA9ICgpID0+IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG5cbmNvbnN0IE11dGFibGVTb3VyY2VDb250ZXh0ID0gcmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTsgLy8gVE9ETyBUMjcxMDU1OTI4MjU5OTY2MFxuXG5mdW5jdGlvbiB1c2VSZWNvaWxNdXRhYmxlU291cmNlKCkge1xuICBjb25zdCBtdXRhYmxlU291cmNlID0gdXNlQ29udGV4dChNdXRhYmxlU291cmNlQ29udGV4dCk7XG5cbiAgaWYgKG11dGFibGVTb3VyY2UgPT0gbnVsbCkge1xuICAgIFJlY29pbF9leHBlY3RhdGlvblZpb2xhdGlvbignQXR0ZW1wdGVkIHRvIHVzZSBhIFJlY29pbCBob29rIG91dHNpZGUgb2YgYSA8UmVjb2lsUm9vdD4uICcgKyAnPFJlY29pbFJvb3Q+IG11c3QgYmUgYW4gYW5jZXN0b3Igb2YgYW55IGNvbXBvbmVudCB0aGF0IHVzZXMgJyArICdSZWNvaWwgaG9va3MuJyk7XG4gIH1cblxuICByZXR1cm4gbXV0YWJsZVNvdXJjZTtcbn1cblxuZnVuY3Rpb24gc2VuZEVuZE9mQmF0Y2hOb3RpZmljYXRpb25zKHN0b3JlKSB7XG4gIGNvbnN0IHN0b3JlU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB0cmVlU3RhdGUgPSBzdG9yZVN0YXRlLmN1cnJlbnRUcmVlOyAvLyBJbmZvcm0gdHJhbnNhY3Rpb24gc3Vic2NyaWJlcnMgb2YgdGhlIHRyYW5zYWN0aW9uOlxuXG4gIGNvbnN0IGRpcnR5QXRvbXMgPSB0cmVlU3RhdGUuZGlydHlBdG9tcztcblxuICBpZiAoZGlydHlBdG9tcy5zaXplKSB7XG4gICAgLy8gRXhlY3V0ZSBOb2RlLXNwZWNpZmljIHN1YnNjcmliZXJzIGJlZm9yZSBnbG9iYWwgc3Vic2NyaWJlcnNcbiAgICBmb3IgKGNvbnN0IFtrZXksIHN1YnNjcmlwdGlvbnNdIG9mIHN0b3JlU3RhdGUubm9kZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9ucykge1xuICAgICAgaWYgKGRpcnR5QXRvbXMuaGFzKGtleSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBbXywgc3Vic2NyaXB0aW9uXSBvZiBzdWJzY3JpcHRpb25zKSB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW18sIHN1YnNjcmlwdGlvbl0gb2Ygc3RvcmVTdGF0ZS50cmFuc2FjdGlvblN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHN1YnNjcmlwdGlvbihzdG9yZSk7XG4gICAgfSAvLyBDb21wb25lbnRzIHRoYXQgYXJlIHN1YnNjcmliZWQgdG8gdGhlIGRpcnR5IGF0b206XG5cblxuICAgIGNvbnN0IGRlcGVuZGVudE5vZGVzID0gZ2V0RG93bnN0cmVhbU5vZGVzJDIoc3RvcmUsIHRyZWVTdGF0ZSwgZGlydHlBdG9tcyk7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBkZXBlbmRlbnROb2Rlcykge1xuICAgICAgY29uc3QgY29tcHMgPSBzdG9yZVN0YXRlLm5vZGVUb0NvbXBvbmVudFN1YnNjcmlwdGlvbnMuZ2V0KGtleSk7XG5cbiAgICAgIGlmIChjb21wcykge1xuICAgICAgICBmb3IgKGNvbnN0IFtfc3ViSUQsIFtfZGVidWdOYW1lLCBjYWxsYmFja11dIG9mIGNvbXBzKSB7XG4gICAgICAgICAgY2FsbGJhY2sodHJlZVN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gV2FrZSBhbGwgc3VzcGVuZGVkIGNvbXBvbmVudHMgc28gdGhlIHJpZ2h0IG9uZShzKSBjYW4gdHJ5IHRvIHJlLXJlbmRlci5cbiAgICAvLyBXZSBuZWVkIHRvIHdha2UgdXAgY29tcG9uZW50cyBub3QganVzdCB3aGVuIHNvbWUgYXN5bmNocm9ub3VzIHNlbGVjdG9yXG4gICAgLy8gcmVzb2x2ZWQsIGJ1dCBhbHNvIHdoZW4gY2hhbmdpbmcgc3luY2hyb25vdXMgdmFsdWVzIGJlY2F1c2UgdGhpcyBtYXkgY2F1c2VcbiAgICAvLyBhIHNlbGVjdG9yIHRvIGNoYW5nZSBmcm9tIGFzeW5jaHJvbm91cyB0byBzeW5jaHJvbm91cywgaW4gd2hpY2ggY2FzZSB0aGVyZVxuICAgIC8vIHdvdWxkIGJlIG5vIGZvbGxvdy11cCBhc3luY2hyb25vdXMgcmVzb2x1dGlvbiB0byB3YWtlIHVzIHVwLlxuICAgIC8vIFRPRE8gT1BUSU1JWkFUSU9OIE9ubHkgd2FrZSB1cCByZWxhdGVkIGRvd25zdHJlYW0gY29tcG9uZW50c1xuXG5cbiAgICBzdG9yZVN0YXRlLnN1c3BlbmRlZENvbXBvbmVudFJlc29sdmVycy5mb3JFYWNoKGNiID0+IGNiKCkpO1xuICB9IC8vIFNwZWNpYWwgYmVoYXZpb3IgT05MWSBpbnZva2VkIGJ5IHVzZUludGVyZmFjZS5cbiAgLy8gRklYTUUgZGVsZXRlIHF1ZXVlZENvbXBvbmVudENhbGxiYWNrc19ERVBSRUNBVEVEIHdoZW4gZGVsZXRpbmcgdXNlSW50ZXJmYWNlLlxuXG5cbiAgc3RvcmVTdGF0ZS5xdWV1ZWRDb21wb25lbnRDYWxsYmFja3NfREVQUkVDQVRFRC5mb3JFYWNoKGNiID0+IGNiKHRyZWVTdGF0ZSkpO1xuICBzdG9yZVN0YXRlLnF1ZXVlZENvbXBvbmVudENhbGxiYWNrc19ERVBSRUNBVEVELnNwbGljZSgwLCBzdG9yZVN0YXRlLnF1ZXVlZENvbXBvbmVudENhbGxiYWNrc19ERVBSRUNBVEVELmxlbmd0aCk7XG59XG4vKlxuICogVGhlIHB1cnBvc2Ugb2YgdGhlIEJhdGNoZXIgaXMgdG8gb2JzZXJ2ZSB3aGVuIFJlYWN0IGJhdGNoZXMgZW5kIHNvIHRoYXRcbiAqIFJlY29pbCBzdGF0ZSBjaGFuZ2VzIGNhbiBiZSBiYXRjaGVkLiBXaGVuZXZlciBSZWNvaWwgc3RhdGUgY2hhbmdlcywgd2UgY2FsbFxuICogc2V0U3RhdGUgb24gdGhlIGJhdGNoZXIuIFRoZW4gd2Ugd2FpdCBmb3IgdGhhdCBjaGFuZ2UgdG8gYmUgY29tbWl0dGVkLCB3aGljaFxuICogc2lnbmlmaWVzIHRoZSBlbmQgb2YgdGhlIGJhdGNoLiBUaGF0J3Mgd2hlbiB3ZSByZXNwb25kIHRvIHRoZSBSZWNvaWwgY2hhbmdlLlxuICovXG5cblxuZnVuY3Rpb24gQmF0Y2hlcih7XG4gIHNldE5vdGlmeUJhdGNoZXJPZkNoYW5nZVxufSkge1xuICBjb25zdCBzdG9yZVJlZiA9IHVzZVN0b3JlUmVmKCk7XG4gIGNvbnN0IFtfLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG4gIHNldE5vdGlmeUJhdGNoZXJPZkNoYW5nZSgoKSA9PiBzZXRTdGF0ZSh7fSkpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGVucXVldWVFeGVjdXRpb24gcnVucyB0aGlzIGZ1bmN0aW9uIGltbWVkaWF0ZWx5OyBpdCBpcyBvbmx5IHVzZWQgdG9cbiAgICAvLyBtYW5pcHVsYXRlIHRoZSBvcmRlciBvZiB1c2VFZmZlY3RzIGR1cmluZyB0ZXN0cywgc2luY2UgUmVhY3Qgc2VlbXMgdG9cbiAgICAvLyBjYWxsIHVzZUVmZmVjdCBpbiBhbiB1bnByZWRpY3RhYmxlIG9yZGVyIHNvbWV0aW1lcy5cbiAgICBSZWNvaWxfUXVldWUuZW5xdWV1ZUV4ZWN1dGlvbignQmF0Y2hlcicsICgpID0+IHtcbiAgICAgIGNvbnN0IHN0b3JlU3RhdGUgPSBzdG9yZVJlZi5jdXJyZW50LmdldFN0YXRlKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG5leHRUcmVlXG4gICAgICB9ID0gc3RvcmVTdGF0ZTsgLy8gSWdub3JlIGNvbW1pdHMgdGhhdCBhcmUgbm90IGJlY2F1c2Ugb2YgUmVjb2lsIHRyYW5zYWN0aW9ucyAtLSBuYW1lbHksXG4gICAgICAvLyBiZWNhdXNlIHNvbWV0aGluZyBhYm92ZSBSZWNvaWxSb290IHJlLXJlbmRlcmVkOlxuXG4gICAgICBpZiAobmV4dFRyZWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBuZXh0VHJlZSBpcyBub3cgY29tbWl0dGVkIC0tIG5vdGUgdGhhdCBjb3B5aW5nIGFuZCByZXNldCBvY2N1cnMgd2hlblxuICAgICAgLy8gYSB0cmFuc2FjdGlvbiBiZWdpbnMsIGluIHN0YXJ0TmV4dFRyZWVJZk5lZWRlZDpcblxuXG4gICAgICBzdG9yZVN0YXRlLnByZXZpb3VzVHJlZSA9IHN0b3JlU3RhdGUuY3VycmVudFRyZWU7XG4gICAgICBzdG9yZVN0YXRlLmN1cnJlbnRUcmVlID0gbmV4dFRyZWU7XG4gICAgICBzdG9yZVN0YXRlLm5leHRUcmVlID0gbnVsbDtcbiAgICAgIHNlbmRFbmRPZkJhdGNoTm90aWZpY2F0aW9ucyhzdG9yZVJlZi5jdXJyZW50KTtcbiAgICAgIGNvbnN0IGRpc2NhcmRlZFZlcnNpb24gPSBSZWNvaWxfbnVsbHRocm93cyhzdG9yZVN0YXRlLnByZXZpb3VzVHJlZSkudmVyc2lvbjtcbiAgICAgIHN0b3JlU3RhdGUuZ3JhcGhzQnlWZXJzaW9uLmRlbGV0ZShkaXNjYXJkZWRWZXJzaW9uKTtcbiAgICAgIHN0b3JlU3RhdGUucHJldmlvdXNUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKFJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgICAgICByZWxlYXNlU2NoZWR1bGVkUmV0YWluYWJsZXNOb3ckMShzdG9yZVJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7IC8vIElmIGFuIGFzeW5jaHJvbm91cyBzZWxlY3RvciByZXNvbHZlcyBhZnRlciB0aGUgQmF0Y2hlciBpcyB1bm1vdW50ZWQsXG4gIC8vIG5vdGlmeUJhdGNoZXJPZkNoYW5nZSB3aWxsIHN0aWxsIGJlIGNhbGxlZC4gQW4gZXJyb3IgZ2V0cyB0aHJvd24gd2hlbmV2ZXJcbiAgLy8gc2V0U3RhdGUgaXMgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IGlzIGFscmVhZHkgdW5tb3VudGVkLCBzbyB0aGlzIHNldHNcbiAgLy8gbm90aWZ5QmF0Y2hlck9mQ2hhbmdlIHRvIGJlIGEgbm8tb3AuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2V0Tm90aWZ5QmF0Y2hlck9mQ2hhbmdlKCgpID0+IHt9KTtcbiAgICB9O1xuICB9LCBbc2V0Tm90aWZ5QmF0Y2hlck9mQ2hhbmdlXSk7XG4gIHJldHVybiBudWxsO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93LiRyZWNvaWxEZWJ1Z1N0YXRlcykge1xuICAgIHdpbmRvdy4kcmVjb2lsRGVidWdTdGF0ZXMgPSBbXTtcbiAgfVxufSAvLyBXaGVuIHJlbW92aW5nIHRoaXMgZGVwcmVjYXRlZCBmdW5jdGlvbiwgcmVtb3ZlIHN0YXRlQnlTZXR0aW5nUmVjb2lsVmFsdWVcbi8vIHdoaWNoIHdpbGwgbm8gbG9uZ2VyIGJlIG5lZWRlZC5cblxuXG5mdW5jdGlvbiBpbml0aWFsU3RvcmVTdGF0ZV9ERVBSRUNBVEVEKHN0b3JlLCBpbml0aWFsaXplU3RhdGUpIHtcbiAgY29uc3QgaW5pdGlhbCA9IG1ha2VFbXB0eVN0b3JlU3RhdGUkMigpO1xuICBpbml0aWFsaXplU3RhdGUoe1xuICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgIHNldDogKGF0b20sIHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IGluaXRpYWwuY3VycmVudFRyZWU7XG4gICAgICBjb25zdCB3cml0ZXMgPSBzZXROb2RlVmFsdWUkMihzdG9yZSwgc3RhdGUsIGF0b20ua2V5LCB2YWx1ZSk7XG4gICAgICBjb25zdCB3cml0dGVuTm9kZXMgPSBuZXcgU2V0KHdyaXRlcy5rZXlzKCkpO1xuICAgICAgY29uc3Qgbm9udmFsaWRhdGVkQXRvbXMgPSBzdGF0ZS5ub252YWxpZGF0ZWRBdG9tcy5jbG9uZSgpO1xuXG4gICAgICBmb3IgKGNvbnN0IG4gb2Ygd3JpdHRlbk5vZGVzKSB7XG4gICAgICAgIG5vbnZhbGlkYXRlZEF0b21zLmRlbGV0ZShuKTtcbiAgICAgIH1cblxuICAgICAgaW5pdGlhbC5jdXJyZW50VHJlZSA9IHsgLi4uc3RhdGUsXG4gICAgICAgIGRpcnR5QXRvbXM6IFJlY29pbF91bmlvblNldHMoc3RhdGUuZGlydHlBdG9tcywgd3JpdHRlbk5vZGVzKSxcbiAgICAgICAgYXRvbVZhbHVlczogYXBwbHlBdG9tVmFsdWVXcml0ZXMkMShzdGF0ZS5hdG9tVmFsdWVzLCB3cml0ZXMpLFxuICAgICAgICAvLyBOQjogUExFQVNFIHVuLWV4cG9ydCBhcHBseUF0b21WYWx1ZVdyaXRlcyB3aGVuIGRlbGV0aW5nIHRoaXMgY29kZVxuICAgICAgICBub252YWxpZGF0ZWRBdG9tc1xuICAgICAgfTtcbiAgICB9LFxuICAgIHNldFVudmFsaWRhdGVkQXRvbVZhbHVlczogYXRvbVZhbHVlcyA9PiB7XG4gICAgICAvLyBGSVhNRSByZXBsYWNlIHRoaXMgd2l0aCBhIG11dGF0aXZlIGxvb3BcbiAgICAgIGF0b21WYWx1ZXMuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICBpbml0aWFsLmN1cnJlbnRUcmVlID0gc2V0VW52YWxpZGF0ZWRBdG9tVmFsdWVfREVQUkVDQVRFRCQxKGluaXRpYWwuY3VycmVudFRyZWUsIGssIHYpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGluaXRpYWw7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxTdG9yZVN0YXRlKGluaXRpYWxpemVTdGF0ZSkge1xuICBjb25zdCBzbmFwc2hvdCA9IGZyZXNoU25hcHNob3QkMSgpLm1hcChpbml0aWFsaXplU3RhdGUpO1xuICByZXR1cm4gc25hcHNob3QuZ2V0U3RvcmVfSU5URVJOQUwoKS5nZXRTdGF0ZSgpO1xufVxuXG5sZXQgbmV4dElEID0gMDtcblxuZnVuY3Rpb24gUmVjb2lsUm9vdCh7XG4gIGluaXRpYWxpemVTdGF0ZV9ERVBSRUNBVEVELFxuICBpbml0aWFsaXplU3RhdGUsXG4gIHN0b3JlX0lOVEVSTkFMOiBzdG9yZVByb3AsXG4gIC8vIEZvciB1c2Ugd2l0aCBSZWFjdCBcImNvbnRleHQgYnJpZGdpbmdcIlxuICBjaGlsZHJlblxufSkge1xuICB2YXIgX2NyZWF0ZU11dGFibGVTb3VyY2U7XG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIEBmYi1vbmx5OiB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyBAZmItb25seTogaWYgKGdreCgncmVjb2lsX3VzYWdlX2xvZ2dpbmcnKSkge1xuICAvLyBAZmItb25seTogdHJ5IHtcbiAgLy8gQGZiLW9ubHk6IFJlY29pbFVzYWdlTG9nRmFsY29FdmVudC5sb2coKCkgPT4gKHtcbiAgLy8gQGZiLW9ubHk6IHR5cGU6IFJlY29pbHVzYWdlbG9nRXZlbnQuUkVDT0lMX1JPT1RfTU9VTlRFRCxcbiAgLy8gQGZiLW9ubHk6IHBhdGg6IFVSSS5nZXRSZXF1ZXN0VVJJKCkuZ2V0UGF0aCgpLFxuICAvLyBAZmItb25seTogfSkpO1xuICAvLyBAZmItb25seTogfSBjYXRjaCB7XG4gIC8vIEBmYi1vbmx5OiByZWNvdmVyYWJsZVZpb2xhdGlvbihcbiAgLy8gQGZiLW9ubHk6ICdFcnJvciB3aGVuIGxvZ2dpbmcgUmVjb2lsIFVzYWdlIGV2ZW50JyxcbiAgLy8gQGZiLW9ubHk6ICdyZWNvaWwnLFxuICAvLyBAZmItb25seTogKTtcbiAgLy8gQGZiLW9ubHk6IH1cbiAgLy8gQGZiLW9ubHk6IH1cbiAgLy8gQGZiLW9ubHk6IH0sIFtdKTtcbiAgbGV0IHN0b3JlU3RhdGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgY29uc3QgZ2V0R3JhcGggPSB2ZXJzaW9uID0+IHtcbiAgICBjb25zdCBncmFwaHMgPSBzdG9yZVN0YXRlLmN1cnJlbnQuZ3JhcGhzQnlWZXJzaW9uO1xuXG4gICAgaWYgKGdyYXBocy5oYXModmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBSZWNvaWxfbnVsbHRocm93cyhncmFwaHMuZ2V0KHZlcnNpb24pKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdHcmFwaCA9IGdyYXBoJDMoKTtcbiAgICBncmFwaHMuc2V0KHZlcnNpb24sIG5ld0dyYXBoKTtcbiAgICByZXR1cm4gbmV3R3JhcGg7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlVG9UcmFuc2FjdGlvbnMgPSAoY2FsbGJhY2ssIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgLy8gR2xvYmFsIHRyYW5zYWN0aW9uIHN1YnNjcmlwdGlvbnNcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdHJhbnNhY3Rpb25TdWJzY3JpcHRpb25zXG4gICAgICB9ID0gc3RvcmVSZWYuY3VycmVudC5nZXRTdGF0ZSgpO1xuICAgICAgY29uc3QgaWQgPSBuZXh0SUQrKztcbiAgICAgIHRyYW5zYWN0aW9uU3Vic2NyaXB0aW9ucy5zZXQoaWQsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbGVhc2U6ICgpID0+IHtcbiAgICAgICAgICB0cmFuc2FjdGlvblN1YnNjcmlwdGlvbnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9kZS1zcGVjaWZpYyB0cmFuc2FjdGlvbiBzdWJzY3JpcHRpb25zOlxuICAgICAgY29uc3Qge1xuICAgICAgICBub2RlVHJhbnNhY3Rpb25TdWJzY3JpcHRpb25zXG4gICAgICB9ID0gc3RvcmVSZWYuY3VycmVudC5nZXRTdGF0ZSgpO1xuXG4gICAgICBpZiAoIW5vZGVUcmFuc2FjdGlvblN1YnNjcmlwdGlvbnMuaGFzKGtleSkpIHtcbiAgICAgICAgbm9kZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9ucy5zZXQoa2V5LCBuZXcgTWFwKCkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpZCA9IG5leHRJRCsrO1xuICAgICAgUmVjb2lsX251bGx0aHJvd3Mobm9kZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9ucy5nZXQoa2V5KSkuc2V0KGlkLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxlYXNlOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VicyA9IG5vZGVUcmFuc2FjdGlvblN1YnNjcmlwdGlvbnMuZ2V0KGtleSk7XG5cbiAgICAgICAgICBpZiAoc3Vicykge1xuICAgICAgICAgICAgc3Vicy5kZWxldGUoaWQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vicy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgIG5vZGVUcmFuc2FjdGlvblN1YnNjcmlwdGlvbnMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRUcmFuc2FjdGlvbk1ldGFkYXRhID0gbWV0YWRhdGEgPT4ge1xuICAgIHN0YXJ0TmV4dFRyZWVJZk5lZWRlZChzdG9yZVJlZi5jdXJyZW50LmdldFN0YXRlKCkpO1xuXG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKG1ldGFkYXRhKSkge1xuICAgICAgUmVjb2lsX251bGx0aHJvd3Moc3RvcmVSZWYuY3VycmVudC5nZXRTdGF0ZSgpLm5leHRUcmVlKS50cmFuc2FjdGlvbk1ldGFkYXRhW2tdID0gbWV0YWRhdGFba107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlcGxhY2VTdGF0ZSA9IHJlcGxhY2VyID0+IHtcbiAgICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmVSZWYuY3VycmVudC5nZXRTdGF0ZSgpO1xuICAgIHN0YXJ0TmV4dFRyZWVJZk5lZWRlZChzdG9yZVN0YXRlKTsgLy8gVXNlIHJlcGxhY2VyIHRvIGdldCB0aGUgbmV4dCBzdGF0ZTpcblxuICAgIGNvbnN0IG5leHRUcmVlID0gUmVjb2lsX251bGx0aHJvd3Moc3RvcmVTdGF0ZS5uZXh0VHJlZSk7XG4gICAgbGV0IHJlcGxhY2VkO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN0YXRlUmVwbGFjZXJJc0JlaW5nRXhlY3V0ZWQgPSB0cnVlO1xuICAgICAgcmVwbGFjZWQgPSByZXBsYWNlcihuZXh0VHJlZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHN0YXRlUmVwbGFjZXJJc0JlaW5nRXhlY3V0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZWQgPT09IG5leHRUcmVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy4kcmVjb2lsRGVidWdTdGF0ZXMucHVzaChyZXBsYWNlZCk7IC8vIFRPRE8gdGhpcyBzaG91bGRuJ3QgaGFwcGVuIGhlcmUgYmVjYXVzZSBpdCdzIG5vdCBiYXRjaGVkXG4gICAgICB9XG4gICAgfSAvLyBTYXZlIGNoYW5nZXMgdG8gbmV4dFRyZWUgYW5kIHNjaGVkdWxlIGEgUmVhY3QgdXBkYXRlOlxuXG5cbiAgICBzdG9yZVN0YXRlLm5leHRUcmVlID0gcmVwbGFjZWQ7XG4gICAgUmVjb2lsX251bGx0aHJvd3Mobm90aWZ5QmF0Y2hlck9mQ2hhbmdlLmN1cnJlbnQpKCk7XG4gIH07XG5cbiAgY29uc3Qgbm90aWZ5QmF0Y2hlck9mQ2hhbmdlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzZXROb3RpZnlCYXRjaGVyT2ZDaGFuZ2UgPSB1c2VDYWxsYmFjayh4ID0+IHtcbiAgICBub3RpZnlCYXRjaGVyT2ZDaGFuZ2UuY3VycmVudCA9IHg7XG4gIH0sIFtub3RpZnlCYXRjaGVyT2ZDaGFuZ2VdKTsgLy8gRklYTUUgVDI3MTA1NTkyODI1OTk2NjBcblxuICBjb25zdCBjcmVhdGVNdXRhYmxlU291cmNlID0gKF9jcmVhdGVNdXRhYmxlU291cmNlID0gcmVhY3QuY3JlYXRlTXV0YWJsZVNvdXJjZSkgIT09IG51bGwgJiYgX2NyZWF0ZU11dGFibGVTb3VyY2UgIT09IHZvaWQgMCA/IF9jcmVhdGVNdXRhYmxlU291cmNlIDogLy8gZmxvd2xpbnQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG4gIHJlYWN0LnVuc3RhYmxlX2NyZWF0ZU11dGFibGVTb3VyY2U7IC8vIGZsb3dsaW50LWxpbmUgdW5jbGVhci10eXBlOm9mZlxuXG4gIGNvbnN0IHN0b3JlID0gc3RvcmVQcm9wICE9PSBudWxsICYmIHN0b3JlUHJvcCAhPT0gdm9pZCAwID8gc3RvcmVQcm9wIDoge1xuICAgIGdldFN0YXRlOiAoKSA9PiBzdG9yZVN0YXRlLmN1cnJlbnQsXG4gICAgcmVwbGFjZVN0YXRlLFxuICAgIGdldEdyYXBoLFxuICAgIHN1YnNjcmliZVRvVHJhbnNhY3Rpb25zLFxuICAgIGFkZFRyYW5zYWN0aW9uTWV0YWRhdGFcbiAgfTtcbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VSZWYoc3RvcmUpO1xuICBzdG9yZVN0YXRlID0gdXNlUmVmKGluaXRpYWxpemVTdGF0ZV9ERVBSRUNBVEVEICE9IG51bGwgPyBpbml0aWFsU3RvcmVTdGF0ZV9ERVBSRUNBVEVEKHN0b3JlLCBpbml0aWFsaXplU3RhdGVfREVQUkVDQVRFRCkgOiBpbml0aWFsaXplU3RhdGUgIT0gbnVsbCA/IGluaXRpYWxTdG9yZVN0YXRlKGluaXRpYWxpemVTdGF0ZSkgOiBtYWtlRW1wdHlTdG9yZVN0YXRlJDIoKSk7XG4gIGNvbnN0IG11dGFibGVTb3VyY2UgPSB1c2VNZW1vKCgpID0+IGNyZWF0ZU11dGFibGVTb3VyY2UgPyBjcmVhdGVNdXRhYmxlU291cmNlKHN0b3JlU3RhdGUsICgpID0+IHN0b3JlU3RhdGUuY3VycmVudC5jdXJyZW50VHJlZS52ZXJzaW9uKSA6IG51bGwsIFtjcmVhdGVNdXRhYmxlU291cmNlLCBzdG9yZVN0YXRlXSk7IC8vIENsZWFudXAgd2hlbiB0aGUgPFJlY29pbFJvb3Q+IGlzIHVubW91bnRlZFxuXG4gIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBhdG9tS2V5IG9mIHN0b3JlUmVmLmN1cnJlbnQuZ2V0U3RhdGUoKS5rbm93bkF0b21zKSB7XG4gICAgICBjbGVhblVwTm9kZSQyKHN0b3JlUmVmLmN1cnJlbnQsIGF0b21LZXkpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL3JlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdG9yZVJlZlxuICB9LCAvKiNfX1BVUkVfXyovcmVhY3QuY3JlYXRlRWxlbWVudChNdXRhYmxlU291cmNlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBtdXRhYmxlU291cmNlXG4gIH0sIC8qI19fUFVSRV9fKi9yZWFjdC5jcmVhdGVFbGVtZW50KEJhdGNoZXIsIHtcbiAgICBzZXROb3RpZnlCYXRjaGVyT2ZDaGFuZ2U6IHNldE5vdGlmeUJhdGNoZXJPZkNoYW5nZVxuICB9KSwgY2hpbGRyZW4pKTtcbn1cblxudmFyIFJlY29pbF9SZWNvaWxSb290X3JlYWN0ID0ge1xuICB1c2VTdG9yZVJlZixcbiAgdXNlUmVjb2lsTXV0YWJsZVNvdXJjZSxcbiAgUmVjb2lsUm9vdCxcbiAgc2VuZEVuZE9mQmF0Y2hOb3RpZmljYXRpb25zX0ZPUl9URVNUSU5HOiBzZW5kRW5kT2ZCYXRjaE5vdGlmaWNhdGlvbnNcbn07XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGEgbWFwIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBrZXlzICsgdmFsdWVzIGZyb20gdGhlIG9yaWdpbmFsIG1hcCB3aGVyZVxuICogdGhlIGdpdmVuIGNhbGxiYWNrIHJldHVybmVkIHRydWUuXG4gKi9cblxuZnVuY3Rpb24gZmlsdGVyTWFwKG1hcCwgY2FsbGJhY2spIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IE1hcCgpO1xuXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcCkge1xuICAgIGlmIChjYWxsYmFjayh2YWx1ZSwga2V5KSkge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG52YXIgUmVjb2lsX2ZpbHRlck1hcCA9IGZpbHRlck1hcDtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG4vKipcbiAqIFJldHVybnMgYSBzZXQgY29udGFpbmluZyBhbGwgb2YgdGhlIHZhbHVlcyBmcm9tIHRoZSBvcmlnaW5hbCBzZXQgd2hlcmVcbiAqIHRoZSBnaXZlbiBjYWxsYmFjayByZXR1cm5lZCB0cnVlLlxuICovXG5cbmZ1bmN0aW9uIGZpbHRlclNldChzZXQsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcblxuICBmb3IgKGNvbnN0IHZhbHVlIG9mIHNldCkge1xuICAgIGlmIChjYWxsYmFjayh2YWx1ZSkpIHtcbiAgICAgIHJlc3VsdC5hZGQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBSZWNvaWxfZmlsdGVyU2V0ID0gZmlsdGVyU2V0O1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG52YXIgaW52YXJpYW50XzEgPSBpbnZhcmlhbnQ7XG5cbi8vIEBvc3Mtb25seVxuXG5cbnZhciBSZWNvaWxfaW52YXJpYW50ID0gaW52YXJpYW50XzE7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuXG5mdW5jdGlvbiBtZXJnZU1hcHMoLi4ubWFwcykge1xuICBjb25zdCByZXN1bHQgPSBuZXcgTWFwKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaXRlcmF0b3IgPSBtYXBzW2ldLmtleXMoKTtcbiAgICBsZXQgbmV4dEtleTtcblxuICAgIHdoaWxlICghKG5leHRLZXkgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdIC0gbWFwL2l0ZXJhdG9yIGtub3dzIG5vdGhpbmcgYWJvdXQgZmxvdyB0eXBlc1xuICAgICAgcmVzdWx0LnNldChuZXh0S2V5LnZhbHVlLCBtYXBzW2ldLmdldChuZXh0S2V5LnZhbHVlKSk7XG4gICAgfVxuICB9XG4gIC8qICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl0gKD49MC42Ni4wIHNpdGU9d3d3LG1vYmlsZSkgVGhpcyBjb21tZW50XG4gICAqIHN1cHByZXNzZXMgYW4gZXJyb3IgZm91bmQgd2hlbiBGbG93IHYwLjY2IHdhcyBkZXBsb3llZC4gVG8gc2VlIHRoZSBlcnJvclxuICAgKiBkZWxldGUgdGhpcyBjb21tZW50IGFuZCBydW4gRmxvdy4gKi9cblxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBSZWNvaWxfbWVyZ2VNYXBzID0gbWVyZ2VNYXBzO1xuXG52YXIgX3VzZU11dGFibGVTb3VyY2U7XG5cbiAvLyBGSVhNRSBUMjcxMDU1OTI4MjU5OTY2MFxuXG5cbmNvbnN0IHVzZU11dGFibGVTb3VyY2UgPSAvLyBmbG93bGludC1saW5lIHVuY2xlYXItdHlwZTpvZmZcbihfdXNlTXV0YWJsZVNvdXJjZSA9IHJlYWN0LnVzZU11dGFibGVTb3VyY2UpICE9PSBudWxsICYmIF91c2VNdXRhYmxlU291cmNlICE9PSB2b2lkIDAgPyBfdXNlTXV0YWJsZVNvdXJjZSA6IHJlYWN0LnVuc3RhYmxlX3VzZU11dGFibGVTb3VyY2U7IC8vIGZsb3dsaW50LWxpbmUgdW5jbGVhci10eXBlOm9mZlxuXG5mdW5jdGlvbiBtdXRhYmxlU291cmNlRXhpc3RzKCkge1xuICByZXR1cm4gdXNlTXV0YWJsZVNvdXJjZSAmJiAhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy4kZGlzYWJsZVJlY29pbFZhbHVlTXV0YWJsZVNvdXJjZV9URU1QX0hBQ0tfRE9fTk9UX1VTRSk7XG59XG5cbnZhciBSZWNvaWxfbXV0YWJsZVNvdXJjZSA9IHtcbiAgbXV0YWJsZVNvdXJjZUV4aXN0cyxcbiAgdXNlTXV0YWJsZVNvdXJjZVxufTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG5cbmZ1bmN0aW9uIHNoYWxsb3dBcnJheUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxudmFyIFJlY29pbF9zaGFsbG93QXJyYXlFcXVhbCA9IHNoYWxsb3dBcnJheUVxdWFsO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTkgR2VvcmcgVGF2b25pdXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqIEBlbWFpbHMgb25jYWxsK3JlY29pbFxuICogXG4gKiBAZm9ybWF0XG4gKi9cblxuY29uc3QgVU5LTk9XTl9GVU5DVElPTiA9ICc8dW5rbm93bj4nO1xuLyoqXG4gKiBUaGlzIHBhcnNlcyB0aGUgZGlmZmVyZW50IHN0YWNrIHRyYWNlcyBhbmQgcHV0cyB0aGVtIGludG8gb25lIGZvcm1hdFxuICogVGhpcyBib3Jyb3dzIGhlYXZpbHkgZnJvbSBUcmFjZUtpdCAoaHR0cHM6Ly9naXRodWIuY29tL2Nzbm92ZXIvVHJhY2VLaXQpXG4gKi9cblxuZnVuY3Rpb24gc3RhY2tUcmFjZVBhcnNlcihzdGFja1N0cmluZykge1xuICBjb25zdCBsaW5lcyA9IHN0YWNrU3RyaW5nLnNwbGl0KCdcXG4nKTtcbiAgcmV0dXJuIGxpbmVzLnJlZHVjZSgoc3RhY2ssIGxpbmUpID0+IHtcbiAgICBjb25zdCBwYXJzZVJlc3VsdCA9IHBhcnNlQ2hyb21lKGxpbmUpIHx8IHBhcnNlV2luanMobGluZSkgfHwgcGFyc2VHZWNrbyhsaW5lKSB8fCBwYXJzZU5vZGUobGluZSkgfHwgcGFyc2VKU0MobGluZSk7XG5cbiAgICBpZiAocGFyc2VSZXN1bHQpIHtcbiAgICAgIHN0YWNrLnB1c2gocGFyc2VSZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfSwgW10pO1xufVxuXG5jb25zdCBjaHJvbWVSZSA9IC9eXFxzKmF0ICguKj8pID9cXCgoKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWUtZXh0ZW5zaW9ufG5hdGl2ZXxldmFsfHdlYnBhY2t8PGFub255bW91cz58XFwvfFthLXpdOlxcXFx8XFxcXFxcXFwpLio/KSg/OjooXFxkKykpPyg/OjooXFxkKykpP1xcKT9cXHMqJC9pO1xuY29uc3QgY2hyb21lRXZhbFJlID0gL1xcKChcXFMqKSg/OjooXFxkKykpKD86OihcXGQrKSlcXCkvO1xuXG5mdW5jdGlvbiBwYXJzZUNocm9tZShsaW5lKSB7XG4gIGNvbnN0IHBhcnRzID0gY2hyb21lUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBpc05hdGl2ZSA9IHBhcnRzWzJdICYmIHBhcnRzWzJdLmluZGV4T2YoJ25hdGl2ZScpID09PSAwOyAvLyBzdGFydCBvZiBsaW5lXG5cbiAgY29uc3QgaXNFdmFsID0gcGFydHNbMl0gJiYgcGFydHNbMl0uaW5kZXhPZignZXZhbCcpID09PSAwOyAvLyBzdGFydCBvZiBsaW5lXG5cbiAgY29uc3Qgc3VibWF0Y2ggPSBjaHJvbWVFdmFsUmUuZXhlYyhwYXJ0c1syXSk7XG5cbiAgaWYgKGlzRXZhbCAmJiBzdWJtYXRjaCAhPSBudWxsKSB7XG4gICAgLy8gdGhyb3cgb3V0IGV2YWwgbGluZS9jb2x1bW4gYW5kIHVzZSB0b3AtbW9zdCBsaW5lL2NvbHVtbiBudW1iZXJcbiAgICBwYXJ0c1syXSA9IHN1Ym1hdGNoWzFdOyAvLyB1cmxcblxuICAgIHBhcnRzWzNdID0gc3VibWF0Y2hbMl07IC8vIGxpbmVcblxuICAgIHBhcnRzWzRdID0gc3VibWF0Y2hbM107IC8vIGNvbHVtblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiAhaXNOYXRpdmUgPyBwYXJ0c1syXSA6IG51bGwsXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IGlzTmF0aXZlID8gW3BhcnRzWzJdXSA6IFtdLFxuICAgIGxpbmVOdW1iZXI6IHBhcnRzWzNdID8gK3BhcnRzWzNdIDogbnVsbCxcbiAgICBjb2x1bW46IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbFxuICB9O1xufVxuXG5jb25zdCB3aW5qc1JlID0gL15cXHMqYXQgKD86KCg/OlxcW29iamVjdCBvYmplY3RcXF0pPy4rKSApP1xcKD8oKD86ZmlsZXxtcy1hcHB4fGh0dHBzP3x3ZWJwYWNrfGJsb2IpOi4qPyk6KFxcZCspKD86OihcXGQrKSk/XFwpP1xccyokL2k7XG5cbmZ1bmN0aW9uIHBhcnNlV2luanMobGluZSkge1xuICBjb25zdCBwYXJ0cyA9IHdpbmpzUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzJdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBbXSxcbiAgICBsaW5lTnVtYmVyOiArcGFydHNbM10sXG4gICAgY29sdW1uOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGxcbiAgfTtcbn1cblxuY29uc3QgZ2Vja29SZSA9IC9eXFxzKiguKj8pKD86XFwoKC4qPylcXCkpPyg/Ol58QCkoKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWV8d2VicGFja3xyZXNvdXJjZXxcXFtuYXRpdmUpLio/fFteQF0qYnVuZGxlKSg/OjooXFxkKykpPyg/OjooXFxkKykpP1xccyokL2k7XG5jb25zdCBnZWNrb0V2YWxSZSA9IC8oXFxTKykgbGluZSAoXFxkKykoPzogPiBldmFsIGxpbmUgXFxkKykqID4gZXZhbC9pO1xuXG5mdW5jdGlvbiBwYXJzZUdlY2tvKGxpbmUpIHtcbiAgY29uc3QgcGFydHMgPSBnZWNrb1JlLmV4ZWMobGluZSk7XG5cbiAgaWYgKCFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXNFdmFsID0gcGFydHNbM10gJiYgcGFydHNbM10uaW5kZXhPZignID4gZXZhbCcpID4gLTE7XG4gIGNvbnN0IHN1Ym1hdGNoID0gZ2Vja29FdmFsUmUuZXhlYyhwYXJ0c1szXSk7XG5cbiAgaWYgKGlzRXZhbCAmJiBzdWJtYXRjaCAhPSBudWxsKSB7XG4gICAgLy8gdGhyb3cgb3V0IGV2YWwgbGluZS9jb2x1bW4gYW5kIHVzZSB0b3AtbW9zdCBsaW5lIG51bWJlclxuICAgIHBhcnRzWzNdID0gc3VibWF0Y2hbMV07XG4gICAgcGFydHNbNF0gPSBzdWJtYXRjaFsyXTtcbiAgICBwYXJ0c1s1XSA9IG51bGw7IC8vIG5vIGNvbHVtbiB3aGVuIGV2YWxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogcGFydHNbM10sXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IHBhcnRzWzJdID8gcGFydHNbMl0uc3BsaXQoJywnKSA6IFtdLFxuICAgIGxpbmVOdW1iZXI6IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbCxcbiAgICBjb2x1bW46IHBhcnRzWzVdID8gK3BhcnRzWzVdIDogbnVsbFxuICB9O1xufVxuXG5jb25zdCBqYXZhU2NyaXB0Q29yZVJlID0gL15cXHMqKD86KFteQF0qKSg/OlxcKCguKj8pXFwpKT9AKT8oXFxTLio/KTooXFxkKykoPzo6KFxcZCspKT9cXHMqJC9pO1xuXG5mdW5jdGlvbiBwYXJzZUpTQyhsaW5lKSB7XG4gIGNvbnN0IHBhcnRzID0gamF2YVNjcmlwdENvcmVSZS5leGVjKGxpbmUpO1xuXG4gIGlmICghcGFydHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogcGFydHNbM10sXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IFtdLFxuICAgIGxpbmVOdW1iZXI6ICtwYXJ0c1s0XSxcbiAgICBjb2x1bW46IHBhcnRzWzVdID8gK3BhcnRzWzVdIDogbnVsbFxuICB9O1xufVxuXG5jb25zdCBub2RlUmUgPSAvXlxccyphdCAoPzooKD86XFxbb2JqZWN0IG9iamVjdFxcXSk/W15cXFxcL10rKD86IFxcW2FzIFxcUytcXF0pPykgKT9cXCg/KC4qPyk6KFxcZCspKD86OihcXGQrKSk/XFwpP1xccyokL2k7XG5cbmZ1bmN0aW9uIHBhcnNlTm9kZShsaW5lKSB7XG4gIGNvbnN0IHBhcnRzID0gbm9kZVJlLmV4ZWMobGluZSk7XG5cbiAgaWYgKCFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBwYXJ0c1syXSxcbiAgICBtZXRob2ROYW1lOiBwYXJ0c1sxXSB8fCBVTktOT1dOX0ZVTkNUSU9OLFxuICAgIGFyZ3VtZW50czogW10sXG4gICAgbGluZU51bWJlcjogK3BhcnRzWzNdLFxuICAgIGNvbHVtbjogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsXG4gIH07XG59XG5cbnZhciBSZWNvaWxfc3RhY2tUcmFjZVBhcnNlciA9IHN0YWNrVHJhY2VQYXJzZXI7XG5cbmNvbnN0IHtcbiAgdXNlUmVmOiB1c2VSZWYkMVxufSA9IHJlYWN0O1xuXG5mdW5jdGlvbiB1c2VDb21wb25lbnROYW1lKCkge1xuICBjb25zdCBuYW1lUmVmID0gdXNlUmVmJDEoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKFJlY29pbF9na3hfMSgncmVjb2lsX2luZmVyX2NvbXBvbmVudF9uYW1lcycpKSB7XG4gICAgICB2YXIgX25hbWVSZWYkY3VycmVudDtcblxuICAgICAgaWYgKG5hbWVSZWYuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIG5vIGJsZXNzZWQgd2F5IHRvIGRldGVybWluZSB0aGUgY2FsbGluZyBSZWFjdCBjb21wb25lbnQgZnJvbVxuICAgICAgICAvLyB3aXRoaW4gYSBob29rLiBUaGlzIGhhY2sgdXNlcyB0aGUgZmFjdCB0aGF0IGhvb2tzIG11c3Qgc3RhcnQgd2l0aCAndXNlJ1xuICAgICAgICAvLyBhbmQgdGhhdCBob29rcyBhcmUgZWl0aGVyIGNhbGxlZCBieSBSZWFjdCBDb21wb25lbnRzIG9yIG90aGVyIGhvb2tzLiBJdFxuICAgICAgICAvLyBmb2xsb3dzIHRoZXJlZm9yZSwgdGhhdCB0byBmaW5kIHRoZSBjYWxsaW5nIGNvbXBvbmVudCwgeW91IHNpbXBseSBuZWVkXG4gICAgICAgIC8vIHRvIGxvb2sgZG93biB0aGUgc3RhY2sgYW5kIGZpbmQgdGhlIGZpcnN0IGZ1bmN0aW9uIHdoaWNoIGRvZXNuJ3Qgc3RhcnRcbiAgICAgICAgLy8gd2l0aCAndXNlJy4gV2UgYXJlIG9ubHkgZW5hYmxpbmcgdGhpcyBpbiBkZXYgZm9yIG5vdywgc2luY2Ugb25jZSB0aGVcbiAgICAgICAgLy8gY29kZWJhc2UgaXMgbWluaWZpZWQsIHRoZSBuYW1pbmcgYXNzdW1wdGlvbnMgbm8gbG9uZ2VyIGhvbGQgdHJ1ZS5cbiAgICAgICAgY29uc3QgZnJhbWVzID0gUmVjb2lsX3N0YWNrVHJhY2VQYXJzZXIobmV3IEVycm9yKCkuc3RhY2spO1xuXG4gICAgICAgIGZvciAoY29uc3Qge1xuICAgICAgICAgIG1ldGhvZE5hbWVcbiAgICAgICAgfSBvZiBmcmFtZXMpIHtcbiAgICAgICAgICAvLyBJIG9ic2VydmVkIGNhc2VzIHdoZXJlIHRoZSBmcmFtZSB3YXMgb2YgdGhlIGZvcm0gJ09iamVjdC51c2VYWFgnXG4gICAgICAgICAgLy8gaGVuY2Ugd2h5IEknbSBzZWFyY2hpbmcgZm9yIGhvb2tzIGZvbGxvd2luZyBhIHdvcmQgYm91bmRhcnlcbiAgICAgICAgICBpZiAoIW1ldGhvZE5hbWUubWF0Y2goL1xcYnVzZVteXFxiXSskLykpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lUmVmLmN1cnJlbnQgPSBtZXRob2ROYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX25hbWVSZWYkY3VycmVudCA9IG5hbWVSZWYuY3VycmVudCkgIT09IG51bGwgJiYgX25hbWVSZWYkY3VycmVudCAhPT0gdm9pZCAwID8gX25hbWVSZWYkY3VycmVudCA6ICc8dW5hYmxlIHRvIGRldGVybWluZSBjb21wb25lbnQgbmFtZT4nO1xuICAgIH1cbiAgfSAvLyBAZmItb25seTogcmV0dXJuIFwiPGNvbXBvbmVudCBuYW1lIG9ubHkgYXZhaWxhYmxlIHdoZW4gYm90aCBpbiBkZXYgbW9kZSBhbmQgd2hlbiBwYXNzaW5nIEdLICdyZWNvaWxfaW5mZXJfY29tcG9uZW50X25hbWVzJz5cIjtcblxuXG4gIHJldHVybiAnPGNvbXBvbmVudCBuYW1lIG5vdCBhdmFpbGFibGU+JzsgLy8gQG9zcy1vbmx5XG59XG5cbnZhciBSZWNvaWxfdXNlQ29tcG9uZW50TmFtZSA9IHVzZUNvbXBvbmVudE5hbWU7XG5cbmNvbnN0IHtcbiAgYmF0Y2hVcGRhdGVzOiBiYXRjaFVwZGF0ZXMkMlxufSA9IFJlY29pbF9CYXRjaGluZztcblxuY29uc3Qge1xuICBERUZBVUxUX1ZBTFVFOiBERUZBVUxUX1ZBTFVFJDIsXG4gIGdldE5vZGU6IGdldE5vZGUkMyxcbiAgbm9kZXM6IG5vZGVzJDFcbn0gPSBSZWNvaWxfTm9kZTtcblxuY29uc3Qge1xuICB1c2VSZWNvaWxNdXRhYmxlU291cmNlOiB1c2VSZWNvaWxNdXRhYmxlU291cmNlJDEsXG4gIHVzZVN0b3JlUmVmOiB1c2VTdG9yZVJlZiQxXG59ID0gUmVjb2lsX1JlY29pbFJvb3RfcmVhY3Q7XG5cbmNvbnN0IHtcbiAgaXNSZWNvaWxWYWx1ZTogaXNSZWNvaWxWYWx1ZSQyXG59ID0gUmVjb2lsX1JlY29pbFZhbHVlJDE7XG5cbmNvbnN0IHtcbiAgQWJzdHJhY3RSZWNvaWxWYWx1ZTogQWJzdHJhY3RSZWNvaWxWYWx1ZSQzLFxuICBnZXRSZWNvaWxWYWx1ZUFzTG9hZGFibGU6IGdldFJlY29pbFZhbHVlQXNMb2FkYWJsZSQyLFxuICBzZXRSZWNvaWxWYWx1ZTogc2V0UmVjb2lsVmFsdWUkMixcbiAgc2V0UmVjb2lsVmFsdWVMb2FkYWJsZTogc2V0UmVjb2lsVmFsdWVMb2FkYWJsZSQxLFxuICBzZXRVbnZhbGlkYXRlZFJlY29pbFZhbHVlOiBzZXRVbnZhbGlkYXRlZFJlY29pbFZhbHVlJDIsXG4gIHN1YnNjcmliZVRvUmVjb2lsVmFsdWU6IHN1YnNjcmliZVRvUmVjb2lsVmFsdWUkMVxufSA9IFJlY29pbF9SZWNvaWxWYWx1ZUludGVyZmFjZTtcblxuY29uc3Qge1xuICB1cGRhdGVSZXRhaW5Db3VudDogdXBkYXRlUmV0YWluQ291bnQkMVxufSA9IFJlY29pbF9SZXRlbnRpb247XG5cbmNvbnN0IHtcbiAgUmV0ZW50aW9uWm9uZTogUmV0ZW50aW9uWm9uZSQzXG59ID0gUmVjb2lsX1JldGVudGlvblpvbmU7XG5cbmNvbnN0IHtcbiAgU25hcHNob3Q6IFNuYXBzaG90JDEsXG4gIGNsb25lU25hcHNob3Q6IGNsb25lU25hcHNob3QkMVxufSA9IFJlY29pbF9TbmFwc2hvdCQxO1xuXG5jb25zdCB7XG4gIHNldEJ5QWRkaW5nVG9TZXQ6IHNldEJ5QWRkaW5nVG9TZXQkMlxufSA9IFJlY29pbF9Db3B5T25Xcml0ZTtcblxuXG5cbmNvbnN0IHtcbiAgaXNTU1I6IGlzU1NSJDJcbn0gPSBSZWNvaWxfRW52aXJvbm1lbnQ7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCB7XG4gIG11dGFibGVTb3VyY2VFeGlzdHM6IG11dGFibGVTb3VyY2VFeGlzdHMkMSxcbiAgdXNlTXV0YWJsZVNvdXJjZTogdXNlTXV0YWJsZVNvdXJjZSQxXG59ID0gUmVjb2lsX211dGFibGVTb3VyY2U7XG5cblxuXG5cblxuXG5cblxuXG5jb25zdCB7XG4gIHVzZUNhbGxiYWNrOiB1c2VDYWxsYmFjayQxLFxuICB1c2VFZmZlY3Q6IHVzZUVmZmVjdCQxLFxuICB1c2VNZW1vOiB1c2VNZW1vJDEsXG4gIHVzZVJlZjogdXNlUmVmJDIsXG4gIHVzZVN0YXRlOiB1c2VTdGF0ZSQxXG59ID0gcmVhY3Q7IC8vIENvbXBvbmVudHMgdGhhdCBhcmVuJ3QgbW91bnRlZCBhZnRlciBzdXNwZW5kaW5nIGZvciB0aGlzIGxvbmcgd2lsbCBiZSBhc3N1bWVkXG4vLyB0byBiZSBkaXNjYXJkZWQgYW5kIHRoZWlyIHJlc291cmNlcyByZWxlYXNlZC5cblxuXG5jb25zdCBTVVNQRU5TRV9USU1FT1VUX01TID0gMTIwMDAwO1xuXG5mdW5jdGlvbiBoYW5kbGVMb2FkYWJsZShsb2FkYWJsZSwgYXRvbSwgc3RvcmVSZWYpIHtcbiAgLy8gV2UgY2FuJ3QganVzdCB0aHJvdyB0aGUgcHJvbWlzZSB3ZSBhcmUgd2FpdGluZyBvbiB0byBTdXNwZW5zZS4gIElmIHRoZVxuICAvLyB1cHN0cmVhbSBkZXBlbmRlbmNpZXMgY2hhbmdlIGl0IG1heSBwcm9kdWNlIGEgc3RhdGUgaW4gd2hpY2ggdGhlIGNvbXBvbmVudFxuICAvLyBjYW4gcmVuZGVyLCBidXQgaXQgd291bGQgc3RpbGwgYmUgc3VzcGVuZGVkIG9uIGEgUHJvbWlzZSB0aGF0IG1heSBuZXZlciByZXNvbHZlLlxuICBpZiAobG9hZGFibGUuc3RhdGUgPT09ICdoYXNWYWx1ZScpIHtcbiAgICByZXR1cm4gbG9hZGFibGUuY29udGVudHM7XG4gIH0gZWxzZSBpZiAobG9hZGFibGUuc3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHN0b3JlUmVmLmN1cnJlbnQuZ2V0U3RhdGUoKS5zdXNwZW5kZWRDb21wb25lbnRSZXNvbHZlcnMuYWRkKHJlc29sdmUpO1xuICAgIH0pO1xuICAgIHRocm93IHByb21pc2U7XG4gIH0gZWxzZSBpZiAobG9hZGFibGUuc3RhdGUgPT09ICdoYXNFcnJvcicpIHtcbiAgICB0aHJvdyBsb2FkYWJsZS5jb250ZW50cztcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdmFsdWUgb2YgbG9hZGFibGUgYXRvbSBcIiR7YXRvbS5rZXl9XCJgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlY29pbFZhbHVlKHJlY29pbFZhbHVlLCBob29rTmFtZSkge1xuICBpZiAoIWlzUmVjb2lsVmFsdWUkMihyZWNvaWxWYWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXJndW1lbnQgdG8gJHtob29rTmFtZX06IGV4cGVjdGVkIGFuIGF0b20gb3Igc2VsZWN0b3IgYnV0IGdvdCAke1N0cmluZyhyZWNvaWxWYWx1ZSl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBWYXJpb3VzIHRoaW5ncyBhcmUgYnJva2VuIHdpdGggdXNlUmVjb2lsSW50ZXJmYWNlLCBwYXJ0aWN1bGFybHkgY29uY3VycmVudCBtb2RlXG4gKiBhbmQgbWVtb3J5IG1hbmFnZW1lbnQuIFRoZXkgd2lsbCBub3QgYmUgZml4ZWQuXG4gKiAqL1xuZnVuY3Rpb24gdXNlUmVjb2lsSW50ZXJmYWNlX0RFUFJFQ0FURUQoKSB7XG4gIGNvbnN0IHN0b3JlUmVmID0gdXNlU3RvcmVSZWYkMSgpO1xuICBjb25zdCBbXywgZm9yY2VVcGRhdGVdID0gdXNlU3RhdGUkMShbXSk7XG4gIGNvbnN0IHJlY29pbFZhbHVlc1VzZWQgPSB1c2VSZWYkMihuZXcgU2V0KCkpO1xuICByZWNvaWxWYWx1ZXNVc2VkLmN1cnJlbnQgPSBuZXcgU2V0KCk7IC8vIFRyYWNrIHRoZSBSZWNvaWxWYWx1ZXMgdXNlZCBqdXN0IGR1cmluZyB0aGlzIHJlbmRlclxuXG4gIGNvbnN0IHByZXZpb3VzU3Vic2NyaXB0aW9ucyA9IHVzZVJlZiQyKG5ldyBTZXQoKSk7XG4gIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSB1c2VSZWYkMihuZXcgTWFwKCkpO1xuICBjb25zdCB1bnN1YnNjcmliZUZyb20gPSB1c2VDYWxsYmFjayQxKGtleSA9PiB7XG4gICAgY29uc3Qgc3ViID0gc3Vic2NyaXB0aW9ucy5jdXJyZW50LmdldChrZXkpO1xuXG4gICAgaWYgKHN1Yikge1xuICAgICAgc3ViLnJlbGVhc2UoKTtcbiAgICAgIHN1YnNjcmlwdGlvbnMuY3VycmVudC5kZWxldGUoa2V5KTtcbiAgICB9XG4gIH0sIFtzdWJzY3JpcHRpb25zXSk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBSZWNvaWxfdXNlQ29tcG9uZW50TmFtZSgpO1xuICB1c2VFZmZlY3QkMSgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBzdG9yZVJlZi5jdXJyZW50O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUoX3N0YXRlLCBrZXkpIHtcbiAgICAgIGlmICghc3Vic2NyaXB0aW9ucy5jdXJyZW50LmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yY2VVcGRhdGUoW10pO1xuICAgIH1cblxuICAgIFJlY29pbF9kaWZmZXJlbmNlU2V0cyhyZWNvaWxWYWx1ZXNVc2VkLmN1cnJlbnQsIHByZXZpb3VzU3Vic2NyaXB0aW9ucy5jdXJyZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoc3Vic2NyaXB0aW9ucy5jdXJyZW50LmhhcyhrZXkpKSB7XG4gICAgICAgIFJlY29pbF9leHBlY3RhdGlvblZpb2xhdGlvbihgRG91YmxlIHN1YnNjcmlwdGlvbiB0byBSZWNvaWxWYWx1ZSBcIiR7a2V5fVwiYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViID0gc3Vic2NyaWJlVG9SZWNvaWxWYWx1ZSQxKHN0b3JlLCBuZXcgQWJzdHJhY3RSZWNvaWxWYWx1ZSQzKGtleSksIHN0YXRlID0+IHtcbiAgICAgICAgdXBkYXRlU3RhdGUoc3RhdGUsIGtleSk7XG4gICAgICB9LCBjb21wb25lbnROYW1lKTtcbiAgICAgIHN1YnNjcmlwdGlvbnMuY3VycmVudC5zZXQoa2V5LCBzdWIpO1xuICAgICAgLyoqXG4gICAgICAgKiBTaW5jZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhbiBlZmZlY3Qgd2UgbmVlZCB0byB1cGRhdGUgdG8gdGhlIGxhdGVzdFxuICAgICAgICogdmFsdWUgb2YgdGhlIGF0b20gc2luY2UgaXQgbWF5IGhhdmUgY2hhbmdlZCBzaW5jZSB3ZSByZW5kZXJlZC4gV2UgY2FuXG4gICAgICAgKiBnbyBhaGVhZCBhbmQgZG8gdGhhdCBub3csIHVubGVzcyB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgYmF0Y2ggLS1cbiAgICAgICAqIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGRvIGl0IGF0IHRoZSBlbmQgb2YgdGhlIGJhdGNoLCBkdWUgdG8gdGhlXG4gICAgICAgKiBmb2xsb3dpbmcgZWRnZSBjYXNlOiBTdXBwb3NlIGFuIGF0b20gaXMgdXBkYXRlZCBpbiBhbm90aGVyIHVzZUVmZmVjdFxuICAgICAgICogb2YgdGhpcyBzYW1lIGNvbXBvbmVudC4gVGhlbiB0aGUgZm9sbG93aW5nIHNlcXVlbmNlIG9mIGV2ZW50cyBvY2N1cjpcbiAgICAgICAqIDEuIEF0b20gaXMgdXBkYXRlZCBhbmQgc3VicyBmaXJlZCAoYnV0IHdlIG1heSBub3QgYmUgc3Vic2NyaWJlZFxuICAgICAgICogICAgeWV0IGRlcGVuZGluZyBvbiBvcmRlciBvZiBlZmZlY3RzLCBzbyB3ZSBtaXNzIHRoaXMpIFVwZGF0ZWQgdmFsdWVcbiAgICAgICAqICAgIGlzIG5vdyBpbiBuZXh0VHJlZSwgYnV0IG5vdCBjdXJyZW50VHJlZS5cbiAgICAgICAqIDIuIFRoaXMgZWZmZWN0IGhhcHBlbnMuIFdlIHN1YnNjcmliZSBhbmQgdXBkYXRlLlxuICAgICAgICogMy4gRnJvbSB0aGUgdXBkYXRlIHdlIHJlLXJlbmRlciBhbmQgcmVhZCBjdXJyZW50VHJlZSwgd2l0aCBvbGQgdmFsdWUuXG4gICAgICAgKiA0LiBCYXRjaGVyJ3MgZWZmZWN0IHNldHMgY3VycmVudFRyZWUgdG8gbmV4dFRyZWUuXG4gICAgICAgKiBJbiB0aGlzIHNlcXVlbmNlIHdlIG1pc3MgdGhlIHVwZGF0ZS4gVG8gYXZvaWQgdGhhdCwgYWRkIHRoZSB1cGRhdGVcbiAgICAgICAqIHRvIHF1ZXVlZENvbXBvbmVudENhbGxiYWNrIGlmIGEgYmF0Y2ggaXMgaW4gcHJvZ3Jlc3MuXG4gICAgICAgKi9cbiAgICAgIC8vIEZJWE1FIGRlbGV0ZSBxdWV1ZWRDb21wb25lbnRDYWxsYmFja3NfREVQUkVDQVRFRCB3aGVuIGRlbGV0aW5nIHVzZUludGVyZmFjZS5cblxuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICBpZiAoc3RhdGUubmV4dFRyZWUpIHtcbiAgICAgICAgc3RvcmUuZ2V0U3RhdGUoKS5xdWV1ZWRDb21wb25lbnRDYWxsYmFja3NfREVQUkVDQVRFRC5wdXNoKCgpID0+IHtcbiAgICAgICAgICB1cGRhdGVTdGF0ZShzdG9yZS5nZXRTdGF0ZSgpLCBrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHN0b3JlLmdldFN0YXRlKCksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgUmVjb2lsX2RpZmZlcmVuY2VTZXRzKHByZXZpb3VzU3Vic2NyaXB0aW9ucy5jdXJyZW50LCByZWNvaWxWYWx1ZXNVc2VkLmN1cnJlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlRnJvbShrZXkpO1xuICAgIH0pO1xuICAgIHByZXZpb3VzU3Vic2NyaXB0aW9ucy5jdXJyZW50ID0gcmVjb2lsVmFsdWVzVXNlZC5jdXJyZW50O1xuICB9KTtcbiAgdXNlRWZmZWN0JDEoKCkgPT4ge1xuICAgIGNvbnN0IHN1YnMgPSBzdWJzY3JpcHRpb25zLmN1cnJlbnQ7XG4gICAgcmV0dXJuICgpID0+IHN1YnMuZm9yRWFjaCgoXywga2V5KSA9PiB1bnN1YnNjcmliZUZyb20oa2V5KSk7XG4gIH0sIFt1bnN1YnNjcmliZUZyb21dKTtcbiAgcmV0dXJuIHVzZU1lbW8kMSgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdXNlU2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVtlc2NhcGVkLWdlbmVyaWNdXG4gICAgICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUsICd1c2VTZXRSZWNvaWxTdGF0ZScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3VmFsdWVPclVwZGF0ZXIgPT4ge1xuICAgICAgICBzZXRSZWNvaWxWYWx1ZSQyKHN0b3JlUmVmLmN1cnJlbnQsIHJlY29pbFN0YXRlLCBuZXdWYWx1ZU9yVXBkYXRlcik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVzZVJlc2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVtlc2NhcGVkLWdlbmVyaWNdXG4gICAgICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUsICd1c2VSZXNldFJlY29pbFN0YXRlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKSA9PiBzZXRSZWNvaWxWYWx1ZSQyKHN0b3JlUmVmLmN1cnJlbnQsIHJlY29pbFN0YXRlLCBERUZBVUxUX1ZBTFVFJDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVzZVJlY29pbFZhbHVlTG9hZGFibGUocmVjb2lsVmFsdWUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVtlc2NhcGVkLWdlbmVyaWNdXG4gICAgICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsVmFsdWUsICd1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVjb2lsVmFsdWVzVXNlZC5jdXJyZW50LmhhcyhyZWNvaWxWYWx1ZS5rZXkpKSB7XG4gICAgICAgIHJlY29pbFZhbHVlc1VzZWQuY3VycmVudCA9IHNldEJ5QWRkaW5nVG9TZXQkMihyZWNvaWxWYWx1ZXNVc2VkLmN1cnJlbnQsIHJlY29pbFZhbHVlLmtleSk7XG4gICAgICB9IC8vIFRPRE8gUmVzdG9yZSBvcHRpbWl6YXRpb24gdG8gbWVtb2l6ZSBsb29rdXBcblxuXG4gICAgICByZXR1cm4gZ2V0UmVjb2lsVmFsdWVBc0xvYWRhYmxlJDIoc3RvcmVSZWYuY3VycmVudCwgcmVjb2lsVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVzZVJlY29pbFZhbHVlKHJlY29pbFZhbHVlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgICAgICB2YWxpZGF0ZVJlY29pbFZhbHVlKHJlY29pbFZhbHVlLCAndXNlUmVjb2lsVmFsdWUnKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9hZGFibGUgPSB1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlKHJlY29pbFZhbHVlKTsgLy8gJEZsb3dGaXhNZVtlc2NhcGVkLWdlbmVyaWNdXG5cbiAgICAgIHJldHVybiBoYW5kbGVMb2FkYWJsZShsb2FkYWJsZSwgcmVjb2lsVmFsdWUsIHN0b3JlUmVmKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1c2VSZWNvaWxTdGF0ZShyZWNvaWxTdGF0ZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lW2VzY2FwZWQtZ2VuZXJpY11cbiAgICAgICAgdmFsaWRhdGVSZWNvaWxWYWx1ZShyZWNvaWxTdGF0ZSwgJ3VzZVJlY29pbFN0YXRlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbdXNlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUpLCB1c2VTZXRSZWNvaWxTdGF0ZShyZWNvaWxTdGF0ZSldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVzZVJlY29pbFN0YXRlTG9hZGFibGUocmVjb2lsU3RhdGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVtlc2NhcGVkLWdlbmVyaWNdXG4gICAgICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUsICd1c2VSZWNvaWxTdGF0ZUxvYWRhYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbdXNlUmVjb2lsVmFsdWVMb2FkYWJsZShyZWNvaWxTdGF0ZSksIHVzZVNldFJlY29pbFN0YXRlKHJlY29pbFN0YXRlKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldFJlY29pbFZhbHVlOiB1c2VSZWNvaWxWYWx1ZSxcbiAgICAgIGdldFJlY29pbFZhbHVlTG9hZGFibGU6IHVzZVJlY29pbFZhbHVlTG9hZGFibGUsXG4gICAgICBnZXRSZWNvaWxTdGF0ZTogdXNlUmVjb2lsU3RhdGUsXG4gICAgICBnZXRSZWNvaWxTdGF0ZUxvYWRhYmxlOiB1c2VSZWNvaWxTdGF0ZUxvYWRhYmxlLFxuICAgICAgZ2V0U2V0UmVjb2lsU3RhdGU6IHVzZVNldFJlY29pbFN0YXRlLFxuICAgICAgZ2V0UmVzZXRSZWNvaWxTdGF0ZTogdXNlUmVzZXRSZWNvaWxTdGF0ZVxuICAgIH07XG4gIH0sIFtyZWNvaWxWYWx1ZXNVc2VkLCBzdG9yZVJlZl0pO1xufVxuXG5jb25zdCByZWNvaWxDb21wb25lbnRHZXRSZWNvaWxWYWx1ZUNvdW50X0ZPUl9URVNUSU5HID0ge1xuICBjdXJyZW50OiAwXG59O1xuXG5mdW5jdGlvbiB1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlX01VVEFCTEVTT1VSQ0UocmVjb2lsVmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsVmFsdWUsICd1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlJyk7XG4gIH1cblxuICBjb25zdCBzdG9yZVJlZiA9IHVzZVN0b3JlUmVmJDEoKTtcbiAgY29uc3QgZ2V0TG9hZGFibGUgPSB1c2VDYWxsYmFjayQxKCgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHN0b3JlUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgdHJlZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZTtcbiAgICByZXR1cm4gZ2V0UmVjb2lsVmFsdWVBc0xvYWRhYmxlJDIoc3RvcmUsIHJlY29pbFZhbHVlLCB0cmVlU3RhdGUpO1xuICB9LCBbc3RvcmVSZWYsIHJlY29pbFZhbHVlXSk7XG4gIGNvbnN0IGdldExvYWRhYmxlV2l0aFRlc3RpbmcgPSB1c2VDYWxsYmFjayQxKCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICByZWNvaWxDb21wb25lbnRHZXRSZWNvaWxWYWx1ZUNvdW50X0ZPUl9URVNUSU5HLmN1cnJlbnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TG9hZGFibGUoKTtcbiAgfSwgW2dldExvYWRhYmxlXSk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBSZWNvaWxfdXNlQ29tcG9uZW50TmFtZSgpO1xuICBjb25zdCBzdWJzY3JpYmUgPSB1c2VDYWxsYmFjayQxKChfc3RvcmVTdGF0ZSwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHN0b3JlUmVmLmN1cnJlbnQ7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZWNvaWxWYWx1ZSQxKHN0b3JlLCByZWNvaWxWYWx1ZSwgKCkgPT4ge1xuICAgICAgaWYgKCFSZWNvaWxfZ2t4XzEoJ3JlY29pbF9zdXBwcmVzc19yZXJlbmRlcl9pbl9jYWxsYmFjaycpKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgfSAvLyBPbmx5IHJlLXJlbmRlciBpZiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICAvLyBUaGlzIHdpbGwgZXZhbHVhdGUgdGhlIGF0b20vc2VsZWN0b3Igbm93IGFzIHdlbGwgYXMgd2hlbiB0aGVcbiAgICAgIC8vIGNvbXBvbmVudCByZW5kZXJzLCBidXQgdGhhdCBtYXkgaGVscCB3aXRoIHByZWZldGNoaW5nLlxuXG5cbiAgICAgIGNvbnN0IG5ld0xvYWRhYmxlID0gZ2V0TG9hZGFibGUoKTtcblxuICAgICAgaWYgKCFwcmV2TG9hZGFibGVSZWYuY3VycmVudC5pcyhuZXdMb2FkYWJsZSkpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCBjb21wb25lbnROYW1lKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnJlbGVhc2U7XG4gIH0sIFtzdG9yZVJlZiwgcmVjb2lsVmFsdWUsIGNvbXBvbmVudE5hbWUsIGdldExvYWRhYmxlXSk7XG4gIGNvbnN0IHNvdXJjZSA9IHVzZVJlY29pbE11dGFibGVTb3VyY2UkMSgpO1xuICBjb25zdCBsb2FkYWJsZSA9IHVzZU11dGFibGVTb3VyY2UkMShzb3VyY2UsIGdldExvYWRhYmxlV2l0aFRlc3RpbmcsIHN1YnNjcmliZSk7XG4gIGNvbnN0IHByZXZMb2FkYWJsZVJlZiA9IHVzZVJlZiQyKGxvYWRhYmxlKTtcbiAgdXNlRWZmZWN0JDEoKCkgPT4ge1xuICAgIHByZXZMb2FkYWJsZVJlZi5jdXJyZW50ID0gbG9hZGFibGU7XG4gIH0pO1xuICByZXR1cm4gbG9hZGFibGU7XG59XG5cbmZ1bmN0aW9uIHVzZVJlY29pbFZhbHVlTG9hZGFibGVfTEVHQUNZKHJlY29pbFZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2VzY2FwZWQtZ2VuZXJpY11cbiAgICB2YWxpZGF0ZVJlY29pbFZhbHVlKHJlY29pbFZhbHVlLCAndXNlUmVjb2lsVmFsdWVMb2FkYWJsZScpO1xuICB9XG5cbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VTdG9yZVJlZiQxKCk7XG4gIGNvbnN0IFtfLCBmb3JjZVVwZGF0ZV0gPSB1c2VTdGF0ZSQxKFtdKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IFJlY29pbF91c2VDb21wb25lbnROYW1lKCk7XG4gIHVzZUVmZmVjdCQxKCgpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHN0b3JlUmVmLmN1cnJlbnQ7XG4gICAgY29uc3Qgc3RvcmVTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3Vic2NyaWJlVG9SZWNvaWxWYWx1ZSQxKHN0b3JlLCByZWNvaWxWYWx1ZSwgX3N0YXRlID0+IHtcbiAgICAgIHZhciBfcHJldkxvYWRhYmxlUmVmJGN1cnI7XG5cbiAgICAgIGlmICghUmVjb2lsX2dreF8xKCdyZWNvaWxfc3VwcHJlc3NfcmVyZW5kZXJfaW5fY2FsbGJhY2snKSkge1xuICAgICAgICByZXR1cm4gZm9yY2VVcGRhdGUoW10pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdMb2FkYWJsZSA9IGdldFJlY29pbFZhbHVlQXNMb2FkYWJsZSQyKHN0b3JlLCByZWNvaWxWYWx1ZSwgc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZSk7XG5cbiAgICAgIGlmICghKChfcHJldkxvYWRhYmxlUmVmJGN1cnIgPSBwcmV2TG9hZGFibGVSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3ByZXZMb2FkYWJsZVJlZiRjdXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJldkxvYWRhYmxlUmVmJGN1cnIuaXMobmV3TG9hZGFibGUpKSkge1xuICAgICAgICBmb3JjZVVwZGF0ZShuZXdMb2FkYWJsZSk7XG4gICAgICB9XG4gICAgfSwgY29tcG9uZW50TmFtZSk7XG4gICAgLyoqXG4gICAgICogU2luY2Ugd2UncmUgc3Vic2NyaWJpbmcgaW4gYW4gZWZmZWN0IHdlIG5lZWQgdG8gdXBkYXRlIHRvIHRoZSBsYXRlc3RcbiAgICAgKiB2YWx1ZSBvZiB0aGUgYXRvbSBzaW5jZSBpdCBtYXkgaGF2ZSBjaGFuZ2VkIHNpbmNlIHdlIHJlbmRlcmVkLiBXZSBjYW5cbiAgICAgKiBnbyBhaGVhZCBhbmQgZG8gdGhhdCBub3csIHVubGVzcyB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgYmF0Y2ggLS1cbiAgICAgKiBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBkbyBpdCBhdCB0aGUgZW5kIG9mIHRoZSBiYXRjaCwgZHVlIHRvIHRoZVxuICAgICAqIGZvbGxvd2luZyBlZGdlIGNhc2U6IFN1cHBvc2UgYW4gYXRvbSBpcyB1cGRhdGVkIGluIGFub3RoZXIgdXNlRWZmZWN0XG4gICAgICogb2YgdGhpcyBzYW1lIGNvbXBvbmVudC4gVGhlbiB0aGUgZm9sbG93aW5nIHNlcXVlbmNlIG9mIGV2ZW50cyBvY2N1cjpcbiAgICAgKiAxLiBBdG9tIGlzIHVwZGF0ZWQgYW5kIHN1YnMgZmlyZWQgKGJ1dCB3ZSBtYXkgbm90IGJlIHN1YnNjcmliZWRcbiAgICAgKiAgICB5ZXQgZGVwZW5kaW5nIG9uIG9yZGVyIG9mIGVmZmVjdHMsIHNvIHdlIG1pc3MgdGhpcykgVXBkYXRlZCB2YWx1ZVxuICAgICAqICAgIGlzIG5vdyBpbiBuZXh0VHJlZSwgYnV0IG5vdCBjdXJyZW50VHJlZS5cbiAgICAgKiAyLiBUaGlzIGVmZmVjdCBoYXBwZW5zLiBXZSBzdWJzY3JpYmUgYW5kIHVwZGF0ZS5cbiAgICAgKiAzLiBGcm9tIHRoZSB1cGRhdGUgd2UgcmUtcmVuZGVyIGFuZCByZWFkIGN1cnJlbnRUcmVlLCB3aXRoIG9sZCB2YWx1ZS5cbiAgICAgKiA0LiBCYXRjaGVyJ3MgZWZmZWN0IHNldHMgY3VycmVudFRyZWUgdG8gbmV4dFRyZWUuXG4gICAgICogSW4gdGhpcyBzZXF1ZW5jZSB3ZSBtaXNzIHRoZSB1cGRhdGUuIFRvIGF2b2lkIHRoYXQsIGFkZCB0aGUgdXBkYXRlXG4gICAgICogdG8gcXVldWVkQ29tcG9uZW50Q2FsbGJhY2sgaWYgYSBiYXRjaCBpcyBpbiBwcm9ncmVzcy5cbiAgICAgKi9cblxuICAgIGlmIChzdG9yZVN0YXRlLm5leHRUcmVlKSB7XG4gICAgICBzdG9yZS5nZXRTdGF0ZSgpLnF1ZXVlZENvbXBvbmVudENhbGxiYWNrc19ERVBSRUNBVEVELnB1c2goKCkgPT4ge1xuICAgICAgICBwcmV2TG9hZGFibGVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIGZvcmNlVXBkYXRlKFtdKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3ByZXZMb2FkYWJsZVJlZiRjdXJyMjtcblxuICAgICAgaWYgKCFSZWNvaWxfZ2t4XzEoJ3JlY29pbF9zdXBwcmVzc19yZXJlbmRlcl9pbl9jYWxsYmFjaycpKSB7XG4gICAgICAgIHJldHVybiBmb3JjZVVwZGF0ZShbXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0xvYWRhYmxlID0gZ2V0UmVjb2lsVmFsdWVBc0xvYWRhYmxlJDIoc3RvcmUsIHJlY29pbFZhbHVlLCBzdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRUcmVlKTtcblxuICAgICAgaWYgKCEoKF9wcmV2TG9hZGFibGVSZWYkY3VycjIgPSBwcmV2TG9hZGFibGVSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3ByZXZMb2FkYWJsZVJlZiRjdXJyMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ByZXZMb2FkYWJsZVJlZiRjdXJyMi5pcyhuZXdMb2FkYWJsZSkpKSB7XG4gICAgICAgIGZvcmNlVXBkYXRlKG5ld0xvYWRhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uLnJlbGVhc2U7XG4gIH0sIFtjb21wb25lbnROYW1lLCByZWNvaWxWYWx1ZSwgc3RvcmVSZWZdKTtcbiAgY29uc3QgbG9hZGFibGUgPSBnZXRSZWNvaWxWYWx1ZUFzTG9hZGFibGUkMihzdG9yZVJlZi5jdXJyZW50LCByZWNvaWxWYWx1ZSk7XG4gIGNvbnN0IHByZXZMb2FkYWJsZVJlZiA9IHVzZVJlZiQyKGxvYWRhYmxlKTtcbiAgdXNlRWZmZWN0JDEoKCkgPT4ge1xuICAgIHByZXZMb2FkYWJsZVJlZi5jdXJyZW50ID0gbG9hZGFibGU7XG4gIH0pO1xuICByZXR1cm4gbG9hZGFibGU7XG59XG4vKipcbiAgTGlrZSB1c2VSZWNvaWxWYWx1ZSgpLCBidXQgZWl0aGVyIHJldHVybnMgdGhlIHZhbHVlIGlmIGF2YWlsYWJsZSBvclxuICBqdXN0IHVuZGVmaW5lZCBpZiBub3QgYXZhaWxhYmxlIGZvciBhbnkgcmVhc29uLCBzdWNoIGFzIHBlbmRpbmcgb3IgZXJyb3IuXG4qL1xuXG5cbmZ1bmN0aW9uIHVzZVJlY29pbFZhbHVlTG9hZGFibGUocmVjb2lsVmFsdWUpIHtcbiAgaWYgKFJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmYi13d3cvcmVhY3QtaG9va3NcbiAgICB1c2VSZXRhaW4ocmVjb2lsVmFsdWUpO1xuICB9XG5cbiAgaWYgKG11dGFibGVTb3VyY2VFeGlzdHMkMSgpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZiLXd3dy9yZWFjdC1ob29rc1xuICAgIHJldHVybiB1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlX01VVEFCTEVTT1VSQ0UocmVjb2lsVmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmYi13d3cvcmVhY3QtaG9va3NcbiAgICByZXR1cm4gdXNlUmVjb2lsVmFsdWVMb2FkYWJsZV9MRUdBQ1kocmVjb2lsVmFsdWUpO1xuICB9XG59XG4vKipcbiAgUmV0dXJucyB0aGUgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIFJlY29pbFZhbHVlLlxuICBJZiB0aGUgdmFsdWUgaXMgcGVuZGluZywgaXQgd2lsbCB0aHJvdyBhIFByb21pc2UgdG8gc3VzcGVuZCB0aGUgY29tcG9uZW50LFxuICBpZiB0aGUgdmFsdWUgaXMgYW4gZXJyb3IgaXQgd2lsbCB0aHJvdyBpdCBmb3IgdGhlIG5lYXJlc3QgUmVhY3QgZXJyb3IgYm91bmRhcnkuXG4gIFRoaXMgd2lsbCBhbHNvIHN1YnNjcmliZSB0aGUgY29tcG9uZW50IGZvciBhbnkgdXBkYXRlcyBpbiB0aGUgdmFsdWUuXG4gICovXG5cblxuZnVuY3Rpb24gdXNlUmVjb2lsVmFsdWUocmVjb2lsVmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsVmFsdWUsICd1c2VSZWNvaWxWYWx1ZScpO1xuICB9XG5cbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VTdG9yZVJlZiQxKCk7XG4gIGNvbnN0IGxvYWRhYmxlID0gdXNlUmVjb2lsVmFsdWVMb2FkYWJsZShyZWNvaWxWYWx1ZSk7IC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuXG4gIHJldHVybiBoYW5kbGVMb2FkYWJsZShsb2FkYWJsZSwgcmVjb2lsVmFsdWUsIHN0b3JlUmVmKTtcbn1cbi8qKlxuICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhbGxvd3MgdGhlIHZhbHVlIG9mIGEgUmVjb2lsU3RhdGUgdG8gYmUgdXBkYXRlZCwgYnV0IGRvZXNcbiAgbm90IHN1YnNjcmliZSB0aGUgY29tcG9uZW50IHRvIGNoYW5nZXMgdG8gdGhhdCBSZWNvaWxTdGF0ZS5cbiovXG5cblxuZnVuY3Rpb24gdXNlU2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUsICd1c2VTZXRSZWNvaWxTdGF0ZScpO1xuICB9XG5cbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VTdG9yZVJlZiQxKCk7XG4gIHJldHVybiB1c2VDYWxsYmFjayQxKG5ld1ZhbHVlT3JVcGRhdGVyID0+IHtcbiAgICBzZXRSZWNvaWxWYWx1ZSQyKHN0b3JlUmVmLmN1cnJlbnQsIHJlY29pbFN0YXRlLCBuZXdWYWx1ZU9yVXBkYXRlcik7XG4gIH0sIFtzdG9yZVJlZiwgcmVjb2lsU3RhdGVdKTtcbn1cbi8qKlxuICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc2V0IHRoZSB2YWx1ZSBvZiBhIFJlY29pbFN0YXRlIHRvIGl0cyBkZWZhdWx0XG4qL1xuXG5cbmZ1bmN0aW9uIHVzZVJlc2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUsICd1c2VSZXNldFJlY29pbFN0YXRlJyk7XG4gIH1cblxuICBjb25zdCBzdG9yZVJlZiA9IHVzZVN0b3JlUmVmJDEoKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrJDEoKCkgPT4ge1xuICAgIHNldFJlY29pbFZhbHVlJDIoc3RvcmVSZWYuY3VycmVudCwgcmVjb2lsU3RhdGUsIERFRkFVTFRfVkFMVUUkMik7XG4gIH0sIFtzdG9yZVJlZiwgcmVjb2lsU3RhdGVdKTtcbn1cbi8qKlxuICBFcXVpdmFsZW50IHRvIHVzZVN0YXRlKCkuIEFsbG93cyB0aGUgdmFsdWUgb2YgdGhlIFJlY29pbFN0YXRlIHRvIGJlIHJlYWQgYW5kIHdyaXR0ZW4uXG4gIFN1YnNlcXVlbnQgdXBkYXRlcyB0byB0aGUgUmVjb2lsU3RhdGUgd2lsbCBjYXVzZSB0aGUgY29tcG9uZW50IHRvIHJlLXJlbmRlci4gSWYgdGhlXG4gIFJlY29pbFN0YXRlIGlzIHBlbmRpbmcsIHRoaXMgd2lsbCBzdXNwZW5kIHRoZSBjb21wb25lbnQgYW5kIGluaXRpYXRlIHRoZVxuICByZXRyaWV2YWwgb2YgdGhlIHZhbHVlLiBJZiBldmFsdWF0aW5nIHRoZSBSZWNvaWxTdGF0ZSByZXN1bHRlZCBpbiBhbiBlcnJvciwgdGhpcyB3aWxsXG4gIHRocm93IHRoZSBlcnJvciBzbyB0aGF0IHRoZSBuZWFyZXN0IFJlYWN0IGVycm9yIGJvdW5kYXJ5IGNhbiBjYXRjaCBpdC5cbiovXG5cblxuZnVuY3Rpb24gdXNlUmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vICRGbG93Rml4TWVbZXNjYXBlZC1nZW5lcmljXVxuICAgIHZhbGlkYXRlUmVjb2lsVmFsdWUocmVjb2lsU3RhdGUsICd1c2VSZWNvaWxTdGF0ZScpO1xuICB9XG5cbiAgcmV0dXJuIFt1c2VSZWNvaWxWYWx1ZShyZWNvaWxTdGF0ZSksIHVzZVNldFJlY29pbFN0YXRlKHJlY29pbFN0YXRlKV07XG59XG4vKipcbiAgTGlrZSB1c2VSZWNvaWxTdGF0ZSgpLCBidXQgZG9lcyBub3QgY2F1c2UgU3VzcGVuc2Ugb3IgUmVhY3QgZXJyb3IgaGFuZGxpbmcuIFJldHVybnNcbiAgYW4gb2JqZWN0IHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIFJlY29pbFN0YXRlIGlzIGF2YWlsYWJsZSwgcGVuZGluZywgb3JcbiAgdW5hdmFpbGFibGUgZHVlIHRvIGFuIGVycm9yLlxuKi9cblxuXG5mdW5jdGlvbiB1c2VSZWNvaWxTdGF0ZUxvYWRhYmxlKHJlY29pbFN0YXRlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2VzY2FwZWQtZ2VuZXJpY11cbiAgICB2YWxpZGF0ZVJlY29pbFZhbHVlKHJlY29pbFN0YXRlLCAndXNlUmVjb2lsU3RhdGVMb2FkYWJsZScpO1xuICB9XG5cbiAgcmV0dXJuIFt1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlKHJlY29pbFN0YXRlKSwgdXNlU2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpXTtcbn1cblxuZnVuY3Rpb24gdXNlVHJhbnNhY3Rpb25TdWJzY3JpcHRpb24oY2FsbGJhY2spIHtcbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VTdG9yZVJlZiQxKCk7XG4gIHVzZUVmZmVjdCQxKCgpID0+IHtcbiAgICBjb25zdCBzdWIgPSBzdG9yZVJlZi5jdXJyZW50LnN1YnNjcmliZVRvVHJhbnNhY3Rpb25zKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gc3ViLnJlbGVhc2U7XG4gIH0sIFtjYWxsYmFjaywgc3RvcmVSZWZdKTtcbn1cblxuZnVuY3Rpb24gZXh0ZXJuYWxseVZpc2libGVBdG9tVmFsdWVzSW5TdGF0ZShzdGF0ZSkge1xuICBjb25zdCBhdG9tVmFsdWVzID0gc3RhdGUuYXRvbVZhbHVlcy50b01hcCgpO1xuICBjb25zdCBwZXJzaXN0ZWRBdG9tQ29udGVudHNWYWx1ZXMgPSBSZWNvaWxfbWFwTWFwKFJlY29pbF9maWx0ZXJNYXAoYXRvbVZhbHVlcywgKHYsIGspID0+IHtcbiAgICBjb25zdCBub2RlID0gZ2V0Tm9kZSQzKGspO1xuICAgIGNvbnN0IHBlcnNpc3RlbmNlID0gbm9kZS5wZXJzaXN0ZW5jZV9VTlNUQUJMRTtcbiAgICByZXR1cm4gcGVyc2lzdGVuY2UgIT0gbnVsbCAmJiBwZXJzaXN0ZW5jZS50eXBlICE9PSAnbm9uZScgJiYgdi5zdGF0ZSA9PT0gJ2hhc1ZhbHVlJztcbiAgfSksIHYgPT4gdi5jb250ZW50cyk7IC8vIE1lcmdlIGluIG5vbnZhbGlkYXRlZCBhdG9tczsgd2UgbWF5IG5vdCBoYXZlIGRlZnMgZm9yIHRoZW0gYnV0IHRoZXkgd2lsbFxuICAvLyBhbGwgaGF2ZSBwZXJzaXN0ZW5jZSBvbiBvciB0aGV5IHdvdWxkbid0IGJlIHRoZXJlIGluIHRoZSBmaXJzdCBwbGFjZS5cblxuICByZXR1cm4gUmVjb2lsX21lcmdlTWFwcyhzdGF0ZS5ub252YWxpZGF0ZWRBdG9tcy50b01hcCgpLCBwZXJzaXN0ZWRBdG9tQ29udGVudHNWYWx1ZXMpO1xufVxuXG4vKipcbiAgQ2FsbHMgdGhlIGdpdmVuIGNhbGxiYWNrIGFmdGVyIGFueSBhdG9tcyBoYXZlIGJlZW4gbW9kaWZpZWQgYW5kIHRoZSBjb25zZXF1ZW50XG4gIGNvbXBvbmVudCByZS1yZW5kZXJzIGhhdmUgYmVlbiBjb21taXR0ZWQuIFRoaXMgaXMgaW50ZW5kZWQgZm9yIHBlcnNpc3RpbmdcbiAgdGhlIHZhbHVlcyBvZiB0aGUgYXRvbXMgdG8gc3RvcmFnZS4gVGhlIHN0b3JlZCB2YWx1ZXMgY2FuIHRoZW4gYmUgcmVzdG9yZWRcbiAgdXNpbmcgdGhlIHVzZVNldFVudmFsaWRhdGVkQXRvbVZhbHVlcyBob29rLlxuXG4gIFRoZSBjYWxsYmFjayByZWNlaXZlcyB0aGUgZm9sbG93aW5nIGluZm86XG5cbiAgYXRvbVZhbHVlczogVGhlIGN1cnJlbnQgdmFsdWUgb2YgZXZlcnkgYXRvbSB0aGF0IGlzIGJvdGggcGVyc2lzdGFibGUgKHBlcnNpc3RlbmNlXG4gICAgICAgICAgICAgIHR5cGUgbm90IHNldCB0byAnbm9uZScpIGFuZCB3aG9zZSB2YWx1ZSBpcyBhdmFpbGFibGUgKG5vdCBpbiBhblxuICAgICAgICAgICAgICBlcnJvciBvciBsb2FkaW5nIHN0YXRlKS5cblxuICBwcmV2aW91c0F0b21WYWx1ZXM6IFRoZSB2YWx1ZSBvZiBldmVyeSBwZXJzaXN0YWJsZSBhbmQgYXZhaWxhYmxlIGF0b20gYmVmb3JlXG4gICAgICAgICAgICAgICB0aGUgdHJhbnNhY3Rpb24gYmVnYW4uXG5cbiAgYXRvbUluZm86IEEgbWFwIGNvbnRhaW5pbmcgdGhlIHBlcnNpc3RlbmNlIHNldHRpbmdzIGZvciBlYWNoIGF0b20uIEV2ZXJ5IGtleVxuICAgICAgICAgICAgdGhhdCBleGlzdHMgaW4gYXRvbVZhbHVlcyB3aWxsIGFsc28gZXhpc3QgaW4gYXRvbUluZm8uXG5cbiAgbW9kaWZpZWRBdG9tczogVGhlIHNldCBvZiBhdG9tcyB0aGF0IHdlcmUgd3JpdHRlbiB0byBkdXJpbmcgdGhlIHRyYW5zYWN0aW9uLlxuXG4gIHRyYW5zYWN0aW9uTWV0YWRhdGE6IEFyYml0cmFyeSBpbmZvcm1hdGlvbiB0aGF0IHdhcyBhZGRlZCB2aWEgdGhlXG4gICAgICAgICAgdXNlU2V0VW52YWxpZGF0ZWRBdG9tVmFsdWVzIGhvb2suIFVzZWZ1bCBmb3IgaWdub3JpbmcgdGhlIHVzZVNldFVudmFsaWRhdGVkQXRvbVZhbHVlc1xuICAgICAgICAgIHRyYW5zYWN0aW9uLCB0byBhdm9pZCBsb29wcy5cbiovXG5mdW5jdGlvbiB1c2VUcmFuc2FjdGlvbk9ic2VydmF0aW9uX0RFUFJFQ0FURUQoY2FsbGJhY2spIHtcbiAgdXNlVHJhbnNhY3Rpb25TdWJzY3JpcHRpb24odXNlQ2FsbGJhY2skMShzdG9yZSA9PiB7XG4gICAgbGV0IHByZXZpb3VzVHJlZSA9IHN0b3JlLmdldFN0YXRlKCkucHJldmlvdXNUcmVlO1xuICAgIGNvbnN0IGN1cnJlbnRUcmVlID0gc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZTtcblxuICAgIGlmICghcHJldmlvdXNUcmVlKSB7XG4gICAgICBSZWNvaWxfcmVjb3ZlcmFibGVWaW9sYXRpb24oJ1RyYW5zYWN0aW9uIHN1YnNjcmliZXJzIG5vdGlmaWVkIHdpdGhvdXQgYSBwcmV2aW91cyB0cmVlIGJlaW5nIHByZXNlbnQgLS0gdGhpcyBpcyBhIGJ1ZyBpbiBSZWNvaWwnKTtcbiAgICAgIHByZXZpb3VzVHJlZSA9IHN0b3JlLmdldFN0YXRlKCkuY3VycmVudFRyZWU7IC8vIGF0dGVtcHQgdG8gdHJ1bmRsZSBvblxuICAgIH1cblxuICAgIGNvbnN0IGF0b21WYWx1ZXMgPSBleHRlcm5hbGx5VmlzaWJsZUF0b21WYWx1ZXNJblN0YXRlKGN1cnJlbnRUcmVlKTtcbiAgICBjb25zdCBwcmV2aW91c0F0b21WYWx1ZXMgPSBleHRlcm5hbGx5VmlzaWJsZUF0b21WYWx1ZXNJblN0YXRlKHByZXZpb3VzVHJlZSk7XG4gICAgY29uc3QgYXRvbUluZm8gPSBSZWNvaWxfbWFwTWFwKG5vZGVzJDEsIG5vZGUgPT4ge1xuICAgICAgdmFyIF9ub2RlJHBlcnNpc3RlbmNlX1VOUywgX25vZGUkcGVyc2lzdGVuY2VfVU5TMiwgX25vZGUkcGVyc2lzdGVuY2VfVU5TMywgX25vZGUkcGVyc2lzdGVuY2VfVU5TNDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGVyc2lzdGVuY2VfVU5TVEFCTEU6IHtcbiAgICAgICAgICB0eXBlOiAoX25vZGUkcGVyc2lzdGVuY2VfVU5TID0gKF9ub2RlJHBlcnNpc3RlbmNlX1VOUzIgPSBub2RlLnBlcnNpc3RlbmNlX1VOU1RBQkxFKSA9PT0gbnVsbCB8fCBfbm9kZSRwZXJzaXN0ZW5jZV9VTlMyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRwZXJzaXN0ZW5jZV9VTlMyLnR5cGUpICE9PSBudWxsICYmIF9ub2RlJHBlcnNpc3RlbmNlX1VOUyAhPT0gdm9pZCAwID8gX25vZGUkcGVyc2lzdGVuY2VfVU5TIDogJ25vbmUnLFxuICAgICAgICAgIGJhY2tCdXR0b246IChfbm9kZSRwZXJzaXN0ZW5jZV9VTlMzID0gKF9ub2RlJHBlcnNpc3RlbmNlX1VOUzQgPSBub2RlLnBlcnNpc3RlbmNlX1VOU1RBQkxFKSA9PT0gbnVsbCB8fCBfbm9kZSRwZXJzaXN0ZW5jZV9VTlM0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbm9kZSRwZXJzaXN0ZW5jZV9VTlM0LmJhY2tCdXR0b24pICE9PSBudWxsICYmIF9ub2RlJHBlcnNpc3RlbmNlX1VOUzMgIT09IHZvaWQgMCA/IF9ub2RlJHBlcnNpc3RlbmNlX1VOUzMgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pOyAvLyBGaWx0ZXIgb24gZXhpc3RhbmNlIGluIGF0b21WYWx1ZXMgc28gdGhhdCBleHRlcm5hbGx5LXZpc2libGUgcnVsZXNcbiAgICAvLyBhcmUgYWxzbyBhcHBsaWVkIHRvIG1vZGlmaWVkIGF0b21zIChzcGVjaWZpY2FsbHkgZXhjbHVkZSBzZWxlY3RvcnMpOlxuXG4gICAgY29uc3QgbW9kaWZpZWRBdG9tcyA9IFJlY29pbF9maWx0ZXJTZXQoY3VycmVudFRyZWUuZGlydHlBdG9tcywgayA9PiBhdG9tVmFsdWVzLmhhcyhrKSB8fCBwcmV2aW91c0F0b21WYWx1ZXMuaGFzKGspKTtcbiAgICBjYWxsYmFjayh7XG4gICAgICBhdG9tVmFsdWVzLFxuICAgICAgcHJldmlvdXNBdG9tVmFsdWVzLFxuICAgICAgYXRvbUluZm8sXG4gICAgICBtb2RpZmllZEF0b21zLFxuICAgICAgdHJhbnNhY3Rpb25NZXRhZGF0YTogeyAuLi5jdXJyZW50VHJlZS50cmFuc2FjdGlvbk1ldGFkYXRhXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtjYWxsYmFja10pKTtcbn1cblxuZnVuY3Rpb24gdXNlUmVjb2lsVHJhbnNhY3Rpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICB1c2VUcmFuc2FjdGlvblN1YnNjcmlwdGlvbih1c2VDYWxsYmFjayQxKHN0b3JlID0+IHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IGNsb25lU25hcHNob3QkMShzdG9yZSwgJ2N1cnJlbnQnKTtcbiAgICBjb25zdCBwcmV2aW91c1NuYXBzaG90ID0gY2xvbmVTbmFwc2hvdCQxKHN0b3JlLCAncHJldmlvdXMnKTtcbiAgICBjYWxsYmFjayh7XG4gICAgICBzbmFwc2hvdCxcbiAgICAgIHByZXZpb3VzU25hcHNob3RcbiAgICB9KTtcbiAgfSwgW2NhbGxiYWNrXSkpO1xufVxuXG5mdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSkge1xuICBjb25zdCByZWYgPSB1c2VSZWYkMigpO1xuICB1c2VFZmZlY3QkMSgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn0gLy8gUmV0dXJuIGEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHN1YnNjcmliZSB0byBhbGwgc3RhdGUgY2hhbmdlc1xuXG5cbmZ1bmN0aW9uIHVzZVJlY29pbFNuYXBzaG90KCkge1xuICBjb25zdCBzdG9yZVJlZiA9IHVzZVN0b3JlUmVmJDEoKTtcbiAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZSQxKCgpID0+IGNsb25lU25hcHNob3QkMShzdG9yZVJlZi5jdXJyZW50KSk7XG4gIGNvbnN0IHByZXZpb3VzU25hcHNob3QgPSB1c2VQcmV2aW91cyhzbmFwc2hvdCk7XG4gIGNvbnN0IHRpbWVvdXRJRCA9IHVzZVJlZiQyKCk7XG4gIHVzZUVmZmVjdCQxKCgpID0+IHtcbiAgICBpZiAodGltZW91dElELmN1cnJlbnQgJiYgIWlzU1NSJDIpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dElELmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBzbmFwc2hvdC5yZXRhaW4oKTtcbiAgfSwgW3NuYXBzaG90XSk7XG4gIHVzZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9uKHVzZUNhbGxiYWNrJDEoc3RvcmUgPT4gc2V0U25hcHNob3QoY2xvbmVTbmFwc2hvdCQxKHN0b3JlKSksIFtdKSk7XG5cbiAgaWYgKHByZXZpb3VzU25hcHNob3QgIT09IHNuYXBzaG90ICYmICFpc1NTUiQyKSB7XG4gICAgaWYgKHRpbWVvdXRJRC5jdXJyZW50KSB7XG4gICAgICBwcmV2aW91c1NuYXBzaG90ID09PSBudWxsIHx8IHByZXZpb3VzU25hcHNob3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByZXZpb3VzU25hcHNob3QucmVsZWFzZSgpO1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SUQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgc25hcHNob3QucmV0YWluKCk7XG4gICAgdGltZW91dElELmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzbmFwc2hvdC5yZWxlYXNlKCk7XG4gICAgICB0aW1lb3V0SUQuY3VycmVudCA9IG51bGw7XG4gICAgfSwgU1VTUEVOU0VfVElNRU9VVF9NUyk7XG4gIH1cblxuICByZXR1cm4gc25hcHNob3Q7XG59XG5cbmZ1bmN0aW9uIHVzZUdvdG9SZWNvaWxTbmFwc2hvdCgpIHtcbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VTdG9yZVJlZiQxKCk7XG4gIHJldHVybiB1c2VDYWxsYmFjayQxKHNuYXBzaG90ID0+IHtcbiAgICB2YXIgX3N0b3JlU3RhdGUkbmV4dFRyZWU7XG5cbiAgICBjb25zdCBzdG9yZVN0YXRlID0gc3RvcmVSZWYuY3VycmVudC5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHByZXYgPSAoX3N0b3JlU3RhdGUkbmV4dFRyZWUgPSBzdG9yZVN0YXRlLm5leHRUcmVlKSAhPT0gbnVsbCAmJiBfc3RvcmVTdGF0ZSRuZXh0VHJlZSAhPT0gdm9pZCAwID8gX3N0b3JlU3RhdGUkbmV4dFRyZWUgOiBzdG9yZVN0YXRlLmN1cnJlbnRUcmVlO1xuICAgIGNvbnN0IG5leHQgPSBzbmFwc2hvdC5nZXRTdG9yZV9JTlRFUk5BTCgpLmdldFN0YXRlKCkuY3VycmVudFRyZWU7XG4gICAgYmF0Y2hVcGRhdGVzJDIoKCkgPT4ge1xuICAgICAgY29uc3Qga2V5c1RvVXBkYXRlID0gbmV3IFNldCgpO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleXMgb2YgW3ByZXYuYXRvbVZhbHVlcy5rZXlzKCksIG5leHQuYXRvbVZhbHVlcy5rZXlzKCldKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICB2YXIgX3ByZXYkYXRvbVZhbHVlcyRnZXQsIF9uZXh0JGF0b21WYWx1ZXMkZ2V0O1xuXG4gICAgICAgICAgaWYgKCgoX3ByZXYkYXRvbVZhbHVlcyRnZXQgPSBwcmV2LmF0b21WYWx1ZXMuZ2V0KGtleSkpID09PSBudWxsIHx8IF9wcmV2JGF0b21WYWx1ZXMkZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJldiRhdG9tVmFsdWVzJGdldC5jb250ZW50cykgIT09ICgoX25leHQkYXRvbVZhbHVlcyRnZXQgPSBuZXh0LmF0b21WYWx1ZXMuZ2V0KGtleSkpID09PSBudWxsIHx8IF9uZXh0JGF0b21WYWx1ZXMkZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbmV4dCRhdG9tVmFsdWVzJGdldC5jb250ZW50cykgJiYgZ2V0Tm9kZSQzKGtleSkuc2hvdWxkUmVzdG9yZUZyb21TbmFwc2hvdHMpIHtcbiAgICAgICAgICAgIGtleXNUb1VwZGF0ZS5hZGQoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAga2V5c1RvVXBkYXRlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgc2V0UmVjb2lsVmFsdWVMb2FkYWJsZSQxKHN0b3JlUmVmLmN1cnJlbnQsIG5ldyBBYnN0cmFjdFJlY29pbFZhbHVlJDMoa2V5KSwgbmV4dC5hdG9tVmFsdWVzLmhhcyhrZXkpID8gUmVjb2lsX251bGx0aHJvd3MobmV4dC5hdG9tVmFsdWVzLmdldChrZXkpKSA6IERFRkFVTFRfVkFMVUUkMik7XG4gICAgICB9KTtcbiAgICAgIHN0b3JlUmVmLmN1cnJlbnQucmVwbGFjZVN0YXRlKHN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICAgICAgc3RhdGVJRDogc25hcHNob3QuZ2V0SURfSU5URVJOQUwoKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtzdG9yZVJlZl0pO1xufVxuXG5mdW5jdGlvbiB1c2VTZXRVbnZhbGlkYXRlZEF0b21WYWx1ZXMoKSB7XG4gIGNvbnN0IHN0b3JlUmVmID0gdXNlU3RvcmVSZWYkMSgpO1xuICByZXR1cm4gKHZhbHVlcywgdHJhbnNhY3Rpb25NZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgYmF0Y2hVcGRhdGVzJDIoKCkgPT4ge1xuICAgICAgc3RvcmVSZWYuY3VycmVudC5hZGRUcmFuc2FjdGlvbk1ldGFkYXRhKHRyYW5zYWN0aW9uTWV0YWRhdGEpO1xuICAgICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHNldFVudmFsaWRhdGVkUmVjb2lsVmFsdWUkMihzdG9yZVJlZi5jdXJyZW50LCBuZXcgQWJzdHJhY3RSZWNvaWxWYWx1ZSQzKGtleSksIHZhbHVlKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmNsYXNzIFNlbnRpbmVsIHt9XG5cbmNvbnN0IFNFTlRJTkVMID0gbmV3IFNlbnRpbmVsKCk7XG5cbmZ1bmN0aW9uIHVzZVJlY29pbENhbGxiYWNrKGZuLCBkZXBzKSB7XG4gIGNvbnN0IHN0b3JlUmVmID0gdXNlU3RvcmVSZWYkMSgpO1xuICBjb25zdCBnb3RvU25hcHNob3QgPSB1c2VHb3RvUmVjb2lsU25hcHNob3QoKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrJDEoKC4uLmFyZ3MpID0+IHtcbiAgICBmdW5jdGlvbiBzZXQocmVjb2lsU3RhdGUsIG5ld1ZhbHVlT3JVcGRhdGVyKSB7XG4gICAgICBzZXRSZWNvaWxWYWx1ZSQyKHN0b3JlUmVmLmN1cnJlbnQsIHJlY29pbFN0YXRlLCBuZXdWYWx1ZU9yVXBkYXRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQocmVjb2lsU3RhdGUpIHtcbiAgICAgIHNldFJlY29pbFZhbHVlJDIoc3RvcmVSZWYuY3VycmVudCwgcmVjb2lsU3RhdGUsIERFRkFVTFRfVkFMVUUkMik7XG4gICAgfSAvLyBVc2UgY3VycmVudFRyZWUgZm9yIHRoZSBzbmFwc2hvdCB0byBzaG93IHRoZSBjdXJyZW50bHkgY29tbWl0dGVkIHN0YXRlXG5cblxuICAgIGNvbnN0IHNuYXBzaG90ID0gY2xvbmVTbmFwc2hvdCQxKHN0b3JlUmVmLmN1cnJlbnQpO1xuICAgIGxldCByZXQgPSBTRU5USU5FTDtcbiAgICBiYXRjaFVwZGF0ZXMkMigoKSA9PiB7XG4gICAgICBjb25zdCBlcnJNc2cgPSAndXNlUmVjb2lsQ2FsbGJhY2sgZXhwZWN0cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGZ1bmN0aW9uOiAnICsgJ2l0IGFjY2VwdHMgYSBmdW5jdGlvbiBvZiB0aGUgdHlwZSAoUmVjb2lsSW50ZXJmYWNlKSA9PiBUID0gUiAnICsgJ2FuZCByZXR1cm5zIGEgY2FsbGJhY2sgZnVuY3Rpb24gVCA9PiBSLCB3aGVyZSBSZWNvaWxJbnRlcmZhY2UgaXMgYW4gJyArICdvYmplY3Qge3NuYXBzaG90LCBzZXQsIC4uLn0gYW5kIFQgYW5kIFIgYXJlIHRoZSBhcmd1bWVudCBhbmQgcmV0dXJuICcgKyAndHlwZXMgb2YgdGhlIGNhbGxiYWNrIHlvdSB3YW50IHRvIGNyZWF0ZS4gIFBsZWFzZSBzZWUgdGhlIGRvY3MgJyArICdhdCByZWNvaWxqcy5vcmcgZm9yIGRldGFpbHMuJztcblxuICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcbiAgICAgIH0gLy8gZmxvd2xpbnQtbmV4dC1saW5lIHVuY2xlYXItdHlwZTpvZmZcblxuXG4gICAgICBjb25zdCBjYiA9IGZuKHtcbiAgICAgICAgc2V0LFxuICAgICAgICByZXNldCxcbiAgICAgICAgc25hcHNob3QsXG4gICAgICAgIGdvdG9TbmFwc2hvdFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGNiKC4uLmFyZ3MpO1xuICAgIH0pO1xuICAgICEhKHJldCBpbnN0YW5jZW9mIFNlbnRpbmVsKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFJlY29pbF9pbnZhcmlhbnQoZmFsc2UsICdiYXRjaFVwZGF0ZXMgc2hvdWxkIHJldHVybiBpbW1lZGlhdGVseScpIDogUmVjb2lsX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIHJldDtcbiAgfSwgZGVwcyAhPSBudWxsID8gWy4uLmRlcHMsIHN0b3JlUmVmXSA6IHVuZGVmaW5lZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZiLXd3dy9yZWFjdC1ob29rcy1kZXBzXG4gICk7XG59IC8vIEkgZG9uJ3Qgc2VlIGEgd2F5IHRvIGF2b2lkIHRoZSBhbnkgdHlwZSBoZXJlIGJlY2F1c2Ugd2Ugd2FudCB0byBhY2NlcHQgcmVhZGFibGVcbi8vIGFuZCB3cml0YWJsZSB2YWx1ZXMgd2l0aCBhbnkgdHlwZSBwYXJhbWV0ZXIsIGJ1dCBub3JtYWxseSB3aXRoIHdyaXRhYmxlIG9uZXNcbi8vIFJlY29pbFN0YXRlPFNvbWVUPiBpcyBub3QgYSBzdWJ0eXBlIG9mIFJlY29pbFN0YXRlPG1peGVkPi5cblxuXG4vLyBmbG93bGludC1saW5lIHVuY2xlYXItdHlwZTpvZmZcbmZ1bmN0aW9uIHVzZVJldGFpbih0b1JldGFpbikge1xuICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmItd3d3L3JlYWN0LWhvb2tzXG5cblxuICByZXR1cm4gdXNlUmV0YWluX0FDVFVBTCh0b1JldGFpbik7XG59XG5cbmZ1bmN0aW9uIHVzZVJldGFpbl9BQ1RVQUwodG9SZXRhaW4pIHtcbiAgY29uc3QgYXJyYXkgPSBBcnJheS5pc0FycmF5KHRvUmV0YWluKSA/IHRvUmV0YWluIDogW3RvUmV0YWluXTtcbiAgY29uc3QgcmV0YWluYWJsZXMgPSBhcnJheS5tYXAoYSA9PiBhIGluc3RhbmNlb2YgUmV0ZW50aW9uWm9uZSQzID8gYSA6IGEua2V5KTtcbiAgY29uc3Qgc3RvcmVSZWYgPSB1c2VTdG9yZVJlZiQxKCk7XG4gIHVzZUVmZmVjdCQxKCgpID0+IHtcbiAgICBpZiAoIVJlY29pbF9na3hfMSgncmVjb2lsX21lbW9yeV9tYW5hZ2FtZW50XzIwMjAnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlID0gc3RvcmVSZWYuY3VycmVudDtcblxuICAgIGlmICh0aW1lb3V0SUQuY3VycmVudCAmJiAhaXNTU1IkMikge1xuICAgICAgLy8gQWxyZWFkeSBwZXJmb3JtZWQgYSB0ZW1wb3JhcnkgcmV0YWluIG9uIHJlbmRlciwgc2ltcGx5IGNhbmNlbCB0aGUgcmVsZWFzZVxuICAgICAgLy8gb2YgdGhhdCB0ZW1wb3JhcnkgcmV0YWluLlxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SUQuY3VycmVudCk7XG4gICAgICB0aW1lb3V0SUQuY3VycmVudCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvZyB0aGlzIHNpbmNlIGl0J3Mgbm90IGNsZWFyIHRoYXQgdGhlcmUncyBhbnkgc2NlbmFyaW8gd2hlcmUgaXQgc2hvdWxkIGhhcHBlbi5cbiAgICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbignRGlkIG5vdCByZXRhaW4gcmVjb2lsIHZhbHVlIG9uIHJlbmRlciwgb3IgY29tbWl0dGVkIGFmdGVyIHRpbWVvdXQgZWxhcHNlZC4gVGhpcyBpcyBmaW5lLCBidXQgb2RkLicpO1xuXG4gICAgICBmb3IgKGNvbnN0IHIgb2YgcmV0YWluYWJsZXMpIHtcbiAgICAgICAgdXBkYXRlUmV0YWluQ291bnQkMShzdG9yZSwgciwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZXRhaW5hYmxlcykge1xuICAgICAgICB1cGRhdGVSZXRhaW5Db3VudCQxKHN0b3JlLCByLCAtMSk7XG4gICAgICB9XG4gICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZiLXd3dy9yZWFjdC1ob29rcy1kZXBzXG4gIH0sIFtzdG9yZVJlZiwgLi4ucmV0YWluYWJsZXNdKTsgLy8gV2Ugd2FudCB0byByZXRhaW4gaWYgdGhlIGNvbXBvbmVudCBzdXNwZW5kcy4gVGhpcyBpcyB0ZXJyaWJsZSBidXQgdGhlIFN1c3BlbnNlXG4gIC8vIEFQSSBhZmZvcmRzIHVzIG5vIGJldHRlciBvcHRpb24uIElmIHdlIHN1c3BlbmQgYW5kIG5ldmVyIGNvbW1pdCBhZnRlciBzb21lXG4gIC8vIHNlY29uZHMsIHRoZW4gcmVsZWFzZS4gVGhlICdhY3R1YWwnIHJldGFpbi9yZWxlYXNlIGluIHRoZSBlZmZlY3QgYWJvdmVcbiAgLy8gY2FuY2VscyB0aGlzLlxuXG4gIGNvbnN0IHRpbWVvdXRJRCA9IHVzZVJlZiQyKCk7XG4gIGNvbnN0IHByZXZpb3VzUmV0YWluYWJsZXMgPSB1c2VQcmV2aW91cyhyZXRhaW5hYmxlcyk7XG5cbiAgaWYgKCFpc1NTUiQyICYmIChwcmV2aW91c1JldGFpbmFibGVzID09PSB1bmRlZmluZWQgfHwgIVJlY29pbF9zaGFsbG93QXJyYXlFcXVhbChwcmV2aW91c1JldGFpbmFibGVzLCByZXRhaW5hYmxlcykpKSB7XG4gICAgY29uc3Qgc3RvcmUgPSBzdG9yZVJlZi5jdXJyZW50O1xuXG4gICAgZm9yIChjb25zdCByIG9mIHJldGFpbmFibGVzKSB7XG4gICAgICB1cGRhdGVSZXRhaW5Db3VudCQxKHN0b3JlLCByLCAxKTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNSZXRhaW5hYmxlcykge1xuICAgICAgZm9yIChjb25zdCByIG9mIHByZXZpb3VzUmV0YWluYWJsZXMpIHtcbiAgICAgICAgdXBkYXRlUmV0YWluQ291bnQkMShzdG9yZSwgciwgLTEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW1lb3V0SUQuY3VycmVudCkge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0SUQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgdGltZW91dElELmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aW1lb3V0SUQuY3VycmVudCA9IG51bGw7XG5cbiAgICAgIGZvciAoY29uc3QgciBvZiByZXRhaW5hYmxlcykge1xuICAgICAgICB1cGRhdGVSZXRhaW5Db3VudCQxKHN0b3JlLCByLCAtMSk7XG4gICAgICB9XG4gICAgfSwgU1VTUEVOU0VfVElNRU9VVF9NUyk7XG4gIH1cbn1cblxudmFyIFJlY29pbF9Ib29rcyA9IHtcbiAgcmVjb2lsQ29tcG9uZW50R2V0UmVjb2lsVmFsdWVDb3VudF9GT1JfVEVTVElORyxcbiAgdXNlR290b1JlY29pbFNuYXBzaG90LFxuICB1c2VSZWNvaWxDYWxsYmFjayxcbiAgdXNlUmVjb2lsSW50ZXJmYWNlOiB1c2VSZWNvaWxJbnRlcmZhY2VfREVQUkVDQVRFRCxcbiAgdXNlUmVjb2lsU25hcHNob3QsXG4gIHVzZVJlY29pbFN0YXRlLFxuICB1c2VSZWNvaWxTdGF0ZUxvYWRhYmxlLFxuICB1c2VSZWNvaWxUcmFuc2FjdGlvbk9ic2VydmVyLFxuICB1c2VSZWNvaWxWYWx1ZSxcbiAgdXNlUmVjb2lsVmFsdWVMb2FkYWJsZSxcbiAgdXNlUmV0YWluLFxuICB1c2VSZXNldFJlY29pbFN0YXRlLFxuICB1c2VTZXRSZWNvaWxTdGF0ZSxcbiAgdXNlU2V0VW52YWxpZGF0ZWRBdG9tVmFsdWVzLFxuICB1c2VUcmFuc2FjdGlvbk9ic2VydmF0aW9uX0RFUFJFQ0FURUQsXG4gIHVzZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9uX0RFUFJFQ0FURUQ6IHVzZVRyYW5zYWN0aW9uU3Vic2NyaXB0aW9uXG59O1xuXG5jb25zdCB7XG4gIHBlZWtOb2RlSW5mbzogcGVla05vZGVJbmZvJDJcbn0gPSBSZWNvaWxfRnVuY3Rpb25hbENvcmU7XG5cbmNvbnN0IHtcbiAgdXNlU3RvcmVSZWY6IHVzZVN0b3JlUmVmJDJcbn0gPSBSZWNvaWxfUmVjb2lsUm9vdF9yZWFjdDtcblxuZnVuY3Rpb24gdXNlR2V0UmVjb2lsVmFsdWVJbmZvKCkge1xuICBjb25zdCBzdG9yZVJlZiA9IHVzZVN0b3JlUmVmJDIoKTtcbiAgcmV0dXJuICh7XG4gICAga2V5XG4gIH0pID0+IHBlZWtOb2RlSW5mbyQyKHN0b3JlUmVmLmN1cnJlbnQsIHN0b3JlUmVmLmN1cnJlbnQuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZSwga2V5KTtcbn1cblxudmFyIFJlY29pbF91c2VHZXRSZWNvaWxWYWx1ZUluZm8gPSB1c2VHZXRSZWNvaWxWYWx1ZUluZm87XG5cbmNvbnN0IHtcbiAgUmVjb2lsUm9vdDogUmVjb2lsUm9vdCQxLFxuICB1c2VTdG9yZVJlZjogdXNlU3RvcmVSZWYkM1xufSA9IFJlY29pbF9SZWNvaWxSb290X3JlYWN0O1xuXG5cblxuY29uc3Qge1xuICB1c2VNZW1vOiB1c2VNZW1vJDJcbn0gPSByZWFjdDtcblxuZnVuY3Rpb24gdXNlUmVjb2lsQnJpZGdlQWNyb3NzUmVhY3RSb290cygpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZVJlZiQzKCkuY3VycmVudDtcbiAgcmV0dXJuIHVzZU1lbW8kMigoKSA9PiB7XG4gICAgZnVuY3Rpb24gUmVjb2lsQnJpZGdlKHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9yZWFjdC5jcmVhdGVFbGVtZW50KFJlY29pbFJvb3QkMSwge1xuICAgICAgICBzdG9yZV9JTlRFUk5BTDogc3RvcmVcbiAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVjb2lsQnJpZGdlO1xuICB9LCBbc3RvcmVdKTtcbn1cblxudmFyIFJlY29pbF91c2VSZWNvaWxCcmlkZ2VBY3Jvc3NSZWFjdFJvb3RzID0gdXNlUmVjb2lsQnJpZGdlQWNyb3NzUmVhY3RSb290cztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG5cbi8vIFNwbGl0IGRlY2xhcmF0aW9uIGFuZCBpbXBsZW1lbnRhdGlvbiB0byBhbGxvdyB0aGlzIGZ1bmN0aW9uIHRvIHByZXRlbmQgdG9cbi8vIGNoZWNrIGZvciBhY3R1YWwgaW5zdGFuY2Ugb2YgUHJvbWlzZSBpbnN0ZWFkIG9mIHNvbWV0aGluZyB3aXRoIGEgYHRoZW5gXG4vLyBtZXRob2QuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5mdW5jdGlvbiBpc1Byb21pc2UocCkge1xuICByZXR1cm4gISFwICYmIHR5cGVvZiBwLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbnZhciBSZWNvaWxfaXNQcm9taXNlID0gaXNQcm9taXNlO1xuXG4vLyBUT0RPIENvbnZlcnQgTG9hZGFibGUgdG8gYSBDbGFzcyB0byBhbGxvdyBmb3IgcnVudGltZSB0eXBlIGRldGVjdGlvbi5cbi8vIENvbnRhaW5pbmcgc3RhdGljIGZhY3RvcmllcyBvZiB3aXRoVmFsdWUoKSwgd2l0aEVycm9yKCksIHdpdGhQcm9taXNlKCksIGFuZCBhbGwoKVxuXG5cbmNsYXNzIENhbmNlbGVkIHt9XG5cbmNvbnN0IENBTkNFTEVEID0gbmV3IENhbmNlbGVkKCk7XG5jb25zdCBsb2FkYWJsZUFjY2Vzc29ycyA9IHtcbiAgLyoqXG4gICAqIGlmIGxvYWRhYmxlIGhhcyBhIHZhbHVlIChzdGF0ZSA9PT0gJ2hhc1ZhbHVlJyksIHJldHVybiB0aGF0IHZhbHVlLlxuICAgKiBPdGhlcndpc2UsIHRocm93IHRoZSAodW53cmFwcGVkKSBwcm9taXNlIG9yIHRoZSBlcnJvci5cbiAgICovXG4gIGdldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRocm93IHRoaXMuY29udGVudHMudGhlbigoe1xuICAgICAgICBfX3ZhbHVlXG4gICAgICB9KSA9PiBfX3ZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2hhc1ZhbHVlJykge1xuICAgICAgdGhyb3cgdGhpcy5jb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb250ZW50cztcbiAgfSxcblxuICB0b1Byb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdoYXNWYWx1ZScgPyBQcm9taXNlLnJlc29sdmUodGhpcy5jb250ZW50cykgOiB0aGlzLnN0YXRlID09PSAnaGFzRXJyb3InID8gUHJvbWlzZS5yZWplY3QodGhpcy5jb250ZW50cykgOiB0aGlzLmNvbnRlbnRzLnRoZW4oKHtcbiAgICAgIF9fdmFsdWVcbiAgICB9KSA9PiBfX3ZhbHVlKTtcbiAgfSxcblxuICB2YWx1ZU1heWJlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSAnaGFzVmFsdWUnID8gdGhpcy5jb250ZW50cyA6IHVuZGVmaW5lZDtcbiAgfSxcblxuICB2YWx1ZU9yVGhyb3coKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09ICdoYXNWYWx1ZScpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBMb2FkYWJsZSBleHBlY3RlZCB2YWx1ZSwgYnV0IGluIFwiJHt0aGlzLnN0YXRlfVwiIHN0YXRlYCk7IC8vIFY4IGtlZXBzIGNsb3N1cmVzIGFsaXZlIHVudGlsIHN0YWNrIGlzIGFjY2Vzc2VkLCB0aGlzIHByZXZlbnRzIGEgbWVtb3J5IGxlYWtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzO1xuICB9LFxuXG4gIGVycm9yTWF5YmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdoYXNFcnJvcicgPyB0aGlzLmNvbnRlbnRzIDogdW5kZWZpbmVkO1xuICB9LFxuXG4gIGVycm9yT3JUaHJvdygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2hhc0Vycm9yJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYExvYWRhYmxlIGV4cGVjdGVkIGVycm9yLCBidXQgaW4gXCIke3RoaXMuc3RhdGV9XCIgc3RhdGVgKTsgLy8gVjgga2VlcHMgY2xvc3VyZXMgYWxpdmUgdW50aWwgc3RhY2sgaXMgYWNjZXNzZWQsIHRoaXMgcHJldmVudHMgYSBtZW1vcnkgbGVha1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29udGVudHM7XG4gIH0sXG5cbiAgcHJvbWlzZU1heWJlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09PSAnbG9hZGluZycgPyB0aGlzLmNvbnRlbnRzLnRoZW4oKHtcbiAgICAgIF9fdmFsdWVcbiAgICB9KSA9PiBfX3ZhbHVlKSA6IHVuZGVmaW5lZDtcbiAgfSxcblxuICBwcm9taXNlT3JUaHJvdygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgTG9hZGFibGUgZXhwZWN0ZWQgcHJvbWlzZSwgYnV0IGluIFwiJHt0aGlzLnN0YXRlfVwiIHN0YXRlYCk7IC8vIFY4IGtlZXBzIGNsb3N1cmVzIGFsaXZlIHVudGlsIHN0YWNrIGlzIGFjY2Vzc2VkLCB0aGlzIHByZXZlbnRzIGEgbWVtb3J5IGxlYWtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzLnRoZW4oKHtcbiAgICAgIF9fdmFsdWVcbiAgICB9KSA9PiBfX3ZhbHVlKTtcbiAgfSxcblxuICBpcyhvdGhlcikge1xuICAgIHJldHVybiBvdGhlci5zdGF0ZSA9PT0gdGhpcy5zdGF0ZSAmJiBvdGhlci5jb250ZW50cyA9PT0gdGhpcy5jb250ZW50cztcbiAgfSxcblxuICAvLyBUT0RPIFVuaXQgdGVzdHNcbiAgLy8gVE9ETyBDb252ZXJ0IExvYWRhYmxlIHRvIGEgQ2xhc3MgdG8gYmV0dGVyIHN1cHBvcnQgY2hhaW5pbmdcbiAgLy8gICAgICBieSByZXR1cm5pbmcgYSBMb2FkYWJsZSBmcm9tIGEgbWFwIGZ1bmN0aW9uXG4gIG1hcChtYXApIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2hhc0Vycm9yJykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdoYXNWYWx1ZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBtYXAodGhpcy5jb250ZW50cyk7IC8vIFRPRE8gaWYgbmV4dCBpbnN0YW5jZW9mIExvYWRhYmxlLCB0aGVuIHJldHVybiBuZXh0XG5cbiAgICAgICAgcmV0dXJuIFJlY29pbF9pc1Byb21pc2UobmV4dCkgPyBsb2FkYWJsZVdpdGhQcm9taXNlKG5leHQpIDogbG9hZGFibGVXaXRoVmFsdWUobmV4dCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBSZWNvaWxfaXNQcm9taXNlKGUpID8gLy8gSWYgd2UgXCJzdXNwZW5kZWRcIiwgdGhlbiB0cnkgYWdhaW4uXG4gICAgICAgIC8vIGVycm9ycyBhbmQgc3Vic2VxdWVudCByZXRyaWVzIHdpbGwgYmUgaGFuZGxlZCBpbiAnbG9hZGluZycgY2FzZVxuICAgICAgICBsb2FkYWJsZVdpdGhQcm9taXNlKGUubmV4dCgoKSA9PiBtYXAodGhpcy5jb250ZW50cykpKSA6IGxvYWRhYmxlV2l0aEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgIHJldHVybiBsb2FkYWJsZVdpdGhQcm9taXNlKHRoaXMuY29udGVudHMgLy8gVE9ETyBpZiBtYXAgcmV0dXJucyBhIGxvYWRhYmxlLCB0aGVuIHJldHVybiB0aGUgdmFsdWUgb3IgcHJvbWlzZSBvciB0aHJvdyB0aGUgZXJyb3JcbiAgICAgIC50aGVuKG1hcCkuY2F0Y2goZSA9PiB7XG4gICAgICAgIGlmIChSZWNvaWxfaXNQcm9taXNlKGUpKSB7XG4gICAgICAgICAgLy8gd2Ugd2VyZSBcInN1c3BlbmRlZCxcIiB0cnkgYWdhaW5cbiAgICAgICAgICByZXR1cm4gZS50aGVuKCgpID0+IG1hcCh0aGlzLmNvbnRlbnRzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCdJbnZhbGlkIExvYWRhYmxlIHN0YXRlJyk7IC8vIFY4IGtlZXBzIGNsb3N1cmVzIGFsaXZlIHVudGlsIHN0YWNrIGlzIGFjY2Vzc2VkLCB0aGlzIHByZXZlbnRzIGEgbWVtb3J5IGxlYWtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBsb2FkYWJsZVdpdGhWYWx1ZSh2YWx1ZSkge1xuICAvLyBCdWlsZCBvYmplY3RzIHRoaXMgd2F5IHNpbmNlIEZsb3cgZG9lc24ndCBzdXBwb3J0IGRpc2pvaW50IHVuaW9ucyBmb3IgY2xhc3MgcHJvcGVydGllc1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdGU6ICdoYXNWYWx1ZScsXG4gICAgY29udGVudHM6IHZhbHVlLFxuICAgIC4uLmxvYWRhYmxlQWNjZXNzb3JzXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkYWJsZVdpdGhFcnJvcihlcnJvcikge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgc3RhdGU6ICdoYXNFcnJvcicsXG4gICAgY29udGVudHM6IGVycm9yLFxuICAgIC4uLmxvYWRhYmxlQWNjZXNzb3JzXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkYWJsZVdpdGhQcm9taXNlKHByb21pc2UpIHtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIHN0YXRlOiAnbG9hZGluZycsXG4gICAgY29udGVudHM6IHByb21pc2UsXG4gICAgLi4ubG9hZGFibGVBY2Nlc3NvcnNcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRhYmxlTG9hZGluZygpIHtcbiAgcmV0dXJuIGxvYWRhYmxlV2l0aFByb21pc2UobmV3IFByb21pc2UoKCkgPT4ge30pKTtcbn1cblxuZnVuY3Rpb24gbG9hZGFibGVBbGwoaW5wdXRzKSB7XG4gIHJldHVybiBpbnB1dHMuZXZlcnkoaSA9PiBpLnN0YXRlID09PSAnaGFzVmFsdWUnKSA/IGxvYWRhYmxlV2l0aFZhbHVlKGlucHV0cy5tYXAoaSA9PiBpLmNvbnRlbnRzKSkgOiBpbnB1dHMuc29tZShpID0+IGkuc3RhdGUgPT09ICdoYXNFcnJvcicpID8gbG9hZGFibGVXaXRoRXJyb3IoUmVjb2lsX251bGx0aHJvd3MoaW5wdXRzLmZpbmQoaSA9PiBpLnN0YXRlID09PSAnaGFzRXJyb3InKSwgJ0ludmFsaWQgbG9hZGFibGUgcGFzc2VkIHRvIGxvYWRhYmxlQWxsJykuY29udGVudHMpIDogbG9hZGFibGVXaXRoUHJvbWlzZShQcm9taXNlLmFsbChpbnB1dHMubWFwKGkgPT4gaS5jb250ZW50cykpLnRoZW4odmFsdWUgPT4gKHtcbiAgICBfX3ZhbHVlOiB2YWx1ZVxuICB9KSkpO1xufVxuXG52YXIgUmVjb2lsX0xvYWRhYmxlID0ge1xuICBsb2FkYWJsZVdpdGhWYWx1ZSxcbiAgbG9hZGFibGVXaXRoRXJyb3IsXG4gIGxvYWRhYmxlV2l0aFByb21pc2UsXG4gIGxvYWRhYmxlTG9hZGluZyxcbiAgbG9hZGFibGVBbGwsXG4gIENhbmNlbGVkLFxuICBDQU5DRUxFRFxufTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZW1haWxzIG9uY2FsbCtyZWNvaWxcbiAqIFxuICogQGZvcm1hdFxuICovXG5cbmZ1bmN0aW9uIGlzTm9kZShvYmplY3QpIHtcbiAgdmFyIF9vd25lckRvY3VtZW50LCBfZG9jJGRlZmF1bHRWaWV3O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRvYyA9IG9iamVjdCAhPSBudWxsID8gKF9vd25lckRvY3VtZW50ID0gb2JqZWN0Lm93bmVyRG9jdW1lbnQpICE9PSBudWxsICYmIF9vd25lckRvY3VtZW50ICE9PSB2b2lkIDAgPyBfb3duZXJEb2N1bWVudCA6IG9iamVjdCA6IGRvY3VtZW50O1xuICBjb25zdCBkZWZhdWx0VmlldyA9IChfZG9jJGRlZmF1bHRWaWV3ID0gZG9jLmRlZmF1bHRWaWV3KSAhPT0gbnVsbCAmJiBfZG9jJGRlZmF1bHRWaWV3ICE9PSB2b2lkIDAgPyBfZG9jJGRlZmF1bHRWaWV3IDogd2luZG93O1xuICByZXR1cm4gISEob2JqZWN0ICE9IG51bGwgJiYgKHR5cGVvZiBkZWZhdWx0Vmlldy5Ob2RlID09PSAnZnVuY3Rpb24nID8gb2JqZWN0IGluc3RhbmNlb2YgZGVmYXVsdFZpZXcuTm9kZSA6IHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmplY3Qubm9kZVR5cGUgPT09ICdudW1iZXInICYmIHR5cGVvZiBvYmplY3Qubm9kZU5hbWUgPT09ICdzdHJpbmcnKSk7XG59XG5cbnZhciBSZWNvaWxfaXNOb2RlID0gaXNOb2RlO1xuXG5jb25zdCB7XG4gIGlzUmVhY3ROYXRpdmU6IGlzUmVhY3ROYXRpdmUkMSxcbiAgaXNTU1I6IGlzU1NSJDNcbn0gPSBSZWNvaWxfRW52aXJvbm1lbnQ7XG5cblxuXG5cblxuZnVuY3Rpb24gc2hvdWxkTm90QmVGcm96ZW4odmFsdWUpIHtcbiAgLy8gUHJpbWl0aXZlcyBhbmQgZnVuY3Rpb25zOlxuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFJlYWN0IGVsZW1lbnRzOlxuXG5cbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUuJCR0eXBlb2YpIHtcbiAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSW1tdXRhYmxlIHN0cnVjdHVyZXM6XG5cblxuICBpZiAodmFsdWVbJ0BAX19JTU1VVEFCTEVfSVRFUkFCTEVfX0BAJ10gIT0gbnVsbCB8fCB2YWx1ZVsnQEBfX0lNTVVUQUJMRV9LRVlFRF9fQEAnXSAhPSBudWxsIHx8IHZhbHVlWydAQF9fSU1NVVRBQkxFX0lOREVYRURfX0BAJ10gIT0gbnVsbCB8fCB2YWx1ZVsnQEBfX0lNTVVUQUJMRV9PUkRFUkVEX19AQCddICE9IG51bGwgfHwgdmFsdWVbJ0BAX19JTU1VVEFCTEVfUkVDT1JEX19AQCddICE9IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBET00gbm9kZXM6XG5cblxuICBpZiAoUmVjb2lsX2lzTm9kZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChSZWNvaWxfaXNQcm9taXNlKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gU29tZSBlbnZpcm9ubWVudHMsIGp1c3QgYXMgSmVzdCwgZG9uJ3Qgd29yayB3aXRoIHRoZSBpbnN0YW5jZW9mIGNoZWNrXG5cblxuICBpZiAoIWlzU1NSJDMgJiYgIWlzUmVhY3ROYXRpdmUkMSAmJiAoIC8vICRGbG93Rml4TWUoc2l0ZT1yZWNvaWwpIFdpbmRvdyBkb2VzIG5vdCBoYXZlIGEgRmxvd1R5cGUgZGVmaW5pdGlvbiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvNjcwOVxuICB2YWx1ZSA9PT0gd2luZG93IHx8IHZhbHVlIGluc3RhbmNlb2YgV2luZG93KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBSZWN1cnNpdmVseSBmcmVlemUgYSB2YWx1ZSB0byBlbmZvcmNlIGl0IGlzIHJlYWQtb25seS5cbi8vIFRoaXMgbWF5IGFsc28gaGF2ZSBtaW5pbWFsIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50cyBmb3IgZW51bWVyYXRpbmdcbi8vIG9iamVjdHMgKGJhc2VkIG9uIGJyb3dzZXIgaW1wbGVtZW50YXRpb25zLCBvZiBjb3Vyc2UpXG5cblxuZnVuY3Rpb24gZGVlcEZyZWV6ZVZhbHVlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHNob3VsZE5vdEJlRnJvemVuKHZhbHVlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5mcmVlemUodmFsdWUpOyAvLyBNYWtlIGFsbCBwcm9wZXJ0aWVzIHJlYWQtb25seVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgY29uc3QgcHJvcCA9IHZhbHVlW2tleV07IC8vIFByZXZlbnQgaW5maW5pdGUgcmVjdXJzc2lvbiBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcy5cblxuICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyAmJiBwcm9wICE9IG51bGwgJiYgIU9iamVjdC5pc0Zyb3plbihwcm9wKSkge1xuICAgICAgICBkZWVwRnJlZXplVmFsdWUocHJvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LnNlYWwodmFsdWUpOyAvLyBUaGlzIGFsc28gbWFrZXMgZXhpc3RpbmcgcHJvcGVydGllcyBub24tY29uZmlndXJhYmxlLlxufVxuXG52YXIgUmVjb2lsX2RlZXBGcmVlemVWYWx1ZSA9IGRlZXBGcmVlemVWYWx1ZTtcblxuY29uc3QgVElNRV9XQVJOSU5HX1RIUkVTSE9MRF9NUyA9IDE1O1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkoeCwgb3B0LCBrZXkpIHtcbiAgLy8gQSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgdGhlIG1vcmUgZXhwZW5zaXZlIEpTT04uc3RyaW5naWZ5KCkgZm9yIHNpbXBsZSBzdHJpbmdzXG4gIC8vIFRoaXMgbWF5IGxvc2UgcHJvdGVjdGlvbiBmb3IgdTIwMjggYW5kIHUyMDI5LCB0aG91Z2guXG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycgJiYgIXguaW5jbHVkZXMoJ1wiJykgJiYgIXguaW5jbHVkZXMoJ1xcXFwnKSkge1xuICAgIHJldHVybiBgXCIke3h9XCJgO1xuICB9IC8vIEhhbmRsZSBwcmltaXRpdmUgdHlwZXNcblxuXG4gIHN3aXRjaCAodHlwZW9mIHgpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuICcnO1xuICAgIC8vIEpTT04uc3RyaW5naWZ5KHVuZGVmaW5lZCkgcmV0dXJucyB1bmRlZmluZWQsIGJ1dCB3ZSBhbHdheXMgd2FudCB0byByZXR1cm4gYSBzdHJpbmdcblxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHggPyAndHJ1ZScgOiAnZmFsc2UnO1xuXG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgLy8gY2FzZSAnYmlnaW50JzogLy8gQmlnSW50IGlzIG5vdCBzdXBwb3J0ZWQgaW4gd3d3XG4gICAgICByZXR1cm4gU3RyaW5nKHgpO1xuXG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIC8vIEFkZCBzdXJyb3VuZGluZyBxdW90ZXMgYW5kIGVzY2FwZSBpbnRlcm5hbCBxdW90ZXNcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh4KTtcblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGlmICgob3B0ID09PSBudWxsIHx8IG9wdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0LmFsbG93RnVuY3Rpb25zKSAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gc2VyaWFsaXplIGZ1bmN0aW9uIGluIGEgUmVjb2lsIGNhY2hlIGtleScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYF9fRlVOQ1RJT04oJHt4Lm5hbWV9KV9fYDtcbiAgfVxuXG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfSAvLyBGYWxsYmFjayBjYXNlIGZvciB1bmtub3duIHR5cGVzXG5cblxuICBpZiAodHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgdmFyIF9KU09OJHN0cmluZ2lmeTtcblxuICAgIHJldHVybiAoX0pTT04kc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkoeCkpICE9PSBudWxsICYmIF9KU09OJHN0cmluZ2lmeSAhPT0gdm9pZCAwID8gX0pTT04kc3RyaW5naWZ5IDogJyc7XG4gIH0gLy8gRGVhbCB3aXRoIGFsbCBwcm9taXNlcyBhcyBlcXVpdmFsZW50IGZvciBub3cuXG5cblxuICBpZiAoUmVjb2lsX2lzUHJvbWlzZSh4KSkge1xuICAgIHJldHVybiAnX19QUk9NSVNFX18nO1xuICB9IC8vIEFycmF5cyBoYW5kbGUgcmVjdXJzaXZlIHN0cmluZ2lmaWNhdGlvblxuXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4gYFske3gubWFwKCh2LCBpKSA9PiBzdHJpbmdpZnkodiwgb3B0LCBpLnRvU3RyaW5nKCkpKX1dYDtcbiAgfSAvLyBJZiBhbiBvYmplY3QgZGVmaW5lcyBhIHRvSlNPTigpIG1ldGhvZCwgdGhlbiB1c2UgdGhhdCB0byBvdmVycmlkZSB0aGVcbiAgLy8gc2VyaWFsaXphdGlvbi4gIFRoaXMgbWF0Y2hlcyB0aGUgYmVoYXZpb3Igb2YgSlNPTi5zdHJpbmdpZnkoKS5cbiAgLy8gUGFzcyB0aGUga2V5IGZvciBjb21wYXRpYmlsaXR5LlxuICAvLyBJbW11dGFibGUuanMgY29sbGVjdGlvbnMgZGVmaW5lIHRoaXMgbWV0aG9kIHRvIGFsbG93IHVzIHRvIHNlcmlhbGl6ZSB0aGVtLlxuXG5cbiAgaWYgKHR5cGVvZiB4LnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6IG9mZlxuICAgIHJldHVybiBzdHJpbmdpZnkoeC50b0pTT04oa2V5KSwgb3B0LCBrZXkpO1xuICB9IC8vIEZvciBidWlsdC1pbiBNYXBzLCBzb3J0IHRoZSBrZXlzIGluIGEgc3RhYmxlIG9yZGVyIGluc3RlYWQgb2YgdGhlXG4gIC8vIGRlZmF1bHQgaW5zZXJ0aW9uIG9yZGVyLiAgU3VwcG9ydCBub24tc3RyaW5nIGtleXMuXG5cblxuICBpZiAoeCBpbnN0YW5jZW9mIE1hcCkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgeCkge1xuICAgICAgLy8gU3RyaW5naWZ5IHdpbGwgZXNjYXBlIGFueSBuZXN0ZWQgcXVvdGVzXG4gICAgICBvYmpbdHlwZW9mIGsgPT09ICdzdHJpbmcnID8gayA6IHN0cmluZ2lmeShrLCBvcHQpXSA9IHY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ2lmeShvYmosIG9wdCwga2V5KTtcbiAgfSAvLyBGb3IgYnVpbHQtaW4gU2V0cywgc29ydCB0aGUga2V5cyBpbiBhIHN0YWJsZSBvcmRlciBpbnN0ZWFkIG9mIHRoZVxuICAvLyBkZWZhdWx0IGluc2VydGlvbiBvcmRlci5cblxuXG4gIGlmICh4IGluc3RhbmNlb2YgU2V0KSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeShBcnJheS5mcm9tKHgpLnNvcnQoKGEsIGIpID0+IHN0cmluZ2lmeShhLCBvcHQpLmxvY2FsZUNvbXBhcmUoc3RyaW5naWZ5KGIsIG9wdCkpKSwgb3B0LCBrZXkpO1xuICB9IC8vIEFueXRoaW5nIGVsc2UgdGhhdCBpcyBpdGVyYWJsZSBzZXJpYWxpemUgYXMgYW4gQXJyYXkuXG5cblxuICBpZiAoU3ltYm9sICE9PSB1bmRlZmluZWQgJiYgeFtTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgJiYgdHlwZW9mIHhbU3ltYm9sLml0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6IG9mZlxuICAgIHJldHVybiBzdHJpbmdpZnkoQXJyYXkuZnJvbSh4KSwgb3B0LCBrZXkpO1xuICB9IC8vIEZvciBhbGwgb3RoZXIgT2JqZWN0cywgc29ydCB0aGUga2V5cyBpbiBhIHN0YWJsZSBvcmRlci5cblxuXG4gIHJldHVybiBgeyR7T2JqZWN0LmtleXMoeCkuZmlsdGVyKGtleSA9PiB4W2tleV0gIT09IHVuZGVmaW5lZCkuc29ydCgpIC8vIHN0cmluZ2lmeSB0aGUga2V5IHRvIGFkZCBxdW90ZXMgYW5kIGVzY2FwZSBhbnkgbmVzdGVkIHNsYXNoZXMgb3IgcXVvdGVzLlxuICAubWFwKGtleSA9PiBgJHtzdHJpbmdpZnkoa2V5LCBvcHQpfToke3N0cmluZ2lmeSh4W2tleV0sIG9wdCwga2V5KX1gKS5qb2luKCcsJyl9fWA7XG59IC8vIFV0aWxpdHkgc2ltaWxhciB0byBKU09OLnN0cmluZ2lmeSgpIGV4Y2VwdDpcbi8vICogU2VyaWFsaXplIGJ1aWx0LWluIFNldHMgYXMgYW4gQXJyYXlcbi8vICogU2VyaWFsaXplIGJ1aWx0LWluIE1hcHMgYXMgYW4gT2JqZWN0LiAgU3VwcG9ydHMgbm9uLXN0cmluZyBrZXlzLlxuLy8gKiBTZXJpYWxpemUgb3RoZXIgaXRlcmFibGVzIGFzIGFycmF5c1xuLy8gKiBTb3J0IHRoZSBrZXlzIG9mIE9iamVjdHMgYW5kIE1hcHMgdG8gaGF2ZSBhIHN0YWJsZSBvcmRlciBiYXNlZCBvbiBzdHJpbmcgY29udmVyc2lvbi5cbi8vICAgIFRoaXMgb3ZlcnJpZGVzIHRoZWlyIGRlZmF1bHQgaW5zZXJ0aW9uIG9yZGVyLlxuLy8gKiBTdGlsbCB1c2VzIHRvSlNPTigpIG9mIGFueSBvYmplY3QgdG8gb3ZlcnJpZGUgc2VyaWFsaXphdGlvblxuLy8gKiBTdXBwb3J0IFN5bWJvbHMgKHRob3VnaCBkb24ndCBndWFyYW50ZWUgdW5pcXVlbmVzcylcbi8vICogV2UgY291bGQgc3VwcG9ydCBCaWdJbnQsIGJ1dCBGbG93IGRvZXNuJ3Qgc2VlbSB0byBsaWtlIGl0LlxuLy8gU2VlIFJlY29pbF9zdGFibGVTdHJpbmdpZnktdGVzdC5qcyBmb3IgZXhhbXBsZXNcblxuXG5mdW5jdGlvbiBzdGFibGVTdHJpbmdpZnkoeCwgb3B0ID0ge1xuICBhbGxvd0Z1bmN0aW9uczogZmFsc2Vcbn0pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3Qgc3RhcnRUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlID8gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIDogMDtcbiAgICAgIGNvbnN0IHN0ciA9IHN0cmluZ2lmeSh4LCBvcHQpO1xuICAgICAgY29uc3QgZW5kVGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZSA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSA6IDA7XG5cbiAgICAgIGlmIChlbmRUaW1lIC0gc3RhcnRUaW1lID4gVElNRV9XQVJOSU5HX1RIUkVTSE9MRF9NUykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBmYi13d3cvbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBSZWNvaWw6IFNwZW50ICR7ZW5kVGltZSAtIHN0YXJ0VGltZX1tcyBjb21wdXRpbmcgYSBjYWNoZSBrZXlgKTtcbiAgICAgICAgY29uc29sZS53YXJuKHgsIHN0cik7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBmYi13d3cvbm8tY29uc29sZSAqL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkoeCwgb3B0KTtcbn1cblxudmFyIFJlY29pbF9zdGFibGVTdHJpbmdpZnkgPSBzdGFibGVTdHJpbmdpZnk7XG5cbmNsYXNzIFRyZWVDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkb25IaXQsIF9vcHRpb25zJG9uU2V0LCBfb3B0aW9ucyRtYXBOb2RlVmFsdWU7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbnVtTGVhZnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9yb290XCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfb25IaXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vblNldFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21hcE5vZGVWYWx1ZVwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbnVtTGVhZnMgPSAwO1xuICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuICAgIHRoaXMuX29uSGl0ID0gKF9vcHRpb25zJG9uSGl0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9uSGl0KSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRvbkhpdCAhPT0gdm9pZCAwID8gX29wdGlvbnMkb25IaXQgOiAoKSA9PiB7fTtcbiAgICB0aGlzLl9vblNldCA9IChfb3B0aW9ucyRvblNldCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vblNldCkgIT09IG51bGwgJiYgX29wdGlvbnMkb25TZXQgIT09IHZvaWQgMCA/IF9vcHRpb25zJG9uU2V0IDogKCkgPT4ge307XG4gICAgdGhpcy5fbWFwTm9kZVZhbHVlID0gKF9vcHRpb25zJG1hcE5vZGVWYWx1ZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tYXBOb2RlVmFsdWUpICE9PSBudWxsICYmIF9vcHRpb25zJG1hcE5vZGVWYWx1ZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbWFwTm9kZVZhbHVlIDogdmFsID0+IHZhbDtcbiAgfVxuXG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bUxlYWZzO1xuICB9IC8vIFRPRE86IG5vZGVDb3VudCgpOiBudW1iZXJcblxuXG4gIHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gIH1cblxuICBnZXQoZ2V0Tm9kZVZhbHVlLCBoYW5kbGVycykge1xuICAgIHZhciBfdGhpcyRnZXRMZWFmTm9kZTtcblxuICAgIHJldHVybiAoX3RoaXMkZ2V0TGVhZk5vZGUgPSB0aGlzLmdldExlYWZOb2RlKGdldE5vZGVWYWx1ZSwgaGFuZGxlcnMpKSA9PT0gbnVsbCB8fCBfdGhpcyRnZXRMZWFmTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkZ2V0TGVhZk5vZGUudmFsdWU7XG4gIH1cblxuICBnZXRMZWFmTm9kZShnZXROb2RlVmFsdWUsIGhhbmRsZXJzKSB7XG4gICAgcmV0dXJuIGZpbmRMZWFmKHRoaXMucm9vdCgpLCBub2RlS2V5ID0+IHRoaXMuX21hcE5vZGVWYWx1ZShnZXROb2RlVmFsdWUobm9kZUtleSkpLCB7XG4gICAgICBvbk5vZGVWaXNpdDogbm9kZSA9PiB7XG4gICAgICAgIGhhbmRsZXJzID09PSBudWxsIHx8IGhhbmRsZXJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVycy5vbk5vZGVWaXNpdChub2RlKTtcblxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnbGVhZicpIHtcbiAgICAgICAgICB0aGlzLl9vbkhpdChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0KHJvdXRlLCB2YWx1ZSwgaGFuZGxlcnMpIHtcbiAgICBsZXQgbGVhZk5vZGU7XG4gICAgY29uc3QgbmV3Um9vdCA9IGFkZExlYWYodGhpcy5yb290KCksIHJvdXRlLm1hcCgoW25vZGVLZXksIG5vZGVWYWx1ZV0pID0+IFtub2RlS2V5LCB0aGlzLl9tYXBOb2RlVmFsdWUobm9kZVZhbHVlKV0pLCBudWxsLCB2YWx1ZSwgbnVsbCwge1xuICAgICAgb25Ob2RlVmlzaXQ6IG5vZGUgPT4ge1xuICAgICAgICBoYW5kbGVycyA9PT0gbnVsbCB8fCBoYW5kbGVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGFuZGxlcnMub25Ob2RlVmlzaXQobm9kZSk7XG5cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ2xlYWYnKSB7XG4gICAgICAgICAgbGVhZk5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMucm9vdCgpKSB7XG4gICAgICB0aGlzLl9yb290ID0gbmV3Um9vdDtcbiAgICB9XG5cbiAgICB0aGlzLl9udW1MZWFmcysrO1xuXG4gICAgdGhpcy5fb25TZXQoUmVjb2lsX251bGx0aHJvd3MobGVhZk5vZGUpKTtcbiAgfVxuXG4gIGRlbGV0ZShub2RlKSB7XG4gICAgaWYgKCF0aGlzLnJvb3QoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSBSZWNvaWxfbnVsbHRocm93cyh0aGlzLnJvb3QoKSk7XG4gICAgY29uc3QgZXhpc3RzSW5UcmVlID0gcHJ1bmVOb2RlRnJvbVRyZWUocm9vdCwgbm9kZSwgbm9kZS5wYXJlbnQpO1xuXG4gICAgaWYgKCFleGlzdHNJblRyZWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSA9PT0gcm9vdCB8fCByb290LnR5cGUgPT09ICdicmFuY2gnICYmICFyb290LmJyYW5jaGVzLnNpemUpIHtcbiAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuICAgICAgdGhpcy5fbnVtTGVhZnMgPSAwO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fbnVtTGVhZnMgLT0gY291bnREb3duc3RyZWFtTGVhdmVzKG5vZGUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fbnVtTGVhZnMgPSAwO1xuICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuICB9XG5cbn1cblxuY29uc3QgZmluZExlYWYgPSAocm9vdCwgZ2V0Tm9kZVZhbHVlLCBoYW5kbGVycykgPT4ge1xuICB2YXIgX2hhbmRsZXJzJG9uTm9kZVZpc2l0O1xuXG4gIGlmIChyb290ID09IG51bGwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFuZGxlcnMgPT09IG51bGwgfHwgaGFuZGxlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfaGFuZGxlcnMkb25Ob2RlVmlzaXQgPSBoYW5kbGVycy5vbk5vZGVWaXNpdCkgPT09IG51bGwgfHwgX2hhbmRsZXJzJG9uTm9kZVZpc2l0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaGFuZGxlcnMkb25Ob2RlVmlzaXQuY2FsbChoYW5kbGVycywgcm9vdCk7XG5cbiAgaWYgKHJvb3QudHlwZSA9PT0gJ2xlYWYnKSB7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cblxuICBjb25zdCBub2RlVmFsdWUgPSBnZXROb2RlVmFsdWUocm9vdC5ub2RlS2V5KTtcbiAgcmV0dXJuIGZpbmRMZWFmKHJvb3QuYnJhbmNoZXMuZ2V0KG5vZGVWYWx1ZSksIGdldE5vZGVWYWx1ZSwgaGFuZGxlcnMpO1xufTtcblxuY29uc3QgYWRkTGVhZiA9IChyb290LCByb3V0ZSwgcGFyZW50LCB2YWx1ZSwgYnJhbmNoS2V5LCBoYW5kbGVycykgPT4ge1xuICB2YXIgX2hhbmRsZXJzJG9uTm9kZVZpc2l0MjtcblxuICBsZXQgbm9kZTtcblxuICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgaWYgKHJvdXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbm9kZSA9IHtcbiAgICAgICAgdHlwZTogJ2xlYWYnLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBicmFuY2hLZXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFtwYXRoLCAuLi5yZXN0XSA9IHJvdXRlO1xuICAgICAgY29uc3QgW25vZGVLZXksIG5vZGVWYWx1ZV0gPSBwYXRoO1xuICAgICAgbm9kZSA9IHtcbiAgICAgICAgdHlwZTogJ2JyYW5jaCcsXG4gICAgICAgIG5vZGVLZXksXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgYnJhbmNoZXM6IG5ldyBNYXAoKSxcbiAgICAgICAgYnJhbmNoS2V5XG4gICAgICB9O1xuICAgICAgbm9kZS5icmFuY2hlcy5zZXQobm9kZVZhbHVlLCBhZGRMZWFmKG51bGwsIHJlc3QsIG5vZGUsIHZhbHVlLCBub2RlVmFsdWUsIGhhbmRsZXJzKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG5vZGUgPSByb290O1xuXG4gICAgaWYgKHJvdXRlLmxlbmd0aCkge1xuICAgICAgY29uc3QgW3BhdGgsIC4uLnJlc3RdID0gcm91dGU7XG4gICAgICBjb25zdCBbbm9kZUtleSwgbm9kZVZhbHVlXSA9IHBhdGg7XG4gICAgICAhKHJvb3QudHlwZSA9PT0gJ2JyYW5jaCcgJiYgcm9vdC5ub2RlS2V5ID09PSBub2RlS2V5KSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFJlY29pbF9pbnZhcmlhbnQoZmFsc2UsICdFeGlzdGluZyBjYWNoZSBtdXN0IGhhdmUgYSBicmFuY2ggbWlkd2F5IHRocm91Z2ggdGhlIHJvdXRlIHdpdGggbWF0Y2hpbmcgbm9kZSBrZXknKSA6IFJlY29pbF9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgcm9vdC5icmFuY2hlcy5zZXQobm9kZVZhbHVlLCBhZGRMZWFmKHJvb3QuYnJhbmNoZXMuZ2V0KG5vZGVWYWx1ZSksIHJlc3QsIHJvb3QsIHZhbHVlLCBub2RlVmFsdWUsIGhhbmRsZXJzKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlcnMgPT09IG51bGwgfHwgaGFuZGxlcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfaGFuZGxlcnMkb25Ob2RlVmlzaXQyID0gaGFuZGxlcnMub25Ob2RlVmlzaXQpID09PSBudWxsIHx8IF9oYW5kbGVycyRvbk5vZGVWaXNpdDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oYW5kbGVycyRvbk5vZGVWaXNpdDIuY2FsbChoYW5kbGVycywgbm9kZSk7XG4gIHJldHVybiBub2RlO1xufTtcblxuY29uc3QgcHJ1bmVOb2RlRnJvbVRyZWUgPSAocm9vdCwgbm9kZSwgcGFyZW50KSA9PiB7XG4gIGlmICghcGFyZW50KSB7XG4gICAgcmV0dXJuIHJvb3QgPT09IG5vZGU7XG4gIH1cblxuICBwYXJlbnQuYnJhbmNoZXMuZGVsZXRlKG5vZGUuYnJhbmNoS2V5KTtcbiAgcmV0dXJuIHBydW5lVXBzdHJlYW1CcmFuY2hlcyhyb290LCBwYXJlbnQsIHBhcmVudC5wYXJlbnQpO1xufTtcblxuY29uc3QgcHJ1bmVVcHN0cmVhbUJyYW5jaGVzID0gKHJvb3QsIGJyYW5jaE5vZGUsIHBhcmVudCkgPT4ge1xuICBpZiAoIXBhcmVudCkge1xuICAgIHJldHVybiByb290ID09PSBicmFuY2hOb2RlO1xuICB9XG5cbiAgaWYgKGJyYW5jaE5vZGUuYnJhbmNoZXMuc2l6ZSA9PT0gMCkge1xuICAgIHBhcmVudC5icmFuY2hlcy5kZWxldGUoYnJhbmNoTm9kZS5icmFuY2hLZXkpO1xuICB9XG5cbiAgcmV0dXJuIHBydW5lVXBzdHJlYW1CcmFuY2hlcyhyb290LCBwYXJlbnQsIHBhcmVudC5wYXJlbnQpO1xufTtcblxuY29uc3QgY291bnREb3duc3RyZWFtTGVhdmVzID0gbm9kZSA9PiBub2RlLnR5cGUgPT09ICdsZWFmJyA/IDEgOiBBcnJheS5mcm9tKG5vZGUuYnJhbmNoZXMudmFsdWVzKCkpLnJlZHVjZSgoc3VtLCBjdXJyTm9kZSkgPT4gc3VtICsgY291bnREb3duc3RyZWFtTGVhdmVzKGN1cnJOb2RlKSwgMCk7XG5cbnZhciBSZWNvaWxfVHJlZUNhY2hlID0ge1xuICBUcmVlQ2FjaGVcbn07XG5cbnZhciBSZWNvaWxfVHJlZUNhY2hlXzEgPSBSZWNvaWxfVHJlZUNhY2hlLlRyZWVDYWNoZTtcblxudmFyIFJlY29pbF9UcmVlQ2FjaGUkMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBUcmVlQ2FjaGU6IFJlY29pbF9UcmVlQ2FjaGVfMVxufSk7XG5cbmNsYXNzIExSVUNhY2hlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyRtYXBLZXk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbWF4U2l6ZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3NpemVcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9oZWFkXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfdGFpbFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21hcFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2tleU1hcHBlclwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWF4U2l6ZSA9IG9wdGlvbnMubWF4U2l6ZTtcbiAgICB0aGlzLl9zaXplID0gMDtcbiAgICB0aGlzLl9oZWFkID0gbnVsbDtcbiAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICB0aGlzLl9tYXAgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5fa2V5TWFwcGVyID0gKF9vcHRpb25zJG1hcEtleSA9IG9wdGlvbnMubWFwS2V5KSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRtYXBLZXkgIT09IHZvaWQgMCA/IF9vcHRpb25zJG1hcEtleSA6IHYgPT4gdjtcbiAgfVxuXG4gIGhlYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWQ7XG4gIH1cblxuICB0YWlsKCkge1xuICAgIHJldHVybiB0aGlzLl90YWlsO1xuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIG1heFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21heFNpemU7XG4gIH1cblxuICBoYXMoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5oYXModGhpcy5fa2V5TWFwcGVyKGtleSkpO1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIGNvbnN0IG1hcHBlZEtleSA9IHRoaXMuX2tleU1hcHBlcihrZXkpO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX21hcC5nZXQobWFwcGVkS2V5KTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLnNldChrZXksIG5vZGUudmFsdWUpO1xuICAgIHJldHVybiBub2RlLnZhbHVlO1xuICB9XG5cbiAgc2V0KGtleSwgdmFsKSB7XG4gICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5fa2V5TWFwcGVyKGtleSk7XG5cbiAgICBjb25zdCBleGlzdGluZ05vZGUgPSB0aGlzLl9tYXAuZ2V0KG1hcHBlZEtleSk7XG5cbiAgICBpZiAoZXhpc3RpbmdOb2RlKSB7XG4gICAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWQgPSB0aGlzLmhlYWQoKTtcbiAgICBjb25zdCBub2RlID0ge1xuICAgICAga2V5LFxuICAgICAgcmlnaHQ6IGhlYWQsXG4gICAgICBsZWZ0OiBudWxsLFxuICAgICAgdmFsdWU6IHZhbFxuICAgIH07XG5cbiAgICBpZiAoaGVhZCkge1xuICAgICAgaGVhZC5sZWZ0ID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGFpbCA9IG5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLnNldChtYXBwZWRLZXksIG5vZGUpO1xuXG4gICAgdGhpcy5faGVhZCA9IG5vZGU7XG4gICAgdGhpcy5fc2l6ZSsrO1xuXG4gICAgdGhpcy5fbWF5YmVEZWxldGVMUlUoKTtcbiAgfVxuXG4gIF9tYXliZURlbGV0ZUxSVSgpIHtcbiAgICBpZiAodGhpcy5zaXplKCkgPiB0aGlzLm1heFNpemUoKSkge1xuICAgICAgdGhpcy5kZWxldGVMcnUoKTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVMcnUoKSB7XG4gICAgY29uc3QgdGFpbCA9IHRoaXMudGFpbCgpO1xuXG4gICAgaWYgKHRhaWwpIHtcbiAgICAgIHRoaXMuZGVsZXRlKHRhaWwua2V5KTtcbiAgICB9XG4gIH1cblxuICBkZWxldGUoa2V5KSB7XG4gICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5fa2V5TWFwcGVyKGtleSk7XG5cbiAgICBpZiAoIXRoaXMuX3NpemUgfHwgIXRoaXMuX21hcC5oYXMobWFwcGVkS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBSZWNvaWxfbnVsbHRocm93cyh0aGlzLl9tYXAuZ2V0KG1hcHBlZEtleSkpO1xuICAgIGNvbnN0IHJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICBjb25zdCBsZWZ0ID0gbm9kZS5sZWZ0O1xuXG4gICAgaWYgKHJpZ2h0KSB7XG4gICAgICByaWdodC5sZWZ0ID0gbm9kZS5sZWZ0O1xuICAgIH1cblxuICAgIGlmIChsZWZ0KSB7XG4gICAgICBsZWZ0LnJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICB9XG5cbiAgICBpZiAobm9kZSA9PT0gdGhpcy5oZWFkKCkpIHtcbiAgICAgIHRoaXMuX2hlYWQgPSByaWdodDtcbiAgICB9XG5cbiAgICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKCkpIHtcbiAgICAgIHRoaXMuX3RhaWwgPSBsZWZ0O1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5kZWxldGUobWFwcGVkS2V5KTtcblxuICAgIHRoaXMuX3NpemUtLTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX3NpemUgPSAwO1xuICAgIHRoaXMuX2hlYWQgPSBudWxsO1xuICAgIHRoaXMuX3RhaWwgPSBudWxsO1xuICAgIHRoaXMuX21hcCA9IG5ldyBNYXAoKTtcbiAgfVxuXG59XG5cbnZhciBSZWNvaWxfTFJVQ2FjaGUgPSB7XG4gIExSVUNhY2hlXG59O1xuXG52YXIgUmVjb2lsX0xSVUNhY2hlXzEgPSBSZWNvaWxfTFJVQ2FjaGUuTFJVQ2FjaGU7XG5cbnZhciBSZWNvaWxfTFJVQ2FjaGUkMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBMUlVDYWNoZTogUmVjb2lsX0xSVUNhY2hlXzFcbn0pO1xuXG5jb25zdCB7XG4gIExSVUNhY2hlOiBMUlVDYWNoZSQxXG59ID0gUmVjb2lsX0xSVUNhY2hlJDE7XG5cbmNvbnN0IHtcbiAgVHJlZUNhY2hlOiBUcmVlQ2FjaGUkMVxufSA9IFJlY29pbF9UcmVlQ2FjaGUkMTtcblxuZnVuY3Rpb24gdHJlZUNhY2hlTFJVKG1heFNpemUsIG1hcE5vZGVWYWx1ZSA9IHYgPT4gdikge1xuICBjb25zdCBscnVDYWNoZSA9IG5ldyBMUlVDYWNoZSQxKHtcbiAgICBtYXhTaXplXG4gIH0pO1xuICBjb25zdCBjYWNoZSA9IG5ldyBUcmVlQ2FjaGUkMSh7XG4gICAgbWFwTm9kZVZhbHVlLFxuICAgIG9uSGl0OiBub2RlID0+IHtcbiAgICAgIGxydUNhY2hlLnNldChub2RlLCB0cnVlKTtcbiAgICB9LFxuICAgIG9uU2V0OiBub2RlID0+IHtcbiAgICAgIGNvbnN0IGxydU5vZGUgPSBscnVDYWNoZS50YWlsKCk7XG4gICAgICBscnVDYWNoZS5zZXQobm9kZSwgdHJ1ZSk7XG5cbiAgICAgIGlmIChscnVOb2RlICYmIGNhY2hlLnNpemUoKSA+IG1heFNpemUpIHtcbiAgICAgICAgY2FjaGUuZGVsZXRlKGxydU5vZGUua2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2FjaGU7XG59XG5cbnZhciBSZWNvaWxfdHJlZUNhY2hlTFJVID0gdHJlZUNhY2hlTFJVO1xuXG5jb25zdCB7XG4gIFRyZWVDYWNoZTogVHJlZUNhY2hlJDJcbn0gPSBSZWNvaWxfVHJlZUNhY2hlJDE7XG5cblxuXG5jb25zdCBkZWZhdWx0UG9saWN5ID0ge1xuICBlcXVhbGl0eTogJ3JlZmVyZW5jZScsXG4gIGV2aWN0aW9uOiAnbm9uZScsXG4gIG1heFNpemU6IEluZmluaXR5XG59O1xuXG5mdW5jdGlvbiB0cmVlQ2FjaGVGcm9tUG9saWN5KHtcbiAgZXF1YWxpdHkgPSBkZWZhdWx0UG9saWN5LmVxdWFsaXR5LFxuICBldmljdGlvbiA9IGRlZmF1bHRQb2xpY3kuZXZpY3Rpb24sXG4gIG1heFNpemUgPSBkZWZhdWx0UG9saWN5Lm1heFNpemVcbn0gPSBkZWZhdWx0UG9saWN5KSB7XG4gIGNvbnN0IHZhbHVlTWFwcGVyID0gZ2V0VmFsdWVNYXBwZXIoZXF1YWxpdHkpO1xuICBjb25zdCB0cmVlQ2FjaGUgPSBnZXRUcmVlQ2FjaGUoZXZpY3Rpb24sIG1heFNpemUsIHZhbHVlTWFwcGVyKTtcbiAgcmV0dXJuIHRyZWVDYWNoZTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVNYXBwZXIoZXF1YWxpdHkpIHtcbiAgc3dpdGNoIChlcXVhbGl0eSkge1xuICAgIGNhc2UgJ3JlZmVyZW5jZSc6XG4gICAgICByZXR1cm4gdmFsID0+IHZhbDtcblxuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgIHJldHVybiB2YWwgPT4gUmVjb2lsX3N0YWJsZVN0cmluZ2lmeSh2YWwpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZXF1YWxpdHkgcG9saWN5ICR7ZXF1YWxpdHl9YCk7XG59XG5cbmZ1bmN0aW9uIGdldFRyZWVDYWNoZShldmljdGlvbiwgbWF4U2l6ZSwgbWFwTm9kZVZhbHVlKSB7XG4gIHN3aXRjaCAoZXZpY3Rpb24pIHtcbiAgICBjYXNlICdub25lJzpcbiAgICAgIHJldHVybiBuZXcgVHJlZUNhY2hlJDIoe1xuICAgICAgICBtYXBOb2RlVmFsdWVcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnbHJ1JzpcbiAgICAgIHJldHVybiBSZWNvaWxfdHJlZUNhY2hlTFJVKFJlY29pbF9udWxsdGhyb3dzKG1heFNpemUpLCBtYXBOb2RlVmFsdWUpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZXZpY3Rpb24gcG9saWN5ICR7ZXZpY3Rpb259YCk7XG59XG5cbnZhciBSZWNvaWxfdHJlZUNhY2hlRnJvbVBvbGljeSA9IHRyZWVDYWNoZUZyb21Qb2xpY3k7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqXG4gKiBUaGlzIGlzIGEgc3R1YiBmb3Igc29tZSBpbnRlZ3JhdGlvbiBpbnRvIEZCIGludGVybmFsIHN0dWZmXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0UGVyZkJsb2NrKF9pZCkge1xuICByZXR1cm4gKCkgPT4gbnVsbDtcbn1cblxudmFyIFJlY29pbF9QZXJmb3JtYW5jZVRpbWluZ3MgPSB7XG4gIHN0YXJ0UGVyZkJsb2NrXG59O1xuXG5jb25zdCB7XG4gIENBTkNFTEVEOiBDQU5DRUxFRCQxLFxuICBDYW5jZWxlZDogQ2FuY2VsZWQkMSxcbiAgbG9hZGFibGVXaXRoRXJyb3I6IGxvYWRhYmxlV2l0aEVycm9yJDEsXG4gIGxvYWRhYmxlV2l0aFByb21pc2U6IGxvYWRhYmxlV2l0aFByb21pc2UkMSxcbiAgbG9hZGFibGVXaXRoVmFsdWU6IGxvYWRhYmxlV2l0aFZhbHVlJDFcbn0gPSBSZWNvaWxfTG9hZGFibGU7XG5cblxuXG5jb25zdCB7XG4gIGdldE5vZGVMb2FkYWJsZTogZ2V0Tm9kZUxvYWRhYmxlJDIsXG4gIHBlZWtOb2RlTG9hZGFibGU6IHBlZWtOb2RlTG9hZGFibGUkMSxcbiAgc2V0Tm9kZVZhbHVlOiBzZXROb2RlVmFsdWUkM1xufSA9IFJlY29pbF9GdW5jdGlvbmFsQ29yZTtcblxuY29uc3Qge1xuICBzYXZlRGVwZW5kZW5jeU1hcFRvU3RvcmU6IHNhdmVEZXBlbmRlbmN5TWFwVG9TdG9yZSQxXG59ID0gUmVjb2lsX0dyYXBoO1xuXG5jb25zdCB7XG4gIERFRkFVTFRfVkFMVUU6IERFRkFVTFRfVkFMVUUkMyxcbiAgUmVjb2lsVmFsdWVOb3RSZWFkeTogUmVjb2lsVmFsdWVOb3RSZWFkeSQyLFxuICBnZXRDb25maWdEZWxldGlvbkhhbmRsZXI6IGdldENvbmZpZ0RlbGV0aW9uSGFuZGxlciQxLFxuICByZWdpc3Rlck5vZGU6IHJlZ2lzdGVyTm9kZSQxXG59ID0gUmVjb2lsX05vZGU7XG5cbmNvbnN0IHtcbiAgaXNSZWNvaWxWYWx1ZTogaXNSZWNvaWxWYWx1ZSQzXG59ID0gUmVjb2lsX1JlY29pbFZhbHVlJDE7XG5cbmNvbnN0IHtcbiAgQWJzdHJhY3RSZWNvaWxWYWx1ZTogQWJzdHJhY3RSZWNvaWxWYWx1ZSQ0XG59ID0gUmVjb2lsX1JlY29pbFZhbHVlJDE7XG5cbmNvbnN0IHtcbiAgc2V0UmVjb2lsVmFsdWVMb2FkYWJsZTogc2V0UmVjb2lsVmFsdWVMb2FkYWJsZSQyXG59ID0gUmVjb2lsX1JlY29pbFZhbHVlSW50ZXJmYWNlO1xuXG5jb25zdCB7XG4gIHJldGFpbmVkQnlPcHRpb25XaXRoRGVmYXVsdDogcmV0YWluZWRCeU9wdGlvbldpdGhEZWZhdWx0JDFcbn0gPSBSZWNvaWxfUmV0ZW50aW9uO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IHtcbiAgc3RhcnRQZXJmQmxvY2s6IHN0YXJ0UGVyZkJsb2NrJDFcbn0gPSBSZWNvaWxfUGVyZm9ybWFuY2VUaW1pbmdzO1xuXG5cblxuY29uc3QgZGVwZW5kZW5jeVN0YWNrID0gW107IC8vIGZvciBkZXRlY3RpbmcgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuXG5jb25zdCB3YWl0aW5nU3RvcmVzID0gbmV3IE1hcCgpO1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVkZWNsYXJlICovXG5cbmNvbnN0IGdldE5ld0V4ZWN1dGlvbklkID0gKCgpID0+IHtcbiAgbGV0IGV4ZWN1dGlvbklkID0gMDtcbiAgcmV0dXJuICgpID0+IGV4ZWN1dGlvbklkKys7XG59KSgpO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsRXhlY3V0aW9uSW5mbygpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXBWYWx1ZXNEaXNjb3ZlcmVkU29GYXJEdXJpbmdBc3luY1dvcms6IG51bGwsXG4gICAgbGF0ZXN0TG9hZGFibGU6IG51bGwsXG4gICAgbGF0ZXN0RXhlY3V0aW9uSWQ6IG51bGwsXG4gICAgc3RhdGVWZXJzaW9uOiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yKG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGtleSxcbiAgICBnZXQsXG4gICAgY2FjaGVQb2xpY3lfVU5TVEFCTEU6IGNhY2hlUG9saWN5XG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBzZXQgPSBvcHRpb25zLnNldCAhPSBudWxsID8gb3B0aW9ucy5zZXQgOiB1bmRlZmluZWQ7IC8vIGZsb3dcblxuICBjb25zdCBjYWNoZSA9IFJlY29pbF90cmVlQ2FjaGVGcm9tUG9saWN5KGNhY2hlUG9saWN5ICE9PSBudWxsICYmIGNhY2hlUG9saWN5ICE9PSB2b2lkIDAgPyBjYWNoZVBvbGljeSA6IHtcbiAgICBlcXVhbGl0eTogJ3JlZmVyZW5jZScsXG4gICAgZXZpY3Rpb246ICdub25lJ1xuICB9KTtcbiAgY29uc3QgcmV0YWluZWRCeSA9IHJldGFpbmVkQnlPcHRpb25XaXRoRGVmYXVsdCQxKG9wdGlvbnMucmV0YWluZWRCeV9VTlNUQUJMRSk7XG4gIGNvbnN0IGV4ZWN1dGlvbkluZm9NYXAgPSBuZXcgTWFwKCk7XG4gIGxldCBsaXZlU3RvcmVzQ291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIHNlbGVjdG9ySXNMaXZlKCkge1xuICAgIHJldHVybiAhUmVjb2lsX2dreF8xKCdyZWNvaWxfbWVtb3J5X21hbmFnYW1lbnRfMjAyMCcpIHx8IGxpdmVTdG9yZXNDb3VudCA+IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFeGVjdXRpb25JbmZvKHN0b3JlKSB7XG4gICAgaWYgKCFleGVjdXRpb25JbmZvTWFwLmhhcyhzdG9yZSkpIHtcbiAgICAgIGV4ZWN1dGlvbkluZm9NYXAuc2V0KHN0b3JlLCBnZXRJbml0aWFsRXhlY3V0aW9uSW5mbygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVjb2lsX251bGx0aHJvd3MoZXhlY3V0aW9uSW5mb01hcC5nZXQoc3RvcmUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdG9ySW5pdChzdG9yZSkge1xuICAgIGxpdmVTdG9yZXNDb3VudCsrO1xuICAgIHN0b3JlLmdldFN0YXRlKCkua25vd25TZWxlY3RvcnMuYWRkKGtleSk7IC8vIEZJWE1FIHJlbW92ZSBrbm93blNlbGVjdG9ycz9cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsaXZlU3RvcmVzQ291bnQtLTtcbiAgICAgIHN0b3JlLmdldFN0YXRlKCkua25vd25TZWxlY3RvcnMuZGVsZXRlKGtleSk7XG4gICAgICBleGVjdXRpb25JbmZvTWFwLmRlbGV0ZShzdG9yZSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdG9yU2hvdWxkRGVsZXRlQ29uZmlnT25SZWxlYXNlKCkge1xuICAgIHJldHVybiBnZXRDb25maWdEZWxldGlvbkhhbmRsZXIkMShrZXkpICE9PSB1bmRlZmluZWQgJiYgIXNlbGVjdG9ySXNMaXZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlTdG9yZVdoZW5Bc3luY1NldHRsZXMoc3RvcmUsIGxvYWRhYmxlLCBleGVjdXRpb25JZCkge1xuICAgIGlmIChsb2FkYWJsZS5zdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICBsZXQgc3RvcmVzID0gd2FpdGluZ1N0b3Jlcy5nZXQoZXhlY3V0aW9uSWQpO1xuXG4gICAgICBpZiAoc3RvcmVzID09IG51bGwpIHtcbiAgICAgICAgd2FpdGluZ1N0b3Jlcy5zZXQoZXhlY3V0aW9uSWQsIHN0b3JlcyA9IG5ldyBTZXQoKSk7XG4gICAgICB9XG5cbiAgICAgIHN0b3Jlcy5hZGQoc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVN0b3Jlc09mU2V0dGxlZEFzeW5jKG5ld0xvYWRhYmxlLCBleGVjdXRpb25JZCkge1xuICAgIGNvbnN0IHN0b3JlcyA9IHdhaXRpbmdTdG9yZXMuZ2V0KGV4ZWN1dGlvbklkKTtcblxuICAgIGlmIChzdG9yZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChjb25zdCBzdG9yZSBvZiBzdG9yZXMpIHtcbiAgICAgICAgc2V0UmVjb2lsVmFsdWVMb2FkYWJsZSQyKHN0b3JlLCBuZXcgQWJzdHJhY3RSZWNvaWxWYWx1ZSQ0KGtleSksIG5ld0xvYWRhYmxlKTtcbiAgICAgIH1cblxuICAgICAgd2FpdGluZ1N0b3Jlcy5kZWxldGUoZXhlY3V0aW9uSWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENhY2hlZE5vZGVMb2FkYWJsZShzdG9yZSwgc3RhdGUsIGtleSkge1xuICAgIGlmIChzdGF0ZS5hdG9tVmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gUmVjb2lsX251bGx0aHJvd3Moc3RhdGUuYXRvbVZhbHVlcy5nZXQoa2V5KSk7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGFibGUgPSBnZXROb2RlTG9hZGFibGUkMihzdG9yZSwgc3RhdGUsIGtleSk7XG4gICAgY29uc3QgaXNLZXlQb2ludGluZ1RvU2VsZWN0b3IgPSBzdG9yZS5nZXRTdGF0ZSgpLmtub3duU2VsZWN0b3JzLmhhcyhrZXkpO1xuXG4gICAgaWYgKGxvYWRhYmxlLnN0YXRlICE9PSAnbG9hZGluZycgJiYgaXNLZXlQb2ludGluZ1RvU2VsZWN0b3IpIHtcbiAgICAgIHN0YXRlLmF0b21WYWx1ZXMuc2V0KGtleSwgbG9hZGFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2FkYWJsZTtcbiAgfVxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBhdHRhY2hlcyBhIHRoZW4oKSBhbmQgYSBjYXRjaCgpIHRvIGEgcHJvbWlzZSB0aGF0IHdhc1xuICAgKiByZXR1cm5lZCBmcm9tIGEgc2VsZWN0b3IncyBnZXQoKSAoZWl0aGVyIGV4cGxpY2l0bHkgb3IgaW1wbGljaXRseSBieVxuICAgKiBydW5uaW5nIGEgZnVuY3Rpb24gdGhhdCB1c2VzIHRoZSBcImFzeW5jXCIga2V5d29yZCkuIElmIGEgc2VsZWN0b3IncyBnZXQoKVxuICAgKiByZXR1cm5zIGEgcHJvbWlzZSwgd2UgaGF2ZSB0d28gcG9zc2liaWxpdGllczpcbiAgICpcbiAgICogMS4gVGhlIHByb21pc2Ugd2lsbCByZXNvbHZlLCBpbiB3aGljaCBjYXNlIGl0IHdpbGwgaGF2ZSBjb21wbGV0ZWx5IGZpbmlzaGVkXG4gICAqICAgIGV4ZWN1dGluZyB3aXRob3V0IGFueSByZW1haW5pbmcgcGVuZGluZyBkZXBlbmRlbmNpZXMuIE5vIG1vcmUgcmV0cmllc1xuICAgKiAgICBhcmUgbmVlZGVkIGFuZCB3ZSBjYW4gcHJvY2VlZCB3aXRoIHVwZGF0aW5nIHRoZSBjYWNoZSBhbmQgbm90aWZ5aW5nXG4gICAqICAgIHN1YnNjcmliZXJzIChpZiBpdCBpcyB0aGUgbGF0ZXN0IGV4ZWN1dGlvbiwgb3RoZXJ3aXNlIG9ubHkgdGhlIGNhY2hlXG4gICAqICAgIHdpbGwgYmUgdXBkYXRlZCBhbmQgc3Vic2NyaXB0aW9ucyB3aWxsIG5vdCBiZSBmaXJlZCkuIFRoaXMgaXMgdGhlIGNhc2VcbiAgICogICAgaGFuZGxlZCBieSB0aGUgYXR0YWNoZWQgdGhlbigpIGhhbmRsZXIuXG4gICAqXG4gICAqIDIuIFRoZSBwcm9taXNlIHdpbGwgdGhyb3cgYmVjYXVzZSBpdCBlaXRoZXIgaGFzIGFuIGVycm9yIG9yIGl0IGNhbWUgYWNyb3NzXG4gICAqICAgIGFuIGFzeW5jIGRlcGVuZGVuY3kgdGhhdCBoYXMgbm90IHlldCByZXNvbHZlZCwgaW4gd2hpY2ggY2FzZSB3ZSB3aWxsXG4gICAqICAgIGNhbGwgd3JhcERlcGRlbmN5UHJvbWlzZSgpLCB3aG9zZSByZXNwb25zaWJpbGl0eSBpcyB0byBoYW5kbGUgZGVwZW5kZW5jeVxuICAgKiAgICBwcm9taXNlcy4gVGhpcyBjYXNlIGlzIGhhbmRsZWQgYnkgdGhlIGF0dGFjaGVkIGNhdGNoKCkgaGFuZGxlci5cbiAgICpcbiAgICogQm90aCBicmFuY2hlcyB3aWxsIGV2ZW50dWFsbHkgcmVzb2x2ZSB0byB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZSBzZWxlY3RvclxuICAgKiAob3IgYW4gZXJyb3IgaWYgYSByZWFsIGVycm9yIG9jY3VycmVkKS5cbiAgICpcbiAgICogVGhlIGV4ZWN1dGlvbiB3aWxsIHJ1biB0byBjb21wbGV0aW9uIGV2ZW4gaWYgaXQgaXMgc3RhbGUsIGFuZCBpdHMgdmFsdWVcbiAgICogd2lsbCBiZSBjYWNoZWQuIEJ1dCBzdGFsZSBleGVjdXRpb25zIHdpbGwgbm90IHVwZGF0ZSBnbG9iYWwgc3RhdGUgb3IgdXBkYXRlXG4gICAqIGV4ZWN1dGlvbkluZm8gYXMgdGhhdCBpcyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlICdsYXRlc3QnIGV4ZWN1dGlvbi5cbiAgICpcbiAgICogTm90ZSB0aGlzIGZ1bmN0aW9uIHNob3VsZCBub3QgYmUgcGFzc2VkIGEgcHJvbWlzZSB0aGF0IHdhcyB0aHJvd24tLUFLQSBhXG4gICAqIGRlcGVuZGVuY3kgcHJvbWlzZS4gRGVwZW5kZW5jeSBwcm9taXNlcyBzaG91bGQgYmUgcGFzc2VkIHRvXG4gICAqIHdyYXBQZW5kaW5nRGVwZW5kZW5jeVByb21pc2UoKSkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gd3JhcFBlbmRpbmdQcm9taXNlKHN0b3JlLCBwcm9taXNlLCBzdGF0ZSwgZGVwVmFsdWVzLCBleGVjdXRpb25JZCkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4odmFsdWUgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RvcklzTGl2ZSgpKSB7XG4gICAgICAgIC8vIFRoZSBzZWxlY3RvciB3YXMgcmVsZWFzZWQgc2luY2UgdGhlIHJlcXVlc3QgYmVnYW47IGlnbm9yZSB0aGUgcmVzcG9uc2UuXG4gICAgICAgIGNsZWFyRXhlY3V0aW9uSW5mbyhzdG9yZSwgZXhlY3V0aW9uSWQpO1xuICAgICAgICByZXR1cm4gQ0FOQ0VMRUQkMTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9hZGFibGUgPSBsb2FkYWJsZVdpdGhWYWx1ZSQxKHZhbHVlKTtcbiAgICAgIG1heWJlRnJlZXplVmFsdWUodmFsdWUpO1xuICAgICAgc2V0Q2FjaGUoc3RhdGUsIGRlcFZhbHVlc1RvRGVwUm91dGUoZGVwVmFsdWVzKSwgbG9hZGFibGUpO1xuICAgICAgc2V0RGVwc0luU3RvcmUoc3RvcmUsIHN0YXRlLCBuZXcgU2V0KGRlcFZhbHVlcy5rZXlzKCkpLCBleGVjdXRpb25JZCk7XG4gICAgICBzZXRMb2FkYWJsZUluU3RvcmVUb05vdGlmeURlcHMoc3RvcmUsIGxvYWRhYmxlLCBleGVjdXRpb25JZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfX3ZhbHVlOiB2YWx1ZSxcbiAgICAgICAgX19rZXk6IGtleVxuICAgICAgfTtcbiAgICB9KS5jYXRjaChlcnJvck9yUHJvbWlzZSA9PiB7XG4gICAgICBpZiAoIXNlbGVjdG9ySXNMaXZlKCkpIHtcbiAgICAgICAgLy8gVGhlIHNlbGVjdG9yIHdhcyByZWxlYXNlZCBzaW5jZSB0aGUgcmVxdWVzdCBiZWdhbjsgaWdub3JlIHRoZSByZXNwb25zZS5cbiAgICAgICAgY2xlYXJFeGVjdXRpb25JbmZvKHN0b3JlLCBleGVjdXRpb25JZCk7XG4gICAgICAgIHJldHVybiBDQU5DRUxFRCQxO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNMYXRlc3RFeGVjdXRpb24oc3RvcmUsIGV4ZWN1dGlvbklkKSkge1xuICAgICAgICB1cGRhdGVFeGVjdXRpb25JbmZvRGVwVmFsdWVzKGRlcFZhbHVlcywgc3RvcmUsIGV4ZWN1dGlvbklkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFJlY29pbF9pc1Byb21pc2UoZXJyb3JPclByb21pc2UpKSB7XG4gICAgICAgIHJldHVybiB3cmFwUGVuZGluZ0RlcGVuZGVuY3lQcm9taXNlKHN0b3JlLCBlcnJvck9yUHJvbWlzZSwgc3RhdGUsIGRlcFZhbHVlcywgZXhlY3V0aW9uSWQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsb2FkYWJsZSA9IGxvYWRhYmxlV2l0aEVycm9yJDEoZXJyb3JPclByb21pc2UpO1xuICAgICAgbWF5YmVGcmVlemVWYWx1ZShlcnJvck9yUHJvbWlzZSk7XG4gICAgICBzZXRDYWNoZShzdGF0ZSwgZGVwVmFsdWVzVG9EZXBSb3V0ZShkZXBWYWx1ZXMpLCBsb2FkYWJsZSk7XG4gICAgICBzZXREZXBzSW5TdG9yZShzdG9yZSwgc3RhdGUsIG5ldyBTZXQoZGVwVmFsdWVzLmtleXMoKSksIGV4ZWN1dGlvbklkKTtcbiAgICAgIHNldExvYWRhYmxlSW5TdG9yZVRvTm90aWZ5RGVwcyhzdG9yZSwgbG9hZGFibGUsIGV4ZWN1dGlvbklkKTtcbiAgICAgIHRocm93IGVycm9yT3JQcm9taXNlO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGF0dGFjaGVzIGEgdGhlbigpIGFuZCBhIGNhdGNoKCkgdG8gYSBwcm9taXNlIHRoYXQgd2FzXG4gICAqIHRocm93biBmcm9tIGEgc2VsZWN0b3IncyBnZXQoKS4gSWYgYSBzZWxlY3RvcidzIGdldCgpIHRocm93cyBhIHByb21pc2UsXG4gICAqIHdlIGhhdmUgdHdvIHBvc3NpYmlsaXRpZXM6XG4gICAqXG4gICAqIDEuIFRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSwgbWVhbmluZyBvbmUgb2Ygb3VyIHNlbGVjdG9yJ3MgZGVwZW5kZW5jaWVzIGlzXG4gICAqICAgIG5vdyBhdmFpbGFibGUgYW5kIHdlIHNob3VsZCBcInJldHJ5XCIgb3VyIGdldCgpIGJ5IHJ1bm5pbmcgaXQgYWdhaW4uIFRoaXNcbiAgICogICAgaXMgdGhlIGNhc2UgaGFuZGxlZCBieSB0aGUgYXR0YWNoZWQgdGhlbigpIGhhbmRsZXIuXG4gICAqXG4gICAqIDIuIFRoZSBwcm9taXNlIHdpbGwgdGhyb3cgYmVjYXVzZSBzb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBkZXBlbmRlbmN5XG4gICAqICAgIHByb21pc2UgKGluIG90aGVyIHdvcmRzIGEgcmVhbCBlcnJvciBvY2N1cnJlZCkuIFRoaXMgY2FzZSBpcyBoYW5kbGVkIGJ5XG4gICAqICAgIHRoZSBhdHRhY2hlZCBjYXRjaCgpIGhhbmRsZXIuIElmIHRoZSBkZXBlbmRlbmN5IHByb21pc2UgdGhyb3dzLCBpdCBpc1xuICAgKiAgICBfYWx3YXlzXyBhIHJlYWwgZXJyb3IgYW5kIG5vdCBhbm90aGVyIGRlcGVuZGVuY3kgcHJvbWlzZSAoYW55IGRlcGVuZGVuY3lcbiAgICogICAgcHJvbWlzZXMgd291bGQgaGF2ZSBiZWVuIGhhbmRsZWQgdXBzdHJlYW0pLlxuICAgKlxuICAgKiBUaGUgdGhlbigpIGJyYW5jaCB3aWxsIGV2ZW50dWFsbHkgcmVzb2x2ZSB0byB0aGUgZmluYWwgcmVzdWx0IG9mIHRoZVxuICAgKiBzZWxlY3RvciAob3IgYW4gZXJyb3IgaWYgYSByZWFsIGVycm9yIG9jY3VycyksIGFuZCB0aGUgY2F0Y2goKSB3aWxsIGFsd2F5c1xuICAgKiByZXNvbHZlIHRvIGFuIGVycm9yIGJlY2F1c2UgdGhlIGRlcGVuZGVuY3kgcHJvbWlzZSBpcyBhIHByb21pc2UgdGhhdCB3YXNcbiAgICogd3JhcHBlZCB1cHN0cmVhbSwgbWVhbmluZyBpdCB3aWxsIG9ubHkgcmVzb2x2ZSB0byBpdHMgcmVhbCB2YWx1ZSBvciB0byBhXG4gICAqIHJlYWwgZXJyb3IuXG4gICAqXG4gICAqIFRoZSBleGVjdXRpb24gd2lsbCBydW4gdG8gY29tcGxldGlvbiBldmVuIGlmIGl0IGlzIHN0YWxlLCBhbmQgaXRzIHZhbHVlXG4gICAqIHdpbGwgYmUgY2FjaGVkLiBCdXQgc3RhbGUgZXhlY3V0aW9ucyB3aWxsIG5vdCB1cGRhdGUgZ2xvYmFsIHN0YXRlIG9yIHVwZGF0ZVxuICAgKiBleGVjdXRpb25JbmZvIGFzIHRoYXQgaXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSAnbGF0ZXN0JyBleGVjdXRpb24uXG4gICAqXG4gICAqIE5vdGUgdGhpcyBmdW5jdGlvbiBzaG91bGQgbm90IGJlIHBhc3NlZCBhIHByb21pc2UgdGhhdCB3YXMgcmV0dXJuZWQgZnJvbVxuICAgKiBnZXQoKS4gVGhlIGludGVudGlvbiBpcyB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgb25seSBwYXNzZWQgcHJvbWlzZXMgdGhhdFxuICAgKiB3ZXJlIHRocm93biBkdWUgdG8gYSBwZW5kaW5nIGRlcGVuZGVuY3kuIFByb21pc2VzIHJldHVybmVkIGJ5IGdldCgpIHNob3VsZFxuICAgKiBiZSBwYXNzZWQgdG8gd3JhcFBlbmRpbmdQcm9taXNlKCkgaW5zdGVhZC5cbiAgICovXG5cblxuICBmdW5jdGlvbiB3cmFwUGVuZGluZ0RlcGVuZGVuY3lQcm9taXNlKHN0b3JlLCBwcm9taXNlLCBzdGF0ZSwgZXhpc3RpbmdEZXBzLCBleGVjdXRpb25JZCkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzb2x2ZWREZXAgPT4ge1xuICAgICAgaWYgKCFzZWxlY3RvcklzTGl2ZSgpKSB7XG4gICAgICAgIC8vIFRoZSBzZWxlY3RvciB3YXMgcmVsZWFzZWQgc2luY2UgdGhlIHJlcXVlc3QgYmVnYW47IGlnbm9yZSB0aGUgcmVzcG9uc2UuXG4gICAgICAgIGNsZWFyRXhlY3V0aW9uSW5mbyhzdG9yZSwgZXhlY3V0aW9uSWQpO1xuICAgICAgICByZXR1cm4gQ0FOQ0VMRUQkMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc29sdmVkRGVwIGluc3RhbmNlb2YgQ2FuY2VsZWQkMSkge1xuICAgICAgICBSZWNvaWxfcmVjb3ZlcmFibGVWaW9sYXRpb24oJ1NlbGVjdG9yIHdhcyByZWxlYXNlZCB3aGlsZSBpdCBoYWQgZGVwZW5kZW5jaWVzJyk7XG4gICAgICAgIHJldHVybiBDQU5DRUxFRCQxO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIF9fa2V5OiByZXNvbHZlZERlcEtleSxcbiAgICAgICAgX192YWx1ZTogZGVwVmFsdWVcbiAgICAgIH0gPSByZXNvbHZlZERlcCAhPT0gbnVsbCAmJiByZXNvbHZlZERlcCAhPT0gdm9pZCAwID8gcmVzb2x2ZWREZXAgOiB7fTtcbiAgICAgIC8qKlxuICAgICAgICogV2UgbmVlZCB0byBieXBhc3MgdGhlIHNlbGVjdG9yIGRlcCBjYWNoZSBpZiB0aGUgcmVzb2x2ZWQgZGVwIHdhcyBhXG4gICAgICAgKiB1c2VyLXRocm93biBwcm9taXNlIGJlY2F1c2UgdGhlIHNlbGVjdG9yIGRlcCBjYWNoZSB3aWxsIGNvbnRhaW4gdGhlXG4gICAgICAgKiBzdGFsZSB2YWx1ZXMgb2YgZGVwZW5kZW5jaWVzLCBjYXVzaW5nIGFuIGluZmluaXRlIGV2YWx1YXRpb24gbG9vcC5cbiAgICAgICAqL1xuXG4gICAgICBsZXQgYnlwYXNzU2VsZWN0b3JEZXBDYWNoZU9uUmVldmFsdWF0aW9uID0gdHJ1ZTtcblxuICAgICAgaWYgKHJlc29sdmVkRGVwS2V5ICE9IG51bGwpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vdGUgZm9yIGFzeW5jIGF0b21zLCB0aGlzIG1lYW5zIHdlIGFyZSBjaGFuZ2luZyB0aGUgYXRvbSdzIHZhbHVlXG4gICAgICAgICAqIGluIHRoZSBzdG9yZSBmb3IgdGhlIGdpdmVuIHZlcnNpb24uIFRoaXMgc2hvdWxkIGJlIGFscmlnaHQgYmVjYXVzZVxuICAgICAgICAgKiB0aGUgdmVyc2lvbiBvZiBzdGF0ZSBpcyBub3cgc3RhbGUgYW5kIGEgbmV3IHZlcnNpb24gd2lsbCBoYXZlXG4gICAgICAgICAqIGFscmVhZHkgYmVlbiB0cmlnZ2VyZWQgYnkgdGhlIGF0b20gYmVpbmcgcmVzb2x2ZWQgKHNlZSB0aGlzIGxvZ2ljXG4gICAgICAgICAqIGluIFJlY29pbF9hdG9tLmpzKVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhdGUuYXRvbVZhbHVlcy5zZXQocmVzb2x2ZWREZXBLZXksIGxvYWRhYmxlV2l0aFZhbHVlJDEoZGVwVmFsdWUpKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlJ3ZlIGFkZGVkIHRoZSByZXNvbHZlZCBkZXBlbmRlbmN5IHRvIHRoZSBzZWxlY3RvciBkZXAgY2FjaGUsIHNvXG4gICAgICAgICAqIHRoZXJlJ3Mgbm8gbmVlZCB0byBieXBhc3MgdGhlIGNhY2hlXG4gICAgICAgICAqL1xuXG4gICAgICAgIGJ5cGFzc1NlbGVjdG9yRGVwQ2FjaGVPblJlZXZhbHVhdGlvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBbbG9hZGFibGUsIGRlcFZhbHVlc10gPSBldmFsdWF0ZVNlbGVjdG9yR2V0dGVyKHN0b3JlLCBzdGF0ZSwgZXhlY3V0aW9uSWQsIGJ5cGFzc1NlbGVjdG9yRGVwQ2FjaGVPblJlZXZhbHVhdGlvbik7XG5cbiAgICAgIGlmIChpc0xhdGVzdEV4ZWN1dGlvbihzdG9yZSwgZXhlY3V0aW9uSWQpKSB7XG4gICAgICAgIHVwZGF0ZUV4ZWN1dGlvbkluZm9EZXBWYWx1ZXMoZGVwVmFsdWVzLCBzdG9yZSwgZXhlY3V0aW9uSWQpO1xuICAgICAgfVxuXG4gICAgICBtYXliZUZyZWV6ZUxvYWRhYmxlQ29udGVudHMobG9hZGFibGUpO1xuXG4gICAgICBpZiAobG9hZGFibGUuc3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgICBzZXRDYWNoZShzdGF0ZSwgZGVwVmFsdWVzVG9EZXBSb3V0ZShkZXBWYWx1ZXMpLCBsb2FkYWJsZSk7XG4gICAgICAgIHNldERlcHNJblN0b3JlKHN0b3JlLCBzdGF0ZSwgbmV3IFNldChkZXBWYWx1ZXMua2V5cygpKSwgZXhlY3V0aW9uSWQpO1xuICAgICAgICBzZXRMb2FkYWJsZUluU3RvcmVUb05vdGlmeURlcHMoc3RvcmUsIGxvYWRhYmxlLCBleGVjdXRpb25JZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2FkYWJsZS5zdGF0ZSA9PT0gJ2hhc0Vycm9yJykge1xuICAgICAgICB0aHJvdyBsb2FkYWJsZS5jb250ZW50cztcbiAgICAgIH1cblxuICAgICAgaWYgKGxvYWRhYmxlLnN0YXRlID09PSAnaGFzVmFsdWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgX192YWx1ZTogbG9hZGFibGUuY29udGVudHMsXG4gICAgICAgICAgX19rZXk6IGtleVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5pbmcgcHJvbWlzZSBoZXJlIHdpdGhvdXQgd3JhcHBpbmcgYXMgdGhlIHdyYXBlcHIgbG9naWMgd2FzXG4gICAgICAgKiBhbHJlYWR5IGRvbmUgd2hlbiB3ZSBjYWxsZWQgZXZhbHVhdGVTZWxlY3RvckdldHRlcigpIHRvIGdldCB0aGlzXG4gICAgICAgKiBsb2FkYWJsZVxuICAgICAgICovXG5cblxuICAgICAgcmV0dXJuIGxvYWRhYmxlLmNvbnRlbnRzO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGlmICghc2VsZWN0b3JJc0xpdmUoKSkge1xuICAgICAgICAvLyBUaGUgc2VsZWN0b3Igd2FzIHJlbGVhc2VkIHNpbmNlIHRoZSByZXF1ZXN0IGJlZ2FuOyBpZ25vcmUgdGhlIHJlc3BvbnNlLlxuICAgICAgICBjbGVhckV4ZWN1dGlvbkluZm8oc3RvcmUsIGV4ZWN1dGlvbklkKTtcbiAgICAgICAgcmV0dXJuIENBTkNFTEVEJDE7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvYWRhYmxlID0gbG9hZGFibGVXaXRoRXJyb3IkMShlcnJvcik7XG4gICAgICBtYXliZUZyZWV6ZVZhbHVlKGVycm9yKTtcbiAgICAgIHNldENhY2hlKHN0YXRlLCBkZXBWYWx1ZXNUb0RlcFJvdXRlKGV4aXN0aW5nRGVwcyksIGxvYWRhYmxlV2l0aEVycm9yJDEoZXJyb3IpKTtcbiAgICAgIHNldERlcHNJblN0b3JlKHN0b3JlLCBzdGF0ZSwgbmV3IFNldChleGlzdGluZ0RlcHMua2V5cygpKSwgZXhlY3V0aW9uSWQpO1xuICAgICAgc2V0TG9hZGFibGVJblN0b3JlVG9Ob3RpZnlEZXBzKHN0b3JlLCBsb2FkYWJsZSwgZXhlY3V0aW9uSWQpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMb2FkYWJsZUluU3RvcmVUb05vdGlmeURlcHMoc3RvcmUsIGxvYWRhYmxlLCBleGVjdXRpb25JZCkge1xuICAgIGlmIChpc0xhdGVzdEV4ZWN1dGlvbihzdG9yZSwgZXhlY3V0aW9uSWQpKSB7XG4gICAgICBzZXRFeGVjdXRpb25JbmZvKGxvYWRhYmxlLCBzdG9yZSk7XG4gICAgICBub3RpZnlTdG9yZXNPZlNldHRsZWRBc3luYyhsb2FkYWJsZSwgZXhlY3V0aW9uSWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERlcHNJblN0b3JlKHN0b3JlLCBzdGF0ZSwgZGVwcywgZXhlY3V0aW9uSWQpIHtcbiAgICB2YXIgX3N0b3JlJGdldFN0YXRlLCBfc3RvcmUkZ2V0U3RhdGUkY3VycmUsIF9zdG9yZSRnZXRTdGF0ZTIsIF9zdG9yZSRnZXRTdGF0ZTIkbmV4dDtcblxuICAgIGlmIChpc0xhdGVzdEV4ZWN1dGlvbihzdG9yZSwgZXhlY3V0aW9uSWQpIHx8IHN0YXRlLnZlcnNpb24gPT09ICgoX3N0b3JlJGdldFN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKSkgPT09IG51bGwgfHwgX3N0b3JlJGdldFN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3N0b3JlJGdldFN0YXRlJGN1cnJlID0gX3N0b3JlJGdldFN0YXRlLmN1cnJlbnRUcmVlKSA9PT0gbnVsbCB8fCBfc3RvcmUkZ2V0U3RhdGUkY3VycmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdG9yZSRnZXRTdGF0ZSRjdXJyZS52ZXJzaW9uKSB8fCBzdGF0ZS52ZXJzaW9uID09PSAoKF9zdG9yZSRnZXRTdGF0ZTIgPSBzdG9yZS5nZXRTdGF0ZSgpKSA9PT0gbnVsbCB8fCBfc3RvcmUkZ2V0U3RhdGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3N0b3JlJGdldFN0YXRlMiRuZXh0ID0gX3N0b3JlJGdldFN0YXRlMi5uZXh0VHJlZSkgPT09IG51bGwgfHwgX3N0b3JlJGdldFN0YXRlMiRuZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RvcmUkZ2V0U3RhdGUyJG5leHQudmVyc2lvbikpIHtcbiAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQsIF9zdG9yZSRnZXRTdGF0ZTMsIF9zdG9yZSRnZXRTdGF0ZTMkbmV4dDtcblxuICAgICAgc2F2ZURlcGVuZGVuY3lNYXBUb1N0b3JlJDEobmV3IE1hcChbW2tleSwgZGVwc11dKSwgc3RvcmUsIChfc3RvcmUkZ2V0U3RhdGUkbmV4dFQgPSAoX3N0b3JlJGdldFN0YXRlMyA9IHN0b3JlLmdldFN0YXRlKCkpID09PSBudWxsIHx8IF9zdG9yZSRnZXRTdGF0ZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfc3RvcmUkZ2V0U3RhdGUzJG5leHQgPSBfc3RvcmUkZ2V0U3RhdGUzLm5leHRUcmVlKSA9PT0gbnVsbCB8fCBfc3RvcmUkZ2V0U3RhdGUzJG5leHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdG9yZSRnZXRTdGF0ZTMkbmV4dC52ZXJzaW9uKSAhPT0gbnVsbCAmJiBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQgIT09IHZvaWQgMCA/IF9zdG9yZSRnZXRTdGF0ZSRuZXh0VCA6IHN0b3JlLmdldFN0YXRlKCkuY3VycmVudFRyZWUudmVyc2lvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0TmV3RGVwSW5TdG9yZShzdG9yZSwgc3RhdGUsIGRlcHMsIG5ld0RlcEtleSwgZXhlY3V0aW9uSWQpIHtcbiAgICBkZXBzLmFkZChuZXdEZXBLZXkpO1xuICAgIHNldERlcHNJblN0b3JlKHN0b3JlLCBzdGF0ZSwgZGVwcywgZXhlY3V0aW9uSWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZhbHVhdGVTZWxlY3RvckdldHRlcihzdG9yZSwgc3RhdGUsIGV4ZWN1dGlvbklkLCBieXBhc3NTZWxlY3RvckRlcENhY2hlID0gZmFsc2UpIHtcbiAgICBjb25zdCBlbmRQZXJmQmxvY2sgPSBzdGFydFBlcmZCbG9jayQxKGtleSk7IC8vIFRPRE8gVDYzOTY1ODY2OiB1c2UgZXhlY3V0aW9uIElEIGhlcmVcblxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IHJlc3VsdElzRXJyb3IgPSBmYWxzZTtcbiAgICBsZXQgbG9hZGFibGU7XG4gICAgY29uc3QgZGVwVmFsdWVzID0gbmV3IE1hcCgpO1xuICAgIC8qKlxuICAgICAqIFN0YXJ0aW5nIGEgZnJlc2ggc2V0IG9mIGRlcHMgdGhhdCB3ZSdsbCBiZSB1c2luZyB0byB1cGRhdGUgc3RhdGUuIFdlJ3JlXG4gICAgICogc3RhcnRpbmcgYSBuZXcgc2V0IHZlcnN1cyBhZGRpbmcgaXQgaW4gZXhpc3Rpbmcgc3RhdGUgZGVwcyBiZWNhdXNlXG4gICAgICogdGhlIHZlcnNpb24gb2Ygc3RhdGUgdGhhdCB3ZSB1cGRhdGUgZGVwcyBmb3IgbWF5IGJlIGEgbW9yZSByZWNlbnQgdmVyc2lvblxuICAgICAqIHRoYW4gdGhlIHZlcnNpb24gdGhlIHNlbGVjdG9yIHdhcyBjYWxsZWQgd2l0aC4gVGhpcyBpcyBiZWNhdXNlIHRoZSBsYXRlc3RcbiAgICAgKiBleGVjdXRpb24gd2lsbCB1cGRhdGUgdGhlIGRlcHMgb2YgdGhlIGN1cnJlbnQvbGF0ZXN0IHZlcnNpb24gb2Ygc3RhdGUgKFxuICAgICAqIHRoaXMgaXMgc2FmZSB0byBkbyBiZWNhdXNlIHRoZSBmYWN0IHRoYXQgdGhlIHNlbGVjdG9yIGlzIHRoZSBsYXRlc3RcbiAgICAgKiBleGVjdXRpb24gbWVhbnMgdGhlIGRlcHMgd2UgZGlzY292ZXIgYmVsb3cgYXJlIG91ciBiZXN0IGd1ZXNzIGF0IHRoZVxuICAgICAqIGRlcHMgZm9yIHRoZSBjdXJyZW50L2xhdGVzdCBzdGF0ZSBpbiB0aGUgc3RvcmUpXG4gICAgICovXG5cbiAgICBjb25zdCBkZXBzID0gbmV3IFNldCgpO1xuICAgIHNldERlcHNJblN0b3JlKHN0b3JlLCBzdGF0ZSwgZGVwcywgZXhlY3V0aW9uSWQpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVjb2lsVmFsdWUocmVjb2lsVmFsdWUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5OiBkZXBLZXlcbiAgICAgIH0gPSByZWNvaWxWYWx1ZTtcbiAgICAgIHNldE5ld0RlcEluU3RvcmUoc3RvcmUsIHN0YXRlLCBkZXBzLCBkZXBLZXksIGV4ZWN1dGlvbklkKTtcbiAgICAgIGNvbnN0IGRlcExvYWRhYmxlID0gYnlwYXNzU2VsZWN0b3JEZXBDYWNoZSA/IGdldE5vZGVMb2FkYWJsZSQyKHN0b3JlLCBzdGF0ZSwgZGVwS2V5KSA6IGdldENhY2hlZE5vZGVMb2FkYWJsZShzdG9yZSwgc3RhdGUsIGRlcEtleSk7XG4gICAgICBkZXBWYWx1ZXMuc2V0KGRlcEtleSwgZGVwTG9hZGFibGUpO1xuXG4gICAgICBpZiAoZGVwTG9hZGFibGUuc3RhdGUgPT09ICdoYXNWYWx1ZScpIHtcbiAgICAgICAgcmV0dXJuIGRlcExvYWRhYmxlLmNvbnRlbnRzO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBkZXBMb2FkYWJsZS5jb250ZW50cztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZ2V0KHtcbiAgICAgICAgZ2V0OiBnZXRSZWNvaWxWYWx1ZVxuICAgICAgfSk7XG4gICAgICByZXN1bHQgPSBpc1JlY29pbFZhbHVlJDMocmVzdWx0KSA/IGdldFJlY29pbFZhbHVlKHJlc3VsdCkgOiByZXN1bHQ7XG5cbiAgICAgIGlmIChSZWNvaWxfaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gd3JhcFBlbmRpbmdQcm9taXNlKHN0b3JlLCAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXVxuICAgICAgICByZXN1bHQsIHN0YXRlLCBkZXBWYWx1ZXMsIGV4ZWN1dGlvbklkKS5maW5hbGx5KGVuZFBlcmZCbG9jayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmRQZXJmQmxvY2soKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvck9yRGVwUHJvbWlzZSkge1xuICAgICAgcmVzdWx0ID0gZXJyb3JPckRlcFByb21pc2U7XG5cbiAgICAgIGlmIChSZWNvaWxfaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgcmVzdWx0ID0gd3JhcFBlbmRpbmdEZXBlbmRlbmN5UHJvbWlzZShzdG9yZSwgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF1cbiAgICAgICAgcmVzdWx0LCBzdGF0ZSwgZGVwVmFsdWVzLCBleGVjdXRpb25JZCkuZmluYWxseShlbmRQZXJmQmxvY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0SXNFcnJvciA9IHRydWU7XG4gICAgICAgIGVuZFBlcmZCbG9jaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRJc0Vycm9yKSB7XG4gICAgICBsb2FkYWJsZSA9IGxvYWRhYmxlV2l0aEVycm9yJDEocmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKFJlY29pbF9pc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF1cbiAgICAgIGxvYWRhYmxlID0gbG9hZGFibGVXaXRoUHJvbWlzZSQxKHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdXG4gICAgICBsb2FkYWJsZSA9IGxvYWRhYmxlV2l0aFZhbHVlJDEocmVzdWx0KTtcbiAgICB9XG5cbiAgICBtYXliZUZyZWV6ZUxvYWRhYmxlQ29udGVudHMobG9hZGFibGUpO1xuICAgIHJldHVybiBbbG9hZGFibGUsIGRlcFZhbHVlc107XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYWxGcm9tQ2FjaGVBbmRVcGRhdGVkRG93bnN0cmVhbURlcHMoc3RvcmUsIHN0YXRlKSB7XG4gICAgY29uc3QgZGVwc0FmdGVyQ2FjaGVEb25lID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGV4ZWN1dGlvbkluZm8gPSBnZXRFeGVjdXRpb25JbmZvKHN0b3JlKTtcbiAgICBjb25zdCBjYWNoZWRWYWwgPSBjYWNoZS5nZXQobm9kZUtleSA9PiB7XG4gICAgICAhKHR5cGVvZiBub2RlS2V5ID09PSAnc3RyaW5nJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBSZWNvaWxfaW52YXJpYW50KGZhbHNlLCAnQ2FjaGUgbm9kZUtleSBpcyB0eXBlIHN0cmluZycpIDogUmVjb2lsX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICBjb25zdCBsb2FkYWJsZSA9IGdldENhY2hlZE5vZGVMb2FkYWJsZShzdG9yZSwgc3RhdGUsIG5vZGVLZXkpO1xuICAgICAgcmV0dXJuIGxvYWRhYmxlLmNvbnRlbnRzO1xuICAgIH0sIHtcbiAgICAgIG9uTm9kZVZpc2l0OiBub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ2JyYW5jaCcgJiYgbm9kZS5ub2RlS2V5ICE9PSBrZXkgJiYgdHlwZW9mIG5vZGUubm9kZUtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBkZXBzQWZ0ZXJDYWNoZURvbmUuYWRkKG5vZGUubm9kZUtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBFbnN1cmUgc3RvcmUgY29udGFpbnMgY29ycmVjdCBkZXBlbmRlbmNpZXMgaWYgd2UgaGl0IHRoZSBjYWNoZSBzbyB0aGF0XG4gICAgICogdGhlIHN0b3JlIGRlcHMgYW5kIGNhY2hlIGFyZSBpbiBzeW5jIGZvciBhIGdpdmVuIHN0YXRlLiBUaGlzIGlzIGltcG9ydGFudFxuICAgICAqIGJlY2F1c2Ugc3RvcmUgZGVwcyBhcmUgbm9ybWFsbHkgdXBkYXRlZCB3aGVuIG5ldyBleGVjdXRpb25zIGFyZSBjcmVhdGVkLFxuICAgICAqIGJ1dCBjYWNoZSBoaXRzIGRvbid0IHRyaWdnZXIgbmV3IGV4ZWN1dGlvbnMgYnV0IHRoZXkgc3RpbGwgX21heV8gc2lnbmlmaXlcbiAgICAgKiBhIGNoYW5nZSBpbiBkZXBzIGluIHRoZSBzdG9yZSBpZiB0aGUgc3RvcmUgZGVwcyBmb3IgdGhpcyBzdGF0ZSBhcmUgZW1wdHlcbiAgICAgKiBvciBzdGFsZS5cbiAgICAgKi9cblxuICAgIGlmIChjYWNoZWRWYWwpIHtcbiAgICAgIHNldERlcHNJblN0b3JlKHN0b3JlLCBzdGF0ZSwgZGVwc0FmdGVyQ2FjaGVEb25lLCBleGVjdXRpb25JbmZvLmxhdGVzdEV4ZWN1dGlvbklkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVkVmFsO1xuICB9XG4gIC8qKlxuICAgKiBGSVhNRTogZGVwIGtleXMgc2hvdWxkIHRha2UgaW50byBhY2NvdW50IHRoZSBzdGF0ZSBvZiB0aGUgbG9hZGFibGUgdG9cbiAgICogcHJldmVudCB0aGUgZWRnZSBjYXNlIHdoZXJlIGEgbG9hZGFibGUgd2l0aCBhbiBlcnJvciBhbmQgYSBsb2FkYWJsZSB3aXRoXG4gICAqIGFuIGVycm9yIGFzIGEgdmFsdWUgYXJlIHRyZWF0ZWQgYXMgdGhlIHNhbWUgdGhpbmcgaW5jb3JyZWN0bHkuIEZvciBleGFtcGxlXG4gICAqIHRoZXNlIHR3byBzaG91bGQgYmUgdHJlYXRlZCBkaWZmZXJlbnRseTpcbiAgICpcbiAgICogc2VsZWN0b3Ioe2tleTogJycsIGdldDogKCkgPT4gbmV3IEVycm9yKCdoaScpfSk7XG4gICAqIHNlbGVjdG9yKHtrZXk6ICcnLCBnZXQgKCkgPT4ge3Rocm93IG5ldyBFcnJvcignaGknKX19KTtcbiAgICpcbiAgICogV2l0aCBjdXJyZW50IGltcGxlbWVudGF0aW9uIHRoZXkgYXJlIHRyZWF0ZWQgdGhlIHNhbWVcbiAgICovXG5cblxuICBmdW5jdGlvbiBkZXBWYWx1ZXNUb0RlcFJvdXRlKGRlcFZhbHVlcykge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGRlcFZhbHVlcy5lbnRyaWVzKCkpLm1hcCgoW2tleSwgdmFsTG9hZGFibGVdKSA9PiBba2V5LCB2YWxMb2FkYWJsZS5jb250ZW50c10pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsRnJvbVJ1bm5pbmdOZXdFeGVjdXRpb25BbmRVcGRhdGVkRGVwcyhzdG9yZSwgc3RhdGUpIHtcbiAgICBjb25zdCBuZXdFeGVjdXRpb25JZCA9IGdldE5ld0V4ZWN1dGlvbklkKCk7XG4gICAgY29uc3QgW2xvYWRhYmxlLCBuZXdEZXBWYWx1ZXNdID0gZXZhbHVhdGVTZWxlY3RvckdldHRlcihzdG9yZSwgc3RhdGUsIG5ld0V4ZWN1dGlvbklkKTtcbiAgICBzZXRFeGVjdXRpb25JbmZvKGxvYWRhYmxlLCBzdG9yZSwgbmV3RGVwVmFsdWVzLCBuZXdFeGVjdXRpb25JZCwgc3RhdGUpO1xuICAgIG1heWJlU2V0Q2FjaGVXaXRoTG9hZGFibGUoc3RhdGUsIGRlcFZhbHVlc1RvRGVwUm91dGUobmV3RGVwVmFsdWVzKSwgbG9hZGFibGUpO1xuICAgIG5vdGlmeVN0b3JlV2hlbkFzeW5jU2V0dGxlcyhzdG9yZSwgbG9hZGFibGUsIG5ld0V4ZWN1dGlvbklkKTtcbiAgICByZXR1cm4gbG9hZGFibGU7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIGEgdHJlZSBzdGF0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBcInNlbGVjdG9yIHJlc3VsdFwiLCB3aGljaCBpc1xuICAgKiBkZWZpbmVkIGFzIGEgc2l6ZS0yIHR1cGxlIG9mIFtEZXBlbmRlbmN5TWFwLCBMb2FkYWJsZTxUPl0uXG4gICAqXG4gICAqIFRoZSBzZWxlY3RvcidzIGdldCgpIGZ1bmN0aW9uIHdpbGwgb25seSBiZSByZS1ldmFsdWF0ZWQgaWYgX2JvdGhfIG9mIHRoZVxuICAgKiBmb2xsb3dpbmcgc3RhdGVtZW50cyBhcmUgdHJ1ZTpcbiAgICpcbiAgICogMS4gVGhlIGN1cnJlbnQgZGVwIHZhbHVlcyBmcm9tIHRoZSBnaXZlbiBzdGF0ZSBwcm9kdWNlZCBhIGNhY2hlIGtleSB0aGF0XG4gICAqICAgIHdhcyBub3QgZm91bmQgaW4gdGhlIGNhY2hlLlxuICAgKiAyLiBUaGVyZSBpcyBubyBjdXJyZW50bHkgcnVubmluZyBhc3luYyBleGVjdXRpb24gT1IgdGhlcmUgaXMgYW5cbiAgICogICAgYXN5bmMgZXhlY3V0aW9uIHRoYXQgaXMgcnVubmluZywgYnV0IGFmdGVyIGNvbXBhcmluZyB0aGUgZGVwIHZhbHVlcyBpblxuICAgKiAgICB0aGUgZ2l2ZW4gc3RhdGUgd2l0aCB0aGUgZGVwIHZhbHVlcyB0aGF0IHRoZSBleGVjdXRpb24gaGFzIGRpc2NvdmVyZWQgc29cbiAgICogICAgZmFyIHdlIGZpbmQgdGhhdCBhdCBsZWFzdCBvbmUgZGVwIHZhbHVlIGhhcyBjaGFuZ2VkLCBpbiB3aGljaCBjYXNlIHdlXG4gICAqICAgIHN0YXJ0IGEgbmV3IGV4ZWN1dGlvbiAodGhlIHByZXZpb3VzbHkgcnVubmluZyBleGVjdXRpb24gd2lsbCBjb250aW51ZSB0b1xuICAgKiAgICBydW4gdG8gY29tcGxldGlvbiwgYnV0IG9ubHkgdGhlIG5ldyBleGVjdXRpb24gd2lsbCBiZSBkZWVtZWQgdGhlXG4gICAqICAgICdsYXRlc3QnIGV4ZWN1dGlvbiwgbWVhbmluZyBpdCB3aWxsIGJlIHRoZSBvbmx5IGV4ZWN1dGlvbiB0aGF0IHdpbGxcbiAgICogICAgdXBkYXRlIGdsb2JhbCBzdGF0ZSB3aGVuIGl0IGlzIGZpbmlzaGVkLiBBbnkgbm9uLWxhdGVzdCBleGVjdXRpb25zIHdpbGxcbiAgICogICAgcnVuIHRvIGNvbXBsZXRpb24gYW5kIHVwZGF0ZSB0aGUgc2VsZWN0b3IgY2FjaGUgYnV0IG5vdCBnbG9iYWwgc3RhdGUpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdG9yVmFsQW5kVXBkYXRlZERlcHMoc3RvcmUsIHN0YXRlKSB7XG4gICAgY29uc3QgY2FjaGVkVmFsID0gZ2V0VmFsRnJvbUNhY2hlQW5kVXBkYXRlZERvd25zdHJlYW1EZXBzKHN0b3JlLCBzdGF0ZSk7XG5cbiAgICBpZiAoY2FjaGVkVmFsICE9IG51bGwpIHtcbiAgICAgIHNldEV4ZWN1dGlvbkluZm8oY2FjaGVkVmFsLCBzdG9yZSk7XG4gICAgICByZXR1cm4gY2FjaGVkVmFsO1xuICAgIH1cblxuICAgIGNvbnN0IGluUHJvZ3Jlc3NFeGVjdXRpb25JbmZvID0gZ2V0RXhlY3V0aW9uSW5mb09mSW5Qcm9ncmVzc0V4ZWN1dGlvbihzdG9yZSwgc3RhdGUpOyAvLyBGSVhNRTogdGhpcyB3b24ndCB3b3JrIHdpdGggY3VzdG9tIGNhY2hpbmcgYi9jIGl0IHVzZXMgc2VwYXJhdGUgY2FjaGVcblxuICAgIGlmIChpblByb2dyZXNzRXhlY3V0aW9uSW5mbykge1xuICAgICAgY29uc3QgZXhlY3V0aW9uSW5mbyA9IGluUHJvZ3Jlc3NFeGVjdXRpb25JbmZvO1xuICAgICAgbm90aWZ5U3RvcmVXaGVuQXN5bmNTZXR0bGVzKHN0b3JlLCBSZWNvaWxfbnVsbHRocm93cyhleGVjdXRpb25JbmZvLmxhdGVzdExvYWRhYmxlKSwgUmVjb2lsX251bGx0aHJvd3MoZXhlY3V0aW9uSW5mby5sYXRlc3RFeGVjdXRpb25JZCkpOyAvLyBGSVhNRTogY2hlY2sgYWZ0ZXIgdGhlIGZhY3QgdG8gc2VlIGlmIHdlIG1hZGUgdGhlIHJpZ2h0IGNob2ljZSBieSB3YWl0aW5nXG5cbiAgICAgIHJldHVybiBSZWNvaWxfbnVsbHRocm93cyhleGVjdXRpb25JbmZvLmxhdGVzdExvYWRhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0VmFsRnJvbVJ1bm5pbmdOZXdFeGVjdXRpb25BbmRVcGRhdGVkRGVwcyhzdG9yZSwgc3RhdGUpO1xuICB9XG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGVjdXRpb24gaW5mbyBhY3Jvc3MgYWxsIHN0b3JlcyB0byBzZWUgaWYgdGhlcmUgaXMgYW4gaW4tcHJvZ3Jlc3NcbiAgICogZXhlY3V0aW9uIHdob3NlIGRlcGVuZGVuY3kgdmFsdWVzIG1hdGNoIHRoZSB2YWx1ZXMgb2YgdGhlIHJlcXVlc3Rpbmcgc3RvcmUuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0RXhlY3V0aW9uSW5mb09mSW5Qcm9ncmVzc0V4ZWN1dGlvbihzdG9yZSwgc3RhdGUpIHtcbiAgICB2YXIgX0FycmF5JGZyb20kZmluZDtcblxuICAgIGNvbnN0IFssIGV4ZWN1dGlvbkluZm9dID0gKF9BcnJheSRmcm9tJGZpbmQgPSBBcnJheS5mcm9tKGV4ZWN1dGlvbkluZm9NYXAuZW50cmllcygpKS5maW5kKChbLCBleGVjdXRpb25JbmZvXSkgPT4ge1xuICAgICAgcmV0dXJuIGV4ZWN1dGlvbkluZm8ubGF0ZXN0TG9hZGFibGUgIT0gbnVsbCAmJiBleGVjdXRpb25JbmZvLmxhdGVzdEV4ZWN1dGlvbklkICE9IG51bGwgJiYgIWhhdmVBc3luY0RlcHNDaGFuZ2VkKHN0b3JlLCBzdGF0ZSk7XG4gICAgfSkpICE9PSBudWxsICYmIF9BcnJheSRmcm9tJGZpbmQgIT09IHZvaWQgMCA/IF9BcnJheSRmcm9tJGZpbmQgOiBbXTtcbiAgICByZXR1cm4gZXhlY3V0aW9uSW5mbztcbiAgfVxuXG4gIGNvbnN0IG1hcE9mQ2hlY2tlZFZlcnNpb25zID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIGhhdmVBc3luY0RlcHNDaGFuZ2VkKHN0b3JlLCBzdGF0ZSkge1xuICAgIHZhciBfZXhlY3V0aW9uSW5mbyRkZXBWYWwsIF9tYXBPZkNoZWNrZWRWZXJzaW9ucztcblxuICAgIGNvbnN0IGV4ZWN1dGlvbkluZm8gPSBnZXRFeGVjdXRpb25JbmZvKHN0b3JlKTtcbiAgICBjb25zdCBvbGREZXBWYWx1ZXMgPSAoX2V4ZWN1dGlvbkluZm8kZGVwVmFsID0gZXhlY3V0aW9uSW5mby5kZXBWYWx1ZXNEaXNjb3ZlcmVkU29GYXJEdXJpbmdBc3luY1dvcmspICE9PSBudWxsICYmIF9leGVjdXRpb25JbmZvJGRlcFZhbCAhPT0gdm9pZCAwID8gX2V4ZWN1dGlvbkluZm8kZGVwVmFsIDogbmV3IE1hcCgpO1xuICAgIGNvbnN0IGNhY2hlZERlcFZhbHVlc0NoZWNrZWRGb3JUaGlzVmVyc2lvbiA9IEFycmF5KCgoX21hcE9mQ2hlY2tlZFZlcnNpb25zID0gbWFwT2ZDaGVja2VkVmVyc2lvbnMuZ2V0KHN0YXRlLnZlcnNpb24pKSAhPT0gbnVsbCAmJiBfbWFwT2ZDaGVja2VkVmVyc2lvbnMgIT09IHZvaWQgMCA/IF9tYXBPZkNoZWNrZWRWZXJzaW9ucyA6IG5ldyBNYXAoKSkuZW50cmllcygpKTtcbiAgICBjb25zdCBpc0NhY2hlZFZlcnNpb25TYW1lID0gbWFwT2ZDaGVja2VkVmVyc2lvbnMuaGFzKHN0YXRlLnZlcnNpb24pICYmIGNhY2hlZERlcFZhbHVlc0NoZWNrZWRGb3JUaGlzVmVyc2lvbi5sZW5ndGggPT09IG9sZERlcFZhbHVlcy5zaXplICYmIGNhY2hlZERlcFZhbHVlc0NoZWNrZWRGb3JUaGlzVmVyc2lvbi5ldmVyeSgoW25vZGVLZXksIG5vZGVWYWxdKSA9PiB7XG4gICAgICByZXR1cm4gb2xkRGVwVmFsdWVzLmdldChub2RlS2V5KSA9PT0gbm9kZVZhbDtcbiAgICB9KTtcblxuICAgIGlmIChvbGREZXBWYWx1ZXMgPT0gbnVsbCB8fCBzdGF0ZS52ZXJzaW9uID09PSBleGVjdXRpb25JbmZvLnN0YXRlVmVyc2lvbiB8fCBpc0NhY2hlZFZlcnNpb25TYW1lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbWFwT2ZDaGVja2VkVmVyc2lvbnMuc2V0KHN0YXRlLnZlcnNpb24sIG5ldyBNYXAob2xkRGVwVmFsdWVzKSk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2xkRGVwVmFsdWVzKS5zb21lKChbbm9kZUtleSwgb2xkVmFsXSkgPT4ge1xuICAgICAgY29uc3QgbG9hZGFibGUgPSBnZXRDYWNoZWROb2RlTG9hZGFibGUoc3RvcmUsIHN0YXRlLCBub2RlS2V5KTtcbiAgICAgIHJldHVybiBsb2FkYWJsZS5jb250ZW50cyAhPT0gb2xkVmFsLmNvbnRlbnRzICYmXG4gICAgICAvKipcbiAgICAgICAqIEZJWE1FOiBpbiB0aGUgY29uZGl0aW9uIGJlbG93IHdlJ3JlIG1ha2luZyB0aGUgYXNzdW1wdGlvbiB0aGF0IGFcbiAgICAgICAqIGRlcGVuZGVuY3kgdGhhdCBnb2VzIGZyb20gbG9hZGluZyB0byBoYXZpbmcgYSB2YWx1ZSBpcyBhbHdheXMgYmVjYXVzZVxuICAgICAgICogdGhlIGRlcGVuZGVuY3kgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZSwgc28gd2UgZG9uJ3QgY291bnQgaXQgYXMgYSBkZXBcbiAgICAgICAqIGNoYW5nZSBhcyB0aGUgbm9ybWFsIHJldHJ5IGxvb3Agd2lsbCBoYW5kbGUgcmV0cnlpbmcgaW4gcmVzcG9uc2UgdG8gYVxuICAgICAgICogcmVzb2x2ZWQgYXN5bmMgZGVwLiBUaGlzIGlzIGFuIGluY29ycmVjdCBhc3N1bXB0aW9uIGZvciB0aGUgZWRnZSBjYXNlXG4gICAgICAgKiB3aGVyZSB0aGVyZSBpcyBhbiBhc3luYyBzZWxlY3RvciB0aGF0IGlzIGxvYWRpbmcsIGFuZCB3aGlsZSBpdCBpc1xuICAgICAgICogbG9hZGluZyBvbmUgb2YgaXRzIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCB0cmlnZ2VyaW5nIGEgbmV3IGV4ZWN1dGlvbixcbiAgICAgICAqIGFuZCB0aGF0IG5ldyBleGVjdXRpb24gcHJvZHVjZXMgYSB2YWx1ZSBzeW5jaHJvbm91c2x5ICh3ZSBkb24ndCBtYWtlXG4gICAgICAgKiB0aGF0IGFzc3VtcHRpb24gZm9yIGFzeW5jaHJvbm91cyB3b3JrIGIvYyBpdCdzIGd1YXJhbnRlZWQgdGhhdCBhXG4gICAgICAgKiBsb2FkYWJsZSB0aGF0IGdvZXMgZnJvbSAnbG9hZGluZycgdG8gJ2xvYWRpbmcnIGluIGEgbmV3IGxvYWRhYmxlIGlzXG4gICAgICAgKiBhIGRlcCBjaGFuZ2UpLlxuICAgICAgICovXG4gICAgICAhKG9sZFZhbC5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIGxvYWRhYmxlLnN0YXRlICE9PSAnbG9hZGluZycpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdXBkYXRlIHRoZSBzZWxlY3RvcidzIGV4ZWN1dGlvbiBpbmZvIHdoZW4gdGhlIHNlbGVjdG9yXG4gICAqIGhhcyBlaXRoZXIgZmluaXNoZWQgcnVubmluZyBhbiBleGVjdXRpb24gb3IgaGFzIHN0YXJ0ZWQgYSBuZXcgZXhlY3V0aW9uLiBJZlxuICAgKiB0aGUgZ2l2ZW4gbG9hZGFibGUgaXMgaW4gYSAnbG9hZGluZycgc3RhdGUsIHRoZSBpbnRlbnRpb24gaXMgdGhhdCBhIG5ld1xuICAgKiBleGVjdXRpb24gaGFzIHN0YXJ0ZWQuIE90aGVyd2lzZSwgdGhlIGludGVudGlvbiBpcyB0aGF0IGFuIGV4ZWN1dGlvbiBoYXNcbiAgICoganVzdCBmaW5pc2hlZC5cbiAgICovXG5cblxuICBmdW5jdGlvbiBzZXRFeGVjdXRpb25JbmZvKGxvYWRhYmxlLCBzdG9yZSwgZGVwVmFsdWVzLCBuZXdFeGVjdXRpb25JZCwgc3RhdGUpIHtcbiAgICBjb25zdCBleGVjdXRpb25JbmZvID0gZ2V0RXhlY3V0aW9uSW5mbyhzdG9yZSk7XG5cbiAgICBpZiAobG9hZGFibGUuc3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgZXhlY3V0aW9uSW5mby5kZXBWYWx1ZXNEaXNjb3ZlcmVkU29GYXJEdXJpbmdBc3luY1dvcmsgPSBkZXBWYWx1ZXM7XG4gICAgICBleGVjdXRpb25JbmZvLmxhdGVzdEV4ZWN1dGlvbklkID0gbmV3RXhlY3V0aW9uSWQ7XG4gICAgICBleGVjdXRpb25JbmZvLmxhdGVzdExvYWRhYmxlID0gbG9hZGFibGU7XG4gICAgICBleGVjdXRpb25JbmZvLnN0YXRlVmVyc2lvbiA9IHN0YXRlID09PSBudWxsIHx8IHN0YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF0ZS52ZXJzaW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGVjdXRpb25JbmZvLmRlcFZhbHVlc0Rpc2NvdmVyZWRTb0ZhckR1cmluZ0FzeW5jV29yayA9IG51bGw7XG4gICAgICBleGVjdXRpb25JbmZvLmxhdGVzdEV4ZWN1dGlvbklkID0gbnVsbDtcbiAgICAgIGV4ZWN1dGlvbkluZm8ubGF0ZXN0TG9hZGFibGUgPSBudWxsO1xuICAgICAgZXhlY3V0aW9uSW5mby5zdGF0ZVZlcnNpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29uZGl0aW9uYWxseSB1cGRhdGVzIHRoZSBjYWNoZSB3aXRoIGEgZ2l2ZW4gbG9hZGFibGUuXG4gICAqXG4gICAqIFdlIG9ubHkgY2FjaGUgbG9hZGFibGVzIHRoYXQgYXJlIG5vdCBsb2FkaW5nIGJlY2F1c2Ugb3VyIGNhY2hlIGtleXMgYXJlXG4gICAqIGJhc2VkIG9uIGRlcCB2YWx1ZXMsIHdoaWNoIGFyZSBpbiBhbiB1bmZpbmlzaGVkIHN0YXRlIGZvciBsb2FkYWJsZXMgdGhhdFxuICAgKiBoYXZlIGEgJ2xvYWRpbmcnIHN0YXRlIChuZXcgZGVwcyBtYXkgYmUgZGlzY292ZXJlZCB3aGlsZSB0aGUgc2VsZWN0b3JcbiAgICogcnVucyBpdHMgYXN5bmMgY29kZSkuIFdlIG5ldmVyIHdhbnQgdG8gY2FjaGUgcGFydGlhbCBkZXBlbmRlbmNpZXMgYi9jIGl0XG4gICAqIGNvdWxkIGxlYWQgdG8gZXJyb3JzLCBzdWNoIGFzIHByZW1hdHVyZWx5IHJldHVybmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIGFcbiAgICogcGFydGlhbCBsaXN0IG9mIGRlcHMtLSB3ZSBuZWVkIHRoZSBmdWxsIGxpc3Qgb2YgZGVwcyB0byBlbnN1cmUgdGhhdCB3ZVxuICAgKiBhcmUgcmV0dXJuaW5nIHRoZSBjb3JyZWN0IHJlc3VsdCBmcm9tIGNhY2hlLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG1heWJlU2V0Q2FjaGVXaXRoTG9hZGFibGUoc3RhdGUsIGRlcFJvdXRlLCBsb2FkYWJsZSkge1xuICAgIGlmIChsb2FkYWJsZS5zdGF0ZSAhPT0gJ2xvYWRpbmcnKSB7XG4gICAgICBzZXRDYWNoZShzdGF0ZSwgZGVwUm91dGUsIGxvYWRhYmxlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFeGVjdXRpb25JbmZvRGVwVmFsdWVzKGRlcFZhbHVlcywgc3RvcmUsIGV4ZWN1dGlvbklkKSB7XG4gICAgY29uc3QgZXhlY3V0aW9uSW5mbyA9IGdldEV4ZWN1dGlvbkluZm8oc3RvcmUpO1xuXG4gICAgaWYgKGlzTGF0ZXN0RXhlY3V0aW9uKHN0b3JlLCBleGVjdXRpb25JZCkpIHtcbiAgICAgIGV4ZWN1dGlvbkluZm8uZGVwVmFsdWVzRGlzY292ZXJlZFNvRmFyRHVyaW5nQXN5bmNXb3JrID0gZGVwVmFsdWVzO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRXhlY3V0aW9uSW5mbyhzdG9yZSwgZXhlY3V0aW9uSWQpIHtcbiAgICBpZiAoaXNMYXRlc3RFeGVjdXRpb24oc3RvcmUsIGV4ZWN1dGlvbklkKSkge1xuICAgICAgZXhlY3V0aW9uSW5mb01hcC5kZWxldGUoc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTGF0ZXN0RXhlY3V0aW9uKHN0b3JlLCBleGVjdXRpb25JZCkge1xuICAgIGNvbnN0IGV4ZWN1dGlvbkluZm8gPSBnZXRFeGVjdXRpb25JbmZvKHN0b3JlKTtcbiAgICByZXR1cm4gZXhlY3V0aW9uSWQgPT09IGV4ZWN1dGlvbkluZm8ubGF0ZXN0RXhlY3V0aW9uSWQ7XG4gIH1cblxuICBmdW5jdGlvbiBtYXliZUZyZWV6ZUxvYWRhYmxlQ29udGVudHMobG9hZGFibGUpIHtcbiAgICBpZiAobG9hZGFibGUuc3RhdGUgIT09ICdsb2FkaW5nJykge1xuICAgICAgbWF5YmVGcmVlemVWYWx1ZShsb2FkYWJsZS5jb250ZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF5YmVGcmVlemVWYWx1ZSh2YWwpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAoQm9vbGVhbihvcHRpb25zLmRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgUmVjb2lsX2RlZXBGcmVlemVWYWx1ZSh2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhY2hlKHN0YXRlLCBjYWNoZVJvdXRlLCBsb2FkYWJsZSkge1xuICAgIHN0YXRlLmF0b21WYWx1ZXMuc2V0KGtleSwgbG9hZGFibGUpO1xuICAgIGNhY2hlLnNldChjYWNoZVJvdXRlLCBsb2FkYWJsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXRlY3RDaXJjdWxhckRlcGVuZGVuY2llcyhmbikge1xuICAgIGlmIChkZXBlbmRlbmN5U3RhY2suaW5jbHVkZXMoa2V5KSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBSZWNvaWwgc2VsZWN0b3IgaGFzIGNpcmN1bGFyIGRlcGVuZGVuY2llczogJHtkZXBlbmRlbmN5U3RhY2suc2xpY2UoZGVwZW5kZW5jeVN0YWNrLmluZGV4T2Yoa2V5KSkuam9pbignIFxcdTIxOTIgJyl9YDtcbiAgICAgIHJldHVybiBsb2FkYWJsZVdpdGhFcnJvciQxKG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgZGVwZW5kZW5jeVN0YWNrLnB1c2goa2V5KTtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZGVwZW5kZW5jeVN0YWNrLnBvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdG9yUGVlayhzdG9yZSwgc3RhdGUpIHtcbiAgICBjb25zdCBjYWNoZVZhbCA9IGNhY2hlLmdldChub2RlS2V5ID0+IHtcbiAgICAgICEodHlwZW9mIG5vZGVLZXkgPT09ICdzdHJpbmcnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFJlY29pbF9pbnZhcmlhbnQoZmFsc2UsICdDYWNoZSBub2RlS2V5IGlzIHR5cGUgc3RyaW5nJykgOiBSZWNvaWxfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIGNvbnN0IHBlZWsgPSBwZWVrTm9kZUxvYWRhYmxlJDEoc3RvcmUsIHN0YXRlLCBub2RlS2V5KTtcbiAgICAgIHJldHVybiBwZWVrID09PSBudWxsIHx8IHBlZWsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBlZWsuY29udGVudHM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNhY2hlVmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0b3JHZXQoc3RvcmUsIHN0YXRlKSB7XG4gICAgcmV0dXJuIGRldGVjdENpcmN1bGFyRGVwZW5kZW5jaWVzKCgpID0+IGdldFNlbGVjdG9yVmFsQW5kVXBkYXRlZERlcHMoc3RvcmUsIHN0YXRlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZhbGlkYXRlU2VsZWN0b3Ioc3RhdGUpIHtcbiAgICBzdGF0ZS5hdG9tVmFsdWVzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgaWYgKHNldCAhPSBudWxsKSB7XG4gICAgZnVuY3Rpb24gc2VsZWN0b3JTZXQoc3RvcmUsIHN0YXRlLCBuZXdWYWx1ZSkge1xuICAgICAgbGV0IHN5bmNTZWxlY3RvclNldEZpbmlzaGVkID0gZmFsc2U7XG4gICAgICBjb25zdCB3cml0ZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFJlY29pbFZhbHVlKHtcbiAgICAgICAga2V5XG4gICAgICB9KSB7XG4gICAgICAgIGlmIChzeW5jU2VsZWN0b3JTZXRGaW5pc2hlZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVjb2lsOiBBc3luYyBzZWxlY3RvciBzZXRzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvYWRhYmxlID0gZ2V0Q2FjaGVkTm9kZUxvYWRhYmxlKHN0b3JlLCBzdGF0ZSwga2V5KTtcblxuICAgICAgICBpZiAobG9hZGFibGUuc3RhdGUgPT09ICdoYXNWYWx1ZScpIHtcbiAgICAgICAgICByZXR1cm4gbG9hZGFibGUuY29udGVudHM7XG4gICAgICAgIH0gZWxzZSBpZiAobG9hZGFibGUuc3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIHRocm93IG5ldyBSZWNvaWxWYWx1ZU5vdFJlYWR5JDIoa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBsb2FkYWJsZS5jb250ZW50cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzZXRSZWNvaWxTdGF0ZShyZWNvaWxTdGF0ZSwgdmFsdWVPclVwZGF0ZXIpIHtcbiAgICAgICAgaWYgKHN5bmNTZWxlY3RvclNldEZpbmlzaGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWNvaWw6IEFzeW5jIHNlbGVjdG9yIHNldHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0eXBlb2YgdmFsdWVPclVwZGF0ZXIgPT09ICdmdW5jdGlvbicgPyAvLyBjYXN0IHRvIGFueSBiZWNhdXNlIHdlIGNhbid0IHJlc3RyaWN0IHR5cGUgUyBmcm9tIGJlaW5nIGEgZnVuY3Rpb24gaXRzZWxmIHdpdGhvdXQgbG9zaW5nIHN1cHBvcnQgZm9yIG9wYXF1ZSB0eXBlc1xuICAgICAgICAvLyBmbG93bGludC1uZXh0LWxpbmUgdW5jbGVhci10eXBlOm9mZlxuICAgICAgICB2YWx1ZU9yVXBkYXRlcihnZXRSZWNvaWxWYWx1ZShyZWNvaWxTdGF0ZSkpIDogdmFsdWVPclVwZGF0ZXI7XG4gICAgICAgIGNvbnN0IHVwc3RyZWFtV3JpdGVzID0gc2V0Tm9kZVZhbHVlJDMoc3RvcmUsIHN0YXRlLCByZWNvaWxTdGF0ZS5rZXksIG5ld1ZhbHVlKTtcbiAgICAgICAgdXBzdHJlYW1Xcml0ZXMuZm9yRWFjaCgodiwgaykgPT4gd3JpdGVzLnNldChrLCB2KSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUpIHtcbiAgICAgICAgc2V0UmVjb2lsU3RhdGUocmVjb2lsU3RhdGUsIERFRkFVTFRfVkFMVUUkMyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJldCA9IHNldCh7XG4gICAgICAgIHNldDogc2V0UmVjb2lsU3RhdGUsXG4gICAgICAgIGdldDogZ2V0UmVjb2lsVmFsdWUsXG4gICAgICAgIHJlc2V0OiByZXNldFJlY29pbFN0YXRlXG4gICAgICB9LCBuZXdWYWx1ZSk7IC8vIHNldCBzaG91bGQgYmUgYSB2b2lkIG1ldGhvZCwgYnV0IGlmIHRoZSB1c2VyIG1ha2VzIGl0IGBhc3luY2AsIHRoZW4gaXRcbiAgICAgIC8vIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSwgd2hpY2ggd2UgZG9uJ3QgY3VycmVudGx5IHN1cHBvcnQuXG5cbiAgICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBSZWNvaWxfaXNQcm9taXNlKHJldCkgPyBuZXcgRXJyb3IoJ1JlY29pbDogQXN5bmMgc2VsZWN0b3Igc2V0cyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQuJykgOiBuZXcgRXJyb3IoJ1JlY29pbDogc2VsZWN0b3Igc2V0IHNob3VsZCBiZSBhIHZvaWQgZnVuY3Rpb24uJyk7XG4gICAgICB9XG5cbiAgICAgIHN5bmNTZWxlY3RvclNldEZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB3cml0ZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZ2lzdGVyTm9kZSQxKHtcbiAgICAgIGtleSxcbiAgICAgIHBlZWs6IHNlbGVjdG9yUGVlayxcbiAgICAgIGdldDogc2VsZWN0b3JHZXQsXG4gICAgICBzZXQ6IHNlbGVjdG9yU2V0LFxuICAgICAgaW5pdDogc2VsZWN0b3JJbml0LFxuICAgICAgaW52YWxpZGF0ZTogaW52YWxpZGF0ZVNlbGVjdG9yLFxuICAgICAgc2hvdWxkRGVsZXRlQ29uZmlnT25SZWxlYXNlOiBzZWxlY3RvclNob3VsZERlbGV0ZUNvbmZpZ09uUmVsZWFzZSxcbiAgICAgIGRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5OiBvcHRpb25zLmRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5LFxuICAgICAgc2hvdWxkUmVzdG9yZUZyb21TbmFwc2hvdHM6IGZhbHNlLFxuICAgICAgcmV0YWluZWRCeVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZWdpc3Rlck5vZGUkMSh7XG4gICAgICBrZXksXG4gICAgICBwZWVrOiBzZWxlY3RvclBlZWssXG4gICAgICBnZXQ6IHNlbGVjdG9yR2V0LFxuICAgICAgaW5pdDogc2VsZWN0b3JJbml0LFxuICAgICAgaW52YWxpZGF0ZTogaW52YWxpZGF0ZVNlbGVjdG9yLFxuICAgICAgc2hvdWxkRGVsZXRlQ29uZmlnT25SZWxlYXNlOiBzZWxlY3RvclNob3VsZERlbGV0ZUNvbmZpZ09uUmVsZWFzZSxcbiAgICAgIGRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5OiBvcHRpb25zLmRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5LFxuICAgICAgc2hvdWxkUmVzdG9yZUZyb21TbmFwc2hvdHM6IGZhbHNlLFxuICAgICAgcmV0YWluZWRCeVxuICAgIH0pO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXJlZGVjbGFyZSAqL1xuXG5cbnZhciBSZWNvaWxfc2VsZWN0b3IgPSBzZWxlY3RvcjtcblxuLy8gQGZiLW9ubHk6IGNvbnN0IHtzY29wZWRBdG9tfSA9IHJlcXVpcmUoJ1JlY29pbF9TY29wZWRBdG9tJyk7XG5jb25zdCB7XG4gIGxvYWRhYmxlV2l0aEVycm9yOiBsb2FkYWJsZVdpdGhFcnJvciQyLFxuICBsb2FkYWJsZVdpdGhQcm9taXNlOiBsb2FkYWJsZVdpdGhQcm9taXNlJDIsXG4gIGxvYWRhYmxlV2l0aFZhbHVlOiBsb2FkYWJsZVdpdGhWYWx1ZSQyXG59ID0gUmVjb2lsX0xvYWRhYmxlO1xuXG5jb25zdCB7XG4gIERFRkFVTFRfVkFMVUU6IERFRkFVTFRfVkFMVUUkNCxcbiAgRGVmYXVsdFZhbHVlOiBEZWZhdWx0VmFsdWUkMixcbiAgZ2V0Q29uZmlnRGVsZXRpb25IYW5kbGVyOiBnZXRDb25maWdEZWxldGlvbkhhbmRsZXIkMixcbiAgcmVnaXN0ZXJOb2RlOiByZWdpc3Rlck5vZGUkMixcbiAgc2V0Q29uZmlnRGVsZXRpb25IYW5kbGVyOiBzZXRDb25maWdEZWxldGlvbkhhbmRsZXIkMVxufSA9IFJlY29pbF9Ob2RlO1xuXG5jb25zdCB7XG4gIGlzUmVjb2lsVmFsdWU6IGlzUmVjb2lsVmFsdWUkNFxufSA9IFJlY29pbF9SZWNvaWxWYWx1ZSQxO1xuXG5jb25zdCB7XG4gIG1hcmtSZWNvaWxWYWx1ZU1vZGlmaWVkOiBtYXJrUmVjb2lsVmFsdWVNb2RpZmllZCQxLFxuICBzZXRSZWNvaWxWYWx1ZTogc2V0UmVjb2lsVmFsdWUkMyxcbiAgc2V0UmVjb2lsVmFsdWVMb2FkYWJsZTogc2V0UmVjb2lsVmFsdWVMb2FkYWJsZSQzXG59ID0gUmVjb2lsX1JlY29pbFZhbHVlSW50ZXJmYWNlO1xuXG5jb25zdCB7XG4gIHJldGFpbmVkQnlPcHRpb25XaXRoRGVmYXVsdDogcmV0YWluZWRCeU9wdGlvbldpdGhEZWZhdWx0JDJcbn0gPSBSZWNvaWxfUmV0ZW50aW9uO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBiYXNlQXRvbShvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBrZXksXG4gICAgcGVyc2lzdGVuY2VfVU5TVEFCTEU6IHBlcnNpc3RlbmNlXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCByZXRhaW5lZEJ5ID0gcmV0YWluZWRCeU9wdGlvbldpdGhEZWZhdWx0JDIob3B0aW9ucy5yZXRhaW5lZEJ5X1VOU1RBQkxFKTtcbiAgbGV0IGxpdmVTdG9yZXNDb3VudCA9IDA7XG4gIGxldCBkZWZhdWx0TG9hZGFibGUgPSBSZWNvaWxfaXNQcm9taXNlKG9wdGlvbnMuZGVmYXVsdCkgPyBsb2FkYWJsZVdpdGhQcm9taXNlJDIob3B0aW9ucy5kZWZhdWx0LnRoZW4odmFsdWUgPT4ge1xuICAgIGRlZmF1bHRMb2FkYWJsZSA9IGxvYWRhYmxlV2l0aFZhbHVlJDIodmFsdWUpOyAvLyBUT0RPIFRlbXBvcmFyeSBkaXNhYmxlIEZsb3cgZHVlIHRvIHBlbmRpbmcgc2VsZWN0b3JfTkVXIHJlZmFjdG9yXG5cbiAgICBjb25zdCBwcm9taXNlSW5mbyA9IHtcbiAgICAgIF9fa2V5OiBrZXksXG4gICAgICBfX3ZhbHVlOiB2YWx1ZVxuICAgIH07XG4gICAgcmV0dXJuIHByb21pc2VJbmZvO1xuICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgZGVmYXVsdExvYWRhYmxlID0gbG9hZGFibGVXaXRoRXJyb3IkMihlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0pKSA6IGxvYWRhYmxlV2l0aFZhbHVlJDIob3B0aW9ucy5kZWZhdWx0KTtcbiAgbGV0IGNhY2hlZEFuc3dlckZvclVudmFsaWRhdGVkVmFsdWUgPSB1bmRlZmluZWQ7IC8vIENsZWFudXAgaGFuZGxlcnMgZm9yIHRoaXMgYXRvbVxuICAvLyBSZWx5IG9uIHN0YWJsZSByZWZlcmVuY2UgZXF1YWxpdHkgb2YgdGhlIHN0b3JlIHRvIHVzZSBpdCBhcyBhIGtleSBwZXIgPFJlY29pbFJvb3Q+XG5cbiAgY29uc3QgY2xlYW51cEVmZmVjdHNCeVN0b3JlID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIHdyYXBQZW5kaW5nUHJvbWlzZShzdG9yZSwgcHJvbWlzZSkge1xuICAgIGNvbnN0IHdyYXBwZWRQcm9taXNlID0gcHJvbWlzZS50aGVuKHZhbHVlID0+IHtcbiAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQsIF9zdGF0ZSRhdG9tVmFsdWVzJGdldDtcblxuICAgICAgY29uc3Qgc3RhdGUgPSAoX3N0b3JlJGdldFN0YXRlJG5leHRUID0gc3RvcmUuZ2V0U3RhdGUoKS5uZXh0VHJlZSkgIT09IG51bGwgJiYgX3N0b3JlJGdldFN0YXRlJG5leHRUICE9PSB2b2lkIDAgPyBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQgOiBzdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRUcmVlO1xuXG4gICAgICBpZiAoKChfc3RhdGUkYXRvbVZhbHVlcyRnZXQgPSBzdGF0ZS5hdG9tVmFsdWVzLmdldChrZXkpKSA9PT0gbnVsbCB8fCBfc3RhdGUkYXRvbVZhbHVlcyRnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRhdG9tVmFsdWVzJGdldC5jb250ZW50cykgPT09IHdyYXBwZWRQcm9taXNlKSB7XG4gICAgICAgIHNldFJlY29pbFZhbHVlJDMoc3RvcmUsIG5vZGUsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX19rZXk6IGtleSxcbiAgICAgICAgX192YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdmFyIF9zdG9yZSRnZXRTdGF0ZSRuZXh0VDIsIF9zdGF0ZSRhdG9tVmFsdWVzJGdldDI7XG5cbiAgICAgIGNvbnN0IHN0YXRlID0gKF9zdG9yZSRnZXRTdGF0ZSRuZXh0VDIgPSBzdG9yZS5nZXRTdGF0ZSgpLm5leHRUcmVlKSAhPT0gbnVsbCAmJiBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQyICE9PSB2b2lkIDAgPyBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQyIDogc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZTtcblxuICAgICAgaWYgKCgoX3N0YXRlJGF0b21WYWx1ZXMkZ2V0MiA9IHN0YXRlLmF0b21WYWx1ZXMuZ2V0KGtleSkpID09PSBudWxsIHx8IF9zdGF0ZSRhdG9tVmFsdWVzJGdldDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRhdG9tVmFsdWVzJGdldDIuY29udGVudHMpID09PSB3cmFwcGVkUHJvbWlzZSkge1xuICAgICAgICBzZXRSZWNvaWxWYWx1ZUxvYWRhYmxlJDMoc3RvcmUsIG5vZGUsIGxvYWRhYmxlV2l0aEVycm9yJDIoZXJyb3IpKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSk7XG4gICAgcmV0dXJuIHdyYXBwZWRQcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdEF0b20oc3RvcmUsIGluaXRTdGF0ZSwgdHJpZ2dlcikge1xuICAgIGxpdmVTdG9yZXNDb3VudCsrO1xuICAgIGNvbnN0IGFscmVhZHlLbm93biA9IHN0b3JlLmdldFN0YXRlKCkua25vd25BdG9tcy5oYXMoa2V5KTtcbiAgICBzdG9yZS5nZXRTdGF0ZSgpLmtub3duQXRvbXMuYWRkKGtleSk7IC8vIFNldHVwIGFzeW5jIGRlZmF1bHRzIHRvIG5vdGlmeSBzdWJzY3JpYmVycyB3aGVuIHRoZXkgcmVzb2x2ZVxuXG4gICAgaWYgKGRlZmF1bHRMb2FkYWJsZS5zdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICBjb25zdCBub3RpZnlEZWZhdWx0U3Vic2NyaWJlcnMgPSAoKSA9PiB7XG4gICAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQzO1xuXG4gICAgICAgIGNvbnN0IHN0YXRlID0gKF9zdG9yZSRnZXRTdGF0ZSRuZXh0VDMgPSBzdG9yZS5nZXRTdGF0ZSgpLm5leHRUcmVlKSAhPT0gbnVsbCAmJiBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQzICE9PSB2b2lkIDAgPyBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQzIDogc3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50VHJlZTtcblxuICAgICAgICBpZiAoIXN0YXRlLmF0b21WYWx1ZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICBtYXJrUmVjb2lsVmFsdWVNb2RpZmllZCQxKHN0b3JlLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVmYXVsdExvYWRhYmxlLmNvbnRlbnRzLnRoZW4obm90aWZ5RGVmYXVsdFN1YnNjcmliZXJzKS5jYXRjaChub3RpZnlEZWZhdWx0U3Vic2NyaWJlcnMpO1xuICAgIH0gLy8gUnVuIEF0b20gRWZmZWN0c1xuICAgIC8vIFRoaXMgc3RhdGUgaXMgc2NvcGVkIGJ5IFN0b3JlLCBzaW5jZSB0aGlzIGlzIGluIHRoZSBpbml0QXRvbSgpIGNsb3N1cmVcblxuXG4gICAgbGV0IGluaXRWYWx1ZSA9IERFRkFVTFRfVkFMVUUkNDtcbiAgICBsZXQgcGVuZGluZ1NldFNlbGYgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMuZWZmZWN0c19VTlNUQUJMRSAhPSBudWxsICYmICFhbHJlYWR5S25vd24pIHtcbiAgICAgIGxldCBkdXJpbmdJbml0ID0gdHJ1ZTtcblxuICAgICAgY29uc3Qgc2V0U2VsZiA9IGVmZmVjdCA9PiB2YWx1ZU9yVXBkYXRlciA9PiB7XG4gICAgICAgIGlmIChkdXJpbmdJbml0KSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gaW5pdFZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlJDIgfHwgUmVjb2lsX2lzUHJvbWlzZShpbml0VmFsdWUpID8gZGVmYXVsdExvYWRhYmxlLnN0YXRlID09PSAnaGFzVmFsdWUnID8gZGVmYXVsdExvYWRhYmxlLmNvbnRlbnRzIDogREVGQVVMVF9WQUxVRSQ0IDogaW5pdFZhbHVlO1xuICAgICAgICAgIGluaXRWYWx1ZSA9IHR5cGVvZiB2YWx1ZU9yVXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IC8vIGNhc3QgdG8gYW55IGJlY2F1c2Ugd2UgY2FuJ3QgcmVzdHJpY3QgVCBmcm9tIGJlaW5nIGEgZnVuY3Rpb24gd2l0aG91dCBsb3Npbmcgc3VwcG9ydCBmb3Igb3BhcXVlIHR5cGVzXG4gICAgICAgICAgdmFsdWVPclVwZGF0ZXIoY3VycmVudFZhbHVlKSAvLyBmbG93bGludC1saW5lIHVuY2xlYXItdHlwZTpvZmZcbiAgICAgICAgICA6IHZhbHVlT3JVcGRhdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChSZWNvaWxfaXNQcm9taXNlKHZhbHVlT3JVcGRhdGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXR0aW5nIGF0b21zIHRvIGFzeW5jIHZhbHVlcyBpcyBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZU9yVXBkYXRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGVuZGluZ1NldFNlbGYgPSB7XG4gICAgICAgICAgICAgIGVmZmVjdCxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlT3JVcGRhdGVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFJlY29pbFZhbHVlJDMoc3RvcmUsIG5vZGUsIHR5cGVvZiB2YWx1ZU9yVXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnRWYWx1ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IC8vIGNhc3QgdG8gYW55IGJlY2F1c2Ugd2UgY2FuJ3QgcmVzdHJpY3QgVCBmcm9tIGJlaW5nIGEgZnVuY3Rpb24gd2l0aG91dCBsb3Npbmcgc3VwcG9ydCBmb3Igb3BhcXVlIHR5cGVzXG4gICAgICAgICAgICB2YWx1ZU9yVXBkYXRlcihjdXJyZW50VmFsdWUpOyAvLyBmbG93bGludC1saW5lIHVuY2xlYXItdHlwZTpvZmZcblxuICAgICAgICAgICAgcGVuZGluZ1NldFNlbGYgPSB7XG4gICAgICAgICAgICAgIGVmZmVjdCxcbiAgICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICAgIH0gOiB2YWx1ZU9yVXBkYXRlcik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc2V0U2VsZiA9IGVmZmVjdCA9PiAoKSA9PiBzZXRTZWxmKGVmZmVjdCkoREVGQVVMVF9WQUxVRSQ0KTtcblxuICAgICAgY29uc3Qgb25TZXQgPSBlZmZlY3QgPT4gaGFuZGxlciA9PiB7XG4gICAgICAgIHN0b3JlLnN1YnNjcmliZVRvVHJhbnNhY3Rpb25zKGN1cnJlbnRTdG9yZSA9PiB7XG4gICAgICAgICAgdmFyIF9wZW5kaW5nU2V0U2VsZjM7XG5cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGN1cnJlbnRUcmVlLFxuICAgICAgICAgICAgcHJldmlvdXNUcmVlXG4gICAgICAgICAgfSA9IGN1cnJlbnRTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgaWYgKCFwcmV2aW91c1RyZWUpIHtcbiAgICAgICAgICAgIFJlY29pbF9yZWNvdmVyYWJsZVZpb2xhdGlvbignVHJhbnNhY3Rpb24gc3Vic2NyaWJlcnMgbm90aWZpZWQgd2l0aG91dCBhIG5leHQgdHJlZSBiZWluZyBwcmVzZW50IC0tIHRoaXMgaXMgYSBidWcgaW4gUmVjb2lsJyk7XG4gICAgICAgICAgICBwcmV2aW91c1RyZWUgPSBjdXJyZW50VHJlZTsgLy8gYXR0ZW1wdCB0byB0cnVuZGxlIG9uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbmV3TG9hZGFibGUgPSBjdXJyZW50VHJlZS5hdG9tVmFsdWVzLmdldChrZXkpO1xuXG4gICAgICAgICAgaWYgKG5ld0xvYWRhYmxlID09IG51bGwgfHwgbmV3TG9hZGFibGUuc3RhdGUgPT09ICdoYXNWYWx1ZScpIHtcbiAgICAgICAgICAgIHZhciBfcHJldmlvdXNUcmVlJGF0b21WYWwsIF9wZW5kaW5nU2V0U2VsZiwgX3BlbmRpbmdTZXRTZWxmMjtcblxuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdMb2FkYWJsZSAhPSBudWxsID8gbmV3TG9hZGFibGUuY29udGVudHMgOiBERUZBVUxUX1ZBTFVFJDQ7XG4gICAgICAgICAgICBjb25zdCBvbGRMb2FkYWJsZSA9IChfcHJldmlvdXNUcmVlJGF0b21WYWwgPSBwcmV2aW91c1RyZWUuYXRvbVZhbHVlcy5nZXQoa2V5KSkgIT09IG51bGwgJiYgX3ByZXZpb3VzVHJlZSRhdG9tVmFsICE9PSB2b2lkIDAgPyBfcHJldmlvdXNUcmVlJGF0b21WYWwgOiBkZWZhdWx0TG9hZGFibGU7XG4gICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IG9sZExvYWRhYmxlLnN0YXRlID09PSAnaGFzVmFsdWUnID8gb2xkTG9hZGFibGUuY29udGVudHMgOiBERUZBVUxUX1ZBTFVFJDQ7IC8vIFRPRE8gVGhpcyBpc24ndCBhY3R1YWxseSB2YWxpZCwgdXNlIGFzIGEgcGxhY2Vob2xkZXIgZm9yIG5vdy5cbiAgICAgICAgICAgIC8vIElnbm9yZSBhdG9tIHZhbHVlIGNoYW5nZXMgdGhhdCB3ZXJlIHNldCB2aWEgc2V0U2VsZigpIGluIHRoZSBzYW1lIGVmZmVjdC5cbiAgICAgICAgICAgIC8vIFdlIHdpbGwgc3RpbGwgcHJvcGVybHkgY2FsbCB0aGUgaGFuZGxlciBpZiB0aGVyZSB3YXMgYSBzdWJzZXF1ZW50XG4gICAgICAgICAgICAvLyBzZXQgZnJvbSBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBhdG9tIGVmZmVjdCB3aGljaCB3YXMgYmF0Y2hlZFxuICAgICAgICAgICAgLy8gd2l0aCB0aGUgYHNldFNlbGYoKWAgY2FsbC4gIEhvd2V2ZXIsIHdlIG1heSBpbmNvcnJlY3RseSBpZ25vcmVcbiAgICAgICAgICAgIC8vIHRoZSBoYW5kbGVyIGlmIHRoZSBzdWJzZXF1ZW50IGJhdGNoZWQgY2FsbCBoYXBwZW5zIHRvIHNldCB0aGVcbiAgICAgICAgICAgIC8vIGF0b20gdG8gdGhlIGV4YWN0IHNhbWUgdmFsdWUgYXMgdGhlIGBzZXRTZWxmKClgLiAgIEJ1dCwgaW4gdGhhdFxuICAgICAgICAgICAgLy8gY2FzZSwgaXQgd2FzIGtpbmQgb2YgYSBub29wLCBzbyB0aGUgc2VtYW50aWNzIGFyZSBkZWJhdGFibGUuLlxuXG4gICAgICAgICAgICBpZiAoKChfcGVuZGluZ1NldFNlbGYgPSBwZW5kaW5nU2V0U2VsZikgPT09IG51bGwgfHwgX3BlbmRpbmdTZXRTZWxmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcGVuZGluZ1NldFNlbGYuZWZmZWN0KSAhPT0gZWZmZWN0IHx8ICgoX3BlbmRpbmdTZXRTZWxmMiA9IHBlbmRpbmdTZXRTZWxmKSA9PT0gbnVsbCB8fCBfcGVuZGluZ1NldFNlbGYyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcGVuZGluZ1NldFNlbGYyLnZhbHVlKSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgaGFuZGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgoKF9wZW5kaW5nU2V0U2VsZjMgPSBwZW5kaW5nU2V0U2VsZikgPT09IG51bGwgfHwgX3BlbmRpbmdTZXRTZWxmMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3BlbmRpbmdTZXRTZWxmMy5lZmZlY3QpID09PSBlZmZlY3QpIHtcbiAgICAgICAgICAgIHBlbmRpbmdTZXRTZWxmID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGtleSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKGNvbnN0IGVmZmVjdCBvZiAoX29wdGlvbnMkZWZmZWN0c19VTlNUID0gb3B0aW9ucy5lZmZlY3RzX1VOU1RBQkxFKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRlZmZlY3RzX1VOU1QgIT09IHZvaWQgMCA/IF9vcHRpb25zJGVmZmVjdHNfVU5TVCA6IFtdKSB7XG4gICAgICAgIHZhciBfb3B0aW9ucyRlZmZlY3RzX1VOU1Q7XG5cbiAgICAgICAgY29uc3QgY2xlYW51cCA9IGVmZmVjdCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgIHNldFNlbGY6IHNldFNlbGYoZWZmZWN0KSxcbiAgICAgICAgICByZXNldFNlbGY6IHJlc2V0U2VsZihlZmZlY3QpLFxuICAgICAgICAgIG9uU2V0OiBvblNldChlZmZlY3QpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjbGVhbnVwICE9IG51bGwpIHtcbiAgICAgICAgICBjbGVhbnVwRWZmZWN0c0J5U3RvcmUuc2V0KHN0b3JlLCBjbGVhbnVwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkdXJpbmdJbml0ID0gZmFsc2U7XG4gICAgfSAvLyBNdXRhdGUgaW5pdGlhbCBzdGF0ZSBpbiBwbGFjZSBzaW5jZSB3ZSBrbm93IHRoZXJlIGFyZSBubyBvdGhlciBzdWJzY3JpYmVyc1xuICAgIC8vIHNpbmNlIHdlIGFyZSB0aGUgb25lcyBpbml0aWFsaXppbmcgb24gZmlyc3QgdXNlLlxuXG5cbiAgICBpZiAoIShpbml0VmFsdWUgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUkMikpIHtcbiAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUkbmV4dFQ0O1xuXG4gICAgICBjb25zdCBpbml0TG9hZGFibGUgPSBSZWNvaWxfaXNQcm9taXNlKGluaXRWYWx1ZSkgPyBsb2FkYWJsZVdpdGhQcm9taXNlJDIod3JhcFBlbmRpbmdQcm9taXNlKHN0b3JlLCBpbml0VmFsdWUpKSA6IGxvYWRhYmxlV2l0aFZhbHVlJDIoaW5pdFZhbHVlKTtcbiAgICAgIGluaXRTdGF0ZS5hdG9tVmFsdWVzLnNldChrZXksIGluaXRMb2FkYWJsZSk7IC8vIElmIHRoZXJlIGlzIGEgcGVuZGluZyB0cmFuc2FjdGlvbiwgdGhlbiBhbHNvIG11dGF0ZSB0aGUgbmV4dCBzdGF0ZSB0cmVlLlxuICAgICAgLy8gVGhpcyBjb3VsZCBoYXBwZW4gaWYgdGhlIGF0b20gd2FzIGZpcnN0IGluaXRpYWxpemVkIGluIGFuIGFjdGlvbiB0aGF0XG4gICAgICAvLyBhbHNvIHVwZGF0ZWQgc29tZSBvdGhlciBhdG9tJ3Mgc3RhdGUuXG5cbiAgICAgIChfc3RvcmUkZ2V0U3RhdGUkbmV4dFQ0ID0gc3RvcmUuZ2V0U3RhdGUoKS5uZXh0VHJlZSkgPT09IG51bGwgfHwgX3N0b3JlJGdldFN0YXRlJG5leHRUNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0b3JlJGdldFN0YXRlJG5leHRUNC5hdG9tVmFsdWVzLnNldChrZXksIGluaXRMb2FkYWJsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHZhciBfY2xlYW51cEVmZmVjdHNCeVN0b3I7XG5cbiAgICAgIGxpdmVTdG9yZXNDb3VudC0tO1xuICAgICAgKF9jbGVhbnVwRWZmZWN0c0J5U3RvciA9IGNsZWFudXBFZmZlY3RzQnlTdG9yZS5nZXQoc3RvcmUpKSA9PT0gbnVsbCB8fCBfY2xlYW51cEVmZmVjdHNCeVN0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jbGVhbnVwRWZmZWN0c0J5U3RvcigpO1xuICAgICAgY2xlYW51cEVmZmVjdHNCeVN0b3JlLmRlbGV0ZShzdG9yZSk7XG4gICAgICBzdG9yZS5nZXRTdGF0ZSgpLmtub3duQXRvbXMuZGVsZXRlKGtleSk7IC8vIEZJWE1FIHJlbW92ZSBrbm93bkF0b21zP1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwZWVrQXRvbShfc3RvcmUsIHN0YXRlKSB7XG4gICAgdmFyIF9yZWYsIF9zdGF0ZSRhdG9tVmFsdWVzJGdldDMsIF9jYWNoZWRBbnN3ZXJGb3JVbnZhbDtcblxuICAgIHJldHVybiAoX3JlZiA9IChfc3RhdGUkYXRvbVZhbHVlcyRnZXQzID0gc3RhdGUuYXRvbVZhbHVlcy5nZXQoa2V5KSkgIT09IG51bGwgJiYgX3N0YXRlJGF0b21WYWx1ZXMkZ2V0MyAhPT0gdm9pZCAwID8gX3N0YXRlJGF0b21WYWx1ZXMkZ2V0MyA6IChfY2FjaGVkQW5zd2VyRm9yVW52YWwgPSBjYWNoZWRBbnN3ZXJGb3JVbnZhbGlkYXRlZFZhbHVlKSA9PT0gbnVsbCB8fCBfY2FjaGVkQW5zd2VyRm9yVW52YWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jYWNoZWRBbnN3ZXJGb3JVbnZhbFsxXSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2FkYWJsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0b20oX3N0b3JlLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5hdG9tVmFsdWVzLmhhcyhrZXkpKSB7XG4gICAgICAvLyBBdG9tIHZhbHVlIGlzIHN0b3JlZCBpbiBzdGF0ZTpcbiAgICAgIHJldHVybiBSZWNvaWxfbnVsbHRocm93cyhzdGF0ZS5hdG9tVmFsdWVzLmdldChrZXkpKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLm5vbnZhbGlkYXRlZEF0b21zLmhhcyhrZXkpKSB7XG4gICAgICAvLyBBdG9tIHZhbHVlIGlzIHN0b3JlZCBidXQgbmVlZHMgdmFsaWRhdGlvbiBiZWZvcmUgdXNlLlxuICAgICAgLy8gV2UgbWlnaHQgaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBpdCBhbmQgaGF2ZSBhIGNhY2hlZCB2YWxpZGF0ZWQgdmFsdWU6XG4gICAgICBpZiAoY2FjaGVkQW5zd2VyRm9yVW52YWxpZGF0ZWRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRBbnN3ZXJGb3JVbnZhbGlkYXRlZFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyc2lzdGVuY2UgPT0gbnVsbCkge1xuICAgICAgICBSZWNvaWxfZXhwZWN0YXRpb25WaW9sYXRpb24oYFRyaWVkIHRvIHJlc3RvcmUgYSBwZXJzaXN0ZWQgdmFsdWUgZm9yIGF0b20gJHtrZXl9IGJ1dCBpdCBoYXMgbm8gcGVyc2lzdGVuY2Ugc2V0dGluZ3MuYCk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0TG9hZGFibGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vbnZhbGlkYXRlZFZhbHVlID0gc3RhdGUubm9udmFsaWRhdGVkQXRvbXMuZ2V0KGtleSk7XG4gICAgICBjb25zdCB2YWxpZGF0b3JSZXN1bHQgPSBwZXJzaXN0ZW5jZS52YWxpZGF0b3Iobm9udmFsaWRhdGVkVmFsdWUsIERFRkFVTFRfVkFMVUUkNCk7XG4gICAgICBjb25zdCB2YWxpZGF0ZWRWYWx1ZUxvYWRhYmxlID0gdmFsaWRhdG9yUmVzdWx0IGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlJDIgPyBkZWZhdWx0TG9hZGFibGUgOiBsb2FkYWJsZVdpdGhWYWx1ZSQyKHZhbGlkYXRvclJlc3VsdCk7XG4gICAgICBjYWNoZWRBbnN3ZXJGb3JVbnZhbGlkYXRlZFZhbHVlID0gdmFsaWRhdGVkVmFsdWVMb2FkYWJsZTtcbiAgICAgIHJldHVybiBjYWNoZWRBbnN3ZXJGb3JVbnZhbGlkYXRlZFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVmYXVsdExvYWRhYmxlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGludmFsaWRhdGVBdG9tKCkge1xuICAgIGNhY2hlZEFuc3dlckZvclVudmFsaWRhdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBdG9tKF9zdG9yZSwgc3RhdGUsIG5ld1ZhbHVlKSB7XG4gICAgLy8gQmFpbCBvdXQgaWYgd2UncmUgYmVpbmcgc2V0IHRvIHRoZSBleGlzdGluZyB2YWx1ZSwgb3IgaWYgd2UncmUgYmVpbmdcbiAgICAvLyByZXNldCBidXQgaGF2ZSBubyBzdG9yZWQgdmFsdWUgKHZhbGlkYXRlZCBvciB1bnZhbGlkYXRlZCkgdG8gcmVzZXQgZnJvbTpcbiAgICBpZiAoc3RhdGUuYXRvbVZhbHVlcy5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBSZWNvaWxfbnVsbHRocm93cyhzdGF0ZS5hdG9tVmFsdWVzLmdldChrZXkpKTtcblxuICAgICAgaWYgKGV4aXN0aW5nLnN0YXRlID09PSAnaGFzVmFsdWUnICYmIG5ld1ZhbHVlID09PSBleGlzdGluZy5jb250ZW50cykge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXN0YXRlLm5vbnZhbGlkYXRlZEF0b21zLmhhcyhrZXkpICYmIG5ld1ZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlJDIpIHtcbiAgICAgIHJldHVybiBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKG9wdGlvbnMuZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHkgIT09IHRydWUpIHtcbiAgICAgICAgUmVjb2lsX2RlZXBGcmVlemVWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FjaGVkQW5zd2VyRm9yVW52YWxpZGF0ZWRWYWx1ZSA9IHVuZGVmaW5lZDsgLy8gY2FuIGJlIHJlbGVhc2VkIG5vdyBpZiBpdCB3YXMgcHJldmlvdXNseSBpbiB1c2VcblxuICAgIHJldHVybiBuZXcgTWFwKCkuc2V0KGtleSwgbG9hZGFibGVXaXRoVmFsdWUkMihuZXdWYWx1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkRGVsZXRlQ29uZmlnT25SZWxlYXNlQXRvbSgpIHtcbiAgICByZXR1cm4gZ2V0Q29uZmlnRGVsZXRpb25IYW5kbGVyJDIoa2V5KSAhPT0gdW5kZWZpbmVkICYmIGxpdmVTdG9yZXNDb3VudCA8PSAwO1xuICB9XG5cbiAgY29uc3Qgbm9kZSA9IHJlZ2lzdGVyTm9kZSQyKHtcbiAgICBrZXksXG4gICAgcGVlazogcGVla0F0b20sXG4gICAgZ2V0OiBnZXRBdG9tLFxuICAgIHNldDogc2V0QXRvbSxcbiAgICBpbml0OiBpbml0QXRvbSxcbiAgICBpbnZhbGlkYXRlOiBpbnZhbGlkYXRlQXRvbSxcbiAgICBzaG91bGREZWxldGVDb25maWdPblJlbGVhc2U6IHNob3VsZERlbGV0ZUNvbmZpZ09uUmVsZWFzZUF0b20sXG4gICAgZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHk6IG9wdGlvbnMuZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHksXG4gICAgcGVyc2lzdGVuY2VfVU5TVEFCTEU6IG9wdGlvbnMucGVyc2lzdGVuY2VfVU5TVEFCTEUgPyB7XG4gICAgICB0eXBlOiBvcHRpb25zLnBlcnNpc3RlbmNlX1VOU1RBQkxFLnR5cGUsXG4gICAgICBiYWNrQnV0dG9uOiBvcHRpb25zLnBlcnNpc3RlbmNlX1VOU1RBQkxFLmJhY2tCdXR0b25cbiAgICB9IDogdW5kZWZpbmVkLFxuICAgIHNob3VsZFJlc3RvcmVGcm9tU25hcHNob3RzOiB0cnVlLFxuICAgIHJldGFpbmVkQnlcbiAgfSk7XG4gIHJldHVybiBub2RlO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG5mdW5jdGlvbiBhdG9tKG9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGRlZmF1bHQ6IG9wdGlvbnNEZWZhdWx0LFxuICAgIC8vIEBmYi1vbmx5OiBzY29wZVJ1bGVzX0FQUEVORF9PTkxZX1JFQURfVEhFX0RPQ1MsXG4gICAgLi4ucmVzdE9wdGlvbnNcbiAgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGlzUmVjb2lsVmFsdWUkNChvcHRpb25zRGVmYXVsdCkgLy8gQ29udGludWUgdG8gdXNlIGF0b21XaXRoRmFsbGJhY2sgZm9yIHByb21pc2UgZGVmYXVsdHMgZm9yIHNjb3BlZCBhdG9tc1xuICAvLyBmb3Igbm93LCBzaW5jZSBzY29wZWQgYXRvbXMgZG9uJ3Qgc3VwcG9ydCBhc3luYyBkZWZhdWx0c1xuICAvLyBAZmItb25seTogfHwgKGlzUHJvbWlzZShvcHRpb25zRGVmYXVsdCkgJiYgc2NvcGVSdWxlc19BUFBFTkRfT05MWV9SRUFEX1RIRV9ET0NTKVxuICApIHtcbiAgICAgIHJldHVybiBhdG9tV2l0aEZhbGxiYWNrKHsgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAgIGRlZmF1bHQ6IG9wdGlvbnNEZWZhdWx0IC8vIEBmYi1vbmx5OiBzY29wZVJ1bGVzX0FQUEVORF9PTkxZX1JFQURfVEhFX0RPQ1MsXG5cbiAgICAgIH0pOyAvLyBAZmItb25seTogfSBlbHNlIGlmIChzY29wZVJ1bGVzX0FQUEVORF9PTkxZX1JFQURfVEhFX0RPQ1MgJiYgIWlzUHJvbWlzZShvcHRpb25zRGVmYXVsdCkpIHtcbiAgICAgIC8vIEBmYi1vbmx5OiByZXR1cm4gc2NvcGVkQXRvbTxUPih7XG4gICAgICAvLyBAZmItb25seTogLi4ucmVzdE9wdGlvbnMsXG4gICAgICAvLyBAZmItb25seTogZGVmYXVsdDogb3B0aW9uc0RlZmF1bHQsXG4gICAgICAvLyBAZmItb25seTogc2NvcGVSdWxlc19BUFBFTkRfT05MWV9SRUFEX1RIRV9ET0NTLFxuICAgICAgLy8gQGZiLW9ubHk6IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2VBdG9tKHsgLi4ucmVzdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0OiBvcHRpb25zRGVmYXVsdFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGF0b21XaXRoRmFsbGJhY2sob3B0aW9ucykge1xuICBjb25zdCBiYXNlID0gYXRvbSh7IC4uLm9wdGlvbnMsXG4gICAgZGVmYXVsdDogREVGQVVMVF9WQUxVRSQ0LFxuICAgIHBlcnNpc3RlbmNlX1VOU1RBQkxFOiBvcHRpb25zLnBlcnNpc3RlbmNlX1VOU1RBQkxFID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiB7IC4uLm9wdGlvbnMucGVyc2lzdGVuY2VfVU5TVEFCTEUsXG4gICAgICB2YWxpZGF0b3I6IHN0b3JlZFZhbHVlID0+IHN0b3JlZFZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlJDIgPyBzdG9yZWRWYWx1ZSA6IFJlY29pbF9udWxsdGhyb3dzKG9wdGlvbnMucGVyc2lzdGVuY2VfVU5TVEFCTEUpLnZhbGlkYXRvcihzdG9yZWRWYWx1ZSwgREVGQVVMVF9WQUxVRSQ0KVxuICAgIH0sXG4gICAgLy8gVE9ETyBIYWNrIGZvciBub3cuXG4gICAgLy8gZmxvd2xpbnQtbmV4dC1saW5lIHVuY2xlYXItdHlwZTogb2ZmXG4gICAgZWZmZWN0c19VTlNUQUJMRTogb3B0aW9ucy5lZmZlY3RzX1VOU1RBQkxFXG4gIH0pO1xuICBjb25zdCBzZWwgPSBSZWNvaWxfc2VsZWN0b3Ioe1xuICAgIGtleTogYCR7b3B0aW9ucy5rZXl9X193aXRoRmFsbGJhY2tgLFxuICAgIGdldDogKHtcbiAgICAgIGdldFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IGdldChiYXNlKTtcbiAgICAgIHJldHVybiBiYXNlVmFsdWUgaW5zdGFuY2VvZiBEZWZhdWx0VmFsdWUkMiA/IG9wdGlvbnMuZGVmYXVsdCA6IGJhc2VWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogKHtcbiAgICAgIHNldFxuICAgIH0sIG5ld1ZhbHVlKSA9PiBzZXQoYmFzZSwgbmV3VmFsdWUpLFxuICAgIGRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5OiBvcHRpb25zLmRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5XG4gIH0pO1xuICBzZXRDb25maWdEZWxldGlvbkhhbmRsZXIkMShzZWwua2V5LCBnZXRDb25maWdEZWxldGlvbkhhbmRsZXIkMihvcHRpb25zLmtleSkpO1xuICByZXR1cm4gc2VsO1xufVxuXG52YXIgUmVjb2lsX2F0b20gPSBhdG9tO1xuXG4vKipcbiAqIChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuIENvbmZpZGVudGlhbCBhbmQgcHJvcHJpZXRhcnkuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuXG5jbGFzcyBNYXBDYWNoZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkbWFwS2V5O1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21hcFwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2tleU1hcHBlclwiLCB2b2lkIDApO1xuXG4gICAgdGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuX2tleU1hcHBlciA9IChfb3B0aW9ucyRtYXBLZXkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubWFwS2V5KSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRtYXBLZXkgIT09IHZvaWQgMCA/IF9vcHRpb25zJG1hcEtleSA6IHYgPT4gdjtcbiAgfVxuXG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC5zaXplO1xuICB9XG5cbiAgaGFzKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXAuaGFzKHRoaXMuX2tleU1hcHBlcihrZXkpKTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmdldCh0aGlzLl9rZXlNYXBwZXIoa2V5KSk7XG4gIH1cblxuICBzZXQoa2V5LCB2YWwpIHtcbiAgICB0aGlzLl9tYXAuc2V0KHRoaXMuX2tleU1hcHBlcihrZXkpLCB2YWwpO1xuICB9XG5cbiAgZGVsZXRlKGtleSkge1xuICAgIHRoaXMuX21hcC5kZWxldGUodGhpcy5fa2V5TWFwcGVyKGtleSkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fbWFwLmNsZWFyKCk7XG4gIH1cblxufVxuXG52YXIgUmVjb2lsX01hcENhY2hlID0ge1xuICBNYXBDYWNoZVxufTtcblxudmFyIFJlY29pbF9NYXBDYWNoZV8xID0gUmVjb2lsX01hcENhY2hlLk1hcENhY2hlO1xuXG52YXIgUmVjb2lsX01hcENhY2hlJDEgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgTWFwQ2FjaGU6IFJlY29pbF9NYXBDYWNoZV8xXG59KTtcblxuY29uc3Qge1xuICBMUlVDYWNoZTogTFJVQ2FjaGUkMlxufSA9IFJlY29pbF9MUlVDYWNoZSQxO1xuXG5jb25zdCB7XG4gIE1hcENhY2hlOiBNYXBDYWNoZSQxXG59ID0gUmVjb2lsX01hcENhY2hlJDE7XG5cbmNvbnN0IGRlZmF1bHRQb2xpY3kkMSA9IHtcbiAgZXF1YWxpdHk6ICdyZWZlcmVuY2UnLFxuICBldmljdGlvbjogJ25vbmUnLFxuICBtYXhTaXplOiBJbmZpbml0eVxufTtcblxuZnVuY3Rpb24gY2FjaGVGcm9tUG9saWN5KHtcbiAgZXF1YWxpdHkgPSBkZWZhdWx0UG9saWN5JDEuZXF1YWxpdHksXG4gIGV2aWN0aW9uID0gZGVmYXVsdFBvbGljeSQxLmV2aWN0aW9uLFxuICBtYXhTaXplID0gZGVmYXVsdFBvbGljeSQxLm1heFNpemVcbn0gPSBkZWZhdWx0UG9saWN5JDEpIHtcbiAgY29uc3QgdmFsdWVNYXBwZXIgPSBnZXRWYWx1ZU1hcHBlciQxKGVxdWFsaXR5KTtcbiAgY29uc3QgY2FjaGUgPSBnZXRDYWNoZShldmljdGlvbiwgbWF4U2l6ZSwgdmFsdWVNYXBwZXIpO1xuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlTWFwcGVyJDEoZXF1YWxpdHkpIHtcbiAgc3dpdGNoIChlcXVhbGl0eSkge1xuICAgIGNhc2UgJ3JlZmVyZW5jZSc6XG4gICAgICByZXR1cm4gdmFsID0+IHZhbDtcblxuICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgIHJldHVybiB2YWwgPT4gUmVjb2lsX3N0YWJsZVN0cmluZ2lmeSh2YWwpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgZXF1YWxpdHkgcG9saWN5ICR7ZXF1YWxpdHl9YCk7XG59XG5cbmZ1bmN0aW9uIGdldENhY2hlKGV2aWN0aW9uLCBtYXhTaXplLCBtYXBLZXkpIHtcbiAgc3dpdGNoIChldmljdGlvbikge1xuICAgIGNhc2UgJ25vbmUnOlxuICAgICAgcmV0dXJuIG5ldyBNYXBDYWNoZSQxKHtcbiAgICAgICAgbWFwS2V5XG4gICAgICB9KTtcblxuICAgIGNhc2UgJ2xydSc6XG4gICAgICByZXR1cm4gbmV3IExSVUNhY2hlJDIoe1xuICAgICAgICBtYXBLZXksXG4gICAgICAgIG1heFNpemU6IFJlY29pbF9udWxsdGhyb3dzKG1heFNpemUpXG4gICAgICB9KTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGV2aWN0aW9uIHBvbGljeSAke2V2aWN0aW9ufWApO1xufVxuXG52YXIgUmVjb2lsX2NhY2hlRnJvbVBvbGljeSA9IGNhY2hlRnJvbVBvbGljeTtcblxuY29uc3Qge1xuICBzZXRDb25maWdEZWxldGlvbkhhbmRsZXI6IHNldENvbmZpZ0RlbGV0aW9uSGFuZGxlciQyXG59ID0gUmVjb2lsX05vZGU7XG5cblxuXG4gLy8gS2VlcCBpbiBtaW5kIHRoZSBwYXJhbWV0ZXIgbmVlZHMgdG8gYmUgc2VyaWFsaXphYmxlIGFzIGEgY2FoY2hlIGtleVxuLy8gdXNpbmcgUmVjb2lsX3N0YWJsZVN0cmluZ2lmeVxuXG5cbi8vIEFkZCBhIHVuaXF1ZSBpbmRleCB0byBlYWNoIHNlbGVjdG9yIGluIGNhc2UgdGhlIGNhY2hlIGltcGxlbWVudGF0aW9uIGFsbG93c1xuLy8gZHVwbGljYXRlIGtleXMgYmFzZWQgb24gZXF1aXZhbGVudCBzdHJpbmdpZmllZCBwYXJhbWV0ZXJzXG5sZXQgbmV4dEluZGV4ID0gMDtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlZGVjbGFyZSAqL1xuXG4vLyBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgbWVtYmVycyBvZiBhIGZhbWlseSBvZiBzZWxlY3RvcnMgb2YgdGhlIHNhbWUgdHlwZVxuLy8gRS5nLixcbi8vXG4vLyBjb25zdCBzID0gc2VsZWN0b3JGYW1pbHkoLi4uKTtcbi8vIHMoe2E6IDF9KSA9PiBhIHNlbGVjdG9yXG4vLyBzKHthOiAyfSkgPT4gYSBkaWZmZXJlbnQgc2VsZWN0b3Jcbi8vXG4vLyBCeSBkZWZhdWx0LCB0aGUgc2VsZWN0b3JzIGFyZSBkaXN0aW5ndWlzaGVkIGJ5IGRpc3RpbmN0IHZhbHVlcyBvZiB0aGVcbi8vIHBhcmFtZXRlciBiYXNlZCBvbiB2YWx1ZSBlcXVhbGl0eSwgbm90IHJlZmVyZW5jZSBlcXVhbGl0eS4gIFRoaXMgYWxsb3dzIHVzaW5nXG4vLyBvYmplY3QgbGl0ZXJhbHMgb3Igb3RoZXIgZXF1aXZhbGVudCBvYmplY3RzIGF0IGNhbGxzaXRlcyB0byBub3QgY3JlYXRlXG4vLyBkdXBsaWNhdGUgY2FjaGUgZW50cmllcy4gIFRoaXMgYmVoYXZpb3IgbWF5IGJlIG92ZXJyaWRkZW4gd2l0aCB0aGVcbi8vIGNhY2hlSW1wbGVtZW50YXRpb25Gb3JQYXJhbXMgb3B0aW9uLlxuZnVuY3Rpb24gc2VsZWN0b3JGYW1pbHkob3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkY2FjaGVQb2xpY3lGO1xuXG4gIGNvbnN0IHNlbGVjdG9yQ2FjaGUgPSBSZWNvaWxfY2FjaGVGcm9tUG9saWN5KChfb3B0aW9ucyRjYWNoZVBvbGljeUYgPSBvcHRpb25zLmNhY2hlUG9saWN5Rm9yUGFyYW1zX1VOU1RBQkxFKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRjYWNoZVBvbGljeUYgIT09IHZvaWQgMCA/IF9vcHRpb25zJGNhY2hlUG9saWN5RiA6IHtcbiAgICBlcXVhbGl0eTogJ3ZhbHVlJyxcbiAgICBldmljdGlvbjogJ25vbmUnXG4gIH0pO1xuICByZXR1cm4gcGFyYW1zID0+IHtcbiAgICB2YXIgX3N0YWJsZVN0cmluZ2lmeTtcblxuICAgIGNvbnN0IGNhY2hlZFNlbGVjdG9yID0gc2VsZWN0b3JDYWNoZS5nZXQocGFyYW1zKTtcblxuICAgIGlmIChjYWNoZWRTZWxlY3RvciAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gY2FjaGVkU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgY29uc3QgbXlLZXkgPSBgJHtvcHRpb25zLmtleX1fX3NlbGVjdG9yRmFtaWx5LyR7KF9zdGFibGVTdHJpbmdpZnkgPSBSZWNvaWxfc3RhYmxlU3RyaW5naWZ5KHBhcmFtcywge1xuICAgICAgLy8gSXQgaXMgcG9zc2libGUgdG8gdXNlIGZ1bmN0aW9ucyBpbiBwYXJhbWV0ZXJzIGlmIHRoZSB1c2VyIHVzZXNcbiAgICAgIC8vIGEgY2FjaGUgd2l0aCByZWZlcmVuY2UgZXF1YWxpdHkgdGhhbmtzIHRvIHRoZSBpbmNyZW1lbnRpbmcgaW5kZXguXG4gICAgICBhbGxvd0Z1bmN0aW9uczogdHJ1ZVxuICAgIH0pKSAhPT0gbnVsbCAmJiBfc3RhYmxlU3RyaW5naWZ5ICE9PSB2b2lkIDAgPyBfc3RhYmxlU3RyaW5naWZ5IDogJ3ZvaWQnfS8ke25leHRJbmRleCsrfWA7IC8vIEFwcGVuZCBpbmRleCBpbiBjYXNlIHZhbHVlcyBzZXJpYWxpemUgdG8gdGhlIHNhbWUga2V5IHN0cmluZ1xuXG4gICAgY29uc3QgbXlHZXQgPSBjYWxsYmFja3MgPT4gb3B0aW9ucy5nZXQocGFyYW1zKShjYWxsYmFja3MpO1xuXG4gICAgY29uc3QgbXlDYWNoZVBvbGljeSA9IG9wdGlvbnMuY2FjaGVQb2xpY3lfVU5TVEFCTEU7XG4gICAgY29uc3QgcmV0YWluZWRCeSA9IHR5cGVvZiBvcHRpb25zLnJldGFpbmVkQnlfVU5TVEFCTEUgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnJldGFpbmVkQnlfVU5TVEFCTEUocGFyYW1zKSA6IG9wdGlvbnMucmV0YWluZWRCeV9VTlNUQUJMRTtcbiAgICBsZXQgbmV3U2VsZWN0b3I7XG5cbiAgICBpZiAob3B0aW9ucy5zZXQgIT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2V0ID0gb3B0aW9ucy5zZXQ7XG5cbiAgICAgIGNvbnN0IG15U2V0ID0gKGNhbGxiYWNrcywgbmV3VmFsdWUpID0+IHNldChwYXJhbXMpKGNhbGxiYWNrcywgbmV3VmFsdWUpO1xuXG4gICAgICBuZXdTZWxlY3RvciA9IFJlY29pbF9zZWxlY3Rvcih7XG4gICAgICAgIGtleTogbXlLZXksXG4gICAgICAgIGdldDogbXlHZXQsXG4gICAgICAgIHNldDogbXlTZXQsXG4gICAgICAgIGNhY2hlUG9saWN5X1VOU1RBQkxFOiBteUNhY2hlUG9saWN5LFxuICAgICAgICBkYW5nZXJvdXNseUFsbG93TXV0YWJpbGl0eTogb3B0aW9ucy5kYW5nZXJvdXNseUFsbG93TXV0YWJpbGl0eSxcbiAgICAgICAgcmV0YWluZWRCeV9VTlNUQUJMRTogcmV0YWluZWRCeVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdG9yID0gUmVjb2lsX3NlbGVjdG9yKHtcbiAgICAgICAga2V5OiBteUtleSxcbiAgICAgICAgZ2V0OiBteUdldCxcbiAgICAgICAgY2FjaGVQb2xpY3lfVU5TVEFCTEU6IG15Q2FjaGVQb2xpY3ksXG4gICAgICAgIGRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5OiBvcHRpb25zLmRhbmdlcm91c2x5QWxsb3dNdXRhYmlsaXR5LFxuICAgICAgICByZXRhaW5lZEJ5X1VOU1RBQkxFOiByZXRhaW5lZEJ5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RvckNhY2hlLnNldChwYXJhbXMsIG5ld1NlbGVjdG9yKTtcbiAgICBzZXRDb25maWdEZWxldGlvbkhhbmRsZXIkMihuZXdTZWxlY3Rvci5rZXksICgpID0+IHtcbiAgICAgIHNlbGVjdG9yQ2FjaGUuZGVsZXRlKHBhcmFtcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1NlbGVjdG9yO1xuICB9O1xufVxuLyogZXNsaW50LWVuYWJsZSBuby1yZWRlY2xhcmUgKi9cblxuXG52YXIgUmVjb2lsX3NlbGVjdG9yRmFtaWx5ID0gc2VsZWN0b3JGYW1pbHk7XG5cbi8vIEBmYi1vbmx5OiBjb25zdCB7cGFyYW1ldGVyaXplZFNjb3BlZEF0b21MZWdhY3l9ID0gcmVxdWlyZSgnUmVjb2lsX1Njb3BlZEF0b20nKTtcblxuXG5jb25zdCB7XG4gIERFRkFVTFRfVkFMVUU6IERFRkFVTFRfVkFMVUUkNSxcbiAgRGVmYXVsdFZhbHVlOiBEZWZhdWx0VmFsdWUkMyxcbiAgc2V0Q29uZmlnRGVsZXRpb25IYW5kbGVyOiBzZXRDb25maWdEZWxldGlvbkhhbmRsZXIkM1xufSA9IFJlY29pbF9Ob2RlO1xuLypcbkEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBhdG9tIGJhc2VkIG9uIHRoZSBpbnB1dCBwYXJhbWV0ZXIuXG5cbkVhY2ggdW5pcXVlIHBhcmFtZXRlciByZXR1cm5zIGEgdW5pcXVlIGF0b20uIEUuZy4sXG5cbiAgY29uc3QgZiA9IGF0b21GYW1pbHkoLi4uKTtcbiAgZih7YTogMX0pID0+IGFuIGF0b21cbiAgZih7YTogMn0pID0+IGEgZGlmZmVyZW50IGF0b21cblxuVGhpcyBhbGxvd3MgY29tcG9uZW50cyB0byBwZXJzaXN0IGxvY2FsLCBwcml2YXRlIHN0YXRlIHVzaW5nIGF0b21zLiAgRWFjaFxuaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBtYXkgaGF2ZSBhIGRpZmZlcmVudCBrZXksIHdoaWNoIGl0IHVzZXMgYXMgdGhlXG5wYXJhbWV0ZXIgZm9yIGEgZmFtaWx5IG9mIGF0b21zOyBpbiB0aGlzIHdheSwgZWFjaCBjb21wb25lbnQgd2lsbCBoYXZlXG5pdHMgb3duIGF0b20gbm90IHNoYXJlZCBieSBvdGhlciBpbnN0YW5jZXMuICBUaGVzZSBzdGF0ZSBrZXlzIG1heSBiZSBjb21wb3NlZFxuaW50byBjaGlsZHJlbidzIHN0YXRlIGtleXMgYXMgd2VsbC5cbiovXG5cblxuZnVuY3Rpb24gYXRvbUZhbWlseShvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRjYWNoZVBvbGljeUY7XG5cbiAgY29uc3QgYXRvbUNhY2hlID0gUmVjb2lsX2NhY2hlRnJvbVBvbGljeSgoX29wdGlvbnMkY2FjaGVQb2xpY3lGID0gb3B0aW9ucy5jYWNoZVBvbGljeUZvclBhcmFtc19VTlNUQUJMRSkgIT09IG51bGwgJiYgX29wdGlvbnMkY2FjaGVQb2xpY3lGICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRjYWNoZVBvbGljeUYgOiB7XG4gICAgZXF1YWxpdHk6ICd2YWx1ZScsXG4gICAgZXZpY3Rpb246ICdub25lJ1xuICB9KTsgLy8gQW4gYXRvbSB0byByZXByZXNlbnQgYW55IGxlZ2FjeSBhdG9tcyB0aGF0IHdlIGNhbiB1cGdyYWRlIHRvIGFuIGF0b21GYW1pbHlcblxuICBjb25zdCBsZWdhY3lBdG9tT3B0aW9ucyA9IHtcbiAgICBrZXk6IG9wdGlvbnMua2V5LFxuICAgIC8vIExlZ2FjeSBhdG9tcyBqdXN0IHVzZWQgdGhlIHBsYWluIGtleSBkaXJlY3RseVxuICAgIGRlZmF1bHQ6IERFRkFVTFRfVkFMVUUkNSxcbiAgICBwZXJzaXN0ZW5jZV9VTlNUQUJMRTogb3B0aW9ucy5wZXJzaXN0ZW5jZV9VTlNUQUJMRVxuICB9O1xuICBsZXQgbGVnYWN5QXRvbTsgLy8gcHJldHRpZXItaWdub3JlXG4gIC8vIEBmYi1vbmx5OiBpZiAoXG4gIC8vIEBmYi1vbmx5OiBvcHRpb25zLnNjb3BlUnVsZXNfQVBQRU5EX09OTFlfUkVBRF9USEVfRE9DU1xuICAvLyBAZmItb25seTogKSB7XG4gIC8vIEBmYi1vbmx5OiBsZWdhY3lBdG9tID0gcGFyYW1ldGVyaXplZFNjb3BlZEF0b21MZWdhY3k8VCB8IERlZmF1bHRWYWx1ZSwgUD4oe1xuICAvLyBAZmItb25seTogLi4ubGVnYWN5QXRvbU9wdGlvbnMsXG4gIC8vIEBmYi1vbmx5OiBzY29wZVJ1bGVzX0FQUEVORF9PTkxZX1JFQURfVEhFX0RPQ1M6XG4gIC8vIEBmYi1vbmx5OiBvcHRpb25zLnNjb3BlUnVsZXNfQVBQRU5EX09OTFlfUkVBRF9USEVfRE9DUyxcbiAgLy8gQGZiLW9ubHk6IH0pO1xuICAvLyBAZmItb25seTogfSBlbHNlIHtcblxuICBsZWdhY3lBdG9tID0gUmVjb2lsX2F0b20obGVnYWN5QXRvbU9wdGlvbnMpOyAvLyBAZmItb25seTogfVxuICAvLyBTZWxlY3RvciB0byBjYWxjdWxhdGUgdGhlIGRlZmF1bHQgdmFsdWUgYmFzZWQgb24gYW55IHBlcnNpc3RlZCBsZWdhY3kgYXRvbXNcbiAgLy8gdGhhdCB3ZXJlIHVwZ3JhZGVkIHRvIGEgYXRvbUZhbWlseVxuXG4gIGNvbnN0IGF0b21GYW1pbHlEZWZhdWx0ID0gUmVjb2lsX3NlbGVjdG9yRmFtaWx5KHtcbiAgICBrZXk6IGAke29wdGlvbnMua2V5fV9fYXRvbUZhbWlseS9EZWZhdWx0YCxcbiAgICBnZXQ6IHBhcmFtID0+ICh7XG4gICAgICBnZXRcbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCBsZWdhY3lWYWx1ZSA9IGdldCh0eXBlb2YgbGVnYWN5QXRvbSA9PT0gJ2Z1bmN0aW9uJyA/IGxlZ2FjeUF0b20ocGFyYW0pIDogbGVnYWN5QXRvbSk7IC8vIEF0b20gd2FzIHVwZ3JhZGVkIGZyb20gYSBub24tcGFyYW1ldGVyaXplZCBhdG9tXG5cbiAgICAgIGlmICghKGxlZ2FjeVZhbHVlIGluc3RhbmNlb2YgRGVmYXVsdFZhbHVlJDMpKSB7XG4gICAgICAgIHJldHVybiBsZWdhY3lWYWx1ZTtcbiAgICAgIH0gLy8gVGhlcmUncyBubyBsZWdhY3kgYXRvbSB2YWx1ZSwgc28gdXNlIHRoZSB1c2VyLXNwZWNpZmllZCBkZWZhdWx0XG5cblxuICAgICAgcmV0dXJuIHR5cGVvZiBvcHRpb25zLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgPyAvLyBUaGUgZGVmYXVsdCB3YXMgcGFyYW1ldGVyaXplZFxuICAgICAgLy8gRmxvdyBkb2Vzbid0IGtub3cgdGhhdCBUIGlzbid0IGEgZnVuY3Rpb24sIHNvIHdlIG5lZWQgdG8gY2FzZSB0byBhbnlcbiAgICAgIG9wdGlvbnMuZGVmYXVsdChwYXJhbSkgLy8gZmxvd2xpbnQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG4gICAgICA6IC8vIERlZmF1bHQgbWF5IGJlIGEgc3RhdGljIHZhbHVlLCBwcm9taXNlLCBvciBSZWNvaWxWYWx1ZVxuICAgICAgb3B0aW9ucy5kZWZhdWx0O1xuICAgIH0sXG4gICAgZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHk6IG9wdGlvbnMuZGFuZ2Vyb3VzbHlBbGxvd011dGFiaWxpdHksXG4gICAgcmV0YWluZWRCeV9VTlNUQUJMRTogb3B0aW9ucy5yZXRhaW5lZEJ5X1VOU1RBQkxFXG4gIH0pOyAvLyBTaW1wbGUgYXRvbUZhbWlseSBpbXBsZW1lbnRhdGlvbiB0byBjYWNoZSBpbmRpdmlkdWFsIGF0b21zIGJhc2VkXG4gIC8vIG9uIHRoZSBwYXJhbWV0ZXIgdmFsdWUgZXF1YWxpdHkuXG5cbiAgcmV0dXJuIHBhcmFtcyA9PiB7XG4gICAgdmFyIF9zdGFibGVTdHJpbmdpZnk7XG5cbiAgICBjb25zdCBjYWNoZWRBdG9tID0gYXRvbUNhY2hlLmdldChwYXJhbXMpO1xuXG4gICAgaWYgKGNhY2hlZEF0b20gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNhY2hlZEF0b207XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgY2FjaGVQb2xpY3lGb3JQYXJhbXNfVU5TVEFCTEUsXG4gICAgICAuLi5hdG9tT3B0aW9uc1xuICAgIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG5ld0F0b20gPSBSZWNvaWxfYXRvbSh7IC4uLmF0b21PcHRpb25zLFxuICAgICAga2V5OiBgJHtvcHRpb25zLmtleX1fXyR7KF9zdGFibGVTdHJpbmdpZnkgPSBSZWNvaWxfc3RhYmxlU3RyaW5naWZ5KHBhcmFtcykpICE9PSBudWxsICYmIF9zdGFibGVTdHJpbmdpZnkgIT09IHZvaWQgMCA/IF9zdGFibGVTdHJpbmdpZnkgOiAndm9pZCd9YCxcbiAgICAgIGRlZmF1bHQ6IGF0b21GYW1pbHlEZWZhdWx0KHBhcmFtcyksXG4gICAgICByZXRhaW5lZEJ5X1VOU1RBQkxFOiB0eXBlb2Ygb3B0aW9ucy5yZXRhaW5lZEJ5X1VOU1RBQkxFID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5yZXRhaW5lZEJ5X1VOU1RBQkxFKHBhcmFtcykgOiBvcHRpb25zLnJldGFpbmVkQnlfVU5TVEFCTEUsXG4gICAgICBlZmZlY3RzX1VOU1RBQkxFOiB0eXBlb2Ygb3B0aW9ucy5lZmZlY3RzX1VOU1RBQkxFID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5lZmZlY3RzX1VOU1RBQkxFKHBhcmFtcykgOiBvcHRpb25zLmVmZmVjdHNfVU5TVEFCTEUgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAvLyBAZmItb25seTogc2NvcGVSdWxlc19BUFBFTkRfT05MWV9SRUFEX1RIRV9ET0NTOiBtYXBTY29wZVJ1bGVzKFxuICAgICAgLy8gQGZiLW9ubHk6IG9wdGlvbnMuc2NvcGVSdWxlc19BUFBFTkRfT05MWV9SRUFEX1RIRV9ET0NTLFxuICAgICAgLy8gQGZiLW9ubHk6IHBhcmFtcyxcbiAgICAgIC8vIEBmYi1vbmx5OiApLFxuXG4gICAgfSk7XG4gICAgYXRvbUNhY2hlLnNldChwYXJhbXMsIG5ld0F0b20pO1xuICAgIHNldENvbmZpZ0RlbGV0aW9uSGFuZGxlciQzKG5ld0F0b20ua2V5LCAoKSA9PiB7XG4gICAgICBhdG9tQ2FjaGUuZGVsZXRlKHBhcmFtcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0F0b207XG4gIH07XG59XG5cbnZhciBSZWNvaWxfYXRvbUZhbWlseSA9IGF0b21GYW1pbHk7XG5cbi8vIGZsb3dsaW50LW5leHQtbGluZSB1bmNsZWFyLXR5cGU6b2ZmXG5cblxuY29uc3QgY29uc3RhbnRTZWxlY3RvciA9IFJlY29pbF9zZWxlY3RvckZhbWlseSh7XG4gIGtleTogJ19fY29uc3RhbnQnLFxuICBnZXQ6IGNvbnN0YW50ID0+ICgpID0+IGNvbnN0YW50LFxuICBjYWNoZVBvbGljeUZvclBhcmFtc19VTlNUQUJMRToge1xuICAgIGVxdWFsaXR5OiAncmVmZXJlbmNlJ1xuICB9XG59KTsgLy8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2VsZWN0b3Igd2hpY2ggYWx3YXlzIHByb2R1Y2VzIHRoZVxuLy8gc2FtZSBjb25zdGFudCB2YWx1ZS4gIEl0IG1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMgd2l0aCB0aGVcbi8vIHNhbWUgdmFsdWUsIGJhc2VkIG9uIHJlZmVyZW5jZSBlcXVhbGl0eSwgYW5kIHdpbGwgcHJvdmlkZSB0aGVcbi8vIHNhbWUgc2VsZWN0b3IuXG5cbmZ1bmN0aW9uIGNvbnN0U2VsZWN0b3IoY29uc3RhbnQpIHtcbiAgcmV0dXJuIGNvbnN0YW50U2VsZWN0b3IoY29uc3RhbnQpO1xufVxuXG52YXIgUmVjb2lsX2NvbnN0U2VsZWN0b3IgPSBjb25zdFNlbGVjdG9yO1xuXG4vLyBmbG93bGludC1uZXh0LWxpbmUgdW5jbGVhci10eXBlOm9mZlxuXG5cbmNvbnN0IHRocm93aW5nU2VsZWN0b3IgPSBSZWNvaWxfc2VsZWN0b3JGYW1pbHkoe1xuICBrZXk6ICdfX2Vycm9yJyxcbiAgZ2V0OiBtZXNzYWdlID0+ICgpID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0sXG4gIGNhY2hlUG9saWN5Rm9yUGFyYW1zX1VOU1RBQkxFOiB7XG4gICAgZXF1YWxpdHk6ICdyZWZlcmVuY2UnXG4gIH1cbn0pOyAvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZWxlY3RvciB3aGljaCBhbHdheXMgdGhyb3dzIGFuIGVycm9yXG4vLyB3aXRoIHRoZSBwcm92aWRlZCBtZXNzYWdlLlxuXG5mdW5jdGlvbiBlcnJvclNlbGVjdG9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHRocm93aW5nU2VsZWN0b3IobWVzc2FnZSk7XG59XG5cbnZhciBSZWNvaWxfZXJyb3JTZWxlY3RvciA9IGVycm9yU2VsZWN0b3I7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogV3JhcHMgYW5vdGhlciByZWNvaWwgdmFsdWUgYW5kIHByZXZlbnRzIHdyaXRpbmcgdG8gaXQuXG4gKlxuICogQGVtYWlscyBvbmNhbGwrcmVjb2lsXG4gKiBcbiAqIEBmb3JtYXRcbiAqL1xuXG5mdW5jdGlvbiByZWFkT25seVNlbGVjdG9yKGF0b20pIHtcbiAgLy8gZmxvd2xpbnQtbmV4dC1saW5lIHVuY2xlYXItdHlwZTogb2ZmXG4gIHJldHVybiBhdG9tO1xufVxuXG52YXIgUmVjb2lsX3JlYWRPbmx5U2VsZWN0b3IgPSByZWFkT25seVNlbGVjdG9yO1xuXG5jb25zdCB7XG4gIGxvYWRhYmxlV2l0aEVycm9yOiBsb2FkYWJsZVdpdGhFcnJvciQzLFxuICBsb2FkYWJsZVdpdGhQcm9taXNlOiBsb2FkYWJsZVdpdGhQcm9taXNlJDMsXG4gIGxvYWRhYmxlV2l0aFZhbHVlOiBsb2FkYWJsZVdpdGhWYWx1ZSQzXG59ID0gUmVjb2lsX0xvYWRhYmxlO1xuXG5cblxuIC8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgVFJVVEggVEFCTEVcbi8vLy8vLy8vLy8vLy8vLy8vXG4vLyBEZXBlbmRlbmNpZXMgICAgICAgIHdhaXRGb3JOb25lICAgICAgICAgd2FpdEZvckFueSAgICAgICAgd2FpdEZvckFsbCAgICAgICB3YWl0Rm9yQWxsU2V0dGxlZFxuLy8gIFtsb2FkaW5nLCBsb2FkaW5nXSAgW1Byb21pc2UsIFByb21pc2VdICBQcm9taXNlICAgICAgICAgICBQcm9taXNlICAgICAgICAgUHJvbWlzZVxuLy8gIFt2YWx1ZSwgbG9hZGluZ10gICAgW3ZhbHVlLCBQcm9taXNlXSAgICBbdmFsdWUsIFByb21pc2VdICBQcm9taXNlICAgICAgICAgUHJvbWlzZVxuLy8gIFt2YWx1ZSwgdmFsdWVdICAgICAgW3ZhbHVlLCB2YWx1ZV0gICAgICBbdmFsdWUsIHZhbHVlXSAgICBbdmFsdWUsIHZhbHVlXSAgW3ZhbHVlLCB2YWx1ZV1cbi8vXG4vLyAgW2Vycm9yLCBsb2FkaW5nXSAgICBbRXJyb3IsIFByb21pc2VdICAgIFtFcnJvciwgUHJvbWlzZV0gIEVycm9yICAgICAgICAgICBQcm9taXNlXG4vLyAgW2Vycm9yLCBlcnJvcl0gICAgICBbRXJyb3IsIEVycm9yXSAgICAgIFtFcnJvciwgRXJyb3JdICAgIEVycm9yICAgICAgICAgICBbZXJyb3IsIGVycm9yXVxuLy8gIFt2YWx1ZSwgZXJyb3JdICAgICAgW3ZhbHVlLCBFcnJvcl0gICAgICBbdmFsdWUsIEVycm9yXSAgICBFcnJvciAgICAgICAgICAgW3ZhbHVlLCBlcnJvcl1cbi8vIElzc3VlIHBhcmFsbGVsIHJlcXVlc3RzIGZvciBhbGwgZGVwZW5kZW5jaWVzIGFuZCByZXR1cm4gdGhlIGN1cnJlbnRcbi8vIHN0YXR1cyBpZiB0aGV5IGhhdmUgcmVzdWx0cywgaGF2ZSBzb21lIGVycm9yLCBvciBhcmUgc3RpbGwgcGVuZGluZy5cblxuXG5mdW5jdGlvbiBjb25jdXJyZW50UmVxdWVzdHMoZ2V0UmVjb2lsVmFsdWUsIGRlcHMpIHtcbiAgY29uc3QgcmVzdWx0cyA9IEFycmF5KGRlcHMubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCk7XG4gIGNvbnN0IGV4Y2VwdGlvbnMgPSBBcnJheShkZXBzLmxlbmd0aCkuZmlsbCh1bmRlZmluZWQpO1xuXG4gIGZvciAoY29uc3QgW2ksIGRlcF0gb2YgZGVwcy5lbnRyaWVzKCkpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0c1tpXSA9IGdldFJlY29pbFZhbHVlKGRlcCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXhjZXB0aW9ucyBjYW4gZWl0aGVyIGJlIFByb21pc2VzIG9mIHBlbmRpbmcgcmVzdWx0cyBvciByZWFsIGVycm9yc1xuICAgICAgZXhjZXB0aW9uc1tpXSA9IGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHRzLCBleGNlcHRpb25zXTtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcihleHApIHtcbiAgcmV0dXJuIGV4cCAhPSBudWxsICYmICFSZWNvaWxfaXNQcm9taXNlKGV4cCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSA/IGRlcGVuZGVuY2llcyA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlcGVuZGVuY2llcykubWFwKGtleSA9PiBkZXBlbmRlbmNpZXNba2V5XSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlRnJvbUxvYWRhYmxlUHJvbWlzZVJlc3VsdChyZXN1bHQpIHtcbiAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnX192YWx1ZScpKSB7XG4gICAgcmV0dXJuIHJlc3VsdC5fX3ZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gd3JhcFJlc3VsdHMoZGVwZW5kZW5jaWVzLCByZXN1bHRzKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcykgPyByZXN1bHRzIDogLy8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKSBoYXMgY29uc2lzdGVudCBrZXkgb3JkZXJpbmcgd2l0aCBFUzZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVwZW5kZW5jaWVzKS5yZWR1Y2UoKG91dCwga2V5LCBpZHgpID0+ICh7IC4uLm91dCxcbiAgICBba2V5XTogcmVzdWx0c1tpZHhdXG4gIH0pLCB7fSk7XG59XG5cbmZ1bmN0aW9uIHdyYXBMb2FkYWJsZXMoZGVwZW5kZW5jaWVzLCByZXN1bHRzLCBleGNlcHRpb25zKSB7XG4gIGNvbnN0IG91dHB1dCA9IGV4Y2VwdGlvbnMubWFwKChleGNlcHRpb24sIGlkeCkgPT4gZXhjZXB0aW9uID09IG51bGwgPyBsb2FkYWJsZVdpdGhWYWx1ZSQzKHJlc3VsdHNbaWR4XSkgOiBSZWNvaWxfaXNQcm9taXNlKGV4Y2VwdGlvbikgPyBsb2FkYWJsZVdpdGhQcm9taXNlJDMoZXhjZXB0aW9uKSA6IGxvYWRhYmxlV2l0aEVycm9yJDMoZXhjZXB0aW9uKSk7XG4gIHJldHVybiB3cmFwUmVzdWx0cyhkZXBlbmRlbmNpZXMsIG91dHB1dCk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVBc3luY1Jlc3VsdHNXaXRoU3luY1Jlc3VsdHMoc3luY1Jlc3VsdHMsIGFzeW5jUmVzdWx0cykge1xuICByZXR1cm4gYXN5bmNSZXN1bHRzLm1hcCgocmVzdWx0LCBpZHgpID0+XG4gIC8qKlxuICAgKiBpdCdzIGltcG9ydGFudCB3ZSB1c2UgPT09IHVuZGVmaW5lZCBhcyBvcHBvc2VkIHRvID09IG51bGwsIGJlY2F1c2UgdGhlXG4gICAqIHJlc29sdmVkIHZhbHVlIG9mIHRoZSBhc3luYyBwcm9taXNlIGNvdWxkIGJlIGBudWxsYCwgaW4gd2hpY2ggY2FzZSB3ZVxuICAgKiBkb24ndCB3YW50IHRvIHVzZSBzeW5jUmVzdWx0c1tpZHhdLCB3aGljaCB3b3VsZCBiZSB1bmRlZmluZWQuIElmIGFzeW5jXG4gICAqIHByb21pc2UgcmVzb2x2ZXMgdG8gYHVuZGVmaW5lZGAsIHRoYXQncyBvayBiZWNhdXNlIGBzeW5jUmVzdWx0c1tpZHhdYFxuICAgKiB3aWxsIGFsc28gYmUgYHVuZGVmaW5lZGAuIFRoYXQncyBhIGxpdHRsZSBoYWNreSwgYnV0IGl0IHdvcmtzLlxuICAgKi9cbiAgcmVzdWx0ID09PSB1bmRlZmluZWQgPyBzeW5jUmVzdWx0c1tpZHhdIDogcmVzdWx0KTtcbn0gLy8gU2VsZWN0b3IgdGhhdCByZXF1ZXN0cyBhbGwgZGVwZW5kZW5jaWVzIGluIHBhcmFsbGVsIGFuZCBpbW1lZGlhdGVseSByZXR1cm5zXG4vLyBjdXJyZW50IHJlc3VsdHMgd2l0aG91dCB3YWl0aW5nLlxuXG5cbmNvbnN0IHdhaXRGb3JOb25lID0gUmVjb2lsX3NlbGVjdG9yRmFtaWx5KHtcbiAga2V5OiAnX193YWl0Rm9yTm9uZScsXG4gIGdldDogZGVwZW5kZW5jaWVzID0+ICh7XG4gICAgZ2V0XG4gIH0pID0+IHtcbiAgICAvLyBJc3N1ZSByZXF1ZXN0cyBmb3IgYWxsIGRlcGVuZGVuY2llcyBpbiBwYXJhbGxlbC5cbiAgICBjb25zdCBkZXBzID0gdW53cmFwRGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcyk7XG4gICAgY29uc3QgW3Jlc3VsdHMsIGV4Y2VwdGlvbnNdID0gY29uY3VycmVudFJlcXVlc3RzKGdldCwgZGVwcyk7IC8vIEFsd2F5cyByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSByZXN1bHRzOyBuZXZlciBibG9jay5cblxuICAgIHJldHVybiB3cmFwTG9hZGFibGVzKGRlcGVuZGVuY2llcywgcmVzdWx0cywgZXhjZXB0aW9ucyk7XG4gIH1cbn0pOyAvLyBTZWxlY3RvciB0aGF0IHJlcXVlc3RzIGFsbCBkZXBlbmRlbmNpZXMgaW4gcGFyYWxsZWwgYW5kIHdhaXRzIGZvciBhdCBsZWFzdFxuLy8gb25lIHRvIGJlIGF2YWlsYWJsZSBiZWZvcmUgcmV0dXJuaW5nIHJlc3VsdHMuICBJdCB3aWxsIG9ubHkgZXJyb3IgaWYgYWxsXG4vLyBkZXBlbmRlbmNpZXMgaGF2ZSBlcnJvcnMuXG5cbmNvbnN0IHdhaXRGb3JBbnkgPSBSZWNvaWxfc2VsZWN0b3JGYW1pbHkoe1xuICBrZXk6ICdfX3dhaXRGb3JBbnknLFxuICBnZXQ6IGRlcGVuZGVuY2llcyA9PiAoe1xuICAgIGdldFxuICB9KSA9PiB7XG4gICAgLy8gSXNzdWUgcmVxdWVzdHMgZm9yIGFsbCBkZXBlbmRlbmNpZXMgaW4gcGFyYWxsZWwuXG4gICAgLy8gRXhjZXB0aW9ucyBjYW4gZWl0aGVyIGJlIFByb21pc2VzIG9mIHBlbmRpbmcgcmVzdWx0cyBvciByZWFsIGVycm9yc1xuICAgIGNvbnN0IGRlcHMgPSB1bndyYXBEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcbiAgICBjb25zdCBbcmVzdWx0cywgZXhjZXB0aW9uc10gPSBjb25jdXJyZW50UmVxdWVzdHMoZ2V0LCBkZXBzKTsgLy8gSWYgYW55IHJlc3VsdHMgYXJlIGF2YWlsYWJsZSwgdmFsdWUgb3IgZXJyb3IsIHJldHVybiB0aGUgY3VycmVudCBzdGF0dXNcblxuICAgIGlmIChleGNlcHRpb25zLnNvbWUoZXhwID0+ICFSZWNvaWxfaXNQcm9taXNlKGV4cCkpKSB7XG4gICAgICByZXR1cm4gd3JhcExvYWRhYmxlcyhkZXBlbmRlbmNpZXMsIHJlc3VsdHMsIGV4Y2VwdGlvbnMpO1xuICAgIH0gLy8gT3RoZXJ3aXNlLCByZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHdoZW4gdGhlIG5leHQgcmVzdWx0IGlzXG4gICAgLy8gYXZhaWxhYmxlLCB3aGljaGV2ZXIgb25lIGhhcHBlbnMgdG8gYmUgbmV4dC4gIEJ1dCwgaWYgYWxsIHBlbmRpbmdcbiAgICAvLyBkZXBlbmRlbmNpZXMgZW5kIHVwIHdpdGggZXJyb3JzLCB0aGVuIHJlamVjdCB0aGUgcHJvbWlzZS5cblxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgZm9yIChjb25zdCBbaSwgZXhwXSBvZiBleGNlcHRpb25zLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoUmVjb2lsX2lzUHJvbWlzZShleHApKSB7XG4gICAgICAgICAgZXhwLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSBnZXRWYWx1ZUZyb21Mb2FkYWJsZVByb21pc2VSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgIGV4Y2VwdGlvbnNbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXNvbHZlKHdyYXBMb2FkYWJsZXMoZGVwZW5kZW5jaWVzLCByZXN1bHRzLCBleGNlcHRpb25zKSk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgZXhjZXB0aW9uc1tpXSA9IGVycm9yO1xuICAgICAgICAgICAgcmVzb2x2ZSh3cmFwTG9hZGFibGVzKGRlcGVuZGVuY2llcywgcmVzdWx0cywgZXhjZXB0aW9ucykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pOyAvLyBTZWxlY3RvciB0aGF0IHJlcXVlc3RzIGFsbCBkZXBlbmRlbmNpZXMgaW4gcGFyYWxsZWwgYW5kIHdhaXRzIGZvciBhbGwgdG8gYmVcbi8vIGF2YWlsYWJsZSBiZWZvcmUgcmV0dXJuaW5nIGEgdmFsdWUuICBJdCB3aWxsIGVycm9yIGlmIGFueSBkZXBlbmRlbmNpZXMgZXJyb3IuXG5cbmNvbnN0IHdhaXRGb3JBbGwgPSBSZWNvaWxfc2VsZWN0b3JGYW1pbHkoe1xuICBrZXk6ICdfX3dhaXRGb3JBbGwnLFxuICBnZXQ6IGRlcGVuZGVuY2llcyA9PiAoe1xuICAgIGdldFxuICB9KSA9PiB7XG4gICAgLy8gSXNzdWUgcmVxdWVzdHMgZm9yIGFsbCBkZXBlbmRlbmNpZXMgaW4gcGFyYWxsZWwuXG4gICAgLy8gRXhjZXB0aW9ucyBjYW4gZWl0aGVyIGJlIFByb21pc2VzIG9mIHBlbmRpbmcgcmVzdWx0cyBvciByZWFsIGVycm9yc1xuICAgIGNvbnN0IGRlcHMgPSB1bndyYXBEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzKTtcbiAgICBjb25zdCBbcmVzdWx0cywgZXhjZXB0aW9uc10gPSBjb25jdXJyZW50UmVxdWVzdHMoZ2V0LCBkZXBzKTsgLy8gSWYgYWxsIHJlc3VsdHMgYXJlIGF2YWlsYWJsZSwgcmV0dXJuIHRoZSByZXN1bHRzXG5cbiAgICBpZiAoZXhjZXB0aW9ucy5ldmVyeShleHAgPT4gZXhwID09IG51bGwpKSB7XG4gICAgICByZXR1cm4gd3JhcFJlc3VsdHMoZGVwZW5kZW5jaWVzLCByZXN1bHRzKTtcbiAgICB9IC8vIElmIHdlIGhhdmUgYW55IGVycm9ycywgdGhyb3cgdGhlIGZpcnN0IGVycm9yXG5cblxuICAgIGNvbnN0IGVycm9yID0gZXhjZXB0aW9ucy5maW5kKGlzRXJyb3IpO1xuXG4gICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gLy8gT3RoZXJ3aXNlLCByZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIHdoZW4gYWxsIHJlc3VsdHMgYXJlIGF2YWlsYWJsZVxuXG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZXhjZXB0aW9ucykudGhlbihleGNlcHRpb25SZXN1bHRzID0+IHdyYXBSZXN1bHRzKGRlcGVuZGVuY2llcywgY29tYmluZUFzeW5jUmVzdWx0c1dpdGhTeW5jUmVzdWx0cyhyZXN1bHRzLCBleGNlcHRpb25SZXN1bHRzKS5tYXAoZ2V0VmFsdWVGcm9tTG9hZGFibGVQcm9taXNlUmVzdWx0KSkpO1xuICB9XG59KTtcbmNvbnN0IHdhaXRGb3JBbGxTZXR0bGVkID0gUmVjb2lsX3NlbGVjdG9yRmFtaWx5KHtcbiAga2V5OiAnX193YWl0Rm9yQWxsU2V0dGxlZCcsXG4gIGdldDogZGVwZW5kZW5jaWVzID0+ICh7XG4gICAgZ2V0XG4gIH0pID0+IHtcbiAgICAvLyBJc3N1ZSByZXF1ZXN0cyBmb3IgYWxsIGRlcGVuZGVuY2llcyBpbiBwYXJhbGxlbC5cbiAgICAvLyBFeGNlcHRpb25zIGNhbiBlaXRoZXIgYmUgUHJvbWlzZXMgb2YgcGVuZGluZyByZXN1bHRzIG9yIHJlYWwgZXJyb3JzXG4gICAgY29uc3QgZGVwcyA9IHVud3JhcERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuICAgIGNvbnN0IFtyZXN1bHRzLCBleGNlcHRpb25zXSA9IGNvbmN1cnJlbnRSZXF1ZXN0cyhnZXQsIGRlcHMpOyAvLyBJZiBhbGwgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLCByZXR1cm4gdGhlIHJlc3VsdHNcblxuICAgIGlmIChleGNlcHRpb25zLmV2ZXJ5KGV4cCA9PiAhUmVjb2lsX2lzUHJvbWlzZShleHApKSkge1xuICAgICAgcmV0dXJuIHdyYXBMb2FkYWJsZXMoZGVwZW5kZW5jaWVzLCByZXN1bHRzLCBleGNlcHRpb25zKTtcbiAgICB9IC8vIFdhaXQgZm9yIGFsbCByZXN1bHRzIHRvIHNldHRsZVxuXG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZXhjZXB0aW9ucy5tYXAoKGV4cCwgaSkgPT4gUmVjb2lsX2lzUHJvbWlzZShleHApID8gZXhwLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHJlc3VsdHNbaV0gPSBnZXRWYWx1ZUZyb21Mb2FkYWJsZVByb21pc2VSZXN1bHQocmVzdWx0KTtcbiAgICAgIGV4Y2VwdGlvbnNbaV0gPSB1bmRlZmluZWQ7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgcmVzdWx0c1tpXSA9IHVuZGVmaW5lZDtcbiAgICAgIGV4Y2VwdGlvbnNbaV0gPSBlcnJvcjtcbiAgICB9KSA6IG51bGwpKSAvLyBUaGVuIHdyYXAgdGhlbSBhcyBsb2FkYWJsZXNcbiAgICAudGhlbigoKSA9PiB3cmFwTG9hZGFibGVzKGRlcGVuZGVuY2llcywgcmVzdWx0cywgZXhjZXB0aW9ucykpO1xuICB9XG59KTtcbmNvbnN0IG5vV2FpdCA9IFJlY29pbF9zZWxlY3RvckZhbWlseSh7XG4gIGtleTogJ19fbm9XYWl0JyxcbiAgZ2V0OiBkZXBlbmRlbmN5ID0+ICh7XG4gICAgZ2V0XG4gIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGxvYWRhYmxlV2l0aFZhbHVlJDMoZ2V0KGRlcGVuZGVuY3kpKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIHJldHVybiBSZWNvaWxfaXNQcm9taXNlKGV4Y2VwdGlvbikgPyBsb2FkYWJsZVdpdGhQcm9taXNlJDMoZXhjZXB0aW9uKSA6IGxvYWRhYmxlV2l0aEVycm9yJDMoZXhjZXB0aW9uKTtcbiAgICB9XG4gIH1cbn0pO1xudmFyIFJlY29pbF9XYWl0Rm9yID0ge1xuICB3YWl0Rm9yTm9uZSxcbiAgd2FpdEZvckFueSxcbiAgd2FpdEZvckFsbCxcbiAgd2FpdEZvckFsbFNldHRsZWQsXG4gIG5vV2FpdFxufTtcblxuY29uc3Qge1xuICBiYXRjaFVwZGF0ZXM6IGJhdGNoVXBkYXRlcyQzLFxuICBzZXRCYXRjaGVyOiBzZXRCYXRjaGVyJDFcbn0gPSBSZWNvaWxfQmF0Y2hpbmc7XG5cbmNvbnN0IHtcbiAgRGVmYXVsdFZhbHVlOiBEZWZhdWx0VmFsdWUkNFxufSA9IFJlY29pbF9Ob2RlO1xuXG5jb25zdCB7XG4gIFJlY29pbFJvb3Q6IFJlY29pbFJvb3QkMlxufSA9IFJlY29pbF9SZWNvaWxSb290X3JlYWN0O1xuXG5jb25zdCB7XG4gIGlzUmVjb2lsVmFsdWU6IGlzUmVjb2lsVmFsdWUkNVxufSA9IFJlY29pbF9SZWNvaWxWYWx1ZSQxO1xuXG5jb25zdCB7XG4gIHJldGVudGlvblpvbmU6IHJldGVudGlvblpvbmUkMVxufSA9IFJlY29pbF9SZXRlbnRpb25ab25lO1xuXG5jb25zdCB7XG4gIGZyZXNoU25hcHNob3Q6IGZyZXNoU25hcHNob3QkMlxufSA9IFJlY29pbF9TbmFwc2hvdCQxO1xuXG5jb25zdCB7XG4gIHVzZUdvdG9SZWNvaWxTbmFwc2hvdDogdXNlR290b1JlY29pbFNuYXBzaG90JDEsXG4gIHVzZVJlY29pbENhbGxiYWNrOiB1c2VSZWNvaWxDYWxsYmFjayQxLFxuICB1c2VSZWNvaWxTbmFwc2hvdDogdXNlUmVjb2lsU25hcHNob3QkMSxcbiAgdXNlUmVjb2lsU3RhdGU6IHVzZVJlY29pbFN0YXRlJDEsXG4gIHVzZVJlY29pbFN0YXRlTG9hZGFibGU6IHVzZVJlY29pbFN0YXRlTG9hZGFibGUkMSxcbiAgdXNlUmVjb2lsVHJhbnNhY3Rpb25PYnNlcnZlcjogdXNlUmVjb2lsVHJhbnNhY3Rpb25PYnNlcnZlciQxLFxuICB1c2VSZWNvaWxWYWx1ZTogdXNlUmVjb2lsVmFsdWUkMSxcbiAgdXNlUmVjb2lsVmFsdWVMb2FkYWJsZTogdXNlUmVjb2lsVmFsdWVMb2FkYWJsZSQxLFxuICB1c2VSZXNldFJlY29pbFN0YXRlOiB1c2VSZXNldFJlY29pbFN0YXRlJDEsXG4gIHVzZVJldGFpbjogdXNlUmV0YWluJDEsXG4gIHVzZVNldFJlY29pbFN0YXRlOiB1c2VTZXRSZWNvaWxTdGF0ZSQxLFxuICB1c2VTZXRVbnZhbGlkYXRlZEF0b21WYWx1ZXM6IHVzZVNldFVudmFsaWRhdGVkQXRvbVZhbHVlcyQxLFxuICB1c2VUcmFuc2FjdGlvbk9ic2VydmF0aW9uX0RFUFJFQ0FURUQ6IHVzZVRyYW5zYWN0aW9uT2JzZXJ2YXRpb25fREVQUkVDQVRFRCQxXG59ID0gUmVjb2lsX0hvb2tzO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCB7XG4gIG5vV2FpdDogbm9XYWl0JDEsXG4gIHdhaXRGb3JBbGw6IHdhaXRGb3JBbGwkMSxcbiAgd2FpdEZvckFsbFNldHRsZWQ6IHdhaXRGb3JBbGxTZXR0bGVkJDEsXG4gIHdhaXRGb3JBbnk6IHdhaXRGb3JBbnkkMSxcbiAgd2FpdEZvck5vbmU6IHdhaXRGb3JOb25lJDFcbn0gPSBSZWNvaWxfV2FpdEZvcjtcblxudmFyIFJlY29pbF9pbmRleCA9IHtcbiAgLy8gVHlwZXNcbiAgRGVmYXVsdFZhbHVlOiBEZWZhdWx0VmFsdWUkNCxcbiAgLy8gQ29tcG9uZW50c1xuICBSZWNvaWxSb290OiBSZWNvaWxSb290JDIsXG4gIHVzZVJlY29pbEJyaWRnZUFjcm9zc1JlYWN0Um9vdHNfVU5TVEFCTEU6IFJlY29pbF91c2VSZWNvaWxCcmlkZ2VBY3Jvc3NSZWFjdFJvb3RzLFxuICAvLyBSZWNvaWxWYWx1ZXNcbiAgYXRvbTogUmVjb2lsX2F0b20sXG4gIHNlbGVjdG9yOiBSZWNvaWxfc2VsZWN0b3IsXG4gIC8vIE90aGVyIGZhY3Rvcmllc1xuICByZXRlbnRpb25ab25lOiByZXRlbnRpb25ab25lJDEsXG4gIC8vIENvbnZlbmllbmNlIFJlY29pbFZhbHVlc1xuICBhdG9tRmFtaWx5OiBSZWNvaWxfYXRvbUZhbWlseSxcbiAgc2VsZWN0b3JGYW1pbHk6IFJlY29pbF9zZWxlY3RvckZhbWlseSxcbiAgY29uc3RTZWxlY3RvcjogUmVjb2lsX2NvbnN0U2VsZWN0b3IsXG4gIGVycm9yU2VsZWN0b3I6IFJlY29pbF9lcnJvclNlbGVjdG9yLFxuICByZWFkT25seVNlbGVjdG9yOiBSZWNvaWxfcmVhZE9ubHlTZWxlY3RvcixcbiAgLy8gSG9va3MgdGhhdCBhY2NlcHQgUmVjb2lsVmFsdWVzXG4gIHVzZVJlY29pbFZhbHVlOiB1c2VSZWNvaWxWYWx1ZSQxLFxuICB1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlOiB1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlJDEsXG4gIHVzZVJlY29pbFN0YXRlOiB1c2VSZWNvaWxTdGF0ZSQxLFxuICB1c2VSZWNvaWxTdGF0ZUxvYWRhYmxlOiB1c2VSZWNvaWxTdGF0ZUxvYWRhYmxlJDEsXG4gIHVzZVNldFJlY29pbFN0YXRlOiB1c2VTZXRSZWNvaWxTdGF0ZSQxLFxuICB1c2VSZXNldFJlY29pbFN0YXRlOiB1c2VSZXNldFJlY29pbFN0YXRlJDEsXG4gIHVzZUdldFJlY29pbFZhbHVlSW5mb19VTlNUQUJMRTogUmVjb2lsX3VzZUdldFJlY29pbFZhbHVlSW5mbyxcbiAgdXNlUmV0YWluOiB1c2VSZXRhaW4kMSxcbiAgLy8gSG9va3MgZm9yIGFzeW5jaHJvbm91cyBSZWNvaWxcbiAgdXNlUmVjb2lsQ2FsbGJhY2s6IHVzZVJlY29pbENhbGxiYWNrJDEsXG4gIC8vIEhvb2tzIGZvciBTbmFwc2hvdHNcbiAgdXNlR290b1JlY29pbFNuYXBzaG90OiB1c2VHb3RvUmVjb2lsU25hcHNob3QkMSxcbiAgdXNlUmVjb2lsU25hcHNob3Q6IHVzZVJlY29pbFNuYXBzaG90JDEsXG4gIHVzZVJlY29pbFRyYW5zYWN0aW9uT2JzZXJ2ZXJfVU5TVEFCTEU6IHVzZVJlY29pbFRyYW5zYWN0aW9uT2JzZXJ2ZXIkMSxcbiAgdXNlVHJhbnNhY3Rpb25PYnNlcnZhdGlvbl9VTlNUQUJMRTogdXNlVHJhbnNhY3Rpb25PYnNlcnZhdGlvbl9ERVBSRUNBVEVEJDEsXG4gIHVzZVNldFVudmFsaWRhdGVkQXRvbVZhbHVlc19VTlNUQUJMRTogdXNlU2V0VW52YWxpZGF0ZWRBdG9tVmFsdWVzJDEsXG4gIC8vIENvbmN1cnJlbmN5IEhlbHBlcnNcbiAgbm9XYWl0OiBub1dhaXQkMSxcbiAgd2FpdEZvck5vbmU6IHdhaXRGb3JOb25lJDEsXG4gIHdhaXRGb3JBbnk6IHdhaXRGb3JBbnkkMSxcbiAgd2FpdEZvckFsbDogd2FpdEZvckFsbCQxLFxuICB3YWl0Rm9yQWxsU2V0dGxlZDogd2FpdEZvckFsbFNldHRsZWQkMSxcbiAgLy8gT3RoZXIgZnVuY3Rpb25zXG4gIGlzUmVjb2lsVmFsdWU6IGlzUmVjb2lsVmFsdWUkNSxcbiAgLy8gQmF0Y2hpbmdcbiAgYmF0Y2hVcGRhdGVzOiBiYXRjaFVwZGF0ZXMkMyxcbiAgc2V0QmF0Y2hlcjogc2V0QmF0Y2hlciQxLFxuICAvLyBTbmFwc2hvdCBVdGlsc1xuICBzbmFwc2hvdF9VTlNUQUJMRTogZnJlc2hTbmFwc2hvdCQyXG59O1xudmFyIFJlY29pbF9pbmRleF8xID0gUmVjb2lsX2luZGV4LkRlZmF1bHRWYWx1ZTtcbnZhciBSZWNvaWxfaW5kZXhfMiA9IFJlY29pbF9pbmRleC5SZWNvaWxSb290O1xudmFyIFJlY29pbF9pbmRleF8zID0gUmVjb2lsX2luZGV4LnVzZVJlY29pbEJyaWRnZUFjcm9zc1JlYWN0Um9vdHNfVU5TVEFCTEU7XG52YXIgUmVjb2lsX2luZGV4XzQgPSBSZWNvaWxfaW5kZXguYXRvbTtcbnZhciBSZWNvaWxfaW5kZXhfNSA9IFJlY29pbF9pbmRleC5zZWxlY3RvcjtcbnZhciBSZWNvaWxfaW5kZXhfNiA9IFJlY29pbF9pbmRleC5yZXRlbnRpb25ab25lO1xudmFyIFJlY29pbF9pbmRleF83ID0gUmVjb2lsX2luZGV4LmF0b21GYW1pbHk7XG52YXIgUmVjb2lsX2luZGV4XzggPSBSZWNvaWxfaW5kZXguc2VsZWN0b3JGYW1pbHk7XG52YXIgUmVjb2lsX2luZGV4XzkgPSBSZWNvaWxfaW5kZXguY29uc3RTZWxlY3RvcjtcbnZhciBSZWNvaWxfaW5kZXhfMTAgPSBSZWNvaWxfaW5kZXguZXJyb3JTZWxlY3RvcjtcbnZhciBSZWNvaWxfaW5kZXhfMTEgPSBSZWNvaWxfaW5kZXgucmVhZE9ubHlTZWxlY3RvcjtcbnZhciBSZWNvaWxfaW5kZXhfMTIgPSBSZWNvaWxfaW5kZXgudXNlUmVjb2lsVmFsdWU7XG52YXIgUmVjb2lsX2luZGV4XzEzID0gUmVjb2lsX2luZGV4LnVzZVJlY29pbFZhbHVlTG9hZGFibGU7XG52YXIgUmVjb2lsX2luZGV4XzE0ID0gUmVjb2lsX2luZGV4LnVzZVJlY29pbFN0YXRlO1xudmFyIFJlY29pbF9pbmRleF8xNSA9IFJlY29pbF9pbmRleC51c2VSZWNvaWxTdGF0ZUxvYWRhYmxlO1xudmFyIFJlY29pbF9pbmRleF8xNiA9IFJlY29pbF9pbmRleC51c2VTZXRSZWNvaWxTdGF0ZTtcbnZhciBSZWNvaWxfaW5kZXhfMTcgPSBSZWNvaWxfaW5kZXgudXNlUmVzZXRSZWNvaWxTdGF0ZTtcbnZhciBSZWNvaWxfaW5kZXhfMTggPSBSZWNvaWxfaW5kZXgudXNlR2V0UmVjb2lsVmFsdWVJbmZvX1VOU1RBQkxFO1xudmFyIFJlY29pbF9pbmRleF8xOSA9IFJlY29pbF9pbmRleC51c2VSZXRhaW47XG52YXIgUmVjb2lsX2luZGV4XzIwID0gUmVjb2lsX2luZGV4LnVzZVJlY29pbENhbGxiYWNrO1xudmFyIFJlY29pbF9pbmRleF8yMSA9IFJlY29pbF9pbmRleC51c2VHb3RvUmVjb2lsU25hcHNob3Q7XG52YXIgUmVjb2lsX2luZGV4XzIyID0gUmVjb2lsX2luZGV4LnVzZVJlY29pbFNuYXBzaG90O1xudmFyIFJlY29pbF9pbmRleF8yMyA9IFJlY29pbF9pbmRleC51c2VSZWNvaWxUcmFuc2FjdGlvbk9ic2VydmVyX1VOU1RBQkxFO1xudmFyIFJlY29pbF9pbmRleF8yNCA9IFJlY29pbF9pbmRleC51c2VUcmFuc2FjdGlvbk9ic2VydmF0aW9uX1VOU1RBQkxFO1xudmFyIFJlY29pbF9pbmRleF8yNSA9IFJlY29pbF9pbmRleC51c2VTZXRVbnZhbGlkYXRlZEF0b21WYWx1ZXNfVU5TVEFCTEU7XG52YXIgUmVjb2lsX2luZGV4XzI2ID0gUmVjb2lsX2luZGV4Lm5vV2FpdDtcbnZhciBSZWNvaWxfaW5kZXhfMjcgPSBSZWNvaWxfaW5kZXgud2FpdEZvck5vbmU7XG52YXIgUmVjb2lsX2luZGV4XzI4ID0gUmVjb2lsX2luZGV4LndhaXRGb3JBbnk7XG52YXIgUmVjb2lsX2luZGV4XzI5ID0gUmVjb2lsX2luZGV4LndhaXRGb3JBbGw7XG52YXIgUmVjb2lsX2luZGV4XzMwID0gUmVjb2lsX2luZGV4LndhaXRGb3JBbGxTZXR0bGVkO1xudmFyIFJlY29pbF9pbmRleF8zMSA9IFJlY29pbF9pbmRleC5pc1JlY29pbFZhbHVlO1xudmFyIFJlY29pbF9pbmRleF8zMiA9IFJlY29pbF9pbmRleC5iYXRjaFVwZGF0ZXM7XG52YXIgUmVjb2lsX2luZGV4XzMzID0gUmVjb2lsX2luZGV4LnNldEJhdGNoZXI7XG52YXIgUmVjb2lsX2luZGV4XzM0ID0gUmVjb2lsX2luZGV4LnNuYXBzaG90X1VOU1RBQkxFO1xuXG5leHBvcnQgZGVmYXVsdCBSZWNvaWxfaW5kZXg7XG5leHBvcnQgeyBSZWNvaWxfaW5kZXhfMSBhcyBEZWZhdWx0VmFsdWUsIFJlY29pbF9pbmRleF8yIGFzIFJlY29pbFJvb3QsIFJlY29pbF9pbmRleF80IGFzIGF0b20sIFJlY29pbF9pbmRleF83IGFzIGF0b21GYW1pbHksIFJlY29pbF9pbmRleF8zMiBhcyBiYXRjaFVwZGF0ZXMsIFJlY29pbF9pbmRleF85IGFzIGNvbnN0U2VsZWN0b3IsIFJlY29pbF9pbmRleF8xMCBhcyBlcnJvclNlbGVjdG9yLCBSZWNvaWxfaW5kZXhfMzEgYXMgaXNSZWNvaWxWYWx1ZSwgUmVjb2lsX2luZGV4XzI2IGFzIG5vV2FpdCwgUmVjb2lsX2luZGV4XzExIGFzIHJlYWRPbmx5U2VsZWN0b3IsIFJlY29pbF9pbmRleF82IGFzIHJldGVudGlvblpvbmUsIFJlY29pbF9pbmRleF81IGFzIHNlbGVjdG9yLCBSZWNvaWxfaW5kZXhfOCBhcyBzZWxlY3RvckZhbWlseSwgUmVjb2lsX2luZGV4XzMzIGFzIHNldEJhdGNoZXIsIFJlY29pbF9pbmRleF8zNCBhcyBzbmFwc2hvdF9VTlNUQUJMRSwgUmVjb2lsX2luZGV4XzE4IGFzIHVzZUdldFJlY29pbFZhbHVlSW5mb19VTlNUQUJMRSwgUmVjb2lsX2luZGV4XzIxIGFzIHVzZUdvdG9SZWNvaWxTbmFwc2hvdCwgUmVjb2lsX2luZGV4XzMgYXMgdXNlUmVjb2lsQnJpZGdlQWNyb3NzUmVhY3RSb290c19VTlNUQUJMRSwgUmVjb2lsX2luZGV4XzIwIGFzIHVzZVJlY29pbENhbGxiYWNrLCBSZWNvaWxfaW5kZXhfMjIgYXMgdXNlUmVjb2lsU25hcHNob3QsIFJlY29pbF9pbmRleF8xNCBhcyB1c2VSZWNvaWxTdGF0ZSwgUmVjb2lsX2luZGV4XzE1IGFzIHVzZVJlY29pbFN0YXRlTG9hZGFibGUsIFJlY29pbF9pbmRleF8yMyBhcyB1c2VSZWNvaWxUcmFuc2FjdGlvbk9ic2VydmVyX1VOU1RBQkxFLCBSZWNvaWxfaW5kZXhfMTIgYXMgdXNlUmVjb2lsVmFsdWUsIFJlY29pbF9pbmRleF8xMyBhcyB1c2VSZWNvaWxWYWx1ZUxvYWRhYmxlLCBSZWNvaWxfaW5kZXhfMTcgYXMgdXNlUmVzZXRSZWNvaWxTdGF0ZSwgUmVjb2lsX2luZGV4XzE5IGFzIHVzZVJldGFpbiwgUmVjb2lsX2luZGV4XzE2IGFzIHVzZVNldFJlY29pbFN0YXRlLCBSZWNvaWxfaW5kZXhfMjUgYXMgdXNlU2V0VW52YWxpZGF0ZWRBdG9tVmFsdWVzX1VOU1RBQkxFLCBSZWNvaWxfaW5kZXhfMjQgYXMgdXNlVHJhbnNhY3Rpb25PYnNlcnZhdGlvbl9VTlNUQUJMRSwgUmVjb2lsX2luZGV4XzI5IGFzIHdhaXRGb3JBbGwsIFJlY29pbF9pbmRleF8zMCBhcyB3YWl0Rm9yQWxsU2V0dGxlZCwgUmVjb2lsX2luZGV4XzI4IGFzIHdhaXRGb3JBbnksIFJlY29pbF9pbmRleF8yNyBhcyB3YWl0Rm9yTm9uZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==