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

/**
 * 연관 리스트 JSX 반환 함수
 *
 * @param {JSON[]} 컨텐츠 리스트
 *
 * @returns {JSX} JSX 객체
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
      children: "\u25CE \uC5F0\uAD00 \uAC8C\uC2DC\uBB3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
      className: classes.gridlist_wrapper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridList, {
        cols: 2.5,
        className: classes.gridlist,
        children: list.map(function (element, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTile, {
            className: classes.griditem,
            onClick: function onClick() {
              return console.dir(element.slug);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: element.coverImage,
              className: classes.img
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.GridListTileBar, {
              title: element.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 8
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
        transform: "translateZ(0)",
        cursor: "pointer"
      },
      griditem: {
        "&:hover img": {
          transform: "translateY(-50%) scale(1.2)",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aXRsZSIsImdyaWRsaXN0X3dyYXBwZXIiLCJncmlkbGlzdCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImdyaWRpdGVtIiwiY29uc29sZSIsImRpciIsInNsdWciLCJjb3ZlckltYWdlIiwiaW1nIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZsZXhXcmFwIiwidHJhbnNmb3JtIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFdBQVQsT0FDZjtBQUFBOztBQUFBLE1BRHNDQyxJQUN0QyxRQURzQ0EsSUFDdEM7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDQyw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0MsOERBQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBMkIsZUFBUyxFQUFFRCxPQUFPLENBQUNFLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRUYsT0FBTyxDQUFDRyxnQkFBeEI7QUFBQSw2QkFDQyw4REFBQyx1REFBRDtBQUFVLFlBQUksRUFBRSxHQUFoQjtBQUFxQixpQkFBUyxFQUFFSCxPQUFPLENBQUNJLFFBQXhDO0FBQUEsa0JBQ0VMLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDhCQUNULDhEQUFDLDJEQUFEO0FBQTBCLHFCQUFTLEVBQUVQLE9BQU8sQ0FBQ1EsUUFBN0M7QUFBdUQsbUJBQU8sRUFBRTtBQUFBLHFCQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBTyxDQUFDSyxJQUFwQixDQUFOO0FBQUEsYUFBaEU7QUFBQSxvQ0FDQztBQUFLLGlCQUFHLEVBQUVMLE9BQU8sQ0FBQ00sVUFBbEI7QUFBOEIsdUJBQVMsRUFBRVosT0FBTyxDQUFDYTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBR0MsOERBQUMsOERBQUQ7QUFBaUIsbUJBQUssRUFBRVAsT0FBTyxDQUFDSjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhEO0FBQUEsYUFBbUJLLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0tBM0J3QlQsVzs7QUE0QnhCLFNBQVNHLFNBQVQsR0FDQTtBQUNDLFNBQU9hLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JiLFdBQUssRUFBRTtBQUNOYyxnQkFBUSxFQUFFLEtBREo7QUFFTkMsa0JBQVUsRUFBRTtBQUZOLE9BRHNCO0FBSzdCZCxzQkFBZ0IsRUFBRTtBQUNqQmUsaUJBQVMsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQURNO0FBRWpCQyxvQkFBWSxFQUFFTCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkO0FBRkcsT0FMVztBQVM3QmYsY0FBUSxFQUFFO0FBQ1RpQixnQkFBUSxFQUFFLFFBREQ7QUFFVEMsaUJBQVMsRUFBRSxlQUZGO0FBR1RDLGNBQU0sRUFBRTtBQUhDLE9BVG1CO0FBYzdCZixjQUFRLEVBQUU7QUFDVCx1QkFBZTtBQUNkYyxtQkFBUyxFQUFFLDZCQURHO0FBRWRFLG9CQUFVLEVBQUU7QUFGRSxTQUROO0FBS1QsdUNBQStCO0FBQzlCQSxvQkFBVSxFQUFFO0FBRGtCLFNBTHRCO0FBUVQsNkNBQXFDO0FBQ3BDQyxlQUFLLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjQyxPQUFkLENBQXNCQyxLQURPO0FBRXBDSixvQkFBVSxFQUFFO0FBRndCO0FBUjVCLE9BZG1CO0FBMkI3QlgsU0FBRyxFQUFFO0FBQ0pXLGtCQUFVLEVBQUU7QUFEUjtBQTNCd0IsS0FBWjtBQUFBLEdBQUQsQ0FBVixFQUFQO0FBK0JBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS5hN2I2NGQ2MTE1YjY0NjViMjZkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOyXsOq0gCDrpqzsiqTtirgg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMjQgTW9uIDAxOjA4OjIxXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQm94LCBHcmlkTGlzdCwgR3JpZExpc3RUaWxlLCBHcmlkTGlzdFRpbGVCYXIsIExpbmssIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbi8qKlxyXG4gKiDsl7DqtIAg66as7Iqk7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNPTltdfSDsu6jthZDsuKAg66as7Iqk7Yq4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF0ZWRMaXN0KHsgbGlzdCB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCI+XHJcblx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT7il44g7Jew6rSAIOqyjOyLnOusvDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRsaXN0X3dyYXBwZXJ9PlxyXG5cdFx0XHRcdDxHcmlkTGlzdCBjb2xzPXsyLjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdH0+XHJcblx0XHRcdFx0XHR7bGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRpdGVtfSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmRpcihlbGVtZW50LnNsdWcpfT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17ZWxlbWVudC5jb3ZlckltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZExpc3RUaWxlQmFyIHRpdGxlPXtlbGVtZW50LnRpdGxlfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWRMaXN0VGlsZT5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvR3JpZExpc3Q+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGZvbnRTaXplOiBcIjJlbVwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdGdyaWRsaXN0X3dyYXBwZXI6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMylcclxuXHRcdH0sXHJcblx0XHRncmlkbGlzdDoge1xyXG5cdFx0XHRmbGV4V3JhcDogXCJub3dyYXBcIixcclxuXHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIixcclxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxyXG5cdFx0fSxcclxuXHRcdGdyaWRpdGVtOiB7XHJcblx0XHRcdFwiJjpob3ZlciBpbWdcIjoge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMilcIixcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcIiYgLk11aUdyaWRMaXN0VGlsZUJhci10aXRsZVwiOiB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCImOmhvdmVyIC5NdWlHcmlkTGlzdFRpbGVCYXItdGl0bGVcIjoge1xyXG5cdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGltZzoge1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==