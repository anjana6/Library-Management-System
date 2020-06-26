import React,{useEffect,Fragment} from 'react'
import { getBooks } from '../../../../actions/booksAction';
import { connect } from 'react-redux';
import ViewItem from './ViewItem';
import UserNavBar from '../../../Layout/UserNavBar';

import {Container,Row,Col} from 'react-bootstrap';

const  UserViewBooks = ({getBooks,book}) => {
     useEffect(() => {
        getBooks();
    }, [getBooks]);
    

    return (
        <Fragment >
            <UserNavBar/>
            <Container>
                {book.length > 0 ?
                    <Row>
                    { book.map(book =>{
                        return (
                            <Col lg={6} key={book._id}>
                                <ViewItem  title={book.title} auther={book.autherName} bookId={book.bookId} description={book.description}/>
                            </Col>    
                        )
                    })}
                    </Row>
                    :
                    <Row>
                        <h1>This Book not Found Here</h1>
                    </Row>
                }
            </Container>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    book: state.book.allBooks
})

export default connect(mapStateToProps,{getBooks})(UserViewBooks);
