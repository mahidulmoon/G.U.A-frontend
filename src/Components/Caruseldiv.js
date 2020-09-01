import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
export default class Caruseldiv extends Component {
  render() {
    return (
      <div> 
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="unnamed.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{color:'black'}}>First slide label</h3>
                <p style={{color:'black'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="The-integrations-that-matter-for-a-Hospital-Management-System.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{color:'black'}}>Second slide label</h3>
                <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="The-Must-Have-modules-of-a-Hospital-Management-System-1200x675.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{color:'black'}}>Third slide label</h3>
                <p style={{color:'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      </div>
    );
  }
}
