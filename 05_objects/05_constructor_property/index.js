// Every object have a constructor function and references the constructor function used to construct the object

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('radius:', this.radius);
        },
    };
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('radius:', this.radius);
    }
}

const circle1 = createCircle(1);
const circle2 = new Circle(1);
console.log(circle1.constructor);
console.log(circle2.constructor);