import HitInfo from "./HitInfo";
import Ray from "./Ray";
import Material from "../Materails/Material";

export default interface Hitable {
    hit(ray: Ray, m: Material): HitInfo;
}