import HitInfo from "./HitInfo";
import Ray from "./Ray";

export default interface Hitable {
    hit(ray: Ray): HitInfo;
}