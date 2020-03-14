import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'

class ChinaMotion extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="ChinaMotion" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default ChinaMotion;
