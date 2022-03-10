/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Math/HHelper.ts":
/*!*****************************!*\
  !*** ./src/Math/HHelper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HHelper = /** @class */ (function () {
    function HHelper() {
    }
    HHelper.$ = function (id) {
        return document.getElementById(id);
    };
    return HHelper;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HHelper);


/***/ }),

/***/ "./src/Object/GameObject.ts":
/*!**********************************!*\
  !*** ./src/Object/GameObject.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.scriptableList = new Array();
    }
    GameObject.prototype.doIt = function () {
        this.scriptableList.forEach(function (item) { return item.doIt(); });
    };
    return GameObject;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);


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
/*!****************************************!*\
  !*** ./src/DynamicLoadingScriptApp.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math/HHelper */ "./src/Math/HHelper.ts");
/* harmony import */ var _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Object/GameObject */ "./src/Object/GameObject.ts");


var DynamicLoadingScriptApp = /** @class */ (function () {
    function DynamicLoadingScriptApp() {
        var _this = this;
        var createScriptPlugin = window.createScriptPlugin;
        this.object = new _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.object.scriptableList.push(createScriptPlugin.create("test"));
        this.object.doIt();
        window.onload = function () {
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('add_script_btn').onclick = function () {
                var className = _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('script_class_name_txt').innerText;
                _this.object.scriptableList.push(createScriptPlugin.create(className));
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('do_it_btn').onclick = function () {
                _this.object.doIt();
            };
        };
    }
    return DynamicLoadingScriptApp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLoadingScriptApp);
new DynamicLoadingScriptApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0xvYWRpbmdTY3JpcHRBcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhVLFNBQUMsR0FBUixVQUFTLEVBQVU7UUFDZixPQUF5QixRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hEO0lBQUE7UUFDSSxtQkFBYyxHQUFzQixJQUFJLEtBQUssRUFBYyxDQUFDO0lBSWhFLENBQUM7SUFIRyx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ05EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHFDO0FBQ087QUFLNUM7SUFFSTtRQUFBLGlCQW1CQztRQWpCRyxJQUFJLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUVuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksMERBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxNQUFNLEdBQUc7WUFFWix1REFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHO2dCQUNsQyxJQUFJLFNBQVMsR0FBRyx1REFBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDO1lBRUYsdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEdBQUc7Z0JBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0FBQzs7QUFDRCxJQUFJLHVCQUF1QixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvSEhlbHBlci50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL09iamVjdC9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL0R5bmFtaWNMb2FkaW5nU2NyaXB0QXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhIZWxwZXIge1xyXG4gICAgc3RhdGljICQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2NyaXB0YWJsZSBmcm9tIFwiLi4vU2NyaXB0L1NjcmlwdGFibGVcIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgIHNjcmlwdGFibGVMaXN0OiBBcnJheTxTY3JpcHRhYmxlPiA9IG5ldyBBcnJheTxTY3JpcHRhYmxlPigpO1xyXG4gICAgZG9JdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjcmlwdGFibGVMaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmRvSXQoKSk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDcmVhdGVTY3JpcHRQbHVnaW4gZnJvbSBcIi4vQ3JlYXRlU2NyaXB0UGx1Z2luXCI7XHJcbmltcG9ydCBISGVscGVyIGZyb20gXCIuL01hdGgvSEhlbHBlclwiO1xyXG5pbXBvcnQgR2FtZU9iamVjdCBmcm9tIFwiLi9PYmplY3QvR2FtZU9iamVjdFwiXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgY3JlYXRlU2NyaXB0UGx1Z2luOiBDcmVhdGVTY3JpcHRQbHVnaW47IH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljTG9hZGluZ1NjcmlwdEFwcCB7XHJcbiAgICBvYmplY3Q6IEdhbWVPYmplY3Q7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdmFyIGNyZWF0ZVNjcmlwdFBsdWdpbiA9IHdpbmRvdy5jcmVhdGVTY3JpcHRQbHVnaW47XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gbmV3IEdhbWVPYmplY3QoKTtcclxuICAgICAgICB0aGlzLm9iamVjdC5zY3JpcHRhYmxlTGlzdC5wdXNoKGNyZWF0ZVNjcmlwdFBsdWdpbi5jcmVhdGUoXCJ0ZXN0XCIpKTtcclxuICAgICAgICB0aGlzLm9iamVjdC5kb0l0KCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2FkZF9zY3JpcHRfYnRuJykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBISGVscGVyLiQoJ3NjcmlwdF9jbGFzc19uYW1lX3R4dCcpLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LnNjcmlwdGFibGVMaXN0LnB1c2goY3JlYXRlU2NyaXB0UGx1Z2luLmNyZWF0ZShjbGFzc05hbWUpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnZG9faXRfYnRuJykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0LmRvSXQoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbm5ldyBEeW5hbWljTG9hZGluZ1NjcmlwdEFwcCgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9