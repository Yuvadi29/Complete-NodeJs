const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    console.log("Request from Client Received");
    console.log(req.headers);
    // console.log(req.httpVersion);
    const text = "Hello from Client";
    fs.writeFile("newText.txt", text, (err,data) => {
        if(err) console.log(err);
        return data;
    });

    res.end("Hello from the Server");
});

myServer.listen(5000, () =>{
    console.log('Server Running');
});