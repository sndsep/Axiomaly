"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/onboarding/survey/route";
exports.ids = ["app/api/onboarding/survey/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_Axiomaly_src_app_api_onboarding_survey_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/onboarding/survey/route.ts */ \"(rsc)/./src/app/api/onboarding/survey/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/onboarding/survey/route\",\n        pathname: \"/api/onboarding/survey\",\n        filename: \"route\",\n        bundlePath: \"app/api/onboarding/survey/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/Axiomaly/src/app/api/onboarding/survey/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_Axiomaly_src_app_api_onboarding_survey_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/onboarding/survey/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvbmJvYXJkaW5nJTJGc3VydmV5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZvbmJvYXJkaW5nJTJGc3VydmV5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGb25ib2FyZGluZyUyRnN1cnZleSUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGQXhpb21hbHklMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlZvbHVtZXMlMkZEb2NrRGlzayUyRjEwJTIwUFJPSkVDVFMlMkZBeGlvbWFseSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDNkI7QUFDMUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZngtYWNhZGVteS8/MjFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9BeGlvbWFseS9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vbmJvYXJkaW5nL3N1cnZleVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9BeGlvbWFseS9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/onboarding/survey/route.ts":
/*!************************************************!*\
  !*** ./src/app/api/onboarding/survey/route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n// src/app/api/onboarding/survey/route.ts\n// This API route handles the survey data for onboarding\n// It fetches the user's survey data and returns it\n// It also handles errors and returns appropriate responses \n\n\n\n\n\n// Schema validation matching your form\nconst surveySchema = zod__WEBPACK_IMPORTED_MODULE_4__.z.object({\n    experienceLevel: zod__WEBPACK_IMPORTED_MODULE_4__.z.enum([\n        \"beginner\",\n        \"intermediate\",\n        \"advanced\"\n    ]),\n    interests: zod__WEBPACK_IMPORTED_MODULE_4__.z.array(zod__WEBPACK_IMPORTED_MODULE_4__.z.string()).min(1),\n    weeklyHours: zod__WEBPACK_IMPORTED_MODULE_4__.z.number().min(5).max(40),\n    priorExperience: zod__WEBPACK_IMPORTED_MODULE_4__.z.string().min(10).max(500),\n    industryFocus: zod__WEBPACK_IMPORTED_MODULE_4__.z.array(zod__WEBPACK_IMPORTED_MODULE_4__.z.string()).min(1),\n    softwareExperience: zod__WEBPACK_IMPORTED_MODULE_4__.z.array(zod__WEBPACK_IMPORTED_MODULE_4__.z.string()),\n    preferredLearningStyle: zod__WEBPACK_IMPORTED_MODULE_4__.z.enum([\n        \"visual\",\n        \"hands-on\",\n        \"theoretical\",\n        \"mixed\"\n    ])\n});\nasync function GET(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.user.findUnique({\n            where: {\n                email: session.user.email\n            },\n            include: {\n                onboardingProgress: true\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"User not found\"\n            }, {\n                status: 404\n            });\n        }\n        // Return existing responses if any\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: {\n                responses: user.onboardingProgress?.responses || null\n            }\n        });\n    } catch (error) {\n        console.error(\"Error fetching survey data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to load survey data\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"Not authenticated\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await req.json();\n        // Validate the request body\n        const validationResult = surveySchema.safeParse(body);\n        if (!validationResult.success) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                error: \"Invalid survey data\"\n            }, {\n                status: 400\n            });\n        }\n        // Update user's survey responses\n        await _lib_db__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n            where: {\n                email: session.user.email\n            },\n            data: {\n                onboardingProgress: {\n                    upsert: {\n                        create: {\n                            currentStep: \"RECOMMENDATIONS\",\n                            responses: body\n                        },\n                        update: {\n                            currentStep: \"RECOMMENDATIONS\",\n                            responses: body\n                        }\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            data: {\n                message: \"Survey responses saved successfully\",\n                nextRoute: \"/onboarding/degree-program/curriculum\"\n            }\n        });\n    } catch (error) {\n        console.error(\"Error saving survey data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to save survey data\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQXlDO0FBQ3pDLHdEQUF3RDtBQUN4RCxtREFBbUQ7QUFDbkQsNERBQTREO0FBRWxCO0FBQ087QUFDVDtBQUNQO0FBQ1Y7QUFFdkIsdUNBQXVDO0FBQ3ZDLE1BQU1LLGVBQWVELGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDNUJDLGlCQUFpQkgsa0NBQUNBLENBQUNJLElBQUksQ0FBQztRQUFDO1FBQVk7UUFBZ0I7S0FBVztJQUNoRUMsV0FBV0wsa0NBQUNBLENBQUNNLEtBQUssQ0FBQ04sa0NBQUNBLENBQUNPLE1BQU0sSUFBSUMsR0FBRyxDQUFDO0lBQ25DQyxhQUFhVCxrQ0FBQ0EsQ0FBQ1UsTUFBTSxHQUFHRixHQUFHLENBQUMsR0FBR0csR0FBRyxDQUFDO0lBQ25DQyxpQkFBaUJaLGtDQUFDQSxDQUFDTyxNQUFNLEdBQUdDLEdBQUcsQ0FBQyxJQUFJRyxHQUFHLENBQUM7SUFDeENFLGVBQWViLGtDQUFDQSxDQUFDTSxLQUFLLENBQUNOLGtDQUFDQSxDQUFDTyxNQUFNLElBQUlDLEdBQUcsQ0FBQztJQUN2Q00sb0JBQW9CZCxrQ0FBQ0EsQ0FBQ00sS0FBSyxDQUFDTixrQ0FBQ0EsQ0FBQ08sTUFBTTtJQUNwQ1Esd0JBQXdCZixrQ0FBQ0EsQ0FBQ0ksSUFBSSxDQUFDO1FBQUM7UUFBVTtRQUFZO1FBQWU7S0FBUTtBQUMvRTtBQUVPLGVBQWVZLElBQUlDLEdBQVk7SUFDcEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTXJCLGdFQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELElBQUksQ0FBQ29CLFNBQVNDLE1BQU1DLE9BQU87WUFDekIsT0FBT3hCLHFEQUFZQSxDQUFDeUIsSUFBSSxDQUFDO2dCQUN2QkMsU0FBUztnQkFDVEMsT0FBTztZQUNULEdBQUc7Z0JBQ0RDLFFBQVE7WUFDVjtRQUNGO1FBRUEsTUFBTUwsT0FBTyxNQUFNcEIsMkNBQU1BLENBQUNvQixJQUFJLENBQUNNLFVBQVUsQ0FBQztZQUN4Q0MsT0FBTztnQkFBRU4sT0FBT0YsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO1lBQUM7WUFDbkNPLFNBQVM7Z0JBQ1BDLG9CQUFvQjtZQUN0QjtRQUNGO1FBRUEsSUFBSSxDQUFDVCxNQUFNO1lBQ1QsT0FBT3ZCLHFEQUFZQSxDQUFDeUIsSUFBSSxDQUFDO2dCQUN2QkMsU0FBUztnQkFDVEMsT0FBTztZQUNULEdBQUc7Z0JBQ0RDLFFBQVE7WUFDVjtRQUNGO1FBRUEsbUNBQW1DO1FBQ25DLE9BQU81QixxREFBWUEsQ0FBQ3lCLElBQUksQ0FBQztZQUN2QkMsU0FBUztZQUNUTyxNQUFNO2dCQUNKQyxXQUFXWCxLQUFLUyxrQkFBa0IsRUFBRUUsYUFBYTtZQUNuRDtRQUNGO0lBRUYsRUFBRSxPQUFPUCxPQUFPO1FBQ2RRLFFBQVFSLEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU8zQixxREFBWUEsQ0FBQ3lCLElBQUksQ0FBQztZQUN2QkMsU0FBUztZQUNUQyxPQUFPO1FBQ1QsR0FBRztZQUNEQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGO0FBRU8sZUFBZVEsS0FBS2YsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNckIsZ0VBQWdCQSxDQUFDQyxrREFBV0E7UUFDbEQsSUFBSSxDQUFDb0IsU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPeEIscURBQVlBLENBQUN5QixJQUFJLENBQUM7Z0JBQ3ZCQyxTQUFTO2dCQUNUQyxPQUFPO1lBQ1QsR0FBRztnQkFDREMsUUFBUTtZQUNWO1FBQ0Y7UUFFQSxNQUFNUyxPQUFPLE1BQU1oQixJQUFJSSxJQUFJO1FBRTNCLDRCQUE0QjtRQUM1QixNQUFNYSxtQkFBbUJqQyxhQUFha0MsU0FBUyxDQUFDRjtRQUNoRCxJQUFJLENBQUNDLGlCQUFpQlosT0FBTyxFQUFFO1lBQzdCLE9BQU8xQixxREFBWUEsQ0FBQ3lCLElBQUksQ0FBQztnQkFDdkJDLFNBQVM7Z0JBQ1RDLE9BQU87WUFDVCxHQUFHO2dCQUNEQyxRQUFRO1lBQ1Y7UUFDRjtRQUVBLGlDQUFpQztRQUNqQyxNQUFNekIsMkNBQU1BLENBQUNvQixJQUFJLENBQUNpQixNQUFNLENBQUM7WUFDdkJWLE9BQU87Z0JBQUVOLE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUFDO1lBQ25DUyxNQUFNO2dCQUNKRCxvQkFBb0I7b0JBQ2xCUyxRQUFRO3dCQUNOQyxRQUFROzRCQUNOQyxhQUFhOzRCQUNiVCxXQUFXRzt3QkFDYjt3QkFDQUcsUUFBUTs0QkFDTkcsYUFBYTs0QkFDYlQsV0FBV0c7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUEsT0FBT3JDLHFEQUFZQSxDQUFDeUIsSUFBSSxDQUFDO1lBQ3ZCQyxTQUFTO1lBQ1RPLE1BQU07Z0JBQ0pXLFNBQVM7Z0JBQ1RDLFdBQVc7WUFDYjtRQUNGO0lBRUYsRUFBRSxPQUFPbEIsT0FBTztRQUNkUSxRQUFRUixLQUFLLENBQUMsNkJBQTZCQTtRQUMzQyxPQUFPM0IscURBQVlBLENBQUN5QixJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVEMsT0FBTztRQUNULEdBQUc7WUFDREMsUUFBUTtRQUNWO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Ly4vc3JjL2FwcC9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGUudHM/ODA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50c1xuLy8gVGhpcyBBUEkgcm91dGUgaGFuZGxlcyB0aGUgc3VydmV5IGRhdGEgZm9yIG9uYm9hcmRpbmdcbi8vIEl0IGZldGNoZXMgdGhlIHVzZXIncyBzdXJ2ZXkgZGF0YSBhbmQgcmV0dXJucyBpdFxuLy8gSXQgYWxzbyBoYW5kbGVzIGVycm9ycyBhbmQgcmV0dXJucyBhcHByb3ByaWF0ZSByZXNwb25zZXMgXG5cbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9uZXh0XCJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIlxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL2RiXCJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCJcblxuLy8gU2NoZW1hIHZhbGlkYXRpb24gbWF0Y2hpbmcgeW91ciBmb3JtXG5jb25zdCBzdXJ2ZXlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGV4cGVyaWVuY2VMZXZlbDogei5lbnVtKFsnYmVnaW5uZXInLCAnaW50ZXJtZWRpYXRlJywgJ2FkdmFuY2VkJ10pLFxuICBpbnRlcmVzdHM6IHouYXJyYXkoei5zdHJpbmcoKSkubWluKDEpLFxuICB3ZWVrbHlIb3Vyczogei5udW1iZXIoKS5taW4oNSkubWF4KDQwKSxcbiAgcHJpb3JFeHBlcmllbmNlOiB6LnN0cmluZygpLm1pbigxMCkubWF4KDUwMCksXG4gIGluZHVzdHJ5Rm9jdXM6IHouYXJyYXkoei5zdHJpbmcoKSkubWluKDEpLFxuICBzb2Z0d2FyZUV4cGVyaWVuY2U6IHouYXJyYXkoei5zdHJpbmcoKSksXG4gIHByZWZlcnJlZExlYXJuaW5nU3R5bGU6IHouZW51bShbJ3Zpc3VhbCcsICdoYW5kcy1vbicsICd0aGVvcmV0aWNhbCcsICdtaXhlZCddKVxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICBlcnJvcjogXCJOb3QgYXV0aGVudGljYXRlZFwiIFxuICAgICAgfSwgeyBcbiAgICAgICAgc3RhdHVzOiA0MDEgXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgb25ib2FyZGluZ1Byb2dyZXNzOiB0cnVlLFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSwgXG4gICAgICAgIGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgXG4gICAgICB9LCB7IFxuICAgICAgICBzdGF0dXM6IDQwNCBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGV4aXN0aW5nIHJlc3BvbnNlcyBpZiBhbnlcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVzcG9uc2VzOiB1c2VyLm9uYm9hcmRpbmdQcm9ncmVzcz8ucmVzcG9uc2VzIHx8IG51bGxcbiAgICAgIH1cbiAgICB9KVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc3VydmV5IGRhdGE6JywgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiRmFpbGVkIHRvIGxvYWQgc3VydmV5IGRhdGFcIlxuICAgIH0sIHtcbiAgICAgIHN0YXR1czogNTAwXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxuICAgICAgICBlcnJvcjogXCJOb3QgYXV0aGVudGljYXRlZFwiIFxuICAgICAgfSwgeyBcbiAgICAgICAgc3RhdHVzOiA0MDEgXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpXG4gICAgXG4gICAgLy8gVmFsaWRhdGUgdGhlIHJlcXVlc3QgYm9keVxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSBzdXJ2ZXlTY2hlbWEuc2FmZVBhcnNlKGJvZHkpXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHN1cnZleSBkYXRhXCJcbiAgICAgIH0sIHtcbiAgICAgICAgc3RhdHVzOiA0MDBcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHVzZXIncyBzdXJ2ZXkgcmVzcG9uc2VzXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb25ib2FyZGluZ1Byb2dyZXNzOiB7XG4gICAgICAgICAgdXBzZXJ0OiB7XG4gICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgY3VycmVudFN0ZXA6IFwiUkVDT01NRU5EQVRJT05TXCIsXG4gICAgICAgICAgICAgIHJlc3BvbnNlczogYm9keSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgY3VycmVudFN0ZXA6IFwiUkVDT01NRU5EQVRJT05TXCIsXG4gICAgICAgICAgICAgIHJlc3BvbnNlczogYm9keSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiU3VydmV5IHJlc3BvbnNlcyBzYXZlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgbmV4dFJvdXRlOiAnL29uYm9hcmRpbmcvZGVncmVlLXByb2dyYW0vY3VycmljdWx1bSdcbiAgICAgIH1cbiAgICB9KVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIHN1cnZleSBkYXRhOicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIkZhaWxlZCB0byBzYXZlIHN1cnZleSBkYXRhXCJcbiAgICB9LCB7XG4gICAgICBzdGF0dXM6IDUwMFxuICAgIH0pXG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwieiIsInN1cnZleVNjaGVtYSIsIm9iamVjdCIsImV4cGVyaWVuY2VMZXZlbCIsImVudW0iLCJpbnRlcmVzdHMiLCJhcnJheSIsInN0cmluZyIsIm1pbiIsIndlZWtseUhvdXJzIiwibnVtYmVyIiwibWF4IiwicHJpb3JFeHBlcmllbmNlIiwiaW5kdXN0cnlGb2N1cyIsInNvZnR3YXJlRXhwZXJpZW5jZSIsInByZWZlcnJlZExlYXJuaW5nU3R5bGUiLCJHRVQiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciIsInN0YXR1cyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImluY2x1ZGUiLCJvbmJvYXJkaW5nUHJvZ3Jlc3MiLCJkYXRhIiwicmVzcG9uc2VzIiwiY29uc29sZSIsIlBPU1QiLCJib2R5IiwidmFsaWRhdGlvblJlc3VsdCIsInNhZmVQYXJzZSIsInVwZGF0ZSIsInVwc2VydCIsImNyZWF0ZSIsImN1cnJlbnRTdGVwIiwibWVzc2FnZSIsIm5leHRSb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/onboarding/survey/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n// src/lib/auth.ts\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    if (!credentials?.email || !credentials?.password) {\n                        return null;\n                    }\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        },\n                        include: {\n                            onboardingProgress: true\n                        }\n                    });\n                    if (!user || !user.hashedPassword) {\n                        return null;\n                    }\n                    const isPasswordValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.hashedPassword);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        careerPath: user.careerPath,\n                        hasCompletedOnboarding: user.hasCompletedOnboarding,\n                        onboardingProgress: user.onboardingProgress\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                return {\n                    ...token,\n                    id: user.id,\n                    role: user.role,\n                    careerPath: user.careerPath,\n                    hasCompletedOnboarding: user.hasCompletedOnboarding,\n                    onboardingProgress: user.onboardingProgress\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            return {\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    role: token.role,\n                    careerPath: token.careerPath,\n                    hasCompletedOnboarding: token.hasCompletedOnboarding,\n                    onboardingProgress: token.onboardingProgress\n                }\n            };\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxrQkFBa0I7QUFFZ0Q7QUFDNUI7QUFDSDtBQTZCNUIsTUFBTUcsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEosMkVBQW1CQSxDQUFDO1lBQ2xCSyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSTtvQkFDRixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTt3QkFDakQsT0FBTztvQkFDVDtvQkFFQSxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQzt3QkFDeENDLE9BQU87NEJBQUVQLE9BQU9ELFlBQVlDLEtBQUs7d0JBQUM7d0JBQ2xDUSxTQUFTOzRCQUFFQyxvQkFBb0I7d0JBQUs7b0JBQ3RDO29CQUVBLElBQUksQ0FBQ0osUUFBUSxDQUFDQSxLQUFLSyxjQUFjLEVBQUU7d0JBQ2pDLE9BQU87b0JBQ1Q7b0JBRUEsTUFBTUMsa0JBQWtCLE1BQU1oQixpREFBT0EsQ0FDbkNJLFlBQVlJLFFBQVEsRUFDcEJFLEtBQUtLLGNBQWM7b0JBR3JCLElBQUksQ0FBQ0MsaUJBQWlCO3dCQUNwQixPQUFPO29CQUNUO29CQUVBLE9BQU87d0JBQ0xDLElBQUlQLEtBQUtPLEVBQUU7d0JBQ1haLE9BQU9LLEtBQUtMLEtBQUs7d0JBQ2pCRixNQUFNTyxLQUFLUCxJQUFJO3dCQUNmZSxNQUFNUixLQUFLUSxJQUFJO3dCQUNmQyxZQUFZVCxLQUFLUyxVQUFVO3dCQUMzQkMsd0JBQXdCVixLQUFLVSxzQkFBc0I7d0JBQ25ETixvQkFBb0JKLEtBQUtJLGtCQUFrQjtvQkFDN0M7Z0JBQ0YsRUFBRSxPQUFPTyxPQUFPO29CQUNkQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7b0JBQzdCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREUsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFZixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUixPQUFPO29CQUNMLEdBQUdlLEtBQUs7b0JBQ1JSLElBQUlQLEtBQUtPLEVBQUU7b0JBQ1hDLE1BQU1SLEtBQUtRLElBQUk7b0JBQ2ZDLFlBQVlULEtBQUtTLFVBQVU7b0JBQzNCQyx3QkFBd0JWLEtBQUtVLHNCQUFzQjtvQkFDbkROLG9CQUFvQkosS0FBS0ksa0JBQWtCO2dCQUM3QztZQUNGO1lBQ0EsT0FBT1c7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsT0FBTztnQkFDTCxHQUFHQyxPQUFPO2dCQUNWaEIsTUFBTTtvQkFDSixHQUFHZ0IsUUFBUWhCLElBQUk7b0JBQ2ZPLElBQUlRLE1BQU1SLEVBQUU7b0JBQ1pDLE1BQU1PLE1BQU1QLElBQUk7b0JBQ2hCQyxZQUFZTSxNQUFNTixVQUFVO29CQUM1QkMsd0JBQXdCSyxNQUFNTCxzQkFBc0I7b0JBQ3BETixvQkFBb0JXLE1BQU1YLGtCQUFrQjtnQkFDOUM7WUFDRjtRQUNGO0lBQ0Y7SUFDQWEsT0FBTztRQUNMQyxRQUFRO1FBQ1JQLE9BQU87SUFDVDtJQUNBSyxTQUFTO1FBQ1BHLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9hdXRoLnRzXG5pbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiwgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogc3RyaW5nO1xuICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgIHJvbGU6IHN0cmluZztcbiAgICAgIGNhcmVlclBhdGg/OiBzdHJpbmc7XG4gICAgICBoYXNDb21wbGV0ZWRPbmJvYXJkaW5nOiBib29sZWFuO1xuICAgICAgb25ib2FyZGluZ1Byb2dyZXNzPzoge1xuICAgICAgICBjdXJyZW50U3RlcDogc3RyaW5nO1xuICAgICAgICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gICAgICB9O1xuICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl1cbiAgfVxuXG4gIGludGVyZmFjZSBVc2VyIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHJvbGU6IHN0cmluZztcbiAgICBjYXJlZXJQYXRoPzogc3RyaW5nO1xuICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IGJvb2xlYW47XG4gICAgb25ib2FyZGluZ1Byb2dyZXNzPzoge1xuICAgICAgY3VycmVudFN0ZXA6IHN0cmluZztcbiAgICAgIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogeyBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHRydWUgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKFxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgIGNhcmVlclBhdGg6IHVzZXIuY2FyZWVyUGF0aCxcbiAgICAgICAgICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IHVzZXIuaGFzQ29tcGxldGVkT25ib2FyZGluZyxcbiAgICAgICAgICAgIG9uYm9hcmRpbmdQcm9ncmVzczogdXNlci5vbmJvYXJkaW5nUHJvZ3Jlc3NcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICBjYXJlZXJQYXRoOiB1c2VyLmNhcmVlclBhdGgsXG4gICAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdXNlci5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nLFxuICAgICAgICAgIG9uYm9hcmRpbmdQcm9ncmVzczogdXNlci5vbmJvYXJkaW5nUHJvZ3Jlc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICAgIGlkOiB0b2tlbi5pZCxcbiAgICAgICAgICByb2xlOiB0b2tlbi5yb2xlLFxuICAgICAgICAgIGNhcmVlclBhdGg6IHRva2VuLmNhcmVlclBhdGgsXG4gICAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdG9rZW4uaGFzQ29tcGxldGVkT25ib2FyZGluZyxcbiAgICAgICAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHRva2VuLm9uYm9hcmRpbmdQcm9ncmVzc1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkw61hc1xuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxufTsiXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsImNvbXBhcmUiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaW5jbHVkZSIsIm9uYm9hcmRpbmdQcm9ncmVzcyIsImhhc2hlZFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwiaWQiLCJyb2xlIiwiY2FyZWVyUGF0aCIsImhhc0NvbXBsZXRlZE9uYm9hcmRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// src/lib/db.js or src/lib/db.ts\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // Named export\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlDQUFpQztBQUNhO0FBRXZDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBLEdBQUcsQ0FBQyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmZ4LWFjYWRlbXkvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9kYi5qcyBvciBzcmMvbGliL2RiLnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7IC8vIE5hbWVkIGV4cG9ydFxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// File: src/lib/prisma.ts\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQkFBMEI7QUFDb0I7QUFFOUMsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFHO0FBRW5FLElBQUlJLElBQXFDLEVBQUVILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Ly4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGaWxlOiBzcmMvbGliL3ByaXNtYS50c1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG4vLyBQcmlzbWFDbGllbnQgaXMgYXR0YWNoZWQgdG8gdGhlIGBnbG9iYWxgIG9iamVjdCBpbiBkZXZlbG9wbWVudCB0byBwcmV2ZW50XG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();