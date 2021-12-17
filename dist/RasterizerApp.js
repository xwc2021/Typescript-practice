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
        // 反正在screen space光柵化三角形時也會用邊界裁切
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
        var count = 0;
        // to NDC
        for (var _i = 0, triangle_list_1 = triangle_list; _i < triangle_list_1.length; _i++) {
            var T = triangle_list_1[_i];
            var n0 = pcamera.toNDC(T.v0.p, T.v0.w);
            var n1 = pcamera.toNDC(T.v1.p, T.v1.w);
            var n2 = pcamera.toNDC(T.v2.p, T.v2.w);
            // NDC應該要落在
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
            // 為了和本來的code相容，暫時先傳出去
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
            // 除錯用
            var all = (max_x - min_x) * (max_y - min_y);
            var draw = 0;
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
                    // (2)在NDC進行內插，乘上w回到projection space
                    // https://gpnnotes.blogspot.com/2021/11/blog-post_27.html
                    var w = 1 / _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, 1 / T.v0.w, 1 / T.v1.w, 1 / T.v2.w);
                    // 要在NDC插值，所以除以w
                    var u_ndc = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, T.v0.u / T.v0.w, T.v1.u / T.v1.w, T.v2.u / T.v2.w);
                    var v_ndc = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].interpolation(γ, α, β, T.v0.v / T.v0.w, T.v1.v / T.v1.w, T.v2.v / T.v2.w);
                    // projection space 
                    var u = u_ndc * w;
                    var v = v_ndc * w;
                    var color = texture.get(new _Vector2D__WEBPACK_IMPORTED_MODULE_5__["default"](u, v)).color;
                    if (Rasterizer.use_solid_color)
                        Rasterizer.color_buffer.set(x, y, _RGBA__WEBPACK_IMPORTED_MODULE_4__["default"].yellow);
                    else
                        Rasterizer.color_buffer.set(x, y, color);
                    draw++;
                    if (Rasterizer.print_once && x == Rasterizer.peek_screen_pos.x && y == Rasterizer.peek_screen_pos.y) {
                        console.log('在三角形內', color);
                    }
                }
            }
            count++;
            // console.log(count, Math.floor(100 * draw / all));
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
/* harmony export */   "degree_to_Rad": () => (/* binding */ degree_to_Rad),
/* harmony export */   "epsilon": () => (/* binding */ epsilon),
/* harmony export */   "number_equal": () => (/* binding */ number_equal),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "get_hit_sort_list": () => (/* binding */ get_hit_sort_list),
/* harmony export */   "get_shadow_weight": () => (/* binding */ get_shadow_weight),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "ClipPlane": () => (/* binding */ ClipPlane),
/* harmony export */   "clip": () => (/* binding */ clip),
/* harmony export */   "MathHelper": () => (/* binding */ MathHelper),
/* harmony export */   "DrawHelper": () => (/* binding */ DrawHelper)
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
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    //修正除法錯誤
    MathHelper.accDiv = function (arg1, arg2) {
        //code from http://8st.blogspot.tw/2012/10/jsbug.html
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
    //修正加法錯誤
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
        // 其實當初直接用長度比算α、β不是更簡單嗎？
        var α = (0,_Tool__WEBPACK_IMPORTED_MODULE_4__.number_equal)(dir01.x, 0) ? vector_α.y / dir01.y : vector_α.x / dir01.x;
        var β = (0,_Tool__WEBPACK_IMPORTED_MODULE_4__.number_equal)(dir02.x, 0) ? vector_β.y / dir02.y : vector_β.x / dir02.x;
        if (isNaN(α)) {
            console.log(vector_α.x, dir01.x);
        }
        if (isNaN(β)) {
            console.log(vector_β.x, dir02.x);
        }
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
        this.last_t = 0;
        this.sum_t = 0;
        this.peek_screen_pos = new _Math_Vector2D__WEBPACK_IMPORTED_MODULE_10__["default"](45, 60);
        this.keybord_use = false;
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
        this.keybord_event = null;
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
        this.stop();
        this.sum_t = 0;
        var d = new Date();
        this.last_t = d.getTime();
        this.thandle = window.requestAnimationFrame(this.drawScene);
    };
    RasterizerApp.prototype.resume = function () {
        var d = new Date();
        this.last_t = d.getTime();
        this.thandle = window.requestAnimationFrame(this.drawScene);
    };
    RasterizerApp.prototype.stop = function () {
        window.cancelAnimationFrame(this.thandle);
        this.thandle = 0;
    };
    RasterizerApp.prototype.drawScene = function (timestamp) {
        var d = new Date();
        var t = d.getTime();
        var diff = t - this.last_t;
        this.last_t = t;
        this.sum_t = this.sum_t + diff;
        document.title = diff.toString();
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
        //畫立方體
        var offsetMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].offset(0, 0, 0);
        var nowDegree = this.sum_t / 1000 * 15 % 360;
        // let nowDegree = 0;
        var rotateMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].rotateByY(nowDegree);
        // let rotateMatrix = Transform.rotateByY(336.55499999999995);
        // let rotateMatrix = Transform.rotateByY(45);
        var combineMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].transformTransform(offsetMatrix, rotateMatrix);
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        if (this.ctx)
            this.box.draw_line(this.ctx);
        offsetMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].offset(0, 0, 150);
        rotateMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].rotateByY(nowDegree);
        combineMatrix = _Math_Transform__WEBPACK_IMPORTED_MODULE_2__["default"].transformTransform(rotateMatrix, offsetMatrix);
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        if (this.ctx)
            this.box.draw_line(this.ctx);
        // 顯示到render target
        _Math_Rasterizer__WEBPACK_IMPORTED_MODULE_7__["default"].show(this.render_target);
        this.thandle = window.requestAnimationFrame(this.drawScene);
    };
    RasterizerApp.prototype.process_input = function (delta_time) {
        if (!this.keybord_use)
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
        if (!this.keybord_event)
            return;
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
        this.keybord_use = true;
    };
    RasterizerApp.prototype.key_up = function (event) {
        this.keybord_use = false;
    };
    return RasterizerApp;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RasterizerApp);
new RasterizerApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLElBQUksaURBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU5QixLQUFLO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdkUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5RSxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksaURBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxpREFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxD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QUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkksSUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2SSxPQUFPLEVBQUUsR0FBRyxPQUFFLEdBQUcsT0FBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1QkFBZ0IsR0FBdkIsVUFBd0IsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3RELElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENB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QUFDOztBQUVELElBQUksYUFBYSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGVyYWlscy9EaWZmdXNlLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9Cb3gzRC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvQnVmZmVyMkQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL0NhbWVyYS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvQ2FudmFzSGVscGVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9ISGVscGVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9QbGFuZS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUkdCQS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUmFzdGVyaXplci50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUmF5LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9SYXk0RC50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvUmVuZGVyVGFyZ2V0LnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9TYW1wbGVyLnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9UZXh0dXJlMkQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1Rvb2wudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0Ly4vc3JjL01hdGgvVmVjdG9yMkQudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC8uL3NyYy9NYXRoL1ZlY3RvcjRELnRzIiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvTWF0aC9WZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJnbF90ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViZ2xfdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmdsX3Rlc3QvLi9zcmMvUmFzdGVyaXplckFwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmVjdG9yIGZyb20gXCIuLi9NYXRoL1ZlY3RvclwiO1xyXG5pbXBvcnQgSGl0SW5mbyBmcm9tIFwiLi4vTWF0aC9IaXRJbmZvXCI7XHJcbmltcG9ydCB7IGNsYW1wLCBnZXRfc2hhZG93X3dlaWdodCB9IGZyb20gXCIuLi9NYXRoL1Rvb2xcIjtcclxuaW1wb3J0IFNoYWRlciBmcm9tIFwiLi9TaGFkZXJcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi4vT2JqZWN0L1NjZW5lTm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZnVzZSBpbXBsZW1lbnRzIFNoYWRlciB7XHJcbiAgICBzdGF0aWMgeWVsbG93ID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigxLCAxLCAwKSk7XHJcbiAgICBzdGF0aWMgcmVkID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigxLCAwLCAwKSk7XHJcbiAgICBzdGF0aWMgZ3JlZW4gPSBuZXcgRGlmZnVzZShuZXcgVmVjdG9yKDAsIDEsIDApKTtcclxuICAgIHN0YXRpYyBibHVlID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigwLCAwLCAxKSk7XHJcbiAgICBzdGF0aWMgZ3JheSA9IG5ldyBEaWZmdXNlKG5ldyBWZWN0b3IoMC41LCAwLjUsIDAuNSkpO1xyXG4gICAgc3RhdGljIHdoaXRlID0gbmV3IERpZmZ1c2UobmV3IFZlY3RvcigxLCAxLCAxKSk7XHJcblxyXG4gICAgY29sb3I6IFZlY3RvcjtcclxuICAgIGNvbnN0cnVjdG9yKGNvbG9yOiBWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgc2hhZGluZyhoaXRfaW5mbzogSGl0SW5mbywgZGlyZWN0aW9uX2xpZ2h0X2RpcjogVmVjdG9yLCBvYmpfbGlzdDogU2NlbmVOb2RlW10sIGRlcHRoOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbiA9IGhpdF9pbmZvLm5vcm1hbDtcclxuICAgICAgICBsZXQgc3RyZW5ndGggPSBjbGFtcCgtVmVjdG9yLmRvdChkaXJlY3Rpb25fbGlnaHRfZGlyLCBuKSwgMCwgMSk7XHJcblxyXG4gICAgICAgIGxldCBzaGFkb3dfd2VpZ2h0ID0gZ2V0X3NoYWRvd193ZWlnaHQoaGl0X2luZm8sIGRpcmVjdGlvbl9saWdodF9kaXIsIG9ial9saXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvci5tdWx0aXBseShzdHJlbmd0aCkubXVsdGlwbHkoc2hhZG93X3dlaWdodCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVmVydGV4IGZyb20gJy4vVmVydGV4J1xyXG5pbXBvcnQgVHJpYW5nbGUgZnJvbSAnLi9UcmlhbmdsZSc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InO1xyXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcclxuaW1wb3J0IHsgY2xpcCB9IGZyb20gJy4vVG9vbCc7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEnO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gJy4vVGV4dHVyZTJEJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveCB7XHJcbiAgICB0cmlhbmdsZXM6IFRyaWFuZ2xlW107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyDlu7rnq4vmraPmlrnpq5TpoILpu57os4fmlplcclxuICAgICAgICB0aGlzLnRyaWFuZ2xlcyA9IFtdO1xyXG4gICAgICAgIC8v6aCG5pmC6YedXHJcbiAgICAgICAgbGV0IG4gPSBuZXcgVmVjdG9yKDAsIDAsIC0xKTtcclxuICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgVHJpYW5nbGUoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4KG5ldyBWZWN0b3IoLTEwLCAtMTAsIC0xMCksIG4sIDEsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgVmVjdG9yKDEwLCAxMCwgLTEwKSwgbiwgMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVydGV4KG5ldyBWZWN0b3IoMTAsIC0xMCwgLTEwKSwgbiwgMSwgMSwgMClcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgdGhpcy50cmlhbmdsZXMucHVzaChcclxuICAgICAgICAgICAgbmV3IFRyaWFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlcnRleChuZXcgVmVjdG9yKC0xMCwgLTEwLCAtMTApLCBuLCAxLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IFZlY3RvcigtMTAsIDEwLCAtMTApLCBuLCAxLCAwLCAxKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZXJ0ZXgobmV3IFZlY3RvcigxMCwgMTAsIC0xMCksIG4sIDEsIDEsIDEpXHJcbiAgICAgICAgICAgICkpO1xyXG5cclxuICAgICAgICBsZXQgbSA9IFtUcmFuc2Zvcm0ucm90YXRlQnlZKDkwKSwgVHJhbnNmb3JtLnJvdGF0ZUJ5WSgxODApLCBUcmFuc2Zvcm0ucm90YXRlQnlZKDI3MCksIFRyYW5zZm9ybS5yb3RhdGVCeVgoOTApLCBUcmFuc2Zvcm0ucm90YXRlQnlYKC05MCldXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGVNYXRyaXggPSBtW2ldO1xyXG4gICAgICAgICAgICBsZXQgbjIgPSBUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQocm90YXRlTWF0cml4LCBuKTtcclxuICAgICAgICAgICAgdGhpcy50cmlhbmdsZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBUcmlhbmdsZShcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoLSAxMCwgLTEwLCAtMTApKSwgbjIsIDEsIDAsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigxMCwgMTAsIC0xMCkpLCBuMiwgMSwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgVmVydGV4LmJ1aWxkX3ZlcnRleChUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQocm90YXRlTWF0cml4LCBuZXcgVmVjdG9yKDEwLCAtMTAsIC0xMCkpLCBuMiwgMSwgMSwgMClcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IFRyaWFuZ2xlKFxyXG4gICAgICAgICAgICAgICAgICAgIFZlcnRleC5idWlsZF92ZXJ0ZXgoVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHJvdGF0ZU1hdHJpeCwgbmV3IFZlY3RvcigtMTAsIC0xMCwgLTEwKSksIG4yLCAxLCAwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoLTEwLCAxMCwgLTEwKSksIG4yLCAxLCAwLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICBWZXJ0ZXguYnVpbGRfdmVydGV4KFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludChyb3RhdGVNYXRyaXgsIG5ldyBWZWN0b3IoMTAsIDEwLCAtMTApKSwgbjIsIDEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmFzdGVyaXplKGNhbWVyYTogQ2FtZXJhLCB3b3JsZFRyYW5zZm9ybTogVHJhbnNmb3JtLCB0ZXh0dXJlOiBUZXh0dXJlMkQpIHtcclxuXHJcbiAgICAgICAgLy8g6JmV55CG5q2j5pa56auU55qE6K6K5o+bXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRyaWFuZ2xlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWFuZ2xlc1tpXS5yYXN0ZXJpemUoY2FtZXJhLCB3b3JsZFRyYW5zZm9ybSwgdGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdfbGluZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIC8vIOeVq+S4ieinkuW9olxyXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XHJcblxyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwwLDAsMSknO1xyXG5cclxuXHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHJpYW5nbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpYW5nbGVzW2ldLmRyYXcoY3R4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4vVmVjdG9yMkRcIjtcclxuaW1wb3J0IHsgY2xhbXAgfSBmcm9tIFwiLi9Ub29sXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWZmZXIyRDxUPiB7XHJcbiAgICB3OiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcbiAgICBidWZmZXI6IEFycmF5PEFycmF5PFQ+PjtcclxuICAgIGNvbnN0cnVjdG9yKHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEFycmF5PEFycmF5PFQ+Pih0aGlzLmgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHcsIGgpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oOyArK3kpIHtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJbeV0gPSBuZXcgQXJyYXk8VD4odGhpcy53KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyLCB2YWx1ZTogVCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzX2xlZ2FsX2luZGV4KHgsIHkpKVxyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt5XVt4XSA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0JywgdGhpcy53LCB0aGlzLmgsIHgsIHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gUkdCQS5kZWJ1ZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzX2xlZ2FsX2luZGV4KHgsIHkpKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWZmZXJbeV1beF07XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQnLCB0aGlzLncsIHRoaXMuaCwgeCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiBSR0JBLmRlYnVnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhcih2YWx1ZTogVCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnc7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJbeV1beF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDotoXpgY7pgornlYzlsLHkvb/nlKjpgornlYzlgLxcclxuICAgIGdldF9jbGFtcF9tb2RlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG54ID0gY2xhbXAoeCwgMCwgdGhpcy53IC0gMSk7XHJcbiAgICAgICAgbGV0IG55ID0gY2xhbXAoeSwgMCwgdGhpcy5oIC0gMSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlcltueV1bbnhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlzX2xlZ2FsX2luZGV4KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHggPj0gMCAmJiB4IDwgdGhpcy53ICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5oKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc19vdmVyX25lZ2F0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyLCBlbmRYOiBudW1iZXIsIGVuZFk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh5ID4gZW5kWSB8fCB4IDwgZW5kWClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNfb3Zlcl9wb3NpdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgZW5kWDogbnVtYmVyLCBlbmRZOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoeSA+IGVuZFkgfHwgeCA+IGVuZFgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IFJheSBmcm9tIFwiLi9SYXlcIjtcclxuaW1wb3J0IHsgZGVncmVlX3RvX1JhZCwgZ2V0X2hpdF9zb3J0X2xpc3QgfSBmcm9tIFwiLi9Ub29sXCJcclxuaW1wb3J0IFJlbmRlclRhcmdldCBmcm9tIFwiLi9SZW5kZXJUYXJnZXRcIjtcclxuaW1wb3J0IFNjZW5lTm9kZSBmcm9tIFwiLi4vT2JqZWN0L1NjZW5lTm9kZVwiO1xyXG5pbXBvcnQgRGlmZnVzZSBmcm9tIFwiLi4vTWF0ZXJhaWxzL0RpZmZ1c2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xyXG4gICAgZXllOiBWZWN0b3I7XHJcblxyXG4gICAgeF9heGlzOiBWZWN0b3I7XHJcbiAgICB5X2F4aXM6IFZlY3RvcjtcclxuICAgIHpfYXhpczogVmVjdG9yO1xyXG5cclxuICAgIHJhdGlvOiBudW1iZXI7XHJcblxyXG4gICAgc2NyZWVuVzogbnVtYmVyO1xyXG4gICAgc2NyZWVuSDogbnVtYmVyO1xyXG5cclxuICAgIHNjcmVlbkNlbnRlclg6IG51bWJlcjtcclxuICAgIHNjcmVlbkNlbnRlclk6IG51bWJlcjtcclxuICAgIGhhbGZXOiBudW1iZXI7XHJcbiAgICBoYWxmSDogbnVtYmVyO1xyXG5cclxuICAgIC8vIOimlumMkOeahCDov5HlubPpnaLlkozpgaDlubPpnaJcclxuICAgIC8vIGHjgIFi5ZKM5oqV5b2x55+p6Zmj5pyJ6ZecXHJcbiAgICBOOiBudW1iZXI7XHJcbiAgICBGOiBudW1iZXI7XHJcbiAgICBhOiBudW1iZXI7XHJcbiAgICBiOiBudW1iZXI7XHJcblxyXG4gICAgZm92X2RlZ3JlZTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoZXllOiBWZWN0b3IsIGxvb2tfYXQ6IFZlY3RvciwgZm92X2RlZ3JlZTogbnVtYmVyLCBzY3JlZW5XOiBudW1iZXIsIHNjcmVlbkg6IG51bWJlciwgTjogbnVtYmVyLCBGOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yYXRpbyA9IHNjcmVlblcgLyBzY3JlZW5IO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuVyA9IHNjcmVlblc7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5IID0gc2NyZWVuSDtcclxuICAgICAgICB0aGlzLnNjcmVlbkNlbnRlclggPSB0aGlzLnNjcmVlblcgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5DZW50ZXJZID0gdGhpcy5zY3JlZW5IICogMC41O1xyXG4gICAgICAgIHRoaXMuaGFsZlcgPSB0aGlzLnNjcmVlblcgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5oYWxmSCA9IHRoaXMuc2NyZWVuSCAqIDAuNTtcclxuXHJcbiAgICAgICAgLy8gY2FtZXJhIDPou7hcclxuICAgICAgICB0aGlzLnpfYXhpcyA9IFZlY3Rvci5taW51cyhsb29rX2F0LCBleWUpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICAvLyDlt6bmiYtcclxuICAgICAgICBsZXQgaGVscF92ID0gVmVjdG9yLnVwO1xyXG4gICAgICAgIHRoaXMueF9heGlzID0gVmVjdG9yLmNyb3NzKGhlbHBfdiwgdGhpcy56X2F4aXMpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMueV9heGlzID0gVmVjdG9yLmNyb3NzKHRoaXMuel9heGlzLCB0aGlzLnhfYXhpcyk7XHJcblxyXG4gICAgICAgIC8vIGNhbWVyYSDljp/pu55cclxuICAgICAgICB0aGlzLmV5ZSA9IGV5ZTtcclxuXHJcbiAgICAgICAgLy8gY2FtZXJhIGZvdlxyXG4gICAgICAgIHRoaXMuZm92X2RlZ3JlZSA9IGZvdl9kZWdyZWU7XHJcblxyXG4gICAgICAgIC8vIOimlumMkOeahCDov5HlubPpnaLlkozpgaDlubPpnaJcclxuICAgICAgICB0aGlzLk4gPSBOO1xyXG4gICAgICAgIHRoaXMuRiA9IEY7XHJcblxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI3Lmh0bWxcclxuICAgICAgICAvLyDmipXlvbHnn6npmaPlsI1655qE5L+u5q2j77yM6YCZ6KOh5L2/55So5bem5omLXHJcbiAgICAgICAgdGhpcy5hID0gRiAvIChGIC0gTik7XHJcbiAgICAgICAgdGhpcy5iID0gLU4gKiBGIC8gKEYgLSBOKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hLCB0aGlzLmIpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVFeWUoczogbnVtYmVyLCBBOiBWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmV5ZSA9IFZlY3Rvci5hZGQodGhpcy5leWUsIEEubXVsdGlwbHkocykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBpdGNoKGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzog5LmY5LiKbG9jYWwgbWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgYWRkWWF3KGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzog5LmY5LiKbG9jYWwgbWF0cml4XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlX3JheV9kaXIoeF93ZWlnaHQ6IG51bWJlciwgeV93ZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcikge1xyXG4gICAgICAgIGxldCBoYWxmX2Zvdl9yYWQgPSBkZWdyZWVfdG9fUmFkKDAuNSAqIHRoaXMuZm92X2RlZ3JlZSk7XHJcbiAgICAgICAgbGV0IHRhbl9oID0gTWF0aC50YW4oaGFsZl9mb3ZfcmFkKTtcclxuICAgICAgICBsZXQgdGFuX3cgPSB0YW5faCAqIHJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgZGlyID0gdGhpcy56X2F4aXNcclxuICAgICAgICAgICAgLmFkZCh0aGlzLnhfYXhpcy5tdWx0aXBseSh4X3dlaWdodCAqIHRhbl93KSlcclxuICAgICAgICAgICAgLmFkZCh0aGlzLnlfYXhpcy5tdWx0aXBseSh5X3dlaWdodCAqIHRhbl9oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9DYW1lcmFTcGFjZShBOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgZGlmZiA9IEEubWludXModGhpcy5leWUpO1xyXG4gICAgICAgIGxldCBwb2ludF9pbl9jYW1lcmFfc3BhY2UgPSBuZXcgVmVjdG9yKFZlY3Rvci5kb3QoZGlmZiwgdGhpcy54X2F4aXMpLCBWZWN0b3IuZG90KGRpZmYsIHRoaXMueV9heGlzKSwgVmVjdG9yLmRvdChkaWZmLCB0aGlzLnpfYXhpcykpO1xyXG4gICAgICAgIHJldHVybiBwb2ludF9pbl9jYW1lcmFfc3BhY2U7XHJcbiAgICB9XHJcblxyXG4gICAgdG9Qcm9qZWN0aW9uU3BhY2UoQTogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGZvdl9yYWQgPSBkZWdyZWVfdG9fUmFkKHRoaXMuZm92X2RlZ3JlZSk7XHJcbiAgICAgICAgbGV0IGhhbGZfZm92ID0gMC41ICogZm92X3JhZDtcclxuICAgICAgICBsZXQgeV9zY2FsZSA9IDEgLyBNYXRoLnRhbihoYWxmX2Zvdik7XHJcbiAgICAgICAgbGV0IHhfc2NhbGUgPSAxIC8gKHRoaXMucmF0aW8gKiBNYXRoLnRhbihoYWxmX2ZvdikpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihBLnggKiB4X3NjYWxlLCBBLnkgKiB5X3NjYWxlLCBBLnogKiB0aGlzLmEgKyB0aGlzLmIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvTkRDKEE6IFZlY3RvciwgdzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHMgPSAxIC8gdztcclxuICAgICAgICByZXR1cm4gQS5tdWx0aXBseShzKTtcclxuICAgIH1cclxuXHJcbiAgICB0b1NjcmVlblNwYWNlKE5EQ19BOiBWZWN0b3IpIHtcclxuICAgICAgICAvLyDnlKjluqfmqJnorormj5vkvobnnIvlvoXlvp5OREPliLBTY3JlZW4gU3BhY2VcclxuICAgICAgICAvLyBOREMgeOi7uOWcqHNjcmVlbiBzcGFjZSDngroody8yLDApXHJcbiAgICAgICAgLy8gTkRDIHnou7jlnKhzY3JlZW4gc3BhY2Ug54K6KC1oLzIsMClcclxuICAgICAgICBsZXQgeCA9IHRoaXMuaGFsZlcgKiBORENfQS54ICsgdGhpcy5zY3JlZW5DZW50ZXJYO1xyXG4gICAgICAgIGxldCB5ID0gLXRoaXMuaGFsZkggKiBORENfQS55ICsgdGhpcy5zY3JlZW5DZW50ZXJZO1xyXG5cclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoeCwgeSwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g566X5ZyWXHJcbiAgICByZW5kZXIocmVuZGVyX3RhcmdldDogUmVuZGVyVGFyZ2V0LCBvYmpfbGlzdDogU2NlbmVOb2RlW10pIHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uX2xpZ2h0X2RpciA9IG5ldyBWZWN0b3IoMSwgLTEsIDApLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgICBsZXQgaGFsZl9waXhlbF9vZmZzZXQgPSAwLjUgLyByZW5kZXJfdGFyZ2V0Lmg7XHJcbiAgICAgICAgbGV0IG11bHRpc2FtcGxlX2RpZmYgPSBbXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICB7IHg6IGhhbGZfcGl4ZWxfb2Zmc2V0LCB5OiBoYWxmX3BpeGVsX29mZnNldCB9LFxyXG4gICAgICAgICAgICB7IHg6IC1oYWxmX3BpeGVsX29mZnNldCwgeTogaGFsZl9waXhlbF9vZmZzZXQgfSxcclxuICAgICAgICAgICAgeyB4OiAtaGFsZl9waXhlbF9vZmZzZXQsIHk6IC1oYWxmX3BpeGVsX29mZnNldCB9LFxyXG4gICAgICAgICAgICB7IHg6IGhhbGZfcGl4ZWxfb2Zmc2V0LCB5OiAtaGFsZl9waXhlbF9vZmZzZXQgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZW5kZXJfdGFyZ2V0LnJlbmRlcl9waXhlbCgoeF93ZWlnaHQ6IG51bWJlciwgeV93ZWlnaHQ6IG51bWJlciwgcmF0aW86IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmF5X2RpciA9IHRoaXMuY3JlYXRlX3JheV9kaXIoeF93ZWlnaHQsIHlfd2VpZ2h0LCByYXRpbyk7XHJcblxyXG4gICAgICAgICAgICAvLyDnlKLnlJ/lpJrmop1yYXlcclxuICAgICAgICAgICAgbGV0IHJheXMgPSBtdWx0aXNhbXBsZV9kaWZmLm1hcChkaWZmID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOWwjXJheV9kcmnkvZzlgY/np7tcclxuICAgICAgICAgICAgICAgIGxldCBkaXIgPSByYXlfZGlyLmFkZCh0aGlzLnhfYXhpcy5tdWx0aXBseShkaWZmLngpKS5hZGQodGhpcy55X2F4aXMubXVsdGlwbHkoZGlmZi55KSlcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDpm5bnhLblkoznkIPjgIHlubPpnaLnmoRoaXToqIjnrpfkuI3pnIDopoFkaXLkvZxub3JtYWxpemXvvIzkvYbngrrkuobmlrnkvr/lj43lsITnmoToqIjnrpfpgoTmmK/kvZxub3JtYWxpemVcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmF5KHRoaXMuZXllLCBkaXIubm9ybWFsaXplKCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g5q+P5YCLcmF56YO9566XY29sb3JcclxuICAgICAgICAgICAgbGV0IGNvbG9ycyA9IHJheXMubWFwKHJheSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGl0X3NvcnRfbGlzdCA9IGdldF9oaXRfc29ydF9saXN0KG9ial9saXN0LCByYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOacieWwhOS4reWXjlxyXG4gICAgICAgICAgICAgICAgbGV0IGlzX2hpdCA9IGhpdF9zb3J0X2xpc3QubGVuZ3RoICE9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNfaGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpdF9pbmZvID0gaGl0X3NvcnRfbGlzdFswXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpdF9pbmZvLnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoaXRfaW5mby5zLnNoYWRpbmcoaGl0X2luZm8sIGRpcmVjdGlvbl9saWdodF9kaXIsIG9ial9saXN0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIC8vIOS4jeWPr+iDveWIsOmAmeijoVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRGlmZnVzZS5yZWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEaWZmdXNlLmdyYXkuY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g5Y+W5bmz5Z2H5bCx5pyJQW50aWFsaWFzaW5n5pWI5p6cXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IG11bHRpc2FtcGxlX2RpZmYubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgZmluYWxfY29sb3IgPSBjb2xvcnMucmVkdWNlKChhY2N1bXVsYXRvcjogVmVjdG9yLCBjdXJyZW50OiBWZWN0b3IpID0+IGFjY3VtdWxhdG9yLmFkZChjdXJyZW50KSwgVmVjdG9yLnplcm8pLm11bHRpcGx5KDEgLyBjb3VudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmaW5hbF9jb2xvcjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F2bmFzSGVscGVyIHtcclxuICAgIHN0YXRpYyBzZXRfY2FudmFzKGlkOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICByZXR1cm4gQ2F2bmFzSGVscGVyLnNldF9jYW52YXNfZWxlbWVudChjYW52YXMsIHcsIGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRfY2FudmFzX2VsZW1lbnQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRfY29udGV4dChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICByZXR1cm4gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldF9jb250ZXh0X2J5X2NhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0KGM6IFJHQkEpIHtcclxuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIE1hdGguZmxvb3IoMjU1ICogKGMucikpICsgJywnICsgTWF0aC5mbG9vcigyNTUgKiAoYy5nKSkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NSAqIChjLmIpKSArICcsMSknO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSEhlbHBlciB7XHJcbiAgICBzdGF0aWMgJChpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InO1xyXG5pbXBvcnQgUmF5IGZyb20gJy4vUmF5JztcclxuaW1wb3J0IHsgbnVtYmVyX2VxdWFsIH0gZnJvbSAnLi9Ub29sJztcclxuaW1wb3J0IEhpdEluZm8gZnJvbSAnLi9IaXRJbmZvJztcclxuaW1wb3J0IEhpdGFibGUgZnJvbSAnLi9IaXRhYmxlJztcclxuaW1wb3J0IFNoYWRlciBmcm9tICcuLi9NYXRlcmFpbHMvU2hhZGVyJztcclxuXHJcbi8vIOW5s+mdolxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSBpbXBsZW1lbnRzIEhpdGFibGUge1xyXG5cclxuICAgIEM6IFZlY3RvcjtcclxuICAgIE46IFZlY3RvcjtcclxuICAgIGNvbnN0cnVjdG9yKHBvaW50OiBWZWN0b3IsIG5vcm1hbDogVmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5DID0gcG9pbnQ7XHJcbiAgICAgICAgdGhpcy5OID0gbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4rOippnRlc3BfcOWSjOaWueWQkemHj+aYr+S4jeaYr+WcqOWQjOS4gOmCilxyXG4gICAgaXNfcG9zaXRpdmUodGVzdF9wOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgZGlmZiA9IFZlY3Rvci5taW51cyh0ZXN0X3AsIHRoaXMuQyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gVmVjdG9yLmRvdChkaWZmLCB0aGlzLk4pO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KHJheTogUmF5LCBzOiBTaGFkZXIpOiBIaXRJbmZvIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFBsYW5lLmhpdChyYXksIHRoaXMpO1xyXG4gICAgICAgIGlmIChyZXN1bHQpXHJcbiAgICAgICAgICAgIHJlc3VsdC5zID0gcztcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBoaXQocmF5OiBSYXksIHBsYW5lOiBQbGFuZSk6IEhpdEluZm8gfCBudWxsIHtcclxuICAgICAgICAvLyByYXkgaGl0IHBsYW5lIFxyXG4gICAgICAgIGxldCBmcm9tID0gcmF5LmZyb207XHJcbiAgICAgICAgbGV0IGRpciA9IHJheS5kaXI7XHJcblxyXG4gICAgICAgIC8vIChGLUMp44CCTiArIHQgKETjgIJOKSA9IDBcclxuICAgICAgICAvLyB0ICA9IChDLUYp44CCTiAvIChE44CCTilcclxuICAgICAgICAvLyB0ICA9IChBIC8gKEIpXHJcbiAgICAgICAgbGV0IEIgPSBWZWN0b3IuZG90KGRpciwgcGxhbmUuTik7XHJcbiAgICAgICAgbGV0IEEgPSBWZWN0b3IuZG90KFZlY3Rvci5taW51cyhwbGFuZS5DLCBmcm9tKSwgcGxhbmUuTik7XHJcblxyXG4gICAgICAgIC8vIGF2b2lkIGRpdmlkZSBieSAwXHJcbiAgICAgICAgaWYgKG51bWJlcl9lcXVhbChCLCAwKSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGxldCB0ID0gQSAvIEI7XHJcbiAgICAgICAgbGV0IHBvc2l0aXZlX3QgPSB0ID4gMC4wO1xyXG4gICAgICAgIGxldCBoaXRfcG9zID0gZnJvbS5hZGQoZGlyLm11bHRpcGx5KHQpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3NpdGl2ZV90LFxyXG4gICAgICAgICAgICBoaXRfcG9zLFxyXG4gICAgICAgICAgICBpOiBkaXIsXHJcbiAgICAgICAgICAgIHQsXHJcbiAgICAgICAgICAgIG5vcm1hbDogcGxhbmUuTlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCB7IGxlcnAgfSBmcm9tIFwiLi9Ub29sXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSR0JBIHtcclxuICAgIHN0YXRpYyBkZWJ1ZyA9IG5ldyBSR0JBKDEsIDAsIDEsIDEpO1xyXG4gICAgc3RhdGljIGdvbGRlbiA9IG5ldyBSR0JBKDEsIDIxNSAvIDI1NSwgMCwgMSk7XHJcbiAgICBzdGF0aWMgeWVsbG93ID0gbmV3IFJHQkEoMSwgMSwgMCwgMSk7XHJcbiAgICBzdGF0aWMgcGluayA9IG5ldyBSR0JBKDEsIDE5MiAvIDI1NSwgMjAzIC8gMjU1LCAxKTtcclxuICAgIHN0YXRpYyBibGFjayA9IG5ldyBSR0JBKDAsIDAsIDAsIDEpO1xyXG4gICAgc3RhdGljIHJlZCA9IG5ldyBSR0JBKDEsIDAsIDAsIDEpO1xyXG5cclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgICAgdGhpcy5nID0gZztcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoQTogUkdCQSwgQjogUkdCQSwgazogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JBKFxyXG4gICAgICAgICAgICBsZXJwKEEuciwgQi5yLCBrKSxcclxuICAgICAgICAgICAgbGVycChBLmcsIEIuZywgayksXHJcbiAgICAgICAgICAgIGxlcnAoQS5iLCBCLmIsIGspLFxyXG4gICAgICAgICAgICAxKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoQTogUkdCQSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUkdCQSh0aGlzLnIgKyBBLnIsIHRoaXMuZyArIEEuZywgdGhpcy5iICsgQS5iLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbXVsdGlwbHkoczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSR0JBKHRoaXMuciAqIHMsIHRoaXMuZyAqIHMsIHRoaXMuYiAqIHMsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIiggXCIgKyB0aGlzLnIgKyBcIiAsIFwiICsgdGhpcy5nICsgXCIgLCBcIiArIHRoaXMuYiArIFwiIClcIjtcclxuICAgIH1cclxufSIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xyXG5pbXBvcnQgVHJpYW5nbGUgZnJvbSAnLi9UcmlhbmdsZSc7XHJcbmltcG9ydCB7IENsaXBQbGFuZSwgY2xpcCB9IGZyb20gJy4vVG9vbCc7XHJcbmltcG9ydCBWZXJ0ZXggZnJvbSAnLi9WZXJ0ZXgnO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhJztcclxuaW1wb3J0IFZlY3RvciBmcm9tICcuL1ZlY3Rvcic7XHJcbmltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBSZW5kZXJUYXJnZXQgZnJvbSAnLi9SZW5kZXJUYXJnZXQnO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gJy4vVGV4dHVyZTJEJztcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gJy4vVmVjdG9yMkQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFzdGVyaXplciB7XHJcbiAgICBzdGF0aWMgY29sb3JfYnVmZmVyOiBCdWZmZXIyRDxSR0JBPjtcclxuICAgIHN0YXRpYyB6X2J1ZmZlcjogQnVmZmVyMkQ8bnVtYmVyPjtcclxuXHJcbiAgICBzdGF0aWMgY2xlYXIoY29sb3I6IFJHQkEsIHo6IG51bWJlcikge1xyXG4gICAgICAgIFJhc3Rlcml6ZXIuY29sb3JfYnVmZmVyLmNsZWFyKGNvbG9yKTtcclxuICAgICAgICBSYXN0ZXJpemVyLnpfYnVmZmVyLmNsZWFyKHopO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93KHJlbmRlcl90YXJnZXQ6IFJlbmRlclRhcmdldCkge1xyXG4gICAgICAgIHJlbmRlcl90YXJnZXQuc2V0X3BpeGVsKCh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUmFzdGVyaXplci5jb2xvcl9idWZmZXIuZ2V0KHgsIHkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbmRlcl90YXJnZXQuc2hvd19idWZmZXIoJ2NhbnZhcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjbGlwX2hlbHBlcihpbl9saXN0OiBUcmlhbmdsZVtdLFxyXG4gICAgICAgIHYwX291dDogKHRyaWFuZ2xlOiBUcmlhbmdsZSkgPT4gYm9vbGVhbixcclxuICAgICAgICB2MV9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICAgICAgdjJfb3V0OiAodHJpYW5nbGU6IFRyaWFuZ2xlKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHBsYW5lOiBDbGlwUGxhbmUpIHtcclxuXHJcbiAgICAgICAgbGV0IG91dF9saXN0OiBUcmlhbmdsZVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgVCBvZiBpbl9saXN0KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjbGlwKFQsIHYwX291dCwgdjFfb3V0LCB2Ml9vdXQsIHBsYW5lKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdCBvZiByZXN1bHQpXHJcbiAgICAgICAgICAgICAgICBvdXRfbGlzdC5wdXNoKHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0X2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsaXBfaW5fUHJvamVjdGlvbl9TcGFjZSh2MDogVmVydGV4LCB2MTogVmVydGV4LCB2MjogVmVydGV4LCBwY2FtZXJhOiBDYW1lcmEpIHtcclxuICAgICAgICAvLyBUb2RvOuWft+ihjDblgIvlubPpnaLnmoTkuInop5LlvaLoo4HliIdcclxuICAgICAgICAvLyDlkox56Lu45aS+NDXluqbnmoQy5YCL5bmz6Z2i44CB5ZKMeOi7uOWkvjQ15bqm55qEMuWAi+W5s+mdouOAgemChOaciU5j5ZKMRmNcclxuICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDIxLzExL2Jsb2ctcG9zdF8yOC5odG1sXHJcblxyXG4gICAgICAgIGxldCBpbl9saXN0ID0gW25ldyBUcmlhbmdsZSh2MCwgdjEsIHYyKV07XHJcblxyXG4gICAgICAgIC8vIEZhclxyXG4gICAgICAgIGxldCBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIoaW5fbGlzdCxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYwLncgPCBULnYwLnAuejsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYxLncgPCBULnYxLnAuejsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiBULnYyLncgPCBULnYyLnAuejsgfSxcclxuICAgICAgICAgICAgQ2xpcFBsYW5lLkZhcik7XHJcblxyXG4gICAgICAgIC8vIE5lYXJcclxuICAgICAgICBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIob3V0X2xpc3QsXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gMCA+IFQudjAucC56OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIDAgPiBULnYxLnAuejsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAwID4gVC52Mi5wLno7IH0sXHJcbiAgICAgICAgICAgIENsaXBQbGFuZS5OZWFyKTtcclxuXHJcbiAgICAgICAgLy8g5LiN5bCNUmlnaHQg44CBTGVmdOOAgVRvcOOAgUJvdHRvbeS9nOijgeWIh+S6hlxyXG4gICAgICAgIC8vIOWPjeato+WcqHNjcmVlbiBzcGFjZeWFieafteWMluS4ieinkuW9ouaZguS5n+acg+eUqOmCiueVjOijgeWIh1xyXG4gICAgICAgIHJldHVybiBvdXRfbGlzdDtcclxuXHJcbiAgICAgICAgLy8gUmlnaHRcclxuICAgICAgICBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIob3V0X2xpc3QsXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gVC52MC53IDwgVC52MC5wLng7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gVC52MS53IDwgVC52MS5wLng7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gVC52Mi53IDwgVC52Mi5wLng7IH0sXHJcbiAgICAgICAgICAgIENsaXBQbGFuZS5SaWdodCk7XHJcblxyXG4gICAgICAgIC8vIExlZnRcclxuICAgICAgICBvdXRfbGlzdCA9IFJhc3Rlcml6ZXIuY2xpcF9oZWxwZXIob3V0X2xpc3QsXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gLVQudjAudyA+IFQudjAucC54OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIC1ULnYxLncgPiBULnYxLnAueDsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAtVC52Mi53ID4gVC52Mi5wLng7IH0sXHJcbiAgICAgICAgICAgIENsaXBQbGFuZS5MZWZ0KTtcclxuXHJcbiAgICAgICAgLy8gVG9wXHJcbiAgICAgICAgb3V0X2xpc3QgPSBSYXN0ZXJpemVyLmNsaXBfaGVscGVyKG91dF9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjAudyA8IFQudjAucC55OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjEudyA8IFQudjEucC55OyB9LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIFQudjIudyA8IFQudjIucC55OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuVG9wKTtcclxuXHJcbiAgICAgICAgLy8gQm90dG9tXHJcbiAgICAgICAgb3V0X2xpc3QgPSBSYXN0ZXJpemVyLmNsaXBfaGVscGVyKG91dF9saXN0LFxyXG4gICAgICAgICAgICAoVDogVHJpYW5nbGUpID0+IHsgcmV0dXJuIC1ULnYwLncgPiBULnYwLnAueTsgfSxcclxuICAgICAgICAgICAgKFQ6IFRyaWFuZ2xlKSA9PiB7IHJldHVybiAtVC52MS53ID4gVC52MS5wLnk7IH0sXHJcbiAgICAgICAgICAgIChUOiBUcmlhbmdsZSkgPT4geyByZXR1cm4gLVQudjIudyA+IFQudjIucC55OyB9LFxyXG4gICAgICAgICAgICBDbGlwUGxhbmUuQm90dG9tKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dF9saXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBNVlBfYmFja2ZhY2VfY3VsbGluZ19jbGlwcGluZyh0cmlhbmdsZTogVHJpYW5nbGUsIHBjYW1lcmE6IENhbWVyYSwgd29ybGRUcmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIC8vIHRvIHdvcmxkIHNwYWNlXHJcbiAgICAgICAgbGV0IHYwX3cgPSBUcmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQod29ybGRUcmFuc2Zvcm0sIHRyaWFuZ2xlLnYwLnApO1xyXG4gICAgICAgIGxldCB2MV93ID0gVHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHdvcmxkVHJhbnNmb3JtLCB0cmlhbmdsZS52MS5wKTtcclxuICAgICAgICBsZXQgdjJfdyA9IFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludCh3b3JsZFRyYW5zZm9ybSwgdHJpYW5nbGUudjIucCk7XHJcblxyXG4gICAgICAgIC8vIHRvIGNhbWVyYSBzcGFjZVxyXG4gICAgICAgIGxldCB2MF9jID0gcGNhbWVyYS50b0NhbWVyYVNwYWNlKHYwX3cpO1xyXG4gICAgICAgIGxldCB2MV9jID0gcGNhbWVyYS50b0NhbWVyYVNwYWNlKHYxX3cpO1xyXG4gICAgICAgIGxldCB2Ml9jID0gcGNhbWVyYS50b0NhbWVyYVNwYWNlKHYyX3cpO1xyXG5cclxuICAgICAgICAvLyB0byBwcm9qZWN0aW9uIHNwYWNlIChjbGlwIHNwYWNlKVxyXG4gICAgICAgIGxldCB2MF9wID0gcGNhbWVyYS50b1Byb2plY3Rpb25TcGFjZSh2MF9jKTtcclxuICAgICAgICBsZXQgdjFfcCA9IHBjYW1lcmEudG9Qcm9qZWN0aW9uU3BhY2UodjFfYyk7XHJcbiAgICAgICAgbGV0IHYyX3AgPSBwY2FtZXJhLnRvUHJvamVjdGlvblNwYWNlKHYyX2MpO1xyXG5cclxuICAgICAgICAvLyBiYWNrIGZhY2UgY3VsbGluZyBcclxuICAgICAgICAvLyBsZXQgdjBfdGVzdCA9IG5ldyBWZWN0b3IodjBfcC54LCB2MF9wLnksIHYwX2Mueik7XHJcbiAgICAgICAgLy8gbGV0IHYxX3Rlc3QgPSBuZXcgVmVjdG9yKHYxX3AueCwgdjFfcC55LCB2MV9jLnopO1xyXG4gICAgICAgIC8vIGxldCB2Ml90ZXN0ID0gbmV3IFZlY3Rvcih2Ml9wLngsIHYyX3AueSwgdjJfYy56KTtcclxuICAgICAgICAvLyBsZXQgbm9ybWFsID0gVmVjdG9yLmNhbGN1bGF0ZV9ub3JtYWwodjBfdGVzdCwgdjFfdGVzdCwgdjJfdGVzdCk7XHJcbiAgICAgICAgLy8gbGV0IGNlbnRlcl90b19leWUgPSBWZWN0b3IubWludXMoVmVjdG9yLnplcm8sIFZlY3Rvci5jYWxjdWxhdGVfY2VudGVyKHYwX3Rlc3QsIHYxX3Rlc3QsIHYyX3Rlc3QpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy8g5ZyodmlldyBzcGFjZeWBmu+8jOS4jeeEtuWcqGNsaXAgc3BhY2XlgZrvvIzpgoTopoHmiop655Sod+WPluS7o+aOie+8jOaciem7nuaQnuW3pVxyXG4gICAgICAgIGxldCBub3JtYWwgPSBWZWN0b3IuY2FsY3VsYXRlX25vcm1hbCh2MF9jLCB2MV9jLCB2Ml9jKTtcclxuICAgICAgICBsZXQgY2VudGVyX3RvX2V5ZSA9IFZlY3Rvci5taW51cyhWZWN0b3IuemVybywgVmVjdG9yLmNhbGN1bGF0ZV9jZW50ZXIodjBfYywgdjFfYywgdjJfYykpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgIGxldCBjb3NfdmFsdWUgPSBWZWN0b3IuZG90KG5vcm1hbCwgY2VudGVyX3RvX2V5ZSk7O1xyXG4gICAgICAgIGlmIChjb3NfdmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3VsbGluZycpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmHjeaWsOe2geWumnV2XHJcbiAgICAgICAgbGV0IHYwID0gdHJpYW5nbGUudjAuY2xvbmUoKS51cGRhdGVfcCh2MF9wKS51cGRhdGVfdyh2MF9jLnopO1xyXG4gICAgICAgIGxldCB2MSA9IHRyaWFuZ2xlLnYxLmNsb25lKCkudXBkYXRlX3AodjFfcCkudXBkYXRlX3codjFfYy56KTtcclxuICAgICAgICBsZXQgdjIgPSB0cmlhbmdsZS52Mi5jbG9uZSgpLnVwZGF0ZV9wKHYyX3ApLnVwZGF0ZV93KHYyX2Mueik7XHJcblxyXG4gICAgICAgIC8vIOWft+ihjOS4ieinkuW9ouijgeWIh1xyXG4gICAgICAgIHJldHVybiBSYXN0ZXJpemVyLmNsaXBfaW5fUHJvamVjdGlvbl9TcGFjZSh2MCwgdjEsIHYyLCBwY2FtZXJhKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdXNlX3NvbGlkX2NvbG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgbmRjX2NsYW1wX2VmZmVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHBlZWtfc2NyZWVuX3BvczogVmVjdG9yMkQ7XHJcblxyXG4gICAgc3RhdGljIHNldF9wZWVrX3NjcmVlbl9wb3MocGVla19zY3JlZW5fcG9zOiBWZWN0b3IyRCkge1xyXG4gICAgICAgIFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zID0gcGVla19zY3JlZW5fcG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmludF9vbmNlID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgcHJpbnRfcGVla19wb3NpdGlvbigpIHtcclxuICAgICAgICBSYXN0ZXJpemVyLnByaW50X29uY2UgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmludF9wZWVrX3Bvc2l0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcHJvY2Vzcyh0cmlhbmdsZTogVHJpYW5nbGUsIHBjYW1lcmE6IENhbWVyYSwgd29ybGRUcmFuc2Zvcm06IFRyYW5zZm9ybSwgdGV4dHVyZTogVGV4dHVyZTJEKSB7XHJcblxyXG4gICAgICAgIC8vIHRvIE1WUFxyXG4gICAgICAgIGxldCB0cmlhbmdsZV9saXN0ID0gUmFzdGVyaXplci5NVlBfYmFja2ZhY2VfY3VsbGluZ19jbGlwcGluZyh0cmlhbmdsZSwgcGNhbWVyYSwgd29ybGRUcmFuc2Zvcm0pO1xyXG5cclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgLy8gdG8gTkRDXHJcbiAgICAgICAgZm9yIChsZXQgVCBvZiB0cmlhbmdsZV9saXN0KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbjAgPSBwY2FtZXJhLnRvTkRDKFQudjAucCwgVC52MC53KTtcclxuICAgICAgICAgICAgbGV0IG4xID0gcGNhbWVyYS50b05EQyhULnYxLnAsIFQudjEudyk7XHJcbiAgICAgICAgICAgIGxldCBuMiA9IHBjYW1lcmEudG9OREMoVC52Mi5wLCBULnYyLncpO1xyXG5cclxuICAgICAgICAgICAgLy8gTkRD5oeJ6Kmy6KaB6JC95ZyoXHJcbiAgICAgICAgICAgIC8vIC0xIOKJpCB4IOKJpCAxLCAtMSDiiaQgeSDiiaQgMVxyXG5cclxuICAgICAgICAgICAgLy8g5LiN6KOB5YiHbGVmdOOAgXJpZ2h044CBdG9w44CBYm90dG9t77yM54S25b6MY2xhbXAgbmRj5Lmf566X5piv5LiA56iu54m55q6K5pWI5p6cXHJcbiAgICAgICAgICAgIGlmIChSYXN0ZXJpemVyLm5kY19jbGFtcF9lZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgIG4wLmNsYW1wX3goLTEsIDEpLmNsYW1wX3koLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgbjEuY2xhbXBfeCgtMSwgMSkuY2xhbXBfeSgtMSwgMSk7XHJcbiAgICAgICAgICAgICAgICBuMi5jbGFtcF94KC0xLCAxKS5jbGFtcF95KC0xLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdG8gc2NyZWVuIHNwYWNlXHJcbiAgICAgICAgICAgIC8vIDAg4omkIHgg4omkIHcsIDAg4omkIHkg4omkIGhcclxuICAgICAgICAgICAgbGV0IHMwID0gcGNhbWVyYS50b1NjcmVlblNwYWNlKG4wKTtcclxuICAgICAgICAgICAgbGV0IHMxID0gcGNhbWVyYS50b1NjcmVlblNwYWNlKG4xKTtcclxuICAgICAgICAgICAgbGV0IHMyID0gcGNhbWVyYS50b1NjcmVlblNwYWNlKG4yKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOeCuuS6huWSjOacrOS+hueahGNvZGXnm7jlrrnvvIzmmqvmmYLlhYjlgrPlh7rljrtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHMwKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHMxKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHMyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaJvuWHuuWMheWcjeeahOefqeW9olxyXG4gICAgICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDIxLzExL2Jsb2ctcG9zdF8yOC5odG1sXHJcbiAgICAgICAgICAgIC8vIOWcliBTY3JlZW4gU3BhY2VcclxuICAgICAgICAgICAgbGV0IHsgbWluLCBtYXggfSA9IFZlY3Rvci5taW5fbWF4KHMwLCBzMSwgczIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtaW4ueCwgbWF4LngsICd8JywgbWluLnksIG1heC55KTtcclxuICAgICAgICAgICAgbGV0IG1pbl94ID0gTWF0aC5mbG9vcihtaW4ueCk7XHJcbiAgICAgICAgICAgIGxldCBtYXhfeCA9IE1hdGguZmxvb3IobWF4LngpO1xyXG4gICAgICAgICAgICBsZXQgbWluX3kgPSBNYXRoLmZsb29yKG1pbi55KTtcclxuICAgICAgICAgICAgbGV0IG1heF95ID0gTWF0aC5mbG9vcihtYXgueSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjbGFtcCBieSBzY3JlZW4gc2l6ZVxyXG4gICAgICAgICAgICBtaW5feCA9IE1hdGgubWF4KDAsIG1pbl94KTtcclxuICAgICAgICAgICAgbWluX3kgPSBNYXRoLm1heCgwLCBtaW5feSk7XHJcbiAgICAgICAgICAgIG1heF94ID0gTWF0aC5taW4odGhpcy5jb2xvcl9idWZmZXIudyAtIDEsIG1heF94KTtcclxuICAgICAgICAgICAgbWF4X3kgPSBNYXRoLm1pbih0aGlzLmNvbG9yX2J1ZmZlci5oIC0gMSwgbWF4X3kpO1xyXG5cclxuICAgICAgICAgICAgLy8g6Zmk6Yyv55SoXHJcbiAgICAgICAgICAgIGxldCBhbGwgPSAobWF4X3ggLSBtaW5feCkgKiAobWF4X3kgLSBtaW5feSk7XHJcbiAgICAgICAgICAgIGxldCBkcmF3ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSBtaW5feDsgeCA8PSBtYXhfeDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB5ID0gbWluX3k7IHkgPD0gbWF4X3k7ICsreSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDIxLzExL2Jsb2ctcG9zdF8yOC5odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZyWIFNjcmVlbiBTcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3Rvcih4ICsgMC41LCB5ICsgMC41LCAwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDlsI3nn6nlvaLoo6HnmoTmr4/lgIvpu55QXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5a6a5piv5ZCm5L2N5Zyoc2NyZWVuIHNwYWNl5LiJ6KeS5b2i6KOh6Z2iXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgc3VjY2VzcywgzrEsIM6yLCDOsyB9ID0gVHJpYW5nbGUuY2FsY3VsYXRlX86xX86yX86zKHMwLCBzMSwgczIsIFApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJhc3Rlcml6ZXIucHJpbnRfb25jZSAmJiB4ID09IFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zLnggJiYgeSA9PSBSYXN0ZXJpemVyLnBlZWtfc2NyZWVuX3Bvcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc19pbl90cmlhbmdsZScsIFRyaWFuZ2xlLmlzX2luX3RyaWFuZ2xlKM6xLCDOsiwgzrMpLCDOsSwgzrIsIM6zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVHJpYW5nbGUuaXNfaW5fdHJpYW5nbGUozrEsIM6yLCDOsykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB5ZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKDEp6KiI566XeuWAvCBcclxuICAgICAgICAgICAgICAgICAgICAvLyDlvp5OREPliLBTY3JlZW4gU3BhY2XmmK/ku7/lsITorormj5vvvIzlhafmj5LmrIrph43OseOAgc6y44CBzrPkuIDmqKNcclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dwbm5vdGVzLmJsb2dzcG90LmNvbS8yMDE5LzExL2Jsb2ctcG9zdF8zMC5odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHogPSBUcmlhbmdsZS5pbnRlcnBvbGF0aW9uKM6zLCDOsSwgzrIsIG4wLnosIG4xLnosIG4yLnopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB6IHRlc3RcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnVmZmVyX3ogPSBSYXN0ZXJpemVyLnpfYnVmZmVyLmdldCh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeiA+IGJ1ZmZlcl96KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a+r5YWleuWAvFxyXG4gICAgICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIuel9idWZmZXIuc2V0KHgsIHksIHopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAoMinlnKhOREPpgLLooYzlhafmj5LvvIzkuZjkuIp35Zue5YiwcHJvamVjdGlvbiBzcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI3Lmh0bWxcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdyA9IDEgLyBUcmlhbmdsZS5pbnRlcnBvbGF0aW9uKM6zLCDOsSwgzrIsIDEgLyBULnYwLncsIDEgLyBULnYxLncsIDEgLyBULnYyLncpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDopoHlnKhOREPmj5LlgLzvvIzmiYDku6XpmaTku6V3XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVfbmRjID0gVHJpYW5nbGUuaW50ZXJwb2xhdGlvbijOsywgzrEsIM6yLCBULnYwLnUgLyBULnYwLncsIFQudjEudSAvIFQudjEudywgVC52Mi51IC8gVC52Mi53KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdl9uZGMgPSBUcmlhbmdsZS5pbnRlcnBvbGF0aW9uKM6zLCDOsSwgzrIsIFQudjAudiAvIFQudjAudywgVC52MS52IC8gVC52MS53LCBULnYyLnYgLyBULnYyLncpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0aW9uIHNwYWNlIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1ID0gdV9uZGMgKiB3O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gdl9uZGMgKiB3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgeyBjb2xvciB9ID0gdGV4dHVyZS5nZXQobmV3IFZlY3RvcjJEKHUsIHYpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoUmFzdGVyaXplci51c2Vfc29saWRfY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIuY29sb3JfYnVmZmVyLnNldCh4LCB5LCBSR0JBLnllbGxvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSYXN0ZXJpemVyLmNvbG9yX2J1ZmZlci5zZXQoeCwgeSwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXcrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFJhc3Rlcml6ZXIucHJpbnRfb25jZSAmJiB4ID09IFJhc3Rlcml6ZXIucGVla19zY3JlZW5fcG9zLnggJiYgeSA9PSBSYXN0ZXJpemVyLnBlZWtfc2NyZWVuX3Bvcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflnKjkuInop5LlvaLlhacnLCBjb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50LCBNYXRoLmZsb29yKDEwMCAqIGRyYXcgLyBhbGwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFJhc3Rlcml6ZXIucHJpbnRfb25jZSkge1xyXG4gICAgICAgICAgICBSYXN0ZXJpemVyLnByaW50X29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaCBwZWVrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxufSIsImltcG9ydCBWZWNvciBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJheSB7XHJcbiAgICBmcm9tOiBWZWNvcjtcclxuICAgIGRpcjogVmVjb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnJvbTogVmVjb3IsIGRpcjogVmVjb3IpIHtcclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCBWZWNvcjREIGZyb20gXCIuL1ZlY3RvcjREXCI7XHJcblxyXG4vLyDlnKgzRCBzcGFjZeijgeWIh+eahOipsVxyXG4vLyDpgoTopoHogIPmha7ku4DpurzmmYLlgJnopoHnlKgoeCx5LHcp6KOB5YiHXHJcbi8vIOS7gOm6vOaZguWAmeimgeeUqCh4LHkseinoo4HliIdcclxuLy8gXHJcbi8vIOS4jeWmguebtOaOpeWcqDREIHNwYWNl6KOB5YiHXHJcbi8vIGh0dHBzOi8vZ3Bubm90ZXMuYmxvZ3Nwb3QuY29tLzIwMjEvMTEvYmxvZy1wb3N0XzI4Lmh0bWxcclxuLy8g5ZyWIDREIHNwYWNlIGNsaXBcclxuLy8g6YCZ6KOh55SoRGlyZWN0eOeahE5EQ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYXk0RCB7XHJcbiAgICBmcm9tOiBWZWNvcjREO1xyXG4gICAgZGlyOiBWZWNvcjREO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZyb206IFZlY29yNEQsIHRvOiBWZWNvcjREKSB7XHJcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcclxuICAgICAgICB0aGlzLmRpciA9IG5ldyBWZWNvcjREKFZlY3Rvci5taW51cyh0by5wLCBmcm9tLnApLCB0by53IC0gZnJvbS53KTtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feF9lcXVhbF93KCkge1xyXG4gICAgICAgIC8vIGZyb20ueCArIHQgKiBkaXIueD0gZnJvbS53ICsgdCAqIGRpci53O1xyXG4gICAgICAgIGxldCB0ID0gKHRoaXMuZnJvbS53IC0gdGhpcy5mcm9tLnAueCkgLyAodGhpcy5kaXIucC54IC0gdGhpcy5kaXIudyk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdF93aGVuX3lfZXF1YWxfdygpIHtcclxuICAgICAgICBsZXQgdCA9ICh0aGlzLmZyb20udyAtIHRoaXMuZnJvbS5wLnkpIC8gKHRoaXMuZGlyLnAueSAtIHRoaXMuZGlyLncpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl96X2VxdWFsX3coKSB7XHJcbiAgICAgICAgbGV0IHQgPSAodGhpcy5mcm9tLncgLSB0aGlzLmZyb20ucC56KSAvICh0aGlzLmRpci5wLnogLSB0aGlzLmRpci53KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feF9lcXVhbF9taW51c193KCkge1xyXG4gICAgICAgIC8vIGZyb20ueCArIHQgKiBkaXIueD0gLShmcm9tLncgKyB0ICogZGlyLncpO1xyXG5cclxuICAgICAgICBsZXQgdCA9IC0odGhpcy5mcm9tLncgKyB0aGlzLmZyb20ucC54KSAvICh0aGlzLmRpci53ICsgdGhpcy5kaXIucC54KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuXHJcbiAgICB0X3doZW5feV9lcXVhbF9taW51c193KCkge1xyXG4gICAgICAgIGxldCB0ID0gLSh0aGlzLmZyb20udyArIHRoaXMuZnJvbS5wLnkpIC8gKHRoaXMuZGlyLncgKyB0aGlzLmRpci5wLnkpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG5cclxuICAgIHRfd2hlbl96X2VxdWFsX3plcm9fdygpIHtcclxuXHJcbiAgICAgICAgLy8gZnJvbS56ICsgdCAqIGRpci56PSAwO1xyXG4gICAgICAgIGxldCB0ID0gLXRoaXMuZnJvbS5wLnogLyB0aGlzLmRpci5wLno7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJUYXJnZXQge1xyXG4gICAgdzogbnVtYmVyID0gMzIwO1xyXG4gICAgaDogbnVtYmVyID0gMjQwO1xyXG4gICAgYmFja2J1ZmZlcjogT2Zmc2NyZWVuQ2FudmFzO1xyXG4gICAgY29uc3RydWN0b3IodzogbnVtYmVyID0gMzIwLCBoOiBudW1iZXIgPSAyNDApIHtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5iYWNrYnVmZmVyID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh0aGlzLncsIHRoaXMuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyX3BpeGVsKGZ1bmM6ICh4X3dlaWdodDogbnVtYmVyLCB5X3dlaWdodDogbnVtYmVyLCByYXRpbzogbnVtYmVyKSA9PiBWZWN0b3IpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHRfMmQgPSB0aGlzLmJhY2tidWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAoIWNvbnRleHRfMmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb250ZXh0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgc291cmNlIGRhdGEgYXJyYXlcclxuICAgICAgICBsZXQgYmFja2J1ZmZlcl9kYXRhID0gY29udGV4dF8yZC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgICAgIGxldCBiYWNrYnVmZmVyX2RhdGFfYXJyYXkgPSBiYWNrYnVmZmVyX2RhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy53IC8gdGhpcy5oO1xyXG5cclxuICAgICAgICAvLyBzZXQgYXJyYXkgdmFsdWVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJnYmEgZWFjaCBjb2xvciBpcyA0Ynl0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gNCAqICh4ICsgeSAqIHRoaXMudyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy5pbnRyby10by1keHIuY3d5bWFuLm9yZy9wcmVzZW50YXRpb25zL0ludHJvRFhSX1JheXRyYWNpbmdTaGFkZXJzLnBkZlxyXG4gICAgICAgICAgICAgICAgLy8gcGFnZSA3OFxyXG4gICAgICAgICAgICAgICAgLy8g6ZyA6KaB5YGP56e75Y2K5YCL5YOP57Sg55qE6ZW35bqm77yM5omN5pyD6JC95Zyo5YOP57Sg55qE5Lit6ZaTKOS4jemBjuiCieecvOeci+S4jeWkquWHuuW3ruWIpeWwseaYr+S6hilcclxuICAgICAgICAgICAgICAgIC8vIHJlbWFwIHRvIDB+MVxyXG4gICAgICAgICAgICAgICAgbGV0IFggPSAoKHggKyAwLjUpIC8gdGhpcy53KTtcclxuICAgICAgICAgICAgICAgIGxldCBZID0gKCh5ICsgMC41KSAvIHRoaXMuaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIHkgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBZID0gMSAtIFk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtYXAgdG8gLTF+MVxyXG4gICAgICAgICAgICAgICAgbGV0IHhfd2VpZ2h0ID0gWCAqIDIgLSAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IHlfd2VpZ2h0ID0gWSAqIDIgLSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IGZ1bmMoeF93ZWlnaHQsIHlfd2VpZ2h0LCByYXRpbyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgciA9IGNvbG9yLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgZyA9IGNvbG9yLnk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYiA9IGNvbG9yLno7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtbWHmoKHmraNcclxuICAgICAgICAgICAgICAgIGxldCBnYW1tYSA9IDEgLyAyLjE7XHJcbiAgICAgICAgICAgICAgICByID0gTWF0aC5wb3cociwgZ2FtbWEpO1xyXG4gICAgICAgICAgICAgICAgZyA9IE1hdGgucG93KGcsIGdhbW1hKTtcclxuICAgICAgICAgICAgICAgIGIgPSBNYXRoLnBvdyhiLCBnYW1tYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4KytdID0gTWF0aC5yb3VuZChyICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleCsrXSA9IE1hdGgucm91bmQoZyAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXgrK10gPSBNYXRoLnJvdW5kKGIgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4XSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0XzJkLnB1dEltYWdlRGF0YShiYWNrYnVmZmVyX2RhdGEsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldF9waXhlbChmdW5jOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IFJHQkEpIHtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRleHRfMmQgPSB0aGlzLmJhY2tidWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBpZiAoIWNvbnRleHRfMmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBjb250ZXh0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgc291cmNlIGRhdGEgYXJyYXlcclxuICAgICAgICBsZXQgYmFja2J1ZmZlcl9kYXRhID0gY29udGV4dF8yZC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgICAgIGxldCBiYWNrYnVmZmVyX2RhdGFfYXJyYXkgPSBiYWNrYnVmZmVyX2RhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgbGV0IHJhdGlvID0gdGhpcy53IC8gdGhpcy5oO1xyXG5cclxuICAgICAgICAvLyBzZXQgYXJyYXkgdmFsdWVcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJnYmEgZWFjaCBjb2xvciBpcyA0Ynl0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gNCAqICh4ICsgeSAqIHRoaXMudyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gZnVuYyh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGxldCByID0gY29sb3IucjtcclxuICAgICAgICAgICAgICAgIGxldCBnID0gY29sb3IuZztcclxuICAgICAgICAgICAgICAgIGxldCBiID0gY29sb3IuYjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmspLljrtnYW1tYe+8jOS5n+S4jeeUqGdhbW1h5qCh5q2jXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZ2FtbWEgPSAxIC8gMi4xO1xyXG4gICAgICAgICAgICAgICAgLy8gciA9IE1hdGgucG93KHIsIGdhbW1hKTtcclxuICAgICAgICAgICAgICAgIC8vIGcgPSBNYXRoLnBvdyhnLCBnYW1tYSk7XHJcbiAgICAgICAgICAgICAgICAvLyBiID0gTWF0aC5wb3coYiwgZ2FtbWEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleCsrXSA9IE1hdGgucm91bmQociAqIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrYnVmZmVyX2RhdGFfYXJyYXlbaW5kZXgrK10gPSBNYXRoLnJvdW5kKGcgKiAyNTUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2J1ZmZlcl9kYXRhX2FycmF5W2luZGV4KytdID0gTWF0aC5yb3VuZChiICogMjU1KTtcclxuICAgICAgICAgICAgICAgIGJhY2tidWZmZXJfZGF0YV9hcnJheVtpbmRleF0gPSAyNTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGV4dF8yZC5wdXRJbWFnZURhdGEoYmFja2J1ZmZlcl9kYXRhLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93X2J1ZmZlcihjYW52YXNfaWQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIOioreWummJ1ZmZlcueahOWkp+Wwj+WSjGNzcyBzdHlsZeeahOWkp+Wwj+S4gOaoo1xyXG4gICAgICAgIC8vIGh0dHBzOi8vb3BlbmhvbWUuY2MvR29zc2lwL1dlYkdML0NhbnZhcy5odG1sXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc19pZCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgY2FudmFzLnN0eWxlLndpZHRoID0gdGhpcy53ICsgJ3B4JztcclxuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oICsgJ3B4JztcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIGNvcHkgYmFja2J1ZmZlciB0byBjYW52YXNcclxuICAgICAgICBsZXQgY29udGV4dF9iaXRtYXBfcmVuZGVyID0gY2FudmFzLmdldENvbnRleHQoXCJiaXRtYXByZW5kZXJlclwiKTtcclxuICAgICAgICBpZiAoIWNvbnRleHRfYml0bWFwX3JlbmRlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IGNvbnRleHRfYml0bWFwX3JlbmRlciBmYWlsZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0X2JpdG1hcF9yZW5kZXIudHJhbnNmZXJGcm9tSW1hZ2VCaXRtYXAodGhpcy5iYWNrYnVmZmVyLnRyYW5zZmVyVG9JbWFnZUJpdG1hcCgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9WZWN0b3IyRFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FtcGxlciB7XHJcblxyXG4gICAgc3RhdGljIHV2X3RvX2J1ZmZlcl9zcGFjZSh1djogVmVjdG9yMkQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHV2LngsIDEgLSB1di55KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYnVmZmVyX3RvX3V2X3NwYWNlKHV2OiBWZWN0b3IyRCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMkQodXYueCwgMSAtIHV2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXh0dXJlMkQodXY6IFZlY3RvcjJELCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcblxyXG4gICAgICAgIGxldCB3ID0gYnVmZmVyLnc7XHJcbiAgICAgICAgbGV0IGggPSBidWZmZXIuaDtcclxuXHJcbiAgICAgICAgbGV0IGJ1ZmZlcl91diA9IFNhbXBsZXIudXZfdG9fYnVmZmVyX3NwYWNlKHV2KTtcclxuICAgICAgICBsZXQgdSA9IGJ1ZmZlcl91di54O1xyXG4gICAgICAgIGxldCB2ID0gYnVmZmVyX3V2Lnk7XHJcblxyXG4gICAgICAgIC8v5YWI5om+5Ye65pyA6L+R6bueXHJcbiAgICAgICAgbGV0IGdyaWRfdSA9IDEgLyB3O1xyXG4gICAgICAgIGxldCBncmlkX3YgPSAxIC8gaDtcclxuXHJcbiAgICAgICAgbGV0IGhhbGZfZ3JpZF91ID0gZ3JpZF91ICogMC41O1xyXG4gICAgICAgIGxldCBoYWxmX2dyaWRfdiA9IGdyaWRfdiAqIDAuNTtcclxuXHJcbiAgICAgICAgLy/ku6XkuIvmmK/mnIk05YCL6YSw6bue55qE5oOF5rOBLi5cclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF91X2Zsb2F0ID0gdSAvIGdyaWRfdTtcclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF92X2Zsb2F0ID0gdiAvIGdyaWRfdjtcclxuXHJcbiAgICAgICAgbGV0IG5lYXJlc3RfcG9pbnRfdSA9IE1hdGguZmxvb3IobmVhcmVzdF9wb2ludF91X2Zsb2F0KTtcclxuICAgICAgICBsZXQgbmVhcmVzdF9wb2ludF92ID0gTWF0aC5mbG9vcihuZWFyZXN0X3BvaW50X3ZfZmxvYXQpO1xyXG5cclxuICAgICAgICAvL2FsZXJ0KG5lYXJlc3RfcG9pbnRfdStcIixcIituZWFyZXN0X3BvaW50X3YpO1xyXG5cclxuICAgICAgICAvL+WcqOOAjOacgOi/kem7nuOAjeagvOijoeeahGxvY2FsIHV2XHJcbiAgICAgICAgbGV0IHNfdSA9IHUgJSBncmlkX3U7XHJcbiAgICAgICAgbGV0IHNfdiA9IHYgJSBncmlkX3Y7XHJcblxyXG4gICAgICAgIC8v5YaN5om+5Ye655u46YSwM+m7nlxyXG4gICAgICAgIGlmIChzX3UgPj0gaGFsZl9ncmlkX3UgJiYgc192ID49IGhhbGZfZ3JpZF92KS8v55u46YSwM+m7nuWcqOWPs+S4i1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy/liZvlpb3mlbTpmaTmmYLopoHlgZrkv67mraNcclxuICAgICAgICAgICAgaWYgKG5lYXJlc3RfcG9pbnRfdV9mbG9hdCA9PSBuZWFyZXN0X3BvaW50X3UpXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0X3BvaW50X3UgPSBuZWFyZXN0X3BvaW50X3UgLSAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5lYXJlc3RfcG9pbnRfdl9mbG9hdCA9PSBuZWFyZXN0X3BvaW50X3YpXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0X3BvaW50X3YgPSBuZWFyZXN0X3BvaW50X3YgLSAxO1xyXG4gICAgICAgICAgICBsZXQgUCA9IG5ldyBWZWN0b3IyRChuZWFyZXN0X3BvaW50X3UsIG5lYXJlc3RfcG9pbnRfdik7XHJcblxyXG4gICAgICAgICAgICAvLyDlj7PkuItcclxuICAgICAgICAgICAgbGV0IE5FID0gbmV3IFZlY3RvcjJEKFAueCArIDEsIFAueSk7XHJcbiAgICAgICAgICAgIGxldCBTVyA9IG5ldyBWZWN0b3IyRChQLngsIFAueSArIDEpO1xyXG4gICAgICAgICAgICBsZXQgU0UgPSBuZXcgVmVjdG9yMkQoUC54ICsgMSwgUC55ICsgMSk7XHJcbiAgICAgICAgICAgIC8v5ZyoNOm7nuWFp+eahHV2XHJcbiAgICAgICAgICAgIGxldCByZWN0VVYgPSBuZXcgVmVjdG9yMkQoKHNfdSAtIGhhbGZfZ3JpZF91KSAvIGdyaWRfdSwgKHNfdiAtIGhhbGZfZ3JpZF92KSAvIGdyaWRfdik7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3RVViwgTlc6IFAsIE5FLCBTVywgU0UsIGNvbG9yOiBTYW1wbGVyLkJpbGluZWFyX1NhbXBsZXIocmVjdFVWLCBQLCBORSwgU1csIFNFLCBidWZmZXIpIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNfdSA8PSBoYWxmX2dyaWRfdSAmJiBzX3YgPj0gaGFsZl9ncmlkX3YpLy/nm7jphLAz6bue5Zyo5bem5LiLXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+WJm+WlveaVtOmZpOaZguimgeWBmuS/ruato1xyXG4gICAgICAgICAgICBpZiAobmVhcmVzdF9wb2ludF92X2Zsb2F0ID09IG5lYXJlc3RfcG9pbnRfdilcclxuICAgICAgICAgICAgICAgIG5lYXJlc3RfcG9pbnRfdiA9IG5lYXJlc3RfcG9pbnRfdiAtIDE7XHJcbiAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3RvcjJEKG5lYXJlc3RfcG9pbnRfdSwgbmVhcmVzdF9wb2ludF92KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW3puS4i1xyXG4gICAgICAgICAgICBsZXQgTlcgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55KTtcclxuICAgICAgICAgICAgbGV0IFNXID0gbmV3IFZlY3RvcjJEKFAueCAtIDEsIFAueSArIDEpO1xyXG4gICAgICAgICAgICBsZXQgU0UgPSBuZXcgVmVjdG9yMkQoUC54LCBQLnkgKyAxKTtcclxuICAgICAgICAgICAgLy/lnKg06bue5YWn55qEdXZcclxuICAgICAgICAgICAgbGV0IHJlY3RVViA9IG5ldyBWZWN0b3IyRCgoc191ICsgaGFsZl9ncmlkX3UpIC8gZ3JpZF91LCAoc192IC0gaGFsZl9ncmlkX3YpIC8gZ3JpZF92KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWLCBOVywgTkU6IFAsIFNXLCBTRSwgY29sb3I6IFNhbXBsZXIuQmlsaW5lYXJfU2FtcGxlcihyZWN0VVYsIE5XLCBQLCBTVywgU0UsIGJ1ZmZlcikgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc191IDw9IGhhbGZfZ3JpZF91ICYmIHNfdiA8PSBoYWxmX2dyaWRfdikvL+ebuOmEsDPpu57lnKjlt6bkuIpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBQID0gbmV3IFZlY3RvcjJEKG5lYXJlc3RfcG9pbnRfdSwgbmVhcmVzdF9wb2ludF92KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW3puS4ilxyXG4gICAgICAgICAgICBsZXQgTlcgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBORSA9IG5ldyBWZWN0b3IyRChQLngsIFAueSAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgU1cgPSBuZXcgVmVjdG9yMkQoUC54IC0gMSwgUC55KTtcclxuICAgICAgICAgICAgLy/lnKg06bue5YWn55qEdXZcclxuICAgICAgICAgICAgbGV0IHJlY3RVViA9IG5ldyBWZWN0b3IyRCgoc191ICsgaGFsZl9ncmlkX3UpIC8gZ3JpZF91LCAoc192ICsgaGFsZl9ncmlkX3YpIC8gZ3JpZF92KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcmVjdFVWLCBOVywgTkUsIFNXLCBTRTogUCwgY29sb3I6IFNhbXBsZXIuQmlsaW5lYXJfU2FtcGxlcihyZWN0VVYsIE5XLCBORSwgU1csIFAsIGJ1ZmZlcikgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoc191ID49IGhhbGZfZ3JpZF91ICYmIHNfdiA8PSBoYWxmX2dyaWRfdikvL+ebuOmEsDPpu57lnKjlj7PkuIpcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy/liZvlpb3mlbTpmaTmmYLopoHlgZrkv67mraNcclxuICAgICAgICAgICAgaWYgKG5lYXJlc3RfcG9pbnRfdV9mbG9hdCA9PSBuZWFyZXN0X3BvaW50X3UpXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0X3BvaW50X3UgPSBuZWFyZXN0X3BvaW50X3UgLSAxO1xyXG4gICAgICAgICAgICBsZXQgUCA9IG5ldyBWZWN0b3IyRChuZWFyZXN0X3BvaW50X3UsIG5lYXJlc3RfcG9pbnRfdik7XHJcblxyXG4gICAgICAgICAgICAvLyDlj7PkuIpcclxuICAgICAgICAgICAgbGV0IE5XID0gbmV3IFZlY3RvcjJEKFAueCwgUC55IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBORSA9IG5ldyBWZWN0b3IyRChQLnggKyAxLCBQLnkgLSAxKTtcclxuICAgICAgICAgICAgbGV0IFNFID0gbmV3IFZlY3RvcjJEKFAueCArIDEsIFAueSk7XHJcbiAgICAgICAgICAgIC8v5ZyoNOm7nuWFp+eahHV2XHJcbiAgICAgICAgICAgIGxldCByZWN0VVYgPSBuZXcgVmVjdG9yMkQoKHNfdSAtIGhhbGZfZ3JpZF91KSAvIGdyaWRfdSwgKHNfdiArIGhhbGZfZ3JpZF92KSAvIGdyaWRfdik7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3RVViwgTlcsIE5FLCBTVzogUCwgU0UsIGNvbG9yOiBTYW1wbGVyLkJpbGluZWFyX1NhbXBsZXIocmVjdFVWLCBOVywgTkUsIFAsIFNFLCBidWZmZXIpIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBCaWxpbmVhcl9TYW1wbGVyKHJlY3RVVjogVmVjdG9yMkQsIE5XOiBWZWN0b3IyRCwgTkU6IFZlY3RvcjJELCBTVzogVmVjdG9yMkQsIFNFOiBWZWN0b3IyRCwgYnVmZmVyOiBCdWZmZXIyRDxSR0JBPikge1xyXG5cclxuICAgICAgICAvL+WwjTTlgIvpu57poY/oibLkvZzlhafmj5JcclxuICAgICAgICBsZXQgTldjID0gYnVmZmVyLmdldF9jbGFtcF9tb2RlKE5XLngsIE5XLnkpO1xyXG4gICAgICAgIGxldCBORWMgPSBidWZmZXIuZ2V0X2NsYW1wX21vZGUoTkUueCwgTkUueSk7XHJcbiAgICAgICAgbGV0IFNXYyA9IGJ1ZmZlci5nZXRfY2xhbXBfbW9kZShTVy54LCBTVy55KTtcclxuICAgICAgICBsZXQgU0VjID0gYnVmZmVyLmdldF9jbGFtcF9tb2RlKFNFLngsIFNFLnkpO1xyXG5cclxuICAgICAgICBsZXQgblJHQiA9IFJHQkEubGVycChOV2MsIE5FYywgcmVjdFVWLngpO1xyXG4gICAgICAgIGxldCBzUkdCID0gUkdCQS5sZXJwKFNXYywgU0VjLCByZWN0VVYueCk7XHJcbiAgICAgICAgbGV0IG1pZGRsZVJHQiA9IFJHQkEubGVycChuUkdCLCBzUkdCLCByZWN0VVYueSk7XHJcbiAgICAgICAgcmV0dXJuIG1pZGRsZVJHQjtcclxuICAgIH1cclxufSIsImltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9CdWZmZXIyRFwiO1xyXG5pbXBvcnQgQ2F2bmFzSGVscGVyIGZyb20gXCIuL0NhbnZhc0hlbHBlclwiO1xyXG5pbXBvcnQgUkdCQSBmcm9tIFwiLi9SR0JBXCI7XHJcbmltcG9ydCBTYW1wbGVyIGZyb20gXCIuL1NhbXBsZXJcIjtcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1ZlY3RvcjJEXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlMkQge1xyXG5cclxuXHJcbiAgICBsb2FkX3RleHR1cmVfYnVmZmVyKCkge1xyXG4gICAgICAgIGxldCB3ID0gdGhpcy5pbWcud2lkdGg7XHJcbiAgICAgICAgbGV0IGggPSB0aGlzLmltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXNfdGV4dHVyZSA9IENhdm5hc0hlbHBlci5zZXRfY2FudmFzKCdjYW52YXNfdGV4dHVyZScsIHcsIGgpO1xyXG4gICAgICAgIGxldCBjdHggPSBDYXZuYXNIZWxwZXIuZ2V0X2NvbnRleHRfYnlfY2FudmFzKGNhbnZhc190ZXh0dXJlKTtcclxuICAgICAgICBpZiAoIWN0eCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZF90ZXh0dXJlX2J1ZmZlciBmYWlsZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g5pS55oiQMeasoeiugOWujOWFqOmDqFxyXG4gICAgICAgIGxldCBkYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3LCBoKS5kYXRhO1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcjJEPFJHQkE+KHcsIGgpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdzsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VrZSA9IDQgKiAodyAqIHkgKyB4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyLnNldCh4LCB5LCBuZXcgUkdCQShkYXRhW3Nla2VdIC8gMjU1LCBkYXRhW3Nla2UgKyAxXSAvIDI1NSwgZGF0YVtzZWtlICsgMl0gLyAyNTUsIGRhdGFbc2VrZSArIDNdIC8gMjU1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHkgPj0gNyAmJiB5IDw9IDggJiYgeCA+PSA3ICYmIHggPD0gOCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+IHwgbnVsbCA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcihzcmM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubG9hZF90ZXh0dXJlX2J1ZmZlciA9IHRoaXMubG9hZF90ZXh0dXJlX2J1ZmZlci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB0aGlzLmltZy5vbmxvYWQgPSB0aGlzLmxvYWRfdGV4dHVyZV9idWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHV2OiBWZWN0b3IyRCkge1xyXG4gICAgICAgIGlmICghdGhpcy5idWZmZXIpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHJlY3RVVjogbnVsbCwgTlc6IG51bGwsIE5FOiBudWxsLCBTVzogbnVsbCwgU0U6IG51bGwsIGNvbG9yOiBSR0JBLmJsYWNrIH07XHJcbiAgICAgICAgcmV0dXJuIFNhbXBsZXIudGV4dHVyZTJEKHV2LCB0aGlzLmJ1ZmZlcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU2NlbmVOb2RlIGZyb20gXCIuLi9PYmplY3QvU2NlbmVOb2RlXCI7XHJcbmltcG9ydCBSYXkgZnJvbSBcIi4vUmF5XCI7XHJcbmltcG9ydCBSYXk0RCBmcm9tIFwiLi9SYXk0RFwiO1xyXG5pbXBvcnQgSGl0SW5mbyBmcm9tIFwiLi9IaXRJbmZvXCI7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9UcmlhbmdsZVwiO1xyXG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL1ZlcnRleFwiO1xyXG5pbXBvcnQgUGxhbmUgZnJvbSBcIi4vUGxhbmVcIjtcclxuaW1wb3J0IFJHQkEgZnJvbSBcIi4vUkdCQVwiO1xyXG5pbXBvcnQgQnVmZmVyMkQgZnJvbSBcIi4vQnVmZmVyMkRcIjtcclxuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuL1ZlY3RvcjJEXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVncmVlX3RvX1JhZChkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLlBJICogZCAvIDE4MDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcHNpbG9uOiBudW1iZXIgPSAwLjAwMTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJfZXF1YWwoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYikgPCBlcHNpbG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAoeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIGlmICh4ID4gbWF4KVxyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICBlbHNlIGlmICh4IDwgbWluKVxyXG4gICAgICAgIHJldHVybiBtaW47XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRfaGl0X3NvcnRfbGlzdChvYmpfbGlzdDogU2NlbmVOb2RlW10sIHJheTogUmF5KSB7XHJcblxyXG4gICAgbGV0IGxpc3QgPSBvYmpfbGlzdC5tYXAob2JqID0+IG9iai5oLmhpdChyYXksIG9iai5zKSk7XHJcbiAgICBsZXQgaGl0X2xpc3QgPSA8SGl0SW5mb1tdPihsaXN0LmZpbHRlcihpbmZvID0+IGluZm8gIT0gbnVsbCAmJiBpbmZvLnBvc2l0aXZlX3QpKTtcclxuXHJcbiAgICByZXR1cm4gaGl0X2xpc3Quc29ydCgoYTogSGl0SW5mbywgYjogSGl0SW5mbykgPT4gYS50IC0gYi50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldF9zaGFkb3dfd2VpZ2h0KGhpdF9pbmZvOiBIaXRJbmZvLCBkaXJlY3Rpb25fbGlnaHRfZGlyOiBWZWN0b3IsIG9ial9saXN0OiBTY2VuZU5vZGVbXSkge1xyXG5cclxuICAgIC8vIOaYr+WQpuWcqOW9seWtkOWFp1xyXG4gICAgbGV0IGRpciA9IGRpcmVjdGlvbl9saWdodF9kaXIubmVnYXRpdmUoKTtcclxuICAgIGxldCBmcm9tID0gaGl0X2luZm8uaGl0X3Bvcy5hZGQoZGlyLm11bHRpcGx5KGVwc2lsb24pKTsgLy8g5YGP56e75LiA5bCP5q616Led6Zui77yM6YG/5YWN5bCE5Lit6Ieq5bexXHJcbiAgICBsZXQgcmF5ID0gbmV3IFJheShmcm9tLCBkaXIpO1xyXG4gICAgbGV0IGhpdF9zb3J0X2xpc3QgPSBnZXRfaGl0X3NvcnRfbGlzdChvYmpfbGlzdCwgcmF5KTtcclxuICAgIGlmIChoaXRfc29ydF9saXN0Lmxlbmd0aCAhPSAwKSB7IC8vIOWcqOW9seWtkOWFp1xyXG4gICAgICAgIHJldHVybiAwLjQ1OyAvLyDkuI3opoHlpKrpu5FcclxuICAgIH0gZWxzZVxyXG4gICAgICAgIHJldHVybiAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBDbGlwUGxhbmUge1xyXG4gICAgTmVhcixcclxuICAgIEZhcixcclxuICAgIFJpZ2h0LFxyXG4gICAgTGVmdCxcclxuICAgIFRvcCxcclxuICAgIEJvdHRvbVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xpcCh0cmlhbmdsZTogVHJpYW5nbGUsXHJcbiAgICB2MF9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICB2MV9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICB2Ml9vdXQ6ICh0cmlhbmdsZTogVHJpYW5nbGUpID0+IGJvb2xlYW4sXHJcbiAgICBwbGFuZTogQ2xpcFBsYW5lKSB7XHJcblxyXG4gICAgbGV0IHZfY2xpcDogVHJpYW5nbGVbXSA9IFtdO1xyXG5cclxuICAgIGxldCBnZXRDcm9zc1BvaW50ID0gZnVuY3Rpb24gKHYwOiBWZXJ0ZXgsIHYxOiBWZXJ0ZXgpIHtcclxuICAgICAgICBsZXQgcmF5ID0gbmV3IFJheTREKHYwLmdldF9WZWN0b3I0RCgpLCB2MS5nZXRfVmVjdG9yNEQoKSk7XHJcblxyXG4gICAgICAgIGxldCB0ID0gMDtcclxuICAgICAgICBzd2l0Y2ggKHBsYW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLkZhcjpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3pfZXF1YWxfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLk5lYXI6XHJcbiAgICAgICAgICAgICAgICB0ID0gcmF5LnRfd2hlbl96X2VxdWFsX3plcm9fdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgdCA9IHJheS50X3doZW5feF9lcXVhbF93KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDbGlwUGxhbmUuTGVmdDpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3hfZXF1YWxfbWludXNfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLlRvcDpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3lfZXF1YWxfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ2xpcFBsYW5lLkJvdHRvbTpcclxuICAgICAgICAgICAgICAgIHQgPSByYXkudF93aGVuX3lfZXF1YWxfbWludXNfdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gVmVydGV4LmxlcnAodjAsIHYxLCB0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB2byBpbiBcclxuICAgIGxldCBjbGlwX2ZpcnN0X2luID0gZnVuY3Rpb24gKHYwOiBWZXJ0ZXgsIHYxOiBWZXJ0ZXgsIHYyOiBWZXJ0ZXgpIHtcclxuICAgICAgICAvLyAxIHRyaWFuZ2xlIHRvIDEgdHJpYW5nbGVcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25lJyk7XHJcbiAgICAgICAgdl9jbGlwWzBdID0gbmV3IFRyaWFuZ2xlKHYwLCBnZXRDcm9zc1BvaW50KHYwLCB2MSksIGdldENyb3NzUG9pbnQodjAsIHYyKSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB2byBvdXRcclxuICAgIGxldCBjbGlwX2ZpcnN0X291dCA9IGZ1bmN0aW9uICh2MDogVmVydGV4LCB2MTogVmVydGV4LCB2MjogVmVydGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3R3bycpO1xyXG4gICAgICAgIC8vIDEgdHJpYW5nbGUgdG8gMiB0cmlhbmdsZVxyXG4gICAgICAgIGxldCBjcm9zczEgPSBnZXRDcm9zc1BvaW50KHYyLCB2MCk7XHJcbiAgICAgICAgbGV0IGNyb3NzMiA9IGdldENyb3NzUG9pbnQodjAsIHYxKTtcclxuXHJcbiAgICAgICAgdl9jbGlwWzBdID0gbmV3IFRyaWFuZ2xlKHYyLCBjcm9zczEsIGNyb3NzMik7XHJcbiAgICAgICAgdl9jbGlwWzFdID0gbmV3IFRyaWFuZ2xlKHYyLCBjcm9zczIsIHYxKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8g5pyJOOeoruaDheazgVxyXG4gICAgaWYgKHYwX291dCh0cmlhbmdsZSkpLy9vdXRcclxuICAgIHtcclxuICAgICAgICBpZiAodjFfb3V0KHRyaWFuZ2xlKSkvLyBvdXQgb3V0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvLyBvdXQgb3V0IG91dCAobm8gY2xpcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z1bGwgb3V0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSAvL291dCBvdXQgaW5cclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3RfaW4odHJpYW5nbGUudjIsIHRyaWFuZ2xlLnYwLCB0cmlhbmdsZS52MSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgLy9vdXQgaW4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvL291dCBpbiBvdXRcclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3RfaW4odHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyLCB0cmlhbmdsZS52MCk7XHJcbiAgICAgICAgICAgIGVsc2UgLy8gb3V0IGluIGluXHJcbiAgICAgICAgICAgICAgICBjbGlwX2ZpcnN0X291dCh0cmlhbmdsZS52MCwgdHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIC8vIGluXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHYxX291dCh0cmlhbmdsZSkpLy8gaW4gb3V0IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYyX291dCh0cmlhbmdsZSkpLy8gaW4gb3V0IG91dFxyXG4gICAgICAgICAgICAgICAgY2xpcF9maXJzdF9pbih0cmlhbmdsZS52MCwgdHJpYW5nbGUudjEsIHRyaWFuZ2xlLnYyKTtcclxuICAgICAgICAgICAgZWxzZSAvLyBpbiBvdXQgaW5cclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3Rfb3V0KHRyaWFuZ2xlLnYxLCB0cmlhbmdsZS52MiwgdHJpYW5nbGUudjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIC8vIGluIGluXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodjJfb3V0KHRyaWFuZ2xlKSkvLyBpbiBpbiBvdXRcclxuICAgICAgICAgICAgICAgIGNsaXBfZmlyc3Rfb3V0KHRyaWFuZ2xlLnYyLCB0cmlhbmdsZS52MCwgdHJpYW5nbGUudjEpO1xyXG4gICAgICAgICAgICBlbHNlIC8vIGluIGluIGluIChubyBjbGlwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2X2NsaXBbMF0gPSB0cmlhbmdsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2X2NsaXA7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRoSGVscGVyIHtcclxuICAgIC8v5L+u5q2j6Zmk5rOV6Yyv6KqkXHJcbiAgICBzdGF0aWMgYWNjRGl2KGFyZzE6IG51bWJlciwgYXJnMjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jb2RlIGZyb20gaHR0cDovLzhzdC5ibG9nc3BvdC50dy8yMDEyLzEwL2pzYnVnLmh0bWxcclxuICAgICAgICBsZXQgdDEgPSAwLCB0MiA9IDAsIHIxLCByMjtcclxuICAgICAgICB0cnkgeyB0MSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgICAgIHRyeSB7IHQyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGggfSBjYXRjaCAoZSkgeyB9XHJcblxyXG4gICAgICAgIHIxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSlcclxuICAgICAgICByMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpXHJcbiAgICAgICAgcmV0dXJuIChyMSAvIHIyKSAqIE1hdGgucG93KDEwLCB0MiAtIHQxKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+S/ruato+WKoOazlemMr+iqpFxyXG4gICAgc3RhdGljIGFjY0FkZChhcmcxOiBudW1iZXIsIGFyZzI6IG51bWJlcikge1xyXG4gICAgICAgIC8vY29kZSBmcm9tIGh0dHA6Ly84c3QuYmxvZ3Nwb3QudHcvMjAxMi8xMC9qc2J1Zy5odG1sXHJcbiAgICAgICAgbGV0IHIxLCByMiwgbSwgYztcclxuICAgICAgICB0cnkgeyByMSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIH0gY2F0Y2ggKGUpIHsgcjEgPSAwIH1cclxuICAgICAgICB0cnkgeyByMiA9IGFyZzIudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoIH0gY2F0Y2ggKGUpIHsgcjIgPSAwIH1cclxuICAgICAgICBjID0gTWF0aC5hYnMocjEgLSByMik7XHJcbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKVxyXG4gICAgICAgIGlmIChjID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY20gPSBNYXRoLnBvdygxMCwgYyk7XHJcbiAgICAgICAgICAgIGlmIChyMSA+IHIyKSB7XHJcbiAgICAgICAgICAgICAgICBhcmcxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBhcmcyID0gTnVtYmVyKGFyZzIudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgKiBjbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIGNtO1xyXG4gICAgICAgICAgICAgICAgYXJnMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhcmcxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBcIlwiKSk7XHJcbiAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChhcmcxICsgYXJnMikgLyBtXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOS7peWJjeWvq+eahGNvZGVcclxuZXhwb3J0IGNsYXNzIERyYXdIZWxwZXIge1xyXG5cclxuICAgIHN0YXRpYyBkcmF3TGluZShvbmU6IFZlY3RvcjJELCB0d286IFZlY3RvcjJELCB2YWx1ZTogUkdCQSwgYnVmZmVyOiBCdWZmZXIyRDxSR0JBPikge1xyXG5cclxuICAgICAgICBsZXQgbm93ID0gb25lO1xyXG4gICAgICAgIGxldCB0byA9IHR3bztcclxuICAgICAgICBsZXQgZGlmZiA9IFZlY3RvcjJELm1pbnVzKHRvLCBub3cpO1xyXG5cclxuICAgICAgICBsZXQgc3RlcCA9IDEwMDtcclxuICAgICAgICBpZiAoZGlmZi55ID09IDApLy9ob3Jpem9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy/lt6bnlavliLDlj7NcclxuICAgICAgICAgICAgICAgIG5vdy54ID0gbm93LnggKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFidWZmZXIuaXNfbGVnYWxfaW5kZXgobm93LngsIG5vdy55KSlcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobm93LnggPiB0by54KVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1ZmZlci5zZXQobm93LngsIG5vdy55LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpZmYueCA9PSAwKS8vdmVydGljYWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RlcDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S4iueVq+WIsOS4i1xyXG4gICAgICAgICAgICAgICAgbm93LnkgPSBub3cueSArIDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci5pc19sZWdhbF9pbmRleChub3cueCwgbm93LnkpKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChub3cueSA+IHRvLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnNldChub3cueCwgbm93LnksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmF0aW8gPSBkaWZmLnggLyBkaWZmLnk7XHJcbiAgICAgICAgbGV0IGFic19yID0gTWF0aC5hYnMocmF0aW8pO1xyXG5cclxuICAgICAgICBpZiAocmF0aW8gPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChhYnNfciA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy55ID0gbm93LnkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy54ID0gbm93LnggKyBhYnNfcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50WCA9IE1hdGguZmxvb3Iobm93LngpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYnVmZmVyLmlzX2xlZ2FsX2luZGV4KGludFgsIG5vdy55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXIuaXNfb3Zlcl9wb3NpdGl2ZShub3cueCwgbm93LnksIHRvLngsIHRvLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnNldChpbnRYLCBub3cueSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFic19yID4gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBub3cueSA9IG5vdy55ICsgMSAvIGFic19yO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy54ID0gbm93LnggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRZID0gTWF0aC5mbG9vcihub3cueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIuaXNfbGVnYWxfaW5kZXgobm93LngsIGludFkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5pc19vdmVyX3Bvc2l0aXZlKG5vdy54LCBub3cueSwgdG8ueCwgdG8ueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIuc2V0KG5vdy54LCBpbnRZLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmF0aW8gPCAwKSB7XHJcbiAgICAgICAgICAgIGlmIChhYnNfciA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ZXA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy55ID0gbm93LnkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy54ID0gbm93LnggLSBhYnNfcjtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50WCA9IE1hdGguZmxvb3Iobm93LngpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYnVmZmVyLmlzX2xlZ2FsX2luZGV4KGludFgsIG5vdy55KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmZXIuaXNfb3Zlcl9uZWdhdGl2ZShub3cueCwgbm93LnksIHRvLngsIHRvLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyLnNldChpbnRYLCBub3cueSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGFic19yID4gMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdGVwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBub3cueSA9IG5vdy55ICsgMSAvIGFic19yO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdy54ID0gbm93LnggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnRZID0gTWF0aC5mbG9vcihub3cueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFidWZmZXIuaXNfbGVnYWxfaW5kZXgobm93LngsIGludFkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlci5pc19vdmVyX25lZ2F0aXZlKG5vdy54LCBub3cueSwgdG8ueCwgdG8ueSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBidWZmZXIuc2V0KG5vdy54LCBpbnRZLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkcmF3Q2lyY2xlKHZhbHVlOiBSR0JBLCBidWZmZXI6IEJ1ZmZlcjJEPFJHQkE+KSB7XHJcbiAgICAgICAgbGV0IGl0ID0gNTA7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gMiAqIE1hdGguUEkgLyBpdDtcclxuICAgICAgICBsZXQgUiA9IDk7XHJcbiAgICAgICAgbGV0IGNlbnRlciA9IG5ldyBWZWN0b3IyRCgxMCwgMTApO1xyXG4gICAgICAgIGxldCBzdGFydFRoZWRhID0gLU1hdGguUEkgLyAzO1xyXG5cclxuICAgICAgICAvL+eVq+Wck1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm93WCA9IE1hdGguZmxvb3IoY2VudGVyLnggKyBSICogTWF0aC5jb3Moc3RhcnRUaGVkYSArIGRlbHRhICogaSkpO1xyXG4gICAgICAgICAgICBsZXQgbm93WSA9IE1hdGguZmxvb3IoY2VudGVyLnkgKyBSICogTWF0aC5zaW4oc3RhcnRUaGVkYSArIGRlbHRhICogaSkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5leHRYID0gTWF0aC5mbG9vcihjZW50ZXIueCArIFIgKiBNYXRoLmNvcyhzdGFydFRoZWRhICsgZGVsdGEgKiAoaSArIDEpKSk7XHJcbiAgICAgICAgICAgIGxldCBuZXh0WSA9IE1hdGguZmxvb3IoY2VudGVyLnkgKyBSICogTWF0aC5zaW4oc3RhcnRUaGVkYSArIGRlbHRhICogKGkgKyAxKSkpO1xyXG5cclxuICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3TGluZVdyYXBwZXIobmV3IFZlY3RvcjJEKG5vd1gsIG5vd1kpLCBuZXcgVmVjdG9yMkQobmV4dFgsIG5leHRZKSwgdmFsdWUsIGJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZHJhd1N0YXIodmFsdWU6IFJHQkEsIGJ1ZmZlcjogQnVmZmVyMkQ8UkdCQT4pIHtcclxuICAgICAgICBsZXQgaXQgPSA1O1xyXG4gICAgICAgIGxldCBkZWx0YSA9IDIgKiBNYXRoLlBJIC8gaXQ7XHJcbiAgICAgICAgbGV0IFIgPSA5O1xyXG4gICAgICAgIGxldCBjZW50ZXIgPSBuZXcgVmVjdG9yMkQoMTAsIDEwKTtcclxuICAgICAgICBsZXQgc3RhcnRUaGVkYSA9IC1NYXRoLlBJIC8gMztcclxuXHJcbiAgICAgICAgLy/nlavmmJ/mmJ9cclxuICAgICAgICBsZXQgayA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub3dYID0gTWF0aC5mbG9vcihjZW50ZXIueCArIFIgKiBNYXRoLmNvcyhzdGFydFRoZWRhICsgZGVsdGEgKiBrKSk7XHJcbiAgICAgICAgICAgIGxldCBub3dZID0gTWF0aC5mbG9vcihjZW50ZXIueSArIFIgKiBNYXRoLnNpbihzdGFydFRoZWRhICsgZGVsdGEgKiBrKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV4dFggPSBNYXRoLmZsb29yKGNlbnRlci54ICsgUiAqIE1hdGguY29zKHN0YXJ0VGhlZGEgKyBkZWx0YSAqIChrICsgMikpKTtcclxuICAgICAgICAgICAgbGV0IG5leHRZID0gTWF0aC5mbG9vcihjZW50ZXIueSArIFIgKiBNYXRoLnNpbihzdGFydFRoZWRhICsgZGVsdGEgKiAoayArIDIpKSk7XHJcblxyXG4gICAgICAgICAgICBEcmF3SGVscGVyLmRyYXdMaW5lV3JhcHBlcihuZXcgVmVjdG9yMkQobm93WCwgbm93WSksIG5ldyBWZWN0b3IyRChuZXh0WCwgbmV4dFkpLCB2YWx1ZSwgYnVmZmVyKTtcclxuICAgICAgICAgICAgayA9IGsgKyAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZHJhd0xpbmVXcmFwcGVyKHQwOiBWZWN0b3IyRCwgdDE6IFZlY3RvcjJELCB2YWx1ZTogUkdCQSwgYnVmZmVyOiBCdWZmZXIyRDxSR0JBPikge1xyXG4gICAgICAgIC8v5b6e5LiK5b6A5LiL55WrXHJcbiAgICAgICAgaWYgKHQwLnkgPCB0MS55KVxyXG4gICAgICAgICAgICBEcmF3SGVscGVyLmRyYXdMaW5lKHQwLCB0MSwgdmFsdWUsIGJ1ZmZlcik7XHJcbiAgICAgICAgZWxzZSBpZiAodDEueSA8IHQwLnkpXHJcbiAgICAgICAgICAgIERyYXdIZWxwZXIuZHJhd0xpbmUodDEsIHQwLCB2YWx1ZSwgYnVmZmVyKTtcclxuICAgICAgICBlbHNlIC8v5rC05bmz57eaXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL+W+nuW3puW+gOWPs+eVq1xyXG4gICAgICAgICAgICBpZiAodDAueCA8IHQxLngpXHJcbiAgICAgICAgICAgICAgICBEcmF3SGVscGVyLmRyYXdMaW5lKHQwLCB0MSwgdmFsdWUsIGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHQxLnggPCB0MC54KVxyXG4gICAgICAgICAgICAgICAgRHJhd0hlbHBlci5kcmF3TGluZSh0MSwgdDAsIHZhbHVlLCBidWZmZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBWZWN0b3IgZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCB7IGRlZ3JlZV90b19SYWQgfSBmcm9tICcuL1Rvb2wnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm0ge1xyXG4gICAgeEF4aXM6IFZlY3RvcjtcclxuICAgIHlBeGlzOiBWZWN0b3I7XHJcbiAgICB6QXhpczogVmVjdG9yO1xyXG4gICAgcG9zaXRpb246IFZlY3RvcjtcclxuICAgIGNvbnN0cnVjdG9yKHhBeGlzOiBWZWN0b3IsIHlBeGlzOiBWZWN0b3IsIHpBeGlzOiBWZWN0b3IsIHBvc2l0aW9uOiBWZWN0b3IpIHtcclxuICAgICAgICB0aGlzLnhBeGlzID0geEF4aXM7XHJcbiAgICAgICAgdGhpcy55QXhpcyA9IHlBeGlzO1xyXG4gICAgICAgIHRoaXMuekF4aXMgPSB6QXhpcztcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zZm9ybVBvaW50KHRyYW5zZm9ybTogVHJhbnNmb3JtLCBwb2ludDogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHZlY3RvclggPSB0cmFuc2Zvcm0ueEF4aXMubXVsdGlwbHkocG9pbnQueCk7XHJcbiAgICAgICAgbGV0IHZlY3RvclkgPSB0cmFuc2Zvcm0ueUF4aXMubXVsdGlwbHkocG9pbnQueSk7XHJcbiAgICAgICAgbGV0IHZlY3RvclogPSB0cmFuc2Zvcm0uekF4aXMubXVsdGlwbHkocG9pbnQueik7XHJcblxyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm0ucG9zaXRpb24uYWRkKHZlY3RvclgpLmFkZCh2ZWN0b3JZKS5hZGQodmVjdG9yWik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRyYW5zZm9ybVZlY3Rvcih0cmFuc2Zvcm06IFRyYW5zZm9ybSwgdmVydGV4OiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdmVjdG9yWCA9IHRyYW5zZm9ybS54QXhpcy5tdWx0aXBseSh2ZXJ0ZXgueCk7XHJcbiAgICAgICAgbGV0IHZlY3RvclkgPSB0cmFuc2Zvcm0ueUF4aXMubXVsdGlwbHkodmVydGV4LnkpO1xyXG4gICAgICAgIGxldCB2ZWN0b3JaID0gdHJhbnNmb3JtLnpBeGlzLm11bHRpcGx5KHZlcnRleC56KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY3RvclguYWRkKHZlY3RvclkpLmFkZCh2ZWN0b3JaKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdHJhbnNmb3JtVHJhbnNmb3JtKHRyYW5zZm9ybTogVHJhbnNmb3JtLCBpbnB1dFRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIFRyYW5zZm9ybS50cmFuc2Zvcm1WZWN0b3IodHJhbnNmb3JtLCBpbnB1dFRyYW5zZm9ybS54QXhpcyksXHJcbiAgICAgICAgICAgIFRyYW5zZm9ybS50cmFuc2Zvcm1WZWN0b3IodHJhbnNmb3JtLCBpbnB1dFRyYW5zZm9ybS55QXhpcyksXHJcbiAgICAgICAgICAgIFRyYW5zZm9ybS50cmFuc2Zvcm1WZWN0b3IodHJhbnNmb3JtLCBpbnB1dFRyYW5zZm9ybS56QXhpcyksXHJcbiAgICAgICAgICAgIFRyYW5zZm9ybS50cmFuc2Zvcm1Qb2ludCh0cmFuc2Zvcm0sIGlucHV0VHJhbnNmb3JtLnBvc2l0aW9uKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByb3RhdGVCeVooZGVncmVlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gZGVncmVlX3RvX1JhZChkZWdyZWUpO1xyXG4gICAgICAgIGxldCBjID0gTWF0aC5jb3MocmFkaWFuKSwgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgbGV0IHhBeGlzID0gbmV3IFZlY3RvcihjLCBzLCAwKTtcclxuICAgICAgICBsZXQgeUF4aXMgPSBuZXcgVmVjdG9yKC1zLCBjLCAwKTtcclxuICAgICAgICBsZXQgekF4aXMgPSBuZXcgVmVjdG9yKDAsIDAsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybShcclxuICAgICAgICAgICAgeEF4aXMsXHJcbiAgICAgICAgICAgIHlBeGlzLFxyXG4gICAgICAgICAgICB6QXhpcyxcclxuICAgICAgICAgICAgVmVjdG9yLnplcm8sXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcm90YXRlQnlZKGRlZ3JlZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGRlZ3JlZV90b19SYWQoZGVncmVlKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHJhZGlhbiksIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIGxldCB6QXhpcyA9IG5ldyBWZWN0b3IocywgMCwgYyk7XHJcbiAgICAgICAgbGV0IHhBeGlzID0gbmV3IFZlY3RvcihjLCAwLCAtcyk7XHJcbiAgICAgICAgbGV0IHlBeGlzID0gbmV3IFZlY3RvcigwLCAxLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIHhBeGlzLFxyXG4gICAgICAgICAgICB5QXhpcyxcclxuICAgICAgICAgICAgekF4aXMsXHJcbiAgICAgICAgICAgIFZlY3Rvci56ZXJvLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJvdGF0ZUJ5WChkZWdyZWU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBkZWdyZWVfdG9fUmFkKGRlZ3JlZSk7XHJcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyhyYWRpYW4pLCBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICBsZXQgeEF4aXMgPSBuZXcgVmVjdG9yKDEsIDAsIDApO1xyXG4gICAgICAgIGxldCB5QXhpcyA9IG5ldyBWZWN0b3IoMCwgYywgcyk7XHJcbiAgICAgICAgbGV0IHpBeGlzID0gbmV3IFZlY3RvcigwLCAtcywgYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNmb3JtKFxyXG4gICAgICAgICAgICB4QXhpcyxcclxuICAgICAgICAgICAgeUF4aXMsXHJcbiAgICAgICAgICAgIHpBeGlzLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yKDAsIDAsIDApLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IoMSwgMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IoMCwgMSwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IoMCwgMCwgMSksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IoeCwgeSwgeiksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJ1xyXG5pbXBvcnQgVmVydGV4IGZyb20gJy4vVmVydGV4J1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhJztcclxuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUnO1xyXG5pbXBvcnQgUmF5IGZyb20gJy4vUmF5JztcclxuaW1wb3J0IFJhc3Rlcml6ZXIgZnJvbSAnLi9SYXN0ZXJpemVyJztcclxuaW1wb3J0IFRleHR1cmUyRCBmcm9tICcuL1RleHR1cmUyRCc7XHJcbmltcG9ydCB7IG51bWJlcl9lcXVhbCB9IGZyb20gJy4vVG9vbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSB7XHJcblxyXG4gICAgLy8g6YCZ5Lqb6bueeumDveaYrzBcclxuICAgIHN0YXRpYyBjYWxjdWxhdGVfzrFfzrJfzrMoczA6IFZlY3RvciwgczE6IFZlY3RvciwgczI6IFZlY3RvciwgUDogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IGRpZmYgPSBWZWN0b3IubWludXMoUCwgczApO1xyXG5cclxuICAgICAgICAvLyDmsYJyYXkoUCxTMC1TMinlkoxyYXkoUzAsUzEtUzIp55qE5Lqk6bueXHJcbiAgICAgICAgLy8g562J5ZCM5pa85rGCcmF5KFAsUzAtUzIp5ZKM5bmz6Z2i55qE5Lqk6bueXHJcbiAgICAgICAgbGV0IGRpcjAxID0gVmVjdG9yLm1pbnVzKHMxLCBzMCk7XHJcbiAgICAgICAgbGV0IGRpcjAyID0gVmVjdG9yLm1pbnVzKHMyLCBzMCk7XHJcbiAgICAgICAgbGV0IG4gPSBuZXcgVmVjdG9yKC1kaXIwMS55LCBkaXIwMS54LCAwKTtcclxuICAgICAgICBsZXQgcmF5ID0gbmV3IFJheShQLCBkaXIwMi5tdWx0aXBseSgtMSkpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBQbGFuZS5oaXQocmF5LCBuZXcgUGxhbmUoczAsIG4pKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHsgLy8g6YCA5YyW5oiQ55u057ea55qE5LiJ6KeS5b2i5omN5pyJ5Lmf5Y+v6IO9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCflubPooYwnLCBzMCwgczEsIHMyLCBQKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4jeiZleeQhlxyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgzrE6IDEsIM6yOiAwLCDOszogMCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBfb25fZGlyMDEgPSByZXN1bHQuaGl0X3BvcztcclxuICAgICAgICBsZXQgdmVjdG9yX86xID0gVmVjdG9yLm1pbnVzKHBfb25fZGlyMDEsIHMwKTtcclxuICAgICAgICBsZXQgdmVjdG9yX86yID0gVmVjdG9yLm1pbnVzKGRpZmYsIHZlY3Rvcl/OsSk7XHJcblxyXG4gICAgICAgIC8vIOaTi+aOiWRpcjAx44CBZGlyMDLmmK956Lu45bmz6KGM55qE5oOF5rOBXHJcbiAgICAgICAgLy8g5rWu6bue5pW46KuL55SoIG51bWJlcl9lcXVhbO+8jOS4jeeEtuacg0dHXHJcbiAgICAgICAgLy8g6KaL5ZyW77yaYnVnL2Zsb2F0X3BvaW50X2NvbXBhaXJlX2Vycm9yKGZpeGVkKS9idWdfd2hlbl9jbGlwcGluZ18yLmpwZ1xyXG4gICAgICAgIC8vIOWFtuWvpueVtuWIneebtOaOpeeUqOmVt+W6puavlOeul86x44CBzrLkuI3mmK/mm7TnsKHllq7ll47vvJ9cclxuICAgICAgICBsZXQgzrEgPSBudW1iZXJfZXF1YWwoZGlyMDEueCwgMCkgPyB2ZWN0b3JfzrEueSAvIGRpcjAxLnkgOiB2ZWN0b3JfzrEueCAvIGRpcjAxLng7XHJcbiAgICAgICAgbGV0IM6yID0gbnVtYmVyX2VxdWFsKGRpcjAyLngsIDApID8gdmVjdG9yX86yLnkgLyBkaXIwMi55IDogdmVjdG9yX86yLnggLyBkaXIwMi54O1xyXG4gICAgICAgIGlmIChpc05hTijOsSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmVjdG9yX86xLngsIGRpcjAxLngpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzTmFOKM6yKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2ZWN0b3JfzrIueCwgZGlyMDIueCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCDOsyA9IDEgLSDOsSAtIM6yO1xyXG5cclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCDOsSwgzrIsIM6zIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNfaW5fdHJpYW5nbGUozrE6IG51bWJlciwgzrI6IG51bWJlciwgzrM6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAozrEgPj0gMCAmJiDOsiA+PSAwICYmIM6zID49IDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWboOeCumNhbGN1bGF0ZV/OsV/Osl/Os+WvpuS9nOeahOaWueW8j++8jOaJgOS7pemghuW6j+aYr86z44CBzrHjgIHOsiDwn5idXHJcbiAgICBzdGF0aWMgaW50ZXJwb2xhdGlvbijOszogbnVtYmVyLCDOsTogbnVtYmVyLCDOsjogbnVtYmVyLCB2MDogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYwICogzrMgKyB2MSAqIM6xICsgdjIgKiDOsjtcclxuICAgIH1cclxuXHJcbiAgICB2MDogVmVydGV4O1xyXG4gICAgdjE6IFZlcnRleDtcclxuICAgIHYyOiBWZXJ0ZXg7XHJcbiAgICBjb25zdHJ1Y3RvcihwdjA6IFZlcnRleCwgcHYxOiBWZXJ0ZXgsIHB2MjogVmVydGV4KSB7XHJcbiAgICAgICAgdGhpcy52MCA9IHB2MDtcclxuICAgICAgICB0aGlzLnYxID0gcHYxO1xyXG4gICAgICAgIHRoaXMudjIgPSBwdjI7XHJcbiAgICAgICAgdGhpcy52X3MgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZfczogVmVjdG9yW10gfCBudWxsO1xyXG4gICAgcmFzdGVyaXplKHBjYW1lcmE6IENhbWVyYSwgd29ybGRUcmFuc2Zvcm06IFRyYW5zZm9ybSwgdGV4dHVyZTogVGV4dHVyZTJEKSB7XHJcbiAgICAgICAgdGhpcy52X3MgPSBSYXN0ZXJpemVyLnByb2Nlc3ModGhpcywgcGNhbWVyYSwgd29ybGRUcmFuc2Zvcm0sIHRleHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICBpZiAodGhpcy52X3MgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdENvdW50ID0gdGhpcy52X3MubGVuZ3RoIC8gMztcclxuICAgICAgICBmb3IgKGxldCBjID0gMTsgYyA8PSB0Q291bnQ7ICsrYykge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAzICogYyAtIDE7XHJcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8odGhpcy52X3NbaW5kZXhdLngsIHRoaXMudl9zW2luZGV4XS55KTtcclxuICAgICAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnZfc1tpbmRleCAtIDJdLngsIHRoaXMudl9zW2luZGV4IC0gMl0ueSk7XHJcbiAgICAgICAgICAgIGN0eC5saW5lVG8odGhpcy52X3NbaW5kZXggLSAxXS54LCB0aGlzLnZfc1tpbmRleCAtIDFdLnkpO1xyXG4gICAgICAgICAgICBjdHgubGluZVRvKHRoaXMudl9zW2luZGV4XS54LCB0aGlzLnZfc1tpbmRleF0ueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBsZXJwLCBudW1iZXJfZXF1YWwsIGNsYW1wIH0gZnJvbSAnLi9Ub29sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcclxuXHJcbiAgICBzdGF0aWMgbWluX21heCh2MDogVmVjdG9yLCB2MTogVmVjdG9yLCB2MjogVmVjdG9yKSB7XHJcblxyXG4gICAgICAgIGxldCBtaW4gPSBuZXcgVmVjdG9yKE1hdGgubWluKE1hdGgubWluKHYwLngsIHYxLngpLCB2Mi54KSwgTWF0aC5taW4oTWF0aC5taW4odjAueSwgdjEueSksIHYyLnkpLCBNYXRoLm1pbihNYXRoLm1pbih2MC56LCB2MS56KSwgdjIueikpO1xyXG4gICAgICAgIGxldCBtYXggPSBuZXcgVmVjdG9yKE1hdGgubWF4KE1hdGgubWF4KHYwLngsIHYxLngpLCB2Mi54KSwgTWF0aC5tYXgoTWF0aC5tYXgodjAueSwgdjEueSksIHYyLnkpLCBNYXRoLm1heChNYXRoLm1heCh2MC56LCB2MS56KSwgdjIueikpO1xyXG4gICAgICAgIHJldHVybiB7IG1pbiwgbWF4IH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNhbGN1bGF0ZV9ub3JtYWwodjA6IFZlY3RvciwgdjE6IFZlY3RvciwgdjI6IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCB2MDEgPSBWZWN0b3IubWludXModjEsIHYwKTtcclxuICAgICAgICBsZXQgdjAyID0gVmVjdG9yLm1pbnVzKHYyLCB2MCk7XHJcbiAgICAgICAgbGV0IG5vcm1hbCA9IFZlY3Rvci5jcm9zcyh2MDEsIHYwMik7XHJcbiAgICAgICAgcmV0dXJuIG5vcm1hbC5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2FsY3VsYXRlX2NlbnRlcih2MDogVmVjdG9yLCB2MTogVmVjdG9yLCB2MjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHYwLmFkZCh2MSkuYWRkKHYyKS5tdWx0aXBseSgxIC8gMyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHV2KHU6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodSwgdiwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwID0gbmV3IFZlY3RvcigwLCAxLCAwKTtcclxuICAgIHN0YXRpYyB6ZXJvID0gbmV3IFZlY3RvcigwLCAwLCAwKTtcclxuXHJcbiAgICBzdGF0aWMgcmVmbGVjdChJOiBWZWN0b3IsIE46IFZlY3Rvcikge1xyXG4gICAgICAgIGxldCBMID0gLTIgKiBWZWN0b3IuZG90KEksIE4pXHJcbiAgICAgICAgcmV0dXJuIE4ubXVsdGlwbHkoTCkuYWRkKEkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhZGQoQTogVmVjdG9yLCBCOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoQi54ICsgQS54LCBCLnkgKyBBLnksIEIueiArIEEueik7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWludXMoQTogVmVjdG9yLCBCOiBWZWN0b3IpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoQS54IC0gQi54LCBBLnkgLSBCLnksIEEueiAtIEIueik7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkoQTogVmVjdG9yLCBzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IoQS54ICogcywgQS55ICogcywgQS56ICogcyk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbXVsdGlwbHkzKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoQS54ICogQi54LCBBLnkgKiBCLnksIEEueiAqIEIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yKEEueSAqIEIueiAtIEEueiAqIEIueSwgLUEueCAqIEIueiArIEEueiAqIEIueCwgQS54ICogQi55IC0gQS55ICogQi54KTtcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KEE6IFZlY3RvciwgQjogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIEEueCAqIEIueCArIEEueSAqIEIueSArIEEueiAqIEIuejtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXF1YWwoQTogVmVjdG9yLCBCOiBWZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyX2VxdWFsKEEueCwgQi54KSAmJiBudW1iZXJfZXF1YWwoQS55LCBCLnkpICYmIG51bWJlcl9lcXVhbChBLnosIEIueik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnAoQTogVmVjdG9yLCBCOiBWZWN0b3IsIHQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKFxyXG4gICAgICAgICAgICBsZXJwKEEueCwgQi54LCB0KSxcclxuICAgICAgICAgICAgbGVycChBLnksIEIueSwgdCksXHJcbiAgICAgICAgICAgIGxlcnAoQS56LCBCLnosIHQpKTtcclxuICAgIH1cclxuXHJcbiAgICB4OiBudW1iZXIgPSAwO1xyXG4gICAgeTogbnVtYmVyID0gMDtcclxuICAgIHo6IG51bWJlciA9IDA7XHJcbiAgICBjb25zdHJ1Y3RvcihweDogbnVtYmVyLCBweTogbnVtYmVyLCBwejogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gcHg7XHJcbiAgICAgICAgdGhpcy55ID0gcHk7XHJcbiAgICAgICAgdGhpcy56ID0gcHo7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBfeChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSBjbGFtcCh0aGlzLngsIG1pbiwgbWF4KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcF95KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IGNsYW1wKHRoaXMueSwgbWluLCBtYXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueik7XHJcbiAgICB9XHJcblxyXG4gICAgbm9ybWFsaXplKCkge1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggLyB0ZW1wO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSAvIHRlbXA7XHJcbiAgICAgICAgdGhpcy56ID0gdGhpcy56IC8gdGVtcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGQoQTogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5hZGQodGhpcywgQSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWludXMoQTogVmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3Rvci5taW51cyh0aGlzLCBBKTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseShzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yLm11bHRpcGx5KHRoaXMsIHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5lZ2F0aXZlKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IubXVsdGlwbHkodGhpcywgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIFZlY3RvcjJEKCkge1xyXG4gICAgICAgIHRoaXMueiA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnksIHRoaXMueik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRCB7XHJcblxyXG4gICAgc3RhdGljIGFkZChBOiBWZWN0b3IyRCwgQjogVmVjdG9yMkQpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IG5ldyBWZWN0b3IyRChCLnggKyBBLngsIEIueSArIEEueSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbWludXMoQTogVmVjdG9yMkQsIEI6IFZlY3RvcjJEKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgVmVjdG9yMkQoQS54IC0gQi54LCBBLnkgLSBCLnkpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wXHJcbiAgICB9XHJcblxyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsdXMocDogVmVjdG9yMkQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBseShzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIHMsIHRoaXMueSAqIHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBcIiggXCIgKyB0aGlzLnggKyBcIiAsIFwiICsgdGhpcy55ICsgXCIgKVwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFZlY29yIGZyb20gXCIuL1ZlY3RvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yNEQge1xyXG4gICAgcDogVmVjb3I7XHJcbiAgICB3OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocDogVmVjb3IsIHc6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucCA9IHA7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgIH1cclxufTsiLCJcclxuaW1wb3J0IHsgbGVycCB9IGZyb20gJy4vVG9vbCc7XHJcbmltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InXHJcbmltcG9ydCBWZWN0b3I0RCBmcm9tICcuL1ZlY3RvcjREJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XHJcbiAgICBzdGF0aWMgYnVpbGRfdmVydGV4KHA6IFZlY3RvciwgbjogVmVjdG9yLCB3OiBudW1iZXIsIHU6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocCwgbiwgdywgdSwgdik7XHJcbiAgICAgICAgcmV0dXJuIHZlcnRleDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycCh2MDogVmVydGV4LCB2MTogVmVydGV4LCB0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcCA9IFZlY3Rvci5sZXJwKHYwLnAsIHYxLnAsIHQpO1xyXG4gICAgICAgIGxldCBuID0gVmVjdG9yLmxlcnAodjAubiwgdjEubiwgdCk7XHJcbiAgICAgICAgbGV0IHcgPSBsZXJwKHYwLncsIHYxLncsIHQpO1xyXG4gICAgICAgIGxldCB1ID0gbGVycCh2MC51LCB2MS51LCB0KTtcclxuICAgICAgICBsZXQgdiA9IGxlcnAodjAudiwgdjEudiwgdCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXgocCwgbiwgdywgdSwgdik7XHJcbiAgICB9XHJcblxyXG4gICAgcDogVmVjdG9yO1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgdTogbnVtYmVyO1xyXG4gICAgdjogbnVtYmVyO1xyXG4gICAgbjogVmVjdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHA6IFZlY3RvciwgbjogVmVjdG9yLCB3OiBudW1iZXIsIHU6IG51bWJlciwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICB0aGlzLm4gPSBuO1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy51ID0gdTtcclxuICAgICAgICB0aGlzLnYgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4KHRoaXMucC5jbG9uZSgpLCB0aGlzLm4uY2xvbmUoKSwgdGhpcy53LCB0aGlzLnUsIHRoaXMudik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlX3AocDogVmVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5wID0gcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVfdyh3OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldF9WZWN0b3I0RCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjREKHRoaXMucCwgdGhpcy53KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJveCBmcm9tIFwiLi9NYXRoL0JveDNEXCI7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vTWF0aC9DYW1lcmFcIjtcclxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9NYXRoL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL01hdGgvVmVjdG9yXCI7XHJcbmltcG9ydCBSZW5kZXJUYXJnZXQgZnJvbSAnLi9NYXRoL1JlbmRlclRhcmdldCc7XHJcbmltcG9ydCBCdWZmZXIyRCBmcm9tIFwiLi9NYXRoL0J1ZmZlcjJEXCI7XHJcbmltcG9ydCBSR0JBIGZyb20gXCIuL01hdGgvUkdCQVwiO1xyXG5pbXBvcnQgUmFzdGVyaXplciBmcm9tIFwiLi9NYXRoL1Jhc3Rlcml6ZXJcIjtcclxuaW1wb3J0IENhdm5hc0hlbHBlciBmcm9tIFwiLi9NYXRoL0NhbnZhc0hlbHBlclwiO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gXCIuL01hdGgvVGV4dHVyZTJEXCI7XHJcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi9NYXRoL1ZlY3RvcjJEXCI7XHJcbmltcG9ydCBISGVscGVyIGZyb20gXCIuL01hdGgvSEhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFzdGVyaXplckFwcCB7XHJcblxyXG4gICAgY2FtZXJhSW5kZXhfdmlldyA9IDE7XHJcbiAgICBjYW1lcmFJbmRleF9jb250cm9sID0gMDtcclxuICAgIGNhbWVyYTogQ2FtZXJhO1xyXG4gICAgdGhhbmRsZSA9IDA7XHJcblxyXG4gICAgc2NyZWVuV2lkdGggPSA1MTI7XHJcbiAgICBzY3JlZW5IZWlnaHQgPSA1MTI7XHJcblxyXG4gICAgLy8gc2NyZWVuV2lkdGggPSAyNTY7XHJcbiAgICAvLyBzY3JlZW5IZWlnaHQgPSAyNTY7XHJcblxyXG4gICAgYm94OiBCb3g7XHJcblxyXG4gICAgbGFzdF90ID0gMDtcclxuICAgIHN1bV90ID0gMDtcclxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcclxuICAgIHJlbmRlcl90YXJnZXQ6IFJlbmRlclRhcmdldDtcclxuICAgIHRleHR1cmU6IFRleHR1cmUyRDtcclxuICAgIHBlZWtfc2NyZWVuX3BvcyA9IG5ldyBWZWN0b3IyRCg0NSwgNjApO1xyXG4gICAga2V5Ym9yZF9ldmVudDogS2V5Ym9hcmRFdmVudCB8IG51bGw7XHJcbiAgICBrZXlib3JkX3VzZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFJhc3Rlcml6ZXIuY29sb3JfYnVmZmVyID0gbmV3IEJ1ZmZlcjJEPFJHQkE+KHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuICAgICAgICBSYXN0ZXJpemVyLnpfYnVmZmVyID0gbmV3IEJ1ZmZlcjJEPG51bWJlcj4odGhpcy5zY3JlZW5XaWR0aCwgdGhpcy5zY3JlZW5IZWlnaHQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyX3RhcmdldCA9IG5ldyBSZW5kZXJUYXJnZXQodGhpcy5zY3JlZW5XaWR0aCwgdGhpcy5zY3JlZW5IZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyDkuI3og73lsI3lkIwx5YCLY2FudmFz5Y+W5LiN5ZCM55qEY29udGV4dFxyXG4gICAgICAgIHRoaXMuY3R4ID0gQ2F2bmFzSGVscGVyLnNldF9jYW52YXMoJ2NhbnZhc19saW5lJywgdGhpcy5zY3JlZW5XaWR0aCwgdGhpcy5zY3JlZW5IZWlnaHQpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgQ2F2bmFzSGVscGVyLnNldF9jYW52YXMoJ2NhbnZhcycsIHRoaXMuc2NyZWVuV2lkdGgsIHRoaXMuc2NyZWVuSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgQm94KCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKG5ldyBWZWN0b3IoMCwgNTAsIC0yMDApLCBuZXcgVmVjdG9yKDAsIDAsIDApLCA2MCwgdGhpcy5zY3JlZW5XaWR0aCwgdGhpcy5zY3JlZW5IZWlnaHQsIDUsIDUwMCk7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCgndGV4dHVyZS9Db2xsYWdlIDIwMjEtMTEtMTMgMTRfMTdfNTQuanBnJyk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCgndGV4dHVyZS90aGluX2lzX2dvb2RfNTEyeDUxMi5qcGcnKTtcclxuICAgICAgICB0aGlzLmtleWJvcmRfZXZlbnQgPSBudWxsO1xyXG5cclxuICAgICAgICB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl90aW1lb3V0Jykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgSEhlbHBlci4kKCdidG5fcmVzdW1lJykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl90b2dnbGVfZHJhd2luZ19tb2RlJykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIudXNlX3NvbGlkX2NvbG9yID0gIVJhc3Rlcml6ZXIudXNlX3NvbGlkX2NvbG9yO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgSEhlbHBlci4kKCdidG5fdG9nZ2xlX25kY19jbGFtcF9lZmZlY3QnKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgUmFzdGVyaXplci5uZGNfY2xhbXBfZWZmZWN0ID0gIVJhc3Rlcml6ZXIubmRjX2NsYW1wX2VmZmVjdDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIEhIZWxwZXIuJCgnYnRuX3NldF9wZWVrX3Bvc2l0aW9uJykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gTnVtYmVyKEhIZWxwZXIuJCgndGV4dF9zX3gnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE51bWJlcihISGVscGVyLiQoJ3RleHRfc195JykudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZWVrX3NjcmVlbl9wb3MueCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlZWtfc2NyZWVuX3Bvcy55ID0geTtcclxuICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIuc2V0X3BlZWtfc2NyZWVuX3Bvcyh0aGlzLnBlZWtfc2NyZWVuX3Bvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCwgeSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBISGVscGVyLiQoJ2J0bl9wcmludF9wZWVrX3Bvc2l0aW9uJykub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFJhc3Rlcml6ZXIucHJpbnRfcGVla19wb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gdGhpcy5rZXlfZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5dXAgPSB0aGlzLmtleV91cC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZHJhd1NjZW5lID0gdGhpcy5kcmF3U2NlbmUuYmluZCh0aGlzKTtcclxuICAgICAgICBSYXN0ZXJpemVyLnNldF9wZWVrX3NjcmVlbl9wb3ModGhpcy5wZWVrX3NjcmVlbl9wb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc3VtX3QgPSAwO1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLmxhc3RfdCA9IGQuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMudGhhbmRsZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3U2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5sYXN0X3QgPSBkLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnRoYW5kbGUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhd1NjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRoYW5kbGUpO1xyXG4gICAgICAgIHRoaXMudGhhbmRsZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1NjZW5lKHRpbWVzdGFtcDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBsZXQgdCA9IGQuZ2V0VGltZSgpO1xyXG4gICAgICAgIGxldCBkaWZmID0gdCAtIHRoaXMubGFzdF90O1xyXG4gICAgICAgIHRoaXMubGFzdF90ID0gdDtcclxuICAgICAgICB0aGlzLnN1bV90ID0gdGhpcy5zdW1fdCArIGRpZmY7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBkaWZmLnRvU3RyaW5nKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NfaW5wdXQoZGlmZik7XHJcblxyXG4gICAgICAgIC8vIOa4heepulxyXG4gICAgICAgIGlmICh0aGlzLmN0eCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zY3JlZW5XaWR0aCwgdGhpcy5zY3JlZW5IZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE4MCwzMCwxNSwwLjEpXCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLnNjcmVlbldpZHRoLCB0aGlzLnNjcmVlbkhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAvLyDnlatwZWVrIHBvc1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LDI1NSwwLDEpXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucGVla19zY3JlZW5fcG9zLngsIHRoaXMucGVla19zY3JlZW5fcG9zLnksIDEsIDEwKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5wZWVrX3NjcmVlbl9wb3MueCwgdGhpcy5wZWVrX3NjcmVlbl9wb3MueSwgMTAsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmFzdGVyaXplci5jbGVhcihSR0JBLmJsYWNrLCAxKTtcclxuXHJcbiAgICAgICAgLy/nlavnq4vmlrnpq5RcclxuICAgICAgICBsZXQgb2Zmc2V0TWF0cml4ID0gVHJhbnNmb3JtLm9mZnNldCgwLCAwLCAwKTtcclxuICAgICAgICBsZXQgbm93RGVncmVlID0gdGhpcy5zdW1fdCAvIDEwMDAgKiAxNSAlIDM2MDtcclxuICAgICAgICAvLyBsZXQgbm93RGVncmVlID0gMDtcclxuXHJcbiAgICAgICAgbGV0IHJvdGF0ZU1hdHJpeCA9IFRyYW5zZm9ybS5yb3RhdGVCeVkobm93RGVncmVlKTtcclxuICAgICAgICAvLyBsZXQgcm90YXRlTWF0cml4ID0gVHJhbnNmb3JtLnJvdGF0ZUJ5WSgzMzYuNTU0OTk5OTk5OTk5OTUpO1xyXG4gICAgICAgIC8vIGxldCByb3RhdGVNYXRyaXggPSBUcmFuc2Zvcm0ucm90YXRlQnlZKDQ1KTtcclxuICAgICAgICBsZXQgY29tYmluZU1hdHJpeCA9IFRyYW5zZm9ybS50cmFuc2Zvcm1UcmFuc2Zvcm0ob2Zmc2V0TWF0cml4LCByb3RhdGVNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuYm94LnJhc3Rlcml6ZSh0aGlzLmNhbWVyYSwgY29tYmluZU1hdHJpeCwgdGhpcy50ZXh0dXJlKTtcclxuICAgICAgICBpZiAodGhpcy5jdHgpXHJcbiAgICAgICAgICAgIHRoaXMuYm94LmRyYXdfbGluZSh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIG9mZnNldE1hdHJpeCA9IFRyYW5zZm9ybS5vZmZzZXQoMCwgMCwgMTUwKTtcclxuICAgICAgICByb3RhdGVNYXRyaXggPSBUcmFuc2Zvcm0ucm90YXRlQnlZKG5vd0RlZ3JlZSk7XHJcbiAgICAgICAgY29tYmluZU1hdHJpeCA9IFRyYW5zZm9ybS50cmFuc2Zvcm1UcmFuc2Zvcm0ocm90YXRlTWF0cml4LCBvZmZzZXRNYXRyaXgpO1xyXG4gICAgICAgIHRoaXMuYm94LnJhc3Rlcml6ZSh0aGlzLmNhbWVyYSwgY29tYmluZU1hdHJpeCwgdGhpcy50ZXh0dXJlKTtcclxuICAgICAgICBpZiAodGhpcy5jdHgpXHJcbiAgICAgICAgICAgIHRoaXMuYm94LmRyYXdfbGluZSh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgIC8vIOmhr+ekuuWIsHJlbmRlciB0YXJnZXRcclxuICAgICAgICBSYXN0ZXJpemVyLnNob3codGhpcy5yZW5kZXJfdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy50aGFuZGxlID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdTY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc19pbnB1dChkZWx0YV90aW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5Ym9yZF91c2UpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IEtlcE1hcCA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3OiA4NyxcclxuICAgICAgICAgICAgcjogODIsXHJcblxyXG4gICAgICAgICAgICBlOiA2OSxcclxuICAgICAgICAgICAgZDogNjgsXHJcbiAgICAgICAgICAgIHM6IDgzLFxyXG4gICAgICAgICAgICBmOiA3MCxcclxuXHJcbiAgICAgICAgICAgIGFfdXA6IDM4LFxyXG4gICAgICAgICAgICBhX2Rvd246IDQwLFxyXG4gICAgICAgICAgICBhX2xlZnQ6IDM3LFxyXG4gICAgICAgICAgICBhX3JpZ2h0OiAzOVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBtb3ZlUyA9IDUwICogZGVsdGFfdGltZSAvIDEwMDA7XHJcbiAgICAgICAgbGV0IHJvdGF0ZVMgPSAwLjEgKiBkZWx0YV90aW1lIC8gMTAwMDtcclxuICAgICAgICBpZiAoIXRoaXMua2V5Ym9yZF9ldmVudClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5rZXlib3JkX2V2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAudzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVFeWUobW92ZVMsIHRoaXMuY2FtZXJhLnpfYXhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAucjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVFeWUoLW1vdmVTLCB0aGlzLmNhbWVyYS56X2F4aXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5lOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUV5ZShtb3ZlUywgdGhpcy5jYW1lcmEueV9heGlzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEubW92ZUV5ZSgtbW92ZVMsIHRoaXMuY2FtZXJhLnlfYXhpcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuczpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhLm1vdmVFeWUoLW1vdmVTLCB0aGlzLmNhbWVyYS54X2F4aXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmY6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5tb3ZlRXllKG1vdmVTLCB0aGlzLmNhbWVyYS54X2F4aXMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5hX3VwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuYWRkUGl0Y2gocm90YXRlUyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBLZXBNYXAuYV9kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuYWRkUGl0Y2goLXJvdGF0ZVMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEtlcE1hcC5hX2xlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5hZGRZYXcoLXJvdGF0ZVMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgS2VwTWFwLmFfcmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5hZGRZYXcocm90YXRlUyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5X2Rvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmtleWJvcmRfZXZlbnQgPSBldmVudDtcclxuICAgICAgICB0aGlzLmtleWJvcmRfdXNlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlfdXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmtleWJvcmRfdXNlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBSYXN0ZXJpemVyQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9