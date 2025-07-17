// squaresModule.js
import { Shape } from './shapeModule.js';

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    this.drawShape();
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(color, side) {
    super(color, side, side);
  }
}

export { Rectangle, Square };
