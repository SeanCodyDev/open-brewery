import React, { Component } from 'react';
import ResultsCard from './resultcard';
import TypesFilter from './typesfilter';
import {Button} from 'react-bootstrap';

import './results.css';


export default class Results extends Component {

  //filters to only include specific brewery type
  handleFilterChange(filterTarget){
    this.props.handleFilterChange(filterTarget)
  }

  //this function uses a setState callback to fetch more results
  showMoreResults(){
    let resultCount = this.state.resultCount + 10;
    this.setState({
      ...this.state, resultCount: resultCount
    }, () => this.fetchStateResults(this.state.searchRegion))
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
    let resultsNav;
    if (this.props.results.length > 0){
      resultsNav = 
      <div>
        <TypesFilter typesDisplayed={this.props.typesDisplayed} handleFilterChange={filterTarget => this.handleFilterChange(filterTarget)} />
        <Button onClick={()=>{this.showMoreResults()}}>Show More</Button>
      </div>
    }

    return (
      <div className="results">
        {resultsNav}
        {results}
      </div>
    );
  }
}