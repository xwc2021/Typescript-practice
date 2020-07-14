import Diffuse from "../Materails/Diffuse";
import Hitable from "../Math/Hitable";
import Shader from "../Materails/Shader";

export default class SceneNode {

    s: Shader;
    h: Hitable;
    constructor(s: Shader, h: Hitable) {
        this.s = s;
        this.h = h;
    }
}