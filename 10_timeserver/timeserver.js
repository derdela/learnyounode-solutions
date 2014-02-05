function pad(n) { return n < 10 ? '0' + n : n }

var net = require('net');
net.createServer(function (socket){
	var date = new Date();
	var date = date.getFullYear() + "-"
    + pad(date.getMonth() + 1) + "-"
    + pad(date.getDate()) + " "
    + pad(date.getHours()) + ":"
    + pad(date.getMinutes()) + "\n";
	socket.end(date);
}).listen(process.argv[2]);