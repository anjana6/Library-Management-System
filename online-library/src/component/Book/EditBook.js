import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import {getBook,editBooks} from '../../actions/booksAction';
import BookForm from './BookForm';

const  EditBooks = ({match,getBook,editBooks,book:{editdetail,book,errors,isBookAdd}}) => {

    const [state, setState] = useState({bookId:'',title:'',autherName:'',quentity:'',cost:'',description:'',numberOfBooks:''});
    const Id = match.params.id;

    useEffect(() => {
        getBook(match.params.id);
        setDetails()    
    }, [getBook,match.params.id,editdetail]);

    const setDetails = () => {
        setState({
            bookId:editdetail || !book ? '' : book.bookId,
            title: editdetail || !book? '' : book.title,
            autherName: editdetail|| !book ? '' : book.autherName ,
            quentity: editdetail ||  !book.quentity? '': book.quentity,
            cost: editdetail || !book? '': book.cost,
            description: editdetail ||!book.description? '' : book.description,
            numberOfBooks: editdetail || !book.numberOfBooks? '' : book.numberOfBooks
        })
      }
  
    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editBooks(Id,state);  
    }

    if(isBookAdd){
        return <Redirect to='/book/adminviewbooks'/>
    }

    return (
        <BookForm 
            onChange={onChange} 
            onSubmit={onSubmit} 
            state={state} 
            errors={errors}
            headerTitle="EDIT BOOK"
            />  
    )
}

const mapStateToProps = state =>({
    book: state.book
});

export default connect(mapStateToProps,{getBook,editBooks})(EditBooks);
