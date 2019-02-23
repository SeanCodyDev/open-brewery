import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { BeatLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 20px auto;
    border-color: red;
`;
 
export default class Loader extends React.Component {

  render() {
    return (
      <div className='sweet-loading'>
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={35}
          color={'#FDBB30'}
          loading={this.props.loading}
        />
      </div> 
    )
  }
}