var express = require('express'),
    path = require('path');

//create web server
var app = express();


//require the custom module
var lab = require('./my_modules/myo_sphero');
lab();

// Will render something in the browser later
// app.use(express.static(path.join(__dirname, 'views')));

// app.all('*', function(req, res){
//   res.sendfile('views/index.html');
// });

app.listen(3001);
console.log("Server running on port 3001");




