var DropDown = React.createClass({displayName: "DropDown",
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
    return React.createElement("li", {className: 'list-unstyled'}, 
      React.createElement("a", {href: '#' + item[key], onClick: this.handleClick.bind(this, key)}, key)
    );
  },
  render: function() {
    return React.createElement("div", null, 
      React.createElement(BaseButton, {
        ref: "Button", 
        expandElements: this.expandElements, 
        contractElements: this.contractElements, 
        content: this.props.content}), 
      React.createElement("div", {className: 'options ' + this.state.activeClass}, 
        React.createElement("div", null, this.props.message), 
        React.createElement("ul", null, 
          this.props.items.map(this.iterateItems, this)
        )
      )
    );
  }
});

var InputNumber = React.createClass({displayName: "InputNumber",
  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
  },
  getInitialState: function() {
    return {
      isActive: false,
      activeClass: ''
    };
  },
  handleClick: function(key, event) {
    event.preventDefault();
    /*this.refs.Button.setState({
      isSelected: true,
      selectedOption: key
    });
    this.setState({
      isActive: false,
      activeClass: ''
    });*/
  },
  expandElements: function() {
    /*this.setState({
      isActive: true,
      activeClass: 'optionsVisible'
    });*/
  },
  contractElements: function() {
    /*this.setState({
      isActive: false,
      activeClass: ''
    });*/
  },
  handleClick: function(key, event) {
    event.preventDefault();
    /*this.refs.Button.setState({
      isSelected: true,
      selectedOption: key
    });
    this.setState({
      isActive: false,
      activeClass: ''
    });*/
  },
  handleChange: function (event){
    console.log('event ', event);
    console.log('min ', this.props.min);
    console.log('max ', this.props.max);
    console.log('ref.min ', this.refs.min);
    console.log('ref.max ', this.refs.max);
  },
  render: function() {
    return React.createElement("div", null, 
      React.createElement(BaseButton, {
        ref: "Button", 
        expandElements: this.expandElements, 
        contractElements: this.contractElements, 
        content: this.props.content}), 
        React.createElement("div", {className: "options optionsVisible"}, 
          React.createElement("input", {
            ref: "min", 
            type: "text", 
            placeholder: "Min", 
            value: this.props.min, 
            onChange: this.handleChange, 
            required: true}), 
          React.createElement("input", {
            ref: "max", 
            type: "text", 
            placeholder: "Max", 
            value: this.props.max, 
            onChange: this.handleChange, 
            required: true}), 
          React.createElement("p", null, "Error Error Error.")
        )
    );
  }
});

var AdvanceSearch = React.createClass({displayName: "AdvanceSearch",
    render: function() {
      return React.createElement("form", {novalidate: true}, 
        React.createElement(DropDown, {
          content: "MAP OVERLAY", 
          items: [{'Overlay': 'value 1'}, {'Satelite': 'value 2'}], 
          message: 'Select an Overlay'}), 
        React.createElement(DropDown, {
          content: "LOCATION", 
           message: 'Select Location', 
          items: [{'County': 'value 1'}, {'Municipality': 'value 2'}, {'Neighborhood': 'value 2'}]}), 
        React.createElement(DropDown, {
           content: "TYPE", 
           message: 'Select a Type', 
           items: [{'Type 1': 'value 1'}, {'Type 2': 'value 2'}, {'Type 3': 'value 2'}]}), 
        React.createElement(InputNumber, {content: "SQUARE FOOTAGE"}), 
        React.createElement(BaseButton, {content: "LOT SIZE"}), 
        React.createElement(BaseButton, {content: "PRICE"}), 
        React.createElement(BaseButton, {content: "$ /SQFT"}), 
        React.createElement(BaseButton, {content: "SOLD WITHIN"}), 
        React.createElement(BaseButton, {content: "YEAR BUILT"}), 
        React.createElement(BaseButton, {className: 'little-space', content: "STORIES"}), 
        React.createElement(DropDown, {
          content: "MORE OPTIONS", 
          items: [{'Op 1': 'value 1'}, {'Op 2': 'value 2'}, {'Op 3': 'value 2'}]})
      );
    }
});
