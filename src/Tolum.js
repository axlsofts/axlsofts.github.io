import React, {Component} from 'react';
import './Tolum.css'
import googlePlayBadge from './res/img/google-play-badge.png';
import icon from './res/img/games/tolum/icon_128.png';
import screenshot01 from './res/img/games/tolum/screenshots/01.png';
import screenshot02 from './res/img/games/tolum/screenshots/02.png';
import screenshot03 from './res/img/games/tolum/screenshots/03.png';
import screenshot04 from './res/img/games/tolum/screenshots/04.png';
import screenshot05 from './res/img/games/tolum/screenshots/05.png';
import screenshot06 from './res/img/games/tolum/screenshots/06.png';
import screenshot07 from './res/img/games/tolum/screenshots/07.png';
import screenshot08 from './res/img/games/tolum/screenshots/08.png';
import {Carousel, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class Tolum extends Component {

    render() {
        return (

            <div className="container Tolum">

                <Jumbotron className="Tolum-Jumbotron">

                    <Grid>

                        <Row className="Tolum-Row">
                            <Col xs={2} md={1}>
                                <img width="64px" src={icon} alt="Tolum"/>
                            </Col>
                            <Col xs={10} md={11}>
                                <h4>
                                    <b>Sky Events</b>
                                </h4>
                                <h4>Don't miss sky events anymore!</h4>
                            </Col>
                        </Row>

                        <Row className="Tolum-Row">
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
                                <div className="Tolum-Description">
                                    <p>
                                        With Tolum, try to connect 4 pieces on a hexagonal board before your opponent.
                                    </p>
                                    <p>
                                        The basic mechanism of the game is similar to the Connect Four one. However,
                                        Tolum is much more complicated to master because the grid configuration is
                                        different, and also because you can rotate the grid at any time, which may call
                                        into question your opponent's strategy.
                                    </p>
                                    <p>
                                        Game features:
                                        <ul>
                                            <li>1 player mode to play against the computer.</li>
                                            <li>2 players mode, on the same device.</li>
                                            <li>Two different board sizes.</li>
                                            <li>You can disable board rotations to learn how to play Tolum smoothly.</li>
                                        </ul>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.axlsofts.tolum.android">
                                <img
                                    class="center-block"
                                    alt="Tolum on Google Play"
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

export default Tolum;
