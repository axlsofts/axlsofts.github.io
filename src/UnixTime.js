import React, {Component} from 'react';
import './UnixTime.css'
import googlePlayBadge from './res/img/google-play-badge.png';
import icon from './res/img/applications/unix-time/icon_128.png';
import screenshot01 from './res/img/applications/unix-time/screenshots/01.png';
import screenshot02 from './res/img/applications/unix-time/screenshots/02.png';
import {Carousel, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class UnixTime extends Component {

    render() {
        return (

            <div className="container UnixTime">

                <Jumbotron className="UnixTime-Jumbotron">

                    <Grid>

                        <Row className="UnixTime-Row">
                            <Col xs={2} md={1}>
                                <img width="64px" src={icon} alt="Unix Time"/>
                            </Col>
                            <Col xs={10} md={11}>
                                <h4>
                                    <b>Unix Time</b>
                                </h4>
                                <h4>Learn more about Unix Time.</h4>
                            </Col>
                        </Row>

                        <Row className="UnixTime-Row">
                            <Col xs={5} md={4}>
                                <Carousel indicators={false} controls={false} interval={2000}>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot01}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot02}/>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col xs={7} md={8}>
                                <div className="UnixTime-Description">
                                    <p>
                                        Unix Time represents the number of seconds elapsed since January 1st, 1970,
                                        00:00:00 UTC.
                                    </p>
                                    <p>
                                        This application provides you with the following features:
                                        <ul>
                                            <li>Display the current Unix Time.</li>
                                            <li>Convert a Unix Time into a human-readable date/time, and back.</li>
                                            <li>Landscape mode: displays the current Unix Time, as a digital clock.</li>
                                            <li>Completely free, no ads.</li>
                                        </ul>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <a href="https://play.google.com/store/apps/details?id=com.axlsofts.unixtime">
                                <img
                                    class="center-block"
                                    alt="Unix Time on Google Play"
                                    src={googlePlayBadge}
                                    width="250px"/>
                            </a>
                        </Row>

                    </Grid>

                </Jumbotron>

            </div>

        );
    }

}

export default UnixTime;
