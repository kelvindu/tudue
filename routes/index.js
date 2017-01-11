var Todos = require('../models/todoModel');

exports.index = function(req,res){
  Todos.find({},function(err,data){
    if(err) throw err;
    res.render('index',{
      name:'John',
      title: 'Tudue | What you need to do',
      list: data
    });
  });
}
