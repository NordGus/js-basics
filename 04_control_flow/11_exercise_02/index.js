// Write a function isLandscape that takes two arguments, width and height and returns if a images is landscape, width is greater than heigth otherwise returns false.

function isLandscape(width, heigth) {
    return width > heigth;
}

console.log(isLandscape(100, 200));
console.log(isLandscape(200, 100));
console.log(isLandscape(200, 200));