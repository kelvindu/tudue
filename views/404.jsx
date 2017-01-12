var React = require('react');
var DefaultLayout = require('./layouts/default404');

module.exports = React.createClass({
  render:function(){
    return(
      <DefaultLayout title={this.props.title}>
        <h1>404</h1>
        <h2>It means not found, maybe try asking something else</h2>
      </DefaultLayout>
    );
  }
});
