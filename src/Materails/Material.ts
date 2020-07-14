import Vector from "../Math/Vector";

export default class Material {
    static yellow = new Material(new Vector(1, 1, 0));
    static red = new Material(new Vector(1, 0, 0));
    static green = new Material(new Vector(0, 1, 0));
    static blue = new Material(new Vector(0, 0, 1));
    static gray = new Material(new Vector(0.5, 0.5, 0.5));
    static white = new Material(new Vector(1, 1, 1));

    color: Vector;
    constructor(color: Vector) {
        this.color = color;
    }
}