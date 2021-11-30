import RGBA from "./RGBA";

export default class CavnasHelper {
    static set_canvas(id: string, w: number, h: number) {
        let canvas = document.getElementById(id) as HTMLCanvasElement;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        return canvas;
    }
    static get_context(id: string) {
        let canvas = document.getElementById(id) as HTMLCanvasElement;
        return canvas.getContext('2d');
    }

    static convert(c: RGBA) {
        return 'rgba(' + Math.floor(255 * (c.r)) + ',' + Math.floor(255 * (c.g)) + ',' + Math.floor(255 * (c.b)) + ',1)';
    }
}