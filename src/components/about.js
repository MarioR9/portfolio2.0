import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

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
            <div className='about-Skills'>
                <ProgressBar animated now={45} />
                <ProgressBar animated now={45} />
                
            </div>
                
            </div>
        )
    }
}


