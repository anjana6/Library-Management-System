import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Form,Col,Button,Card,Row,InputGroup, Container } from 'react-bootstrap';

import {getBook,editBooks} from '../../../actions/booksAction';
import NewForm from '../AddBook/NewForm';




const  EditBooks = ({match,getBook,editBooks,book:{editdetail,book}}) => {
    const history = useHistory();
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
  
    const {bookId,title,autherName,quentity,cost,description,numberOfBooks} = state;

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editBooks(Id,state);
        history.push('/book/adminviewbooks');
        
    }
    return (
        <NewForm onChange={onChange} onSubmit={onSubmit} state={state}/>
        // <div>
        //     <Container>
        //     <Card className="m-5">
        //         <Card.Body>
        //             <Card.Title className="text-center">Edit BOOK Details</Card.Title>
        //                 <Form onSubmit={onSubmit}>
        //                     <Form.Group as={Row} controlId="formPlaintextPassword" >
        //                         <Form.Label column sm="2">Book Id</Form.Label>
        //                         <Col sm="10">
        //                             <Form.Control 
        //                             type="text" 
        //                             placeholder="BookID" 
        //                             name="bookId" 
        //                             value={bookId} 
        //                             className="w-25" 
        //                             onChange={onChange}
        //                             />
        //                         </Col>
        //                     </Form.Group>   
        //                     <Form.Group as={Row} controlId="formPlaintextPassword" >
        //                         <Form.Label column sm="2">Title</Form.Label>
        //                         <Col sm="10">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="BookTitle" 
        //                                 name="title" 
        //                                 value={title} 
        //                                 onChange={onChange}
        //                                 />
        //                         </Col>
        //                     </Form.Group>
        //                     <Form.Group as={Row} controlId="formPlaintextPassword" >
        //                         <Form.Label column sm="2">AutherName</Form.Label>
        //                         <Col sm="10">
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Auther Name" 
        //                                 name="autherName" 
        //                                 value={autherName} 
        //                                 onChange={onChange}
        //                                 />
        //                         </Col>
        //                     </Form.Group>

        //                         <Form.Row>
        //                             <Form.Group as={Col} controlId="formGridEmail">
        //                             <Form.Label>No OF Books</Form.Label>
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Number of Books" 
        //                                 name="numberOfBooks" 
        //                                 value={numberOfBooks} 
        //                                 onChange={onChange}
        //                                 />
        //                             </Form.Group>

        //                             <Form.Group as={Col} controlId="formGridPassword">
        //                             <Form.Label>Quentity</Form.Label>
        //                             <Form.Control 
        //                                 type="text" 
        //                                 placeholder="Quentity" 
        //                                 name="quentity" 
        //                                 value={quentity} 
        //                                 onChange={onChange} 
        //                                 />
        //                             </Form.Group>
        //                         </Form.Row>
        //                         <Form.Group controlId="exampleForm.ControlTextarea1">
        //                             <Form.Label>Description</Form.Label>
        //                             <Form.Control 
        //                                 as="textarea" 
        //                                 rows="3" 
        //                                 name="description" 
        //                                 value={description} 
        //                                 onChange={onChange}
        //                                 />
        //                         </Form.Group>
        //                             <Form.Group as={Row} controlId="formPlaintextPassword" >
        //                             <Form.Label column sm="2">Book Price</Form.Label>
        //                             <Col sm="10">
        //                                 <InputGroup className="w-50">
        //                                     <InputGroup.Prepend>
        //                                         <InputGroup.Text id="inputGroupPrepend">Rs.</InputGroup.Text>
        //                                     </InputGroup.Prepend>
        //                                     <Form.Control 
        //                                         type="text" 
        //                                         placeholder="Book Price" 
        //                                         name="cost" 
        //                                         value={cost} 
        //                                         onChange={onChange} 
        //                                         />
        //                                 </InputGroup>
        //                             </Col>
        //                         </Form.Group>
        //                         <Button className="mt-5" variant="primary" type="submit" block>
        //                             Submit
        //                         </Button>
        //                 </Form>
        //         </Card.Body>
        //     </Card>
        //     </Container>
           // </div>
       
    )
}

const mapStateToProps = state =>({
    book: state.book
})


export default connect(mapStateToProps,{getBook,editBooks})(EditBooks);
