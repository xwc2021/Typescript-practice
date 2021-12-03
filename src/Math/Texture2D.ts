import Buffer2D from "./Buffer2D";
import CavnasHelper from "./CanvasHelper";
import RGBA from "./RGBA";
import Sampler from "./Sampler";
import Vector2D from "./Vector2D";

export default class Texture2D {
    begin_load(src: string) {
        this.img = new Image();
        this.img.src = src; //
        this.img.onload = this.load_texture_buffer;
    }

    load_texture_buffer() {
        let w = this.img.width;
        let h = this.img.height;

        let canvas_texture = CavnasHelper.set_canvas('canvas_texture', w, h);
        let ctx = CavnasHelper.get_context_by_canvas(canvas_texture);
        ctx.drawImage(this.img, 0, 0);

        // 改成1次讀完全部
        let data = ctx.getImageData(0, 0, w, h).data;
        this.buffer = new Buffer2D<RGBA>(w, h);
        for (let y = 0; y < h; ++y) {
            for (let x = 0; x < w; ++x) {
                let seke = 4 * (w * y + x);
                this.buffer.set(x, y, new RGBA(data[seke] / 255, data[seke + 1] / 255, data[seke + 2] / 255, data[seke + 3] / 255));

                // if (y >= 7 && y <= 8 && x >= 7 && x <= 8) {
                //     console.log(data);
                // }
            }
        }
    };

    img: HTMLImageElement;
    buffer: Buffer2D<RGBA>;
    constructor(src: string) {
        this.load_texture_buffer = this.load_texture_buffer.bind(this);
        this.begin_load(src);
    }

    get(uv: Vector2D) {
        if (!this.buffer)
            return { rectUV: null, NW: null, NE: null, SW: null, SE: null, color: RGBA.black };
        return Sampler.texture2D(uv, this.buffer);
    }
}