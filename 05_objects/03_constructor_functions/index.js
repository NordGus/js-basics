// Factory Functions: naming covention camelNotation
// Constructor Functions: naming covention PascalConvention

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('radius:', this.radius);
    }
}

const circle = new Circle(1);

console.log(circle);
circle.draw();