import Vector from "./Vector";
import { lerp } from "./Tool";

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

    static lerp(A: RGBA, B: RGBA, k: number) {
        return new RGBA(
            lerp(A.r, B.r, k),
            lerp(A.g, B.g, k),
            lerp(A.b, B.b, k),
            1);
    }

    add = function (A: RGBA) {
        return new RGBA(this.r + A.r, this.g + A.g, this.b + A.b, 1);
    }


    multiply(s: number) {
        return new RGBA(this.r * s, this.g * s, this.b * s, 1);
    }

    toString() {
        return "( " + this.r + " , " + this.g + " , " + this.b + " )";
    }
}