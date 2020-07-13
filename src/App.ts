import Vector from './Math/Vector'
import Camera from './Math/Camera'
import Ray from './Math/Ray'
import Rect from './Math/Rect';
import Plane from './Math/Plane';

export default class App {

    w: number = 320;
    h: number = 240;
    backbuffer: OffscreenCanvas = null;

    constructor() {
        this.backbuffer = new OffscreenCanvas(this.w, this.h);
        let context_2d = this.backbuffer.getContext('2d');

        // get source data array
        let backbuffer_data = context_2d.getImageData(0, 0, this.w, this.h);
        let backbuffer_data_array = backbuffer_data.data;

        let ratio = this.w / this.h;

        let camera = new Camera(new Vector(0, 10, -10), Vector.zero, 60);
        let rect = new Rect(new Plane(Vector.zero, new Vector(0, 0, -1)), 4, 2)

        // set array value
        for (let y = 0; y < this.h; ++y) {
            for (let x = 0; x < this.w; ++x) {
                // rgba each color is 4byte
                let index = 4 * (x + y * this.w);

                // remap to 0~1
                let X = (x / this.w);
                let Y = (y / this.h);

                // change y direction
                Y = 1 - Y;

                // remap to -1~1
                let x_weight = X * 2 - 1;
                let y_weight = Y * 2 - 1;

                let ray = camera.create_ray(x_weight, y_weight, ratio);
                let result = rect.hit(ray);

                // let r = X;
                // let g = Y;
                // let b = 0;

                let r = result.is_hit ? 1 : 0;
                let g = result.is_hit ? 1 : 0;
                let b = 0;

                backbuffer_data_array[index++] = Math.round(r * 255);
                backbuffer_data_array[index++] = Math.round(g * 255);
                backbuffer_data_array[index++] = Math.round(b * 255);
                backbuffer_data_array[index] = 255;
            }
        }
        context_2d.putImageData(backbuffer_data, 0, 0);


        // 設定buffer的大小和css style的大小一樣
        // https://openhome.cc/Gossip/WebGL/Canvas.html
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.style.width = this.w + 'px';
        canvas.style.height = this.h + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // copy backbuffer to canvas
        let context_bitmap_render = canvas.getContext("bitmaprenderer");
        context_bitmap_render.transferFromImageBitmap(this.backbuffer.transferToImageBitmap());
    }
}

