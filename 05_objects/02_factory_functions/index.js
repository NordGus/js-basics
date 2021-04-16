// Factory Functions
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('radius:', this.radius);
        },
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(3);
console.log(circle1);
console.log(circle2);