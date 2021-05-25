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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\posts\\RelatedList.js";

/**
 * 연관 리스트 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.24 Mon 01:08:21
 */

function RelatedList(_ref) {
  var _this = this;

  var list = _ref.list;
  var classes = getStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
    component: "article",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
      component: "h1",
      className: classes.title,
      children: "\uC5F0\uAD00 \uAC8C\uC2DC\uBB3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
      className: classes.gridlist_wrapper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridList, {
        cols: 2.5,
        className: classes.gridlist,
        children: list.map(function (element, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTile, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: element.coverImage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTileBar, {
              title: element.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 8
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_c = RelatedList;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(function (theme) {
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
        transform: "translateZ(0)"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aXRsZSIsImdyaWRsaXN0X3dyYXBwZXIiLCJncmlkbGlzdCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImNvdmVySW1hZ2UiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleFdyYXAiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxXQUFULE9BQ2Y7QUFBQTs7QUFBQSxNQURzQ0MsSUFDdEMsUUFEc0NBLElBQ3RDO0FBQ0MsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0MsOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNDLDhEQUFDLHlEQUFEO0FBQVksZUFBUyxFQUFDLElBQXRCO0FBQTJCLGVBQVMsRUFBRUQsT0FBTyxDQUFDRSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0MsOERBQUMsa0RBQUQ7QUFBSyxlQUFTLEVBQUVGLE9BQU8sQ0FBQ0csZ0JBQXhCO0FBQUEsNkJBQ0MsOERBQUMsdURBQUQ7QUFBVSxZQUFJLEVBQUUsR0FBaEI7QUFBcUIsaUJBQVMsRUFBRUgsT0FBTyxDQUFDSSxRQUF4QztBQUFBLGtCQUNFTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw4QkFDVCw4REFBQywyREFBRDtBQUFBLG9DQUNDO0FBQUssaUJBQUcsRUFBRUQsT0FBTyxDQUFDRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBR0MsOERBQUMsOERBQUQ7QUFBaUIsbUJBQUssRUFBRUYsT0FBTyxDQUFDSjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhEO0FBQUEsYUFBbUJLLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBM0J3QlQsVzs7QUE0QnhCLFNBQVNHLFNBQVQsR0FDQTtBQUNDLFNBQU9RLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JSLFdBQUssRUFBRTtBQUNOUyxnQkFBUSxFQUFFLEtBREo7QUFFTkMsa0JBQVUsRUFBRTtBQUZOLE9BRHNCO0FBSzdCVCxzQkFBZ0IsRUFBRTtBQUNqQlUsaUJBQVMsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURNO0FBRWpCQyxvQkFBWSxFQUFFTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRkcsT0FMVztBQVM3QlYsY0FBUSxFQUFFO0FBQ1RZLGdCQUFRLEVBQUUsUUFERDtBQUVUQyxpQkFBUyxFQUFFO0FBRkY7QUFUbUIsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBY0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLmZkNzI2MWMyYTRiOTkwZjliOGIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Jew6rSAIOumrOyKpO2KuCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4yNCBNb24gMDE6MDg6MjFcclxuICovXHJcblxyXG5pbXBvcnQgeyBCb3gsIEdyaWRMaXN0LCBHcmlkTGlzdFRpbGUsIEdyaWRMaXN0VGlsZUJhciwgTGluaywgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVsYXRlZExpc3QoeyBsaXN0IH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IGNvbXBvbmVudD1cImFydGljbGVcIj5cclxuXHRcdFx0PFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PuyXsOq0gCDqsozsi5zrrLw8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHQ8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdF93cmFwcGVyfT5cclxuXHRcdFx0XHQ8R3JpZExpc3QgY29scz17Mi41fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZGxpc3R9PlxyXG5cdFx0XHRcdFx0e2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtlbGVtZW50LmNvdmVySW1hZ2V9IC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGVCYXIgdGl0bGU9e2VsZW1lbnQudGl0bGV9IC8+XHJcblx0XHRcdFx0XHRcdDwvR3JpZExpc3RUaWxlPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9HcmlkTGlzdD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0dGl0bGU6IHtcclxuXHRcdFx0Zm9udFNpemU6IFwiMmVtXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0Z3JpZGxpc3Rfd3JhcHBlcjoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKVxyXG5cdFx0fSxcclxuXHRcdGdyaWRsaXN0OiB7XHJcblx0XHRcdGZsZXhXcmFwOiBcIm5vd3JhcFwiLFxyXG5cdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwKVwiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9