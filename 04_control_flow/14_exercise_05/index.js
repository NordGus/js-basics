
showNumbers(10);

function showNumbers(limit) {
    for (let number = 0; number <= limit; number++) {
        const message = (number % 2 === 0) ? 'EVEN' : 'ODD';
        
        console.log(number, message);
    }
}