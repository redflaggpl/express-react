var React = require('react');
var Header = require('../templates/header.jsx');
var AdvanceSearchForm = require('../components/form/advanceSearchForm.jsx');
var SearchMap = require('../components/map/SearchMap.jsx');

var MapLayout = React.createClass({
  render: function() {
  	return (
      <div>
        <Header />
        <div className='row full-height bg-dark'>
          <div className='col-md-3 full-height'>
            <div className='row no-padding'>
              <div>
                <h5 className='form-title'>FILTER OPTIONS</h5>
                <div>
                  <AdvanceSearchForm />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <SearchMap />
          </div>
        </div>
      </div>
  	);
  }
});

module.exports = MapLayout;
