import React, { Fragment } from 'react';
import {Button,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Buttons = ({id}) => {
    return (
        <Fragment>
            <Row>
                <Link to={`/book/edit/${id}`}><Button variant="primary" className="m-3">EDIT</Button></Link>
                <Link to={`/book/delete/${id}`}><Button variant="danger" className="m-3">DELETE</Button></Link>
            </Row>
        </Fragment>
    )
}

export default Buttons;