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

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_onboarding_survey_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/onboarding/survey/route.ts */ \"(rsc)/./src/app/api/onboarding/survey/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/onboarding/survey/route\",\n        pathname: \"/api/onboarding/survey\",\n        filename: \"route\",\n        bundlePath: \"app/api/onboarding/survey/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/app/api/onboarding/survey/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_onboarding_survey_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/onboarding/survey/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvbmJvYXJkaW5nJTJGc3VydmV5JTJGcm91dGUmcGFnZT0lMkZhcGklMkZvbmJvYXJkaW5nJTJGc3VydmV5JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGb25ib2FyZGluZyUyRnN1cnZleSUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpQztBQUM5RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Lz83YTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL0RvY2tEaXNrLzEwIFBST0pFQ1RTL2F4aW9tYWx5LW5ldy9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vbmJvYXJkaW5nL3N1cnZleVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9heGlvbWFseS1uZXcvc3JjL2FwcC9hcGkvb25ib2FyZGluZy9zdXJ2ZXkvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL29uYm9hcmRpbmcvc3VydmV5L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/onboarding/survey/route.ts":
/*!************************************************!*\
  !*** ./src/app/api/onboarding/survey/route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n// src/app/api/onboarding/survey/route.ts\n\n\n\n\n\n\nconst surveySchema = zod__WEBPACK_IMPORTED_MODULE_5__.z.object({\n    experienceLevel: zod__WEBPACK_IMPORTED_MODULE_5__.z.enum([\n        \"beginner\",\n        \"intermediate\",\n        \"advanced\"\n    ]),\n    interests: zod__WEBPACK_IMPORTED_MODULE_5__.z.array(zod__WEBPACK_IMPORTED_MODULE_5__.z.string()).min(1),\n    weeklyHours: zod__WEBPACK_IMPORTED_MODULE_5__.z.coerce.number().min(5).max(40),\n    priorExperience: zod__WEBPACK_IMPORTED_MODULE_5__.z.string().min(10),\n    industryFocus: zod__WEBPACK_IMPORTED_MODULE_5__.z.array(zod__WEBPACK_IMPORTED_MODULE_5__.z.string()).min(1),\n    softwareExperience: zod__WEBPACK_IMPORTED_MODULE_5__.z.array(zod__WEBPACK_IMPORTED_MODULE_5__.z.string()),\n    preferredLearningStyle: zod__WEBPACK_IMPORTED_MODULE_5__.z.enum([\n        \"visual\",\n        \"hands-on\",\n        \"theoretical\",\n        \"mixed\"\n    ])\n});\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        const data = await request.json();\n        const validatedData = surveySchema.parse(data);\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.onboardingProgress.upsert({\n            where: {\n                userId: session.user.id\n            },\n            create: {\n                userId: session.user.id,\n                currentStep: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.OnboardingStep.RECOMMENDATIONS,\n                responses: validatedData\n            },\n            update: {\n                currentStep: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.OnboardingStep.RECOMMENDATIONS,\n                responses: validatedData\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error processing survey:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(error instanceof Error ? error.message : \"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\nasync function GET(request) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Unauthorized\", {\n                status: 401\n            });\n        }\n        const progress = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.onboardingProgress.findUnique({\n            where: {\n                userId: session.user.id\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            responses: progress?.responses || null\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBeUM7QUFDRTtBQUNPO0FBQ1Q7QUFDSDtBQUNVO0FBQ3hCO0FBRXhCLE1BQU1NLGVBQWVELGtDQUFDQSxDQUFDRSxNQUFNLENBQUM7SUFDNUJDLGlCQUFpQkgsa0NBQUNBLENBQUNJLElBQUksQ0FBQztRQUFDO1FBQVk7UUFBZ0I7S0FBVztJQUNoRUMsV0FBV0wsa0NBQUNBLENBQUNNLEtBQUssQ0FBQ04sa0NBQUNBLENBQUNPLE1BQU0sSUFBSUMsR0FBRyxDQUFDO0lBQ25DQyxhQUFhVCxrQ0FBQ0EsQ0FBQ1UsTUFBTSxDQUFDQyxNQUFNLEdBQUdILEdBQUcsQ0FBQyxHQUFHSSxHQUFHLENBQUM7SUFDMUNDLGlCQUFpQmIsa0NBQUNBLENBQUNPLE1BQU0sR0FBR0MsR0FBRyxDQUFDO0lBQ2hDTSxlQUFlZCxrQ0FBQ0EsQ0FBQ00sS0FBSyxDQUFDTixrQ0FBQ0EsQ0FBQ08sTUFBTSxJQUFJQyxHQUFHLENBQUM7SUFDdkNPLG9CQUFvQmYsa0NBQUNBLENBQUNNLEtBQUssQ0FBQ04sa0NBQUNBLENBQUNPLE1BQU07SUFDcENTLHdCQUF3QmhCLGtDQUFDQSxDQUFDSSxJQUFJLENBQUM7UUFBQztRQUFVO1FBQVk7UUFBZTtLQUFRO0FBQy9FO0FBRU8sZUFBZWEsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTXZCLGdFQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELElBQUksQ0FBQ3NCLFNBQVNDLE1BQU1DLE9BQU87WUFDekIsT0FBTyxJQUFJMUIscURBQVlBLENBQUMsZ0JBQWdCO2dCQUFFMkIsUUFBUTtZQUFJO1FBQ3hEO1FBRUEsTUFBTUMsT0FBTyxNQUFNTCxRQUFRTSxJQUFJO1FBQy9CLE1BQU1DLGdCQUFnQnhCLGFBQWF5QixLQUFLLENBQUNIO1FBRXpDLE1BQU16QiwrQ0FBTUEsQ0FBQzZCLGtCQUFrQixDQUFDQyxNQUFNLENBQUM7WUFDckNDLE9BQU87Z0JBQ0xDLFFBQVFYLFFBQVFDLElBQUksQ0FBQ1csRUFBRTtZQUN6QjtZQUNBQyxRQUFRO2dCQUNORixRQUFRWCxRQUFRQyxJQUFJLENBQUNXLEVBQUU7Z0JBQ3ZCRSxhQUFhbEMsMERBQWNBLENBQUNtQyxlQUFlO2dCQUMzQ0MsV0FBV1Y7WUFDYjtZQUNBVyxRQUFRO2dCQUNOSCxhQUFhbEMsMERBQWNBLENBQUNtQyxlQUFlO2dCQUMzQ0MsV0FBV1Y7WUFDYjtRQUNGO1FBRUEsT0FBTzlCLHFEQUFZQSxDQUFDNkIsSUFBSSxDQUFDO1lBQUVhLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTyxJQUFJM0MscURBQVlBLENBQ3JCMkMsaUJBQWlCRSxRQUFRRixNQUFNRyxPQUFPLEdBQUcseUJBQ3pDO1lBQUVuQixRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVPLGVBQWVvQixJQUFJeEIsT0FBZ0I7SUFDeEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTXZCLGdFQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELElBQUksQ0FBQ3NCLFNBQVNDLE1BQU1DLE9BQU87WUFDekIsT0FBTyxJQUFJMUIscURBQVlBLENBQUMsZ0JBQWdCO2dCQUFFMkIsUUFBUTtZQUFJO1FBQ3hEO1FBRUEsTUFBTXFCLFdBQVcsTUFBTTdDLCtDQUFNQSxDQUFDNkIsa0JBQWtCLENBQUNpQixVQUFVLENBQUM7WUFDMURmLE9BQU87Z0JBQUVDLFFBQVFYLFFBQVFDLElBQUksQ0FBQ1csRUFBRTtZQUFDO1FBQ25DO1FBRUEsT0FBT3BDLHFEQUFZQSxDQUFDNkIsSUFBSSxDQUFDO1lBQUVXLFdBQVdRLFVBQVVSLGFBQWE7UUFBSztJQUNwRSxFQUFFLE9BQU9HLE9BQU87UUFDZCxPQUFPLElBQUkzQyxxREFBWUEsQ0FBQyx5QkFBeUI7WUFBRTJCLFFBQVE7UUFBSTtJQUNqRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmZ4LWFjYWRlbXkvLi9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3N1cnZleS9yb3V0ZS50cz84MDcyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL29uYm9hcmRpbmcvc3VydmV5L3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBPbmJvYXJkaW5nU3RlcCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5jb25zdCBzdXJ2ZXlTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGV4cGVyaWVuY2VMZXZlbDogei5lbnVtKFsnYmVnaW5uZXInLCAnaW50ZXJtZWRpYXRlJywgJ2FkdmFuY2VkJ10pLFxuICBpbnRlcmVzdHM6IHouYXJyYXkoei5zdHJpbmcoKSkubWluKDEpLFxuICB3ZWVrbHlIb3Vyczogei5jb2VyY2UubnVtYmVyKCkubWluKDUpLm1heCg0MCksXG4gIHByaW9yRXhwZXJpZW5jZTogei5zdHJpbmcoKS5taW4oMTApLFxuICBpbmR1c3RyeUZvY3VzOiB6LmFycmF5KHouc3RyaW5nKCkpLm1pbigxKSxcbiAgc29mdHdhcmVFeHBlcmllbmNlOiB6LmFycmF5KHouc3RyaW5nKCkpLFxuICBwcmVmZXJyZWRMZWFybmluZ1N0eWxlOiB6LmVudW0oWyd2aXN1YWwnLCAnaGFuZHMtb24nLCAndGhlb3JldGljYWwnLCAnbWl4ZWQnXSlcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBzdXJ2ZXlTY2hlbWEucGFyc2UoZGF0YSk7XG5cbiAgICBhd2FpdCBwcmlzbWEub25ib2FyZGluZ1Byb2dyZXNzLnVwc2VydCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IHtcbiAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgIGN1cnJlbnRTdGVwOiBPbmJvYXJkaW5nU3RlcC5SRUNPTU1FTkRBVElPTlMsXG4gICAgICAgIHJlc3BvbnNlczogdmFsaWRhdGVkRGF0YSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IHtcbiAgICAgICAgY3VycmVudFN0ZXA6IE9uYm9hcmRpbmdTdGVwLlJFQ09NTUVOREFUSU9OUyxcbiAgICAgICAgcmVzcG9uc2VzOiB2YWxpZGF0ZWREYXRhLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBzdXJ2ZXk6JywgZXJyb3IpO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxuICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCBcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBhd2FpdCBwcmlzbWEub25ib2FyZGluZ1Byb2dyZXNzLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHJlc3BvbnNlczogcHJvZ3Jlc3M/LnJlc3BvbnNlcyB8fCBudWxsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwiT25ib2FyZGluZ1N0ZXAiLCJ6Iiwic3VydmV5U2NoZW1hIiwib2JqZWN0IiwiZXhwZXJpZW5jZUxldmVsIiwiZW51bSIsImludGVyZXN0cyIsImFycmF5Iiwic3RyaW5nIiwibWluIiwid2Vla2x5SG91cnMiLCJjb2VyY2UiLCJudW1iZXIiLCJtYXgiLCJwcmlvckV4cGVyaWVuY2UiLCJpbmR1c3RyeUZvY3VzIiwic29mdHdhcmVFeHBlcmllbmNlIiwicHJlZmVycmVkTGVhcm5pbmdTdHlsZSIsIlBPU1QiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwidmFsaWRhdGVkRGF0YSIsInBhcnNlIiwib25ib2FyZGluZ1Byb2dyZXNzIiwidXBzZXJ0Iiwid2hlcmUiLCJ1c2VySWQiLCJpZCIsImNyZWF0ZSIsImN1cnJlbnRTdGVwIiwiUkVDT01NRU5EQVRJT05TIiwicmVzcG9uc2VzIiwidXBkYXRlIiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsIkVycm9yIiwibWVzc2FnZSIsIkdFVCIsInByb2dyZXNzIiwiZmluZFVuaXF1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/onboarding/survey/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n// src/lib/auth.ts\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    if (!credentials?.email || !credentials?.password) {\n                        return null;\n                    }\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        },\n                        include: {\n                            onboardingProgress: true\n                        }\n                    });\n                    if (!user || !user.hashedPassword) {\n                        return null;\n                    }\n                    const isPasswordValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.hashedPassword);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        careerPath: user.careerPath,\n                        hasCompletedOnboarding: user.hasCompletedOnboarding,\n                        onboardingProgress: user.onboardingProgress\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                return {\n                    ...token,\n                    id: user.id,\n                    role: user.role,\n                    careerPath: user.careerPath,\n                    hasCompletedOnboarding: user.hasCompletedOnboarding,\n                    onboardingProgress: user.onboardingProgress\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            return {\n                ...session,\n                user: {\n                    ...session.user,\n                    id: token.id,\n                    role: token.role,\n                    careerPath: token.careerPath,\n                    hasCompletedOnboarding: token.hasCompletedOnboarding,\n                    onboardingProgress: token.onboardingProgress\n                }\n            };\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxrQkFBa0I7QUFFZ0Q7QUFDNUI7QUFDSDtBQTZCNUIsTUFBTUcsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEosMkVBQW1CQSxDQUFDO1lBQ2xCSyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSTtvQkFDRixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTt3QkFDakQsT0FBTztvQkFDVDtvQkFFQSxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQzt3QkFDeENDLE9BQU87NEJBQUVQLE9BQU9ELFlBQVlDLEtBQUs7d0JBQUM7d0JBQ2xDUSxTQUFTOzRCQUFFQyxvQkFBb0I7d0JBQUs7b0JBQ3RDO29CQUVBLElBQUksQ0FBQ0osUUFBUSxDQUFDQSxLQUFLSyxjQUFjLEVBQUU7d0JBQ2pDLE9BQU87b0JBQ1Q7b0JBRUEsTUFBTUMsa0JBQWtCLE1BQU1oQixpREFBT0EsQ0FDbkNJLFlBQVlJLFFBQVEsRUFDcEJFLEtBQUtLLGNBQWM7b0JBR3JCLElBQUksQ0FBQ0MsaUJBQWlCO3dCQUNwQixPQUFPO29CQUNUO29CQUVBLE9BQU87d0JBQ0xDLElBQUlQLEtBQUtPLEVBQUU7d0JBQ1haLE9BQU9LLEtBQUtMLEtBQUs7d0JBQ2pCRixNQUFNTyxLQUFLUCxJQUFJO3dCQUNmZSxNQUFNUixLQUFLUSxJQUFJO3dCQUNmQyxZQUFZVCxLQUFLUyxVQUFVO3dCQUMzQkMsd0JBQXdCVixLQUFLVSxzQkFBc0I7d0JBQ25ETixvQkFBb0JKLEtBQUtJLGtCQUFrQjtvQkFDN0M7Z0JBQ0YsRUFBRSxPQUFPTyxPQUFPO29CQUNkQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7b0JBQzdCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREUsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFZixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUixPQUFPO29CQUNMLEdBQUdlLEtBQUs7b0JBQ1JSLElBQUlQLEtBQUtPLEVBQUU7b0JBQ1hDLE1BQU1SLEtBQUtRLElBQUk7b0JBQ2ZDLFlBQVlULEtBQUtTLFVBQVU7b0JBQzNCQyx3QkFBd0JWLEtBQUtVLHNCQUFzQjtvQkFDbkROLG9CQUFvQkosS0FBS0ksa0JBQWtCO2dCQUM3QztZQUNGO1lBQ0EsT0FBT1c7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsT0FBTztnQkFDTCxHQUFHQyxPQUFPO2dCQUNWaEIsTUFBTTtvQkFDSixHQUFHZ0IsUUFBUWhCLElBQUk7b0JBQ2ZPLElBQUlRLE1BQU1SLEVBQUU7b0JBQ1pDLE1BQU1PLE1BQU1QLElBQUk7b0JBQ2hCQyxZQUFZTSxNQUFNTixVQUFVO29CQUM1QkMsd0JBQXdCSyxNQUFNTCxzQkFBc0I7b0JBQ3BETixvQkFBb0JXLE1BQU1YLGtCQUFrQjtnQkFDOUM7WUFDRjtRQUNGO0lBQ0Y7SUFDQWEsT0FBTztRQUNMQyxRQUFRO1FBQ1JQLE9BQU87SUFDVDtJQUNBSyxTQUFTO1FBQ1BHLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9hdXRoLnRzXG5pbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiwgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogc3RyaW5nO1xuICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgIHJvbGU6IHN0cmluZztcbiAgICAgIGNhcmVlclBhdGg/OiBzdHJpbmc7XG4gICAgICBoYXNDb21wbGV0ZWRPbmJvYXJkaW5nOiBib29sZWFuO1xuICAgICAgb25ib2FyZGluZ1Byb2dyZXNzPzoge1xuICAgICAgICBjdXJyZW50U3RlcDogc3RyaW5nO1xuICAgICAgICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gICAgICB9O1xuICAgIH0gJiBEZWZhdWx0U2Vzc2lvbltcInVzZXJcIl1cbiAgfVxuXG4gIGludGVyZmFjZSBVc2VyIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHJvbGU6IHN0cmluZztcbiAgICBjYXJlZXJQYXRoPzogc3RyaW5nO1xuICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IGJvb2xlYW47XG4gICAgb25ib2FyZGluZ1Byb2dyZXNzPzoge1xuICAgICAgY3VycmVudFN0ZXA6IHN0cmluZztcbiAgICAgIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICAgICAgaW5jbHVkZTogeyBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHRydWUgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKFxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICAgIGNhcmVlclBhdGg6IHVzZXIuY2FyZWVyUGF0aCxcbiAgICAgICAgICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IHVzZXIuaGFzQ29tcGxldGVkT25ib2FyZGluZyxcbiAgICAgICAgICAgIG9uYm9hcmRpbmdQcm9ncmVzczogdXNlci5vbmJvYXJkaW5nUHJvZ3Jlc3NcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICBjYXJlZXJQYXRoOiB1c2VyLmNhcmVlclBhdGgsXG4gICAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdXNlci5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nLFxuICAgICAgICAgIG9uYm9hcmRpbmdQcm9ncmVzczogdXNlci5vbmJvYXJkaW5nUHJvZ3Jlc3NcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICAgIGlkOiB0b2tlbi5pZCxcbiAgICAgICAgICByb2xlOiB0b2tlbi5yb2xlLFxuICAgICAgICAgIGNhcmVlclBhdGg6IHRva2VuLmNhcmVlclBhdGgsXG4gICAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdG9rZW4uaGFzQ29tcGxldGVkT25ib2FyZGluZyxcbiAgICAgICAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHRva2VuLm9uYm9hcmRpbmdQcm9ncmVzc1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkw61hc1xuICB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxufTsiXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsInByaXNtYSIsImNvbXBhcmUiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaW5jbHVkZSIsIm9uYm9hcmRpbmdQcm9ncmVzcyIsImhhc2hlZFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwiaWQiLCJyb2xlIiwiY2FyZWVyUGF0aCIsImhhc0NvbXBsZXRlZE9uYm9hcmRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fsurvey%2Froute&page=%2Fapi%2Fonboarding%2Fsurvey%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fsurvey%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();