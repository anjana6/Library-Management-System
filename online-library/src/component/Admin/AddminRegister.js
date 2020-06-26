import React, { Fragment,useState } from 'react';
import {adminRegister} from '../../actions/authAction';
import {Form,Col,Button,Card, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import AlertMessage from '../Layout/AlertMessage';

const  AdminRegister = ({adminRegister,auth:{isRegister,errors}}) => {

    const [state, setstate] = useState({name:'',email:'',nic:'',mobileNo:'',password:'',comPassword:''});

    const {name,nic,email,mobileNo,password,comPassword} = state;

    const onChange = (e) => {
       setstate({...state,[e.target.name] : e.target.value}) ;
    //    console.log(state);
    }

    const onSubmit = (e) => {
        e.preventDefault();
       
            adminRegister({name,nic,email,mobileNo,password,comPassword});
            
    

    }

    if (isRegister) {
        return <Redirect to='/admin/login'/>
    }
    return (
        <Fragment>
            <Container>
                {errors && errors.msg && <AlertMessage msg={errors.msg}/>}
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">Register</Card.Title>
                    
                        <Form onSubmit={onSubmit}>
                                <Form.Group >
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" name="name" onChange={onChange}/>
                                <div style={{color:'red'}}>{errors && errors.name}</div>
                                </Form.Group>
                            <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" onChange={onChange}/>
                                <div style={{color:'red'}}>{errors && errors.email}</div>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label>NIC</Form.Label>
                                <Form.Control type="text" placeholder="NIC" name="nic" onChange={onChange} />
                                <div style={{color:'red'}}>{errors && errors.nic}</div>
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>Mobile No</Form.Label>
                                <Form.Control type="text" placeholder="Mobile No" name="mobileNo" onChange={onChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={onChange}/>
                                <div style={{color:'red'}}>{errors && errors.password}</div>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Comform Password</Form.Label>
                                <Form.Control type="password" placeholder="Comform Password" name="comPassword" onChange={onChange}/>
                                <div style={{color:'red'}}>{errors && errors.comPassword}</div>
                                </Form.Group>
                            </Form.Row>
                            <Button className="mt-5" variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    
                </Card.Body>
            </Card>
            </Container>
            
        </Fragment>
    )
}

const mapStateToProps = state =>({
    auth : state.auth
})

export default connect(mapStateToProps,{adminRegister})(AdminRegister);
