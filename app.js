// A minimal node.js server for static html, css, and javascript files adapted from:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 13854;

http.createServer((request, response) => {
    console.log('request ', request.url);

    let filePath = '.' + request.url;
    if (filePath == './' || filePath == './?authuser=0' /* for google's Web Preview feature */) {
        filePath = './index.html';
    } else {
        filePath = '.' + request.url;
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };
    let contentType = mimeTypes[extname];

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(500);
            response.end('Error with code: ' + error.code + '.\n');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);
console.log('App listening on port ' + PORT);