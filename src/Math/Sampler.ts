import Buffer2D from "./Buffer2D";
import RGBA from "./RGBA";
import Vector2D from "./Vector2D";

export default class Sampler {

    static uv_to_buffer_space(uv: Vector2D) {
        return new Vector2D(uv.x, 1 - uv.y);
    }

    static buffer_to_uv_space(uv: Vector2D) {
        return new Vector2D(uv.x, 1 - uv.y);
    }

    static texture2D(uv: Vector2D, buffer: Buffer2D<RGBA>) {

        let w = buffer.w;
        let h = buffer.h;

        let buffer_uv = Sampler.uv_to_buffer_space(uv);
        let u = buffer_uv.x;
        let v = buffer_uv.y;

        //先找出最近點
        let grid_u = 1 / w;
        let grid_v = 1 / h;

        let half_grid_u = grid_u * 0.5;
        let half_grid_v = grid_v * 0.5;

        //以下是有4個鄰點的情況..
        let nearest_point_u_float = u / grid_u;
        let nearest_point_v_float = v / grid_v;

        let nearest_point_u = Math.floor(nearest_point_u_float);
        let nearest_point_v = Math.floor(nearest_point_v_float);

        //alert(nearest_point_u+","+nearest_point_v);

        //在「最近點」格裡的local uv
        let s_u = u % grid_u;
        let s_v = v % grid_v;

        //再找出相鄰3點
        if (s_u >= half_grid_u && s_v >= half_grid_v)//相鄰3點在右下
        {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;

            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;
            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 右下
            let NE = new Vector2D(P.x + 1, P.y);
            let SW = new Vector2D(P.x, P.y + 1);
            let SE = new Vector2D(P.x + 1, P.y + 1);
            //在4點內的uv
            let rectUV = new Vector2D((s_u - half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV, NW: P, NE, SW, SE, color: Sampler.Bilinear_Sampler(rectUV, P, NE, SW, SE, buffer) };
        }
        else if (s_u <= half_grid_u && s_v >= half_grid_v)//相鄰3點在左下
        {
            //剛好整除時要做修正
            if (nearest_point_v_float == nearest_point_v)
                nearest_point_v = nearest_point_v - 1;
            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 左下
            let NW = new Vector2D(P.x - 1, P.y);
            let SW = new Vector2D(P.x - 1, P.y + 1);
            let SE = new Vector2D(P.x, P.y + 1);
            //在4點內的uv
            let rectUV = new Vector2D((s_u + half_grid_u) / grid_u, (s_v - half_grid_v) / grid_v);
            return { rectUV, NW, NE: P, SW, SE, color: Sampler.Bilinear_Sampler(rectUV, NW, P, SW, SE, buffer) };
        }
        else if (s_u <= half_grid_u && s_v <= half_grid_v)//相鄰3點在左上
        {
            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 左上
            let NW = new Vector2D(P.x - 1, P.y - 1);
            let NE = new Vector2D(P.x, P.y - 1);
            let SW = new Vector2D(P.x - 1, P.y);
            //在4點內的uv
            let rectUV = new Vector2D((s_u + half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV, NW, NE, SW, SE: P, color: Sampler.Bilinear_Sampler(rectUV, NW, NE, SW, P, buffer) };
        }
        else if (s_u >= half_grid_u && s_v <= half_grid_v)//相鄰3點在右上
        {
            //剛好整除時要做修正
            if (nearest_point_u_float == nearest_point_u)
                nearest_point_u = nearest_point_u - 1;
            let P = new Vector2D(nearest_point_u, nearest_point_v);

            // 右上
            let NW = new Vector2D(P.x, P.y - 1);
            let NE = new Vector2D(P.x + 1, P.y - 1);
            let SE = new Vector2D(P.x + 1, P.y);
            //在4點內的uv
            let rectUV = new Vector2D((s_u - half_grid_u) / grid_u, (s_v + half_grid_v) / grid_v);
            return { rectUV, NW, NE, SW: P, SE, color: Sampler.Bilinear_Sampler(rectUV, NW, NE, P, SE, buffer) };
        }
    }

    static Bilinear_Sampler(rectUV: Vector2D, NW: Vector2D, NE: Vector2D, SW: Vector2D, SE: Vector2D, buffer: Buffer2D<RGBA>) {

        //對4個點顏色作內插
        let NWc = buffer.get_clamp_mode(NW.x, NW.y);
        let NEc = buffer.get_clamp_mode(NE.x, NE.y);
        let SWc = buffer.get_clamp_mode(SW.x, SW.y);
        let SEc = buffer.get_clamp_mode(SE.x, SE.y);

        let nRGB = RGBA.lerp(NWc, NEc, rectUV.x);
        let sRGB = RGBA.lerp(SWc, SEc, rectUV.x);
        let middleRGB = RGBA.lerp(nRGB, sRGB, rectUV.y);
        return middleRGB;
    }
}