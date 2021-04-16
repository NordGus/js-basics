
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('radius:', this.radius);
        console.log('location: [', this.location.x, ',', this.location.y, ']');
    },
    move: function (newLocation) {
        if (newLocation.x && newLocation.y) {
            this.location.x = newLocation.x;
            this.location.y = newLocation.y;
            return;
        }

        console.log('newLocation needs an x and y properties')
    }
};

circle.draw();
circle.move({x: 10, y: -5});
circle.draw();
circle.move({});
circle.draw();