/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/FFT/Complex.ts":
/*!****************************!*\
  !*** ./src/FFT/Complex.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Complex = /** @class */ (function () {
    function Complex(x, y) {
        this.x = x; // real
        this.y = y; // image
    }
    Complex.prototype.add = function (c, result) {
        result.x = this.x + c.x;
        result.y = this.y + c.y;
    };
    Complex.prototype.minus = function (c, result) {
        result.x = this.x - c.x;
        result.y = this.y - c.y;
    };
    Complex.prototype.multiply = function (c, result) {
        var x = this.x;
        var y = this.y;
        var a = c.x;
        var b = c.y;
        result.x = a * x - b * y;
        result.y = a * y + b * x;
    };
    Complex.prototype.rewrite = function (c) {
        this.x = c.x;
        this.y = c.y;
    };
    Complex.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    return Complex;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Complex);


/***/ }),

/***/ "./src/FFT/Tools.ts":
/*!**************************!*\
  !*** ./src/FFT/Tools.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FFT": () => (/* binding */ FFT),
/* harmony export */   "creat_buffer": () => (/* binding */ creat_buffer),
/* harmony export */   "shift": () => (/* binding */ shift),
/* harmony export */   "visualize": () => (/* binding */ visualize)
/* harmony export */ });
/* harmony import */ var _Complex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Complex */ "./src/FFT/Complex.ts");

/**
 *                               power
 * @param {*} power     \  /\  /
 * @param {*} N          \/  \/  N
 */
function W(power, N) {
    var theda = power * -2 * Math.PI / N;
    return new _Complex__WEBPACK_IMPORTED_MODULE_0__["default"](Math.cos(theda), Math.sin(theda));
}
function str_reverse(str) {
    return str.split("").reverse().join("");
}
function zero_str(count) {
    var a = new Array(count);
    return a.fill(0).join("");
}
;
function bit_reverse(value, bit_length) {
    var bit_str = value.toString(2);
    //補0
    if (bit_str.length != bit_length) {
        var zero_count = bit_length - bit_str.length;
        bit_str = zero_str(zero_count) + bit_str;
    }
    var bit_str_reverse = str_reverse(bit_str);
    return parseInt(bit_str_reverse, 2);
}
// 蝴蝶算法的第1步
/**
 *
 * @param {*} src
 * @param {*} des
 * @param {*} h row count
 */
function set_element_order_per_column(src, des, h) {
    var n = Math.log2(h);
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            var c = src[x][bit_reverse(y, n)];
            des[x][y].rewrite(c);
            //console.log(y, bit_reverse(y, n));
        }
    }
}
/**
 *
 * @param {*} weights
 * @param {*} src
 * @param {*} des
 * @param {*} h row count
 */
function multiply(weights, src, des, h) {
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            src[x][y].multiply(weights[y], des[x][y]);
        }
    }
}
/**
 *
 * @param {*} src
 * @param {*} des
 * @param {*} x 2^n= h ,x < n
 * @param {*} h
 */
function add_or_minus(src, des, x, h) {
    var offset = Math.pow(2, x);
    // console.log(offset);
    for (var x_1 = 0; x_1 < h; ++x_1) {
        for (var y = 0; y < h; ++y) {
            if (Math.floor(y / offset) % 2 == 0)
                src[x_1][y].add(src[x_1][y + offset], des[x_1][y]);
            else
                src[x_1][y - offset].minus(src[x_1][y], des[x_1][y]);
        }
    }
}
/**
 *
 * @param {*} N 2^n= N
 * @param {*} order 1~(n-1)
 */
