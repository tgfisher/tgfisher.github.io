import React, { Component } from 'react';
import { ListGroup, Row, Col } from 'reactstrap';

import galleries from '../../galleries.json';

import '../Galleries/Gallery.css';

var all_galleries = galleries.living_galleries.concat(
    galleries.retired_galleries
);

class Gallery extends Component{
  constructor(props) {
    super(props);
    this.galleryId = props.match.params.galleryId
    this.state={
      height: 0,
      width: 0,
    };
    this.updateDims = this.updateDims.bind(this);
  }
  
  componentDidMount() {
    this.updateDims();
    window.addEventListener('resize', this.updateDims);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDims);
  }

  updateDims() {
    const scale_horz_border = .55
    const scale_vert_border = .8
    if (window.innerHeight * 1.3 < window.innerWidth ) {
        this.setState({ height: window.innerHeight * scale_vert_border, width: "auto" });
    } else {
        this.setState({ height: "auto", width: window.innerWidth * scale_horz_border });
    }
  }

  choosePhotos = (urls, res) => {
    var chosen_photos = urls.map( imgurl => {
      return imgurl + res;
   })
    return chosen_photos;
  }

  renderTitlePhotoshow = link => {
      for (const curr_gal of all_galleries){
        if (curr_gal.link === link) {
          var image_res = curr_gal.resolution;
          var urls = curr_gal.urls;
          var chosen_photos = this.choosePhotos(urls, image_res);
        }
      }

    var photo_cards = chosen_photos.map( url => {
      const height = this.state.height;
      const width = this.state.width;
      return(
          <Row key={url}>
            <Col>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img width={width} height={height} src={url} alt={url}/>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Row>
      );
    });

    return photo_cards;
  }


  render() {
    return <ListGroup>{this.renderTitlePhotoshow(this.galleryId)}</ListGroup>;
  }
}

export default Gallery;
