var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
        <title>{this.props.title}</title>
        <link href="/assets/style.css" rel="stylesheet" type="text/css"/>
        <script src="/assets/jquery-1.12.4.min.js"></script>
        <script src="/assets/todo-script.js"></script>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
