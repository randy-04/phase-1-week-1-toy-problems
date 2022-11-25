// student grage generator solution

// declaration of the function with a parameter. 'input' doesn't need to be declared again.
function gradesGenerator(input) {
    // make sure the input is within the 0-100 range by showing an alert if it's not.
    if (input < 0 || input > 100) {
        console.log("Input numbers between 0 and 100!"); 
    }
    // the loop distinguishes grades using comparison operators
    else if (input > 79) {
        console.log("A");
    }
    else if (input >= 60 && input <= 79) {
        console.log("B");
    }
    else if (input >= 49 && input <= 59) {
        console.log("C");
    }
    else if (input >= 40 && input <= 49) {
        console.log("D");
    }
    else if (input < 40) {
        console.log("E");
    } 
}

