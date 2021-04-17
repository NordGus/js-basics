const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf('1'));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1); // Checks if element exists in the array
console.log(numbers.includes(1)); // Checks if element exists in the array

console.log(numbers.indexOf(1, 2)); // Search starts at index 2