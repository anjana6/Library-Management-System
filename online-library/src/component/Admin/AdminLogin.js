import React from 'react';
import LoginForm from '../Forms/LoginForm';
import {Container,Row,Col,Image} from 'react-bootstrap';
import admin from '../../Images/admin.png';

const  AdminLogin = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col xs={6}>
                        <Image src={admin} style={{height:"60%",width:"60%"}}/>
                    </Col>
                    <Col xs={6} className="adminLoginForm">
                        <LoginForm/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminLogin;
