import Vector from "./Vector";

export default class RGBA {
    static yellow = new RGBA(1, 1, 0, 1);
    static black = new RGBA(0, 0, 0, 1);

    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}