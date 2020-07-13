import Vector from "./Vector";
import Ray from "./Ray";
import { degree_to_Rad } from "./Tool"
import RenderTarget from "./RenderTarget";
import Hitable from "./Hitable";
import HitInfo from "./HitInfo";

export default class Camera {
    eye: Vector;

    x_axis: Vector;
    y_axis: Vector;
    z_axis: Vector;

    fov_degree: number;
    constructor(eye: Vector, look_at: Vector, fov_degree: number) {

        // camera 3軸
        this.z_axis = Vector.minus(look_at, eye).normalize();

        let help_v = Vector.up;
        this.x_axis = Vector.cross_product(help_v, this.z_axis).normalize();
        this.y_axis = Vector.cross_product(this.z_axis, this.x_axis);

        // camera 原點
        this.eye = eye;

        // camera fov
        this.fov_degree = fov_degree;
    }

    create_ray(x_weight: number, y_weight: number, ratio: number) {
        let half_fov_rad = degree_to_Rad(0.5 * this.fov_degree);
        let tan_h = Math.tan(half_fov_rad);
        let tan_w = tan_h * ratio;

        let dir = this.z_axis
            .add(this.x_axis.multiply(x_weight * tan_w))
            .add(this.y_axis.multiply(y_weight * tan_h));

        return new Ray(this.eye.clone(), dir);
    }

    render(render_target: RenderTarget, obj_list: Hitable[]) {
        render_target.render_pixel((x_weight: number, y_weight: number, ratio: number) => {
            let ray = this.create_ray(x_weight, y_weight, ratio);

            let hit_sort_list = obj_list.map(obj => obj.hit(ray))
                .filter(info => info.is_hit)
                .sort((a: HitInfo, b: HitInfo) => a.t - b.t);

            // 有射中嗎
            let is_hit = hit_sort_list.length != 0;
            if (is_hit) {
                let result = hit_sort_list[0];
                var r = result.is_hit ? 1 : 0;
                var g = result.is_hit ? 1 : 0;
                var b = 0;
            } else {
                var r = 0.5;
                var g = 0.5;
                var b = 0.5;
            }

            return new Vector(r, g, b);
        })
    }
}