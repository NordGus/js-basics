// Do...While
// Do...While loops are executed at leat onces

function loop(i) {
    do {
        if (i % 2 !== 0) console.log(i);
        i++;
    } while (i <= 5);
    
}

loop(0);
loop(9);