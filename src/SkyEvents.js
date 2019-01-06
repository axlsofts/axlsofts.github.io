import React, {Component} from 'react';
import './SkyEvents.css'
import googlePlayBadge from './res/img/google-play-badge.png';
import icon from './res/img/applications/sky-events/icon_128.png';
import screenshot01 from './res/img/applications/sky-events/screenshots/01.png';
import screenshot02 from './res/img/applications/sky-events/screenshots/02.png';
import screenshot03 from './res/img/applications/sky-events/screenshots/03.png';
import screenshot04 from './res/img/applications/sky-events/screenshots/04.png';
import screenshot05 from './res/img/applications/sky-events/screenshots/05.png';
import screenshot06 from './res/img/applications/sky-events/screenshots/06.png';
import screenshot07 from './res/img/applications/sky-events/screenshots/07.png';
import screenshot08 from './res/img/applications/sky-events/screenshots/08.png';
import {Carousel, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class SkyEvents extends Component {

    render() {
        return (

            <div className="container SkyEvents">

                <Jumbotron className="SkyEvents-Jumbotron">

                    <Grid>

                        <Row className="SkyEvents-Row">
                            <Col xs={2} md={1}>
                                <img width="64px" src={icon} alt="Sky Envents"/>
                            </Col>
                            <Col xs={10} md={11}>
                                <h4>
                                    <b>Sky Events</b>
                                </h4>
                                <h4>Don't miss sky events anymore!</h4>
                            </Col>
                        </Row>

                        <Row className="SkyEvents-Row">
                            <Col xs={5} md={4}>
                                <Carousel indicators={false} controls={false} interval={2000}>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot01}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot02}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot03}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot04}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot05}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot06}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot07}/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img width="100%" alt="Screenshot" src={screenshot08}/>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col xs={7} md={8}>
                                <div className="SkyEvents-Description">
                                    <h4>ASTRONOMICAL ALMANAC</h4>
                                    <p>
                                        With this app, you can easily see all astronomical events from 1998 to 2067,
                                        such as eclipses, lunar phases, equinoxes and solstices, moon apogee and
                                        perigee, moon-planet conjunctions, and meteor showers.
                                    </p>
                                    <p>
                                        Click events to see explanations about the different astronomical phenomena. Add
                                        events to your Google Calendar in order to not miss them anymore.
                                    </p>
                                    <p>
                                        Moreover, the search feature enables you to quickly find the events you're
                                        interested in!
                                    </p>
                                    <br/>
                                    <h4>SOLAR ECLIPSES</h4>
                                    <p>
                                        Discover all solar eclipses visible from your current location or from anywhere
                                        else in the World until 2024.
                                    </p>
                                    <p>
                                        Click eclipses to see all details about them: when they start, when they are at
                                        their maximum, their duration, their magnitude and obscuration, etc. Add
                                        eclipses to your Google Calendar in order to not miss them anymore.
                                    </p>
                                    <br/>
                                    <h4>LUNAR PHASES CALENDAR</h4>
                                    <p>
                                        A specific screen enables you to see upcoming lunar phases at a glance.
                                    </p>
                                    <br/>
                                    <h4>DAILY SUN AND MOON DATA</h4>
                                    <p>
                                        Check out sunrise, sunset, moonrise and moonset times for your current location.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <a href="https://play.google.com/store/apps/details?id=com.axlsofts.skyevents">
                                <img
                                    class="center-block"
                                    alt="Sky Events on Google Play"
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

export default SkyEvents;
