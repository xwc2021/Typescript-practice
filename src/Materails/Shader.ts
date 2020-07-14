import HitInfo from "../Math/HitInfo";
import Vector from "../Math/Vector";
import SceneNode from "../Object/SceneNode";

export default interface Shader {
    shading(hit_info: HitInfo, direction_light_dir: Vector, obj_list: SceneNode[], depth: number): Vector;
}