function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) 
        items = [...items[0]];
    if (items.length < 2)
        throw new Error('there must be at least one value.');

    return items.reduce((a, b) => { return a + b });
}

console.log(sum([1,2,3,4,5]));
console.log(sum(1,2,3,4,5));

try {
    console.log(sum());
} catch (e) {
    console.error(e);
}