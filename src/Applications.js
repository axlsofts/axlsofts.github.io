import React, {Component} from 'react';
import './Applications.css'
import ChristmasGiftsAndBudget from './ChristmasGiftsAndBudget';
import EasyBudget from './EasyBudget';
import SkyEvents from './SkyEvents';
import UnixTime from './UnixTime';

class Applications extends Component {

    render() {
        return (

            <div className="Applications">

                <SkyEvents/>
                <ChristmasGiftsAndBudget/>
                <EasyBudget/>
                <UnixTime/>

            </div>
        );
    }

}

export default Applications;
