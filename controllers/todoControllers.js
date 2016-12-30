var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connecting to the database
mongoose.connect('mongodb://root:root@ds145828.mlab.com:45828/todo');

//creating mongoDB schema
var todoSchema = new mongoose.Schema({
	item: String
});

//create a model class
var Todo = mongoose.model('Todo',todoSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
	//returns the home page of the app
	app.get('/',function(req,res){
		//get the data from mongoDB and pass it into a view
		Todo.find({}, function(err,data){
			if(err) throw err;
			res.render('todo',{todos : data});
		});
	});

	//firing up the post function to add items
	app.post('/todo', urlencodedParser, function(req,res){
		//get data from the view and add it to mongoDB
		var newItem = Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});

	//firing up the delete function
	app.delete('/todo/:item',function(req,res){
		//delete the requested item from mongodb
		Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});
};