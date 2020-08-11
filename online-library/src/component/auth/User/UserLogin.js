import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Col,Row,Image,Container,Form,Card,Button} from 'react-bootstrap';

import {userLogin} from '../../../actions/authAction';
import AlertMessage from '../../Layout/AlertMessage';

import users from '../../../Images/users.png'
import { connect } from 'react-redux';


const UserLogin = ({userLogin,auth:{isAuthenticated,errors}}) =>{
    const [state, setState] = useState({email:'',password:''});

    const {email,password} = state;

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        userLogin({email,password});
    }

    if(isAuthenticated){
        return <Redirect to="/book/userviewbooks"/>
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} className="log-image">
                        <Image src={users} style={{height:"60%",width:"60%"}} />
                    </Col>
                    <Col xs={6} className="userLoginForm">
                        {errors && errors.msg && <AlertMessage msg={errors.msg}/>}
                        <Card style={{ width: '25rem' }}>
                            <Card.Body>
                                <Card.Title className="text-center">Login</Card.Title>
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                placeholder="Enter email" 
                                                name="email" 
                                                value={email} 
                                                onChange={onChange} 
                                            />
                                        </Form.Group>
                                        <div style={{color:"red"}}>{errors &&  errors.email}</div>
                                        
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                type="password" 
                                                placeholder="Password" 
                                                name="password" 
                                                value={password} 
                                                onChange={onChange} 
                                            />
                                        </Form.Group>
                                        <div style={{color:"red"}}>{errors &&  errors.password}</div>
                                        <Row className="mt-3">
                                            <Col xs={6}>
                                                <Button variant="primary" type="submit">Login</Button>    
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
    auth:state.auth
})

export default connect(mapStateToProps,{userLogin})(UserLogin);
