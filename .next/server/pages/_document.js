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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { resolve } = __webpack_require__(/*! path */ \"path\");\nmodule.exports = {\n    i18n: {\n        defaultLocale: 'ko',\n        locales: [\n            'ko',\n            'en'\n        ],\n        localeDetection: true,\n        localePath: resolve('./public/locales')\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUVBLE9BQU8sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxrQkFBTTtBQUVsQ0MsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLE1BQU07UUFDSkMsZUFBZTtRQUNmQyxTQUFTO1lBQUM7WUFBTTtTQUFLO1FBQ3JCQyxpQkFBaUI7UUFDakJDLFlBQVlSLFFBQVE7SUFDdEI7QUFDRiIsInNvdXJjZXMiOlsiL1ZvbHVtZXMvc3RvcmFnZS9Qcm9qZWN0L2trYW51LXVuaXZlcnNlL2trYW51bGlzdC9uZXh0LWkxOG5leHQuY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgcmVzb2x2ZSB9ID0gcmVxdWlyZSgncGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaTE4bjoge1xuICAgIGRlZmF1bHRMb2NhbGU6ICdrbycsXG4gICAgbG9jYWxlczogWydrbycsICdlbiddLFxuICAgIGxvY2FsZURldGVjdGlvbjogdHJ1ZSxcbiAgICBsb2NhbGVQYXRoOiByZXNvbHZlKCcuL3B1YmxpYy9sb2NhbGVzJyksXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInJlc29sdmUiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImxvY2FsZURldGVjdGlvbiIsImxvY2FsZVBhdGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    render() {\n        const currentLocale = this.props.__NEXT_DATA__.query.locale || (_next_i18next_config__WEBPACK_IMPORTED_MODULE_2___default().i18n).defaultLocale;\n        return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: currentLocale,\n            children: [\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                    fileName: \"/Volumes/storage/Project/kkanu-universe/kkanulist/pages/_document.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Volumes/storage/Project/kkanu-universe/kkanulist/pages/_document.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Volumes/storage/Project/kkanu-universe/kkanulist/pages/_document.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Volumes/storage/Project/kkanu-universe/kkanulist/pages/_document.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/storage/Project/kkanu-universe/kkanulist/pages/_document.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFFckI7QUFFbkMsTUFBTU0sbUJBQW1CTixzREFBUUE7SUFDOUNPLFNBQWM7UUFDWixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLElBQUlQLGtFQUFrQixDQUFDUyxhQUFhO1FBRS9GLHFCQUNFLHVFQUFDYiwrQ0FBSUE7WUFBQ2MsTUFBTVA7OzhCQUNWLHVFQUFDTiwrQ0FBSUE7Ozs7OzhCQUNMLHVFQUFDYzs7c0NBQ0MsdUVBQUNiLCtDQUFJQTs7Ozs7c0NBQ0wsdUVBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbkI7QUFDRiIsInNvdXJjZXMiOlsiL1ZvbHVtZXMvc3RvcmFnZS9Qcm9qZWN0L2trYW51LXVuaXZlcnNlL2trYW51bGlzdC9wYWdlcy9fZG9jdW1lbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5cbmltcG9ydCBpMThuZXh0Q29uZmlnIGZyb20gJ0AvbmV4dC1pMThuZXh0LmNvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpOiBhbnkge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSB0aGlzLnByb3BzLl9fTkVYVF9EQVRBX18ucXVlcnkubG9jYWxlIHx8IGkxOG5leHRDb25maWcuaTE4bi5kZWZhdWx0TG9jYWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9e2N1cnJlbnRMb2NhbGUgYXMgc3RyaW5nfT5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJpMThuZXh0Q29uZmlnIiwiTXlEb2N1bWVudCIsInJlbmRlciIsImN1cnJlbnRMb2NhbGUiLCJwcm9wcyIsIl9fTkVYVF9EQVRBX18iLCJxdWVyeSIsImxvY2FsZSIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibGFuZyIsImJvZHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();