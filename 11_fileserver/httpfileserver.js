var http = require('http');

http.createServer(function (request, response) {
	var fs = require('fs');
	fs.createReadStream(process.argv[3]).pipe(response);
}).listen(process.argv[2]);