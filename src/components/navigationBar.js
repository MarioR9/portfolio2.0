import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

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
                    <SocialIcon network="github" bgColor="##000000" style={{ height: 40, width: 40 }} url="https://github.com/MarioR9"/> 
                    <SocialIcon network="linkedin"  style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mario-rodriguezan/"/>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="./assets/MR_Resume.pdf" download="Mario_Rodriguez_Resume">Resume</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )}

}