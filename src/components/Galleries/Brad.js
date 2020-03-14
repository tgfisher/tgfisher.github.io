import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'

class Brad extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="Brad" gallery_list={galleries.retired_galleries}/>
      </Fragment>
    )
  }
}

export default Brad;
