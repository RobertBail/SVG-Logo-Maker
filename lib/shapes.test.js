const Circle = require("../lib/Circle")

describe('Circle', () => {
  test('Circle logo successfully generated', () => {
    const CircleShape = new Circle(`SVG`,"red","yellow", "circle").render();
//I have to format svg string like this (below), only way it would read and pass
    expect(CircleShape).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="110" r="80" fill="yellow" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
  });
});

const Square = require("../lib/Square")

describe('Square', () => {
  test('Square logo successfully generated', () => {
    const SquareShape = new Square(`SVG`,"red","yellow", "square").render();
//I have to format svg string like this (below), only way it would read and pass
    expect(SquareShape).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="35" width="150" height="150" fill="yellow" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
  });
});

const Triangle = require("../lib/Triangle")

describe('Triangle', () => {
  test('Triangle logo successfully generated', () => {
    const TriangleShape = new Triangle(`SVG`,"red","yellow", "triangle").render();
//I have to format svg string like this (below), only way it would read and pass
    expect(TriangleShape).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points= "150, 8 284, 182 6, 182" fill="yellow" /><text x="147.5" y="135" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
  });
});