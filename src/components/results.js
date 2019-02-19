import React, { Component } from 'react';
import ResultsCard from './resultcard';

import './results.css';


export default class Results extends Component {
  render() {

  	let results = this.props.results.map((result, index) => {
  		return (
  			<div key={index}>
  				<ResultsCard result={result} />
  			</div>
  		)
  	})

    return (
      <div className="results">
        <h1>Results</h1>
        {results}
      </div>
    );
  }
}