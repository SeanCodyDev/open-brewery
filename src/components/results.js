import React, { Component } from 'react';
import ResultsCard from './resultcard';
import TypesFilter from './typesfilter';

import './results.css';


export default class Results extends Component {

  //filters to only include specific brewery type
  handleFilterChange(filterTarget){
    this.props.handleFilterChange(filterTarget)
  }
  
  render() {

  	let results = this.props.results.map((result, index) => {
  		return (
  			<div key={index}>
  				<ResultsCard result={result} />
  			</div>
  		)
  	})

    //render filter boxes only if there are results
    let filterBoxes;
    if (this.props.results.length > 0){
      filterBoxes = <TypesFilter typesDisplayed={this.props.typesDisplayed} handleFilterChange={filterTarget => this.handleFilterChange(filterTarget)} />

    }

    return (
      <div className="results">
        <h1>Results</h1>
        {filterBoxes}
        {results}
      </div>
    );
  }
}