webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/UserArea/index.js":
/*!******************************************!*\
  !*** ./src/components/UserArea/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/user */ \"./src/store/actions/user.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/UserArea/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar UserArea = function UserArea() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      expand = _useState[0],\n      setExpand = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      browsedJob = _useState2[0],\n      setBrowsedJob = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      userAreaOpen = _useSelector.userAreaOpen;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (userAreaOpen) {\n      setExpand(\"expand\");\n    } else {\n      setExpand(null);\n    }\n  }, [userAreaOpen]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var history = JSON.parse(localStorage.getItem(\"testingBrowsed\"));\n\n    if (history) {\n      return setBrowsedJob(history);\n    }\n  }, [userAreaOpen]);\n  return __jsx(\"div\", {\n    className: \"user-area-modal \".concat(expand),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 12\n    }\n  }, __jsx(\"p\", {\n    className: \"close-user-area-div\",\n    onClick: function onClick() {\n      return dispatch(Object(_store_actions_user__WEBPACK_IMPORTED_MODULE_2__[\"close_user_area\"])());\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-arrow-left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 88\n    }\n  }), \" \"), __jsx(\"div\", {\n    className: \"user-area-user_info\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"user-area-user_info_pic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-user\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"user-area-user_info_details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \" User \"))), __jsx(\"div\", {\n    className: \"browsing-history\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"Browsing History\"), userAreaOpen && browsedJob.length > 0 && browsedJob.map(function (history, index) {\n    if (index < 5) {\n      return __jsx(\"div\", {\n        className: \"browsing-history-card\",\n        id: index,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 29\n        }\n      }, __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }\n      }, history.company), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 25\n        }\n      }, history.title), __jsx(\"a\", {\n        href: \"/details/\".concat(history.id),\n        target: \"_blank\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 25\n        }\n      }, \" View Details\"));\n    }\n  })));\n};\n\n_s(UserArea, \"MzuM2eVks2yapfjOEOEjbFN/hJg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = UserArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserArea);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserArea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQXJlYS9pbmRleC5qcz8xM2I2Il0sIm5hbWVzIjpbIlVzZXJBcmVhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwiYnJvd3NlZEpvYiIsInNldEJyb3dzZWRKb2IiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJBcmVhT3BlbiIsInVzZUVmZmVjdCIsImhpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VfdXNlcl9hcmVhIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJjb21wYW55IiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQixrQkFFU0Msc0RBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFWkMsTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBR2lCRixzREFBUSxDQUFDLEVBQUQsQ0FIekI7QUFBQSxNQUdaRyxVQUhZO0FBQUEsTUFHQUMsYUFIQTs7QUFBQSxxQkFJTUMsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUpqQjtBQUFBLE1BSVhDLFlBSlcsZ0JBSVhBLFlBSlc7O0FBTW5CQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRCxZQUFKLEVBQWtCO0FBQ2ROLGVBQVMsQ0FBQyxRQUFELENBQVQ7QUFDSCxLQUZELE1BRU87QUFDSEEsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNIO0FBQ0osR0FOUSxFQU1OLENBQUNNLFlBQUQsQ0FOTSxDQUFUO0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsQ0FBWCxDQUFoQjs7QUFDQSxRQUFJSixPQUFKLEVBQWE7QUFDVCxhQUFPTixhQUFhLENBQUNNLE9BQUQsQ0FBcEI7QUFDSDtBQUNKLEdBTFEsRUFLTixDQUFDRixZQUFELENBTE0sQ0FBVDtBQU1BLFNBQU87QUFBSyxhQUFTLDRCQUFxQlAsTUFBckIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBbUMsV0FBTyxFQUFFO0FBQUEsYUFBTUgsUUFBUSxDQUFDaUIsMkVBQWUsRUFBaEIsQ0FBZDtBQUFBLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0U7QUFBRyxhQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUEvRSxNQURHLEVBRUg7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQUpKLENBRkcsRUFVSDtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixFQUVLUCxZQUFZLElBQUlMLFVBQVUsQ0FBQ2EsTUFBWCxHQUFvQixDQUFwQyxJQUF5Q2IsVUFBVSxDQUFDYyxHQUFYLENBQWUsVUFBQ1AsT0FBRCxFQUFVUSxLQUFWLEVBQW9CO0FBQ3pFLFFBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxhQUFRO0FBQUssaUJBQVMsRUFBQyx1QkFBZjtBQUF1QyxVQUFFLEVBQUVBLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlSLE9BQU8sQ0FBQ1MsT0FBWixDQURJLEVBRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJVCxPQUFPLENBQUNVLEtBQVosQ0FGSSxFQUdKO0FBQUcsWUFBSSxxQkFBY1YsT0FBTyxDQUFDVyxFQUF0QixDQUFQO0FBQW1DLGNBQU0sRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhJLENBQVI7QUFLSDtBQUNKLEdBUnlDLENBRjlDLENBVkcsQ0FBUDtBQTBCSCxDQTlDRDs7R0FBTXhCLFE7VUFDZUUsdUQsRUFHUU0sdUQ7OztLQUp2QlIsUTtBQWdEU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2VyQXJlYS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgY2xvc2VfdXNlcl9hcmVhIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyJ1xuXG5jb25zdCBVc2VyQXJlYSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbYnJvd3NlZEpvYiwgc2V0QnJvd3NlZEpvYl0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCB7IHVzZXJBcmVhT3BlbiB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcilcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh1c2VyQXJlYU9wZW4pIHtcbiAgICAgICAgICAgIHNldEV4cGFuZChcImV4cGFuZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0RXhwYW5kKG51bGwpXG4gICAgICAgIH1cbiAgICB9LCBbdXNlckFyZWFPcGVuXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVzdGluZ0Jyb3dzZWRcIikpXG4gICAgICAgIGlmIChoaXN0b3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0QnJvd3NlZEpvYihoaXN0b3J5KVxuICAgICAgICB9XG4gICAgfSwgW3VzZXJBcmVhT3Blbl0pXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgdXNlci1hcmVhLW1vZGFsICR7ZXhwYW5kfWB9PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjbG9zZS11c2VyLWFyZWEtZGl2XCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VfdXNlcl9hcmVhKCkpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJyb3ctbGVmdFwiPjwvaT4gPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYXJlYS11c2VyX2luZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hcmVhLXVzZXJfaW5mb19waWNcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiID48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hcmVhLXVzZXJfaW5mb19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPHA+IFVzZXIgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyb3dzaW5nLWhpc3RvcnlcIj5cbiAgICAgICAgICAgIDxoMj5Ccm93c2luZyBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgIHt1c2VyQXJlYU9wZW4gJiYgYnJvd3NlZEpvYi5sZW5ndGggPiAwICYmIGJyb3dzZWRKb2IubWFwKChoaXN0b3J5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImJyb3dzaW5nLWhpc3RvcnktY2FyZFwiIGlkPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aGlzdG9yeS5jb21wYW55fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntoaXN0b3J5LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvZGV0YWlscy8ke2hpc3RvcnkuaWR9YH0gdGFyZ2V0PVwiX2JsYW5rXCI+IFZpZXcgRGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/UserArea/index.js\n");

/***/ })

})