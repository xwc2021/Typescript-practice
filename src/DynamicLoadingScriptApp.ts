import CreateScriptPlugin from "./CreateScriptPlugin";
import HHelper from "./Math/HHelper";
import GameObject from "./Object/GameObject"

declare global {
    interface Window {
        createScriptPlugin: CreateScriptPlugin;
        abc: () => {};
    }
}
export default class DynamicLoadingScriptApp {
    object: GameObject;
    createScriptPlugin: CreateScriptPlugin;
    constructor() {

        this.createScriptPlugin = window.createScriptPlugin;

        this.object = new GameObject();
        this.object.scriptableList.push(this.createScriptPlugin.create("test"));
        this.object.doIt();

        window.onload = () => {

            HHelper.$('add_script_btn').onclick = () => {
                var className = HHelper.$('script_class_name_txt').innerText;
                this.object.scriptableList.push(this.createScriptPlugin.create(className));
            };

            HHelper.$('do_it_btn').onclick = () => {
                this.object.doIt();
            };

            let obj = this;
            HHelper.$('load_script_btn').onclick = () => {
                var script = document.createElement('script');
                script.onload = function () {
                    console.log("load ok");
                    obj.createScriptPlugin = window.createScriptPlugin;
                };
                script.src = "dist/CreateScriptPlugin.js";
                document.head.appendChild(script);
            };
        };
    }
}
new DynamicLoadingScriptApp();

