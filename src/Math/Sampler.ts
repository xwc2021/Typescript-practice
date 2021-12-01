import Buffer2D from "./Buffer2D";
import CavnasHelper from "./CanvasHelper";
import RGBA from "./RGBA";
import Vector2D from "./Vector2D";
import { MathHelper } from "./Tool";

export default class Sampler {

    static texture2D(u: number, v: number, w: number, h: number, buffer: Buffer2D<RGBA>) {
        //先找出最近點
        let grid_u = 1 / w;
        let grid_v = 1 / h;

        let half_grid_u = grid_u * 0.5;
        let half_grid_v = grid_v * 0.5;

        //以下是有4個鄰點的情況..
        let nearest_point_u_float = MathHelper.accDiv(u, grid_u);
        let nearest_point_v_float = MathHelper.accDiv(v, grid_v);
        // let nearest_point_u_float = u / grid_u;
        // let nearest_point_v_float = v / grid_v;

        let nearest_point_u = Math.floor(nearest_point_u_float);
        let nearest_point_v = Math.floor(nearest_point_v_float);

        //alert(nearest_point_u+","+nearest_point_v);

        //在「最近點」格裡的local uv
        let s_u = u % grid_u;
        let s_v = v % grid_v;

        //再找出相鄰3點
        if (s_u >= half_grid_u && s_v >= half_grid_v)//相鄰3點在右上
        {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;

            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;

            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 右上
            let BR = new Vector2D(P.x + 1, P.y);
            let TL = new Vector2D(P.x, P.y + 1);
            let TR = new Vector2D(P.x + 1, P.y + 1);
            //在4點內的uv
            let rectUV = new Vector2D((s_u - half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV, BL: P, BR, TL, TR, color: Sampler.Bilinear_Sampler(rectUV, P, BR, TL, TR, buffer) };
        }
        else if (s_u <= half_grid_u && s_v >= half_grid_v)//相鄰3點在左上
        {
            //剛好整除時要做修正

            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;

            let P = new Vector2D(nearest_point_u, nearest_point_v);


            // 左上
            let BL = new Vector2D(P.x - 1, P.y);
            let TL = new Vector2D(P.x - 1, P.y + 1);
            let TR = new Vector2D(P.x, P.y + 1);
            //在4點內的uv
            let rectUV = new Vector2D((s_u + half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV, BL, BR: P, TL, TR, color: Sampler.Bilinear_Sampler(rectUV, BL, P, TL, TR, buffer) };
        }
        else if (s_u <= half_grid_u && s_v <= half_grid_v)//相鄰3點在左下
        {
            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 左下
            let BL = new Vector2D(P.x - 1, P.y - 1);
            let BR = new Vector2D(P.x, P.y - 1);
            let TL = new Vector2D(P.x - 1, P.y);
            //在4點內的uv
            let rectUV = new Vector2D((s_u + half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV, BL, BR, TL, TR: P, color: Sampler.Bilinear_Sampler(rectUV, BL, BR, TL, P, buffer) };
        }
        else if (s_u >= half_grid_u && s_v <= half_grid_v)//相鄰3點在右下
        {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;

            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 右下
            let BL = new Vector2D(P.x, P.y - 1);
            let BR = new Vector2D(P.x + 1, P.y - 1);
            let TR = new Vector2D(P.x + 1, P.y);
            //在4點內的uv
            let rectUV = new Vector2D((s_u - half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV, BL, BR, TL: P, TR, color: Sampler.Bilinear_Sampler(rectUV, BL, BR, P, TR, buffer) };
        }
    }

    static Bilinear_Sampler(rectUV: Vector2D, BL: Vector2D, BR: Vector2D, TL: Vector2D, TR: Vector2D, buffer: Buffer2D<RGBA>) {

        //對4個點顏色作內插
        let BLc = buffer.get_clamp_mode(BL.x, BL.y);
        let BRc = buffer.get_clamp_mode(BR.x, BR.y);
        let TLc = buffer.get_clamp_mode(TL.x, TL.y);
        let TRc = buffer.get_clamp_mode(TR.x, TR.y);

        let bottomRGB = RGBA.lerp(BLc, BRc, rectUV.x);
        let topRGB = RGBA.lerp(TLc, TRc, rectUV.x);
        let middleRGB = RGBA.lerp(bottomRGB, topRGB, rectUV.y);
        return middleRGB;
    }

}