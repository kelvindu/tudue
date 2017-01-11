var React = require('react');

module.exports = React.createClass({
  render:function(){
    return(
      <li>
        <div className="item-list">
          <input type="checkbox" defaultChecked={this.props.item.isDone} className="item-check" id={this.props.item.id}/>
          <span className="item-name">{this.props.item.todo}</span>
          <a className="button-delete" href="#" id={this.props.item.id}>X</a>
        </div>
      </li>
    );
  }
});
