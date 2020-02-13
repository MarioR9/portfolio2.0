import React from 'react'
import {Container, Card, Row, Col } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
  import { Navbar } from 'react-bootstrap';


export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            bkColor: '#333a40', //#333a40
            img: "../assets/001.png",
            h: '<coder>',
            h1: '<designer>',
            position: 'fixed'
        };
      }
    componentDidMount=()=>{
        setTimeout(function(){
            this.setState({intro: false, bkColor: 'white', position: ' '});
       }.bind(this),4000);
    }
    
      
    render(){

    const divStyle = {
        overflow: 'auto',
        backgroundColor: this.state.bkColor,
        position: this.state.position,
        margin:0,
        top:0,
        left:0,
        width: '100%',
        height: '100%'
    }
        return(
            <div>
            <div style={divStyle}>
                    {this.state.intro === true ? 
                    <div>
                     <div class="containerAnimation">
                     <div class="dot dot-1"></div>
                     <div class="dot dot-2"></div>
                     <div class="dot dot-3"></div>
                    </div>
 
                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                     <defs>
                         <filter id="goo">
                         <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                         <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                         </filter>
                     </defs>
                     </svg>
                     </div>
                     :
                 <div>
                <Container>    
                 <div className='home-page'>
                     <div className='home-title'>   
                        <Container>
                            <Row>
                                <Col>
                                <img alt="pic" className='img2' src={this.state.img} onMouseEnter={this.handleImageTransition} onMouseLeave={this.handleImageTransition}/>
                                </Col>
                                <Col>
                                <div className='home-header'>
                                <h1><a href="/about">{this.state.h}</a></h1>
                                <h1><a href="/about">{this.state.h1}</a></h1>
                                <p>I am a driven individual with the ability to adapt to any situation.
                                    Designer and Coder focused on beautiful, functional and clean code
                                    and proven potential to grow self and others.</p>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                     </div>
                     <div className='card-group-home'>
                     <div className='home-checkWork'>
                     <Link to="/portfolio" className="btn btn-primary">Check out my work</Link>
                     </div>
                     &nbsp;
                        <Container>
                            <Row>
                                <Col>
                                <Card style={{ width: '18rem'}}>
                                <Card.Img src="../assets/portfolio/Startapp.png" />
                                &nbsp;
                                <Card.Text>Uber Eats HotZone</Card.Text>
                                </Card>
                                </Col>
                                <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img src='../assets/portfolio/translateme2.png' />
                                <Card.Text>Translate Me</Card.Text>
                                </Card>
                                </Col>
                                <Col>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img src='../assets/portfolio/tonester2.png' />
                                <Card.Text>Tonester</Card.Text>
                                </Card>
                                </Col>
                            </Row>
                        </Container>
                     </div>
                <div className='nav-bottom '>
                <Navbar bg="light" variant="light" fixed='bottom'>
                <Navbar.Text>
                    © 2020 Mario Rodriguez
                </Navbar.Text>
                 </Navbar>
                </div >
                </div> 
                </Container>
                </div>
                    }
            </div>
            </div>
        )
    }
}