import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary"  bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">React Routers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
                <div className="NavLinks">
                <NavLink className="NavBar-links" to="/">Home</NavLink>
                <NavLink  className="NavBar-links" to="/about">About Us</NavLink> 
                 <NavLink  className="NavBar-links" to="/contact">Contact Us</NavLink>
                 <NavLink  className="NavBar-links" to="/register">Register</NavLink>
                 <NavLink  className="NavBar-links" to="/apitech">Api</NavLink>
                 </div>
    
                        {/* <ul>
                            <li>
                                <NavLink 
                                to="/" >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/contact">
                                    Contact Us
                                </NavLink>
                            </li>

                        </ul> */}

                        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"    className="me-2">Search</Button>
          </Form>



                        
      </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </>
  )
}

export default Header
