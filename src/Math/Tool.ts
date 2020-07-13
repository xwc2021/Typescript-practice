export function degree_to_Rad(d: number) {
    return Math.PI * d / 180;
};

export const epsilon: number = 0.001;

export function number_equal(a: number, b: number) {
    return Math.abs(a - b) < epsilon;
}