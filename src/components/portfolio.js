import React from 'react'
import {Container, Card, Row, Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          img1: "../assets/portfolio/portfolioabout.png",
          img2: "../assets/portfolio/Startapp.png",
          img3: "../assets/portfolio/tranlatemebk.png",
          img4: "../assets/portfolio/rickandmortybk.png",
          img5: "../assets/portfolio/tonesterbk.png",
        };
      }
    handleImage1=()=>{
        if(this.state.img1 === "../assets/portfolio/portfolioabout.png"){
            this.setState({img1:'../assets/portfolio/portfolio2.png' })
        } else {
            this.setState({img1:"../assets/portfolio/portfolioabout.png" })
        }
    }
    handleImage2=()=>{
        if(this.state.img2 === "../assets/portfolio/Startapp.png"){
            this.setState({img2:"../assets/portfolio/Startapp.png" })
        } else {
            this.setState({img2:"../assets/portfolio/Startapp.png" })
        }
    }
    handleImage3=()=>{
        if(this.state.img3 === "../assets/portfolio/tranlatemebk.png"){
            this.setState({img3:'../assets/portfolio/translateme2.png' })
        } else {
            this.setState({img3:"../assets/portfolio/tranlatemebk.png" })
        }
    }
    handleImage4=()=>{
        if(this.state.img4 === '../assets/portfolio/rickandmortybk.png'){
            this.setState({img4:'../assets/portfolio/rickcatch.png' })
        } else {
            this.setState({img4:'../assets/portfolio/rickandmortybk.png' })
        }
    }
    handleImage5=()=>{
        if(this.state.img5 === "../assets/portfolio/tonesterbk.png"){
            this.setState({img5:'../assets/portfolio/tonester2.png' })
        } else {
            this.setState({img5:"../assets/portfolio/tonesterbk.png" })
        }
    }

    render(){
        return(
            <div className='card-group'>
                {/* projects grid 3 colums*/}
                <Row>
                <Col>
                <Card style={{ width: '20rem' }} >
                    <Card.Body>
                    <Card.Img variant="top" src={this.state.img1} onMouseEnter={this.handleImage1} onMouseLeave={this.handleImage1}/>
                    &nbsp;
                    <Card.Title>Portfolio website</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github"  style={{ height: 40, width: 40 }} url="https://github.com/MarioR9/portfolio2.0"/>
                    </Card.Text>
                    <Card.Text>
                        The portfolio website. created using React.js, javascript, HTML, CSS, and bootstrap.
                    </Card.Text>
                    </Card.Body>
                    <Card.Text>
                    <Container>
                    <Row >
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/jslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/htmllogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/csslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/reactlogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/bootslogo.png"/>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Text>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={this.state.img2} onMouseEnter={this.handleImage2} onMouseLeave={this.handleImage2} />
                    &nbsp;
                    <Card.Title>Uber Eats HotZone</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github" style={{ height: 40, width: 40 }} url="https://github.com/MarioR9/UberEats_HotZones"/>
                     &nbsp;
                    </Card.Text>
                    <Card.Text>
                    Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user about how busy the restaurants are around a specific US location.
                    </Card.Text>
                    </Card.Body>
                    <Card.Text>
                    <Container>
                    <Row >
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/reactlogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/jslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/htmllogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/nodelogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/puppeteerlogo.png"/>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Text>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={this.state.img3} onMouseEnter={this.handleImage3} onMouseLeave={this.handleImage3} />
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
                    <Card.Text>
                    <Container>
                    <Row >
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/reactlogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/jslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/htmllogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/csslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/rubylogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/watlogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/cdlogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/slogo.png"/>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Text>
                </Card>
                </Col>
                </Row>
                <Row> 
                    <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={this.state.img4} onMouseEnter={this.handleImage4} onMouseLeave={this.handleImage4}/>
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
                    <Card.Text>
                    <Container>
                    <Row >
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/reactlogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/jslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/htmllogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/csslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/rubylogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/slogo.png"/>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Text>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                    <Card.Img variant="top" src={this.state.img5} onMouseEnter={this.handleImage5} onMouseLeave={this.handleImage5} />
                    &nbsp;
                    <Card.Title>Tonester</Card.Title>
                    <Card.Text>
                     <SocialIcon network="github"  style={{ height: 40, width: 40 }} url="https://github.com/MarioR9/tonester_frontend"/>
                     &nbsp;
                     <SocialIcon network="youtube"  style={{ height: 40, width: 40 }} url="https://www.youtube.com/watch?v=bQAIDucJ6Dk&feature=emb_logo"/>
                    </Card.Text>
                    <Card.Text>
                        Tonester was build using vanilla javascript for the frontend and rails for the backend. Tonester allows users to save albums using Spotify’s API.
                    </Card.Text>
                    </Card.Body>
                    <Card.Text>
                    <Container>
                    <Row >
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/jslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/htmllogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/csslogo.png"/>
                        </Col>
                        <Col xl={4}>
                        <img class="portfilio-skills" src="../assets/logos/rubylogo.png"/>
                        </Col>
                    </Row>
                    </Container>
                    </Card.Text>
                </Card>
                </Col>
                </Row>
            </div>
        )
    }
}