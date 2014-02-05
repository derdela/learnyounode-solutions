fs = require('fs');

fs.readdir(process.argv[2], function(err, data) {
	if(err) return err;
	
	path = require('path');
	var fileext = '.' + process.argv[3];
	
	for(var i = 0; i < data.length; i++) {
		if(path.extname(data[i]) == fileext) {
			console.log(path.basename(data[i]));
		}
	}
});