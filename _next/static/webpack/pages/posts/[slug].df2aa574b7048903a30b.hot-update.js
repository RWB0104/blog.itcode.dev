self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/section/posts/RelatedList.js":
/*!*************************************************!*\
  !*** ./components/section/posts/RelatedList.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RelatedList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\posts\\RelatedList.js",
    _s = $RefreshSig$();

/**
 * 연관 리스트 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.24 Mon 01:08:21
 */


/**
 * 연관 리스트 JSX 반환 함수
 *
 * @param {JSON[]} 컨텐츠 리스트
 *
 * @returns {JSX} JSX 객체
 */

function RelatedList(_ref) {
  _s();

  var _this = this;

  var list = _ref.list;
  var classes = getStyles();
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(theme.breakpoints.down("sm"));
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "article",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      component: "h1",
      className: classes.title,
      children: "\u25CE \uC5F0\uAD00 \uAC8C\uC2DC\uBB3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      className: classes.gridlist_wrapper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.GridList, {
        cols: isMobile ? 1.5 : 2.5,
        className: classes.gridlist,
        children: list.map(function (element, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.GridListTile, {
            className: classes.griditem,
            onClick: function onClick() {
              return router.push("/posts/".concat(element.slug));
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: element.coverImage,
              className: classes.img
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.GridListTileBar, {
              title: element.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 8
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(RelatedList, "wJfmFB7sdP7vULpkd22dVjy9Jo8=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useTheme, _material_ui_core__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = RelatedList;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
    return {
      title: {
        fontSize: "2em",
        fontWeight: "bold"
      },
      gridlist_wrapper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
      },
      gridlist: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
        cursor: "pointer"
      },
      griditem: {
        "&:hover img": {
          transform: "scale(1.2)",
          transition: "0.5s"
        },
        "& .MuiGridListTileBar-title": {
          transition: "0.5s"
        },
        "&:hover .MuiGridListTileBar-title": {
          color: theme.palette.primary.light,
          transition: "0.5s"
        }
      },
      img: {
        transition: "0.5s"
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "RelatedList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwicm91dGVyIiwidXNlUm91dGVyIiwidGl0bGUiLCJncmlkbGlzdF93cmFwcGVyIiwiZ3JpZGxpc3QiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJncmlkaXRlbSIsInB1c2giLCJzbHVnIiwiY292ZXJJbWFnZSIsImltZyIsIm1ha2VTdHlsZXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleFdyYXAiLCJ0cmFuc2Zvcm0iLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwiY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsV0FBVCxPQUNmO0FBQUE7O0FBQUE7O0FBQUEsTUFEc0NDLElBQ3RDLFFBRHNDQSxJQUN0QztBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsMkRBQVEsRUFBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxzQkFDQyw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0MsOERBQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBMkIsZUFBUyxFQUFFVCxPQUFPLENBQUNVLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRVYsT0FBTyxDQUFDVyxnQkFBeEI7QUFBQSw2QkFDQyw4REFBQyx1REFBRDtBQUFVLFlBQUksRUFBRVAsUUFBUSxHQUFHLEdBQUgsR0FBUyxHQUFqQztBQUFzQyxpQkFBUyxFQUFFSixPQUFPLENBQUNZLFFBQXpEO0FBQUEsa0JBQ0ViLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDhCQUNULDhEQUFDLDJEQUFEO0FBQTBCLHFCQUFTLEVBQUVmLE9BQU8sQ0FBQ2dCLFFBQTdDO0FBQXVELG1CQUFPLEVBQUU7QUFBQSxxQkFBTVIsTUFBTSxDQUFDUyxJQUFQLGtCQUFzQkgsT0FBTyxDQUFDSSxJQUE5QixFQUFOO0FBQUEsYUFBaEU7QUFBQSxvQ0FDQztBQUFLLGlCQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssVUFBbEI7QUFBOEIsdUJBQVMsRUFBRW5CLE9BQU8sQ0FBQ29CO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFHQyw4REFBQyw4REFBRDtBQUFpQixtQkFBSyxFQUFFTixPQUFPLENBQUNKO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQ7QUFBQSxhQUFtQkssS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUJBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FoQ3dCakIsVztVQUlUSyx1RCxFQUNHRSw0RCxFQUVGSSxrRDs7O0tBUFFYLFc7O0FBaUN4QixTQUFTRyxTQUFULEdBQ0E7QUFDQyxTQUFPb0IsNkRBQVUsQ0FBQyxVQUFDbkIsS0FBRDtBQUFBLFdBQVk7QUFDN0JRLFdBQUssRUFBRTtBQUNOWSxnQkFBUSxFQUFFLEtBREo7QUFFTkMsa0JBQVUsRUFBRTtBQUZOLE9BRHNCO0FBSzdCWixzQkFBZ0IsRUFBRTtBQUNqQmEsaUJBQVMsRUFBRXRCLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFakJDLG9CQUFZLEVBQUV4QixLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZDtBQUZHLE9BTFc7QUFTN0JiLGNBQVEsRUFBRTtBQUNUZSxnQkFBUSxFQUFFLFFBREQ7QUFFVEMsaUJBQVMsRUFBRSxlQUZGO0FBR1RDLGNBQU0sRUFBRTtBQUhDLE9BVG1CO0FBYzdCYixjQUFRLEVBQUU7QUFDVCx1QkFBZTtBQUNkWSxtQkFBUyxFQUFFLFlBREc7QUFFZEUsb0JBQVUsRUFBRTtBQUZFLFNBRE47QUFLVCx1Q0FBK0I7QUFDOUJBLG9CQUFVLEVBQUU7QUFEa0IsU0FMdEI7QUFRVCw2Q0FBcUM7QUFDcENDLGVBQUssRUFBRTdCLEtBQUssQ0FBQzhCLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsS0FETztBQUVwQ0osb0JBQVUsRUFBRTtBQUZ3QjtBQVI1QixPQWRtQjtBQTJCN0JWLFNBQUcsRUFBRTtBQUNKVSxrQkFBVSxFQUFFO0FBRFI7QUEzQndCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQStCQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uZGYyYWE1NzRiNzA0ODkwM2EzMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsl7DqtIAg66as7Iqk7Yq4IOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjI0IE1vbiAwMTowODoyMVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJveCwgR3JpZExpc3QsIEdyaWRMaXN0VGlsZSwgR3JpZExpc3RUaWxlQmFyLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDsl7DqtIAg66as7Iqk7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNPTltdfSDsu6jthZDsuKAg66as7Iqk7Yq4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF0ZWRMaXN0KHsgbGlzdCB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCI+XHJcblx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT7il44g7Jew6rSAIOqyjOyLnOusvDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRsaXN0X3dyYXBwZXJ9PlxyXG5cdFx0XHRcdDxHcmlkTGlzdCBjb2xzPXtpc01vYmlsZSA/IDEuNSA6IDIuNX0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRsaXN0fT5cclxuXHRcdFx0XHRcdHtsaXN0Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZGl0ZW19IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcG9zdHMvJHtlbGVtZW50LnNsdWd9YCl9PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtlbGVtZW50LmNvdmVySW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGVCYXIgdGl0bGU9e2VsZW1lbnQudGl0bGV9IC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZExpc3RUaWxlPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9HcmlkTGlzdD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0Zm9udFNpemU6IFwiMmVtXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0Z3JpZGxpc3Rfd3JhcHBlcjoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKVxyXG5cdFx0fSxcclxuXHRcdGdyaWRsaXN0OiB7XHJcblx0XHRcdGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxyXG5cdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwKVwiLFxyXG5cdFx0XHRjdXJzb3I6IFwicG9pbnRlclwiXHJcblx0XHR9LFxyXG5cdFx0Z3JpZGl0ZW06IHtcclxuXHRcdFx0XCImOmhvdmVyIGltZ1wiOiB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBcInNjYWxlKDEuMilcIixcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcIiYgLk11aUdyaWRMaXN0VGlsZUJhci10aXRsZVwiOiB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCImOmhvdmVyIC5NdWlHcmlkTGlzdFRpbGVCYXItdGl0bGVcIjoge1xyXG5cdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGltZzoge1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==