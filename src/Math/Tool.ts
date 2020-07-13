export function degree_to_Rad(d: number) {
    return Math.PI * d / 180;
};

export const epsilon: number = 0.001;

export function number_equal(a: number, b: number) {
    return Math.abs(a - b) < epsilon;
}

/**
 * 
 * @param x input
 * @param a min 
 * @param b max
 */
export function clamp(x: number, a: number, b: number) {
    if (x > b)
        return b;
    else if (x < a)
        return a;
    else
        return x;
}