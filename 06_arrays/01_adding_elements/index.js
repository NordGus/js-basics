const numbers = [3, 4];
console.log(numbers);

// Add elements to the end
numbers.push(5, 6);
console.log(numbers);

// Add elements to the beginning
numbers.unshift(1, 2);
console.log(numbers);

// Add elements to the middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);