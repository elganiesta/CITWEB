// A sneak peek at the os module
// This module gives us interaction with the OS's properties
const os = require("os");

// arch
console.log("OS architecture : ", os.arch());

// cpus
console.log("CPUs information ", os.cpus());

// freemem
console.log("Free memory on the OS ", os.freemem());

// hostname
console.log("The Hostname", os.hostname());
