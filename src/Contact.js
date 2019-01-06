import React, {Component} from 'react';
import './Contact.css'
import {Jumbotron} from 'react-bootstrap';

class Contact extends Component {

    render() {
        return (

            <Jumbotron id="contact" className="Contact">
                <div className="container">
                    <h3>Need help, or want to make a suggestion?</h3>
                    <p>
                        <h4>
                            Contact us at &nbsp;<a href="mailto:support@axlsofts.com">support@axlsofts.com</a>
                        </h4>
                    </p>
                    <a
                        class="twitter-follow-button"
                        href="https://twitter.com/AxlSofts"
                        data-show-count="false"
                        data-size="large">
                        Follow @AxlSofts
                    </a>
                    &nbsp;
                    <a
                        class="twitter-share-button"
                        href="https://twitter.com/share"
                        data-size="large"
                        data-count="none"
                        data-url="http://www.axlsofts.com/">
                        Tweet
                    </a>
                </div>
            </Jumbotron>

        );
    }

}

export default Contact;
