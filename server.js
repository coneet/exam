// var express = require('express');
// var path = require('path');
// var app = express();



// app.get('/*', function (req, res) {
// 	res.sendFile(path.join(__dirname,'/dist/ssc/index.html'));
// });

// app.listen(3000);
// module.exports = app;


var express = require('express');
var app = express();
app.use(express.static(__dirname+'/dist'));
var serve = require('./server/static.js');

app.use('/home', serve);

app.listen(3000);
module.exports = app;