var filter = require('./filter.js');
filter(process.argv[2], process.argv[3], function(err, data) {
	if(err) return err;
	
	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
});