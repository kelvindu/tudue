var React = require('react');

module.exports = React.createClass({
  render:function(){
    return(
      <form className="add-todo">
        <input type="text" required ref="newItem"/>
        <input type="submit" value="Add me!!"/>
      </form>
    );
  }
});
