import React,{useEffect,Fragment} from 'react'
import { getBooks } from '../../../../actions/booksAction';
import { connect } from 'react-redux';
import ViewItem from './ViewItem';

import {Container} from 'react-bootstrap';

const  ViewBooks = ({getBooks,book}) => {
     useEffect(() => {
        getBooks();
    }, [getBooks]);
if(book.books)
   
    {book.books.map(book => {
        return (
            console.log(book.title)
        )
    })}
    

    return (
        // <div><ViewItem/></div>
        <Fragment >
            <Container>
                    {book.books && book.books.map(book =>{
                return (
                    <ViewItem key={book._id} title={book.title} auther={book.autherName} bookId={book.bookId} description={book.description}/>
                )
            })}
            </Container>
           
            
         </Fragment>
       
       
            

    )
}
const mapStateToProps = state => ({
    book: state.book
})

export default connect(mapStateToProps,{getBooks})(ViewBooks);
