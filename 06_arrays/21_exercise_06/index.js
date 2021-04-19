const numbers = [1, 2, 3, 4, 5];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((max, current) => (max > current) ? max : current);
}