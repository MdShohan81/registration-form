import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
  const {user, handleSignOut} = useFirebase();
    return (
        <div>
          <Navbar expand="lg"  bg="dark" variant="dark">
            <Container>
            <Link className="navbar-brand fs-3" to="home">Ellos Shopping</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Link className='nav-link' to="/home">Home</Link>
                <Link className='nav-link' to="/shop">Shop</Link>
                <Link className='nav-link' to="/product">Product</Link>
                <Link className='nav-link' to="/about">About</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
                <Link className='nav-link' to="/registration">Reistration</Link>
                <span className='nav-link'>{user?.displayName && user.displayName}</span>
                {
                  user?.uid ? <button className='sign-out' onClick={handleSignOut}>SignOut</button> : <Link className='nav-link' to="/login">Login</Link>
                }
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
       
    );
};

export default Header;