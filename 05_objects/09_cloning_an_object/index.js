const circle = {
    radius: 1,
    draw() {
        console.log('radius:', this.radius);
    }
}

// const another = {};
// for (const key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle);

const another = { ...circle }; 

console.log(another, circle);