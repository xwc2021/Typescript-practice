import HitInfo from "./HitInfo";
import Ray from "./Ray";
import Shader from "../Materails/Shader";

export default interface Hitable {
    hit(ray: Ray, s: Shader): HitInfo;
}