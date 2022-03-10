/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UserScript/CreateScriptProxy.ts":
/*!*********************************************!*\
  !*** ./src/UserScript/CreateScriptProxy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test */ "./src/UserScript/Test.ts");

// 之後可以用程式手動生成
var CreateScriptProxy = /** @class */ (function () {
    function CreateScriptProxy() {
    }
    CreateScriptProxy.prototype.create = function (className) {
        switch (className) {
            case "Test":
                return new _Test__WEBPACK_IMPORTED_MODULE_0__["default"]();
                break;
        }
        return new _Test__WEBPACK_IMPORTED_MODULE_0__["default"]();
    };
    return CreateScriptProxy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateScriptProxy);


/***/ }),

/***/ "./src/UserScript/Test.ts":
/*!********************************!*\
  !*** ./src/UserScript/Test.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.doIt = function () {
        console.log("doIt : " + (10 * 60));
    };
    ;
    return Test;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/CreateScriptPlugin.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserScript_CreateScriptProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserScript/CreateScriptProxy */ "./src/UserScript/CreateScriptProxy.ts");

var CreateScriptPlugin = /** @class */ (function () {
    function CreateScriptPlugin() {
        this.createScriptProxy = new _UserScript_CreateScriptProxy__WEBPACK_IMPORTED_MODULE_0__["default"]();
        window.createScriptPlugin = this;
        console.log("mount CreateScriptPlugin");
    }
    CreateScriptPlugin.prototype.create = function (className) {
        return this.createScriptProxy.create(className);
    };
    return CreateScriptPlugin;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateScriptPlugin);
new CreateScriptPlugin();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlU2NyaXB0UGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUUxQixjQUFjO0FBQ2Q7SUFBQTtJQVVBLENBQUM7SUFURyxrQ0FBTSxHQUFOLFVBQU8sU0FBaUI7UUFDcEIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLDZDQUFJLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtTQUNiO1FBRUQsT0FBTyxJQUFJLDZDQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7SUFBQTtJQUlBLENBQUM7SUFIRyxtQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQUEsQ0FBQztJQUNOLFdBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ05EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNMK0Q7QUFLL0Q7SUFFSTtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHFFQUFpQixFQUFFLENBQUM7UUFDakQsTUFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO0lBQzNDLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sU0FBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7O0FBQ0QsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9Vc2VyU2NyaXB0L0NyZWF0ZVNjcmlwdFByb3h5LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvVXNlclNjcmlwdC9UZXN0LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL0NyZWF0ZVNjcmlwdFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0YWJsZSBmcm9tIFwiLi4vU2NyaXB0L1NjcmlwdGFibGVcIlxyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vLyDkuYvlvozlj6/ku6XnlKjnqIvlvI/miYvli5XnlJ/miJBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlU2NyaXB0UHJveHkge1xyXG4gICAgY3JlYXRlKGNsYXNzTmFtZTogc3RyaW5nKTogU2NyaXB0YWJsZSB7XHJcbiAgICAgICAgc3dpdGNoIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlRlc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGVzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRlc3QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY3JpcHRhYmxlIGZyb20gXCIuLi9TY3JpcHQvU2NyaXB0YWJsZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGltcGxlbWVudHMgU2NyaXB0YWJsZSB7XHJcbiAgICBkb0l0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG9JdCA6IFwiICsgKDEwICogNjApKTtcclxuICAgIH07XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTY3JpcHRhYmxlIGZyb20gXCIuL1NjcmlwdC9TY3JpcHRhYmxlXCJcclxuaW1wb3J0IENyZWF0ZVNjcmlwdFByb3h5IGZyb20gXCIuL1VzZXJTY3JpcHQvQ3JlYXRlU2NyaXB0UHJveHlcIjtcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cgeyBjcmVhdGVTY3JpcHRQbHVnaW46IENyZWF0ZVNjcmlwdFBsdWdpbjsgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVNjcmlwdFBsdWdpbiB7XHJcbiAgICBjcmVhdGVTY3JpcHRQcm94eTogQ3JlYXRlU2NyaXB0UHJveHlcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU2NyaXB0UHJveHkgPSBuZXcgQ3JlYXRlU2NyaXB0UHJveHkoKTtcclxuICAgICAgICB3aW5kb3cuY3JlYXRlU2NyaXB0UGx1Z2luID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm1vdW50IENyZWF0ZVNjcmlwdFBsdWdpblwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShjbGFzc05hbWU6IHN0cmluZyk6IFNjcmlwdGFibGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNjcmlwdFByb3h5LmNyZWF0ZShjbGFzc05hbWUpO1xyXG4gICAgfVxyXG59XHJcbm5ldyBDcmVhdGVTY3JpcHRQbHVnaW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=