var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
str = buffer.toString();
str = str.split('\n');
console.log(str.length - 1);