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
              return router.push("/posts/".concat(element.slug));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0aXRsZSIsImdyaWRsaXN0X3dyYXBwZXIiLCJncmlkbGlzdCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImdyaWRpdGVtIiwicHVzaCIsInNsdWciLCJjb3ZlckltYWdlIiwiaW1nIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZsZXhXcmFwIiwidHJhbnNmb3JtIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsImNvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJsaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFdBQVQsT0FDZjtBQUFBOztBQUFBOztBQUFBLE1BRHNDQyxJQUN0QyxRQURzQ0EsSUFDdEM7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsc0JBQ0MsOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNDLDhEQUFDLHlEQUFEO0FBQVksZUFBUyxFQUFDLElBQXRCO0FBQTJCLGVBQVMsRUFBRUgsT0FBTyxDQUFDSSxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0MsOERBQUMsa0RBQUQ7QUFBSyxlQUFTLEVBQUVKLE9BQU8sQ0FBQ0ssZ0JBQXhCO0FBQUEsNkJBQ0MsOERBQUMsdURBQUQ7QUFBVSxZQUFJLEVBQUUsR0FBaEI7QUFBcUIsaUJBQVMsRUFBRUwsT0FBTyxDQUFDTSxRQUF4QztBQUFBLGtCQUNFUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw4QkFDVCw4REFBQywyREFBRDtBQUEwQixxQkFBUyxFQUFFVCxPQUFPLENBQUNVLFFBQTdDO0FBQXVELG1CQUFPLEVBQUU7QUFBQSxxQkFBTVIsTUFBTSxDQUFDUyxJQUFQLGtCQUFzQkgsT0FBTyxDQUFDSSxJQUE5QixFQUFOO0FBQUEsYUFBaEU7QUFBQSxvQ0FDQztBQUFLLGlCQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssVUFBbEI7QUFBOEIsdUJBQVMsRUFBRWIsT0FBTyxDQUFDYztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBR0MsOERBQUMsOERBQUQ7QUFBaUIsbUJBQUssRUFBRU4sT0FBTyxDQUFDSjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhEO0FBQUEsYUFBbUJLLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFM7QUFBQSxTQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBN0J3QlgsVztVQUlSSyxrRDs7O0tBSlFMLFc7O0FBOEJ4QixTQUFTRyxTQUFULEdBQ0E7QUFDQyxTQUFPYyw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCWixXQUFLLEVBQUU7QUFDTmEsZ0JBQVEsRUFBRSxLQURKO0FBRU5DLGtCQUFVLEVBQUU7QUFGTixPQURzQjtBQUs3QmIsc0JBQWdCLEVBQUU7QUFDakJjLGlCQUFTLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsQ0FETTtBQUVqQkMsb0JBQVksRUFBRUwsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQUZHLE9BTFc7QUFTN0JkLGNBQVEsRUFBRTtBQUNUZ0IsZ0JBQVEsRUFBRSxRQUREO0FBRVRDLGlCQUFTLEVBQUUsZUFGRjtBQUdUQyxjQUFNLEVBQUU7QUFIQyxPQVRtQjtBQWM3QmQsY0FBUSxFQUFFO0FBQ1QsdUJBQWU7QUFDZGEsbUJBQVMsRUFBRSw2QkFERztBQUVkRSxvQkFBVSxFQUFFO0FBRkUsU0FETjtBQUtULHVDQUErQjtBQUM5QkEsb0JBQVUsRUFBRTtBQURrQixTQUx0QjtBQVFULDZDQUFxQztBQUNwQ0MsZUFBSyxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsS0FETztBQUVwQ0osb0JBQVUsRUFBRTtBQUZ3QjtBQVI1QixPQWRtQjtBQTJCN0JYLFNBQUcsRUFBRTtBQUNKVyxrQkFBVSxFQUFFO0FBRFI7QUEzQndCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQStCQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bc2x1Z10uYjRmNWE1YzAyZmU4ZGE5OGEzYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDsl7DqtIAg66as7Iqk7Yq4IOy7tO2PrOuEjO2KuCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA1LjI0IE1vbiAwMTowODoyMVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEJveCwgR3JpZExpc3QsIEdyaWRMaXN0VGlsZSwgR3JpZExpc3RUaWxlQmFyLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLyoqXHJcbiAqIOyXsOq0gCDrpqzsiqTtirggSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtKU09OW119IOy7qO2FkOy4oCDrpqzsiqTtirhcclxuICpcclxuICogQHJldHVybnMge0pTWH0gSlNYIOqwneyytFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVsYXRlZExpc3QoeyBsaXN0IH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCI+XHJcblx0XHRcdDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT7il44g7Jew6rSAIOqyjOyLnOusvDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRsaXN0X3dyYXBwZXJ9PlxyXG5cdFx0XHRcdDxHcmlkTGlzdCBjb2xzPXsyLjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdH0+XHJcblx0XHRcdFx0XHR7bGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRpdGVtfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Bvc3RzLyR7ZWxlbWVudC5zbHVnfWApfT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17ZWxlbWVudC5jb3ZlckltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZExpc3RUaWxlQmFyIHRpdGxlPXtlbGVtZW50LnRpdGxlfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWRMaXN0VGlsZT5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvR3JpZExpc3Q+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGZvbnRTaXplOiBcIjJlbVwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdGdyaWRsaXN0X3dyYXBwZXI6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMylcclxuXHRcdH0sXHJcblx0XHRncmlkbGlzdDoge1xyXG5cdFx0XHRmbGV4V3JhcDogXCJub3dyYXBcIixcclxuXHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIixcclxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxyXG5cdFx0fSxcclxuXHRcdGdyaWRpdGVtOiB7XHJcblx0XHRcdFwiJjpob3ZlciBpbWdcIjoge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDEuMilcIixcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcIiYgLk11aUdyaWRMaXN0VGlsZUJhci10aXRsZVwiOiB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCImOmhvdmVyIC5NdWlHcmlkTGlzdFRpbGVCYXItdGl0bGVcIjoge1xyXG5cdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXHJcblx0XHRcdFx0dHJhbnNpdGlvbjogXCIwLjVzXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGltZzoge1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==