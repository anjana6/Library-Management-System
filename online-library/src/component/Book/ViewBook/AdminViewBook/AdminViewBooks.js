import React,{useEffect,Fragment} from 'react'
import { getBooks } from '../../../../actions/booksAction';
import { connect } from 'react-redux';
import ViewItem from './ViewItem';
import {Link} from 'react-router-dom';
import {Container,Row,Col, Button} from 'react-bootstrap';

const  AdminViewBooks = ({getBooks,book}) => {
     useEffect(() => {
        getBooks();
    }, [getBooks]);
// if(book.books)
   
//     {book.books.map(book => {
//         return (
//             console.log(book.title)
//         )
//     })}
    

    return (
        // <div><ViewItem/></div>
        <Fragment >
            <Container>
                <Row>
                    <Link to='/book/addbook' className="addbutton"><Button className="m-3"  variant="success">ADD BOOK</Button></Link>
                </Row>
                <Row>
                {book.books && book.books.map(book =>{
                return (
                    <Col lg={6} key={book._id}>
                        <ViewItem  id={book._id} title={book.title} auther={book.autherName} bookId={book.bookId} description={book.description}/>
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

export default connect(mapStateToProps,{getBooks})(AdminViewBooks);
