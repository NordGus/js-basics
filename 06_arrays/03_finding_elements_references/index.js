const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'c' },
    { id: 4, name: 'd' }
];

const callback = course => course.name === 'a';
const badCallback = course => course.name === 'xyz';

console.log(courses.find(callback));
console.log(courses.findIndex(callback));

console.log(courses.find(badCallback));
console.log(courses.findIndex(badCallback));