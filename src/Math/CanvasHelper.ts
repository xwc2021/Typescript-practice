export default class CavnasHelper {
    static set_canvas(id: string, w: number, h: number) {
        let canvas = document.getElementById(id) as HTMLCanvasElement;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        return canvas;
    }
}