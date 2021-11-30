export default class Vector2D {
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