import React,{useEffect,Fragment} from 'react'
import { getBooks } from '../../../../actions/booksAction';
import { connect } from 'react-redux';
import ViewItem from './ViewItem';

import {Container,Row,Col} from 'react-bootstrap';

const  UserViewBooks = ({getBooks,book}) => {
     useEffect(() => {
        getBooks();
    }, [getBooks]);

    console.log(book);
// if(book.books)
   
//     {book.books.map(book => {
//         return (
//             console.log(book.title)
//         )
//     })}
    

    return (
        
        <Fragment >
            <Container>
                <Row>
                    {book.books && book.books.map(book =>{
                    return (
                        <Col lg={6} key={book._id}>
                            <ViewItem  title={book.title} auther={book.autherName} bookId={book.bookId} description={book.description}/>
                        </Col>    
                    )
                })}
                </Row>
            </Container>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    book: state.book.allBooks
})

export default connect(mapStateToProps,{getBooks})(UserViewBooks);
