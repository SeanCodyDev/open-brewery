import React, { Component } from 'react';
import './App.css';


import SearchSection from './components/searchsection';
import Results from './components/results';
import HeaderBar from './components/headerbar'

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			results: [],
			typesDisplayed: {
				micro: true,
				regional: true,
				brewpub: true
			}
		}
	}

	//loads api fetch results into state
	updateResults(results){
		this.setState({
			results
		})
	}

	//filters to only include specific brewery type
	handleFilterChange(filterTarget){
		let filterObj = {
			[filterTarget]: !this.state.typesDisplayed[filterTarget]
		}

		this.setState({
			...this.state, 
			typesDisplayed: {...this.state.typesDisplayed, ...filterObj}
		})
	}

	render() {


		//filter results based on typesDisplayed
		let filteredResults = this.state.results.filter((result, index) => {
			return (
				// Object.keys(this.state.typesDisplayed).includes(result.brewery_type)
				this.state.typesDisplayed[result.brewery_type]
				)
		})

		return (
			<div className="App">
			<HeaderBar />
			<SearchSection 
				results={this.state.results} 
				updateResults={(results)=>this.updateResults(results)}
				/>
			<Results 
				results={filteredResults}
				typesDisplayed={this.state.typesDisplayed}
				handleFilterChange={filterTarget => this.handleFilterChange(filterTarget)}
			/>
			</div>
			);
	}
}

