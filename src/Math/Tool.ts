import SceneNode from "../Object/SceneNode";
import Ray from "./Ray";
import HitInfo from "./HitInfo";
import Vector from "./Vector";

export function degree_to_Rad(d: number) {
    return Math.PI * d / 180;
};

export const epsilon: number = 0.001;

export function number_equal(a: number, b: number) {
    return Math.abs(a - b) < epsilon;
}

/**
 * 
 * @param x input
 * @param a min 
 * @param b max
 */
export function clamp(x: number, a: number, b: number) {
    if (x > b)
        return b;
    else if (x < a)
        return a;
    else
        return x;
}

export function get_hit_sort_list(obj_list: SceneNode[], ray: Ray) {
    let hit_sort_list = obj_list.map(obj => obj.h.hit(ray, obj.s))
        .filter(info => info.is_hit)
        .sort((a: HitInfo, b: HitInfo) => a.t - b.t);

    return hit_sort_list;
}

export function get_shadow_weight(hit_info: HitInfo, direction_light_dir: Vector, obj_list: SceneNode[]) {

    // 是否在影子內
    let dir = direction_light_dir.negative();
    let from = hit_info.hit_pos.add(dir.multiply(epsilon)); // 偏移一小段距離，避免射中自己
    let ray = new Ray(from, dir);
    let hit_sort_list = get_hit_sort_list(obj_list, ray);
    if (hit_sort_list.length != 0) { // 在影子內
        return 0.45; // 不要太黑
    } else
        return 1;
}