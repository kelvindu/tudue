module.exports = function(req,res){
  res.status(404);
  res.render('404',{title:'Oops, there\'s something off...'});
}
