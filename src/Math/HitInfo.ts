import Vector from "./Vector";
import Material from "../Materails/Material";

export default interface HitInfo {
    is_hit: boolean;
    normal?: Vector;
    hit_pos?: Vector;
    t?: number;
    m?: Material;
}