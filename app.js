var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var controller = require('./controllers');

//setting up the port
var port = process.env.PORT || 7080;

//setting up the view engine and views directories
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//connecting to the databases
mongoose.connect(config.getDbConnectionString());

//setting up the middleware static files for css and assets
app.use('/assets',express.static(__dirname+'/public'));

//call out all of the controller and routes
controller(app);

app.listen(port);
console.log('listening now to port : '+port);
