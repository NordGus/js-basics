// Break and Continue

let i = 0;

console.log('break');
while (i <= 10) {
    if (i == 5) break;

    console.log(i);
    i++;
}

i = 0;

console.log('continue');
while (i <= 10) {
    if (i % 2 === 5) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}