import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class Portraits extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="Portraits" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default Portraits;
