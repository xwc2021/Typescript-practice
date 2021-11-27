
import Vector from './Vector'

export default class Vertex {
    static build_vertex(p: Vector, uv: Vector) {
        let vertex = new Vertex(p.x, p.y, p.z, uv.x, uv.y);
        return vertex;
    }

    p: Vector;
    uv: Vector;
    constructor(x: number, y: number, z: number, u: number, v: number) {
        this.p = new Vector(x, y, z);
        this.uv = new Vector(u, v, 0);


    }

    copy() {
        return Vertex.build_vertex(this.p, this.uv);
    }
}