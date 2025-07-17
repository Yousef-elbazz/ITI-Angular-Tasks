// circleModule.js
import { Shape } from './shapeModule.js';

class Circle extends Shape {
  constructor(color, radius, x, y) {
    super(color);
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  getArea() {
    this.drawShape();
    return Math.PI * this.radius * this.radius;
  }
}

export { Circle };
