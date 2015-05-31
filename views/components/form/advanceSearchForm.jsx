var React = require('react');
var components = require('./advanceSearchComponents/components.jsx');
var DropDown = components.DropDown;
var InputNumber = components.InputNumber;

var AdvanceSearchForm = React.createClass({
  render: function() {
    return (
      <form novalidate>
        <DropDown
          content='MAP OVERLAY'
          items={[{'Overlay': 'value 1'}, {'Satelite': 'value 2'}]}
          message={'Select an Overlay'} />
        <DropDown
          content='LOCATION'
          message={'Select Location'}
          items={[{'County': 'value 1'}, {'Municipality': 'value 2'}, {'Neighborhood': 'value 2'}]} />
        <DropDown
           content='TYPE'
           message={'Select a Type'}
           items={[{'Type 1': 'value 1'}, {'Type 2': 'value 2'}, {'Type 3': 'value 2'}]} />
        <InputNumber content='SQUARE FOOTAGE' />
        <InputNumber content='LOT SIZE' />
        <InputNumber content='PRICE' />
        <InputNumber content='$ /SQFT' />
        <InputNumber content='SOLD WITHIN' />
        <InputNumber content='YEAR BUILT' />
        <InputNumber className={'little-space'} content='STORIES' />
        <DropDown
          content='MORE OPTIONS'
          items={[{'Op 1': 'value 1'}, {'Op 2': 'value 2'}, {'Op 3': 'value 2'}]} />
      </form>
    );
  }
});

module.exports = AdvanceSearchForm;
