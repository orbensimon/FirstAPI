var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send('my first response');
	
	
	
});
app.get('/newPage',function(req,res){
	
	res.send("new page");
	
});
app.listen(3000, function(){
	
	console.log("listening!");
	
});