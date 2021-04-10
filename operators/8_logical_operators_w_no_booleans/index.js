// Logical Operators with Non-Booleans
// Logical Operators with Non-Booleans

console.log('Falsy (false) values:');
console.log(undefined, 'null', 0, false, '', NaN);
console.log('Anything that is not Falsy -> Truthy');

console.log('Examples:');
console.log('false || true:', false || true);
console.log('false || "Gustavo":', false || 'Gustavo');
console.log('false || 1:', false || 1);
console.log('false || 1 || 2:', false || 1 || 2, '// In this example returns 1 because the Logical or Operation returns the first Truthy value in the operand chain. AKA Short-circuiting');

console.log('Short-circuiting Example:');
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor, '// Returns red because userColor is Truthy');

userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor, '// Returns blue because userColor is Falsy');