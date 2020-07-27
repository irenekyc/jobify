webpackHotUpdate("static/development/pages/details/[slug].js",{

/***/ "./src/components/JobDetails/index.js":
/*!********************************************!*\
  !*** ./src/components/JobDetails/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ \"./node_modules/next/dist/next-server/lib/utils.js\");\n/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/irenechow/Desktop/job-board/src/components/JobDetails/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar JobDetailsPage = function JobDetailsPage(_ref) {\n  _s();\n\n  var id = _ref.id,\n      data = _ref.data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (data) {\n      var history = JSON.parse(localStorage.getItem('testingBrowsed') || '[]');\n      console.log(history);\n      var updatedHistory = history.concat({\n        id: id,\n        title: data.title,\n        company: data.company\n      });\n      localStorage.setItem('testingBrowsed', JSON.stringify(updatedHistory));\n    }\n  }, [data]);\n\n  var calculateTime = function calculateTime(createdAt) {\n    var now = new Date();\n    var difference = now - new Date(createdAt);\n    return Math.ceil(difference / 1000 / 60 / 60 / 24);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 12\n    }\n  }, data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 18\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, \"  \", data.title, \" - Jobify\"), __jsx(\"meta\", {\n    property: \"og:title\",\n    content: data.title,\n    key: \"ogTitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:site_name\",\n    content: \"Jobify: Find your dream developer job\",\n    key: \"ogSiteName\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"\".concat(data.company, \" is looking for \").concat(data.title),\n    key: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"\".concat(data.company, \" is looking for \").concat(data.title),\n    key: \"ogDescription\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Monofett&display=swap\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"job-page-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"div\", {\n    className: \"job-page-main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"job-page-share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 25\n    }\n  }, \" Share to your friends:  \", __jsx(\"a\", {\n    href: \"https://api.whatsapp.com/send?text=Checkout this job: \".concat(data.title, \" here: \").concat(data.url),\n    target: \"_blank\",\n    \"data-action\": \"share/whatsapp/share\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 53\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 202\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fab fa-whatsapp\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 209\n    }\n  })), \" \"), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/\".concat(id, \"&title=\").concat(data.company, \"+is+Looking+for\").concat(data.title, \"source=jobify-peach.vercel.app\"),\n    target: \"_blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 29\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fab fa-linkedin\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 236\n    }\n  })), __jsx(\"a\", {\n    href: \"mailto:?&subject=\".concat(data.company, \"%20is%20looking%20for%20\").concat(data.title, \"&body=Check%20this%20out%20\\nhttps://jobify-peach.vercel.app/details/\").concat(id, \"&title=\").concat(data.company, \"+is+Looking+for\").concat(data.title),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }, \" \", __jsx(\"i\", {\n    className: \"fas fa-envelope\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 236\n    }\n  })))), __jsx(\"div\", {\n    className: \"job-page-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"job-company-logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: data.company_logo,\n    alt: data.company,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 29\n    }\n  })), __jsx(\"p\", {\n    className: \"description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 25\n    }\n  }, \" \", data.company), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }, \" Location: \", data.location), __jsx(\"p\", {\n    className: \"secondary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 25\n    }\n  }, \" Post at \", calculateTime(data.created_at), \" day(s) ago \"), __jsx(\"div\", {\n    className: \"description-box description-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \"Description: \", __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 42\n    }\n  }))), __jsx(\"div\", {\n    className: \"job-page-apply\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 21\n    }\n  }, __jsx(\"h3\", {\n    className: \"primary-text\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 25\n    }\n  }, \" How to Apply\"), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    source: data.how_to_apply,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }))))) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 25\n    }\n  }, \"Loading...\"));\n};\n\n_s(JobDetailsPage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = JobDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobDetailsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobDetailsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Kb2JEZXRhaWxzL2luZGV4LmpzP2UzNzQiXSwibmFtZXMiOlsiSm9iRGV0YWlsc1BhZ2UiLCJpZCIsImRhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJoaXN0b3J5IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkSGlzdG9yeSIsImNvbmNhdCIsInRpdGxlIiwiY29tcGFueSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0Iiwibm93IiwiRGF0ZSIsImRpZmZlcmVuY2UiLCJNYXRoIiwiY2VpbCIsInVybCIsImNvbXBhbnlfbG9nbyIsImxvY2F0aW9uIiwiY3JlYXRlZF9hdCIsImRlc2NyaXB0aW9uIiwiaG93X3RvX2FwcGx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLEVBQWUsUUFBZkEsRUFBZTtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNyQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlILElBQUosRUFBVTtBQUNOLFVBQU1JLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsS0FBMEMsSUFBckQsQ0FBaEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlOLE9BQVo7QUFDQSxVQUFNTyxjQUFjLEdBQUdQLE9BQU8sQ0FBQ1EsTUFBUixDQUFlO0FBQUViLFVBQUUsRUFBRUEsRUFBTjtBQUFVYyxhQUFLLEVBQUViLElBQUksQ0FBQ2EsS0FBdEI7QUFBNkJDLGVBQU8sRUFBRWQs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SSxDQUFDMEIsUUFBL0MsQ0FMSixFQU1JO0FBQUcsYUFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXdDVCxhQUFhLENBQUNqQixJQUFJLENBQUMyQixVQUFOLENBQXJELGlCQU5KLEVBT0k7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDaUIsTUFBQyxxREFBRDtBQUFlLFVBQU0sRUFBRTNCLElBQUksQ0FBQzRCLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEakIsQ0FQSixDQVBKLEVBa0JJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFFSSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFNUIsSUFBSSxDQUFDNkIsWUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBbEJKLENBSkosQ0FsQkssQ0FBSixHQStDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhEYixDQUFQO0FBa0RILENBcEVEOztHQUFNL0IsYztVQUNhSSxxRDs7O0tBRGJKLGM7QUFxRVNBLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSm9iRGV0YWlscy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlsc1wiO1xuXG5jb25zdCBKb2JEZXRhaWxzUGFnZSA9ICh7IGlkLCBkYXRhIH0pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGhpc3RvcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0aW5nQnJvd3NlZCcpIHx8ICdbXScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGlzdG9yeSlcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRIaXN0b3J5ID0gaGlzdG9yeS5jb25jYXQoeyBpZDogaWQsIHRpdGxlOiBkYXRhLnRpdGxlLCBjb21wYW55OiBkYXRhLmNvbXBhbnkgfSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0aW5nQnJvd3NlZCcsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRIaXN0b3J5KSlcbiAgICAgICAgfVxuICAgIH0sIFtkYXRhXSlcbiAgICBjb25zdCBjYWxjdWxhdGVUaW1lID0gKGNyZWF0ZWRBdCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBub3cgLSBuZXcgRGF0ZShjcmVhdGVkQXQpXG4gICAgICAgIHJldHVybiAoTWF0aC5jZWlsKGRpZmZlcmVuY2UgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KSlcblxuICAgIH1cblxuICAgIHJldHVybiA8RnJhZ21lbnQ+XG4gICAgICAgIHtkYXRhID8gKDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT4gIHtkYXRhLnRpdGxlfSAtIEpvYmlmeTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXtkYXRhLnRpdGxlfSBrZXk9J29nVGl0bGUnIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnNpdGVfbmFtZScgY29udGVudD0nSm9iaWZ5OiBGaW5kIHlvdXIgZHJlYW0gZGV2ZWxvcGVyIGpvYicga2V5PSdvZ1NpdGVOYW1lJyAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgJHtkYXRhLmNvbXBhbnl9IGlzIGxvb2tpbmcgZm9yICR7ZGF0YS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgJHtkYXRhLmNvbXBhbnl9IGlzIGxvb2tpbmcgZm9yICR7ZGF0YS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICBrZXk9J29nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PScnIGtleT0nb2dJbWFnZScgLz4gKi99XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9ub2ZldHQmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItcGFnZS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2Utc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBTaGFyZSB0byB5b3VyIGZyaWVuZHM6ICA8YSBocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1DaGVja291dCB0aGlzIGpvYjogJHtkYXRhLnRpdGxlfSBoZXJlOiAke2RhdGEudXJsfWB9IHRhcmdldD1cIl9ibGFua1wiIGRhdGEtYWN0aW9uPVwic2hhcmUvd2hhdHNhcHAvc2hhcmVcIj48c3Bhbj4gPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXdoYXRzYXBwXCI+PC9pPjwvc3Bhbj4gPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZ1cmw9aHR0cHM6Ly9qb2JpZnktcGVhY2gudmVyY2VsLmFwcC9kZXRhaWxzLyR7aWR9JnRpdGxlPSR7ZGF0YS5jb21wYW55fStpcytMb29raW5nK2ZvciR7ZGF0YS50aXRsZX1zb3VyY2U9am9iaWZ5LXBlYWNoLnZlcmNlbC5hcHBgfSB0YXJnZXQ9XCJfYmxhbmtcIj4gPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgbWFpbHRvOj8mc3ViamVjdD0ke2RhdGEuY29tcGFueX0lMjBpcyUyMGxvb2tpbmclMjBmb3IlMjAke2RhdGEudGl0bGV9JmJvZHk9Q2hlY2slMjB0aGlzJTIwb3V0JTIwXFxuaHR0cHM6Ly9qb2JpZnktcGVhY2gudmVyY2VsLmFwcC9kZXRhaWxzLyR7aWR9JnRpdGxlPSR7ZGF0YS5jb21wYW55fStpcytMb29raW5nK2ZvciR7ZGF0YS50aXRsZX1gfT4gPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2ItY29tcGFueS1sb2dvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuY29tcGFueV9sb2dvfSBhbHQ9e2RhdGEuY29tcGFueX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tdGV4dFwiPiB7ZGF0YS5jb21wYW55fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY29uZGFyeS10ZXh0XCI+IExvY2F0aW9uOiB7ZGF0YS5sb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWNvbmRhcnktdGV4dFwiPiBQb3N0IGF0IHtjYWxjdWxhdGVUaW1lKGRhdGEuY3JlYXRlZF9hdCl9IGRheShzKSBhZ28gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1ib3ggZGVzY3JpcHRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiA8UmVhY3RNYXJrZG93biBzb3VyY2U9e2RhdGEuZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iLXBhZ2UtYXBwbHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwcmltYXJ5LXRleHRcIj4gSG93IHRvIEFwcGx5PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17ZGF0YS5ob3dfdG9fYXBwbHl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD4pIDogKDxkaXY+TG9hZGluZy4uLjwvZGl2Pil9XG4gICAgPC9GcmFnbWVudD5cbn1cbmV4cG9ydCBkZWZhdWx0IEpvYkRldGFpbHNQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/JobDetails/index.js\n");

/***/ })

})