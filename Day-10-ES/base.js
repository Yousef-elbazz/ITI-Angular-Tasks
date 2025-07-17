// base.js
import { Rectangle, Square } from './squareModule.js';
import { Circle } from './circleModule.js';

const rect = new Rectangle("red", 10, 5);
const square = new Square("blue", 4);
const circle = new Circle("green", 3, 0, 0);


console.log("Rectangle Area:", rect.getArea());
console.log("Square Area:", square.getArea()); 
console.log("Circle Area:", circle.getArea()); 
