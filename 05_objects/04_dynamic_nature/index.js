// the const keyword prevents for reassign the circle constant but not for modifying the underlying object,
// because objects are dynamic by nature
const circle = {
    radius: 1
};

console.log(circle);
circle.color = 'yellow';
console.log(circle);
circle.draw = () => console.log('draw');
console.log(circle);
delete circle.color;
console.log(circle);
delete circle.draw;
console.log(circle);