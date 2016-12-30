var express = require('express');
var todoControllers = require('./controllers/todoControllers');
var app = express();

//setting up the template view
app.set('view engine','ejs');

//setting up the static files resource
app.use(express.static('./public'));

//firing up todo controllers
todoControllers(app);

//setting up the listening port
app.listen(7080);
console.log('You are listening to port 7080');