function build_weights(N, order, is_inverse) {
    var sign = is_inverse ? -1 : 1;
    var n = Math.log2(N);
    var w_offset = Math.pow(2, n - 1 - order);
    var repeat = w_offset;
    var count = Math.pow(2, order);
    var weights_subset = new Array(count).fill(new _Complex__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0)); // 複數的單位元是1+0i
    for (var i = 0; i < count; ++i) {
        weights_subset.push(W(i * w_offset * sign, N));
        // weights_subset.push("W_" + i * w_offset + "_" + N);
    }
    var weights = new Array();
    for (var i = 0; i < repeat; ++i)
        weights = weights.concat(weights_subset);
    return weights;
}
function butterfly(buffer1, buffer2, h, is_inverse) {
    var _a, _b, _c, _d;
    // 蝴蝶算法的第1步:交換位置
    set_element_order_per_column(buffer1, buffer2, h);
    _a = [buffer2, buffer1], buffer1 = _a[0], buffer2 = _a[1];
    var N = h;
    var n = Math.log2(N);
    for (var order = 0; order < n - 1; ++order) {
        add_or_minus(buffer1, buffer2, order, h);
        _b = [buffer2, buffer1], buffer1 = _b[0], buffer2 = _b[1];
        var weights = build_weights(N, order + 1, is_inverse);
        // console.log(weights);
        multiply(weights, buffer1, buffer2, h);
        _c = [buffer2, buffer1], buffer1 = _c[0], buffer2 = _c[1];
    }
    add_or_minus(buffer1, buffer2, n - 1, h);
    _d = [buffer2, buffer1], buffer1 = _d[0], buffer2 = _d[1];
    return [buffer1, buffer2];
}
function transpose(src, des, h) {
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y)
            des[x][y].rewrite(src[y][x]);
    }
    return [des, src];
}
function shift(src, des, h) {
    var offset = h / 2;
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y)
            des[x][y].rewrite(src[(x + offset) % h][(y + offset) % h]);
    }
    return [des, src];
}
function log(src, des, h) {
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            var len = src[x][y].length();
            var log_value = Math.log2(1 + len); // 這樣就不會出現-infinite
            des[x][y].x = log_value;
            des[x][y].y = log_value;
        }
    }
    return [des, src];
}
function get_min(src, h) {
    var min_x = Number.MAX_VALUE;
    var min_y = Number.MAX_VALUE;
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            min_x = Math.min(src[x][y].x, min_x);
            min_y = Math.min(src[x][y].y, min_y);
        }
    }
    return [min_x, min_y];
}
function get_max(src, h) {
    var max_x = Number.MIN_VALUE;
    var max_y = Number.MIN_VALUE;
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            max_x = Math.max(src[x][y].x, max_x);
            max_y = Math.max(src[x][y].y, max_y);
        }
    }
    return [max_x, max_y];
}
function remap(src, des, h, min, max) {
    var range_x = max[0] - min[0];
    var range_y = max[1] - min[1];
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            des[x][y].x = (src[x][y].x - min[0]) / range_x;
            des[x][y].y = (src[x][y].y - min[1]) / range_y;
        }
    }
    return [des, src];
}
function clear_center(src, des, h) {
    var min = get_min(src, h);
    var max = get_max(src, h);
    console.log(min, max);
    var center = h / 2 - 0.5;
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            var len = Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));
            if (len < 6) {
                des[x][y].x = 0;
                des[x][y].y = 0;
            }
            else {
                des[x][y].rewrite(src[x][y]);
            }
        }
    }
    return [des, src];
}
function test_add_or_minus() {
    var b1 = creat_buffer(8, 8);
    var b2 = creat_buffer(8, 8);
    for (var x = 0; x < 8; ++x) {
        for (var y = 0; y < 8; ++y)
            b1[x][y] = new _Complex__WEBPACK_IMPORTED_MODULE_0__["default"](y, y);
    }
    add_or_minus(b1, b2, 0, 8);
    console.log(b1);
    console.log(b2);
}
function creat_buffer(w, h) {
    var buffer = new Array(w);
    for (var x = 0; x < w; ++x) {
        buffer[x] = new Array(h);
        for (var y = 0; y < h; ++y)
            buffer[x][y] = new _Complex__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    }
    return buffer;
}
function pow(src, des, h, power) {
    for (var x = 0; x < h; ++x) {
        for (var y = 0; y < h; ++y) {
            des[x][y].x = Math.pow(src[x][y].x, power);
            des[x][y].y = Math.pow(src[x][y].y, power);
        }
    }
    return [des, src];
}
function FFT(buffer1, buffer2, h) {
    /*二維DFT可以分解成 2次一維DFT
    B=MX
    Y=M(B)T
    */
    var _a, _b, _c;
    _a = butterfly(buffer1, buffer2, h, false), buffer1 = _a[0], buffer2 = _a[1];
    _b = transpose(buffer1, buffer2, h), buffer1 = _b[0], buffer2 = _b[1];
    _c = butterfly(buffer1, buffer2, h, false), buffer1 = _c[0], buffer2 = _c[1];
    return [buffer1, buffer2];
}
function IFFT(buffer1, buffer2, h) {
    var _a, _b, _c, _d;
    _a = butterfly(buffer1, buffer2, h, true), buffer1 = _a[0], buffer2 = _a[1];
    _b = transpose(buffer1, buffer2, h), buffer1 = _b[0], buffer2 = _b[1];
    _c = butterfly(buffer1, buffer2, h, true), buffer1 = _c[0], buffer2 = _c[1];
    var m = new Array(h).fill(new _Complex__WEBPACK_IMPORTED_MODULE_0__["default"](1 / h / h, 0));
    multiply(m, buffer1, buffer2, h);
    _d = [buffer2, buffer1], buffer1 = _d[0], buffer2 = _d[1];
    return [buffer1, buffer2];
}
//
function visualize(buffer1, buffer2, h) {
    var _a, _b, _c;
    _a = log(buffer1, buffer2, h), buffer1 = _a[0], buffer2 = _a[1];
    var min = get_min(buffer1, h);
    var max = get_max(buffer1, h);
    // console.log(min, max);
    _b = remap(buffer1, buffer2, h, min, max), buffer1 = _b[0], buffer2 = _b[1];
    _c = transpose(buffer1, buffer2, h), buffer1 = _c[0], buffer2 = _c[1];
    //brightness
    // [buffer1, buffer2] = pow(buffer1, buffer2, h, 2.2);
    return [buffer1, buffer2];
}


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
/*!***********************!*\
  !*** ./src/FFTApp.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FFT_Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FFT/Tools */ "./src/FFT/Tools.ts");

