var Icon = React.createClass({displayName: "Icon",
  render: function() {
    return React.createElement("span", {className: this.props.icon, "aria-hidden": "true"});
  }
});

var BaseButton = React.createClass({displayName: "BaseButton",
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
    if(prevState.selectedOption != ''){
      prevState.classOption = 'option';
    } else {
      prevState.classOption = 'hide';
    }
  },
  render: function() {
    return React.createElement("div", null, 
      React.createElement("div", {
        onClick: this.handleClick, 
        className: 'base-button ' + this.props.className + ' ' +  this.state.activeClass}, 
          this.props.content, 
          React.createElement(Icon, {icon: "glyphicon glyphicon-chevron-down map-icon"})
      ), 
      React.createElement("div", {className: this.state.classOption}, 
        this.state.selectedOption
      )
    );
  }
});
