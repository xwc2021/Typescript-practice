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

        var nearest_point_u = Math.floor(nearest_point_u_float);
        var nearest_point_v = Math.floor(nearest_point_v_float);

        var P = new Vector2D(nearest_point_u, nearest_point_v);
        //alert(nearest_point_u+","+nearest_point_v);

        //在「最近點」格裡的local uv
        var s_u = u % grid_u;
        var s_v = v % grid_v;


        //再找出相鄰3點
        if (s_u >= half_grid_u && s_v >= half_grid_v)//相鄰3點在右下
        {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;

            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;

            P = new Vector2D(nearest_point_u, nearest_point_v);

            //alert("右下");
            var NE = new Vector2D(P.x + 1, P.y);
            var SW = new Vector2D(P.x, P.y + 1);
            var SE = new Vector2D(P.x + 1, P.y + 1);
            //在4點內的uv
            var rectUV = new Vector2D((s_u - half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV, NW: P, NE, SW, SE, color: Sampler.Bilinear_Sampler(rectUV, P, NE, SW, SE, buffer) };
        }
        else if (s_u <= half_grid_u && s_v >= half_grid_v)//相鄰3點在左下
        {
            //剛好整除時要做修正

            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;

            P = new Vector2D(nearest_point_u, nearest_point_v);


            //alert("左下");
            var NW = new Vector2D(P.x - 1, P.y);
            var SW = new Vector2D(P.x - 1, P.y + 1);
            var SE = new Vector2D(P.x, P.y + 1);
            //在4點內的uv
            var rectUV = new Vector2D((s_u + half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV, NW, NE: P, SW, SE, color: Sampler.Bilinear_Sampler(rectUV, NW, P, SW, SE, buffer) };
        }
        else if (s_u <= half_grid_u && s_v <= half_grid_v)//相鄰3點在左上
        {
            //alert("左上");
            var NW = new Vector2D(P.x - 1, P.y - 1);
            var NE = new Vector2D(P.x, P.y - 1);
            var SW = new Vector2D(P.x - 1, P.y);
            //在4點內的uv
            var rectUV = new Vector2D((s_u + half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV, NW, NE, SW, SE: P, color: Sampler.Bilinear_Sampler(rectUV, NW, NE, SW, P, buffer) };
        }
        else if (s_u >= half_grid_u && s_v <= half_grid_v)//相鄰3點在右上
        {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;

            P = new Vector2D(nearest_point_u, nearest_point_v);

            //alert("右上");
            var NW = new Vector2D(P.x, P.y - 1);
            var NE = new Vector2D(P.x + 1, P.y - 1);
            var SE = new Vector2D(P.x + 1, P.y);
            //在4點內的uv
            var rectUV = new Vector2D((s_u - half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV, NW, NE, SW: P, SE, color: Sampler.Bilinear_Sampler(rectUV, NW, NE, P, SE, buffer) };
        }
    }

    static Bilinear_Sampler(rectUV: Vector2D, NW: Vector2D, NE: Vector2D, SW: Vector2D, SE: Vector2D, buffer: Buffer2D<RGBA>) {

        //對4個點顏色作內插
        let NWcolor = buffer.get_clamp_mode(NW.x, NW.y);
        let NEcolor = buffer.get_clamp_mode(NE.x, NE.y);
        let SWcolor = buffer.get_clamp_mode(SW.x, SW.y);
        let SEcolor = buffer.get_clamp_mode(SE.x, SE.y);

        let topRGB = RGBA.lerp(NWcolor, NEcolor, rectUV.x);
        let downRGB = RGBA.lerp(SWcolor, SEcolor, rectUV.x);
        let middleRGB = RGBA.lerp(topRGB, downRGB, rectUV.y);
        return middleRGB;
    }

}