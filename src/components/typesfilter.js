import React from 'react';
import './typesfilter.css'
import Switch from "react-switch";

export default function TypesFilter(props){

	return(

		<div>
			<form className="types-filter-form">
				<label className="toggle-label">
					<span className="switch-label">Micro</span>
					<Switch 
						className="react-switch" 
						value="micro" 
						onChange={() => props.handleFilterChange("micro")} 
						checked={props.typesDisplayed.micro}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>
				<label className="toggle-label">
					<span className="switch-label">Brewpub</span>
					<Switch 
						className="react-switch" 
						value="brewpub" 
						onChange={() => props.handleFilterChange("brewpub")} 
						checked={props.typesDisplayed.brewpub}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>
				<label className="toggle-label">
					<span className="switch-label">Regional</span>
					<Switch 
						className="react-switch" 
						value="regional" 
						onChange={() => props.handleFilterChange("regional")} 
						checked={props.typesDisplayed.regional}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>

			</form>
		</div>

	)
}

//plain checkbox
				// <input 
				// type="checkbox"
				// checked={props.typesDisplayed.micro}
				// value="micro"
				// onChange={e => props.handleFilterChange(e.target.value)}
				// />Micro
				// <input 
				// type="checkbox"
				// checked={props.typesDisplayed.brewpub}
				// value="brewpub"
				// onChange={e => props.handleFilterChange(e.target.value)}
				// />Brewpub
				// <input 
				// type="checkbox"
				// checked={props.typesDisplayed.regional}
				// value="regional"
				// onChange={e => props.handleFilterChange(e.target.value)}
				// />Regional

				// <label className="switch">Micro
    //     			<input type="checkbox" checked={props.typesDisplayed.micro} value="micro" onChange={e => props.handleFilterChange(e.target.value)} />
    //     			<div className="slider"></div>
    //   			</label>
    //   			<label className="switch">
    //     			<input type="checkbox" checked={props.typesDisplayed.brewpub} value="brewpub" onChange={e => props.handleFilterChange(e.target.value)} />
    //     			<div className="slider"></div>
    //   			</label>
    //   			<label className="switch">
    //     			<input type="checkbox" checked={props.typesDisplayed.regional} value="regional" onChange={e => props.handleFilterChange(e.target.value)} />
    //     			<div className="slider"></div>
    //   			</label>