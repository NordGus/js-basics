// Primitive are copied by their value
// Objects are copied by reference4

let x = 10;
let y = x;

x = 20;

console.log(x, y);

let w = { value: 10 };
let z = { value: 10 };
w.value = 20;

console.log(w, z);

let num = 10;
function increase(number) {
    number++;
}
increase(num);
console.log(num); // 10

let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj); // 11