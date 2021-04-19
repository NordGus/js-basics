const numbers = [1, 2, 3, 3, 3, 3, 4, 5];

const count = countOccurrenceses(numbers, 3);

console.log(count);

function countOccurrenceses(array, searchElement) {
    return array.reduce((count, value) => {
        const occurrance = (value === searchElement) ? 1 : 0;
        return count + occurrance;
    }, 0);
}