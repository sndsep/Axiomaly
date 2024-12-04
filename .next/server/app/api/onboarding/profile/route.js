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
exports.id = "app/api/onboarding/profile/route";
exports.ids = ["app/api/onboarding/profile/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fprofile%2Froute&page=%2Fapi%2Fonboarding%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fprofile%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fprofile%2Froute&page=%2Fapi%2Fonboarding%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fprofile%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_Axiomaly_src_app_api_onboarding_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/onboarding/profile/route.ts */ \"(rsc)/./src/app/api/onboarding/profile/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/onboarding/profile/route\",\n        pathname: \"/api/onboarding/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/onboarding/profile/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/Axiomaly/src/app/api/onboarding/profile/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_Axiomaly_src_app_api_onboarding_profile_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/onboarding/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZvbmJvYXJkaW5nJTJGcHJvZmlsZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGb25ib2FyZGluZyUyRnByb2ZpbGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZvbmJvYXJkaW5nJTJGcHJvZmlsZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGQXhpb21hbHklMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlZvbHVtZXMlMkZEb2NrRGlzayUyRjEwJTIwUFJPSkVDVFMlMkZBeGlvbWFseSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEI7QUFDM0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZngtYWNhZGVteS8/YmU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9BeGlvbWFseS9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3Byb2ZpbGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL29uYm9hcmRpbmcvcHJvZmlsZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL29uYm9hcmRpbmcvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvb25ib2FyZGluZy9wcm9maWxlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1ZvbHVtZXMvRG9ja0Rpc2svMTAgUFJPSkVDVFMvQXhpb21hbHkvc3JjL2FwcC9hcGkvb25ib2FyZGluZy9wcm9maWxlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9vbmJvYXJkaW5nL3Byb2ZpbGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fprofile%2Froute&page=%2Fapi%2Fonboarding%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fprofile%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/onboarding/profile/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/onboarding/profile/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n// src/app/api/onboarding/profile/route.ts\n\n\n\n\nasync function POST(req) {\n    try {\n        // Get session\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.email) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Unauthorized\"\n            }), {\n                status: 401,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Parse request body\n        let body;\n        try {\n            body = await req.json();\n            console.log(\"Received request body:\", body);\n        } catch (error) {\n            console.error(\"Error parsing request body:\", error);\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Invalid request body\"\n            }), {\n                status: 400,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n        // Update user profile\n        try {\n            const updatedUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n                where: {\n                    email: session.user.email\n                },\n                data: {\n                    name: body.name,\n                    bio: body.bio,\n                    onboardingProgress: {\n                        update: {\n                            responses: {\n                                profileCompleted: true\n                            }\n                        }\n                    }\n                }\n            });\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Profile updated successfully\",\n                user: updatedUser\n            }), {\n                status: 200,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        } catch (error) {\n            console.error(\"Database error:\", error);\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Failed to update profile\"\n            }), {\n                status: 500,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n        }\n    } catch (error) {\n        console.error(\"Server error:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Internal server error\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9vbmJvYXJkaW5nL3Byb2ZpbGUvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwwQ0FBMEM7QUFDQztBQUNPO0FBQ1Q7QUFDSDtBQUkvQixlQUFlSSxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixjQUFjO1FBQ2QsTUFBTUMsVUFBVSxNQUFNTCxnRUFBZ0JBLENBQUNDLGtEQUFXQTtRQUVsRCxJQUFJLENBQUNJLFNBQVNDLE1BQU1DLE9BQU87WUFDekIsT0FBTyxJQUFJUixxREFBWUEsQ0FDckJTLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsU0FBUztZQUFlLElBQ3pDO2dCQUNFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7UUFFSjtRQUVBLHFCQUFxQjtRQUNyQixJQUFJQztRQUNKLElBQUk7WUFDRkEsT0FBTyxNQUFNVCxJQUFJVSxJQUFJO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCSDtRQUN4QyxFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLCtCQUErQkE7WUFDN0MsT0FBTyxJQUFJbEIscURBQVlBLENBQ3JCUyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBdUIsSUFDakQ7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUNoRDtRQUVKO1FBRUEsc0JBQXNCO1FBQ3RCLElBQUk7WUFDRixNQUFNTSxjQUFjLE1BQU1oQiwrQ0FBTUEsQ0FBQ0ksSUFBSSxDQUFDYSxNQUFNLENBQUM7Z0JBQzNDQyxPQUFPO29CQUFFYixPQUFPRixRQUFRQyxJQUFJLENBQUNDLEtBQUs7Z0JBQUM7Z0JBQ25DYyxNQUFNO29CQUNKQyxNQUFNVCxLQUFLUyxJQUFJO29CQUNmQyxLQUFLVixLQUFLVSxHQUFHO29CQUNiQyxvQkFBb0I7d0JBQ2xCTCxRQUFROzRCQUNOTSxXQUFXO2dDQUNUQyxrQkFBa0I7NEJBQ3BCO3dCQUNGO29CQUNGO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPLElBQUkzQixxREFBWUEsQ0FDckJTLEtBQUtDLFNBQVMsQ0FBQztnQkFDYkMsU0FBUztnQkFDVEosTUFBTVk7WUFDUixJQUNBO2dCQUNFUCxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7UUFHSixFQUFFLE9BQU9LLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLG1CQUFtQkE7WUFDakMsT0FBTyxJQUFJbEIscURBQVlBLENBQ3JCUyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBMkIsSUFDckQ7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUNoRDtRQUVKO0lBRUYsRUFBRSxPQUFPSyxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxpQkFBaUJBO1FBQy9CLE9BQU8sSUFBSWxCLHFEQUFZQSxDQUNyQlMsS0FBS0MsU0FBUyxDQUFDO1lBQUVDLFNBQVM7UUFBd0IsSUFDbEQ7WUFDRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUVKO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZngtYWNhZGVteS8uL3NyYy9hcHAvYXBpL29uYm9hcmRpbmcvcHJvZmlsZS9yb3V0ZS50cz8wMGNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL29uYm9hcmRpbmcvcHJvZmlsZS9yb3V0ZS50c1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9uZXh0JztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgcHJvZmlsZVNjaGVtYSB9IGZyb20gJ0AvbGliL3ZhbGlkYXRvcnMvcHJvZmlsZSc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgLy8gR2V0IHNlc3Npb25cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5lbWFpbCkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSksIFxuICAgICAgICB7IFxuICAgICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgcmVxdWVzdCBib2R5XG4gICAgbGV0IGJvZHk7XG4gICAgdHJ5IHtcbiAgICAgIGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHJlcXVlc3QgYm9keTonLCBib2R5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyByZXF1ZXN0IGJvZHk6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0ludmFsaWQgcmVxdWVzdCBib2R5JyB9KSwgXG4gICAgICAgIHsgXG4gICAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdXNlciBwcm9maWxlXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogYm9keS5uYW1lLFxuICAgICAgICAgIGJpbzogYm9keS5iaW8sXG4gICAgICAgICAgb25ib2FyZGluZ1Byb2dyZXNzOiB7XG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgcmVzcG9uc2VzOiB7XG4gICAgICAgICAgICAgICAgcHJvZmlsZUNvbXBsZXRlZDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgXG4gICAgICAgICAgbWVzc2FnZTogJ1Byb2ZpbGUgdXBkYXRlZCBzdWNjZXNzZnVsbHknLFxuICAgICAgICAgIHVzZXI6IHVwZGF0ZWRVc2VyIFxuICAgICAgICB9KSwgXG4gICAgICAgIHsgXG4gICAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnRmFpbGVkIHRvIHVwZGF0ZSBwcm9maWxlJyB9KSwgXG4gICAgICAgIHsgXG4gICAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdTZXJ2ZXIgZXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KSwgXG4gICAgICB7IFxuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJoZWFkZXJzIiwiYm9keSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ1cGRhdGVkVXNlciIsInVwZGF0ZSIsIndoZXJlIiwiZGF0YSIsIm5hbWUiLCJiaW8iLCJvbmJvYXJkaW5nUHJvZ3Jlc3MiLCJyZXNwb25zZXMiLCJwcm9maWxlQ29tcGxldGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/onboarding/profile/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n// src/lib/auth.ts\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma),\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async session ({ session, token }) {\n            if (session.user && token.sub) {\n                // Fetch fresh user data\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        id: token.sub\n                    },\n                    select: {\n                        id: true,\n                        name: true,\n                        email: true,\n                        image: true,\n                        role: true,\n                        careerPath: true,\n                        hasCompletedOnboarding: true,\n                        onboardingProgress: true\n                    }\n                });\n                // Update session with fresh data\n                session.user = user || session.user;\n                session.id = token.sub;\n            }\n            return session;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n            }\n            return token;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    if (!credentials?.email || !credentials?.password) {\n                        return null;\n                    }\n                    const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                        where: {\n                            email: credentials.email\n                        },\n                        include: {\n                            onboardingProgress: true\n                        }\n                    });\n                    if (!user || !user.hashedPassword) {\n                        return null;\n                    }\n                    const isPasswordValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.hashedPassword);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: user.id,\n                        email: user.email,\n                        name: user.name,\n                        role: user.role,\n                        careerPath: user.careerPath,\n                        hasCompletedOnboarding: user.hasCompletedOnboarding,\n                        onboardingProgress: user.onboardingProgress\n                    };\n                } catch (error) {\n                    console.error(\"Auth error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsa0JBQWtCO0FBRWdEO0FBQzVCO0FBQ0g7QUFDaUI7QUE2QjdDLE1BQU1JLGNBQStCO0lBQzFDQyxTQUFTRixtRUFBYUEsQ0FBQ0YsK0NBQU1BO0lBQzdCSyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUYsU0FBUSxFQUFFQSxPQUFPLEVBQUVHLEtBQUssRUFBRTtZQUM5QixJQUFJSCxRQUFRSSxJQUFJLElBQUlELE1BQU1FLEdBQUcsRUFBRTtnQkFDN0Isd0JBQXdCO2dCQUN4QixNQUFNRCxPQUFPLE1BQU1ULCtDQUFNQSxDQUFDUyxJQUFJLENBQUNFLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVDLElBQUlMLE1BQU1FLEdBQUc7b0JBQUM7b0JBQ3ZCSSxRQUFRO3dCQUNORCxJQUFJO3dCQUNKRSxNQUFNO3dCQUNOQyxPQUFPO3dCQUNQQyxPQUFPO3dCQUNQQyxNQUFNO3dCQUNOQyxZQUFZO3dCQUNaQyx3QkFBd0I7d0JBQ3hCQyxvQkFBb0I7b0JBQ3RCO2dCQUNGO2dCQUVBLGlDQUFpQztnQkFDakNoQixRQUFRSSxJQUFJLEdBQUdBLFFBQVFKLFFBQVFJLElBQUk7Z0JBQ25DSixRQUFRUSxFQUFFLEdBQUdMLE1BQU1FLEdBQUc7WUFDeEI7WUFDQSxPQUFPTDtRQUNUO1FBQ0EsTUFBTWlCLEtBQUksRUFBRWQsS0FBSyxFQUFFQyxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUkQsTUFBTUssRUFBRSxHQUFHSixLQUFLSSxFQUFFO2dCQUNsQkwsTUFBTVUsSUFBSSxHQUFHVCxLQUFLUyxJQUFJO1lBQ3hCO1lBQ0EsT0FBT1Y7UUFDVDtJQUNGO0lBQ0FlLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQUMsV0FBVztRQUNUM0IsMkVBQW1CQSxDQUFDO1lBQ2xCZ0IsTUFBTTtZQUNOWSxhQUFhO2dCQUNYWCxPQUFPO29CQUFFWSxPQUFPO29CQUFTQyxNQUFNO2dCQUFPO2dCQUN0Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1FLFdBQVVKLFdBQVc7Z0JBQ3pCLElBQUk7b0JBQ0YsSUFBSSxDQUFDQSxhQUFhWCxTQUFTLENBQUNXLGFBQWFHLFVBQVU7d0JBQ2pELE9BQU87b0JBQ1Q7b0JBRUEsTUFBTXJCLE9BQU8sTUFBTVQsK0NBQU1BLENBQUNTLElBQUksQ0FBQ0UsVUFBVSxDQUFDO3dCQUN4Q0MsT0FBTzs0QkFBRUksT0FBT1csWUFBWVgsS0FBSzt3QkFBQzt3QkFDbENnQixTQUFTOzRCQUFFWCxvQkFBb0I7d0JBQUs7b0JBQ3RDO29CQUVBLElBQUksQ0FBQ1osUUFBUSxDQUFDQSxLQUFLd0IsY0FBYyxFQUFFO3dCQUNqQyxPQUFPO29CQUNUO29CQUVBLE1BQU1DLGtCQUFrQixNQUFNakMsaURBQU9BLENBQ25DMEIsWUFBWUcsUUFBUSxFQUNwQnJCLEtBQUt3QixjQUFjO29CQUdyQixJQUFJLENBQUNDLGlCQUFpQjt3QkFDcEIsT0FBTztvQkFDVDtvQkFFQSxPQUFPO3dCQUNMckIsSUFBSUosS0FBS0ksRUFBRTt3QkFDWEcsT0FBT1AsS0FBS08sS0FBSzt3QkFDakJELE1BQU1OLEtBQUtNLElBQUk7d0JBQ2ZHLE1BQU1ULEtBQUtTLElBQUk7d0JBQ2ZDLFlBQVlWLEtBQUtVLFVBQVU7d0JBQzNCQyx3QkFBd0JYLEtBQUtXLHNCQUFzQjt3QkFDbkRDLG9CQUFvQlosS0FBS1ksa0JBQWtCO29CQUM3QztnQkFDRixFQUFFLE9BQU9JLE9BQU87b0JBQ2RVLFFBQVFWLEtBQUssQ0FBQyxlQUFlQTtvQkFDN0IsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNEVyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZmeC1hY2FkZW15Ly4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2xpYi9hdXRoLnRzXG5pbXBvcnQgeyBEZWZhdWx0U2Vzc2lvbiwgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuXG5kZWNsYXJlIG1vZHVsZSBcIm5leHQtYXV0aFwiIHtcbiAgaW50ZXJmYWNlIFNlc3Npb24ge1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgcm9sZTogc3RyaW5nO1xuICAgICAgY2FyZWVyUGF0aD86IHN0cmluZztcbiAgICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IGJvb2xlYW47XG4gICAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M/OiB7XG4gICAgICAgIGN1cnJlbnRTdGVwOiBzdHJpbmc7XG4gICAgICAgIGNvbXBsZXRlZDogYm9vbGVhbjtcbiAgICAgIH07XG4gICAgfSAmIERlZmF1bHRTZXNzaW9uW1widXNlclwiXVxuICB9XG5cbiAgaW50ZXJmYWNlIFVzZXIge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcm9sZTogc3RyaW5nO1xuICAgIGNhcmVlclBhdGg/OiBzdHJpbmc7XG4gICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogYm9vbGVhbjtcbiAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M/OiB7XG4gICAgICBjdXJyZW50U3RlcDogc3RyaW5nO1xuICAgICAgY29tcGxldGVkOiBib29sZWFuO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyICYmIHRva2VuLnN1Yikge1xuICAgICAgICAvLyBGZXRjaCBmcmVzaCB1c2VyIGRhdGFcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGlkOiB0b2tlbi5zdWIgfSxcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgaW1hZ2U6IHRydWUsXG4gICAgICAgICAgICByb2xlOiB0cnVlLFxuICAgICAgICAgICAgY2FyZWVyUGF0aDogdHJ1ZSxcbiAgICAgICAgICAgIGhhc0NvbXBsZXRlZE9uYm9hcmRpbmc6IHRydWUsXG4gICAgICAgICAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBzZXNzaW9uIHdpdGggZnJlc2ggZGF0YVxuICAgICAgICBzZXNzaW9uLnVzZXIgPSB1c2VyIHx8IHNlc3Npb24udXNlcjtcbiAgICAgICAgc2Vzc2lvbi5pZCA9IHRva2VuLnN1YjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5yb2xlID0gdXNlci5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7IG9uYm9hcmRpbmdQcm9ncmVzczogdHJ1ZSB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaGFzaGVkUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGNvbXBhcmUoXG4gICAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgICAgY2FyZWVyUGF0aDogdXNlci5jYXJlZXJQYXRoLFxuICAgICAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdXNlci5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nLFxuICAgICAgICAgICAgb25ib2FyZGluZ1Byb2dyZXNzOiB1c2VyLm9uYm9hcmRpbmdQcm9ncmVzc1xuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGggZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUXG59OyJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwiY29tcGFyZSIsIlByaXNtYUFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJjYWxsYmFja3MiLCJ0b2tlbiIsInVzZXIiLCJzdWIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsInNlbGVjdCIsIm5hbWUiLCJlbWFpbCIsImltYWdlIiwicm9sZSIsImNhcmVlclBhdGgiLCJoYXNDb21wbGV0ZWRPbmJvYXJkaW5nIiwib25ib2FyZGluZ1Byb2dyZXNzIiwiand0IiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsInByb3ZpZGVycyIsImNyZWRlbnRpYWxzIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJpbmNsdWRlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb25zb2xlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fonboarding%2Fprofile%2Froute&page=%2Fapi%2Fonboarding%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fonboarding%2Fprofile%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();