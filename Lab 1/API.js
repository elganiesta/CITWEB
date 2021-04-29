// The API file
// We will define a route for our add function and call it there
// We will use Express as our Node server
const add = require("./add");

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const { num1, num2 } = request.query;
  console.log(num1);
  console.log(num2);

  const n1 = parseInt(num1);
  const n2 = parseInt(num2);

  const result = add(n1, n2);

  response.send("Your result is: " + result);
});

app.listen(5000, () => {
  console.log(`Server started at port ${5000}`);
});
