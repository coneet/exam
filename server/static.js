var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname,'../dist/ssc/index.html'));
});

//export this router to use in our index.js
module.exports = router;