import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap';

import {searchAuther, getBooks} from '../../actions/booksAction';
import {logOut} from '../../actions/authAction';


const  UserNavBar = ({searchAuther,getBooks,logOut}) => {

    const [autherName,setAutherName] = useState("");

    const onChange = (e) =>{
        setAutherName({...autherName,search:e.target.value});
        autherName.search.length>=3 ? searchAuther(autherName): getBooks()   
    }
    
    return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand ><Link to='/'>Online-Library</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/book/userviewbooks">ViewBooks</Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onChange} name="search" />
              </Form>
              <Nav><Link to="/" onClick={logOut}>LogOut</Link></Nav>  
            </Navbar.Collapse>  
          </Navbar>    
    )
}

export default connect(null,{searchAuther,getBooks,logOut})(UserNavBar);
