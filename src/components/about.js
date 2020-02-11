import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
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
            {/* Github Container */}
            <Container>
            <div className='about-calendar'>
                <GitHubCalendar username="MarioR9" blockSize={20}/>
            </div>
            </Container>
              {/* Skills logos */}
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
        )
    }
}


