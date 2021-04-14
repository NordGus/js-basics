const inputs = [3, 5, 15, '7', 7, true, undefined, null];


for (let input of inputs) {
    console.log(fizzBuzz(input));
}

function fizzBuzz(input) {
    if (typeof(input) !== "number") return 'Not a Number';

    let output = '';
    if (input % 3 === 0) output += 'Fizz';
    if (input % 5 === 0) output += 'Buzz';

    return (output) ? output : input;
}