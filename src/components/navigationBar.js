import React from 'react';
import { Navbar, Nav, Popover, OverlayTrigger} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import copy from 'copy-to-clipboard';

export default class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          iconGithub: "white",
          iconLinkedin: "white",
          iconEmail: 'white',
          msg:'Click to copy my email',
          email: 'mariorodriguezan@gmail.com',
          popoverColor: ''
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
    handleIconColorEmail=()=>{
        if(this.state.iconEmail === "white"){
            this.setState({ iconEmail: "#b0aeb1" })
            this.setState({
                popoverColor: '',
                msg: 'Click to copy my email 📧'
            })
        }else{
            this.setState({ iconEmail: "white" })
        }
    }
    handleCopy=()=>{
        copy(this.state.email);
        this.setState({
            popoverColor: 'popover-bk-color',
            msg: "Yay! Let's make something awesome together. 🙌"
        })
      }
    render(){

        const popover =(
            <Popover id="popover-basic">
            <Popover.Content className={this.state.popoverColor}>
            {this.state.msg}
            </Popover.Content>
            </Popover>
        )
          
        return(
            <div>
                <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Navbar.Brand  href="/home">
                &nbsp;
                {/* Ican can be resize by changin width and height */}
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
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        &nbsp;
                        <Nav.Link href="./assets/MR_Resume.pdf" download="Mario_Rodriguez_Resume">Resume</Nav.Link>
                        &nbsp;
                        &nbsp;
                        {/* overlay for tooltip. show is the time that takes to show when hover over.  */}
                        <OverlayTrigger
                        placement="bottom-end"
                        delay={{ show: 0, hide: 0 }}
                        overlay={popover}
                        >
                        <SocialIcon onClick={this.handleCopy} network="email" onMouseEnter={this.handleIconColorEmail} onMouseLeave={this.handleIconColorEmail} bgColor={this.state.iconEmail} style={{ height: 40, width: 40 }}/>
                        </OverlayTrigger>
                
                &nbsp;
                <SocialIcon network="github" onMouseEnter={this.handleIconColorGithub} onMouseLeave={this.handleIconColorGithub} bgColor={this.state.iconGithub} style={{ height: 40, width: 40 }} url="https://github.com/MarioR9"/> 
                &nbsp;
                <SocialIcon network="linkedin" onMouseEnter={this.handleIconColorLinkedin} onMouseLeave={this.handleIconColorLinkedin} bgColor={this.state.iconLinkedin} style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/mario-rodriguezan/"/>
                &nbsp; 
                &nbsp;
                &nbsp;
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )}

}