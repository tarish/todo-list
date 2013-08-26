// Simple Node web server code below taken from http://nodejs.org/api/synopsis.html

var http = require('http');

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello HTTP World!');
}).listen(8080);