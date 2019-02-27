import React, { Component } from 'react';

import './searchsection.css';

import {Button, Container, Form, FormControl} from 'react-bootstrap'

export default class SearchSection extends Component {

	constructor(props){
		super(props);
		this.state = {
      showButtons: true,
		}
	}

  //this function uses a setState callback to fetch results
	handleSubmit(region){
    this.props.handleSubmit(region)

    this.hideButtons();
	}

  showButtons(){
    this.setState(
      {showButtons: true})
  }

  hideButtons(){
    this.setState(
      {showButtons: false})
  }



  render() {

    //filter buttons based on the searchTerm
    let filteredRegions = this.props.regions.filter(region => {
      return region.toLowerCase().includes(this.props.searchTerm.toLowerCase())
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
      menuButton = <Button className="menu-button" onClick={()=>{this.hideButtons()}}>Hide Menu</Button>
    } else if(this.state.showButtons === false) {
      menuButton = <Button className="menu-button" onClick={()=>{this.showButtons()}}>Show Menu</Button>
    }


    return (
      <Container className="search-bar">
        <Form className="search-form">
          
          {menuButton}
	        
          <FormControl 
            type="text"
            id="search"
            className="search-input"
            name="search"
            placeholder="Search"
            onChange={e => this.props.setSearchTerm(e.target.value)} />
            <ul className="search-button-list">
              {buttons}
            </ul>
        </Form>
      </Container>
    );
  }
}