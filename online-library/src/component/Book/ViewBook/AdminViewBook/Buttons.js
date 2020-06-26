import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button,Row} from 'react-bootstrap';

import {deleteBook} from '../../../../actions/booksAction';


const Buttons = ({id,deleteBook}) => {
    return (
        <Fragment>
            
        </Fragment>
    )
}

export default connect(null,{deleteBook})(Buttons);