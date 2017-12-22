// calling the module
var express = require('express');

//creating an instance
var app = express();

// a basic route 
app.get('/', function(req,res){
	res.send('Hello World!');
});

//linsitening on a port
app.listen(3000, function(){
	console.log('Listening on port 3000!');
});
