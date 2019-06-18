import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import moment from 'moment';

import mywork from '../../mywork.json'; // in future, load from S3 or similar
import NeuroWorkListGroup from './NeuroWorkListGroup.js';

class NeuroWorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubs: mywork.pubs,
    };
  }

  render_PubGroups() {
    // sort sessions

    var posters = this.state.pubs.filter(pub => pub.details.format === 'poster')
    var preprints = this.state.pubs.filter(pub => pub.details.format === 'preprint')
    var reviews = this.state.pubs.filter(pub => pub.details.format === 'review')
    var publications = this.state.pubs.filter(pub => pub.details.format === 'paper')

    posters.sort((a, b) => -moment(a.date).diff(moment(b.date))) // ascending sort
    preprints.sort((a, b) => -moment(a.date).diff(moment(b.date)))
    publications.sort((a, b) => -moment(a.date).diff(moment(b.date)))

    return (
      <Container>
        <Row>
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Publications</h2>
                    <br />
                    <NeuroWorkListGroup pubs={publications} />
                  </div>
                </Col>
              </Row>
            </Container>
        </Row>
        <Row>
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Preprints</h2>
                    <br />
                    <NeuroWorkListGroup pubs={preprints} />
                  </div>
                </Col>
              </Row>
            </Container>
        </Row>
        <Row>
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Reviews</h2>
                    <br />
                    <NeuroWorkListGroup pubs={reviews} />
                  </div>
                </Col>
              </Row>
            </Container>
        </Row>
        <Row>
            <Container>
              <Row className="vertical-align">
                <Col xs="12" lg="12">
                  <div>
                    <h2>Posters</h2>
                    <br />
                    <NeuroWorkListGroup pubs={posters} />
                  </div>
                </Col>
              </Row>
            </Container>
        </Row>
      </Container>
    );
  }

  render() {
    return <div>{this.render_PubGroups()}</div>;
  }
}

export default NeuroWorkList;
