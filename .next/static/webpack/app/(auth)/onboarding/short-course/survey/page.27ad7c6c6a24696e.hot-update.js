"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/onboarding/short-course/survey/page",{

/***/ "(app-pages-browser)/./src/components/onboarding/short-course/Survey.tsx":
/*!***********************************************************!*\
  !*** ./src/components/onboarding/short-course/Survey.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// src/components/onboarding/short-course/Survey.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Survey = ()=>{\n    _s();\n    const [experienceLevel, setExperienceLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [interests, setInterests] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleExperienceChange = (level)=>{\n        setExperienceLevel(level);\n    };\n    const handleInterestChange = (interest)=>{\n        setInterests((prev)=>prev.includes(interest) ? prev.filter((i)=>i !== interest) : [\n                ...prev,\n                interest\n            ]);\n    };\n    const handleSubmit = ()=>{\n        // Handle form submission logic here\n        console.log(\"Experience Level:\", experienceLevel);\n        console.log(\"Interests:\", interests);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[1440px] h-[1024px] relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[40px] top-[26px] text-[#333333] text-2xl font-normal font-['Arial']\",\n                children: \"VFX Academy\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[524px] top-[148px] text-center text-[#333333] text-[32px] font-normal font-['Arial']\",\n                children: \"Tell Us About Your Interests\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[539.50px] top-[202px] text-center text-[#666666] text-lg font-normal font-['Arial']\",\n                children: \"Help us personalize your learning experience\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[270px] top-[260px] text-[#333333] text-xl font-normal font-['Arial']\",\n                children: \"1. What's your current level of experience with VFX?\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[337.50px] top-[310px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"experience\",\n                        value: \"Beginner\",\n                        onChange: ()=>handleExperienceChange(\"Beginner\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Beginner\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[545px] top-[310px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"experience\",\n                        value: \"Intermediate\",\n                        onChange: ()=>handleExperienceChange(\"Intermediate\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Intermediate\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[774px] top-[310px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"radio\",\n                        name: \"experience\",\n                        value: \"Advanced\",\n                        onChange: ()=>handleExperienceChange(\"Advanced\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Advanced\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[270px] top-[360px] text-[#333333] text-xl font-normal font-['Arial']\",\n                children: \"2. Which areas of VFX are you most interested in? (Select up to 3)\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[325px] top-[409px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: ()=>handleInterestChange(\"3D Modeling\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined),\n                    \" 3D Modeling\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[554px] top-[409px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: ()=>handleInterestChange(\"Animation\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Animation\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[765.50px] top-[409px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: ()=>handleInterestChange(\"Compositing\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Compositing\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[341.50px] top-[459px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: ()=>handleInterestChange(\"Lighting\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Lighting\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[557.50px] top-[459px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: ()=>handleInterestChange(\"Texturing\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Texturing\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[782.50px] top-[459px] text-center text-[#333333] text-base font-normal font-['Arial']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: ()=>handleInterestChange(\"Rigging\")\n                    }, void 0, false, {\n                        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined),\n                    \" Rigging\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[270px] top-[510px] text-[#333333] text-xl font-normal font-['Arial']\",\n                children: \"3. What's your primary goal for taking a VFX course?\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[682.50px] top-[696px] text-center text-white text-2xl font-normal font-['Arial'] bg-blue-600 px-4 py-2 rounded cursor-pointer\",\n                onClick: handleSubmit,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/components/onboarding/short-course/Survey.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Survey, \"pv5a0ryg9qzsYVm6Q22RkokTMgg=\");\n_c = Survey;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Survey);\nvar _c;\n$RefreshReg$(_c, \"Survey\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL29uYm9hcmRpbmcvc2hvcnQtY291cnNlL1N1cnZleS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9EQUFvRDs7O0FBR1o7QUFFeEMsTUFBTUUsU0FBUzs7SUFDWCxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRXZELE1BQU1NLHlCQUF5QixDQUFDQztRQUM1QkosbUJBQW1CSTtJQUN2QjtJQUVBLE1BQU1DLHVCQUF1QixDQUFDQztRQUMxQkosYUFBYSxDQUFDSyxPQUNWQSxLQUFLQyxRQUFRLENBQUNGLFlBQVlDLEtBQUtFLE1BQU0sQ0FBQ0MsQ0FBQUEsSUFBS0EsTUFBTUosWUFBWTttQkFBSUM7Z0JBQU1EO2FBQVM7SUFFeEY7SUFFQSxNQUFNSyxlQUFlO1FBQ2pCLG9DQUFvQztRQUNwQ0MsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQmQ7UUFDakNhLFFBQVFDLEdBQUcsQ0FBQyxjQUFjWjtJQUM5QjtJQUVBLHFCQUNJLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQXFGOzs7Ozs7MEJBQ3BHLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBc0c7Ozs7OzswQkFDckgsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFxRzs7Ozs7OzBCQUVwSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQXNGOzs7Ozs7MEJBQ3JHLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFRQyxNQUFLO3dCQUFhQyxPQUFNO3dCQUFXQyxVQUFVLElBQU1qQix1QkFBdUI7Ozs7OztvQkFBZTs7Ozs7OzswQkFFakgsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVFDLE1BQUs7d0JBQWFDLE9BQU07d0JBQWVDLFVBQVUsSUFBTWpCLHVCQUF1Qjs7Ozs7O29CQUFtQjs7Ozs7OzswQkFFekgsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVFDLE1BQUs7d0JBQWFDLE9BQU07d0JBQVdDLFVBQVUsSUFBTWpCLHVCQUF1Qjs7Ozs7O29CQUFlOzs7Ozs7OzBCQUdqSCw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQXNGOzs7Ozs7MEJBQ3JHLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXRyxVQUFVLElBQU1mLHFCQUFxQjs7Ozs7O29CQUFrQjs7Ozs7OzswQkFFbEYsOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQVdHLFVBQVUsSUFBTWYscUJBQXFCOzs7Ozs7b0JBQWdCOzs7Ozs7OzBCQUVoRiw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBV0csVUFBVSxJQUFNZixxQkFBcUI7Ozs7OztvQkFBa0I7Ozs7Ozs7MEJBRWxGLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXRyxVQUFVLElBQU1mLHFCQUFxQjs7Ozs7O29CQUFlOzs7Ozs7OzBCQUUvRSw4REFBQ1M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBV0csVUFBVSxJQUFNZixxQkFBcUI7Ozs7OztvQkFBZ0I7Ozs7Ozs7MEJBRWhGLDhEQUFDUztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXRyxVQUFVLElBQU1mLHFCQUFxQjs7Ozs7O29CQUFjOzs7Ozs7OzBCQUc5RSw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQXNGOzs7Ozs7MEJBQ3JHLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBK0lNLFNBQVNWOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHak07R0E3RE1iO0tBQUFBO0FBK0ROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29uYm9hcmRpbmcvc2hvcnQtY291cnNlL1N1cnZleS50c3g/NzBmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY29tcG9uZW50cy9vbmJvYXJkaW5nL3Nob3J0LWNvdXJzZS9TdXJ2ZXkudHN4XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdXJ2ZXkgPSAoKSA9PiB7XG4gICAgY29uc3QgW2V4cGVyaWVuY2VMZXZlbCwgc2V0RXhwZXJpZW5jZUxldmVsXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaW50ZXJlc3RzLCBzZXRJbnRlcmVzdHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUV4cGVyaWVuY2VDaGFuZ2UgPSAobGV2ZWw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRFeHBlcmllbmNlTGV2ZWwobGV2ZWwpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJbnRlcmVzdENoYW5nZSA9IChpbnRlcmVzdDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEludGVyZXN0cygocHJldikgPT4gXG4gICAgICAgICAgICBwcmV2LmluY2x1ZGVzKGludGVyZXN0KSA/IHByZXYuZmlsdGVyKGkgPT4gaSAhPT0gaW50ZXJlc3QpIDogWy4uLnByZXYsIGludGVyZXN0XVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24gbG9naWMgaGVyZVxuICAgICAgICBjb25zb2xlLmxvZygnRXhwZXJpZW5jZSBMZXZlbDonLCBleHBlcmllbmNlTGV2ZWwpO1xuICAgICAgICBjb25zb2xlLmxvZygnSW50ZXJlc3RzOicsIGludGVyZXN0cyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bMTQ0MHB4XSBoLVsxMDI0cHhdIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzQwcHhdIHRvcC1bMjZweF0gdGV4dC1bIzMzMzMzM10gdGV4dC0yeGwgZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj5WRlggQWNhZGVteTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1MjRweF0gdG9wLVsxNDhweF0gdGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM10gdGV4dC1bMzJweF0gZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj5UZWxsIFVzIEFib3V0IFlvdXIgSW50ZXJlc3RzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzUzOS41MHB4XSB0b3AtWzIwMnB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWxnIGZvbnQtbm9ybWFsIGZvbnQtWydBcmlhbCddXCI+SGVscCB1cyBwZXJzb25hbGl6ZSB5b3VyIGxlYXJuaW5nIGV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVsyNzBweF0gdG9wLVsyNjBweF0gdGV4dC1bIzMzMzMzM10gdGV4dC14bCBmb250LW5vcm1hbCBmb250LVsnQXJpYWwnXVwiPjEuIFdoYXQncyB5b3VyIGN1cnJlbnQgbGV2ZWwgb2YgZXhwZXJpZW5jZSB3aXRoIFZGWD88L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bMzM3LjUwcHhdIHRvcC1bMzEwcHhdIHRleHQtY2VudGVyIHRleHQtWyMzMzMzMzNdIHRleHQtYmFzZSBmb250LW5vcm1hbCBmb250LVsnQXJpYWwnXVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZXhwZXJpZW5jZVwiIHZhbHVlPVwiQmVnaW5uZXJcIiBvbkNoYW5nZT17KCkgPT4gaGFuZGxlRXhwZXJpZW5jZUNoYW5nZSgnQmVnaW5uZXInKX0gLz4gQmVnaW5uZXJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1NDVweF0gdG9wLVszMTBweF0gdGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM10gdGV4dC1iYXNlIGZvbnQtbm9ybWFsIGZvbnQtWydBcmlhbCddXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJleHBlcmllbmNlXCIgdmFsdWU9XCJJbnRlcm1lZGlhdGVcIiBvbkNoYW5nZT17KCkgPT4gaGFuZGxlRXhwZXJpZW5jZUNoYW5nZSgnSW50ZXJtZWRpYXRlJyl9IC8+IEludGVybWVkaWF0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzc3NHB4XSB0b3AtWzMxMHB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXSB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImV4cGVyaWVuY2VcIiB2YWx1ZT1cIkFkdmFuY2VkXCIgb25DaGFuZ2U9eygpID0+IGhhbmRsZUV4cGVyaWVuY2VDaGFuZ2UoJ0FkdmFuY2VkJyl9IC8+IEFkdmFuY2VkXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVsyNzBweF0gdG9wLVszNjBweF0gdGV4dC1bIzMzMzMzM10gdGV4dC14bCBmb250LW5vcm1hbCBmb250LVsnQXJpYWwnXVwiPjIuIFdoaWNoIGFyZWFzIG9mIFZGWCBhcmUgeW91IG1vc3QgaW50ZXJlc3RlZCBpbj8gKFNlbGVjdCB1cCB0byAzKTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVszMjVweF0gdG9wLVs0MDlweF0gdGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM10gdGV4dC1iYXNlIGZvbnQtbm9ybWFsIGZvbnQtWydBcmlhbCddXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVJbnRlcmVzdENoYW5nZSgnM0QgTW9kZWxpbmcnKX0gLz4gM0QgTW9kZWxpbmdcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LVs1NTRweF0gdG9wLVs0MDlweF0gdGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM10gdGV4dC1iYXNlIGZvbnQtbm9ybWFsIGZvbnQtWydBcmlhbCddXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiBoYW5kbGVJbnRlcmVzdENoYW5nZSgnQW5pbWF0aW9uJyl9IC8+IEFuaW1hdGlvblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzc2NS41MHB4XSB0b3AtWzQwOXB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXSB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eygpID0+IGhhbmRsZUludGVyZXN0Q2hhbmdlKCdDb21wb3NpdGluZycpfSAvPiBDb21wb3NpdGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzM0MS41MHB4XSB0b3AtWzQ1OXB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXSB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eygpID0+IGhhbmRsZUludGVyZXN0Q2hhbmdlKCdMaWdodGluZycpfSAvPiBMaWdodGluZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzU1Ny41MHB4XSB0b3AtWzQ1OXB4XSB0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXSB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eygpID0+IGhhbmRsZUludGVyZXN0Q2hhbmdlKCdUZXh0dXJpbmcnKX0gLz4gVGV4dHVyaW5nXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bNzgyLjUwcHhdIHRvcC1bNDU5cHhdIHRleHQtY2VudGVyIHRleHQtWyMzMzMzMzNdIHRleHQtYmFzZSBmb250LW5vcm1hbCBmb250LVsnQXJpYWwnXVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KCkgPT4gaGFuZGxlSW50ZXJlc3RDaGFuZ2UoJ1JpZ2dpbmcnKX0gLz4gUmlnZ2luZ1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC1bMjcwcHhdIHRvcC1bNTEwcHhdIHRleHQtWyMzMzMzMzNdIHRleHQteGwgZm9udC1ub3JtYWwgZm9udC1bJ0FyaWFsJ11cIj4zLiBXaGF0J3MgeW91ciBwcmltYXJ5IGdvYWwgZm9yIHRha2luZyBhIFZGWCBjb3Vyc2U/PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtWzY4Mi41MHB4XSB0b3AtWzY5NnB4XSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtbm9ybWFsIGZvbnQtWydBcmlhbCddIGJnLWJsdWUtNjAwIHB4LTQgcHktMiByb3VuZGVkIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cnZleTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlN1cnZleSIsImV4cGVyaWVuY2VMZXZlbCIsInNldEV4cGVyaWVuY2VMZXZlbCIsImludGVyZXN0cyIsInNldEludGVyZXN0cyIsImhhbmRsZUV4cGVyaWVuY2VDaGFuZ2UiLCJsZXZlbCIsImhhbmRsZUludGVyZXN0Q2hhbmdlIiwiaW50ZXJlc3QiLCJwcmV2IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/onboarding/short-course/Survey.tsx\n"));

/***/ })

});