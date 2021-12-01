import RGBA from "./RGBA";
import Vector2D from "./Vector2D";
import { clamp } from "./Tool";

export default class Buffer2D<T> {
    w: number;
    h: number;
    buffer: Array<Array<T>>;
    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
        this.buffer = new Array<Array<T>>(this.h);
        console.log(w, h);
        for (let y = 0; y < this.h; ++y) {
            this.buffer[y] = new Array<T>(this.w);
        }
    }

    set(x: number, y: number, value: T) {
        if (this.is_legal_index(x, y))
            this.buffer[y][x] = value;
        else {
            console.log('set', this.w, this.h, x, y);
            return RGBA.debug;
        }
    }

    get(x: number, y: number) {
        if (this.is_legal_index(x, y))
            return this.buffer[y][x];
        else {
            console.log('get', this.w, this.h, x, y);
            return RGBA.debug;
        }

    }

    clear(value: T) {
        for (let y = 0; y < this.h; ++y) {
            for (let x = 0; x < this.w; ++x) {
                this.buffer[y][x] = value;
            }
        }
    }

    // 超過邊界就使用邊界值
    get_clamp_mode(x: number, y: number) {
        let nx = clamp(x, 0, this.w - 1);
        let ny = clamp(y, 0, this.h - 1);

        return this.buffer[ny][nx];
    }

    is_legal_index(x: number, y: number) {
        if (x >= 0 && x < this.w && y >= 0 && y < this.h)
            return true;
        else return false;
    }

    is_over_negative(x: number, y: number, endX: number, endY: number) {
        if (y > endY || x < endX)
            return true;
        else
            return false;
    }

    is_over_positive(x: number, y: number, endX: number, endY: number) {
        if (y > endY || x > endX)
            return true;
        else
            return false;
    }
}