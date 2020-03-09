import React,{useState} from 'react';
import axios from 'axios';
import {endPoint} from '../../config';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import {searchAuther, getBooks} from '../../actions/booksAction';
import { connect } from 'react-redux';

const  UserNavBar = ({searchAuther,getBooks}) => {
    const [autherName,setAutherName] = useState("");

    // const getAuther = async (value) =>{
    //   // console.log(value);
    //   // const AutherName = value;
    //   // console.log({AutherName});

    //   const body = {
    //     autherName
    //   };

    //   const config = {
    //     headers:{
    //       'Content-Type' : 'application/json'
    //     }
    //   }

    //   try {
    //     setAutherName(value);
    //     // console.log(body);
    //     const res = await axios.post(`${endPoint}/api/book/searchAuther`,body,config);
    //     console.log(res.data);
    //   } catch (err) {
    //     const errors = err.response.data.errors;
    //     console.log(errors);
        
    //   }


    // }
    const onChange = (e) =>{
        setAutherName({...autherName,search:e.target.value});
        console.log(autherName);
        if(autherName.search.length>=3){
          searchAuther(autherName);
        }else{
          getBooks()
        }
       
    }
    //console.log(autherName);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Online-Library</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/book/userviewbooks">ViewBooks</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={onChange} name="search" />
    </Form>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
</Navbar>
    )
}

export default connect(null,{searchAuther,getBooks})(UserNavBar);
