const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./lib/Circle")
const Square = require("./lib/Square")
const Triangle = require("./lib/Triangle")
//run?
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter the logo name, no more than 3 characters.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter a color keyword or hexadecimal number for the text.',
    },
    {
      type: 'list',
      name: 'shapeChoice',
      message: `Please select logo shape`,
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter a color keyword or hexadecimal number for the shape color.',
    },
  ])
  .then((answers) => {

    if (answers.text.length > 3) {
        throw new Error('Logo name cannot be more than 3 characters');
    }

    if (answers.shapeChoice == "Circle") {
        var output = new Circle(answers.text, answers.textColor, answers.shapeColor, answers.shapeChoice)
    }
    if (answers.shapeChoice == "Square") {
        var output = new Square(answers.text, answers.textColor, answers.shapeColor, answers.shapeChoice)
    }
    if (answers.shapeChoice == "Triangle") {
        var output = new Triangle(answers.text, answers.textColor, answers.shapeColor, answers.shapeChoice)
    }
  
    fs.writeFile("Logo.svg", output.render(), (err) => err ? console.log(err) : console.log('Successfully generated logo.svg'));

  })
  .catch((err) => console.error(err));
