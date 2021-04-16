function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('radius:', this.radius);
    }
}

console.log(Circle.name);
console.log(Circle.length); // number of arguments it recieves
console.log(Circle.constructor);

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function () {
        console.log('radius:', this.radius);
    }
`);

const circle = new Circle(1);
const another = new Circle1(1);

console.log(circle);
console.log(another);