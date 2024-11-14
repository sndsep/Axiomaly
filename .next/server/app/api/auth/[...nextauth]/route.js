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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNrQztBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2F4aW9tYWx5LW5ldy8/ZjliZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9heGlvbWFseS1uZXcvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Wb2x1bWVzL0RvY2tEaXNrLzEwIFBST0pFQ1RTL2F4aW9tYWx5LW5ldy9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n// src/app/api/auth/[...nextauth]/route.ts\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFFVDtBQUNRO0FBRXpDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2F4aW9tYWx5LW5ldy8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07Il0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n// src/lib/auth.ts\n\n\n\n// Test users for development\nconst testUsers = [\n    {\n        id: \"1\",\n        name: \"Test Student\",\n        email: \"student@test.com\",\n        role: \"STUDENT\",\n        careerPath: \"SHORT_COURSE\",\n        hasCompletedOnboarding: false\n    },\n    {\n        id: \"2\",\n        name: \"Test Admin\",\n        email: \"admin@test.com\",\n        role: \"ADMIN\",\n        careerPath: null,\n        hasCompletedOnboarding: true\n    },\n    {\n        id: \"3\",\n        name: \"Test Instructor\",\n        email: \"instructor@test.com\",\n        role: \"INSTRUCTOR\",\n        careerPath: null,\n        hasCompletedOnboarding: true\n    }\n];\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Development Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    console.log(\"Auth attempt for:\", credentials?.email);\n                    if (!credentials?.email) {\n                        console.log(\"No email provided\");\n                        return null;\n                    }\n                    // In development mode, use test users\n                    if (true) {\n                        const testUser = testUsers.find((user)=>user.email === credentials.email);\n                        console.log(\"Development mode - Test user found:\", !!testUser);\n                        return testUser || null;\n                    }\n                    // In production, use database\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    console.log(\"User found:\", !!user);\n                    return user;\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60 // 30 days\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.careerPath = user.careerPath;\n                token.hasCompletedOnboarding = user.hasCompletedOnboarding;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.careerPath = token.careerPath;\n                session.user.hasCompletedOnboarding = token.hasCompletedOnboarding;\n            }\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtZQUNBLE9BQU9xQjtRQUNUO0lBQ0Y7SUFDQU0sUUFBUWhCLFFBQVFpQixHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4aW9tYWx5LW5ldy8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9saWIvYXV0aC50c1xuXG5pbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiwgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuLy8gRXh0ZW5kIG5leHQtYXV0aCB0eXBlc1xuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIGV4dGVuZHMgRGVmYXVsdFNlc3Npb24ge1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICByb2xlOiBzdHJpbmc7XG4gICAgICBjYXJlZXJQYXRoOiBzdHJpbmcgfCBudWxsO1xuICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogYm9vbGVhbjtcbiAgICB9ICYgRGVmYXVsdFNlc3Npb25bXCJ1c2VyXCJdXG4gIH1cblxuICBpbnRlcmZhY2UgVXNlciB7XG4gICAgaWQ6IHN0cmluZztcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgY2FyZWVyUGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgICBoYXNDb21wbGV0ZWRPbmJvYXJkaW5nOiBib29sZWFuO1xuICB9XG59XG5cbi8vIFRlc3QgdXNlcnMgZm9yIGRldmVsb3BtZW50XG5jb25zdCB0ZXN0VXNlcnMgPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJUZXN0IFN0dWRlbnRcIixcbiAgICBlbWFpbDogXCJzdHVkZW50QHRlc3QuY29tXCIsXG4gICAgcm9sZTogXCJTVFVERU5UXCIsXG4gICAgY2FyZWVyUGF0aDogXCJTSE9SVF9DT1VSU0VcIixcbiAgICBoYXNDb21wbGV0ZWRPbmJvYXJkaW5nOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG5hbWU6IFwiVGVzdCBBZG1pblwiLFxuICAgIGVtYWlsOiBcImFkbWluQHRlc3QuY29tXCIsXG4gICAgcm9sZTogXCJBRE1JTlwiLFxuICAgIGNhcmVlclBhdGg6IG51bGwsXG4gICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIG5hbWU6IFwiVGVzdCBJbnN0cnVjdG9yXCIsXG4gICAgZW1haWw6IFwiaW5zdHJ1Y3RvckB0ZXN0LmNvbVwiLFxuICAgIHJvbGU6IFwiSU5TVFJVQ1RPUlwiLFxuICAgIGNhcmVlclBhdGg6IG51bGwsXG4gICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdHJ1ZVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiRGV2ZWxvcG1lbnQgQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIGF0dGVtcHQgZm9yOlwiLCBjcmVkZW50aWFscz8uZW1haWwpO1xuXG4gICAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZW1haWwgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgdGVzdCB1c2Vyc1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXN0VXNlciA9IHRlc3RVc2Vycy5maW5kKHVzZXIgPT4gdXNlci5lbWFpbCA9PT0gY3JlZGVudGlhbHMuZW1haWwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZXZlbG9wbWVudCBtb2RlIC0gVGVzdCB1c2VyIGZvdW5kOlwiLCAhIXRlc3RVc2VyKTtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0VXNlciB8fCBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEluIHByb2R1Y3Rpb24sIHVzZSBkYXRhYmFzZVxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgZm91bmQ6XCIsICEhdXNlcik7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQXV0aCBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCJcbiAgfSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwIC8vIDMwIGRheXNcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xuICAgICAgICB0b2tlbi5jYXJlZXJQYXRoID0gdXNlci5jYXJlZXJQYXRoO1xuICAgICAgICB0b2tlbi5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nID0gdXNlci5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmNhcmVlclBhdGggPSB0b2tlbi5jYXJlZXJQYXRoO1xuICAgICAgICBzZXNzaW9uLnVzZXIuaGFzQ29tcGxldGVkT25ib2FyZGluZyA9IHRva2VuLmhhc0NvbXBsZXRlZE9uYm9hcmRpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXG59OyJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsInRlc3RVc2VycyIsImlkIiwibmFtZSIsImVtYWlsIiwicm9sZSIsImNhcmVlclBhdGgiLCJoYXNDb21wbGV0ZWRPbmJvYXJkaW5nIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwidGVzdFVzZXIiLCJmaW5kIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVycm9yIiwicGFnZXMiLCJzaWduSW4iLCJkZWJ1ZyIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2VjcmV0IiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// File: src/lib/prisma.ts\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQkFBMEI7QUFDb0I7QUFFOUMsNEVBQTRFO0FBQzVFLDZDQUE2QztBQUM3QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFHO0FBRW5FLElBQUlJLElBQXFDLEVBQUVILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4aW9tYWx5LW5ldy8uL3NyYy9saWIvcHJpc21hLnRzPzAxZDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZTogc3JjL2xpYi9wcmlzbWEudHNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxuLy8gZXhoYXVzdGluZyB5b3VyIGRhdGFiYXNlIGNvbm5lY3Rpb24gbGltaXQuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWwgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH07XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hIHx8IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/preact-render-to-string","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();