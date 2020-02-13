import React from 'react'

const AddBooks = () =>{
    return (
        <div>
             <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Row>
                                <Col xs={6}>
                                </Col>
                                <Col xs={6} className="login">
                                </Col>
                            </Row>
                            
                        </Form>
                    </Card.Text>  
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddBooks;