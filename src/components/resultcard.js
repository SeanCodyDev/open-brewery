import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

import './results.css';


export default class ResultCard extends Component {
  render() {

    let webUrl=`${this.props.result.website_url}`;

    return (
      <Card style={{ width: '18rem', textAlign: 'left' }} className="result-card">
        <Card.Body>
          <Card.Title>{this.props.result.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.result.city}</Card.Subtitle>
          <Card.Text>
            {this.props.result.brewery_type}
          </Card.Text>
          <Card.Link href={webUrl} target="_blank">Website</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

    // return (
    //   <div className="result-card">
    //     <ul>
    //       <li>{this.props.result.name}</li>
    //       <li>{this.props.result.city}</li>
    //       <li>{this.props.result.brewery_type}</li>
    //     </ul>
    //   </div>
    // );