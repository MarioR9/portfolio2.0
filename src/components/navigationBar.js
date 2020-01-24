import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

export default class NavigationBar extends React.Component{
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/home">Mario Rodriguez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" ></Nav>
                    <Nav className="navbar-left">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )}

}