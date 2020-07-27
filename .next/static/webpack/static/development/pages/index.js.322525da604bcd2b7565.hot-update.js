webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/UserArea/index.js":
/*!******************************************!*\
  !*** ./src/components/UserArea/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/user */ \"./src/store/actions/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/UserArea/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar UserArea = function UserArea() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      browsedJob = _useState2[0],\n      setBrowsedJob = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      userAreaOpen = _useSelector.userAreaOpen;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (userAreaOpen) {\n      setExpand(\"expand\");\n    } else {\n      setExpand(null);\n    }\n  }, [userAreaOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var history = JSON.parse(localStorage.getItem(\"testingBrowsed\"));\n    setBrowsedJob(history);\n  }, []);\n  return __jsx(\"div\", {\n    className: \"user-area-modal \".concat(expand),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 12\n    }\n  }, __jsx(\"p\", {\n    onClick: function onClick() {\n      return dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__[\"close_user_area\"])());\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \" Close \"), __jsx(\"div\", {\n    className: \"browsing-history\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, browsedJob.map(function (history, index) {\n    if (index <= 2) {\n      return __jsx(\"div\", {\n        id: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 29\n        }\n      }, __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 45\n        }\n      }, history.company), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 25\n        }\n      }, history.title), __jsx(\"a\", {\n        href: \"/details/\".concat(history.id),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }\n      }, \" View Details\"));\n    }\n  })));\n};\n\n_s(UserArea, \"MzuM2eVks2yapfjOEOEjbFN/hJg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = UserArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserArea);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserArea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQXJlYS9pbmRleC5qcz8xM2I2Il0sIm5hbWVzIjpbIlVzZXJBcmVhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwiYnJvd3NlZEpvYiIsInNldEJyb3dzZWRKb2IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJBcmVhT3BlbiIsInVzZUVmZmVjdCIsImhpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VfdXNlcl9hcmVhIiwibWFwIiwiaW5kZXgiLCJjb21wYW55IiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQixrQkFFU0Msc0RBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFWkMsTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBR2lCRixzREFBUSxDQUFDLEVBQUQsQ0FIekI7QUFBQSxNQUdaRyxVQUhZO0FBQUEsTUFHQUMsYUFIQTs7QUFBQSxxQkFJTUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUpqQjtBQUFBLE1BSVhDLFlBSlcsZ0JBSVhBLFlBSlc7O0FBTW5CQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRCxZQUFKLEVBQWtCO0FBQ2ROLGVBQVMsQ0FBQyxRQUFELENBQVQ7QUFDSCxLQUZELE1BRU87QUFDSEEsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBQ0osR0FOUSxFQU1OLENBQUNNLFlBQUQsQ0FOTSxDQUFUO0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFoQjtBQUNBVixpQkFBYSxDQUFDTSxPQUFELENBQWI7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0EsU0FBTztBQUFLLGFBQVMsNEJBQXFCVCxNQUFyQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFHLFdBQU8sRUFBRTtBQUFBLGFBQU1ILFFBQVEsQ0FBQ2lCLDJFQUFlLEVBQWhCLENBQWQ7QUFBQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERyxFQUVIO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1osVUFBVSxDQUFDYSxHQUFYLENBQWUsVUFBQ04sT0FBRCxFQUFVTyxLQUFWLEVBQW9CO0FBQ2hDLFFBQUlBLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ1osYUFBUTtBQUFLLFVBQUUsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSVAsT0FBTyxDQUFDUSxPQUFaLENBQWhCLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJUixPQUFPLENBQUNTLEtBQVosQ0FESSxFQUVKO0FBQUcsWUFBSSxxQkFBY1QsT0FBTyxDQUFDVSxFQUF0QixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkksQ0FBUjtBQUdIO0FBQ0osR0FOQSxDQURMLENBRkcsQ0FBUDtBQWVILENBbENEOztHQUFNdkIsUTtVQUNlRSx1RCxFQUdRTSx1RDs7O0tBSnZCUixRO0FBb0NTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1VzZXJBcmVhL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBjbG9zZV91c2VyX2FyZWEgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXInXG5cbmNvbnN0IFVzZXJBcmVhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IFtleHBhbmQsIHNldEV4cGFuZF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFticm93c2VkSm9iLCBzZXRCcm93c2VkSm9iXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IHsgdXNlckFyZWFPcGVuIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVzZXJBcmVhT3Blbikge1xuICAgICAgICAgICAgc2V0RXhwYW5kKFwiZXhwYW5kXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFeHBhbmQobnVsbClcbiAgICAgICAgfVxuICAgIH0sIFt1c2VyQXJlYU9wZW5dKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0ZXN0aW5nQnJvd3NlZFwiKSlcbiAgICAgICAgc2V0QnJvd3NlZEpvYihoaXN0b3J5KVxuXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdXNlci1hcmVhLW1vZGFsICR7ZXhwYW5kfWB9PlxuICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjbG9zZV91c2VyX2FyZWEoKSl9PiBDbG9zZSA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NpbmctaGlzdG9yeVwiPlxuICAgICAgICAgICAge2Jyb3dzZWRKb2IubWFwKChoaXN0b3J5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBpZD17aW5kZXh9PjxwPntoaXN0b3J5LmNvbXBhbnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2hpc3RvcnkudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9kZXRhaWxzLyR7aGlzdG9yeS5pZH1gfT4gVmlldyBEZXRhaWxzPC9hPjwvZGl2PilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJBcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UserArea/index.js\n");

/***/ })

})