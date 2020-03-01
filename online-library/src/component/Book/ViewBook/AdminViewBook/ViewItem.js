import React, { Fragment } from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import Buttons from './Buttons';


const ViewItem = ({title,auther,bookId,description}) => {
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
                      <Buttons/>
                    </Col>
                  </Row>
                      
                </Card>
               
                {/* <Col>
                <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
                </Col> */}
           
        </Fragment>
    )
}

export default ViewItem;
