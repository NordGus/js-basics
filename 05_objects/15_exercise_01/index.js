const address = {
    street: 'Plaza del Sol, 1',
    city: 'Madrid',
    zipCode: 28001
}

function showAddress(address) {
    for (const key in address)
        console.log(key, address[key]);
}

showAddress(address);