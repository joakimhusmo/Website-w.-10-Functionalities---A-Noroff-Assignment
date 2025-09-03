// Function ifExample() must prompt the user for their age. The function should check that this age is a number and is greater than 1. If this is true, confirm with the user: “Are you sure that your age is: _insert_age_ ?”.

// If the user clicks OK, ask them again: Definitely? If the user clicks OK again, show their age in an alert.

// Otherwise, show an alert to indicate that we still don’t know their age.


export function ifExample() {
    const age = parseInt(prompt("How old are you?"));
    if(isNaN(age) || age > 1){  
        if(confirm("Are you sure that your age is: " + age + "?")) {
        } else if(confirm("Definitely?")) {    
                alert("Your age is " + age + "!");
                return;
        }
    }
    alert("I still don't know your age :(");    
}