var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
	var currentUrl = url.parse(request.url, true).href.toString();
	console.log(currentUrl);

	if(currentUrl.indexOf('.css') != -1) {
		fs.readFile('./public/css/styles.css', function(error, data) {
			if(error) { throw error; }
			response.writeHead(200, { 'Content-Type': 'text/css' });
			response.write(data);
		    response.end();
		});
	}

	if(currentUrl.indexOf('.js') != -1) {
		fs.readFile('./public/js/helloWorld.js', function(error, data) {
			if(error) { throw error; }
			response.writeHead(200, { 'Content-Type': 'text/javascript' });
			response.write(data);
		    response.end();
		});
	}

	fs.readFile('./public/index.html', function(error, data) {
		if(error) { throw error; }
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(data);
	    response.end();
	});
}).listen(8888);
