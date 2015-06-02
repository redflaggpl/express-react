var React = require('react');
var baseComponents = require('./base/baseComponents.jsx');
var BaseButton = baseComponents.BaseButton;
var Icon = baseComponents.Icon;
var Input = baseComponents.Input;

var DropDown = React.createClass({
  getInitialState: function() {
    return {
      isActive: false,
      activeClass: ''
    };
  },
  handleClick: function(key, event) {
    event.preventDefault();
    this.refs.Button.setState({
      isSelected: true,
      selectedOption: key
    });
    this.setState({
      isActive: false,
      activeClass: ''
    });
  },
  expandElements: function() {
    this.setState({
      isActive: true,
      activeClass: 'optionsVisible'
    });
  },
  contractElements: function() {
    this.setState({
      isActive: false,
      activeClass: ''
    });
  },
  iterateItems: function (item) {
    var key = Object.keys(item)[0];
    return <li className='list-unstyled'>
      <a href={'#' + item[key]} onClick={this.handleClick.bind(this, key)}>{key}</a>
    </li>;
  },
  render: function() {
    return (
      <div>
        <BaseButton
          ref='Button'
          expandElements={this.expandElements}
          contractElements={this.contractElements}
          content={this.props.content} />
        <div className={'options ' + this.state.activeClass}>
          <div className={this.props.message ? '' : 'hide'}>{this.props.message}</div>
          <ul>
            {this.props.items.map(this.iterateItems, this)}
          </ul>
        </div>
      </div>
    );
  }
});

var InputNumber = React.createClass({
  //mixins: [Formsy.Mixin],
  getInitialState: function() {
    return {
      isActive: false,
      activeClass: ''
    };
  },
  handleClick: function(key, event) {
    event.preventDefault();
    this.refs.Button.setState({
      isSelected: true
    });
    this.setState({
      isActive: false,
      activeClass: ''
    });
  },
  expandElements: function() {
    this.setState({
      isActive: true,
      activeClass: 'optionsVisible'
    });
  },
  contractElements: function() {
    this.setState({
      isActive: false,
      activeClass: ''
    });
  },
  handleChange: function (event){
    this.setValue(event.currentTarget.value);
    console.log('value ', this.getValue());
    console.log('event ', event);
    console.log('min ', this.props.min);
    console.log('max ', this.props.max);
    console.log('ref.min ', this.refs.min);
    console.log('ref.max ', this.refs.max);
  },
  renderInput: function(params) {
    return (
      <input
        ref={params.ref}
        type='text'
        placeholder={params.placeholder}
        value={this.props.min}
        onChange={this.handleChange}
        required />
    );
  },
  getCustomErrorMessage: function() {
    return '';
  },
  render: function() {
    return (
      <div>
        <BaseButton
          ref='Button'
          expandElements={this.expandElements}
          contractElements={this.contractElements}
          content={this.props.content} />
          <div className={'options ' + this.state.activeClass}>
            <Input
              ref='min'
              type='text'
              placeholder='Min'
              value={this.props.min}
              onChange={this.handleChange}
              name='min' />
            <Input
              ref='max'
              type='text'
              placeholder='Max'
              onChange={this.handleChange}
              name='max' />
            <p className={this.getCustomErrorMessage() ? '' : 'hide'}>
              Error Message.
            </p>
          </div>
      </div>
    );
  }
});

module.exports = {
  DropDown: DropDown,
  InputNumber: InputNumber
};
