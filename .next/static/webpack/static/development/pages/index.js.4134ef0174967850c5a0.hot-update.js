webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/UserArea/index.js":
/*!******************************************!*\
  !*** ./src/components/UserArea/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/user */ \"./src/store/actions/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/UserArea/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar UserArea = function UserArea() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      browsedJob = _useState2[0],\n      setBrowsedJob = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      userAreaOpen = _useSelector.userAreaOpen;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (userAreaOpen) {\n      setExpand(\"expand\");\n    } else {\n      setExpand(null);\n    }\n  }, [userAreaOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var history = JSON.parse(localStorage.getItem(\"testingBrowsed\"));\n\n    if (history) {\n      return setBrowsedJob(history);\n    }\n  }, [userAreaOpen]);\n  return __jsx(\"div\", {\n    className: \"user-area-modal \".concat(expand),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 12\n    }\n  }, __jsx(\"p\", {\n    onClick: function onClick() {\n      return dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__[\"close_user_area\"])());\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \" Close \"), __jsx(\"div\", {\n    className: \"user-area-user_info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"user-area-user_info_pic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-user\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"user-area-user_info_details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \" User \"))), __jsx(\"div\", {\n    className: \"browsing-history\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, userAreaOpen && browsedJob.length > 0 && browsedJob.map(function (history, index) {\n    if (index <= 2) {\n      return __jsx(\"div\", {\n        id: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 29\n        }\n      }, __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 45\n        }\n      }, history.company), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 25\n        }\n      }, history.title), __jsx(\"a\", {\n        href: \"/details/\".concat(history.id),\n        target: \"_blank\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }\n      }, \" View Details\"));\n    }\n  })));\n};\n\n_s(UserArea, \"MzuM2eVks2yapfjOEOEjbFN/hJg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = UserArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserArea);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserArea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQXJlYS9pbmRleC5qcz8xM2I2Il0sIm5hbWVzIjpbIlVzZXJBcmVhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwiYnJvd3NlZEpvYiIsInNldEJyb3dzZWRKb2IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJBcmVhT3BlbiIsInVzZUVmZmVjdCIsImhpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VfdXNlcl9hcmVhIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJjb21wYW55IiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQixrQkFFU0Msc0RBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFWkMsTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBR2lCRixzREFBUSxDQUFDLEVBQUQsQ0FIekI7QUFBQSxNQUdaRyxVQUhZO0FBQUEsTUFHQUMsYUFIQTs7QUFBQSxxQkFJTUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUpqQjtBQUFBLE1BSVhDLFlBSlcsZ0JBSVhBLFlBSlc7O0FBTW5CQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRCxZQUFKLEVBQWtCO0FBQ2ROLGVBQVMsQ0FBQyxRQUFELENBQVQ7QUFDSCxLQUZELE1BRU87QUFDSEEsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBQ0osR0FOUSxFQU1OLENBQUNNLFlBQUQsQ0FOTSxDQUFUO0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFoQjs7QUFDQSxRQUFJSixPQUFKLEVBQWE7QUFDVCxhQUFPTixhQUFhLENBQUNNLE9BQUQsQ0FBcEI7QUFDSDtBQUNKLEdBTFEsRUFLTixDQUFDRixZQUFELENBTE0sQ0FBVDtBQU1BLFNBQU87QUFBSyxhQUFTLDRCQUFxQlAsTUFBckIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBRyxXQUFPLEVBQUU7QUFBQSxhQUFNSCxRQUFRLENBQUNpQiwyRUFBZSxFQUFoQixDQUFkO0FBQUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREcsRUFFSDtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLENBSkosQ0FGRyxFQVVIO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1AsWUFBWSxJQUFJTCxVQUFVLENBQUNhLE1BQVgsR0FBb0IsQ0FBcEMsSUFBeUNiLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNQLE9BQUQsRUFBVVEsS0FBVixFQUFvQjtBQUN6RSxRQUFJQSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNaLGFBQVE7QUFBSyxVQUFFLEVBQUVBLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlSLE9BQU8sQ0FBQ1MsT0FBWixDQUFoQixFQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSVQsT0FBTyxDQUFDVSxLQUFaLENBREksRUFFSjtBQUFHLFlBQUkscUJBQWNWLE9BQU8sQ0FBQ1csRUFBdEIsQ0FBUDtBQUFtQyxjQUFNLEVBQUMsUUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSSxDQUFSO0FBR0g7QUFDSixHQU55QyxDQUQ5QyxDQVZHLENBQVA7QUF1QkgsQ0EzQ0Q7O0dBQU14QixRO1VBQ2VFLHVELEVBR1FNLHVEOzs7S0FKdkJSLFE7QUE2Q1NBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVXNlckFyZWEvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGNsb3NlX3VzZXJfYXJlYSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlcidcblxuY29uc3QgVXNlckFyZWEgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2Jyb3dzZWRKb2IsIHNldEJyb3dzZWRKb2JdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgeyB1c2VyQXJlYU9wZW4gfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodXNlckFyZWFPcGVuKSB7XG4gICAgICAgICAgICBzZXRFeHBhbmQoXCJleHBhbmRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEV4cGFuZChudWxsKVxuICAgICAgICB9XG4gICAgfSwgW3VzZXJBcmVhT3Blbl0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRlc3RpbmdCcm93c2VkXCIpKVxuICAgICAgICBpZiAoaGlzdG9yeSkge1xuICAgICAgICAgICAgcmV0dXJuIHNldEJyb3dzZWRKb2IoaGlzdG9yeSlcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyQXJlYU9wZW5dKVxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHVzZXItYXJlYS1tb2RhbCAke2V4cGFuZH1gfT5cbiAgICAgICAgPHAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VfdXNlcl9hcmVhKCkpfT4gQ2xvc2UgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYXJlYS11c2VyX2luZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hcmVhLXVzZXJfaW5mb19waWNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiID48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hcmVhLXVzZXJfaW5mb19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPHA+IFVzZXIgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzaW5nLWhpc3RvcnlcIj5cbiAgICAgICAgICAgIHt1c2VyQXJlYU9wZW4gJiYgYnJvd3NlZEpvYi5sZW5ndGggPiAwICYmIGJyb3dzZWRKb2IubWFwKChoaXN0b3J5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBpZD17aW5kZXh9PjxwPntoaXN0b3J5LmNvbXBhbnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2hpc3RvcnkudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9kZXRhaWxzLyR7aGlzdG9yeS5pZH1gfSB0YXJnZXQ9XCJfYmxhbmtcIj4gVmlldyBEZXRhaWxzPC9hPjwvZGl2PilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UserArea/index.js\n");

/***/ })

})