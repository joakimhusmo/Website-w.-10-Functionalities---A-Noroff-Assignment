// this is a file to share values across files. Functions that share state is routed through this file. 

export let global; 

export function setGlobal(value) {
    global = value; 
}

export function getGlobal() {
    return global; 
}