/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jamespark/Desktop/Github/Tutorials/GraphQL/React-with-GraphQL/frontend/components/CreateProduct.js\",\n    _s = $RefreshSig$();\n\n\nfunction CreateProduct() {\n  _s();\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_1__.default)({\n    name: 'nice shoes',\n    price: 3242,\n    description: 'these are the best shoes!'\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"name\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      id: \"name\",\n      name: \"name\",\n      placeholder: \"Name\",\n      value: inputs.name,\n      onChange: handleChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"price\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      id: \"price\",\n      name: \"price\",\n      placeholder: \"price\",\n      value: inputs.price,\n      onChange: function onChange(e) {\n        return setPrice(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CreateProduct, \"n0TdQFoD4Qj/31HRAHOFTTHiHGE=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n_c = CreateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzP2UwNTAiXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJzZXRQcmljZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxhQUFULEdBQXlCO0FBQUE7O0FBQUEsaUJBQ0xDLHFEQUFPLENBQUM7QUFDdkNDLFFBQUksRUFBRSxZQURpQztBQUV2Q0MsU0FBSyxFQUFFLElBRmdDO0FBR3ZDQyxlQUFXLEVBQUU7QUFIMEIsR0FBRCxDQURGO0FBQUEsTUFDOUJDLE1BRDhCLFlBQzlCQSxNQUQ4QjtBQUFBLE1BQ3RCQyxZQURzQixZQUN0QkEsWUFEc0I7O0FBT3RDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxhQUFPLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsUUFBRSxFQUFDLE1BRkw7QUFHRSxVQUFJLEVBQUMsTUFIUDtBQUlFLGlCQUFXLEVBQUMsTUFKZDtBQUtFLFdBQUssRUFBRUQsTUFBTSxDQUFDSCxJQUxoQjtBQU1FLGNBQVEsRUFBRUk7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFVRTtBQUFPLGFBQU8sRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFO0FBQ0UsVUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFFLEVBQUMsT0FGTDtBQUdFLFVBQUksRUFBQyxPQUhQO0FBSUUsaUJBQVcsRUFBQyxPQUpkO0FBS0UsV0FBSyxFQUFFRCxNQUFNLENBQUNGLEtBTGhCO0FBTUUsY0FBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsZUFBT0MsUUFBUSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBN0J1QlYsYTtVQUNXQyxpRDs7O0tBRFhELGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKSB7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UgfSA9IHVzZUZvcm0oe1xuICAgIG5hbWU6ICduaWNlIHNob2VzJyxcbiAgICBwcmljZTogMzI0MixcbiAgICBkZXNjcmlwdGlvbjogJ3RoZXNlIGFyZSB0aGUgYmVzdCBzaG9lcyEnLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJpY2VcIlxuICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ })

});