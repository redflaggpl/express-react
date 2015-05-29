var React = require('react');

var Header = React.createClass({
	render: function() {
	 return <div className='row'>
    <nav className='navbar navbar-default navbar-static-top map-nav bg-dark'>
      <div className='container'>
        <h1>REConsole.com</h1>
      </div>
    </nav>
  </div>;
  }
});

module.exports = Header;
