import React, { Component } from 'react';
import {API_BASE_URL} from '../config'

import './searchbar.css';

import {Button, Container} from 'react-bootstrap'


export default class SearchBar extends Component {

  //can these states be imported from a separate file?
	constructor(props){
		super(props);
		this.state = {
      searchTerm: "",
      searchRegion: "",
      showButtons: true,
      //initial: 20
      resultCount: 20,
      types: [
        "micro",
        "regional",
        "brewpub"
      ],
			regions: [
			"Alabama",
			"Alaska",
			"Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
			]
		}
	}

  //stub only - no current functionality
  handleSearch(e){
    e.preventDefault();
    console.log('target value', e.target.value)
  }

  //this function uses a setState callback to fetch results
	handleSubmit(region){
    console.log("handleSubmit region:", region)

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

  //filters to only include specific brewery type
  showMicro(type) {
    console.log('type should be micro:', type)
  } 

  //sets searchTerm controlled variable
  onChange(searchTerm){
    console.log(searchTerm);
    this.setState(
      {searchTerm})
  }

  //fetch API to get call state brewery API
  //uses promise to 
	fetchStateResults(region){
    console.log('fetching:', this.state.searchRegion)
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
        <h1>SearchBar</h1>
        <form onSubmit={(e)=>{this.handleSearch(e)}}>
          <Button onClick={(e)=>{this.showMicro(e.target.value)}} value="micro">Show Micro</Button>
          <Button onClick={()=>{this.showMoreResults()}}>Show More</Button>
          {menuButton}
	        
          <button type="submit">Search</button>

          <input 
            type="search"
            id="search"
            name="search"
            placeholder="Indiana"
            onChange={e => this.onChange(e.target.value)} />
            <ul className="search-button-list">
              {buttons}
            </ul>
        </form>
      </Container>
    );
  }
}