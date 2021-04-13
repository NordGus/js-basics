// If...else

// Hour
// If hour is between 6am and 12pm: Good morning!
// if it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let time = 10; // In the real world we will read the current time, but right now the hardcoded time is for example porpose

if (time >= 6 && time < 12) 
    console.log("Good morning!");
else if (time >= 12 && time < 18)
    console.log("Good afternoon!");
else 
    console.log('Good evening!');