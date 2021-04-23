
try {
    const numbers = [1, 2, 3, 3, 3, 3, 4, 5];
    // const count = countOccurrenceses(numbers, 3);
    const count = countOccurrenceses(null, 3);
    console.log(count);
} catch (e) {
    console.error(e);
}


function countOccurrenceses(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('array must be an array');

    return array.reduce((count, value) => {
        const occurrance = (value === searchElement) ? 1 : 0;
        return count + occurrance;
    }, 0);
}