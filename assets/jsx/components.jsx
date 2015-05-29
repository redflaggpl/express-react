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
    return <li className={'list-unstyled'}>
      <a href={'#' + item[key]} onClick={this.handleClick.bind(this, key)}>{key}</a>
    </li>;
  },
  render: function() {
    return <div>
      <BaseButton
        ref='Button'
        expandElements={this.expandElements}
        contractElements={this.contractElements}
        content={this.props.content} />
      <div className={'options ' + this.state.activeClass}>
        <div>{this.props.message}</div>
        <ul>
          {this.props.items.map(this.iterateItems, this)}
        </ul>
      </div>
    </div>;
  }
});

var InputNumber = React.createClass({
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
    return <div>
      <BaseButton
        ref='Button'
        expandElements={this.expandElements}
        contractElements={this.contractElements}
        content={this.props.content} />
        <div className='options optionsVisible'>
          <input
            ref='min'
            type='text'
            placeholder='Min'
            value={this.props.min}
            onChange={this.handleChange}
            required />
          <input
            ref='max'
            type='text'
            placeholder='Max'
            value={this.props.max}
            onChange={this.handleChange}
            required />
          <p>Error Error Error.</p>
        </div>
    </div>;
  }
});

var AdvanceSearch = React.createClass({
    render: function() {
      return <form novalidate>
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
        <BaseButton content='LOT SIZE' />
        <BaseButton content='PRICE' />
        <BaseButton content='$ /SQFT' />
        <BaseButton content='SOLD WITHIN' />
        <BaseButton content='YEAR BUILT' />
        <BaseButton className={'little-space'} content='STORIES' />
        <DropDown
          content='MORE OPTIONS'
          items={[{'Op 1': 'value 1'}, {'Op 2': 'value 2'}, {'Op 3': 'value 2'}]} />
      </form>;
    }
});
