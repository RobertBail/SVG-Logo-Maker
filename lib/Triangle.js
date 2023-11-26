const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, shapeChoice) {
        super(text, textColor, shapeColor);
        this.shapeChoice = shapeChoice
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points= "150, 8 284, 182 6, 182" fill="${this.shapeColor}" /><text x="147.5" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Triangle