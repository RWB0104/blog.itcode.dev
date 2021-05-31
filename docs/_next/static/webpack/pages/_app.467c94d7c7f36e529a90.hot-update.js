self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header/DesktopHeader.js":
/*!********************************************!*\
  !*** ./components/header/DesktopHeader.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DesktopHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/env */ "./common/env.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\source\\GitHub\\Kapoo\\components\\header\\DesktopHeader.js",
    _s = $RefreshSig$();

/**
 * 데스크탑 헤더 JavaScript
 *
 * @author RWB
 * @since 2021.04.27 Tue 00:47:40
 */
// 라이브러리 모듈



 // 사용자 모듈


/**
 * 데스크탑 헤더 JSX 반환 함수
 *
 * @returns {JSX} JSX 객체
 */

function DesktopHeader() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var classes = getStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
      variant: "square",
      alt: _common_env__WEBPACK_IMPORTED_MODULE_3__.TITLE,
      src: _common_env__WEBPACK_IMPORTED_MODULE_3__.LOGO,
      className: classes.logo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
      variant: "h4",
      className: classes.title,
      children: _common_env__WEBPACK_IMPORTED_MODULE_3__.TITLE
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, this), _common_env__WEBPACK_IMPORTED_MODULE_3__.MENU_LIST.map(function (element, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: classes.menu,
        disabled: "/".concat(router.pathname.split("/")[1]) === element.url.pathname,
        startIcon: element.icon,
        onClick: function onClick() {
          return router.push(element.url);
        },
        children: element.title
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 40
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(DesktopHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = DesktopHeader;

function getStyles() {
  var text = _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__.yellow.A700;
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      logo: {
        marginRight: theme.spacing(2),
        height: 41,
        animation: "rotate 5s linear infinite",
        transformOrigin: "50% 50%"
      },
      title: {
        flexGrow: 1,
        fontWeight: "bold",
        fontFamily: "Blacksword, sans-serif"
      },
      menu: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        color: "white",
        fontFamily: "Spoqa Han Sans, sans-serif",
        "&:disabled": {
          color: text,
          fontWeight: "bold"
        }
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "DesktopHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvRGVza3RvcEhlYWRlci5qcyJdLCJuYW1lcyI6WyJEZXNrdG9wSGVhZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsImdldFN0eWxlcyIsIlRJVExFIiwiTE9HTyIsImxvZ28iLCJ0aXRsZSIsIk1FTlVfTElTVCIsImVsZW1lbnQiLCJpbmRleCIsIm1lbnUiLCJwYXRobmFtZSIsInNwbGl0IiwidXJsIiwiaWNvbiIsInB1c2giLCJ0ZXh0IiwieWVsbG93IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiaGVpZ2h0IiwiYW5pbWF0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiZmxleEdyb3ciLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQSxhQUFULEdBQ2Y7QUFBQTs7QUFBQTs7QUFDQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0MsOERBQUMsdURBQUQ7QUFBQSw0QkFDQyw4REFBQyxxREFBRDtBQUFRLGFBQU8sRUFBQyxRQUFoQjtBQUF5QixTQUFHLEVBQUVDLDhDQUE5QjtBQUFxQyxTQUFHLEVBQUVDLDZDQUExQztBQUFnRCxlQUFTLEVBQUVILE9BQU8sQ0FBQ0k7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBR0MsOERBQUMseURBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFFSixPQUFPLENBQUNLLEtBQTVDO0FBQUEsZ0JBQW9ESCw4Q0FBS0E7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELEVBS0VJLHNEQUFBLENBQWMsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsMEJBQXFCLDhEQUFDLHFEQUFEO0FBQW9CLGlCQUFTLEVBQUVSLE9BQU8sQ0FBQ1MsSUFBdkM7QUFBNkMsZ0JBQVEsRUFBRSxXQUFJWCxNQUFNLENBQUNZLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQUosTUFBd0NKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZRixRQUEzRztBQUFxSCxpQkFBUyxFQUFFSCxPQUFPLENBQUNNLElBQXhJO0FBQThJLGVBQU8sRUFBRTtBQUFBLGlCQUFNZixNQUFNLENBQUNnQixJQUFQLENBQVlQLE9BQU8sQ0FBQ0ssR0FBcEIsQ0FBTjtBQUFBLFNBQXZKO0FBQUEsa0JBQXdMTCxPQUFPLENBQUNGO0FBQWhNLFNBQWFHLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFyQjtBQUFBLEtBQWQsQ0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVNBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FyQndCWCxhO1VBRVJFLGtEOzs7S0FGUUYsYTs7QUFzQnhCLFNBQVNJLFNBQVQsR0FDQTtBQUNDLE1BQU1jLElBQUksR0FBR0MsaUVBQWI7QUFFQSxTQUFPQyw2REFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQzdCZCxVQUFJLEVBQUU7QUFDTGUsbUJBQVcsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURSO0FBRUxDLGNBQU0sRUFBRSxFQUZIO0FBR0xDLGlCQUFTLEVBQUUsMkJBSE47QUFJTEMsdUJBQWUsRUFBRTtBQUpaLE9BRHVCO0FBTzdCbEIsV0FBSyxFQUFFO0FBQ05tQixnQkFBUSxFQUFFLENBREo7QUFFTkMsa0JBQVUsRUFBRSxNQUZOO0FBR05DLGtCQUFVLEVBQUU7QUFITixPQVBzQjtBQVk3QmpCLFVBQUksRUFBRTtBQUNMa0IsbUJBQVcsRUFBRVQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURSO0FBRUxRLG9CQUFZLEVBQUVWLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FGVDtBQUdMUyxhQUFLLEVBQUUsT0FIRjtBQUlMSCxrQkFBVSxFQUFFLDRCQUpQO0FBS0wsc0JBQWM7QUFDYkcsZUFBSyxFQUFFZCxJQURNO0FBRWJVLG9CQUFVLEVBQUU7QUFGQztBQUxUO0FBWnVCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQXVCQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ2N2M5NGQ3YzdmMzZlNTI5YTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog642w7Iqk7YGs7YORIO2XpOuNlCBKYXZhU2NyaXB0XHJcbiAqXHJcbiAqIEBhdXRob3IgUldCXHJcbiAqIEBzaW5jZSAyMDIxLjA0LjI3IFR1ZSAwMDo0Nzo0MFxyXG4gKi9cclxuXHJcbi8vIOudvOydtOu4jOufrOumrCDrqqjrk4hcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgeWVsbG93IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5cclxuLy8g7IKs7Jqp7J6QIOuqqOuTiFxyXG5pbXBvcnQgeyBMT0dPLCBNRU5VX0xJU1QsIFRJVExFIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnZcIjtcclxuXHJcblxyXG4vKipcclxuICog642w7Iqk7YGs7YORIO2XpOuNlCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNrdG9wSGVhZGVyKClcclxue1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gZ2V0U3R5bGVzKCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxBdmF0YXIgdmFyaWFudD1cInNxdWFyZVwiIGFsdD17VElUTEV9IHNyYz17TE9HT30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XHJcblxyXG5cdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntUSVRMRX08L1R5cG9ncmFwaHk+XHJcblxyXG5cdFx0XHR7TUVOVV9MSVNULm1hcCgoZWxlbWVudCwgaW5kZXgpID0+ICg8QnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51fSBkaXNhYmxlZD17YC8ke3JvdXRlci5wYXRobmFtZS5zcGxpdChcIi9cIilbMV19YCA9PT0gZWxlbWVudC51cmwucGF0aG5hbWV9IHN0YXJ0SWNvbj17ZWxlbWVudC5pY29ufSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChlbGVtZW50LnVybCl9PntlbGVtZW50LnRpdGxlfTwvQnV0dG9uPikpfVxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0Y29uc3QgdGV4dCA9IHllbGxvd1tcIkE3MDBcIl07XHJcblxyXG5cdHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdGxvZ286IHtcclxuXHRcdFx0bWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdGhlaWdodDogNDEsXHJcblx0XHRcdGFuaW1hdGlvbjogXCJyb3RhdGUgNXMgbGluZWFyIGluZmluaXRlXCIsXHJcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjogXCI1MCUgNTAlXCJcclxuXHRcdH0sXHJcblx0XHR0aXRsZToge1xyXG5cdFx0XHRmbGV4R3JvdzogMSxcclxuXHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCIsXHJcblx0XHRcdGZvbnRGYW1pbHk6IFwiQmxhY2tzd29yZCwgc2Fucy1zZXJpZlwiXHJcblx0XHR9LFxyXG5cdFx0bWVudToge1xyXG5cdFx0XHRwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHRcdFx0cGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxyXG5cdFx0XHRmb250RmFtaWx5OiBcIlNwb3FhIEhhbiBTYW5zLCBzYW5zLXNlcmlmXCIsXHJcblx0XHRcdFwiJjpkaXNhYmxlZFwiOiB7XHJcblx0XHRcdFx0Y29sb3I6IHRleHQsXHJcblx0XHRcdFx0Zm9udFdlaWdodDogXCJib2xkXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==