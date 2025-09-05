// Function ultimateExample() 
// asks the user to provide the number (n). 
// Generate an image of size n times n and show it in the console. 
// Based on the Math.random() method, generate the image consisting of these characters:
// “ “
// “|”
// “_”
// “X”
// “.”
// After generating an image of n=10, something similar to this is shown in the console: [image].

export function ultimateExample() { 
    const n = parseInt(prompt("Please provide the length of the side of the square"))
    if (isNaN(n) || n < 0 && n > 50) {  
        alert("Wrong data");
        return;                        // return if input has failed
    }    
    for(let i=0; i<n; i++) {           // Replace i-- with i++
        let line = "";                 // loop empty string
        
        for (let j=0; j<n; j++) {      // increment loop 
            const number = Math.floor(Math.random() * 5); // Replace `.round` w. `.floor` & `*4` w. `*5` 
            switch(number) {
                case 0:                 // Replace `default` w. `case 0`
                    line += " ";
                    break;
                case 1:
                    line += ".";
                    break;
                case 2:
                    line += "X";
                    break;
                case 3:
                    line += "|";
                    break;
                case 4:
                    line += "_";
                    break;
            }
        }
        console.log(line);
        
    }
}

/*
Original code: 

function ultimateExample() {
    const n = parseInt(prompt("Please provide the length of the side of the square"))
    if (isNaN(n) || n < 0 && n > 50) {  
        alert("Wrong data");
        return;
    }    
    for(let i=0; i<n; i--) {    
        let line = "";
        for (let j=0; j<n; j++) {
            const number = Math.round(Math.random() * 4);
            case(number) {  
                switch 1:
                    line += ".";
                    break;
                switch 2:
                    line += "X";
                    break;
                switch 3:
                    line += "|";
                    break;
                switch 4:
                    line += "_";
                    break;
                default:
                    line += " ";
                    break;
            }
        }
        console.log(line);
    }
*/