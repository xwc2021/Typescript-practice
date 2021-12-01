import Vector from './Math/Vector'
import Camera from './Math/Camera'
import Rect from './Math/Rect';
import Plane from './Math/Plane';
import Sphere from './Math/Sphere';
import RenderTarget from './Math/RenderTarget';
import SceneNode from './Object/SceneNode';
import Diffuse from './Materails/Diffuse';
import Mirror from './Materails/Mirror';

export default class WhiteRayTracingApp {
    constructor() {

        let floor = new SceneNode(Diffuse.white, new Rect(new Plane(Vector.zero, Vector.up), 16, 16))
        let obj_list: SceneNode[] = [floor];
        obj_list.push(new SceneNode(Diffuse.yellow, new Sphere(new Vector(6, 2, -8), 2)));
        obj_list.push(new SceneNode(Diffuse.green, new Sphere(new Vector(-6, 2, -8), 2)));
        obj_list.push(new SceneNode(Diffuse.blue, new Sphere(new Vector(0, 2, -12), 2)));
        obj_list.push(new SceneNode(Diffuse.yellow, new Sphere(new Vector(-10, 6, 0), 6)));

        obj_list.push(new SceneNode(new Mirror(), new Sphere(new Vector(0, 2, -2), 2)));
        obj_list.push(new SceneNode(new Mirror(), new Sphere(new Vector(12, 4, -6), 4)));
        obj_list.push(new SceneNode(new Mirror(), new Sphere(new Vector(8, 4, 2), 4)));

        let SW = 800;
        let SH = 600;
        let camera = new Camera(new Vector(0, 20, -20), Vector.zero, 60, SW, SH, 1, 500);
        let render_target = new RenderTarget(SW, SH);
        camera.render(render_target, obj_list);
        render_target.show_buffer('canvas');
    }
}

new WhiteRayTracingApp();

