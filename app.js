console.log("main.js: initializing...");

const fs = require('fs');
const mysql = require('mysql');

var http = require('http');
var port = 3030;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url == '' || req.url == '/' || req.url == '/index.html') { 
        loadFile(res, 'routes/index.html');
    } else {
        loadFile(res, 'routes/error.html');
    }

}).listen(port, "localhost", () => {
    console.log("main.js: listening to port " + port);
});

// Functions 

function loadFile(res, url) {
    fs.readFile(url, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' }); 

        if (err) {
            console.log(err);
        } else {
            res.write(data);
            console.log('main.js: client requested \'' + url + '\'.');
        }

        res.end();
    });
}