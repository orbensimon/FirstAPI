var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var ing = [
	{"id":"hdg543",
	"name":"eggs"
	}
];
app.get('/',function(req,res){
	res.send(ing);
	
	
	
});
app.get('/newPage',function(req,res){
	
	res.send("new page");
	
});
app.post('/', function(req,res){
	var newIng = req.body;
	if(!newIng || newIng.name == "")
		res.status(500).send({error:"No name for ingridient"});
	else{
		ing.push(newIng);
		res.status(200).send(ing);
		
	}
	
	
});

app.put('/ingridients/:ingID',function(req,res){
	var id = req.params.ingID;	
	var newText = req.body.name;
	var ingridientFound = false;
	if(!newText || newText == "")
	{
		res.status(500).send("plz enter a text");
	}
	else
	{
		for(var i=0; i<ing.length;i++)
		{
			if(id==ing[i].id)
			{
				ingridientFound = true;
				ing[i].name = newText;
				break;
			}
		}
		if(ingridientFound)
			res.send(ing);
		else
			res.send("No ingridient found that matches id " + id );
	}
		
	
	
});
app.listen(3000, function(){
	
	console.log("listening!");
	
});