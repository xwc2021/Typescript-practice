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
        this.createScriptPlugin = window.createScriptPlugin;
        this.object = new _Object_GameObject__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.object.scriptableList.push(this.createScriptPlugin.create("test"));
        this.object.doIt();
        window.onload = function () {
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('add_script_btn').onclick = function () {
                var className = _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('script_class_name_txt').innerText;
                _this.object.scriptableList.push(_this.createScriptPlugin.create(className));
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('do_it_btn').onclick = function () {
                _this.object.doIt();
            };
            var obj = _this;
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_0__["default"].$('load_script_btn').onclick = function () {
                var script = document.createElement('script');
                script.onload = function () {
                    console.log("load ok");
                    obj.createScriptPlugin = window.createScriptPlugin;
                };
                script.src = "dist/CreateScriptPlugin.js";
                document.head.appendChild(script);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHluYW1pY0xvYWRpbmdTY3JpcHRBcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhVLFNBQUMsR0FBUixVQUFTLEVBQVU7UUFDZixPQUF5QixRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hEO0lBQUE7UUFDSSxtQkFBYyxHQUFzQixJQUFJLEtBQUssRUFBYyxDQUFDO0lBSWhFLENBQUM7SUFIRyx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ05EO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHFDO0FBQ087QUFRNUM7SUFHSTtRQUFBLGlCQThCQztRQTVCRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBRXBELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwwREFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxNQUFNLEdBQUc7WUFFWix1REFBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxHQUFHO2dCQUNsQyxJQUFJLFNBQVMsR0FBRyx1REFBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQztZQUVGLHVEQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFHO2dCQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUVGLElBQUksR0FBRyxHQUFHLEtBQUksQ0FBQztZQUNmLHVEQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEdBQUc7Z0JBQ25DLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxHQUFHLEdBQUcsNEJBQTRCLENBQUM7Z0JBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUM7O0FBQ0QsSUFBSSx1QkFBdUIsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL0hIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9PYmplY3QvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9EeW5hbWljTG9hZGluZ1NjcmlwdEFwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBISGVscGVyIHtcclxuICAgIHN0YXRpYyAkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFNjcmlwdGFibGUgZnJvbSBcIi4uL1NjcmlwdC9TY3JpcHRhYmxlXCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgICBzY3JpcHRhYmxlTGlzdDogQXJyYXk8U2NyaXB0YWJsZT4gPSBuZXcgQXJyYXk8U2NyaXB0YWJsZT4oKTtcclxuICAgIGRvSXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY3JpcHRhYmxlTGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kb0l0KCkpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlU2NyaXB0UGx1Z2luIGZyb20gXCIuL0NyZWF0ZVNjcmlwdFBsdWdpblwiO1xyXG5pbXBvcnQgSEhlbHBlciBmcm9tIFwiLi9NYXRoL0hIZWxwZXJcIjtcclxuaW1wb3J0IEdhbWVPYmplY3QgZnJvbSBcIi4vT2JqZWN0L0dhbWVPYmplY3RcIlxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgY3JlYXRlU2NyaXB0UGx1Z2luOiBDcmVhdGVTY3JpcHRQbHVnaW47XHJcbiAgICAgICAgYWJjOiAoKSA9PiB7fTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljTG9hZGluZ1NjcmlwdEFwcCB7XHJcbiAgICBvYmplY3Q6IEdhbWVPYmplY3Q7XHJcbiAgICBjcmVhdGVTY3JpcHRQbHVnaW46IENyZWF0ZVNjcmlwdFBsdWdpbjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVNjcmlwdFBsdWdpbiA9IHdpbmRvdy5jcmVhdGVTY3JpcHRQbHVnaW47XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gbmV3IEdhbWVPYmplY3QoKTtcclxuICAgICAgICB0aGlzLm9iamVjdC5zY3JpcHRhYmxlTGlzdC5wdXNoKHRoaXMuY3JlYXRlU2NyaXB0UGx1Z2luLmNyZWF0ZShcInRlc3RcIikpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0LmRvSXQoKTtcclxuXHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYWRkX3NjcmlwdF9idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IEhIZWxwZXIuJCgnc2NyaXB0X2NsYXNzX25hbWVfdHh0JykuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmplY3Quc2NyaXB0YWJsZUxpc3QucHVzaCh0aGlzLmNyZWF0ZVNjcmlwdFBsdWdpbi5jcmVhdGUoY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2RvX2l0X2J0bicpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iamVjdC5kb0l0KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgb2JqID0gdGhpcztcclxuICAgICAgICAgICAgSEhlbHBlci4kKCdsb2FkX3NjcmlwdF9idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgb2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNyZWF0ZVNjcmlwdFBsdWdpbiA9IHdpbmRvdy5jcmVhdGVTY3JpcHRQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9IFwiZGlzdC9DcmVhdGVTY3JpcHRQbHVnaW4uanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbm5ldyBEeW5hbWljTG9hZGluZ1NjcmlwdEFwcCgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9