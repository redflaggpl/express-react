var React = require('react');

var index = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <title>REConsole.com</title>
          <link type='text/css' rel='stylesheet' href='/stylesheets/app.css' />
        </head>
        <body className='base'>
          <div className='container-fluid full-height'></div>
          <script type='text/javascript' src='bower_components/jquery/dist/jquery.min.js'></script>
          <script type='text/javascript' src='bower_components/bootstrap/dist/js/bootstrap.min.js'></script>
          <script type='text/javascript' src='javascripts/app.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = index;
