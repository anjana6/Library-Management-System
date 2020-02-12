import React from 'react'
import LoginForm from '../Forms/LoginForm';
import {Col,Row,Image,Container} from 'react-bootstrap';
import users from '../../Images/users.png'


const UserHomePage = () =>{
    return (
        <div>
            <Container>
                <Row>
                <Col xs={6}>
                    <Image src={users} style={{height:"60%",width:"60%"}}/>
                </Col>
                <Col xs={6} className="login">
                  <LoginForm/>
                </Col>
                </Row>
                </Container>
        </div>
    )
}

export default UserHomePage
