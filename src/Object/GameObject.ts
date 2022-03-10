import Scriptable from "../Script/Scriptable"
export default class GameObject {
    scriptableList: Array<Scriptable> = new Array<Scriptable>();
    doIt(): void {
        this.scriptableList.forEach(item => item.doIt());
    }
}