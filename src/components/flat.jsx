import React, { Component } from 'react';
import flats from '../../data/flats.js';

class Flat extends Component {
  render() {

    const name = flats[this.props.id]["name"]
    const url = flats[this.props.id]["imageUrl"]
    const price = flats[this.props.id]["price"]
    const fx = flats[this.props.id]["priceCurrency"]
    const lat = flats[this.props.id]["lat"]

    return (
      <div className="card">
        <img src={url} />
        <ul>
          <li>{name}</li>
          <li>{fx}{price}</li>
        </ul>
      </div>
    );
  }
}

export default Flat;
