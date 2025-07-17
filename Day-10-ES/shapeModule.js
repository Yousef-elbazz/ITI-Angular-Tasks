// shapeModule.js
class Shape {
  #color;

  constructor(color) {
    this.#color = color;
  }

  get Color() {
    return this.#color;
  }

  set Color(value) {
    this.#color = value;
  }

  drawShape() {
    console.log(`Drawing shape with color: ${this.#color}`);
  }
}

export { Shape };
