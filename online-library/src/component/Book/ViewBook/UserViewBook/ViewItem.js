import React, { Fragment } from 'react';
import {Card} from 'react-bootstrap';

const ViewItem = ({title,auther,bookId,description}) => {
    return (
        <Fragment>
          
          <Card className="m-3">
            <Card.Header as="h5">{title.toUpperCase()}</Card.Header>
              <Card.Body>
                <Card.Title>BookId : {bookId}</Card.Title>
                <Card.Text>AutherName : {auther}</Card.Text>
                <Card.Text>Description : {description}</Card.Text>
              </Card.Body>      
          </Card>
           
        </Fragment>
    )
}

export default ViewItem;
