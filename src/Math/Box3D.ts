import Vertex from './Vertex'
import Triangle from './Triangle';
import Vector from './Vector';
import Transform from './Transform';
import { clip } from './Tool';
import Camera from './Camera';
import Texture2D from './Texture2D';

export default class Box {
    triangles: Triangle[];
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
        this.triangles.push(
            new Triangle(
                new Vertex(new Vector(-10, -10, -10), n, 1, 0, 0),
                new Vertex(new Vector(-10, 10, -10), n, 1, 0, 1),
                new Vertex(new Vector(10, 10, -10), n, 1, 1, 1)
            ));

        let m = [Transform.rotateByY(90), Transform.rotateByY(180), Transform.rotateByY(270), Transform.rotateByX(90), Transform.rotateByX(-90)]
        for (let i = 0; i < m.length; ++i) {
            let rotateMatrix = m[i];
            let n2 = Transform.transformPoint(rotateMatrix, n);
            this.triangles.push(
                new Triangle(
                    Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(- 10, -10, -10)), n2, 1, 0, 0),
                    Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(10, 10, -10)), n2, 1, 1, 1),
                    Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(10, -10, -10)), n2, 1, 1, 0)
                ));
            this.triangles.push(
                new Triangle(
                    Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(-10, -10, -10)), n2, 1, 0, 0),
                    Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(-10, 10, -10)), n2, 1, 0, 1),
                    Vertex.build_vertex(Transform.transformPoint(rotateMatrix, new Vector(10, 10, -10)), n2, 1, 1, 1)
                ));
        }
    }

    rasterize(camera: Camera, worldTransform: Transform, texture: Texture2D) {

        // 處理正方體的變換
        for (let i = 0; i < this.triangles.length; ++i) {
            this.triangles[i].rasterize(camera, worldTransform, texture);
        }
    }

    draw_line(ctx: CanvasRenderingContext2D) {
        // 畫三角形
        ctx.globalCompositeOperation = 'destination-over';

        ctx.strokeStyle = 'rgba(255,0,0,1)';


        ctx.beginPath();

        for (let i = 0; i < this.triangles.length; ++i) {
            this.triangles[i].draw(ctx);
        }
        ctx.stroke();
    }
}