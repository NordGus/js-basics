const numbers = [1, 2, 3, 4, 5, 6];

// removing from the end
const last = numbers.pop();
console.log(numbers);
console.log(last);

// removing from the beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// removing from the middle
const middle = numbers.splice(2, 2);
console.log(numbers);
console.log(middle);