import RGBA from "./RGBA";
import Vector from "./Vector";
export default class RenderTarget {
    w: number = 320;
    h: number = 240;
    backbuffer: OffscreenCanvas = null;
    constructor(w: number = 320, h: number = 240) {
        this.w = w;
        this.h = h;
        this.backbuffer = new OffscreenCanvas(this.w, this.h);
    }

    render_pixel(func: (x_weight: number, y_weight: number, ratio: number) => Vector) {

        let context_2d = this.backbuffer.getContext('2d');

        // get source data array
        let backbuffer_data = context_2d.getImageData(0, 0, this.w, this.h);
        let backbuffer_data_array = backbuffer_data.data;

        let ratio = this.w / this.h;

        // set array value
        for (let y = 0; y < this.h; ++y) {
            for (let x = 0; x < this.w; ++x) {
                // rgba each color is 4byte
                let index = 4 * (x + y * this.w);

                // http://www.intro-to-dxr.cwyman.org/presentations/IntroDXR_RaytracingShaders.pdf
                // page 78
                // 需要偏移半個像素的長度，才會落在像素的中間(不過肉眼看不太出差別就是了)
                // remap to 0~1
                let X = ((x + 0.5) / this.w);
                let Y = ((y + 0.5) / this.h);

                // change y direction
                Y = 1 - Y;

                // remap to -1~1
                let x_weight = X * 2 - 1;
                let y_weight = Y * 2 - 1;

                let color = func(x_weight, y_weight, ratio);
                let r = color.x;
                let g = color.y;
                let b = color.z;

                // gamma校正
                let gamma = 1 / 2.1;
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
    }

    set_pixel(func: (x: number, y: number) => RGBA) {

        let context_2d = this.backbuffer.getContext('2d');

        // get source data array
        let backbuffer_data = context_2d.getImageData(0, 0, this.w, this.h);
        let backbuffer_data_array = backbuffer_data.data;

        let ratio = this.w / this.h;

        // set array value
        for (let y = 0; y < this.h; ++y) {
            for (let x = 0; x < this.w; ++x) {
                // rgba each color is 4byte
                let index = 4 * (x + y * this.w);

                let color = func(x, y);
                let r = color.r;
                let g = color.g;
                let b = color.b;

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
    }

    show_buffer(canvas_id: string) {
        // 設定buffer的大小和css style的大小一樣
        // https://openhome.cc/Gossip/WebGL/Canvas.html
        let canvas = document.getElementById(canvas_id) as HTMLCanvasElement;
        canvas.style.width = this.w + 'px';
        canvas.style.height = this.h + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // copy backbuffer to canvas
        let context_bitmap_render = canvas.getContext("bitmaprenderer");
        context_bitmap_render.transferFromImageBitmap(this.backbuffer.transferToImageBitmap());
    }
}