var React = require('react');
var SearchLayout = require('./SearchLayout.react');
var Header = require('./Header.react');

var ReconsoleApp = React.createClass({
	getInitialState: function(){
		return {ItemsList:[], text: ''};
	},
  render: function() {
  	return <div className='container-fluid full-height'>
      <Header />
      <SearchLayout />
    </div>;
  }

});

module.exports = ReconsoleApp;
