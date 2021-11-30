import Box from "./Math/Box3D";
import Camera from "./Math/Camera";
import Transform from "./Math/Transform";
import Vector from "./Math/Vector";
import RenderTarget from './Math/RenderTarget';
import Buffer2D from "./Math/Buffer2D";
import RGBA from "./Math/RGBA";

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
    color_buffer: Buffer2D<RGBA>;
    z_buffer: Buffer2D<number>;

    constructor() {

        window.onload = () => {
            this.init();
        };
        document.onkeydown = this.keyProc.bind(this);
    }

    init() {
        this.color_buffer = new Buffer2D<RGBA>(this.screenWidth, this.screenHeight);
        this.render_target = new RenderTarget(this.screenWidth, this.screenHeight);

        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.style.width = this.screenWidth + 'px';
        canvas.style.height = this.screenHeight + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        this.ctx = canvas.getContext('2d');

        this.box = new Box();
        this.camera = new Camera(new Vector(0, 50, -200), new Vector(0, 0, 0), 60, this.screenWidth, this.screenHeight, 100, 500);
        this.start();
    }

    start() {
        this.stop();
        this.sum_t = 0;
        let d = new Date();
        this.last_t = d.getTime();
        this.thandle = window.setInterval(() => { this.drawScene(); }, 16);
    }

    resume() {
        let d = new Date();
        this.last_t = d.getTime();
        this.thandle = window.setInterval(() => { this.drawScene(); }, 16);
    }

    stop() {
        window.clearInterval(this.thandle);
        this.thandle = null;
    }

    drawScene() {
        let d = new Date();
        let t = d.getTime();
        let diff = t - this.last_t;
        this.last_t = t;
        this.sum_t = this.sum_t + diff;

        // 清空
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(180,30,15,0.1)";
        this.ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

        //畫立方體
        var offsetMatrix = Transform.offset(0, 0, 0);
        var nowDegree = this.sum_t / 1000 * 15 % 360;
        // var nowDegree = 0;

        // var rotateMatrix = Transform.rotateByY(nowDegree);
        var rotateMatrix = Transform.rotateByY(45);
        var combineMatrix = Transform.transformTransform(offsetMatrix, rotateMatrix);
        this.box.update(this.camera, combineMatrix);
        this.box.draw(this.ctx);

        // var offsetMatrix = Transform.offset(0, 0, 150);
        // var rotateMatrix = Transform.rotateByY(nowDegree);
        // combineMatrix = Transform.transformTransform(rotateMatrix, offsetMatrix);
        // this.box.update(this.camera, combineMatrix);
        // this.box.draw(this.ctx);
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

        var moveS = 1;
        var rotateS = 0.1;
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