import React, { Component } from 'react';
import './App.css';


import SearchBar from './components/searchbar';
import Results from './components/results';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			results: []
		}
	}

	updateResults(results){
		this.setState({
			results
		})
	}

  render() {
    return (
      <div className="App">
        <SearchBar results={this.state.results} updateResults={(results)=>this.updateResults(results)}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

