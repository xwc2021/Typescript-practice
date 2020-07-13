import Vector from './Vector';
import Ray from './Ray';

// 平面
export default class Plane {

    C: Vector;
    N: Vector;
    constructor(point: Vector, normal: Vector) {
        this.C = point;
        this.N = normal;
    }

    // 測試tesp_p和方向量是不是在同一邊
    is_positive(test_p: Vector) {
        let diff = Vector.minus(test_p, this.C);
        var value = Vector.dot_product(diff, this.N);
        return value > 0;
    }

    hit(ray: Ray) {
        // ray hit plane 
        let from = ray.from;
        let dir = ray.dir;

        // (F-C)。N + t (D。N) = 0
        // t  = (C-F)。N / (D。N)
        // t  = (A / (B)
        let B = Vector.dot_product(dir, this.N);
        let A = Vector.dot_product(Vector.minus(this.C, from), this.N);

        // avoid divide by 0
        let epsilon = 0.001;
        if (Math.abs(B) < epsilon)
            return { is_hit: false, hit_pos: null };

        let t = A / B;
        let is_hit = t > 0.0;
        let hit_pos = from.add(dir.multiply(t));

        return {
            is_hit,
            hit_pos
        }
    }
}