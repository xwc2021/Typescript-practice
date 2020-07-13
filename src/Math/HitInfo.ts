import Vector from "./Vector";

export default interface HitInfo {
    is_hit: boolean;
    normal?: Vector;
    hit_pos?: Vector;
    t?: number;
}