function countTruthy(array) {
    let count = 0;

    for (let value of array) {
        if (value) count++;
    }
    
    return count;
}

const array = [1, 0, 'Hello World', '', undefined, null, NaN, true, false];

console.log(countTruthy(array));