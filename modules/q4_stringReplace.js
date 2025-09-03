// Function stringReplace() should take a string from the user and replace all insensitive appearances of
//          “a” (‘a’ and ‘A’) to ‘@’
//          “e” (e or E) to ‘3’
//          “o” (o or O) to ‘0’
// You will need to use regular expressions to achieve that.
// The resulting string should be shown to the user in an alert

function stringReplace() {
    const text = parseInt(prompt("Provide string containing at least 5 characters."));    
    text = text.replace(/a/ig, '@').replace(/e/ig, '3').replace(/o/ig, '0');
    console.log(text);  
}