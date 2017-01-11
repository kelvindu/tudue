var configValues = require('./config');

module.exports = {
  //all configurations and values goes here
  getDbConnectionString: function(){
    return 'mongodb://'+configValues.userDB+':'+configValues.pwdDB+'@ds145828.mlab.com:45828/todo';
  }
  
}
