import CreateScriptPlugin from "./CreateScriptPlugin";
import HHelper from "./Math/HHelper";
import GameObject from "./Object/GameObject"

declare global {
    interface Window { createScriptPlugin: CreateScriptPlugin; }
}
export default class DynamicLoadingScriptApp {
    object: GameObject;
    constructor() {

        var createScriptPlugin = window.createScriptPlugin;

        this.object = new GameObject();
        this.object.scriptableList.push(createScriptPlugin.create("test"));
        this.object.doIt();

        window.onload = () => {

            HHelper.$('add_script_btn').onclick = () => {
                var className = HHelper.$('script_class_name_txt').innerText;
                this.object.scriptableList.push(createScriptPlugin.create(className));
            };

            HHelper.$('do_it_btn').onclick = () => {
                this.object.doIt();
            };
        };
    }
}
new DynamicLoadingScriptApp();

