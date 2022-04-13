import Complex from "./Complex";

/**
 *                               power
 * @param {*} power     \  /\  /
 * @param {*} N          \/  \/  N
 */
 function W(power:number, N:number) {
    let theda = power * -2 * Math.PI / N;
    return new Complex(Math.cos(theda), Math.sin(theda));
}


function str_reverse(str:string) {
    return str.split("").reverse().join("");
}

function zero_str(count:number) {
    let a = new Array(count);
    return a.fill(0).join("");
};

function bit_reverse(value:number, bit_length:number) {
    let bit_str = value.toString(2);

    //補0
    if (bit_str.length != bit_length) {
        let zero_count = bit_length - bit_str.length;
        bit_str = zero_str(zero_count) + bit_str;
    }

    let bit_str_reverse = str_reverse(bit_str);
    return parseInt(bit_str_reverse, 2);
}

// 蝴蝶算法的第1步
/**
 * 
 * @param {*} src 
 * @param {*} des 
 * @param {*} h row count
 */
function set_element_order_per_column(src:Complex[][], des:Complex[][], h:number) {
    let n = Math.log2(h);
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            let c = src[x][bit_reverse(y, n)];
            des[x][y].rewrite(c);
            //console.log(y, bit_reverse(y, n));
        }
    }
}

/**
 * 
 * @param {*} weights 
 * @param {*} src 
 * @param {*} des 
 * @param {*} h row count
 */
function multiply(weights:Complex[], src:Complex[][], des:Complex[][], h:number) {
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            src[x][y].multiply(weights[y], des[x][y]);
        }
    }
}

/**
 * 
 * @param {*} src 
 * @param {*} des 
 * @param {*} x 2^n= h ,x < n
 * @param {*} h 
 */
function add_or_minus(src:Complex[][], des:Complex[][], x:number, h:number) {
    let offset = Math.pow(2, x);
    // console.log(offset);
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            if (Math.floor(y / offset) % 2 == 0)
                src[x][y].add(src[x][y + offset], des[x][y]);
            else
                src[x][y - offset].minus(src[x][y], des[x][y]);
        }
    }
}

/**
 * 
 * @param {*} N 2^n= N
 * @param {*} order 1~(n-1)
 */
function build_weights(N:number, order:number, is_inverse:boolean) {
    let sign = is_inverse ? -1 : 1;

    let n = Math.log2(N);
    let w_offset = Math.pow(2, n - 1 - order);
    let repeat = w_offset;

    let count = Math.pow(2, order);
    let weights_subset = new Array(count).fill(new Complex(1, 0));// 複數的單位元是1+0i

    for (let i = 0; i < count; ++i) {
        weights_subset.push(W(i * w_offset * sign, N));
        // weights_subset.push("W_" + i * w_offset + "_" + N);
    }

    let weights = new Array();
    for (let i = 0; i < repeat; ++i)
        weights = weights.concat(weights_subset);

    return weights;
}

function butterfly(buffer1:Complex[][], buffer2:Complex[][], h:number, is_inverse:boolean) {
    // 蝴蝶算法的第1步:交換位置
    set_element_order_per_column(buffer1, buffer2, h);
    [buffer1, buffer2] = [buffer2, buffer1];

    let N = h;
    let n = Math.log2(N);
    for (let order = 0; order < n - 1; ++order) {
        add_or_minus(buffer1, buffer2, order, h);
        [buffer1, buffer2] = [buffer2, buffer1];

        let weights = build_weights(N, order + 1, is_inverse);
        // console.log(weights);
        multiply(weights, buffer1, buffer2, h);
        [buffer1, buffer2] = [buffer2, buffer1];
    }

    add_or_minus(buffer1, buffer2, n - 1, h);
    [buffer1, buffer2] = [buffer2, buffer1];

    return [buffer1, buffer2];
}

function transpose(src:Complex[][], des:Complex[][], h:number) {
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y)
            des[x][y].rewrite(src[y][x]);
    }

    return [des, src];
}

export function shift(src:Complex[][], des:Complex[][], h:number) {
    let offset = h / 2;
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y)
            des[x][y].rewrite(src[(x + offset) % h][(y + offset) % h]);
    }

    return [des, src];
}

