import React from 'react';

export default function TypesFilter(props){

	return(

		<div>
			<form>
				<input 
				type="checkbox"
				checked={props.typesDisplayed.micro}
				value="micro"
				onChange={e => props.handleFilterChange(e.target.value)}
				/>Micro
				<input 
				type="checkbox"
				checked={props.typesDisplayed.brewpub}
				value="brewpub"
				onChange={e => props.handleFilterChange(e.target.value)}
				/>Brewpub
				<input 
				type="checkbox"
				checked={props.typesDisplayed.regional}
				value="regional"
				onChange={e => props.handleFilterChange(e.target.value)}
				/>Regional
			</form>
		</div>

	)
}