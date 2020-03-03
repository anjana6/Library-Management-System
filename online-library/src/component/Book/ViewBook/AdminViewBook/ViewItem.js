import React, { Fragment } from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import Buttons from './Buttons';


const ViewItem = ({title,auther,bookId,description,id}) => {
    return (
        <Fragment>
                <Card className="m-3">
                  <Card.Header as="h5">{title.toUpperCase()}</Card.Header>
                  <Row>
                    <Col xs={9}>
                    <Card.Body>
                      <Card.Title>BookId : {bookId}</Card.Title>
                        <Card.Text>AutherName : {auther}</Card.Text>
                        <Card.Text>Description : {description}</Card.Text>
                      </Card.Body>
                    </Col>
                    <Col xs={3}>
                      <Buttons id={id}/>
                    </Col>
                  </Row>
                      
                </Card>   
        </Fragment>
    )
}

export default ViewItem;
