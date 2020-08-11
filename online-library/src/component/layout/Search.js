import React,{useState} from 'react';
import {Form,FormControl,Navbar} from 'react-bootstrap';
import {searchBookId,getBooks} from '../../actions/booksAction';
import {connect} from 'react-redux';


const Search = ({searchBookId,getBooks}) => {

    const [bookId,setBookId] = useState("");

    const onChange = (e) =>{
        setBookId({...bookId,search:e.target.value});
        bookId.search.length>=2 ? searchBookId(bookId): getBooks();   
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onChange} name="search" />
                </Form>  
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect(null,{searchBookId,getBooks})(Search);
