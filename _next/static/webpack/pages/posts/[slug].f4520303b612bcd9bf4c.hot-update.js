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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridList, {
      cols: 2.5,
      className: classes.gridlist,
      children: list.map(function (element, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTile, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: element.coverImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 7
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTileBar, {
            title: element.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 7
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, _this);
      })
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
      gridlist: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aXRsZSIsImdyaWRsaXN0IiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiY292ZXJJbWFnZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImZsZXhXcmFwIiwidHJhbnNmb3JtIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFdBQVQsT0FDZjtBQUFBOztBQUFBLE1BRHNDQyxJQUN0QyxRQURzQ0EsSUFDdEM7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDQyw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0MsOERBQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBMkIsZUFBUyxFQUFFRCxPQUFPLENBQUNFLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyx1REFBRDtBQUFVLFVBQUksRUFBRSxHQUFoQjtBQUFxQixlQUFTLEVBQUVGLE9BQU8sQ0FBQ0csUUFBeEM7QUFBQSxnQkFDRUosSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsNEJBQ1QsOERBQUMsMkRBQUQ7QUFBQSxrQ0FDQztBQUFLLGVBQUcsRUFBRUQsT0FBTyxDQUFDRTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBR0MsOERBQUMsOERBQUQ7QUFBaUIsaUJBQUssRUFBRUYsT0FBTyxDQUFDSDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhEO0FBQUEsV0FBbUJJLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXpCd0JSLFc7O0FBMEJ4QixTQUFTRyxTQUFULEdBQ0E7QUFDQyxTQUFPTyw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCUCxXQUFLLEVBQUU7QUFDTlEsZ0JBQVEsRUFBRSxLQURKO0FBRU5DLGtCQUFVLEVBQUU7QUFGTixPQURzQjtBQUs3QlIsY0FBUSxFQUFFO0FBQ1RTLGdCQUFRLEVBQUUsUUFERDtBQUVUQyxpQkFBUyxFQUFFLGVBRkY7QUFHVEMsaUJBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUhGO0FBSVRDLG9CQUFZLEVBQUVQLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQ7QUFKTDtBQUxtQixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFZQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uZjQ1MjAzMDNiNjEyYmNkOWJmNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsl7DqtIAg66as7Iqk7Yq4IOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjI0IE1vbiAwMTowODoyMVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJveCwgR3JpZExpc3QsIEdyaWRMaXN0VGlsZSwgR3JpZExpc3RUaWxlQmFyLCBMaW5rLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxhdGVkTGlzdCh7IGxpc3QgfSlcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggY29tcG9uZW50PVwiYXJ0aWNsZVwiPlxyXG5cdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+7Jew6rSAIOqyjOyLnOusvDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdDxHcmlkTGlzdCBjb2xzPXsyLjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdH0+XHJcblx0XHRcdFx0e2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEdyaWRMaXN0VGlsZSBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e2VsZW1lbnQuY292ZXJJbWFnZX0gLz5cclxuXHJcblx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGVCYXIgdGl0bGU9e2VsZW1lbnQudGl0bGV9IC8+XHJcblx0XHRcdFx0XHQ8L0dyaWRMaXN0VGlsZT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9HcmlkTGlzdD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHRmb250U2l6ZTogXCIyZW1cIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHRncmlkbGlzdDoge1xyXG5cdFx0XHRmbGV4V3JhcDogXCJub3dyYXBcIixcclxuXHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIixcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSlcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=