webpackHotUpdate("static/development/pages/details/[slug].js",{

/***/ "./node_modules/@fortawesome/fontawesome-free/js/brands.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/brands.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/components/JobDetails/index.js":
/*!********************************************!*\
  !*** ./src/components/JobDetails/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ \"./node_modules/@fortawesome/fontawesome-free/js/brands.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/JobDetails/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar JobDetailsPage = function JobDetailsPage(_ref) {\n  _s();\n\n  var id = _ref.id,\n      data = _ref.data;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      url = _useState[0],\n      setURL = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (id) {\n      var history = JSON.parse(localStorage.getItem('broswedJob') || '[]');\n      var updatedHistory = history.concat(id);\n      localStorage.setItem('broswedJob', JSON.stringify(updatedHistory));\n      console.log(router);\n    }\n  }, [id]);\n\n  var calculateTime = function calculateTime(createdAt) {\n    var now = new Date();\n    var difference = now - new Date(createdAt);\n    return Math.ceil(difference / 1000 / 60 / 60 / 24);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 12\n    }\n  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 18\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"  \", data.title, \" - Jobify\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    key: \"ogTitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"\".concat(data.company, \" is looking for \").concat(data.title),\n    key: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"\".concat(data.company, \" is looking for \").concat(data.title),\n    key: \"ogDescription\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"job-page-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"div\", {\n    className: \"job-page-main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 25\n    }\n  }, \" Share to your friends:  \", __jsx(\"a\", {\n    href: \"https://api.whatsapp.com/send?text=Checkout this job: \".concat(data.title, \" here: \").concat(data.url),\n    target: \"_blank\",\n    \"data-action\": \"share/whatsapp/share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 53\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 202\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fab fa-whatsapp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 209\n    }\n  })), \" \"), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/\".concat(id, \"&title=\").concat(data.company, \"+is+Looking+for\").concat(data.title, \"source=jobify-peach.vercel.app\"),\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 29\n    }\n  }, \" LinkedIn\"), __jsx(\"a\", {\n    href: \"mailto:?&subject=\".concat(data.company, \"%20is%20looking%20for%20\").concat(data.title, \"&body=Check%20this%20out%20\\nhttps://jobify-peach.vercel.app/details/\").concat(id, \"&title=\").concat(data.company, \"+is+Looking+for\").concat(data.title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 29\n    }\n  }, \" Email\"))), __jsx(\"div\", {\n    className: \"job-page-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"job-company-logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: data.company_logo,\n    alt: data.company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 29\n    }\n  })), __jsx(\"p\", {\n    className: \"description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }, \" \", data.company), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }, \" Location: \", data.location), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 25\n    }\n  }, \" Post at \", calculateTime(data.created_at), \" day(s) ago \"), __jsx(\"div\", {\n    className: \"description-box description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 25\n    }\n  }, \"Description: \", __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 42\n    }\n  }))), __jsx(\"div\", {\n    className: \"job-page-apply\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    className: \"primary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 25\n    }\n  }, \" How to Apply\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.how_to_apply,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 25\n    }\n  }))))) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 25\n    }\n  }, \"Loading...\"));\n};\n\n_s(JobDetailsPage, \"HjLCrf95qSGZbCHXwuRgU0hkt8s=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = JobDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobDetailsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobDetailsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzP2UzNzQiXSwibmFtZXMiOlsiSm9iRGV0YWlsc1BhZ2UiLCJpZCIsImRhdGEiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVSTCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhpc3RvcnkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXBkYXRlZEhpc3RvcnkiLCJjb25jYXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZVRpbWUiLCJjcmVhdGVkQXQiLCJub3ciLCJEYXRlIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJjZWlsIiwidGl0bGUiLCJjb21wYW55IiwiY29tcGFueV9sb2dvIiwibG9jYXRpb24iLCJjcmVhdGVkX2F0IiwiZGVzY3JpcHRpb24iLCJob3dfdG9fYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsRUFBZSxRQUFmQSxFQUFlO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLElBQUQsQ0FETztBQUFBLE1BQzlCQyxHQUQ4QjtBQUFBLE1BQ3pCQyxNQUR5Qjs7QUFFckMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJUCxFQUFKLEVBQVE7QUFDSixVQUFNUSxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsWUFBckIsS0FBc0MsSUFBakQsQ0FBaEI7QUFDQSxVQUFNQyxjQUFjLEdBQUdMLE9BQU8sQ0FBQ00sTUFBUixDQUFlZCxFQUFmLENBQXZCO0FBQ0FX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Q0FBQzZCLFVBQU4sQ0FBckQsaUJBTkosRUFPSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNpQixNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFN0IsSUFBSSxDQUFDOEIsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURqQixDQVBKLENBUEosRUFrQkk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVJLE1BQUMscURBQUQ7QUFBZSxVQUFNLEVBQUU5QixJQUFJLENBQUMrQixZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FsQkosQ0FKSixDQWxCSyxDQUFKLEdBK0NXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaERiLENBQVA7QUFrREgsQ0F4RUQ7O0dBQU1qQyxjO1VBRWFPLHFEOzs7S0FGYlAsYztBQXlFU0EsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9icmFuZHMnO1xuXG5jb25zdCBKb2JEZXRhaWxzUGFnZSA9ICh7IGlkLCBkYXRhIH0pID0+IHtcbiAgICBjb25zdCBbdXJsLCBzZXRVUkxdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnJvc3dlZEpvYicpIHx8ICdbXScpO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEhpc3RvcnkgPSBoaXN0b3J5LmNvbmNhdChpZCk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnJvc3dlZEpvYicsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRIaXN0b3J5KSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdXRlcilcblxuICAgICAgICB9XG5cblxuICAgIH0sIFtpZF0pXG4gICAgY29uc3QgY2FsY3VsYXRlVGltZSA9IChjcmVhdGVkQXQpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gbm93IC0gbmV3IERhdGUoY3JlYXRlZEF0KVxuICAgICAgICByZXR1cm4gKE1hdGguY2VpbChkaWZmZXJlbmNlIC8gMTAwMCAvIDYwIC8gNjAgLyAyNCkpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gPEZyYWdtZW50PlxuICAgICAgICB7ZGF0YSA/ICg8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+ICB7ZGF0YS50aXRsZX0gLSBKb2JpZnk8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17ZGF0YS50aXRsZX0ga2V5PSdvZ1RpdGxlJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9J0pvYmlmeTogRmluZCB5b3VyIGRyZWFtIGRldmVsb3BlciBqb2InIGtleT0nb2dTaXRlTmFtZScgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17YCR7ZGF0YS5jb21wYW55fSBpcyBsb29raW5nIGZvciAke2RhdGEudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17YCR7ZGF0YS5jb21wYW55fSBpcyBsb29raW5nIGZvciAke2RhdGEudGl0bGV9YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PSdvZ0Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PSdvZzppbWFnZScgY29udGVudD0nJyBrZXk9J29nSW1hZ2UnIC8+ICovfVxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbm9mZXR0JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYi1wYWdlLXNoYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gU2hhcmUgdG8geW91ciBmcmllbmRzOiAgPGEgaHJlZj17YGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9Q2hlY2tvdXQgdGhpcyBqb2I6ICR7ZGF0YS50aXRsZX0gaGVyZTogJHtkYXRhLnVybH1gfSB0YXJnZXQ9XCJfYmxhbmtcIiBkYXRhLWFjdGlvbj1cInNoYXJlL3doYXRzYXBwL3NoYXJlXCI+PHNwYW4+IDxpIGNsYXNzTmFtZT1cImZhYiBmYS13aGF0c2FwcFwiPjwvaT48L3NwYW4+IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT9taW5pPXRydWUmdXJsPWh0dHBzOi8vam9iaWZ5LXBlYWNoLnZlcmNlbC5hcHAvZGV0YWlscy8ke2lkfSZ0aXRsZT0ke2RhdGEuY29tcGFueX0raXMrTG9va2luZytmb3Ike2RhdGEudGl0bGV9c291cmNlPWpvYmlmeS1wZWFjaC52ZXJjZWwuYXBwYH0gdGFyZ2V0PVwiX2JsYW5rXCI+IExpbmtlZEluPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BtYWlsdG86PyZzdWJqZWN0PSR7ZGF0YS5jb21wYW55fSUyMGlzJTIwbG9va2luZyUyMGZvciUyMCR7ZGF0YS50aXRsZX0mYm9keT1DaGVjayUyMHRoaXMlMjBvdXQlMjBcXG5odHRwczovL2pvYmlmeS1wZWFjaC52ZXJjZWwuYXBwL2RldGFpbHMvJHtpZH0mdGl0bGU9JHtkYXRhLmNvbXBhbnl9K2lzK0xvb2tpbmcrZm9yJHtkYXRhLnRpdGxlfWB9PiBFbWFpbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItY29tcGFueS1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY29tcGFueV9sb2dvfSBhbHQ9e2RhdGEuY29tcGFueX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGV4dFwiPiB7ZGF0YS5jb21wYW55fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY29uZGFyeS10ZXh0XCI+IExvY2F0aW9uOiB7ZGF0YS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWNvbmRhcnktdGV4dFwiPiBQb3N0IGF0IHtjYWxjdWxhdGVUaW1lKGRhdGEuY3JlYXRlZF9hdCl9IGRheShzKSBhZ28gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1ib3ggZGVzY3JpcHRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtYXBwbHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcmltYXJ5LXRleHRcIj4gSG93IHRvIEFwcGx5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5ob3dfdG9fYXBwbHl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD4pIDogKDxkaXY+TG9hZGluZy4uLjwvZGl2Pil9XG4gICAgPC9GcmFnbWVudD5cbn1cbmV4cG9ydCBkZWZhdWx0IEpvYkRldGFpbHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/JobDetails/index.js\n");

/***/ })

})