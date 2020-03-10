import React, { Fragment } from 'react';
import {Button,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {deleteBook} from '../../../../actions/booksAction';
import {connect} from 'react-redux';

const Buttons = ({id,deleteBook}) => {
    return (
        <Fragment>
            <Row>
                <Link to={`/book/edit/${id}`}><Button variant="primary" className="m-3">EDIT</Button></Link>
                {/* <Link to={`/book/delete/${id}`}><Button variant="danger" className="m-3">DELETE</Button></Link> */}
                <Button onClick={(e) => deleteBook(id)} variant="danger" className="m-3">DELETE</Button>
            </Row>
        </Fragment>
    )
}

export default connect(null,{deleteBook})(Buttons);