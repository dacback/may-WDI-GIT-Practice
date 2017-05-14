var express = require('express');
var path = require('path');
var app = express();
var port = 3002;

var publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/public');
});


app.listen(port, function(){
	console.log('Server running on port ' + port);
});