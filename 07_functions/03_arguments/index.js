function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(1, 2)); // 1 + 2
console.log(sum(1)); // 1 + undefined
console.log(sum()); // undefined + undefined

console.log(sum(1, 2, 3, 4, 5)); // 1 + 2 everything else is ignored

function sumMultiple() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sumMultiple(1, 2, 3, 4, 5, 10));