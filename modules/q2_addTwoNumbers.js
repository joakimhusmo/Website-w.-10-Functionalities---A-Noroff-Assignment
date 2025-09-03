// The function addTwoNumbers() should get two numbers from the user and show their sum in an alert. You can parse the string to the number with the parseInt() method.
// You should check if both inputs are proper numbers. If they are not, instead show an alert that the data is not in the correct format.

export function addTwoNumbers() {

    let num1 = parseInt(prompt("Provide the first number:"));   // add parseInt() method   
    let num2 = parseInt(prompt("Provide the second number:"));  // add parseInt() method

    let result;                         // add `result` variable

    if (!isNaN(num1) && !isNaN(num2)) { // adjust from `isNaN` to `!isNaN`
        result = num1 + num2;           // store & update `result` variable
        alert("The final score is: " + result);     // adjust alert from `, (num1+num2)` to `+ result`   
    }
    else {
        alert("Wrong data");
    }
}