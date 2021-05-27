self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/global/SemanticTypo.js":
/*!*******************************************!*\
  !*** ./components/global/SemanticTypo.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SemanticTypo; }
/* harmony export */ });
/* harmony import */ var C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\global\\SemanticTypo.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_psj17_source_Github_Kapoo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 반응성 타이포그래피 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.27 Thu 10:45:44
 */

function SemanticTypo(props, children) {
  _s();

  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("sm"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, _objectSpread(_objectSpread({
    variant: isMobile ? props.down : props.up
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_s(SemanticTypo, "25T5RqnpHPZx1hYuwXS/vSFcc1w=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery];
});

_c = SemanticTypo;

var _c;

$RefreshReg$(_c, "SemanticTypo");

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

/***/ "./components/section/posts/PostItem.js":
/*!**********************************************!*\
  !*** ./components/section/posts/PostItem.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\posts\\PostItem.js",
    _s = $RefreshSig$();

/**
 * 게시글 아이템 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.15 Sat 20:41:08
 */
// 라이브러리 모듈






/**
 * 게시글 아이템 JSX 반환 함수
 *
 * @param {JSON} item: 게시글 아이템
 * @param {int} index: 순번
 *
 * @returns {JSX} JSX 객체
 */

function PostItem(_ref) {
  _s();

  var _item$tag,
      _this = this;

  var item = _ref.item,
      index = _ref.index;
  var classes = getStyles(index, item.coverImage);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)(theme.breakpoints.down("sm"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
    component: "article",
    item: true,
    xs: 12,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_reveal__WEBPACK_IMPORTED_MODULE_1__.Fade, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ButtonBase, {
        className: classes.post_button,
        onClick: function onClick() {
          return router.push("/posts/".concat(item.slug));
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          spacing: 0,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            className: (classes.image_wrap, "wrapper"),
            item: true,
            xs: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              className: classes.post_image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
            item: true,
            xs: 8,
            className: classes.post_content,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
              container: true,
              direction: "row",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.LocalOffer, {
                className: classes.post_category
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
                up: "h6",
                down: "body1",
                color: "primary",
                className: classes.post_category_typo,
                onClick: function onClick(e) {
                  e.stopPropagation();
                  router.push({
                    pathname: "/posts",
                    query: {
                      page: 1,
                      category: e.target.innerText
                    }
                  });
                },
                children: item.category
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: isMobile ? "h6" : "h4",
              className: classes.post_title,
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
              variant: "caption",
              className: classes.post_desc,
              children: item.excerpt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
              children: (_item$tag = item.tag) === null || _item$tag === void 0 ? void 0 : _item$tag.map(function (sub, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Chip, {
                  color: "primary",
                  label: "# ".concat(sub),
                  className: classes.post_tag,
                  onClick: function onClick(e) {
                    return e.stopPropagation();
                  }
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 40
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @param {int} index: 순번
 * @param {String} url: 이미지 URL
 *
 * @returns {JSON} 스타일 객체
 */

_s(PostItem, "uSFaqFEdV3H/urIJZGrfaXN3F4w=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery];
});

_c = PostItem;

function getStyles(index, url) {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      zoom: {
        transitionDelay: "".concat(index * 150, "ms")
      },
      post_button: {
        textAlign: "initial",
        width: "100%",
        "& .wrapper": {
          overflow: "hidden"
        },
        "&:hover .wrapper > div": {
          transform: "scale(1.2)",
          transition: "0.5s"
        }
      },
      post_image: {
        height: "303.98px",
        backgroundImage: "url(".concat(url, ")"),
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: "scale(1)",
        transition: "0.5s"
      },
      post_content: {
        padding: "7px 20px 7px 20px",
        display: "flex",
        flexDirection: "column"
      },
      post_category: {
        color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_6__.red[500],
        marginRight: 10
      },
      post_category_typo: {
        "&:hover": {
          textDecoration: "underline"
        }
      },
      post_title: {
        paddingBottom: theme.spacing(2),
        fontWeight: "bold"
      },
      post_desc: {
        flexGrow: 1
      },
      post_tag: {
        marginLeft: 3,
        marginRight: 3
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "PostItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nbG9iYWwvU2VtYW50aWNUeXBvLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb24vcG9zdHMvUG9zdEl0ZW0uanMiXSwibmFtZXMiOlsiU2VtYW50aWNUeXBvIiwicHJvcHMiLCJjaGlsZHJlbiIsInRoZW1lIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJ1cCIsIlBvc3RJdGVtIiwiaXRlbSIsImluZGV4IiwiY2xhc3NlcyIsImdldFN0eWxlcyIsImNvdmVySW1hZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0X2J1dHRvbiIsInB1c2giLCJzbHVnIiwiaW1hZ2Vfd3JhcCIsInBvc3RfaW1hZ2UiLCJwb3N0X2NvbnRlbnQiLCJwb3N0X2NhdGVnb3J5IiwicG9zdF9jYXRlZ29yeV90eXBvIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInBhdGhuYW1lIiwicXVlcnkiLCJwYWdlIiwiY2F0ZWdvcnkiLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJwb3N0X3RpdGxlIiwidGl0bGUiLCJwb3N0X2Rlc2MiLCJleGNlcnB0IiwidGFnIiwibWFwIiwic3ViIiwicG9zdF90YWciLCJ1cmwiLCJtYWtlU3R5bGVzIiwiem9vbSIsInRyYW5zaXRpb25EZWxheSIsInRleHRBbGlnbiIsIndpZHRoIiwib3ZlcmZsb3ciLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciIsInJlZCIsIm1hcmdpblJpZ2h0IiwidGV4dERlY29yYXRpb24iLCJwYWRkaW5nQm90dG9tIiwic3BhY2luZyIsImZvbnRXZWlnaHQiLCJmbGV4R3JvdyIsIm1hcmdpbkxlZnQiXSwi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O0FBR2JDLHFCQUFhLEVBQUU7QUFIRixPQXZCZTtBQTRCN0JqQyxtQkFBYSxFQUFFO0FBQ2RrQyxhQUFLLEVBQUVDLDhEQURPO0FBRWRDLG1CQUFXLEVBQUU7QUFGQyxPQTVCYztBQWdDN0JuQyx3QkFBa0IsRUFBRTtBQUNuQixtQkFBVztBQUNWb0Msd0JBQWMsRUFBRTtBQUROO0FBRFEsT0FoQ1M7QUFxQzdCM0IsZ0JBQVUsRUFBRTtBQUNYNEIscUJBQWEsRUFBRTNELEtBQUssQ0FBQzRELE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFWEMsa0JBQVUsRUFBRTtBQUZELE9BckNpQjtBQXlDN0I1QixlQUFTLEVBQUU7QUFDVjZCLGdCQUFRLEVBQUU7QUFEQSxPQXpDa0I7QUE0QzdCeEIsY0FBUSxFQUFFO0FBQ1R5QixrQkFBVSxFQUFFLENBREg7QUFFVE4sbUJBQVcsRUFBRTtBQUZKO0FBNUNtQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFpREEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODUyNjdlNGU1MjU5M2YyYzk2YWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDrsJjsnZHshLEg7YOA7J207Y+s6re4656Y7ZS8IOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjI3IFRodSAxMDo0NTo0NFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZW1hbnRpY1R5cG8ocHJvcHMsIGNoaWxkcmVuKVxyXG57XHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRyZXR1cm4gPFR5cG9ncmFwaHkgdmFyaWFudD17aXNNb2JpbGUgPyBwcm9wcy5kb3duIDogcHJvcHMudXB9IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT47XHJcbn0iLCIvKipcclxuICog6rKM7Iuc6riAIOyVhOydtO2FnCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xNSBTYXQgMjA6NDE6MDhcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tIFwicmVhY3QtcmV2ZWFsXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbkJhc2UsIENoaXAsIEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHksIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcclxuaW1wb3J0IHsgTG9jYWxPZmZlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIOqyjOyLnOq4gCDslYTsnbTthZwgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtKU09OfSBpdGVtOiDqsozsi5zquIAg7JWE7J207YWcXHJcbiAqIEBwYXJhbSB7aW50fSBpbmRleDog7Iic67KIXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RJdGVtKHsgaXRlbSwgaW5kZXggfSlcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoaW5kZXgsIGl0ZW0uY292ZXJJbWFnZSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8R3JpZCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgaXRlbSB4cz17MTJ9PlxyXG5cdFx0XHQ8RmFkZT5cclxuXHRcdFx0XHQ8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMucG9zdF9idXR0b259IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcG9zdHMvJHtpdGVtLnNsdWd9YCl9PlxyXG5cdFx0XHRcdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxyXG5cdFx0XHRcdFx0XHQ8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2Vfd3JhcCwgXCJ3cmFwcGVyXCJ9IGl0ZW0geHM9ezR9PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnBvc3RfaW1hZ2V9IC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0geHM9ezh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0X2NvbnRlbnR9PlxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TG9jYWxPZmZlciBjbGFzc05hbWU9e2NsYXNzZXMucG9zdF9jYXRlZ29yeX0gLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDZcIiBkb3duPVwiYm9keTFcIiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMucG9zdF9jYXRlZ29yeV90eXBvfSBvbkNsaWNrPXsoZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRobmFtZTogXCIvcG9zdHNcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZTogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhdGVnb3J5OiBlLnRhcmdldC5pbm5lclRleHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDZcIiA6IFwiaDRcIn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBvc3RfdGl0bGV9PntpdGVtLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0X2Rlc2N9PntpdGVtLmV4Y2VycHR9PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2l0ZW0udGFnPy5tYXAoKHN1YiwgaW5kZXgpID0+IDxDaGlwIGtleT17aW5kZXh9IGNvbG9yPVwicHJpbWFyeVwiIGxhYmVsPXtgIyAke3N1Yn1gfSBjbGFzc05hbWU9e2NsYXNzZXMucG9zdF90YWd9IG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfSAvPil9XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0XHQ8L0J1dHRvbkJhc2U+XHJcblx0XHRcdDwvRmFkZT5cclxuXHRcdDwvR3JpZD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7aW50fSBpbmRleDog7Iic67KIXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmw6IOydtOuvuOyngCBVUkxcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcyhpbmRleCwgdXJsKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0em9vbToge1xyXG5cdFx0XHR0cmFuc2l0aW9uRGVsYXk6IGAke2luZGV4ICogMTUwfW1zYFxyXG5cdFx0fSxcclxuXHRcdHBvc3RfYnV0dG9uOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJpbml0aWFsXCIsXHJcblx0XHRcdHdpZHRoOiBcIjEwMCVcIixcclxuXHRcdFx0XCImIC53cmFwcGVyXCI6IHtcclxuXHRcdFx0XHRvdmVyZmxvdzogXCJoaWRkZW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcIiY6aG92ZXIgLndyYXBwZXIgPiBkaXZcIjoge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogXCJzY2FsZSgxLjIpXCIsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHBvc3RfaW1hZ2U6IHtcclxuXHRcdFx0aGVpZ2h0OiBcIjMwMy45OHB4XCIsXHJcblx0XHRcdGJhY2tncm91bmRJbWFnZTogYHVybCgke3VybH0pYCxcclxuXHRcdFx0YmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG5cdFx0XHR0cmFuc2Zvcm06IFwic2NhbGUoMSlcIixcclxuXHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdH0sXHJcblx0XHRwb3N0X2NvbnRlbnQ6IHtcclxuXHRcdFx0cGFkZGluZzogXCI3cHggMjBweCA3cHggMjBweFwiLFxyXG5cdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcclxuXHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIlxyXG5cdFx0fSxcclxuXHRcdHBvc3RfY2F0ZWdvcnk6IHtcclxuXHRcdFx0Y29sb3I6IHJlZFs1MDBdLFxyXG5cdFx0XHRtYXJnaW5SaWdodDogMTBcclxuXHRcdH0sXHJcblx0XHRwb3N0X2NhdGVnb3J5X3R5cG86IHtcclxuXHRcdFx0XCImOmhvdmVyXCI6IHtcclxuXHRcdFx0XHR0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cG9zdF90aXRsZToge1xyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdHBvc3RfZGVzYzoge1xyXG5cdFx0XHRmbGV4R3JvdzogMVxyXG5cdFx0fSxcclxuXHRcdHBvc3RfdGFnOiB7XHJcblx0XHRcdG1hcmdpbkxlZnQ6IDMsXHJcblx0XHRcdG1hcmdpblJpZ2h0OiAzXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9