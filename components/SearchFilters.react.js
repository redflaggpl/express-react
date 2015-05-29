var React = require('react');

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

const theAccordionInstance = (
  <Accordion>
    <Panel header='Map' eventKey='1'>
      Anim pariatur cliche reprehenderit
    </Panel>
    <Panel header='Location' eventKey='2'>
      Anim pariatur cliche reprehenderit
    </Panel>
    <Panel header='Polygon Tool' eventKey='3'>
      Anim pariatur cliche reprehenderit,
    </Panel>
  </Accordion>
);


var SearchFilters = React.createClass({
	getInitialState: function(){
		return {accordionInstance: theAccordionInstance };
	},
	render: function(){
		return  <div>{this.state.accordionInstance} </div>
	}
});

module.exports = SearchFilters;