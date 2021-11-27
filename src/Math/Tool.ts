import SceneNode from "../Object/SceneNode";
import Ray from "./Ray";
import HitInfo from "./HitInfo";
import Vector from "./Vector";
import Triangle from "./Triangle";
import Vertex from "./Vertex";

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

export function lerp(a: number, b: number, t: number) {
    return a + t * (b - a);
}

export function clip(triangle: Triangle, nearPlaneZ: number) {

    let v_clip: Vertex[] = [];

    let getCrossPoint = function (v0: Vertex, v1: Vertex, pz: number) {

        let pv0 = v0.p;
        let pv1 = v1.p;
        let t = (pz - pv0.z) / (pv1.z - pv0.z);
        let x = lerp(pv0.x, pv1.x, t);
        let y = lerp(pv0.y, pv1.y, t);

        // uv也要插值
        let uv0 = v0.uv;
        let uv1 = v1.uv;
        let u = lerp(uv0.x, uv1.x, t);
        let v = lerp(uv0.y, uv1.y, t);

        return new Vertex(x, y, pz, u, v);
    }

    //pvo in 
    let clip_first_in = function (pv0: Vertex, pv1: Vertex, pv2: Vertex) {
        // 1 triangle 1 one triangle
        v_clip[0] = pv0;
        v_clip[1] = getCrossPoint(pv0, pv1, nearPlaneZ);
        v_clip[2] = getCrossPoint(pv0, pv2, nearPlaneZ);
    }

    //pvo out
    let clip_first_out = function (pv0: Vertex, pv1: Vertex, pv2: Vertex) {

        // 1 triangle to 2 triangle
        let cross1 = getCrossPoint(pv2, pv0, nearPlaneZ);
        let cross2 = getCrossPoint(pv0, pv1, nearPlaneZ);

        v_clip[0] = pv2;
        v_clip[1] = cross1;
        v_clip[2] = cross2;

        v_clip[3] = pv2.copy();
        v_clip[4] = cross2;
        v_clip[5] = pv1;
    }


    // 有8種情況
    if (triangle.v0.p.z < nearPlaneZ)//out
    {
        if (triangle.v1.p.z < nearPlaneZ) //out out
        {
            if (triangle.v2.p.z < nearPlaneZ)//full out of nearPlaneZ (no clip)
            {
                // console.log('full out');
            }
            else //out out in
                clip_first_in(triangle.v2, triangle.v0, triangle.v1);
        }
        else //out in 
        {
            if (triangle.v2.p.z < nearPlaneZ)//out in out
                clip_first_in(triangle.v1, triangle.v2, triangle.v0);
            else // out in in
                clip_first_out(triangle.v0, triangle.v1, triangle.v2);
        }
    }
    else // in
    {
        if (triangle.v1.p.z < nearPlaneZ)// in out 
        {
            if (triangle.v2.p.z < nearPlaneZ)// in out out
                clip_first_in(triangle.v0, triangle.v1, triangle.v2);
            else // in out in
                clip_first_out(triangle.v1, triangle.v2, triangle.v0);
        }
        else // in in
        {
            if (triangle.v2.p.z < nearPlaneZ)// in in out
                clip_first_out(triangle.v2, triangle.v0, triangle.v1);
            else // in in in (no clip)
            {
                v_clip[0] = triangle.v0;
                v_clip[1] = triangle.v1;
                v_clip[2] = triangle.v2;
            }
        }
    }

    return v_clip;
}