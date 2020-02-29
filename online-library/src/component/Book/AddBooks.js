import React,{useState} from 'react';

import {Form,Col,Button,Card,Row,InputGroup } from 'react-bootstrap';



const  AddBooks = () => {

    const [state, setState] = useState({bookId:'',title:'',autherName:'',quentity:'',cost:'',description:'',numberOfBooks:''});

    const {bookId,title,autherName,quentity,cost,description,numberOfBooks} = state;

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log(state);
    }
    return (
        <div>
            <Card className="userRegisterForm" style={{ width: '50rem', height:'40rem'}}>
                <Card.Body>
                    <Card.Title className="text-center">ADD BOOK</Card.Title>
                        <Form onSubmit={onSubmit}>
                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">Book Id</Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="BookID" name="bookId" value={bookId} className="w-25" onChange={onChange}/>
                            </Col>
                        </Form.Group>   
                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">Title</Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="BookTitle" name="title" value={title} onChange={onChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextPassword" >
                            <Form.Label column sm="2">AutherName</Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Auther Name" name="autherName" value={autherName} onChange={onChange}/>
                            </Col>
                        </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>No OF Books</Form.Label>
                                <Form.Control type="number" placeholder="Number of Books" name="numberOfBooks" value={numberOfBooks} onChange={onChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quentity</Form.Label>
                                <Form.Control type="number" placeholder="Quentity" name="quentity" value={quentity} onChange={onChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" name="description" value={description}/>
                            </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword" >
                                <Form.Label column sm="2">Book Price</Form.Label>
                                <Col sm="10">
                                <InputGroup className="w-50">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">Rs.</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="text" placeholder="Book Price" name="cost" value={cost} onChange={onChange} />
                                </InputGroup>
                                </Col>
                            </Form.Group>
                            <Button className="mt-5" variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddBooks;
