// Ask the user to provide a number from 1 to 5. Check if the received data is correct. If it is, show the relevant story regarding what the number tells us about the user. Make use of a switch-case.


    function switchExample() {
    const number = parseInt(prompt("Please provide a number from 1 to 5"));
    if(!isNaN(number) || number < 1 || number > 5) {    
        alert("Wrong data");
        return;
    }
    switch(global) { 
        case 1:
            alert("Your favourite number is 1. It means you probably always want to win everything!")
            break;            
        case 2:
            alert("Your favourite number is 2. It means you probably have really good relations with people!")
            break;
        case 3:
            alert("Your favourite number is 3. It means you probably don't like to take a risk!")
            break;
        case 4:
            alert("Your favourite number is 4. It means you probably are not afraid about anything!")
            break;
        case 5:
            alert("Your favourite number is 5. It means you probably are a perfect student!")
            break;
        default:
            alert("Something went wrong.")
            break;                 
    }
}