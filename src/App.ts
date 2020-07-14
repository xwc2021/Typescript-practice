import Vector from './Math/Vector'
import Camera from './Math/Camera'
import Rect from './Math/Rect';
import Plane from './Math/Plane';
import Sphere from './Math/Sphere';
import RenderTarget from './Math/RenderTarget';
import Hitable from './Math/Hitable';
import SceneNode from './Object/SceneNode';
import Material from './Materails/Material';

export default class App {
    constructor() {

        let floor = new SceneNode(Material.white, new Rect(new Plane(Vector.zero, Vector.up), 16, 16))
        let obj_list: SceneNode[] = [floor];
        obj_list.push(new SceneNode(Material.green, new Sphere(new Vector(6, 2, -8), 1)));
        obj_list.push(new SceneNode(Material.yellow, new Sphere(new Vector(0, 4, -6), 4)));

        let camera = new Camera(new Vector(0, 20, -20), Vector.zero, 60);
        let render_target = new RenderTarget(800, 600);
        camera.render(render_target, obj_list);
        render_target.show_buffer('canvas');
    }
}

