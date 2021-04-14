// Speed Limit = 70
// For every 5 kph over the speed limit the driver got a demerit point
// if the drivers gets more than 12 points the license is suspended
checkSpeed(75);

function checkSpeed(speed) {
    const speedLimit = 70;
    const suspensionPoints = 12;
    const speedPointsInterval = 5;

    if (speed < speedLimit + speedPointsInterval) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / speedPointsInterval);

    if (points < suspensionPoints)
        console.log('Points:', points);
    else
        console.log('License suspended');
}