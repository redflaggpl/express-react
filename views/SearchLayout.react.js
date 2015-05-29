var React = require('react');

var SearchLayout = React.createClass({
	render: function(){
		return  <div className='row full-height'>
      <div className='col-md-3 bg-dark full-height'>
        <div className='row no-padding'>
          <div>
            <h5 className='form-title'>FILTER OPTIONS</h5>
            <div id='form'></div>
          </div>
        </div>
      </div>
      <div className='col-md-9'>MAP COMPONENT :D</div>
    </div>;
	}
});

module.exports = SearchLayout;


