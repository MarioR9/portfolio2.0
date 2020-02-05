import React , { useState }  from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          iconColor: "#f5eaea"
        };
      }
    handleIconColorChange=()=>{
        this.setState({ iconColor: "red" })
    }  

    render(){
        return(
            <div>
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="/home">Mario Rodriguez
                &nbsp;
                <SocialIcon network="github" onMouseOver={this.handleIconColorChange} bgColor={this.state.iconColor} style={{ height: 40, width: 40 }} url="https://github.com/MarioR9"/> 
                &nbsp;
                <SocialIcon network="linkedin" onMouseOver={this.handleIconColorChange} bgColor={this.state.iconColor} style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mario-rodriguezan/"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" ></Nav>
                    <Nav className="navbar-left">
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