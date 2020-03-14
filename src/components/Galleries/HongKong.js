import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class HongKong extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="HongKong" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default HongKong;
