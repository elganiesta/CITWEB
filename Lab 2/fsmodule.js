// A sneak peek at the filesystem module
// This module gives us interaction with the OS's filesystem
const fs = require("fs");

// readFile
// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(err);
//   console.log(data);
// });

// writeFile
// fs.writeFile("./text.txt", "test test", (err) => {
//   if (err) throw err;
// });

// appendFile
// fs.appendFile("./text.txt", "\nthis is some appendend text", (err) => {
//   if (err) throw err;
// });

// unlink
// fs.unlink("./asupprimer.txt", (err) => {
//   if (err) throw err;
// });

// there are synchronous versions of these functions
// Asynchrone => chi7aja li makatbloquich le flux d'execution du code
// let data = fs.readFileSync("./text.txt", "utf8");
// console.log(data);
