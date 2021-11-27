import Transform from './Transform';
import Vector from './Vector'
import Vertex from './Vertex'
import { clip } from './Tool';
import Camera from './Camera';

export default class Triangle {

    static process(triangle: Triangle, pcamera: Camera, worldTransform: Transform) {

        // to world space
        let v0_w = Transform.transformPoint(worldTransform, triangle.v0.p);
        let v1_w = Transform.transformPoint(worldTransform, triangle.v1.p);
        let v2_w = Transform.transformPoint(worldTransform, triangle.v2.p);

        // to camera space
        let v0_c = pcamera.toCameraSpace(v0_w);
        let v1_c = pcamera.toCameraSpace(v1_w);
        let v2_c = pcamera.toCameraSpace(v2_w);

        //back face culling
        let v01 = Vector.minus(v1_c, v0_c);
        let v02 = Vector.minus(v2_c, v0_c);
        let normal = Vector.cross(v01, v02);
        normal.normalize();

        let center = v0_c.add(v1_c).add(v2_c).multiply(1 / 3);
        let center_to_eye = Vector.minus(Vector.zero, center);
        center_to_eye.normalize();
        let cos_value = Vector.dot(normal, center_to_eye);;
        if (cos_value <= 0) {
            return null;
        }

        // 重新綁定uv
        let v0_c_uv = Vertex.build_vertex(v0_c, triangle.v0.uv);
        let v1_c_uv = Vertex.build_vertex(v1_c, triangle.v1.uv);
        let v2_c_uv = Vertex.build_vertex(v2_c, triangle.v2.uv);

        //do only nearPlane clip
        let nearPlaneZ = 1;
        let v_clip = clip(new Triangle(v0_c_uv, v1_c_uv, v2_c_uv), nearPlaneZ);

        // to screen space
        let v_s: Vector[] = [];
        for (let i = 0; i < v_clip.length; ++i) {
            v_s[i] = pcamera.toScreenSpace(v_clip[i].p);
        }
        return v_s;
    }

    v0: Vertex;
    v1: Vertex;
    v2: Vertex;
    constructor(pv0: Vertex, pv1: Vertex, pv2: Vertex) {
        this.v0 = pv0;
        this.v1 = pv1;
        this.v2 = pv2;
    }

    v_s: Vector[];
    process(pcamera: Camera, worldTransform: Transform) {
        this.v_s = Triangle.process(this, pcamera, worldTransform);
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.v_s == null)
            return;

        let tCount = this.v_s.length / 3;
        for (let c = 1; c <= tCount; ++c) {
            let index = 3 * c - 1;
            ctx.moveTo(this.v_s[index].x, this.v_s[index].y);
            ctx.lineTo(this.v_s[index - 2].x, this.v_s[index - 2].y);
            ctx.lineTo(this.v_s[index - 1].x, this.v_s[index - 1].y);
            ctx.lineTo(this.v_s[index].x, this.v_s[index].y);
        }
    }
}

