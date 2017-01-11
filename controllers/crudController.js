var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){
  app.use(bodyParser.json());
  var urlencodedParser = bodyParser.urlencoded({extended:false});

  app.post('/todo',urlencodedParser,function(req,res){
    var newTodo = Todos(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

  app.delete('/todo/:id',function(req,res){
    Todos.find({_id:req.params.id}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

  app.post('/todo/check',urlencodedParser,function(req,res){
    console.log(req.body.id);
    if(req.body.id){
      Todos.findByIdAndUpdate(req.body.id,{isDone: req.body.isDone},function(err,todo){
        if(err) throw err;
      });
    }
  });
}
