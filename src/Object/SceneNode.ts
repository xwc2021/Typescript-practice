import Material from "../Materails/Material";
import Hitable from "../Math/Hitable";

export default class SceneNode {

    m: Material;
    h: Hitable;
    constructor(m: Material, h: Hitable) {
        this.m = m;
        this.h = h;
    }
}