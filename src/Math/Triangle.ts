import Transform from './Transform';
import Vector from './Vector'
import Vertex from './Vertex'
import { clip } from './Tool';
import Camera from './Camera';
import Plane from './Plane';

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


        // console.log(v0.p.z);
        return Triangle.clip_in_Projection_Space(v0, v1, v2, pcamera);
    }

    static clip(in_list: Triangle[],
        v0_out: (triangle: Triangle) => boolean,
        v1_out: (triangle: Triangle) => boolean,
        v2_out: (triangle: Triangle) => boolean,
        plane: Plane) {

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

        // test

        // let out_list = Triangle.clip(in_list,
        //     (T: Triangle) => { return T.v0.p.z < 50; },
        //     (T: Triangle) => { return T.v1.p.z < 50; },
        //     (T: Triangle) => { return T.v2.p.z < 50; },
        //     new Plane(new Vector(0, 0, 50), new Vector(0, 0, -1)));

        // out_list = Triangle.clip(out_list,
        //     (T: Triangle) => { return T.v0.p.z > 60; },
        //     (T: Triangle) => { return T.v1.p.z > 60; },
        //     (T: Triangle) => { return T.v2.p.z > 60; },
        //     new Plane(new Vector(0, 0, 60), new Vector(0, 0, -1)));


        let out_list = Triangle.clip(in_list,
            (T: Triangle) => { return T.v0.p.z < pcamera.Nc; },
            (T: Triangle) => { return T.v1.p.z < pcamera.Nc; },
            (T: Triangle) => { return T.v2.p.z < pcamera.Nc; },
            new Plane(new Vector(0, 0, pcamera.Nc), new Vector(0, 0, -1)));

        out_list = Triangle.clip(out_list,
            (T: Triangle) => { return T.v0.p.z > pcamera.Fc; },
            (T: Triangle) => { return T.v1.p.z > pcamera.Fc; },
            (T: Triangle) => { return T.v2.p.z > pcamera.Fc; },
            new Plane(new Vector(0, 0, pcamera.Fc), new Vector(0, 0, -1)));

        return out_list;
    }

    static process(triangle: Triangle, pcamera: Camera, worldTransform: Transform) {

        // to MVP
        let triangle_list = Triangle.MVP_backface_culling_clipping(triangle, pcamera, worldTransform);

        let list = [];
        // to NDC
        for (let T of triangle_list) {
            let v0 = pcamera.toNDC(T.v0.p, T.v0.w);
            let v1 = pcamera.toNDC(T.v1.p, T.v1.w);
            let v2 = pcamera.toNDC(T.v2.p, T.v2.w);

            // to screen space
            let v0_s = pcamera.toScreenSpace(v0);
            let v1_s = pcamera.toScreenSpace(v1);
            let v2_s = pcamera.toScreenSpace(v2);

            // 為了和本來的code相容，暫時先傳出去
            list.push(v0_s);
            list.push(v1_s);
            list.push(v2_s);

            // 找出包圍的矩形

            // 對矩形裡的每個點p
            // 判定是否位在screen space三角形
            // if yes 
            // (1)重新把點p映射到NDC,
            // (2)在NDC進行內插，乘上w回到projection space
            // https://gpnnotes.blogspot.com/2021/11/blog-post_27.html

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

