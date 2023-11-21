const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');


class SHAPES {
  constructor(Shape, Circle, Square, Triangle, ShapeColor, LogoName, TextColor ) {
     
    this.Shape = Shape;
    this.Circle = Circle; 
    this.Square = Square; ;
    this.Triangle = Triangle; 
    this.ShapeColor = ShapeColor;
    this.LogoName = LogoName;
    this.TextColor = TextColor;
    
}

run(){
  return inquirer
    .prompt([
      {
      type: "input",
      name: "LogoName",
      message: "Enter text for the logo name, no more than 3 characters.",
      },
      {
      type: "input",
      name: "TextColor",
      message: "Enter your color keyword for the text.",
      },
      {
      type: "list",
      name: "Shape",
      message: "Select a shape.",
      choices: ["Circle", "Square", "Triangle"],
      },
      {
      type: "input",
      name: "ShapeColor",
      message: "Enter your color keyword for the shape.",
      },
    ])
    .then((logoinput) => {
      if (logoinput.LogoName.length > 3) {
        throw new Error("Logo name cannot be more than 3 characters");
      }

//for some reason below partly works when putting "logoinput" instead of "this", works less with "this"
//original plan for the different shapes (below):
//if (logoinput.Shape === Circle ) {
  //const shapeChoice = new Circle();
  //shapeChoice.setColor(`${logoinput.ShapeColor}`);
  //expect(shapeChoice.render()).toEqual (`<circle cx="150" cy="115" r="80" fill="${logoinput.ShapeColor}"/>`);

//} else if (logoinput.Shape === Square) {
  //const shapeChoice = new Square();
  //shapeChoice.setColor(`${logoinput.ShapeColor}`);
  //expect(shapeChoice.render()).toEqual (`<rect x="73" y="40" width="160" height="160" fill="${logoinput.ShapeColor}"/>`);

//} else if (logoinput.Shape === Triangle) {
  //const shapeChoice = new Triangle();
  //shapeChoice.setColor(`${logoinput.ShapeColor}`);
 // expect(shapeChoice.render()).toEqual (`<polygon points="150, 18 244, 182 56, 182" fill="${logoinput.ShapeColor}"/>`);
//}
let svgString = "";
svgString ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//need <g>?
//just trying one shape and color (below), was possibly supposed to be svgString += `${logoinput.Shape}`
svgString += `<circle cx="150" cy="115" r="80" fill="orange"/>`;
svgString += `<text x="150" y="130" text-anchor="middle" font-size="50" fill="${logoinput.TextColor}">${logoinput.LogoName}</text>`;
//need </g>?
svgString += '</svg>';

return writeFile("logo.svg", svgString, (err) => {
  err ? console.log(err) : console.log("Generated logo.svg");

});

});

}};
module.exports = SHAPES;