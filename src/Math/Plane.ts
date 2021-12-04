import Vector from './Vector';
import Ray from './Ray';
import { number_equal } from './Tool';
import HitInfo from './HitInfo';
import Hitable from './Hitable';
import Shader from '../Materails/Shader';

// 平面
export default class Plane implements Hitable {

    C: Vector;
    N: Vector;
    constructor(point: Vector, normal: Vector) {
        this.C = point;
        this.N = normal;
    }

    // 測試tesp_p和方向量是不是在同一邊
    is_positive(test_p: Vector) {
        let diff = Vector.minus(test_p, this.C);
        let value = Vector.dot(diff, this.N);
        return value > 0;
    }

    hit(ray: Ray, s: Shader): HitInfo | null {
        let result = Plane.hit(ray, this);
        if (result)
            result.s = s;
        return result;
    }

    static hit(ray: Ray, plane: Plane): HitInfo | null {
        // ray hit plane 
        let from = ray.from;
        let dir = ray.dir;

        // (F-C)。N + t (D。N) = 0
        // t  = (C-F)。N / (D。N)
        // t  = (A / (B)
        let B = Vector.dot(dir, plane.N);
        let A = Vector.dot(Vector.minus(plane.C, from), plane.N);

        // avoid divide by 0
        if (number_equal(B, 0))
            return null;

        let t = A / B;
        let positive_t = t > 0.0;
        let hit_pos = from.add(dir.multiply(t));
        return {
            positive_t,
            hit_pos,
            i: dir,
            t,
            normal: plane.N
        }
    }
}