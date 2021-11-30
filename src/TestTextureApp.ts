import Buffer2D from "./Math/Buffer2D";
import CavnasHelper from "./Math/CanvasHelper";
import RGBA from "./Math/RGBA";
import Sampler from "./Math/Sampler";
import Vector2D from "./Math/Vector2D";
import { MathHelper, DrawHelper } from "./Math/Tool";


export default class TestTextureApp {

    canvas_width = 600;
    canvas_height = 600;

    row_count = 20;
    colume_count = 20;

    rect_w: number;
    rect_h: number;


    buffer: Buffer2D<RGBA>;

    constructor() {
        window.onload = () => {
            this.init();
        };
    }

    texture2D(u: number, v: number) {
        let { rectUV, NW, NE, SW, SE, color } = Sampler.texture2D(u, v, this.colume_count, this.row_count, this.buffer);

        //畫4個鄰近點
        this.drawPointByGridIndex(NW);
        this.drawPointByGridIndex(NE);
        this.drawPointByGridIndex(SW);
        this.drawPointByGridIndex(SE);
        this.drawRect(NW);
        this.drawPointByRectUV(NW, rectUV);

        // 顯示最後的結果
        var ctx = CavnasHelper.get_context('canvas2');
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = CavnasHelper.convert(color);
        ctx.fillRect(0, 0, 30, 30);
    }

    drawUV() {
        var u = parseFloat(this.$("u").value);
        var v = parseFloat(this.$("v").value);
        this.texture2D(u, v);
    }

    reBulid2() {
        this.Render();
    }

    moveRight() {
        var u = parseFloat(this.$("u").value);

        var grid_u = 1 / this.colume_count;
        u = MathHelper.accAdd(u, grid_u);

        this.$("u").value = u.toString();
    }

    moveDown() {
        var v = parseFloat(this.$("v").value);

        var grid_v = 1 / this.row_count;
        v = MathHelper.accAdd(v, grid_v);

        this.$("v").value = v.toString();
    }

    reBulid(P: Vector2D) {
        var u = P.x / this.canvas_width;
        var v = P.y / this.canvas_height;

        this.$("u").value = u.toString();
        this.$("v").value = v.toString();

        this.Render();
    }

    reset() {
        this.rect_w = this.canvas_width / this.colume_count;
        this.rect_h = this.canvas_height / this.row_count;

        this.buffer = new Buffer2D(this.colume_count, this.row_count);

        for (var x = 0; x < this.colume_count; x++)
            for (var y = 0; y < this.row_count; y++)
                this.buffer.set(x, y, new RGBA(0, 0, 0, 1));

    }

    init() {
        this.reset();
        DrawHelper.drawStar(RGBA.yellow, this.buffer);
        this.Render();
    }

    Render() {
        this.drawBuffer();
        this.drawUV();
    }

    drawBuffer() {
        var ctx = CavnasHelper.get_context('canvas');
        ctx.clearRect(0, 0, 600, 600);

        for (var y = 0; y < this.row_count; y++) {
            for (var x = 0; x < this.colume_count; x++) {
                ctx.beginPath();
                ctx.fillStyle = CavnasHelper.convert(this.buffer.get(x, y));
                var r = 1;
                ctx.fillRect(x * this.rect_w + r, y * this.rect_h + r, this.rect_w - r, this.rect_h - r);
                ctx.stroke();
            }
        }
    }


    $(id: string) {
        return <HTMLInputElement>document.getElementById(id);
    }

    drawPointByGridIndex(P: Vector2D) {

        let ctx = CavnasHelper.get_context('canvas');
        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,0,1)';
        var r = 6;
        ctx.fillRect((P.x + 0.5) * this.rect_w - 0.5 * r, (P.y + 0.5) * this.rect_h - 0.5 * r, r, r);
        ctx.stroke();
    }

    drawRect(P: Vector2D) {
        let ctx = CavnasHelper.get_context('canvas');
        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,0,1)';
        ctx.rect((P.x + 0.5) * this.rect_w, (P.y + 0.5) * this.rect_h, this.rect_w, this.rect_h);
        ctx.stroke();
    }

    //畫出uv點
    drawPointByRectUV(P: Vector2D, rectUV: Vector2D) {
        let ctx = CavnasHelper.get_context('canvas');
        ctx.globalCompositeOperation = 'source-over';

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,255,0,1)';

        var targetP = new Vector2D((P.x + 0.5) * this.rect_w + this.rect_w * rectUV.x, (P.y + 0.5) * this.rect_h + this.rect_h * rectUV.y);
        var r = 6;
        ctx.fillRect(targetP.x - 0.5 * r, targetP.y - 0.5 * r, r, r);
        ctx.stroke();
    }
}