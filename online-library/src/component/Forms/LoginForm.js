import React from 'react';
import {Form,Card,Button} from 'react-bootstrap';

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
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default LoginForm
