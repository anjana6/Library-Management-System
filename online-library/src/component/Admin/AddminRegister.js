import React, { Fragment,useState } from 'react';
import {adminRegister} from '../../actions/authAction';
import {Form,Col,Button,Card, Container } from 'react-bootstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const  AdminRegister = ({adminRegister,isRegister}) => {

    const [state, setstate] = useState({name:'',email:'',nic:'',mobileNo:'',password:'',comPassword:''});

    const {name,nic,email,mobileNo,password,comPassword} = state;

    const onChange = (e) => {
       setstate({...state,[e.target.name] : e.target.value}) ;
    //    console.log(state);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== comPassword){
            console.log("password wrong");

        }else{
            adminRegister({name,nic,email,mobileNo,password});
            
        }

    }

    if (isRegister) {
        return <Redirect to='/admin/login'/>
    }
    return (
        <Fragment>
            <Container>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">Register</Card.Title>
                    
                        <Form onSubmit={onSubmit}>
                                <Form.Group >
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" name="name" onChange={onChange}/>
                                </Form.Group>
                            <Form.Group >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" onChange={onChange}/>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label>NIC</Form.Label>
                                <Form.Control type="text" placeholder="NIC" name="nic" onChange={onChange} />
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
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Comform Password</Form.Label>
                                <Form.Control type="password" placeholder="Comform Password" name="comPassword" onChange={onChange}/>
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
    isRegister : state.auth.isRegister
})

export default connect(mapStateToProps,{adminRegister})(AdminRegister);
