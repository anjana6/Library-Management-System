import React, { Fragment } from 'react';
import {Button,Row} from 'react-bootstrap';

const Buttons = () => {
    return (
        <Fragment>
            <Row>
                <Button variant="primary" className="m-3">EDIT</Button>
                <Button variant="danger" className="m-3">DELETE</Button>
            </Row>
        </Fragment>
    )
}

export default Buttons;