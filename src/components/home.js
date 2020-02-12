import React, { Fragment } from 'react'
import {Container, Card, Row, Col, } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            bkColor: '#333a40', //#333a40
            img: "../assets/001.png",
            h: '<coder>',
            h1: '<designer>'
        };
      }
    componentDidMount=()=>{
        setTimeout(function(){
            this.setState({intro: false, bkColor: 'white'});
       }.bind(this),4000);
    }
    
      
    render(){

    const divStyle = {
        backgroundColor: this.state.bkColor,
        position: 'fixed',
        margin:0,
        top:0,
        left:0,
        width: '100%',
        height: '100%'
    }
        return(
            <div style={divStyle}>
                    {this.state.intro === true ? 
                    <Fragment>
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
                     </Fragment>
                     :
                 <div>
                <Container>    
                 <div className='home-page'>
                     <div className='home-title'>   
                        <Container>
                            <Row>
                                <Col>
                                <img className='img2' src={this.state.img} onMouseEnter={this.handleImageTransition} onMouseLeave={this.handleImageTransition}/>
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
                     <div className='home-checkWork'>
                     <Link to="/portfolio" className="btn btn-primary">Checkout my work</Link>
                     </div>
                     <div className='card-group-home'>
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
                </div> 
                </Container>
                <div>
                <div className='about-skills'>
                 <Row >
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/htmlname.png"/>
                     </Col>
                     &nbsp;
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/cssname.png"/>
                     </Col>
                     
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/jsname.png"/>
                     </Col>
                     
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/rubyname.png"/>
                      </Col>
                      
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/reactname.png"/>
                      </Col>
                      
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/semanticname.png"/>
                      </Col>
                      
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/cdname.png"/>
                      </Col>
                      
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/watname.png"/>
                      </Col>
                      
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/spotiname.png"/>
                      </Col>
                      
                     <Col lg>
                     <img class="techLogo" src="../assets/logonames/bootsname.png"/>
                     </Col>
                    </Row>
                </div> 
                </div>
                </div>
                    }
            </div>
        )
    }
}