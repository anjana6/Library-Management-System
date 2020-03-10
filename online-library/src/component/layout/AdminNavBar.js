import React from 'react';
import {Navbar,Nav,} from 'react-bootstrap';
import {logOut} from '../../actions/authAction';
import {Link} from 'react-router-dom';

const  AdminNavBar = () => {
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

export default AdminNavBar;
