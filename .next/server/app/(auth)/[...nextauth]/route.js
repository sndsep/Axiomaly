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
exports.id = "app/(auth)/[...nextauth]/route";
exports.ids = ["app/(auth)/[...nextauth]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2F(auth)%2F%5B...nextauth%5D%2Froute&page=%2F(auth)%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2F(auth)%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2F(auth)%2F%5B...nextauth%5D%2Froute&page=%2F(auth)%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2F(auth)%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/(auth)/[...nextauth]/route.ts */ \"(rsc)/./src/app/(auth)/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/(auth)/[...nextauth]/route\",\n        pathname: \"/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/(auth)/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/app/(auth)/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/(auth)/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkYoYXV0aCklMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJnBhZ2U9JTJGKGF1dGgpJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkYoYXV0aCklMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Lz83OTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL0RvY2tEaXNrLzEwIFBST0pFQ1RTL2F4aW9tYWx5LW5ldy9zcmMvYXBwLyhhdXRoKS9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiLyhhdXRoKS9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwLyhhdXRoKS9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1ZvbHVtZXMvRG9ja0Rpc2svMTAgUFJPSkVDVFMvYXhpb21hbHktbmV3L3NyYy9hcHAvKGF1dGgpL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvKGF1dGgpL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2F(auth)%2F%5B...nextauth%5D%2Froute&page=%2F(auth)%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2F(auth)%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/(auth)/[...nextauth]/route.ts":
/*!***********************************************!*\
  !*** ./src/app/(auth)/[...nextauth]/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth-utils */ \"(rsc)/./src/lib/auth-utils.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * File: src/app/api/auth/[...nextauth]/route.ts\n * Description: NextAuth.js API route handler\n */ \n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_1___default()(_lib_auth_utils__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwLyhhdXRoKS9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztDQUdDLEdBRTZDO0FBQ2Q7QUFFaEMsTUFBTUUsVUFBVUQsZ0RBQVFBLENBQUNELHdEQUFXQTtBQUVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmZ4LWFjYWRlbXkvLi9zcmMvYXBwLyhhdXRoKS9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzJkNjkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlOiBzcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcbiAqIERlc2NyaXB0aW9uOiBOZXh0QXV0aC5qcyBBUEkgcm91dGUgaGFuZGxlclxuICovXG5cbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGgtdXRpbHNcIlxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfSJdLCJuYW1lcyI6WyJhdXRoT3B0aW9ucyIsIk5leHRBdXRoIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/(auth)/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth-utils.ts":
/*!*******************************!*\
  !*** ./src/lib/auth-utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated)\n/* harmony export */ });\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * File: src/lib/auth-utils.ts\n * Description: Authentication configuration and utilities\n */ \n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.hashedPassword) {\n                    throw new Error(\"User not found\");\n                }\n                const isPasswordValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                if (!isPasswordValid) {\n                    throw new Error(\"Invalid password\");\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                return {\n                    ...token,\n                    id: user.id,\n                    role: user.role\n                };\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    }\n};\n// Helper function to check if user is authenticated\nconst isAuthenticated = async ()=>{\n    try {\n        const response = await fetch(\"/api/auth/session\");\n        const session = await response.json();\n        return !!session?.user;\n    } catch (error) {\n        console.error(\"Auth check error:\", error);\n        return false;\n    }\n};\n// Helper function to get current user session\nconst getCurrentUser = async ()=>{\n    try {\n        const response = await fetch(\"/api/auth/session\");\n        const session = await response.json();\n        return session?.user || null;\n    } catch (error) {\n        console.error(\"Get user error:\", error);\n        return null;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgtdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7O0NBR0MsR0FFbUQ7QUFDZjtBQUM0QjtBQUMvQjtBQUczQixNQUFNSSxjQUErQjtJQUMxQ0MsU0FBU0wsbUVBQWFBLENBQUNDLCtDQUFNQTtJQUM3QkssU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNUUiwyRUFBbUJBLENBQUM7WUFDbEJTLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1sQiwrQ0FBTUEsQ0FBQ2tCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFDTFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDTSxRQUFRLENBQUNBLEtBQUtHLGNBQWMsRUFBRTtvQkFDakMsTUFBTSxJQUFJSixNQUFNO2dCQUNsQjtnQkFFQSxNQUFNSyxrQkFBa0IsTUFBTXBCLGlEQUFPQSxDQUNuQ1MsWUFBWUksUUFBUSxFQUNwQkcsS0FBS0csY0FBYztnQkFHckIsSUFBSSxDQUFDQyxpQkFBaUI7b0JBQ3BCLE1BQU0sSUFBSUwsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBTztvQkFDTE0sSUFBSUwsS0FBS0ssRUFBRTtvQkFDWFgsT0FBT00sS0FBS04sS0FBSztvQkFDakJGLE1BQU1RLEtBQUtSLElBQUk7b0JBQ2ZjLE1BQU1OLEtBQUtNLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRVQsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1IsT0FBTztvQkFDTCxHQUFHUyxLQUFLO29CQUNSSixJQUFJTCxLQUFLSyxFQUFFO29CQUNYQyxNQUFNTixLQUFLTSxJQUFJO2dCQUNqQjtZQUNGO1lBQ0EsT0FBT0c7UUFDVDtRQUNBLE1BQU10QixTQUFRLEVBQUVBLE9BQU8sRUFBRXNCLEtBQUssRUFBRTtZQUM5QixJQUFJdEIsUUFBUWEsSUFBSSxFQUFFO2dCQUNoQmIsUUFBUWEsSUFBSSxDQUFDSyxFQUFFLEdBQUdJLE1BQU1KLEVBQUU7Z0JBQzFCbEIsUUFBUWEsSUFBSSxDQUFDTSxJQUFJLEdBQUdHLE1BQU1ILElBQUk7WUFDaEM7WUFDQSxPQUFPbkI7UUFDVDtJQUNGO0FBQ0YsRUFBQztBQUVELG9EQUFvRDtBQUM3QyxNQUFNdUIsa0JBQWtCO0lBQzdCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07UUFDN0IsTUFBTXpCLFVBQVUsTUFBTXdCLFNBQVNFLElBQUk7UUFDbkMsT0FBTyxDQUFDLENBQUMxQixTQUFTYTtJQUNwQixFQUFFLE9BQU9jLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHFCQUFxQkE7UUFDbkMsT0FBTztJQUNUO0FBQ0YsRUFBQztBQUVELDhDQUE4QztBQUN2QyxNQUFNRSxpQkFBaUI7SUFDNUIsSUFBSTtRQUNGLE1BQU1MLFdBQVcsTUFBTUMsTUFBTTtRQUM3QixNQUFNekIsVUFBVSxNQUFNd0IsU0FBU0UsSUFBSTtRQUNuQyxPQUFPMUIsU0FBU2EsUUFBUTtJQUMxQixFQUFFLE9BQU9jLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1CQUFtQkE7UUFDakMsT0FBTztJQUNUO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Ly4vc3JjL2xpYi9hdXRoLXV0aWxzLnRzPzllOTEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlOiBzcmMvbGliL2F1dGgtdXRpbHMudHNcbiAqIERlc2NyaXB0aW9uOiBBdXRoZW50aWNhdGlvbiBjb25maWd1cmF0aW9uIGFuZCB1dGlsaXRpZXNcbiAqL1xuXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRqc1wiXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9sb2dpblwiLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlciBub3QgZm91bmRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGNvbXBhcmUoXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgdXNlci5oYXNoZWRQYXNzd29yZFxuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhc3N3b3JkXCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZ1xuICAgICAgICBzZXNzaW9uLnVzZXIucm9sZSA9IHRva2VuLnJvbGUgYXMgc3RyaW5nXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9zZXNzaW9uJylcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuICEhc2Vzc2lvbj8udXNlclxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGggY2hlY2sgZXJyb3I6JywgZXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHVzZXIgc2Vzc2lvblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9zZXNzaW9uJylcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgcmV0dXJuIHNlc3Npb24/LnVzZXIgfHwgbnVsbFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dldCB1c2VyIGVycm9yOicsIGVycm9yKVxuICAgIHJldHVybiBudWxsXG4gIH1cbn0iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsInByaXNtYSIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb21wYXJlIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJpZCIsInJvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImlzQXV0aGVudGljYXRlZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0Q3VycmVudFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth-utils.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/@auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2F(auth)%2F%5B...nextauth%5D%2Froute&page=%2F(auth)%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2F(auth)%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();