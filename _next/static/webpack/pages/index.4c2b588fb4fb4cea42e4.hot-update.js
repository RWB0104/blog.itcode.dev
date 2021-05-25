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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _PreviewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviewList */ "./components/section/index/PreviewList.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\section\\index\\Preview.js",
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
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var isMobile = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down("sm"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
    component: "article",
    className: classes.box,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      spacing: 5,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          variant: isMobile ? "h3" : "h1",
          align: "center",
          className: classes.typo_title,
          gutterBottom: true,
          children: menu.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewList__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 12,
        className: classes.more_grid,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: classes.more,
          startIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__.Add, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 50
          }, this),
          onClick: function onClick() {
            return router.push(menu.url);
          },
          children: "M O R E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
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
 * @returns {JSON} 스타일 객체
 */

_s(Preview, "wWj9YniebXrXepLsYjREfURF4Ms=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.useTheme, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _material_ui_core__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery];
});

_c = Preview;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4L1ByZXZpZXcuanMiXSwibmFtZXMiOlsiUHJldmlldyIsIm1lbnUiLCJkYXRhIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsInRoZW1lIiwidXNlVGhlbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJib3giLCJ0eXBvX3RpdGxlIiwidGl0bGUiLCJtb3JlX2dyaWQiLCJtb3JlIiwicHVzaCIsInVybCIsIm1ha2VTdHlsZXMiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJwYWRkaW5nIiwibWFyZ2luIiwibGV0dGVyU3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsT0FBVCxPQUNmO0FBQUE7O0FBQUEsTUFEa0NDLElBQ2xDLFFBRGtDQSxJQUNsQztBQUFBLE1BRHdDQyxJQUN4QyxRQUR3Q0EsSUFDeEM7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxLQUFLLEdBQUdDLDJEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MsZ0VBQWEsQ0FBQ0wsS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFELENBQTlCO0FBRUEsc0JBQ0MsOERBQUMsa0RBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFTLEVBQUVULE9BQU8sQ0FBQ1UsR0FBNUM7QUFBQSwyQkFDQyw4REFBQyxtREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSw4QkFDQyw4REFBQyxtREFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxFQUFmO0FBQUEsK0JBQ0MsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFFSixRQUFRLEdBQUcsSUFBSCxHQUFVLElBQXZDO0FBQTZDLGVBQUssRUFBQyxRQUFuRDtBQUE0RCxtQkFBUyxFQUFFTixPQUFPLENBQUNXLFVBQS9FO0FBQTJGLHNCQUFZLE1BQXZHO0FBQUEsb0JBQXlHYixJQUFJLENBQUNjO0FBQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLQyw4REFBQyxpREFBRDtBQUFhLFlBQUksRUFBRWI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBT0MsOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixpQkFBUyxFQUFFQyxPQUFPLENBQUNhLFNBQXRDO0FBQUEsK0JBQ0MsOERBQUMscURBQUQ7QUFBUSxtQkFBUyxFQUFFYixPQUFPLENBQUNjLElBQTNCO0FBQWlDLG1CQUFTLGVBQUUsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBNUM7QUFBcUQsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWWpCLElBQUksQ0FBQ2tCLEdBQWpCLENBQU47QUFBQSxXQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBOUJ3Qm5CLE87VUFJVE0sdUQsRUFDQ0Usa0QsRUFFRUUsNEQ7OztLQVBNVixPOztBQStCeEIsU0FBU0ksU0FBVCxHQUNBO0FBQ0MsU0FBT2dCLDZEQUFVLENBQUMsVUFBQ2YsS0FBRDtBQUFBLFdBQVk7QUFDN0JRLFNBQUcsRUFBRTtBQUNKUSxpQkFBUyxFQUFFaEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjLENBQWQsQ0FEUDtBQUVKQyxvQkFBWSxFQUFFbEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjLENBQWQ7QUFGVixPQUR3QjtBQUs3QlIsZ0JBQVUsRUFBRTtBQUNYVSxrQkFBVSxFQUFFLHdCQUREO0FBRVhDLGtCQUFVLEVBQUU7QUFGRCxPQUxpQjtBQVM3QlQsZUFBUyxFQUFFO0FBQ1ZVLGlCQUFTLEVBQUU7QUFERCxPQVRrQjtBQVk3QlQsVUFBSSxFQUFFO0FBQ0xVLGtCQUFVLEVBQUUsNkNBRFA7QUFFTEMsYUFBSyxFQUFFLE9BRkY7QUFHTEMsZUFBTyxFQUFFLFdBSEo7QUFJTEMsY0FBTSxFQUFFLE1BSkg7QUFLTFQsaUJBQVMsRUFBRWhCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBYyxFQUFkLENBTE47QUFNTEMsb0JBQVksRUFBRWxCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBYyxFQUFkLENBTlQ7QUFPTFMscUJBQWEsRUFBRTtBQVBWO0FBWnVCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQXNCQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YzJiNTg4ZmI0ZmI0Y2VhNDJlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOuvuOumrOuztOq4sCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4xNSBTYXQgMDI6MTE6MTNcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgQWRkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgUHJldmlld0xpc3QgZnJvbSBcIi4vUHJldmlld0xpc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDrr7jrpqzrs7TquLAgSlNYIOuwmO2ZmCDtlajsiJhcclxuICpcclxuICogQHBhcmFtIHtKU09OfSBtZW51OiDrqZTribRcclxuICogQHBhcmFtIHtKU09OW119IGRhdGE6IOuNsOydtO2EsFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmV2aWV3KHsgbWVudSwgZGF0YSB9KVxyXG57XHJcblx0Y29uc3QgY2xhc3NlcyA9IGdldFN0eWxlcygpO1xyXG5cclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCBjb21wb25lbnQ9XCJhcnRpY2xlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PXtpc01vYmlsZSA/IFwiaDNcIiA6IFwiaDFcIn0gYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMudHlwb190aXRsZX0gZ3V0dGVyQm90dG9tPnttZW51LnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHQ8L0dyaWQ+XHJcblxyXG5cdFx0XHRcdDxQcmV2aWV3TGlzdCBkYXRhPXtkYXRhfSAvPlxyXG5cclxuXHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLm1vcmVfZ3JpZH0+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb3JlfSBzdGFydEljb249ezxBZGQgLz59IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKG1lbnUudXJsKX0+TSBPIFIgRTwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvR3JpZD5cclxuXHRcdFx0PC9HcmlkPlxyXG5cdFx0PC9Cb3g+XHJcblx0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOyKpO2DgOydvCDqsJ3ssrQg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNPTn0g7Iqk7YOA7J28IOqwneyytFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U3R5bGVzKClcclxue1xyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdGJveDoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNyksXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg3KVxyXG5cdFx0fSxcclxuXHRcdHR5cG9fdGl0bGU6IHtcclxuXHRcdFx0Zm9udEZhbWlseTogXCJCbGFja3N3b3JkLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiXHJcblx0XHR9LFxyXG5cdFx0bW9yZV9ncmlkOiB7XHJcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG5cdFx0fSxcclxuXHRcdG1vcmU6IHtcclxuXHRcdFx0YmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0Nzc2RTYsICM4RTU0RTkpXCIsXHJcblx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXHJcblx0XHRcdHBhZGRpbmc6IFwiMTVweCAzMHB4XCIsXHJcblx0XHRcdG1hcmdpbjogXCJhdXRvXCIsXHJcblx0XHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXHJcblx0XHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcblx0XHRcdGxldHRlclNwYWNpbmc6IDVcclxuXHRcdH1cclxuXHR9KSkoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=