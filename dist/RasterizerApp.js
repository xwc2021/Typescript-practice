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
        this.v_s = null;
        this.v0 = pv0;
        this.v1 = pv1;
        this.v2 = pv2;
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
        this.keybord_event = null;
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
        if (this.skip_diff) { // 因為accumulatedTime停不下來
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
        this.keybord_event = null;
    };
    return RasterizerApp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RasterizerApp);
new RasterizerApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxDQUFDLENBQUMsRUFDOUMsVUFBQyxDQUFXLElBQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlDLGtEQUFlLENBQUMsQ0FBQztRQUVyQixPQUFPO1FBQ1AsUUFBUSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUN0QyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvQyxpREFBYyxDQUFDLENBQUM7UUFFcEIsTUFBTTtRQUNOLFFBQVEsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFDdEMsVUFBQyxDQUFXLElBQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzlDLFVBQUMsQ0FBVyxJQUFPLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUM5QyxVQUFDLENBQVcsSUFBTyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFD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QUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2SSxPQUFPLEVBQUUsR0FBRyxPQUFFLEdBQUcsT0FBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBZ0IsR0FBdkIsVUFBd0IsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3RELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSx1QkFBZ0IsR0FBdkIsVUFBd0IsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3RELE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sU0FBRSxHQUFULFVBQVUsQ0FBUyxFQUFFLENBQVM7UUFDMUIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFD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O1lBRVYsS0FBSyxNQUFNLENBQUMsTUFBTTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxNQUFNLENBQUMsT0FBTztnQkFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFvQjtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQW9CO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUM7O0FBRUQsSUFBSSxhQUFhLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0ZXJhaWxzL0RpZmZ1c2UudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL0JveDNELnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9CdWZmZXIyRC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvQ2FtZXJhLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9DYW52YXNIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL0hIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1BsYW5lLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9SR0JBLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9SYXN0ZXJpemVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9SYXkudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1JheTRELnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9SZW5kZXJUYXJnZXQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1NhbXBsZXIudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1RleHR1cmUyRC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVG9vbC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVHJhbnNmb3JtLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9UcmlhbmdsZS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVmVjdG9yLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9WZWN0b3IyRC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVmVjdG9yNEQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1ZlcnRleC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmdsX3Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9SYXN0ZXJpemVyQXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL01hdGgvVmVjdG9yXCI7XHJcbmltcG9ydCBIaXRJbmZvIGZyb20gXCIuLi9NYXRoL0hpdEluZm9cIjtcclxuaW1wb3J0IHsgY2xhbXAsIGdldF9zaGFkb3dfd2VpZ2h0IH0gZnJvbSBcIi4uL01hdGgvVG9vbFwiO1xyXG5pbXBvcnQgU2hhZGVyIGZyb20gXCIuL1NoYWRlclwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlIGZyb20gXCIuLi9PYmplY3QvU2NlbmVOb2RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmdXNlIGltcGxlbWVudHMgU2hhZGVyIHtcclxuICAgIHN0YXRpYyB5ZWxsb3cgPSBuZXcgRGlmZnVzZShuZXcgVmVjdG9yKDEsIDEsIDApKTtcclxuICAgIHN0YXRpYyByZWQgPSBuZXcgRGlmZnVzZShuZXcgVmVjdG9yKDEsIDAsIDApKTtcclxuICAgIHN0YXRpYyBncmVlbiA9IG5ldyBEaWZmdXNlKG5ldyBWZWN0b3IoMCwgMSwgMCkpO1xyXG4gICAgc3RhdGljIGJsdWUgPSBuZXcgRGlmZnVzZShuZXcgVmVjdG9yKDAsIDAsIDEpKTtcclxuICAgIHN0YXRpYyBncmF5ID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigwLjUsIDAuNSwgMC41KSk7XHJcbiAgICBzdGF0aWMgd2hpdGUgPSBuZXcgRGlmZnVzZShuZXcgVmVjdG9yKDEsIDEsIDEpKTtcclxuXHJcbiAgICBjb2xvcjogVmVjdG9yO1xyXG4gICAgY29uc3RydWN0b3IoY29sb3I6IFZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBzaGFkaW5nKGhpdF9pbmZvOiBIaXRJbmZvLCBkaXJlY3Rpb25fbGlnaHRfZGlyOiBWZWN0b3IsIG9ial9saXN0OiBTY2VuZU5vZGVbXSwgZGVwdGg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBuID0gaGl0X2luZm8ubm9ybWFsO1xyXG4gICAgICAgIGxldCBzdHJlbmd0aCA9IGNsYW1wKC1WZWN0b3IuZG90KGRpcmVjdGlvbl9saWdodF9kaXIsIG4pLCAwLCAxKTtcclxuXHJcbiAgICAgICAgbGV0IHNoYWRvd193ZWlnaHQgPSBnZXRfc2hhZG93X3dlaWdodChoaXRfaW5mbywgZGlyZWN0aW9uX2xpZ2h0X2Rpciwgb2JqX2xpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yLm11bHRpcGx5KHN0cmVuZ3RoKS5tdWx0aXBseShzaGFkb3dfd2VpZ2h0KTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZXJ0ZXggZnJvbSAnLi9WZXJ0ZXgnXHJcbmltcG9ydCBUcmlhbmdsZSBmcm9tICcuL1RyaWFuZ2xlJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuL1ZlY3Rvcic7XHJcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBjbGlwIH0gZnJvbSAnLi9Ub29sJztcclxuaW1wb3J0IENhbWVyYSBmcm9tICcuL0NhbWVyYSc7XHJcbmltcG9ydCBUZXh0dXJlMkQgZnJvbSAnLi9UZXh0dXJlMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94IHtcclxuICAgIHRyaWFuZ2xlczogVHJpYW5nbGVbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIOW7uueri+ato+aWuemrlOmggum7nuizh+aWmVxyXG4gICAgICAgIHRoaXMudHJpYW5nbGVzID0gW107XHJcbiAgICAgICAgLy/poIbmmYLph51cclxuICAgICAgICBsZXQgbiA9IG5ldyBWZWN0b3IoMCwgMCwgLTEpO1xyXG4gICAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBUcmlhbmdsZShcclxuICAgICAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IFZlY3RvcigtMTAsIC0xMCwgLTEwKSwgbiwgMSwgMCwgMCksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4KG5ldyBWZWN0b3IoMTAsIDEwLCAtMTApLCBuLCAxLCAxLCAxKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IFZlY3RvcigxMCwgLTEwLCAtMTApLCBuLCAxLCAxLCAwKVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgVHJpYW5nbGUoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4KG5ldyBWZWN0b3IoLTEwLCAtMTAsIC0xMCksIG4sIDEsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgVmVjdG9yKC0xMCwgMTAsIC0xMCksIG4sIDEsIDAsIDEpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgVmVjdG9yKDEwLCAxMCwgLTEwKSwgbiwgMSwgMSwgMSlcclxuICAgICAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIGxldCBtID0gW1RyYW5zZm9ybS5yb3RhdGVCeVkoOTApLCBUcmFuc2Zvcm0ucm90YXRlQnlZKDE4MCksIFRyYW5zZm9ybS5yb3RhdGVCeVkoMjcwKSwgVHJhbnNmb3JtLnJvdGF0ZUJ5WCg5MCksIFRyYW5zZm9ybS5yb3RhdGVCeVgoLTkwKV1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IHJvdGF0ZU1hdHJpeCA9IG1baV07XHJcbiAgICAgICAgICAgIGxldCBuMiA9IFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG4pO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IFRyaWFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigtIDEwLCAtMTAsIC0xMCkpLCBuMiwgMSwgMCwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4LmJ1aWxkX3ZlcnRleChUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQocm90YXRlTWF0cml4LCBuZXcgVmVjdG9yKDEwLCAxMCwgLTEwKSksIG4yLCAxLCAxLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoMTAsIC0xMCwgLTEwKSksIG4yLCAxLCAxLCAwKVxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpYW5nbGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgVHJpYW5nbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4LmJ1aWxkX3ZlcnRleChUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQocm90YXRlTWF0cml4LCBuZXcgVmVjdG9yKC0xMCwgLTEwLCAtMTApKSwgbjIsIDEsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigtMTAsIDEwLCAtMTApKSwgbjIsIDEsIDAsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigxMCwgMTAsIC0xMCkpLCBuMiwgMSwgMSwgMSlcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByYXN0ZXJpemUoY2FtZXJhOiBDYW1lcmEsIHdvcmxkVHJhbnNmb3JtOiBUcmFuc2Zvcm0sIHRleHR1cmU6IFRleHR1cmUyRCkge1xyXG5cclxuICAgICAgICAvLyDomZXnkIbmraPmlrnpq5TnmoTorormj5tcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpYW5nbGVzW2ldLnJhc3Rlcml6ZShjYW1lcmEsIHdvcmxkVHJhbnNmb3JtLCB0ZXh0dXJlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd19saW5lKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgLy8g55Wr5LiJ6KeS5b2iXHJcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcclxuXHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDAsMCwxKSc7XHJcblxyXG5cclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50cmlhbmdsZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy50cmlhbmdsZXNbaV0uZHJhdyhjdHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiO1xyXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gXCIuL1Rvb2xcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1ZmZlcjJEPFQ+IHtcclxuICAgIHc6IG51bWJlcjtcclxuICAgIGg6IG51bWJlcjtcclxuICAgIGJ1ZmZlcjogQXJyYXk8QXJyYXk8VD4+O1xyXG4gICAgY29uc3RydWN0b3IodzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQXJyYXk8QXJyYXk8VD4+KHRoaXMuaCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codywgaCk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmg7ICsreSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt5XSA9IG5ldyBBcnJheTxUPih0aGlzLncpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbHVlOiBUKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNfbGVnYWxfaW5kZXgoeCwgeSkpXHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3ldW3hdID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQnLCB0aGlzLncsIHRoaXMuaCwgeCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiBSR0JBLmRlYnVnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNfbGVnYWxfaW5kZXgoeCwgeSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlclt5XVt4XTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCcsIHRoaXMudywgdGhpcy5oLCB4LCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIFJHQkEuZGVidWc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMudzsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlclt5XVt4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOi2hemBjumCiueVjOWwseS9v+eUqOmCiueVjOWAvFxyXG4gICAgZ2V0X2NsYW1wX21vZGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbnggPSBjbGFtcCh4LCAwLCB0aGlzLncgLSAxKTtcclxuICAgICAgICBsZXQgbnkgPSBjbGFtcCh5LCAwLCB0aGlzLmggLSAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyW255XVtueF07XHJcbiAgICB9XHJcblxyXG4gICAgaXNfbGVnYWxfaW5kZXgoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLncgJiYgeSA+PSAwICYmIHkgPCB0aGlzLmgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzX292ZXJfbmVnYXRpdmUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGVuZFg6IG51bWJlciwgZW5kWTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHkgPiBlbmRZIHx8IHggPCBlbmRYKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc19vdmVyX3Bvc2l0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh5ID4gZW5kWSB8fCB4ID4gZW5kWClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5pbXBvcnQgUmF5IGZyb20gXCIuL1JheVwiO1xyXG5pbXBvcnQgeyBkZWdyZWVfdG9fUmFkLCBnZXRfaGl0X3NvcnRfbGlzdCB9IGZyb20gXCIuL1Rvb2xcIlxyXG5pbXBvcnQgUmVuZGVyVGFyZ2V0IGZyb20gXCIuL1JlbmRlclRhcmdldFwiO1xyXG5pbXBvcnQgU2NlbmVOb2RlIGZyb20gXCIuLi9PYmplY3QvU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBEaWZmdXNlIGZyb20gXCIuLi9NYXRlcmFpbHMvRGlmZnVzZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBleWU6IFZlY3RvcjtcclxuXHJcbiAgICB4X2F4aXM6IFZlY3RvcjtcclxuICAgIHlfYXhpczogVmVjdG9yO1xyXG4gICAgel9heGlzOiBWZWN0b3I7XHJcblxyXG4gICAgcmF0aW86IG51bWJlcjtcclxuXHJcbiAgICBzY3JlZW5XOiBudW1iZXI7XHJcbiAgICBzY3JlZW5IOiBudW1iZXI7XHJcblxyXG4gICAgc2NyZWVuQ2VudGVyWDogbnVtYmVyO1xyXG4gICAgc2NyZWVuQ2VudGVyWTogbnVtYmVyO1xyXG4gICAgaGFsZlc6IG51bWJlcjtcclxuICAgIGhhbGZIOiBudW1iZXI7XHJcblxyXG4gICAgLy8g6KaW6YyQ55qEIOi/keW5s+mdouWSjOmBoOW5s+mdolxyXG4gICAgLy8gYeOAgWLlkozmipXlvbHnn6npmaPmnInpl5xcclxuICAgIE46IG51bWJlcjtcclxuICAgIEY6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuXHJcbiAgICBmb3ZfZGVncmVlOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihleWU6IFZlY3RvciwgbG9va19hdDogVmVjdG9yLCBmb3ZfZGVncmVlOiBudW1iZXIsIHNjcmVlblc6IG51bWJlciwgc2NyZWVuSDogbnVtYmVyLCBOOiBudW1iZXIsIEY6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLnJhdGlvID0gc2NyZWVuVyAvIHNjcmVlbkg7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XID0gc2NyZWVuVztcclxuICAgICAgICB0aGlzLnNjcmVlbkggPSBzY3JlZW5IO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuQ2VudGVyWCA9IHRoaXMuc2NyZWVuVyAqIDAuNTtcclxuICAgICAgICB0aGlzLnNjcmVlbkNlbnRlclkgPSB0aGlzLnNjcmVlbkggKiAwLjU7XHJcbiAgICAgICAgdGhpcy5oYWxmVyA9IHRoaXMuc2NyZWVuVyAqIDAuNTtcclxuICAgICAgICB0aGlzLmhhbGZIID0gdGhpcy5zY3JlZW5IICogMC41O1xyXG5cclxuICAgICAgICAvLyBjYW1lcmEgM+i7uFxyXG4gICAgICAgIHRoaXMuel9heGlzID0gVmVjdG9yLm1pbnVzKGxvb2tfYXQsIGV5ZSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIC8vIOW3puaJi1xyXG4gICAgICAgIGxldCBoZWxwX3YgPSBWZWN0b3IudXA7XHJcbiAgICAgICAgdGhpcy54X2F4aXMgPSBWZWN0b3IuY3Jvc3MoaGVscF92LCB0aGlzLnpfYXhpcykubm9ybWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy55X2F4aXMgPSBWZWN0b3IuY3Jvc3ModGhpcy56X2F4aXMsIHRoaXMueF9heGlzKTtcclxuXHJcbiAgICAgICAgLy8gY2FtZXJhIOWOn+m7nlxyXG4gICAgICAgIHRoaXMuZXllID0gZXllO1xyXG5cclxuICAgICAgICAvLyBjYW1lcmEgZm92XHJcbiAgICAgICAgdGhpcy5mb3ZfZGVncmVlID0gZm92X2RlZ3JlZTtcclxuXHJcbiAgICAgICAgLy8g6KaW6YyQ55qEIOi/keW5s+mdouWSjOmBoOW5s+mdolxyXG4gICAgICAgIHRoaXMuTiA9IE47XHJcbiAgICAgICAgdGhpcy5GID0gRjtcclxuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9ncG5ub3Rlcy5ibG9nc3BvdC5jb20vMjAyMS8xMS9ibG9nLXBvc3RfMjcuaHRtbFxyXG4gICAgICAgIC8vIOaKleW9seefqemZo+WwjXrnmoTkv67mraPvvIzpgJnoo6Hkvb/nlKjlt6bmiYtcclxuICAgICAgICB0aGlzLmEgPSBGIC8gKEYgLSBOKTtcclxuICAgICAgICB0aGlzLmIgPSAtTiAqIEYgLyAoRiAtIE4pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmEsIHRoaXMuYik7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUV5ZShzOiBudW1iZXIsIEE6IFZlY3Rvcikge1xyXG4gICAgICAgIHRoaXMuZXllID0gVmVjdG9yLmFkZCh0aGlzLmV5ZSwgQS5tdWx0aXBseShzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGl0Y2goZGVncmVlOiBudW1iZXIpIHtcclxuICAgICAgICAvLyB0b2RvOiDkuZjkuIpsb2NhbCBtYXRyaXhcclxuICAgIH1cclxuXHJcbiAgICBhZGRZYXcoZGVncmVlOiBudW1iZXIpIHtcclxuICAgICAgICAvLyB0b2RvOiDkuZjkuIpsb2NhbCBtYXRyaXhcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVfcmF5X2Rpcih4X3dlaWdodDogbnVtYmVyLCB5X3dlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGhhbGZfZm92X3JhZCA9IGRlZ3JlZV90b19SYWQoMC41ICogdGhpcy5mb3ZfZGVncmVlKTtcclxuICAgICAgICBsZXQgdGFuX2ggPSBNYXRoLnRhbihoYWxmX2Zvdl9yYWQpO1xyXG4gICAgICAgIGxldCB0YW5fdyA9IHRhbl9oICogcmF0aW87XHJcblxyXG4gICAgICAgIGxldCBkaXIgPSB0aGlzLnpfYXhpc1xyXG4gICAgICAgICAgICAuYWRkKHRoaXMueF9heGlzLm11bHRpcGx5KHhfd2VpZ2h0ICogdGFuX3cpKVxyXG4gICAgICAgICAgICAuYWRkKHRoaXMueV9heGlzLm11bHRpcGx5KHlfd2VpZ2h0ICogdGFuX2gpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpcjtcclxuICAgIH1cclxuXHJcbiAgICB0b0NhbWVyYVNwYWNlKEE6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCBkaWZmID0gQS5taW51cyh0aGlzLmV5ZSk7XHJcbiAgICAgICAgbGV0IHBvaW50X2luX2NhbWVyYV9zcGFjZSA9IG5ldyBWZWN0b3IoVmVjdG9yLmRvdChkaWZmLCB0aGlzLnhfYXhpcyksIFZlY3Rvci5kb3QoZGlmZiwgdGhpcy55X2F4aXMpLCBWZWN0b3IuZG90KGRpZmYsIHRoaXMuel9heGlzKSk7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50X2luX2NhbWVyYV9zcGFjZTtcclxuICAgIH1cclxuXHJcbiAgICB0b1Byb2plY3Rpb25TcGFjZShBOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgZm92X3JhZCA9IGRlZ3JlZV90b19SYWQodGhpcy5mb3ZfZGVncmVlKTtcclxuICAgICAgICBsZXQgaGFsZl9mb3YgPSAwLjUgKiBmb3ZfcmFkO1xyXG4gICAgICAgIGxldCB5X3NjYWxlID0gMSAvIE1hdGgudGFuKGhhbGZfZm92KTtcclxuICAgICAgICBsZXQgeF9zY2FsZSA9IDEgLyAodGhpcy5yYXRpbyAqIE1hdGgudGFuKGhhbGZfZm92KSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKEEueCAqIHhfc2NhbGUsIEEueSAqIHlfc2NhbGUsIEEueiAqIHRoaXMuYSArIHRoaXMuYik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9OREMoQTogVmVjdG9yLCB3OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcyA9IDEgLyB3O1xyXG4gICAgICAgIHJldHVybiBBLm11bHRpcGx5KHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU2NyZWVuU3BhY2UoTkRDX0E6IFZlY3Rvcikge1xyXG4gICAgICAgIC8vIOeUqOW6p+aomeiuiuaPm+S+hueci+W+heW+nk5EQ+WIsFNjcmVlbiBTcGFjZVxyXG4gICAgICAgIC8vIE5EQyB46Lu45Zyoc2NyZWVuIHNwYWNlIOeCuih3LzIsMClcclxuICAgICAgICAvLyBOREMgeei7uOWcqHNjcmVlbiBzcGFjZSDngrooLWgvMiwwKVxyXG4gICAgICAgIGxldCB4ID0gdGhpcy5oYWxmVyAqIE5EQ19BLnggKyB0aGlzLnNjcmVlbkNlbnRlclg7XHJcbiAgICAgICAgbGV0IHkgPSAtdGhpcy5oYWxmSCAqIE5EQ19BLnkgKyB0aGlzLnNjcmVlbkNlbnRlclk7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wID0gbmV3IFZlY3Rvcih4LCB5LCAwKTtcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDnrpflnJZcclxuICAgIHJlbmRlcihyZW5kZXJfdGFyZ2V0OiBSZW5kZXJUYXJnZXQsIG9ial9saXN0OiBTY2VuZU5vZGVbXSkge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb25fbGlnaHRfZGlyID0gbmV3IFZlY3RvcigxLCAtMSwgMCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIGxldCBoYWxmX3BpeGVsX29mZnNldCA9IDAuNSAvIHJlbmRlcl90YXJnZXQuaDtcclxuICAgICAgICBsZXQgbXVsdGlzYW1wbGVfZGlmZiA9IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgIHsgeDogaGFsZl9waXhlbF9vZmZzZXQsIHk6IGhhbGZfcGl4ZWxfb2Zmc2V0IH0sXHJcbiAgICAgICAgICAgIHsgeDogLWhhbGZfcGl4ZWxfb2Zmc2V0LCB5OiBoYWxmX3BpeGVsX29mZnNldCB9LFxyXG4gICAgICAgICAgICB7IHg6IC1oYWxmX3BpeGVsX29mZnNldCwgeTogLWhhbGZfcGl4ZWxfb2Zmc2V0IH0sXHJcbiAgICAgICAgICAgIHsgeDogaGFsZl9waXhlbF9vZmZzZXQsIHk6IC1oYWxmX3BpeGVsX29mZnNldCB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJlbmRlcl90YXJnZXQucmVuZGVyX3BpeGVsKCh4X3dlaWdodDogbnVtYmVyLCB5X3dlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYXlfZGlyID0gdGhpcy5jcmVhdGVfcmF5X2Rpcih4X3dlaWdodCwgeV93ZWlnaHQsIHJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOeUoueUn+WkmuainXJheVxyXG4gICAgICAgICAgICBsZXQgcmF5cyA9IG11bHRpc2FtcGxlX2RpZmYubWFwKGRpZmYgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5bCNcmF5X2RyaeS9nOWBj+enu1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpciA9IHJheV9kaXIuYWRkKHRoaXMueF9heGlzLm11bHRpcGx5KGRpZmYueCkpLmFkZCh0aGlzLnlfYXhpcy5tdWx0aXBseShkaWZmLnkpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOmblueEtuWSjOeQg+OAgeW5s+mdoueahGhpdOioiOeul+S4jemcgOimgWRpcuS9nG5vcm1hbGl6Ze+8jOS9hueCuuS6huaWueS+v+WPjeWwhOeahOioiOeul+mChOaYr+S9nG5vcm1hbGl6ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSYXkodGhpcy5leWUsIGRpci5ub3JtYWxpemUoKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDmr4/lgItyYXnpg73nrpdjb2xvclxyXG4gICAgICAgICAgICBsZXQgY29sb3JzID0gcmF5cy5tYXAocmF5ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBoaXRfc29ydF9saXN0ID0gZ2V0X2hpdF9zb3J0X2xpc3Qob2JqX2xpc3QsIHJheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5pyJ5bCE5Lit5ZeOXHJcbiAgICAgICAgICAgICAgICBsZXQgaXNfaGl0ID0gaGl0X3NvcnRfbGlzdC5sZW5ndGggIT0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChpc19oaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGl0X2luZm8gPSBoaXRfc29ydF9saXN0WzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGl0X2luZm8ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhpdF9pbmZvLnMuc2hhZGluZyhoaXRfaW5mbywgZGlyZWN0aW9uX2xpZ2h0X2Rpciwgb2JqX2xpc3QsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgLy8g5LiN5Y+v6IO95Yiw6YCZ6KOhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBEaWZmdXNlLnJlZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIERpZmZ1c2UuZ3JheS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDlj5blubPlnYflsLHmnIlBbnRpYWxpYXNpbmfmlYjmnpxcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gbXVsdGlzYW1wbGVfZGlmZi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGxldCBmaW5hbF9jb2xvciA9IGNvbG9ycy5yZWR1Y2UoKGFjY3VtdWxhdG9yOiBWZWN0b3IsIGN1cnJlbnQ6IFZlY3RvcikgPT4gYWNjdW11bGF0b3IuYWRkKGN1cnJlbnQpLCBWZWN0b3IuemVybykubXVsdGlwbHkoMSAvIGNvdW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmFsX2NvbG9yO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXZuYXNIZWxwZXIge1xyXG4gICAgc3RhdGljIHNldF9jYW52YXMoaWQ6IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHJldHVybiBDYXZuYXNIZWxwZXIuc2V0X2NhbnZhc19lbGVtZW50KGNhbnZhcywgdywgaCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldF9jYW52YXNfZWxlbWVudChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB3OiBudW1iZXIsIGg6IG51bWJlcikge1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldF9jb250ZXh0KGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHJldHVybiBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0X2NvbnRleHRfYnlfY2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnZlcnQoYzogUkdCQSkge1xyXG4gICAgICAgIHJldHVybiAncmdiYSgnICsgTWF0aC5mbG9vcigyNTUgKiAoYy5yKSkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NSAqIChjLmcpKSArICcsJyArIE1hdGguZmxvb3IoMjU1ICogKGMuYikpICsgJywxKSc7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBISGVscGVyIHtcclxuICAgIHN0YXRpYyAkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvciBmcm9tICcuL1ZlY3Rvcic7XHJcbmltcG9ydCBSYXkgZnJvbSAnLi9SYXknO1xyXG5pbXBvcnQgeyBudW1iZXJfZXF1YWwgfSBmcm9tICcuL1Rvb2wnO1xyXG5pbXBvcnQgSGl0SW5mbyBmcm9tICcuL0hpdEluZm8nO1xyXG5pbXBvcnQgSGl0YWJsZSBmcm9tICcuL0hpdGFibGUnO1xyXG5pbXBvcnQgU2hhZGVyIGZyb20gJy4uL01hdGVyYWlscy9TaGFkZXInO1xyXG5cclxuLy8g5bmz6Z2iXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIGltcGxlbWVudHMgSGl0YWJsZSB7XHJcblxyXG4gICAgQzogVmVjdG9yO1xyXG4gICAgTjogVmVjdG9yO1xyXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFZlY3Rvciwgbm9ybWFsOiBWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLkMgPSBwb2ludDtcclxuICAgICAgICB0aGlzLk4gPSBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ris6KmmdGVzcF9w5ZKM5pa55ZCR6YeP5piv5LiN5piv5Zyo5ZCM5LiA6YKKXHJcbiAgICBpc19wb3NpdGl2ZSh0ZXN0X3A6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCBkaWZmID0gVmVjdG9yLm1pbnVzKHRlc3RfcCwgdGhpcy5DKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBWZWN0b3IuZG90KGRpZmYsIHRoaXMuTik7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBoaXQocmF5OiBSYXksIHM6IFNoYWRlcik6IEhpdEluZm8gfCBudWxsIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gUGxhbmUuaGl0KHJheSwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAgcmVzdWx0LnMgPSBzO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhpdChyYXk6IFJheSwgcGxhbmU6IFBsYW5lKTogSGl0SW5mbyB8IG51bGwge1xyXG4gICAgICAgIC8vIHJheSBoaXQgcGxhbmUgXHJcbiAgICAgICAgbGV0IGZyb20gPSByYXkuZnJvbTtcclxuICAgICAgICBsZXQgZGlyID0gcmF5LmRpcjtcclxuXHJcbiAgICAgICAgLy8gKEYtQynjgIJOICsgdCAoROOAgk4pID0gMFxyXG4gICAgICAgIC8vIHQgID0gKEMtRinjgIJOIC8gKETjgIJOKVxyXG4gICAgICAgIC8vIHQgID0gKEEgLyAoQilcclxuICAgICAgICBsZXQgQiA9IFZlY3Rvci5kb3QoZGlyLCBwbGFuZS5OKTtcclxuICAgICAgICBsZXQgQSA9IFZlY3Rvci5kb3QoVmVjdG9yLm1pbnVzKHBsYW5lLkMsIGZyb20pLCBwbGFuZS5OKTtcclxuXHJcbiAgICAgICAgLy8gYXZvaWQgZGl2aWRlIGJ5IDBcclxuICAgICAgICBpZiAobnVtYmVyX2VxdWFsKEIsIDApKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IHQgPSBBIC8gQjtcclxuICAgICAgICBsZXQgcG9zaXRpdmVfdCA9IHQgPiAwLjA7XHJcbiAgICAgICAgbGV0IGhpdF9wb3MgPSBmcm9tLmFkZChkaXIubXVsdGlwbHkodCkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBvc2l0aXZlX3QsXHJcbiAgICAgICAgICAgIGhpdF9wb3MsXHJcbiAgICAgICAgICAgIGk6IGRpcixcclxuICAgICAgICAgICAgdCxcclxuICAgICAgICAgICAgbm9ybWFsOiBwbGFuZS5OXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IHsgbGVycCB9IGZyb20gXCIuL1Rvb2xcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJHQkEge1xyXG4gICAgc3RhdGljIGRlYnVnID0gbmV3IFJHQkEoMSwgMCwgMSwgMSk7XHJcbiAgICBzdGF0aWMgZ29sZGVuID0gbmV3IFJHQkEoMSwgMjE1IC8gMjU1LCAwLCAxKTtcclxuICAgIHN0YXRpYyB5ZWxsb3cgPSBuZXcgUkdCQSgxLCAxLCAwLCAxKTtcclxuICAgIHN0YXRpYyBwaW5rID0gbmV3IFJHQkEoMSwgMTkyIC8gMjU1LCAyMDMgLyAyNTUsIDEpO1xyXG4gICAgc3RhdGljIGJsYWNrID0gbmV3IFJHQkEoMCwgMCwgMCwgMSk7XHJcbiAgICBzdGF0aWMgcmVkID0gbmV3IFJHQkEoMSwgMCwgMCwgMSk7XHJcblxyXG4gICAgcjogbnVtYmVyO1xyXG4gICAgZzogbnVtYmVyO1xyXG4gICAgYjogbnVtYmVyO1xyXG4gICAgYTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgICB0aGlzLmcgPSBnO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChBOiBSR0JBLCBCOiBSR0JBLCBrOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJHQkEoXHJcbiAgICAgICAgICAgIGxlcnAoQS5yLCBCLnIsIGspLFxyXG4gICAgICAgICAgICBsZXJwKEEuZywgQi5nLCBrKSxcclxuICAgICAgICAgICAgbGVycChBLmIsIEIuYiwgayksXHJcbiAgICAgICAgICAgIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChBOiBSR0JBKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JBKHRoaXMuciArIEEuciwgdGhpcy5nICsgQS5nLCB0aGlzLmIgKyBBLmIsIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtdWx0aXBseShzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJHQkEodGhpcy5yICogcywgdGhpcy5nICogcywgdGhpcy5iICogcywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiKCBcIiArIHRoaXMuciArIFwiICwgXCIgKyB0aGlzLmcgKyBcIiAsIFwiICsgdGhpcy5iICsgXCIgKVwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuL1RyYW5zZm9ybSc7XHJcbmltcG9ydCBUcmlhbmdsZSBmcm9tICcuL1RyaWFuZ2xlJztcclxuaW1wb3J0IHsgQ2xpcFBsYW5lLCBjbGlwIH0gZnJvbSAnLi9Ub29sJztcclxuaW1wb3J0IFZlcnRleCBmcm9tICcuL1ZlcnRleCc7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEnO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJztcclxuaW1wb3J0IEJ1ZmZlcjJEIGZyb20gXCIuL0J1ZmZlcjJEXCI7XHJcbmltcG9ydCBSR0JBIGZyb20gXCIuL1JHQkFcIjtcclxuaW1wb3J0IFJlbmRlclRhcmdldCBmcm9tICcuL1JlbmRlclRhcmdldCc7XHJcbmltcG9ydCBUZXh0dXJlMkQgZnJvbSAnLi9UZXh0dXJlMkQnO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSAnLi9WZWN0b3IyRCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXN0ZXJpemVyIHtcclxuICAgIHN0YXRpYyBjb2xvcl9idWZmZXI6IEJ1ZmZlcjJEPFJHQkE+O1xyXG4gICAgc3RhdGljIHpfYnVmZmVyOiBCdWZmZXIyRDxudW1iZXI+O1xyXG5cclxuICAgIHN0YXRpYyBjbGVhcihjb2xvcjogUkdCQSwgejogbnVtYmVyKSB7XHJcbiAgICAgICAgUmFzdGVyaXplci5jb2xvcl9idWZmZXIuY2xlYXIoY29sb3IpO1xyXG4gICAgICAgIFJhc3Rlcml6ZXIuel9idWZmZXIuY2xlYXIoeik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3cocmVuZGVyX3RhcmdldDogUmVuZGVyVGFyZ2V0KSB7XHJcbiAgICAgICAgcmVuZGVyX3RhcmdldC5zZXRfcGl4ZWwoKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBSYXN0ZXJpemVyLmNvbG9yX2J1ZmZlci5nZXQoeCwgeSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVuZGVyX3RhcmdldC5zaG93X2J1ZmZlcignY2FudmFzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsaXBfaGVscGVyKGluX2xpc3Q6IFRyaWFuZ2xlW10sXHJcbiAgICAgICAgdjBfb3V0OiAodHJpYW5nbGU6IFRyaWFuZ2xlKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHYxX291dDogKHRyaWFuZ2xlOiBUcmlhbmdsZSkgPT4gYm9vbGVhbixcclxuICAgICAgICB2Ml9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICAgICAgcGxhbmU6IENsaXBQbGFuZSkge1xyXG5cclxuICAgICAgICBsZXQgb3V0X2xpc3Q6IFRyaWFuZ2xlW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBUIG9mIGluX2xpc3QpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNsaXAoVCwgdjBfb3V0LCB2MV9vdXQsIHYyX291dCwgcGxhbmUpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0IG9mIHJlc3VsdClcclxuICAgICAgICAgICAgICAgIG91dF9saXN0LnB1c2godCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRfbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xpcF9pbl9Qcm9qZWN0aW9uX1NwYWNlKHYwOiBWZXJ0ZXgsIHYxOiBWZXJ0ZXgsIHYyOiBWZXJ0ZXgsIHBjYW1lcmE6IENhbWVyYSkge1xyXG4gICAgICAgIC8vIFRvZG865Z+36KGMNuWAi+W5s+mdoueahOS4ieinkuW9ouijgeWIh1xyXG4gICAgICAgIC8vIOWSjHnou7jlpL40NeW6pueahDLlgIvlubPpnaLjgIHlkox46Lu45aS+NDXluqbnmoQy5YCL5bmz6Z2i44CB6YKE5pyJTmPlkoxGY1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI4Lmh0bWxcclxuXHJcbiAgICAgICAgbGV0IGluX2xpc3QgPSBbbmV3IFRyaWFuZ2xlKHYwLCB2MSwgdjIpXTtcclxuXHJcbiAgICAgICAgLy8gRmFyXHJcbiAgICAgICAgbGV0IG91dF9saXN0ID0gUmFzdGVyaXplci5jbGlwX2hlbHBlcihpbl9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjAudyA8IFQudjAucC56OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjEudyA8IFQudjEucC56OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjIudyA8IFQudjIucC56OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuRmFyKTtcclxuXHJcbiAgICAgICAgLy8gTmVhclxyXG4gICAgICAgIG91dF9saXN0ID0gUmFzdGVyaXplci5jbGlwX2hlbHBlcihvdXRfbGlzdCxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAwID4gVC52MC5wLno7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gMCA+IFQudjEucC56OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIDAgPiBULnYyLnAuejsgfSxcclxuICAgICAgICAgICAgQ2xpcFBsYW5lLk5lYXIpO1xyXG5cclxuICAgICAgICAvLyDkuI3lsI1SaWdodCDjgIFMZWZ044CBVG9w44CBQm90dG9t5L2c6KOB5YiH5LqGXHJcbiAgICAgICAgLy8g6YCZ5qij5omN5Y+v5Lul55yL5YiwbmRjX2NsYW1wX2VmZmVjdFxyXG4gICAgICAgIGlmIChSYXN0ZXJpemVyLm5kY19jbGFtcF9lZmZlY3QpXHJcbiAgICAgICAgICAgIHJldHVybiBvdXRfbGlzdDtcclxuXHJcbiAgICAgICAgLy8gUmlnaHRcclxuICAgICAgICBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIob3V0X2xpc3QsXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gVC52MC53IDwgVC52MC5wLng7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gVC52MS53IDwgVC52MS5wLng7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gVC52Mi53IDwgVC52Mi5wLng7IH0sXHJcbiAgICAgICAgICAgIENsaXBQbGFuZS5SaWdodCk7XHJcblxyXG4gICAgICAgIC8vIExlZnRcclxuICAgICAgICBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIob3V0X2xpc3QsXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gLVQudjAudyA+IFQudjAucC54OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIC1ULnYxLncgPiBULnYxLnAueDsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAtVC52Mi53ID4gVC52Mi5wLng7IH0sXHJcbiAgICAgICAgICAgIENsaXBQbGFuZS5MZWZ0KTtcclxuXHJcbiAgICAgICAgLy8gVG9wXHJcbiAgICAgICAgb3V0X2xpc3QgPSBSYXN0ZXJpemVyLmNsaXBfaGVscGVyKG91dF9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjAudyA8IFQudjAucC55OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjEudyA8IFQudjEucC55OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjIudyA8IFQudjIucC55OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuVG9wKTtcclxuXHJcbiAgICAgICAgLy8gQm90dG9tXHJcbiAgICAgICAgb3V0X2xpc3QgPSBSYXN0ZXJpemVyLmNsaXBfaGVscGVyKG91dF9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIC1ULnYwLncgPiBULnYwLnAueTsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAtVC52MS53ID4gVC52MS5wLnk7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gLVQudjIudyA+IFQudjIucC55OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuQm90dG9tKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dF9saXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBNVlBfYmFja2ZhY2VfY3VsbGluZ19jbGlwcGluZyh0cmlhbmdsZTogVHJpYW5nbGUsIHBjYW1lcmE6IENhbWVyYSwgd29ybGRUcmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIC8vIHRvIHdvcmxkIHNwYWNlXHJcbiAgICAgICAgbGV0IHYwX3cgPSBUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQod29ybGRUcmFuc2Zvcm0sIHRyaWFuZ2xlLnYwLnApO1xyXG4gICAgICAgIGxldCB2MV93ID0gVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHdvcmxkVHJhbnNmb3JtLCB0cmlhbmdsZS52MS5wKTtcclxuICAgICAgICBsZXQgdjJfdyA9IFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludCh3b3JsZFRyYW5zZm9ybSwgdHJpYW5nbGUudjIucCk7XHJcblxyXG4gICAgICAgIC8vIHRvIGNhbWVyYSBzcGFjZVxyXG4gICAgICAgIGxldCB2MF9jID0gcGNhbWVyYS50b0NhbWVyYVNwYWNlKHYwX3cpO1xyXG4gICAgICAgIGxldCB2MV9jID0gcGNhbWVyYS50b0NhbWVyYVNwYWNlKHYxX3cpO1xyXG4gICAgICAgIGxldCB2Ml9jID0gcGNhbWVyYS50b0NhbWVyYVNwYWNlKHYyX3cpO1xyXG5cclxuICAgICAgICAvLyB0byBwcm9qZWN0aW9uIHNwYWNlIChjbGlwIHNwYWNlKVxyXG4gICAgICAgIGxldCB2MF9wID0gcGNhbWVyYS50b1Byb2plY3Rpb25TcGFjZSh2MF9jKTtcclxuICAgICAgICBsZXQgdjFfcCA9IHBjYW1lcmEudG9Qcm9qZWN0aW9uU3BhY2UodjFfYyk7XHJcbiAgICAgICAgbGV0IHYyX3AgPSBwY2FtZXJhLnRvUHJvamVjdGlvblNwYWNlKHYyX2MpO1xyXG5cclxuICAgICAgICAvLyBiYWNrIGZhY2UgY3VsbGluZyBcclxuICAgICAgICAvLyBsZXQgdjBfdGVzdCA9IG5ldyBWZWN0b3IodjBfcC54LCB2MF9wLnksIHYwX2Mueik7XHJcbiAgICAgICAgLy8gbGV0IHYxX3Rlc3QgPSBuZXcgVmVjdG9yKHYxX3AueCwgdjFfcC55LCB2MV9jLnopO1xyXG4gICAgICAgIC8vIGxldCB2Ml90ZXN0ID0gbmV3IFZlY3Rvcih2Ml9wLngsIHYyX3AueSwgdjJfYy56KTtcclxuICAgICAgICAvLyBsZXQgbm9ybWFsID0gVmVjdG9yLmNhbGN1bGF0ZV9ub3JtYWwodjBfdGVzdCwgdjFfdGVzdCwgdjJfdGVzdCk7XHJcbiAgICAgICAgLy8gbGV0IGNlbnRlcl90b19leWUgPSBWZWN0b3IubWludXMoVmVjdG9yLnplcm8sIFZlY3Rvci5jYWxjdWxhdGVfY2VudGVyKHYwX3Rlc3QsIHYxX3Rlc3QsIHYyX3Rlc3QpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy8g5ZyodmlldyBzcGFjZeWBmu+8jOS4jeeEtuWcqGNsaXAgc3BhY2XlgZrvvIzpgoTopoHmiop655Sod+WPluS7o+aOie+8jOaciem7nuaQnuW3pVxyXG4gICAgICAgIGxldCBub3JtYWwgPSBWZWN0b3IuY2FsY3VsYXRlX25vcm1hbCh2MF9jLCB2MV9jLCB2Ml9jKTtcclxuICAgICAgICBsZXQgY2VudGVyX3RvX2V5ZSA9IFZlY3Rvci5taW51cyhWZWN0b3IuemVybywgVmVjdG9yLmNhbGN1bGF0ZV9jZW50ZXIodjBfYywgdjFfYywgdjJfYykpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBjb3NfdmFsdWUgPSBWZWN0b3IuZG90KG5vcm1hbCwgY2VudGVyX3RvX2V5ZSk7O1xyXG4gICAgICAgIGlmIChjb3NfdmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VsbGluZycpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmHjeaWsOe2geWumnV2XHJcbiAgICAgICAgbGV0IHYwID0gdHJpYW5nbGUudjAuY2xvbmUoKS51cGRhdGVfcCh2MF9wKS51cGRhdGVfdyh2MF9jLnopO1xyXG4gICAgICAgIGxldCB2MSA9IHRyaWFuZ2xlLnYxLmNsb25lKCkudXBkYXRlX3AodjFfcCkudXBkYXRlX3codjFfYy56KTtcclxuICAgICAgICBsZXQgdjIgPSB0cmlhbmdsZS52Mi5jbG9uZSgpLnVwZGF0ZV9wKHYyX3ApLnVwZGF0ZV93KHYyX2Mueik7XHJcblxyXG4gICAgICAgIC8vIOWft+ihjOS4ieinkuW9ouijgeWIh1xyXG4gICAgICAgIHJldHVybiBSYXN0ZXJpemVyLmNsaXBfaW5fUHJvamVjdGlvbl9TcGFjZSh2MCwgdjEsIHYyLCBwY2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlX3NvbGlkX2NvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgbmRjX2NsYW1wX2VmZmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHBlZWtfc2NyZWVuX3BvczogVmVjdG9yMkQ7XHJcblxyXG4gICAgc3RhdGljIHNldF9wZWVrX3NjcmVlbl9wb3MocGVla19zY3JlZW5fcG9zOiBWZWN0b3IyRCkge1xyXG4gICAgICAgIFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zID0gcGVla19zY3JlZW5fcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmludF9vbmNlID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgcHJpbnRfcGVla19wb3NpdGlvbigpIHtcclxuICAgICAgICBSYXN0ZXJpemVyLnByaW50X29uY2UgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmludF9wZWVrX3Bvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcHJvY2Vzcyh0cmlhbmdsZTogVHJpYW5nbGUsIHBjYW1lcmE6IENhbWVyYSwgd29ybGRUcmFuc2Zvcm06IFRyYW5zZm9ybSwgdGV4dHVyZTogVGV4dHVyZTJEKSB7XHJcblxyXG4gICAgICAgIC8vIHRvIE1WUFxyXG4gICAgICAgIGxldCB0cmlhbmdsZV9saXN0ID0gUmFzdGVyaXplci5NVlBfYmFja2ZhY2VfY3VsbGluZ19jbGlwcGluZyh0cmlhbmdsZSwgcGNhbWVyYSwgd29ybGRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IFQgb2YgdHJpYW5nbGVfbGlzdCkge1xyXG5cclxuICAgICAgICAgICAgLy8gdG8gTkRDXHJcbiAgICAgICAgICAgIGxldCBuMCA9IHBjYW1lcmEudG9OREMoVC52MC5wLCBULnYwLncpO1xyXG4gICAgICAgICAgICBsZXQgbjEgPSBwY2FtZXJhLnRvTkRDKFQudjEucCwgVC52MS53KTtcclxuICAgICAgICAgICAgbGV0IG4yID0gcGNhbWVyYS50b05EQyhULnYyLnAsIFQudjIudyk7XHJcblxyXG4gICAgICAgICAgICAvLyDmnInoo4HliIdsZWZ044CBcmlnaHTjgIF0b3DjgIFib3R0b23nmoToqbFOREPmh4noqbLopoHokL3lnKhcclxuICAgICAgICAgICAgLy8gLTEg4omkIHgg4omkIDEsIC0xIOKJpCB5IOKJpCAxXHJcbiAgICAgICAgICAgIC8vIOS4jeijgeWIh2xlZnTjgIFyaWdodOOAgXRvcOOAgWJvdHRvbe+8jOeEtuW+jGNsYW1wIG5kY+S5n+eul+aYr+S4gOeorueJueauiuaViOaenFxyXG4gICAgICAgICAgICBpZiAoUmFzdGVyaXplci5uZGNfY2xhbXBfZWZmZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBuMC5jbGFtcF94KC0xLCAxKS5jbGFtcF95KC0xLCAxKTtcclxuICAgICAgICAgICAgICAgIG4xLmNsYW1wX3goLTEsIDEpLmNsYW1wX3koLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgbjIuY2xhbXBfeCgtMSwgMSkuY2xhbXBfeSgtMSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRvIHNjcmVlbiBzcGFjZVxyXG4gICAgICAgICAgICAvLyAwIOKJpCB4IOKJpCB3LCAwIOKJpCB5IOKJpCBoXHJcbiAgICAgICAgICAgIGxldCBzMCA9IHBjYW1lcmEudG9TY3JlZW5TcGFjZShuMCk7XHJcbiAgICAgICAgICAgIGxldCBzMSA9IHBjYW1lcmEudG9TY3JlZW5TcGFjZShuMSk7XHJcbiAgICAgICAgICAgIGxldCBzMiA9IHBjYW1lcmEudG9TY3JlZW5TcGFjZShuMik7XHJcblxyXG4gICAgICAgICAgICAvLyDngrrkuoblkozmnKzkvobnlavnt5rnmoRjb2Rl55u45a6577yM5YKz5Ye65Y67XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChzMCk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChzMSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChzMik7XHJcblxyXG4gICAgICAgICAgICAvLyDmib7lh7rljIXlnI3nmoTnn6nlvaJcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9ncG5ub3Rlcy5ibG9nc3BvdC5jb20vMjAyMS8xMS9ibG9nLXBvc3RfMjguaHRtbFxyXG4gICAgICAgICAgICAvLyDlnJYgU2NyZWVuIFNwYWNlXHJcbiAgICAgICAgICAgIGxldCB7IG1pbiwgbWF4IH0gPSBWZWN0b3IubWluX21heChzMCwgczEsIHMyKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWluLngsIG1heC54LCAnfCcsIG1pbi55LCBtYXgueSk7XHJcbiAgICAgICAgICAgIGxldCBtaW5feCA9IE1hdGguZmxvb3IobWluLngpO1xyXG4gICAgICAgICAgICBsZXQgbWF4X3ggPSBNYXRoLmZsb29yKG1heC54KTtcclxuICAgICAgICAgICAgbGV0IG1pbl95ID0gTWF0aC5mbG9vcihtaW4ueSk7XHJcbiAgICAgICAgICAgIGxldCBtYXhfeSA9IE1hdGguZmxvb3IobWF4LnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2xhbXAgYnkgc2NyZWVuIHNpemVcclxuICAgICAgICAgICAgbWluX3ggPSBNYXRoLm1heCgwLCBtaW5feCk7XHJcbiAgICAgICAgICAgIG1pbl95ID0gTWF0aC5tYXgoMCwgbWluX3kpO1xyXG4gICAgICAgICAgICBtYXhfeCA9IE1hdGgubWluKHRoaXMuY29sb3JfYnVmZmVyLncgLSAxLCBtYXhfeCk7XHJcbiAgICAgICAgICAgIG1heF95ID0gTWF0aC5taW4odGhpcy5jb2xvcl9idWZmZXIuaCAtIDEsIG1heF95KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSBtaW5feDsgeCA8PSBtYXhfeDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gbWluX3k7IHkgPD0gbWF4X3k7ICsreSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDIxLzExL2Jsb2ctcG9zdF8yOC5odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZyWIFNjcmVlbiBTcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3Rvcih4ICsgMC41LCB5ICsgMC41LCAwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDlsI3nn6nlvaLoo6HnmoTmr4/lgIvpu55QXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5a6a5piv5ZCm5L2N5Zyoc2NyZWVuIHNwYWNl5LiJ6KeS5b2i6KOh6Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgc3VjY2VzcywgzrEsIM6yLCDOsyB9ID0gVHJpYW5nbGUuY2FsY3VsYXRlX86xX86yX86zKHMwLCBzMSwgczIsIFApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJhc3Rlcml6ZXIucHJpbnRfb25jZSAmJiB4ID09IFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zLnggJiYgeSA9PSBSYXN0ZXJpemVyLnBlZWtfc2NyZWVuX3Bvcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc19pbl90cmlhbmdsZScsIFRyaWFuZ2xlLmlzX2luX3RyaWFuZ2xlKM6xLCDOsiwgzrMpLCDOsSwgzrIsIM6zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVHJpYW5nbGUuaXNfaW5fdHJpYW5nbGUozrEsIM6yLCDOsykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB5ZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKDEp6KiI566XeuWAvCBcclxuICAgICAgICAgICAgICAgICAgICAvLyDlvp5OREPliLBTY3JlZW4gU3BhY2XmmK/ku7/lsITorormj5vvvIzlhafmj5LmrIrph43OseOAgc6y44CBzrPkuIDmqKNcclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDE5LzExL2Jsb2ctcG9zdF8zMC5odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHogPSBUcmlhbmdsZS5pbnRlcnBvbGF0aW9uKM6zLCDOsSwgzrIsIG4wLnosIG4xLnosIG4yLnopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB6IHRlc3RcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnVmZmVyX3ogPSBSYXN0ZXJpemVyLnpfYnVmZmVyLmdldCh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeiA+IGJ1ZmZlcl96KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a+r5YWleuWAvFxyXG4gICAgICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIuel9idWZmZXIuc2V0KHgsIHksIHopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAoMinpgI/oppbkv67mraNcclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDIxLzExL2Jsb2ctcG9zdF8yNy5odG1sI0hpZ2hsaWdodHNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6KaB5ZyoTkRD5o+S5YC877yM5omA5Lul6Zmk5Luld1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1X25kYyA9IFRyaWFuZ2xlLmludGVycG9sYXRpb24ozrMsIM6xLCDOsiwgVC52MC51IC8gVC52MC53LCBULnYxLnUgLyBULnYxLncsIFQudjIudSAvIFQudjIudyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZfbmRjID0gVHJpYW5nbGUuaW50ZXJwb2xhdGlvbijOsywgzrEsIM6yLCBULnYwLnYgLyBULnYwLncsIFQudjEudiAvIFQudjEudywgVC52Mi52IC8gVC52Mi53KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5LmY5LiKd+WbnuWIsHByb2plY3Rpb24gc3BhY2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdyA9IDEgLyBUcmlhbmdsZS5pbnRlcnBvbGF0aW9uKM6zLCDOsSwgzrIsIDEgLyBULnYwLncsIDEgLyBULnYxLncsIDEgLyBULnYyLncpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1ID0gdV9uZGMgKiB3O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdl9uZGMgKiB3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgeyBjb2xvciB9ID0gdGV4dHVyZS5nZXQobmV3IFZlY3RvcjJEKHUsIHYpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUmFzdGVyaXplci51c2Vfc29saWRfY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIuY29sb3JfYnVmZmVyLnNldCh4LCB5LCBSR0JBLnllbGxvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSYXN0ZXJpemVyLmNvbG9yX2J1ZmZlci5zZXQoeCwgeSwgY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoUmFzdGVyaXplci5wcmludF9vbmNlICYmIHggPT0gUmFzdGVyaXplci5wZWVrX3NjcmVlbl9wb3MueCAmJiB5ID09IFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbG9yJywgY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUmFzdGVyaXplci5wcmludF9vbmNlKSB7XHJcbiAgICAgICAgICAgIFJhc3Rlcml6ZXIucHJpbnRfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmluaXNoIHBlZWsnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY29yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF5IHtcclxuICAgIGZyb206IFZlY29yO1xyXG4gICAgZGlyOiBWZWNvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihmcm9tOiBWZWNvciwgZGlyOiBWZWNvcikge1xyXG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XHJcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IFZlY29yNEQgZnJvbSBcIi4vVmVjdG9yNERcIjtcclxuXHJcbi8vIOWcqDNEIHNwYWNl6KOB5YiH55qE6KmxXHJcbi8vIOmChOimgeiAg+aFruS7gOm6vOaZguWAmeimgeeUqCh4LHksdynoo4HliIdcclxuLy8g5LuA6bq85pmC5YCZ6KaB55SoKHgseSx6KeijgeWIh1xyXG4vLyBcclxuLy8g5LiN5aaC55u05o6l5ZyoNEQgc3BhY2Xoo4HliIdcclxuLy8gaHR0cHM6Ly9ncG5ub3Rlcy5ibG9nc3BvdC5jb20vMjAyMS8xMS9ibG9nLXBvc3RfMjguaHRtbFxyXG4vLyDlnJYgNEQgc3BhY2UgY2xpcFxyXG4vLyDpgJnoo6HnlKhEaXJlY3R455qETkRDXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJheTREIHtcclxuICAgIGZyb206IFZlY29yNEQ7XHJcbiAgICBkaXI6IFZlY29yNEQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnJvbTogVmVjb3I0RCwgdG86IFZlY29yNEQpIHtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIHRoaXMuZGlyID0gbmV3IFZlY29yNEQoVmVjdG9yLm1pbnVzKHRvLnAsIGZyb20ucCksIHRvLncgLSBmcm9tLncpO1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl94X2VxdWFsX3coKSB7XHJcbiAgICAgICAgLy8gZnJvbS54ICsgdCAqIGRpci54PSBmcm9tLncgKyB0ICogZGlyLnc7XHJcbiAgICAgICAgbGV0IHQgPSAodGhpcy5mcm9tLncgLSB0aGlzLmZyb20ucC54KSAvICh0aGlzLmRpci5wLnggLSB0aGlzLmRpci53KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feV9lcXVhbF93KCkge1xyXG4gICAgICAgIGxldCB0ID0gKHRoaXMuZnJvbS53IC0gdGhpcy5mcm9tLnAueSkgLyAodGhpcy5kaXIucC55IC0gdGhpcy5kaXIudyk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdF93aGVuX3pfZXF1YWxfdygpIHtcclxuICAgICAgICBsZXQgdCA9ICh0aGlzLmZyb20udyAtIHRoaXMuZnJvbS5wLnopIC8gKHRoaXMuZGlyLnAueiAtIHRoaXMuZGlyLncpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl94X2VxdWFsX21pbnVzX3coKSB7XHJcbiAgICAgICAgLy8gZnJvbS54ICsgdCAqIGRpci54PSAtKGZyb20udyArIHQgKiBkaXIudyk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gLSh0aGlzLmZyb20udyArIHRoaXMuZnJvbS5wLngpIC8gKHRoaXMuZGlyLncgKyB0aGlzLmRpci5wLngpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl95X2VxdWFsX21pbnVzX3coKSB7XHJcbiAgICAgICAgbGV0IHQgPSAtKHRoaXMuZnJvbS53ICsgdGhpcy5mcm9tLnAueSkgLyAodGhpcy5kaXIudyArIHRoaXMuZGlyLnAueSk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdF93aGVuX3pfZXF1YWxfemVyb193KCkge1xyXG5cclxuICAgICAgICAvLyBmcm9tLnogKyB0ICogZGlyLno9IDA7XHJcbiAgICAgICAgbGV0IHQgPSAtdGhpcy5mcm9tLnAueiAvIHRoaXMuZGlyLnAuejtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlclRhcmdldCB7XHJcbiAgICB3OiBudW1iZXIgPSAzMjA7XHJcbiAgICBoOiBudW1iZXIgPSAyNDA7XHJcbiAgICBiYWNrYnVmZmVyOiBPZmZzY3JlZW5DYW52YXM7XHJcbiAgICBjb25zdHJ1Y3Rvcih3OiBudW1iZXIgPSAzMjAsIGg6IG51bWJlciA9IDI0MCkge1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgICAgICB0aGlzLmJhY2tidWZmZXIgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHRoaXMudywgdGhpcy5oKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJfcGl4ZWwoZnVuYzogKHhfd2VpZ2h0OiBudW1iZXIsIHlfd2VpZ2h0OiBudW1iZXIsIHJhdGlvOiBudW1iZXIpID0+IFZlY3Rvcikge1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dF8yZCA9IHRoaXMuYmFja2J1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGlmICghY29udGV4dF8yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGNvbnRleHQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBzb3VyY2UgZGF0YSBhcnJheVxyXG4gICAgICAgIGxldCBiYWNrYnVmZmVyX2RhdGEgPSBjb250ZXh0XzJkLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICAgICAgbGV0IGJhY2tidWZmZXJfZGF0YV9hcnJheSA9IGJhY2tidWZmZXJfZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLncgLyB0aGlzLmg7XHJcblxyXG4gICAgICAgIC8vIHNldCBhcnJheSB2YWx1ZVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnc7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmdiYSBlYWNoIGNvbG9yIGlzIDRieXRlXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSA0ICogKHggKyB5ICogdGhpcy53KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LmludHJvLXRvLWR4ci5jd3ltYW4ub3JnL3ByZXNlbnRhdGlvbnMvSW50cm9EWFJfUmF5dHJhY2luZ1NoYWRlcnMucGRmXHJcbiAgICAgICAgICAgICAgICAvLyBwYWdlIDc4XHJcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHlgY/np7vljYrlgIvlg4/ntKDnmoTplbfluqbvvIzmiY3mnIPokL3lnKjlg4/ntKDnmoTkuK3plpMo5LiN6YGO6IKJ55y855yL5LiN5aSq5Ye65beu5Yil5bCx5piv5LqGKVxyXG4gICAgICAgICAgICAgICAgLy8gcmVtYXAgdG8gMH4xXHJcbiAgICAgICAgICAgICAgICBsZXQgWCA9ICgoeCArIDAuNSkgLyB0aGlzLncpO1xyXG4gICAgICAgICAgICAgICAgbGV0IFkgPSAoKHkgKyAwLjUpIC8gdGhpcy5oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgeSBkaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgIFkgPSAxIC0gWTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1hcCB0byAtMX4xXHJcbiAgICAgICAgICAgICAgICBsZXQgeF93ZWlnaHQgPSBYICogMiAtIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgeV93ZWlnaHQgPSBZICogMiAtIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZnVuYyh4X3dlaWdodCwgeV93ZWlnaHQsIHJhdGlvKTtcclxuICAgICAgICAgICAgICAgIGxldCByID0gY29sb3IueDtcclxuICAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IueTtcclxuICAgICAgICAgICAgICAgIGxldCBiID0gY29sb3IuejtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBnYW1tYeagoeato1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhbW1hID0gMSAvIDIuMTtcclxuICAgICAgICAgICAgICAgIHIgPSBNYXRoLnBvdyhyLCBnYW1tYSk7XHJcbiAgICAgICAgICAgICAgICBnID0gTWF0aC5wb3coZywgZ2FtbWEpO1xyXG4gICAgICAgICAgICAgICAgYiA9IE1hdGgucG93KGIsIGdhbW1hKTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXgrK10gPSBNYXRoLnJvdW5kKHIgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4KytdID0gTWF0aC5yb3VuZChnICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleCsrXSA9IE1hdGgucm91bmQoYiAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXhdID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHRfMmQucHV0SW1hZ2VEYXRhKGJhY2tidWZmZXJfZGF0YSwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0X3BpeGVsKGZ1bmM6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gUkdCQSkge1xyXG5cclxuICAgICAgICBsZXQgY29udGV4dF8yZCA9IHRoaXMuYmFja2J1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGlmICghY29udGV4dF8yZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGNvbnRleHQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBzb3VyY2UgZGF0YSBhcnJheVxyXG4gICAgICAgIGxldCBiYWNrYnVmZmVyX2RhdGEgPSBjb250ZXh0XzJkLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLncsIHRoaXMuaCk7XHJcbiAgICAgICAgbGV0IGJhY2tidWZmZXJfZGF0YV9hcnJheSA9IGJhY2tidWZmZXJfZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICBsZXQgcmF0aW8gPSB0aGlzLncgLyB0aGlzLmg7XHJcblxyXG4gICAgICAgIC8vIHNldCBhcnJheSB2YWx1ZVxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnc7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcmdiYSBlYWNoIGNvbG9yIGlzIDRieXRlXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSA0ICogKHggKyB5ICogdGhpcy53KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBmdW5jKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHIgPSBjb2xvci5yO1xyXG4gICAgICAgICAgICAgICAgbGV0IGcgPSBjb2xvci5nO1xyXG4gICAgICAgICAgICAgICAgbGV0IGIgPSBjb2xvci5iO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaykuWOu2dhbW1h77yM5Lmf5LiN55SoZ2FtbWHmoKHmraNcclxuICAgICAgICAgICAgICAgIC8vIGxldCBnYW1tYSA9IDEgLyAyLjE7XHJcbiAgICAgICAgICAgICAgICAvLyByID0gTWF0aC5wb3cociwgZ2FtbWEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZyA9IE1hdGgucG93KGcsIGdhbW1hKTtcclxuICAgICAgICAgICAgICAgIC8vIGIgPSBNYXRoLnBvdyhiLCBnYW1tYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4KytdID0gTWF0aC5yb3VuZChyICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleCsrXSA9IE1hdGgucm91bmQoZyAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXgrK10gPSBNYXRoLnJvdW5kKGIgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4XSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0XzJkLnB1dEltYWdlRGF0YShiYWNrYnVmZmVyX2RhdGEsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dfYnVmZmVyKGNhbnZhc19pZDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8g6Kit5a6aYnVmZmVy55qE5aSn5bCP5ZKMY3NzIHN0eWxl55qE5aSn5bCP5LiA5qijXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9vcGVuaG9tZS5jYy9Hb3NzaXAvV2ViR0wvQ2FudmFzLmh0bWxcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzX2lkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLncgKyAncHgnO1xyXG4gICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLmggKyAncHgnO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gY29weSBiYWNrYnVmZmVyIHRvIGNhbnZhc1xyXG4gICAgICAgIGxldCBjb250ZXh0X2JpdG1hcF9yZW5kZXIgPSBjYW52YXMuZ2V0Q29udGV4dChcImJpdG1hcHJlbmRlcmVyXCIpO1xyXG4gICAgICAgIGlmICghY29udGV4dF9iaXRtYXBfcmVuZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgY29udGV4dF9iaXRtYXBfcmVuZGVyIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHRfYml0bWFwX3JlbmRlci50cmFuc2ZlckZyb21JbWFnZUJpdG1hcCh0aGlzLmJhY2tidWZmZXIudHJhbnNmZXJUb0ltYWdlQml0bWFwKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJ1ZmZlcjJEIGZyb20gXCIuL0J1ZmZlcjJEXCI7XHJcbmltcG9ydCBSR0JBIGZyb20gXCIuL1JHQkFcIjtcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1ZlY3RvcjJEXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW1wbGVyIHtcclxuXHJcbiAgICBzdGF0aWMgdXZfdG9fYnVmZmVyX3NwYWNlKHV2OiBWZWN0b3IyRCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodXYueCwgMSAtIHV2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBidWZmZXJfdG9fdXZfc3BhY2UodXY6IFZlY3RvcjJEKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh1di54LCAxIC0gdXYueSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRleHR1cmUyRCh1djogVmVjdG9yMkQsIGJ1ZmZlcjogQnVmZmVyMkQ8UkdCQT4pIHtcclxuXHJcbiAgICAgICAgbGV0IHcgPSBidWZmZXIudztcclxuICAgICAgICBsZXQgaCA9IGJ1ZmZlci5oO1xyXG5cclxuICAgICAgICBsZXQgYnVmZmVyX3V2ID0gU2FtcGxlci51dl90b19idWZmZXJfc3BhY2UodXYpO1xyXG4gICAgICAgIGxldCB1ID0gYnVmZmVyX3V2Lng7XHJcbiAgICAgICAgbGV0IHYgPSBidWZmZXJfdXYueTtcclxuXHJcbiAgICAgICAgLy/lhYjmib7lh7rmnIDov5Hpu55cclxuICAgICAgICBsZXQgZ3JpZF91ID0gMSAvIHc7XHJcbiAgICAgICAgbGV0IGdyaWRfdiA9IDEgLyBoO1xyXG5cclxuICAgICAgICBsZXQgaGFsZl9ncmlkX3UgPSBncmlkX3UgKiAwLjU7XHJcbiAgICAgICAgbGV0IGhhbGZfZ3JpZF92ID0gZ3JpZF92ICogMC41O1xyXG5cclxuICAgICAgICAvL+S7peS4i+aYr+aciTTlgIvphLDpu57nmoTmg4Xms4EuLlxyXG4gICAgICAgIGxldCBuZWFyZXN0X3BvaW50X3VfZmxvYXQgPSB1IC8gZ3JpZF91O1xyXG4gICAgICAgIGxldCBuZWFyZXN0X3BvaW50X3ZfZmxvYXQgPSB2IC8gZ3JpZF92O1xyXG5cclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF91ID0gTWF0aC5mbG9vcihuZWFyZXN0X3BvaW50X3VfZmxvYXQpO1xyXG4gICAgICAgIGxldCBuZWFyZXN0X3BvaW50X3YgPSBNYXRoLmZsb29yKG5lYXJlc3RfcG9pbnRfdl9mbG9hdCk7XHJcblxyXG4gICAgICAgIC8vYWxlcnQobmVhcmVzdF9wb2ludF91K1wiLFwiK25lYXJlc3RfcG9pbnRfdik7XHJcblxyXG4gICAgICAgIC8v5Zyo44CM5pyA6L+R6bue44CN5qC86KOh55qEbG9jYWwgdXZcclxuICAgICAgICBsZXQgc191ID0gdSAlIGdyaWRfdTtcclxuICAgICAgICBsZXQgc192ID0gdiAlIGdyaWRfdjtcclxuXHJcbiAgICAgICAgLy/lho3mib7lh7rnm7jphLAz6bueXHJcbiAgICAgICAgaWYgKHNfdSA+PSBoYWxmX2dyaWRfdSAmJiBzX3YgPj0gaGFsZl9ncmlkX3YpLy/nm7jphLAz6bue5Zyo5Y+z5LiLXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WJm+WlveaVtOmZpOaZguimgeWBmuS/ruato1xyXG4gICAgICAgICAgICBpZiAobmVhcmVzdF9wb2ludF91X2Zsb2F0ID09IG5lYXJlc3RfcG9pbnRfdSlcclxuICAgICAgICAgICAgICAgIG5lYXJlc3RfcG9pbnRfdSA9IG5lYXJlc3RfcG9pbnRfdSAtIDE7XHJcblxyXG4gICAgICAgICAgICBpZiAobmVhcmVzdF9wb2ludF92X2Zsb2F0ID09IG5lYXJlc3RfcG9pbnRfdilcclxuICAgICAgICAgICAgICAgIG5lYXJlc3RfcG9pbnRfdiA9IG5lYXJlc3RfcG9pbnRfdiAtIDE7XHJcbiAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3RvcjJEKG5lYXJlc3RfcG9pbnRfdSwgbmVhcmVzdF9wb2ludF92KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWPs+S4i1xyXG4gICAgICAgICAgICBsZXQgTkUgPSBuZXcgVmVjdG9yMkQoUC54ICsgMSwgUC55KTtcclxuICAgICAgICAgICAgbGV0IFNXID0gbmV3IFZlY3RvcjJEKFAueCwgUC55ICsgMSk7XHJcbiAgICAgICAgICAgIGxldCBTRSA9IG5ldyBWZWN0b3IyRChQLnggKyAxLCBQLnkgKyAxKTtcclxuICAgICAgICAgICAgLy/lnKg06bue5YWn55qEdXZcclxuICAgICAgICAgICAgbGV0IHJlY3RVViA9IG5ldyBWZWN0b3IyRCgoc191IC0gaGFsZl9ncmlkX3UpIC8gZ3JpZF91LCAoc192IC0gaGFsZl9ncmlkX3YpIC8gZ3JpZF92KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWLCBOVzogUCwgTkUsIFNXLCBTRSwgY29sb3I6IFNhbXBsZXIuQmlsaW5lYXJfU2FtcGxlcihyZWN0VVYsIFAsIE5FLCBTVywgU0UsIGJ1ZmZlcikgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc191IDw9IGhhbGZfZ3JpZF91ICYmIHNfdiA+PSBoYWxmX2dyaWRfdikvL+ebuOmEsDPpu57lnKjlt6bkuItcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5Ymb5aW95pW06Zmk5pmC6KaB5YGa5L+u5q2jXHJcbiAgICAgICAgICAgIGlmIChuZWFyZXN0X3BvaW50X3ZfZmxvYXQgPT0gbmVhcmVzdF9wb2ludF92KVxyXG4gICAgICAgICAgICAgICAgbmVhcmVzdF9wb2ludF92ID0gbmVhcmVzdF9wb2ludF92IC0gMTtcclxuICAgICAgICAgICAgbGV0IFAgPSBuZXcgVmVjdG9yMkQobmVhcmVzdF9wb2ludF91LCBuZWFyZXN0X3BvaW50X3YpO1xyXG5cclxuICAgICAgICAgICAgLy8g5bem5LiLXHJcbiAgICAgICAgICAgIGxldCBOVyA9IG5ldyBWZWN0b3IyRChQLnggLSAxLCBQLnkpO1xyXG4gICAgICAgICAgICBsZXQgU1cgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55ICsgMSk7XHJcbiAgICAgICAgICAgIGxldCBTRSA9IG5ldyBWZWN0b3IyRChQLngsIFAueSArIDEpO1xyXG4gICAgICAgICAgICAvL+WcqDTpu57lhafnmoR1dlxyXG4gICAgICAgICAgICBsZXQgcmVjdFVWID0gbmV3IFZlY3RvcjJEKChzX3UgKyBoYWxmX2dyaWRfdSkgLyBncmlkX3UsIChzX3YgLSBoYWxmX2dyaWRfdikgLyBncmlkX3YpO1xyXG4gICAgICAgICAgICByZXR1cm4geyByZWN0VVYsIE5XLCBORTogUCwgU1csIFNFLCBjb2xvcjogU2FtcGxlci5CaWxpbmVhcl9TYW1wbGVyKHJlY3RVViwgTlcsIFAsIFNXLCBTRSwgYnVmZmVyKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzX3UgPD0gaGFsZl9ncmlkX3UgJiYgc192IDw9IGhhbGZfZ3JpZF92KS8v55u46YSwM+m7nuWcqOW3puS4ilxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IFAgPSBuZXcgVmVjdG9yMkQobmVhcmVzdF9wb2ludF91LCBuZWFyZXN0X3BvaW50X3YpO1xyXG5cclxuICAgICAgICAgICAgLy8g5bem5LiKXHJcbiAgICAgICAgICAgIGxldCBOVyA9IG5ldyBWZWN0b3IyRChQLnggLSAxLCBQLnkgLSAxKTtcclxuICAgICAgICAgICAgbGV0IE5FID0gbmV3IFZlY3RvcjJEKFAueCwgUC55IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBTVyA9IG5ldyBWZWN0b3IyRChQLnggLSAxLCBQLnkpO1xyXG4gICAgICAgICAgICAvL+WcqDTpu57lhafnmoR1dlxyXG4gICAgICAgICAgICBsZXQgcmVjdFVWID0gbmV3IFZlY3RvcjJEKChzX3UgKyBoYWxmX2dyaWRfdSkgLyBncmlkX3UsIChzX3YgKyBoYWxmX2dyaWRfdikgLyBncmlkX3YpO1xyXG4gICAgICAgICAgICByZXR1cm4geyByZWN0VVYsIE5XLCBORSwgU1csIFNFOiBQLCBjb2xvcjogU2FtcGxlci5CaWxpbmVhcl9TYW1wbGVyKHJlY3RVViwgTlcsIE5FLCBTVywgUCwgYnVmZmVyKSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChzX3UgPj0gaGFsZl9ncmlkX3UgJiYgc192IDw9IGhhbGZfZ3JpZF92KS8v55u46YSwM+m7nuWcqOWPs+S4ilxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WJm+WlveaVtOmZpOaZguimgeWBmuS/ruato1xyXG4gICAgICAgICAgICBpZiAobmVhcmVzdF9wb2ludF91X2Zsb2F0ID09IG5lYXJlc3RfcG9pbnRfdSlcclxuICAgICAgICAgICAgICAgIG5lYXJlc3RfcG9pbnRfdSA9IG5lYXJlc3RfcG9pbnRfdSAtIDE7XHJcbiAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3RvcjJEKG5lYXJlc3RfcG9pbnRfdSwgbmVhcmVzdF9wb2ludF92KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWPs+S4ilxyXG4gICAgICAgICAgICBsZXQgTlcgPSBuZXcgVmVjdG9yMkQoUC54LCBQLnkgLSAxKTtcclxuICAgICAgICAgICAgbGV0IE5FID0gbmV3IFZlY3RvcjJEKFAueCArIDEsIFAueSAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgU0UgPSBuZXcgVmVjdG9yMkQoUC54ICsgMSwgUC55KTtcclxuICAgICAgICAgICAgLy/lnKg06bue5YWn55qEdXZcclxuICAgICAgICAgICAgbGV0IHJlY3RVViA9IG5ldyBWZWN0b3IyRCgoc191IC0gaGFsZl9ncmlkX3UpIC8gZ3JpZF91LCAoc192ICsgaGFsZl9ncmlkX3YpIC8gZ3JpZF92KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWLCBOVywgTkUsIFNXOiBQLCBTRSwgY29sb3I6IFNhbXBsZXIuQmlsaW5lYXJfU2FtcGxlcihyZWN0VVYsIE5XLCBORSwgUCwgU0UsIGJ1ZmZlcikgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEJpbGluZWFyX1NhbXBsZXIocmVjdFVWOiBWZWN0b3IyRCwgTlc6IFZlY3RvcjJELCBORTogVmVjdG9yMkQsIFNXOiBWZWN0b3IyRCwgU0U6IFZlY3RvcjJELCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcblxyXG4gICAgICAgIC8v5bCNNOWAi+m7numhj+iJsuS9nOWFp+aPklxyXG4gICAgICAgIGxldCBOV2MgPSBidWZmZXIuZ2V0X2NsYW1wX21vZGUoTlcueCwgTlcueSk7XHJcbiAgICAgICAgbGV0IE5FYyA9IGJ1ZmZlci5nZXRfY2xhbXBfbW9kZShORS54LCBORS55KTtcclxuICAgICAgICBsZXQgU1djID0gYnVmZmVyLmdldF9jbGFtcF9tb2RlKFNXLngsIFNXLnkpO1xyXG4gICAgICAgIGxldCBTRWMgPSBidWZmZXIuZ2V0X2NsYW1wX21vZGUoU0UueCwgU0UueSk7XHJcblxyXG4gICAgICAgIGxldCBuUkdCID0gUkdCQS5sZXJwKE5XYywgTkVjLCByZWN0VVYueCk7XHJcbiAgICAgICAgbGV0IHNSR0IgPSBSR0JBLmxlcnAoU1djLCBTRWMsIHJlY3RVVi54KTtcclxuICAgICAgICBsZXQgbWlkZGxlUkdCID0gUkdCQS5sZXJwKG5SR0IsIHNSR0IsIHJlY3RVVi55KTtcclxuICAgICAgICByZXR1cm4gbWlkZGxlUkdCO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJ1ZmZlcjJEIGZyb20gXCIuL0J1ZmZlcjJEXCI7XHJcbmltcG9ydCBDYXZuYXNIZWxwZXIgZnJvbSBcIi4vQ2FudmFzSGVscGVyXCI7XHJcbmltcG9ydCBSR0JBIGZyb20gXCIuL1JHQkFcIjtcclxuaW1wb3J0IFNhbXBsZXIgZnJvbSBcIi4vU2FtcGxlclwiO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmUyRCB7XHJcblxyXG5cclxuICAgIGxvYWRfdGV4dHVyZV9idWZmZXIoKSB7XHJcbiAgICAgICAgbGV0IHcgPSB0aGlzLmltZy53aWR0aDtcclxuICAgICAgICBsZXQgaCA9IHRoaXMuaW1nLmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhc190ZXh0dXJlID0gQ2F2bmFzSGVscGVyLnNldF9jYW52YXMoJ2NhbnZhc190ZXh0dXJlJywgdywgaCk7XHJcbiAgICAgICAgbGV0IGN0eCA9IENhdm5hc0hlbHBlci5nZXRfY29udGV4dF9ieV9jYW52YXMoY2FudmFzX3RleHR1cmUpO1xyXG4gICAgICAgIGlmICghY3R4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkX3RleHR1cmVfYnVmZmVyIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDmlLnmiJAx5qyh6K6A5a6M5YWo6YOoXHJcbiAgICAgICAgbGV0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHcsIGgpLmRhdGE7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyMkQ8UkdCQT4odywgaCk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZWtlID0gNCAqICh3ICogeSArIHgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0KHgsIHksIG5ldyBSR0JBKGRhdGFbc2VrZV0gLyAyNTUsIGRhdGFbc2VrZSArIDFdIC8gMjU1LCBkYXRhW3Nla2UgKyAyXSAvIDI1NSwgZGF0YVtzZWtlICsgM10gLyAyNTUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoeSA+PSA3ICYmIHkgPD0gOCAmJiB4ID49IDcgJiYgeCA8PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGltZzogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIGJ1ZmZlcjogQnVmZmVyMkQ8UkdCQT4gfCBudWxsID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHNyYzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkX3RleHR1cmVfYnVmZmVyID0gdGhpcy5sb2FkX3RleHR1cmVfYnVmZmVyLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gc3JjO1xyXG4gICAgICAgIHRoaXMuaW1nLm9ubG9hZCA9IHRoaXMubG9hZF90ZXh0dXJlX2J1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQodXY6IFZlY3RvcjJEKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlcilcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWOiBudWxsLCBOVzogbnVsbCwgTkU6IG51bGwsIFNXOiBudWxsLCBTRTogbnVsbCwgY29sb3I6IFJHQkEuYmxhY2sgfTtcclxuICAgICAgICByZXR1cm4gU2FtcGxlci50ZXh0dXJlMkQodXYsIHRoaXMuYnVmZmVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY2VuZU5vZGUgZnJvbSBcIi4uL09iamVjdC9TY2VuZU5vZGVcIjtcclxuaW1wb3J0IFJheSBmcm9tIFwiLi9SYXlcIjtcclxuaW1wb3J0IFJheTREIGZyb20gXCIuL1JheTREXCI7XHJcbmltcG9ydCBIaXRJbmZvIGZyb20gXCIuL0hpdEluZm9cIjtcclxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL1RyaWFuZ2xlXCI7XHJcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vVmVydGV4XCI7XHJcbmltcG9ydCBQbGFuZSBmcm9tIFwiLi9QbGFuZVwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVfdG9fUmFkKGQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgKiBkIC8gMTgwO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVwc2lsb246IG51bWJlciA9IDAuMDAxO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlcl9lcXVhbChhOiBudW1iZXIsIGI6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8IGVwc2lsb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgaWYgKHggPiBtYXgpXHJcbiAgICAgICAgcmV0dXJuIG1heDtcclxuICAgIGVsc2UgaWYgKHggPCBtaW4pXHJcbiAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4geDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldF9oaXRfc29ydF9saXN0KG9ial9saXN0OiBTY2VuZU5vZGVbXSwgcmF5OiBSYXkpIHtcclxuXHJcbiAgICBsZXQgbGlzdCA9IG9ial9saXN0Lm1hcChvYmogPT4gb2JqLmguaGl0KHJheSwgb2JqLnMpKTtcclxuICAgIGxldCBoaXRfbGlzdCA9IDxIaXRJbmZvW10+KGxpc3QuZmlsdGVyKGluZm8gPT4gaW5mbyAhPSBudWxsICYmIGluZm8ucG9zaXRpdmVfdCkpO1xyXG5cclxuICAgIHJldHVybiBoaXRfbGlzdC5zb3J0KChhOiBIaXRJbmZvLCBiOiBIaXRJbmZvKSA9PiBhLnQgLSBiLnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0X3NoYWRvd193ZWlnaHQoaGl0X2luZm86IEhpdEluZm8sIGRpcmVjdGlvbl9saWdodF9kaXI6IFZlY3Rvciwgb2JqX2xpc3Q6IFNjZW5lTm9kZVtdKSB7XHJcblxyXG4gICAgLy8g5piv5ZCm5Zyo5b2x5a2Q5YWnXHJcbiAgICBsZXQgZGlyID0gZGlyZWN0aW9uX2xpZ2h0X2Rpci5uZWdhdGl2ZSgpO1xyXG4gICAgbGV0IGZyb20gPSBoaXRfaW5mby5oaXRfcG9zLmFkZChkaXIubXVsdGlwbHkoZXBzaWxvbikpOyAvLyDlgY/np7vkuIDlsI/mrrXot53pm6LvvIzpgb/lhY3lsITkuK3oh6rlt7FcclxuICAgIGxldCByYXkgPSBuZXcgUmF5KGZyb20sIGRpcik7XHJcbiAgICBsZXQgaGl0X3NvcnRfbGlzdCA9IGdldF9oaXRfc29ydF9saXN0KG9ial9saXN0LCByYXkpO1xyXG4gICAgaWYgKGhpdF9zb3J0X2xpc3QubGVuZ3RoICE9IDApIHsgLy8g5Zyo5b2x5a2Q5YWnXHJcbiAgICAgICAgcmV0dXJuIDAuNDU7IC8vIOS4jeimgeWkqum7kVxyXG4gICAgfSBlbHNlXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB0OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhICsgdCAqIChiIC0gYSk7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENsaXBQbGFuZSB7XHJcbiAgICBOZWFyLFxyXG4gICAgRmFyLFxyXG4gICAgUmlnaHQsXHJcbiAgICBMZWZ0LFxyXG4gICAgVG9wLFxyXG4gICAgQm90dG9tXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGlwKHRyaWFuZ2xlOiBUcmlhbmdsZSxcclxuICAgIHYwX291dDogKHRyaWFuZ2xlOiBUcmlhbmdsZSkgPT4gYm9vbGVhbixcclxuICAgIHYxX291dDogKHRyaWFuZ2xlOiBUcmlhbmdsZSkgPT4gYm9vbGVhbixcclxuICAgIHYyX291dDogKHRyaWFuZ2xlOiBUcmlhbmdsZSkgPT4gYm9vbGVhbixcclxuICAgIHBsYW5lOiBDbGlwUGxhbmUpIHtcclxuXHJcbiAgICBsZXQgdl9jbGlwOiBUcmlhbmdsZVtdID0gW107XHJcblxyXG4gICAgbGV0IGdldENyb3NzUG9pbnQgPSBmdW5jdGlvbiAodjA6IFZlcnRleCwgdjE6IFZlcnRleCkge1xyXG4gICAgICAgIGxldCByYXkgPSBuZXcgUmF5NEQodjAuZ2V0X1ZlY3RvcjREKCksIHYxLmdldF9WZWN0b3I0RCgpKTtcclxuXHJcbiAgICAgICAgbGV0IHQgPSAwO1xyXG4gICAgICAgIHN3aXRjaCAocGxhbmUpIHtcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuRmFyOlxyXG4gICAgICAgICAgICAgICAgdCA9IHJheS50X3doZW5fel9lcXVhbF93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuTmVhcjpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3pfZXF1YWxfemVyb193KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0ID0gcmF5LnRfd2hlbl94X2VxdWFsX3coKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENsaXBQbGFuZS5MZWZ0OlxyXG4gICAgICAgICAgICAgICAgdCA9IHJheS50X3doZW5feF9lcXVhbF9taW51c193KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuVG9wOlxyXG4gICAgICAgICAgICAgICAgdCA9IHJheS50X3doZW5feV9lcXVhbF93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuQm90dG9tOlxyXG4gICAgICAgICAgICAgICAgdCA9IHJheS50X3doZW5feV9lcXVhbF9taW51c193KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBWZXJ0ZXgubGVycCh2MCwgdjEsIHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHZvIGluIFxyXG4gICAgbGV0IGNsaXBfZmlyc3RfaW4gPSBmdW5jdGlvbiAodjA6IFZlcnRleCwgdjE6IFZlcnRleCwgdjI6IFZlcnRleCkge1xyXG4gICAgICAgIC8vIDEgdHJpYW5nbGUgdG8gMSB0cmlhbmdsZVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbmUnKTtcclxuICAgICAgICB2X2NsaXBbMF0gPSBuZXcgVHJpYW5nbGUodjAsIGdldENyb3NzUG9pbnQodjAsIHYxKSwgZ2V0Q3Jvc3NQb2ludCh2MCwgdjIpKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHZvIG91dFxyXG4gICAgbGV0IGNsaXBfZmlyc3Rfb3V0ID0gZnVuY3Rpb24gKHYwOiBWZXJ0ZXgsIHYxOiBWZXJ0ZXgsIHYyOiBWZXJ0ZXgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndHdvJyk7XHJcbiAgICAgICAgLy8gMSB0cmlhbmdsZSB0byAyIHRyaWFuZ2xlXHJcbiAgICAgICAgbGV0IGNyb3NzMSA9IGdldENyb3NzUG9pbnQodjIsIHYwKTtcclxuICAgICAgICBsZXQgY3Jvc3MyID0gZ2V0Q3Jvc3NQb2ludCh2MCwgdjEpO1xyXG5cclxuICAgICAgICB2X2NsaXBbMF0gPSBuZXcgVHJpYW5nbGUodjIsIGNyb3NzMSwgY3Jvc3MyKTtcclxuICAgICAgICB2X2NsaXBbMV0gPSBuZXcgVHJpYW5nbGUodjIsIGNyb3NzMiwgdjEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDmnIk456iu5oOF5rOBXHJcbiAgICBpZiAodjBfb3V0KHRyaWFuZ2xlKSkvL291dFxyXG4gICAge1xyXG4gICAgICAgIGlmICh2MV9vdXQodHJpYW5nbGUpKS8vIG91dCBvdXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Ml9vdXQodHJpYW5nbGUpKS8vIG91dCBvdXQgb3V0IChubyBjbGlwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnVsbCBvdXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIC8vb3V0IG91dCBpblxyXG4gICAgICAgICAgICAgICAgY2xpcF9maXJzdF9pbih0cmlhbmdsZS52MiwgdHJpYW5nbGUudjAsIHRyaWFuZ2xlLnYxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSAvL291dCBpbiBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Ml9vdXQodHJpYW5nbGUpKS8vb3V0IGluIG91dFxyXG4gICAgICAgICAgICAgICAgY2xpcF9maXJzdF9pbih0cmlhbmdsZS52MSwgdHJpYW5nbGUudjIsIHRyaWFuZ2xlLnYwKTtcclxuICAgICAgICAgICAgZWxzZSAvLyBvdXQgaW4gaW5cclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3Rfb3V0KHRyaWFuZ2xlLnYwLCB0cmlhbmdsZS52MSwgdHJpYW5nbGUudjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgLy8gaW5cclxuICAgIHtcclxuICAgICAgICBpZiAodjFfb3V0KHRyaWFuZ2xlKSkvLyBpbiBvdXQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvLyBpbiBvdXQgb3V0XHJcbiAgICAgICAgICAgICAgICBjbGlwX2ZpcnN0X2luKHRyaWFuZ2xlLnYwLCB0cmlhbmdsZS52MSwgdHJpYW5nbGUudjIpO1xyXG4gICAgICAgICAgICBlbHNlIC8vIGluIG91dCBpblxyXG4gICAgICAgICAgICAgICAgY2xpcF9maXJzdF9vdXQodHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyLCB0cmlhbmdsZS52MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgLy8gaW4gaW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Ml9vdXQodHJpYW5nbGUpKS8vIGluIGluIG91dFxyXG4gICAgICAgICAgICAgICAgY2xpcF9maXJzdF9vdXQodHJpYW5nbGUudjIsIHRyaWFuZ2xlLnYwLCB0cmlhbmdsZS52MSk7XHJcbiAgICAgICAgICAgIGVsc2UgLy8gaW4gaW4gaW4gKG5vIGNsaXApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZfY2xpcFswXSA9IHRyaWFuZ2xlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZfY2xpcDtcclxufVxyXG5cclxuLy8g6JmV55CG5rWu6bue5pW457K+5bqm5ZWP6aGMXHJcbi8vIGNvZGUgZnJvbSBodHRwOi8vOHN0LmJsb2dzcG90LnR3LzIwMTIvMTAvanNidWcuaHRtbFxyXG5leHBvcnQgY2xhc3MgTWF0aEhlbHBlciB7XHJcblxyXG4gICAgLy8g6JmV55CG6Zmk5rOV57K+5bqm5ZWP6aGMXHJcbiAgICAvLyAoYXJnMSAqIDEwXnQxKSAvIChhcmcyICogMTBedDIpID0gKGFyZzEvYXJnMikqMTBeKHQxLXQyKVxyXG4gICAgLy8g5omA5Lul5pyA5b6M6KaB5LmY5LiKIDEvMTBeKHQxLXQyKSA9IDEwXih0Mi10MSlcclxuICAgIHN0YXRpYyBhY2NEaXYoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IHQxID0gMCwgdDIgPSAwLCByMSwgcjI7XHJcbiAgICAgICAgdHJ5IHsgdDEgPSBhcmcxLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB9IGNhdGNoIChlKSB7IH1cclxuICAgICAgICB0cnkgeyB0MiA9IGFyZzIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIH0gY2F0Y2ggKGUpIHsgfVxyXG5cclxuICAgICAgICByMSA9IE51bWJlcihhcmcxLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpXHJcbiAgICAgICAgcjIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKVxyXG4gICAgICAgIHJldHVybiAocjEgLyByMikgKiBNYXRoLnBvdygxMCwgdDIgLSB0MSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6JmV55CG5Yqg5rOV57K+5bqm5ZWP6aGMXHJcbiAgICAvLyDnm7jnlbbmlrzlhYjlkIToh6o+Pm3lvozvvIznm7jliqDvvIzlho08PG1cclxuICAgIHN0YXRpYyBhY2NBZGQoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcclxuICAgICAgICAvL2NvZGUgZnJvbSBodHRwOi8vOHN0LmJsb2dzcG90LnR3LzIwMTIvMTAvanNidWcuaHRtbFxyXG4gICAgICAgIGxldCByMSwgcjIsIG0sIGM7XHJcbiAgICAgICAgdHJ5IHsgcjEgPSBhcmcxLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB9IGNhdGNoIChlKSB7IHIxID0gMCB9XHJcbiAgICAgICAgdHJ5IHsgcjIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aCB9IGNhdGNoIChlKSB7IHIyID0gMCB9XHJcbiAgICAgICAgYyA9IE1hdGguYWJzKHIxIC0gcjIpO1xyXG4gICAgICAgIG0gPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgocjEsIHIyKSlcclxuICAgICAgICBpZiAoYyA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGNtID0gTWF0aC5wb3coMTAsIGMpO1xyXG4gICAgICAgICAgICBpZiAocjEgPiByMikge1xyXG4gICAgICAgICAgICAgICAgYXJnMSA9IE51bWJlcihhcmcxLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgYXJnMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpICogY207XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcmcxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgKiBjbTtcclxuICAgICAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYXJnMSA9IE51bWJlcihhcmcxLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xyXG4gICAgICAgICAgICBhcmcyID0gTnVtYmVyKGFyZzIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXJnMSArIGFyZzIpIC8gbVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyDku6XliY3lr6vnmoRjb2RlXHJcbmV4cG9ydCBjbGFzcyBEcmF3SGVscGVyIHtcclxuXHJcbiAgICBzdGF0aWMgZHJhd0xpbmUob25lOiBWZWN0b3IyRCwgdHdvOiBWZWN0b3IyRCwgdmFsdWU6IFJHQkEsIGJ1ZmZlcjogQnVmZmVyMkQ8UkdCQT4pIHtcclxuXHJcbiAgICAgICAgbGV0IG5vdyA9IG9uZTtcclxuICAgICAgICBsZXQgdG8gPSB0d287XHJcbiAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3IyRC5taW51cyh0bywgbm93KTtcclxuXHJcbiAgICAgICAgbGV0IHN0ZXAgPSAxMDA7XHJcbiAgICAgICAgaWYgKGRpZmYueSA9PSAwKS8vaG9yaXpvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5bem55Wr5Yiw5Y+zXHJcbiAgICAgICAgICAgICAgICBub3cueCA9IG5vdy54ICsgMTtcclxuICAgICAgICAgICAgICAgIGlmICghYnVmZmVyLmlzX2xlZ2FsX2luZGV4KG5vdy54LCBub3cueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vdy54ID4gdG8ueClcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBidWZmZXIuc2V0KG5vdy54LCBub3cueSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaWZmLnggPT0gMCkvL3ZlcnRpY2FsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy/kuIrnlavliLDkuItcclxuICAgICAgICAgICAgICAgIG5vdy55ID0gbm93LnkgKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFidWZmZXIuaXNfbGVnYWxfaW5kZXgobm93LngsIG5vdy55KSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm93LnkgPiB0by55KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5zZXQobm93LngsIG5vdy55LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gZGlmZi54IC8gZGlmZi55O1xyXG4gICAgICAgIGxldCBhYnNfciA9IE1hdGguYWJzKHJhdGlvKTtcclxuXHJcbiAgICAgICAgaWYgKHJhdGlvID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoYWJzX3IgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBub3cueSA9IG5vdy55ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBub3cueCA9IG5vdy54ICsgYWJzX3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludFggPSBNYXRoLmZsb29yKG5vdy54KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci5pc19sZWdhbF9pbmRleChpbnRYLCBub3cueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmlzX292ZXJfcG9zaXRpdmUobm93LngsIG5vdy55LCB0by54LCB0by55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5zZXQoaW50WCwgbm93LnksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhYnNfciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RlcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnkgPSBub3cueSArIDEgLyBhYnNfcjtcclxuICAgICAgICAgICAgICAgICAgICBub3cueCA9IG5vdy54ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50WSA9IE1hdGguZmxvb3Iobm93LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYnVmZmVyLmlzX2xlZ2FsX2luZGV4KG5vdy54LCBpbnRZKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXIuaXNfb3Zlcl9wb3NpdGl2ZShub3cueCwgbm93LnksIHRvLngsIHRvLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnNldChub3cueCwgaW50WSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJhdGlvIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoYWJzX3IgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBub3cueSA9IG5vdy55ICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBub3cueCA9IG5vdy54IC0gYWJzX3I7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludFggPSBNYXRoLmZsb29yKG5vdy54KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci5pc19sZWdhbF9pbmRleChpbnRYLCBub3cueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLmlzX292ZXJfbmVnYXRpdmUobm93LngsIG5vdy55LCB0by54LCB0by55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5zZXQoaW50WCwgbm93LnksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhYnNfciA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RlcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm93LnkgPSBub3cueSArIDEgLyBhYnNfcjtcclxuICAgICAgICAgICAgICAgICAgICBub3cueCA9IG5vdy54IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50WSA9IE1hdGguZmxvb3Iobm93LnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYnVmZmVyLmlzX2xlZ2FsX2luZGV4KG5vdy54LCBpbnRZKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXIuaXNfb3Zlcl9uZWdhdGl2ZShub3cueCwgbm93LnksIHRvLngsIHRvLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnNldChub3cueCwgaW50WSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZHJhd0NpcmNsZSh2YWx1ZTogUkdCQSwgYnVmZmVyOiBCdWZmZXIyRDxSR0JBPikge1xyXG4gICAgICAgIGxldCBpdCA9IDUwO1xyXG4gICAgICAgIGxldCBkZWx0YSA9IDIgKiBNYXRoLlBJIC8gaXQ7XHJcbiAgICAgICAgbGV0IFIgPSA5O1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSBuZXcgVmVjdG9yMkQoMTAsIDEwKTtcclxuICAgICAgICBsZXQgc3RhcnRUaGVkYSA9IC1NYXRoLlBJIC8gMztcclxuXHJcbiAgICAgICAgLy/nlavlnJNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vd1ggPSBNYXRoLmZsb29yKGNlbnRlci54ICsgUiAqIE1hdGguY29zKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIGkpKTtcclxuICAgICAgICAgICAgbGV0IG5vd1kgPSBNYXRoLmZsb29yKGNlbnRlci55ICsgUiAqIE1hdGguc2luKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIGkpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXh0WCA9IE1hdGguZmxvb3IoY2VudGVyLnggKyBSICogTWF0aC5jb3Moc3RhcnRUaGVkYSArIGRlbHRhICogKGkgKyAxKSkpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFkgPSBNYXRoLmZsb29yKGNlbnRlci55ICsgUiAqIE1hdGguc2luKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIChpICsgMSkpKTtcclxuXHJcbiAgICAgICAgICAgIERyYXdIZWxwZXIuZHJhd0xpbmVXcmFwcGVyKG5ldyBWZWN0b3IyRChub3dYLCBub3dZKSwgbmV3IFZlY3RvcjJEKG5leHRYLCBuZXh0WSksIHZhbHVlLCBidWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGRyYXdTdGFyKHZhbHVlOiBSR0JBLCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcbiAgICAgICAgbGV0IGl0ID0gNTtcclxuICAgICAgICBsZXQgZGVsdGEgPSAyICogTWF0aC5QSSAvIGl0O1xyXG4gICAgICAgIGxldCBSID0gOTtcclxuICAgICAgICBsZXQgY2VudGVyID0gbmV3IFZlY3RvcjJEKDEwLCAxMCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0VGhlZGEgPSAtTWF0aC5QSSAvIDM7XHJcblxyXG4gICAgICAgIC8v55Wr5pif5pifXHJcbiAgICAgICAgbGV0IGsgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm93WCA9IE1hdGguZmxvb3IoY2VudGVyLnggKyBSICogTWF0aC5jb3Moc3RhcnRUaGVkYSArIGRlbHRhICogaykpO1xyXG4gICAgICAgICAgICBsZXQgbm93WSA9IE1hdGguZmxvb3IoY2VudGVyLnkgKyBSICogTWF0aC5zaW4oc3RhcnRUaGVkYSArIGRlbHRhICogaykpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5leHRYID0gTWF0aC5mbG9vcihjZW50ZXIueCArIFIgKiBNYXRoLmNvcyhzdGFydFRoZWRhICsgZGVsdGEgKiAoayArIDIpKSk7XHJcbiAgICAgICAgICAgIGxldCBuZXh0WSA9IE1hdGguZmxvb3IoY2VudGVyLnkgKyBSICogTWF0aC5zaW4oc3RhcnRUaGVkYSArIGRlbHRhICogKGsgKyAyKSkpO1xyXG5cclxuICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3TGluZVdyYXBwZXIobmV3IFZlY3RvcjJEKG5vd1gsIG5vd1kpLCBuZXcgVmVjdG9yMkQobmV4dFgsIG5leHRZKSwgdmFsdWUsIGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGsgPSBrICsgMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRyYXdMaW5lV3JhcHBlcih0MDogVmVjdG9yMkQsIHQxOiBWZWN0b3IyRCwgdmFsdWU6IFJHQkEsIGJ1ZmZlcjogQnVmZmVyMkQ8UkdCQT4pIHtcclxuICAgICAgICAvL+W+nuS4iuW+gOS4i+eVq1xyXG4gICAgICAgIGlmICh0MC55IDwgdDEueSlcclxuICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3TGluZSh0MCwgdDEsIHZhbHVlLCBidWZmZXIpO1xyXG4gICAgICAgIGVsc2UgaWYgKHQxLnkgPCB0MC55KVxyXG4gICAgICAgICAgICBEcmF3SGVscGVyLmRyYXdMaW5lKHQxLCB0MCwgdmFsdWUsIGJ1ZmZlcik7XHJcbiAgICAgICAgZWxzZSAvL+awtOW5s+e3mlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/lvp7lt6blvoDlj7PnlatcclxuICAgICAgICAgICAgaWYgKHQwLnggPCB0MS54KVxyXG4gICAgICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3TGluZSh0MCwgdDEsIHZhbHVlLCBidWZmZXIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0MS54IDwgdDAueClcclxuICAgICAgICAgICAgICAgIERyYXdIZWxwZXIuZHJhd0xpbmUodDEsIHQwLCB2YWx1ZSwgYnVmZmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5pbXBvcnQgeyBkZWdyZWVfdG9fUmFkIH0gZnJvbSAnLi9Ub29sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIHhBeGlzOiBWZWN0b3I7XHJcbiAgICB5QXhpczogVmVjdG9yO1xyXG4gICAgekF4aXM6IFZlY3RvcjtcclxuICAgIHBvc2l0aW9uOiBWZWN0b3I7XHJcbiAgICBjb25zdHJ1Y3Rvcih4QXhpczogVmVjdG9yLCB5QXhpczogVmVjdG9yLCB6QXhpczogVmVjdG9yLCBwb3NpdGlvbjogVmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy54QXhpcyA9IHhBeGlzO1xyXG4gICAgICAgIHRoaXMueUF4aXMgPSB5QXhpcztcclxuICAgICAgICB0aGlzLnpBeGlzID0gekF4aXM7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1Qb2ludCh0cmFuc2Zvcm06IFRyYW5zZm9ybSwgcG9pbnQ6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCB2ZWN0b3JYID0gdHJhbnNmb3JtLnhBeGlzLm11bHRpcGx5KHBvaW50LngpO1xyXG4gICAgICAgIGxldCB2ZWN0b3JZID0gdHJhbnNmb3JtLnlBeGlzLm11bHRpcGx5KHBvaW50LnkpO1xyXG4gICAgICAgIGxldCB2ZWN0b3JaID0gdHJhbnNmb3JtLnpBeGlzLm11bHRpcGx5KHBvaW50LnopO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtLnBvc2l0aW9uLmFkZCh2ZWN0b3JYKS5hZGQodmVjdG9yWSkuYWRkKHZlY3RvclopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0cmFuc2Zvcm1WZWN0b3IodHJhbnNmb3JtOiBUcmFuc2Zvcm0sIHZlcnRleDogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHZlY3RvclggPSB0cmFuc2Zvcm0ueEF4aXMubXVsdGlwbHkodmVydGV4LngpO1xyXG4gICAgICAgIGxldCB2ZWN0b3JZID0gdHJhbnNmb3JtLnlBeGlzLm11bHRpcGx5KHZlcnRleC55KTtcclxuICAgICAgICBsZXQgdmVjdG9yWiA9IHRyYW5zZm9ybS56QXhpcy5tdWx0aXBseSh2ZXJ0ZXgueik7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWN0b3JYLmFkZCh2ZWN0b3JZKS5hZGQodmVjdG9yWik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zZm9ybVRyYW5zZm9ybSh0cmFuc2Zvcm06IFRyYW5zZm9ybSwgaW5wdXRUcmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKFxyXG4gICAgICAgICAgICBUcmFuc2Zvcm0udHJhbnNmb3JtVmVjdG9yKHRyYW5zZm9ybSwgaW5wdXRUcmFuc2Zvcm0ueEF4aXMpLFxyXG4gICAgICAgICAgICBUcmFuc2Zvcm0udHJhbnNmb3JtVmVjdG9yKHRyYW5zZm9ybSwgaW5wdXRUcmFuc2Zvcm0ueUF4aXMpLFxyXG4gICAgICAgICAgICBUcmFuc2Zvcm0udHJhbnNmb3JtVmVjdG9yKHRyYW5zZm9ybSwgaW5wdXRUcmFuc2Zvcm0uekF4aXMpLFxyXG4gICAgICAgICAgICBUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQodHJhbnNmb3JtLCBpbnB1dFRyYW5zZm9ybS5wb3NpdGlvbiksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlQnlaKGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGRlZ3JlZV90b19SYWQoZGVncmVlKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHJhZGlhbiksIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIGxldCB4QXhpcyA9IG5ldyBWZWN0b3IoYywgcywgMCk7XHJcbiAgICAgICAgbGV0IHlBeGlzID0gbmV3IFZlY3RvcigtcywgYywgMCk7XHJcbiAgICAgICAgbGV0IHpBeGlzID0gbmV3IFZlY3RvcigwLCAwLCAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIHhBeGlzLFxyXG4gICAgICAgICAgICB5QXhpcyxcclxuICAgICAgICAgICAgekF4aXMsXHJcbiAgICAgICAgICAgIFZlY3Rvci56ZXJvLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZUJ5WShkZWdyZWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBkZWdyZWVfdG9fUmFkKGRlZ3JlZSk7XHJcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyhyYWRpYW4pLCBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICBsZXQgekF4aXMgPSBuZXcgVmVjdG9yKHMsIDAsIGMpO1xyXG4gICAgICAgIGxldCB4QXhpcyA9IG5ldyBWZWN0b3IoYywgMCwgLXMpO1xyXG4gICAgICAgIGxldCB5QXhpcyA9IG5ldyBWZWN0b3IoMCwgMSwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKFxyXG4gICAgICAgICAgICB4QXhpcyxcclxuICAgICAgICAgICAgeUF4aXMsXHJcbiAgICAgICAgICAgIHpBeGlzLFxyXG4gICAgICAgICAgICBWZWN0b3IuemVybyxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVCeVgoZGVncmVlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gZGVncmVlX3RvX1JhZChkZWdyZWUpO1xyXG4gICAgICAgIGxldCBjID0gTWF0aC5jb3MocmFkaWFuKSwgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgbGV0IHhBeGlzID0gbmV3IFZlY3RvcigxLCAwLCAwKTtcclxuICAgICAgICBsZXQgeUF4aXMgPSBuZXcgVmVjdG9yKDAsIGMsIHMpO1xyXG4gICAgICAgIGxldCB6QXhpcyA9IG5ldyBWZWN0b3IoMCwgLXMsIGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybShcclxuICAgICAgICAgICAgeEF4aXMsXHJcbiAgICAgICAgICAgIHlBeGlzLFxyXG4gICAgICAgICAgICB6QXhpcyxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcigwLCAwLCAwKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvZmZzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yKDEsIDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yKDAsIDEsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yKDAsIDAsIDEpLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yKHgsIHksIHopLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuL1ZlY3RvcidcclxuaW1wb3J0IFZlcnRleCBmcm9tICcuL1ZlcnRleCdcclxuaW1wb3J0IENhbWVyYSBmcm9tICcuL0NhbWVyYSc7XHJcbmltcG9ydCBQbGFuZSBmcm9tICcuL1BsYW5lJztcclxuaW1wb3J0IFJheSBmcm9tICcuL1JheSc7XHJcbmltcG9ydCBSYXN0ZXJpemVyIGZyb20gJy4vUmFzdGVyaXplcic7XHJcbmltcG9ydCBUZXh0dXJlMkQgZnJvbSAnLi9UZXh0dXJlMkQnO1xyXG5pbXBvcnQgeyBudW1iZXJfZXF1YWwgfSBmcm9tICcuL1Rvb2wnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpYW5nbGUge1xyXG5cclxuICAgIC8vIOmAmeS6m+m7nnrpg73mmK8wXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlX86xX86yX86zKHMwOiBWZWN0b3IsIHMxOiBWZWN0b3IsIHMyOiBWZWN0b3IsIFA6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCBkaWZmID0gVmVjdG9yLm1pbnVzKFAsIHMwKTtcclxuXHJcbiAgICAgICAgLy8g5rGCcmF5KFAsUzAtUzIp5ZKMcmF5KFMwLFMxLVMyKeeahOS6pOm7nlxyXG4gICAgICAgIC8vIOetieWQjOaWvOaxgnJheShQLFMwLVMyKeWSjOW5s+mdoueahOS6pOm7nlxyXG4gICAgICAgIGxldCBkaXIwMSA9IFZlY3Rvci5taW51cyhzMSwgczApO1xyXG4gICAgICAgIGxldCBkaXIwMiA9IFZlY3Rvci5taW51cyhzMiwgczApO1xyXG4gICAgICAgIGxldCBuID0gbmV3IFZlY3RvcigtZGlyMDEueSwgZGlyMDEueCwgMCk7XHJcbiAgICAgICAgbGV0IHJheSA9IG5ldyBSYXkoUCwgZGlyMDIubXVsdGlwbHkoLTEpKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gUGxhbmUuaGl0KHJheSwgbmV3IFBsYW5lKHMwLCBuKSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0KSB7IC8vIOmAgOWMluaIkOebtOe3mueahOS4ieinkuW9ouaJjeacieS5n+WPr+iDvVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5bmz6KGMJywgczAsIHMxLCBzMiwgUCk7XHJcblxyXG4gICAgICAgICAgICAvLyDkuI3omZXnkIZcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIM6xOiAxLCDOsjogMCwgzrM6IDAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwX29uX2RpcjAxID0gcmVzdWx0LmhpdF9wb3M7XHJcbiAgICAgICAgbGV0IHZlY3Rvcl/OsSA9IFZlY3Rvci5taW51cyhwX29uX2RpcjAxLCBzMCk7XHJcbiAgICAgICAgbGV0IHZlY3Rvcl/OsiA9IFZlY3Rvci5taW51cyhkaWZmLCB2ZWN0b3JfzrEpO1xyXG5cclxuICAgICAgICAvLyDmk4vmjolkaXIwMeOAgWRpcjAy5piveei7uOW5s+ihjOeahOaDheazgVxyXG4gICAgICAgIC8vIOa1rum7nuaVuOiri+eUqCBudW1iZXJfZXF1YWzvvIzkuI3nhLbmnINHR1xyXG4gICAgICAgIC8vIOimi+Wclu+8mmJ1Zy9mbG9hdF9wb2ludF9jb21wYWlyZV9lcnJvcihmaXhlZCkvYnVnX3doZW5fY2xpcHBpbmdfMi5qcGdcclxuICAgICAgICBsZXQgzrEgPSBudW1iZXJfZXF1YWwoZGlyMDEueCwgMCkgPyB2ZWN0b3JfzrEueSAvIGRpcjAxLnkgOiB2ZWN0b3JfzrEueCAvIGRpcjAxLng7XHJcbiAgICAgICAgbGV0IM6yID0gbnVtYmVyX2VxdWFsKGRpcjAyLngsIDApID8gdmVjdG9yX86yLnkgLyBkaXIwMi55IDogdmVjdG9yX86yLnggLyBkaXIwMi54O1xyXG4gICAgICAgIGxldCDOsyA9IDEgLSDOsSAtIM6yO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCDOsSwgzrIsIM6zIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNfaW5fdHJpYW5nbGUozrE6IG51bWJlciwgzrI6IG51bWJlciwgzrM6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAozrEgPj0gMCAmJiDOsiA+PSAwICYmIM6zID49IDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWboOeCumNhbGN1bGF0ZV/OsV/Osl/Os+WvpuS9nOeahOaWueW8j++8jOaJgOS7pemghuW6j+aYr86z44CBzrHjgIHOsiDwn5idXHJcbiAgICBzdGF0aWMgaW50ZXJwb2xhdGlvbijOszogbnVtYmVyLCDOsTogbnVtYmVyLCDOsjogbnVtYmVyLCB2MDogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYwICogzrMgKyB2MSAqIM6xICsgdjIgKiDOsjtcclxuICAgIH1cclxuXHJcbiAgICB2MDogVmVydGV4O1xyXG4gICAgdjE6IFZlcnRleDtcclxuICAgIHYyOiBWZXJ0ZXg7XHJcbiAgICBjb25zdHJ1Y3RvcihwdjA6IFZlcnRleCwgcHYxOiBWZXJ0ZXgsIHB2MjogVmVydGV4KSB7XHJcbiAgICAgICAgdGhpcy52MCA9IHB2MDtcclxuICAgICAgICB0aGlzLnYxID0gcHYxO1xyXG4gICAgICAgIHRoaXMudjIgPSBwdjI7XHJcbiAgICB9XHJcblxyXG4gICAgdl9zOiBWZWN0b3JbXSB8IG51bGwgPSBudWxsO1xyXG4gICAgcmFzdGVyaXplKHBjYW1lcmE6IENhbWVyYSwgd29ybGRUcmFuc2Zvcm06IFRyYW5zZm9ybSwgdGV4dHVyZTogVGV4dHVyZTJEKSB7XHJcbiAgICAgICAgdGhpcy52X3MgPSBSYXN0ZXJpemVyLnByb2Nlc3ModGhpcywgcGNhbWVyYSwgd29ybGRUcmFuc2Zvcm0sIHRleHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBpZiAodGhpcy52X3MgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdENvdW50ID0gdGhpcy52X3MubGVuZ3RoIC8gMztcclxuICAgICAgICBmb3IgKGxldCBjID0gMTsgYyA8PSB0Q291bnQ7ICsrYykge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAzICogYyAtIDE7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy52X3NbaW5kZXhdLngsIHRoaXMudl9zW2luZGV4XS55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnZfc1tpbmRleCAtIDJdLngsIHRoaXMudl9zW2luZGV4IC0gMl0ueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy52X3NbaW5kZXggLSAxXS54LCB0aGlzLnZfc1tpbmRleCAtIDFdLnkpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMudl9zW2luZGV4XS54LCB0aGlzLnZfc1tpbmRleF0ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBsZXJwLCBudW1iZXJfZXF1YWwsIGNsYW1wIH0gZnJvbSAnLi9Ub29sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcclxuXHJcbiAgICBzdGF0aWMgbWluX21heCh2MDogVmVjdG9yLCB2MTogVmVjdG9yLCB2MjogVmVjdG9yKSB7XHJcblxyXG4gICAgICAgIGxldCBtaW4gPSBuZXcgVmVjdG9yKE1hdGgubWluKE1hdGgubWluKHYwLngsIHYxLngpLCB2Mi54KSwgTWF0aC5taW4oTWF0aC5taW4odjAueSwgdjEueSksIHYyLnkpLCBNYXRoLm1pbihNYXRoLm1pbih2MC56LCB2MS56KSwgdjIueikpO1xyXG4gICAgICAgIGxldCBtYXggPSBuZXcgVmVjdG9yKE1hdGgubWF4KE1hdGgubWF4KHYwLngsIHYxLngpLCB2Mi54KSwgTWF0aC5tYXgoTWF0aC5tYXgodjAueSwgdjEueSksIHYyLnkpLCBNYXRoLm1heChNYXRoLm1heCh2MC56LCB2MS56KSwgdjIueikpO1xyXG4gICAgICAgIHJldHVybiB7IG1pbiwgbWF4IH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNhbGN1bGF0ZV9ub3JtYWwodjA6IFZlY3RvciwgdjE6IFZlY3RvciwgdjI6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCB2MDEgPSBWZWN0b3IubWludXModjEsIHYwKTtcclxuICAgICAgICBsZXQgdjAyID0gVmVjdG9yLm1pbnVzKHYyLCB2MCk7XHJcbiAgICAgICAgbGV0IG5vcm1hbCA9IFZlY3Rvci5jcm9zcyh2MDEsIHYwMik7XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbC5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlX2NlbnRlcih2MDogVmVjdG9yLCB2MTogVmVjdG9yLCB2MjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHYwLmFkZCh2MSkuYWRkKHYyKS5tdWx0aXBseSgxIC8gMyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHV2KHU6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodSwgdiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwID0gbmV3IFZlY3RvcigwLCAxLCAwKTtcclxuICAgIHN0YXRpYyB6ZXJvID0gbmV3IFZlY3RvcigwLCAwLCAwKTtcclxuXHJcbiAgICBzdGF0aWMgcmVmbGVjdChJOiBWZWN0b3IsIE46IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCBMID0gLTIgKiBWZWN0b3IuZG90KEksIE4pXHJcbiAgICAgICAgcmV0dXJuIE4ubXVsdGlwbHkoTCkuYWRkKEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGQoQTogVmVjdG9yLCBCOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoQi54ICsgQS54LCBCLnkgKyBBLnksIEIueiArIEEueik7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWludXMoQTogVmVjdG9yLCBCOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoQS54IC0gQi54LCBBLnkgLSBCLnksIEEueiAtIEIueik7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoQTogVmVjdG9yLCBzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoQS54ICogcywgQS55ICogcywgQS56ICogcyk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkzKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoQS54ICogQi54LCBBLnkgKiBCLnksIEEueiAqIEIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yKEEueSAqIEIueiAtIEEueiAqIEIueSwgLUEueCAqIEIueiArIEEueiAqIEIueCwgQS54ICogQi55IC0gQS55ICogQi54KTtcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEEueCAqIEIueCArIEEueSAqIEIueSArIEEueiAqIEIuejtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXF1YWwoQTogVmVjdG9yLCBCOiBWZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyX2VxdWFsKEEueCwgQi54KSAmJiBudW1iZXJfZXF1YWwoQS55LCBCLnkpICYmIG51bWJlcl9lcXVhbChBLnosIEIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoQTogVmVjdG9yLCBCOiBWZWN0b3IsIHQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxyXG4gICAgICAgICAgICBsZXJwKEEueCwgQi54LCB0KSxcclxuICAgICAgICAgICAgbGVycChBLnksIEIueSwgdCksXHJcbiAgICAgICAgICAgIGxlcnAoQS56LCBCLnosIHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB4OiBudW1iZXIgPSAwO1xyXG4gICAgeTogbnVtYmVyID0gMDtcclxuICAgIHo6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihweDogbnVtYmVyLCBweTogbnVtYmVyLCBwejogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcHg7XHJcbiAgICAgICAgdGhpcy55ID0gcHk7XHJcbiAgICAgICAgdGhpcy56ID0gcHo7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBfeChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSBjbGFtcCh0aGlzLngsIG1pbiwgbWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcF95KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IGNsYW1wKHRoaXMueSwgbWluLCBtYXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggLyB0ZW1wO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSAvIHRlbXA7XHJcbiAgICAgICAgdGhpcy56ID0gdGhpcy56IC8gdGVtcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGQoQTogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQodGhpcywgQSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWludXMoQTogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5taW51cyh0aGlzLCBBKTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseShzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yLm11bHRpcGx5KHRoaXMsIHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5lZ2F0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IubXVsdGlwbHkodGhpcywgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIFZlY3RvcjJEKCkge1xyXG4gICAgICAgIHRoaXMueiA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRCB7XHJcblxyXG4gICAgc3RhdGljIGFkZChBOiBWZWN0b3IyRCwgQjogVmVjdG9yMkQpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IyRChCLnggKyBBLngsIEIueSArIEEueSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWludXMoQTogVmVjdG9yMkQsIEI6IFZlY3RvcjJEKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yMkQoQS54IC0gQi54LCBBLnkgLSBCLnkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsdXMocDogVmVjdG9yMkQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseShzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIHMsIHRoaXMueSAqIHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIiggXCIgKyB0aGlzLnggKyBcIiAsIFwiICsgdGhpcy55ICsgXCIgKVwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY29yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yNEQge1xyXG4gICAgcDogVmVjb3I7XHJcbiAgICB3OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocDogVmVjb3IsIHc6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxufTsiLCJcclxuaW1wb3J0IHsgbGVycCB9IGZyb20gJy4vVG9vbCc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InXHJcbmltcG9ydCBWZWN0b3I0RCBmcm9tICcuL1ZlY3RvcjREJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XHJcbiAgICBzdGF0aWMgYnVpbGRfdmVydGV4KHA6IFZlY3RvciwgbjogVmVjdG9yLCB3OiBudW1iZXIsIHU6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocCwgbiwgdywgdSwgdik7XHJcbiAgICAgICAgcmV0dXJuIHZlcnRleDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycCh2MDogVmVydGV4LCB2MTogVmVydGV4LCB0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcCA9IFZlY3Rvci5sZXJwKHYwLnAsIHYxLnAsIHQpO1xyXG4gICAgICAgIGxldCBuID0gVmVjdG9yLmxlcnAodjAubiwgdjEubiwgdCk7XHJcbiAgICAgICAgbGV0IHcgPSBsZXJwKHYwLncsIHYxLncsIHQpO1xyXG4gICAgICAgIGxldCB1ID0gbGVycCh2MC51LCB2MS51LCB0KTtcclxuICAgICAgICBsZXQgdiA9IGxlcnAodjAudiwgdjEudiwgdCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXgocCwgbiwgdywgdSwgdik7XHJcbiAgICB9XHJcblxyXG4gICAgcDogVmVjdG9yO1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgdTogbnVtYmVyO1xyXG4gICAgdjogbnVtYmVyO1xyXG4gICAgbjogVmVjdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHA6IFZlY3RvciwgbjogVmVjdG9yLCB3OiBudW1iZXIsIHU6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLm4gPSBuO1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy51ID0gdTtcclxuICAgICAgICB0aGlzLnYgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4KHRoaXMucC5jbG9uZSgpLCB0aGlzLm4uY2xvbmUoKSwgdGhpcy53LCB0aGlzLnUsIHRoaXMudik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlX3AocDogVmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfdyh3OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldF9WZWN0b3I0RCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjREKHRoaXMucCwgdGhpcy53KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJveCBmcm9tIFwiLi9NYXRoL0JveDNEXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vTWF0aC9DYW1lcmFcIjtcclxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9NYXRoL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL01hdGgvVmVjdG9yXCI7XHJcbmltcG9ydCBSZW5kZXJUYXJnZXQgZnJvbSAnLi9NYXRoL1JlbmRlclRhcmdldCc7XHJcbmltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9NYXRoL0J1ZmZlcjJEXCI7XHJcbmltcG9ydCBSR0JBIGZyb20gXCIuL01hdGgvUkdCQVwiO1xyXG5pbXBvcnQgUmFzdGVyaXplciBmcm9tIFwiLi9NYXRoL1Jhc3Rlcml6ZXJcIjtcclxuaW1wb3J0IENhdm5hc0hlbHBlciBmcm9tIFwiLi9NYXRoL0NhbnZhc0hlbHBlclwiO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gXCIuL01hdGgvVGV4dHVyZTJEXCI7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9NYXRoL1ZlY3RvcjJEXCI7XHJcbmltcG9ydCBISGVscGVyIGZyb20gXCIuL01hdGgvSEhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFzdGVyaXplckFwcCB7XHJcblxyXG4gICAgY2FtZXJhSW5kZXhfdmlldyA9IDE7XHJcbiAgICBjYW1lcmFJbmRleF9jb250cm9sID0gMDtcclxuICAgIGNhbWVyYTogQ2FtZXJhO1xyXG4gICAgdGhhbmRsZSA9IDA7XHJcblxyXG4gICAgc2NyZWVuV2lkdGggPSA1MTI7XHJcbiAgICBzY3JlZW5IZWlnaHQgPSA1MTI7XHJcblxyXG4gICAgYm94OiBCb3g7XHJcblxyXG4gICAgc2tpcF9kaWZmID0gZmFsc2U7XHJcbiAgICBwcmVfdCA9IDA7XHJcbiAgICBzdW1fdCA9IDA7XHJcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XHJcbiAgICByZW5kZXJfdGFyZ2V0OiBSZW5kZXJUYXJnZXQ7XHJcbiAgICB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcbiAgICBwZWVrX3NjcmVlbl9wb3MgPSBuZXcgVmVjdG9yMkQoNDUsIDYwKTtcclxuICAgIGtleWJvcmRfZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBSYXN0ZXJpemVyLmNvbG9yX2J1ZmZlciA9IG5ldyBCdWZmZXIyRDxSR0JBPih0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XHJcbiAgICAgICAgUmFzdGVyaXplci56X2J1ZmZlciA9IG5ldyBCdWZmZXIyRDxudW1iZXI+KHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcl90YXJnZXQgPSBuZXcgUmVuZGVyVGFyZ2V0KHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8g5LiN6IO95bCN5ZCMMeWAi2NhbnZhc+WPluS4jeWQjOeahGNvbnRleHRcclxuICAgICAgICB0aGlzLmN0eCA9IENhdm5hc0hlbHBlci5zZXRfY2FudmFzKCdjYW52YXNfbGluZScsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIENhdm5hc0hlbHBlci5zZXRfY2FudmFzKCdjYW52YXMnLCB0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYShuZXcgVmVjdG9yKDAsIDUwLCAtMjAwKSwgbmV3IFZlY3RvcigwLCAwLCAwKSwgNjAsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0LCA1LCA1MDApO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlMkQoJ3RleHR1cmUvQ29sbGFnZSAyMDIxLTExLTEzIDE0XzE3XzU0LmpwZycpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlMkQoJ3RleHR1cmUvdGhpbl9pc19nb29kXzUxMng1MTIuanBnJyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3RpbWVvdXQnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl9yZXN1bWUnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3RvZ2dsZV9kcmF3aW5nX21vZGUnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci51c2Vfc29saWRfY29sb3IgPSAhUmFzdGVyaXplci51c2Vfc29saWRfY29sb3I7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl90b2dnbGVfbmRjX2NsYW1wX2VmZmVjdCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSYXN0ZXJpemVyLm5kY19jbGFtcF9lZmZlY3QgPSAhUmFzdGVyaXplci5uZGNfY2xhbXBfZWZmZWN0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgSEhlbHBlci4kKCdidG5fc2V0X3BlZWtfcG9zaXRpb24nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSBOdW1iZXIoSEhlbHBlci4kKCd0ZXh0X3NfeCcpLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gTnVtYmVyKEhIZWxwZXIuJCgndGV4dF9zX3knKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlZWtfc2NyZWVuX3Bvcy54ID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVla19zY3JlZW5fcG9zLnkgPSB5O1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci5zZXRfcGVla19zY3JlZW5fcG9zKHRoaXMucGVla19zY3JlZW5fcG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4LCB5KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3ByaW50X3BlZWtfcG9zaXRpb24nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci5wcmludF9wZWVrX3Bvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSB0aGlzLmtleV9kb3duLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXl1cCA9IHRoaXMua2V5X3VwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kcmF3U2NlbmUgPSB0aGlzLmRyYXdTY2VuZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIFJhc3Rlcml6ZXIuc2V0X3BlZWtfc2NyZWVuX3Bvcyh0aGlzLnBlZWtfc2NyZWVuX3Bvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zdW1fdCA9IDA7XHJcbiAgICAgICAgdGhpcy5wcmVfdCA9IDA7XHJcbiAgICAgICAgdGhpcy50aGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdTY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRoYW5kbGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5za2lwX2RpZmYgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3U2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGhhbmRsZSk7XHJcbiAgICAgICAgdGhpcy50aGFuZGxlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U2NlbmUoYWNjdW11bGF0ZWRUaW1lOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpZmYgPSBhY2N1bXVsYXRlZFRpbWUgLSB0aGlzLnByZV90O1xyXG4gICAgICAgIGlmICh0aGlzLnNraXBfZGlmZikgeyAvLyDlm6DngrphY2N1bXVsYXRlZFRpbWXlgZzkuI3kuIvkvoZcclxuICAgICAgICAgICAgdGhpcy5za2lwX2RpZmYgPSBmYWxzZTtcclxuICAgICAgICAgICAgZGlmZiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJlX3QgPSBhY2N1bXVsYXRlZFRpbWU7XHJcbiAgICAgICAgdGhpcy5zdW1fdCArPSBkaWZmO1xyXG5cclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRoaXMuc3VtX3QudG9TdHJpbmcoKSArIFwiLFwiICsgYWNjdW11bGF0ZWRUaW1lLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIOS9v+eUqOiAhei8uOWFpVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc19pbnB1dChkaWZmKTtcclxuXHJcbiAgICAgICAgLy8g5riF56m6XHJcbiAgICAgICAgaWYgKHRoaXMuY3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTgwLDMwLDE1LDAuMSlcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOeVq3BlZWsgcG9zXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDAsMSlcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wZWVrX3NjcmVlbl9wb3MueCwgdGhpcy5wZWVrX3NjcmVlbl9wb3MueSwgMSwgMTApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBlZWtfc2NyZWVuX3Bvcy54LCB0aGlzLnBlZWtfc2NyZWVuX3Bvcy55LCAxMCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFJhc3Rlcml6ZXIuY2xlYXIoUkdCQS5ibGFjaywgMSk7XHJcblxyXG4gICAgICAgIC8vIOenu+WLleeri+aWuemrlFxyXG4gICAgICAgIGxldCBvZmZzZXRNYXRyaXggPSBUcmFuc2Zvcm0ub2Zmc2V0KDAsIDAsIDApO1xyXG4gICAgICAgIGxldCBub3dEZWdyZWUgPSB0aGlzLnN1bV90IC8gMTAwMCAqIDE1ICUgMzYwO1xyXG5cclxuICAgICAgICBsZXQgcm90YXRlTWF0cml4ID0gVHJhbnNmb3JtLnJvdGF0ZUJ5WShub3dEZWdyZWUpO1xyXG4gICAgICAgIGxldCBjb21iaW5lTWF0cml4ID0gVHJhbnNmb3JtLnRyYW5zZm9ybVRyYW5zZm9ybShvZmZzZXRNYXRyaXgsIHJvdGF0ZU1hdHJpeCk7XHJcbiAgICAgICAgdGhpcy5ib3gucmFzdGVyaXplKHRoaXMuY2FtZXJhLCBjb21iaW5lTWF0cml4LCB0aGlzLnRleHR1cmUpO1xyXG4gICAgICAgIGlmICh0aGlzLmN0eClcclxuICAgICAgICAgICAgdGhpcy5ib3guZHJhd19saW5lKHRoaXMuY3R4KTtcclxuXHJcbiAgICAgICAgb2Zmc2V0TWF0cml4ID0gVHJhbnNmb3JtLm9mZnNldCgwLCAwLCAxNTApO1xyXG4gICAgICAgIHJvdGF0ZU1hdHJpeCA9IFRyYW5zZm9ybS5yb3RhdGVCeVkobm93RGVncmVlKTtcclxuICAgICAgICBjb21iaW5lTWF0cml4ID0gVHJhbnNmb3JtLnRyYW5zZm9ybVRyYW5zZm9ybShyb3RhdGVNYXRyaXgsIG9mZnNldE1hdHJpeCk7XHJcblxyXG4gICAgICAgIC8vIOeVq+eri+aWuemrlFxyXG4gICAgICAgIHRoaXMuYm94LnJhc3Rlcml6ZSh0aGlzLmNhbWVyYSwgY29tYmluZU1hdHJpeCwgdGhpcy50ZXh0dXJlKTtcclxuICAgICAgICBpZiAodGhpcy5jdHgpXHJcbiAgICAgICAgICAgIHRoaXMuYm94LmRyYXdfbGluZSh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIC8vIOmhr+ekuuWIsHJlbmRlciB0YXJnZXRcclxuICAgICAgICBSYXN0ZXJpemVyLnNob3codGhpcy5yZW5kZXJfdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy50aGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdTY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc19pbnB1dChkZWx0YV90aW1lOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmtleWJvcmRfZXZlbnQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IEtlcE1hcCA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3OiA4NyxcclxuICAgICAgICAgICAgcjogODIsXHJcblxyXG4gICAgICAgICAgICBlOiA2OSxcclxuICAgICAgICAgICAgZDogNjgsXHJcbiAgICAgICAgICAgIHM6IDgzLFxyXG4gICAgICAgICAgICBmOiA3MCxcclxuXHJcbiAgICAgICAgICAgIGFfdXA6IDM4LFxyXG4gICAgICAgICAgICBhX2Rvd246IDQwLFxyXG4gICAgICAgICAgICBhX2xlZnQ6IDM3LFxyXG4gICAgICAgICAgICBhX3JpZ2h0OiAzOVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBtb3ZlUyA9IDUwICogZGVsdGFfdGltZSAvIDEwMDA7XHJcbiAgICAgICAgbGV0IHJvdGF0ZVMgPSAwLjEgKiBkZWx0YV90aW1lIC8gMTAwMDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmtleWJvcmRfZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUV5ZShtb3ZlUywgdGhpcy5jYW1lcmEuel9heGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5yOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUV5ZSgtbW92ZVMsIHRoaXMuY2FtZXJhLnpfYXhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRXllKG1vdmVTLCB0aGlzLmNhbWVyYS55X2F4aXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRXllKC1tb3ZlUywgdGhpcy5jYW1lcmEueV9heGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5zOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUV5ZSgtbW92ZVMsIHRoaXMuY2FtZXJhLnhfYXhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuZjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVFeWUobW92ZVMsIHRoaXMuY2FtZXJhLnhfYXhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmFfdXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5hZGRQaXRjaChyb3RhdGVTKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5hX2Rvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5hZGRQaXRjaCgtcm90YXRlUyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmFfbGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmFkZFlhdygtcm90YXRlUyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuYV9yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLmFkZFlhdyhyb3RhdGVTKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlfZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIHRoaXMua2V5Ym9yZF9ldmVudCA9IGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGtleV91cChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIHRoaXMua2V5Ym9yZF9ldmVudCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBSYXN0ZXJpemVyQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9