import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Card,Row,Col,Button} from 'react-bootstrap';


import {deleteBook} from '../../../../actions/booksAction';


const ViewItem = ({title,auther,bookId,description,id,numberofbook,priceofonebook,deleteBook}) => {
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
                    <Card.Text>Number of Books : {numberofbook}</Card.Text>
                    <Card.Text>Price of Book:Rs {priceofonebook}</Card.Text>
                  </Card.Body>
              </Col>
              <Col xs={3}>
              <Row>
                <Link to={`/book/edit/${id}`}><Button variant="primary" className="m-3">EDIT</Button></Link>
                
                <Button onClick={(e) => deleteBook(id)} variant="danger" className="m-3">DELETE</Button>
            </Row>
              </Col>
            </Row>      
          </Card>   
        </Fragment>
    )
}

export default connect(null,{deleteBook})(ViewItem);
