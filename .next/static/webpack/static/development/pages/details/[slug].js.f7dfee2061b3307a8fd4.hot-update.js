webpackHotUpdate("static/development/pages/details/[slug].js",{

/***/ "./src/components/JobDetails/index.js":
/*!********************************************!*\
  !*** ./src/components/JobDetails/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/JobDetails/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar JobDetailsPage = function JobDetailsPage(_ref) {\n  _s();\n\n  var id = _ref.id,\n      data = _ref.data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (id) {\n      var history = JSON.parse(localStorage.getItem('broswedJob') || '[]');\n      var updatedHistory = history.concat(id);\n      localStorage.setItem('broswedJob', JSON.stringify(updatedHistory));\n    }\n  }, [id]);\n\n  var calculateTime = function calculateTime(createdAt) {\n    var now = new Date();\n    var difference = now - new Date(createdAt);\n    return Math.ceil(difference / 1000 / 60 / 60 / 24);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }\n  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 18\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, \"  \", data.title, \" - Jobify\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    key: \"ogTitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"\".concat(data.company, \" is looking for \").concat(data.title),\n    key: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"\".concat(data.company, \" is looking for \").concat(data.title),\n    key: \"ogDescription\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"job-page-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"div\", {\n    className: \"job-page-main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 25\n    }\n  }, \" Share to your friends:  \", __jsx(\"a\", {\n    href: \"https://api.whatsapp.com/send?text=Checkout this job: \".concat(data.title, \" here: \").concat(data.url),\n    target: \"_blank\",\n    \"data-action\": \"share/whatsapp/share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 53\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 202\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fab fa-whatsapp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 209\n    }\n  })), \" \"), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/\".concat(id, \"&title=\").concat(data.company, \"+is+Looking+for\").concat(data.title, \"source=jobify-peach.vercel.app\"),\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }, \" LinkedIn\"), __jsx(\"a\", {\n    href: \"mailto:?&subject=\".concat(data.company, \"%20is%20looking%20for%20\").concat(data.title, \"&body=Check%20this%20out%20\\nhttps://jobify-peach.vercel.app/details/\").concat(id, \"&title=\").concat(data.company, \"+is+Looking+for\").concat(data.title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 29\n    }\n  }, \" Email\"))), __jsx(\"div\", {\n    className: \"job-page-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"job-company-logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: data.company_logo,\n    alt: data.company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 29\n    }\n  })), __jsx(\"p\", {\n    className: \"description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, \" \", data.company), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 25\n    }\n  }, \" Location: \", data.location), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \" Post at \", calculateTime(data.created_at), \" day(s) ago \"), __jsx(\"div\", {\n    className: \"description-box description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }, \"Description: \", __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 42\n    }\n  }))), __jsx(\"div\", {\n    className: \"job-page-apply\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    className: \"primary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }, \" How to Apply\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.how_to_apply,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 25\n    }\n  }))))) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, \"Loading...\"));\n};\n\n_s(JobDetailsPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = JobDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobDetailsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobDetailsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzP2UzNzQiXSwibmFtZXMiOlsiSm9iRGV0YWlsc1BhZ2UiLCJpZCIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVwZGF0ZWRIaXN0b3J5IiwiY29uY2F0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJub3ciLCJEYXRlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJjb21wYW55IiwidXJsIiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJob3dfdG9fYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJSixFQUFKLEVBQVE7QUFDSixVQUFNSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsS0FBc0MsSUFBakQsQ0FBaEI7QUFDQSxVQUFNQyxjQUFjLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlWCxFQUFmLENBQXZCO0FBQ0FRLGtCQUFZLENBQUNJLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNOLElBQUksQ0FBQ08sU0FBTCxDQUFlSCxjQUFmLENBQW5DO0FBRUg7QUFHSixHQVRRLEVBU04sQ0FBQ1YsRUFBRCxDQVRNLENBQVQ7O0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURqQixDQVBKLENBUEosRUFrQkk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJLE1BQUMscURBQUQ7QUFBZSxVQUFNLEVBQUUxQixJQUFJLENBQUMyQixZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FsQkosQ0FKSixDQWxCSyxDQUFKLEdBK0NXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERiLENBQVA7QUFrREgsQ0F0RUQ7O0dBQU03QixjO1VBQ2FJLHFEOzs7S0FEYkosYztBQXVFU0EsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEpvYkRldGFpbHNQYWdlID0gKHsgaWQsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdicm9zd2VkSm9iJykgfHwgJ1tdJyk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkSGlzdG9yeSA9IGhpc3RvcnkuY29uY2F0KGlkKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdicm9zd2VkSm9iJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZEhpc3RvcnkpKVxuXG4gICAgICAgIH1cblxuXG4gICAgfSwgW2lkXSlcbiAgICBjb25zdCBjYWxjdWxhdGVUaW1lID0gKGNyZWF0ZWRBdCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBub3cgLSBuZXcgRGF0ZShjcmVhdGVkQXQpXG4gICAgICAgIHJldHVybiAoTWF0aC5jZWlsKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KSlcblxuICAgIH1cblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIHtkYXRhID8gKDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT4gIHtkYXRhLnRpdGxlfSAtIEpvYmlmeTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtkYXRhLnRpdGxlfSBrZXk9J29nVGl0bGUnIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD0nSm9iaWZ5OiBGaW5kIHlvdXIgZHJlYW0gZGV2ZWxvcGVyIGpvYicga2V5PSdvZ1NpdGVOYW1lJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgJHtkYXRhLmNvbXBhbnl9IGlzIGxvb2tpbmcgZm9yICR7ZGF0YS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgJHtkYXRhLmNvbXBhbnl9IGlzIGxvb2tpbmcgZm9yICR7ZGF0YS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9J29nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PScnIGtleT0nb2dJbWFnZScgLz4gKi99XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub2ZldHQmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2Utc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBTaGFyZSB0byB5b3VyIGZyaWVuZHM6ICA8YSBocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1DaGVja291dCB0aGlzIGpvYjogJHtkYXRhLnRpdGxlfSBoZXJlOiAke2RhdGEudXJsfWB9IHRhcmdldD1cIl9ibGFua1wiIGRhdGEtYWN0aW9uPVwic2hhcmUvd2hhdHNhcHAvc2hhcmVcIj48c3Bhbj4gPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXdoYXRzYXBwXCI+PC9pPjwvc3Bhbj4gPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9aHR0cHM6Ly9qb2JpZnktcGVhY2gudmVyY2VsLmFwcC9kZXRhaWxzLyR7aWR9JnRpdGxlPSR7ZGF0YS5jb21wYW55fStpcytMb29raW5nK2ZvciR7ZGF0YS50aXRsZX1zb3VyY2U9am9iaWZ5LXBlYWNoLnZlcmNlbC5hcHBgfSB0YXJnZXQ9XCJfYmxhbmtcIj4gTGlua2VkSW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzo/JnN1YmplY3Q9JHtkYXRhLmNvbXBhbnl9JTIwaXMlMjBsb29raW5nJTIwZm9yJTIwJHtkYXRhLnRpdGxlfSZib2R5PUNoZWNrJTIwdGhpcyUyMG91dCUyMFxcbmh0dHBzOi8vam9iaWZ5LXBlYWNoLnZlcmNlbC5hcHAvZGV0YWlscy8ke2lkfSZ0aXRsZT0ke2RhdGEuY29tcGFueX0raXMrTG9va2luZytmb3Ike2RhdGEudGl0bGV9YH0+IEVtYWlsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1jb21wYW55LWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5jb21wYW55X2xvZ299IGFsdD17ZGF0YS5jb21wYW55fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi10ZXh0XCI+IHtkYXRhLmNvbXBhbnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LXRleHRcIj4gTG9jYXRpb246IHtkYXRhLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY29uZGFyeS10ZXh0XCI+IFBvc3QgYXQge2NhbGN1bGF0ZVRpbWUoZGF0YS5jcmVhdGVkX2F0KX0gZGF5KHMpIGFnbyA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWJveCBkZXNjcmlwdGlvbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1hcHBseVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByaW1hcnktdGV4dFwiPiBIb3cgdG8gQXBwbHk8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtkYXRhLmhvd190b19hcHBseX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PikgOiAoPGRpdj5Mb2FkaW5nLi4uPC9kaXY+KX1cbiAgICA8L0ZyYWdtZW50PlxufVxuZXhwb3J0IGRlZmF1bHQgSm9iRGV0YWlsc1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/JobDetails/index.js\n");

/***/ })

})