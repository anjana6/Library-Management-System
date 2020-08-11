import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Navbar,Nav} from 'react-bootstrap';

import {logOut} from '../../actions/authAction';


const  AdminNavBar = ({logOut}) => {
    return (
        
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link to='/'>Online-Library</Link></Navbar.Brand>
            <Nav className="mr-auto">
            <Link to="/book/adminviewbooks">ViewBook</Link>
            </Nav>
            <Nav ><Link to="/admin/register">SingUp</Link></Nav>
            <Nav className="ml-3"><Link to="/" onClick={logOut}>Logout</Link></Nav>
        </Navbar>
        
    )
}

export default connect(null,{logOut})(AdminNavBar);
