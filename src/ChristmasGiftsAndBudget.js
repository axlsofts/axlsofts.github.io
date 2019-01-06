import React, {Component} from 'react';
import './ChristmasGiftsAndBudget.css'
import googlePlayBadge from './res/img/google-play-badge.png';
import icon from './res/img/applications/christmas/icon_128.png';
import screenshot01 from './res/img/applications/christmas/screenshots/01.png';
import screenshot02 from './res/img/applications/christmas/screenshots/02.png';
import screenshot03 from './res/img/applications/christmas/screenshots/03.png';
import screenshot04 from './res/img/applications/christmas/screenshots/04.png';
import screenshot05 from './res/img/applications/christmas/screenshots/05.png';
import screenshot06 from './res/img/applications/christmas/screenshots/06.png';
import screenshot07 from './res/img/applications/christmas/screenshots/07.png';
import {Carousel, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

class ChristmasGiftsAndBudget extends Component {

    render() {
        return (

            <div className="container ChristmasGiftsAndBudget">

                <Jumbotron className="ChristmasGiftsAndBudget-Jumbotron">

                    <Grid>

                        <Row className="ChristmasGiftsAndBudget-Row">
                            <Col xs={2} md={1}>
                                <img width="64px" src={icon} alt="Christmas Gifts And Budget"/>
                            </Col>
                            <Col xs={10} md={11}>
                                <h4>
                                    <b>Christmas Gifts and Budget</b>
                                </h4>
                                <h4>A simple and elegant application to manage your Christmas gift list and budget.</h4>
                            </Col>
                        </Row>

                        <Row className="ChristmasGiftsAndBudget-Row">
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
                                </Carousel>
                            </Col>
                            <Col xs={7} md={8}>
                                <div className="ChristmasGiftsAndBudget-Description">
                                    <p>
                                        With this application, you can track gift ideas and your budget as you do your
                                        Christmas shopping.</p>
                                    <p>
                                        "Christmas Gifts and Budget" provides you with the following features:
                                        <ul>
                                            <li>Enter all your gift ideas quickly to not forget any of them.</li>
                                            <li>Associate your gifts with your family and friends to not forget anyone.</li>
                                            <li>Define your budget and track expenses to meet your budget.</li>
                                            <li>Mark gifts as purchased as you buy them, and see at a glance your shopping
                                                progress.</li>
                                            <li>Protect your Christmas list with a password.</li>
                                            <li>Each year, a new list will automatically be created, and previous ones will
                                                be archived in order for you to access them whenever you need it.</li>
                                        </ul>
                                    </p>
                                    <p>
                                        This application allows you to record all your gift ideas in order to not get
                                        caught at the last minute!
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <a href="https://play.google.com/store/apps/details?id=com.axlsofts.christmas">
                                <img
                                    class="center-block"
                                    alt="Christmas Gifts and Budget on Google Play"
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

export default ChristmasGiftsAndBudget;
