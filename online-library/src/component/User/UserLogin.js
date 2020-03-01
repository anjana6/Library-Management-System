import React,{useState} from 'react'
import {Col,Row,Image,Container,Form,Card,Button} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import {userLogin} from '../../actions/authAction';

import users from '../../Images/users.png'
import { connect } from 'react-redux';


const UserLogin = ({userLogin,isAuthenticated}) =>{
    const [state, setState] = useState({email:'',password:''});

    const {email,password} = state;

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        userLogin({email,password});
        console.log(state);
    }

    if(isAuthenticated){
        return <Redirect to="/book/viewbooks"/>
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <Image src={users} style={{height:"60%",width:"60%"}}/>
                    </Col>
                    <Col xs={6} className="userLoginForm">
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title className="text-center">Login</Card.Title>
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onChange} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
                                        </Form.Group>
                                        <Row>
                                            <Col xs={6}>
                                                
                                                <Button variant="primary" type="submit">Submit</Button>
                                                
                                            </Col>
                                            <Col xs={6} className="login">
                                                <Link to='/user/register'>Register Now</Link>
                                            </Col>
                                        </Row>    
                                    </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{userLogin})(UserLogin);
