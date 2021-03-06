import React from 'react';
import {Link} from 'react-router-dom'
import {Container,Row,Col,Image,Card} from 'react-bootstrap';

import admin from '../../Images/admin1.png'
import users from '../../Images/users.png'

const Home = () =>{
    return (
        <div className="home">
            <div className="img-content">
                <Container>
                    <Row>
                        <Col xs={6}>
                            <Card className="text-center card-admin" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Adimn</Card.Title>
                                    <Link to='/admin/login'><Image src={admin} style={{height:"60%",width:"60%"}}/></Link>    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6}>
                            <Card className="text-center card-user " style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>User</Card.Title>
                                    <Link to='/user/login'><Image src={users} style={{height:"60%",width:"60%"}}/></Link>    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>    
        </div>
    )
}

export default Home
