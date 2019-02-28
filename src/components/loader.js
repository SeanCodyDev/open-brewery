import React from 'react';
import { css } from '@emotion/core';
import {Modal} from 'react-bootstrap'
import { BeatLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 20px auto;
    border-color: red;
`;
 
export default class Loader extends React.Component {

  render() {


    return (
      <Modal
        show="true"
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className='sweet-loading' style={{display: 'flex'}}>
            <BeatLoader
              css={override}
              sizeUnit={"px"}
              size={35}
              color={'#FDBB30'}
              loading={this.props.loading}
          />
          </div> 

        </Modal.Body>
      </Modal>

    )
  }
}