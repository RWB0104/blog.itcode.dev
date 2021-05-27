self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/section/posts/PostList.js":
/*!**********************************************!*\
  !*** ./components/section/posts/PostList.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/env */ "./common/env.js");
/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostItem */ "./components/section/posts/PostItem.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\psj17\\source\\Github\\Kapoo\\components\\section\\posts\\PostList.js",
    _s = $RefreshSig$();

/**
 * 게시글 리스트 컴포넌트 JavaScript
 *
 * @author RWB
 * @since 2021.05.09 Sun 12:34:25
 */
// 라이브러리 모듈


 // 사용자 모듈



/**
 * 게시글 리스트 JSX 반환 함수
 *
 * @param {JSON[]} data: 게시글 리스트
 *
 * @returns {JSX} JSX 객체
 */

function PostList(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;
  var classes = getStyles();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var category = router.query.category || "All";
  var row = data.filter(function (element) {
    return category === "All" ? true : element.category === category;
  }).sort(function (post1, post2) {
    return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
  });
  var total = Math.max(Math.ceil(row.length / _common_env__WEBPACK_IMPORTED_MODULE_2__.MAX_CONTENT), 1);
  var page = parseInt(router.query.page) || 1;
  var content = row.slice((page - 1) * _common_env__WEBPACK_IMPORTED_MODULE_2__.MAX_CONTENT, page * _common_env__WEBPACK_IMPORTED_MODULE_2__.MAX_CONTENT);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
      container: true,
      spacing: 1,
      children: content.map(function (element, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostItem__WEBPACK_IMPORTED_MODULE_3__.default, {
          item: element,
          index: index
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 38
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
      className: classes.pagination,
      count: total,
      page: page,
      defaultPage: 1,
      color: "primary",
      siblingCount: 1,
      boundaryCount: 2,
      showFirstButton: true,
      showLastButton: true,
      onChange: function onChange(e, page) {
        return router.push({
          query: {
            category: category,
            page: page
          }
        }, undefined, {
          scroll: false
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 3
  }, this);
}
/**
 * 스타일 객체 반환 함수
 *
 * @returns {JSON} 스타일 객체
 */

_s(PostList, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = PostList;

function getStyles() {
  return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {
    return {
      pagination: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        "& > ul": {
          justifyContent: "center"
        }
      }
    };
  })();
}

var _c;

$RefreshReg$(_c, "PostList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3Bvc3RzL1Bvc3RMaXN0LmpzIl0sIm5hbWVzIjpbIlBvc3RMaXN0IiwiZGF0YSIsImNsYXNzZXMiLCJnZXRTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXRlZ29yeSIsInF1ZXJ5Iiwicm93IiwiZmlsdGVyIiwiZWxlbWVudCIsInNvcnQiLCJwb3N0MSIsInBvc3QyIiwiRGF0ZSIsImRhdGUiLCJ0b3RhbCIsIk1hdGgiLCJtYXgiLCJjZWlsIiwibGVuZ3RoIiwiTUFYX0NPTlRFTlQiLCJwYWdlIiwicGFyc2VJbnQiLCJjb250ZW50Iiwic2xpY2UiLCJtYXAiLCJpbmRleCIsInBhZ2luYXRpb24iLCJlIiwicHVzaCIsInVuZGVmaW5lZCIsInNjcm9sbCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFFBQVQsT0FDZjtBQUFBOztBQUFBOztBQUFBLE1BRG1DQyxJQUNuQyxRQURtQ0EsSUFDbkM7QUFDQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsUUFBYixJQUF5QixLQUExQztBQUVBLE1BQU1FLEdBQUcsR0FBR1AsSUFBSSxDQUFDUSxNQUFMLENBQVksVUFBQUMsT0FBTztBQUFBLFdBQUlKLFFBQVEsS0FBSyxLQUFiLEdBQXFCLElBQXJCLEdBQTRCSSxPQUFPLENBQUNKLFFBQVIsS0FBcUJBLFFBQXJEO0FBQUEsR0FBbkIsRUFBa0ZLLElBQWxGLENBQXVGLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFdBQW1CLElBQUlDLElBQUosQ0FBU0YsS0FBSyxDQUFDRyxJQUFmLElBQXVCLElBQUlELElBQUosQ0FBU0QsS0FBSyxDQUFDRSxJQUFmLENBQXZCLEdBQThDLENBQUMsQ0FBL0MsR0FBbUQsQ0FBdEU7QUFBQSxHQUF2RixDQUFaO0FBRUEsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxJQUFMLENBQVVYLEdBQUcsQ0FBQ1ksTUFBSixHQUFhQyxvREFBdkIsQ0FBVCxFQUE4QyxDQUE5QyxDQUFkO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNuQixNQUFNLENBQUNHLEtBQVAsQ0FBYWUsSUFBZCxDQUFSLElBQStCLENBQTVDO0FBRUEsTUFBTUUsT0FBTyxHQUFHaEIsR0FBRyxDQUFDaUIsS0FBSixDQUFVLENBQUNILElBQUksR0FBRyxDQUFSLElBQWFELG9EQUF2QixFQUFvQ0MsSUFBSSxHQUFHRCxvREFBM0MsQ0FBaEI7QUFFQSxzQkFDQyw4REFBQyxrREFBRDtBQUFBLDRCQUNDLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUNFRyxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFDaEIsT0FBRCxFQUFVaUIsS0FBVjtBQUFBLDRCQUFvQiw4REFBQyw4Q0FBRDtBQUFzQixjQUFJLEVBQUVqQixPQUE1QjtBQUFxQyxlQUFLLEVBQUVpQjtBQUE1QyxXQUFlQSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXBCO0FBQUEsT0FBWjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLHdEQUFEO0FBQ0MsZUFBUyxFQUFFekIsT0FBTyxDQUFDMEIsVUFEcEI7QUFFQyxXQUFLLEVBQUVaLEtBRlI7QUFHQyxVQUFJLEVBQUVNLElBSFA7QUFJQyxpQkFBVyxFQUFFLENBSmQ7QUFLQyxXQUFLLEVBQUMsU0FMUDtBQU1DLGtCQUFZLEVBQUUsQ0FOZjtBQU9DLG1CQUFhLEVBQUUsQ0FQaEI7QUFRQyxxQkFBZSxNQVJoQjtBQVNDLG9CQUFjLE1BVGY7QUFVQyxjQUFRLEVBQUUsa0JBQUNPLENBQUQsRUFBSVAsSUFBSjtBQUFBLGVBQWFsQixNQUFNLENBQUMwQixJQUFQLENBQVk7QUFDbEN2QixlQUFLLEVBQUU7QUFDTkQsb0JBQVEsRUFBRUEsUUFESjtBQUVOZ0IsZ0JBQUksRUFBRUE7QUFGQTtBQUQyQixTQUFaLEVBS3BCUyxTQUxvQixFQUtUO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUxTLENBQWI7QUFBQTtBQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXlCQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBOUN3QmhDLFE7VUFJUkssa0Q7OztLQUpRTCxROztBQStDeEIsU0FBU0csU0FBVCxHQUNBO0FBQ0MsU0FBTzhCLDZEQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDN0JOLGdCQUFVLEVBQUU7QUFDWE8saUJBQVMsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsRUFBZCxDQURBO0FBRVhDLG9CQUFZLEVBQUVILEtBQUssQ0FBQ0UsT0FBTixDQUFjLEVBQWQsQ0FGSDtBQUdYLGtCQUFVO0FBQ1RFLHdCQUFjLEVBQUU7QUFEUDtBQUhDO0FBRGlCLEtBQVo7QUFBQSxHQUFELENBQVYsRUFBUDtBQVNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzLmQ3NjQ0Mzg2MTNmMjIyOTBlYzM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6rKM7Iuc6riAIOumrOyKpO2KuCDsu7Ttj6zrhIztirggSmF2YVNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIFJXQlxyXG4gKiBAc2luY2UgMjAyMS4wNS4wOSBTdW4gMTI6MzQ6MjVcclxuICovXHJcblxyXG4vLyDrnbzsnbTruIzrn6zrpqwg66qo65OIXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBCb3gsIEdyaWQsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcblxyXG4vLyDsgqzsmqnsnpAg66qo65OIXHJcbmltcG9ydCB7IE1BWF9DT05URU5UIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnZcIjtcclxuaW1wb3J0IFBvc3RJdGVtIGZyb20gXCIuL1Bvc3RJdGVtXCI7XHJcblxyXG4vKipcclxuICog6rKM7Iuc6riAIOumrOyKpO2KuCBKU1gg67CY7ZmYIO2VqOyImFxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTT05bXX0gZGF0YTog6rKM7Iuc6riAIOumrOyKpO2KuFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7SlNYfSBKU1gg6rCd7LK0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0TGlzdCh7IGRhdGEgfSlcclxue1xyXG5cdGNvbnN0IGNsYXNzZXMgPSBnZXRTdHlsZXMoKTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5IHx8IFwiQWxsXCI7XHJcblxyXG5cdGNvbnN0IHJvdyA9IGRhdGEuZmlsdGVyKGVsZW1lbnQgPT4gY2F0ZWdvcnkgPT09IFwiQWxsXCIgPyB0cnVlIDogZWxlbWVudC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpLnNvcnQoKHBvc3QxLCBwb3N0MikgPT4gKG5ldyBEYXRlKHBvc3QxLmRhdGUpID4gbmV3IERhdGUocG9zdDIuZGF0ZSkgPyAtMSA6IDEpKTtcclxuXHJcblx0Y29uc3QgdG90YWwgPSBNYXRoLm1heChNYXRoLmNlaWwocm93Lmxlbmd0aCAvIE1BWF9DT05URU5UKSwgMSk7XHJcblx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5wYWdlKSB8fCAxO1xyXG5cclxuXHRjb25zdCBjb250ZW50ID0gcm93LnNsaWNlKChwYWdlIC0gMSkgKiBNQVhfQ09OVEVOVCwgcGFnZSAqIE1BWF9DT05URU5UKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuXHRcdFx0XHR7Y29udGVudC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiA8UG9zdEl0ZW0ga2V5PXtpbmRleH0gaXRlbT17ZWxlbWVudH0gaW5kZXg9e2luZGV4fSAvPil9XHJcblx0XHRcdDwvR3JpZD5cclxuXHJcblx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259XHJcblx0XHRcdFx0Y291bnQ9e3RvdGFsfVxyXG5cdFx0XHRcdHBhZ2U9e3BhZ2V9XHJcblx0XHRcdFx0ZGVmYXVsdFBhZ2U9ezF9XHJcblx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRzaWJsaW5nQ291bnQ9ezF9XHJcblx0XHRcdFx0Ym91bmRhcnlDb3VudD17Mn1cclxuXHRcdFx0XHRzaG93Rmlyc3RCdXR0b25cclxuXHRcdFx0XHRzaG93TGFzdEJ1dHRvblxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSwgcGFnZSkgPT4gcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0Y2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG5cdFx0XHRcdFx0XHRwYWdlOiBwYWdlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgdW5kZWZpbmVkLCB7IHNjcm9sbDogZmFsc2UgfSl9XHJcblx0XHRcdC8+XHJcblx0XHQ8L0JveD5cclxuXHQpO1xyXG59XHJcblxyXG4vKipcclxuICog7Iqk7YOA7J28IOqwneyytCDrsJjtmZgg7ZWo7IiYXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtKU09OfSDsiqTtg4Dsnbwg6rCd7LK0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdHlsZXMoKVxyXG57XHJcblx0cmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG5cdFx0XHRtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxyXG5cdFx0XHRcIiYgPiB1bFwiOiB7XHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pKSgpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==