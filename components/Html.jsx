var React = require('react');
var ReconsoleApp = require('./ReconsoleApp.react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>REConsole.com</title>
          <link rel="stylesheet" type='text/css' href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
          <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        </head>
        <body>
            <ReconsoleApp />
        </body>
      </html>
    );
  }
});

module.exports = Html;