import React,{useEffect,Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {Container,Row,Col, Button} from 'react-bootstrap';

import { getBooks } from '../../../../actions/booksAction';
import ViewItem from './ViewItem';
import AdminNavBar from '../../../Layout/AdminNavBar';
import Search from '../../../Layout/Search';

const  AdminViewBooks = ({getBooks,book}) => {

     useEffect(() => {
        getBooks();
    }, [getBooks]);
    
    return (
        <Fragment >
            <AdminNavBar/>
            <Search/>
            <Container>
                <Row>
                    <Link to='/book/addbook' className="addbutton">
                        <Button className="m-3"  variant="success">ADD BOOK</Button>
                    </Link>
                </Row>
                {book.length >0 ?
                    <Row>
                    { book.map(book =>{
                        return (
                            
                            <Col lg={6} key={book._id}>
                                <ViewItem  
                                    id={book._id} 
                                    title={book.title} 
                                    auther={book.autherName} 
                                    bookId={book.bookId} 
                                    description={book.description}
                                    numberofbook={book.numberOfBooks}
                                    priceofonebook={book.cost}
                                    />
                            </Col>

                        )
                    })}
                    </Row>
                    : 
                    <Row>
                        <h1>This book is not found</h1>
                    </Row>
                }       
            </Container>  
         </Fragment>
    )
}

const mapStateToProps = state => ({
    book: state.book.allBooks
});

export default connect(mapStateToProps,{getBooks})(AdminViewBooks);
