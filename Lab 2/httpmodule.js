// A sneak peek at the http module
// This module lets us create http servers
const http = require("http");

// createServer
let myserver = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1>Home</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>About</h1>");
    res.end();
  } else {
    res.write("<h1>404</h1>");
    res.end();
  }
});

// listen
myserver.listen(8080, () => {
  console.log("Server started at port 8080");
});
