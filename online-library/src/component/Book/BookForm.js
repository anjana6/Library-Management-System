import React from 'react'
import {Form,Col,Button,Card,Row,InputGroup, Container } from 'react-bootstrap';

import AlertMessage from '../Layout/AlertMessage';

const BookForm = ({onChange,onSubmit,state,errors,headerTitle}) => {

    const {bookId,title,autherName,quentity,cost,description,numberOfBooks} = state;

    return (
        <Container>
            {errors && errors.msg && <AlertMessage msg={errors.msg}/>}
            <Card className="m-5">
                <Card.Body>
                    <Card.Title className="text-center">{headerTitle}</Card.Title>
                        <Form onSubmit={onSubmit}>
                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="2">Book Id</Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="BookID" 
                                        name="bookId" 
                                        value={bookId} 
                                        className="w-25" 
                                        onChange={onChange}
                                        />
                                </Col>
                                <div style={{color:"red"}}>{errors &&  errors.bookId}</div>
                            </Form.Group>   
                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="2">Title</Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="BookTitle" 
                                        name="title" 
                                        value={title} 
                                        onChange={onChange}
                                        />
                                </Col>
                                <div style={{color:"red"}}>{errors &&  errors.title}</div>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="2">AutherName</Form.Label>
                                <Col sm="10">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Auther Name" 
                                        name="autherName" 
                                        value={autherName} 
                                        onChange={onChange}
                                        />
                                </Col>
                                <div style={{color:"red"}}>{errors &&  errors.autherName}</div>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>No Of Books</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Number of Books" 
                                    name="numberOfBooks" 
                                    value={numberOfBooks} 
                                    onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quentity</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Quentity" 
                                    name="quentity" 
                                    value={quentity} 
                                    onChange={onChange} 
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                    name="description" 
                                    value={description} 
                                    onChange={onChange}
                                    />
                            </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="2">Book Price</Form.Label>
                                <Col sm="10">
                                    <InputGroup className="w-50">
                                        <InputGroup.Prepend>
                                        <InputGroup.Text>Rs.</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Book Price" 
                                            name="cost" 
                                            value={cost} 
                                            onChange={onChange} 
                                            />
                                    </InputGroup>
                                </Col>
                                <div style={{color:"red"}}>{errors &&  errors.cost}</div>
                            </Form.Group>
                            <Button className="mt-5" variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                </Card.Body>
            </Card>
        </Container>   
    )
}

export default BookForm;
