import React,{Fragment} from 'react';
import giphy from '../../Images/giphy.gif';
import { Spinner } from 'react-bootstrap';

export default Spinner = () => {
    return (
        <Fragment>
            <img src={giphy} style={{width:'200px',margin:'auto',display:'block'}} alt='Loading...'/>
        </Fragment>
    )
}