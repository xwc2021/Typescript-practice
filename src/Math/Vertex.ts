
import { lerp } from './Tool';
import Vector from './Vector'
import Vector4D from './Vector4D';

export default class Vertex {
    static build_vertex(p: Vector, n: Vector, w: number, u: number, v: number) {
        let vertex = new Vertex(p, n, w, u, v);
        return vertex;
    }

    static lerp(v0: Vertex, v1: Vertex, t: number) {
        let p = Vector.lerp(v0.p, v1.p, t);
        let n = Vector.lerp(v0.n, v1.n, t);
        let w = lerp(v0.w, v1.w, t);
        let u = lerp(v0.u, v1.u, t);
        let v = lerp(v0.v, v1.v, t);
        return new Vertex(p, n, w, u, v);
    }

    p: Vector;
    w: number;
    u: number;
    v: number;
    n: Vector;

    constructor(p: Vector, n: Vector, w: number, u: number, v: number) {
        this.p = p;
        this.n = n;
        this.w = w;
        this.u = u;
        this.v = v;
    }

    clone() {
        return new Vertex(this.p.clone(), this.n.clone(), this.w, this.u, this.v);
    }

    update_p(p: Vector) {
        this.p = p;
        return this;
    }

    update_w(w: number) {
        this.w = w;
        return this;
    }

    get_Vector4D() {
        return new Vector4D(this.p, this.w);
    }
}