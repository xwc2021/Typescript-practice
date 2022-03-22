/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Materails/Diffuse.ts":
/*!**********************************!*\
  !*** ./src/Materails/Diffuse.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Math_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Math_Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/Tool */ "./src/Math/Tool.ts");


var Diffuse = /** @class */ (function () {
    function Diffuse(color) {
        this.color = color;
    }
    Diffuse.prototype.shading = function (hit_info, direction_light_dir, obj_list, depth) {
        var n = hit_info.normal;
        var strength = (0,_Math_Tool__WEBPACK_IMPORTED_MODULE_1__.clamp)(-_Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(direction_light_dir, n), 0, 1);
        var shadow_weight = (0,_Math_Tool__WEBPACK_IMPORTED_MODULE_1__.get_shadow_weight)(hit_info, direction_light_dir, obj_list);
        return this.color.multiply(strength).multiply(shadow_weight);
    };
    Diffuse.yellow = new Diffuse(new _Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1, 0));
    Diffuse.red = new Diffuse(new _Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0, 0));
    Diffuse.green = new Diffuse(new _Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1, 0));
    Diffuse.blue = new Diffuse(new _Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 1));
    Diffuse.gray = new Diffuse(new _Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0.5, 0.5, 0.5));
    Diffuse.white = new Diffuse(new _Math_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 1, 1));
    return Diffuse;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Diffuse);


/***/ }),

/***/ "./src/Math/Box3D.ts":
/*!***************************!*\
  !*** ./src/Math/Box3D.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vertex */ "./src/Math/Vertex.ts");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangle */ "./src/Math/Triangle.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transform */ "./src/Math/Transform.ts");




var Box = /** @class */ (function () {
    function Box() {
        // 建立正方體頂點資料
        this.triangles = [];
        //順時針
        var n = new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, -1);
        this.triangles.push(new _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"](new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](-10, -10, -10), n, 1, 0, 0), new _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"](new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](10, 10, -10), n, 1, 1, 1), new _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"](new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](10, -10, -10), n, 1, 1, 0)));
        this.triangles.push(new _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"](new _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"](new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](-10, -10, -10), n, 1, 0, 0), new _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"](new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](-10, 10, -10), n, 1, 0, 1), new _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"](new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](10, 10, -10), n, 1, 1, 1)));
        var m = [_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].rotateByY(90), _Transform__WEBPACK_IMPORTED_MODULE_3__["default"].rotateByY(180), _Transform__WEBPACK_IMPORTED_MODULE_3__["default"].rotateByY(270), _Transform__WEBPACK_IMPORTED_MODULE_3__["default"].rotateByX(90), _Transform__WEBPACK_IMPORTED_MODULE_3__["default"].rotateByX(-90)];
        for (var i = 0; i < m.length; ++i) {
            var rotateMatrix = m[i];
            var n2 = _Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, n);
            this.triangles.push(new _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"](_Vertex__WEBPACK_IMPORTED_MODULE_0__["default"].build_vertex(_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](-10, -10, -10)), n2, 1, 0, 0), _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"].build_vertex(_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](10, 10, -10)), n2, 1, 1, 1), _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"].build_vertex(_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](10, -10, -10)), n2, 1, 1, 0)));
            this.triangles.push(new _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"](_Vertex__WEBPACK_IMPORTED_MODULE_0__["default"].build_vertex(_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](-10, -10, -10)), n2, 1, 0, 0), _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"].build_vertex(_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](-10, 10, -10)), n2, 1, 0, 1), _Vertex__WEBPACK_IMPORTED_MODULE_0__["default"].build_vertex(_Transform__WEBPACK_IMPORTED_MODULE_3__["default"].transformPoint(rotateMatrix, new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"](10, 10, -10)), n2, 1, 1, 1)));
        }
    }
    Box.prototype.rasterize = function (camera, worldTransform, texture) {
        // 處理正方體的變換
        for (var i = 0; i < this.triangles.length; ++i) {
            this.triangles[i].rasterize(camera, worldTransform, texture);
        }
    };
    Box.prototype.draw_line = function (ctx) {
        // 畫三角形
        ctx.globalCompositeOperation = 'destination-over';
        ctx.strokeStyle = 'rgba(255,0,0,1)';
        ctx.beginPath();
        for (var i = 0; i < this.triangles.length; ++i) {
            this.triangles[i].draw(ctx);
        }
        ctx.stroke();
    };
    return Box;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);


/***/ }),

/***/ "./src/Math/Buffer2D.ts":
/*!******************************!*\
  !*** ./src/Math/Buffer2D.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RGBA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGBA */ "./src/Math/RGBA.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");


var Buffer2D = /** @class */ (function () {
    function Buffer2D(w, h) {
        this.w = w;
        this.h = h;
        this.buffer = new Array(this.h);
        console.log(w, h);
        for (var y = 0; y < this.h; ++y) {
            this.buffer[y] = new Array(this.w);
        }
    }
    Buffer2D.prototype.set = function (x, y, value) {
        if (this.is_legal_index(x, y))
            this.buffer[y][x] = value;
        else {
            console.log('set', this.w, this.h, x, y);
            return _RGBA__WEBPACK_IMPORTED_MODULE_0__["default"].debug;
        }
    };
    Buffer2D.prototype.get = function (x, y) {
        if (this.is_legal_index(x, y))
            return this.buffer[y][x];
        else {
            console.log('get', this.w, this.h, x, y);
            return _RGBA__WEBPACK_IMPORTED_MODULE_0__["default"].debug;
        }
    };
    Buffer2D.prototype.clear = function (value) {
        for (var y = 0; y < this.h; ++y) {
            for (var x = 0; x < this.w; ++x) {
                this.buffer[y][x] = value;
            }
        }
    };
    // 超過邊界就使用邊界值
    Buffer2D.prototype.get_clamp_mode = function (x, y) {
        var nx = (0,_Tool__WEBPACK_IMPORTED_MODULE_1__.clamp)(x, 0, this.w - 1);
        var ny = (0,_Tool__WEBPACK_IMPORTED_MODULE_1__.clamp)(y, 0, this.h - 1);
        return this.buffer[ny][nx];
    };
    Buffer2D.prototype.is_legal_index = function (x, y) {
        if (x >= 0 && x < this.w && y >= 0 && y < this.h)
            return true;
        else
            return false;
    };
    Buffer2D.prototype.is_over_negative = function (x, y, endX, endY) {
        if (y > endY || x < endX)
            return true;
        else
            return false;
    };
    Buffer2D.prototype.is_over_positive = function (x, y, endX, endY) {
        if (y > endY || x > endX)
            return true;
        else
            return false;
    };
    return Buffer2D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buffer2D);


/***/ }),

/***/ "./src/Math/Camera.ts":
/*!****************************!*\
  !*** ./src/Math/Camera.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ray */ "./src/Math/Ray.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");
/* harmony import */ var _Materails_Diffuse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Materails/Diffuse */ "./src/Materails/Diffuse.ts");




var Camera = /** @class */ (function () {
    function Camera(eye, look_at, fov_degree, screenW, screenH, N, F) {
        this.ratio = screenW / screenH;
        this.screenW = screenW;
        this.screenH = screenH;
        this.screenCenterX = this.screenW * 0.5;
        this.screenCenterY = this.screenH * 0.5;
        this.halfW = this.screenW * 0.5;
        this.halfH = this.screenH * 0.5;
        // camera 3軸
        this.z_axis = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(look_at, eye).normalize();
        // 左手
        var help_v = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].up;
        this.x_axis = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].cross(help_v, this.z_axis).normalize();
        this.y_axis = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].cross(this.z_axis, this.x_axis);
        // camera 原點
        this.eye = eye;
        // camera fov
        this.fov_degree = fov_degree;
        // 視錐的 近平面和遠平面
        this.N = N;
        this.F = F;
        // https://gpnnotes.blogspot.com/2021/11/blog-post_27.html
        // 投影矩陣對z的修正，這裡使用左手
        this.a = F / (F - N);
        this.b = -N * F / (F - N);
        console.log(this.a, this.b);
    }
    Camera.prototype.moveEye = function (s, A) {
        this.eye = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].add(this.eye, A.multiply(s));
    };
    Camera.prototype.addPitch = function (degree) {
        // todo: 乘上local matrix
    };
    Camera.prototype.addYaw = function (degree) {
        // todo: 乘上local matrix
    };
    Camera.prototype.create_ray_dir = function (x_weight, y_weight, ratio) {
        var half_fov_rad = (0,_Tool__WEBPACK_IMPORTED_MODULE_2__.degree_to_Rad)(0.5 * this.fov_degree);
        var tan_h = Math.tan(half_fov_rad);
        var tan_w = tan_h * ratio;
        var dir = this.z_axis
            .add(this.x_axis.multiply(x_weight * tan_w))
            .add(this.y_axis.multiply(y_weight * tan_h));
        return dir;
    };
    Camera.prototype.toCameraSpace = function (A) {
        var diff = A.minus(this.eye);
        var point_in_camera_space = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(diff, this.x_axis), _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(diff, this.y_axis), _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(diff, this.z_axis));
        return point_in_camera_space;
    };
    Camera.prototype.toProjectionSpace = function (A) {
        var fov_rad = (0,_Tool__WEBPACK_IMPORTED_MODULE_2__.degree_to_Rad)(this.fov_degree);
        var half_fov = 0.5 * fov_rad;
        var y_scale = 1 / Math.tan(half_fov);
        var x_scale = 1 / (this.ratio * Math.tan(half_fov));
        return new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](A.x * x_scale, A.y * y_scale, A.z * this.a + this.b);
    };
    Camera.prototype.toNDC = function (A, w) {
        var s = 1 / w;
        return A.multiply(s);
    };
    Camera.prototype.toScreenSpace = function (NDC_A) {
        // 用座標變換來看待從NDC到Screen Space
        // NDC x軸在screen space 為(w/2,0)
        // NDC y軸在screen space 為(-h/2,0)
        var x = this.halfW * NDC_A.x + this.screenCenterX;
        var y = -this.halfH * NDC_A.y + this.screenCenterY;
        var temp = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, 0);
        return temp;
    };
    // 算圖
    Camera.prototype.render = function (render_target, obj_list) {
        var _this = this;
        var direction_light_dir = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, -1, 0).normalize();
        var half_pixel_offset = 0.5 / render_target.h;
        var multisample_diff = [
            { x: 0, y: 0 },
            { x: half_pixel_offset, y: half_pixel_offset },
            { x: -half_pixel_offset, y: half_pixel_offset },
            { x: -half_pixel_offset, y: -half_pixel_offset },
            { x: half_pixel_offset, y: -half_pixel_offset },
        ];
        render_target.render_pixel(function (x_weight, y_weight, ratio) {
            var ray_dir = _this.create_ray_dir(x_weight, y_weight, ratio);
            // 產生多條ray
            var rays = multisample_diff.map(function (diff) {
                // 對ray_dri作偏移
                var dir = ray_dir.add(_this.x_axis.multiply(diff.x)).add(_this.y_axis.multiply(diff.y));
                // 雖然和球、平面的hit計算不需要dir作normalize，但為了方便反射的計算還是作normalize
                return new _Ray__WEBPACK_IMPORTED_MODULE_1__["default"](_this.eye, dir.normalize());
            });
            // 每個ray都算color
            var colors = rays.map(function (ray) {
                var hit_sort_list = (0,_Tool__WEBPACK_IMPORTED_MODULE_2__.get_hit_sort_list)(obj_list, ray);
                // 有射中嗎
                var is_hit = hit_sort_list.length != 0;
                if (is_hit) {
                    var hit_info = hit_sort_list[0];
                    if (hit_info.s)
                        return hit_info.s.shading(hit_info, direction_light_dir, obj_list, 1);
                    else // 不可能到這裡
                        return _Materails_Diffuse__WEBPACK_IMPORTED_MODULE_3__["default"].red.color;
                }
                else {
                    return _Materails_Diffuse__WEBPACK_IMPORTED_MODULE_3__["default"].gray.color;
                }
            });
            // 取平均就有Antialiasing效果
            var count = multisample_diff.length;
            var final_color = colors.reduce(function (accumulator, current) { return accumulator.add(current); }, _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].zero).multiply(1 / count);
            return final_color;
        });
    };
    return Camera;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Camera);


/***/ }),

/***/ "./src/Math/CanvasHelper.ts":
/*!**********************************!*\
  !*** ./src/Math/CanvasHelper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CavnasHelper = /** @class */ (function () {
    function CavnasHelper() {
    }
    CavnasHelper.set_canvas = function (id, w, h) {
        var canvas = document.getElementById(id);
        return CavnasHelper.set_canvas_element(canvas, w, h);
    };
    CavnasHelper.set_canvas_element = function (canvas, w, h) {
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        return canvas;
    };
    CavnasHelper.get_context = function (id) {
        var canvas = document.getElementById(id);
        return canvas.getContext('2d');
    };
    CavnasHelper.get_context_by_canvas = function (canvas) {
        return canvas.getContext('2d');
    };
    CavnasHelper.convert = function (c) {
        return 'rgba(' + Math.floor(255 * (c.r)) + ',' + Math.floor(255 * (c.g)) + ',' + Math.floor(255 * (c.b)) + ',1)';
    };
    return CavnasHelper;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CavnasHelper);


/***/ }),

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

/***/ "./src/Math/Plane.ts":
/*!***************************!*\
  !*** ./src/Math/Plane.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");


// 平面
var Plane = /** @class */ (function () {
    function Plane(point, normal) {
        this.C = point;
        this.N = normal;
    }
    // 測試tesp_p和方向量是不是在同一邊
    Plane.prototype.is_positive = function (test_p) {
        var diff = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(test_p, this.C);
        var value = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(diff, this.N);
        return value > 0;
    };
    Plane.prototype.hit = function (ray, s) {
        var result = Plane.hit(ray, this);
        if (result)
            result.s = s;
        return result;
    };
    Plane.hit = function (ray, plane) {
        // ray hit plane 
        var from = ray.from;
        var dir = ray.dir;
        // (F-C)。N + t (D。N) = 0
        // t  = (C-F)。N / (D。N)
        // t  = (A / (B)
        var B = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(dir, plane.N);
        var A = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].dot(_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(plane.C, from), plane.N);
        // avoid divide by 0
        if ((0,_Tool__WEBPACK_IMPORTED_MODULE_1__.number_equal)(B, 0))
            return null;
        var t = A / B;
        var positive_t = t > 0.0;
        var hit_pos = from.add(dir.multiply(t));
        return {
            positive_t: positive_t,
            hit_pos: hit_pos,
            i: dir,
            t: t,
            normal: plane.N
        };
    };
    return Plane;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plane);


/***/ }),

/***/ "./src/Math/RGBA.ts":
/*!**************************!*\
  !*** ./src/Math/RGBA.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");

var RGBA = /** @class */ (function () {
    function RGBA(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    RGBA.lerp = function (A, B, k) {
        return new RGBA((0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(A.r, B.r, k), (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(A.g, B.g, k), (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(A.b, B.b, k), 1);
    };
    RGBA.prototype.add = function (A) {
        return new RGBA(this.r + A.r, this.g + A.g, this.b + A.b, 1);
    };
    RGBA.prototype.multiply = function (s) {
        return new RGBA(this.r * s, this.g * s, this.b * s, 1);
    };
    RGBA.prototype.toString = function () {
        return "( " + this.r + " , " + this.g + " , " + this.b + " )";
    };
    RGBA.debug = new RGBA(1, 0, 1, 1);
    RGBA.golden = new RGBA(1, 215 / 255, 0, 1);
    RGBA.yellow = new RGBA(1, 1, 0, 1);
    RGBA.pink = new RGBA(1, 192 / 255, 203 / 255, 1);
    RGBA.black = new RGBA(0, 0, 0, 1);
    RGBA.red = new RGBA(1, 0, 0, 1);
    return RGBA;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RGBA);


/***/ }),

/***/ "./src/Math/Rasterizer.ts":
/*!********************************!*\
  !*** ./src/Math/Rasterizer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transform */ "./src/Math/Transform.ts");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangle */ "./src/Math/Triangle.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _RGBA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RGBA */ "./src/Math/RGBA.ts");
/* harmony import */ var _Vector2D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Vector2D */ "./src/Math/Vector2D.ts");






var Rasterizer = /** @class */ (function () {
    function Rasterizer() {
    }
    Rasterizer.clear = function (color, z) {
        Rasterizer.color_buffer.clear(color);
        Rasterizer.z_buffer.clear(z);
    };
    Rasterizer.show = function (render_target) {
        render_target.set_pixel(function (x, y) {
            return Rasterizer.color_buffer.get(x, y);
        });
        render_target.show_buffer('canvas');
    };
    Rasterizer.clip_helper = function (in_list, v0_out, v1_out, v2_out, plane) {
        var out_list = [];
        for (var _i = 0, in_list_1 = in_list; _i < in_list_1.length; _i++) {
            var T = in_list_1[_i];
            var result = (0,_Tool__WEBPACK_IMPORTED_MODULE_2__.clip)(T, v0_out, v1_out, v2_out, plane);
            for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
                var t = result_1[_a];
                out_list.push(t);
            }
        }
        return out_list;
    };
    Rasterizer.clip_in_Projection_Space = function (v0, v1, v2, pcamera) {
        // Todo:執行6個平面的三角形裁切
        // 和y軸夾45度的2個平面、和x軸夾45度的2個平面、還有Nc和Fc
        // https://gpnnotes.blogspot.com/2021/11/blog-post_28.html
        var in_list = [new _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"](v0, v1, v2)];
        // Far
        var out_list = Rasterizer.clip_helper(in_list, function (T) { return T.v0.w < T.v0.p.z; }, function (T) { return T.v1.w < T.v1.p.z; }, function (T) { return T.v2.w < T.v2.p.z; }, _Tool__WEBPACK_IMPORTED_MODULE_2__.ClipPlane.Far);
        // Near
        out_list = Rasterizer.clip_helper(out_list, function (T) { return 0 > T.v0.p.z; }, function (T) { return 0 > T.v1.p.z; }, function (T) { return 0 > T.v2.p.z; }, _Tool__WEBPACK_IMPORTED_MODULE_2__.ClipPlane.Near);
        // 不對Right 、Left、Top、Bottom作裁切了
        // 這樣才可以看到ndc_clamp_effect
        if (Rasterizer.ndc_clamp_effect)
            return out_list;
        // Right
        out_list = Rasterizer.clip_helper(out_list, function (T) { return T.v0.w < T.v0.p.x; }, function (T) { return T.v1.w < T.v1.p.x; }, function (T) { return T.v2.w < T.v2.p.x; }, _Tool__WEBPACK_IMPORTED_MODULE_2__.ClipPlane.Right);
        // Left
        out_list = Rasterizer.clip_helper(out_list, function (T) { return -T.v0.w > T.v0.p.x; }, function (T) { return -T.v1.w > T.v1.p.x; }, function (T) { return -T.v2.w > T.v2.p.x; }, _Tool__WEBPACK_IMPORTED_MODULE_2__.ClipPlane.Left);
        // Top
        out_list = Rasterizer.clip_helper(out_list, function (T) { return T.v0.w < T.v0.p.y; }, function (T) { return T.v1.w < T.v1.p.y; }, function (T) { return T.v2.w < T.v2.p.y; }, _Tool__WEBPACK_IMPORTED_MODULE_2__.ClipPlane.Top);
        // Bottom
        out_list = Rasterizer.clip_helper(out_list, function (T) { return -T.v0.w > T.v0.p.y; }, function (T) { return -T.v1.w > T.v1.p.y; }, function (T) { return -T.v2.w > T.v2.p.y; }, _Tool__WEBPACK_IMPORTED_MODULE_2__.ClipPlane.Bottom);
        return out_list;
    };
    Rasterizer.MVP_backface_culling_clipping = function (triangle, pcamera, worldTransform) {
        // to world space
        var v0_w = _Transform__WEBPACK_IMPORTED_MODULE_0__["default"].transformPoint(worldTransform, triangle.v0.p);
        var v1_w = _Transform__WEBPACK_IMPORTED_MODULE_0__["default"].transformPoint(worldTransform, triangle.v1.p);
        var v2_w = _Transform__WEBPACK_IMPORTED_MODULE_0__["default"].transformPoint(worldTransform, triangle.v2.p);
        // to camera space
        var v0_c = pcamera.toCameraSpace(v0_w);
        var v1_c = pcamera.toCameraSpace(v1_w);
        var v2_c = pcamera.toCameraSpace(v2_w);
        // to projection space (clip space)
        var v0_p = pcamera.toProjectionSpace(v0_c);
        var v1_p = pcamera.toProjectionSpace(v1_c);
        var v2_p = pcamera.toProjectionSpace(v2_c);
        // back face culling 
        // let v0_test = new Vector(v0_p.x, v0_p.y, v0_c.z);
        // let v1_test = new Vector(v1_p.x, v1_p.y, v1_c.z);
        // let v2_test = new Vector(v2_p.x, v2_p.y, v2_c.z);
        // let normal = Vector.calculate_normal(v0_test, v1_test, v2_test);
        // let center_to_eye = Vector.minus(Vector.zero, Vector.calculate_center(v0_test, v1_test, v2_test)).normalize();
        // 在view space做，不然在clip space做，還要把z用w取代掉，有點搞工
        var normal = _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].calculate_normal(v0_c, v1_c, v2_c);
        var center_to_eye = _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].minus(_Vector__WEBPACK_IMPORTED_MODULE_3__["default"].zero, _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].calculate_center(v0_c, v1_c, v2_c)).normalize();
        var cos_value = _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].dot(normal, center_to_eye);
        ;
        if (cos_value <= 0) {
            // console.log('culling')
            return [];
        }
        // 重新綁定uv
        var v0 = triangle.v0.clone().update_p(v0_p).update_w(v0_c.z);
        var v1 = triangle.v1.clone().update_p(v1_p).update_w(v1_c.z);
        var v2 = triangle.v2.clone().update_p(v2_p).update_w(v2_c.z);
        // 執行三角形裁切
        return Rasterizer.clip_in_Projection_Space(v0, v1, v2, pcamera);
    };
    Rasterizer.set_peek_screen_pos = function (peek_screen_pos) {
        Rasterizer.peek_screen_pos = peek_screen_pos;
    };
    Rasterizer.print_peek_position = function () {
        Rasterizer.print_once = true;
        console.log('print_peek_position');
    };
    Rasterizer.process = function (triangle, pcamera, worldTransform, texture) {
        // to MVP
        var triangle_list = Rasterizer.MVP_backface_culling_clipping(triangle, pcamera, worldTransform);
        var list = [];
        for (var _i = 0, triangle_list_1 = triangle_list; _i < triangle_list_1.length; _i++) {
            var T = triangle_list_1[_i];
            // to NDC
            var n0 = pcamera.toNDC(T.v0.p, T.v0.w);
            var n1 = pcamera.toNDC(T.v1.p, T.v1.w);
            var n2 = pcamera.toNDC(T.v2.p, T.v2.w);
            // 有裁切left、right、top、bottom的話NDC應該要落在
            // -1 ≤ x ≤ 1, -1 ≤ y ≤ 1
            // 不裁切left、right、top、bottom，然後clamp ndc也算是一種特殊效果
            if (Rasterizer.ndc_clamp_effect) {
                n0.clamp_x(-1, 1).clamp_y(-1, 1);
                n1.clamp_x(-1, 1).clamp_y(-1, 1);
                n2.clamp_x(-1, 1).clamp_y(-1, 1);
            }
            // to screen space
            // 0 ≤ x ≤ w, 0 ≤ y ≤ h
            var s0 = pcamera.toScreenSpace(n0);
            var s1 = pcamera.toScreenSpace(n1);
            var s2 = pcamera.toScreenSpace(n2);
            // 為了和本來畫線的code相容，傳出去
            list.push(s0);
            list.push(s1);
            list.push(s2);
            // 找出包圍的矩形
            // https://gpnnotes.blogspot.com/2021/11/blog-post_28.html
            // 圖 Screen Space
            var _a = _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].min_max(s0, s1, s2), min = _a.min, max = _a.max;
            // console.log(min.x, max.x, '|', min.y, max.y);
            var min_x = Math.floor(min.x);
            var max_x = Math.floor(max.x);
            var min_y = Math.floor(min.y);
            var max_y = Math.floor(max.y);
            // clamp by screen size
            min_x = Math.max(0, min_x);
            min_y = Math.max(0, min_y);
            max_x = Math.min(this.color_buffer.w - 1, max_x);
            max_y = Math.min(this.color_buffer.h - 1, max_y);
            for (var x = min_x; x <= max_x; ++x) {
                for (var y = min_y; y <= max_y; ++y) {
                    // https://gpnnotes.blogspot.com/2021/11/blog-post_28.html
                    // 圖 Screen Space
                    var P = new _Vector__WEBPACK_IMPORTED_MODULE_3__["default"](x + 0.5, y + 0.5, 0);
                    // 對矩形裡的每個點P
                    // 判定是否位在screen space三角形裡面
                    var _b = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"]["calculate_α_β_γ"](s0, s1, s2, P), success = _b.success, α = _b.α, β = _b.β, γ = _b.γ;
                    if (!success)
                        continue;
                    if (Rasterizer.print_once && x == Rasterizer.peek_screen_pos.x && y == Rasterizer.peek_screen_pos.y) {
                        console.log('is_in_triangle', _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].is_in_triangle(α, β, γ), α, β, γ);
                    }
                    if (!_Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].is_in_triangle(α, β, γ))
                        continue;
                    // if yes 
                    // (1)計算z值 
                    // 從NDC到Screen Space是仿射變換，內插權重α、β、γ一樣
                    // https://gpnnotes.blogspot.com/2019/11/blog-post_30.html
                    var z = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, n0.z, n1.z, n2.z);
                    // z test
                    var buffer_z = Rasterizer.z_buffer.get(x, y);
                    if (z > buffer_z)
                        continue;
                    // 寫入z值
                    Rasterizer.z_buffer.set(x, y, z);
                    // (2)透視修正
                    // https://gpnnotes.blogspot.com/2021/11/blog-post_27.html#Highlights
                    // 要在NDC插值，所以除以w
                    var u_ndc = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, T.v0.u / T.v0.w, T.v1.u / T.v1.w, T.v2.u / T.v2.w);
                    var v_ndc = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, T.v0.v / T.v0.w, T.v1.v / T.v1.w, T.v2.v / T.v2.w);
                    // 乘上w回到projection space
                    var w = 1 / _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, 1 / T.v0.w, 1 / T.v1.w, 1 / T.v2.w);
                    var u = u_ndc * w;
                    var v = v_ndc * w;
                    var color = texture.get(new _Vector2D__WEBPACK_IMPORTED_MODULE_5__["default"](u, v)).color;
                    if (Rasterizer.use_solid_color)
                        Rasterizer.color_buffer.set(x, y, _RGBA__WEBPACK_IMPORTED_MODULE_4__["default"].yellow);
                    else
                        Rasterizer.color_buffer.set(x, y, color);
                    if (Rasterizer.print_once && x == Rasterizer.peek_screen_pos.x && y == Rasterizer.peek_screen_pos.y) {
                        console.log('color', color);
                    }
                }
            }
        }
        if (Rasterizer.print_once) {
            Rasterizer.print_once = false;
            console.log('finish peek');
        }
        return list;
    };
    Rasterizer.use_solid_color = false;
    Rasterizer.ndc_clamp_effect = false;
    Rasterizer.print_once = false;
    return Rasterizer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rasterizer);


