const http = require('http');
const fs = require('fs');
const cowsay = require('cowsay');
const port = process.env.PORT || 8090

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile("./public/index.html", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.end(data);
        });
    }
    else if (req.url == "/login") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile("./public/login.html", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.end(data);
        });
    }
    else if (req.url == "/signup") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile("./public/signup.html", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.end(data);
        });
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile("./public/contact.html", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.end(data);
        });
    }
    else if (req.url == "/service") {
        res.writeHead(200, { "Content-type": "text/html" });
        fs.readFile("./public/service.html", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.end(data);
        });
    }
    else{
        res.writeHead(404, { "Content-type": "text/html" });
        fs.readFile("./public/error.html", "utf8", (err, data) => {
            if (err) {
                console.log(err);
            }
            // console.log(data);
            res.end(data);
        });
    }

})


server.listen(port, () => {
    console.log(cowsay.say({
        text: `Server is listening on ${port}`,
        e: "00",
        t: "u "
    }));
});