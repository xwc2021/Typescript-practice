import Vector from "./Vector";
import Ray from "./Ray";
import { degree_to_Rad, clamp } from "./Tool"
import RenderTarget from "./RenderTarget";
import HitInfo from "./HitInfo";
import SceneNode from "../Object/SceneNode";
import Material from "../Object/Material";

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
        this.x_axis = Vector.cross(help_v, this.z_axis).normalize();
        this.y_axis = Vector.cross(this.z_axis, this.x_axis);

        // camera 原點
        this.eye = eye;

        // camera fov
        this.fov_degree = fov_degree;
    }

    create_ray_dir(x_weight: number, y_weight: number, ratio: number) {
        let half_fov_rad = degree_to_Rad(0.5 * this.fov_degree);
        let tan_h = Math.tan(half_fov_rad);
        let tan_w = tan_h * ratio;

        let dir = this.z_axis
            .add(this.x_axis.multiply(x_weight * tan_w))
            .add(this.y_axis.multiply(y_weight * tan_h));

        return dir;
    }

    render(render_target: RenderTarget, obj_list: SceneNode[]) {
        let direction_light_dir = new Vector(1, -1, 0).normalize();

        let half_pixel_offset = 0.5 / render_target.h;
        let multisample_diff = [
            { x: 0, y: 0 },
            { x: half_pixel_offset, y: half_pixel_offset },
            { x: -half_pixel_offset, y: half_pixel_offset },
            { x: -half_pixel_offset, y: -half_pixel_offset },
            { x: half_pixel_offset, y: -half_pixel_offset },
        ];

        render_target.render_pixel((x_weight: number, y_weight: number, ratio: number) => {
            let ray_dir = this.create_ray_dir(x_weight, y_weight, ratio);

            // 產生多條ray
            let rays = multisample_diff.map(diff => {
                // 對ray_dri作偏移
                let dir = ray_dir.add(this.x_axis.multiply(diff.x)).add(this.y_axis.multiply(diff.y))
                return new Ray(this.eye, dir)
            });

            // 每個ray都算color
            let colors = rays.map(ray => {
                let hit_sort_list = obj_list.map(obj => obj.h.hit(ray, obj.m))
                    .filter(info => info.is_hit)
                    .sort((a: HitInfo, b: HitInfo) => a.t - b.t);

                // 有射中嗎
                let is_hit = hit_sort_list.length != 0;
                if (is_hit) {
                    let result = hit_sort_list[0];
                    let n = result.normal;
                    let strength = clamp(-Vector.dot(direction_light_dir, n), 0, 1);

                    return result.m.color.multiply(strength);
                } else {
                    return Material.gray.color;
                }
            });

            // 取平均就有Antialiasing效果
            let count = multisample_diff.length;
            let final_color = colors.reduce((accumulator: Vector, current: Vector) => accumulator.add(current), Vector.zero).multiply(1 / count);
            return final_color;
        })
    }
}