/***/ }),

/***/ "./src/Math/Ray.ts":
/*!*************************!*\
  !*** ./src/Math/Ray.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Ray = /** @class */ (function () {
    function Ray(from, dir) {
        this.from = from;
        this.dir = dir;
    }
    return Ray;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ray);
;


/***/ }),

/***/ "./src/Math/Ray4D.ts":
/*!***************************!*\
  !*** ./src/Math/Ray4D.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Vector4D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector4D */ "./src/Math/Vector4D.ts");


// 在3D space裁切的話
// 還要考慮什麼時候要用(x,y,w)裁切
// 什麼時候要用(x,y,z)裁切
// 
// 不如直接在4D space裁切
// https://gpnnotes.blogspot.com/2021/11/blog-post_28.html
// 圖 4D space clip
// 這裡用Directx的NDC
var Ray4D = /** @class */ (function () {
    function Ray4D(from, to) {
        this.from = from;
        this.dir = new _Vector4D__WEBPACK_IMPORTED_MODULE_1__["default"](_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(to.p, from.p), to.w - from.w);
    }
    Ray4D.prototype.t_when_x_equal_w = function () {
        // from.x + t * dir.x= from.w + t * dir.w;
        var t = (this.from.w - this.from.p.x) / (this.dir.p.x - this.dir.w);
        return t;
    };
    Ray4D.prototype.t_when_y_equal_w = function () {
        var t = (this.from.w - this.from.p.y) / (this.dir.p.y - this.dir.w);
        return t;
    };
    Ray4D.prototype.t_when_z_equal_w = function () {
        var t = (this.from.w - this.from.p.z) / (this.dir.p.z - this.dir.w);
        return t;
    };
    Ray4D.prototype.t_when_x_equal_minus_w = function () {
        // from.x + t * dir.x= -(from.w + t * dir.w);
        var t = -(this.from.w + this.from.p.x) / (this.dir.w + this.dir.p.x);
        return t;
    };
    Ray4D.prototype.t_when_y_equal_minus_w = function () {
        var t = -(this.from.w + this.from.p.y) / (this.dir.w + this.dir.p.y);
        return t;
    };
    Ray4D.prototype.t_when_z_equal_zero_w = function () {
        // from.z + t * dir.z= 0;
        var t = -this.from.p.z / this.dir.p.z;
        return t;
    };
    return Ray4D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ray4D);
;


/***/ }),

/***/ "./src/Math/RenderTarget.ts":
/*!**********************************!*\
  !*** ./src/Math/RenderTarget.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var RenderTarget = /** @class */ (function () {
    function RenderTarget(w, h) {
        if (w === void 0) { w = 320; }
        if (h === void 0) { h = 240; }
        this.w = 320;
        this.h = 240;
        this.w = w;
        this.h = h;
        this.backbuffer = new OffscreenCanvas(this.w, this.h);
    }
    RenderTarget.prototype.render_pixel = function (func) {
        var context_2d = this.backbuffer.getContext('2d');
        if (!context_2d) {
            console.log('get context failed');
            return;
        }
        // get source data array
        var backbuffer_data = context_2d.getImageData(0, 0, this.w, this.h);
        var backbuffer_data_array = backbuffer_data.data;
        var ratio = this.w / this.h;
        // set array value
        for (var y = 0; y < this.h; ++y) {
            for (var x = 0; x < this.w; ++x) {
                // rgba each color is 4byte
                var index = 4 * (x + y * this.w);
                // http://www.intro-to-dxr.cwyman.org/presentations/IntroDXR_RaytracingShaders.pdf
                // page 78
                // 需要偏移半個像素的長度，才會落在像素的中間(不過肉眼看不太出差別就是了)
                // remap to 0~1
                var X = ((x + 0.5) / this.w);
                var Y = ((y + 0.5) / this.h);
                // change y direction
                Y = 1 - Y;
                // remap to -1~1
                var x_weight = X * 2 - 1;
                var y_weight = Y * 2 - 1;
                var color = func(x_weight, y_weight, ratio);
                var r = color.x;
                var g = color.y;
                var b = color.z;
                // gamma校正
                var gamma = 1 / 2.1;
                r = Math.pow(r, gamma);
                g = Math.pow(g, gamma);
                b = Math.pow(b, gamma);
                backbuffer_data_array[index++] = Math.round(r * 255);
                backbuffer_data_array[index++] = Math.round(g * 255);
                backbuffer_data_array[index++] = Math.round(b * 255);
                backbuffer_data_array[index] = 255;
            }
        }
        context_2d.putImageData(backbuffer_data, 0, 0);
    };
    RenderTarget.prototype.set_pixel = function (func) {
        var context_2d = this.backbuffer.getContext('2d');
        if (!context_2d) {
            console.log('get context failed');
            return;
        }
        // get source data array
        var backbuffer_data = context_2d.getImageData(0, 0, this.w, this.h);
        var backbuffer_data_array = backbuffer_data.data;
        var ratio = this.w / this.h;
        // set array value
        for (var y = 0; y < this.h; ++y) {
            for (var x = 0; x < this.w; ++x) {
                // rgba each color is 4byte
                var index = 4 * (x + y * this.w);
                var color = func(x, y);
                var r = color.r;
                var g = color.g;
                var b = color.b;
                // 沒去gamma，也不用gamma校正
                // let gamma = 1 / 2.1;
                // r = Math.pow(r, gamma);
                // g = Math.pow(g, gamma);
                // b = Math.pow(b, gamma);
                backbuffer_data_array[index++] = Math.round(r * 255);
                backbuffer_data_array[index++] = Math.round(g * 255);
                backbuffer_data_array[index++] = Math.round(b * 255);
                backbuffer_data_array[index] = 255;
            }
        }
        context_2d.putImageData(backbuffer_data, 0, 0);
    };
    RenderTarget.prototype.show_buffer = function (canvas_id) {
        // 設定buffer的大小和css style的大小一樣
        // https://openhome.cc/Gossip/WebGL/Canvas.html
        var canvas = document.getElementById(canvas_id);
        canvas.style.width = this.w + 'px';
        canvas.style.height = this.h + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        // copy backbuffer to canvas
        var context_bitmap_render = canvas.getContext("bitmaprenderer");
        if (!context_bitmap_render) {
            console.log('get context_bitmap_render failed');
            return;
        }
        context_bitmap_render.transferFromImageBitmap(this.backbuffer.transferToImageBitmap());
    };
    return RenderTarget;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderTarget);


/***/ }),

/***/ "./src/Math/Sampler.ts":
/*!*****************************!*\
  !*** ./src/Math/Sampler.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RGBA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RGBA */ "./src/Math/RGBA.ts");
/* harmony import */ var _Vector2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector2D */ "./src/Math/Vector2D.ts");


var Sampler = /** @class */ (function () {
    function Sampler() {
    }
    Sampler.uv_to_buffer_space = function (uv) {
        return new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](uv.x, 1 - uv.y);
    };
    Sampler.buffer_to_uv_space = function (uv) {
        return new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](uv.x, 1 - uv.y);
    };
    Sampler.texture2D = function (uv, buffer) {
        var w = buffer.w;
        var h = buffer.h;
        var buffer_uv = Sampler.uv_to_buffer_space(uv);
        var u = buffer_uv.x;
        var v = buffer_uv.y;
        //先找出最近點
        var grid_u = 1 / w;
        var grid_v = 1 / h;
        var half_grid_u = grid_u * 0.5;
        var half_grid_v = grid_v * 0.5;
        //以下是有4個鄰點的情況..
        var nearest_point_u_float = u / grid_u;
        var nearest_point_v_float = v / grid_v;
        var nearest_point_u = Math.floor(nearest_point_u_float);
        var nearest_point_v = Math.floor(nearest_point_v_float);
        //alert(nearest_point_u+","+nearest_point_v);
        //在「最近點」格裡的local uv
        var s_u = u % grid_u;
        var s_v = v % grid_v;
        //再找出相鄰3點
        if (s_u >= half_grid_u && s_v >= half_grid_v) //相鄰3點在右下
         {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;
            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;
            var P = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](nearest_point_u, nearest_point_v);
            // 右下
            var NE = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x + 1, P.y);
            var SW = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x, P.y + 1);
            var SE = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x + 1, P.y + 1);
            //在4點內的uv
            var rectUV = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]((s_u - half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV: rectUV, NW: P, NE: NE, SW: SW, SE: SE, color: Sampler.Bilinear_Sampler(rectUV, P, NE, SW, SE, buffer) };
        }
        else if (s_u <= half_grid_u && s_v >= half_grid_v) //相鄰3點在左下
         {
            //剛好整除時要做修正
            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;
            var P = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](nearest_point_u, nearest_point_v);
            // 左下
            var NW = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x - 1, P.y);
            var SW = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x - 1, P.y + 1);
            var SE = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x, P.y + 1);
            //在4點內的uv
            var rectUV = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]((s_u + half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV: rectUV, NW: NW, NE: P, SW: SW, SE: SE, color: Sampler.Bilinear_Sampler(rectUV, NW, P, SW, SE, buffer) };
        }
        else if (s_u <= half_grid_u && s_v <= half_grid_v) //相鄰3點在左上
         {
            var P = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](nearest_point_u, nearest_point_v);
            // 左上
            var NW = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x - 1, P.y - 1);
            var NE = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x, P.y - 1);
            var SW = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x - 1, P.y);
            //在4點內的uv
            var rectUV = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]((s_u + half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV: rectUV, NW: NW, NE: NE, SW: SW, SE: P, color: Sampler.Bilinear_Sampler(rectUV, NW, NE, SW, P, buffer) };
        }
        // else if (s_u >= half_grid_u && s_v <= half_grid_v)//相鄰3點在右上
        else {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;
            var P = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](nearest_point_u, nearest_point_v);
            // 右上
            var NW = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x, P.y - 1);
            var NE = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x + 1, P.y - 1);
            var SE = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"](P.x + 1, P.y);
            //在4點內的uv
            var rectUV = new _Vector2D__WEBPACK_IMPORTED_MODULE_1__["default"]((s_u - half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV: rectUV, NW: NW, NE: NE, SW: P, SE: SE, color: Sampler.Bilinear_Sampler(rectUV, NW, NE, P, SE, buffer) };
        }
    };
    Sampler.Bilinear_Sampler = function (rectUV, NW, NE, SW, SE, buffer) {
        //對4個點顏色作內插
        var NWc = buffer.get_clamp_mode(NW.x, NW.y);
        var NEc = buffer.get_clamp_mode(NE.x, NE.y);
        var SWc = buffer.get_clamp_mode(SW.x, SW.y);
        var SEc = buffer.get_clamp_mode(SE.x, SE.y);
        var nRGB = _RGBA__WEBPACK_IMPORTED_MODULE_0__["default"].lerp(NWc, NEc, rectUV.x);
        var sRGB = _RGBA__WEBPACK_IMPORTED_MODULE_0__["default"].lerp(SWc, SEc, rectUV.x);
        var middleRGB = _RGBA__WEBPACK_IMPORTED_MODULE_0__["default"].lerp(nRGB, sRGB, rectUV.y);
        return middleRGB;
    };
    return Sampler;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sampler);


/***/ }),

/***/ "./src/Math/Texture2D.ts":
/*!*******************************!*\
  !*** ./src/Math/Texture2D.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Buffer2D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buffer2D */ "./src/Math/Buffer2D.ts");
/* harmony import */ var _CanvasHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasHelper */ "./src/Math/CanvasHelper.ts");
/* harmony import */ var _RGBA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RGBA */ "./src/Math/RGBA.ts");
/* harmony import */ var _Sampler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sampler */ "./src/Math/Sampler.ts");




var Texture2D = /** @class */ (function () {
    function Texture2D(src) {
        this.buffer = null;
        this.load_texture_buffer = this.load_texture_buffer.bind(this);
        this.img = new Image();
        this.img.src = src;
        this.img.onload = this.load_texture_buffer;
    }
    Texture2D.prototype.load_texture_buffer = function () {
        var w = this.img.width;
        var h = this.img.height;
        var canvas_texture = _CanvasHelper__WEBPACK_IMPORTED_MODULE_1__["default"].set_canvas('canvas_texture', w, h);
        var ctx = _CanvasHelper__WEBPACK_IMPORTED_MODULE_1__["default"].get_context_by_canvas(canvas_texture);
        if (!ctx) {
            console.log('load_texture_buffer failed');
            return;
        }
        ctx.drawImage(this.img, 0, 0);
        // 改成1次讀完全部
        var data = ctx.getImageData(0, 0, w, h).data;
        this.buffer = new _Buffer2D__WEBPACK_IMPORTED_MODULE_0__["default"](w, h);
        for (var y = 0; y < h; ++y) {
            for (var x = 0; x < w; ++x) {
                var seke = 4 * (w * y + x);
                this.buffer.set(x, y, new _RGBA__WEBPACK_IMPORTED_MODULE_2__["default"](data[seke] / 255, data[seke + 1] / 255, data[seke + 2] / 255, data[seke + 3] / 255));
                // if (y >= 7 && y <= 8 && x >= 7 && x <= 8) {
                //     console.log(data);
                // }
            }
        }
    };
    ;
    Texture2D.prototype.get = function (uv) {
        if (!this.buffer)
            return { rectUV: null, NW: null, NE: null, SW: null, SE: null, color: _RGBA__WEBPACK_IMPORTED_MODULE_2__["default"].black };
        return _Sampler__WEBPACK_IMPORTED_MODULE_3__["default"].texture2D(uv, this.buffer);
    };
    return Texture2D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Texture2D);


/***/ }),

/***/ "./src/Math/Tool.ts":
/*!**************************!*\
  !*** ./src/Math/Tool.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipPlane": () => (/* binding */ ClipPlane),
/* harmony export */   "DrawHelper": () => (/* binding */ DrawHelper),
/* harmony export */   "MathHelper": () => (/* binding */ MathHelper),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "clip": () => (/* binding */ clip),
/* harmony export */   "degree_to_Rad": () => (/* binding */ degree_to_Rad),
/* harmony export */   "epsilon": () => (/* binding */ epsilon),
/* harmony export */   "get_hit_sort_list": () => (/* binding */ get_hit_sort_list),
/* harmony export */   "get_shadow_weight": () => (/* binding */ get_shadow_weight),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "number_equal": () => (/* binding */ number_equal)
/* harmony export */ });
/* harmony import */ var _Ray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ray */ "./src/Math/Ray.ts");
/* harmony import */ var _Ray4D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ray4D */ "./src/Math/Ray4D.ts");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Triangle */ "./src/Math/Triangle.ts");
/* harmony import */ var _Vertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vertex */ "./src/Math/Vertex.ts");
/* harmony import */ var _Vector2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Vector2D */ "./src/Math/Vector2D.ts");





function degree_to_Rad(d) {
    return Math.PI * d / 180;
}
;
var epsilon = 0.001;
function number_equal(a, b) {
    return Math.abs(a - b) < epsilon;
}
function clamp(x, min, max) {
    if (x > max)
        return max;
    else if (x < min)
        return min;
    else
        return x;
}
function get_hit_sort_list(obj_list, ray) {
    var list = obj_list.map(function (obj) { return obj.h.hit(ray, obj.s); });
    var hit_list = (list.filter(function (info) { return info != null && info.positive_t; }));
    return hit_list.sort(function (a, b) { return a.t - b.t; });
}
function get_shadow_weight(hit_info, direction_light_dir, obj_list) {
    // 是否在影子內
    var dir = direction_light_dir.negative();
    var from = hit_info.hit_pos.add(dir.multiply(epsilon)); // 偏移一小段距離，避免射中自己
    var ray = new _Ray__WEBPACK_IMPORTED_MODULE_0__["default"](from, dir);
    var hit_sort_list = get_hit_sort_list(obj_list, ray);
    if (hit_sort_list.length != 0) { // 在影子內
        return 0.45; // 不要太黑
    }
    else
        return 1;
}
function lerp(a, b, t) {
    return a + t * (b - a);
}
var ClipPlane;
(function (ClipPlane) {
    ClipPlane[ClipPlane["Near"] = 0] = "Near";
    ClipPlane[ClipPlane["Far"] = 1] = "Far";
    ClipPlane[ClipPlane["Right"] = 2] = "Right";
    ClipPlane[ClipPlane["Left"] = 3] = "Left";
    ClipPlane[ClipPlane["Top"] = 4] = "Top";
    ClipPlane[ClipPlane["Bottom"] = 5] = "Bottom";
})(ClipPlane || (ClipPlane = {}));
function clip(triangle, v0_out, v1_out, v2_out, plane) {
    var v_clip = [];
    var getCrossPoint = function (v0, v1) {
        var ray = new _Ray4D__WEBPACK_IMPORTED_MODULE_1__["default"](v0.get_Vector4D(), v1.get_Vector4D());
        var t = 0;
        switch (plane) {
            case ClipPlane.Far:
                t = ray.t_when_z_equal_w();
                break;
            case ClipPlane.Near:
                t = ray.t_when_z_equal_zero_w();
                break;
            case ClipPlane.Right:
                t = ray.t_when_x_equal_w();
                break;
            case ClipPlane.Left:
                t = ray.t_when_x_equal_minus_w();
                break;
            case ClipPlane.Top:
                t = ray.t_when_y_equal_w();
                break;
            case ClipPlane.Bottom:
                t = ray.t_when_y_equal_minus_w();
                break;
        }
        return _Vertex__WEBPACK_IMPORTED_MODULE_3__["default"].lerp(v0, v1, t);
    };
    // vo in 
    var clip_first_in = function (v0, v1, v2) {
        // 1 triangle to 1 triangle
        // console.log('one');
        v_clip[0] = new _Triangle__WEBPACK_IMPORTED_MODULE_2__["default"](v0, getCrossPoint(v0, v1), getCrossPoint(v0, v2));
    };
    // vo out
    var clip_first_out = function (v0, v1, v2) {
        // console.log('two');
        // 1 triangle to 2 triangle
        var cross1 = getCrossPoint(v2, v0);
        var cross2 = getCrossPoint(v0, v1);
        v_clip[0] = new _Triangle__WEBPACK_IMPORTED_MODULE_2__["default"](v2, cross1, cross2);
        v_clip[1] = new _Triangle__WEBPACK_IMPORTED_MODULE_2__["default"](v2, cross2, v1);
    };
    // 有8種情況
    if (v0_out(triangle)) //out
     {
        if (v1_out(triangle)) // out out
         {
            if (v2_out(triangle)) // out out out (no clip)
             {
                // console.log('full out');
            }
            else //out out in
                clip_first_in(triangle.v2, triangle.v0, triangle.v1);
        }
        else //out in 
         {
            if (v2_out(triangle)) //out in out
                clip_first_in(triangle.v1, triangle.v2, triangle.v0);
            else // out in in
                clip_first_out(triangle.v0, triangle.v1, triangle.v2);
        }
    }
    else // in
     {
        if (v1_out(triangle)) // in out 
         {
            if (v2_out(triangle)) // in out out
                clip_first_in(triangle.v0, triangle.v1, triangle.v2);
            else // in out in
                clip_first_out(triangle.v1, triangle.v2, triangle.v0);
        }
        else // in in
         {
            if (v2_out(triangle)) // in in out
                clip_first_out(triangle.v2, triangle.v0, triangle.v1);
            else // in in in (no clip)
             {
                v_clip[0] = triangle;
            }
        }
    }
    return v_clip;
}
// 處理浮點數精度問題
// code from http://8st.blogspot.tw/2012/10/jsbug.html
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    // 處理除法精度問題
    // (arg1 * 10^t1) / (arg2 * 10^t2) = (arg1/arg2)*10^(t1-t2)
    // 所以最後要乘上 1/10^(t1-t2) = 10^(t2-t1)
    MathHelper.accDiv = function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split(".")[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    };
    // 處理加法精度問題
    // 相當於先各自>>m後，相加，再<<m
    MathHelper.accAdd = function (arg1, arg2) {
        //code from http://8st.blogspot.tw/2012/10/jsbug.html
        var r1, r2, m, c;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            }
            else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        }
        else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m;
    };
    return MathHelper;
}());

// 以前寫的code
var DrawHelper = /** @class */ (function () {
    function DrawHelper() {
    }
    DrawHelper.drawLine = function (one, two, value, buffer) {
        var now = one;
        var to = two;
        var diff = _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"].minus(to, now);
        var step = 100;
        if (diff.y == 0) //horizon
         {
            for (var i = 1; i < step; i++) {
                //左畫到右
                now.x = now.x + 1;
                if (!buffer.is_legal_index(now.x, now.y))
                    break;
                if (now.x > to.x)
                    break;
                buffer.set(now.x, now.y, value);
            }
            return;
        }
        if (diff.x == 0) //vertical
         {
            for (var i = 1; i < step; i++) {
                //上畫到下
                now.y = now.y + 1;
                if (!buffer.is_legal_index(now.x, now.y))
                    break;
                if (now.y > to.y)
                    break;
                buffer.set(now.x, now.y, value);
            }
            return;
        }
        var ratio = diff.x / diff.y;
        var abs_r = Math.abs(ratio);
        if (ratio > 0) {
            if (abs_r <= 1) {
                for (var i = 1; i < step; i++) {
                    now.y = now.y + 1;
                    now.x = now.x + abs_r;
                    var intX = Math.floor(now.x);
                    if (!buffer.is_legal_index(intX, now.y))
                        break;
                    if (buffer.is_over_positive(now.x, now.y, to.x, to.y))
                        break;
                    buffer.set(intX, now.y, value);
                }
            }
            else if (abs_r > 1) {
                for (var i = 1; i < step; i++) {
                    now.y = now.y + 1 / abs_r;
                    now.x = now.x + 1;
                    var intY = Math.floor(now.y);
                    if (!buffer.is_legal_index(now.x, intY))
                        break;
                    if (buffer.is_over_positive(now.x, now.y, to.x, to.y))
                        break;
                    buffer.set(now.x, intY, value);
                }
            }
        }
        else if (ratio < 0) {
            if (abs_r <= 1) {
                for (var i = 1; i < step; i++) {
                    now.y = now.y + 1;
                    now.x = now.x - abs_r;
                    var intX = Math.floor(now.x);
                    if (!buffer.is_legal_index(intX, now.y))
                        break;
                    if (buffer.is_over_negative(now.x, now.y, to.x, to.y))
                        break;
                    buffer.set(intX, now.y, value);
                }
            }
            else if (abs_r > 1) {
                for (var i = 1; i < step; i++) {
                    now.y = now.y + 1 / abs_r;
                    now.x = now.x - 1;
                    var intY = Math.floor(now.y);
                    if (!buffer.is_legal_index(now.x, intY))
                        break;
                    if (buffer.is_over_negative(now.x, now.y, to.x, to.y))
                        break;
                    buffer.set(now.x, intY, value);
                }
            }
        }
    };
    DrawHelper.drawCircle = function (value, buffer) {
        var it = 50;
        var delta = 2 * Math.PI / it;
        var R = 9;
        var center = new _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"](10, 10);
        var startTheda = -Math.PI / 3;
        //畫圓
        for (var i = 0; i < it; i++) {
            var nowX = Math.floor(center.x + R * Math.cos(startTheda + delta * i));
            var nowY = Math.floor(center.y + R * Math.sin(startTheda + delta * i));
            var nextX = Math.floor(center.x + R * Math.cos(startTheda + delta * (i + 1)));
            var nextY = Math.floor(center.y + R * Math.sin(startTheda + delta * (i + 1)));
            DrawHelper.drawLineWrapper(new _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"](nowX, nowY), new _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"](nextX, nextY), value, buffer);
        }
    };
    DrawHelper.drawStar = function (value, buffer) {
        var it = 5;
        var delta = 2 * Math.PI / it;
        var R = 9;
        var center = new _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"](10, 10);
        var startTheda = -Math.PI / 3;
        //畫星星
        var k = 0;
        for (var i = 0; i < it; i++) {
            var nowX = Math.floor(center.x + R * Math.cos(startTheda + delta * k));
            var nowY = Math.floor(center.y + R * Math.sin(startTheda + delta * k));
            var nextX = Math.floor(center.x + R * Math.cos(startTheda + delta * (k + 2)));
            var nextY = Math.floor(center.y + R * Math.sin(startTheda + delta * (k + 2)));
            DrawHelper.drawLineWrapper(new _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"](nowX, nowY), new _Vector2D__WEBPACK_IMPORTED_MODULE_4__["default"](nextX, nextY), value, buffer);
            k = k + 2;
        }
    };
    DrawHelper.drawLineWrapper = function (t0, t1, value, buffer) {
        //從上往下畫
        if (t0.y < t1.y)
            DrawHelper.drawLine(t0, t1, value, buffer);
        else if (t1.y < t0.y)
            DrawHelper.drawLine(t1, t0, value, buffer);
        else //水平線
         {
            //從左往右畫
            if (t0.x < t1.x)
                DrawHelper.drawLine(t0, t1, value, buffer);
            else if (t1.x < t0.x)
                DrawHelper.drawLine(t1, t0, value, buffer);
        }
    };
    return DrawHelper;
}());



