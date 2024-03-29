import Buffer2D from "./Math/Buffer2D";
import CavnasHelper from "./Math/CanvasHelper";
import RGBA from "./Math/RGBA";
import Sampler from "./Math/Sampler";
import Vector2D from "./Math/Vector2D";
import { MathHelper, DrawHelper } from "./Math/Tool";
import HHelper from "./Math/HHelper";

export default class TestTextureApp {

    canvas_width = 600;
    canvas_height = 600;

    row_count = 20;
    colume_count = 20;

    rect_w = this.canvas_width / this.colume_count;
    rect_h = this.canvas_height / this.row_count;
    buffer = new Buffer2D<RGBA>(this.colume_count, this.row_count);

    constructor() {
        window.onload = () => {
            this.init();

            HHelper.$('btn_reset').onclick = () => {
                this.Render();
            };

            HHelper.$('move_right').onclick = () => {
                this.moveRight();
                this.Render();
            };

            HHelper.$('move_up').onclick = () => {
                this.moveUp();
                this.Render();
            };

            HHelper.$('canvas').onclick = (event) => {
                this.reBulid(new Vector2D(event.offsetX, event.offsetY));
            };
        };
    }

    texture2D(uv: Vector2D) {
        let { rectUV, NW, NE, SW, SE, color } = Sampler.texture2D(uv, this.buffer);

        //畫4個鄰近點
        this.drawPointByGridIndex(NW);
        this.drawPointByGridIndex(NE);
        this.drawPointByGridIndex(SW);
        this.drawPointByGridIndex(SE);
        this.drawRect(NW);
        this.drawPointByRectUV(NW, rectUV);

        // 顯示最後的結果
        let ctx = CavnasHelper.get_context('canvas2');
        if (!ctx) {
            console.log('ctx get failed')
            return;
        }

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = CavnasHelper.convert(color);
        ctx.fillRect(0, 0, 30, 30);
    }

    drawUV() {
        let u = parseFloat(HHelper.$("u").value);
        let v = parseFloat(HHelper.$("v").value);
        this.texture2D(new Vector2D(u, v));
    }

    moveRight() {
        let u = parseFloat(HHelper.$("u").value);

        let grid_u = 1 / this.colume_count;
        u = MathHelper.accAdd(u, grid_u);

        HHelper.$("u").value = u.toString();
    }

    moveUp() {
        let v = parseFloat(HHelper.$("v").value);

        let grid_v = 1 / this.row_count;
        v = MathHelper.accAdd(v, grid_v);

        HHelper.$("v").value = v.toString();
    }

    reBulid(P: Vector2D) {
        let u = P.x / this.canvas_width;
        let v = P.y / this.canvas_height;
        let buffer_uv = new Vector2D(u, v);
        let uv = Sampler.buffer_to_uv_space(buffer_uv);

        HHelper.$("u").value = uv.x.toString();
        HHelper.$("v").value = uv.y.toString();

        this.Render();
    }

    reset() {

        for (let x = 0; x < this.colume_count; x++)
            for (let y = 0; y < this.row_count; y++)
                this.buffer.set(x, y, new RGBA(0, 0, 0, 1));

    }

    init() {
        this.reset();
        DrawHelper.drawStar(RGBA.golden, this.buffer);
        this.Render();
    }

    Render() {
        this.drawBuffer();
        this.drawUV();
    }

    drawBuffer() {
        let ctx = CavnasHelper.get_context('canvas');
        if (!ctx) {
            console.log('ctx get failed')
            return;
        }

        ctx.clearRect(0, 0, 600, 600);

        for (let y = 0; y < this.row_count; y++) {
            for (let x = 0; x < this.colume_count; x++) {
                ctx.beginPath();
                ctx.fillStyle = CavnasHelper.convert(this.buffer.get(x, y));
                let r = 1;
                ctx.fillRect(x * this.rect_w + r, y * this.rect_h + r, this.rect_w - r, this.rect_h - r);
                ctx.stroke();
            }
        }
    }




    drawPointByGridIndex(P: Vector2D) {

        let ctx = CavnasHelper.get_context('canvas');
        if (!ctx) {
            console.log('ctx get failed')
            return;
        }

        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,0,1)';
        let r = 6;
        ctx.fillRect((P.x + 0.5) * this.rect_w - 0.5 * r, (P.y + 0.5) * this.rect_h - 0.5 * r, r, r);
        ctx.stroke();
    }

    drawRect(P: Vector2D) {
        let ctx = CavnasHelper.get_context('canvas');
        if (!ctx) {
            console.log('ctx get failed')
            return;
        }

        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,0,1)';
        ctx.rect((P.x + 0.5) * this.rect_w, (P.y + 0.5) * this.rect_h, this.rect_w, this.rect_h);
        ctx.stroke();
    }

    //畫出uv點
    drawPointByRectUV(P: Vector2D, rectUV: Vector2D) {
        let ctx = CavnasHelper.get_context('canvas');
        if (!ctx) {
            console.log('ctx get failed')
            return;
        }

        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,255,0,1)';

        let targetP = new Vector2D((P.x + 0.5) * this.rect_w + this.rect_w * rectUV.x, (P.y + 0.5) * this.rect_h + this.rect_h * rectUV.y);
        let r = 6;
        ctx.fillRect(targetP.x - 0.5 * r, targetP.y - 0.5 * r, r, r);
        ctx.stroke();
    }
}

new TestTextureApp();