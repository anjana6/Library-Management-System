import React from 'react';
import {Alert} from  'react-bootstrap';

const AlertMessage = ({msg}) => {
    return (
        <Alert  variant='danger'>
            {msg}
        </Alert>
    )
}

export default AlertMessage;
