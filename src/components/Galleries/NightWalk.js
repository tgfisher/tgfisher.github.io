import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class NightWalk extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="NightWalk" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default NightWalk;
