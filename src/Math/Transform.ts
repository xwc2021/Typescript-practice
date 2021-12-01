import Vector from "./Vector";
import { degree_to_Rad } from './Tool'

export default class Transform {
    xAxis: Vector;
    yAxis: Vector;
    zAxis: Vector;
    position: Vector;
    constructor(xAxis: Vector, yAxis: Vector, zAxis: Vector, position: Vector) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.zAxis = zAxis;
        this.position = position;
    }

    static transformPoint(transform: Transform, point: Vector) {
        let vectorX = transform.xAxis.multiply(point.x);
        let vectorY = transform.yAxis.multiply(point.y);
        let vectorZ = transform.zAxis.multiply(point.z);

        return transform.position.add(vectorX).add(vectorY).add(vectorZ);
    }

    static transformVector(transform: Transform, vertex: Vector) {
        let vectorX = transform.xAxis.multiply(vertex.x);
        let vectorY = transform.yAxis.multiply(vertex.y);
        let vectorZ = transform.zAxis.multiply(vertex.z);

        return vectorX.add(vectorY).add(vectorZ);
    }

    static transformTransform(transform: Transform, inputTransform: Transform) {
        return new Transform(
            Transform.transformVector(transform, inputTransform.xAxis),
            Transform.transformVector(transform, inputTransform.yAxis),
            Transform.transformVector(transform, inputTransform.zAxis),
            Transform.transformPoint(transform, inputTransform.position),
        );
    }

    static rotateByZ(degree: number) {
        let radian = degree_to_Rad(degree);
        let c = Math.cos(radian), s = Math.sin(radian);
        let xAxis = new Vector(c, s, 0);
        let yAxis = new Vector(-s, c, 0);
        let zAxis = new Vector(0, 0, 1);

        return new Transform(
            xAxis,
            yAxis,
            zAxis,
            Vector.zero,
        );
    }

    static rotateByY(degree: number) {
        let radian = degree_to_Rad(degree);
        let c = Math.cos(radian), s = Math.sin(radian);
        let zAxis = new Vector(s, 0, c);
        let xAxis = new Vector(c, 0, -s);
        let yAxis = new Vector(0, 1, 0);

        return new Transform(
            xAxis,
            yAxis,
            zAxis,
            Vector.zero,
        );
    }

    static rotateByX(degree: number) {
        let radian = degree_to_Rad(degree);
        let c = Math.cos(radian), s = Math.sin(radian);
        let xAxis = new Vector(1, 0, 0);
        let yAxis = new Vector(0, c, s);
        let zAxis = new Vector(0, -s, c);

        return new Transform(
            xAxis,
            yAxis,
            zAxis,
            new Vector(0, 0, 0),
        );
    }

    static offset(x: number, y: number, z: number) {
        return new Transform(
            new Vector(1, 0, 0),
            new Vector(0, 1, 0),
            new Vector(0, 0, 1),
            new Vector(x, y, z),
        );
    }
}