import SceneNode from "../Object/SceneNode";
import Ray from "./Ray";
import HitInfo from "./HitInfo";

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
        .filter(info => info.t > 0) // 過濾掉t<0的情況
        .sort((a: HitInfo, b: HitInfo) => a.t - b.t);

    return hit_sort_list;
}