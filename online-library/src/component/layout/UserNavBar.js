import React,{useState} from 'react';
import axios from 'axios';
import {endPoint} from '../../config';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

const  UserNavBar = () => {
    const [autherName,setAutherName] = useState("");

    const getAuther = async (value) =>{
      // console.log(value);
      // const AutherName = value;
      // console.log({AutherName});

      const body = {
        autherName
      };

      const config = {
        headers:{
          'Content-Type' : 'application/json'
        }
      }

      try {
        setAutherName(value);
        // console.log(body);
        const res = await axios.post(`${endPoint}/api/book/searchAuther`,body,config);
        console.log(res.data);
      } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
        
      }


    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Online-Library</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/book/userviewbooks">ViewBooks</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => getAuther(e.target.value)} />
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

export default UserNavBar;
