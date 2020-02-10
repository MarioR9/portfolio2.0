import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          iconGithub: "white",
          iconLinkedin: "white"
        };
      }
    // Color change onmouseenter
    handleIconColorGithub=()=>{
        if(this.state.iconGithub === "white"){
            this.setState({ iconGithub: "#b0aeb1" })
        }else{
            this.setState({ iconGithub: "white" })
        }
    }
    handleIconColorLinkedin=()=>{
        if(this.state.iconLinkedin === "white"){
            this.setState({ iconLinkedin: "#3e86f3" })
        }else{
            this.setState({ iconLinkedin: "white" })
        }
    }  

    render(){
        return(
            <div>
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand  href="/home">
                &nbsp;
                <img
                    alt=""
                    src="./assets/Mlogo.png"
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" ></Nav>
                    <Nav >
                        <Nav.Link href="/home">Home</Nav.Link>
                        &nbsp;
                        <Nav.Link href="/about">About</Nav.Link>
                        &nbsp;
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        &nbsp;
                        <Nav.Link href="./assets/MR_Resume.pdf" download="Mario_Rodriguez_Resume">Resume</Nav.Link>
                        &nbsp;
                        <Nav.Link className='contactBorder' href="/contact">Contact</Nav.Link>
                        &nbsp;
                &nbsp;
                <SocialIcon network="github" onMouseEnter={this.handleIconColorGithub} onMouseLeave={this.handleIconColorGithub} bgColor={this.state.iconGithub} style={{ height: 40, width: 40 }} url="https://github.com/MarioR9"/> 
                &nbsp;
                <SocialIcon network="linkedin" onMouseEnter={this.handleIconColorLinkedin} onMouseLeave={this.handleIconColorLinkedin} bgColor={this.state.iconLinkedin} style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mario-rodriguezan/"/>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )}

}