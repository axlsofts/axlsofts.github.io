import React, {Component} from 'react';
import './Home.css'
import googlePlayBadge from './res/img/google-play-badge.png';
import {Jumbotron} from 'react-bootstrap';

class Home extends Component {

    render() {
        return (

            <div id="home" className="Home">

                <div className="Home-VCenter">
                    <div className="container">
                        <Jumbotron className="Home-Jumbotron">

                            <h1>Simple, Smart, Elegant</h1>

                            <div className="Home-Text">
                                <p>Scroll to discover our mobile applications and games</p>
                                <p>or find them directly on &nbsp;
                                    <a href="https://play.google.com/store/apps/developer?id=Axl+Softs">
                                        Google Play
                                    </a>
                                </p>
                            </div>

                            <a href="https://play.google.com/store/apps/developer?id=Axl+Softs">
                                <img alt="Google Play" src={googlePlayBadge} width="350px"/>
                            </a>

                        </Jumbotron>
                    </div>
                </div>

            </div>
        );
    }

}

export default Home;
