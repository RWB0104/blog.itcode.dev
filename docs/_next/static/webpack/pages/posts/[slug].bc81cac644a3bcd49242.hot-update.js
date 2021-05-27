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
          transform: "translateY(50%) scale(1.2)",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1JlbGF0ZWRMaXN0LmpzIl0sIm5hbWVzIjpbIlJlbGF0ZWRMaXN0IiwibGlzdCIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwicm91dGVyIiwidXNlUm91dGVyIiwidGl0bGUiLCJncmlkbGlzdF93cmFwcGVyIiwiZ3JpZGxpc3QiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJncmlkaXRlbSIsInB1c2giLCJzbHVnIiwiY292ZXJJbWFnZSIsImltZyIsIm1ha2VTdHlsZXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleFdyYXAiLCJ0cmFuc2Zvcm0iLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwiY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImxpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsV0FBVCxPQUNmO0FBQUE7O0FBQUE7O0FBQUEsTUFEc0NDLElBQ3RDLFFBRHNDQSxJQUN0QztBQUNDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLE1BQU1DLEtBQUssR0FBR0MsMkRBQVEsRUFBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLGdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxzQkFDQyw4REFBQyxrREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0MsOERBQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBMkIsZUFBUyxFQUFFVCxPQUFPLENBQUNVLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFHQyw4REFBQyxrREFBRDtBQUFLLGVBQVMsRUFBRVYsT0FBTyxDQUFDVyxnQkFBeEI7QUFBQSw2QkFDQyw4REFBQyx1REFBRDtBQUFVLFlBQUksRUFBRVAsUUFBUSxHQUFHLEdBQUgsR0FBUyxHQUFqQztBQUFzQyxpQkFBUyxFQUFFSixPQUFPLENBQUNZLFFBQXpEO0FBQUEsa0JBQ0ViLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDhCQUNULDhEQUFDLDJEQUFEO0FBQTBCLHFCQUFTLEVBQUVmLE9BQU8sQ0FBQ2dCLFFBQTdDO0FBQXVELG1CQUFPLEVBQUU7QUFBQSxxQkFBTVIsTUFBTSxDQUFDUyxJQUFQLGtCQUFzQkgsT0FBTyxDQUFDSSxJQUE5QixFQUFOO0FBQUEsYUFBaEU7QUFBQSxvQ0FDQztBQUFLLGlCQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssVUFBbEI7QUFBOEIsdUJBQVMsRUFBRW5CLE9BQU8sQ0FBQ29CO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFHQyw4REFBQyw4REFBRDtBQUFpQixtQkFBSyxFQUFFTixPQUFPLENBQUNKO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQ7QUFBQSxhQUFtQkssS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVQ7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUJBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FoQ3dCakIsVztVQUlUSyx1RCxFQUNHRSw0RCxFQUVGSSxrRDs7O0tBUFFYLFc7O0FBaUN4QixTQUFTRyxTQUFULEdBQ0E7QUFDQyxTQUFPb0IsNkRBQVUsQ0FBQyxVQUFDbkIsS0FBRDtBQUFBLFdBQVk7QUFDN0JRLFdBQUssRUFBRTtBQUNOWSxnQkFBUSxFQUFFLEtBREo7QUFFTkMsa0JBQVUsRUFBRTtBQUZOLE9BRHNCO0FBSzdCWixzQkFBZ0IsRUFBRTtBQUNqQmEsaUJBQVMsRUFBRXRCLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBYyxDQUFkLENBRE07QUFFakJDLG9CQUFZLEVBQUV4QixLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZDtBQUZHLE9BTFc7QUFTN0JiLGNBQVEsRUFBRTtBQUNUZSxnQkFBUSxFQUFFLFFBREQ7QUFFVEMsaUJBQVMsRUFBRSxlQUZGO0FBR1RDLGNBQU0sRUFBRTtBQUhDLE9BVG1CO0FBYzdCYixjQUFRLEVBQUU7QUFDVCx1QkFBZTtBQUNkWSxtQkFBUyxFQUFFLDRCQURHO0FBRWRFLG9CQUFVLEVBQUU7QUFGRSxTQUROO0FBS1QsdUNBQStCO0FBQzlCQSxvQkFBVSxFQUFFO0FBRGtCLFNBTHRCO0FBUVQsNkNBQXFDO0FBQ3BDQyxlQUFLLEVBQUU3QixLQUFLLENBQUM4QixPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLEtBRE87QUFFcENKLG9CQUFVLEVBQUU7QUFGd0I7QUFSNUIsT0FkbUI7QUEyQjdCVixTQUFHLEVBQUU7QUFDSlUsa0JBQVUsRUFBRTtBQURSO0FBM0J3QixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUErQkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3NsdWddLmJjODFjYWM2NDRhM2JjZDQ5MjQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog7Jew6rSAIOumrOyKpO2KuCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4yNCBNb24gMDE6MDg6MjFcclxuICovXHJcblxyXG5pbXBvcnQgeyBCb3gsIEdyaWRMaXN0LCBHcmlkTGlzdFRpbGUsIEdyaWRMaXN0VGlsZUJhciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vKipcclxuICog7Jew6rSAIOumrOyKpO2KuCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTT05bXX0g7Luo7YWQ7LigIOumrOyKpO2KuFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWxhdGVkTGlzdCh7IGxpc3QgfSlcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggY29tcG9uZW50PVwiYXJ0aWNsZVwiPlxyXG5cdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+4peOIOyXsOq0gCDqsozsi5zrrLw8L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHQ8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdF93cmFwcGVyfT5cclxuXHRcdFx0XHQ8R3JpZExpc3QgY29scz17aXNNb2JpbGUgPyAxLjUgOiAyLjV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkbGlzdH0+XHJcblx0XHRcdFx0XHR7bGlzdC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxHcmlkTGlzdFRpbGUga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRpdGVtfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Bvc3RzLyR7ZWxlbWVudC5zbHVnfWApfT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17ZWxlbWVudC5jb3ZlckltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8R3JpZExpc3RUaWxlQmFyIHRpdGxlPXtlbGVtZW50LnRpdGxlfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0dyaWRMaXN0VGlsZT5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvR3JpZExpc3Q+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGZvbnRTaXplOiBcIjJlbVwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdGdyaWRsaXN0X3dyYXBwZXI6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMylcclxuXHRcdH0sXHJcblx0XHRncmlkbGlzdDoge1xyXG5cdFx0XHRmbGV4V3JhcDogXCJub3dyYXBcIixcclxuXHRcdFx0dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIixcclxuXHRcdFx0Y3Vyc29yOiBcInBvaW50ZXJcIlxyXG5cdFx0fSxcclxuXHRcdGdyaWRpdGVtOiB7XHJcblx0XHRcdFwiJjpob3ZlciBpbWdcIjoge1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDUwJSkgc2NhbGUoMS4yKVwiLFxyXG5cdFx0XHRcdHRyYW5zaXRpb246IFwiMC41c1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwiJiAuTXVpR3JpZExpc3RUaWxlQmFyLXRpdGxlXCI6IHtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcIiY6aG92ZXIgLk11aUdyaWRMaXN0VGlsZUJhci10aXRsZVwiOiB7XHJcblx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBcIjAuNXNcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aW1nOiB7XHJcblx0XHRcdHRyYW5zaXRpb246IFwiMC41c1wiXHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9