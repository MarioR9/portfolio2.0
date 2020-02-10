import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';

export default class Projects extends React.Component{
    render(){
        return(
            <div>
               <h1>Projects</h1>
               <Container>
            <div className='about-skills'>
                <Row>
                    <Col>
                    <img class="techLogo" src="../assets/js.png"/>
                    <img class="techLogo" src="../assets/react.png"/>
                    <img class="techLogo" src="../assets/ruby.png"/>
                    <img class="techLogo" src="../assets/watson.png"/> 
                    <img class="techLogo" src="../assets/spotify.png"/>
                    <img class="techLogo" src="../assets/cloudinary.png"/> 
                    </Col>
                </Row>
            </div>
            </Container>
                <p>
                    UberEats HotZones
                    <br></br>
                    Translateme
                    <br></br>
                    Rick and Morty Advantures
                    <br></br>
                    Tonester
                </p>
                <br></br>
                <h1>Technologies used</h1>
                <h2>javascript <br></br>
                react <br></br>
                ruby on rails <br></br>
                spotify <br></br>
                cloudinary <br></br>
                ibm watson <br></br>
                pupetter <br></br>
                node <br></br>
                </h2>
            </div>
        )
    }
}
