var http = require('http');

http.get(process.argv[2], function(response) {
	var bl = require('bl');
	response.pipe(bl(function(err, data){
		if(err) return err;
		
		console.log(data.length);
		console.log(data.toString());
	}));
});