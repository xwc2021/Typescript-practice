import Vecor from "./Vector";

export default class Vector4D {
    p: Vecor;
    w: number;

    constructor(p: Vecor, w: number) {
        this.p = p;
        this.w = w;
    }
};