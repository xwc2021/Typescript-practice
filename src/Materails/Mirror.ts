import Shader from "./Shader";
import Vector from "../Math/Vector";
import HitInfo from "../Math/HitInfo";
import { epsilon, get_hit_sort_list } from "../Math/Tool"
import Ray from "../Math/Ray";
import SceneNode from "../Object/SceneNode";
import Diffuse from "./Diffuse";

export default class Mirror implements Shader {
    shading(hit_info: HitInfo, direction_light_dir: Vector, obj_list: SceneNode[], depth: number) {

        if (depth > 20) {
            console.log('超過上限');
            return Diffuse.green.color;
        }
        let n = hit_info.normal;
        let i = hit_info.i;
        let r = Vector.reflect(i, n);

        // 產生反射ray
        let from = hit_info.hit_pos.add(r.multiply(epsilon)); // 偏移一小段距離，避免射中自己
        let ray = new Ray(from, r);
        let hit_sort_list = get_hit_sort_list(obj_list, ray);

        let color = new Vector(1, 1, 1);
        // 有射中嗎
        let is_hit = hit_sort_list.length != 0;
        if (is_hit) {
            let hit_info_next = hit_sort_list[0];
            let hit_color = hit_info_next.s ? hit_info_next.s.shading(hit_info_next, direction_light_dir, obj_list, ++depth) : new Vector(1, 0, 0);
            return Vector.multiply3(color, hit_color.multiply(0.9));
        } else {
            return Vector.multiply3(color, Diffuse.gray.color.multiply(0.9));
        }
    }
}