/***/ }),

/***/ "./src/Math/Transform.ts":
/*!*******************************!*\
  !*** ./src/Math/Transform.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");


var Transform = /** @class */ (function () {
    function Transform(xAxis, yAxis, zAxis, position) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.zAxis = zAxis;
        this.position = position;
    }
    Transform.transformPoint = function (transform, point) {
        var vectorX = transform.xAxis.multiply(point.x);
        var vectorY = transform.yAxis.multiply(point.y);
        var vectorZ = transform.zAxis.multiply(point.z);
        return transform.position.add(vectorX).add(vectorY).add(vectorZ);
    };
    Transform.transformVector = function (transform, vertex) {
        var vectorX = transform.xAxis.multiply(vertex.x);
        var vectorY = transform.yAxis.multiply(vertex.y);
        var vectorZ = transform.zAxis.multiply(vertex.z);
        return vectorX.add(vectorY).add(vectorZ);
    };
    Transform.transformTransform = function (transform, inputTransform) {
        return new Transform(Transform.transformVector(transform, inputTransform.xAxis), Transform.transformVector(transform, inputTransform.yAxis), Transform.transformVector(transform, inputTransform.zAxis), Transform.transformPoint(transform, inputTransform.position));
    };
    Transform.rotateByZ = function (degree) {
        var radian = (0,_Tool__WEBPACK_IMPORTED_MODULE_1__.degree_to_Rad)(degree);
        var c = Math.cos(radian), s = Math.sin(radian);
        var xAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](c, s, 0);
        var yAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](-s, c, 0);
        var zAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 1);
        return new Transform(xAxis, yAxis, zAxis, _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].zero);
    };
    Transform.rotateByY = function (degree) {
        var radian = (0,_Tool__WEBPACK_IMPORTED_MODULE_1__.degree_to_Rad)(degree);
        var c = Math.cos(radian), s = Math.sin(radian);
        var zAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](s, 0, c);
        var xAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](c, 0, -s);
        var yAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1, 0);
        return new Transform(xAxis, yAxis, zAxis, _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].zero);
    };
    Transform.rotateByX = function (degree) {
        var radian = (0,_Tool__WEBPACK_IMPORTED_MODULE_1__.degree_to_Rad)(degree);
        var c = Math.cos(radian), s = Math.sin(radian);
        var xAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0, 0);
        var yAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, c, s);
        var zAxis = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, -s, c);
        return new Transform(xAxis, yAxis, zAxis, new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 0));
    };
    Transform.offset = function (x, y, z) {
        return new Transform(new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](1, 0, 0), new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 1, 0), new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, 1), new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, z));
    };
    return Transform;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transform);


/***/ }),

/***/ "./src/Math/Triangle.ts":
/*!******************************!*\
  !*** ./src/Math/Triangle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plane */ "./src/Math/Plane.ts");
/* harmony import */ var _Ray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ray */ "./src/Math/Ray.ts");
/* harmony import */ var _Rasterizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rasterizer */ "./src/Math/Rasterizer.ts");
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");





var Triangle = /** @class */ (function () {
    function Triangle(pv0, pv1, pv2) {
        this.v0 = pv0;
        this.v1 = pv1;
        this.v2 = pv2;
        this.v_s = null;
    }
    // 這些點z都是0
    Triangle.calculate_α_β_γ = function (s0, s1, s2, P) {
        var diff = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(P, s0);
        // 求ray(P,S0-S2)和ray(S0,S1-S2)的交點
        // 等同於求ray(P,S0-S2)和平面的交點
        var dir01 = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(s1, s0);
        var dir02 = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(s2, s0);
        var n = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"](-dir01.y, dir01.x, 0);
        var ray = new _Ray__WEBPACK_IMPORTED_MODULE_2__["default"](P, dir02.multiply(-1));
        var result = _Plane__WEBPACK_IMPORTED_MODULE_1__["default"].hit(ray, new _Plane__WEBPACK_IMPORTED_MODULE_1__["default"](s0, n));
        if (!result) { // 退化成直線的三角形才有也可能
            // console.log('平行', s0, s1, s2, P);
            // 不處理
            return { success: false, α: 1, β: 0, γ: 0 };
        }
        var p_on_dir01 = result.hit_pos;
        var vector_α = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(p_on_dir01, s0);
        var vector_β = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].minus(diff, vector_α);
        // 擋掉dir01、dir02是y軸平行的情況
        // 浮點數請用 number_equal，不然會GG
        // 見圖：bug/float_point_compaire_error(fixed)/bug_when_clipping_2.jpg
        var α = (0,_Tool__WEBPACK_IMPORTED_MODULE_4__.number_equal)(dir01.x, 0) ? vector_α.y / dir01.y : vector_α.x / dir01.x;
        var β = (0,_Tool__WEBPACK_IMPORTED_MODULE_4__.number_equal)(dir02.x, 0) ? vector_β.y / dir02.y : vector_β.x / dir02.x;
        var γ = 1 - α - β;
        return { success: true, α: α, β: β, γ: γ };
    };
    Triangle.is_in_triangle = function (α, β, γ) {
        return (α >= 0 && β >= 0 && γ >= 0);
    };
    // 因為calculate_α_β_γ實作的方式，所以順序是γ、α、β 😝
    Triangle.interpolation = function (γ, α, β, v0, v1, v2) {
        return v0 * γ + v1 * α + v2 * β;
    };
    Triangle.prototype.rasterize = function (pcamera, worldTransform, texture) {
        this.v_s = _Rasterizer__WEBPACK_IMPORTED_MODULE_3__["default"].process(this, pcamera, worldTransform, texture);
    };
    Triangle.prototype.draw = function (ctx) {
        if (this.v_s == null)
            return;
        var tCount = this.v_s.length / 3;
        for (var c = 1; c <= tCount; ++c) {
            var index = 3 * c - 1;
            ctx.moveTo(this.v_s[index].x, this.v_s[index].y);
            ctx.lineTo(this.v_s[index - 2].x, this.v_s[index - 2].y);
            ctx.lineTo(this.v_s[index - 1].x, this.v_s[index - 1].y);
            ctx.lineTo(this.v_s[index].x, this.v_s[index].y);
        }
    };
    return Triangle;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Triangle);


/***/ }),

/***/ "./src/Math/Vector.ts":
/*!****************************!*\
  !*** ./src/Math/Vector.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");

var Vector = /** @class */ (function () {
    function Vector(px, py, pz) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.x = px;
        this.y = py;
        this.z = pz;
    }
    Vector.min_max = function (v0, v1, v2) {
        var min = new Vector(Math.min(Math.min(v0.x, v1.x), v2.x), Math.min(Math.min(v0.y, v1.y), v2.y), Math.min(Math.min(v0.z, v1.z), v2.z));
        var max = new Vector(Math.max(Math.max(v0.x, v1.x), v2.x), Math.max(Math.max(v0.y, v1.y), v2.y), Math.max(Math.max(v0.z, v1.z), v2.z));
        return { min: min, max: max };
    };
    Vector.calculate_normal = function (v0, v1, v2) {
        var v01 = Vector.minus(v1, v0);
        var v02 = Vector.minus(v2, v0);
        var normal = Vector.cross(v01, v02);
        return normal.normalize();
    };
    Vector.calculate_center = function (v0, v1, v2) {
        return v0.add(v1).add(v2).multiply(1 / 3);
    };
    Vector.uv = function (u, v) {
        return new Vector(u, v, 0);
    };
    Vector.reflect = function (I, N) {
        var L = -2 * Vector.dot(I, N);
        return N.multiply(L).add(I);
    };
    Vector.add = function (A, B) {
        var temp = new Vector(B.x + A.x, B.y + A.y, B.z + A.z);
        return temp;
    };
    Vector.minus = function (A, B) {
        var temp = new Vector(A.x - B.x, A.y - B.y, A.z - B.z);
        return temp;
    };
    Vector.multiply = function (A, s) {
        var temp = new Vector(A.x * s, A.y * s, A.z * s);
        return temp;
    };
    Vector.multiply3 = function (A, B) {
        return new Vector(A.x * B.x, A.y * B.y, A.z * B.z);
    };
    Vector.cross = function (A, B) {
        var temp = new Vector(A.y * B.z - A.z * B.y, -A.x * B.z + A.z * B.x, A.x * B.y - A.y * B.x);
        return temp;
    };
    Vector.dot = function (A, B) {
        return A.x * B.x + A.y * B.y + A.z * B.z;
    };
    Vector.equal = function (A, B) {
        return (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.number_equal)(A.x, B.x) && (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.number_equal)(A.y, B.y) && (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.number_equal)(A.z, B.z);
    };
    Vector.lerp = function (A, B, t) {
        return new Vector((0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(A.x, B.x, t), (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(A.y, B.y, t), (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(A.z, B.z, t));
    };
    Vector.prototype.clamp_x = function (min, max) {
        this.x = (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.x, min, max);
        return this;
    };
    Vector.prototype.clamp_y = function (min, max) {
        this.y = (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.clamp)(this.y, min, max);
        return this;
    };
    Vector.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    };
    Vector.prototype.normalize = function () {
        var temp = this.length();
        this.x = this.x / temp;
        this.y = this.y / temp;
        this.z = this.z / temp;
        return this;
    };
    Vector.prototype.add = function (A) {
        return Vector.add(this, A);
    };
    Vector.prototype.minus = function (A) {
        return Vector.minus(this, A);
    };
    Vector.prototype.multiply = function (s) {
        return Vector.multiply(this, s);
    };
    Vector.prototype.negative = function () {
        return Vector.multiply(this, -1);
    };
    Vector.prototype.Vector2D = function () {
        this.z = 0;
        return this;
    };
    Vector.prototype.clone = function () {
        return new Vector(this.x, this.y, this.z);
    };
    Vector.up = new Vector(0, 1, 0);
    Vector.zero = new Vector(0, 0, 0);
    return Vector;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector);


/***/ }),

/***/ "./src/Math/Vector2D.ts":
/*!******************************!*\
  !*** ./src/Math/Vector2D.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Vector2D = /** @class */ (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.add = function (A, B) {
        var temp = new Vector2D(B.x + A.x, B.y + A.y);
        return temp;
    };
    Vector2D.minus = function (A, B) {
        var temp = new Vector2D(A.x - B.x, A.y - B.y);
        return temp;
    };
    Vector2D.prototype.plus = function (p) {
        return new Vector2D(this.x + p.x, this.y + p.y);
    };
    Vector2D.prototype.multiply = function (s) {
        return new Vector2D(this.x * s, this.y * s);
    };
    Vector2D.prototype.toString = function () {
        return "( " + this.x + " , " + this.y + " )";
    };
    return Vector2D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector2D);


/***/ }),

/***/ "./src/Math/Vector4D.ts":
/*!******************************!*\
  !*** ./src/Math/Vector4D.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Vector4D = /** @class */ (function () {
    function Vector4D(p, w) {
        this.p = p;
        this.w = w;
    }
    return Vector4D;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector4D);
;


/***/ }),

/***/ "./src/Math/Vertex.ts":
/*!****************************!*\
  !*** ./src/Math/Vertex.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool */ "./src/Math/Tool.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Vector4D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vector4D */ "./src/Math/Vector4D.ts");



var Vertex = /** @class */ (function () {
    function Vertex(p, n, w, u, v) {
        this.p = p;
        this.n = n;
        this.w = w;
        this.u = u;
        this.v = v;
    }
    Vertex.build_vertex = function (p, n, w, u, v) {
        var vertex = new Vertex(p, n, w, u, v);
        return vertex;
    };
    Vertex.lerp = function (v0, v1, t) {
        var p = _Vector__WEBPACK_IMPORTED_MODULE_1__["default"].lerp(v0.p, v1.p, t);
        var n = _Vector__WEBPACK_IMPORTED_MODULE_1__["default"].lerp(v0.n, v1.n, t);
        var w = (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(v0.w, v1.w, t);
        var u = (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(v0.u, v1.u, t);
        var v = (0,_Tool__WEBPACK_IMPORTED_MODULE_0__.lerp)(v0.v, v1.v, t);
        return new Vertex(p, n, w, u, v);
    };
    Vertex.prototype.clone = function () {
        return new Vertex(this.p.clone(), this.n.clone(), this.w, this.u, this.v);
    };
    Vertex.prototype.update_p = function (p) {
        this.p = p;
        return this;
    };
    Vertex.prototype.update_w = function (w) {
        this.w = w;
        return this;
    };
    Vertex.prototype.get_Vector4D = function () {
        return new _Vector4D__WEBPACK_IMPORTED_MODULE_2__["default"](this.p, this.w);
    };
    return Vertex;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vertex);


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
/*!******************************!*\
  !*** ./src/RasterizerApp.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Math_Box3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Math/Box3D */ "./src/Math/Box3D.ts");
/* harmony import */ var _Math_Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Math/Camera */ "./src/Math/Camera.ts");
/* harmony import */ var _Math_Transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Math/Transform */ "./src/Math/Transform.ts");
/* harmony import */ var _Math_Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Math/Vector */ "./src/Math/Vector.ts");
/* harmony import */ var _Math_RenderTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Math/RenderTarget */ "./src/Math/RenderTarget.ts");
/* harmony import */ var _Math_Buffer2D__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Math/Buffer2D */ "./src/Math/Buffer2D.ts");
/* harmony import */ var _Math_RGBA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Math/RGBA */ "./src/Math/RGBA.ts");
/* harmony import */ var _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Math/Rasterizer */ "./src/Math/Rasterizer.ts");
/* harmony import */ var _Math_CanvasHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Math/CanvasHelper */ "./src/Math/CanvasHelper.ts");
/* harmony import */ var _Math_Texture2D__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Math/Texture2D */ "./src/Math/Texture2D.ts");
/* harmony import */ var _Math_Vector2D__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Math/Vector2D */ "./src/Math/Vector2D.ts");
/* harmony import */ var _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Math/HHelper */ "./src/Math/HHelper.ts");












var RasterizerApp = /** @class */ (function () {
    function RasterizerApp() {
        var _this = this;
        this.cameraIndex_view = 1;
        this.cameraIndex_control = 0;
        this.thandle = 0;
        this.screenWidth = 512;
        this.screenHeight = 512;
        this.skip_diff = false;
        this.pre_t = 0;
        this.sum_t = 0;
        this.peek_screen_pos = new _Math_Vector2D__WEBPACK_IMPORTED_MODULE_10__["default"](45, 60);
        _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].color_buffer = new _Math_Buffer2D__WEBPACK_IMPORTED_MODULE_5__["default"](this.screenWidth, this.screenHeight);
        _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].z_buffer = new _Math_Buffer2D__WEBPACK_IMPORTED_MODULE_5__["default"](this.screenWidth, this.screenHeight);
        this.render_target = new _Math_RenderTarget__WEBPACK_IMPORTED_MODULE_4__["default"](this.screenWidth, this.screenHeight);
        // 不能對同1個canvas取不同的context
        this.ctx = _Math_CanvasHelper__WEBPACK_IMPORTED_MODULE_8__["default"].set_canvas('canvas_line', this.screenWidth, this.screenHeight).getContext('2d');
        _Math_CanvasHelper__WEBPACK_IMPORTED_MODULE_8__["default"].set_canvas('canvas', this.screenWidth, this.screenHeight);
        this.box = new _Math_Box3D__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.camera = new _Math_Camera__WEBPACK_IMPORTED_MODULE_1__["default"](new _Math_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](0, 50, -200), new _Math_Vector__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0), 60, this.screenWidth, this.screenHeight, 5, 500);
        // this.texture = new Texture2D('texture/Collage 2021-11-13 14_17_54.jpg');
        this.texture = new _Math_Texture2D__WEBPACK_IMPORTED_MODULE_9__["default"]('texture/thin_is_good_512x512.jpg');
        window.onload = function () {
            _this.start();
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('btn_timeout').onclick = function () {
                _this.stop();
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('btn_resume').onclick = function () {
                _this.resume();
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('btn_toggle_drawing_mode').onclick = function () {
                _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].use_solid_color = !_Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].use_solid_color;
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('btn_toggle_ndc_clamp_effect').onclick = function () {
                _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].ndc_clamp_effect = !_Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].ndc_clamp_effect;
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('btn_set_peek_position').onclick = function () {
                var x = Number(_Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('text_s_x').value);
                var y = Number(_Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('text_s_y').value);
                _this.peek_screen_pos.x = x;
                _this.peek_screen_pos.y = y;
                _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].set_peek_screen_pos(_this.peek_screen_pos);
                console.log(x, y);
            };
            _Math_HHelper__WEBPACK_IMPORTED_MODULE_11__["default"].$('btn_print_peek_position').onclick = function () {
                _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].print_peek_position();
            };
        };
        document.onkeydown = this.key_down.bind(this);
        document.onkeyup = this.key_up.bind(this);
        this.drawScene = this.drawScene.bind(this);
        _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].set_peek_screen_pos(this.peek_screen_pos);
    }
    RasterizerApp.prototype.start = function () {
        this.sum_t = 0;
        this.pre_t = 0;
        this.thandle = window.requestAnimationFrame(this.drawScene);
    };
    RasterizerApp.prototype.resume = function () {
        if (this.thandle)
            return;
        this.skip_diff = true;
        this.thandle = window.requestAnimationFrame(this.drawScene);
    };
    RasterizerApp.prototype.stop = function () {
        window.cancelAnimationFrame(this.thandle);
        this.thandle = 0;
    };
    RasterizerApp.prototype.drawScene = function (accumulatedTime) {
        var diff = accumulatedTime - this.pre_t;
        if (this.skip_diff) {
            this.skip_diff = false;
            diff = 0;
        }
        this.pre_t = accumulatedTime;
        this.sum_t += diff;
        document.title = this.sum_t.toString() + "," + accumulatedTime.toString();
        // 使用者輸入
        this.process_input(diff);
        // 清空
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
            this.ctx.beginPath();
            this.ctx.fillStyle = "rgba(180,30,15,0.1)";
            this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
            // 畫peek pos
            this.ctx.fillStyle = "rgba(255,255,0,1)";
            this.ctx.fillRect(this.peek_screen_pos.x, this.peek_screen_pos.y, 1, 10);
            this.ctx.fillRect(this.peek_screen_pos.x, this.peek_screen_pos.y, 10, 1);
        }
        _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].clear(_Math_RGBA__WEBPACK_IMPORTED_MODULE_6__["default"].black, 1);
        // 移動立方體
        var offsetMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].offset(0, 0, 0);
        var nowDegree = this.sum_t / 1000 * 15 % 360;
        var rotateMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].rotateByY(nowDegree);
        var combineMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].transformTransform(offsetMatrix, rotateMatrix);
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        if (this.ctx)
            this.box.draw_line(this.ctx);
        offsetMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].offset(0, 0, 150);
        rotateMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].rotateByY(nowDegree);
        combineMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].transformTransform(rotateMatrix, offsetMatrix);
        // 畫立方體
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        if (this.ctx)
            this.box.draw_line(this.ctx);
        // 顯示到render target
        _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].show(this.render_target);
        this.thandle = window.requestAnimationFrame(this.drawScene);
    };
    RasterizerApp.prototype.process_input = function (delta_time) {
        if (!this.keybord_event)
            return;
        var KepMap = {
            w: 87,
            r: 82,
            e: 69,
            d: 68,
            s: 83,
            f: 70,
            a_up: 38,
            a_down: 40,
            a_left: 37,
            a_right: 39
        };
        var moveS = 50 * delta_time / 1000;
        var rotateS = 0.1 * delta_time / 1000;
        switch (this.keybord_event.keyCode) {
            case KepMap.w:
                this.camera.moveEye(moveS, this.camera.z_axis);
                break;
            case KepMap.r:
                this.camera.moveEye(-moveS, this.camera.z_axis);
                break;
            case KepMap.e:
                this.camera.moveEye(moveS, this.camera.y_axis);
                break;
            case KepMap.d:
                this.camera.moveEye(-moveS, this.camera.y_axis);
                break;
            case KepMap.s:
                this.camera.moveEye(-moveS, this.camera.x_axis);
                break;
            case KepMap.f:
                this.camera.moveEye(moveS, this.camera.x_axis);
                break;
            case KepMap.a_up:
                this.camera.addPitch(rotateS);
                break;
            case KepMap.a_down:
                this.camera.addPitch(-rotateS);
                break;
            case KepMap.a_left:
                this.camera.addYaw(-rotateS);
                break;
            case KepMap.a_right:
                this.camera.addYaw(rotateS);
                break;
        }
    };
    RasterizerApp.prototype.key_down = function (event) {
        this.keybord_event = event;
    };
    RasterizerApp.prototype.key_up = function (event) {
        this.keybord_event = undefined;
    };
    return RasterizerApp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RasterizerApp);
new RasterizerApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxDQUFDLENBQUMsRUFDOUMsVUFBQyxDQUFXLElBQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlDLGtEQUFlLENBQUMsQ0FBQztRQUVyQixPQUFPO1FBQ1AsUUFBUSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUN0QyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxpREFBYyxDQUFDLENBQUM7UUFFcEIsTUFBTTtRQUNOLFFBQVEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFDdEMsVUFBQyxDQUFXLElBQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlDLFVBQUMsQ0FBVyxJQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM5QyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFD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LENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZJLE9BQU8sRUFBRSxHQUFHLE9BQUUsR0FBRyxPQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVNLHVCQUFnQixHQUF2QixVQUF3QixFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDdEQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsT0FBTyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLHVCQUFnQixHQUF2QixVQUF3QixFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDdEQsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxTQUFFLEdBQVQsVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUMxQixPQUFPLElBQUksTUFBTSxD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SUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssTUFBTSxDQUFDLE9BQU87Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBb0I7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFvQjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDOztBQUVELElBQUksYUFBYSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGVyYWlscy9EaWZmdXNlLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9Cb3gzRC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvQnVmZmVyMkQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL0NhbWVyYS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvQ2FudmFzSGVscGVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9ISGVscGVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9QbGFuZS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUkdCQS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUmFzdGVyaXplci50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUmF5LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9SYXk0RC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUmVuZGVyVGFyZ2V0LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9TYW1wbGVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9UZXh0dXJlMkQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1Rvb2wudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVmVjdG9yMkQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1ZlY3RvcjRELnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9WZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvUmFzdGVyaXplckFwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmVjdG9yIGZyb20gXCIuLi9NYXRoL1ZlY3RvclwiO1xyXG5pbXBvcnQgSGl0SW5mbyBmcm9tIFwiLi4vTWF0aC9IaXRJbmZvXCI7XHJcbmltcG9ydCB7IGNsYW1wLCBnZXRfc2hhZG93X3dlaWdodCB9IGZyb20gXCIuLi9NYXRoL1Rvb2xcIjtcclxuaW1wb3J0IFNoYWRlciBmcm9tIFwiLi9TaGFkZXJcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi4vT2JqZWN0L1NjZW5lTm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZnVzZSBpbXBsZW1lbnRzIFNoYWRlciB7XHJcbiAgICBzdGF0aWMgeWVsbG93ID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigxLCAxLCAwKSk7XHJcbiAgICBzdGF0aWMgcmVkID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigxLCAwLCAwKSk7XHJcbiAgICBzdGF0aWMgZ3JlZW4gPSBuZXcgRGlmZnVzZShuZXcgVmVjdG9yKDAsIDEsIDApKTtcclxuICAgIHN0YXRpYyBibHVlID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigwLCAwLCAxKSk7XHJcbiAgICBzdGF0aWMgZ3JheSA9IG5ldyBEaWZmdXNlKG5ldyBWZWN0b3IoMC41LCAwLjUsIDAuNSkpO1xyXG4gICAgc3RhdGljIHdoaXRlID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigxLCAxLCAxKSk7XHJcblxyXG4gICAgY29sb3I6IFZlY3RvcjtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yOiBWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgc2hhZGluZyhoaXRfaW5mbzogSGl0SW5mbywgZGlyZWN0aW9uX2xpZ2h0X2RpcjogVmVjdG9yLCBvYmpfbGlzdDogU2NlbmVOb2RlW10sIGRlcHRoOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbiA9IGhpdF9pbmZvLm5vcm1hbDtcclxuICAgICAgICBsZXQgc3RyZW5ndGggPSBjbGFtcCgtVmVjdG9yLmRvdChkaXJlY3Rpb25fbGlnaHRfZGlyLCBuKSwgMCwgMSk7XHJcblxyXG4gICAgICAgIGxldCBzaGFkb3dfd2VpZ2h0ID0gZ2V0X3NoYWRvd193ZWlnaHQoaGl0X2luZm8sIGRpcmVjdGlvbl9saWdodF9kaXIsIG9ial9saXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvci5tdWx0aXBseShzdHJlbmd0aCkubXVsdGlwbHkoc2hhZG93X3dlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVydGV4IGZyb20gJy4vVmVydGV4J1xyXG5pbXBvcnQgVHJpYW5nbGUgZnJvbSAnLi9UcmlhbmdsZSc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InO1xyXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcclxuaW1wb3J0IHsgY2xpcCB9IGZyb20gJy4vVG9vbCc7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEnO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gJy4vVGV4dHVyZTJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCB7XHJcbiAgICB0cmlhbmdsZXM6IFRyaWFuZ2xlW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDlu7rnq4vmraPmlrnpq5TpoILpu57os4fmlplcclxuICAgICAgICB0aGlzLnRyaWFuZ2xlcyA9IFtdO1xyXG4gICAgICAgIC8v6aCG5pmC6YedXHJcbiAgICAgICAgbGV0IG4gPSBuZXcgVmVjdG9yKDAsIDAsIC0xKTtcclxuICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgVHJpYW5nbGUoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4KG5ldyBWZWN0b3IoLTEwLCAtMTAsIC0xMCksIG4sIDEsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgVmVjdG9yKDEwLCAxMCwgLTEwKSwgbiwgMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4KG5ldyBWZWN0b3IoMTAsIC0xMCwgLTEwKSwgbiwgMSwgMSwgMClcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgdGhpcy50cmlhbmdsZXMucHVzaChcclxuICAgICAgICAgICAgbmV3IFRyaWFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgVmVjdG9yKC0xMCwgLTEwLCAtMTApLCBuLCAxLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IFZlY3RvcigtMTAsIDEwLCAtMTApLCBuLCAxLCAwLCAxKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IFZlY3RvcigxMCwgMTAsIC0xMCksIG4sIDEsIDEsIDEpXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICBsZXQgbSA9IFtUcmFuc2Zvcm0ucm90YXRlQnlZKDkwKSwgVHJhbnNmb3JtLnJvdGF0ZUJ5WSgxODApLCBUcmFuc2Zvcm0ucm90YXRlQnlZKDI3MCksIFRyYW5zZm9ybS5yb3RhdGVCeVgoOTApLCBUcmFuc2Zvcm0ucm90YXRlQnlYKC05MCldXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGVNYXRyaXggPSBtW2ldO1xyXG4gICAgICAgICAgICBsZXQgbjIgPSBUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQocm90YXRlTWF0cml4LCBuKTtcclxuICAgICAgICAgICAgdGhpcy50cmlhbmdsZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBUcmlhbmdsZShcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoLSAxMCwgLTEwLCAtMTApKSwgbjIsIDEsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigxMCwgMTAsIC0xMCkpLCBuMiwgMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4LmJ1aWxkX3ZlcnRleChUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQocm90YXRlTWF0cml4LCBuZXcgVmVjdG9yKDEwLCAtMTAsIC0xMCkpLCBuMiwgMSwgMSwgMClcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IFRyaWFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigtMTAsIC0xMCwgLTEwKSksIG4yLCAxLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoLTEwLCAxMCwgLTEwKSksIG4yLCAxLCAwLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoMTAsIDEwLCAtMTApKSwgbjIsIDEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFzdGVyaXplKGNhbWVyYTogQ2FtZXJhLCB3b3JsZFRyYW5zZm9ybTogVHJhbnNmb3JtLCB0ZXh0dXJlOiBUZXh0dXJlMkQpIHtcclxuXHJcbiAgICAgICAgLy8g6JmV55CG5q2j5pa56auU55qE6K6K5o+bXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWFuZ2xlc1tpXS5yYXN0ZXJpemUoY2FtZXJhLCB3b3JsZFRyYW5zZm9ybSwgdGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdfbGluZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIC8vIOeVq+S4ieinkuW9olxyXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwwLDAsMSknO1xyXG5cclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpYW5nbGVzW2ldLmRyYXcoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9Ub29sXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWZmZXIyRDxUPiB7XHJcbiAgICB3OiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcbiAgICBidWZmZXI6IEFycmF5PEFycmF5PFQ+PjtcclxuICAgIGNvbnN0cnVjdG9yKHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5PEFycmF5PFQ+Pih0aGlzLmgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHcsIGgpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oOyArK3kpIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJbeV0gPSBuZXcgQXJyYXk8VD4odGhpcy53KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX2xlZ2FsX2luZGV4KHgsIHkpKVxyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt5XVt4XSA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0JywgdGhpcy53LCB0aGlzLmgsIHgsIHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gUkdCQS5kZWJ1ZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzX2xlZ2FsX2luZGV4KHgsIHkpKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWZmZXJbeV1beF07XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQnLCB0aGlzLncsIHRoaXMuaCwgeCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiBSR0JBLmRlYnVnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcih2YWx1ZTogVCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnc7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbeV1beF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDotoXpgY7pgornlYzlsLHkvb/nlKjpgornlYzlgLxcclxuICAgIGdldF9jbGFtcF9tb2RlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG54ID0gY2xhbXAoeCwgMCwgdGhpcy53IC0gMSk7XHJcbiAgICAgICAgbGV0IG55ID0gY2xhbXAoeSwgMCwgdGhpcy5oIC0gMSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcltueV1bbnhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzX2xlZ2FsX2luZGV4KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53ICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc19vdmVyX25lZ2F0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh5ID4gZW5kWSB8fCB4IDwgZW5kWClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNfb3Zlcl9wb3NpdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoeSA+IGVuZFkgfHwgeCA+IGVuZFgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IFJheSBmcm9tIFwiLi9SYXlcIjtcclxuaW1wb3J0IHsgZGVncmVlX3RvX1JhZCwgZ2V0X2hpdF9zb3J0X2xpc3QgfSBmcm9tIFwiLi9Ub29sXCJcclxuaW1wb3J0IFJlbmRlclRhcmdldCBmcm9tIFwiLi9SZW5kZXJUYXJnZXRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi4vT2JqZWN0L1NjZW5lTm9kZVwiO1xyXG5pbXBvcnQgRGlmZnVzZSBmcm9tIFwiLi4vTWF0ZXJhaWxzL0RpZmZ1c2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xyXG4gICAgZXllOiBWZWN0b3I7XHJcblxyXG4gICAgeF9heGlzOiBWZWN0b3I7XHJcbiAgICB5X2F4aXM6IFZlY3RvcjtcclxuICAgIHpfYXhpczogVmVjdG9yO1xyXG5cclxuICAgIHJhdGlvOiBudW1iZXI7XHJcblxyXG4gICAgc2NyZWVuVzogbnVtYmVyO1xyXG4gICAgc2NyZWVuSDogbnVtYmVyO1xyXG5cclxuICAgIHNjcmVlbkNlbnRlclg6IG51bWJlcjtcclxuICAgIHNjcmVlbkNlbnRlclk6IG51bWJlcjtcclxuICAgIGhhbGZXOiBudW1iZXI7XHJcbiAgICBoYWxmSDogbnVtYmVyO1xyXG5cclxuICAgIC8vIOimlumMkOeahCDov5HlubPpnaLlkozpgaDlubPpnaJcclxuICAgIC8vIGHjgIFi5ZKM5oqV5b2x55+p6Zmj5pyJ6ZecXHJcbiAgICBOOiBudW1iZXI7XHJcbiAgICBGOiBudW1iZXI7XHJcbiAgICBhOiBudW1iZXI7XHJcbiAgICBiOiBudW1iZXI7XHJcblxyXG4gICAgZm92X2RlZ3JlZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoZXllOiBWZWN0b3IsIGxvb2tfYXQ6IFZlY3RvciwgZm92X2RlZ3JlZTogbnVtYmVyLCBzY3JlZW5XOiBudW1iZXIsIHNjcmVlbkg6IG51bWJlciwgTjogbnVtYmVyLCBGOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yYXRpbyA9IHNjcmVlblcgLyBzY3JlZW5IO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuVyA9IHNjcmVlblc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5IID0gc2NyZWVuSDtcclxuICAgICAgICB0aGlzLnNjcmVlbkNlbnRlclggPSB0aGlzLnNjcmVlblcgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5DZW50ZXJZID0gdGhpcy5zY3JlZW5IICogMC41O1xyXG4gICAgICAgIHRoaXMuaGFsZlcgPSB0aGlzLnNjcmVlblcgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5oYWxmSCA9IHRoaXMuc2NyZWVuSCAqIDAuNTtcclxuXHJcbiAgICAgICAgLy8gY2FtZXJhIDPou7hcclxuICAgICAgICB0aGlzLnpfYXhpcyA9IFZlY3Rvci5taW51cyhsb29rX2F0LCBleWUpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAvLyDlt6bmiYtcclxuICAgICAgICBsZXQgaGVscF92ID0gVmVjdG9yLnVwO1xyXG4gICAgICAgIHRoaXMueF9heGlzID0gVmVjdG9yLmNyb3NzKGhlbHBfdiwgdGhpcy56X2F4aXMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMueV9heGlzID0gVmVjdG9yLmNyb3NzKHRoaXMuel9heGlzLCB0aGlzLnhfYXhpcyk7XHJcblxyXG4gICAgICAgIC8vIGNhbWVyYSDljp/pu55cclxuICAgICAgICB0aGlzLmV5ZSA9IGV5ZTtcclxuXHJcbiAgICAgICAgLy8gY2FtZXJhIGZvdlxyXG4gICAgICAgIHRoaXMuZm92X2RlZ3JlZSA9IGZvdl9kZWdyZWU7XHJcblxyXG4gICAgICAgIC8vIOimlumMkOeahCDov5HlubPpnaLlkozpgaDlubPpnaJcclxuICAgICAgICB0aGlzLk4gPSBOO1xyXG4gICAgICAgIHRoaXMuRiA9IEY7XHJcblxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI3Lmh0bWxcclxuICAgICAgICAvLyDmipXlvbHnn6npmaPlsI1655qE5L+u5q2j77yM6YCZ6KOh5L2/55So5bem5omLXHJcbiAgICAgICAgdGhpcy5hID0gRiAvIChGIC0gTik7XHJcbiAgICAgICAgdGhpcy5iID0gLU4gKiBGIC8gKEYgLSBOKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hLCB0aGlzLmIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVFeWUoczogbnVtYmVyLCBBOiBWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmV5ZSA9IFZlY3Rvci5hZGQodGhpcy5leWUsIEEubXVsdGlwbHkocykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBpdGNoKGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzog5LmY5LiKbG9jYWwgbWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgYWRkWWF3KGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzog5LmY5LiKbG9jYWwgbWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX3JheV9kaXIoeF93ZWlnaHQ6IG51bWJlciwgeV93ZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcikge1xyXG4gICAgICAgIGxldCBoYWxmX2Zvdl9yYWQgPSBkZWdyZWVfdG9fUmFkKDAuNSAqIHRoaXMuZm92X2RlZ3JlZSk7XHJcbiAgICAgICAgbGV0IHRhbl9oID0gTWF0aC50YW4oaGFsZl9mb3ZfcmFkKTtcclxuICAgICAgICBsZXQgdGFuX3cgPSB0YW5faCAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgZGlyID0gdGhpcy56X2F4aXNcclxuICAgICAgICAgICAgLmFkZCh0aGlzLnhfYXhpcy5tdWx0aXBseSh4X3dlaWdodCAqIHRhbl93KSlcclxuICAgICAgICAgICAgLmFkZCh0aGlzLnlfYXhpcy5tdWx0aXBseSh5X3dlaWdodCAqIHRhbl9oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9DYW1lcmFTcGFjZShBOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgZGlmZiA9IEEubWludXModGhpcy5leWUpO1xyXG4gICAgICAgIGxldCBwb2ludF9pbl9jYW1lcmFfc3BhY2UgPSBuZXcgVmVjdG9yKFZlY3Rvci5kb3QoZGlmZiwgdGhpcy54X2F4aXMpLCBWZWN0b3IuZG90KGRpZmYsIHRoaXMueV9heGlzKSwgVmVjdG9yLmRvdChkaWZmLCB0aGlzLnpfYXhpcykpO1xyXG4gICAgICAgIHJldHVybiBwb2ludF9pbl9jYW1lcmFfc3BhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdG9Qcm9qZWN0aW9uU3BhY2UoQTogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGZvdl9yYWQgPSBkZWdyZWVfdG9fUmFkKHRoaXMuZm92X2RlZ3JlZSk7XHJcbiAgICAgICAgbGV0IGhhbGZfZm92ID0gMC41ICogZm92X3JhZDtcclxuICAgICAgICBsZXQgeV9zY2FsZSA9IDEgLyBNYXRoLnRhbihoYWxmX2Zvdik7XHJcbiAgICAgICAgbGV0IHhfc2NhbGUgPSAxIC8gKHRoaXMucmF0aW8gKiBNYXRoLnRhbihoYWxmX2ZvdikpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihBLnggKiB4X3NjYWxlLCBBLnkgKiB5X3NjYWxlLCBBLnogKiB0aGlzLmEgKyB0aGlzLmIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTkRDKEE6IFZlY3RvciwgdzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHMgPSAxIC8gdztcclxuICAgICAgICByZXR1cm4gQS5tdWx0aXBseShzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1NjcmVlblNwYWNlKE5EQ19BOiBWZWN0b3IpIHtcclxuICAgICAgICAvLyDnlKjluqfmqJnorormj5vkvobnnIvlvoXlvp5OREPliLBTY3JlZW4gU3BhY2VcclxuICAgICAgICAvLyBOREMgeOi7uOWcqHNjcmVlbiBzcGFjZSDngroody8yLDApXHJcbiAgICAgICAgLy8gTkRDIHnou7jlnKhzY3JlZW4gc3BhY2Ug54K6KC1oLzIsMClcclxuICAgICAgICBsZXQgeCA9IHRoaXMuaGFsZlcgKiBORENfQS54ICsgdGhpcy5zY3JlZW5DZW50ZXJYO1xyXG4gICAgICAgIGxldCB5ID0gLXRoaXMuaGFsZkggKiBORENfQS55ICsgdGhpcy5zY3JlZW5DZW50ZXJZO1xyXG5cclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoeCwgeSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g566X5ZyWXHJcbiAgICByZW5kZXIocmVuZGVyX3RhcmdldDogUmVuZGVyVGFyZ2V0LCBvYmpfbGlzdDogU2NlbmVOb2RlW10pIHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uX2xpZ2h0X2RpciA9IG5ldyBWZWN0b3IoMSwgLTEsIDApLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICBsZXQgaGFsZl9waXhlbF9vZmZzZXQgPSAwLjUgLyByZW5kZXJfdGFyZ2V0Lmg7XHJcbiAgICAgICAgbGV0IG11bHRpc2FtcGxlX2RpZmYgPSBbXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICB7IHg6IGhhbGZfcGl4ZWxfb2Zmc2V0LCB5OiBoYWxmX3BpeGVsX29mZnNldCB9LFxyXG4gICAgICAgICAgICB7IHg6IC1oYWxmX3BpeGVsX29mZnNldCwgeTogaGFsZl9waXhlbF9vZmZzZXQgfSxcclxuICAgICAgICAgICAgeyB4OiAtaGFsZl9waXhlbF9vZmZzZXQsIHk6IC1oYWxmX3BpeGVsX29mZnNldCB9LFxyXG4gICAgICAgICAgICB7IHg6IGhhbGZfcGl4ZWxfb2Zmc2V0LCB5OiAtaGFsZl9waXhlbF9vZmZzZXQgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZW5kZXJfdGFyZ2V0LnJlbmRlcl9waXhlbCgoeF93ZWlnaHQ6IG51bWJlciwgeV93ZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmF5X2RpciA9IHRoaXMuY3JlYXRlX3JheV9kaXIoeF93ZWlnaHQsIHlfd2VpZ2h0LCByYXRpbyk7XHJcblxyXG4gICAgICAgICAgICAvLyDnlKLnlJ/lpJrmop1yYXlcclxuICAgICAgICAgICAgbGV0IHJheXMgPSBtdWx0aXNhbXBsZV9kaWZmLm1hcChkaWZmID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOWwjXJheV9kcmnkvZzlgY/np7tcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSByYXlfZGlyLmFkZCh0aGlzLnhfYXhpcy5tdWx0aXBseShkaWZmLngpKS5hZGQodGhpcy55X2F4aXMubXVsdGlwbHkoZGlmZi55KSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDpm5bnhLblkoznkIPjgIHlubPpnaLnmoRoaXToqIjnrpfkuI3pnIDopoFkaXLkvZxub3JtYWxpemXvvIzkvYbngrrkuobmlrnkvr/lj43lsITnmoToqIjnrpfpgoTmmK/kvZxub3JtYWxpemVcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmF5KHRoaXMuZXllLCBkaXIubm9ybWFsaXplKCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g5q+P5YCLcmF56YO9566XY29sb3JcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IHJheXMubWFwKHJheSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGl0X3NvcnRfbGlzdCA9IGdldF9oaXRfc29ydF9saXN0KG9ial9saXN0LCByYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOacieWwhOS4reWXjlxyXG4gICAgICAgICAgICAgICAgbGV0IGlzX2hpdCA9IGhpdF9zb3J0X2xpc3QubGVuZ3RoICE9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNfaGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpdF9pbmZvID0gaGl0X3NvcnRfbGlzdFswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpdF9pbmZvLnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoaXRfaW5mby5zLnNoYWRpbmcoaGl0X2luZm8sIGRpcmVjdGlvbl9saWdodF9kaXIsIG9ial9saXN0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIC8vIOS4jeWPr+iDveWIsOmAmeijoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGlmZnVzZS5yZWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEaWZmdXNlLmdyYXkuY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g5Y+W5bmz5Z2H5bCx5pyJQW50aWFsaWFzaW5n5pWI5p6cXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IG11bHRpc2FtcGxlX2RpZmYubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgZmluYWxfY29sb3IgPSBjb2xvcnMucmVkdWNlKChhY2N1bXVsYXRvcjogVmVjdG9yLCBjdXJyZW50OiBWZWN0b3IpID0+IGFjY3VtdWxhdG9yLmFkZChjdXJyZW50KSwgVmVjdG9yLnplcm8pLm11bHRpcGx5KDEgLyBjb3VudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmaW5hbF9jb2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F2bmFzSGVscGVyIHtcclxuICAgIHN0YXRpYyBzZXRfY2FudmFzKGlkOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICByZXR1cm4gQ2F2bmFzSGVscGVyLnNldF9jYW52YXNfZWxlbWVudChjYW52YXMsIHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRfY2FudmFzX2VsZW1lbnQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRfY29udGV4dChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICByZXR1cm4gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldF9jb250ZXh0X2J5X2NhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0KGM6IFJHQkEpIHtcclxuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIE1hdGguZmxvb3IoMjU1ICogKGMucikpICsgJywnICsgTWF0aC5mbG9vcigyNTUgKiAoYy5nKSkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NSAqIChjLmIpKSArICcsMSknO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSEhlbHBlciB7XHJcbiAgICBzdGF0aWMgJChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InO1xyXG5pbXBvcnQgUmF5IGZyb20gJy4vUmF5JztcclxuaW1wb3J0IHsgbnVtYmVyX2VxdWFsIH0gZnJvbSAnLi9Ub29sJztcclxuaW1wb3J0IEhpdEluZm8gZnJvbSAnLi9IaXRJbmZvJztcclxuaW1wb3J0IEhpdGFibGUgZnJvbSAnLi9IaXRhYmxlJztcclxuaW1wb3J0IFNoYWRlciBmcm9tICcuLi9NYXRlcmFpbHMvU2hhZGVyJztcclxuXHJcbi8vIOW5s+mdolxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSBpbXBsZW1lbnRzIEhpdGFibGUge1xyXG5cclxuICAgIEM6IFZlY3RvcjtcclxuICAgIE46IFZlY3RvcjtcclxuICAgIGNvbnN0cnVjdG9yKHBvaW50OiBWZWN0b3IsIG5vcm1hbDogVmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5DID0gcG9pbnQ7XHJcbiAgICAgICAgdGhpcy5OID0gbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4rOippnRlc3BfcOWSjOaWueWQkemHj+aYr+S4jeaYr+WcqOWQjOS4gOmCilxyXG4gICAgaXNfcG9zaXRpdmUodGVzdF9wOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5taW51cyh0ZXN0X3AsIHRoaXMuQyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gVmVjdG9yLmRvdChkaWZmLCB0aGlzLk4pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KHJheTogUmF5LCBzOiBTaGFkZXIpOiBIaXRJbmZvIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFBsYW5lLmhpdChyYXksIHRoaXMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgIHJlc3VsdC5zID0gcztcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaXQocmF5OiBSYXksIHBsYW5lOiBQbGFuZSk6IEhpdEluZm8gfCBudWxsIHtcclxuICAgICAgICAvLyByYXkgaGl0IHBsYW5lIFxyXG4gICAgICAgIGxldCBmcm9tID0gcmF5LmZyb207XHJcbiAgICAgICAgbGV0IGRpciA9IHJheS5kaXI7XHJcblxyXG4gICAgICAgIC8vIChGLUMp44CCTiArIHQgKETjgIJOKSA9IDBcclxuICAgICAgICAvLyB0ICA9IChDLUYp44CCTiAvIChE44CCTilcclxuICAgICAgICAvLyB0ICA9IChBIC8gKEIpXHJcbiAgICAgICAgbGV0IEIgPSBWZWN0b3IuZG90KGRpciwgcGxhbmUuTik7XHJcbiAgICAgICAgbGV0IEEgPSBWZWN0b3IuZG90KFZlY3Rvci5taW51cyhwbGFuZS5DLCBmcm9tKSwgcGxhbmUuTik7XHJcblxyXG4gICAgICAgIC8vIGF2b2lkIGRpdmlkZSBieSAwXHJcbiAgICAgICAgaWYgKG51bWJlcl9lcXVhbChCLCAwKSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCB0ID0gQSAvIEI7XHJcbiAgICAgICAgbGV0IHBvc2l0aXZlX3QgPSB0ID4gMC4wO1xyXG4gICAgICAgIGxldCBoaXRfcG9zID0gZnJvbS5hZGQoZGlyLm11bHRpcGx5KHQpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3NpdGl2ZV90LFxyXG4gICAgICAgICAgICBoaXRfcG9zLFxyXG4gICAgICAgICAgICBpOiBkaXIsXHJcbiAgICAgICAgICAgIHQsXHJcbiAgICAgICAgICAgIG5vcm1hbDogcGxhbmUuTlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCB7IGxlcnAgfSBmcm9tIFwiLi9Ub29sXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSR0JBIHtcclxuICAgIHN0YXRpYyBkZWJ1ZyA9IG5ldyBSR0JBKDEsIDAsIDEsIDEpO1xyXG4gICAgc3RhdGljIGdvbGRlbiA9IG5ldyBSR0JBKDEsIDIxNSAvIDI1NSwgMCwgMSk7XHJcbiAgICBzdGF0aWMgeWVsbG93ID0gbmV3IFJHQkEoMSwgMSwgMCwgMSk7XHJcbiAgICBzdGF0aWMgcGluayA9IG5ldyBSR0JBKDEsIDE5MiAvIDI1NSwgMjAzIC8gMjU1LCAxKTtcclxuICAgIHN0YXRpYyBibGFjayA9IG5ldyBSR0JBKDAsIDAsIDAsIDEpO1xyXG4gICAgc3RhdGljIHJlZCA9IG5ldyBSR0JBKDEsIDAsIDAsIDEpO1xyXG5cclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgdGhpcy5nID0gZztcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoQTogUkdCQSwgQjogUkdCQSwgazogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JBKFxyXG4gICAgICAgICAgICBsZXJwKEEuciwgQi5yLCBrKSxcclxuICAgICAgICAgICAgbGVycChBLmcsIEIuZywgayksXHJcbiAgICAgICAgICAgIGxlcnAoQS5iLCBCLmIsIGspLFxyXG4gICAgICAgICAgICAxKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoQTogUkdCQSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUkdCQSh0aGlzLnIgKyBBLnIsIHRoaXMuZyArIEEuZywgdGhpcy5iICsgQS5iLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbXVsdGlwbHkoczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JBKHRoaXMuciAqIHMsIHRoaXMuZyAqIHMsIHRoaXMuYiAqIHMsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIiggXCIgKyB0aGlzLnIgKyBcIiAsIFwiICsgdGhpcy5nICsgXCIgLCBcIiArIHRoaXMuYiArIFwiIClcIjtcclxuICAgIH1cclxufSIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xyXG5pbXBvcnQgVHJpYW5nbGUgZnJvbSAnLi9UcmlhbmdsZSc7XHJcbmltcG9ydCB7IENsaXBQbGFuZSwgY2xpcCB9IGZyb20gJy4vVG9vbCc7XHJcbmltcG9ydCBWZXJ0ZXggZnJvbSAnLi9WZXJ0ZXgnO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuL1ZlY3Rvcic7XHJcbmltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBSZW5kZXJUYXJnZXQgZnJvbSAnLi9SZW5kZXJUYXJnZXQnO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gJy4vVGV4dHVyZTJEJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4vVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFzdGVyaXplciB7XHJcbiAgICBzdGF0aWMgY29sb3JfYnVmZmVyOiBCdWZmZXIyRDxSR0JBPjtcclxuICAgIHN0YXRpYyB6X2J1ZmZlcjogQnVmZmVyMkQ8bnVtYmVyPjtcclxuXHJcbiAgICBzdGF0aWMgY2xlYXIoY29sb3I6IFJHQkEsIHo6IG51bWJlcikge1xyXG4gICAgICAgIFJhc3Rlcml6ZXIuY29sb3JfYnVmZmVyLmNsZWFyKGNvbG9yKTtcclxuICAgICAgICBSYXN0ZXJpemVyLnpfYnVmZmVyLmNsZWFyKHopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93KHJlbmRlcl90YXJnZXQ6IFJlbmRlclRhcmdldCkge1xyXG4gICAgICAgIHJlbmRlcl90YXJnZXQuc2V0X3BpeGVsKCh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUmFzdGVyaXplci5jb2xvcl9idWZmZXIuZ2V0KHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbmRlcl90YXJnZXQuc2hvd19idWZmZXIoJ2NhbnZhcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGlwX2hlbHBlcihpbl9saXN0OiBUcmlhbmdsZVtdLFxyXG4gICAgICAgIHYwX291dDogKHRyaWFuZ2xlOiBUcmlhbmdsZSkgPT4gYm9vbGVhbixcclxuICAgICAgICB2MV9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICAgICAgdjJfb3V0OiAodHJpYW5nbGU6IFRyaWFuZ2xlKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHBsYW5lOiBDbGlwUGxhbmUpIHtcclxuXHJcbiAgICAgICAgbGV0IG91dF9saXN0OiBUcmlhbmdsZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgVCBvZiBpbl9saXN0KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjbGlwKFQsIHYwX291dCwgdjFfb3V0LCB2Ml9vdXQsIHBsYW5lKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdCBvZiByZXN1bHQpXHJcbiAgICAgICAgICAgICAgICBvdXRfbGlzdC5wdXNoKHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0X2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsaXBfaW5fUHJvamVjdGlvbl9TcGFjZSh2MDogVmVydGV4LCB2MTogVmVydGV4LCB2MjogVmVydGV4LCBwY2FtZXJhOiBDYW1lcmEpIHtcclxuICAgICAgICAvLyBUb2RvOuWft+ihjDblgIvlubPpnaLnmoTkuInop5LlvaLoo4HliIdcclxuICAgICAgICAvLyDlkox56Lu45aS+NDXluqbnmoQy5YCL5bmz6Z2i44CB5ZKMeOi7uOWkvjQ15bqm55qEMuWAi+W5s+mdouOAgemChOaciU5j5ZKMRmNcclxuICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDIxLzExL2Jsb2ctcG9zdF8yOC5odG1sXHJcblxyXG4gICAgICAgIGxldCBpbl9saXN0ID0gW25ldyBUcmlhbmdsZSh2MCwgdjEsIHYyKV07XHJcblxyXG4gICAgICAgIC8vIEZhclxyXG4gICAgICAgIGxldCBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIoaW5fbGlzdCxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYwLncgPCBULnYwLnAuejsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYxLncgPCBULnYxLnAuejsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYyLncgPCBULnYyLnAuejsgfSxcclxuICAgICAgICAgICAgQ2xpcFBsYW5lLkZhcik7XHJcblxyXG4gICAgICAgIC8vIE5lYXJcclxuICAgICAgICBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIob3V0X2xpc3QsXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gMCA+IFQudjAucC56OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIDAgPiBULnYxLnAuejsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAwID4gVC52Mi5wLno7IH0sXHJcbiAgICAgICAgICAgIENsaXBQbGFuZS5OZWFyKTtcclxuXHJcbiAgICAgICAgLy8g5LiN5bCNUmlnaHQg44CBTGVmdOOAgVRvcOOAgUJvdHRvbeS9nOijgeWIh+S6hlxyXG4gICAgICAgIC8vIOmAmeaoo+aJjeWPr+S7peeci+WIsG5kY19jbGFtcF9lZmZlY3RcclxuICAgICAgICBpZiAoUmFzdGVyaXplci5uZGNfY2xhbXBfZWZmZWN0KVxyXG4gICAgICAgICAgICByZXR1cm4gb3V0X2xpc3Q7XHJcblxyXG4gICAgICAgIC8vIFJpZ2h0XHJcbiAgICAgICAgb3V0X2xpc3QgPSBSYXN0ZXJpemVyLmNsaXBfaGVscGVyKG91dF9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjAudyA8IFQudjAucC54OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjEudyA8IFQudjEucC54OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjIudyA8IFQudjIucC54OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuUmlnaHQpO1xyXG5cclxuICAgICAgICAvLyBMZWZ0XHJcbiAgICAgICAgb3V0X2xpc3QgPSBSYXN0ZXJpemVyLmNsaXBfaGVscGVyKG91dF9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIC1ULnYwLncgPiBULnYwLnAueDsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAtVC52MS53ID4gVC52MS5wLng7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gLVQudjIudyA+IFQudjIucC54OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuTGVmdCk7XHJcblxyXG4gICAgICAgIC8vIFRvcFxyXG4gICAgICAgIG91dF9saXN0ID0gUmFzdGVyaXplci5jbGlwX2hlbHBlcihvdXRfbGlzdCxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYwLncgPCBULnYwLnAueTsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYxLncgPCBULnYxLnAueTsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYyLncgPCBULnYyLnAueTsgfSxcclxuICAgICAgICAgICAgQ2xpcFBsYW5lLlRvcCk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbVxyXG4gICAgICAgIG91dF9saXN0ID0gUmFzdGVyaXplci5jbGlwX2hlbHBlcihvdXRfbGlzdCxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAtVC52MC53ID4gVC52MC5wLnk7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gLVQudjEudyA+IFQudjEucC55OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIC1ULnYyLncgPiBULnYyLnAueTsgfSxcclxuICAgICAgICAgICAgQ2xpcFBsYW5lLkJvdHRvbSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRfbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgTVZQX2JhY2tmYWNlX2N1bGxpbmdfY2xpcHBpbmcodHJpYW5nbGU6IFRyaWFuZ2xlLCBwY2FtZXJhOiBDYW1lcmEsIHdvcmxkVHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICAvLyB0byB3b3JsZCBzcGFjZVxyXG4gICAgICAgIGxldCB2MF93ID0gVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHdvcmxkVHJhbnNmb3JtLCB0cmlhbmdsZS52MC5wKTtcclxuICAgICAgICBsZXQgdjFfdyA9IFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludCh3b3JsZFRyYW5zZm9ybSwgdHJpYW5nbGUudjEucCk7XHJcbiAgICAgICAgbGV0IHYyX3cgPSBUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQod29ybGRUcmFuc2Zvcm0sIHRyaWFuZ2xlLnYyLnApO1xyXG5cclxuICAgICAgICAvLyB0byBjYW1lcmEgc3BhY2VcclxuICAgICAgICBsZXQgdjBfYyA9IHBjYW1lcmEudG9DYW1lcmFTcGFjZSh2MF93KTtcclxuICAgICAgICBsZXQgdjFfYyA9IHBjYW1lcmEudG9DYW1lcmFTcGFjZSh2MV93KTtcclxuICAgICAgICBsZXQgdjJfYyA9IHBjYW1lcmEudG9DYW1lcmFTcGFjZSh2Ml93KTtcclxuXHJcbiAgICAgICAgLy8gdG8gcHJvamVjdGlvbiBzcGFjZSAoY2xpcCBzcGFjZSlcclxuICAgICAgICBsZXQgdjBfcCA9IHBjYW1lcmEudG9Qcm9qZWN0aW9uU3BhY2UodjBfYyk7XHJcbiAgICAgICAgbGV0IHYxX3AgPSBwY2FtZXJhLnRvUHJvamVjdGlvblNwYWNlKHYxX2MpO1xyXG4gICAgICAgIGxldCB2Ml9wID0gcGNhbWVyYS50b1Byb2plY3Rpb25TcGFjZSh2Ml9jKTtcclxuXHJcbiAgICAgICAgLy8gYmFjayBmYWNlIGN1bGxpbmcgXHJcbiAgICAgICAgLy8gbGV0IHYwX3Rlc3QgPSBuZXcgVmVjdG9yKHYwX3AueCwgdjBfcC55LCB2MF9jLnopO1xyXG4gICAgICAgIC8vIGxldCB2MV90ZXN0ID0gbmV3IFZlY3Rvcih2MV9wLngsIHYxX3AueSwgdjFfYy56KTtcclxuICAgICAgICAvLyBsZXQgdjJfdGVzdCA9IG5ldyBWZWN0b3IodjJfcC54LCB2Ml9wLnksIHYyX2Mueik7XHJcbiAgICAgICAgLy8gbGV0IG5vcm1hbCA9IFZlY3Rvci5jYWxjdWxhdGVfbm9ybWFsKHYwX3Rlc3QsIHYxX3Rlc3QsIHYyX3Rlc3QpO1xyXG4gICAgICAgIC8vIGxldCBjZW50ZXJfdG9fZXllID0gVmVjdG9yLm1pbnVzKFZlY3Rvci56ZXJvLCBWZWN0b3IuY2FsY3VsYXRlX2NlbnRlcih2MF90ZXN0LCB2MV90ZXN0LCB2Ml90ZXN0KSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vIOWcqHZpZXcgc3BhY2XlgZrvvIzkuI3nhLblnKhjbGlwIHNwYWNl5YGa77yM6YKE6KaB5oqKeueUqHflj5bku6PmjonvvIzmnInpu57mkJ7lt6VcclxuICAgICAgICBsZXQgbm9ybWFsID0gVmVjdG9yLmNhbGN1bGF0ZV9ub3JtYWwodjBfYywgdjFfYywgdjJfYyk7XHJcbiAgICAgICAgbGV0IGNlbnRlcl90b19leWUgPSBWZWN0b3IubWludXMoVmVjdG9yLnplcm8sIFZlY3Rvci5jYWxjdWxhdGVfY2VudGVyKHYwX2MsIHYxX2MsIHYyX2MpKS5ub3JtYWxpemUoKTtcclxuICAgICAgICBsZXQgY29zX3ZhbHVlID0gVmVjdG9yLmRvdChub3JtYWwsIGNlbnRlcl90b19leWUpOztcclxuICAgICAgICBpZiAoY29zX3ZhbHVlIDw9IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2N1bGxpbmcnKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDph43mlrDntoHlrpp1dlxyXG4gICAgICAgIGxldCB2MCA9IHRyaWFuZ2xlLnYwLmNsb25lKCkudXBkYXRlX3AodjBfcCkudXBkYXRlX3codjBfYy56KTtcclxuICAgICAgICBsZXQgdjEgPSB0cmlhbmdsZS52MS5jbG9uZSgpLnVwZGF0ZV9wKHYxX3ApLnVwZGF0ZV93KHYxX2Mueik7XHJcbiAgICAgICAgbGV0IHYyID0gdHJpYW5nbGUudjIuY2xvbmUoKS51cGRhdGVfcCh2Ml9wKS51cGRhdGVfdyh2Ml9jLnopO1xyXG5cclxuICAgICAgICAvLyDln7fooYzkuInop5LlvaLoo4HliIdcclxuICAgICAgICByZXR1cm4gUmFzdGVyaXplci5jbGlwX2luX1Byb2plY3Rpb25fU3BhY2UodjAsIHYxLCB2MiwgcGNhbWVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVzZV9zb2xpZF9jb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIG5kY19jbGFtcF9lZmZlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBwZWVrX3NjcmVlbl9wb3M6IFZlY3RvcjJEO1xyXG5cclxuICAgIHN0YXRpYyBzZXRfcGVla19zY3JlZW5fcG9zKHBlZWtfc2NyZWVuX3BvczogVmVjdG9yMkQpIHtcclxuICAgICAgICBSYXN0ZXJpemVyLnBlZWtfc2NyZWVuX3BvcyA9IHBlZWtfc2NyZWVuX3BvcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJpbnRfb25jZSA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHByaW50X3BlZWtfcG9zaXRpb24oKSB7XHJcbiAgICAgICAgUmFzdGVyaXplci5wcmludF9vbmNlID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJpbnRfcGVla19wb3NpdGlvbicpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHByb2Nlc3ModHJpYW5nbGU6IFRyaWFuZ2xlLCBwY2FtZXJhOiBDYW1lcmEsIHdvcmxkVHJhbnNmb3JtOiBUcmFuc2Zvcm0sIHRleHR1cmU6IFRleHR1cmUyRCkge1xyXG5cclxuICAgICAgICAvLyB0byBNVlBcclxuICAgICAgICBsZXQgdHJpYW5nbGVfbGlzdCA9IFJhc3Rlcml6ZXIuTVZQX2JhY2tmYWNlX2N1bGxpbmdfY2xpcHBpbmcodHJpYW5nbGUsIHBjYW1lcmEsIHdvcmxkVHJhbnNmb3JtKTtcclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBUIG9mIHRyaWFuZ2xlX2xpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRvIE5EQ1xyXG4gICAgICAgICAgICBsZXQgbjAgPSBwY2FtZXJhLnRvTkRDKFQudjAucCwgVC52MC53KTtcclxuICAgICAgICAgICAgbGV0IG4xID0gcGNhbWVyYS50b05EQyhULnYxLnAsIFQudjEudyk7XHJcbiAgICAgICAgICAgIGxldCBuMiA9IHBjYW1lcmEudG9OREMoVC52Mi5wLCBULnYyLncpO1xyXG5cclxuICAgICAgICAgICAgLy8g5pyJ6KOB5YiHbGVmdOOAgXJpZ2h044CBdG9w44CBYm90dG9t55qE6KmxTkRD5oeJ6Kmy6KaB6JC95ZyoXHJcbiAgICAgICAgICAgIC8vIC0xIOKJpCB4IOKJpCAxLCAtMSDiiaQgeSDiiaQgMVxyXG4gICAgICAgICAgICAvLyDkuI3oo4HliIdsZWZ044CBcmlnaHTjgIF0b3DjgIFib3R0b23vvIznhLblvoxjbGFtcCBuZGPkuZ/nrpfmmK/kuIDnqK7nibnmrormlYjmnpxcclxuICAgICAgICAgICAgaWYgKFJhc3Rlcml6ZXIubmRjX2NsYW1wX2VmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgbjAuY2xhbXBfeCgtMSwgMSkuY2xhbXBfeSgtMSwgMSk7XHJcbiAgICAgICAgICAgICAgICBuMS5jbGFtcF94KC0xLCAxKS5jbGFtcF95KC0xLCAxKTtcclxuICAgICAgICAgICAgICAgIG4yLmNsYW1wX3goLTEsIDEpLmNsYW1wX3koLTEsIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0byBzY3JlZW4gc3BhY2VcclxuICAgICAgICAgICAgLy8gMCDiiaQgeCDiiaQgdywgMCDiiaQgeSDiiaQgaFxyXG4gICAgICAgICAgICBsZXQgczAgPSBwY2FtZXJhLnRvU2NyZWVuU3BhY2UobjApO1xyXG4gICAgICAgICAgICBsZXQgczEgPSBwY2FtZXJhLnRvU2NyZWVuU3BhY2UobjEpO1xyXG4gICAgICAgICAgICBsZXQgczIgPSBwY2FtZXJhLnRvU2NyZWVuU3BhY2UobjIpO1xyXG5cclxuICAgICAgICAgICAgLy8g54K65LqG5ZKM5pys5L6G55Wr57ea55qEY29kZeebuOWuue+8jOWCs+WHuuWOu1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goczApO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goczEpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goczIpO1xyXG5cclxuICAgICAgICAgICAgLy8g5om+5Ye65YyF5ZyN55qE55+p5b2iXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI4Lmh0bWxcclxuICAgICAgICAgICAgLy8g5ZyWIFNjcmVlbiBTcGFjZVxyXG4gICAgICAgICAgICBsZXQgeyBtaW4sIG1heCB9ID0gVmVjdG9yLm1pbl9tYXgoczAsIHMxLCBzMik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1pbi54LCBtYXgueCwgJ3wnLCBtaW4ueSwgbWF4LnkpO1xyXG4gICAgICAgICAgICBsZXQgbWluX3ggPSBNYXRoLmZsb29yKG1pbi54KTtcclxuICAgICAgICAgICAgbGV0IG1heF94ID0gTWF0aC5mbG9vcihtYXgueCk7XHJcbiAgICAgICAgICAgIGxldCBtaW5feSA9IE1hdGguZmxvb3IobWluLnkpO1xyXG4gICAgICAgICAgICBsZXQgbWF4X3kgPSBNYXRoLmZsb29yKG1heC55KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNsYW1wIGJ5IHNjcmVlbiBzaXplXHJcbiAgICAgICAgICAgIG1pbl94ID0gTWF0aC5tYXgoMCwgbWluX3gpO1xyXG4gICAgICAgICAgICBtaW5feSA9IE1hdGgubWF4KDAsIG1pbl95KTtcclxuICAgICAgICAgICAgbWF4X3ggPSBNYXRoLm1pbih0aGlzLmNvbG9yX2J1ZmZlci53IC0gMSwgbWF4X3gpO1xyXG4gICAgICAgICAgICBtYXhfeSA9IE1hdGgubWluKHRoaXMuY29sb3JfYnVmZmVyLmggLSAxLCBtYXhfeSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gbWluX3g7IHggPD0gbWF4X3g7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IG1pbl95OyB5IDw9IG1heF95OyArK3kpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9ncG5ub3Rlcy5ibG9nc3BvdC5jb20vMjAyMS8xMS9ibG9nLXBvc3RfMjguaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWcliBTY3JlZW4gU3BhY2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgUCA9IG5ldyBWZWN0b3IoeCArIDAuNSwgeSArIDAuNSwgMClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5bCN55+p5b2i6KOh55qE5q+P5YCL6bueUFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOWumuaYr+WQpuS9jeWcqHNjcmVlbiBzcGFjZeS4ieinkuW9ouijoemdolxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHN1Y2Nlc3MsIM6xLCDOsiwgzrMgfSA9IFRyaWFuZ2xlLmNhbGN1bGF0ZV/OsV/Osl/OsyhzMCwgczEsIHMyLCBQKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChSYXN0ZXJpemVyLnByaW50X29uY2UgJiYgeCA9PSBSYXN0ZXJpemVyLnBlZWtfc2NyZWVuX3Bvcy54ICYmIHkgPT0gUmFzdGVyaXplci5wZWVrX3NjcmVlbl9wb3MueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNfaW5fdHJpYW5nbGUnLCBUcmlhbmdsZS5pc19pbl90cmlhbmdsZSjOsSwgzrIsIM6zKSwgzrEsIM6yLCDOsyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVRyaWFuZ2xlLmlzX2luX3RyaWFuZ2xlKM6xLCDOsiwgzrMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgeWVzIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICgxKeioiOeul3rlgLwgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5b6eTkRD5YiwU2NyZWVuIFNwYWNl5piv5Lu/5bCE6K6K5o+b77yM5YWn5o+S5qyK6YeNzrHjgIHOsuOAgc6z5LiA5qijXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9ncG5ub3Rlcy5ibG9nc3BvdC5jb20vMjAxOS8xMS9ibG9nLXBvc3RfMzAuaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB6ID0gVHJpYW5nbGUuaW50ZXJwb2xhdGlvbijOsywgzrEsIM6yLCBuMC56LCBuMS56LCBuMi56KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8geiB0ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlcl96ID0gUmFzdGVyaXplci56X2J1ZmZlci5nZXQoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHogPiBidWZmZXJfeilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvq+WFpXrlgLxcclxuICAgICAgICAgICAgICAgICAgICBSYXN0ZXJpemVyLnpfYnVmZmVyLnNldCh4LCB5LCB6KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKDIp6YCP6KaW5L+u5q2jXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9ncG5ub3Rlcy5ibG9nc3BvdC5jb20vMjAyMS8xMS9ibG9nLXBvc3RfMjcuaHRtbCNIaWdobGlnaHRzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOimgeWcqE5EQ+aPkuWAvO+8jOaJgOS7pemZpOS7pXdcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdV9uZGMgPSBUcmlhbmdsZS5pbnRlcnBvbGF0aW9uKM6zLCDOsSwgzrIsIFQudjAudSAvIFQudjAudywgVC52MS51IC8gVC52MS53LCBULnYyLnUgLyBULnYyLncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2X25kYyA9IFRyaWFuZ2xlLmludGVycG9sYXRpb24ozrMsIM6xLCDOsiwgVC52MC52IC8gVC52MC53LCBULnYxLnYgLyBULnYxLncsIFQudjIudiAvIFQudjIudyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS5mOS4inflm57liLBwcm9qZWN0aW9uIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHcgPSAxIC8gVHJpYW5nbGUuaW50ZXJwb2xhdGlvbijOsywgzrEsIM6yLCAxIC8gVC52MC53LCAxIC8gVC52MS53LCAxIC8gVC52Mi53KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdSA9IHVfbmRjICogdztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdiA9IHZfbmRjICogdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgY29sb3IgfSA9IHRleHR1cmUuZ2V0KG5ldyBWZWN0b3IyRCh1LCB2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJhc3Rlcml6ZXIudXNlX3NvbGlkX2NvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSYXN0ZXJpemVyLmNvbG9yX2J1ZmZlci5zZXQoeCwgeSwgUkdCQS55ZWxsb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmFzdGVyaXplci5jb2xvcl9idWZmZXIuc2V0KHgsIHksIGNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJhc3Rlcml6ZXIucHJpbnRfb25jZSAmJiB4ID09IFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zLnggJiYgeSA9PSBSYXN0ZXJpemVyLnBlZWtfc2NyZWVuX3Bvcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xvcicsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFJhc3Rlcml6ZXIucHJpbnRfb25jZSkge1xyXG4gICAgICAgICAgICBSYXN0ZXJpemVyLnByaW50X29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaCBwZWVrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWNvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJheSB7XHJcbiAgICBmcm9tOiBWZWNvcjtcclxuICAgIGRpcjogVmVjb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnJvbTogVmVjb3IsIGRpcjogVmVjb3IpIHtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCBWZWNvcjREIGZyb20gXCIuL1ZlY3RvcjREXCI7XHJcblxyXG4vLyDlnKgzRCBzcGFjZeijgeWIh+eahOipsVxyXG4vLyDpgoTopoHogIPmha7ku4DpurzmmYLlgJnopoHnlKgoeCx5LHcp6KOB5YiHXHJcbi8vIOS7gOm6vOaZguWAmeimgeeUqCh4LHkseinoo4HliIdcclxuLy8gXHJcbi8vIOS4jeWmguebtOaOpeWcqDREIHNwYWNl6KOB5YiHXHJcbi8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI4Lmh0bWxcclxuLy8g5ZyWIDREIHNwYWNlIGNsaXBcclxuLy8g6YCZ6KOh55SoRGlyZWN0eOeahE5EQ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXk0RCB7XHJcbiAgICBmcm9tOiBWZWNvcjREO1xyXG4gICAgZGlyOiBWZWNvcjREO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZyb206IFZlY29yNEQsIHRvOiBWZWNvcjREKSB7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcclxuICAgICAgICB0aGlzLmRpciA9IG5ldyBWZWNvcjREKFZlY3Rvci5taW51cyh0by5wLCBmcm9tLnApLCB0by53IC0gZnJvbS53KTtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feF9lcXVhbF93KCkge1xyXG4gICAgICAgIC8vIGZyb20ueCArIHQgKiBkaXIueD0gZnJvbS53ICsgdCAqIGRpci53O1xyXG4gICAgICAgIGxldCB0ID0gKHRoaXMuZnJvbS53IC0gdGhpcy5mcm9tLnAueCkgLyAodGhpcy5kaXIucC54IC0gdGhpcy5kaXIudyk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdF93aGVuX3lfZXF1YWxfdygpIHtcclxuICAgICAgICBsZXQgdCA9ICh0aGlzLmZyb20udyAtIHRoaXMuZnJvbS5wLnkpIC8gKHRoaXMuZGlyLnAueSAtIHRoaXMuZGlyLncpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl96X2VxdWFsX3coKSB7XHJcbiAgICAgICAgbGV0IHQgPSAodGhpcy5mcm9tLncgLSB0aGlzLmZyb20ucC56KSAvICh0aGlzLmRpci5wLnogLSB0aGlzLmRpci53KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feF9lcXVhbF9taW51c193KCkge1xyXG4gICAgICAgIC8vIGZyb20ueCArIHQgKiBkaXIueD0gLShmcm9tLncgKyB0ICogZGlyLncpO1xyXG5cclxuICAgICAgICBsZXQgdCA9IC0odGhpcy5mcm9tLncgKyB0aGlzLmZyb20ucC54KSAvICh0aGlzLmRpci53ICsgdGhpcy5kaXIucC54KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feV9lcXVhbF9taW51c193KCkge1xyXG4gICAgICAgIGxldCB0ID0gLSh0aGlzLmZyb20udyArIHRoaXMuZnJvbS5wLnkpIC8gKHRoaXMuZGlyLncgKyB0aGlzLmRpci5wLnkpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl96X2VxdWFsX3plcm9fdygpIHtcclxuXHJcbiAgICAgICAgLy8gZnJvbS56ICsgdCAqIGRpci56PSAwO1xyXG4gICAgICAgIGxldCB0ID0gLXRoaXMuZnJvbS5wLnogLyB0aGlzLmRpci5wLno7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJUYXJnZXQge1xyXG4gICAgdzogbnVtYmVyID0gMzIwO1xyXG4gICAgaDogbnVtYmVyID0gMjQwO1xyXG4gICAgYmFja2J1ZmZlcjogT2Zmc2NyZWVuQ2FudmFzO1xyXG4gICAgY29uc3RydWN0b3IodzogbnVtYmVyID0gMzIwLCBoOiBudW1iZXIgPSAyNDApIHtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5iYWNrYnVmZmVyID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyX3BpeGVsKGZ1bmM6ICh4X3dlaWdodDogbnVtYmVyLCB5X3dlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKSA9PiBWZWN0b3IpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHRfMmQgPSB0aGlzLmJhY2tidWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAoIWNvbnRleHRfMmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb250ZXh0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgc291cmNlIGRhdGEgYXJyYXlcclxuICAgICAgICBsZXQgYmFja2J1ZmZlcl9kYXRhID0gY29udGV4dF8yZC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgICAgIGxldCBiYWNrYnVmZmVyX2RhdGFfYXJyYXkgPSBiYWNrYnVmZmVyX2RhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy53IC8gdGhpcy5oO1xyXG5cclxuICAgICAgICAvLyBzZXQgYXJyYXkgdmFsdWVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJnYmEgZWFjaCBjb2xvciBpcyA0Ynl0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gNCAqICh4ICsgeSAqIHRoaXMudyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy5pbnRyby10by1keHIuY3d5bWFuLm9yZy9wcmVzZW50YXRpb25zL0ludHJvRFhSX1JheXRyYWNpbmdTaGFkZXJzLnBkZlxyXG4gICAgICAgICAgICAgICAgLy8gcGFnZSA3OFxyXG4gICAgICAgICAgICAgICAgLy8g6ZyA6KaB5YGP56e75Y2K5YCL5YOP57Sg55qE6ZW35bqm77yM5omN5pyD6JC95Zyo5YOP57Sg55qE5Lit6ZaTKOS4jemBjuiCieecvOeci+S4jeWkquWHuuW3ruWIpeWwseaYr+S6hilcclxuICAgICAgICAgICAgICAgIC8vIHJlbWFwIHRvIDB+MVxyXG4gICAgICAgICAgICAgICAgbGV0IFggPSAoKHggKyAwLjUpIC8gdGhpcy53KTtcclxuICAgICAgICAgICAgICAgIGxldCBZID0gKCh5ICsgMC41KSAvIHRoaXMuaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHkgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBZID0gMSAtIFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtYXAgdG8gLTF+MVxyXG4gICAgICAgICAgICAgICAgbGV0IHhfd2VpZ2h0ID0gWCAqIDIgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHlfd2VpZ2h0ID0gWSAqIDIgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGZ1bmMoeF93ZWlnaHQsIHlfd2VpZ2h0LCByYXRpbyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IGNvbG9yLnk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IGNvbG9yLno7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtbWHmoKHmraNcclxuICAgICAgICAgICAgICAgIGxldCBnYW1tYSA9IDEgLyAyLjE7XHJcbiAgICAgICAgICAgICAgICByID0gTWF0aC5wb3cociwgZ2FtbWEpO1xyXG4gICAgICAgICAgICAgICAgZyA9IE1hdGgucG93KGcsIGdhbW1hKTtcclxuICAgICAgICAgICAgICAgIGIgPSBNYXRoLnBvdyhiLCBnYW1tYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4KytdID0gTWF0aC5yb3VuZChyICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleCsrXSA9IE1hdGgucm91bmQoZyAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXgrK10gPSBNYXRoLnJvdW5kKGIgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4XSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0XzJkLnB1dEltYWdlRGF0YShiYWNrYnVmZmVyX2RhdGEsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldF9waXhlbChmdW5jOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IFJHQkEpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHRfMmQgPSB0aGlzLmJhY2tidWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAoIWNvbnRleHRfMmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb250ZXh0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgc291cmNlIGRhdGEgYXJyYXlcclxuICAgICAgICBsZXQgYmFja2J1ZmZlcl9kYXRhID0gY29udGV4dF8yZC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgICAgIGxldCBiYWNrYnVmZmVyX2RhdGFfYXJyYXkgPSBiYWNrYnVmZmVyX2RhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy53IC8gdGhpcy5oO1xyXG5cclxuICAgICAgICAvLyBzZXQgYXJyYXkgdmFsdWVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJnYmEgZWFjaCBjb2xvciBpcyA0Ynl0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gNCAqICh4ICsgeSAqIHRoaXMudyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZnVuYyh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGxldCByID0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IuZztcclxuICAgICAgICAgICAgICAgIGxldCBiID0gY29sb3IuYjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmspLljrtnYW1tYe+8jOS5n+S4jeeUqGdhbW1h5qCh5q2jXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZ2FtbWEgPSAxIC8gMi4xO1xyXG4gICAgICAgICAgICAgICAgLy8gciA9IE1hdGgucG93KHIsIGdhbW1hKTtcclxuICAgICAgICAgICAgICAgIC8vIGcgPSBNYXRoLnBvdyhnLCBnYW1tYSk7XHJcbiAgICAgICAgICAgICAgICAvLyBiID0gTWF0aC5wb3coYiwgZ2FtbWEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleCsrXSA9IE1hdGgucm91bmQociAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXgrK10gPSBNYXRoLnJvdW5kKGcgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4KytdID0gTWF0aC5yb3VuZChiICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleF0gPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dF8yZC5wdXRJbWFnZURhdGEoYmFja2J1ZmZlcl9kYXRhLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93X2J1ZmZlcihjYW52YXNfaWQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIOioreWummJ1ZmZlcueahOWkp+Wwj+WSjGNzcyBzdHlsZeeahOWkp+Wwj+S4gOaoo1xyXG4gICAgICAgIC8vIGh0dHBzOi8vb3BlbmhvbWUuY2MvR29zc2lwL1dlYkdML0NhbnZhcy5odG1sXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc19pZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy53ICsgJ3B4JztcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oICsgJ3B4JztcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIGNvcHkgYmFja2J1ZmZlciB0byBjYW52YXNcclxuICAgICAgICBsZXQgY29udGV4dF9iaXRtYXBfcmVuZGVyID0gY2FudmFzLmdldENvbnRleHQoXCJiaXRtYXByZW5kZXJlclwiKTtcclxuICAgICAgICBpZiAoIWNvbnRleHRfYml0bWFwX3JlbmRlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGNvbnRleHRfYml0bWFwX3JlbmRlciBmYWlsZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0X2JpdG1hcF9yZW5kZXIudHJhbnNmZXJGcm9tSW1hZ2VCaXRtYXAodGhpcy5iYWNrYnVmZmVyLnRyYW5zZmVyVG9JbWFnZUJpdG1hcCgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FtcGxlciB7XHJcblxyXG4gICAgc3RhdGljIHV2X3RvX2J1ZmZlcl9zcGFjZSh1djogVmVjdG9yMkQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHV2LngsIDEgLSB1di55KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYnVmZmVyX3RvX3V2X3NwYWNlKHV2OiBWZWN0b3IyRCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodXYueCwgMSAtIHV2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXh0dXJlMkQodXY6IFZlY3RvcjJELCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcblxyXG4gICAgICAgIGxldCB3ID0gYnVmZmVyLnc7XHJcbiAgICAgICAgbGV0IGggPSBidWZmZXIuaDtcclxuXHJcbiAgICAgICAgbGV0IGJ1ZmZlcl91diA9IFNhbXBsZXIudXZfdG9fYnVmZmVyX3NwYWNlKHV2KTtcclxuICAgICAgICBsZXQgdSA9IGJ1ZmZlcl91di54O1xyXG4gICAgICAgIGxldCB2ID0gYnVmZmVyX3V2Lnk7XHJcblxyXG4gICAgICAgIC8v5YWI5om+5Ye65pyA6L+R6bueXHJcbiAgICAgICAgbGV0IGdyaWRfdSA9IDEgLyB3O1xyXG4gICAgICAgIGxldCBncmlkX3YgPSAxIC8gaDtcclxuXHJcbiAgICAgICAgbGV0IGhhbGZfZ3JpZF91ID0gZ3JpZF91ICogMC41O1xyXG4gICAgICAgIGxldCBoYWxmX2dyaWRfdiA9IGdyaWRfdiAqIDAuNTtcclxuXHJcbiAgICAgICAgLy/ku6XkuIvmmK/mnIk05YCL6YSw6bue55qE5oOF5rOBLi5cclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF91X2Zsb2F0ID0gdSAvIGdyaWRfdTtcclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF92X2Zsb2F0ID0gdiAvIGdyaWRfdjtcclxuXHJcbiAgICAgICAgbGV0IG5lYXJlc3RfcG9pbnRfdSA9IE1hdGguZmxvb3IobmVhcmVzdF9wb2ludF91X2Zsb2F0KTtcclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF92ID0gTWF0aC5mbG9vcihuZWFyZXN0X3BvaW50X3ZfZmxvYXQpO1xyXG5cclxuICAgICAgICAvL2FsZXJ0KG5lYXJlc3RfcG9pbnRfdStcIixcIituZWFyZXN0X3BvaW50X3YpO1xyXG5cclxuICAgICAgICAvL+WcqOOAjOacgOi/kem7nuOAjeagvOijoeeahGxvY2FsIHV2XHJcbiAgICAgICAgbGV0IHNfdSA9IHUgJSBncmlkX3U7XHJcbiAgICAgICAgbGV0IHNfdiA9IHYgJSBncmlkX3Y7XHJcblxyXG4gICAgICAgIC8v5YaN5om+5Ye655u46YSwM+m7nlxyXG4gICAgICAgIGlmIChzX3UgPj0gaGFsZl9ncmlkX3UgJiYgc192ID49IGhhbGZfZ3JpZF92KS8v55u46YSwM+m7nuWcqOWPs+S4i1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/liZvlpb3mlbTpmaTmmYLopoHlgZrkv67mraNcclxuICAgICAgICAgICAgaWYgKG5lYXJlc3RfcG9pbnRfdV9mbG9hdCA9PSBuZWFyZXN0X3BvaW50X3UpXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0X3BvaW50X3UgPSBuZWFyZXN0X3BvaW50X3UgLSAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5lYXJlc3RfcG9pbnRfdl9mbG9hdCA9PSBuZWFyZXN0X3BvaW50X3YpXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0X3BvaW50X3YgPSBuZWFyZXN0X3BvaW50X3YgLSAxO1xyXG4gICAgICAgICAgICBsZXQgUCA9IG5ldyBWZWN0b3IyRChuZWFyZXN0X3BvaW50X3UsIG5lYXJlc3RfcG9pbnRfdik7XHJcblxyXG4gICAgICAgICAgICAvLyDlj7PkuItcclxuICAgICAgICAgICAgbGV0IE5FID0gbmV3IFZlY3RvcjJEKFAueCArIDEsIFAueSk7XHJcbiAgICAgICAgICAgIGxldCBTVyA9IG5ldyBWZWN0b3IyRChQLngsIFAueSArIDEpO1xyXG4gICAgICAgICAgICBsZXQgU0UgPSBuZXcgVmVjdG9yMkQoUC54ICsgMSwgUC55ICsgMSk7XHJcbiAgICAgICAgICAgIC8v5ZyoNOm7nuWFp+eahHV2XHJcbiAgICAgICAgICAgIGxldCByZWN0VVYgPSBuZXcgVmVjdG9yMkQoKHNfdSAtIGhhbGZfZ3JpZF91KSAvIGdyaWRfdSwgKHNfdiAtIGhhbGZfZ3JpZF92KSAvIGdyaWRfdik7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3RVViwgTlc6IFAsIE5FLCBTVywgU0UsIGNvbG9yOiBTYW1wbGVyLkJpbGluZWFyX1NhbXBsZXIocmVjdFVWLCBQLCBORSwgU1csIFNFLCBidWZmZXIpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNfdSA8PSBoYWxmX2dyaWRfdSAmJiBzX3YgPj0gaGFsZl9ncmlkX3YpLy/nm7jphLAz6bue5Zyo5bem5LiLXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WJm+WlveaVtOmZpOaZguimgeWBmuS/ruato1xyXG4gICAgICAgICAgICBpZiAobmVhcmVzdF9wb2ludF92X2Zsb2F0ID09IG5lYXJlc3RfcG9pbnRfdilcclxuICAgICAgICAgICAgICAgIG5lYXJlc3RfcG9pbnRfdiA9IG5lYXJlc3RfcG9pbnRfdiAtIDE7XHJcbiAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3RvcjJEKG5lYXJlc3RfcG9pbnRfdSwgbmVhcmVzdF9wb2ludF92KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW3puS4i1xyXG4gICAgICAgICAgICBsZXQgTlcgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55KTtcclxuICAgICAgICAgICAgbGV0IFNXID0gbmV3IFZlY3RvcjJEKFAueCAtIDEsIFAueSArIDEpO1xyXG4gICAgICAgICAgICBsZXQgU0UgPSBuZXcgVmVjdG9yMkQoUC54LCBQLnkgKyAxKTtcclxuICAgICAgICAgICAgLy/lnKg06bue5YWn55qEdXZcclxuICAgICAgICAgICAgbGV0IHJlY3RVViA9IG5ldyBWZWN0b3IyRCgoc191ICsgaGFsZl9ncmlkX3UpIC8gZ3JpZF91LCAoc192IC0gaGFsZl9ncmlkX3YpIC8gZ3JpZF92KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWLCBOVywgTkU6IFAsIFNXLCBTRSwgY29sb3I6IFNhbXBsZXIuQmlsaW5lYXJfU2FtcGxlcihyZWN0VVYsIE5XLCBQLCBTVywgU0UsIGJ1ZmZlcikgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc191IDw9IGhhbGZfZ3JpZF91ICYmIHNfdiA8PSBoYWxmX2dyaWRfdikvL+ebuOmEsDPpu57lnKjlt6bkuIpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3RvcjJEKG5lYXJlc3RfcG9pbnRfdSwgbmVhcmVzdF9wb2ludF92KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW3puS4ilxyXG4gICAgICAgICAgICBsZXQgTlcgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBORSA9IG5ldyBWZWN0b3IyRChQLngsIFAueSAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgU1cgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55KTtcclxuICAgICAgICAgICAgLy/lnKg06bue5YWn55qEdXZcclxuICAgICAgICAgICAgbGV0IHJlY3RVViA9IG5ldyBWZWN0b3IyRCgoc191ICsgaGFsZl9ncmlkX3UpIC8gZ3JpZF91LCAoc192ICsgaGFsZl9ncmlkX3YpIC8gZ3JpZF92KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWLCBOVywgTkUsIFNXLCBTRTogUCwgY29sb3I6IFNhbXBsZXIuQmlsaW5lYXJfU2FtcGxlcihyZWN0VVYsIE5XLCBORSwgU1csIFAsIGJ1ZmZlcikgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoc191ID49IGhhbGZfZ3JpZF91ICYmIHNfdiA8PSBoYWxmX2dyaWRfdikvL+ebuOmEsDPpu57lnKjlj7PkuIpcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy/liZvlpb3mlbTpmaTmmYLopoHlgZrkv67mraNcclxuICAgICAgICAgICAgaWYgKG5lYXJlc3RfcG9pbnRfdV9mbG9hdCA9PSBuZWFyZXN0X3BvaW50X3UpXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0X3BvaW50X3UgPSBuZWFyZXN0X3BvaW50X3UgLSAxO1xyXG4gICAgICAgICAgICBsZXQgUCA9IG5ldyBWZWN0b3IyRChuZWFyZXN0X3BvaW50X3UsIG5lYXJlc3RfcG9pbnRfdik7XHJcblxyXG4gICAgICAgICAgICAvLyDlj7PkuIpcclxuICAgICAgICAgICAgbGV0IE5XID0gbmV3IFZlY3RvcjJEKFAueCwgUC55IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBORSA9IG5ldyBWZWN0b3IyRChQLnggKyAxLCBQLnkgLSAxKTtcclxuICAgICAgICAgICAgbGV0IFNFID0gbmV3IFZlY3RvcjJEKFAueCArIDEsIFAueSk7XHJcbiAgICAgICAgICAgIC8v5ZyoNOm7nuWFp+eahHV2XHJcbiAgICAgICAgICAgIGxldCByZWN0VVYgPSBuZXcgVmVjdG9yMkQoKHNfdSAtIGhhbGZfZ3JpZF91KSAvIGdyaWRfdSwgKHNfdiArIGhhbGZfZ3JpZF92KSAvIGdyaWRfdik7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3RVViwgTlcsIE5FLCBTVzogUCwgU0UsIGNvbG9yOiBTYW1wbGVyLkJpbGluZWFyX1NhbXBsZXIocmVjdFVWLCBOVywgTkUsIFAsIFNFLCBidWZmZXIpIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBCaWxpbmVhcl9TYW1wbGVyKHJlY3RVVjogVmVjdG9yMkQsIE5XOiBWZWN0b3IyRCwgTkU6IFZlY3RvcjJELCBTVzogVmVjdG9yMkQsIFNFOiBWZWN0b3IyRCwgYnVmZmVyOiBCdWZmZXIyRDxSR0JBPikge1xyXG5cclxuICAgICAgICAvL+WwjTTlgIvpu57poY/oibLkvZzlhafmj5JcclxuICAgICAgICBsZXQgTldjID0gYnVmZmVyLmdldF9jbGFtcF9tb2RlKE5XLngsIE5XLnkpO1xyXG4gICAgICAgIGxldCBORWMgPSBidWZmZXIuZ2V0X2NsYW1wX21vZGUoTkUueCwgTkUueSk7XHJcbiAgICAgICAgbGV0IFNXYyA9IGJ1ZmZlci5nZXRfY2xhbXBfbW9kZShTVy54LCBTVy55KTtcclxuICAgICAgICBsZXQgU0VjID0gYnVmZmVyLmdldF9jbGFtcF9tb2RlKFNFLngsIFNFLnkpO1xyXG5cclxuICAgICAgICBsZXQgblJHQiA9IFJHQkEubGVycChOV2MsIE5FYywgcmVjdFVWLngpO1xyXG4gICAgICAgIGxldCBzUkdCID0gUkdCQS5sZXJwKFNXYywgU0VjLCByZWN0VVYueCk7XHJcbiAgICAgICAgbGV0IG1pZGRsZVJHQiA9IFJHQkEubGVycChuUkdCLCBzUkdCLCByZWN0VVYueSk7XHJcbiAgICAgICAgcmV0dXJuIG1pZGRsZVJHQjtcclxuICAgIH1cclxufSIsImltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgQ2F2bmFzSGVscGVyIGZyb20gXCIuL0NhbnZhc0hlbHBlclwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBTYW1wbGVyIGZyb20gXCIuL1NhbXBsZXJcIjtcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1ZlY3RvcjJEXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlMkQge1xyXG5cclxuXHJcbiAgICBsb2FkX3RleHR1cmVfYnVmZmVyKCkge1xyXG4gICAgICAgIGxldCB3ID0gdGhpcy5pbWcud2lkdGg7XHJcbiAgICAgICAgbGV0IGggPSB0aGlzLmltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXNfdGV4dHVyZSA9IENhdm5hc0hlbHBlci5zZXRfY2FudmFzKCdjYW52YXNfdGV4dHVyZScsIHcsIGgpO1xyXG4gICAgICAgIGxldCBjdHggPSBDYXZuYXNIZWxwZXIuZ2V0X2NvbnRleHRfYnlfY2FudmFzKGNhbnZhc190ZXh0dXJlKTtcclxuICAgICAgICBpZiAoIWN0eCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZF90ZXh0dXJlX2J1ZmZlciBmYWlsZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g5pS55oiQMeasoeiugOWujOWFqOmDqFxyXG4gICAgICAgIGxldCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3LCBoKS5kYXRhO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcjJEPFJHQkE+KHcsIGgpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VrZSA9IDQgKiAodyAqIHkgKyB4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnNldCh4LCB5LCBuZXcgUkdCQShkYXRhW3Nla2VdIC8gMjU1LCBkYXRhW3Nla2UgKyAxXSAvIDI1NSwgZGF0YVtzZWtlICsgMl0gLyAyNTUsIGRhdGFbc2VrZSArIDNdIC8gMjU1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHkgPj0gNyAmJiB5IDw9IDggJiYgeCA+PSA3ICYmIHggPD0gOCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+IHwgbnVsbCA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubG9hZF90ZXh0dXJlX2J1ZmZlciA9IHRoaXMubG9hZF90ZXh0dXJlX2J1ZmZlci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB0aGlzLmltZy5vbmxvYWQgPSB0aGlzLmxvYWRfdGV4dHVyZV9idWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHV2OiBWZWN0b3IyRCkge1xyXG4gICAgICAgIGlmICghdGhpcy5idWZmZXIpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3RVVjogbnVsbCwgTlc6IG51bGwsIE5FOiBudWxsLCBTVzogbnVsbCwgU0U6IG51bGwsIGNvbG9yOiBSR0JBLmJsYWNrIH07XHJcbiAgICAgICAgcmV0dXJuIFNhbXBsZXIudGV4dHVyZTJEKHV2LCB0aGlzLmJ1ZmZlcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2NlbmVOb2RlIGZyb20gXCIuLi9PYmplY3QvU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBSYXkgZnJvbSBcIi4vUmF5XCI7XHJcbmltcG9ydCBSYXk0RCBmcm9tIFwiLi9SYXk0RFwiO1xyXG5pbXBvcnQgSGl0SW5mbyBmcm9tIFwiLi9IaXRJbmZvXCI7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xyXG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL1ZlcnRleFwiO1xyXG5pbXBvcnQgUGxhbmUgZnJvbSBcIi4vUGxhbmVcIjtcclxuaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5pbXBvcnQgQnVmZmVyMkQgZnJvbSBcIi4vQnVmZmVyMkRcIjtcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1ZlY3RvcjJEXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlX3RvX1JhZChkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLlBJICogZCAvIDE4MDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcHNpbG9uOiBudW1iZXIgPSAwLjAwMTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJfZXF1YWwoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYikgPCBlcHNpbG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAoeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIGlmICh4ID4gbWF4KVxyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICBlbHNlIGlmICh4IDwgbWluKVxyXG4gICAgICAgIHJldHVybiBtaW47XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfaGl0X3NvcnRfbGlzdChvYmpfbGlzdDogU2NlbmVOb2RlW10sIHJheTogUmF5KSB7XHJcblxyXG4gICAgbGV0IGxpc3QgPSBvYmpfbGlzdC5tYXAob2JqID0+IG9iai5oLmhpdChyYXksIG9iai5zKSk7XHJcbiAgICBsZXQgaGl0X2xpc3QgPSA8SGl0SW5mb1tdPihsaXN0LmZpbHRlcihpbmZvID0+IGluZm8gIT0gbnVsbCAmJiBpbmZvLnBvc2l0aXZlX3QpKTtcclxuXHJcbiAgICByZXR1cm4gaGl0X2xpc3Quc29ydCgoYTogSGl0SW5mbywgYjogSGl0SW5mbykgPT4gYS50IC0gYi50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldF9zaGFkb3dfd2VpZ2h0KGhpdF9pbmZvOiBIaXRJbmZvLCBkaXJlY3Rpb25fbGlnaHRfZGlyOiBWZWN0b3IsIG9ial9saXN0OiBTY2VuZU5vZGVbXSkge1xyXG5cclxuICAgIC8vIOaYr+WQpuWcqOW9seWtkOWFp1xyXG4gICAgbGV0IGRpciA9IGRpcmVjdGlvbl9saWdodF9kaXIubmVnYXRpdmUoKTtcclxuICAgIGxldCBmcm9tID0gaGl0X2luZm8uaGl0X3Bvcy5hZGQoZGlyLm11bHRpcGx5KGVwc2lsb24pKTsgLy8g5YGP56e75LiA5bCP5q616Led6Zui77yM6YG/5YWN5bCE5Lit6Ieq5bexXHJcbiAgICBsZXQgcmF5ID0gbmV3IFJheShmcm9tLCBkaXIpO1xyXG4gICAgbGV0IGhpdF9zb3J0X2xpc3QgPSBnZXRfaGl0X3NvcnRfbGlzdChvYmpfbGlzdCwgcmF5KTtcclxuICAgIGlmIChoaXRfc29ydF9saXN0Lmxlbmd0aCAhPSAwKSB7IC8vIOWcqOW9seWtkOWFp1xyXG4gICAgICAgIHJldHVybiAwLjQ1OyAvLyDkuI3opoHlpKrpu5FcclxuICAgIH0gZWxzZVxyXG4gICAgICAgIHJldHVybiAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDbGlwUGxhbmUge1xyXG4gICAgTmVhcixcclxuICAgIEZhcixcclxuICAgIFJpZ2h0LFxyXG4gICAgTGVmdCxcclxuICAgIFRvcCxcclxuICAgIEJvdHRvbVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpcCh0cmlhbmdsZTogVHJpYW5nbGUsXHJcbiAgICB2MF9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICB2MV9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICB2Ml9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICBwbGFuZTogQ2xpcFBsYW5lKSB7XHJcblxyXG4gICAgbGV0IHZfY2xpcDogVHJpYW5nbGVbXSA9IFtdO1xyXG5cclxuICAgIGxldCBnZXRDcm9zc1BvaW50ID0gZnVuY3Rpb24gKHYwOiBWZXJ0ZXgsIHYxOiBWZXJ0ZXgpIHtcclxuICAgICAgICBsZXQgcmF5ID0gbmV3IFJheTREKHYwLmdldF9WZWN0b3I0RCgpLCB2MS5nZXRfVmVjdG9yNEQoKSk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gMDtcclxuICAgICAgICBzd2l0Y2ggKHBsYW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLkZhcjpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3pfZXF1YWxfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLk5lYXI6XHJcbiAgICAgICAgICAgICAgICB0ID0gcmF5LnRfd2hlbl96X2VxdWFsX3plcm9fdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdCA9IHJheS50X3doZW5feF9lcXVhbF93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuTGVmdDpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3hfZXF1YWxfbWludXNfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLlRvcDpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3lfZXF1YWxfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLkJvdHRvbTpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3lfZXF1YWxfbWludXNfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVmVydGV4LmxlcnAodjAsIHYxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2byBpbiBcclxuICAgIGxldCBjbGlwX2ZpcnN0X2luID0gZnVuY3Rpb24gKHYwOiBWZXJ0ZXgsIHYxOiBWZXJ0ZXgsIHYyOiBWZXJ0ZXgpIHtcclxuICAgICAgICAvLyAxIHRyaWFuZ2xlIHRvIDEgdHJpYW5nbGVcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25lJyk7XHJcbiAgICAgICAgdl9jbGlwWzBdID0gbmV3IFRyaWFuZ2xlKHYwLCBnZXRDcm9zc1BvaW50KHYwLCB2MSksIGdldENyb3NzUG9pbnQodjAsIHYyKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB2byBvdXRcclxuICAgIGxldCBjbGlwX2ZpcnN0X291dCA9IGZ1bmN0aW9uICh2MDogVmVydGV4LCB2MTogVmVydGV4LCB2MjogVmVydGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3R3bycpO1xyXG4gICAgICAgIC8vIDEgdHJpYW5nbGUgdG8gMiB0cmlhbmdsZVxyXG4gICAgICAgIGxldCBjcm9zczEgPSBnZXRDcm9zc1BvaW50KHYyLCB2MCk7XHJcbiAgICAgICAgbGV0IGNyb3NzMiA9IGdldENyb3NzUG9pbnQodjAsIHYxKTtcclxuXHJcbiAgICAgICAgdl9jbGlwWzBdID0gbmV3IFRyaWFuZ2xlKHYyLCBjcm9zczEsIGNyb3NzMik7XHJcbiAgICAgICAgdl9jbGlwWzFdID0gbmV3IFRyaWFuZ2xlKHYyLCBjcm9zczIsIHYxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g5pyJOOeoruaDheazgVxyXG4gICAgaWYgKHYwX291dCh0cmlhbmdsZSkpLy9vdXRcclxuICAgIHtcclxuICAgICAgICBpZiAodjFfb3V0KHRyaWFuZ2xlKSkvLyBvdXQgb3V0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvLyBvdXQgb3V0IG91dCAobm8gY2xpcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z1bGwgb3V0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSAvL291dCBvdXQgaW5cclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3RfaW4odHJpYW5nbGUudjIsIHRyaWFuZ2xlLnYwLCB0cmlhbmdsZS52MSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgLy9vdXQgaW4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvL291dCBpbiBvdXRcclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3RfaW4odHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyLCB0cmlhbmdsZS52MCk7XHJcbiAgICAgICAgICAgIGVsc2UgLy8gb3V0IGluIGluXHJcbiAgICAgICAgICAgICAgICBjbGlwX2ZpcnN0X291dCh0cmlhbmdsZS52MCwgdHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIC8vIGluXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHYxX291dCh0cmlhbmdsZSkpLy8gaW4gb3V0IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYyX291dCh0cmlhbmdsZSkpLy8gaW4gb3V0IG91dFxyXG4gICAgICAgICAgICAgICAgY2xpcF9maXJzdF9pbih0cmlhbmdsZS52MCwgdHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyKTtcclxuICAgICAgICAgICAgZWxzZSAvLyBpbiBvdXQgaW5cclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3Rfb3V0KHRyaWFuZ2xlLnYxLCB0cmlhbmdsZS52MiwgdHJpYW5nbGUudjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIC8vIGluIGluXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvLyBpbiBpbiBvdXRcclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3Rfb3V0KHRyaWFuZ2xlLnYyLCB0cmlhbmdsZS52MCwgdHJpYW5nbGUudjEpO1xyXG4gICAgICAgICAgICBlbHNlIC8vIGluIGluIGluIChubyBjbGlwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2X2NsaXBbMF0gPSB0cmlhbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2X2NsaXA7XHJcbn1cclxuXHJcbi8vIOiZleeQhua1rum7nuaVuOeyvuW6puWVj+mhjFxyXG4vLyBjb2RlIGZyb20gaHR0cDovLzhzdC5ibG9nc3BvdC50dy8yMDEyLzEwL2pzYnVnLmh0bWxcclxuZXhwb3J0IGNsYXNzIE1hdGhIZWxwZXIge1xyXG5cclxuICAgIC8vIOiZleeQhumZpOazleeyvuW6puWVj+mhjFxyXG4gICAgLy8gKGFyZzEgKiAxMF50MSkgLyAoYXJnMiAqIDEwXnQyKSA9IChhcmcxL2FyZzIpKjEwXih0MS10MilcclxuICAgIC8vIOaJgOS7peacgOW+jOimgeS5mOS4iiAxLzEwXih0MS10MikgPSAxMF4odDItdDEpXHJcbiAgICBzdGF0aWMgYWNjRGl2KGFyZzE6IG51bWJlciwgYXJnMjogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCB0MSA9IDAsIHQyID0gMCwgcjEsIHIyO1xyXG4gICAgICAgIHRyeSB7IHQxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfSBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgdHJ5IHsgdDIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB9IGNhdGNoIChlKSB7IH1cclxuXHJcbiAgICAgICAgcjEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKVxyXG4gICAgICAgIHIyID0gTnVtYmVyKGFyZzIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSlcclxuICAgICAgICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiZleeQhuWKoOazleeyvuW6puWVj+mhjFxyXG4gICAgLy8g55u455W25pa85YWI5ZCE6IeqPj5t5b6M77yM55u45Yqg77yM5YaNPDxtXHJcbiAgICBzdGF0aWMgYWNjQWRkKGFyZzE6IG51bWJlciwgYXJnMjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jb2RlIGZyb20gaHR0cDovLzhzdC5ibG9nc3BvdC50dy8yMDEyLzEwL2pzYnVnLmh0bWxcclxuICAgICAgICBsZXQgcjEsIHIyLCBtLCBjO1xyXG4gICAgICAgIHRyeSB7IHIxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfSBjYXRjaCAoZSkgeyByMSA9IDAgfVxyXG4gICAgICAgIHRyeSB7IHIyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfSBjYXRjaCAoZSkgeyByMiA9IDAgfVxyXG4gICAgICAgIGMgPSBNYXRoLmFicyhyMSAtIHIyKTtcclxuICAgICAgICBtID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KHIxLCByMikpXHJcbiAgICAgICAgaWYgKGMgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBjbSA9IE1hdGgucG93KDEwLCBjKTtcclxuICAgICAgICAgICAgaWYgKHIxID4gcjIpIHtcclxuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcclxuICAgICAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIGNtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJnMSA9IE51bWJlcihhcmcxLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpICogY207XHJcbiAgICAgICAgICAgICAgICBhcmcyID0gTnVtYmVyKGFyZzIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcclxuICAgICAgICAgICAgYXJnMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKGFyZzEgKyBhcmcyKSAvIG1cclxuICAgIH1cclxufVxyXG5cclxuLy8g5Lul5YmN5a+r55qEY29kZVxyXG5leHBvcnQgY2xhc3MgRHJhd0hlbHBlciB7XHJcblxyXG4gICAgc3RhdGljIGRyYXdMaW5lKG9uZTogVmVjdG9yMkQsIHR3bzogVmVjdG9yMkQsIHZhbHVlOiBSR0JBLCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcblxyXG4gICAgICAgIGxldCBub3cgPSBvbmU7XHJcbiAgICAgICAgbGV0IHRvID0gdHdvO1xyXG4gICAgICAgIGxldCBkaWZmID0gVmVjdG9yMkQubWludXModG8sIG5vdyk7XHJcblxyXG4gICAgICAgIGxldCBzdGVwID0gMTAwO1xyXG4gICAgICAgIGlmIChkaWZmLnkgPT0gMCkvL2hvcml6b25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RlcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL+W3pueVq+WIsOWPs1xyXG4gICAgICAgICAgICAgICAgbm93LnggPSBub3cueCArIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci5pc19sZWdhbF9pbmRleChub3cueCwgbm93LnkpKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub3cueCA+IHRvLngpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnNldChub3cueCwgbm93LnksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlmZi54ID09IDApLy92ZXJ0aWNhbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5LiK55Wr5Yiw5LiLXHJcbiAgICAgICAgICAgICAgICBub3cueSA9IG5vdy55ICsgMTtcclxuICAgICAgICAgICAgICAgIGlmICghYnVmZmVyLmlzX2xlZ2FsX2luZGV4KG5vdy54LCBub3cueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vdy55ID4gdG8ueSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBidWZmZXIuc2V0KG5vdy54LCBub3cueSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYXRpbyA9IGRpZmYueCAvIGRpZmYueTtcclxuICAgICAgICBsZXQgYWJzX3IgPSBNYXRoLmFicyhyYXRpbyk7XHJcblxyXG4gICAgICAgIGlmIChyYXRpbyA+IDApIHtcclxuICAgICAgICAgICAgaWYgKGFic19yIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RlcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnkgPSBub3cueSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnggPSBub3cueCArIGFic19yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRYID0gTWF0aC5mbG9vcihub3cueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIuaXNfbGVnYWxfaW5kZXgoaW50WCwgbm93LnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5pc19vdmVyX3Bvc2l0aXZlKG5vdy54LCBub3cueSwgdG8ueCwgdG8ueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIuc2V0KGludFgsIG5vdy55LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYWJzX3IgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy55ID0gbm93LnkgKyAxIC8gYWJzX3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnggPSBub3cueCArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludFkgPSBNYXRoLmZsb29yKG5vdy55KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci5pc19sZWdhbF9pbmRleChub3cueCwgaW50WSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmlzX292ZXJfcG9zaXRpdmUobm93LngsIG5vdy55LCB0by54LCB0by55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5zZXQobm93LngsIGludFksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyYXRpbyA8IDApIHtcclxuICAgICAgICAgICAgaWYgKGFic19yIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RlcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnkgPSBub3cueSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnggPSBub3cueCAtIGFic19yO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRYID0gTWF0aC5mbG9vcihub3cueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIuaXNfbGVnYWxfaW5kZXgoaW50WCwgbm93LnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5pc19vdmVyX25lZ2F0aXZlKG5vdy54LCBub3cueSwgdG8ueCwgdG8ueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIuc2V0KGludFgsIG5vdy55LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYWJzX3IgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy55ID0gbm93LnkgKyAxIC8gYWJzX3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnggPSBub3cueCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludFkgPSBNYXRoLmZsb29yKG5vdy55KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci5pc19sZWdhbF9pbmRleChub3cueCwgaW50WSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmlzX292ZXJfbmVnYXRpdmUobm93LngsIG5vdy55LCB0by54LCB0by55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5zZXQobm93LngsIGludFksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRyYXdDaXJjbGUodmFsdWU6IFJHQkEsIGJ1ZmZlcjogQnVmZmVyMkQ8UkdCQT4pIHtcclxuICAgICAgICBsZXQgaXQgPSA1MDtcclxuICAgICAgICBsZXQgZGVsdGEgPSAyICogTWF0aC5QSSAvIGl0O1xyXG4gICAgICAgIGxldCBSID0gOTtcclxuICAgICAgICBsZXQgY2VudGVyID0gbmV3IFZlY3RvcjJEKDEwLCAxMCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGhlZGEgPSAtTWF0aC5QSSAvIDM7XHJcblxyXG4gICAgICAgIC8v55Wr5ZyTXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub3dYID0gTWF0aC5mbG9vcihjZW50ZXIueCArIFIgKiBNYXRoLmNvcyhzdGFydFRoZWRhICsgZGVsdGEgKiBpKSk7XHJcbiAgICAgICAgICAgIGxldCBub3dZID0gTWF0aC5mbG9vcihjZW50ZXIueSArIFIgKiBNYXRoLnNpbihzdGFydFRoZWRhICsgZGVsdGEgKiBpKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFggPSBNYXRoLmZsb29yKGNlbnRlci54ICsgUiAqIE1hdGguY29zKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIChpICsgMSkpKTtcclxuICAgICAgICAgICAgbGV0IG5leHRZID0gTWF0aC5mbG9vcihjZW50ZXIueSArIFIgKiBNYXRoLnNpbihzdGFydFRoZWRhICsgZGVsdGEgKiAoaSArIDEpKSk7XHJcblxyXG4gICAgICAgICAgICBEcmF3SGVscGVyLmRyYXdMaW5lV3JhcHBlcihuZXcgVmVjdG9yMkQobm93WCwgbm93WSksIG5ldyBWZWN0b3IyRChuZXh0WCwgbmV4dFkpLCB2YWx1ZSwgYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBkcmF3U3Rhcih2YWx1ZTogUkdCQSwgYnVmZmVyOiBCdWZmZXIyRDxSR0JBPikge1xyXG4gICAgICAgIGxldCBpdCA9IDU7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gMiAqIE1hdGguUEkgLyBpdDtcclxuICAgICAgICBsZXQgUiA9IDk7XHJcbiAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBWZWN0b3IyRCgxMCwgMTApO1xyXG4gICAgICAgIGxldCBzdGFydFRoZWRhID0gLU1hdGguUEkgLyAzO1xyXG5cclxuICAgICAgICAvL+eVq+aYn+aYn1xyXG4gICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vd1ggPSBNYXRoLmZsb29yKGNlbnRlci54ICsgUiAqIE1hdGguY29zKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIGspKTtcclxuICAgICAgICAgICAgbGV0IG5vd1kgPSBNYXRoLmZsb29yKGNlbnRlci55ICsgUiAqIE1hdGguc2luKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIGspKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0WCA9IE1hdGguZmxvb3IoY2VudGVyLnggKyBSICogTWF0aC5jb3Moc3RhcnRUaGVkYSArIGRlbHRhICogKGsgKyAyKSkpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFkgPSBNYXRoLmZsb29yKGNlbnRlci55ICsgUiAqIE1hdGguc2luKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIChrICsgMikpKTtcclxuXHJcbiAgICAgICAgICAgIERyYXdIZWxwZXIuZHJhd0xpbmVXcmFwcGVyKG5ldyBWZWN0b3IyRChub3dYLCBub3dZKSwgbmV3IFZlY3RvcjJEKG5leHRYLCBuZXh0WSksIHZhbHVlLCBidWZmZXIpO1xyXG4gICAgICAgICAgICBrID0gayArIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkcmF3TGluZVdyYXBwZXIodDA6IFZlY3RvcjJELCB0MTogVmVjdG9yMkQsIHZhbHVlOiBSR0JBLCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcbiAgICAgICAgLy/lvp7kuIrlvoDkuIvnlatcclxuICAgICAgICBpZiAodDAueSA8IHQxLnkpXHJcbiAgICAgICAgICAgIERyYXdIZWxwZXIuZHJhd0xpbmUodDAsIHQxLCB2YWx1ZSwgYnVmZmVyKTtcclxuICAgICAgICBlbHNlIGlmICh0MS55IDwgdDAueSlcclxuICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3TGluZSh0MSwgdDAsIHZhbHVlLCBidWZmZXIpO1xyXG4gICAgICAgIGVsc2UgLy/msLTlubPnt5pcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5b6e5bem5b6A5Y+z55WrXHJcbiAgICAgICAgICAgIGlmICh0MC54IDwgdDEueClcclxuICAgICAgICAgICAgICAgIERyYXdIZWxwZXIuZHJhd0xpbmUodDAsIHQxLCB2YWx1ZSwgYnVmZmVyKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodDEueCA8IHQwLngpXHJcbiAgICAgICAgICAgICAgICBEcmF3SGVscGVyLmRyYXdMaW5lKHQxLCB0MCwgdmFsdWUsIGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IHsgZGVncmVlX3RvX1JhZCB9IGZyb20gJy4vVG9vbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybSB7XHJcbiAgICB4QXhpczogVmVjdG9yO1xyXG4gICAgeUF4aXM6IFZlY3RvcjtcclxuICAgIHpBeGlzOiBWZWN0b3I7XHJcbiAgICBwb3NpdGlvbjogVmVjdG9yO1xyXG4gICAgY29uc3RydWN0b3IoeEF4aXM6IFZlY3RvciwgeUF4aXM6IFZlY3RvciwgekF4aXM6IFZlY3RvciwgcG9zaXRpb246IFZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMueEF4aXMgPSB4QXhpcztcclxuICAgICAgICB0aGlzLnlBeGlzID0geUF4aXM7XHJcbiAgICAgICAgdGhpcy56QXhpcyA9IHpBeGlzO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtUG9pbnQodHJhbnNmb3JtOiBUcmFuc2Zvcm0sIHBvaW50OiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdmVjdG9yWCA9IHRyYW5zZm9ybS54QXhpcy5tdWx0aXBseShwb2ludC54KTtcclxuICAgICAgICBsZXQgdmVjdG9yWSA9IHRyYW5zZm9ybS55QXhpcy5tdWx0aXBseShwb2ludC55KTtcclxuICAgICAgICBsZXQgdmVjdG9yWiA9IHRyYW5zZm9ybS56QXhpcy5tdWx0aXBseShwb2ludC56KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodmVjdG9yWCkuYWRkKHZlY3RvclkpLmFkZCh2ZWN0b3JaKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtVmVjdG9yKHRyYW5zZm9ybTogVHJhbnNmb3JtLCB2ZXJ0ZXg6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCB2ZWN0b3JYID0gdHJhbnNmb3JtLnhBeGlzLm11bHRpcGx5KHZlcnRleC54KTtcclxuICAgICAgICBsZXQgdmVjdG9yWSA9IHRyYW5zZm9ybS55QXhpcy5tdWx0aXBseSh2ZXJ0ZXgueSk7XHJcbiAgICAgICAgbGV0IHZlY3RvclogPSB0cmFuc2Zvcm0uekF4aXMubXVsdGlwbHkodmVydGV4LnopO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVjdG9yWC5hZGQodmVjdG9yWSkuYWRkKHZlY3RvclopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1UcmFuc2Zvcm0odHJhbnNmb3JtOiBUcmFuc2Zvcm0sIGlucHV0VHJhbnNmb3JtOiBUcmFuc2Zvcm0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybShcclxuICAgICAgICAgICAgVHJhbnNmb3JtLnRyYW5zZm9ybVZlY3Rvcih0cmFuc2Zvcm0sIGlucHV0VHJhbnNmb3JtLnhBeGlzKSxcclxuICAgICAgICAgICAgVHJhbnNmb3JtLnRyYW5zZm9ybVZlY3Rvcih0cmFuc2Zvcm0sIGlucHV0VHJhbnNmb3JtLnlBeGlzKSxcclxuICAgICAgICAgICAgVHJhbnNmb3JtLnRyYW5zZm9ybVZlY3Rvcih0cmFuc2Zvcm0sIGlucHV0VHJhbnNmb3JtLnpBeGlzKSxcclxuICAgICAgICAgICAgVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHRyYW5zZm9ybSwgaW5wdXRUcmFuc2Zvcm0ucG9zaXRpb24pLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZUJ5WihkZWdyZWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBkZWdyZWVfdG9fUmFkKGRlZ3JlZSk7XHJcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyhyYWRpYW4pLCBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICBsZXQgeEF4aXMgPSBuZXcgVmVjdG9yKGMsIHMsIDApO1xyXG4gICAgICAgIGxldCB5QXhpcyA9IG5ldyBWZWN0b3IoLXMsIGMsIDApO1xyXG4gICAgICAgIGxldCB6QXhpcyA9IG5ldyBWZWN0b3IoMCwgMCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKFxyXG4gICAgICAgICAgICB4QXhpcyxcclxuICAgICAgICAgICAgeUF4aXMsXHJcbiAgICAgICAgICAgIHpBeGlzLFxyXG4gICAgICAgICAgICBWZWN0b3IuemVybyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVCeVkoZGVncmVlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gZGVncmVlX3RvX1JhZChkZWdyZWUpO1xyXG4gICAgICAgIGxldCBjID0gTWF0aC5jb3MocmFkaWFuKSwgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgbGV0IHpBeGlzID0gbmV3IFZlY3RvcihzLCAwLCBjKTtcclxuICAgICAgICBsZXQgeEF4aXMgPSBuZXcgVmVjdG9yKGMsIDAsIC1zKTtcclxuICAgICAgICBsZXQgeUF4aXMgPSBuZXcgVmVjdG9yKDAsIDEsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybShcclxuICAgICAgICAgICAgeEF4aXMsXHJcbiAgICAgICAgICAgIHlBeGlzLFxyXG4gICAgICAgICAgICB6QXhpcyxcclxuICAgICAgICAgICAgVmVjdG9yLnplcm8sXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlQnlYKGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGRlZ3JlZV90b19SYWQoZGVncmVlKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHJhZGlhbiksIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIGxldCB4QXhpcyA9IG5ldyBWZWN0b3IoMSwgMCwgMCk7XHJcbiAgICAgICAgbGV0IHlBeGlzID0gbmV3IFZlY3RvcigwLCBjLCBzKTtcclxuICAgICAgICBsZXQgekF4aXMgPSBuZXcgVmVjdG9yKDAsIC1zLCBjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIHhBeGlzLFxyXG4gICAgICAgICAgICB5QXhpcyxcclxuICAgICAgICAgICAgekF4aXMsXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IoMCwgMCwgMCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb2Zmc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybShcclxuICAgICAgICAgICAgbmV3IFZlY3RvcigxLCAwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcigwLCAxLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcigwLCAwLCAxKSxcclxuICAgICAgICAgICAgbmV3IFZlY3Rvcih4LCB5LCB6KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL1RyYW5zZm9ybSc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InXHJcbmltcG9ydCBWZXJ0ZXggZnJvbSAnLi9WZXJ0ZXgnXHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEnO1xyXG5pbXBvcnQgUGxhbmUgZnJvbSAnLi9QbGFuZSc7XHJcbmltcG9ydCBSYXkgZnJvbSAnLi9SYXknO1xyXG5pbXBvcnQgUmFzdGVyaXplciBmcm9tICcuL1Jhc3Rlcml6ZXInO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gJy4vVGV4dHVyZTJEJztcclxuaW1wb3J0IHsgbnVtYmVyX2VxdWFsIH0gZnJvbSAnLi9Ub29sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWFuZ2xlIHtcclxuXHJcbiAgICAvLyDpgJnkupvpu5566YO95pivMFxyXG4gICAgc3RhdGljIGNhbGN1bGF0ZV/OsV/Osl/OsyhzMDogVmVjdG9yLCBzMTogVmVjdG9yLCBzMjogVmVjdG9yLCBQOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5taW51cyhQLCBzMCk7XHJcblxyXG4gICAgICAgIC8vIOaxgnJheShQLFMwLVMyKeWSjHJheShTMCxTMS1TMinnmoTkuqTpu55cclxuICAgICAgICAvLyDnrYnlkIzmlrzmsYJyYXkoUCxTMC1TMinlkozlubPpnaLnmoTkuqTpu55cclxuICAgICAgICBsZXQgZGlyMDEgPSBWZWN0b3IubWludXMoczEsIHMwKTtcclxuICAgICAgICBsZXQgZGlyMDIgPSBWZWN0b3IubWludXMoczIsIHMwKTtcclxuICAgICAgICBsZXQgbiA9IG5ldyBWZWN0b3IoLWRpcjAxLnksIGRpcjAxLngsIDApO1xyXG4gICAgICAgIGxldCByYXkgPSBuZXcgUmF5KFAsIGRpcjAyLm11bHRpcGx5KC0xKSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFBsYW5lLmhpdChyYXksIG5ldyBQbGFuZShzMCwgbikpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdCkgeyAvLyDpgIDljJbmiJDnm7Tnt5rnmoTkuInop5LlvaLmiY3mnInkuZ/lj6/og71cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+W5s+ihjCcsIHMwLCBzMSwgczIsIFApO1xyXG5cclxuICAgICAgICAgICAgLy8g5LiN6JmV55CGXHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCDOsTogMSwgzrI6IDAsIM6zOiAwIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcF9vbl9kaXIwMSA9IHJlc3VsdC5oaXRfcG9zO1xyXG4gICAgICAgIGxldCB2ZWN0b3JfzrEgPSBWZWN0b3IubWludXMocF9vbl9kaXIwMSwgczApO1xyXG4gICAgICAgIGxldCB2ZWN0b3JfzrIgPSBWZWN0b3IubWludXMoZGlmZiwgdmVjdG9yX86xKTtcclxuXHJcbiAgICAgICAgLy8g5pOL5o6JZGlyMDHjgIFkaXIwMuaYr3nou7jlubPooYznmoTmg4Xms4FcclxuICAgICAgICAvLyDmta7pu57mlbjoq4vnlKggbnVtYmVyX2VxdWFs77yM5LiN54S25pyDR0dcclxuICAgICAgICAvLyDopovlnJbvvJpidWcvZmxvYXRfcG9pbnRfY29tcGFpcmVfZXJyb3IoZml4ZWQpL2J1Z193aGVuX2NsaXBwaW5nXzIuanBnXHJcbiAgICAgICAgbGV0IM6xID0gbnVtYmVyX2VxdWFsKGRpcjAxLngsIDApID8gdmVjdG9yX86xLnkgLyBkaXIwMS55IDogdmVjdG9yX86xLnggLyBkaXIwMS54O1xyXG4gICAgICAgIGxldCDOsiA9IG51bWJlcl9lcXVhbChkaXIwMi54LCAwKSA/IHZlY3Rvcl/Osi55IC8gZGlyMDIueSA6IHZlY3Rvcl/Osi54IC8gZGlyMDIueDtcclxuICAgICAgICBsZXQgzrMgPSAxIC0gzrEgLSDOsjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgzrEsIM6yLCDOsyB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzX2luX3RyaWFuZ2xlKM6xOiBudW1iZXIsIM6yOiBudW1iZXIsIM6zOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKM6xID49IDAgJiYgzrIgPj0gMCAmJiDOsyA+PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlm6DngrpjYWxjdWxhdGVfzrFfzrJfzrPlr6bkvZznmoTmlrnlvI/vvIzmiYDku6XpoIbluo/mmK/Os+OAgc6x44CBzrIg8J+YnVxyXG4gICAgc3RhdGljIGludGVycG9sYXRpb24ozrM6IG51bWJlciwgzrE6IG51bWJlciwgzrI6IG51bWJlciwgdjA6IG51bWJlciwgdjE6IG51bWJlciwgdjI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB2MCAqIM6zICsgdjEgKiDOsSArIHYyICogzrI7XHJcbiAgICB9XHJcblxyXG4gICAgdjA6IFZlcnRleDtcclxuICAgIHYxOiBWZXJ0ZXg7XHJcbiAgICB2MjogVmVydGV4O1xyXG4gICAgY29uc3RydWN0b3IocHYwOiBWZXJ0ZXgsIHB2MTogVmVydGV4LCBwdjI6IFZlcnRleCkge1xyXG4gICAgICAgIHRoaXMudjAgPSBwdjA7XHJcbiAgICAgICAgdGhpcy52MSA9IHB2MTtcclxuICAgICAgICB0aGlzLnYyID0gcHYyO1xyXG4gICAgICAgIHRoaXMudl9zID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2X3M6IFZlY3RvcltdIHwgbnVsbDtcclxuICAgIHJhc3Rlcml6ZShwY2FtZXJhOiBDYW1lcmEsIHdvcmxkVHJhbnNmb3JtOiBUcmFuc2Zvcm0sIHRleHR1cmU6IFRleHR1cmUyRCkge1xyXG4gICAgICAgIHRoaXMudl9zID0gUmFzdGVyaXplci5wcm9jZXNzKHRoaXMsIHBjYW1lcmEsIHdvcmxkVHJhbnNmb3JtLCB0ZXh0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudl9zID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHRDb3VudCA9IHRoaXMudl9zLmxlbmd0aCAvIDM7XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDE7IGMgPD0gdENvdW50OyArK2MpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMyAqIGMgLSAxO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKHRoaXMudl9zW2luZGV4XS54LCB0aGlzLnZfc1tpbmRleF0ueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy52X3NbaW5kZXggLSAyXS54LCB0aGlzLnZfc1tpbmRleCAtIDJdLnkpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMudl9zW2luZGV4IC0gMV0ueCwgdGhpcy52X3NbaW5kZXggLSAxXS55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnZfc1tpbmRleF0ueCwgdGhpcy52X3NbaW5kZXhdLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgbGVycCwgbnVtYmVyX2VxdWFsLCBjbGFtcCB9IGZyb20gJy4vVG9vbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XHJcblxyXG4gICAgc3RhdGljIG1pbl9tYXgodjA6IFZlY3RvciwgdjE6IFZlY3RvciwgdjI6IFZlY3Rvcikge1xyXG5cclxuICAgICAgICBsZXQgbWluID0gbmV3IFZlY3RvcihNYXRoLm1pbihNYXRoLm1pbih2MC54LCB2MS54KSwgdjIueCksIE1hdGgubWluKE1hdGgubWluKHYwLnksIHYxLnkpLCB2Mi55KSwgTWF0aC5taW4oTWF0aC5taW4odjAueiwgdjEueiksIHYyLnopKTtcclxuICAgICAgICBsZXQgbWF4ID0gbmV3IFZlY3RvcihNYXRoLm1heChNYXRoLm1heCh2MC54LCB2MS54KSwgdjIueCksIE1hdGgubWF4KE1hdGgubWF4KHYwLnksIHYxLnkpLCB2Mi55KSwgTWF0aC5tYXgoTWF0aC5tYXgodjAueiwgdjEueiksIHYyLnopKTtcclxuICAgICAgICByZXR1cm4geyBtaW4sIG1heCB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjYWxjdWxhdGVfbm9ybWFsKHYwOiBWZWN0b3IsIHYxOiBWZWN0b3IsIHYyOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdjAxID0gVmVjdG9yLm1pbnVzKHYxLCB2MCk7XHJcbiAgICAgICAgbGV0IHYwMiA9IFZlY3Rvci5taW51cyh2MiwgdjApO1xyXG4gICAgICAgIGxldCBub3JtYWwgPSBWZWN0b3IuY3Jvc3ModjAxLCB2MDIpO1xyXG4gICAgICAgIHJldHVybiBub3JtYWwubm9ybWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNhbGN1bGF0ZV9jZW50ZXIodjA6IFZlY3RvciwgdjE6IFZlY3RvciwgdjI6IFZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiB2MC5hZGQodjEpLmFkZCh2MikubXVsdGlwbHkoMSAvIDMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1dih1OiBudW1iZXIsIHY6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHUsIHYsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cCA9IG5ldyBWZWN0b3IoMCwgMSwgMCk7XHJcbiAgICBzdGF0aWMgemVybyA9IG5ldyBWZWN0b3IoMCwgMCwgMCk7XHJcblxyXG4gICAgc3RhdGljIHJlZmxlY3QoSTogVmVjdG9yLCBOOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgTCA9IC0yICogVmVjdG9yLmRvdChJLCBOKVxyXG4gICAgICAgIHJldHVybiBOLm11bHRpcGx5KEwpLmFkZChJKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yKEIueCArIEEueCwgQi55ICsgQS55LCBCLnogKyBBLnopO1xyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pbnVzKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yKEEueCAtIEIueCwgQS55IC0gQi55LCBBLnogLSBCLnopO1xyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG11bHRpcGx5KEE6IFZlY3RvciwgczogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yKEEueCAqIHMsIEEueSAqIHMsIEEueiAqIHMpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG11bHRpcGx5MyhBOiBWZWN0b3IsIEI6IFZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKEEueCAqIEIueCwgQS55ICogQi55LCBBLnogKiBCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcm9zcyhBOiBWZWN0b3IsIEI6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFZlY3RvcihBLnkgKiBCLnogLSBBLnogKiBCLnksIC1BLnggKiBCLnogKyBBLnogKiBCLngsIEEueCAqIEIueSAtIEEueSAqIEIueCk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChBOiBWZWN0b3IsIEI6IFZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBBLnggKiBCLnggKyBBLnkgKiBCLnkgKyBBLnogKiBCLno7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVxdWFsKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcl9lcXVhbChBLngsIEIueCkgJiYgbnVtYmVyX2VxdWFsKEEueSwgQi55KSAmJiBudW1iZXJfZXF1YWwoQS56LCBCLnopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKEE6IFZlY3RvciwgQjogVmVjdG9yLCB0OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihcclxuICAgICAgICAgICAgbGVycChBLngsIEIueCwgdCksXHJcbiAgICAgICAgICAgIGxlcnAoQS55LCBCLnksIHQpLFxyXG4gICAgICAgICAgICBsZXJwKEEueiwgQi56LCB0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgeDogbnVtYmVyID0gMDtcclxuICAgIHk6IG51bWJlciA9IDA7XHJcbiAgICB6OiBudW1iZXIgPSAwO1xyXG4gICAgY29uc3RydWN0b3IocHg6IG51bWJlciwgcHk6IG51bWJlciwgcHo6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHB4O1xyXG4gICAgICAgIHRoaXMueSA9IHB5O1xyXG4gICAgICAgIHRoaXMueiA9IHB6O1xyXG4gICAgfVxyXG5cclxuICAgIGNsYW1wX3gobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gY2xhbXAodGhpcy54LCBtaW4sIG1heCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBfeShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSBjbGFtcCh0aGlzLnksIG1pbiwgbWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLnopO1xyXG4gICAgfVxyXG5cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IHRoaXMubGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54IC8gdGVtcDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLyB0ZW1wO1xyXG4gICAgICAgIHRoaXMueiA9IHRoaXMueiAvIHRlbXA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKEE6IFZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IuYWRkKHRoaXMsIEEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzKEE6IFZlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IubWludXModGhpcywgQSk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHkoczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5tdWx0aXBseSh0aGlzLCBzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZWdhdGl2ZSgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yLm11bHRpcGx5KHRoaXMsIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBWZWN0b3IyRCgpIHtcclxuICAgICAgICB0aGlzLnogPSAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55LCB0aGlzLnopO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yMkQge1xyXG5cclxuICAgIHN0YXRpYyBhZGQoQTogVmVjdG9yMkQsIEI6IFZlY3RvcjJEKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yMkQoQi54ICsgQS54LCBCLnkgKyBBLnkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1pbnVzKEE6IFZlY3RvcjJELCBCOiBWZWN0b3IyRCkge1xyXG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFZlY3RvcjJEKEEueCAtIEIueCwgQS55IC0gQi55KTtcclxuICAgICAgICByZXR1cm4gdGVtcFxyXG4gICAgfVxyXG5cclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbHVzKHA6IFZlY3RvcjJEKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSk7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbHkoczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKiBzLCB0aGlzLnkgKiBzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gXCIoIFwiICsgdGhpcy54ICsgXCIgLCBcIiArIHRoaXMueSArIFwiIClcIjtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWNvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvcjREIHtcclxuICAgIHA6IFZlY29yO1xyXG4gICAgdzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHA6IFZlY29yLCB3OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnAgPSBwO1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICB9XHJcbn07IiwiXHJcbmltcG9ydCB7IGxlcnAgfSBmcm9tICcuL1Rvb2wnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJ1xyXG5pbXBvcnQgVmVjdG9yNEQgZnJvbSAnLi9WZWN0b3I0RCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0ZXgge1xyXG4gICAgc3RhdGljIGJ1aWxkX3ZlcnRleChwOiBWZWN0b3IsIG46IFZlY3RvciwgdzogbnVtYmVyLCB1OiBudW1iZXIsIHY6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB2ZXJ0ZXggPSBuZXcgVmVydGV4KHAsIG4sIHcsIHUsIHYpO1xyXG4gICAgICAgIHJldHVybiB2ZXJ0ZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAodjA6IFZlcnRleCwgdjE6IFZlcnRleCwgdDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHAgPSBWZWN0b3IubGVycCh2MC5wLCB2MS5wLCB0KTtcclxuICAgICAgICBsZXQgbiA9IFZlY3Rvci5sZXJwKHYwLm4sIHYxLm4sIHQpO1xyXG4gICAgICAgIGxldCB3ID0gbGVycCh2MC53LCB2MS53LCB0KTtcclxuICAgICAgICBsZXQgdSA9IGxlcnAodjAudSwgdjEudSwgdCk7XHJcbiAgICAgICAgbGV0IHYgPSBsZXJwKHYwLnYsIHYxLnYsIHQpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4KHAsIG4sIHcsIHUsIHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHA6IFZlY3RvcjtcclxuICAgIHc6IG51bWJlcjtcclxuICAgIHU6IG51bWJlcjtcclxuICAgIHY6IG51bWJlcjtcclxuICAgIG46IFZlY3RvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwOiBWZWN0b3IsIG46IFZlY3RvciwgdzogbnVtYmVyLCB1OiBudW1iZXIsIHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgdGhpcy5uID0gbjtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMudSA9IHU7XHJcbiAgICAgICAgdGhpcy52ID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlcnRleCh0aGlzLnAuY2xvbmUoKSwgdGhpcy5uLmNsb25lKCksIHRoaXMudywgdGhpcy51LCB0aGlzLnYpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZV9wKHA6IFZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlX3codzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRfVmVjdG9yNEQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3I0RCh0aGlzLnAsIHRoaXMudyk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCb3ggZnJvbSBcIi4vTWF0aC9Cb3gzRFwiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL01hdGgvQ2FtZXJhXCI7XHJcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4vTWF0aC9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9NYXRoL1ZlY3RvclwiO1xyXG5pbXBvcnQgUmVuZGVyVGFyZ2V0IGZyb20gJy4vTWF0aC9SZW5kZXJUYXJnZXQnO1xyXG5pbXBvcnQgQnVmZmVyMkQgZnJvbSBcIi4vTWF0aC9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9NYXRoL1JHQkFcIjtcclxuaW1wb3J0IFJhc3Rlcml6ZXIgZnJvbSBcIi4vTWF0aC9SYXN0ZXJpemVyXCI7XHJcbmltcG9ydCBDYXZuYXNIZWxwZXIgZnJvbSBcIi4vTWF0aC9DYW52YXNIZWxwZXJcIjtcclxuaW1wb3J0IFRleHR1cmUyRCBmcm9tIFwiLi9NYXRoL1RleHR1cmUyRFwiO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vTWF0aC9WZWN0b3IyRFwiO1xyXG5pbXBvcnQgSEhlbHBlciBmcm9tIFwiLi9NYXRoL0hIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhc3Rlcml6ZXJBcHAge1xyXG5cclxuICAgIGNhbWVyYUluZGV4X3ZpZXcgPSAxO1xyXG4gICAgY2FtZXJhSW5kZXhfY29udHJvbCA9IDA7XHJcbiAgICBjYW1lcmE6IENhbWVyYTtcclxuICAgIHRoYW5kbGUgPSAwO1xyXG5cclxuICAgIHNjcmVlbldpZHRoID0gNTEyO1xyXG4gICAgc2NyZWVuSGVpZ2h0ID0gNTEyO1xyXG5cclxuICAgIC8vIHNjcmVlbldpZHRoID0gMjU2O1xyXG4gICAgLy8gc2NyZWVuSGVpZ2h0ID0gMjU2O1xyXG5cclxuICAgIGJveDogQm94O1xyXG5cclxuICAgIHNraXBfZGlmZiA9IGZhbHNlO1xyXG4gICAgcHJlX3QgPSAwO1xyXG4gICAgc3VtX3QgPSAwO1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xyXG4gICAgcmVuZGVyX3RhcmdldDogUmVuZGVyVGFyZ2V0O1xyXG4gICAgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG4gICAgcGVla19zY3JlZW5fcG9zID0gbmV3IFZlY3RvcjJEKDQ1LCA2MCk7XHJcbiAgICBrZXlib3JkX2V2ZW50PzogS2V5Ym9hcmRFdmVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBSYXN0ZXJpemVyLmNvbG9yX2J1ZmZlciA9IG5ldyBCdWZmZXIyRDxSR0JBPih0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XHJcbiAgICAgICAgUmFzdGVyaXplci56X2J1ZmZlciA9IG5ldyBCdWZmZXIyRDxudW1iZXI+KHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcl90YXJnZXQgPSBuZXcgUmVuZGVyVGFyZ2V0KHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8g5LiN6IO95bCN5ZCMMeWAi2NhbnZhc+WPluS4jeWQjOeahGNvbnRleHRcclxuICAgICAgICB0aGlzLmN0eCA9IENhdm5hc0hlbHBlci5zZXRfY2FudmFzKCdjYW52YXNfbGluZScsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIENhdm5hc0hlbHBlci5zZXRfY2FudmFzKCdjYW52YXMnLCB0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYShuZXcgVmVjdG9yKDAsIDUwLCAtMjAwKSwgbmV3IFZlY3RvcigwLCAwLCAwKSwgNjAsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0LCA1LCA1MDApO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlMkQoJ3RleHR1cmUvQ29sbGFnZSAyMDIxLTExLTEzIDE0XzE3XzU0LmpwZycpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlMkQoJ3RleHR1cmUvdGhpbl9pc19nb29kXzUxMng1MTIuanBnJyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3RpbWVvdXQnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl9yZXN1bWUnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3RvZ2dsZV9kcmF3aW5nX21vZGUnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci51c2Vfc29saWRfY29sb3IgPSAhUmFzdGVyaXplci51c2Vfc29saWRfY29sb3I7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl90b2dnbGVfbmRjX2NsYW1wX2VmZmVjdCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSYXN0ZXJpemVyLm5kY19jbGFtcF9lZmZlY3QgPSAhUmFzdGVyaXplci5uZGNfY2xhbXBfZWZmZWN0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgSEhlbHBlci4kKCdidG5fc2V0X3BlZWtfcG9zaXRpb24nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBOdW1iZXIoSEhlbHBlci4kKCd0ZXh0X3NfeCcpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gTnVtYmVyKEhIZWxwZXIuJCgndGV4dF9zX3knKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlZWtfc2NyZWVuX3Bvcy54ID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVla19zY3JlZW5fcG9zLnkgPSB5O1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci5zZXRfcGVla19zY3JlZW5fcG9zKHRoaXMucGVla19zY3JlZW5fcG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4LCB5KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3ByaW50X3BlZWtfcG9zaXRpb24nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci5wcmludF9wZWVrX3Bvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSB0aGlzLmtleV9kb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IHRoaXMua2V5X3VwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcmF3U2NlbmUgPSB0aGlzLmRyYXdTY2VuZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFJhc3Rlcml6ZXIuc2V0X3BlZWtfc2NyZWVuX3Bvcyh0aGlzLnBlZWtfc2NyZWVuX3Bvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdW1fdCA9IDA7XHJcbiAgICAgICAgdGhpcy5wcmVfdCA9IDA7XHJcbiAgICAgICAgdGhpcy50aGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdTY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRoYW5kbGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5za2lwX2RpZmYgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3U2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGhhbmRsZSk7XHJcbiAgICAgICAgdGhpcy50aGFuZGxlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U2NlbmUoYWNjdW11bGF0ZWRUaW1lOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpZmYgPSBhY2N1bXVsYXRlZFRpbWUgLSB0aGlzLnByZV90O1xyXG4gICAgICAgIGlmICh0aGlzLnNraXBfZGlmZikge1xyXG4gICAgICAgICAgICB0aGlzLnNraXBfZGlmZiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkaWZmID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVfdCA9IGFjY3VtdWxhdGVkVGltZTtcclxuICAgICAgICB0aGlzLnN1bV90ICs9IGRpZmY7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGhpcy5zdW1fdC50b1N0cmluZygpICsgXCIsXCIgKyBhY2N1bXVsYXRlZFRpbWUudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLy8g5L2/55So6ICF6Ly45YWlXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzX2lucHV0KGRpZmYpO1xyXG5cclxuICAgICAgICAvLyDmuIXnqbpcclxuICAgICAgICBpZiAodGhpcy5jdHgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxODAsMzAsMTUsMC4xKVwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5zY3JlZW5XaWR0aCwgdGhpcy5zY3JlZW5IZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgLy8g55WrcGVlayBwb3NcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMCwxKVwiO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBlZWtfc2NyZWVuX3Bvcy54LCB0aGlzLnBlZWtfc2NyZWVuX3Bvcy55LCAxLCAxMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucGVla19zY3JlZW5fcG9zLngsIHRoaXMucGVla19zY3JlZW5fcG9zLnksIDEwLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUmFzdGVyaXplci5jbGVhcihSR0JBLmJsYWNrLCAxKTtcclxuXHJcbiAgICAgICAgLy8g56e75YuV56uL5pa56auUXHJcbiAgICAgICAgbGV0IG9mZnNldE1hdHJpeCA9IFRyYW5zZm9ybS5vZmZzZXQoMCwgMCwgMCk7XHJcbiAgICAgICAgbGV0IG5vd0RlZ3JlZSA9IHRoaXMuc3VtX3QgLyAxMDAwICogMTUgJSAzNjA7XHJcblxyXG4gICAgICAgIGxldCByb3RhdGVNYXRyaXggPSBUcmFuc2Zvcm0ucm90YXRlQnlZKG5vd0RlZ3JlZSk7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVNYXRyaXggPSBUcmFuc2Zvcm0udHJhbnNmb3JtVHJhbnNmb3JtKG9mZnNldE1hdHJpeCwgcm90YXRlTWF0cml4KTtcclxuICAgICAgICB0aGlzLmJveC5yYXN0ZXJpemUodGhpcy5jYW1lcmEsIGNvbWJpbmVNYXRyaXgsIHRoaXMudGV4dHVyZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3R4KVxyXG4gICAgICAgICAgICB0aGlzLmJveC5kcmF3X2xpbmUodGhpcy5jdHgpO1xyXG5cclxuICAgICAgICBvZmZzZXRNYXRyaXggPSBUcmFuc2Zvcm0ub2Zmc2V0KDAsIDAsIDE1MCk7XHJcbiAgICAgICAgcm90YXRlTWF0cml4ID0gVHJhbnNmb3JtLnJvdGF0ZUJ5WShub3dEZWdyZWUpO1xyXG4gICAgICAgIGNvbWJpbmVNYXRyaXggPSBUcmFuc2Zvcm0udHJhbnNmb3JtVHJhbnNmb3JtKHJvdGF0ZU1hdHJpeCwgb2Zmc2V0TWF0cml4KTtcclxuXHJcbiAgICAgICAgLy8g55Wr56uL5pa56auUXHJcbiAgICAgICAgdGhpcy5ib3gucmFzdGVyaXplKHRoaXMuY2FtZXJhLCBjb21iaW5lTWF0cml4LCB0aGlzLnRleHR1cmUpO1xyXG4gICAgICAgIGlmICh0aGlzLmN0eClcclxuICAgICAgICAgICAgdGhpcy5ib3guZHJhd19saW5lKHRoaXMuY3R4KTtcclxuXHJcbiAgICAgICAgLy8g6aGv56S65YiwcmVuZGVyIHRhcmdldFxyXG4gICAgICAgIFJhc3Rlcml6ZXIuc2hvdyh0aGlzLnJlbmRlcl90YXJnZXQpO1xyXG5cclxuICAgICAgICB0aGlzLnRoYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhd1NjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzX2lucHV0KGRlbHRhX3RpbWU6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMua2V5Ym9yZF9ldmVudClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgS2VwTWFwID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHc6IDg3LFxyXG4gICAgICAgICAgICByOiA4MixcclxuXHJcbiAgICAgICAgICAgIGU6IDY5LFxyXG4gICAgICAgICAgICBkOiA2OCxcclxuICAgICAgICAgICAgczogODMsXHJcbiAgICAgICAgICAgIGY6IDcwLFxyXG5cclxuICAgICAgICAgICAgYV91cDogMzgsXHJcbiAgICAgICAgICAgIGFfZG93bjogNDAsXHJcbiAgICAgICAgICAgIGFfbGVmdDogMzcsXHJcbiAgICAgICAgICAgIGFfcmlnaHQ6IDM5XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IG1vdmVTID0gNTAgKiBkZWx0YV90aW1lIC8gMTAwMDtcclxuICAgICAgICBsZXQgcm90YXRlUyA9IDAuMSAqIGRlbHRhX3RpbWUgLyAxMDAwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Ym9yZF9ldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLnc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRXllKG1vdmVTLCB0aGlzLmNhbWVyYS56X2F4aXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLnI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRXllKC1tb3ZlUywgdGhpcy5jYW1lcmEuel9heGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVFeWUobW92ZVMsIHRoaXMuY2FtZXJhLnlfYXhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVFeWUoLW1vdmVTLCB0aGlzLmNhbWVyYS55X2F4aXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLnM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRXllKC1tb3ZlUywgdGhpcy5jYW1lcmEueF9heGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5mOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUV5ZShtb3ZlUywgdGhpcy5jYW1lcmEueF9heGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuYV91cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmFkZFBpdGNoKHJvdGF0ZVMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmFfZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmFkZFBpdGNoKC1yb3RhdGVTKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuYV9sZWZ0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuYWRkWWF3KC1yb3RhdGVTKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5hX3JpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuYWRkWWF3KHJvdGF0ZVMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleV9kb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5rZXlib3JkX2V2ZW50ID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAga2V5X3VwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5rZXlib3JkX2V2ZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgUmFzdGVyaXplckFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==