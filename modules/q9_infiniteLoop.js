// In Function infiniteLoop(), create an Infinite loop which asks the user in a prompt to write “STOP”. The loop should end when the correct input is given. If the user provides any other data, ask them again.



function infiniteLoop() {
    while(true) {
        const res = prompt("Write STOP to exit");
        if(res === "STOP") {
            continue;   
        }
    }
}