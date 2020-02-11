import React, { Fragment } from 'react'
import {Container, Card, Row, Col} from 'react-bootstrap';


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            intro: true,
            bkColor: '#333a40'
        };
      }
    componentDidMount=()=>{
        setTimeout(function(){
            this.setState({intro: false, bkColor: 'white'});
       }.bind(this),4975);
    }

      
    render(){

    const divStyle = {
        backgroundColor: this.state.bkColor,
        position: 'fixed',
        padding:0,
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
                </div> }

            </div>
        )
    }
}