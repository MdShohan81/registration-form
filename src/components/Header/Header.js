import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';
import './Header.css';

const auth = getAuth(app)

const Header = () => {
  const [user] = useAuthState(auth)
    return (
        <div>
          <Navbar expand="lg"  bg="dark" variant="dark">
            <Container>
            <Link className="navbar-brand fs-3" to="/">Ellos Shopping</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/shop">Shop</Link>
                <Link className='nav-link' to="/product">Product</Link>
                <Link className='nav-link' to="/about">About</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
                <Link className='nav-link' to="/registration">Reistration</Link>
                <span className='nav-link'>{user?.displayName && user.displayName}</span>
                {
                  user?.uid ? <button className='sign-out' onClick={() =>signOut(auth)}>SignOut</button> : <Link className='nav-link' to="/login">Login</Link>
                }
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
       
    );
};

export default Header;