const Circle = require('../lib/shapes.js');

  describe('Circle', () => {
    test('Circle logo successfully generated', () => {
      const shapeChoice = new Circle();
      //I tried ${this.ShapeColor} (below) for each earlier, didn't work either yet.
      shapeChoice.setColor(`${logoinput.ShapeColor}`);
      expect(shapeChoice.render()).toEqual (`<circle cx="150" cy="115" r="80" fill="${logoinput.ShapeColor}"/>`);
    });
  });

const Square = require('../lib/shapes.js');

  describe('Square', () => {
    test('Square logo successfully generated', () => {
      const shapeChoice = new Square();
      shapeChoice.setColor(`${logoinput.ShapeColor}`);
      expect(shapeChoice.render()).toEqual (`<rect x="73" y="40" width="160" height="160" fill="${logoinput.ShapeColor}"/>`);
    });
  });

const Triangle = require('../lib/shapes.js');

  describe('Triangle', () => {
    test('Triangle logo successfully generated', () => {
      const shapeChoice = new Triangle();
      shapeChoice.setColor(`${logoinput.ShapeColor}`);
      expect(shapeChoice.render()).toEqual (`<polygon points="150, 18 244, 182 56, 182" fill="${logoinput.ShapeColor}"/>`);
    });
  });
