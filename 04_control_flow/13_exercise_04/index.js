// Speed Limit = 70
// For every 5 kph over the speed limit the driver got a demerit point
// if the drivers gets more than 12 points the license is suspended
checkSpeed(80);

function checkSpeed(speed) {
    const speedLimit = 70;
    const suspensionPoints = 12;
    const speedPointsInterval = 5;

    const points = Math.floor((speed - speedLimit) / speedPointsInterval);

    if (points < 1)
        console.log('Ok');
    else if (points < suspensionPoints)
        console.log('Points:', points);
    else
        console.log('License suspended');
}