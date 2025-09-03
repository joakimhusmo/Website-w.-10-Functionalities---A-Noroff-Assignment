// 3. Function extractMiddleString() should prompt the user for a string, of which the length should be at least 5. If the input is not correct, show an alert and finish. If the input string is correct, show in an alert the symmetric middle part of the provided string – rounded up. Make sure to use the correct string method. For example:

//      For entry “string” – “trin” (because 6 / 2 = 3, but we can’t achieve the symmetry with only 3       characters, so we must round up to use 4)
//      For entry “sting” – “tin” (because 5 / 2 = 2.5 ~ 3 and because the entry has an odd length, we have achieved the symmetry)
//      For entry “123456789” – “34567” (because 9/2 = 4.5~5, the middle character of the string is 5, and both strings have the same middle character which is what we want to achieve)

export function extractMiddleString() {
    const text = prompt("Provide string containing at least 5 characters.")
    if(text.length <= 5) {  
        alert("Wrong data");
        return;
    }
    const startIndex = text.length / 2;
    const length = Math.round(text.length / 4);
    alert(text.split(startIndex - length, startIndex + length + text.length % 2));  
}