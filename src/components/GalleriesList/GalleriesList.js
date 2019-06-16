import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import moment from 'moment';

import './GalleriesList.css';

import gallery_data from '../../galleries.json'; // in future, load from S3 or similar
import GalleriesListGroup from './GalleriesListGroup.js';

class GalleriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: gallery_data.galleries,
      max_galleries: 5,
    };
  }

  render_GalleryGroups() {
    // sort sessions
    var is_film = this.state.galleries.map(gal => {
      const gal_type = gal.medium.type;
      if ( gal_type === "film" ) {
        return true;
      } else {
        return false;
      }
    });

    var film_galleries = this.state.galleries.filter(
      (_, i) => is_film[i]
    );
    var digital_galleries = this.state.galleries.filter((_, i) => !is_film[i]);

    film_galleries.sort((a, b) => moment(a.date).diff(moment(b.date))); // ascending sort
    digital_galleries.sort((a, b) => -moment(a.date).diff(moment(b.date)));

    return (
      <Container>
        <Row>
          <Col lg="6" xs="12">
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Film Galleries</h2>
                    <br />
                    <GalleriesListGroup galleries={film_galleries} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col lg="6" xs="12">
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Digital Galleries</h2>
                    <br />
                    <GalleriesListGroup galleries={digital_galleries} />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return <div>{this.render_GalleryGroups()}</div>;
  }
}

export default GalleriesList;
