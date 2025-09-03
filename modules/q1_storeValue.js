//  You only need to edit the JS file to correct the source code errors for 10 functions, each of which is bound to one button in the HTML.
// While correcting the functions, you might need some math operations. You can use the following methods:
//          Math.round() – to round the number
//          Math.floor() to get the integer part of the number
//          Math.ceil() – to get the number rounded up
//          Math.random() – to generate a random number from 0 to 1

// Function storeValue() takes the data from a prompt and stores it within the global variable. If data is provided, show it in an alert. If the prompt is cancelled, show the current data in an alert instead. The prompt should appear on the button click. 

let global;

function storeValue() {
    const result = prompt("Provide the new data if you want to change it. Otherwise click Cancel.");
    if(result == null) {    
        global = result;
    }
    confirm(global); 
}