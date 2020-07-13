import Vector from "./Vector";

export default interface HitInfo {
    is_hit: boolean;
    hit_pos?: Vector;
    t?: number;
}