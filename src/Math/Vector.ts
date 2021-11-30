import { lerp, number_equal } from './Tool'

export default class Vector {

    static min_max(v0: Vector, v1: Vector, v2: Vector) {

        let min = new Vector(Math.min(Math.min(v0.x, v1.x), v2.x), Math.min(Math.min(v0.y, v1.y), v2.y), Math.min(Math.min(v0.z, v1.z), v2.z));
        let max = new Vector(Math.max(Math.max(v0.x, v1.x), v2.x), Math.max(Math.max(v0.y, v1.y), v2.y), Math.max(Math.max(v0.z, v1.z), v2.z));
        return { min, max };
    }

    static calculate_normal(v0: Vector, v1: Vector, v2: Vector) {
        let v01 = Vector.minus(v1, v0);
        let v02 = Vector.minus(v2, v0);
        let normal = Vector.cross(v01, v02);
        return normal.normalize();
    }

    static calculate_center(v0: Vector, v1: Vector, v2: Vector) {
        return v0.add(v1).add(v2).multiply(1 / 3);
    }

    static uv(u: number, v: number) {
        return new Vector(u, v, 0);
    }

    static up = new Vector(0, 1, 0);
    static zero = new Vector(0, 0, 0);

    static reflect(I: Vector, N: Vector) {
        let L = -2 * Vector.dot(I, N)
        return N.multiply(L).add(I);
    }

    static add(A: Vector, B: Vector) {
        let temp = new Vector(B.x + A.x, B.y + A.y, B.z + A.z);
        return temp
    }

    static minus(A: Vector, B: Vector) {
        let temp = new Vector(A.x - B.x, A.y - B.y, A.z - B.z);
        return temp
    }

    static multiply(A: Vector, s: number) {
        let temp = new Vector(A.x * s, A.y * s, A.z * s);
        return temp
    }

    static multiply3(A: Vector, B: Vector) {
        return new Vector(A.x * B.x, A.y * B.y, A.z * B.z);
    }

    static cross(A: Vector, B: Vector) {
        let temp = new Vector(A.y * B.z - A.z * B.y, -A.x * B.z + A.z * B.x, A.x * B.y - A.y * B.x);
        return temp;
    }

    static dot(A: Vector, B: Vector) {
        return A.x * B.x + A.y * B.y + A.z * B.z;
    }

    static equal(A: Vector, B: Vector) {
        return number_equal(A.x, B.x) && number_equal(A.y, B.y) && number_equal(A.z, B.z);
    }

    static lerp(A: Vector, B: Vector, t: number) {
        return new Vector(
            lerp(A.x, B.x, t),
            lerp(A.y, B.y, t),
            lerp(A.z, B.z, t));
    }

    x: number = 0;
    y: number = 0;
    z: number = 0;
    constructor(px: number, py: number, pz: number) {
        this.x = px;
        this.y = py;
        this.z = pz;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
        let temp = this.length();
        this.x = this.x / temp;
        this.y = this.y / temp;
        this.z = this.z / temp;
        return this;
    }

    add(A: Vector) {
        return Vector.add(this, A);
    }

    minus(A: Vector) {
        return Vector.minus(this, A);
    }

    multiply(s: number) {
        return Vector.multiply(this, s);
    }

    negative() {
        return Vector.multiply(this, -1);
    }

    Vector2D() {
        this.z = 0;
        return this;
    }

    clone() {
        return new Vector(this.x, this.y, this.z);
    }
}