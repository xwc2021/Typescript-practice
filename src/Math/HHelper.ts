export default class HHelper {
    static $(id: string) {
        return <HTMLInputElement>document.getElementById(id);
    }
}