import Transform from './Transform';
import Vector from './Vector'
import Vertex from './Vertex'
import Camera from './Camera';
import Plane from './Plane';
import Ray from './Ray';
import Rasterizer from './Rasterizer';
import Texture2D from './Texture2D';

export default class Triangle {

    // 這些點z都是0
    static calculate_α_β_γ(s0: Vector, s1: Vector, s2: Vector, P: Vector) {
        let diff = Vector.minus(P, s0);

        // 求ray(P,S0-S2)和ray(S0,S1-S2)的交點
        // 等同於求ray(P,S0-S2)和平面的交點
        let dir01 = Vector.minus(s1, s0);
        let dir02 = Vector.minus(s2, s0);
        let n = new Vector(-dir01.y, dir01.x, 0);
        let ray = new Ray(P, dir02.multiply(-1));
        let result = Plane.hit(ray, new Plane(s0, n));

        let p_on_dir01 = result.hit_pos;
        let vector_α = Vector.minus(p_on_dir01, s0);
        let vector_β = Vector.minus(diff, vector_α);

        let α = vector_α.x / dir01.x;
        let β = vector_β.x / dir02.x;
        let γ = 1 - α - β;

        return { α, β, γ }
    }

    static is_in_triangle(α: number, β: number, γ: number) {
        return (α >= 0 && β >= 0 && γ >= 0);
    }

    // 因為calculate_α_β_γ實作的方式，所以順序是γ、α、β 😝
    static interpolation(γ: number, α: number, β: number, v0: number, v1: number, v2: number) {
        return v0 * γ + v1 * α + v2 * β;
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
    rasterize(pcamera: Camera, worldTransform: Transform, texture: Texture2D) {
        this.v_s = Rasterizer.process(this, pcamera, worldTransform, texture);
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

