import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <Navbar expand="lg"  bg="dark" variant="dark">
            <Container>
            <Link className="navbar-brand" to="home">React-Bootstrap</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Link className='nav-link' to="/home">Home</Link>
                <Link className='nav-link' to="/shop">Shop</Link>
                <Link className='nav-link' to="/product">Product</Link>
                <Link className='nav-link' to="/about">About</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
                <Link className='nav-link' to="/login">Login</Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
       
    );
};

export default Header;