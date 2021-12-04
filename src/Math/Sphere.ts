import Vector from "./Vector";
import Ray from "./Ray";
import { number_equal } from './Tool';
import HitInfo from "./HitInfo";
import Hitable from "./Hitable";
import Shader from "../Materails/Shader";

export default class Sphere implements Hitable {

    C: Vector; // 球中心
    R: number; // 球半徑

    constructor(C: Vector, R: number) {
        this.C = C;
        this.R = R;
    }

    hit(ray: Ray, s: Shader): HitInfo | null {
        // 解2次方程式
        // (X-C)。(X-C) = R*R
        // X=F+t*D
        // t=[(-b-sqrt_k)/2a,(-b+sqrt_k)/2a]
        let D = ray.dir;
        let F = ray.from;
        let a = Vector.dot(D, D);
        let b = 2 * (Vector.dot(D, F) - Vector.dot(D, this.C));
        let c = Vector.dot(F, F) - 2 * Vector.dot(F, this.C) + Vector.dot(this.C, this.C) - this.R * this.R;

        let k = b * b - 4 * a * c;
        if (number_equal(k, 0)) {  // 交於1點
            let t = -b / (2 * a);

            //擋掉
            if (t < 0) { return null }

            let hit_pos = F.add(D.multiply(t));
            let normal = hit_pos.minus(this.C).normalize();
            return {
                positive_t: true,
                hit_pos,
                i: D,
                t,
                normal,
                s
            }
        }
        else if (k > 0) { // 交於2點

            // 過濾出t>0
            // ray.from在球內有可能出現t<0
            // 球在ray的後面也可能出現t<0
            let sqrt_k = Math.sqrt(k);
            let t_list = [(-b - sqrt_k) / (2 * a), (-b + sqrt_k) / (2 * a)].filter(x => x > 0);

            // 都是負值
            if (t_list.length == 0) { return null }

            let t = t_list[0];
            let hit_pos = F.add(D.multiply(t));
            let normal = hit_pos.minus(this.C).normalize();
            return {
                positive_t: true,
                hit_pos,
                i: D,
                t,
                normal,
                s
            }
        } else { // 沒交點
            return null
        }
    }
}