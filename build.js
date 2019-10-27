//require('dotenv').config();

var browserify = require('browserify');
var envify = require('envify/custom');
var fs = require('fs');
var b = browserify('lib/main.js');
var output = fs.createWriteStream('lib/bundle.js');

b.transform(envify({
  ACCESS_KEY: process.env.ACCESS_KEY,
  SECRET_KEY: process.env.SECRET_KEY
}))
b.bundle().pipe(output);