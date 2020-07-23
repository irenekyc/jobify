webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobCard */ \"./src/components/JobCard.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/Main.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:90%;\\n    padding: 100px 50px;\\n    display: grid;\\n    grid-gap: 2rem;\\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"\\n    width:100%;\\n    height:100%;\\n    display:grid;\\n    place-items:center;\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n // import axios from 'axios';\n\nvar Main = function Main(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      latestJobs = _useState[0],\n      setLatestJobs = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setLatestJobs(props.jobs.length > 0 ? props.jobs : []);\n    console.log(\"hi from useEffect\");\n  }, []);\n  var MainSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].main(_templateObject());\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2());\n  return __jsx(MainSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, latestJobs.map(function (job) {\n    return __jsx(_JobCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      key: job.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 37\n      }\n    }, job.title);\n  })));\n};\n\n_s(Main, \"tmfcAdSbHreNzsV2ZL6feRBGXDA=\");\n\n_c = Main;\nMain.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          return _context.abrupt(\"return\", {\n            jobs: [{\n              id: 1,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 2,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 3,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 4,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 5,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 6,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 7,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 8,\n              title: \"Web developer\",\n              location: \"USA\"\n            }, {\n              id: 9,\n              title: \"Web developer\",\n              location: \"USA\"\n            }]\n          });\n\n        case 4:\n          _context.prev = 4;\n          _context.t0 = _context[\"catch\"](0);\n          console.error(e);\n          console.log(\"from error\");\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 4]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluLmpzPzc4MmUiXSwibmFtZXMiOlsiTWFpbiIsInByb3BzIiwidXNlU3RhdGUiLCJsYXRlc3RKb2JzIiwic2V0TGF0ZXN0Sm9icyIsInVzZUVmZmVjdCIsImpvYnMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiTWFpblNlY3Rpb24iLCJzdHlsZWQiLCJtYWluIiwiQ29udGFpbmVyIiwiZGl2IiwibWFwIiwiam9iIiwiaWQiLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsImxvY2F0aW9uIiwiZXJyb3IiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2dCQyxzREFBUSxDQUFDLElBQUQsQ0FEeEI7QUFBQSxNQUNiQyxVQURhO0FBQUEsTUFDREMsYUFEQzs7QUFHcEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxpQkFBYSxDQUFDSCxLQUFLLENBQUNLLElBQU4sQ0FBV0MsTUFBWCxHQUFvQixDQUFwQixHQUF3Qk4sS0FBSyxDQUFDSyxJQUE5QixHQUFxQyxFQUF0QyxDQUFiO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLE1BQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVixtQkFBakI7QUFLQSxNQUFNQyxTQUFTLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWY7QUFNQSxTQUFPLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0gsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1gsVUFBVSxDQUFDWSxHQUFYLENBQWUsVUFBQUMsR0FBRztBQUFBLFdBQUssTUFBQyxnREFBRDtBQUFTLFNBQUcsRUFBRUEsR0FBRyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCRCxHQUFHLENBQUNFLEtBQTNCLENBQUw7QUFBQSxHQUFsQixDQURMLENBREcsQ0FBUDtBQU1ILENBeEJEOztHQUFNbEIsSTs7S0FBQUEsSTtBQTBCTkEsSUFBSSxDQUFDbUIsZUFBTCxpTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBRVI7QUFDSGIsZ0JBQUksRUFBRSxDQUNGO0FBQ0lXLGdCQUFFLEVBQUUsQ0FEUjtBQUVJQyxtQkFBSyxFQUFFLGVBRlg7QUFHSUUsc0JBQVEsRUFBRTtBQUhkLGFBREUsRUFNRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQU5FLEVBV0Y7QUFDSUgsZ0JBQUUsRUFBRSxDQURSO0FBRUlDLG1CQUFLLEVBQUUsZUFGWDtBQUdJRSxzQkFBUSxFQUFFO0FBSGQsYUFYRSxFQWdCRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQWhCRSxFQXFCRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQXJCRSxFQTBCRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQTFCRSxFQStCRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQS9CRSxFQW9DRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQXBDRSxFQXlDRjtBQUNJSCxnQkFBRSxFQUFFLENBRFI7QUFFSUMsbUJBQUssRUFBRSxlQUZYO0FBR0lFLHNCQUFRLEVBQUU7QUFIZCxhQXpDRTtBQURILFdBRlE7O0FBQUE7QUFBQTtBQUFBO0FBb0RmWixpQkFBTyxDQUFDYSxLQUFSLENBQWNDLENBQWQ7QUFDQWQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBckRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBMERlVCxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBKb2JDYXJkIGZyb20gJy4vSm9iQ2FyZCc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsYXRlc3RKb2JzLCBzZXRMYXRlc3RKb2JzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0TGF0ZXN0Sm9icyhwcm9wcy5qb2JzLmxlbmd0aCA+IDAgPyBwcm9wcy5qb2JzIDogW10pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhpIGZyb20gdXNlRWZmZWN0XCIpXG4gICAgfSwgW10pXG4gICAgY29uc3QgTWFpblNlY3Rpb24gPSBzdHlsZWQubWFpbmBcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBwbGFjZS1pdGVtczpjZW50ZXI7YFxuICAgIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6OTAlO1xuICAgIHBhZGRpbmc6IDEwMHB4IDUwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMnJlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtgXG4gICAgcmV0dXJuIDxNYWluU2VjdGlvbj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIHtsYXRlc3RKb2JzLm1hcChqb2IgPT4gKDxKb2JDYXJkIGtleT17am9iLmlkfT57am9iLnRpdGxlfTwvSm9iQ2FyZD4pKX1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgPC9NYWluU2VjdGlvbj5cblxufVxuXG5NYWluLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgam9iczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlYiBkZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiVVNBXCJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoe1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZnJvbSBlcnJvclwiKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main.js\n");

/***/ })

})