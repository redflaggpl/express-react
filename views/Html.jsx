var React = require('react');
var ReconsoleApp = require('./ReconsoleApp.react');

var Html = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>REConsole.com</title>
          <link type='text/css' rel='stylesheet' href='/stylesheets/app.css' />
        </head>
        <body className='base'>
          <ReconsoleApp />
          <script type='text/javascript' src='bower_components/jquery/dist/jquery.min.js'></script>
          <script type='text/javascript' src='bower_components/bootstrap/dist/js/bootstrap.min.js'></script>
          <script type="text/javascript" src="bower_components/react/react.js"></script>
          <script type="text/javascript" src="bower_components/react/react-with-addons.js"></script>
          <script type="text/javascript" src="javascripts/baseComponents.js"></script>
          <script type="text/javascript" src="javascripts/components.js"></script>
          <script type="text/javascript" src="javascripts/app.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Html;
