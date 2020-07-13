export default class App {

    w: number = 512;
    h: number = 512;
    backbuffer: OffscreenCanvas = null;

    constructor() {
        this.backbuffer = new OffscreenCanvas(this.w, this.h);
        let context_2d = this.backbuffer.getContext('2d');

        // get source data array
        let backbuffer_data = context_2d.getImageData(0, 0, this.w, this.h);
        let backbuffer_data_array = backbuffer_data.data;

        // set array value
        for (let y = 0; y < this.h; ++y) {
            for (let x = 0; x < this.w; ++x) {
                // rgba each color is 4byte
                let index = 4 * (x + y * this.w);

                // swap y direction
                let X = x;
                let Y = this.h - y;

                // between 0~1
                let r = (X / this.w);
                let g = (Y / this.h);
                let b = 0.25;;

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

