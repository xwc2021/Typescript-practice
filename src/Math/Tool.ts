import SceneNode from "../Object/SceneNode";
import Ray from "./Ray";
import Ray4D from "./Ray4D";
import HitInfo from "./HitInfo";
import Vector from "./Vector";
import Triangle from "./Triangle";
import Vertex from "./Vertex";
import Plane from "./Plane";
import RGBA from "./RGBA";
import Buffer2D from "./Buffer2D";
import Vector2D from "./Vector2D";

export function degree_to_Rad(d: number) {
    return Math.PI * d / 180;
};

export const epsilon: number = 0.001;

export function number_equal(a: number, b: number) {
    return Math.abs(a - b) < epsilon;
}

export function clamp(x: number, min: number, max: number) {
    if (x > max)
        return max;
    else if (x < min)
        return min;
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
            case ClipPlane.Right:
                t = ray.t_when_x_equal_w();
                break;
            case ClipPlane.Left:
                t = ray.t_when_x_equal_minus_w();
                break;
            case ClipPlane.Top:
                t = ray.t_when_y_equal_w();
                break;
            case ClipPlane.Bottom:
                t = ray.t_when_y_equal_minus_w();
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
    if (v0_out(triangle))//out
    {
        if (v1_out(triangle))// out out
        {
            if (v2_out(triangle))// out out out (no clip)
            {
                // console.log('full out');
            }
            else //out out in
                clip_first_in(triangle.v2, triangle.v0, triangle.v1);
        }
        else //out in 
        {
            if (v2_out(triangle))//out in out
                clip_first_in(triangle.v1, triangle.v2, triangle.v0);
            else // out in in
                clip_first_out(triangle.v0, triangle.v1, triangle.v2);
        }
    }
    else // in
    {
        if (v1_out(triangle))// in out 
        {
            if (v2_out(triangle))// in out out
                clip_first_in(triangle.v0, triangle.v1, triangle.v2);
            else // in out in
                clip_first_out(triangle.v1, triangle.v2, triangle.v0);
        }
        else // in in
        {
            if (v2_out(triangle))// in in out
                clip_first_out(triangle.v2, triangle.v0, triangle.v1);
            else // in in in (no clip)
            {
                v_clip[0] = triangle;
            }
        }
    }
    return v_clip;
}

export class MathHelper {
    //修正除法錯誤
    static accDiv(arg1: number, arg2: number) {
        //code from http://8st.blogspot.tw/2012/10/jsbug.html
        let t1 = 0, t2 = 0, r1, r2;
        try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
        try { t2 = arg2.toString().split(".")[1].length } catch (e) { }

        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }

    //修正加法錯誤
    static accAdd(arg1: number, arg2: number) {
        //code from http://8st.blogspot.tw/2012/10/jsbug.html
        let r1, r2, m, c;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2))
        if (c > 0) {
            let cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            }
            else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        }
        else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }
        return (arg1 + arg2) / m
    }
}

// 以前寫的code
export class DrawHelper {

