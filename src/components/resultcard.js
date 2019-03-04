import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import './results.css';


export default class ResultCard extends Component {
  render() {

    let webUrl=`${this.props.result.website_url}`;

    return (
      <Card style={{ width: '18rem', textAlign: 'left' }} className="result-card">
       <Card.Header className="results-card-header">{this.props.result.name}</Card.Header>
       <Card.Body>
          
          <Card.Subtitle className="mb-2 text-muted results-city-header">{this.props.result.city}</Card.Subtitle>
          <Card.Text className='results-brewery-type'>
            Brewery Type: {this.props.result.brewery_type}
          </Card.Text>
          <Card.Link className='results-url' href={webUrl} target="_blank">Website</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}