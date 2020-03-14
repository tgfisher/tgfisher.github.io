import React, { Component, Fragment } from 'react';
import PhotoShow from '../PhotoShow/PhotoShow'
import galleries from '../../galleries.json'
class TwentyTwenty extends Component {
  render() {
    return (
      <Fragment>
          <PhotoShow title="TwentyTwenty" gallery_list={galleries.living_galleries}/>
      </Fragment>
    )
  }
}

export default TwentyTwenty;
