import SceneNode from "../Object/SceneNode";
import Ray from "./Ray";
import Ray4D from "./Ray4D";
import HitInfo from "./HitInfo";
import Vector from "./Vector";
import Triangle from "./Triangle";
import Vertex from "./Vertex";
import Plane from "./Plane";

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

export enum ClipPlane {
    Near,
    Far,
    Right,
    Left,
    Top,
    Bottom
}

export function clip(triangle: Triangle,
    v0_out: (triangle: Triangle) => boolean,
    v1_out: (triangle: Triangle) => boolean,
    v2_out: (triangle: Triangle) => boolean,
    plane: ClipPlane) {

    let v_clip: Triangle[] = [];

    let getCrossPoint = function (v0: Vertex, v1: Vertex) {
        let ray = new Ray4D(v0.get_Vector4D(), v1.get_Vector4D());

        let t = 0;
        switch (plane) {
            case ClipPlane.Far:
                t = ray.t_when_z_equal_w();
                break;
            case ClipPlane.Near:
                t = ray.t_when_z_equal_zero_w();
                break;
        }

        return Vertex.lerp(v0, v1, t);
    }

    // vo in 
    let clip_first_in = function (v0: Vertex, v1: Vertex, v2: Vertex) {
        // 1 triangle to 1 triangle
        // console.log('one');
        v_clip[0] = new Triangle(v0, getCrossPoint(v0, v1), getCrossPoint(v0, v2))
    }

    // vo out
    let clip_first_out = function (v0: Vertex, v1: Vertex, v2: Vertex) {
        // console.log('two');
        // 1 triangle to 2 triangle
        let cross1 = getCrossPoint(v2, v0);
        let cross2 = getCrossPoint(v0, v1);

        v_clip[0] = new Triangle(v2, cross1, cross2);
        v_clip[1] = new Triangle(v2, cross2, v1);
    }


    // 有8種情況
    if (v0_out(triangle)/*triangle.v0.p.z < nearPlaneZ*/)//out
    {
        if (v1_out(triangle) /* triangle.v1.p.z < nearPlaneZ */)// out out
        {
            if (v2_out(triangle) /*triangle.v2.p.z < nearPlaneZ*/)//full out of nearPlaneZ (no clip)
            {
                // console.log('full out');
            }
            else //out out in
                clip_first_in(triangle.v2, triangle.v0, triangle.v1);
        }
        else //out in 
        {
            if (v2_out(triangle) /*triangle.v2.p.z < nearPlaneZ*/)//out in out
                clip_first_in(triangle.v1, triangle.v2, triangle.v0);
            else // out in in
                clip_first_out(triangle.v0, triangle.v1, triangle.v2);
        }
    }
    else // in
    {
        if (v1_out(triangle) /*triangle.v1.p.z < nearPlaneZ*/)// in out 
        {
            if (v2_out(triangle) /*triangle.v2.p.z < nearPlaneZ*/)// in out out
                clip_first_in(triangle.v0, triangle.v1, triangle.v2);
            else // in out in
                clip_first_out(triangle.v1, triangle.v2, triangle.v0);
        }
        else // in in
        {
            if (v2_out(triangle) /*triangle.v2.p.z < nearPlaneZ*/)// in in out
                clip_first_out(triangle.v2, triangle.v0, triangle.v1);
            else // in in in (no clip)
            {
                v_clip[0] = triangle;
            }
        }
    }
    return v_clip;
}