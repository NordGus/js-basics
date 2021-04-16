// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


const address1 = createAddress('Puerta del Sol, 1', 'Madrid', 28001);
const address2 = new Address('Puerta del Sol, 1', 'Madrid', 28001);

console.log(address1);
console.log(address2);