setInterval(() => {
    console.log("General kenobi");
}, 2000)

// The code below should run first due to offloading
// as setInterval is asynchronous

console.log("Hello There");

// also the process will stay alive 
// unless the process is killed using
// CONTROL + C
// or if an unexpected error occurs