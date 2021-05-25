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


var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\posts\\RelatedList.js",
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
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "article",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      component: "h1",
      className: classes.title,
      children: "\u25CE \uC5F0\uAD00 \uAC8C\uC2DC\uBB3C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      className: classes.gridlist_wrapper,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.GridList, {
        cols: 2.5,
        className: classes.gridlist,
        children: list.map(function (element, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.GridListTile, {
            className: classes.griditem,
            onClick: function onClick() {
              return console.dir(element.slug);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: element.coverImage,
              className: classes.img
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 8
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.GridListTileBar, {
              title: element.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 8
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(RelatedList, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0aXRsZSIsImdyaWRsaXN0X3dyYXBwZXIiLCJncmlkbGlzdCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImdyaWRpdGVtIiwiY29uc29sZSIsImRpciIsInNsdWciLCJjb3ZlckltYWdlIiwiaW1nIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZsZXhXcmFwIiwidHJhbnNmb3JtIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFdBQVQsT0FDZjtBQUFBOztBQUFBOztBQUFBLE1BRHNDQyxJQUN0QyxRQURzQ0EsSUFDdEM7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0MsOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNDLDhEQUFDLHlEQUFEO0FBQVksZUFBUyxFQUFDLElBQXRCO0FBQTJCLGVBQVMsRUFBRUgsT0FBTyxDQUFDSSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0MsOERBQUMsa0RBQUQ7QUFBSyxlQUFTLEVBQUVKLE9BQU8sQ0FBQ0ssZ0JBQXhCO0FBQUEsNkJBQ0MsOERBQUMsdURBQUQ7QUFBVSxZQUFJLEVBQUUsR0FBaEI7QUFBcUIsaUJBQVMsRUFBRUwsT0FBTyxDQUFDTSxRQUF4QztBQUFBLGtCQUNFUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw4QkFDVCw4REFBQywyREFBRDtBQUEwQixxQkFBUyxFQUFFVCxPQUFPLENBQUNVLFFBQTdDO0FBQXVELG1CQUFPLEVBQUU7QUFBQSxxQkFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQU8sQ0FBQ0ssSUFBcEIsQ0FBTjtBQUFBLGFBQWhFO0FBQUEsb0NBQ0M7QUFBSyxpQkFBRyxFQUFFTCxPQUFPLENBQUNNLFVBQWxCO0FBQThCLHVCQUFTLEVBQUVkLE9BQU8sQ0FBQ2U7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUdDLDhEQUFDLDhEQUFEO0FBQWlCLG1CQUFLLEVBQUVQLE9BQU8sQ0FBQ0o7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRDtBQUFBLGFBQW1CSyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFpQkE7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztHQTdCd0JYLFc7VUFJUkssa0Q7OztLQUpRTCxXOztBQThCeEIsU0FBU0csU0FBVCxHQUNBO0FBQ0MsU0FBT2UsNkRBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUM3QmIsV0FBSyxFQUFFO0FBQ05jLGdCQUFRLEVBQUUsS0FESjtBQUVOQyxrQkFBVSxFQUFFO0FBRk4sT0FEc0I7QUFLN0JkLHNCQUFnQixFQUFFO0FBQ2pCZSxpQkFBUyxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFakJDLG9CQUFZLEVBQUVMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQ7QUFGRyxPQUxXO0FBUzdCZixjQUFRLEVBQUU7QUFDVGlCLGdCQUFRLEVBQUUsUUFERDtBQUVUQyxpQkFBUyxFQUFFLGVBRkY7QUFHVEMsY0FBTSxFQUFFO0FBSEMsT0FUbUI7QUFjN0JmLGNBQVEsRUFBRTtBQUNULHVCQUFlO0FBQ2RjLG1CQUFTLEVBQUUsNkJBREc7QUFFZEUsb0JBQVUsRUFBRTtBQUZFLFNBRE47QUFLVCx1Q0FBK0I7QUFDOUJBLG9CQUFVLEVBQUU7QUFEa0IsU0FMdEI7QUFRVCw2Q0FBcUM7QUFDcENDLGVBQUssRUFBRVYsS0FBSyxDQUFDVyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEtBRE87QUFFcENKLG9CQUFVLEVBQUU7QUFGd0I7QUFSNUIsT0FkbUI7QUEyQjdCWCxTQUFHLEVBQUU7QUFDSlcsa0JBQVUsRUFBRTtBQURSO0FBM0J3QixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUErQkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLjcxMWY3M2FjODJjY2EzYmI2ODM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Jew6rSAIOumrOyKpO2KuCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4yNCBNb24gMDE6MDg6MjFcclxuICovXHJcblxyXG5pbXBvcnQgeyBCb3gsIEdyaWRMaXN0LCBHcmlkTGlzdFRpbGUsIEdyaWRMaXN0VGlsZUJhciwgTGluaywgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiDsl7DqtIAg66as7Iqk7Yq4IEpTWCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEBwYXJhbSB7SlNPTltdfSDsu6jthZDsuKAg66as7Iqk7Yq4XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbGF0ZWRMaXN0KHsgbGlzdCB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggY29tcG9uZW50PVwiYXJ0aWNsZVwiPlxyXG5cdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+4peOIOyXsOq0gCDqsozsi5zrrLw8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHQ8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdF93cmFwcGVyfT5cclxuXHRcdFx0XHQ8R3JpZExpc3QgY29scz17Mi41fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZGxpc3R9PlxyXG5cdFx0XHRcdFx0e2xpc3QubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8R3JpZExpc3RUaWxlIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkaXRlbX0gb25DbGljaz17KCkgPT4gY29uc29sZS5kaXIoZWxlbWVudC5zbHVnKX0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2VsZW1lbnQuY292ZXJJbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmltZ30gLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEdyaWRMaXN0VGlsZUJhciB0aXRsZT17ZWxlbWVudC50aXRsZX0gLz5cclxuXHRcdFx0XHRcdFx0PC9HcmlkTGlzdFRpbGU+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L0dyaWRMaXN0PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHRmb250U2l6ZTogXCIyZW1cIixcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdH0sXHJcblx0XHRncmlkbGlzdF93cmFwcGVyOiB7XHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpXHJcblx0XHR9LFxyXG5cdFx0Z3JpZGxpc3Q6IHtcclxuXHRcdFx0ZmxleFdyYXA6IFwibm93cmFwXCIsXHJcblx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIsXHJcblx0XHRcdGN1cnNvcjogXCJwb2ludGVyXCJcclxuXHRcdH0sXHJcblx0XHRncmlkaXRlbToge1xyXG5cdFx0XHRcIiY6aG92ZXIgaW1nXCI6IHtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgxLjIpXCIsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCImIC5NdWlHcmlkTGlzdFRpbGVCYXItdGl0bGVcIjoge1xyXG5cdFx0XHRcdHRyYW5zaXRpb246IFwiMC41c1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwiJjpob3ZlciAuTXVpR3JpZExpc3RUaWxlQmFyLXRpdGxlXCI6IHtcclxuXHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxyXG5cdFx0XHRcdHRyYW5zaXRpb246IFwiMC41c1wiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRpbWc6IHtcclxuXHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=