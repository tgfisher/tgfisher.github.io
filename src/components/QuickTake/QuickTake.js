import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaFlask, FaCameraRetro } from 'react-icons/fa'
import './QuickTake.css';
import tucker_photo from './lab_headshot.jpg';
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
                                <h6 className="text-align"> I recently joined Lisa Giocomo's lab. We study navigation. Before this, I was lucky to work with Cliff D. Saron, W. Marty Usrey, Henry J. Alitto, and Krishna V. Shenoy.</h6>
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
                                <Link to="/science" className="mylink" >
                                    <FaFlask size={50} />
                                </Link>
                                <br />
                                <br />
                                <h6> Science </h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QuickTake;
