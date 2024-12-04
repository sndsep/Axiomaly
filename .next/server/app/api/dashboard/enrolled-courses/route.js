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
exports.id = "app/api/dashboard/enrolled-courses/route";
exports.ids = ["app/api/dashboard/enrolled-courses/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&page=%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&page=%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_DockDisk_10_PROJECTS_Axiomaly_src_app_api_dashboard_enrolled_courses_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/enrolled-courses/route.ts */ \"(rsc)/./src/app/api/dashboard/enrolled-courses/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/enrolled-courses/route\",\n        pathname: \"/api/dashboard/enrolled-courses\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/enrolled-courses/route\"\n    },\n    resolvedPagePath: \"/Volumes/DockDisk/10 PROJECTS/Axiomaly/src/app/api/dashboard/enrolled-courses/route.ts\",\n    nextConfigOutput,\n    userland: _Volumes_DockDisk_10_PROJECTS_Axiomaly_src_app_api_dashboard_enrolled_courses_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/dashboard/enrolled-courses/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZlbnJvbGxlZC1jb3Vyc2VzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYXNoYm9hcmQlMkZlbnJvbGxlZC1jb3Vyc2VzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGFzaGJvYXJkJTJGZW5yb2xsZWQtY291cnNlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZWb2x1bWVzJTJGRG9ja0Rpc2slMkYxMCUyMFBST0pFQ1RTJTJGQXhpb21hbHklMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlZvbHVtZXMlMkZEb2NrRGlzayUyRjEwJTIwUFJPSkVDVFMlMkZBeGlvbWFseSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0M7QUFDbkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZngtYWNhZGVteS8/ZGRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9BeGlvbWFseS9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvZW5yb2xsZWQtY291cnNlcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL2Vucm9sbGVkLWNvdXJzZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kYXNoYm9hcmQvZW5yb2xsZWQtY291cnNlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL2Vucm9sbGVkLWNvdXJzZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVm9sdW1lcy9Eb2NrRGlzay8xMCBQUk9KRUNUUy9BeGlvbWFseS9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvZW5yb2xsZWQtY291cnNlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvZGFzaGJvYXJkL2Vucm9sbGVkLWNvdXJzZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&page=%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/enrolled-courses/route.ts":
/*!*********************************************************!*\
  !*** ./src/app/api/dashboard/enrolled-courses/route.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n// src/app/api/dashboard/enrolled-courses/route.ts\n\n\n\n\nasync function GET(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n        if (!session?.user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { searchParams } = new URL(req.url);\n        const params = {\n            search: searchParams.get(\"search\") || \"\",\n            level: searchParams.get(\"level\") || \"all\",\n            category: searchParams.get(\"category\") || \"all\",\n            sort: searchParams.get(\"sort\") || \"recent\",\n            page: Number(searchParams.get(\"page\")) || 1,\n            pageSize: Number(searchParams.get(\"pageSize\")) || 9\n        };\n        const where = {\n            enrollments: {\n                some: {\n                    userId: session.user.id\n                }\n            },\n            AND: [\n                params.search ? {\n                    OR: [\n                        {\n                            title: {\n                                contains: params.search,\n                                mode: \"insensitive\"\n                            }\n                        },\n                        {\n                            description: {\n                                contains: params.search,\n                                mode: \"insensitive\"\n                            }\n                        }\n                    ]\n                } : {},\n                params.level !== \"all\" ? {\n                    level: params.level\n                } : {},\n                params.category !== \"all\" ? {\n                    categoryId: params.category\n                } : {}\n            ]\n        };\n        const [courses, totalCourses] = await Promise.all([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.course.findMany({\n                where,\n                include: {\n                    instructor: {\n                        select: {\n                            id: true,\n                            name: true,\n                            image: true\n                        }\n                    },\n                    category: true,\n                    _count: {\n                        select: {\n                            enrollments: true,\n                            resources: true,\n                            curricula: true\n                        }\n                    }\n                },\n                take: params.pageSize,\n                skip: params.pageSize * (params.page - 1)\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.course.count({\n                where\n            })\n        ]);\n        // Obtener el progreso del estudiante para estos cursos\n        const progress = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.studentProgress.findMany({\n            where: {\n                userId: session.user.id,\n                courseId: {\n                    in: courses.map((c)=>c.id)\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            courses,\n            progress: Object.fromEntries(progress.map((p)=>[\n                    p.courseId,\n                    {\n                        percentage: p.progress,\n                        lastUpdated: p.lastUpdated\n                    }\n                ])),\n            totalPages: Math.ceil(totalCourses / params.pageSize),\n            totalCourses\n        });\n    } catch (error) {\n        console.error(\"Enrolled Courses API Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvZW5yb2xsZWQtY291cnNlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGtEQUFrRDtBQUNQO0FBQ087QUFDWjtBQUNHO0FBRWxDLGVBQWVJLElBQUlDLEdBQVk7SUFDcEMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUwsZ0VBQWdCQSxDQUFDRSxrREFBV0E7UUFDbEQsSUFBSSxDQUFDRyxTQUFTQyxNQUFNO1lBQ2xCLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlQLElBQUlRLEdBQUc7UUFDeEMsTUFBTUMsU0FBUztZQUNiQyxRQUFRSixhQUFhSyxHQUFHLENBQUMsYUFBYTtZQUN0Q0MsT0FBT04sYUFBYUssR0FBRyxDQUFDLFlBQVk7WUFDcENFLFVBQVVQLGFBQWFLLEdBQUcsQ0FBQyxlQUFlO1lBQzFDRyxNQUFNUixhQUFhSyxHQUFHLENBQUMsV0FBVztZQUNsQ0ksTUFBTUMsT0FBT1YsYUFBYUssR0FBRyxDQUFDLFlBQVk7WUFDMUNNLFVBQVVELE9BQU9WLGFBQWFLLEdBQUcsQ0FBQyxnQkFBZ0I7UUFDcEQ7UUFFQSxNQUFNTyxRQUFRO1lBQ1pDLGFBQWE7Z0JBQ1hDLE1BQU07b0JBQ0pDLFFBQVFwQixRQUFRQyxJQUFJLENBQUNvQixFQUFFO2dCQUN6QjtZQUNGO1lBQ0FDLEtBQUs7Z0JBQ0hkLE9BQU9DLE1BQU0sR0FBRztvQkFDZGMsSUFBSTt3QkFDRjs0QkFBRUMsT0FBTztnQ0FBRUMsVUFBVWpCLE9BQU9DLE1BQU07Z0NBQUVpQixNQUFNOzRCQUFjO3dCQUFFO3dCQUMxRDs0QkFBRUMsYUFBYTtnQ0FBRUYsVUFBVWpCLE9BQU9DLE1BQU07Z0NBQUVpQixNQUFNOzRCQUFjO3dCQUFFO3FCQUNqRTtnQkFDSCxJQUFJLENBQUM7Z0JBQ0xsQixPQUFPRyxLQUFLLEtBQUssUUFBUTtvQkFBRUEsT0FBT0gsT0FBT0csS0FBSztnQkFBQyxJQUFJLENBQUM7Z0JBQ3BESCxPQUFPSSxRQUFRLEtBQUssUUFBUTtvQkFBRWdCLFlBQVlwQixPQUFPSSxRQUFRO2dCQUFDLElBQUksQ0FBQzthQUNoRTtRQUNIO1FBRUEsTUFBTSxDQUFDaUIsU0FBU0MsYUFBYSxHQUFHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQztZQUNoRHBDLCtDQUFNQSxDQUFDcUMsTUFBTSxDQUFDQyxRQUFRLENBQUM7Z0JBQ3JCakI7Z0JBQ0FrQixTQUFTO29CQUNQQyxZQUFZO3dCQUNWQyxRQUFROzRCQUNOaEIsSUFBSTs0QkFDSmlCLE1BQU07NEJBQ05DLE9BQU87d0JBQ1Q7b0JBQ0Y7b0JBQ0EzQixVQUFVO29CQUNWNEIsUUFBUTt3QkFDTkgsUUFBUTs0QkFDTm5CLGFBQWE7NEJBQ2J1QixXQUFXOzRCQUNYQyxXQUFXO3dCQUNiO29CQUNGO2dCQUNGO2dCQUNBQyxNQUFNbkMsT0FBT1EsUUFBUTtnQkFDckI0QixNQUFNcEMsT0FBT1EsUUFBUSxHQUFJUixDQUFBQSxPQUFPTSxJQUFJLEdBQUc7WUFDekM7WUFDQWxCLCtDQUFNQSxDQUFDcUMsTUFBTSxDQUFDWSxLQUFLLENBQUM7Z0JBQUU1QjtZQUFNO1NBQzdCO1FBRUQsdURBQXVEO1FBQ3ZELE1BQU02QixXQUFXLE1BQU1sRCwrQ0FBTUEsQ0FBQ21ELGVBQWUsQ0FBQ2IsUUFBUSxDQUFDO1lBQ3JEakIsT0FBTztnQkFDTEcsUUFBUXBCLFFBQVFDLElBQUksQ0FBQ29CLEVBQUU7Z0JBQ3ZCMkIsVUFBVTtvQkFBRUMsSUFBSXBCLFFBQVFxQixHQUFHLENBQUNDLENBQUFBLElBQUtBLEVBQUU5QixFQUFFO2dCQUFFO1lBQ3pDO1FBQ0Y7UUFFQSxPQUFPM0IscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUN2QjJCO1lBQ0FpQixVQUFVTSxPQUFPQyxXQUFXLENBQzFCUCxTQUFTSSxHQUFHLENBQUNJLENBQUFBLElBQUs7b0JBQUNBLEVBQUVOLFFBQVE7b0JBQUU7d0JBQzdCTyxZQUFZRCxFQUFFUixRQUFRO3dCQUN0QlUsYUFBYUYsRUFBRUUsV0FBVztvQkFDNUI7aUJBQUU7WUFFSkMsWUFBWUMsS0FBS0MsSUFBSSxDQUFDN0IsZUFBZXRCLE9BQU9RLFFBQVE7WUFDcERjO1FBQ0Y7SUFFRixFQUFFLE9BQU8zQixPQUFPO1FBQ2R5RCxRQUFRekQsS0FBSyxDQUFDLCtCQUErQkE7UUFDN0MsT0FBT1QscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzdFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZngtYWNhZGVteS8uL3NyYy9hcHAvYXBpL2Rhc2hib2FyZC9lbnJvbGxlZC1jb3Vyc2VzL3JvdXRlLnRzP2JkYjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvZGFzaGJvYXJkL2Vucm9sbGVkLWNvdXJzZXMvcm91dGUudHNcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvbmV4dCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBzZWFyY2g6IHNlYXJjaFBhcmFtcy5nZXQoJ3NlYXJjaCcpIHx8ICcnLFxuICAgICAgbGV2ZWw6IHNlYXJjaFBhcmFtcy5nZXQoJ2xldmVsJykgfHwgJ2FsbCcsXG4gICAgICBjYXRlZ29yeTogc2VhcmNoUGFyYW1zLmdldCgnY2F0ZWdvcnknKSB8fCAnYWxsJyxcbiAgICAgIHNvcnQ6IHNlYXJjaFBhcmFtcy5nZXQoJ3NvcnQnKSB8fCAncmVjZW50JyxcbiAgICAgIHBhZ2U6IE51bWJlcihzZWFyY2hQYXJhbXMuZ2V0KCdwYWdlJykpIHx8IDEsXG4gICAgICBwYWdlU2l6ZTogTnVtYmVyKHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2VTaXplJykpIHx8IDksXG4gICAgfTtcblxuICAgIGNvbnN0IHdoZXJlID0ge1xuICAgICAgZW5yb2xsbWVudHM6IHtcbiAgICAgICAgc29tZToge1xuICAgICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBBTkQ6IFtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA/IHtcbiAgICAgICAgICBPUjogW1xuICAgICAgICAgICAgeyB0aXRsZTogeyBjb250YWluczogcGFyYW1zLnNlYXJjaCwgbW9kZTogJ2luc2Vuc2l0aXZlJyB9IH0sXG4gICAgICAgICAgICB7IGRlc2NyaXB0aW9uOiB7IGNvbnRhaW5zOiBwYXJhbXMuc2VhcmNoLCBtb2RlOiAnaW5zZW5zaXRpdmUnIH0gfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9IDoge30sXG4gICAgICAgIHBhcmFtcy5sZXZlbCAhPT0gJ2FsbCcgPyB7IGxldmVsOiBwYXJhbXMubGV2ZWwgfSA6IHt9LFxuICAgICAgICBwYXJhbXMuY2F0ZWdvcnkgIT09ICdhbGwnID8geyBjYXRlZ29yeUlkOiBwYXJhbXMuY2F0ZWdvcnkgfSA6IHt9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgW2NvdXJzZXMsIHRvdGFsQ291cnNlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBwcmlzbWEuY291cnNlLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBpbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICAgIG5hbWU6IHRydWUsXG4gICAgICAgICAgICAgIGltYWdlOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICAgIF9jb3VudDoge1xuICAgICAgICAgICAgc2VsZWN0OiB7IFxuICAgICAgICAgICAgICBlbnJvbGxtZW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVzb3VyY2VzOiB0cnVlLFxuICAgICAgICAgICAgICBjdXJyaWN1bGE6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGFrZTogcGFyYW1zLnBhZ2VTaXplLFxuICAgICAgICBza2lwOiBwYXJhbXMucGFnZVNpemUgKiAocGFyYW1zLnBhZ2UgLSAxKVxuICAgICAgfSksXG4gICAgICBwcmlzbWEuY291cnNlLmNvdW50KHsgd2hlcmUgfSksXG4gICAgXSk7XG5cbiAgICAvLyBPYnRlbmVyIGVsIHByb2dyZXNvIGRlbCBlc3R1ZGlhbnRlIHBhcmEgZXN0b3MgY3Vyc29zXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBhd2FpdCBwcmlzbWEuc3R1ZGVudFByb2dyZXNzLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICBjb3Vyc2VJZDogeyBpbjogY291cnNlcy5tYXAoYyA9PiBjLmlkKSB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBjb3Vyc2VzLFxuICAgICAgcHJvZ3Jlc3M6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgcHJvZ3Jlc3MubWFwKHAgPT4gW3AuY291cnNlSWQsIHtcbiAgICAgICAgICBwZXJjZW50YWdlOiBwLnByb2dyZXNzLFxuICAgICAgICAgIGxhc3RVcGRhdGVkOiBwLmxhc3RVcGRhdGVkXG4gICAgICAgIH1dKVxuICAgICAgKSxcbiAgICAgIHRvdGFsUGFnZXM6IE1hdGguY2VpbCh0b3RhbENvdXJzZXMgLyBwYXJhbXMucGFnZVNpemUpLFxuICAgICAgdG90YWxDb3Vyc2VzLFxuICAgIH0pO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRW5yb2xsZWQgQ291cnNlcyBBUEkgRXJyb3I6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwicGFyYW1zIiwic2VhcmNoIiwiZ2V0IiwibGV2ZWwiLCJjYXRlZ29yeSIsInNvcnQiLCJwYWdlIiwiTnVtYmVyIiwicGFnZVNpemUiLCJ3aGVyZSIsImVucm9sbG1lbnRzIiwic29tZSIsInVzZXJJZCIsImlkIiwiQU5EIiwiT1IiLCJ0aXRsZSIsImNvbnRhaW5zIiwibW9kZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnlJZCIsImNvdXJzZXMiLCJ0b3RhbENvdXJzZXMiLCJQcm9taXNlIiwiYWxsIiwiY291cnNlIiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiaW5zdHJ1Y3RvciIsInNlbGVjdCIsIm5hbWUiLCJpbWFnZSIsIl9jb3VudCIsInJlc291cmNlcyIsImN1cnJpY3VsYSIsInRha2UiLCJza2lwIiwiY291bnQiLCJwcm9ncmVzcyIsInN0dWRlbnRQcm9ncmVzcyIsImNvdXJzZUlkIiwiaW4iLCJtYXAiLCJjIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJwIiwicGVyY2VudGFnZSIsImxhc3RVcGRhdGVkIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/enrolled-courses/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&page=%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fenrolled-courses%2Froute.ts&appDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FVolumes%2FDockDisk%2F10%20PROJECTS%2FAxiomaly&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();