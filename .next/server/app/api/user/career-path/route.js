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
exports.id = "app/api/user/career-path/route";
exports.ids = ["app/api/user/career-path/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fcareer-path%2Froute&page=%2Fapi%2Fuser%2Fcareer-path%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fcareer-path%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fcareer-path%2Froute&page=%2Fapi%2Fuser%2Fcareer-path%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fcareer-path%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_user_career_path_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/user/career-path/route.ts */ \"(rsc)/./src/app/api/user/career-path/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/career-path/route\",\n        pathname: \"/api/user/career-path\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/career-path/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/app/api/user/career-path/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_user_career_path_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/user/career-path/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGY2FyZWVyLXBhdGglMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXIlMkZjYXJlZXItcGF0aCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXIlMkZjYXJlZXItcGF0aCUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnQztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Lz8zZDFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Wb2x1bWVzL0RvY2tEaXNrLzEwIFBST0pFQ1RTL2F4aW9tYWx5LW5ldy9zcmMvYXBwL2FwaS91c2VyL2NhcmVlci1wYXRoL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyL2NhcmVlci1wYXRoL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlci9jYXJlZXItcGF0aFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlci9jYXJlZXItcGF0aC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Wb2x1bWVzL0RvY2tEaXNrLzEwIFBST0pFQ1RTL2F4aW9tYWx5LW5ldy9zcmMvYXBwL2FwaS91c2VyL2NhcmVlci1wYXRoL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2VyL2NhcmVlci1wYXRoL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fcareer-path%2Froute&page=%2Fapi%2Fuser%2Fcareer-path%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fcareer-path%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/user/career-path/route.ts":
/*!***********************************************!*\
  !*** ./src/app/api/user/career-path/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n// src/app/api/user/career-path/route.ts\n\n\n\n\nasync function POST(request) {\n    try {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const data = await request.json();\n        console.log(\"Updating user with data:\", data);\n        const updatedUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n            where: {\n                email: session.user.email\n            },\n            data: {\n                careerPath: data.type,\n                onboardingProgress: {\n                    upsert: {\n                        where: {\n                            userId: session.user.id\n                        },\n                        create: {\n                            currentStep: \"INTERESTS\",\n                            completed: false,\n                            responses: {}\n                        },\n                        update: {\n                            currentStep: \"INTERESTS\",\n                            responses: {}\n                        }\n                    }\n                }\n            },\n            include: {\n                onboardingProgress: true\n            }\n        });\n        console.log(\"User updated:\", updatedUser);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(updatedUser);\n    } catch (error) {\n        console.error(\"Career path selection error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: error instanceof Error ? error.message : \"Failed to save career path\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2VyL2NhcmVlci1wYXRoL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUF3QztBQUNHO0FBQ0U7QUFDSjtBQUNIO0FBSS9CLGVBQWVJLEtBQUtDLE9BQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1MLDJEQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBRWxELElBQUksQ0FBQ0ksU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RFO1FBRUEsTUFBTUMsT0FBNEIsTUFBTVAsUUFBUUksSUFBSTtRQUVwREksUUFBUUMsR0FBRyxDQUFDLDRCQUE0QkY7UUFFeEMsTUFBTUcsY0FBYyxNQUFNWiwrQ0FBTUEsQ0FBQ0ksSUFBSSxDQUFDUyxNQUFNLENBQUM7WUFDM0NDLE9BQU87Z0JBQUVULE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUFDO1lBQ25DSSxNQUFNO2dCQUNKTSxZQUFZTixLQUFLTyxJQUFJO2dCQUNyQkMsb0JBQW9CO29CQUNsQkMsUUFBUTt3QkFDTkosT0FBTzs0QkFBRUssUUFBUWhCLFFBQVFDLElBQUksQ0FBQ2dCLEVBQUU7d0JBQUM7d0JBQ2pDQyxRQUFROzRCQUNOQyxhQUFhOzRCQUNiQyxXQUFXOzRCQUNYQyxXQUFXLENBQUM7d0JBQ2Q7d0JBQ0FYLFFBQVE7NEJBQ05TLGFBQWE7NEJBQ2JFLFdBQVcsQ0FBQzt3QkFDZDtvQkFDRjtnQkFDRjtZQUNGO1lBQ0FDLFNBQVM7Z0JBQ1BSLG9CQUFvQjtZQUN0QjtRQUNGO1FBRUFQLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJDO1FBQzdCLE9BQU9mLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNNO0lBRTNCLEVBQUUsT0FBT2MsT0FBTztRQUNkaEIsUUFBUWdCLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU83QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUN0QjtZQUFFQyxTQUFTbUIsaUJBQWlCQyxRQUFRRCxNQUFNbkIsT0FBTyxHQUFHO1FBQTZCLEdBQ2pGO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmZ4LWFjYWRlbXkvLi9zcmMvYXBwL2FwaS91c2VyL2NhcmVlci1wYXRoL3JvdXRlLnRzP2QzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvdXNlci9jYXJlZXItcGF0aC9yb3V0ZS50c1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJztcbmltcG9ydCB7IENhcmVlclBhdGgsIE9uYm9hcmRpbmdTdGVwIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgQ2FyZWVyUGF0aFNlbGVjdGlvbiB9IGZyb20gJ0AvdHlwZXMvb25ib2FyZGluZyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhOiBDYXJlZXJQYXRoU2VsZWN0aW9uID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgdXNlciB3aXRoIGRhdGE6JywgZGF0YSk7XG5cbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNhcmVlclBhdGg6IGRhdGEudHlwZSBhcyBDYXJlZXJQYXRoLFxuICAgICAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHtcbiAgICAgICAgICB1cHNlcnQ6IHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgY3VycmVudFN0ZXA6ICdJTlRFUkVTVFMnIGFzIE9uYm9hcmRpbmdTdGVwLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICByZXNwb25zZXM6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgIGN1cnJlbnRTdGVwOiAnSU5URVJFU1RTJyBhcyBPbmJvYXJkaW5nU3RlcCxcbiAgICAgICAgICAgICAgcmVzcG9uc2VzOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgb25ib2FyZGluZ1Byb2dyZXNzOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnVXNlciB1cGRhdGVkOicsIHVwZGF0ZWRVc2VyKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odXBkYXRlZFVzZXIpO1xuICAgIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhcmVlciBwYXRoIHNlbGVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2F2ZSBjYXJlZXIgcGF0aCcgfSwgXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIlBPU1QiLCJyZXF1ZXN0Iiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkVXNlciIsInVwZGF0ZSIsIndoZXJlIiwiY2FyZWVyUGF0aCIsInR5cGUiLCJvbmJvYXJkaW5nUHJvZ3Jlc3MiLCJ1cHNlcnQiLCJ1c2VySWQiLCJpZCIsImNyZWF0ZSIsImN1cnJlbnRTdGVwIiwiY29tcGxldGVkIiwicmVzcG9uc2VzIiwiaW5jbHVkZSIsImVycm9yIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/user/career-path/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n// src/lib/auth.ts\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    if (!credentials?.email || !credentials?.password) {\n                        console.log(\"Missing credentials\");\n                        return null;\n                    }\n                    console.log(\"Looking up user:\", credentials.email);\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        }\n                    });\n                    console.log(\"User found:\", !!user);\n                    if (!user || !user.hashedPassword) {\n                        return null;\n                    }\n                    const isPasswordValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_3__.compare)(credentials.password, user.hashedPassword);\n                    console.log(\"Password valid:\", isPasswordValid);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        careerPath: user.careerPath,\n                        hasCompletedOnboarding: user.hasCompletedOnboarding\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n                token.name = user.name;\n                token.role = user.role;\n                token.careerPath = user.careerPath;\n                token.hasCompletedOnboarding = user.hasCompletedOnboarding;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.careerPath = token.careerPath;\n                session.user.hasCompletedOnboarding = token.hasCompletedOnboarding;\n            }\n            return session;\n        }\n    },\n    debug: \"development\" === \"development\",\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZngtYWNhZGVteS8uL3NyYy9saWIvYXV0aC50cz82NjkyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9saWIvYXV0aC50c1xuXG5pbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiwgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJuZXh0LWF1dGhcIiB7XG4gIGludGVyZmFjZSBTZXNzaW9uIHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogc3RyaW5nO1xuICAgICAgcm9sZTogc3RyaW5nO1xuICAgICAgY2FyZWVyUGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IGJvb2xlYW47XG4gICAgfSAmIERlZmF1bHRTZXNzaW9uW1widXNlclwiXVxuICB9XG5cbiAgaW50ZXJmYWNlIFVzZXIge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIGNhcmVlclBhdGg6IHN0cmluZyB8IG51bGw7XG4gICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogYm9vbGVhbjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNaXNzaW5nIGNyZWRlbnRpYWxzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJMb29raW5nIHVwIHVzZXI6XCIsIGNyZWRlbnRpYWxzLmVtYWlsKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGZvdW5kOlwiLCAhIXVzZXIpO1xuXG4gICAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLmhhc2hlZFBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBjb21wYXJlKFxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICB1c2VyLmhhc2hlZFBhc3N3b3JkXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzc3dvcmQgdmFsaWQ6XCIsIGlzUGFzc3dvcmRWYWxpZCk7XG5cbiAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgICAgICBjYXJlZXJQYXRoOiB1c2VyLmNhcmVlclBhdGgsXG4gICAgICAgICAgICBoYXNDb21wbGV0ZWRPbmJvYXJkaW5nOiB1c2VyLmhhc0NvbXBsZXRlZE9uYm9hcmRpbmdcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICBlcnJvcjogXCIvbG9naW5cIixcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5uYW1lO1xuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xuICAgICAgICB0b2tlbi5jYXJlZXJQYXRoID0gdXNlci5jYXJlZXJQYXRoO1xuICAgICAgICB0b2tlbi5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nID0gdXNlci5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgIHNlc3Npb24udXNlci5yb2xlID0gdG9rZW4ucm9sZTtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmNhcmVlclBhdGggPSB0b2tlbi5jYXJlZXJQYXRoO1xuICAgICAgICBzZXNzaW9uLnVzZXIuaGFzQ29tcGxldGVkT25ib2FyZGluZyA9IHRva2VuLmhhc0NvbXBsZXRlZE9uYm9hcmRpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxufTsiXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJjb21wYXJlIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJpZCIsInJvbGUiLCJjYXJlZXJQYXRoIiwiaGFzQ29tcGxldGVkT25ib2FyZGluZyIsImVycm9yIiwicGFnZXMiLCJzaWduSW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImRlYnVnIiwicHJvY2VzcyIsInNlY3JldCIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/bcryptjs","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fuser%2Fcareer-path%2Froute&page=%2Fapi%2Fuser%2Fcareer-path%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fcareer-path%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();