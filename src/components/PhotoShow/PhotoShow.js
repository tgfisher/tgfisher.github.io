import React, {Component} from 'react';
import {ListGroupItem, ListGroup, Row, Col } from 'reactstrap';
import gallery_data from '../../galleries.json'

class PhotoShow extends Component{
  constructor(props) {
    super(props);
    this.state={
      galleries: gallery_data.galleries,
    };
  }
  
  renderTitlePhotoshow =  title => {
      for (const curr_gal of this.state.galleries){
        if (curr_gal.name === title) {
          var image_res = curr_gal.resolution;
          var chosen_photos = curr_gal.urls.map( imgurl => {
            return imgurl + image_res;
          });
        }
      }

    var photo_cards = chosen_photos.map( urls => {
      return(
        <ListGroupItem>
          <Row>
            <Col>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img width="80%" height="auto" src={urls} alt="a photo"/>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Row>
        </ListGroupItem>
      )
    }) 

    return photo_cards;
  }


  render() {
    return <ListGroup>{this.renderTitlePhotoshow(this.props.title)}</ListGroup>;
  }
};

export default PhotoShow;
