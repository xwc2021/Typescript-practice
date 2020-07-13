import Vector from "./Vector";
import Ray from "./Ray";
import { degree_to_Rad } from "./Tool"

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
}