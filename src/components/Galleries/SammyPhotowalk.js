import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class SammyPhotowalk extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="SammyPhotowalk" gallery_list={galleries.retired_galleries}/>
      </Fragment>
    )
  }
}

export default SammyPhotowalk;
