import { number_equal } from './Tool'


export default class Vector {

    static up = new Vector(0, 1, 0);
    static zero = new Vector(0, 0, 0);

    static reflect(I: Vector, N: Vector) {
        let L = -2 * Vector.dot(I, N)
        return N.multiply(L).add(I);
    }

    static add(A: Vector, B: Vector) {
        var temp = new Vector(B.x + A.x, B.y + A.y, B.z + A.z);
        return temp
    }

    static minus(A: Vector, B: Vector) {
        var temp = new Vector(A.x - B.x, A.y - B.y, A.z - B.z);
        return temp
    }

    static multiply(A: Vector, s: number) {
        var temp = new Vector(A.x * s, A.y * s, A.z * s);
        return temp
    }

    static multiply3(A: Vector, B: Vector) {
        return new Vector(A.x * B.x, A.y * B.y, A.z * B.z);
    }

    static cross(A: Vector, B: Vector) {
        var temp = new Vector(A.y * B.z - A.z * B.y, -A.x * B.z + A.z * B.x, A.x * B.y - A.y * B.x);
        return temp;
    }

    static dot(A: Vector, B: Vector) {
        return A.x * B.x + A.y * B.y + A.z * B.z;
    }

    static equal(A: Vector, B: Vector) {
        return number_equal(A.x, B.x) && number_equal(A.y, B.y) && number_equal(A.z, B.z);
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
        var temp = this.length();
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

    clone() {
        return new Vector(this.x, this.y, this.z);
    }
}