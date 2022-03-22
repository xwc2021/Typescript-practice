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
import Vector2D from "./Math/Vector2D";
import HHelper from "./Math/HHelper";

export default class RasterizerApp {

    cameraIndex_view = 1;
    cameraIndex_control = 0;
    camera: Camera;
    thandle = 0;

    screenWidth = 512;
    screenHeight = 512;

    box: Box;

    skip_diff = false;
    pre_t = 0;
    sum_t = 0;
    ctx: CanvasRenderingContext2D | null;
    render_target: RenderTarget;
    texture: Texture2D;
    peek_screen_pos = new Vector2D(45, 60);
    keybord_event?: KeyboardEvent;

    constructor() {
        Rasterizer.color_buffer = new Buffer2D<RGBA>(this.screenWidth, this.screenHeight);
        Rasterizer.z_buffer = new Buffer2D<number>(this.screenWidth, this.screenHeight);
        this.render_target = new RenderTarget(this.screenWidth, this.screenHeight);

        // 不能對同1個canvas取不同的context
        this.ctx = CavnasHelper.set_canvas('canvas_line', this.screenWidth, this.screenHeight).getContext('2d');
        CavnasHelper.set_canvas('canvas', this.screenWidth, this.screenHeight);

        this.box = new Box();
        this.camera = new Camera(new Vector(0, 50, -200), new Vector(0, 0, 0), 60, this.screenWidth, this.screenHeight, 5, 500);
        // this.texture = new Texture2D('texture/Collage 2021-11-13 14_17_54.jpg');
        this.texture = new Texture2D('texture/thin_is_good_512x512.jpg');

        window.onload = () => {
            this.start();

            HHelper.$('btn_timeout').onclick = () => {
                this.stop();
            };

            HHelper.$('btn_resume').onclick = () => {
                this.resume();
            };

            HHelper.$('btn_toggle_drawing_mode').onclick = () => {
                Rasterizer.use_solid_color = !Rasterizer.use_solid_color;
            };

            HHelper.$('btn_toggle_ndc_clamp_effect').onclick = () => {
                Rasterizer.ndc_clamp_effect = !Rasterizer.ndc_clamp_effect;
            };

            HHelper.$('btn_set_peek_position').onclick = () => {
                let x = Number(HHelper.$('text_s_x').value);
                let y = Number(HHelper.$('text_s_y').value);
                this.peek_screen_pos.x = x;
                this.peek_screen_pos.y = y;
                Rasterizer.set_peek_screen_pos(this.peek_screen_pos);

                console.log(x, y);
            };

            HHelper.$('btn_print_peek_position').onclick = () => {
                Rasterizer.print_peek_position();
            };
        };
        document.onkeydown = this.key_down.bind(this);
        document.onkeyup = this.key_up.bind(this);
        this.drawScene = this.drawScene.bind(this);
        Rasterizer.set_peek_screen_pos(this.peek_screen_pos);
    }

    start() {
        this.sum_t = 0;
        this.pre_t = 0;
        this.thandle = window.requestAnimationFrame(this.drawScene);
    }

    resume() {
        if (this.thandle)
            return;

        this.skip_diff = true;
        this.thandle = window.requestAnimationFrame(this.drawScene);
    }

    stop() {
        window.cancelAnimationFrame(this.thandle);
        this.thandle = 0;
    }

    drawScene(accumulatedTime: number) {

        let diff = accumulatedTime - this.pre_t;
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
        Rasterizer.clear(RGBA.black, 1);

        // 移動立方體
        let offsetMatrix = Transform.offset(0, 0, 0);
        let nowDegree = this.sum_t / 1000 * 15 % 360;

        let rotateMatrix = Transform.rotateByY(nowDegree);
        let combineMatrix = Transform.transformTransform(offsetMatrix, rotateMatrix);
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        if (this.ctx)
            this.box.draw_line(this.ctx);

        offsetMatrix = Transform.offset(0, 0, 150);
        rotateMatrix = Transform.rotateByY(nowDegree);
        combineMatrix = Transform.transformTransform(rotateMatrix, offsetMatrix);

        // 畫立方體
        this.box.rasterize(this.camera, combineMatrix, this.texture);
        if (this.ctx)
            this.box.draw_line(this.ctx);

        // 顯示到render target
        Rasterizer.show(this.render_target);

        this.thandle = window.requestAnimationFrame(this.drawScene);
    }

    process_input(delta_time: number) {

        if (!this.keybord_event)
            return;

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

        let moveS = 50 * delta_time / 1000;
        let rotateS = 0.1 * delta_time / 1000;

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
    }

    key_down(event: KeyboardEvent) {
        this.keybord_event = event;
    }

    key_up(event: KeyboardEvent) {
        this.keybord_event = undefined;
    }
}

new RasterizerApp();