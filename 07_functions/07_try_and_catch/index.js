const person = {
    firstName: 'Gustavo',
    lastName: 'Rodriguez',

    get fullName() { return `${this.firstName} ${this.lastName}` },
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('values is not a styring.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('enter a first and last name.');
        
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
} 
catch (e) {
    alert(e);
}

console.log(person);