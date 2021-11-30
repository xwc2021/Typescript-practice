import Vector from "./Vector";
import Ray from "./Ray";
import { degree_to_Rad, get_hit_sort_list } from "./Tool"
import RenderTarget from "./RenderTarget";
import SceneNode from "../Object/SceneNode";
import Diffuse from "../Materails/Diffuse";


export default class Camera {
    eye: Vector;

    x_axis: Vector;
    y_axis: Vector;
    z_axis: Vector;

    ratio: number;

    screenW: number;
    screenH: number;

    screenCenterX: number;
    screenCenterY: number;
    halfW: number;
    halfH: number;

    // 視錐的 近平面和遠平面
    // a、b和投影矩陣有關
    N: number;
    F: number;
    a: number;
    b: number;

    fov_degree: number;
    constructor(eye: Vector, look_at: Vector, fov_degree: number, screenW: number, screenH: number, N: number, F: number) {

        this.ratio = screenW / screenH;
        this.screenW = screenW;
        this.screenH = screenH;
        this.screenCenterX = this.screenW * 0.5;
        this.screenCenterY = this.screenH * 0.5;
        this.halfW = this.screenW * 0.5;
        this.halfH = this.screenH * 0.5;

        // camera 3軸
        this.z_axis = Vector.minus(look_at, eye).normalize();

        // 左手
        let help_v = Vector.up;
        this.x_axis = Vector.cross(help_v, this.z_axis).normalize();
        this.y_axis = Vector.cross(this.z_axis, this.x_axis);

        // camera 原點
        this.eye = eye;

        // camera fov
        this.fov_degree = fov_degree;

        // 視錐的 近平面和遠平面
        this.N = N;
        this.F = F;

        // https://gpnnotes.blogspot.com/2021/11/blog-post_27.html
        // 投影矩陣對z的修正，這裡使用左手
        this.a = F / (F - N);
        this.b = -N * F / (F - N);

        console.log(this.a, this.b);
    }

    moveEye = function (s: number, A: Vector) {
        this.eye = Vector.add(this.eye, A.multiply(s));
    }

    addPitch(degree: number) {
        // todo: 乘上local matrix
    }

    addYaw(degree: number) {
        // todo: 乘上local matrix
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

    toCameraSpace(A: Vector) {
        let diff = A.minus(this.eye);
        let point_in_camera_space = new Vector(Vector.dot(diff, this.x_axis), Vector.dot(diff, this.y_axis), Vector.dot(diff, this.z_axis));
        return point_in_camera_space;
    }

    toProjectionSpace(A: Vector) {
        let fov_rad = degree_to_Rad(this.fov_degree);
        let half_fov = 0.5 * fov_rad;
        let y_scale = 1 / Math.tan(half_fov);
        let x_scale = 1 / (this.ratio * Math.tan(half_fov));

        return new Vector(A.x * x_scale, A.y * y_scale, A.z * this.a + this.b);
    }

    toNDC(A: Vector, w: number) {
        let s = 1 / w;
        return A.multiply(s);
    }

    toScreenSpace(NDC_A: Vector) {
        // 用座標變換來看待從NDC到Screen Space
        // NDC x軸在screen space 為(w/2,0)
        // NDC y軸在screen space 為(-h/2,0)
        let x = this.halfW * NDC_A.x + this.screenCenterX;
        let y = -this.halfH * NDC_A.y + this.screenCenterY;

        let temp = new Vector(x, y, 0);
        return temp;
    }

    // 算圖
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

                // 雖然和球、平面的hit計算不需要dir作normalize，但為了方便反射的計算還是作normalize
                return new Ray(this.eye, dir.normalize())
            });

            // 每個ray都算color
            let colors = rays.map(ray => {
                let hit_sort_list = get_hit_sort_list(obj_list, ray);

                // 有射中嗎
                let is_hit = hit_sort_list.length != 0;
                if (is_hit) {
                    let hit_info = hit_sort_list[0];
                    return hit_info.s.shading(hit_info, direction_light_dir, obj_list, 1);
                } else {
                    return Diffuse.gray.color;
                }
            });

            // 取平均就有Antialiasing效果
            let count = multisample_diff.length;
            let final_color = colors.reduce((accumulator: Vector, current: Vector) => accumulator.add(current), Vector.zero).multiply(1 / count);
            return final_color;
        })
    }
}