var FFTApp = /** @class */ (function () {
    function FFTApp() {
        window.onload = function () {
            var _a, _b, _c;
            var img = document.getElementsByTagName("img")[0];
            var w = img.width;
            var h = img.height;
            // fill source
            var source = document.getElementById("source");
            source.width = w;
            source.height = h;
            var source_ctx = source.getContext("2d");
            if (!source_ctx)
                return;
            source_ctx.drawImage(img, 0, 0, w, h);
            // hold source data array
            var source_data = source_ctx.getImageData(0, 0, w, h);
            var source_data_array = source_data.data;
            // hold canvas data array
            var canvas = document.getElementById("canvas");
            canvas.width = w;
            canvas.height = h;
            var draw_ctx = canvas.getContext("2d");
            if (!draw_ctx)
                return;
            var canvas_data = draw_ctx.getImageData(0, 0, w, h);
            var canvas_data_array = canvas_data.data;
            // init buffer
            var buffer1 = (0,_FFT_Tools__WEBPACK_IMPORTED_MODULE_0__.creat_buffer)(w, h);
            var buffer2 = (0,_FFT_Tools__WEBPACK_IMPORTED_MODULE_0__.creat_buffer)(w, h);
            // https://stackoverflow.com/questions/46863683/speed-up-canvass-getimagedata
            // copy from source to buffer1
            for (var y = 0; y < h; ++y) {
                for (var x = 0; x < w; ++x) {
                    var index = 4 * (x + y * w);
                    var int_value = source_data_array[index];
                    var f_value = int_value / 255; // to 0~1
                    buffer1[x][y].x = f_value;
                }
            }
            // remove gamma
            // [buffer1, buffer2] = pow(buffer1, buffer2, h, 2.2);
            // FFT
            _a = (0,_FFT_Tools__WEBPACK_IMPORTED_MODULE_0__.FFT)(buffer1, buffer2, h), buffer1 = _a[0], buffer2 = _a[1];
            _b = (0,_FFT_Tools__WEBPACK_IMPORTED_MODULE_0__.shift)(buffer1, buffer2, h), buffer1 = _b[0], buffer2 = _b[1];
            // [buffer1, buffer2] = clear_center(buffer1, buffer2, h);
            // [buffer1, buffer2] = shift(buffer1, buffer2, h);
            _c = (0,_FFT_Tools__WEBPACK_IMPORTED_MODULE_0__.visualize)(buffer1, buffer2, h), buffer1 = _c[0], buffer2 = _c[1];
            // IFFT
            // [buffer1, buffer2] = IFFT(buffer1, buffer2, h);
            // gamma
            // [buffer1, buffer2] = pow(buffer1, buffer2, h, 1 / 2.2);
            console.log(buffer1);
            // console.log(buffer2);
            // copy from buffer to canvas
            for (var y = 0; y < h; ++y) {
                for (var x = 0; x < w; ++x) {
                    var index = 4 * (x + y * w);
                    var f_value = buffer1[x][y].x;
                    var int_value = Math.round(255 * f_value); // to 0~255
                    canvas_data_array[index++] = int_value;
                    canvas_data_array[index++] = int_value;
                    canvas_data_array[index++] = int_value;
                    canvas_data_array[index] = 255;
                }
            }
            draw_ctx.putImageData(canvas_data, 0, 0);
            console.log("finish");
            // test add_or_minus()
            // test_add_or_minus();
            // test code
            // let c = new Complex(1, 2);
            // let c2 = new Complex(2, 4);
            // let c3 = new Complex(0, 0);
            // c.multiply(c2, c3);
            // console.log(c3);
            // test W
            // let N = 16;
            // for (let i = 0; i < N + 1; ++i) {
            //     console.log(new W(i, N));
            // }
            // let weights = build_weights(16, 1,false);
            // console.log(weights);
        };
    }
    return FFTApp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FFTApp);
new FFTApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN0QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBRU0sU0FBUyxLQUFLLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxDQUFRO0lBQzVELElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN0QixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xFO0lBRUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBRUQsU0FBUyxHQUFHLENBQUMsR0FBZSxFQUFFLEdBQWUsRUFBRSxDQUFRO0lBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZ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QyxJQUFJO1lBRUosNENBQTRDO1lBQzVDLHdCQUF3QjtRQUM1QixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7O0FBQ0QsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvRkZUL0NvbXBsZXgudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9GRlQvVG9vbHMudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvRkZUQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBsZXgge1xyXG4gICAgeDpudW1iZXI7XHJcbiAgICB5Om51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHg6bnVtYmVyLCB5Om51bWJlcil7XHJcbiAgICAgICAgdGhpcy54ID0geDsgLy8gcmVhbFxyXG4gICAgICAgIHRoaXMueSA9IHk7IC8vIGltYWdlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZCAoYzpDb21wbGV4LCByZXN1bHQ6Q29tcGxleCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gdGhpcy54ICsgYy54O1xyXG4gICAgICAgIHJlc3VsdC55ID0gdGhpcy55ICsgYy55O1xyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzICAoYzpDb21wbGV4LCByZXN1bHQ6Q29tcGxleCkge1xyXG4gICAgICAgIHJlc3VsdC54ID0gdGhpcy54IC0gYy54O1xyXG4gICAgICAgIHJlc3VsdC55ID0gdGhpcy55IC0gYy55O1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGx5ICAoYzpDb21wbGV4LCByZXN1bHQ6Q29tcGxleCkge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy54O1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy55O1xyXG4gICAgICAgIGxldCBhID0gYy54O1xyXG4gICAgICAgIGxldCBiID0gYy55O1xyXG4gICAgICAgIHJlc3VsdC54ID0gYSAqIHggLSBiICogeTtcclxuICAgICAgICByZXN1bHQueSA9IGEgKiB5ICsgYiAqIHg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV3cml0ZSAoYzpDb21wbGV4KSAge1xyXG4gICAgICAgIHRoaXMueCA9IGMueDtcclxuICAgICAgICB0aGlzLnkgPSBjLnk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVuZ3RoICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tcGxleCBmcm9tIFwiLi9Db21wbGV4XCI7XHJcblxyXG4vKipcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG93ZXJcclxuICogQHBhcmFtIHsqfSBwb3dlciAgICAgXFwgIC9cXCAgL1xyXG4gKiBAcGFyYW0geyp9IE4gICAgICAgICAgXFwvICBcXC8gIE5cclxuICovXHJcbiBmdW5jdGlvbiBXKHBvd2VyOm51bWJlciwgTjpudW1iZXIpIHtcclxuICAgIGxldCB0aGVkYSA9IHBvd2VyICogLTIgKiBNYXRoLlBJIC8gTjtcclxuICAgIHJldHVybiBuZXcgQ29tcGxleChNYXRoLmNvcyh0aGVkYSksIE1hdGguc2luKHRoZWRhKSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdHJfcmV2ZXJzZShzdHI6c3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB6ZXJvX3N0cihjb3VudDpudW1iZXIpIHtcclxuICAgIGxldCBhID0gbmV3IEFycmF5KGNvdW50KTtcclxuICAgIHJldHVybiBhLmZpbGwoMCkuam9pbihcIlwiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGJpdF9yZXZlcnNlKHZhbHVlOm51bWJlciwgYml0X2xlbmd0aDpudW1iZXIpIHtcclxuICAgIGxldCBiaXRfc3RyID0gdmFsdWUudG9TdHJpbmcoMik7XHJcblxyXG4gICAgLy/oo5wwXHJcbiAgICBpZiAoYml0X3N0ci5sZW5ndGggIT0gYml0X2xlbmd0aCkge1xyXG4gICAgICAgIGxldCB6ZXJvX2NvdW50ID0gYml0X2xlbmd0aCAtIGJpdF9zdHIubGVuZ3RoO1xyXG4gICAgICAgIGJpdF9zdHIgPSB6ZXJvX3N0cih6ZXJvX2NvdW50KSArIGJpdF9zdHI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJpdF9zdHJfcmV2ZXJzZSA9IHN0cl9yZXZlcnNlKGJpdF9zdHIpO1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGJpdF9zdHJfcmV2ZXJzZSwgMik7XHJcbn1cclxuXHJcbi8vIOidtOidtueul+azleeahOesrDHmraVcclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IHNyYyBcclxuICogQHBhcmFtIHsqfSBkZXMgXHJcbiAqIEBwYXJhbSB7Kn0gaCByb3cgY291bnRcclxuICovXHJcbmZ1bmN0aW9uIHNldF9lbGVtZW50X29yZGVyX3Blcl9jb2x1bW4oc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcbiAgICBsZXQgbiA9IE1hdGgubG9nMihoKTtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaDsgKyt4KSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyArK3kpIHtcclxuICAgICAgICAgICAgbGV0IGMgPSBzcmNbeF1bYml0X3JldmVyc2UoeSwgbildO1xyXG4gICAgICAgICAgICBkZXNbeF1beV0ucmV3cml0ZShjKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh5LCBiaXRfcmV2ZXJzZSh5LCBuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7Kn0gd2VpZ2h0cyBcclxuICogQHBhcmFtIHsqfSBzcmMgXHJcbiAqIEBwYXJhbSB7Kn0gZGVzIFxyXG4gKiBAcGFyYW0geyp9IGggcm93IGNvdW50XHJcbiAqL1xyXG5mdW5jdGlvbiBtdWx0aXBseSh3ZWlnaHRzOkNvbXBsZXhbXSwgc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIHNyY1t4XVt5XS5tdWx0aXBseSh3ZWlnaHRzW3ldLCBkZXNbeF1beV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IHNyYyBcclxuICogQHBhcmFtIHsqfSBkZXMgXHJcbiAqIEBwYXJhbSB7Kn0geCAyXm49IGggLHggPCBuXHJcbiAqIEBwYXJhbSB7Kn0gaCBcclxuICovXHJcbmZ1bmN0aW9uIGFkZF9vcl9taW51cyhzcmM6Q29tcGxleFtdW10sIGRlczpDb21wbGV4W11bXSwgeDpudW1iZXIsIGg6bnVtYmVyKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gTWF0aC5wb3coMiwgeCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhvZmZzZXQpO1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBoOyArK3gpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7ICsreSkge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5mbG9vcih5IC8gb2Zmc2V0KSAlIDIgPT0gMClcclxuICAgICAgICAgICAgICAgIHNyY1t4XVt5XS5hZGQoc3JjW3hdW3kgKyBvZmZzZXRdLCBkZXNbeF1beV0pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzcmNbeF1beSAtIG9mZnNldF0ubWludXMoc3JjW3hdW3ldLCBkZXNbeF1beV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IE4gMl5uPSBOXHJcbiAqIEBwYXJhbSB7Kn0gb3JkZXIgMX4obi0xKVxyXG4gKi9cclxuZnVuY3Rpb24gYnVpbGRfd2VpZ2h0cyhOOm51bWJlciwgb3JkZXI6bnVtYmVyLCBpc19pbnZlcnNlOmJvb2xlYW4pIHtcclxuICAgIGxldCBzaWduID0gaXNfaW52ZXJzZSA/IC0xIDogMTtcclxuXHJcbiAgICBsZXQgbiA9IE1hdGgubG9nMihOKTtcclxuICAgIGxldCB3X29mZnNldCA9IE1hdGgucG93KDIsIG4gLSAxIC0gb3JkZXIpO1xyXG4gICAgbGV0IHJlcGVhdCA9IHdfb2Zmc2V0O1xyXG5cclxuICAgIGxldCBjb3VudCA9IE1hdGgucG93KDIsIG9yZGVyKTtcclxuICAgIGxldCB3ZWlnaHRzX3N1YnNldCA9IG5ldyBBcnJheShjb3VudCkuZmlsbChuZXcgQ29tcGxleCgxLCAwKSk7Ly8g6KSH5pW455qE5Zau5L2N5YWD5pivMSswaVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xyXG4gICAgICAgIHdlaWdodHNfc3Vic2V0LnB1c2goVyhpICogd19vZmZzZXQgKiBzaWduLCBOKSk7XHJcbiAgICAgICAgLy8gd2VpZ2h0c19zdWJzZXQucHVzaChcIldfXCIgKyBpICogd19vZmZzZXQgKyBcIl9cIiArIE4pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB3ZWlnaHRzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGVhdDsgKytpKVxyXG4gICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzLmNvbmNhdCh3ZWlnaHRzX3N1YnNldCk7XHJcblxyXG4gICAgcmV0dXJuIHdlaWdodHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1dHRlcmZseShidWZmZXIxOkNvbXBsZXhbXVtdLCBidWZmZXIyOkNvbXBsZXhbXVtdLCBoOm51bWJlciwgaXNfaW52ZXJzZTpib29sZWFuKSB7XHJcbiAgICAvLyDonbTonbbnrpfms5XnmoTnrKwx5q2lOuS6pOaPm+S9jee9rlxyXG4gICAgc2V0X2VsZW1lbnRfb3JkZXJfcGVyX2NvbHVtbihidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IFtidWZmZXIyLCBidWZmZXIxXTtcclxuXHJcbiAgICBsZXQgTiA9IGg7XHJcbiAgICBsZXQgbiA9IE1hdGgubG9nMihOKTtcclxuICAgIGZvciAobGV0IG9yZGVyID0gMDsgb3JkZXIgPCBuIC0gMTsgKytvcmRlcikge1xyXG4gICAgICAgIGFkZF9vcl9taW51cyhidWZmZXIxLCBidWZmZXIyLCBvcmRlciwgaCk7XHJcbiAgICAgICAgW2J1ZmZlcjEsIGJ1ZmZlcjJdID0gW2J1ZmZlcjIsIGJ1ZmZlcjFdO1xyXG5cclxuICAgICAgICBsZXQgd2VpZ2h0cyA9IGJ1aWxkX3dlaWdodHMoTiwgb3JkZXIgKyAxLCBpc19pbnZlcnNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWlnaHRzKTtcclxuICAgICAgICBtdWx0aXBseSh3ZWlnaHRzLCBidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgICAgICBbYnVmZmVyMSwgYnVmZmVyMl0gPSBbYnVmZmVyMiwgYnVmZmVyMV07XHJcbiAgICB9XHJcblxyXG4gICAgYWRkX29yX21pbnVzKGJ1ZmZlcjEsIGJ1ZmZlcjIsIG4gLSAxLCBoKTtcclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IFtidWZmZXIyLCBidWZmZXIxXTtcclxuXHJcbiAgICByZXR1cm4gW2J1ZmZlcjEsIGJ1ZmZlcjJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0cmFuc3Bvc2Uoc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KVxyXG4gICAgICAgICAgICBkZXNbeF1beV0ucmV3cml0ZShzcmNbeV1beF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZGVzLCBzcmNdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hpZnQoc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gaCAvIDI7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KVxyXG4gICAgICAgICAgICBkZXNbeF1beV0ucmV3cml0ZShzcmNbKHggKyBvZmZzZXQpICUgaF1bKHkgKyBvZmZzZXQpICUgaF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZGVzLCBzcmNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2coc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBzcmNbeF1beV0ubGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIGxldCBsb2dfdmFsdWUgPSBNYXRoLmxvZzIoMSArIGxlbik7IC8vIOmAmeaoo+WwseS4jeacg+WHuuePvi1pbmZpbml0ZVxyXG4gICAgICAgICAgICBkZXNbeF1beV0ueCA9IGxvZ192YWx1ZTtcclxuICAgICAgICAgICAgZGVzW3hdW3ldLnkgPSBsb2dfdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZGVzLCBzcmNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRfbWluKHNyYzpDb21wbGV4W11bXSwgaDpudW1iZXIpIHtcclxuICAgIGxldCBtaW5feCA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICBsZXQgbWluX3kgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBoOyArK3gpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7ICsreSkge1xyXG4gICAgICAgICAgICBtaW5feCA9IE1hdGgubWluKHNyY1t4XVt5XS54LCBtaW5feCk7XHJcbiAgICAgICAgICAgIG1pbl95ID0gTWF0aC5taW4oc3JjW3hdW3ldLnksIG1pbl95KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW21pbl94LCBtaW5feV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldF9tYXgoc3JjOkNvbXBsZXhbXVtdLCBoOm51bWJlcikge1xyXG4gICAgbGV0IG1heF94ID0gTnVtYmVyLk1JTl9WQUxVRTtcclxuICAgIGxldCBtYXhfeSA9IE51bWJlci5NSU5fVkFMVUU7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIG1heF94ID0gTWF0aC5tYXgoc3JjW3hdW3ldLngsIG1heF94KTtcclxuICAgICAgICAgICAgbWF4X3kgPSBNYXRoLm1heChzcmNbeF1beV0ueSwgbWF4X3kpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbbWF4X3gsIG1heF95XTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtYXAoc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyLCBtaW46bnVtYmVyW10sIG1heDpudW1iZXJbXSkge1xyXG4gICAgbGV0IHJhbmdlX3ggPSBtYXhbMF0gLSBtaW5bMF07XHJcbiAgICBsZXQgcmFuZ2VfeSA9IG1heFsxXSAtIG1pblsxXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGRlc1t4XVt5XS54ID0gKHNyY1t4XVt5XS54IC0gbWluWzBdKSAvIHJhbmdlX3g7XHJcbiAgICAgICAgICAgIGRlc1t4XVt5XS55ID0gKHNyY1t4XVt5XS55IC0gbWluWzFdKSAvIHJhbmdlX3k7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtkZXMsIHNyY107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyX2NlbnRlcihzcmM6Q29tcGxleFtdW10sIGRlczpDb21wbGV4W11bXSwgaDpudW1iZXIpIHtcclxuXHJcbiAgICBsZXQgbWluID0gZ2V0X21pbihzcmMsIGgpO1xyXG4gICAgbGV0IG1heCA9IGdldF9tYXgoc3JjLCBoKTtcclxuICAgIGNvbnNvbGUubG9nKG1pbiwgbWF4KTtcclxuXHJcbiAgICBsZXQgY2VudGVyID0gaCAvIDIgLSAwLjU7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCBsZW4gPSBNYXRoLnNxcnQoTWF0aC5wb3coeCAtIGNlbnRlciwgMikgKyBNYXRoLnBvdyh5IC0gY2VudGVyLCAyKSk7XHJcbiAgICAgICAgICAgIGlmIChsZW4gPCA2KSB7XHJcbiAgICAgICAgICAgICAgICBkZXNbeF1beV0ueCA9IDA7XHJcbiAgICAgICAgICAgICAgICBkZXNbeF1beV0ueSA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXNbeF1beV0ucmV3cml0ZShzcmNbeF1beV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZGVzLCBzcmNdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0X2FkZF9vcl9taW51cygpIHtcclxuICAgIGxldCBiMSA9IGNyZWF0X2J1ZmZlcig4LCA4KTtcclxuICAgIGxldCBiMiA9IGNyZWF0X2J1ZmZlcig4LCA4KTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7ICsreCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgODsgKyt5KVxyXG4gICAgICAgICAgICBiMVt4XVt5XSA9IG5ldyBDb21wbGV4KHksIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZF9vcl9taW51cyhiMSwgYjIsIDAsIDgpO1xyXG4gICAgY29uc29sZS5sb2coYjEpO1xyXG4gICAgY29uc29sZS5sb2coYjIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRfYnVmZmVyKHc6bnVtYmVyLCBoOm51bWJlcikge1xyXG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBBcnJheSh3KTtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgKyt4KSB7XHJcbiAgICAgICAgYnVmZmVyW3hdID0gbmV3IEFycmF5KGgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGg7ICsreSlcclxuICAgICAgICAgICAgYnVmZmVyW3hdW3ldID0gbmV3IENvbXBsZXgoMCwgMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYnVmZmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3coc3JjOkNvbXBsZXhbXVtdLCBkZXM6Q29tcGxleFtdW10sIGg6bnVtYmVyLCBwb3dlcjpudW1iZXIpIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgaDsgKyt4KSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyArK3kpIHtcclxuICAgICAgICAgICAgZGVzW3hdW3ldLnggPSBNYXRoLnBvdyhzcmNbeF1beV0ueCwgcG93ZXIpO1xyXG4gICAgICAgICAgICBkZXNbeF1beV0ueSA9IE1hdGgucG93KHNyY1t4XVt5XS55LCBwb3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBbZGVzLCBzcmNdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRkZUKGJ1ZmZlcjE6Q29tcGxleFtdW10sIGJ1ZmZlcjI6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcbiAgICAvKuS6jOe2rURGVOWPr+S7peWIhuino+aIkCAy5qyh5LiA57atREZUXHJcbiAgICBCPU1YXHJcbiAgICBZPU0oQilUXHJcbiAgICAqL1xyXG5cclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IGJ1dHRlcmZseShidWZmZXIxLCBidWZmZXIyLCBoLCBmYWxzZSk7XHJcbiAgICBbYnVmZmVyMSwgYnVmZmVyMl0gPSB0cmFuc3Bvc2UoYnVmZmVyMSwgYnVmZmVyMiwgaCk7XHJcbiAgICBbYnVmZmVyMSwgYnVmZmVyMl0gPSBidXR0ZXJmbHkoYnVmZmVyMSwgYnVmZmVyMiwgaCwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiBbYnVmZmVyMSwgYnVmZmVyMl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIElGRlQoYnVmZmVyMTpDb21wbGV4W11bXSwgYnVmZmVyMjpDb21wbGV4W11bXSwgaDpudW1iZXIpIHtcclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IGJ1dHRlcmZseShidWZmZXIxLCBidWZmZXIyLCBoLCB0cnVlKTtcclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IHRyYW5zcG9zZShidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IGJ1dHRlcmZseShidWZmZXIxLCBidWZmZXIyLCBoLCB0cnVlKTtcclxuICAgIGxldCBtID0gbmV3IEFycmF5KGgpLmZpbGwobmV3IENvbXBsZXgoMSAvIGggLyBoLCAwKSk7XHJcbiAgICBtdWx0aXBseShtLCBidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IFtidWZmZXIyLCBidWZmZXIxXTtcclxuXHJcbiAgICByZXR1cm4gW2J1ZmZlcjEsIGJ1ZmZlcjJdO1xyXG59XHJcblxyXG4vL1xyXG5leHBvcnQgZnVuY3Rpb24gdmlzdWFsaXplKGJ1ZmZlcjE6Q29tcGxleFtdW10sIGJ1ZmZlcjI6Q29tcGxleFtdW10sIGg6bnVtYmVyKSB7XHJcblxyXG4gICAgW2J1ZmZlcjEsIGJ1ZmZlcjJdID0gbG9nKGJ1ZmZlcjEsIGJ1ZmZlcjIsIGgpO1xyXG4gICAgbGV0IG1pbiA9IGdldF9taW4oYnVmZmVyMSwgaCk7XHJcbiAgICBsZXQgbWF4ID0gZ2V0X21heChidWZmZXIxLCBoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1pbiwgbWF4KTtcclxuXHJcbiAgICBbYnVmZmVyMSwgYnVmZmVyMl0gPSByZW1hcChidWZmZXIxLCBidWZmZXIyLCBoLCBtaW4sIG1heCk7XHJcbiAgICBbYnVmZmVyMSwgYnVmZmVyMl0gPSB0cmFuc3Bvc2UoYnVmZmVyMSwgYnVmZmVyMiwgaCk7XHJcblxyXG4gICAgLy9icmlnaHRuZXNzXHJcbiAgICAvLyBbYnVmZmVyMSwgYnVmZmVyMl0gPSBwb3coYnVmZmVyMSwgYnVmZmVyMiwgaCwgMi4yKTtcclxuXHJcbiAgICByZXR1cm4gW2J1ZmZlcjEsIGJ1ZmZlcjJdO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge0ZGVCxjcmVhdF9idWZmZXIsc2hpZnQsdmlzdWFsaXplfSAgZnJvbSAnLi9GRlQvVG9vbHMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZGVEFwcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImltZ1wiKVswXTtcclxuICAgICAgICAgICAgbGV0IHcgPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoID0gaW1nLmhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gZmlsbCBzb3VyY2VcclxuICAgICAgICAgICAgbGV0IHNvdXJjZSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VyY2VcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgICAgIHNvdXJjZS53aWR0aCA9IHc7XHJcbiAgICAgICAgICAgIHNvdXJjZS5oZWlnaHQgPSBoO1xyXG4gICAgICAgICAgICBsZXQgc291cmNlX2N0eCA9IHNvdXJjZS5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgICAgIGlmKCFzb3VyY2VfY3R4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBzb3VyY2VfY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHcsIGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBob2xkIHNvdXJjZSBkYXRhIGFycmF5XHJcbiAgICAgICAgICAgIGxldCBzb3VyY2VfZGF0YSA9IHNvdXJjZV9jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpO1xyXG4gICAgICAgICAgICBsZXQgc291cmNlX2RhdGFfYXJyYXkgPSBzb3VyY2VfZGF0YS5kYXRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBob2xkIGNhbnZhcyBkYXRhIGFycmF5XHJcbiAgICAgICAgICAgIGxldCBjYW52YXMgPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3O1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcclxuICAgICAgICAgICAgbGV0IGRyYXdfY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICAgICAgaWYoIWRyYXdfY3R4KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzX2RhdGEgPSBkcmF3X2N0eC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaCk7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXNfZGF0YV9hcnJheSA9IGNhbnZhc19kYXRhLmRhdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGluaXQgYnVmZmVyXHJcbiAgICAgICAgICAgIGxldCBidWZmZXIxID0gY3JlYXRfYnVmZmVyKHcsIGgpO1xyXG4gICAgICAgICAgICBsZXQgYnVmZmVyMiA9IGNyZWF0X2J1ZmZlcih3LCBoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDY4NjM2ODMvc3BlZWQtdXAtY2FudmFzcy1nZXRpbWFnZWRhdGFcclxuICAgICAgICAgICAgLy8gY29weSBmcm9tIHNvdXJjZSB0byBidWZmZXIxXHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDQgKiAoeCArIHkgKiB3KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50X3ZhbHVlID0gc291cmNlX2RhdGFfYXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmX3ZhbHVlID0gaW50X3ZhbHVlIC8gMjU1OyAvLyB0byAwfjFcclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIxW3hdW3ldLnggPSBmX3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBnYW1tYVxyXG4gICAgICAgICAgICAvLyBbYnVmZmVyMSwgYnVmZmVyMl0gPSBwb3coYnVmZmVyMSwgYnVmZmVyMiwgaCwgMi4yKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gRkZUXHJcbiAgICAgICAgICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IEZGVChidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgW2J1ZmZlcjEsIGJ1ZmZlcjJdID0gc2hpZnQoYnVmZmVyMSwgYnVmZmVyMiwgaCk7XHJcbiAgICAgICAgICAgIC8vIFtidWZmZXIxLCBidWZmZXIyXSA9IGNsZWFyX2NlbnRlcihidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgICAgICAgICAgLy8gW2J1ZmZlcjEsIGJ1ZmZlcjJdID0gc2hpZnQoYnVmZmVyMSwgYnVmZmVyMiwgaCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFtidWZmZXIxLCBidWZmZXIyXSA9IHZpc3VhbGl6ZShidWZmZXIxLCBidWZmZXIyLCBoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gSUZGVFxyXG4gICAgICAgICAgICAvLyBbYnVmZmVyMSwgYnVmZmVyMl0gPSBJRkZUKGJ1ZmZlcjEsIGJ1ZmZlcjIsIGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBnYW1tYVxyXG4gICAgICAgICAgICAvLyBbYnVmZmVyMSwgYnVmZmVyMl0gPSBwb3coYnVmZmVyMSwgYnVmZmVyMiwgaCwgMSAvIDIuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1ZmZlcjEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhidWZmZXIyKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29weSBmcm9tIGJ1ZmZlciB0byBjYW52YXNcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyArK3kpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gNCAqICh4ICsgeSAqIHcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmX3ZhbHVlID0gYnVmZmVyMVt4XVt5XS54O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRfdmFsdWUgPSBNYXRoLnJvdW5kKDI1NSAqIGZfdmFsdWUpOyAvLyB0byAwfjI1NVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc19kYXRhX2FycmF5W2luZGV4KytdID0gaW50X3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc19kYXRhX2FycmF5W2luZGV4KytdID0gaW50X3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc19kYXRhX2FycmF5W2luZGV4KytdID0gaW50X3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhc19kYXRhX2FycmF5W2luZGV4XSA9IDI1NTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcmF3X2N0eC5wdXRJbWFnZURhdGEoY2FudmFzX2RhdGEsIDAsIDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gdGVzdCBhZGRfb3JfbWludXMoKVxyXG4gICAgICAgICAgICAvLyB0ZXN0X2FkZF9vcl9taW51cygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0ZXN0IGNvZGVcclxuICAgICAgICAgICAgLy8gbGV0IGMgPSBuZXcgQ29tcGxleCgxLCAyKTtcclxuICAgICAgICAgICAgLy8gbGV0IGMyID0gbmV3IENvbXBsZXgoMiwgNCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjMyA9IG5ldyBDb21wbGV4KDAsIDApO1xyXG4gICAgICAgICAgICAvLyBjLm11bHRpcGx5KGMyLCBjMyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGMzKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gdGVzdCBXXHJcbiAgICAgICAgICAgIC8vIGxldCBOID0gMTY7XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgTiArIDE7ICsraSkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmV3IFcoaSwgTikpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxldCB3ZWlnaHRzID0gYnVpbGRfd2VpZ2h0cygxNiwgMSxmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdlaWdodHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxubmV3IEZGVEFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==