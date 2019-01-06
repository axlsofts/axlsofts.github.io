import React, {Component} from 'react';
import './EasyBudget.css'
import googlePlayBadge from './res/img/google-play-badge.png';
import iconFull from './res/img/applications/easy-budget/icon_128.png';
import iconFree from './res/img/applications/easy-budget/icon_free_128.png';
import screenshot01 from './res/img/applications/easy-budget/screenshots/01.png';
import screenshot02 from './res/img/applications/easy-budget/screenshots/02.png';
import screenshot03 from './res/img/applications/easy-budget/screenshots/03.png';
import screenshot04 from './res/img/applications/easy-budget/screenshots/04.png';
import screenshot05 from './res/img/applications/easy-budget/screenshots/05.png';
import screenshot06 from './res/img/applications/easy-budget/screenshots/06.png';
import screenshot07 from './res/img/applications/easy-budget/screenshots/07.png';
import screenshot08 from './res/img/applications/easy-budget/screenshots/08.png';
import {
    Carousel,
    Grid,
    Row,
    Table,
    Col,
    Jumbotron
} from 'react-bootstrap';

class EasyBudget extends Component {

    render() {
        return (

            <div className="container EasyBudget">

                <Jumbotron className="EasyBudget-Jumbotron">

                    <Grid>

                        <Row className="EasyBudget-Row">
                            <Col xs={2} md={1}>
                                <img width="64px" src={iconFull} alt="Easy Budget"/>
                            </Col>
                            <Col xs={10} md={11}>
                                <h4>
                                    <b>Easy Budget</b>
                                </h4>
                                <h4>The perfect companion of your budgets!</h4>
                            </Col>
                        </Row>

                        <Row className="EasyBudget-Row">
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
                                <div className="EasyBudget-Description">
                                    <p>
                                        Need an application to easily manage your budget, without the complexity of most
                                        existing personal finance managers ? Easy Budget is the perfect companion for
                                        your everyday life and holidays, so you can have healthy finances and avoid
                                        unpleasant surprises!
                                    </p>
                                    <p>
                                        Easy Budget is a very simple application that allows you to track any type of
                                        budget, such as :
                                        <ul>
                                            <li>your monthly shopping budget,</li>
                                            <li>your weekly pocket money,</li>
                                            <li>your Christmas presents budget,</li>
                                            <li>your vacation budget,</li>
                                            <li>the budget of your trip to Paris next weekend,</li>
                                            <li>etc.</li>
                                        </ul>
                                    </p>
                                    <p>
                                        You can also use Easy Budget to easily track your bank accounts.
                                    </p>
                                    <p>
                                        With Easy Budget, you can track one or many budgets at the same time, easily
                                        create and modify transactions (payments or deposits), view your transaction
                                        history, share your budgets using differents means depending on available
                                        applications on your device (email, Evernote, etc.), and protect your data with
                                        a password.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Table >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th><img src={iconFree} width="32px" alt=""/>
                                            &nbsp; Easy Budget Free</th>
                                        <th><img src={iconFull} width="32px" alt=""/>
                                            &nbsp; Easy Budget</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Number of budgets to manage</th>
                                        <td>2</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <th>Password protection</th>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Share your budgets</th>
                                        <td>No</td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Ads</th>
                                        <td>Yes</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>
                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.axlsofts.budget.free">
                                                <img alt="Easy Budget Free on Google Play" src={googlePlayBadge} width="250px"/>
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.axlsofts.budget.full">
                                                <img alt="Easy Budget on Google Play" src={googlePlayBadge} width="250px"/>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>

                    </Grid>

                </Jumbotron>

            </div>

        );
    }

}

export default EasyBudget;
