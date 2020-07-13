import Vector from './Math/Vector'
import Camera from './Math/Camera'
import Rect from './Math/Rect';
import Plane from './Math/Plane';
import Sphere from './Math/Sphere';
import RenderTarget from './Math/RenderTarget';

export default class App {
    constructor() {

        let rect = new Rect(new Plane(Vector.zero, new Vector(0, 0, -1)), 2, 2);
        let sphere = new Sphere(new Vector(6, 2, 0), 2);
        let obj_list = [rect, sphere];

        let camera = new Camera(new Vector(0, 10, -10), Vector.zero, 60);
        let render_target = new RenderTarget(320, 240);
        camera.render(render_target, obj_list);
        render_target.show_buffer('canvas');
    }
}