function log(src:Complex[][], des:Complex[][], h:number) {
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            let len = src[x][y].length();
            let log_value = Math.log2(1 + len); // 這樣就不會出現-infinite
            des[x][y].x = log_value;
            des[x][y].y = log_value;
        }
    }

    return [des, src];
}

function get_min(src:Complex[][], h:number) {
    let min_x = Number.MAX_VALUE;
    let min_y = Number.MAX_VALUE;
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            min_x = Math.min(src[x][y].x, min_x);
            min_y = Math.min(src[x][y].y, min_y);
        }
    }
    return [min_x, min_y];
}

function get_max(src:Complex[][], h:number) {
    let max_x = Number.MIN_VALUE;
    let max_y = Number.MIN_VALUE;
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            max_x = Math.max(src[x][y].x, max_x);
            max_y = Math.max(src[x][y].y, max_y);
        }
    }
    return [max_x, max_y];
}

function remap(src:Complex[][], des:Complex[][], h:number, min:number[], max:number[]) {
    let range_x = max[0] - min[0];
    let range_y = max[1] - min[1];

    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            des[x][y].x = (src[x][y].x - min[0]) / range_x;
            des[x][y].y = (src[x][y].y - min[1]) / range_y;
        }
    }
    return [des, src];
}

function clear_center(src:Complex[][], des:Complex[][], h:number) {

    let min = get_min(src, h);
    let max = get_max(src, h);
    console.log(min, max);

    let center = h / 2 - 0.5;
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            let len = Math.sqrt(Math.pow(x - center, 2) + Math.pow(y - center, 2));
            if (len < 6) {
                des[x][y].x = 0;
                des[x][y].y = 0;
            } else {
                des[x][y].rewrite(src[x][y]);
            }
        }
    }

    return [des, src];
}

function test_add_or_minus() {
    let b1 = creat_buffer(8, 8);
    let b2 = creat_buffer(8, 8);

    for (let x = 0; x < 8; ++x) {
        for (let y = 0; y < 8; ++y)
            b1[x][y] = new Complex(y, y);
    }

    add_or_minus(b1, b2, 0, 8);
    console.log(b1);
    console.log(b2);
}

export function creat_buffer(w:number, h:number) {
    let buffer = new Array(w);
    for (let x = 0; x < w; ++x) {
        buffer[x] = new Array(h);

        for (let y = 0; y < h; ++y)
            buffer[x][y] = new Complex(0, 0);
    }
    return buffer;
}

function pow(src:Complex[][], des:Complex[][], h:number, power:number) {
    for (let x = 0; x < h; ++x) {
        for (let y = 0; y < h; ++y) {
            des[x][y].x = Math.pow(src[x][y].x, power);
            des[x][y].y = Math.pow(src[x][y].y, power);
        }
    }

    return [des, src];
}

export function FFT(buffer1:Complex[][], buffer2:Complex[][], h:number) {
    /*二維DFT可以分解成 2次一維DFT
    B=MX
    Y=M(B)T
    */

    [buffer1, buffer2] = butterfly(buffer1, buffer2, h, false);
    [buffer1, buffer2] = transpose(buffer1, buffer2, h);
    [buffer1, buffer2] = butterfly(buffer1, buffer2, h, false);

    return [buffer1, buffer2];
}

function IFFT(buffer1:Complex[][], buffer2:Complex[][], h:number) {
    [buffer1, buffer2] = butterfly(buffer1, buffer2, h, true);
    [buffer1, buffer2] = transpose(buffer1, buffer2, h);
    [buffer1, buffer2] = butterfly(buffer1, buffer2, h, true);
    let m = new Array(h).fill(new Complex(1 / h / h, 0));
    multiply(m, buffer1, buffer2, h);
    [buffer1, buffer2] = [buffer2, buffer1];

    return [buffer1, buffer2];
}

//
export function visualize(buffer1:Complex[][], buffer2:Complex[][], h:number) {

    [buffer1, buffer2] = log(buffer1, buffer2, h);
    let min = get_min(buffer1, h);
    let max = get_max(buffer1, h);
    // console.log(min, max);

    [buffer1, buffer2] = remap(buffer1, buffer2, h, min, max);
    [buffer1, buffer2] = transpose(buffer1, buffer2, h);

    //brightness
    // [buffer1, buffer2] = pow(buffer1, buffer2, h, 2.2);

    return [buffer1, buffer2];
}