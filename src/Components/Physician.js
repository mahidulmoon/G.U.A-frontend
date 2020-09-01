import React, { Component } from 'react';
import {Container,Carousel,Card,Button,Row,Col} from 'react-bootstrap';
export default class Physician extends Component {
  render() {
    return (
        <div id="physician" className="physiciandiv"> 
            <center><h3>Physician</h3></center>
            <br/>
            <Container>
            <Carousel>
                <Carousel.Item>
                    <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr. Umme Tania Nasrin Urmi</Card.Title>
                            <Card.Text>
                            OBSTETRICS AND GYNECOLOGY
                            </Card.Text>
                            <Card.Text>
                            Fitu Maternal(DMC)
                            </Card.Text>
                            
                            <Card.Text>
                            01866682256
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr.Rupa Shaha </Card.Title>
                            <Card.Text>
                            OBSTETRICS AND GYNECOLOGY
                            </Card.Text>
                            <Card.Text>
                            D.M.U(Medical Ultra)
                            </Card.Text>
                            
                            <Card.Text>
                            01913326452
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr. Sharmin Akhter</Card.Title>
                            <Card.Text>
                            OBSTETRICS AND GYNECOLOGY
                            </Card.Text>
                            <Card.Text>
                            CMU(Ultra),CCD(Birdem)
                            </Card.Text>
                            
                            <Card.Text>
                            01866682256
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                        
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr. Sharmin Akhter</Card.Title>
                            <Card.Text>
                            OBSTETRICS AND GYNECOLOGY
                            </Card.Text>
                            
                            <Card.Text>
                            CCD(Birdem)
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr. Shariful Alom Rubel</Card.Title>
                            <Card.Text>
                            Pediatric surgery
                            </Card.Text>
                            <Card.Text>
                            MBBS,BCS(Health),MCPS
                            </Card.Text>
                            
                            <Card.Text>
                            01866682256
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr. Adnan Bashar</Card.Title>
                            <Card.Text>
                            Pediatric surgery
                            </Card.Text>
                            <Card.Text>
                            CCD(Birdem)
                            </Card.Text>
                            
                            <Card.Text>
                            01866682256
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                        
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="indexdoctor.jfif" />
                        <Card.Body>
                            <Card.Title>Dr. Kamal Hossain</Card.Title>
                            <Card.Text>
                            Child Health
                            </Card.Text>
                            <Card.Text>
                            MBBS
                            </Card.Text>
                            
                            <Card.Text>
                            01866682256
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
  }
}
