const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Server is Running")
});

app.get("/about", (req, res) => {
    res.send(`Hello ${req.query.name}`);
});


app.listen(8000, () => {
    console.log(`Server running on port 8000`);
});