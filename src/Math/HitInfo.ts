import Vector from "./Vector";
import Material from "../Object/Material";

export default interface HitInfo {
    is_hit: boolean;
    normal?: Vector;
    hit_pos?: Vector;
    t?: number;
    m?: Material;
}