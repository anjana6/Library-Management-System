import React,{useState} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addBooks } from '../../actions/booksAction';
import BookForm from './BookForm';

const  AddBooks = ({addBooks,book:{isBookAdd,errors}}) => {

    const [state, setState] = useState({bookId:'',title:'',autherName:'',quentity:'',cost:'',description:'',numberOfBooks:''});

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addBooks(state);
    }

    if(isBookAdd){
        return <Redirect to='/book/adminviewbooks'/>
    }

    return (
        <BookForm 
            state={state} 
            onChange={onChange} 
            onSubmit={onSubmit} 
            errors={errors}
            headerTitle="ADD BOOK"
            />
    )
}

const mapStateToProps = state => ({
    book : state.book
});

export default connect(mapStateToProps,{addBooks})(AddBooks);
