const numbers = [1, 2, 3, 4, 5];

const output = move(numbers, 1, -1);

console.log(output);

function move(array, index, offset) {
    const target = index + offset;

    if (target >= array.length || target < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(target, 0, element);
    return output;
}