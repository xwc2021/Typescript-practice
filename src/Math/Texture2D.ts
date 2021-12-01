import Buffer2D from "./Buffer2D";
import CavnasHelper from "./CanvasHelper";
import RGBA from "./RGBA";
import Sampler from "./Sampler";
import Vector2D from "./Vector2D";

export default class Texture2D {
    static load_help_canvas = 'load_help_canvas';
    static load_help_canvas_counter = 0;
    static get_canvas_name() {
        return Texture2D.load_help_canvas + Texture2D.load_help_canvas_counter++;
    }

    begin_load(src: string) {
        this.img = new Image();
        this.img.src = src; // '/texture/smoking_2.jpg'
        this.img.onload = this.load_texture_buffer;
    }

    load_texture_buffer() {
        let name = Texture2D.get_canvas_name();
        console.log('load', name, this.img.src);
        var canvas = document.createElement(name) as HTMLCanvasElement;
        let w = this.img.width;
        let h = this.img.height;

        CavnasHelper.set_canvas_element(canvas, w, h);
        let ctx = CavnasHelper.get_context_by_canvas(canvas);
        ctx.drawImage(this.img, 0, 0);

        this.buffer = new Buffer2D<RGBA>(w, h);
        for (let y = 0; y < h; ++y) {
            for (let x = 0; x < w; ++x) {
                let data = ctx.getImageData(x, y, 1, 1).data;
                this.buffer.set(x, y, new RGBA(data[0] / 255, data[1] / 255, data[2] / 255, data[3] / 255));
            }
        }
        this.load_ok = true;
    };

    load_ok = false;
    img: HTMLImageElement;
    buffer: Buffer2D<RGBA>;
    constructor(src: string) {
        this.load_texture_buffer = this.load_texture_buffer.bind(this);
        this.begin_load(src);
    }

    get(uv: Vector2D) {
        if (!this.buffer)
            return RGBA.black;
        return Sampler.texture2D(uv, this.buffer);
    }
}