// Ternary Operator

// If custumer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

function customerBuilder(points) {
    return {
        points: points,
        type: points > 100 ? 'gold' : 'silver'
    };
}

let customer1 = customerBuilder(110);
let customer2 = customerBuilder(90);

console.log(customer1);
console.log(customer2);
