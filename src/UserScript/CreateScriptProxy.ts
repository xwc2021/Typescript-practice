import Scriptable from "../Script/Scriptable"
import Test from "./Test";

// 之後可以用程式手動生成
export default class CreateScriptProxy {
    create(className: string): Scriptable {
        switch (className) {
            case "Test":
                return new Test();
                break;
        }

        return new Test();
    }
}