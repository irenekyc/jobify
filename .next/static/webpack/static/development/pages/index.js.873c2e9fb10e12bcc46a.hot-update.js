webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width:90%;\\n    padding: 100px 50px;\\n    display: grid;\\n    grid-gap: 2rem;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width:100%;\\n    height:100%;\\n    display:grid;\\n    place-items:center;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import axios from 'axios';\n\nvar Main = function Main(_ref) {\n  _s();\n\n  var jobs = _ref.jobs,\n      loading = _ref.loading,\n      error = _ref.error;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(jobs);\n  }, [loading]);\n  var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main(_templateObject());\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n  return __jsx(MainSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, loading ? __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 24\n    }\n  }, \" Loading ...\") : __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 48\n    }\n  }, \"Show job now\")));\n};\n\n_s(Main, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiTWFpbiIsImpvYnMiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiTWFpblNlY3Rpb24iLCJzdHlsZWQiLCJtYWluIiwiQ29udGFpbmVyIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDdkNDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUVILEdBSFEsRUFHTixDQUFDQyxPQUFELENBSE0sQ0FBVDtBQUlBLE1BQU1LLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVixtQkFBakI7QUFLQSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWY7QUFNQSxTQUFPLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1QsT0FBTyxHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQUgsR0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEdkMsQ0FERyxDQUFQO0FBT0gsQ0F2QkQ7O0dBQU1GLEk7O0tBQUFBLEk7QUF5QlNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSm9iQ2FyZCBmcm9tICcuL0pvYkNhcmQnO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbmNvbnN0IE1haW4gPSAoeyBqb2JzLCBsb2FkaW5nLCBlcnJvciB9KSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coam9icylcblxuICAgIH0sIFtsb2FkaW5nXSlcbiAgICBjb25zdCBNYWluU2VjdGlvbiA9IHN0eWxlZC5tYWluYFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIHBsYWNlLWl0ZW1zOmNlbnRlcjtgXG4gICAgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDo5MCU7XG4gICAgcGFkZGluZzogMTAwcHggNTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO2BcbiAgICByZXR1cm4gPE1haW5TZWN0aW9uPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAge2xvYWRpbmcgPyA8aDI+IExvYWRpbmcgLi4uPC9oMj4gOiA8aDI+U2hvdyBqb2Igbm93PC9oMj59XG4gICAgICAgICAgICB7Lyogam9icy5tYXAoam9iID0+ICg8Sm9iQ2FyZCBrZXk9e2pvYi5pZH0+e2pvYi50aXRsZX08L0pvYkNhcmQ+KSl9ICovfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L01haW5TZWN0aW9uPlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ })

})