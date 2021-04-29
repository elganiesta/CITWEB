// We will put here the multiply function and call the API inside it
const axios = require("axios");

const multiply = (num1, num2) => {
  // addInterface()
  axios.get(`http://localhost:5000/?num1=${num1}&num2=${num2}`).then((res) => {
    console.log(res.data);
  });
};

// Just a proof of concept, the multiply function can call the add function via HTTP calls
multiply(1, 2);
