import React, { Component } from 'react';
import {API_BASE_URL} from '../config'

import './searchbar.css';

import {Button, Container} from 'react-bootstrap'

import TypesFilter from './typesfilter';

import regions from '../regions';

export default class SearchSection extends Component {

	constructor(props){
		super(props);
		this.state = {
      searchTerm: "",
      searchRegion: "",
      showButtons: true,
      resultCount: 20,
      types: [
        "micro",
        "regional",
        "brewpub"
      ],
			regions: regions
		}
	}

  //this function uses a setState callback to fetch results
	handleSubmit(region){
    this.setState({
      searchRegion: region.region
    }, () => this.fetchStateResults(this.state.searchRegion))

    this.hideButtons();
	}

  hideButtons(){
    this.setState(
      {showButtons: false})
  }

  showButtons(){
    this.setState(
      {showButtons: true})
  }

  //this function uses a setState callback to fetch more results
  showMoreResults(){
      let resultCount = this.state.resultCount + 10;
      this.setState({
        ...this.state, resultCount: resultCount
      }, () => this.fetchStateResults(this.state.searchRegion))
  }

  //sets searchTerm controlled variable
  setSearchTerm(searchTerm){
    this.setState(
      {searchTerm})
  }

  //MOVE THIS TO ANOTHER FILE AND IMPORT???
  //fetch API to get call state brewery API
	fetchStateResults(region){
    let url = `${API_BASE_URL}?by_state=${this.state.searchRegion}&per_page=${this.state.resultCount}`;
		return fetch(url)
        .then(res => res.json())
        .then(body => {
            console.log(body)
            this.props.updateResults(body);
            })
        .catch(err => {
            console.log(err);
        });
	}

  //filters to only include specific brewery type
  handleFilterChange(filterTarget){
    this.props.handleFilterChange(filterTarget)
  }

  render() {

    //filter buttons based on the searchTerm
    let filteredRegions = this.state.regions.filter(region => {
      return region.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    });

    //hide buttons if state.showButtons is false
    //automatically hidden upon search
  	let buttons = this.state.showButtons === true ?

      filteredRegions.map((region, index) => {

    		return (
    			<li className="state-button-list-item" key={index}>
    				<Button className="state-button" type="button" onClick={() => this.handleSubmit({region})}>{region}</Button>
    			</li>
    			)
    	}) : undefined;

    //conditional display of menuButton
    let menuButton;
    if (this.props.results.length < 1) {
      menuButton = null;
    } else if (this.state.showButtons === true) {
      menuButton = <Button onClick={()=>{this.hideButtons()}}>Hide Menu</Button>
    } else if(this.state.showButtons === false) {
      menuButton = <Button onClick={()=>{this.showButtons()}}>Show Menu</Button>
    }


    return (
      <Container className="search-bar">
        <form>
          
          <Button onClick={()=>{this.showMoreResults()}}>Show More</Button>
          {menuButton}
	        
          <button type="submit">Search</button>

          <input 
            type="search"
            id="search"
            name="search"
            placeholder="Indiana"
            onChange={e => this.setSearchTerm(e.target.value)} />
            <ul className="search-button-list">
              {buttons}
            </ul>
        </form>
      </Container>
    );
  }
}