import React from 'react';

import {Form,Col,Button,Card } from 'react-bootstrap';

const  UserRegister = () => {
    return (
        <div>
            <Card className="userRegisterForm" style={{ width: '40rem', height:'40rem'}}>
                <Card.Body>
                    <Card.Title className="text-center">Register</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Label>Student No</Form.Label>
                                <Form.Control type="text" placeholder="Student No" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>NIC</Form.Label>
                                <Form.Control type="text" placeholder="NIC" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1" className="w-25">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Tel No:</Form.Label>
                                <Form.Control type="number" placeholder="Tel" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Mobile No:</Form.Label>
                                <Form.Control type="number" placeholder="Mobile" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Comform Password</Form.Label>
                                <Form.Control type="password" placeholder="Comform Password" />
                                </Form.Group>
                            </Form.Row>
                            <Button className="mt-5" variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserRegister;
