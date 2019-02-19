import React, { Component } from 'react';

import './results.css';


export default class ResultCard extends Component {
  render() {

    console.log('hello from resultsCard', this.props);

    return (
      <div className="result-card">
        <ul>
          <li>{this.props.result.name}</li>
          <li>{this.props.result.city}</li>
        </ul>
      </div>
    );
  }
}