var React = require('react');
var DefaultLayout = require('./layouts/default');
var AddItem = require('./layouts/AddItem');
var TodoItem = require('./layouts/todoItem');

var HelloMessage = React.createClass({


  //rendering the index.jsx into the browser
  render: function() {

    var todos = this.props.list;
    todos = todos.map(function(item,index){
      return(
        <TodoItem item={item} key={index}/>
      );
    }.bind(this));

    return (
      <DefaultLayout title={this.props.title}>
        <h1>Hello {this.props.name} welcome to tudue</h1>
        <div id="todo-lists">
          <h2>Now, what to do...?</h2>
          <ul>{todos}</ul>
        </div>
        <AddItem/>
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;
