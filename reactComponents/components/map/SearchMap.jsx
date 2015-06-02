var React = require('react');
var reactLeaflet = require('react-leaflet');
var MapLeaf = reactLeaflet.Map;
var Marker = reactLeaflet.Marker;
var Popup = reactLeaflet.Popup;
var TileLayer = reactLeaflet.TileLayer;

var position = [51.505, -0.09];
var SearchMap = React.createClass({
  getInitialState: function() {
    return {
      style: {
        height: 0
      }
    };
  },
  componentDidMount: function() {
    this.setState({style: {height: $(document).height() + 'px'}});
  },
  render: function() {
    return (
      <MapLeaf center={position} zoom={13} className='row' style={this.state.style}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="plarity.com">Plarity Inc.</a>'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </MapLeaf>
    );
  }
});

module.exports = SearchMap;
