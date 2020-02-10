import React from 'react'
import { Card, Row, Col, CardDeck} from 'react-bootstrap';

export default class Portfolio extends React.Component{
    render(){
        return(
            <div className='card-group'>
                <CardDeck>
                <Card>
                    <Card.Body>
                    <Card.Title>Uber Eats HotZone</Card.Title>
                    <Card.Img variant="top" src="../assets/portfolio/tranlatemebk.png" />
                    <Card.Text>
                        Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user of specific US locations.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Uber Eats HotZone</Card.Title>
                    <Card.Img variant="top" src="../assets/portfolio/tranlatemebk.png" />
                    <Card.Text>
                        Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user of specific US locations.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Uber Eats HotZone</Card.Title>
                    <Card.Img variant="top" src="../assets/portfolio/tranlatemebk.png" />
                    <Card.Text>
                        Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user of specific US locations.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Uber Eats HotZone</Card.Title>
                    <Card.Img variant="top" src="../assets/portfolio/tranlatemebk.png" />
                    <Card.Text>
                        Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user of specific US locations.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
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