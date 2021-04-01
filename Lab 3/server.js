// A simple http server using Express
const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
