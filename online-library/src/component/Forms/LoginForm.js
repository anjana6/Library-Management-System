import React from 'react';
import {Link} from 'react-router-dom';
import {Form,Card,Button,Col,Row} from 'react-bootstrap';


const LoginForm = () =>{
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col xs={6}>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                                <Col xs={6} className="login">
                                    <Link to='/user/register'>Register Now</Link>
                                </Col>
                            </Row>
                            
                        </Form>
                    </Card.Text>
                    
                   
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default LoginForm
