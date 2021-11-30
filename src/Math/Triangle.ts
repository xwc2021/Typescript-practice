import Transform from './Transform';
import Vector from './Vector'
import Vertex from './Vertex'
import { ClipPlane, clip } from './Tool';
import Camera from './Camera';
import Plane from './Plane';
import Ray from './Ray';

export default class Triangle {

    static MVP_backface_culling_clipping(triangle: Triangle, pcamera: Camera, worldTransform: Transform) {
        // to world space
        let v0_w = Transform.transformPoint(worldTransform, triangle.v0.p);
        let v1_w = Transform.transformPoint(worldTransform, triangle.v1.p);
        let v2_w = Transform.transformPoint(worldTransform, triangle.v2.p);

        // to camera space
        let v0_c = pcamera.toCameraSpace(v0_w);
        let v1_c = pcamera.toCameraSpace(v1_w);
        let v2_c = pcamera.toCameraSpace(v2_w);

        // to projection space (clip space)
        let v0_p = pcamera.toProjectionSpace(v0_c);
        let v1_p = pcamera.toProjectionSpace(v1_c);
        let v2_p = pcamera.toProjectionSpace(v2_c);

        // back face culling 
        // let v0_test = new Vector(v0_p.x, v0_p.y, v0_c.z);
        // let v1_test = new Vector(v1_p.x, v1_p.y, v1_c.z);
        // let v2_test = new Vector(v2_p.x, v2_p.y, v2_c.z);
        // let normal = Vector.calculate_normal(v0_test, v1_test, v2_test);
        // let center_to_eye = Vector.minus(Vector.zero, Vector.calculate_center(v0_test, v1_test, v2_test)).normalize();

        // 在view space做，不然在clip space做，還要把z用w取代掉，有點搞工
        let normal = Vector.calculate_normal(v0_c, v1_c, v2_c);
        let center_to_eye = Vector.minus(Vector.zero, Vector.calculate_center(v0_c, v1_c, v2_c)).normalize();
        let cos_value = Vector.dot(normal, center_to_eye);;
        if (cos_value <= 0) {
            // console.log('culling')
            return [];
        }

        // 重新綁定uv
        let v0 = triangle.v0.clone().update_p(v0_p).update_w(v0_c.z);
        let v1 = triangle.v1.clone().update_p(v1_p).update_w(v1_c.z);
        let v2 = triangle.v2.clone().update_p(v2_p).update_w(v2_c.z);

        // 執行三角形裁切
        return Triangle.clip_in_Projection_Space(v0, v1, v2, pcamera);
    }

    static clip_helper(in_list: Triangle[],
        v0_out: (triangle: Triangle) => boolean,
        v1_out: (triangle: Triangle) => boolean,
        v2_out: (triangle: Triangle) => boolean,
        plane: ClipPlane) {

        let out_list: Triangle[] = [];
        for (let T of in_list) {
            let result = clip(T, v0_out, v1_out, v2_out, plane);
            for (let t of result)
                out_list.push(t);
        }
        return out_list;
    }

    static clip_in_Projection_Space(v0: Vertex, v1: Vertex, v2: Vertex, pcamera: Camera) {
        // Todo:執行6個平面的三角形裁切
        // 和y軸夾45度的2個平面、和x軸夾45度的2個平面、還有Nc和Fc
        // https://gpnnotes.blogspot.com/2021/11/blog-post_28.html


        let in_list = [new Triangle(v0, v1, v2)];

        // Far
        let out_list = Triangle.clip_helper(in_list,
            (T: Triangle) => { return T.v0.w < T.v0.p.z; },
            (T: Triangle) => { return T.v1.w < T.v1.p.z; },
            (T: Triangle) => { return T.v2.w < T.v2.p.z; },
            ClipPlane.Far);

        // Near
        out_list = Triangle.clip_helper(out_list,
            (T: Triangle) => { return 0 > T.v0.p.z; },
            (T: Triangle) => { return 0 > T.v1.p.z; },
            (T: Triangle) => { return 0 > T.v2.p.z; },
            ClipPlane.Near);

        // Right
        out_list = Triangle.clip_helper(out_list,
            (T: Triangle) => { return T.v0.w < T.v0.p.x; },
            (T: Triangle) => { return T.v1.w < T.v1.p.x; },
            (T: Triangle) => { return T.v2.w < T.v2.p.x; },
            ClipPlane.Right);

        // Left
        out_list = Triangle.clip_helper(out_list,
            (T: Triangle) => { return -T.v0.w > T.v0.p.x; },
            (T: Triangle) => { return -T.v1.w > T.v1.p.x; },
            (T: Triangle) => { return -T.v2.w > T.v2.p.x; },
            ClipPlane.Right);

        // Top
        out_list = Triangle.clip_helper(out_list,
            (T: Triangle) => { return T.v0.w < T.v0.p.y; },
            (T: Triangle) => { return T.v1.w < T.v1.p.y; },
            (T: Triangle) => { return T.v2.w < T.v2.p.y; },
            ClipPlane.Top);

        // Bottom
        out_list = Triangle.clip_helper(out_list,
            (T: Triangle) => { return -T.v0.w > T.v0.p.y; },
            (T: Triangle) => { return -T.v1.w > T.v1.p.y; },
            (T: Triangle) => { return -T.v2.w > T.v2.p.y; },
            ClipPlane.Bottom);

        return out_list;
    }

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

    static process(triangle: Triangle, pcamera: Camera, worldTransform: Transform) {

        // to MVP
        let triangle_list = Triangle.MVP_backface_culling_clipping(triangle, pcamera, worldTransform);

        let list = [];
        // to NDC
        for (let T of triangle_list) {
            let n0 = pcamera.toNDC(T.v0.p, T.v0.w);
            let n1 = pcamera.toNDC(T.v1.p, T.v1.w);
            let n2 = pcamera.toNDC(T.v2.p, T.v2.w);

            // to screen space
            let s0 = pcamera.toScreenSpace(n0);
            let s1 = pcamera.toScreenSpace(n1);
            let s2 = pcamera.toScreenSpace(n2);

            // 為了和本來的code相容，暫時先傳出去
            list.push(s0);
            list.push(s1);
            list.push(s2);

            // 找出包圍的矩形
            let { min, max } = Vector.min_max(s0, s1, s2);
            // console.log(min.x, max.x, '|', min.y, max.y);
            let min_x = Math.floor(min.x);
            let max_x = Math.floor(max.x);
            let min_y = Math.floor(min.y);
            let max_y = Math.floor(max.y);
            for (let x = min_x; x <= max_x; ++x) {
                for (let y = min_y; y <= max_y; ++y) {
                    // 移動半個像素
                    let P = new Vector(x + 0.5, y + 0.5, 0)

                    // 對矩形裡的每個點P
                    // 判定是否位在screen space三角形
                    let { α, β, γ } = Triangle.calculate_α_β_γ(s0.Vector2D(), s1.Vector2D(), s2.Vector2D(), P);
                    if (!Triangle.is_in_triangle(α, β, γ))
                        continue;

                    // if yes 
                    // (1)重新把點P映射到NDC(從NDC到Screen Space是仿射變換，不會改變內插權重α、β、γ)


                    // (2)在NDC進行內插，乘上w回到projection space
                    // https://gpnnotes.blogspot.com/2021/11/blog-post_27.html
                }
            }

        }
        return list;
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

