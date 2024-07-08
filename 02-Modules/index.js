const square = require('./area');
const mathswallah = require('./maths');
const express = require("express");
const app = express();

// app.listen(2000, () => {
//     console.log('Server Running');
// });

console.log(square.area(6));
console.log(mathswallah.add(10, 6));
console.log(mathswallah.subtract(10, 6));
