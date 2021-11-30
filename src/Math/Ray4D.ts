import Vector from "./Vector";
import Vecor4D from "./Vector4D";

export default class Ray {
    from: Vecor4D;
    dir: Vecor4D;

    constructor(from: Vecor4D, to: Vecor4D) {
        this.from = from;
        this.dir = new Vecor4D(Vector.minus(to.p, from.p), to.w - from.w);
    }

    // https://gpnnotes.blogspot.com/2021/11/blog-post_28.html
    // 圖 4D space clip
    // 這裡用Directx的NDC
    t_when_x_equal_w() {
        // from.x + t * dir.x= from.w + t * dir.w;
        let t = (this.from.w - this.from.p.x) / (this.dir.p.x - this.dir.w);
        return t;
    }

    t_when_y_equal_w() {
        let t = (this.from.w - this.from.p.y) / (this.dir.p.y - this.dir.w);
        return t;
    }

    t_when_z_equal_w() {
        let t = (this.from.w - this.from.p.z) / (this.dir.p.z - this.dir.w);
        return t;
    }

    t_when_x_equal_minus_w() {
        // from.x + t * dir.x= -(from.w + t * dir.w);

        let t = -(this.from.w + this.from.p.x) / (this.dir.w + this.dir.p.x);
        return t;
    }

    t_when_y_equal_minus_w() {
        let t = -(this.from.w + this.from.p.y) / (this.dir.w + this.dir.p.y);
        return t;
    }

    t_when_z_equal_zero_w() {

        // from.z + t * dir.z= 0;
        let t = -this.from.p.z / this.dir.p.z;
        return t;
    }
};