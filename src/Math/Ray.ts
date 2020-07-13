import Vecor from "./Vector";

export default class Ray {
    from: Vecor;
    dir: Vecor;

    constructor(from: Vecor, dir: Vecor) {
        this.from = from;
        this.dir = dir;
    }
};