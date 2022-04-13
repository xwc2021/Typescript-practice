import {FFT,creat_buffer,shift,visualize}  from './FFT/Tools'
export default class FFTApp {
    constructor(){
        window.onload = () => {
            let img = document.getElementsByTagName("img")[0];
            let w = img.width;
            let h = img.height;
        
            // fill source
            let source =document.getElementById("source") as HTMLCanvasElement;
            source.width = w;
            source.height = h;
            let source_ctx = source.getContext("2d");
            if(!source_ctx)
                return;
            source_ctx.drawImage(img, 0, 0, w, h);
        
            // hold source data array
            let source_data = source_ctx.getImageData(0, 0, w, h);
            let source_data_array = source_data.data;
        
            // hold canvas data array
            let canvas =document.getElementById("canvas") as HTMLCanvasElement;
            canvas.width = w;
            canvas.height = h;
            let draw_ctx = canvas.getContext("2d");
            if(!draw_ctx)
                return;
            let canvas_data = draw_ctx.getImageData(0, 0, w, h);
            let canvas_data_array = canvas_data.data;
        
            // init buffer
            let buffer1 = creat_buffer(w, h);
            let buffer2 = creat_buffer(w, h);
        
            // https://stackoverflow.com/questions/46863683/speed-up-canvass-getimagedata
            // copy from source to buffer1
            for (let y = 0; y < h; ++y) {
                for (let x = 0; x < w; ++x) {
                    let index = 4 * (x + y * w);
                    let int_value = source_data_array[index];
                    let f_value = int_value / 255; // to 0~1
                    buffer1[x][y].x = f_value;
                }
            }
        
            // remove gamma
            // [buffer1, buffer2] = pow(buffer1, buffer2, h, 2.2);
        
            // FFT
            [buffer1, buffer2] = FFT(buffer1, buffer2, h);
        
            [buffer1, buffer2] = shift(buffer1, buffer2, h);
            // [buffer1, buffer2] = clear_center(buffer1, buffer2, h);
            // [buffer1, buffer2] = shift(buffer1, buffer2, h);
        
            [buffer1, buffer2] = visualize(buffer1, buffer2, h);
        
            // IFFT
            // [buffer1, buffer2] = IFFT(buffer1, buffer2, h);
        
            // gamma
            // [buffer1, buffer2] = pow(buffer1, buffer2, h, 1 / 2.2);
        
            console.log(buffer1);
            // console.log(buffer2);
        
        
            // copy from buffer to canvas
            for (let y = 0; y < h; ++y) {
                for (let x = 0; x < w; ++x) {
                    let index = 4 * (x + y * w);
        
                    let f_value = buffer1[x][y].x;
                    let int_value = Math.round(255 * f_value); // to 0~255
        
                    canvas_data_array[index++] = int_value;
                    canvas_data_array[index++] = int_value;
                    canvas_data_array[index++] = int_value;
                    canvas_data_array[index] = 255;
                }
            }
            draw_ctx.putImageData(canvas_data, 0, 0);
            console.log("finish");
        
            // test add_or_minus()
            // test_add_or_minus();
        
            // test code
            // let c = new Complex(1, 2);
            // let c2 = new Complex(2, 4);
            // let c3 = new Complex(0, 0);
            // c.multiply(c2, c3);
            // console.log(c3);
        
            // test W
            // let N = 16;
            // for (let i = 0; i < N + 1; ++i) {
            //     console.log(new W(i, N));
            // }
        
            // let weights = build_weights(16, 1,false);
            // console.log(weights);
        };
    }
}
new FFTApp();