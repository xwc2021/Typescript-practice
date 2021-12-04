import Vector from "./Vector";

import Shader from "../Materails/Shader";

export default interface HitInfo {
    positive_t: boolean;
    normal: Vector;
    i: Vector; // 入射向量
    hit_pos: Vector;
    t: number;
    s?: Shader;
}