const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    // console.log("Request from Client Received");
    // console.log(req.headers);
    // console.log(req.httpVersion);
    if(req.url === "/favicon.ico") return res.end();
    const text = `${Date.now()}: ${req.url} Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("newText.txt", text, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Hello Adi");
                break;

            case "/about":
                const username = myUrl.query.myName;
                res.end(`Hello ${username}`);
                break;

            case "/help":
                res.end("Helppppp!!!");

            default:
                res.end("Not Found")
        }
        // if (err) console.log(err);
        // return data;
    });

    // res.end("Hello from the Server");
});

myServer.listen(5000, () => {
    console.log('Server Running');
});