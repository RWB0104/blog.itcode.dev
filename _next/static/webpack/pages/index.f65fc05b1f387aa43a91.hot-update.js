self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section/index/Preview.js":
/*!*********************************************!*\
  !*** ./components/section/index/Preview.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Preview; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _PreviewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewList */ "./components/section/index/PreviewList.js");
/* harmony import */ var _global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/SemanticTypo */ "./components/global/SemanticTypo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\index\\Preview.js",
    _s = $RefreshSig$();

/**
 * 미리보기 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.15 Sat 02:11:13
 */
// 라이브러리 모듈


 // 사용자 모듈



/**
 * 미리보기 JSX 반환 함수
 *
 * @param {JSON} menu: 메뉴
 * @param {JSON[]} data: 데이터
 *
 * @returns {JSX} JSX 객체
 */

function Preview(_ref) {
  _s();

  var menu = _ref.menu,
      data = _ref.data;
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
    component: "article",
    className: classes.box,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      spacing: 4,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_global_SemanticTypo__WEBPACK_IMPORTED_MODULE_3__.default, {
          up: "h1",
          down: "h2",
          align: "center",
          className: classes.typo_title,
          gutterBottom: true,
          children: menu.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewList__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        item: true,
        xs: 12,
        className: classes.more_grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: classes.more,
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Add, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 50
          }, this),
          onClick: function onClick() {
            return router.push(menu.url);
          },
          children: "M O R E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(Preview, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Preview;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      box: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(7)
      },
      typo_title: {
        fontFamily: "Blacksword, sans-serif",
        fontWeight: "bold"
      },
      more_grid: {
        textAlign: "center"
      },
      more: {
        background: "linear-gradient(to right, #4776E6, #8E54E9)",
        color: "white",
        padding: "15px 30px",
        margin: "auto",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        letterSpacing: 5
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "Preview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1ByZXZpZXcuanMiXSwibmFtZXMiOlsiUHJldmlldyIsIm1lbnUiLCJkYXRhIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImJveCIsInR5cG9fdGl0bGUiLCJ0aXRsZSIsIm1vcmVfZ3JpZCIsIm1vcmUiLCJwdXNoIiwidXJsIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsIm1hcmdpbiIsImxldHRlclNwYWNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE9BQVQsT0FDZjtBQUFBOztBQUFBLE1BRGtDQyxJQUNsQyxRQURrQ0EsSUFDbEM7QUFBQSxNQUR3Q0MsSUFDeEMsUUFEd0NBLElBQ3hDO0FBQ0MsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLHNCQUNDLDhEQUFDLGtEQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBUyxFQUFFSCxPQUFPLENBQUNJLEdBQTVDO0FBQUEsMkJBQ0MsOERBQUMsbURBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQUEsOEJBQ0MsOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNDLDhEQUFDLHlEQUFEO0FBQWMsWUFBRSxFQUFDLElBQWpCO0FBQXNCLGNBQUksRUFBQyxJQUEzQjtBQUFnQyxlQUFLLEVBQUMsUUFBdEM7QUFBK0MsbUJBQVMsRUFBRUosT0FBTyxDQUFDSyxVQUFsRTtBQUE4RSxzQkFBWSxNQUExRjtBQUFBLG9CQUE0RlAsSUFBSSxDQUFDUTtBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBS0MsOERBQUMsaURBQUQ7QUFBYSxZQUFJLEVBQUVQO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQU9DLDhEQUFDLG1EQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBbUIsaUJBQVMsRUFBRUMsT0FBTyxDQUFDTyxTQUF0QztBQUFBLCtCQUNDLDhEQUFDLHFEQUFEO0FBQVEsbUJBQVMsRUFBRVAsT0FBTyxDQUFDUSxJQUEzQjtBQUFpQyxtQkFBUyxlQUFFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVDO0FBQXFELGlCQUFPLEVBQUU7QUFBQSxtQkFBTU4sTUFBTSxDQUFDTyxJQUFQLENBQVlYLElBQUksQ0FBQ1ksR0FBakIsQ0FBTjtBQUFBLFdBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWVBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0EzQndCYixPO1VBSVJNLGtEOzs7S0FKUU4sTzs7QUE0QnhCLFNBQVNJLFNBQVQsR0FDQTtBQUNDLFNBQU9VLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JSLFNBQUcsRUFBRTtBQUNKUyxpQkFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBRFA7QUFFSkMsb0JBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZWLE9BRHdCO0FBSzdCVCxnQkFBVSxFQUFFO0FBQ1hXLGtCQUFVLEVBQUUsd0JBREQ7QUFFWEMsa0JBQVUsRUFBRTtBQUZELE9BTGlCO0FBUzdCVixlQUFTLEVBQUU7QUFDVlcsaUJBQVMsRUFBRTtBQURELE9BVGtCO0FBWTdCVixVQUFJLEVBQUU7QUFDTFcsa0JBQVUsRUFBRSw2Q0FEUDtBQUVMQyxhQUFLLEVBQUUsT0FGRjtBQUdMQyxlQUFPLEVBQUUsV0FISjtBQUlMQyxjQUFNLEVBQUUsTUFKSDtBQUtMVCxpQkFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxFQUFkLENBTE47QUFNTEMsb0JBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsRUFBZCxDQU5UO0FBT0xTLHFCQUFhLEVBQUU7QUFQVjtBQVp1QixLQUFaO0FBQUEsR0FBRCxDQUFWLEVBQVA7QUFzQkEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjY1ZmMwNWIxZjM4N2FhNDNhOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDrr7jrpqzrs7TquLAg7Lu07Y+s64SM7Yq4IEphdmFTY3JpcHRcclxuICpcclxuICogQGF1dGhvciBSV0JcclxuICogQHNpbmNlIDIwMjEuMDUuMTUgU2F0IDAyOjExOjEzXHJcbiAqL1xyXG5cclxuLy8g65287J2067iM65+s66asIOuqqOuTiFxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEdyaWQsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWRkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgUHJldmlld0xpc3QgZnJvbSBcIi4vUHJldmlld0xpc3RcIjtcclxuaW1wb3J0IFNlbWFudGljVHlwbyBmcm9tIFwiLi4vLi4vZ2xvYmFsL1NlbWFudGljVHlwb1wiO1xyXG5cclxuLyoqXHJcbiAqIOuvuOumrOuztOq4sCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTT059IG1lbnU6IOuplOuJtFxyXG4gKiBAcGFyYW0ge0pTT05bXX0gZGF0YTog642w7J207YSwXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU1h9IEpTWCDqsJ3ssrRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByZXZpZXcoeyBtZW51LCBkYXRhIH0pXHJcbntcclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8U2VtYW50aWNUeXBvIHVwPVwiaDFcIiBkb3duPVwiaDJcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50eXBvX3RpdGxlfSBndXR0ZXJCb3R0b20+e21lbnUudGl0bGV9PC9TZW1hbnRpY1R5cG8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cclxuXHRcdFx0XHQ8UHJldmlld0xpc3QgZGF0YT17ZGF0YX0gLz5cclxuXHJcblx0XHRcdFx0PEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3JlX2dyaWR9PlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZX0gc3RhcnRJY29uPXs8QWRkIC8+fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChtZW51LnVybCl9Pk0gTyBSIEU8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblx0XHRcdDwvR3JpZD5cclxuXHRcdDwvQm94PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDsiqTtg4Dsnbwg6rCd7LK0IOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHJldHVybnMge0pTT059IOyKpO2DgOydvCDqsJ3ssrRcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0eWxlcygpXHJcbntcclxuXHRyZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRib3g6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNylcclxuXHRcdH0sXHJcblx0XHR0eXBvX3RpdGxlOiB7XHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiQmxhY2tzd29yZCwgc2Fucy1zZXJpZlwiLFxyXG5cdFx0XHRmb250V2VpZ2h0OiBcImJvbGRcIlxyXG5cdFx0fSxcclxuXHRcdG1vcmVfZ3JpZDoge1xyXG5cdFx0XHR0ZXh0QWxpZ246IFwiY2VudGVyXCJcclxuXHRcdH0sXHJcblx0XHRtb3JlOiB7XHJcblx0XHRcdGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDc3NkU2LCAjOEU1NEU5KVwiLFxyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRwYWRkaW5nOiBcIjE1cHggMzBweFwiLFxyXG5cdFx0XHRtYXJnaW46IFwiYXV0b1wiLFxyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxyXG5cdFx0XHRsZXR0ZXJTcGFjaW5nOiA1XHJcblx0XHR9XHJcblx0fSkpKCk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9