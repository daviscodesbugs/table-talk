const assert = require('assert');
const fs = require('fs');
const lr = require('readline');
const read = require('fs-readdir-recursive');
const filepath = require('path');
const lint = require('jsonlint');

fileNames = read('./src/cards');
jsonFileNames = fileNames.filter(function (x) {
	return filepath.extname(x) === '.json';
});

String.prototype.replaceAll = function (search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};

describe('JSON Lint', function () {
	jsonFileNames.forEach(function (path) {
		it(path, function () {
			lint.parse(readJson(path)); // throws if error found
		});
	});
});

describe('Syntax', function () {
	jsonFileNames.forEach(function (path) {
		it(path, function () {
			var json = JSON.parse(readJson(path));

			// Lowercase
			json['questions'].forEach(function (q) {
				assert(newToLowerCase(q) == q,
					"\n" + q + "\n" + newToLowerCase(q));
			});

			assert(json['count'] == json['questions'].length,
				"count field (" + json['count'] + ") != actual length (" + json['questions'].length + ")");
		});
	});
});

function readJson(path) {
	return fs.readFileSync('./src/cards/' + path).toString();
}

const properNouns = [
	"TV",
	"Olympics",
	"'A's",
	"God",
	"Gold Rush"
];
function newToLowerCase(str) {
	str = str.toLowerCase();
	properNouns.forEach(function (noun) {
		str = str.replaceAll(noun.toLowerCase(), noun);
	});
	return str;
}