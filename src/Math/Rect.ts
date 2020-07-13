import Plane from "./Plane";
import Ray from "./Ray";
import Vector from "./Vector";
import HitInfo from "./HitInfo";
import Hitable from "./Hitable";

// 小方塊
export default class Rect implements Hitable {
    plane: Plane;
    w: number;
    h: number;

    constructor(plane: Plane, w: number, h: number) {
        this.plane = plane;
        this.w = w;
        this.h = h;
    }

    hit(ray: Ray): HitInfo {
        let result = this.plane.hit(ray);
        if (result.is_hit) {
            let hit_pos = result.hit_pos;
            let diff = hit_pos.minus(this.plane.C);
            let w_axis = Vector.cross_product(Vector.up, this.plane.N).normalize();
            let h_axis = Vector.cross_product(w_axis, this.plane.N);
            let w_value = Vector.dot_product(diff, w_axis);
            let h_value = Vector.dot_product(diff, h_axis);

            let is_hit = Math.abs(w_value) < this.w && Math.abs(h_value) < this.h;
            return {
                is_hit,
                hit_pos,
                t: result.t
            }
        } else {
            return {
                is_hit: false,
            }
        }
    }
}