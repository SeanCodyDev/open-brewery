import React, { Component } from 'react';
import ResultsCard from './resultcard';
import TypesFilter from './typesfilter';
import {Container, Button, CardDeck} from 'react-bootstrap';
import Loader from './loader'

import './results.css';


export default class Results extends Component {

  //filters to only include specific brewery type
  handleFilterChange(filterTarget){
    this.props.handleFilterChange(filterTarget)
  }

  
  render() {
    let loading;
    if (this.props.loading) {
      loading = <Loader />
      
    }

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
      <div className="results-nav">
        <TypesFilter typesDisplayed={this.props.typesDisplayed} handleFilterChange={filterTarget => this.handleFilterChange(filterTarget)} />
        <Button className="show-more-button" onClick={()=>{this.props.showMoreResults()}}>Show More</Button>
      </div>
    }

    return (
      <Container className="results">
        {resultsNav}
        {loading}
        <CardDeck className="justify-content-around card-deck-custom">
          {results}
        </CardDeck>
      </Container>
    );
  }
}