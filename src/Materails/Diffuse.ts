import Vector from "../Math/Vector";
import HitInfo from "../Math/HitInfo";
import { clamp, get_shadow_weight } from "../Math/Tool";
import Shader from "./Shader";
import SceneNode from "../Object/SceneNode";

export default class Diffuse implements Shader {
    static yellow = new Diffuse(new Vector(1, 1, 0));
    static red = new Diffuse(new Vector(1, 0, 0));
    static green = new Diffuse(new Vector(0, 1, 0));
    static blue = new Diffuse(new Vector(0, 0, 1));
    static gray = new Diffuse(new Vector(0.5, 0.5, 0.5));
    static white = new Diffuse(new Vector(1, 1, 1));

    color: Vector;
    constructor(color: Vector) {
        this.color = color;
    }

    shading(hit_info: HitInfo, direction_light_dir: Vector, obj_list: SceneNode[], depth: number) {
        let n = hit_info.normal;
        let strength = clamp(-Vector.dot(direction_light_dir, n), 0, 1);

        let shadow_weight = get_shadow_weight(hit_info, direction_light_dir, obj_list);
        return this.color.multiply(strength).multiply(shadow_weight);
    }
}