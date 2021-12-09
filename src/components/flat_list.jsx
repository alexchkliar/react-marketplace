import React, { Component } from 'react';
import Flat from "./flat";

class FlatList extends Component {

  renderList = () => {
    const allFlats = this.props.flats;
    return allFlats.map(flat => <Flat id={allFlats.indexOf(flat)} key={allFlats.indexOf(flat)} />);
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
