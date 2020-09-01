import React, { Component } from 'react';
import {Container , Row,Col,Image} from 'react-bootstrap';
export default class Photography extends Component {
  render() {
    return (
      <React.Fragment>
           <div id="photography">
           <center><h3>Photography</h3></center>
            <Container>
              <div>
                  <Row>
                      <Col >
                      <div className="photographydiv"><img src="IMG_20200818_193839.jpg" /></div>
                      </Col>
                      <Col xs={6} md={4}>
                      
                      <div className="photographydiv"><img src="IMG_20200818_194051.jpg" /></div>
                      </Col>
                      <Col xs={6} md={4}>
                          
                          <div className="photographydiv"><img src="IMG_20200818_194118.jpg" /></div>
                      </Col>
                      
                      
                  </Row>
              </div>
              </Container>
           </div>
      </React.Fragment>
    );
  }
}
