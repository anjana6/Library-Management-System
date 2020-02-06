import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import admin from '../../Images/admin.png'
import users from '../../Images/users.png'



const Home = () =>{
    return (
        <div className="home">
            <Container>
            <Row>
            <Col xs={6}><Image src={admin} style={{height:"60%"}}/>
            <h1 class="text-white">Admin</h1>
            </Col>
            <Col xs={6}><Image src={users} style={{height:"60%"}}/>
            <h1 class="text-white center">Admin</h1>
            </Col>
            </Row>
            </Container>
         
        </div>
    )
}

export default Home
