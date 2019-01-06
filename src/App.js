import React, {Component} from 'react';
import './App.css';
import Applications from './Applications';
import Contact from './Contact';
import Games from './Games';
import Home from './Home';
import Menu from './Menu';
import SectionTitle from './SectionTitle';

class App extends Component {

    render() {
        return (

            <div id="app" className="App">

                <Menu/>
                <Home/>
                <SectionTitle title="Applications" id="applications"/>
                <Applications/>
                <SectionTitle title="Games" id="games"/>
                <Games/>
                <Contact/>

            </div>
        );
    }

}

export default App;
