const circle = {
    radius: 1,
    draw() {
        console.log('radius:', this.radius);
    }
}

for (const key in circle)
    console.log(key, circle[key]);

for (const key of Object.keys(circle))
    console.log(key);

for (const entry of Object.entries(circle))
    console.log(entry);

if ('radius' in circle) console.log('yes');
if ('color' in circle) console.log('yes');