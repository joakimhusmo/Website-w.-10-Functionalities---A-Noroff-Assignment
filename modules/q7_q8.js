// Question 7
//  In the function spliceExample(), you must convert a string to an array, perform some operations on the array and save the result as a text.
// Firstly, generate a string variable called ‘splicedText’ and store the long text found on the website, Lipsum.

// Manipulate this string to remove all commas and dots from the text.

// Prompt the user for a positive integer (check if it is in the correct format). If it is, find the first word in our text which has the same length as the provided number (let’s name it – X). From the string, remove the two words in the two positions after the position of X, and at the same place insert the copy of X. As a result, you should achieve a string that contains one word less and two of the same words close to each other.

// Remember to log the most important information in the console, it will help you to debug.
// We can see that the first appearance is the word “Lorem”. We remove the two words “ipsum” and “dolor” that followed “Lorem”. Then we added a copy of the word “Lorem” word.


const spliceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare mauris eget tortor accumsan posuere. Mauris pharetra pellentesque libero, ut cursus eros consectetur nec. Suspendisse id erat vitae tellus cursus rutrum ut sit amet nisi. Aliquam cursus ultrices nisl in vestibulum. Nunc lacinia metus a venenatis pretium. Nullam vitae tincidunt ante. Duis posuere, dolor ac accumsan consequat, ex mi congue sem, sit amet fringilla tellus velit at neque. Donec luctus mi eu ligula volutpat semper. Maecenas vulputate bibendum velit, at finibus velit consectetur sed. Maecenas commodo feugiat lorem, vitae eleifend velit iaculis ut. Duis ac suscipit nisl. Sed vel metus.";

spliceText = spliceText.replace(/\./g, '');
spliceText = spliceText.replace(/\,/g, '');

export function spliceExample() {
    //text from: https://www.lipsum.com/ - 100 words
    const array = spliceText.split(",");    
    console.log(array);
    const length = parseInt(prompt("Specify the word's length:"));
    if(isNaN(length) && length <= 0) {  
        alert("Wrong length");
        return;
    }
    const index = array.find(x => x.length == length);  
    if(index >= 0) {
        const element = array[index];
        array.splice(index + 1, 2, element);
        console.log(array);
        spliceText = array.join(" ");
    }
}

// Question 8
// Function iteratorMethods() gets user-generated text and adds it to the end of every word in the string variable ‘splicedText’ from task 7.
// You must first prompt the user for some text.

// Then convert the ‘splicedText’ from task 7 to an array. Using the map() method, add the user text to the end of every word in the string variable and convert it back to a string. The new string should be logged to the console.


export function iteratorMethods() {
    const toAdd = prompt("Specify the text to add to each element of the current string")
    let array = spliceText.split("");   
    array = array.map( x = x + toAdd); 
    spliceText = array(" ");
    console.log(spliceText);
}