var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
        <title>{this.props.title}</title>
        <link href="/assets/404.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"/>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
