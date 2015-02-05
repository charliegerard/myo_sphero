var express = require('express'),
    path = require('path');

var app = express();

var lab = require('./my_modules/myo_sphero');
lab();

app.listen(3001);
console.log("Server running on port 3001");




