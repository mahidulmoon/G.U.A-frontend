import React, { Component } from 'react';
import { Form,Container,Button,Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    state = {
        login:{
            username:'',password:''
        },
        token: [],
        isadmin: 'notadmin',
    }
    inputchange = e =>{
        const cred = this.state.login;
        cred[ e.target.name ] = e.target.value;
        this.setState({ login: cred });
    }
    login = e =>{
        e.preventDefault();
        if(this.state.login.username ==='' || this.state.login.password ===''){
            alert("Input valid username and password");
        }else{
            console.log(this.state.login);
            
        }
    }
    render() {
        
        return (
            <Container>
                <br />
                <Form>
                    <Form.Row>
                    <Form.Group>
                        <Form.Label><img alt="policelogo" className="loginpiclogo" src="indexdoctor.jfif" /></Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="email" name="username" placeholder="Enter email" value={this.state.login.username} onChange={this.inputchange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.login.password} onChange={this.inputchange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.login} >
                            Submit
                        </Button>
                    </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Login;