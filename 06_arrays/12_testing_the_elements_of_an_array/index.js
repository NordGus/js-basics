const numbers = [1, 2, 3];
const another = [1, -1, 2, 3];

const allPositive = numbers.every(value => value >= 0);
const atLeastOnePositive = another.some(value => value >= 0);


console.log(allPositive);
console.log(atLeastOnePositive);