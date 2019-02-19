import React, { Component } from 'react';

import './results.css';


export default class ResultCard extends Component {
  render() {

    return (
      <div className="result-card">
        <ul>
          <li>{this.props.result.name}</li>
          <li>{this.props.result.city}</li>
          <li>{this.props.result.brewery_type}</li>
        </ul>
      </div>
    );
  }
}