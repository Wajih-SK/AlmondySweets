import React from 'react';
import './footer.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
        return ( 
            <Navbar style={{ backgroundColor: '#F7F1D0', height: '60px'}} data-bs-theme="light" sticky="top" >
                <Container>
                <Navbar.Brand href="/">Almondy Sweets</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Gallery">Gallery</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
         );
    }
 
export default CustomNavbar;