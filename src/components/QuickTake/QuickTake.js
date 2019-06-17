import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaFlask, FaCameraRetro } from 'react-icons/fa'
import './QuickTake.css';
import tucker_photo from './DSCF9079.jpg';
import datura_photo from './Datura_RIP.jpg';


class QuickTake extends Component {
    render() {
        return (
            <Container>
                <br />
                <br />
                <Row>
                    <Col xs="13" md={{size:8, offset: 2}} lg={{size: 5, offset: 0}} className="center">
                            <img
                                src={tucker_photo}
                                className="rounded-circle headshot"
                                onMouseOver={e => (e.currentTarget.src=datura_photo)}
                                onMouseOut={e => (e.currentTarget.src=tucker_photo)}
                                alt="Tucker"
                            />
                            <br />
                            <br />
                            <br />
                    </Col>
                    <Col xs="12" md={{size:9, offset: 2}} lg={{size: 5, offset: 2}} className="text-center">
                        <Row>
                            <div>
                                <h1 >Tucker Fisher</h1>
                                <br />
                                <h5 >Graduate Student in Neuroscience</h5>
                                <br />
                                <br />
                                <h6 className="text-center"> I have recently joined Lisa Giocomo's Lab. We study navigation. Before this, I was extremely lucky to work with Marty Usrey, Henry Alitto, and Krishna Shenoy.</h6>
                                <br />
                                <h7>(for the most part this is a place to share photography)</h7>
                                <br />
                            </div>
                        </Row>
                        <hr />
                        <br />
                        <Row>
                            <Col>
                                <Link to="/art" className="mylink" >
                                    <FaCameraRetro size={50} />
                                </Link>
                                <br />
                                <br />
                                <h6> Art </h6>
                            </Col>
                            <Col xs="1">
                                <Link to="/easteregg">
                                   <hr className="easteregg" /> 
                                </Link>
                            </Col>
                            <Col>
                                <a className="mylink" href="https://scholar.google.com/citations?user=9r-N8UkAAAAJ&hl=en&oi=ao" >
                                    <FaFlask size={50} />
                                </a>
                                <br />
                                <br />
                                <h6> Science </h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default QuickTake;
