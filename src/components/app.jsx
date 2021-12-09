import React, { Component } from 'react';
// import Flat from './flat';
import Map from './map';
import FlatList from './flat_list';
import flats from '../../data/flats.js';

// import FlatList from './flat_list';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          {/* <Flat id="0" /> */}
          <FlatList flats={flats} />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
