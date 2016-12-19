const assert = require('assert');
const fs = require('fs');
const lr = require('readline');

reader = lr.createInterface({
	input: fs.createReadStream('../family.csv')
});
reader.on('line', function (line) {
	assert(line.toLowerCase() == line);
	console.log(line);
});

describe('Syntax', function () {
	reader = lr.createInterface({
		input: fs.createReadStream('family.csv')
	});
	reader.on('line', function (line) {
		it('all lower case', function () {
			assert(line.toLowerCase() == line);
			console.log(line);
		});
	});
});
