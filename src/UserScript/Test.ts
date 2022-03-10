import Scriptable from "../Script/Scriptable"

export default class Test implements Scriptable {
    doIt(): void {
        console.log("doIt : " + (3 * 5));
    };
}