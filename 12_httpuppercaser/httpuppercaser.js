var http = require('http');

http.createServer(function (request, response) {
	if (request.method != 'POST') {
          return response.end('send me a POST\n');
	}
	
	var map = require('through2-map');
	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
}).listen(process.argv[2]);