import React,{Fragment,useState} from 'react';
import {userRegister} from '../../actions/authAction';
import {connect} from 'react-redux';


import {Form,Col,Button,Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AlertMessage from '../Layout/AlertMessage';

const  UserRegister = ({userRegister,auth:{isRegister,errors}}) => {
    const [state, setstate] = useState({Fname:'',Lname:'',studentNo:'',nic:'',email:'',telNo:'',mobileNo:'',password:'',comPassword:''});
    const {Fname,Lname,studentNo,nic,email,telNo,mobileNo,password,comPassword} = state;

    const onChange = (e) => {
       setstate({...state,[e.target.name] : e.target.value}) ;
    }

    const onSubmit = (e) => {
        e.preventDefault();
       userRegister(state);
            
        
    }

    if (isRegister) {
        return <Redirect to='/user/login'/>
    }

    return (
        <Fragment>
            {errors && errors.msg && <AlertMessage msg={errors.msg}/>}
             <Card className="userRegisterForm" style={{ width: '40rem', height:'40rem'}}>
                <Card.Body>
                    <Card.Title className="text-center">Register</Card.Title>
                    
                        <Form onSubmit={onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="Fname" value={Fname} onChange={onChange} />
                                <div style={{color:"red"}}>{errors &&  errors.Fname}</div>
                                </Form.Group>
                                
                                <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="Lname" value={Lname} onChange={onChange}/>
                                <div style={{color:"red"}}>{errors &&  errors.Lname}</div>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>Student No</Form.Label>
                                <Form.Control type="text" placeholder="Student No" name="studentNo" value={studentNo} onChange={onChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>NIC</Form.Label>
                                <Form.Control type="text" placeholder="NIC" name="nic" value={nic} onChange={onChange}/>
                                <div style={{color:"red"}}>{errors &&  errors.nic}</div>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
                            </Form.Group>
                            <div style={{color:"red"}}>{errors &&  errors.email}</div>
                            <Form.Row>
                                <Form.Group as={Col} >
                                <Form.Label>Tel No:</Form.Label>
                                <Form.Control type="text" placeholder="Tel" name="telNo" value={telNo} onChange={onChange} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>Mobile No:</Form.Label>
                                <Form.Control type="text" placeholder="Mobile" name="mobileNo" value={mobileNo} onChange={onChange}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
                                <div style={{color:"red"}}>{errors &&  errors.password}</div>
                                </Form.Group>
                                
                                <Form.Group as={Col}>
                                <Form.Label>Comform Password</Form.Label>
                                <Form.Control type="password" placeholder="Comform Password" name="comPassword" value={comPassword} onChange={onChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Button className="mt-5" variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    
                </Card.Body>
            </Card> 
        </Fragment>
    )
}

const mapStateToProps = state => ({
     auth : state.auth
})

export default connect(mapStateToProps,{userRegister})(UserRegister);
