var React = require('react');
var SearchFilters = require('./SearchFilters.react');
var Header = require('./Header.react');

var ReconsoleApp = React.createClass({
	getInitialState: function(){
		return {ItemsList:[], text: ''};
	},
  render: function() {
  	return (
      <div>
        <Header />
        <SearchFilters/>
      </div>
  	);
  }

});

module.exports = ReconsoleApp;