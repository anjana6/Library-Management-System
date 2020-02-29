import React,{useEffect} from 'react'
import { getBooks } from '../../actions/booksAction';
import { connect } from 'react-redux';

const  ViewBooks = ({getBooks}) => {
     useEffect(() => {
        getBooks();
    }, [getBooks]);

    return (
        <div>
            view
        </div>
    )
}

export default connect(null,{getBooks})(ViewBooks);
