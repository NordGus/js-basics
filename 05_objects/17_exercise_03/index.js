function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');
const address3 = address1;
const address4 = new Address('c', 'b', 'a');

console.log('areEqual(address1, address2):', areEqual(address1, address2));
console.log('areSame(address1, address2):', areSame(address1, address2));
console.log('areEqual(address1, address4):', areEqual(address1, address4));
console.log('areSame(address1, address3):', areSame(address1, address3));