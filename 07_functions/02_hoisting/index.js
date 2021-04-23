// Function Declaration
walk(); // Can

function walk() {
    console.log('walk');
}

// This is Hoisting, the JavaScript Engine move the function declararions to the top of the file at run time

// Anonymous Function Expression
run(); // Cannot

let run = function() {
    console.log('run');
};

