import Scriptable from "./Script/Scriptable"
import CreateScriptProxy from "./UserScript/CreateScriptProxy";

declare global {
    interface Window { createScriptPlugin: CreateScriptPlugin; }
}
export default class CreateScriptPlugin {
    createScriptProxy: CreateScriptProxy
    constructor() {
        this.createScriptProxy = new CreateScriptProxy();
        window.createScriptPlugin = this;
        console.log("mount CreateScriptPlugin")
    }

    create(className: string): Scriptable {
        return this.createScriptProxy.create(className);
    }
}
new CreateScriptPlugin();