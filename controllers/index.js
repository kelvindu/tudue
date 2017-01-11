var apiController = require('./apiController');
var crudController = require('./crudController');

module.exports = function(app){
  //deploying all of the api request
  apiController(app);

  //handles all of the create update and delete process on databases
  crudController(app);

  //setting up the inital request to home
  app.get('/',require('../routes').index);

  //if the routes requested is not found
  app.use('*',require('../routes/notFound'));
}
