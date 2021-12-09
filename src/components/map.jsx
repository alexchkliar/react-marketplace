import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {


  render() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
      center: {
        lat: 48.8566,
        lng: 2.3522
      },
      zoom: 11
    };
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '800px', width: '800px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCQpl8UMbUODJqNl02-hRWFyDHWEq6OMks" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>


    );
  }
}

export default Map;
