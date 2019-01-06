import React, {Component} from 'react';
import './Menu.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {bootstrapUtils} from 'react-bootstrap/lib/utils';

class Menu extends Component {

    render() {
        bootstrapUtils.addStyle(Navbar, 'menu');
        return (

            <Navbar fixedTop bsStyle="menu">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Axl Softs</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#applications">
                            Applications
                        </NavItem>
                        <NavItem eventKey={2} href="#games">
                            Games
                        </NavItem>
                        <NavItem eventKey={3} href="#contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }

}

export default Menu;
