import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class SanFranColor extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="SanFranColor" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default SanFranColor;
