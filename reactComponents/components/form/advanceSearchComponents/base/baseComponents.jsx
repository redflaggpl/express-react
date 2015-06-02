var React = require('react');
var Formsy = require('formsy-react');

var Icon = React.createClass({
  render: function() {
    return <span className={this.props.icon} aria-hidden='true'></span>;
  }
});

var BaseButton = React.createClass({
  getInitialState: function() {
    return {
      isActive: false,
      isSelected: false,
      activeClass: 'inactive',
      selectedOption: '',
      classOption: 'hide'
    };
  },
  getDefaultProps: function(){
    return {
      className: ''
    };
  },
  handleClick: function(event) {
    if(!this.state.isSelected) {
      this.setState({isActive: !this.state.isActive});
      if(!this.state.isActive) {
        this.props.expandElements();
      } else {
        this.props.contractElements();
      }
    } else {
      this.setState({
        isActive: true,
        isSelected: false,
        selectedOption: '',
        classOption: 'hide'
      });
      this.props.expandElements();
    }
  },
  componentWillUpdate: function(prevProps, prevState) {
    if(!prevState.isSelected) {
      prevState.activeClass = prevState.isActive ? 'active' : 'inactive';
    }
    if(prevState.selectedOption !== ''){
      prevState.classOption = 'option';
    } else {
      prevState.classOption = 'hide';
    }
  },
  render: function() {
    return (
      <div>
        <div
          onClick={this.handleClick}
          className={'base-button ' + this.props.className + ' ' +  this.state.activeClass}>
            {this.props.content}
            <Icon icon='glyphicon glyphicon-chevron-down map-icon'/>
        </div>
        <div className={this.state.classOption}>
          {this.state.selectedOption}
        </div>
      </div>
    );
  }
});

var Input = React.createClass({
  mixins: [Formsy.Mixin],
  render: function() {
    return (
     <input
        type={this.props.type || 'text'}
        placeholder={this.props.placeholder}
        value={this.props.max}
        onChange={this.handleChange}
        name={this.props.name}
        value={this.getValue()}
        required />
    );
  }
});

module.exports = {
  Icon: Icon,
  Input: Input,
  BaseButton: BaseButton
};
