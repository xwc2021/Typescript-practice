import Plane from "./Plane";
import Ray from "./Ray";
import Vector from "./Vector";
import HitInfo from "./HitInfo";
import Hitable from "./Hitable";
import Material from "../Materails/Material";

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

    hit(ray: Ray, m: Material): HitInfo {
        let result = this.plane.hit(ray, m);
        if (result.is_hit) {
            let hit_pos = result.hit_pos;
            let diff = hit_pos.minus(this.plane.C);

            // 避開相等的情況
            let help_v = Vector.equal(this.plane.N, Vector.up) ? new Vector(1, 0, 0) : Vector.up;

            let w_axis = Vector.cross(help_v, this.plane.N).normalize();
            let h_axis = Vector.cross(w_axis, this.plane.N);
            let w_value = Vector.dot(diff, w_axis);
            let h_value = Vector.dot(diff, h_axis);

            let is_hit = Math.abs(w_value) < this.w && Math.abs(h_value) < this.h;
            return {
                is_hit,
                hit_pos,
                t: result.t,
                normal: this.plane.N,
                m
            }
        } else {
            return {
                is_hit: false,
            }
        }
    }
}