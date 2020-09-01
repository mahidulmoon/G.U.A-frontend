import React, { Component } from 'react';
import {Navbar ,Nav,Form ,FormControl,Button} from 'react-bootstrap';
export default class Navigationbar extends Component {
  render() {
    return (
      <div> 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="IMG_20200818_194023.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              গফরগাঁও আধুনিক হসপিটাল</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#footer">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#photography">Photography</Nav.Link>
                <Nav.Link href="#physician">Physician</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Registration</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar> 
    </div>
    );
  }
}
