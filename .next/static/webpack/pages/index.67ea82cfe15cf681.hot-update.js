"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/dashboard/Sidebar.jsx":
/*!******************************************!*\
  !*** ./components/dashboard/Sidebar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Sidebar() {\n    var _this = this;\n    var nav = [\n        {\n            name: \"Dashboard\",\n            icon: _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.HomeIcon\n        }, \n    ];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-64 h-screen p-4 flex flex-col gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-20\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: true,\n                children: nav.map(function(item, key) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex items-center gap-x-2 h-10 rounded pl-2 py-2 bg-gray-50\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                className: \"h-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, _this),\n                            item.name\n                        ]\n                    }, key, true, {\n                        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vishn\\\\Documents\\\\GitHub\\\\analytics-dashboard\\\\components\\\\dashboard\\\\Sidebar.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TaWRlYmFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUN3QjtBQUVsQyxRQUFRLENBQUNFLE9BQU8sR0FBRyxDQUFDOztJQUNqQyxHQUFLLENBQUNDLEdBQUcsR0FBRyxDQUFDO1FBQ1gsQ0FBQztZQUNDQyxJQUFJLEVBQUUsQ0FBVztZQUNqQkMsSUFBSSxFQUFFSiw0REFBUTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hLLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlDOzt3RkFDckRELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7d0ZBRTNCRCxDQUFHO2dCQUFDQyxTQUFTOzBCQUNYSixHQUFHLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsR0FBRztrQ0FDakIsTUFBTSwrREFBTEosQ0FBRzt3QkFBV0MsU0FBUyxFQUFDLENBQW9FOzt3R0FDeEZFLElBQUksQ0FBQ0osSUFBSTtnQ0FBQ0UsU0FBUyxFQUFDLENBQVE7Ozs7Ozs0QkFDNUJFLElBQUksQ0FBQ0wsSUFBSTs7dUJBRkpNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUM7S0F0QnVCUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1NpZGViYXIuanN4PzM3MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIb21lSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGNvbnN0IG5hdiA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEYXNoYm9hcmRcIixcclxuICAgICAgaWNvbjogSG9tZUljb24sXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC1zY3JlZW4gcC00IGZsZXggZmxleC1jb2wgZ2FwLXktM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTIwXCI+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT5cclxuICAgICAgICB7bmF2Lm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiBoLTEwIHJvdW5kZWQgcGwtMiBweS0yIGJnLWdyYXktNTBcIj5cclxuICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhvbWVJY29uIiwiU2lkZWJhciIsIm5hdiIsIm5hbWUiLCJpY29uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dashboard/Sidebar.jsx\n");

/***/ })

});