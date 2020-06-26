import React,{useState} from 'react';
import {Container,Row,Col,Image,Card,Form,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import admin from '../../Images/admin.png';
import {adminLogin} from '../../actions/authAction';
import {Redirect} from 'react-router-dom';
import AlertMessage from '../Layout/AlertMessage';

const  AdminLogin = ({adminLogin,auth:{isAuthenticated,errors}}) => {

    const [state, setState] = useState({email:'',password:''});

    const {email,password} = state;

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        adminLogin({email,password});
        //console.log(state);
    };
    
    if(isAuthenticated){
        return <Redirect to='/book/adminviewbooks'/>
        
    }

    return (
        <div>
             <Container>
                <Row>
                    <Col xs={6}>
                        <Image src={admin} style={{height:"60%",width:"60%"}}/>
                    </Col>
                    <Col xs={6} className="adminLoginForm">
                        {errors && errors.msg && <AlertMessage msg={errors.msg}/>}
                    <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title className="text-center">Login</Card.Title>
                                    <Form onSubmit={onSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={onChange} />
                                            <div style={{color:'red'}}>{errors && errors.email}</div>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
                                            <div style={{color:'red'}}>{errors && errors.password}</div>
                                        </Form.Group>
                                        <Row>
                                            <Col xs={6}>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
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

const mapStateToProps = state =>({
    auth : state.auth
})

export default connect(mapStateToProps,{adminLogin})(AdminLogin);
