var React = require('react');
var MapLayout = require('./layouts/mapLayout.jsx');

var index = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>REConsole.com</title>
          <link type='text/css' rel='stylesheet' href='/stylesheets/app.css' />
        </head>
        <body className='base'>
            <MapLayout />
            <script type='text/javascript' src='bower_components/jquery/dist/jquery.min.js'></script>
            <script type='text/javascript' src='bower_components/bootstrap/dist/js/bootstrap.min.js'></script>
            <script type='text/javascript' src='bower_components/react/react.min.js'></script>
            <script type='text/javascript' src='bower_components/react/react-with-addons.min.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = index;
