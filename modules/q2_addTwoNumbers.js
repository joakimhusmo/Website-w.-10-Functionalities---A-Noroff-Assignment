// The function addTwoNumbers() should get two numbers from the user and show their sum in an alert. You can parse the string to the number with the parseInt() method.
// You should check if both inputs are proper numbers. If they are not, instead show an alert that the data is not in the correct format.

export function addTwoNumbers() {
    let num1 = prompt("Provide the first number:");   
    let num2 = prompt("Provide the second number:");    
    if(isNaN(num1) || isNaN(num2)) {        
        alert("The final score is: ", (num1+num2));   
    }
    else {
        alert("Wrong data");
    }
}