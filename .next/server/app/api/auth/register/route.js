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
exports.id = "app/api/auth/register/route";
exports.ids = ["app/api/auth/register/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/register/route.ts */ \"(rsc)/./src/app/api/auth/register/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/register/route\",\n        pathname: \"/api/auth/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/register/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/axiomaly-new/src/app/api/auth/register/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_axiomaly_new_src_app_api_auth_register_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVnaXN0ZXIlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZyZWdpc3RlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGYXhpb21hbHktbmV3JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM2QjtBQUMxRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1ZvbHVtZXMvRG9ja0Rpc2svMTAgUFJPSkVDVFMvYXhpb21hbHktbmV3L3NyYy9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL3JlZ2lzdGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1ZvbHVtZXMvRG9ja0Rpc2svMTAgUFJPSkVDVFMvYXhpb21hbHktbmV3L3NyYy9hcHAvYXBpL2F1dGgvcmVnaXN0ZXIvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/register/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/auth/register/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n// src/app/api/auth/register/route.ts\n\n\n\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { email, name, password } = body;\n        console.log(\"Incoming registration request\");\n        console.log(\"Request body:\", {\n            ...body,\n            password: '[REDACTED]'\n        });\n        if (!email || !name || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if user exists\n        const exists = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                email: email.toLowerCase()\n            }\n        });\n        if (exists) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"User already exists\"\n            }, {\n                status: 400\n            });\n        }\n        // Hash password\n        const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.hash)(password, 12);\n        // Create user with explicit onboarding status\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.create({\n            data: {\n                name,\n                email: email.toLowerCase(),\n                hashedPassword,\n                role: \"STUDENT\",\n                hasCompletedOnboarding: false,\n                careerPath: null,\n                // Create preferences inline\n                preferences: {\n                    create: {\n                        emailNotifications: true,\n                        marketingEmails: false,\n                        courseUpdates: true,\n                        preferredTags: []\n                    }\n                },\n                // Create onboarding progress inline\n                onboardingProgress: {\n                    create: {\n                        currentStep: \"CAREER_PATH\",\n                        completed: false,\n                        responses: {}\n                    }\n                }\n            },\n            // Include these relations in the response\n            include: {\n                preferences: true,\n                onboardingProgress: true\n            }\n        });\n        console.log(\"Created new user:\", {\n            id: user.id,\n            email: user.email,\n            hasCompletedOnboarding: user.hasCompletedOnboarding,\n            careerPath: user.careerPath\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            user: {\n                id: user.id,\n                name: user.name,\n                email: user.email,\n                hasCompletedOnboarding: user.hasCompletedOnboarding\n            }\n        }, {\n            status: 201,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error(\"Registration error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            error: \"Failed to create user account\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUNBQXFDO0FBQ007QUFDWDtBQUNFO0FBRTNCLGVBQWVHLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUUsR0FBR0o7UUFFbENLLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUMsaUJBQWlCO1lBQUUsR0FBR04sSUFBSTtZQUFFSSxVQUFVO1FBQWE7UUFFL0QsSUFBSSxDQUFDRixTQUFTLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVTtZQUNoQyxPQUFPVCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRU0sT0FBTztZQUEwQixHQUNuQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsdUJBQXVCO1FBQ3ZCLE1BQU1DLFNBQVMsTUFBTVosMkNBQU1BLENBQUNhLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQzFDQyxPQUFPO2dCQUNMVixPQUFPQSxNQUFNVyxXQUFXO1lBQzFCO1FBQ0Y7UUFFQSxJQUFJSixRQUFRO1lBQ1YsT0FBT2QscURBQVlBLENBQUNNLElBQUksQ0FDdEI7Z0JBQUVNLE9BQU87WUFBc0IsR0FDL0I7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLGdCQUFnQjtRQUNoQixNQUFNTSxpQkFBaUIsTUFBTWxCLDhDQUFJQSxDQUFDUSxVQUFVO1FBRTVDLDhDQUE4QztRQUM5QyxNQUFNTSxPQUFPLE1BQU1iLDJDQUFNQSxDQUFDYSxJQUFJLENBQUNLLE1BQU0sQ0FBQztZQUNwQ0MsTUFBTTtnQkFDSmI7Z0JBQ0FELE9BQU9BLE1BQU1XLFdBQVc7Z0JBQ3hCQztnQkFDQUcsTUFBTTtnQkFDTkMsd0JBQXdCO2dCQUN4QkMsWUFBWTtnQkFDWiw0QkFBNEI7Z0JBQzVCQyxhQUFhO29CQUNYTCxRQUFRO3dCQUNOTSxvQkFBb0I7d0JBQ3BCQyxpQkFBaUI7d0JBQ2pCQyxlQUFlO3dCQUNmQyxlQUFlLEVBQUU7b0JBQ25CO2dCQUNGO2dCQUNBLG9DQUFvQztnQkFDcENDLG9CQUFvQjtvQkFDbEJWLFFBQVE7d0JBQ05XLGFBQWE7d0JBQ2JDLFdBQVc7d0JBQ1hDLFdBQVcsQ0FBQztvQkFDZDtnQkFDRjtZQUNGO1lBQ0EsMENBQTBDO1lBQzFDQyxTQUFTO2dCQUNQVCxhQUFhO2dCQUNiSyxvQkFBb0I7WUFDdEI7UUFDRjtRQUVBcEIsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQjtZQUMvQndCLElBQUlwQixLQUFLb0IsRUFBRTtZQUNYNUIsT0FBT1EsS0FBS1IsS0FBSztZQUNqQmdCLHdCQUF3QlIsS0FBS1Esc0JBQXNCO1lBQ25EQyxZQUFZVCxLQUFLUyxVQUFVO1FBQzdCO1FBRUEsT0FBT3hCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFDdkI4QixTQUFTO1lBQ1RyQixNQUFNO2dCQUNKb0IsSUFBSXBCLEtBQUtvQixFQUFFO2dCQUNYM0IsTUFBTU8sS0FBS1AsSUFBSTtnQkFDZkQsT0FBT1EsS0FBS1IsS0FBSztnQkFDakJnQix3QkFBd0JSLEtBQUtRLHNCQUFzQjtZQUNyRDtRQUNGLEdBQUc7WUFDRFYsUUFBUTtZQUNSd0IsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUVGLEVBQUUsT0FBT3pCLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLHVCQUF1QkE7UUFFckMsT0FBT1oscURBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFDRThCLFNBQVM7WUFDVHhCLE9BQU87UUFDVCxHQUNBO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9heGlvbWFseS1uZXcvc3JjL2FwcC9hcGkvYXV0aC9yZWdpc3Rlci9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvYXBwL2FwaS9hdXRoL3JlZ2lzdGVyL3JvdXRlLnRzXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGhhc2ggfSBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9kYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBwYXNzd29yZCB9ID0gYm9keTtcblxuICAgIGNvbnNvbGUubG9nKFwiSW5jb21pbmcgcmVnaXN0cmF0aW9uIHJlcXVlc3RcIik7XG4gICAgY29uc29sZS5sb2coXCJSZXF1ZXN0IGJvZHk6XCIsIHsgLi4uYm9keSwgcGFzc3dvcmQ6ICdbUkVEQUNURURdJyB9KTtcblxuICAgIGlmICghZW1haWwgfHwgIW5hbWUgfHwgIXBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHNcbiAgICBjb25zdCBleGlzdHMgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGVtYWlsOiBlbWFpbC50b0xvd2VyQ2FzZSgpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEhhc2ggcGFzc3dvcmRcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2gocGFzc3dvcmQsIDEyKTtcblxuICAgIC8vIENyZWF0ZSB1c2VyIHdpdGggZXhwbGljaXQgb25ib2FyZGluZyBzdGF0dXNcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWw6IGVtYWlsLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGhhc2hlZFBhc3N3b3JkLFxuICAgICAgICByb2xlOiBcIlNUVURFTlRcIixcbiAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogZmFsc2UsXG4gICAgICAgIGNhcmVlclBhdGg6IG51bGwsXG4gICAgICAgIC8vIENyZWF0ZSBwcmVmZXJlbmNlcyBpbmxpbmVcbiAgICAgICAgcHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIGVtYWlsTm90aWZpY2F0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgIG1hcmtldGluZ0VtYWlsczogZmFsc2UsXG4gICAgICAgICAgICBjb3Vyc2VVcGRhdGVzOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmVycmVkVGFnczogW11cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIENyZWF0ZSBvbmJvYXJkaW5nIHByb2dyZXNzIGlubGluZVxuICAgICAgICBvbmJvYXJkaW5nUHJvZ3Jlc3M6IHtcbiAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwOiBcIkNBUkVFUl9QQVRIXCIsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2VzOiB7fVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEluY2x1ZGUgdGhlc2UgcmVsYXRpb25zIGluIHRoZSByZXNwb25zZVxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBwcmVmZXJlbmNlczogdHJ1ZSxcbiAgICAgICAgb25ib2FyZGluZ1Byb2dyZXNzOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0ZWQgbmV3IHVzZXI6XCIsIHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBoYXNDb21wbGV0ZWRPbmJvYXJkaW5nOiB1c2VyLmhhc0NvbXBsZXRlZE9uYm9hcmRpbmcsXG4gICAgICBjYXJlZXJQYXRoOiB1c2VyLmNhcmVlclBhdGhcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgdXNlcjoge1xuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgaGFzQ29tcGxldGVkT25ib2FyZGluZzogdXNlci5oYXNDb21wbGV0ZWRPbmJvYXJkaW5nXG4gICAgICB9XG4gICAgfSwgeyBcbiAgICAgIHN0YXR1czogMjAxLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfVxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlJlZ2lzdHJhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHVzZXIgYWNjb3VudFwiIFxuICAgICAgfSwgXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImhhc2giLCJwcmlzbWEiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJlbWFpbCIsIm5hbWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsImV4aXN0cyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ0b0xvd2VyQ2FzZSIsImhhc2hlZFBhc3N3b3JkIiwiY3JlYXRlIiwiZGF0YSIsInJvbGUiLCJoYXNDb21wbGV0ZWRPbmJvYXJkaW5nIiwiY2FyZWVyUGF0aCIsInByZWZlcmVuY2VzIiwiZW1haWxOb3RpZmljYXRpb25zIiwibWFya2V0aW5nRW1haWxzIiwiY291cnNlVXBkYXRlcyIsInByZWZlcnJlZFRhZ3MiLCJvbmJvYXJkaW5nUHJvZ3Jlc3MiLCJjdXJyZW50U3RlcCIsImNvbXBsZXRlZCIsInJlc3BvbnNlcyIsImluY2x1ZGUiLCJpZCIsInN1Y2Nlc3MiLCJoZWFkZXJzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/register/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// src/lib/db.js or src/lib/db.ts\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // Named export\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGlDQUFpQztBQUNhO0FBRXZDLE1BQU1DLFNBQVMsSUFBSUQsd0RBQVlBLEdBQUcsQ0FBQyxlQUFlIiwic291cmNlcyI6WyIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9heGlvbWFseS1uZXcvc3JjL2xpYi9kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvbGliL2RiLmpzIG9yIHNyYy9saWIvZGIudHNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTsgLy8gTmFtZWQgZXhwb3J0XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fregister%2Froute&page=%2Fapi%2Fauth%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2Faxiomaly-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();