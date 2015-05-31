var React = require('react');
var Header = require('../templates/header.jsx');
var AdvanceSearchForm = require('../components/form/advanceSearchForm.jsx');

var MapLayout = React.createClass({
  render: function() {
  	return (
      <div className='container-fluid full-height'>

        <Header />

        <div className='row full-height'>
          <div className='col-md-3 bg-dark full-height'>
            <div className='row no-padding'>
              <div>
                <h5 className='form-title'>FILTER OPTIONS</h5>
                <div>
                  <AdvanceSearchForm />
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-9'>MAP COMPONENT :D</div>

        </div>
      </div>
  	);
  }
});

module.exports = MapLayout;
