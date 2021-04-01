// A sneak peek at the path module
// This module lets us resolve paths in our filesystem in a more "appropriate manner"
const path = require("path");

// basename
console.log(path.basename("/home/amine/Projects/CITWEB"));

// dirname
console.log(path.dirname(__dirname));

// join
let p = path.join(__dirname, "..", "..");
console.log(p);
