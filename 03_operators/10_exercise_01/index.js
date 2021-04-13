let a = 'red';
let b = 'blue';

// function reverse(a, b) {
//     return [b, a];
// }

// [a, b] = reverse(a, b);

let c = a;
a = b;
b = c;

console.log('a:', a, '// b:', b);