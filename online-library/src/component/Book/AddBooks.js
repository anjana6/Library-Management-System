import React from 'react';

import {Form,Col,Button,Card,Row,InputGroup } from 'react-bootstrap';

const  AddBooks = () => {
    return (
        <div>
            <Card className="userRegisterForm" style={{ width: '50rem', height:'40rem'}}>
                <Card.Body>
                    <Card.Title className="text-center">ADD BOOK</Card.Title>
                    <Card.Text>
                        <Form>
                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">Book Id</Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="BookID" className="w-25" />
                            </Col>
                        </Form.Group>   
                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">Title</Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="BookTitle"/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">AutherName</Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Auther Name"/>
                            </Col>
                        </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>No OF Books</Form.Label>
                                <Form.Control type="number" placeholder="Number of Books" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quentity</Form.Label>
                                <Form.Control type="number" placeholder="Quentity" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="2">Book Price</Form.Label>
                                <Col sm="10">
                                <InputGroup className="w-50">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="text" placeholder="Book Price"  />
                                </InputGroup>
                                </Col>
                            </Form.Group>
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

export default AddBooks;
