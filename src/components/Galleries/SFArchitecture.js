import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class SFArchitecture extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="SFArchitecture" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default SFArchitecture;
