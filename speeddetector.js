// function declaration to detect speed and award points based on it
function speedDetective(speed) {
    // declaration of Points variable using let because it will change throughout the code
    let Points;

    // first if statement to check legal speed
    if (speed < 70) {
        console.log("OK");
    }
    else if (speed > 70) {
        // get the difference between input speed and legal speed to help calculate the Points
        const dif = speed - 70;

        // divide the difference by 5 to get the points because the points increase every 5km/h
        // rounding off the Points so that the number returned is a whole integer
        Points = Math.round(dif / 5);
        console.log(`Points: ${Points}`);
    }
    // suspending a driver with more than 12 points accrued
    if (Points > 12) {
        console.log("License suspended.");
    }
}

