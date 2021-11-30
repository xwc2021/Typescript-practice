import Vertex from './Vertex'
import Triangle from './Triangle';
import Vector from './Vector';
import Transform from './Transform';
import { clip } from './Tool';
import Camera from './Camera';

export default class Box {
    triangles: Triangle[];
    triangles_after_clip: Triangle[];
    constructor() {
        // 建立正方體頂點資料
        this.triangles = [];
        //順時針
        let n = new Vector(0, 0, -1);
        this.triangles.push(
            new Triangle(
                new Vertex(new Vector(-10, -10, -10), n, 1, 0, 0),
                new Vertex(new Vector(10, 10, -10), n, 1, 1, 1),
                new Vertex(new Vector(10, -10, -10), n, 1, 1, 0)
            ));
        // this.triangles.push(
        //     new Triangle(
        //         new Vertex(new Vector(-10, -10, -10), n, 1, 0, 0),
        //         new Vertex(new Vector(-10, 10, -10), n, 1, 0, 1),
        //         new Vertex(new Vector(10, 10, -10), n, 1, 1, 1)
        //     ));

        let m = [Transform.rotateByY(90), Transform.rotateByY(180), Transform.rotateByY(270), Transform.rotateByX(90), Transform.rotateByX(-90)]
        for (let i = 0; i < m.length; ++i) {
            let rotateMatrix = m[i];
            let n2 = Transform.transformPoint(rotateMatrix, n);
            // this.triangles.push(
            //     new Triangle(
            //         Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(- 10, -10, -10)), n2, 1, 0, 0),
            //         Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(10, 10, -10)), n2, 1, 1, 1),
            //         Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(10, -10, -10)), n2, 1, 1, 0)
            //     ));
            // this.triangles.push(
            //     new Triangle(
            //         Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(-10, -10, -10)), n2, 1, 0, 0),
            //         Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(-10, 10, -10)), n2, 1, 0, 1),
            //         Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(10, 10, -10)), n2, 1, 1, 1)
            //     ));
        }
    }

    update(camera: Camera, worldTransform: Transform) {

        // 測試裁切三角形的code
        // this.triangles_after_clip = [];
        // for (let i = 0; i < this.triangles.length; ++i) {
        //     let triangle = this.triangles[i];
        //     let nearPlaneZ = 1;
        //     let v_clip = clip(triangle, nearPlaneZ);

        //     let count = v_clip.length / 3;
        //     // console.log(i, count);
        //     for (let k = 0; k < count; ++k) {
        //         // 組合三角形
        //         let new_triangle = new Triangle(v_clip[k * 3], v_clip[k * 3 + 1], v_clip[k * 3 + 2]);
        //         this.triangles_after_clip.push(new_triangle);
        //     }
        // }
        this.triangles_after_clip = this.triangles;

        // 處理正方體的變換
        for (let i = 0; i < this.triangles_after_clip.length; ++i) {
            this.triangles_after_clip[i].process(camera, worldTransform);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        // 畫三角形
        ctx.globalCompositeOperation = 'destination-over';

        ctx.strokeStyle = 'rgba(255,0,0,1)';


        ctx.beginPath();

        for (let i = 0; i < this.triangles_after_clip.length; ++i) {
            this.triangles_after_clip[i].draw(ctx);
        }
        ctx.stroke();
    }
}