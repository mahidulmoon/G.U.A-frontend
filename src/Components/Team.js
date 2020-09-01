import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
export default class Team extends Component {
  render() {
    return (
        <div className="teamdiv"> 
        <center><h3>ব্যবস্থাপনা পরিচালক </h3></center><br />
            <Container>
                <Row>
                    <Col>
                        <div>
                            <img alt="" src="IMG_20200818_194000.jpg" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <p>Name: Nazmul Haque Biplob</p>
                            <p>Rank: M.D.</p>
                            <p>Contact: 01700000000</p>
                            <p>Name: Nazmul Haque Biplob</p>
                            <p>Rank: M.D.</p>
                            <p>Contact: 01700000000</p>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
  }
}
