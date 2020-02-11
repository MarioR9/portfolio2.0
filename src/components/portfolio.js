import React from 'react'
import {Container, Card, Row, Col, CardDeck} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default class Portfolio extends React.Component{
   

    render(){
        return(
            <div>
            <div className='card-group'>
                <CardDeck>
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="../assets/portfolio/Startapp.png" />
                    &nbsp;
                    <Card.Title>Uber Eats HotZone</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github" url="https://github.com/MarioR9/UberEats_HotZones"/>
                     &nbsp;
                     
                    </Card.Text>
                    <Card.Text>
                        Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user of specific US locations.
                    </Card.Text>
                    </Card.Body>
                <Container >
                <Row noGutter >
                    <Col>
                    <img class="techLogo" src="../assets/logos/jslogo.png"/>
                    </Col>
                    &nbsp;
                    <Col>
                    <img class="techLogo" src="../assets/logos/csslogo.png"/>
                    </Col>
                    
                    <Col>
                    <img class="techLogo" src="../assets/logos/rubylogo.png"/>
                    </Col>
                    
                    <Col>
                    <img class="techLogo" src="../assets/logos/watlogo.png"/>
                     </Col>
                     
                </Row>
                </Container>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="../assets/portfolio/tranlatemebk.png" />
                    &nbsp;
                    <Card.Title>Translate Me</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github"  style={{ height: 40, width: 40 }} url="https://github.com/MarioR9/TranslateMeFrontend"/>
                     &nbsp;
                     <SocialIcon network="youtube"  style={{ height: 40, width: 40 }} url="https://www.youtube.com/watch?v=M7LLMVlS6hg&feature=emb_logo"/>
                    </Card.Text>
                    <Card.Text>
                        Translate me uses a machine learning technology to classify and translate images into different languages. Once the image is captured, users can flip the image to reveal the desired translated word for the image.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="../assets/portfolio/rickandmortybk.png" />
                    &nbsp;
                    <Card.Title>Rick and Morty Adventures</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github"  style={{ height: 40, width: 40 }} url="https://github.com/MarioR9/RickAndMortyFrontend"/>
                     &nbsp;
                     <SocialIcon network="youtube"  style={{ height: 40, width: 40 }} url="https://www.youtube.com/watch?v=0KokNpVvjeA&feature=emb_logo"/>
                    </Card.Text>
                    <Card.Text>
                        Rick and Morty Adventures is an rpg game that allows you to play as Rick and capture different Morties. In addition, users have to look after each Morty they capture and help them level up by keeping them healthy and fed.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Img variant="top" src="../assets/portfolio/tonesterbk.png" />
                    &nbsp;
                    <Card.Title>Tonestes</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github"  style={{ height: 40, width: 40 }} url="https://github.com/MarioR9/tonester_frontend"/>
                     &nbsp;
                     <SocialIcon network="youtube"  style={{ height: 40, width: 40 }} url="https://www.youtube.com/watch?v=bQAIDucJ6Dk&feature=emb_logo"/>
                    </Card.Text>
                    <Card.Text>
                        Tonesters was build using vanilla javascript for the frontend and rails for the backend. Tonester allows users to save albums using Spotify’s API.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
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