import Box from "./Math/Box3D";
import Camera from "./Math/Camera";
import Transform from "./Math/Transform";
import Vector from "./Math/Vector";
import RenderTarget from './Math/RenderTarget';
import Buffer2D from "./Math/Buffer2D";
import RGBA from "./Math/RGBA";
import Rasterizer from "./Math/Rasterizer";
import CavnasHelper from "./Math/CanvasHelper";
import Texture2D from "./Math/Texture2D";

export default class RasterizerApp {

    cameraIndex_view = 1;
    cameraIndex_control = 0;
    camera: Camera = null;
    thandle: number;

    screenWidth = 800;
    screenHeight = 600;
    box: Box = null;

    last_t: number;
    sum_t: number;
    ctx: CanvasRenderingContext2D;
    render_target: RenderTarget;
    texture: Texture2D;

    constructor() {
        window.onload = () => {
            this.init();

            document.getElementById('btn_timeout').onclick = () => {
                this.stop();
            };

            document.getElementById('btn_resume').onclick = () => {
                this.resume();
            };
        };
        document.onkeydown = this.keyProc.bind(this);
        this.drawScene = this.drawScene.bind(this);
    }

    init() {
        Rasterizer.color_buffer = new Buffer2D<RGBA>(this.screenWidth, this.screenHeight);
        Rasterizer.z_buffer = new Buffer2D<number>(this.screenWidth, this.screenHeight);
        this.render_target = new RenderTarget(this.screenWidth, this.screenHeight);

        // 不能對同1個canvas取不同的context
        this.ctx = CavnasHelper.set_canvas('canvas_line', this.screenWidth, this.screenHeight).getContext('2d');
        CavnasHelper.set_canvas('canvas', this.screenWidth, this.screenHeight);

        this.box = new Box();
        this.camera = new Camera(new Vector(0, 50, -200), new Vector(0, 0, 0), 60, this.screenWidth, this.screenHeight, 1, 500);
        this.texture = new Texture2D('/texture/smoking_2.jpg');
        this.start();
    }

    start() {
        this.stop();
        this.sum_t = 0;
        let d = new Date();
        this.last_t = d.getTime();
        this.thandle = window.requestAnimationFrame(this.drawScene);
    }

    resume() {
        let d = new Date();
        this.last_t = d.getTime();
        this.thandle = window.requestAnimationFrame(this.drawScene);
    }

    stop() {
        window.cancelAnimationFrame(this.thandle);
        this.thandle = null;
    }

    drawScene(timestamp: number) {

        let d = new Date();
        let t = d.getTime();
        let diff = t - this.last_t;
        this.last_t = t;
        this.sum_t = this.sum_t + diff;
        document.title = diff.toString();

        // 清空
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(180,30,15,0.1)";
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

        Rasterizer.clear(RGBA.black, 1);

        //畫立方體
        let offsetMatrix = Transform.offset(0, 0, 0);
        let nowDegree = this.sum_t / 1000 * 15 % 360;
        // let nowDegree = 0;

        let rotateMatrix = Transform.rotateByY(nowDegree);
        // let rotateMatrix = Transform.rotateByY(45);
        let combineMatrix = Transform.transformTransform(offsetMatrix, rotateMatrix);
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        this.box.draw_line(this.ctx);

        offsetMatrix = Transform.offset(0, 0, 150);
        rotateMatrix = Transform.rotateByY(nowDegree);
        combineMatrix = Transform.transformTransform(rotateMatrix, offsetMatrix);
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        this.box.draw_line(this.ctx);

        // 顯示到render target
        Rasterizer.show(this.render_target);

        this.thandle = window.requestAnimationFrame(this.drawScene);
    }

    keyProc(event: KeyboardEvent) {
        let KepMap =
        {
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

        let moveS = 1;
        let rotateS = 0.1;
        switch (event.keyCode) {
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
    }
}

new RasterizerApp();