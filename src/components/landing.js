import React from 'react'

import {Jumbotron} from 'react-bootstrap';
import './landing.css'

export default function Landing(props) {


	return (

		<Jumbotron>
			<h1>Welcome to Open Brewery</h1>
			<p>Welcome to Open Brewery. My name is Sean Cody and I have a passion for front end web development and ReactJS. This is a hobby project built
			on the Open Brewery API using ReactJS and styled with React Bootstrap. Check out breweries in any state, have fun, and (of course) enjoy responsibly!</p>
		</Jumbotron>
	)
}