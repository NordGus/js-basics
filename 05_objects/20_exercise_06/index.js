function PriceRange(label, tooltip, minPerPerson, maxPerPerson) {
    this.label = label;
    this.tooltip = tooltip;
    this.minPerPerson = minPerPerson;
    this.maxPerPerson = maxPerPerson;
}

const priceRanges = [
    new PriceRange('$', 'Inexpensive', 0, 99),
    new PriceRange('$$', 'Moderate', 100, 199),
    new PriceRange('$$$', 'Pricey', 200, undefined)
];


for (const range of priceRanges)
    console.log(range);