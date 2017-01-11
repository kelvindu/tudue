var Todos = require('../models/todoModel');

module.exports = function(app){

  app.get('/api/todos/:user',function(req,res){
    Todos.find({username: req.params.user},function(err,todos){
      if(err) throw err;
      res.send(todos);
    });
  });

  app.get('/api/todo/:id',function(req,res){
    Todos.findById({_id: req.params.id},function(err,todo){
      if (err) throw err;
      res.send(todo);
    });
  });
}
