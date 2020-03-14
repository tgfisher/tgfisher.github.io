import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class TianTan extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="TianTan" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default TianTan;
