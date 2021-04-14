// For...In

const person = {
    name: 'Gustavo',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);