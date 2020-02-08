import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

export default class About extends React.Component{
    render(){
        return(
            <div>
                {/* container for about header, description and img. 2 colums */}
            <Container>
                <div className='about-Header'>
                <Row>
                <Col>
                <div>
                <h1 >about me</h1>
                <p className='description'>Full-stack web developer with a passion for problem-solving. With experience in Ruby on Rails, JavaScript, and React I discovered web development while taking computer science classes and I fell in love with it. I bring strong skills in working with people, communication in English and Spanish as well as managing people. I spend my free time playing guitar as well as building small projects and learning about new technologies.</p>
                </div>
                </Col>
                <Col>
                <img className='img2' src="../assets/0.jpg" />
                </Col>
                </Row>
                </div>
            </Container>
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
            <div className='about-calendar'>
                <GitHubCalendar username="MarioR9" />
            </div>
            </div>
        )
    }
}


