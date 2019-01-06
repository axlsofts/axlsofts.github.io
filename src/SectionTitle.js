import React, {Component} from 'react';
import './SectionTitle.css';
import {Jumbotron} from 'react-bootstrap';

class SectionTitle extends Component {

    render() {
        return (

            <Jumbotron id={this.props.id} className="SectionTitle">
                <div className="container">
                    <h1>{this.props.title}</h1>
                </div>
            </Jumbotron>

        );
    }

}

export default SectionTitle;
