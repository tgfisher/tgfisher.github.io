import React, { Component, Fragment } from 'react';
import GalleriesList from '../GalleriesList/GalleriesList';
import galleries from '../../galleries.json'; // in the future, load from S3 or similar

class Art extends Component {
  render() {
    return (
      <Fragment>
        <br />
          <GalleriesList galleries={galleries.living_galleries} />
        <br />
      </Fragment>
    )
  }
}

export default Art;
