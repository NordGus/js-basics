// Objects
// An object is a reference type
// {} = Object Literal

let person = {
    name: 'Gustavo',
    age: 30
};
console.log(person);


// Dot Notation
person.name = 'Gustavo Adolfo';
console.log(person.name);

// Bracket Notation
// Useful when you need to access the object data on runtime,
// because you don't know which property you gonna access until
// runtime.
let selection = 'name';
person[selection] = 'Oscar Eduardo';
console.log(person.name);