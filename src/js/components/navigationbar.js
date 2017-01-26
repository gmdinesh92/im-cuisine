import React from 'react';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        const getStyle  = { "marginBottom" : 0 }
        return (
            <div>
                <Navbar style={getStyle} collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">I'm Cuisine</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">About us</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Our Recipes</NavItem>
                            <NavItem eventKey={2} href="#">Contact Us</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar