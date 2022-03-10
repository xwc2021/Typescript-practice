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
        console.log("doIt : " + (3 * 5));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlU2NyaXB0UGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMwQjtBQUUxQixjQUFjO0FBQ2Q7SUFBQTtJQVVBLENBQUM7SUFURyxrQ0FBTSxHQUFOLFVBQU8sU0FBaUI7UUFDcEIsUUFBUSxTQUFTLEVBQUU7WUFDZixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxJQUFJLDZDQUFJLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtTQUNiO1FBRUQsT0FBTyxJQUFJLDZDQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7SUFBQTtJQUlBLENBQUM7SUFIRyxtQkFBSSxHQUFKO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQUEsQ0FBQztJQUNOLFdBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ05EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNMK0Q7QUFLL0Q7SUFFSTtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHFFQUFpQixFQUFFLENBQUM7UUFDakQsTUFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDO0lBQzNDLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sU0FBaUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7O0FBQ0QsSUFBSSxrQkFBa0IsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9Vc2VyU2NyaXB0L0NyZWF0ZVNjcmlwdFByb3h5LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvVXNlclNjcmlwdC9UZXN0LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL0NyZWF0ZVNjcmlwdFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0YWJsZSBmcm9tIFwiLi4vU2NyaXB0L1NjcmlwdGFibGVcIlxyXG5pbXBvcnQgVGVzdCBmcm9tIFwiLi9UZXN0XCI7XHJcblxyXG4vLyDkuYvlvozlj6/ku6XnlKjnqIvlvI/miYvli5XnlJ/miJBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlU2NyaXB0UHJveHkge1xyXG4gICAgY3JlYXRlKGNsYXNzTmFtZTogc3RyaW5nKTogU2NyaXB0YWJsZSB7XHJcbiAgICAgICAgc3dpdGNoIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlRlc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVGVzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRlc3QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY3JpcHRhYmxlIGZyb20gXCIuLi9TY3JpcHQvU2NyaXB0YWJsZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0IGltcGxlbWVudHMgU2NyaXB0YWJsZSB7XHJcbiAgICBkb0l0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZG9JdCA6IFwiICsgKDMgKiA1KSk7XHJcbiAgICB9O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU2NyaXB0YWJsZSBmcm9tIFwiLi9TY3JpcHQvU2NyaXB0YWJsZVwiXHJcbmltcG9ydCBDcmVhdGVTY3JpcHRQcm94eSBmcm9tIFwiLi9Vc2VyU2NyaXB0L0NyZWF0ZVNjcmlwdFByb3h5XCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgY3JlYXRlU2NyaXB0UGx1Z2luOiBDcmVhdGVTY3JpcHRQbHVnaW47IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVTY3JpcHRQbHVnaW4ge1xyXG4gICAgY3JlYXRlU2NyaXB0UHJveHk6IENyZWF0ZVNjcmlwdFByb3h5XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNjcmlwdFByb3h5ID0gbmV3IENyZWF0ZVNjcmlwdFByb3h5KCk7XHJcbiAgICAgICAgd2luZG93LmNyZWF0ZVNjcmlwdFBsdWdpbiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJtb3VudCBDcmVhdGVTY3JpcHRQbHVnaW5cIilcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoY2xhc3NOYW1lOiBzdHJpbmcpOiBTY3JpcHRhYmxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTY3JpcHRQcm94eS5jcmVhdGUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxufVxyXG5uZXcgQ3JlYXRlU2NyaXB0UGx1Z2luKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9