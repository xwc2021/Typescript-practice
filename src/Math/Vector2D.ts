export default class Vector2D {

    static uv_to_buffer_space(uv: Vector2D) {
        return new Vector2D(uv.x, 1 - uv.y);
    }

    static buffer_to_uv_space(uv: Vector2D) {
        return new Vector2D(uv.x, 1 - uv.y);
    }

    static add(A: Vector2D, B: Vector2D) {
        let temp = new Vector2D(B.x + A.x, B.y + A.y);
        return temp
    }

    static minus(A: Vector2D, B: Vector2D) {
        let temp = new Vector2D(A.x - B.x, A.y - B.y);
        return temp
    }

    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

    }

    plus(p: Vector2D) {
        return new Vector2D(this.x + p.x, this.y + p.y);
    }

    multiply = function (s: number) {
        return new Vector2D(this.x * s, this.y * s);
    }

    toString = function () {
        return "( " + this.x + " , " + this.y + " )";
    }
}