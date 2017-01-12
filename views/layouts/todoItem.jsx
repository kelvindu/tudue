var React = require('react');

module.exports = React.createClass({
  render:function(){
    return(
      <li>
        <div className="item-list">
          <input type="checkbox" defaultChecked={this.props.item.isDone} className="item-check" id={this.props.item.id}/>
          <label className="item-name" htmlFor={this.props.item.id}>{this.props.item.todo}</label>
          <a className="button-delete" href="#" id={this.props.item.id}>X</a>
        </div>
      </li>
    );
  }
});
