const Shape = require('./shapes');

class Square extends Shape {
    constructor(text, textColor, shapeColor, shapeChoice) {
        super(text, textColor, shapeColor);
        this.shapeChoice= shapeChoice
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="35" width="150" height="150" fill="${this.shapeColor}" /><text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Square