    static drawLine(one: Vector2D, two: Vector2D, value: RGBA, buffer: Buffer2D<RGBA>) {

        let now = one;
        let to = two;
        let diff = Vector2D.minus(to, now);

        let step = 100;
        if (diff.y == 0)//horizon
        {
            for (let i = 1; i < step; i++) {
                //左畫到右
                now.x = now.x + 1;
                if (!buffer.is_legal_index(now.x, now.y))
                    break;

                if (now.x > to.x)
                    break;

                buffer.set(now.x, now.y, value);
            }
            return;
        }

        if (diff.x == 0)//vertical
        {
            for (let i = 1; i < step; i++) {
                //上畫到下
                now.y = now.y + 1;
                if (!buffer.is_legal_index(now.x, now.y))
                    break;

                if (now.y > to.y)
                    break;

                buffer.set(now.x, now.y, value);
            }
            return;
        }

        let ratio = diff.x / diff.y;
        let abs_r = Math.abs(ratio);

        if (ratio > 0) {
            if (abs_r <= 1) {
                for (let i = 1; i < step; i++) {
                    now.y = now.y + 1;
                    now.x = now.x + abs_r;
                    let intX = Math.floor(now.x);
                    if (!buffer.is_legal_index(intX, now.y))
                        break;

                    if (buffer.is_over_positive(now.x, now.y, to.x, to.y))
                        break;

                    buffer.set(intX, now.y, value);
                }
            }
            else if (abs_r > 1) {
                for (let i = 1; i < step; i++) {
                    now.y = now.y + 1 / abs_r;
                    now.x = now.x + 1;
                    let intY = Math.floor(now.y);
                    if (!buffer.is_legal_index(now.x, intY))
                        break;

                    if (buffer.is_over_positive(now.x, now.y, to.x, to.y))
                        break;

                    buffer.set(now.x, intY, value);
                }
            }
        }
        else if (ratio < 0) {
            if (abs_r <= 1) {
                for (let i = 1; i < step; i++) {
                    now.y = now.y + 1;
                    now.x = now.x - abs_r;
                    let intX = Math.floor(now.x);
                    if (!buffer.is_legal_index(intX, now.y))
                        break;

                    if (buffer.is_over_negative(now.x, now.y, to.x, to.y))
                        break;

                    buffer.set(intX, now.y, value);
                }
            }
            else if (abs_r > 1) {
                for (let i = 1; i < step; i++) {
                    now.y = now.y + 1 / abs_r;
                    now.x = now.x - 1;
                    let intY = Math.floor(now.y);
                    if (!buffer.is_legal_index(now.x, intY))
                        break;

                    if (buffer.is_over_negative(now.x, now.y, to.x, to.y))
                        break;

                    buffer.set(now.x, intY, value);
                }
            }
        }

    }

    static drawStar(value: RGBA, buffer: Buffer2D<RGBA>) {
        let it = 5;
        let delta = 2 * Math.PI / it;
        let R = 9;
        let center = new Vector2D(10, 10);
        let startTheda = -Math.PI / 3;

        //畫圓
        // for (let i = 0; i < 500; i++) {
        //     let nowX = Math.floor(center.x + R * Math.cos(startTheda + delta * i));
        //     let nowY = Math.floor(center.y + R * Math.sin(startTheda + delta * i));

        //     let nextX = Math.floor(center.x + R * Math.cos(startTheda + delta * (i + 1)));
        //     let nextY = Math.floor(center.y + R * Math.sin(startTheda + delta * (i + 1)));

        //     DrawHelper.drawLineWrapper(new Vector2D(nowX, nowY), new Vector2D(nextX, nextY), value, buffer);
        // }

        //畫星星
        let k = 0;
        for (let i = 0; i < it; i++) {
            let nowX = Math.floor(center.x + R * Math.cos(startTheda + delta * k));
            let nowY = Math.floor(center.y + R * Math.sin(startTheda + delta * k));

            let nextX = Math.floor(center.x + R * Math.cos(startTheda + delta * (k + 2)));
            let nextY = Math.floor(center.y + R * Math.sin(startTheda + delta * (k + 2)));

            DrawHelper.drawLineWrapper(new Vector2D(nowX, nowY), new Vector2D(nextX, nextY), value, buffer);
            k = k + 2;
        }
    }

    static drawLineWrapper(t0: Vector2D, t1: Vector2D, value: RGBA, buffer: Buffer2D<RGBA>) {
        //從上往下畫
        if (t0.y < t1.y)
            DrawHelper.drawLine(t0, t1, value, buffer);
        else if (t1.y < t0.y)
            DrawHelper.drawLine(t1, t0, value, buffer);
        else //水平線
        {
            //從左往右畫
            if (t0.x < t1.x)
                DrawHelper.drawLine(t0, t1, value, buffer);
            else if (t1.x < t0.x)
                DrawHelper.drawLine(t1, t0, value, buffer);
        }
    }
}