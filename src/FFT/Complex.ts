export default class Complex {
    x:number;
    y:number;
    constructor(x:number, y:number){
        this.x = x; // real
        this.y = y; // image
    }
    
    add (c:Complex, result:Complex) {
        result.x = this.x + c.x;
        result.y = this.y + c.y;
    }

    minus  (c:Complex, result:Complex) {
        result.x = this.x - c.x;
        result.y = this.y - c.y;
    }

    multiply  (c:Complex, result:Complex) {
        let x = this.x;
        let y = this.y;
        let a = c.x;
        let b = c.y;
        result.x = a * x - b * y;
        result.y = a * y + b * x;
    }

    rewrite (c:Complex)  {
        this.x = c.x;
        this.y = c.y;
    }

    length () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}